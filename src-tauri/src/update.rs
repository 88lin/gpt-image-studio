//! 应用内更新：用 updater 插件检查并下载更新包（下载时插件会校验签名），
//! 通过校验的安装包保存到 <数据目录>/updates/，并记录版本号和 sha256。
//! 之后无论远端是否已有更新的版本，都直接安装这个已下载的版本，重启应用后仍可安装
use std::fs;
use std::io::{self, ErrorKind};
use std::path::{Path, PathBuf};
use std::sync::atomic::{AtomicBool, Ordering};
use std::sync::Mutex;
use std::time::{Duration, Instant};

use semver::Version;
use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};
use tauri::ipc::Channel;
use tauri::{AppHandle, Manager, Runtime};
use tauri_plugin_updater::{Error, Update, UpdaterExt};

use crate::proxy::{Proxy, Route};
use crate::{files, storage};

const META_FILE: &str = "update.json";
const PACKAGE_FILE: &str = "update.bin";

/// 下载或安装进行中；重复调用直接报错，校验命令也不触碰正在写入的文件
static BUSY: AtomicBool = AtomicBool::new(false);

struct BusyGuard;

impl Drop for BusyGuard {
    fn drop(&mut self) {
        BUSY.store(false, Ordering::Release);
    }
}

fn acquire() -> Result<BusyGuard, String> {
    if BUSY.swap(true, Ordering::AcqRel) {
        return Err("已有更新任务在进行中".into());
    }
    Ok(BusyGuard)
}

/// 本次运行中下载完成的更新信息，安装时直接使用，不必再联网检查
static DOWNLOADED: Mutex<Option<Update>> = Mutex::new(None);

#[derive(Serialize, Deserialize)]
struct Meta {
    version: String,
    sha256: String,
}

#[derive(Clone, Serialize)]
pub struct Progress {
    downloaded: u64,
    total: Option<u64>,
}

fn updates_dir() -> Result<PathBuf, String> {
    storage::data_dir()
        .map(|dir| dir.join("updates"))
        .map_err(|err| format!("无法定位数据目录：{err}"))
}

fn parse_version(raw: &str) -> Option<Version> {
    Version::parse(raw.trim().trim_start_matches('v')).ok()
}

fn read_meta(dir: &Path) -> Option<Meta> {
    serde_json::from_slice(&fs::read(dir.join(META_FILE)).ok()?).ok()
}

/// 读取版本高于当前运行版本且通过 sha256 校验的安装包；版本不高于当前版本时只返回 None（交给启动清理），
/// sha256 校验失败时删除
fn read_saved(dir: &Path, current: &Version) -> Option<(Meta, Vec<u8>)> {
    let meta = read_meta(dir).filter(|meta| parse_version(&meta.version).is_some_and(|v| v > *current))?;
    let bytes = fs::read(dir.join(PACKAGE_FILE))
        .ok()
        .filter(|bytes| format!("{:x}", Sha256::digest(bytes)) == meta.sha256);
    let Some(bytes) = bytes else {
        if let Err(err) = fs::remove_dir_all(dir) {
            log::warn!("删除校验失败的更新包失败：{err}");
        }
        return None;
    };
    Some((meta, bytes))
}

fn save(dir: &Path, update: &Update, bytes: &[u8]) -> std::io::Result<()> {
    if dir.exists() {
        fs::remove_dir_all(dir)?;
    }
    fs::create_dir_all(dir)?;
    fs::write(dir.join(PACKAGE_FILE), bytes)?;
    // 元数据最后写入，中途失败时不会留下看似完整的记录
    let meta = Meta {
        version: update.version.clone(),
        sha256: format!("{:x}", Sha256::digest(bytes)),
    };
    fs::write(dir.join(META_FILE), serde_json::to_vec(&meta)?)
}

/// Windows 上文件被其他进程占用（ERROR_SHARING_VIOLATION / ERROR_LOCK_VIOLATION）
fn is_locked(err: &io::Error) -> bool {
    cfg!(windows) && matches!(err.raw_os_error(), Some(32 | 33))
}

/// 保存失败中用户能自行处理的原因给出不带冒号的整句，前端提示会把“标题：详情”截成只剩标题
fn save_error(err: io::Error) -> String {
    if is_locked(&err) {
        return "更新包文件被占用，请稍后重试".into();
    }
    match err.kind() {
        ErrorKind::StorageFull => "磁盘空间不足，无法保存更新包".into(),
        ErrorKind::PermissionDenied => "没有写入权限，无法保存更新包".into(),
        _ => format!("保存更新包失败：{err}"),
    }
}

/// 安装失败的常见原因：写入临时安装程序失败，或 ShellExecute 启动安装程序失败
fn install_error(err: Error) -> String {
    let Error::Io(err) = err else {
        return match err {
            Error::InvalidUpdaterFormat | Error::BinaryNotFoundInArchive => {
                "安装包格式无效，请重新下载".into()
            }
            err => format!("安装更新失败：{err}"),
        };
    };
    if is_locked(&err) {
        return "安装程序文件被占用，请稍后重试".into();
    }
    match err.kind() {
        ErrorKind::StorageFull => "磁盘空间不足，无法写入安装程序".into(),
        ErrorKind::PermissionDenied => "没有权限写入或启动安装程序，可能被安全软件拦截".into(),
        ErrorKind::NotFound => "找不到安装程序，可能被安全软件删除，请重新下载".into(),
        _ => format!("安装更新失败：{err}"),
    }
}

/// 启动时清理：删除已安装（版本不高于当前版本）或无法识别的更新包；
/// 以及插件安装时写到系统临时目录的安装程序。插件运行安装程序后直接 process::exit，来不及删除，
/// 目录名为 “<应用名>-<版本>-updater-<6 位随机字符>”，只删除名称完全符合且版本不高于当前版本的目录
pub fn cleanup(app_name: &str, current: &Version) {
    if let Ok(dir) = updates_dir() {
        let stale = dir.exists()
            && read_meta(&dir)
                .and_then(|meta| parse_version(&meta.version))
                .is_none_or(|v| v <= *current);
        if stale {
            if let Err(err) = fs::remove_dir_all(&dir) {
                log::warn!("清理旧的更新包失败：{err}");
            }
        }
    }
    let Ok(entries) = fs::read_dir(std::env::temp_dir()) else {
        return;
    };
    let prefix = format!("{app_name}-");
    for entry in entries.flatten() {
        let name = entry.file_name();
        let Some((version, suffix)) = name
            .to_str()
            .and_then(|name| name.strip_prefix(&prefix))
            .and_then(|rest| rest.rsplit_once("-updater-"))
        else {
            continue;
        };
        let installed = parse_version(version).is_some_and(|v| v <= *current);
        let random = suffix.len() == 6 && suffix.chars().all(|c| c.is_ascii_alphanumeric());
        if !installed || !random || !entry.file_type().is_ok_and(|t| t.is_dir()) {
            continue;
        }
        // 安装程序可能仍在收尾而占用文件，失败时留到下次启动再删
        if let Err(err) = fs::remove_dir_all(entry.path()) {
            log::warn!("清理临时安装程序失败：{err}");
        }
    }
}

/// any 为 true 时不比较版本，只为取得安装所需的 Update 句柄
async fn check<R: Runtime>(app: &AppHandle<R>, any: bool) -> Result<Update, String> {
    let builder = app.updater_builder().timeout(Duration::from_secs(30));
    // 与 API 请求使用同一代理设置；检查得到的 Update 会带上这里的代理设置，下载时沿用
    let builder = match app.state::<Proxy>().route() {
        Route::System => builder,
        Route::Direct => builder.no_proxy(),
        Route::Via(url) => builder.proxy(url),
    };
    let builder = if any {
        builder.version_comparator(|_, _| true)
    } else {
        builder
    };
    // 仅开发版允许用环境变量指向本地模拟更新源（插件在 debug 构建下放行 http），发布版始终使用配置中的地址
    #[cfg(debug_assertions)]
    let builder = match std::env::var("GIP_UPDATER_ENDPOINT") {
        Ok(url) => {
            let url = url.parse().map_err(|err| format!("更新源地址无效：{err}"))?;
            builder
                .endpoints(vec![url])
                .map_err(|err| format!("更新源地址无效：{err}"))?
        }
        Err(_) => builder,
    };
    let updater = builder
        .build()
        .map_err(|err| format!("初始化更新失败：{err}"))?;
    match updater.check().await {
        Ok(Some(update)) => Ok(update),
        Ok(None) => Err("更新源中暂无新的客户端版本".into()),
        Err(Error::ReleaseNotFound) => Err("未找到客户端更新包信息".into()),
        Err(Error::TargetNotFound(_) | Error::TargetsNotFound(_)) => {
            Err("更新包信息中没有适用于当前系统的安装包".into())
        }
        Err(err @ (Error::Reqwest(_) | Error::Network(_))) => {
            log::warn!("检查客户端更新失败：{err}");
            Err("网络连接失败，请检查网络和代理设置后重试".into())
        }
        Err(err) => Err(format!("检查客户端更新失败：{err}")),
    }
}

/// 本地有效安装包的版本（高于当前运行版本且通过 sha256 校验），没有时返回 None
#[tauri::command]
pub async fn update_ready<R: Runtime>(app: AppHandle<R>) -> Result<Option<String>, String> {
    if BUSY.load(Ordering::Acquire) {
        return Ok(None);
    }
    let dir = updates_dir()?;
    let current = app.package_info().version.clone();
    tauri::async_runtime::spawn_blocking(move || read_saved(&dir, &current).map(|(meta, _)| meta.version))
        .await
        .map_err(|err| format!("校验更新包异常结束：{err}"))
}

/// 下载 version 对应的更新包并保存（覆盖旧包），下载进度经 on_progress 传给前端。
/// version 为 Release 列表中的最新版本，latest.json 尚未同步到该版本时不下载
#[tauri::command]
pub async fn update_download<R: Runtime>(
    app: AppHandle<R>,
    version: String,
    on_progress: Channel<Progress>,
) -> Result<(), String> {
    let _busy = acquire()?;
    let mut update = check(&app, false).await?;
    if parse_version(&update.version) != parse_version(&version) {
        return Err("更新包信息尚未同步到最新版本，请稍后重试".into());
    }
    // 插件下载默认不设超时，网络卡住时按钮会一直停在下载中
    update.timeout = Some(Duration::from_secs(600));
    let mut downloaded = 0u64;
    let mut last = Instant::now();
    let bytes = update
        .download(
            |len, total| {
                downloaded += len as u64;
                // 数据块很小，限制通知频率，避免大量 IPC 消息
                if last.elapsed() < Duration::from_millis(100) && total != Some(downloaded) {
                    return;
                }
                last = Instant::now();
                let _ = on_progress.send(Progress { downloaded, total });
            },
            || {},
        )
        .await
        .map_err(|err| {
            log::warn!("下载更新包失败：{err}");
            match err {
                Error::Reqwest(err) if err.is_timeout() => "下载更新包超时，请重试".into(),
                Error::Reqwest(_) | Error::Network(_) => "网络连接失败，请检查网络和代理设置后重试".into(),
                Error::Minisign(_)
                | Error::Base64(_)
                | Error::SignatureUtf8(_)
                | Error::MissingSignedVersion
                | Error::SignedVersionMismatch { .. } => "更新包签名校验失败".into(),
                err => format!("下载更新包失败：{err}"),
            }
        })?;
    let dir = updates_dir()?;
    let saved = update.clone();
    tauri::async_runtime::spawn_blocking(move || save(&dir, &saved, &bytes))
        .await
        .map_err(|err| format!("保存更新包异常结束：{err}"))?
        .map_err(|err| {
            log::warn!("保存更新包失败：{err}");
            save_error(err)
        })?;
    *DOWNLOADED.lock().unwrap() = Some(update);
    Ok(())
}

/// 校验本地安装包后安装并重启，安装的始终是已下载的版本；Windows 上插件启动安装程序后直接退出应用，由安装程序重新打开。
/// 插件的 install 只能通过 Update 调用（Windows 上按安装包内容判断类型，版本只用于临时文件名）：
/// 安装时不读取下载地址和签名。本次运行中下载的直接使用；重启后没有时联网检查取得句柄，只需把版本改为已下载的版本
#[tauri::command]
pub async fn update_install<R: Runtime>(app: AppHandle<R>) -> Result<(), String> {
    let _busy = acquire()?;
    let dir = updates_dir()?;
    let current = app.package_info().version.clone();
    let (meta, bytes) = tauri::async_runtime::spawn_blocking(move || read_saved(&dir, &current))
        .await
        .map_err(|err| format!("校验更新包异常结束：{err}"))?
        .ok_or("本地安装包已失效，请重新下载")?;
    let cached = DOWNLOADED
        .lock()
        .unwrap()
        .clone()
        .filter(|update| parse_version(&update.version) == parse_version(&meta.version));
    let update = match cached {
        Some(update) => update,
        None => {
            let mut update = check(&app, true).await?;
            update.version = meta.version;
            update
        }
    };
    // Windows 上插件启动安装程序后直接 process::exit，不会触发 RunEvent::Exit，需先删除未提交保存的临时文件
    app.state::<files::Writes>().clear();
    update.install(bytes).map_err(|err| {
        log::warn!("安装更新失败：{err}");
        install_error(err)
    })?;
    app.restart()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn save_errors_explain_fixable_causes() {
        assert_eq!(save_error(ErrorKind::StorageFull.into()), "磁盘空间不足，无法保存更新包");
        assert_eq!(save_error(ErrorKind::PermissionDenied.into()), "没有写入权限，无法保存更新包");
        assert!(save_error(io::Error::other("x")).starts_with("保存更新包失败："));
    }

    #[cfg(windows)]
    #[test]
    fn save_and_install_errors_detect_locked_files() {
        assert_eq!(save_error(io::Error::from_raw_os_error(32)), "更新包文件被占用，请稍后重试");
        assert_eq!(save_error(io::Error::from_raw_os_error(33)), "更新包文件被占用，请稍后重试");
        assert_eq!(install_error(Error::Io(io::Error::from_raw_os_error(32))), "安装程序文件被占用，请稍后重试");
        // ERROR_ACCESS_DENIED / ERROR_FILE_NOT_FOUND 经 ErrorKind 映射
        assert_eq!(install_error(Error::Io(io::Error::from_raw_os_error(5))), "没有权限写入或启动安装程序，可能被安全软件拦截");
        assert_eq!(install_error(Error::Io(io::Error::from_raw_os_error(2))), "找不到安装程序，可能被安全软件删除，请重新下载");
    }

    #[test]
    fn install_errors_explain_fixable_causes() {
        assert_eq!(install_error(Error::Io(ErrorKind::StorageFull.into())), "磁盘空间不足，无法写入安装程序");
        assert_eq!(install_error(Error::InvalidUpdaterFormat), "安装包格式无效，请重新下载");
        assert!(install_error(Error::TempDirNotFound).starts_with("安装更新失败："));
    }
}
