import type { StoredImage, StoredImageThumbnail } from '../types'
import { CURRENT_THUMBNAIL_VERSION, getImage, getImageThumbnail } from './db'
import { getImageFile, getImageStats, getThumbnailFile } from './dbTauri'
import { getExportFileEstimatedBytes, type ExportImageFile, type ExportImageSize, type ExportThumbnailFile } from './exportZip'
import { getDataUrlDecodedByteSize } from './imageApiShared'
import { fromImageRecord, getStoredImageRecord, getStoredThumbnailRecord } from './imageBlob'
import { cacheThumbnail } from './imageCache'
import { isTauri } from './platform'

// 经 dataUrl 导出时 dataUrlToBytes 只从 data:image/<单词>;base64 推出扩展名，其他情况一律为 png 且解码方式不同。
// 客户端文件与网页版 Blob 只对这种 mime 直接使用二进制，其余回退到 dataUrl，保证 ZIP 内容与经 dataUrl 导出时完全一致
const SIMPLE_IMAGE_MIME = /^image\/(\w+)$/

/** 估算每张图片在备份中的大小，只取文件大小、不读出图片；缺少当前版本缩略图时不计缩略图 */
export async function getExportImageSizes(imageIds: string[], onProgress?: (done: number) => void): Promise<ExportImageSize[]> {
  if (isTauri) {
    const ids = new Set(imageIds)
    return (await getImageStats())
      .filter((stat) => ids.has(stat.id))
      .map((stat) => ({
        id: stat.id,
        bytes: getExportFileEstimatedBytes(stat.bytes, stat.thumbnailVersion === CURRENT_THUMBNAIL_VERSION ? stat.thumbnailBytes ?? undefined : undefined),
      }))
  }

  const sizes: ExportImageSize[] = []
  for (const [idx, id] of imageIds.entries()) {
    onProgress?.(idx)
    const image = await getStoredImageRecord(id)
    if (!image) continue
    const thumbnail = await getStoredThumbnailRecord(id)
    const thumbnailBytes = thumbnail?.thumbnailVersion !== CURRENT_THUMBNAIL_VERSION
      ? undefined
      : thumbnail.blob?.size ?? (thumbnail.thumbnailDataUrl ? getDataUrlDecodedByteSize(thumbnail.thumbnailDataUrl) : undefined)
    sizes.push({ id, bytes: getExportFileEstimatedBytes(image.blob?.size ?? getDataUrlDecodedByteSize(image.dataUrl ?? ''), thumbnailBytes) })
  }
  return sizes
}

/**
 * 读取一批要导出的原图和缩略图，按传入顺序排列（ZIP 内容依赖顺序）。客户端直接取文件二进制、8 张一批并发读取；
 * 网页版逐张读取。缩略图缺失或过期时与网页版一样经 getImageThumbnail 重新生成，生成需解码原图，逐张执行。
 * onProgress 在每批读完后收到已读取的张数
 */
export async function readExportImages(ids: string[], onProgress?: (done: number) => void) {
  const images: Array<StoredImage | ExportImageFile> = []
  const thumbnailsByImageId = new Map<string, StoredImageThumbnail | ExportThumbnailFile>()
  const batchSize = isTauri ? 8 : 1
  for (let start = 0; start < ids.length; start += batchSize) {
    const entries = await Promise.all(ids.slice(start, start + batchSize).map((id) => readExportImage(id)))
    for (const entry of entries) {
      if (!entry) continue
      images.push(entry.image)
      if (entry.thumbnail) {
        thumbnailsByImageId.set(entry.image.id, entry.thumbnail)
        continue
      }
      const thumbnail = await getImageThumbnail(entry.image.id)
      if (!thumbnail?.thumbnailDataUrl) continue
      thumbnailsByImageId.set(entry.image.id, thumbnail)
      cacheThumbnail(entry.image.id, {
        src: thumbnail.thumbnailDataUrl,
        width: thumbnail.width,
        height: thumbnail.height,
        thumbnailVersion: thumbnail.thumbnailVersion,
      })
    }
    onProgress?.(Math.min(start + batchSize, ids.length))
  }
  return { images, thumbnailsByImageId }
}

/** 读取原图；顺带读取可直接使用的缩略图二进制，返回的 thumbnail 为空表示需要 getImageThumbnail */
async function readExportImage(id: string): Promise<{ image: StoredImage | ExportImageFile; thumbnail?: ExportThumbnailFile } | undefined> {
  if (!isTauri) return readWebExportImage(id)

  const file = await getImageFile(id)
  if (!file) return undefined
  const ext = SIMPLE_IMAGE_MIME.exec(file.meta.mime)?.[1]
  const image = ext
    ? {
      id,
      ext,
      bytes: file.bytes,
      createdAt: file.meta.createdAt ?? undefined,
      source: file.meta.source ?? undefined,
      width: file.meta.width ?? undefined,
      height: file.meta.height ?? undefined,
    }
    : await getImage(id)
  if (!image) return undefined

  const thumbnailFile = await getThumbnailFile(id)
  const thumbnailExt = thumbnailFile && SIMPLE_IMAGE_MIME.exec(thumbnailFile.meta.mime)?.[1]
  if (!thumbnailFile || !thumbnailExt || thumbnailFile.meta.thumbnailVersion !== CURRENT_THUMBNAIL_VERSION) return { image }
  return {
    image,
    thumbnail: {
      id,
      ext: thumbnailExt,
      bytes: thumbnailFile.bytes,
      width: thumbnailFile.meta.width ?? undefined,
      height: thumbnailFile.meta.height ?? undefined,
      thumbnailVersion: thumbnailFile.meta.thumbnailVersion,
    },
  }
}

/** 网页版：Blob 记录直接取二进制，省去 base64 编码再解码；旧版字符串记录仍经 dataUrl */
async function readWebExportImage(id: string): Promise<{ image: StoredImage | ExportImageFile; thumbnail?: ExportThumbnailFile } | undefined> {
  const rec = await getStoredImageRecord(id)
  if (!rec) return undefined
  const ext = rec.blob && SIMPLE_IMAGE_MIME.exec(rec.blob.type)?.[1]
  const { blob, dataUrl, ...meta } = rec
  const image = ext && blob
    ? { ...meta, ext, bytes: new Uint8Array(await blob.arrayBuffer()) }
    : await fromImageRecord(rec)
  if (!image) return undefined

  const thumbnail = await getStoredThumbnailRecord(id)
  const thumbnailExt = thumbnail?.blob && SIMPLE_IMAGE_MIME.exec(thumbnail.blob.type)?.[1]
  if (!thumbnail?.blob || !thumbnailExt || thumbnail.thumbnailVersion !== CURRENT_THUMBNAIL_VERSION) return { image }
  return {
    image,
    thumbnail: {
      id,
      ext: thumbnailExt,
      bytes: new Uint8Array(await thumbnail.blob.arrayBuffer()),
      width: thumbnail.width,
      height: thumbnail.height,
      thumbnailVersion: thumbnail.thumbnailVersion,
    },
  }
}
