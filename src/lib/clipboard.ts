import { writeText } from '@tauri-apps/plugin-clipboard-manager'
import { apiFetch, isTauri } from './platform'

export async function copyTextToClipboard(text: string) {
  // 客户端由插件在 Rust 侧写入：navigator.clipboard 在用户激活失效（例如复制前有耗时操作）时会弹出 WebView2 的剪贴板权限框
  if (isTauri) return await writeText(text)

  let asyncClipboardError: unknown = null

  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return
    } catch (err) {
      asyncClipboardError = err
    }
  }

  if (copyTextWithExecCommand(text)) return

  throw asyncClipboardError ?? new Error('Clipboard API is not available')
}

export async function copyImageSourceToClipboard(src: string | Promise<string | undefined>) {
  if (!canCopyImageToClipboard()) {
    throw new Error('Clipboard image API is not available')
  }
  if (!isClipboardTypeSupported('image/png')) {
    throw new Error('当前浏览器不支持图像剪贴板写入')
  }

  // write() 之前不能有 await：Chromium 在调用 write() 时检查用户激活，取图耗时过长会弹出剪贴板权限框并挂起，
  // 所以把取图和转码放进 ClipboardItem 的 Promise（Safari 也要求这种写法）。
  // 不写 web image/* 自定义格式：它需要事先知道 MIME，而且客户端写入时会弹出 WebView2 的剪贴板权限框
  const png = (async () => {
    const resolvedSrc = await src
    if (!resolvedSrc) throw new Error('Image source is not available')
    // Agent Markdown 中可能是远程图片，由 apiFetch 按协议分流
    const res = await apiFetch(resolvedSrc)
    const blob = await res.blob()
    if (!blob.type.startsWith('image/')) throw new Error('Clipboard item is not an image')
    return blob.type === 'image/png' ? blob : await imageBlobToPngBlob(blob)
  })()
  // write() 先因权限等原因失败时，png 的失败没人接收，避免多出一条 unhandledrejection；错误仍由 write() 抛给调用方
  png.catch(() => {})
  await navigator.clipboard.write([
    new ClipboardItem({ 'image/png': png }),
  ])
}

export function canCopyImageToClipboard() {
  return window.isSecureContext && Boolean(navigator.clipboard?.write) && typeof ClipboardItem !== 'undefined'
}

export function getClipboardFailureMessage(fallback: string, err: unknown) {
  if (isEmbeddedPage() && isClipboardPermissionError(err)) {
    return '复制失败：内嵌页面未授予剪贴板权限'
  }

  if (err instanceof Error && err.message.startsWith('当前浏览器不支持')) {
    return `复制失败：${err.message}`
  }

  return fallback
}

function copyTextWithExecCommand(text: string) {
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.left = '-9999px'
  textarea.style.top = '0'

  document.body.appendChild(textarea)
  textarea.select()
  textarea.setSelectionRange(0, textarea.value.length)

  try {
    return document.execCommand('copy')
  } catch {
    return false
  } finally {
    document.body.removeChild(textarea)
  }
}

function isClipboardTypeSupported(type: string) {
  const supports = (ClipboardItem as typeof ClipboardItem & { supports?: (type: string) => boolean }).supports
  return supports ? supports(type) : type === 'image/png'
}

async function imageBlobToPngBlob(blob: Blob): Promise<Blob> {
  const image = await createImageBitmap(blob)
  try {
    const canvas = document.createElement('canvas')
    canvas.width = image.width
    canvas.height = image.height
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('Canvas is not available')
    ctx.drawImage(image, 0, 0)

    return await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob((pngBlob) => {
        if (pngBlob) resolve(pngBlob)
        else reject(new Error('Image conversion failed'))
      }, 'image/png')
    })
  } finally {
    image.close()
  }
}

function isEmbeddedPage() {
  try {
    return window.self !== window.top
  } catch {
    return true
  }
}

function isClipboardPermissionError(err: unknown) {
  if (!(err instanceof Error)) return false

  return (
    err.name === 'NotAllowedError' ||
    /permission|permissions policy|not allowed|denied/i.test(err.message)
  )
}
