import { invoke } from '@tauri-apps/api/core'
import { getCurrentWindow } from '@tauri-apps/api/window'
import type { StateStorage } from 'zustand/middleware'
import { call } from './dbTauri'

// 设置每次变化都会触发 persist 写入，合并到停顿后再写库
const FLUSH_DELAY_MS = 300
// 关闭窗口和安装更新前最多等待写入这么久，某次写入挂起时仍能继续退出
const EXIT_FLUSH_TIMEOUT_MS = 3000

const cache = new Map<string, string>()
const dirty = new Set<string>()
let timer: ReturnType<typeof setTimeout> | undefined
let writing = Promise.resolve()
let loadError: (Error & { code?: string }) | null = null

/** 启动时在 store 创建前调用：把 SQLite 中的全部 kv 读入内存，之后 persist 可以同步完成 hydration */
export async function loadTauriStorage() {
  try {
    const all = await call<Record<string, string>>('kv_get_all')
    for (const [key, value] of Object.entries(all)) cache.set(key, value)
  } catch (err) {
    // 没读到已有设置时不能回写，否则默认值会覆盖库中的设置
    loadError = err as Error & { code?: string }
    console.error('读取本地设置失败：', err)
  }
}

/** 启动时读取设置失败的错误（此后设置不会写入），成功时返回 null */
export function getTauriStorageLoadError() {
  return loadError
}

/** 立即写入所有待写的 key；写入串行进行，保证同一 key 的先后顺序 */
export function flushTauriStorage() {
  clearTimeout(timer)
  timer = undefined
  if (loadError) dirty.clear()
  const keys = [...dirty]
  dirty.clear()
  if (!keys.length) return writing
  writing = writing.then(async () => {
    for (const key of keys) {
      // 写入时读取最新值，期间又被修改也只会多写一次相同内容
      const value = cache.get(key)
      try {
        if (value === undefined) await call('kv_remove', { key })
        else await call('kv_set', { key, value })
      } catch (err) {
        console.error(`保存本地设置失败（${key}）：`, err)
        // 留到下一次写入（包括关闭窗口时）重试；这里不启动计时器，避免持续失败时反复重试
        dirty.add(key)
      }
    }
  })
  return writing
}

/** 关闭窗口或安装更新前写入，限时等待 */
export function flushTauriStorageBeforeExit() {
  let limit: ReturnType<typeof setTimeout> | undefined
  const timeout = new Promise<void>((resolve) => {
    limit = setTimeout(() => {
      console.warn('保存本地设置超时，继续退出')
      resolve()
    }, EXIT_FLUSH_TIMEOUT_MS)
  })
  return Promise.race([flushTauriStorage(), timeout]).finally(() => clearTimeout(limit))
}

function markDirty(key: string) {
  dirty.add(key)
  clearTimeout(timer)
  timer = setTimeout(() => void flushTauriStorage(), FLUSH_DELAY_MS)
}

export const tauriStorage: StateStorage = {
  getItem: (key) => cache.get(key) ?? null,
  setItem: (key, value) => {
    // persist 每次 set 都会调用 setItem，内容没变时跳过，避免无效写入和流式输出期间防抖被不断推迟
    if (cache.get(key) === value) return
    cache.set(key, value)
    markDirty(key)
  },
  removeItem: (key) => {
    cache.delete(key)
    markDirty(key)
  },
}

let closeGuard: (() => boolean | Promise<boolean>) | undefined

/** 设置关闭窗口前的确认；返回 false 时保持窗口打开。store 加载后由 App 设置 */
export function setTauriCloseGuard(guard: () => boolean | Promise<boolean>) {
  closeGuard = guard
}

/** 关闭窗口前写完再关；真正保证不丢失的是防抖写入和 onCloseRequested */
export async function installTauriStorageFlush() {
  // 附带写入：Windows 客户端最小化不会让页面变为 hidden（且已关闭被遮挡窗口的后台化），这两个事件基本不会触发
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') void flushTauriStorage()
  })
  window.addEventListener('pagehide', () => void flushTauriStorage())
  // 处理函数返回后 Tauri 才会销毁窗口，且每个监听返回后都会各自销毁窗口，所以关闭确认和写入共用这一个监听：
  // 先确认（等待用户选择期间窗口保持打开），取消则阻止关闭；确认或无需确认时写完设置再关。
  // 开始处理时先回执，Rust 侧在约 8 秒内收不到回执会认为页面卡死并强制关闭窗口
  await getCurrentWindow().onCloseRequested(async (event) => {
    invoke('close_ack').catch((err) => console.warn('关闭请求回执失败：', err))
    if (closeGuard && !(await closeGuard())) return event.preventDefault()
    await flushTauriStorageBeforeExit()
  })
}
