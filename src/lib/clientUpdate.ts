import { Channel, invoke } from '@tauri-apps/api/core'

export interface UpdateProgress {
  downloaded: number
  /** 服务器未返回大小时为 null */
  total: number | null
}

/** 仅客户端：本地有效安装包（版本高于当前运行版本且通过 sha256 校验）的版本，没有时为 null；sha256 校验失败的文件会被删除 */
export function getReadyUpdate() {
  return invoke<string | null>('update_ready')
}

/** 仅客户端：下载并校验 version 对应的更新包后保存到本地（覆盖旧包）；latest.json 尚未同步到该版本时报错 */
export function downloadUpdate(version: string, onProgress: (progress: UpdateProgress) => void) {
  const channel = new Channel<UpdateProgress>()
  channel.onmessage = onProgress
  return invoke<void>('update_download', { version, onProgress: channel })
}

/** 仅客户端：安装已下载的更新包并重启应用；无论远端是否已有更新的版本，安装的都是已下载的版本 */
export function installUpdate() {
  return invoke<void>('update_install')
}

/** 下载按钮上显示的进度，未知总大小时显示已下载的 MB */
export function formatUpdateProgress(progress: UpdateProgress) {
  if (progress.total) return `${Math.min(100, Math.floor((progress.downloaded / progress.total) * 100))}%`
  return `${(progress.downloaded / 1024 / 1024).toFixed(1)} MB`
}
