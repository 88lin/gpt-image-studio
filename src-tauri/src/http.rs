//! 客户端发出的 API 和远程图片请求，前端 apiFetch 据此构造标准 Response。
//! 不用 tauri-plugin-http：它取消读取响应体时，正在等待的读取仍持有连接，直到服务端发来下一块数据或关闭才断开，
//! 上游可能继续生成并计费。这里读取和取消同时等待，取消时立即丢弃响应、断开连接。
//! 请求体经 IPC 二进制传入，不再转成 JSON 数字数组；网络错误在这里转换成中文原因。
use std::collections::HashMap;
use std::io::ErrorKind;
use std::sync::Mutex;

use reqwest::header::{HeaderMap, HeaderName, HeaderValue, CONTENT_LENGTH};
use reqwest::{Method, Url};
use serde::{Deserialize, Serialize};
use tauri::ipc::{InvokeBody, Request, Response};
use tauri::State;
use tokio::sync::watch;

use crate::files::header;
use crate::proxy::{Proxy, Route};

const CANCELED: &str = "请求已取消";
const USER_AGENT: &str = concat!("gpt-image-studio/", env!("CARGO_PKG_VERSION"));

struct Pending {
    cancel: watch::Sender<bool>,
    /// 收到响应头后存放响应，读取期间暂时取出
    res: Option<reqwest::Response>,
}

impl Pending {
    fn new(canceled: bool) -> Self {
        Self {
            cancel: watch::channel(canceled).0,
            res: None,
        }
    }
}

/// 进行中的请求，以前端生成的 id 区分
#[derive(Default)]
pub struct Requests(Mutex<HashMap<String, Pending>>);

impl Requests {
    fn lock(&self) -> std::sync::MutexGuard<'_, HashMap<String, Pending>> {
        self.0.lock().unwrap_or_else(|err| err.into_inner())
    }

    /// 页面重载时调用：丢弃全部记录和响应，进行中的请求随即断开，等待中的命令以“已取消”返回
    pub fn clear(&self) {
        self.lock().clear();
    }
}

#[derive(Deserialize)]
struct Meta {
    id: String,
    method: String,
    url: String,
    headers: Vec<(String, String)>,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Head {
    status: u16,
    status_text: String,
    headers: Vec<(String, String)>,
    url: String,
}

/// 错误链中可用于判断和排查的信息
struct Detail {
    /// 整条 source 链拼成的文本，只用于识别原因，不显示给用户
    chain: String,
    kind: Option<ErrorKind>,
    code: Option<i32>,
    /// 错误链最内层的说明
    inner: String,
}

/// reqwest 的 Display 不含底层原因，拼上整条 source 链，并取出其中的 IO 错误类型和系统错误码。
/// reqwest 的 Display 会带上完整请求地址，其中可能有 ?key= 等密钥，这里去掉，避免出现在报错和日志中
fn describe(err: &reqwest::Error) -> Detail {
    let top = match err.url() {
        Some(url) => err.to_string().replace(&format!(" for url ({url})"), ""),
        None => err.to_string(),
    };
    let mut detail = Detail {
        chain: top.clone(),
        kind: None,
        code: None,
        inner: top,
    };
    let mut source = std::error::Error::source(err);
    while let Some(e) = source {
        detail.inner = e.to_string();
        detail.chain.push_str(": ");
        detail.chain.push_str(&detail.inner);
        if let Some(io) = e.downcast_ref::<std::io::Error>() {
            detail.kind = detail.kind.or(Some(io.kind()));
            detail.code = detail.code.or(io.raw_os_error());
        }
        source = e.source();
    }
    detail
}

impl Detail {
    /// 附在原因后便于排查：有系统错误码时只附错误码（中文 Windows 的系统说明翻译不佳，不显示），
    /// 没有时按需附最内层的英文说明
    fn note(&self, with_inner: bool) -> String {
        match self.code {
            Some(code) => format!("（错误码 {code}）"),
            None if with_inner => format!("（{}）", self.inner),
            None => String::new(),
        }
    }
}

/// proxied 为 true 表示这次请求经过自定义代理；跟随系统时不知道是否经过代理，只能从 reqwest 的隧道错误判断。
/// 只有兜底原因附上最内层说明，前端也据此只对兜底原因追加“请求立即失败”的通用提示
fn send_error(err: &reqwest::Error, proxied: bool) -> String {
    let detail = describe(err);
    log::warn!("请求失败：{}", detail.chain);
    let kind = detail.kind;
    let lower = detail.chain.to_lowercase();
    let tls = ["certificate", "tls", "handshake", "corrupt message"]
        .iter()
        .any(|s| lower.contains(s));
    let reason = if lower.contains("proxy authorization required") {
        "代理服务器要求身份验证，请检查代理地址中的用户名和密码"
    } else if lower.contains("tunnel error: unsuccessful") {
        "代理服务器未能连接到目标地址"
    } else if lower.contains("tunnel error: failed to create underlying connection")
        || (proxied && err.is_connect() && !tls)
    {
        "无法连接代理服务器，请检查代理地址和端口是否正确、代理软件是否已启动"
    } else if err.is_timeout() || kind == Some(ErrorKind::TimedOut) {
        "连接超时，服务器长时间没有响应"
    } else if lower.contains("dns error") {
        "无法解析域名，请检查 API 地址是否正确"
    } else if kind == Some(ErrorKind::ConnectionRefused) {
        "连接被拒绝，请检查 API 地址和端口是否正确、服务是否已启动"
    } else if matches!(
        kind,
        Some(ErrorKind::ConnectionReset | ErrorKind::ConnectionAborted)
    ) {
        // 此文案与下一条、兜底文案被 store.ts 的 getApiRequestNetworkErrorHint 按开头匹配，修改需同步
        "连接被服务器重置"
    } else if lower.contains("connection closed before message completed") {
        "服务器未返回响应就关闭了连接"
    } else if tls {
        "TLS 握手失败，请检查服务器证书"
    } else if err.is_redirect() {
        "重定向次数过多"
    } else {
        // 前端按开头匹配此文案，只对它追加“请求立即失败”提示，修改需同步 store.ts
        return format!("无法连接到服务器。{}", detail.note(true));
    };
    format!("{reason}。{}", detail.note(false))
}

/// 开始等待取消信号；取消先于请求到达时直接返回已取消
fn subscribe(state: &Requests, id: &str) -> Result<watch::Receiver<bool>, String> {
    let mut map = state.lock();
    let pending = map
        .entry(id.to_string())
        .or_insert_with(|| Pending::new(false));
    if *pending.cancel.borrow() {
        map.remove(id);
        return Err(CANCELED.into());
    }
    Ok(pending.cancel.subscribe())
}

/// 校验请求参数并构造请求，同时返回这次请求是否经过自定义代理
fn build(
    meta: &Meta,
    body: Vec<u8>,
    route: &Route,
) -> Result<(reqwest::RequestBuilder, bool), String> {
    let url = Url::parse(&meta.url).map_err(|err| format!("请求地址不合法：{err}"))?;
    // 只允许 http/https，主机和端口不限
    if !matches!(url.scheme(), "http" | "https") {
        return Err(format!("不支持的请求地址：{url}"));
    }
    let method = Method::from_bytes(meta.method.as_bytes())
        .map_err(|_| format!("请求方法不合法：{}", meta.method))?;
    let mut headers = HeaderMap::new();
    for (name, value) in &meta.headers {
        let name = HeaderName::from_bytes(name.as_bytes())
            .map_err(|_| format!("请求头名称不合法：{name}"))?;
        // 前端的请求头值是 ByteString（每个字符不超过 0xFF），与响应头对称按 Latin-1 还原成字节
        let value = value
            .chars()
            .map(u8::try_from)
            .collect::<Result<Vec<u8>, _>>()
            .ok()
            .and_then(|bytes| HeaderValue::from_bytes(&bytes).ok())
            .ok_or_else(|| format!("请求头 {name} 的值不合法"))?;
        headers.append(name, value);
    }
    // 与浏览器一致，没有请求体的 POST、PUT 也带上 Content-Length: 0；reqwest 对空请求体不会自动添加
    if body.is_empty() && matches!(method, Method::POST | Method::PUT) {
        headers.insert(CONTENT_LENGTH, HeaderValue::from_static("0"));
    }
    // 每次新建客户端：系统代理和应用内的代理设置变化后的请求立即生效，取消时连接不会留在连接池中
    let client = route
        .apply(reqwest::Client::builder().user_agent(USER_AGENT))
        .and_then(|builder| builder.build())
        .map_err(|err| format!("创建 HTTP 客户端失败：{err}"))?;
    let proxied = route.proxies(&url);
    let req = client.request(method, url).headers(headers);
    Ok((if body.is_empty() { req } else { req.body(body) }, proxied))
}

/// 发出请求并等待响应头。请求参数经 x-meta 头传入（encodeURIComponent 编码的 JSON），请求体为二进制
#[tauri::command]
pub async fn http_send(
    request: Request<'_>,
    state: State<'_, Requests>,
    proxy: State<'_, Proxy>,
) -> Result<Head, String> {
    let meta = percent_encoding::percent_decode_str(header(&request, "x-meta"))
        .decode_utf8()
        .map_err(|_| "请求参数不是合法的 UTF-8".to_string())?;
    let meta: Meta = serde_json::from_str(&meta).map_err(|err| format!("请求参数不合法：{err}"))?;
    // 先登记再校验：取消可能已先到达并留下记录，校验失败时也要一并清除
    let mut cancel = subscribe(&state, &meta.id)?;
    let body = match request.body() {
        InvokeBody::Raw(bytes) => bytes.clone(),
        _ => Vec::new(),
    };
    let (req, proxied) = match build(&meta, body, &proxy.route()) {
        Ok(built) => built,
        Err(err) => {
            state.lock().remove(&meta.id);
            return Err(err);
        }
    };
    let result = tokio::select! {
        res = req.send() => res,
        _ = cancel.wait_for(|canceled| *canceled) => return Err(CANCELED.into()),
    };

    let mut map = state.lock();
    let res = match result {
        Ok(res) => res,
        Err(err) => {
            map.remove(&meta.id);
            return Err(send_error(&err, proxied));
        }
    };
    let status = res.status().as_u16();
    // 前端 Response 只接受 200～599，其他状态码（如未处理的 101）在这里报错，不留下记录
    if !(200..=599).contains(&status) {
        map.remove(&meta.id);
        return Err(format!("服务器返回了不支持的状态码 {status}"));
    }
    let head = Head {
        status,
        status_text: res.status().canonical_reason().unwrap_or_default().into(),
        // 与浏览器一致按 Latin-1 解读响应头，避免非 UTF-8 的值在前端构造 Headers 时报错
        headers: res
            .headers()
            .iter()
            .map(|(name, value)| {
                (
                    name.to_string(),
                    value.as_bytes().iter().map(|&b| b as char).collect(),
                )
            })
            .collect(),
        url: res.url().to_string(),
    };
    let Some(pending) = map.get_mut(&meta.id) else {
        return Err(CANCELED.into());
    };
    pending.res = Some(res);
    Ok(head)
}

/// 读取下一块响应体，读完时返回空内容；取消时立即丢弃响应、断开连接
#[tauri::command]
pub async fn http_read(id: String, state: State<'_, Requests>) -> Result<Response, String> {
    let (mut res, mut cancel) = {
        let mut map = state.lock();
        let pending = map.get_mut(&id).ok_or(CANCELED)?;
        let res = pending.res.take().ok_or("响应体正在读取中")?;
        (res, pending.cancel.subscribe())
    };
    loop {
        let chunk = tokio::select! {
            chunk = res.chunk() => chunk,
            _ = cancel.wait_for(|canceled| *canceled) => return Err(CANCELED.into()),
        };
        let mut map = state.lock();
        match chunk {
            Ok(Some(bytes)) if bytes.is_empty() => continue,
            Ok(Some(bytes)) => {
                let pending = map.get_mut(&id).ok_or(CANCELED)?;
                pending.res = Some(res);
                return Ok(Response::new(bytes.to_vec()));
            }
            Ok(None) => {
                map.remove(&id);
                return Ok(Response::new(Vec::new()));
            }
            Err(err) => {
                map.remove(&id);
                return Err(format!("读取响应时连接中断。{}", describe(&err).note(true)));
            }
        }
    }
}

/// 取消请求。取消可能先于 http_send 到达，此时留下已取消的记录，http_send 开始时看到后直接返回
#[tauri::command]
pub fn http_cancel(id: String, state: State<'_, Requests>) {
    let mut map = state.lock();
    match map.remove(&id) {
        // 丢弃记录时一并丢弃已收到的响应，连接随即断开
        Some(pending) => {
            pending.cancel.send_replace(true);
        }
        None => {
            map.insert(id, Pending::new(true));
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    // 固定 DNS 失败，避免系统代理或 DNS 重定向把无效域名变成 TLS 错误。
    struct FailingDns;

    impl reqwest::dns::Resolve for FailingDns {
        fn resolve(&self, _: reqwest::dns::Name) -> reqwest::dns::Resolving {
            Box::pin(async { Err(std::io::Error::new(ErrorKind::NotFound, "test DNS failure").into()) })
        }
    }

    /// 应用启动时在 lib.rs 安装加密实现，测试中需自行安装
    fn init() {
        let _ = rustls::crypto::ring::default_provider().install_default();
    }

    #[tokio::test(flavor = "multi_thread")]
    async fn reports_unreachable_proxy() {
        init();
        // 取一个刚释放、没有服务监听的本机端口作为代理
        let port = std::net::TcpListener::bind("127.0.0.1:0")
            .unwrap()
            .local_addr()
            .unwrap()
            .port();
        let route = Route::Via(crate::proxy::parse(&format!("127.0.0.1:{port}")).unwrap().1);
        let meta = Meta {
            id: "1".into(),
            method: "GET".into(),
            url: "https://example.invalid/".into(),
            headers: Vec::new(),
        };
        let (req, proxied) = build(&meta, Vec::new(), &route).unwrap();
        assert!(proxied);
        let err = req.send().await.unwrap_err();
        assert!(send_error(&err, true).starts_with("无法连接代理服务器"));
        // 跟随系统时不知道是否经过代理，也能从隧道错误认出代理连接失败
        let msg = send_error(&err, false);
        assert!(msg.starts_with("无法连接代理服务器"), "{msg}");
    }

    #[tokio::test(flavor = "multi_thread")]
    async fn strips_url_from_error_detail() {
        init();
        use std::io::{Read, Write};
        // reqwest 的 Display 带完整请求地址；状态码错误没有 source，最内层说明就是它本身
        let listener = std::net::TcpListener::bind("127.0.0.1:0").unwrap();
        let port = listener.local_addr().unwrap().port();
        std::thread::spawn(move || {
            let (mut stream, _) = listener.accept().unwrap();
            let _ = stream.read(&mut [0; 1024]);
            stream
                .write_all(b"HTTP/1.1 404 Not Found\r\nContent-Length: 0\r\n\r\n")
                .unwrap();
        });
        let url = format!("http://127.0.0.1:{port}/v1?key=secret");
        let client = reqwest::Client::builder()
            .no_proxy()
            .dns_resolver(std::sync::Arc::new(FailingDns))
            .build().unwrap();
        let err = client.get(&url).send().await.unwrap().error_for_status().unwrap_err();
        assert!(err.to_string().contains("secret"));
        let detail = describe(&err);
        assert!(std::error::Error::source(&err).is_none());
        assert_eq!(
            detail.note(true),
            "（HTTP status client error (404 Not Found)）"
        );
        assert!(!detail.chain.contains("secret"), "{}", detail.chain);

        // 有 source 的连接错误：报错和用于日志的错误链都不含地址
        let err = client.get("https://gip-test.invalid/v1?key=secret").send().await.unwrap_err();
        let msg = send_error(&err, false);
        assert!(!msg.contains("secret"), "{msg}");
        assert!(!describe(&err).chain.contains("secret"));
    }

    async fn send_direct(url: String) -> String {
        let meta = Meta {
            id: "1".into(),
            method: "GET".into(),
            url,
            headers: Vec::new(),
        };
        let (req, proxied) = build(&meta, Vec::new(), &Route::Direct).unwrap();
        send_error(&req.send().await.unwrap_err(), proxied)
    }

    #[tokio::test(flavor = "multi_thread")]
    async fn reports_refused_connection_with_os_code_only() {
        init();
        let port = std::net::TcpListener::bind("127.0.0.1:0")
            .unwrap()
            .local_addr()
            .unwrap()
            .port();
        let msg = send_direct(format!("http://127.0.0.1:{port}/")).await;
        // 只附系统错误码，不附错误链和系统说明
        let code = if cfg!(windows) { 10061 } else { 111 };
        assert_eq!(
            msg,
            format!("连接被拒绝，请检查 API 地址和端口是否正确、服务是否已启动。（错误码 {code}）")
        );
    }

    #[tokio::test(flavor = "multi_thread")]
    async fn reports_dns_error_without_chain() {
        init();
        let client = reqwest::Client::builder()
            .no_proxy()
            .dns_resolver(std::sync::Arc::new(FailingDns))
            .build().unwrap();
        let err = client.get("https://gip-test.invalid/").send().await.unwrap_err();
        let msg = send_error(&err, false);
        assert!(msg.starts_with("无法解析域名，请检查 API 地址是否正确。"), "{msg}");
        assert!(!msg.contains("dns error") && !msg.contains("os error"), "{msg}");
    }
}
