//! 关闭窗口的兜底：前端用 onCloseRequested 接管关闭（确认、写入设置后再销毁窗口），
//! 页面卡死时监听不会执行，点关闭按钮或 Alt+F4 都关不掉窗口。
//! 收到关闭请求时开始计时，前端监听一开始就回执；超时仍未回执说明页面无响应，直接销毁窗口。
//! 回执后的确认和写入不受此计时限制，等待用户选择期间不会被关闭
use std::sync::atomic::{AtomicU64, Ordering};
use std::time::Duration;

use tauri::{Runtime, Window};

const TIMEOUT: Duration = Duration::from_secs(8);

/// 等待回执的关闭请求编号，0 表示没有
static PENDING: AtomicU64 = AtomicU64::new(0);
static NEXT: AtomicU64 = AtomicU64::new(0);

pub fn on_close_requested<R: Runtime>(window: &Window<R>) {
    let id = NEXT.fetch_add(1, Ordering::Relaxed) + 1;
    // 已有请求在等待时沿用它的计时，连续点关闭不会推迟兜底
    if PENDING.compare_exchange(0, id, Ordering::AcqRel, Ordering::Acquire).is_err() {
        return;
    }
    let window = window.clone();
    std::thread::spawn(move || {
        std::thread::sleep(TIMEOUT);
        if PENDING.compare_exchange(id, 0, Ordering::AcqRel, Ordering::Acquire).is_err() {
            return;
        }
        log::warn!("页面未响应关闭请求，强制关闭窗口");
        if let Err(err) = window.destroy() {
            log::warn!("强制关闭窗口失败：{err}");
        }
    });
}

/// 前端开始处理关闭请求时调用
#[tauri::command]
pub fn close_ack() {
    PENDING.store(0, Ordering::Release);
}
