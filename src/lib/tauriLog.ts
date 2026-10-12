import { invoke } from '@tauri-apps/api/core'
import { attachLogger, LogLevel } from '@tauri-apps/plugin-log'

// 单条日志的长度上限，避免把图片 data URL 等大对象整个写进日志文件
const MAX_MESSAGE_LENGTH = 10000

function format(args: unknown[]) {
  return args.map((arg) => {
    if (typeof arg === 'string') return arg
    if (arg instanceof Error) return arg.stack ?? `${arg.name}: ${arg.message}`
    try {
      return JSON.stringify(arg) ?? String(arg)
    } catch {
      return String(arg)
    }
  }).join(' ').slice(0, MAX_MESSAGE_LENGTH)
    // 日志文件可能被附在反馈中，遮盖 API 密钥；控制台仍原样打印
    .replace(/(Bearer\s+|\bsk-)[A-Za-z0-9._-]{8,}/g, '$1***')
}

/**
 * 插件的 warn/error 固定取调用栈第 4 行作为位置，经过 console 包装后总是指向包装函数，所以直接调用日志命令。
 * location 为 console.warn/error 调用处那一帧（发布版是压缩后的 bundle 位置，仍能区分各调用处），
 * 全局异常和 Promise 拒绝的调用处没有意义，不传，原始位置见消息中的错误堆栈
 */
function write(level: LogLevel, args: unknown[], location?: string) {
  // 写入失败时不能再调用 console，否则会被包装函数再次转发
  void invoke('plugin:log|log', { level, message: format(args), location }).catch(() => {})
}

/** 取包装函数调用者那一帧，转成插件的 函数名@文件:行:列 格式；栈依次为 Error、本函数、包装函数、调用处 */
function callerLocation() {
  const frame = new Error().stack?.split('\n')[3]?.trim().replace(/^at\s+/, '')
  if (!frame) return
  // 匿名帧没有函数名和括号，与插件一样补上 <anonymous>@
  return frame.endsWith(')') ? frame.replace(/^(.*?) \((.*)\)$/, '$1@$2') : `<anonymous>@${frame}`
}

/**
 * 客户端启动时尽早调用：console.warn / console.error 照常打印到控制台，同时写入日志文件；
 * 未捕获的异常和未处理的 Promise 拒绝也一并记录
 */
export function installTauriLog() {
  const rawWarn = console.warn.bind(console)
  const rawError = console.error.bind(console)

  console.warn = (...args) => {
    rawWarn(...args)
    write(LogLevel.Warn, args, callerLocation())
  }
  console.error = (...args) => {
    rawError(...args)
    write(LogLevel.Error, args, callerLocation())
  }
  window.addEventListener('error', (e) => write(LogLevel.Error, ['未捕获的异常：', e.error ?? e.message]))
  window.addEventListener('unhandledrejection', (e) => write(LogLevel.Error, ['未处理的 Promise 拒绝：', e.reason]))

  // Rust 侧日志转发到控制台时用原始 console 打印，不经过上面的包装，避免再写回插件形成回环
  void attachLogger(({ level, message }) => (level === LogLevel.Error ? rawError : rawWarn)(message))
    .catch((err) => rawError('监听 Rust 日志失败：', err))
}

/** 开关由 Rust 侧的文件 target 统一拦截，前端日志照常发送，关闭后只是不写入文件 */
export function setTauriLogEnabled(value: boolean) {
  void invoke('log_set_enabled', { enabled: value }).catch((err) => console.warn('切换日志记录失败：', err))
}

export async function openTauriLogDir() {
  await invoke('log_open_dir')
}
