//! 诊断日志：警告和错误写入 <数据目录>/logs/，Rust 侧日志同时转发到开发者工具控制台
use std::fs::{self, OpenOptions};
use std::path::PathBuf;
use std::sync::atomic::{AtomicBool, Ordering};

use tauri::plugin::TauriPlugin;
use tauri::Runtime;
use tauri_plugin_log::{RotationStrategy, Target, TargetKind, TimezoneStrategy, WEBVIEW_TARGET};

use crate::storage;

/// 对应设置中的“写入日志文件”，只控制文件 target；控制台和开发者工具转发不受影响
static FILE_ENABLED: AtomicBool = AtomicBool::new(true);

fn logs_dir() -> std::io::Result<PathBuf> {
    Ok(storage::data_dir()?.join("logs"))
}

pub fn plugin<R: Runtime>() -> TauriPlugin<R> {
    let builder = tauri_plugin_log::Builder::new()
        .clear_targets()
        .level(log::LevelFilter::Warn)
        .timezone_strategy(TimezoneStrategy::UseLocal)
        .max_file_size(5 * 1024 * 1024)
        // 单文件约 5MB，当前文件之外最多保留 2 个历史文件
        .rotation_strategy(RotationStrategy::KeepSome(2))
        .target(Target::new(TargetKind::Stderr))
        // 前端日志在控制台已打印过，只转发 Rust 侧日志，既避免重复，也避免前端包装 console 后形成回环
        .target(Target::new(TargetKind::Webview).filter(|meta| {
            !matches!(meta.target().strip_prefix(WEBVIEW_TARGET), Some(rest) if rest.is_empty() || rest.starts_with("::"))
        }));
    // 插件初始化失败会导致应用无法启动，先确认日志文件可以追加写入，不可用时只输出到控制台。
    // 仍无法规避的情况：启动时 app.log 已超过 5MB 需要改名、或旧的历史文件需要删除，而文件恰好被其他程序锁住
    let file = logs_dir().and_then(|dir| {
        fs::create_dir_all(&dir)?;
        OpenOptions::new()
            .create(true)
            .append(true)
            .open(dir.join("app.log"))?;
        Ok(dir)
    });
    match file {
        Ok(path) => builder.target(
            Target::new(TargetKind::Folder {
                path,
                file_name: Some("app".into()),
            })
            .filter(|_| FILE_ENABLED.load(Ordering::Relaxed)),
        ),
        Err(err) => {
            eprintln!("[log] 日志文件不可写，日志不会写入文件：{err}");
            builder
        }
    }
    .build()
}

/// 前端日志也经过此开关，关闭后前端无需自行拦截；启动到前端同步设置之前按默认开启处理
#[tauri::command]
pub fn log_set_enabled(enabled: bool) {
    FILE_ENABLED.store(enabled, Ordering::Relaxed);
}

/// 只打开日志目录本身，不向前端开放任意路径的打开权限
#[tauri::command]
pub async fn log_open_dir() -> Result<(), String> {
    tauri::async_runtime::spawn_blocking(|| {
        let dir = logs_dir().map_err(|err| format!("无法定位日志目录：{err}"))?;
        fs::create_dir_all(&dir).map_err(|err| format!("创建日志目录失败：{err}"))?;
        tauri_plugin_opener::open_path(&dir, None::<&str>)
            .map_err(|err| format!("打开日志目录失败：{err}"))
    })
    .await
    .map_err(|err| format!("打开日志目录异常结束：{err}"))?
}
