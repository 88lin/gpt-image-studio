import { compareVersions } from './releaseUpdates'

export interface Announcement {
  id: string
  title: string
  /** Markdown 正文 */
  content: string
  /** 正文下方的次要说明，纯文本，以较小的灰色文字显示，换行符会保留 */
  note?: string
  /** 显示条件，缺省时总是显示；求值规则见 matchesWhen */
  when?: unknown
  action?: { label: string; url: string }
  /** 卡片顶部的动画或示意图，随应用打包；src 已解析为绝对地址 */
  media?: AnnouncementMedia
}

export interface AnnouncementMedia {
  /** html 用沙箱 iframe 嵌入独立页面，image 为图片（含 gif、webp、svg） */
  type: 'html' | 'image'
  src: string
  /** CSS aspect-ratio，如 16 / 9 */
  aspectRatio: string
}

export type AnnouncementOs = 'windows' | 'macos' | 'linux' | 'android' | 'ios' | 'other'

/** 条件中可用的变量；新增变量时同时登记到 VARIABLE_KINDS */
export interface AnnouncementContext {
  platform: 'web' | 'client'
  os: AnnouncementOs
  /** 浏览器语言，如 zh-CN */
  language: string
  version: string
  /** 画廊中成功生成的图片数（不含 Agent 对话） */
  imageCount: number
  /** 画廊任务数（含失败） */
  taskCount: number
  /** 网页版是否以 PWA 安装后运行；客户端为 false */
  standalone: boolean
  /** 当前时间，ISO 字符串 */
  now: string
}

type VariableKind = 'string' | 'number' | 'boolean' | 'version' | 'date'

const VARIABLE_KINDS: Record<keyof AnnouncementContext, VariableKind> = {
  platform: 'string',
  os: 'string',
  language: 'string',
  version: 'version',
  imageCount: 'number',
  taskCount: 'number',
  standalone: 'boolean',
  now: 'date',
}

const DEFAULT_MEDIA_ASPECT_RATIO = '16 / 9'

const readString = (value: unknown) => typeof value === 'string' ? value.trim() : ''

const isPlainObject = (value: unknown): value is Record<string, unknown> => Boolean(value) && typeof value === 'object' && !Array.isArray(value)

/** 从 userAgentData.platform 或 UA 判断系统；iPadOS 的桌面 UA 靠触点数区分 */
export function detectOs(ua: string, uaPlatform = '', maxTouchPoints = 0): AnnouncementOs {
  const text = `${uaPlatform} ${ua}`
  if (/android/i.test(text)) return 'android'
  if (/iphone|ipad|ipod|\bios\b/i.test(text) || (/macintosh/i.test(ua) && maxTouchPoints > 1)) return 'ios'
  if (/windows|win32|win64/i.test(text)) return 'windows'
  if (/mac/i.test(text)) return 'macos'
  if (/linux|x11|cros/i.test(text)) return 'linux'
  return 'other'
}

class InvalidCondition extends Error {}

const invalid = (msg: string): never => {
  throw new InvalidCondition(msg)
}

function equals(kind: VariableKind, actual: unknown, expected: unknown) {
  if (kind === 'version' || kind === 'date') return order(kind, actual, expected) === 0
  if (typeof expected !== typeof actual) invalid(`类型不符：${JSON.stringify(expected)}`)
  return actual === expected
}

function order(kind: VariableKind, actual: unknown, expected: unknown) {
  if (kind === 'version' && typeof expected === 'string' && /^v?\d+(\.\d+)*$/.test(expected)) return compareVersions(String(actual), expected)
  if (kind === 'number' && typeof expected === 'number' && Number.isFinite(expected)) return (actual as number) - expected
  // 只接受带时间的 ISO 字符串：仅有日期时浏览器按 UTC 解析，容易与本地日期差一天
  if (kind === 'date' && typeof expected === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(expected)) {
    const time = Date.parse(expected)
    if (!Number.isNaN(time)) return Date.parse(String(actual)) - time
  }
  return invalid(`无法比较：${JSON.stringify(expected)}`)
}

function matchValue(kind: VariableKind, actual: unknown, spec: unknown): boolean {
  if (Array.isArray(spec)) return spec.map((item) => equals(kind, actual, item)).some(Boolean)
  if (!isPlainObject(spec)) return equals(kind, actual, spec)
  const ops = Object.entries(spec)
  if (!ops.length) invalid('比较对象为空')
  return ops.map(([op, expected]) => {
    switch (op) {
      case 'eq': return equals(kind, actual, expected)
      case 'ne': return !equals(kind, actual, expected)
      case 'in': return Array.isArray(expected) ? expected.map((item) => equals(kind, actual, item)).some(Boolean) : invalid('in 需要数组')
      case 'gt': return order(kind, actual, expected) > 0
      case 'gte': return order(kind, actual, expected) >= 0
      case 'lt': return order(kind, actual, expected) < 0
      case 'lte': return order(kind, actual, expected) <= 0
      default: return invalid(`未知运算符：${op}`)
    }
  }).every(Boolean)
}

// 不短路：每一项都要求值，保证任何位置的非法写法都能被发现，不会被 any 或 not 掩盖
const evaluateList = (value: unknown, ctx: AnnouncementContext) => (Array.isArray(value) ? value : [value]).map((item) => evaluate(item, ctx))

function evaluate(cond: unknown, ctx: AnnouncementContext): boolean {
  if (!isPlainObject(cond)) return invalid(`条件需为对象：${JSON.stringify(cond)}`)
  return Object.entries(cond).map(([key, value]) => {
    if (key === 'all') return evaluateList(value, ctx).every(Boolean)
    if (key === 'any') return evaluateList(value, ctx).some(Boolean)
    if (key === 'not') return !evaluateList(value, ctx).every(Boolean)
    if (!Object.prototype.hasOwnProperty.call(VARIABLE_KINDS, key)) return invalid(`未知变量：${key}`)
    const name = key as keyof AnnouncementContext
    return matchValue(VARIABLE_KINDS[name], ctx[name], value)
  }).every(Boolean)
}

const warned = new Set<string>()

/**
 * 声明式条件求值，不执行任何代码：
 * - 对象中每个键都要满足（且）；键为变量名，值为字面量（相等）、数组（属于其一）或运算对象 { eq, ne, gt, gte, lt, lte, in }
 * - all / any / not 的值为条件或条件数组，not 表示“不全部满足”
 * - version 按版本号比较，now 按日期比较；未知变量或写法非法时整条不满足，并提示一次
 */
export function matchesWhen(when: unknown, ctx: AnnouncementContext, id = '') {
  if (when === undefined) return true
  try {
    return evaluate(when, ctx)
  } catch (err) {
    if (!(err instanceof InvalidCondition)) throw err
    const msg = `公告 ${id} 的显示条件无效：${err.message}`
    if (!warned.has(msg)) {
      warned.add(msg)
      console.warn(msg)
    }
    return false
  }
}

function normalizeMedia(raw: unknown, baseUrl: string): AnnouncementMedia | undefined {
  if (!isPlainObject(raw)) return undefined
  const type = raw.type
  const src = readString(raw.src)
  if ((type !== 'html' && type !== 'image') || !src || src.startsWith('/')) return undefined
  // 媒体随应用打包，解析后必须与应用同源；反斜杠、控制字符等变形写法解析出的其他来源一律丢弃
  let url: URL
  try {
    url = new URL(src, baseUrl)
  } catch {
    return undefined
  }
  if (url.origin !== new URL(baseUrl).origin) return undefined
  const ratio = readString(raw.aspectRatio).match(/^(\d+(?:\.\d+)?)\s*[/:]\s*(\d+(?:\.\d+)?)$/)
  const aspectRatio = ratio && Number(ratio[1]) > 0 && Number(ratio[2]) > 0 ? `${ratio[1]} / ${ratio[2]}` : DEFAULT_MEDIA_ASPECT_RATIO
  return { type, src: url.href, aspectRatio }
}

function normalizeAnnouncement(raw: unknown, baseUrl: string): Announcement | null {
  if (!isPlainObject(raw)) return null
  const id = readString(raw.id)
  const title = readString(raw.title)
  if (!id || !title || typeof raw.content !== 'string') return null

  const item: Announcement = { id, title, content: raw.content }
  const note = readString(raw.note)
  if (note) item.note = note
  // 条件原样保留，写法非法时在求值阶段判为不满足
  if (raw.when !== undefined) item.when = raw.when
  const action = isPlainObject(raw.action) ? raw.action : null
  const label = readString(action?.label)
  const url = readString(action?.url)
  if (label && /^https?:\/\//i.test(url)) item.action = { label, url }
  const media = normalizeMedia(raw.media, baseUrl)
  if (media) item.media = media
  return item
}

/** 清洗 announcements.json：非法条目丢弃，重复 id 只保留第一条；媒体路径相对于应用自身的地址 baseUrl 解析 */
export function parseAnnouncements(data: unknown, baseUrl: string) {
  if (!Array.isArray(data)) return []
  const seen = new Set<string>()
  const list: Announcement[] = []
  for (const raw of data) {
    const item = normalizeAnnouncement(raw, baseUrl)
    if (!item || seen.has(item.id)) continue
    seen.add(item.id)
    list.push(item)
  }
  return list
}

/** 返回满足条件且未读的公告，按文件中的顺序 */
export function filterAnnouncements(list: Announcement[], ctx: AnnouncementContext, dismissed: string[]) {
  return list.filter((item) => !dismissed.includes(item.id) && matchesWhen(item.when, ctx, item.id))
}

/** 本地保存的已关闭公告 id 列表；内容损坏时视为空 */
export function parseDismissedAnnouncements(raw: string | null) {
  if (!raw) return []
  try {
    const data: unknown = JSON.parse(raw)
    return Array.isArray(data) ? data.filter((id): id is string => typeof id === 'string') : []
  } catch {
    return []
  }
}
