import type { ImageComment, InputImage } from '../types'

const MENTION_START = '\u2063'
const MENTION_END = '\u2064'
// 评论胶囊在显示文本后附带编码过的评论数据，数据段以该字符开头、不参与显示和光标计算
const MENTION_DATA_START = '\u2065'
const SELECTED_IMAGE_MENTION_RE = /\u2063@图(\d+)\u2064/g
const IMAGE_COMMENT_MENTION_RE = /\u2063@图(\d+) 评论\u2065([^\u2064]*)\u2064/g
const SELECTED_MENTION_RE = /\u2063(@图(\d+)(?: 评论)?|@(?:第)?\d+轮图\d+)(?:\u2065[^\u2064]*)?\u2064/g

export interface AtImageQuery {
  start: number
  query: string
}

export function getImageMentionLabel(index: number) {
  return `@图${index + 1}`
}

export function getSelectedImageMentionLabel(index: number) {
  return getSelectedTextMentionLabel(getImageMentionLabel(index))
}

export function getSelectedTextMentionLabel(text: string) {
  return `${MENTION_START}${text}${MENTION_END}`
}

export function stripImageMentionMarkers(prompt: string): string {
  return prompt.replace(/\u2065[^\u2064]*/g, '').replace(/[\u2063\u2064]/g, '')
}

export function getPromptIndexFromVisibleIndex(prompt: string, visibleIndex: number): number {
  let visible = 0
  for (let i = 0; i < prompt.length; i++) {
    if (prompt[i] === MENTION_DATA_START) {
      while (i + 1 < prompt.length && prompt[i + 1] !== MENTION_END) i++
      continue
    }
    if (prompt[i] === MENTION_END) continue
    // 位置恰好在提及开头时返回其起始标记之前，避免把内容插进提及内部
    if (visible >= visibleIndex) return i
    if (prompt[i] === MENTION_START) continue
    visible++
  }
  return prompt.length
}

export function isCursorInSelectedImageMention(prompt: string, visibleCursor: number): boolean {
  for (const match of prompt.matchAll(SELECTED_MENTION_RE)) {
    if (match.index == null) continue
    const visibleStart = stripImageMentionMarkers(prompt.slice(0, match.index)).length
    const visibleEnd = visibleStart + match[1].length
    if (visibleCursor > visibleStart && visibleCursor <= visibleEnd) return true
  }
  return false
}

export function getAtImageQuery(prompt: string, cursor: number, imageSource: Pick<InputImage[], 'length'>): AtImageQuery | null {
  if (imageSource.length === 0) return null

  const beforeCursor = prompt.slice(0, cursor)
  const atIndex = beforeCursor.lastIndexOf('@')
  if (atIndex < 0) return null

  const query = beforeCursor.slice(atIndex + 1)
  if (/\s/.test(query)) return null
  return { start: atIndex, query }
}

export function imageMentionMatches(query: string, index: number) {
  const normalized = query.trim().toLowerCase()
  if (!normalized) return true

  const oneBasedIndex = String(index + 1)
  const label = `图${oneBasedIndex}`
  return oneBasedIndex.includes(normalized) || label.toLowerCase().includes(normalized)
}

export function insertImageMention(prompt: string, start: number, cursor: number, imageIndex: number) {
  const mention = getSelectedImageMentionLabel(imageIndex)
  const visibleMention = getImageMentionLabel(imageIndex)
  const nextPrompt = `${prompt.slice(0, start)}${mention}${prompt.slice(cursor)}`
  return {
    prompt: nextPrompt,
    cursor: start + visibleMention.length,
  }
}

export function insertImageMentionAtVisibleRange(prompt: string, start: number, cursor: number, imageIndex: number) {
  return insertTextMentionAtVisibleRange(prompt, start, cursor, getImageMentionLabel(imageIndex))
}

export function insertTextMentionAtVisibleRange(prompt: string, start: number, cursor: number, text: string) {
  const promptStart = getPromptIndexFromVisibleIndex(prompt, start)
  const promptCursor = getPromptIndexFromVisibleIndex(prompt, cursor)
  const mention = getSelectedTextMentionLabel(text)
  return {
    prompt: `${prompt.slice(0, promptStart)}${mention}${prompt.slice(promptCursor)}`,
    cursor: start + text.length,
  }
}

export function remapImageMentionsForOrder(
  prompt: string,
  previousImages: InputImage[],
  nextImages: InputImage[],
  equivalentImageIds: Record<string, string> = {},
): string {
  const getNextIndex = (n: string) => {
    const previousImage = previousImages[Number(n) - 1]
    if (!previousImage) return null
    const nextImageId = equivalentImageIds[previousImage.id] ?? previousImage.id
    return nextImages.findIndex((img) => img.id === nextImageId)
  }
  return prompt
    .replace(IMAGE_COMMENT_MENTION_RE, (text, n, data) => {
      const nextIndex = getNextIndex(n)
      if (nextIndex == null) return text
      // 图片被移除时评论随之失效
      return nextIndex >= 0 ? `${MENTION_START}@图${nextIndex + 1} 评论${MENTION_DATA_START}${data}${MENTION_END}` : ''
    })
    .replace(SELECTED_IMAGE_MENTION_RE, (text, n) => {
      const nextIndex = getNextIndex(n)
      if (nextIndex == null) return text
      return nextIndex >= 0 ? getSelectedImageMentionLabel(nextIndex) : '@已移除图片'
    })
}

export type PromptMentionPart =
  | { type: 'text'; text: string }
  | { type: 'mention'; text: string; imageIndex: number; mentionText?: string }
  | { type: 'mention'; text: string; mentionText: string; imageIndex?: never }

export function getPromptMentionParts(prompt: string, inputImages: InputImage[]): PromptMentionPart[] {
  const parts: PromptMentionPart[] = []
  let lastIndex = 0

  for (const match of prompt.matchAll(SELECTED_MENTION_RE)) {
    const text = match[1]
    const index = match[2] ? Number(match[2]) - 1 : null
    if (match.index == null) continue
    if (index != null && !inputImages[index]) continue

    if (match.index > lastIndex) {
      parts.push({ type: 'text', text: stripImageMentionMarkers(prompt.slice(lastIndex, match.index)) })
    }
    parts.push(index == null
      ? { type: 'mention', text, mentionText: getSelectedTextMentionLabel(text) }
      : { type: 'mention', text, imageIndex: index, ...(match[0].includes(MENTION_DATA_START) ? { mentionText: match[0] } : {}) })
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < prompt.length) {
    parts.push({ type: 'text', text: stripImageMentionMarkers(prompt.slice(lastIndex)) })
  }

  return parts.length > 0 ? parts : [{ type: 'text', text: stripImageMentionMarkers(prompt) }]
}

export function replaceImageMentionsForApi(prompt: string, imageCount?: number, formatImage?: (index: number) => string): string {
  return expandImageCommentMentions(prompt).replace(SELECTED_IMAGE_MENTION_RE, (text, n) => {
    const index = Number(n) - 1
    if (imageCount != null && (index < 0 || index >= imageCount)) return stripImageMentionMarkers(text)
    return formatImage ? formatImage(index) : `[image ${n}]`
  })
}

function parseImageComments(data: string): ImageComment[] {
  try {
    const value: unknown = JSON.parse(decodeURIComponent(data))
    if (!Array.isArray(value)) return []
    // 数据来自持久化的提示词，逐项校验
    return value.flatMap((item) => {
      if (!item || typeof item !== 'object') return []
      const comment = item as Record<string, unknown>
      if (typeof comment.x !== 'number' || typeof comment.y !== 'number' || typeof comment.text !== 'string') return []
      return [{ x: Math.min(1, Math.max(0, comment.x)), y: Math.min(1, Math.max(0, comment.y)), text: comment.text }]
    })
  } catch {
    return []
  }
}

/** 评论胶囊：显示为“@图N 评论”，评论数据经 URI 编码附在隐藏数据段中，不含引号等需要转义的字符 */
export function getImageCommentMention(index: number, comments: ImageComment[]) {
  const data = comments.map((comment) => ({
    x: Math.round(comment.x * 10000) / 10000,
    y: Math.round(comment.y * 10000) / 10000,
    text: comment.text.replace(/[\u2063-\u2065]/g, ''),
  }))
  return `${MENTION_START}@图${index + 1} 评论${MENTION_DATA_START}${encodeURIComponent(JSON.stringify(data))}${MENTION_END}`
}

export function getImageComments(prompt: string, index: number): ImageComment[] {
  for (const match of prompt.matchAll(IMAGE_COMMENT_MENTION_RE)) {
    if (Number(match[1]) - 1 === index) return parseImageComments(match[2])
  }
  return []
}

/**
 * 更新某张图片的评论胶囊：已有胶囊则原地替换，评论为空时移除；
 * 没有胶囊时替换可见文本区间 [visibleStart, visibleEnd)，即插入到光标处并覆盖选中内容（超出范围则追加到末尾）。
 */
export function upsertImageCommentMention(prompt: string, index: number, comments: ImageComment[], visibleStart: number, visibleEnd = visibleStart) {
  let found = false
  const next = prompt.replace(IMAGE_COMMENT_MENTION_RE, (text, n) => {
    if (Number(n) - 1 !== index || found) return text
    found = true
    return comments.length ? getImageCommentMention(index, comments) : ''
  })
  if (found || !comments.length) return { prompt: next, cursor: null }
  const start = getPromptIndexFromVisibleIndex(prompt, visibleStart)
  const end = getPromptIndexFromVisibleIndex(prompt, visibleEnd)
  const mention = getImageCommentMention(index, comments)
  return {
    prompt: `${prompt.slice(0, start)}${mention}${prompt.slice(end)}`,
    // 新插入时返回胶囊之后的可见偏移，供调用方更新光标
    cursor: stripImageMentionMarkers(prompt.slice(0, start) + mention).length,
  }
}

/** 把评论胶囊展开为普通图片提及加评论列表；任务中保存原始胶囊以便复用，发送请求和展示时再展开 */
export function expandImageCommentMentions(prompt: string) {
  // 评论段独占成段：与前后的普通文字、以及其他图片的评论段之间都空一行
  const ensureBlankLine = (text: string, trailing: boolean) => {
    const newlines = (trailing ? /\n*$/ : /^\n*/).exec(text)![0].length
    return '\n'.repeat(Math.max(0, 2 - newlines))
  }
  let result = ''
  let lastIndex = 0
  let afterBlock = false
  const appendText = (text: string) => {
    // 紧贴评论段的行内空白没有意义，去掉后再补空行
    const trimmed = afterBlock ? text.replace(/^[ \t]+/, '') : text
    if (!trimmed) return
    if (afterBlock) result += ensureBlankLine(trimmed, false)
    afterBlock = false
    result += trimmed
  }
  for (const match of prompt.matchAll(IMAGE_COMMENT_MENTION_RE)) {
    appendText(prompt.slice(lastIndex, match.index))
    lastIndex = match.index! + match[0].length
    const comments = parseImageComments(match[2])
    if (!comments.length) continue
    const percent = (value: number) => `${Math.round(value * 100)}%`
    const lines = comments.map((comment, idx) => `${idx + 1}. (X=${percent(comment.x)}, Y=${percent(comment.y)}) ${comment.text}`)
    result = result.replace(/[ \t]+$/, '')
    if (result) result += ensureBlankLine(result, true)
    result += `${getSelectedImageMentionLabel(Number(match[1]) - 1)} notes:\n${lines.join('\n')}`
    afterBlock = true
  }
  appendText(prompt.slice(lastIndex))
  return result
}

/** 任务卡片、详情等直接展示实际发送给接口的提示词原文：图片提及换成 [image N]，评论胶囊展开 */
export function getTaskPromptText(prompt: string, imageCount: number) {
  return stripImageMentionMarkers(replaceImageMentionsForApi(prompt, imageCount))
}
