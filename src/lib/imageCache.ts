import {
  CURRENT_THUMBNAIL_VERSION,
  getImage,
  getImageMeta,
  getImageThumbnail,
} from './db'
import { getImageStats, getThumbnailFile, payloadToDataUrl, RAW_DATA_URL_MIME } from './dbTauri'
import { getFreshThumbnailIds, getThumbnailSource } from './imageBlob'
import { isTauri } from './platform'

/** 从存储读出的 src 是 Blob URL（旧格式记录为 dataUrl），生成或导入时缓存的仍是 dataUrl */
type ImageThumbnail = {
  src: string
  width?: number
  height?: number
  thumbnailVersion?: number
}

const imageCache = new Map<string, string>()
const thumbnailCache = new Map<string, ImageThumbnail>()
const thumbnailBackfillIds = new Map<string, 'visible' | 'background'>()
const thumbnailBackfillRunningIds = new Set<string>()
const thumbnailSubscribers = new Map<string, Set<(thumbnail: ImageThumbnail) => void>>()
// 正在显示某张缩略图的组件数（以订阅计）。使用中的缓存项不淘汰，其 Blob URL 被替换或删除时推迟到无人使用再撤销，
// 避免撤销仍在页面上的图片
const thumbnailUsers = new Map<string, number>()
const pendingRevokeSrcs = new Map<string, string[]>()
let thumbnailBackfillScheduled = false

const MAX_IMAGE_CACHE_ENTRIES = 8
const MAX_THUMBNAIL_CACHE_ENTRIES = 200
const MAX_THUMBNAIL_BACKFILL_CONCURRENT = 4

function releaseThumbnailSrc(id: string, src: string) {
  if (!src.startsWith('blob:')) return
  if (!thumbnailUsers.has(id)) {
    URL.revokeObjectURL(src)
    return
  }
  const pending = pendingRevokeSrcs.get(id)
  if (pending) pending.push(src)
  else pendingRevokeSrcs.set(id, [src])
}

function deleteCachedThumbnail(id: string) {
  const thumbnail = thumbnailCache.get(id)
  if (!thumbnail) return
  thumbnailCache.delete(id)
  releaseThumbnailSrc(id, thumbnail.src)
}

/** 从最久未用的开始淘汰，跳过使用中的项，因此缓存可能暂时超过上限 */
function trimThumbnailCache() {
  for (const id of thumbnailCache.keys()) {
    if (thumbnailCache.size <= MAX_THUMBNAIL_CACHE_ENTRIES) return
    if (!thumbnailUsers.has(id)) deleteCachedThumbnail(id)
  }
}

export function getCachedImage(id: string): string | undefined {
  const dataUrl = imageCache.get(id)
  if (dataUrl) {
    imageCache.delete(id)
    imageCache.set(id, dataUrl)
  }
  return dataUrl
}

export function cacheImage(id: string, dataUrl: string) {
  imageCache.delete(id)
  imageCache.set(id, dataUrl)
  while (imageCache.size > MAX_IMAGE_CACHE_ENTRIES) {
    const oldestKey = imageCache.keys().next().value
    if (oldestKey == null) break
    imageCache.delete(oldestKey)
  }
}

export function deleteCachedImage(id: string) {
  imageCache.delete(id)
}

function getCachedThumbnail(id: string) {
  const thumbnail = thumbnailCache.get(id)
  if (thumbnail?.thumbnailVersion === CURRENT_THUMBNAIL_VERSION) {
    thumbnailCache.delete(id)
    thumbnailCache.set(id, thumbnail)
    return thumbnail
  }
  if (thumbnail) deleteCachedThumbnail(id)
  return undefined
}

export function cacheThumbnail(id: string, thumbnail: ImageThumbnail) {
  if (thumbnail.thumbnailVersion !== CURRENT_THUMBNAIL_VERSION) return
  const old = thumbnailCache.get(id)
  thumbnailCache.delete(id)
  thumbnailCache.set(id, thumbnail)
  if (old && old.src !== thumbnail.src) releaseThumbnailSrc(id, old.src)
  trimThumbnailCache()
}

export function deleteImageCacheEntry(id: string) {
  imageCache.delete(id)
  deleteCachedThumbnail(id)
  thumbnailBackfillIds.delete(id)
  thumbnailBackfillRunningIds.delete(id)
  thumbnailSubscribers.delete(id)
}

export function clearImageCaches() {
  imageCache.clear()
  for (const id of [...thumbnailCache.keys()]) deleteCachedThumbnail(id)
  thumbnailBackfillIds.clear()
}

export async function ensureImageCached(id: string): Promise<string | undefined> {
  const cached = getCachedImage(id)
  if (cached) return cached
  const rec = await getImage(id)
  if (rec) {
    cacheImage(id, rec.dataUrl)
    return rec.dataUrl
  }
  return undefined
}

export async function ensureImageThumbnailCached(id: string): Promise<ImageThumbnail | undefined> {
  const cached = getCachedThumbnail(id)
  if (cached) return cached

  const thumbnail = isTauri ? await readTauriThumbnail(id) : await getThumbnailSource(id, CURRENT_THUMBNAIL_VERSION)
  if (!thumbnail) {
    scheduleThumbnailBackfill([id], 'visible')
    return undefined
  }

  // 并发读取同一张时以先写入缓存的为准；多余的 Blob URL 从未交给组件，立即撤销
  const raced = getCachedThumbnail(id)
  if (raced) {
    if (raced.src !== thumbnail.src && thumbnail.src.startsWith('blob:')) URL.revokeObjectURL(thumbnail.src)
    return raced
  }
  cacheThumbnail(id, thumbnail)
  return thumbnail
}

/** 客户端直接用文件二进制生成 Blob URL，省去 base64 编码和超长 dataUrl 字符串 */
async function readTauriThumbnail(id: string): Promise<ImageThumbnail | undefined> {
  const file = await getThumbnailFile(id)
  if (!file || file.meta.thumbnailVersion !== CURRENT_THUMBNAIL_VERSION) return undefined
  return {
    src: file.meta.mime === RAW_DATA_URL_MIME
      ? payloadToDataUrl(file.meta.mime, file.bytes)
      : URL.createObjectURL(new Blob([file.bytes as BlobPart], { type: file.meta.mime })),
    width: file.meta.width ?? undefined,
    height: file.meta.height ?? undefined,
    thumbnailVersion: file.meta.thumbnailVersion,
  }
}

/** 订阅期间视为该缩略图正在显示：缓存不会淘汰它，其 Blob URL 也不会被撤销 */
export function subscribeImageThumbnail(id: string, callback: (thumbnail: ImageThumbnail) => void) {
  let subscribers = thumbnailSubscribers.get(id)
  if (!subscribers) {
    subscribers = new Set()
    thumbnailSubscribers.set(id, subscribers)
  }
  subscribers.add(callback)
  thumbnailUsers.set(id, (thumbnailUsers.get(id) ?? 0) + 1)
  let active = true
  return () => {
    if (!active) return
    active = false
    subscribers?.delete(callback)
    if (subscribers?.size === 0 && thumbnailSubscribers.get(id) === subscribers) thumbnailSubscribers.delete(id)
    const users = (thumbnailUsers.get(id) ?? 1) - 1
    if (users > 0) {
      thumbnailUsers.set(id, users)
      return
    }
    thumbnailUsers.delete(id)
    for (const src of pendingRevokeSrcs.get(id) ?? []) URL.revokeObjectURL(src)
    pendingRevokeSrcs.delete(id)
    trimThumbnailCache()
  }
}

export function scheduleThumbnailBackfill(ids: Iterable<string>, priority: 'visible' | 'background' = 'background') {
  for (const id of ids) {
    if (getCachedThumbnail(id) || thumbnailBackfillRunningIds.has(id)) continue
    const currentPriority = thumbnailBackfillIds.get(id)
    if (!currentPriority || priority === 'visible') thumbnailBackfillIds.set(id, priority)
  }
  scheduleThumbnailBackfillTick()
}

/**
 * 启动或导入后批量补全缩略图。补全任务会读取原图，因此先筛出缺少当前版本缩略图的图片（客户端查数据库记录，
 * 网页版查缩略图版本索引），避免在后台把全部原图读一遍；查询失败时退回全部补全
 */
export async function scheduleMissingThumbnailBackfill(ids: string[]) {
  try {
    const fresh = new Set(isTauri
      ? (await getImageStats()).filter((stat) => stat.thumbnailVersion === CURRENT_THUMBNAIL_VERSION).map((stat) => stat.id)
      : await getFreshThumbnailIds(CURRENT_THUMBNAIL_VERSION))
    scheduleThumbnailBackfill(ids.filter((id) => !fresh.has(id)))
  } catch (err) {
    console.warn('查询图片信息失败，改为全部补全缩略图', err)
    scheduleThumbnailBackfill(ids)
  }
}

function scheduleThumbnailBackfillTick() {
  if (thumbnailBackfillScheduled || thumbnailBackfillIds.size === 0) return
  thumbnailBackfillScheduled = true

  const run = () => {
    thumbnailBackfillScheduled = false
    void processNextThumbnailBackfill()
  }

  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    window.requestIdleCallback(run, { timeout: 2_000 })
  } else {
    globalThis.setTimeout(run, 250)
  }
}

async function processNextThumbnailBackfill() {
  if (thumbnailBackfillRunningIds.size > 0) return

  const ids = await getNextThumbnailBackfillBatch()
  for (const id of ids) void startThumbnailBackfill(id)

  if (thumbnailBackfillIds.size > 0) scheduleThumbnailBackfillTick()
}

async function getNextThumbnailBackfillBatch() {
  const candidates = getOrderedThumbnailBackfillIds().slice(0, MAX_THUMBNAIL_BACKFILL_CONCURRENT)
  if (candidates.length === 0) return []

  // 只需宽高：客户端查数据库记录（不读文件），网页版取记录元数据；查询失败时按尺寸未知处理（并发 1）
  const stats = isTauri ? new Map((await getImageStats().catch(() => [])).map((stat) => [stat.id, stat])) : undefined
  const sizes = await Promise.all(candidates.map(async (id) => {
    const meta = stats ? stats.get(id) : await getImageMeta(id)
    return { width: meta?.width ?? undefined, height: meta?.height ?? undefined }
  }))
  const concurrency = getThumbnailConcurrencyForBatch(sizes)
  const selected = candidates.slice(0, concurrency)
  for (const id of selected) thumbnailBackfillIds.delete(id)
  return selected
}

function getOrderedThumbnailBackfillIds() {
  const visible: string[] = []
  const background: string[] = []
  for (const [id, priority] of thumbnailBackfillIds) {
    if (priority === 'visible') visible.push(id)
    else background.push(id)
  }
  return [...visible, ...background]
}

function getThumbnailConcurrencyForBatch(sizes: Array<{ width?: number; height?: number }>) {
  let maxMegapixels = 0
  for (const { width, height } of sizes) {
    if (!width || !height) return 1
    maxMegapixels = Math.max(maxMegapixels, (width * height) / 1_000_000)
  }
  if (maxMegapixels >= 8) return 1
  if (maxMegapixels >= 4) return 2
  if (maxMegapixels >= 2) return 3
  return 4
}

async function startThumbnailBackfill(id: string) {
  thumbnailBackfillRunningIds.add(id)

  try {
    if (getCachedThumbnail(id)) return

    const thumbnail = await getImageThumbnail(id)
    if (thumbnail?.thumbnailDataUrl) {
      cacheThumbnail(id, {
        src: thumbnail.thumbnailDataUrl,
        width: thumbnail.width,
        height: thumbnail.height,
        thumbnailVersion: thumbnail.thumbnailVersion,
      })
      thumbnailSubscribers.get(id)?.forEach((callback) => callback({
        src: thumbnail.thumbnailDataUrl,
        width: thumbnail.width,
        height: thumbnail.height,
      }))
    }
  } catch {
    // 缩略图生成失败时保留占位图，后续仍可再次补全。
  } finally {
    thumbnailBackfillRunningIds.delete(id)
    scheduleThumbnailBackfillTick()
  }
}
