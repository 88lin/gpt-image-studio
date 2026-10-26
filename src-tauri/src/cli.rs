//! 命令行：`gpt-image-studio-cli`（安装为 `bin\gpt-image-studio.exe`，见 `command`）的每条命令经命名管道（见 `pipe`）
//! 交给正在运行的应用；应用没有运行时命令直接失败。
//! 生图、设置和历史记录都在前端，应用这一侧只把命令以 `cli-request` 事件转给主窗口，前端执行完用 `cli_respond` 回传。
//! - 管道上一个连接一条命令：命令行写一行请求 `{"tool","arguments"}`，应用回一行 `{"text","data","files"}` 或 `{"error"}`；
//!   之前可先回若干行 `{"progress"}`（例如生图提交后的任务 ID，由前端用 `cli_progress` 发出）。
//! - 前端注册好监听后调用 `cli_ready`；页面开始重载时清除就绪状态并中断等待中的命令（`reset`），未就绪时直接返回错误。
//! - 设置页安装随附的 Skill，见 `skill`。
//! - 只在 Windows 上提供。
pub mod command;
#[cfg(windows)]
mod pipe;
pub mod skill;

use std::collections::HashMap;
use std::sync::atomic::{AtomicBool, AtomicU64, Ordering};
use std::sync::Mutex;

use serde_json::{json, Value};
use tauri::{AppHandle, Emitter, Manager, State};
use tokio::sync::{mpsc, oneshot};

/// 等待前端回复的命令：最终结果，以及转给命令行的进度
struct Waiting {
    done: oneshot::Sender<Result<Value, String>>,
    progress: mpsc::UnboundedSender<String>,
}

/// 托管为 State：前端是否已在接收命令，以及等待前端回复的命令
#[derive(Default)]
pub struct Cli {
    ready: AtomicBool,
    pending: Mutex<HashMap<u64, Waiting>>,
    next_id: AtomicU64,
}

impl Cli {
    /// 页面开始重载：旧页面已无人回复，丢弃等待中的命令（等待方收到中断错误）
    pub fn reset(&self) {
        self.ready.store(false, Ordering::SeqCst);
        self.pending.lock().unwrap_or_else(|err| err.into_inner()).clear();
    }
}

/// 启动时调用：创建管道并一直接受命令行的连接；管道名被占用时只记录日志，应用照常运行
pub fn start(app: &AppHandle) {
    #[cfg(windows)]
    {
        let app = app.clone();
        tauri::async_runtime::spawn(async move {
            let mut listener = match pipe::Listener::bind() {
                Ok(listener) => listener,
                Err(err) => {
                    log::warn!("无法创建命令行管道，命令行将无法调用应用：{err}");
                    return;
                }
            };
            loop {
                match listener.accept().await {
                    Ok(Some(conn)) => {
                        tauri::async_runtime::spawn(serve(app.clone(), conn));
                    }
                    Ok(None) => {}
                    Err(err) => {
                        log::warn!("命令行管道无法继续接受连接：{err}");
                        return;
                    }
                }
            }
        });
    }
    #[cfg(not(windows))]
    let _ = app;
}

#[cfg(windows)]
async fn serve(app: AppHandle, conn: tokio::net::windows::named_pipe::NamedPipeServer) {
    use tokio::io::{AsyncBufReadExt, AsyncWriteExt, BufReader};

    let (read, mut write) = tokio::io::split(conn);
    let mut line = Vec::new();
    if BufReader::new(read).read_until(b'\n', &mut line).await.is_err() {
        return;
    }
    let (tx, mut rx) = mpsc::unbounded_channel();
    let reply = async {
        match serde_json::from_slice::<Value>(&line) {
            Ok(request) => call(&app, request, tx).await,
            Err(err) => json!({ "error": format!("无法识别的请求：{err}") }),
        }
    };
    tokio::pin!(reply);
    // 命令行先断开时（例如被 Ctrl+C 中断）写不出去，任务照常在应用中完成
    let reply = loop {
        tokio::select! {
            reply = &mut reply => break reply,
            Some(text) = rx.recv() => {
                let mut out = json!({ "progress": text }).to_string().into_bytes();
                out.push(b'\n');
                let _ = write.write_all(&out).await;
            }
        }
    };
    let mut out = reply.to_string().into_bytes();
    out.push(b'\n');
    let _ = write.write_all(&out).await;
}

async fn call(app: &AppHandle, request: Value, progress: mpsc::UnboundedSender<String>) -> Value {
    let cli = app.state::<Cli>();
    if !cli.ready.load(Ordering::SeqCst) {
        return json!({ "error": "GPT Image Studio 还没有加载完成，请稍后重试" });
    }
    let id = cli.next_id.fetch_add(1, Ordering::SeqCst);
    let (tx, rx) = oneshot::channel();
    cli.pending.lock().unwrap_or_else(|err| err.into_inner()).insert(id, Waiting { done: tx, progress });
    let payload = json!({ "id": id, "tool": request["tool"], "arguments": request["arguments"] });
    if let Err(err) = app.emit_to("main", "cli-request", payload) {
        cli.pending.lock().unwrap_or_else(|err| err.into_inner()).remove(&id);
        return json!({ "error": format!("无法联系应用主窗口：{err}") });
    }
    match rx.await {
        Ok(Ok(result)) => result,
        Ok(Err(message)) => json!({ "error": message }),
        Err(_) => json!({ "error": "应用页面重新加载，命令已中断；已开始的任务可能仍在继续，可用 history 查看" }),
    }
}

/// 前端注册或注销 cli-request 的监听
#[tauri::command]
pub fn cli_ready(ready: bool, cli: State<'_, Cli>) {
    cli.ready.store(ready, Ordering::SeqCst);
}

/// 前端执行 cli-request 期间转给命令行的一行进度
#[tauri::command]
pub fn cli_progress(id: u64, text: String, cli: State<'_, Cli>) {
    if let Some(waiting) = cli.pending.lock().unwrap_or_else(|err| err.into_inner()).get(&id) {
        let _ = waiting.progress.send(text);
    }
}

/// 前端执行完 cli-request 后回传结果；error 非空表示命令执行失败
#[tauri::command]
pub fn cli_respond(id: u64, result: Option<Value>, error: Option<String>, cli: State<'_, Cli>) {
    let waiting = cli.pending.lock().unwrap_or_else(|err| err.into_inner()).remove(&id);
    if let Some(waiting) = waiting {
        let _ = waiting.done.send(match (result, error) {
            (Some(result), None) => Ok(result),
            (_, error) => Err(error.unwrap_or_else(|| "前端没有返回结果".into())),
        });
    }
}
