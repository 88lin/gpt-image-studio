//! 应用与命令行之间的命名管道 `\\.\pipe\gpt-image-studio-cli-<当前用户 SID>`：
//! 每个实例都只授予当前用户（SDDL `O:<SID>D:P(A;;GA;;;<SID>)`）并拒绝远程客户端；
//! 应用以第一个实例的方式创建，名字被占用时不启动；命令行打开后核对服务端进程属于当前用户，
//! 防止别的用户抢先创建同名管道骗取提示词和 API Key
use std::ffi::c_void;
use std::io::{self, ErrorKind};
use std::os::windows::ffi::OsStrExt;
use std::os::windows::io::AsRawHandle;
use std::ptr::null_mut;
use std::time::{Duration, Instant};

use tokio::net::windows::named_pipe::{ClientOptions, NamedPipeClient, NamedPipeServer, ServerOptions};
use windows_sys::Win32::Foundation::{CloseHandle, LocalFree, ERROR_PIPE_BUSY, HANDLE};
use windows_sys::Win32::Security::Authorization::{
    ConvertSidToStringSidW, ConvertStringSecurityDescriptorToSecurityDescriptorW, SDDL_REVISION_1,
};
use windows_sys::Win32::Security::{
    EqualSid, GetTokenInformation, TokenUser, PSECURITY_DESCRIPTOR, PSID, SECURITY_ATTRIBUTES, TOKEN_QUERY, TOKEN_USER,
};
use windows_sys::Win32::System::Pipes::GetNamedPipeServerProcessId;
use windows_sys::Win32::System::Threading::{
    GetCurrentProcess, OpenProcess, OpenProcessToken, PROCESS_QUERY_LIMITED_INFORMATION,
};
use windows_sys::core::PWSTR;

/// 进程令牌中的 TOKEN_USER；process 由调用方负责关闭
fn token_user(process: HANDLE) -> io::Result<Vec<u64>> {
    let mut token: HANDLE = null_mut();
    // SAFETY: process 是有效的进程句柄（或当前进程的伪句柄）；token 是输出参数，成功时得到需要关闭的句柄
    if unsafe { OpenProcessToken(process, TOKEN_QUERY, &mut token) } == 0 {
        return Err(io::Error::last_os_error());
    }
    let mut len = 0u32;
    // SAFETY: 传空缓冲区只为取得所需长度，这次调用按约定返回失败，不写缓冲区
    unsafe { GetTokenInformation(token, TokenUser, null_mut(), 0, &mut len) };
    // 用 u64 作缓冲区元素，保证 TOKEN_USER 的对齐
    let mut buf = vec![0u64; (len as usize).div_ceil(8)];
    // SAFETY: buf 至少有 len 字节且对齐满足 TOKEN_USER；token 是上面打开的有效句柄
    let ok = unsafe { GetTokenInformation(token, TokenUser, buf.as_mut_ptr().cast(), len, &mut len) };
    let err = io::Error::last_os_error();
    // SAFETY: token 是上面打开的有效句柄，之后不再使用
    unsafe { CloseHandle(token) };
    if ok == 0 {
        return Err(err);
    }
    Ok(buf)
}

/// buf 必须来自 `token_user`
fn sid_of(buf: &[u64]) -> PSID {
    // SAFETY: token_user 成功时 buf 开头是 TOKEN_USER，其中的 SID 指针指向 buf 内部，随 buf 存活
    unsafe { (*buf.as_ptr().cast::<TOKEN_USER>()).User.Sid }
}

fn current_user() -> io::Result<Vec<u64>> {
    // SAFETY: GetCurrentProcess 返回的伪句柄总是有效，不需要关闭
    token_user(unsafe { GetCurrentProcess() })
}

fn user_sid() -> io::Result<String> {
    let user = current_user()?;
    let mut text: PWSTR = null_mut();
    // SAFETY: SID 有效（user 存活）；text 是输出参数，成功时由系统用 LocalAlloc 分配
    if unsafe { ConvertSidToStringSidW(sid_of(&user), &mut text) } == 0 {
        return Err(io::Error::last_os_error());
    }
    // SAFETY: text 是以 0 结尾的 UTF-16 字符串，读完后用 LocalFree 释放且不再使用
    let sid = unsafe {
        let len = (0..).take_while(|&i| *text.add(i) != 0).count();
        let sid = String::from_utf16_lossy(std::slice::from_raw_parts(text, len));
        LocalFree(text.cast());
        sid
    };
    Ok(sid)
}

pub fn name() -> io::Result<String> {
    Ok(format!(r"\\.\pipe\gpt-image-studio-cli-{}", user_sid()?))
}

/// 只允许当前用户访问的安全描述符（`P` 表示不继承上级的权限）
struct Security {
    attrs: SECURITY_ATTRIBUTES,
}

// SAFETY: 安全描述符是本结构独占的一块堆内存，创建后只被系统调用读取，不会被修改，可以跨线程共享
unsafe impl Send for Security {}
// SAFETY: 同上
unsafe impl Sync for Security {}

impl Security {
    fn current_user() -> io::Result<Self> {
        let sddl: Vec<u16> = std::ffi::OsStr::new(&format!("O:{sid}D:P(A;;GA;;;{sid})", sid = user_sid()?))
            .encode_wide()
            .chain(Some(0))
            .collect();
        let mut sd: PSECURITY_DESCRIPTOR = null_mut();
        // SAFETY: sddl 是以 0 结尾的 UTF-16 字符串；sd 是输出参数，由系统用 LocalAlloc 分配，在 Drop 中释放
        let ok = unsafe {
            ConvertStringSecurityDescriptorToSecurityDescriptorW(sddl.as_ptr(), SDDL_REVISION_1, &mut sd, null_mut())
        };
        if ok == 0 {
            return Err(io::Error::last_os_error());
        }
        Ok(Self {
            attrs: SECURITY_ATTRIBUTES {
                nLength: size_of::<SECURITY_ATTRIBUTES>() as u32,
                lpSecurityDescriptor: sd,
                bInheritHandle: 0,
            },
        })
    }
}

impl Drop for Security {
    fn drop(&mut self) {
        // SAFETY: 描述符由 ConvertStringSecurityDescriptorToSecurityDescriptorW 分配，只在这里释放一次
        unsafe { LocalFree(self.attrs.lpSecurityDescriptor) };
    }
}

/// 应用侧：创建好下一个实例、等待连接的管道
pub struct Listener {
    name: String,
    sec: Security,
    next: NamedPipeServer,
}

fn create(name: &str, first: bool, sec: &Security) -> io::Result<NamedPipeServer> {
    // SAFETY: attrs 指向有效的 SECURITY_ATTRIBUTES，其中的描述符在 sec 存活期间有效；系统只在调用期间读取它
    unsafe {
        ServerOptions::new()
            .first_pipe_instance(first)
            .reject_remote_clients(true)
            .create_with_security_attributes_raw(name, &sec.attrs as *const _ as *mut c_void)
    }
}

impl Listener {
    /// 需要在 tokio 运行时中调用；同名管道已存在（被占用）时失败
    pub fn bind() -> io::Result<Self> {
        let name = name()?;
        let sec = Security::current_user()?;
        let next = create(&name, true, &sec)?;
        Ok(Self { name, sec, next })
    }

    /// 等待下一个连接，接受后立即创建下一个实例，新的调用随时可以连上；客户端连上就断开时为 `None`。
    /// 只有无法创建新实例时返回错误
    pub async fn accept(&mut self) -> io::Result<Option<NamedPipeServer>> {
        let res = self.next.connect().await;
        let next = create(&self.name, false, &self.sec)?;
        let conn = std::mem::replace(&mut self.next, next);
        Ok(res.ok().map(|()| conn))
    }
}

/// 命令行侧：打开管道并核对服务端进程属于当前用户；应用没有运行时返回 `NotFound`，所有实例都忙时短暂重试
pub async fn open() -> io::Result<NamedPipeClient> {
    let name = name()?;
    let start = Instant::now();
    let pipe = loop {
        match ClientOptions::new().open(&name) {
            Err(err) if err.raw_os_error() == Some(ERROR_PIPE_BUSY as i32) && start.elapsed() < Duration::from_secs(2) => {}
            res => break res?,
        }
        tokio::time::sleep(Duration::from_millis(20)).await;
    };
    let mut pid = 0u32;
    // SAFETY: pipe 持有有效的管道客户端句柄；pid 是输出参数
    if unsafe { GetNamedPipeServerProcessId(pipe.as_raw_handle(), &mut pid) } == 0 {
        return Err(io::Error::last_os_error());
    }
    // SAFETY: 只请求查询权限；返回的句柄在下面关闭
    let process = unsafe { OpenProcess(PROCESS_QUERY_LIMITED_INFORMATION, 0, pid) };
    if process.is_null() {
        return Err(io::Error::last_os_error());
    }
    let server = token_user(process);
    // SAFETY: process 是上面打开的有效句柄，之后不再使用
    unsafe { CloseHandle(process) };
    let (server, me) = (server?, current_user()?);
    // SAFETY: 两个 SID 都指向存活缓冲区中的有效 SID
    if unsafe { EqualSid(sid_of(&server), sid_of(&me)) } == 0 {
        return Err(io::Error::new(ErrorKind::PermissionDenied, "管道的服务端不属于当前用户"));
    }
    Ok(pipe)
}
