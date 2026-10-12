import { invoke, isTauri as detectTauri } from '@tauri-apps/api/core'
import { openUrl } from '@tauri-apps/plugin-opener'

export const isTauri = detectTauri()

interface HttpHead {
  status: number
  statusText: string
  headers: [string, string][]
  url: string
}

/** 客户端连接阶段（收到响应头之前）的错误，消息是 Rust 侧给出的中文原因；与浏览器 fetch 一样是 TypeError，但不带“Failed to fetch”前缀，网络错误判断需另外识别它 */
export class FetchConnectError extends TypeError {}

const abortReason = (signal: AbortSignal) => signal.reason ?? new DOMException('请求已停止', 'AbortError')

const cancelRequest = (id: string) => void invoke('http_cancel', { id }).catch((err) => console.warn('取消请求失败：', err))

// 响应体既没读完也没取消就被丢弃时（如只看状态码就返回），回收时通知 Rust 断开连接。网页版不需要，也避免旧浏览器缺少该 API 时加载即报错
const abandonedBodies = isTauri ? new FinalizationRegistry<string>(cancelRequest) : null

/**
 * 请求用户配置的 API 或远程图片；客户端中 http/https 请求由 Rust 侧（src-tauri/src/http.rs）发出，不受 CORS 限制。
 * 错误与浏览器 fetch 语义一致：取消时抛 signal.reason（AbortError），其余抛 TypeError，
 * 其中连接阶段的错误为 FetchConnectError，读取响应体时的断流是普通 TypeError，不会被当作“请求立即失败”
 */
export async function apiFetch(input: string | URL, init: RequestInit = {}): Promise<Response> {
  // data:、blob: 和相对地址继续走原生 fetch；每次调用时读取 globalThis.fetch，测试会替换它
  if (!isTauri || !/^https?:\/\//i.test(String(input))) return globalThis.fetch(input, init)

  const signal = init.signal
  // 借 Request 把字符串、FormData、Blob 等请求体统一成字节，FormData 的 multipart 边界也会写进 Content-Type
  const req = new Request(input, { ...init, signal: null })
  const body = new Uint8Array(await req.arrayBuffer())
  if (signal?.aborted) throw abortReason(signal)
  const id = crypto.randomUUID()
  const cancel = () => cancelRequest(id)
  const token = {}
  const settle = () => {
    signal?.removeEventListener('abort', cancel)
    abandonedBodies?.unregister(token)
  }
  signal?.addEventListener('abort', cancel, { once: true })

  const meta = { id, method: req.method, url: req.url, headers: [...req.headers] }
  // 请求体以二进制传给 Rust，避免大图编辑请求经 JSON 数组放大数倍
  const head = await invoke<HttpHead>('http_send', body, { headers: { 'x-meta': encodeURIComponent(JSON.stringify(meta)) } }).catch((err) => {
    settle()
    throw signal?.aborted ? abortReason(signal) : new FetchConnectError(String(err))
  })

  // 这些状态码不允许带响应体，Response 构造时传入响应体会报错
  const nullBody = [204, 205, 304].includes(head.status)
  if (nullBody) {
    settle()
    cancel()
  }
  const pull = async (ctrl: ReadableStreamDefaultController<Uint8Array>) => {
    try {
      const chunk = new Uint8Array(await invoke<ArrayBuffer>('http_read', { id }))
      if (chunk.byteLength) return ctrl.enqueue(chunk)
      settle()
      ctrl.close()
    } catch (err) {
      settle()
      ctrl.error(signal?.aborted ? abortReason(signal) : new TypeError(String(err)))
    }
  }
  const stream = nullBody ? null : new ReadableStream<Uint8Array>({
    pull,
    cancel: () => {
      settle()
      cancel()
    },
    // 不预读：有人读取时才发起 http_read，否则挂起中的读取会让流一直存活，无法被回收
  }, { highWaterMark: 0 })
  // 登记 pull 函数而不是流：流是 Web API 包装对象，apiFetch 返回后只经 C++ 内部可达（Response、reader 持有的是内部对象），
  // V8 的 minor GC 会丢弃这种未修改过的包装对象并触发回调，正在读取的请求会被误取消。
  // pull 是普通 JS 函数，只要流还活着就被它引用，流真正被丢弃后才会回收。Node 单测覆盖不到这一点，只能在 WebView2 中验证
  if (stream) abandonedBodies?.register(pull, id, token)
  const res = new Response(stream, { status: head.status, statusText: head.statusText, headers: head.headers })
  // WebView2 中 Response 的 text()、json() 等会把响应体流的错误一律换成 TypeError('Failed to fetch')，
  // 取消原因和断流原因都会丢失，因此改为直接读取流
  const readBody = async () => {
    if (!res.body) return new Blob()
    const chunks: BlobPart[] = []
    const reader = res.body.getReader()
    for (;;) {
      const chunk = await reader.read()
      if (chunk.done) return new Blob(chunks, { type: res.headers.get('Content-Type') ?? '' })
      chunks.push(chunk.value)
    }
  }
  Object.defineProperties(res, {
    url: { value: head.url },
    blob: { value: readBody },
    arrayBuffer: { value: async () => (await readBody()).arrayBuffer() },
    text: { value: async () => (await readBody()).text() },
    json: { value: async () => JSON.parse(await (await readBody()).text()) },
  })
  return res
}

/** 仅把指向其他站点的 http/https 地址和 mailto: 视为外部链接，blob:、data: 和应用自身页面不处理 */
function toExternalUrl(raw: string | URL | undefined | null) {
  if (!raw) return null
  try {
    const url = new URL(String(raw), window.location.href)
    if (url.protocol === 'mailto:') return url.href
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return null
    if (url.origin === window.location.origin) return null
    return url.href
  } catch {
    return null
  }
}

export async function openExternal(url: string) {
  if (!isTauri) {
    window.open(url, '_blank', 'noopener,noreferrer')
    return
  }
  try {
    await openUrl(url)
  } catch (err) {
    console.error('打开外部链接失败：', err)
  }
}

/** 客户端中 target="_blank" 和 window.open 不会打开系统浏览器，统一转给 openExternal */
export function installExternalLinkHandler() {
  const handleClick = (e: MouseEvent) => {
    if (e.button > 1) return
    const a = (e.target as Element | null)?.closest?.('a')
    if (!a || a.target !== '_blank' || a.hasAttribute('download')) return
    const url = toExternalUrl(a.getAttribute('href'))
    if (!url) return
    e.preventDefault()
    void openExternal(url)
  }
  // 捕获阶段监听，避免被弹窗等容器的 stopPropagation 截断
  window.addEventListener('click', handleClick, true)
  window.addEventListener('auxclick', handleClick, true)

  const rawOpen = window.open.bind(window)
  window.open = (url, target, features) => {
    const external = toExternalUrl(url)
    if (!external) return rawOpen(url, target, features)
    void openExternal(external)
    return null
  }
}

// 刷新、前进后退、打印、查看源码、保存页面等浏览器快捷键，在客户端中会刷掉进行中的任务或打开无关界面；
// 缩放（Ctrl+加减号/0）、开发者工具（F12、Ctrl+Shift+I）和页面内查找（Ctrl+F，以及查找下一个 F3、Ctrl+G，可用来匹配提示词正文）不在其中
const BLOCKED_KEYS = new Set(['f5', 'f7', 'browserrefresh', 'browserback', 'browserforward', 'browsersearch'])
const BLOCKED_CTRL_KEYS = new Set(['r', 'p', 'u', 's'])
// 单按 Alt 或 F10 会让宿主窗口进入系统菜单模式，期间所有 IPC 停住；按下和松开都要阻止。
// 只拦截这两个键本身，Alt+F4、Alt+Tab、Alt+Space 和 Alt+滚轮不受影响
const MENU_KEYS = new Set(['alt', 'f10'])
const EDITABLE_INPUT_TYPES = new Set(['text', 'search', 'url', 'tel', 'email', 'password', 'number'])

/**
 * 客户端中屏蔽浏览器自带的快捷键和右键菜单。
 * 不用 WebView2 的 AreBrowserAcceleratorKeysEnabled，它会连同 F12 和缩放快捷键一起禁用；
 * 这里只阻止默认行为，不阻止事件传播，应用自己的快捷键和右键菜单照常收到事件
 */
export function installBrowserBehaviorGuards() {
  window.addEventListener('keydown', (e) => {
    // 自动填充等派发的 keydown 可能没有 key
    const key = e.key?.toLowerCase()
    // Shift+F10 用于键盘呼出右键菜单，不拦截
    if (BLOCKED_KEYS.has(key) || (MENU_KEYS.has(key) && !e.shiftKey) || ((e.ctrlKey || e.metaKey) && !e.altKey && BLOCKED_CTRL_KEYS.has(key))) e.preventDefault()
  }, true)
  window.addEventListener('keyup', (e) => {
    if (MENU_KEYS.has(e.key?.toLowerCase())) e.preventDefault()
  }, true)

  window.addEventListener('contextmenu', (e) => {
    const el = e.target
    // 输入框中保留剪切、复制、粘贴；复选框等非文本输入弹出的是整页菜单（含刷新、打印），同样屏蔽
    const editable = el instanceof HTMLElement && (
      el.isContentEditable
      || el instanceof HTMLTextAreaElement
      || (el instanceof HTMLInputElement && EDITABLE_INPUT_TYPES.has(el.type))
    )
    if (editable) return
    // 在选中的文字上右键时保留菜单，方便复制；在选区外右键弹出的是整页菜单，仍然屏蔽
    const sel = window.getSelection()
    const onSelection = sel && !sel.isCollapsed && sel.rangeCount > 0 && Array.from(sel.getRangeAt(0).getClientRects()).some((r) =>
      e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom)
    if (!onSelection) e.preventDefault()
  }, true)
}
