import { invoke } from '@tauri-apps/api/core'
import { isTauri } from './platform'
import { throwIfAborted } from './serverSentEvents'

/** 写入大文件时的取消信号与进度回调（已写入字节数、总字节数），仅客户端分块写入时生效 */
export interface SaveOptions {
  signal?: AbortSignal
  onProgress?: (written: number, total: number) => void
}

/** 客户端中用户选定的保存目录；token 对应 Rust 侧记下的目录，前端无法借此写入其他位置 */
export interface SaveDir {
  token: number
  path: string
}

// “文件保存位置”为“默认地址”时直接写入默认保存地址，由 App 按设置同步
let saveToDefaultDir = false

export function setSaveToDefaultDir(enabled: boolean) {
  saveToDefaultDir = enabled
}

// 客户端首次保存前询问保存方式，由 App 注册；返回 false 表示用户取消了本次保存
let beforeSave: (() => Promise<boolean>) | null = null

export function setBeforeSave(fn: (() => Promise<boolean>) | null) {
  beforeSave = fn
}

function triggerDownload(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = fileName
  document.body.appendChild(a)
  a.click()
  a.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}

// 整个文件作为一次 IPC 请求体时，WebView2 浏览器进程会为 260 MB 的分卷短暂占用 3~5 GB 内存，改为分块传输
const CHUNK_SIZE = 8 * 1024 * 1024

/**
 * 把内容分块写入 Rust 侧在目标目录中打开的临时文件，全部写完后提交（改名为目标文件），返回实际写入的完整路径。
 * 任一步失败或取消时丢弃临时文件，不留下写了一半的文件
 */
async function writeInChunks(id: number, data: Blob | Uint8Array, opts?: SaveOptions) {
  try {
    const size = data instanceof Blob ? data.size : data.byteLength
    for (let offset = 0; offset < size; offset += CHUNK_SIZE) {
      throwIfAborted(opts?.signal)
      const chunk = data instanceof Blob
        ? new Uint8Array(await data.slice(offset, offset + CHUNK_SIZE).arrayBuffer())
        : data.subarray(offset, offset + CHUNK_SIZE)
      await invoke('save_write', chunk, { headers: { 'x-id': String(id) } })
      opts?.onProgress?.(Math.min(offset + CHUNK_SIZE, size), size)
    }
    // 取消后不再提交，由下方丢弃临时文件
    throwIfAborted(opts?.signal)
    return await invoke<string>('save_commit', { id })
  } catch (err) {
    await invoke('save_abort', { id }).catch((abortErr) => console.warn('丢弃临时文件失败', abortErr))
    throw err
  }
}

/**
 * 保存单个文件：网页版触发浏览器下载；客户端弹出系统保存对话框，由 Rust 写入所选路径，
 * 或在“默认地址”模式下直接写入默认保存地址（同名自动加序号）。
 * 返回保存位置（网页版为文件名），用户取消时返回 null
 */
export async function saveFile(data: Blob | Uint8Array, fileName: string, opts?: SaveOptions): Promise<string | null> {
  if (!isTauri) {
    triggerDownload(data instanceof Blob ? data : new Blob([data as BlobPart]), fileName)
    return fileName
  }
  if (beforeSave && !(await beforeSave())) return null
  if (saveToDefaultDir) return await saveFileToDir(await invoke<SaveDir>('download_dir_use'), data, fileName, opts)
  const id = await invoke<number | null>('save_file', { name: fileName })
  if (id === null) return null
  return await writeInChunks(id, data, opts)
}

/**
 * 仅客户端：弹出目录选择框，用于一次保存多个文件；用户取消时返回 null。
 * “默认地址”模式下不弹框，直接返回默认保存地址，地址不可用时抛出 Rust 给出的原因
 */
export async function pickSaveDir() {
  if (beforeSave && !(await beforeSave())) return null
  return await invoke<SaveDir | null>(saveToDefaultDir ? 'download_dir_use' : 'save_dir_pick')
}

/** 仅客户端：写入 pickSaveDir 选定的目录，已有同名文件时自动加序号，返回实际写入的完整路径 */
export async function saveFileToDir(dir: SaveDir, data: Blob | Uint8Array, fileName: string, opts?: SaveOptions) {
  return await writeInChunks(await invoke<number>('save_dir_begin', { token: dir.token, name: fileName }), data, opts)
}

/** 仅客户端：默认保存地址，用于在设置中显示 */
export function getDefaultSaveDir() {
  return invoke<string>('download_dir_get')
}

/** 更改默认保存地址前的原地址：有文件或不能迁移时才返回 */
export interface PreviousSaveDir {
  path: string
  files: number
  bytes: number
  /** 不能迁移的原因（互相包含、包含数据目录、磁盘根目录或用户主目录等） */
  blocked: string | null
  /** 系统已知文件夹（下载、图片等），迁移后保留文件夹本身 */
  keepSource: boolean
}

/** 仅客户端：弹出目录选择框更改默认保存地址，返回新地址及原地址的统计；用户取消时返回 null */
export function changeDefaultSaveDir() {
  return invoke<{ path: string, previous: PreviousSaveDir | null } | null>('download_dir_pick')
}

/** 未能完整移动的条目：原位置的完整路径与原因 */
export interface MoveIssue {
  path: string
  error: string
}

export interface MoveReport {
  moved: number
  renamed: number
  /** 未能移动的条目及原因，仍留在原地址 */
  failed: MoveIssue[]
  /** 已复制到新地址、但原位置未能删除的条目及原因 */
  notRemoved: MoveIssue[]
  sourceRemoved: boolean
}

/** 仅客户端：把上次更改前的原地址中的全部内容移动到当前默认保存地址 */
export function migrateDefaultSaveDir() {
  return invoke<MoveReport>('download_dir_migrate')
}

/** 仅客户端：在资源管理器中打开默认保存地址 */
export function openDefaultSaveDir() {
  return invoke<void>('download_dir_open')
}
