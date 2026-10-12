import { beforeEach, describe, expect, it, vi } from 'vitest'

import type { StoredImage, StoredImageThumbnail, TaskParams, TaskRecord } from '../types'

const mocks = vi.hoisted(() => ({
  db: {
    CURRENT_THUMBNAIL_VERSION: 2,
    getImage: vi.fn(),
    getImageThumbnail: vi.fn(),
  },
  getImageFile: vi.fn(),
  getThumbnailFile: vi.fn(),
  getImageStats: vi.fn(),
}))

vi.mock('./platform', () => ({ isTauri: true }))
vi.mock('./imageCache', () => ({ cacheThumbnail: vi.fn() }))
vi.mock('./db', () => mocks.db)
vi.mock('./dbTauri', async (importOriginal) => ({
  ...await importOriginal<typeof import('./dbTauri')>(),
  getImageFile: mocks.getImageFile,
  getThumbnailFile: mocks.getThumbnailFile,
  getImageStats: mocks.getImageStats,
}))

import { DEFAULT_SETTINGS } from './apiProfiles'
import { dataUrlToPayload } from './dbTauri'
import { getExportImageSizes, readExportImages } from './exportImages'
import { buildExportZip, getExportFileEstimatedBytes, readExportZip } from './exportZip'
import { getDataUrlDecodedByteSize } from './imageApiShared'

// 按 dataUrl 解码后的字节数估算，作为只取文件大小估算的对照
const estimateFromDataUrl = (image: StoredImage, thumbnail?: StoredImageThumbnail) => getExportFileEstimatedBytes(
  getDataUrlDecodedByteSize(image.dataUrl),
  thumbnail?.thumbnailDataUrl ? getDataUrlDecodedByteSize(thumbnail.thumbnailDataUrl) : undefined,
)

// 模拟 Rust 侧：按 dataUrlToPayload 的结果保存，读取时返回原始二进制与元数据
function storeLikeRust(images: StoredImage[], thumbnails: StoredImageThumbnail[]) {
  const files = new Map(images.map((image) => {
    const payload = dataUrlToPayload(image.dataUrl)
    return [image.id, {
      meta: { mime: payload.mime, width: image.width ?? null, height: image.height ?? null, source: image.source ?? null, createdAt: image.createdAt ?? null, thumbnailVersion: null },
      bytes: payload.bytes,
    }]
  }))
  const thumbs = new Map(thumbnails.map((thumbnail) => {
    const payload = dataUrlToPayload(thumbnail.thumbnailDataUrl)
    return [thumbnail.id, {
      meta: { mime: payload.mime, width: thumbnail.width ?? null, height: thumbnail.height ?? null, source: null, createdAt: null, thumbnailVersion: thumbnail.thumbnailVersion ?? null },
      bytes: payload.bytes,
    }]
  }))
  mocks.getImageFile.mockImplementation(async (id: string) => files.get(id))
  mocks.getThumbnailFile.mockImplementation(async (id: string) => thumbs.get(id))
  mocks.db.getImage.mockImplementation(async (id: string) => images.find((image) => image.id === id))
  mocks.db.getImageThumbnail.mockImplementation(async (id: string) => thumbnails.find((thumbnail) => thumbnail.id === id))
}

const task = (id: string, outputImages: string[], inputImageIds: string[] = []): TaskRecord => ({
  id,
  prompt: id,
  params: {} as TaskParams,
  inputImageIds,
  outputImages,
  status: 'done',
  error: null,
  createdAt: 1700000000000,
  finishedAt: 1700000000200,
  elapsed: 200,
})

describe('exportImages（客户端）', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('直接读取二进制导出的 ZIP 与网页版经 dataUrl 导出的逐字节一致', async () => {
    const images: StoredImage[] = [
      { id: 'png', dataUrl: 'data:image/png;base64,iVBORw0KGgo=', source: 'generated', createdAt: 1700000000100, width: 10, height: 20 },
      { id: 'jpeg', dataUrl: 'data:image/jpeg;base64,/9j/4AAQ', source: 'upload' },
      // 非 image/<单词> 的 mime 与按原文保存的 dataUrl 回退到 dataUrl，扩展名规则与网页版一致
      { id: 'svg', dataUrl: 'data:image/svg+xml;base64,PHN2Zy8+', source: 'upload' },
      { id: 'raw', dataUrl: 'data:image/png;base64,AAE', source: 'upload' },
      { id: 'stale', dataUrl: 'data:image/webp;base64,UklGRg==', source: 'generated' },
    ]
    const thumbnails: StoredImageThumbnail[] = [
      { id: 'png', thumbnailDataUrl: 'data:image/webp;base64,UklGRiQ=', width: 10, height: 20, thumbnailVersion: 2 },
      { id: 'jpeg', thumbnailDataUrl: 'data:image/webp;base64,UklGRig=', width: 30, height: 40, thumbnailVersion: 2 },
      { id: 'svg', thumbnailDataUrl: 'data:image/webp;base64,UklGRiw=', thumbnailVersion: 2 },
    ]
    storeLikeRust(images, thumbnails)
    // 过期缩略图在磁盘上是旧版本，导出时与网页版一样经 getImageThumbnail 重新生成
    const staleFresh: StoredImageThumbnail = { id: 'stale', thumbnailDataUrl: 'data:image/webp;base64,UklGRjA=', width: 5, height: 5, thumbnailVersion: 2 }
    const files = new Map([['stale', { meta: { mime: 'image/webp', width: 5, height: 5, source: null, createdAt: null, thumbnailVersion: 1 }, bytes: new Uint8Array([1]) }]])
    const thumbFile = mocks.getThumbnailFile.getMockImplementation()!
    mocks.getThumbnailFile.mockImplementation(async (id: string) => files.get(id) ?? thumbFile(id))
    mocks.db.getImageThumbnail.mockImplementation(async (id: string) => id === 'stale' ? staleFresh : thumbnails.find((thumbnail) => thumbnail.id === id))

    const base = {
      options: { exportConfig: true, exportTasks: true },
      exportedAt: 1700000001000,
      settings: DEFAULT_SETTINGS,
      tasks: [task('t1', ['png', 'jpeg'], ['svg']), task('t2', ['raw', 'stale'])],
      favoriteCollections: [],
      defaultFavoriteCollectionId: null,
      agentConversations: [],
    }
    const webThumbnails = new Map([...thumbnails, staleFresh].map((thumbnail) => [thumbnail.id, thumbnail]))
    const web = await buildExportZip({ ...base, images, thumbnailsByImageId: webThumbnails })

    const { images: clientImages, thumbnailsByImageId: clientThumbnails } = await readExportImages(images.map((image) => image.id))
    expect(clientImages.map((image) => image.id)).toEqual(images.map((image) => image.id))
    expect(clientImages.filter((image) => 'bytes' in image).map((image) => image.id)).toEqual(['png', 'jpeg', 'stale'])
    expect('bytes' in clientThumbnails.get('stale')!).toBe(false)
    const client = await buildExportZip({ ...base, images: clientImages, thumbnailsByImageId: clientThumbnails })

    expect(client.manifest).toEqual(web.manifest)
    const [webFiles, clientFiles] = [(await readExportZip(web.bytes)).files, (await readExportZip(client.bytes)).files]
    expect(Object.keys(clientFiles).sort()).toEqual(Object.keys(webFiles).sort())
    for (const [path, bytes] of Object.entries(webFiles)) expect(clientFiles[path]).toEqual(bytes)
    expect(client.bytes).toEqual(web.bytes)
  })

  it('原图缺失时跳过', async () => {
    mocks.getImageFile.mockResolvedValue(undefined)
    await expect(readExportImages(['missing'])).resolves.toEqual({ images: [], thumbnailsByImageId: new Map() })
  })

  it('二进制并发读取，需要重新生成的缩略图逐张生成', async () => {
    const ids = Array.from({ length: 10 }, (_, i) => `img-${i}`)
    mocks.getImageFile.mockImplementation(async () => ({ meta: { mime: 'image/png', width: 1, height: 1, source: null, createdAt: null, thumbnailVersion: null }, bytes: new Uint8Array([1]) }))
    mocks.getThumbnailFile.mockResolvedValue(undefined)
    let running = 0
    let maxRunning = 0
    mocks.db.getImageThumbnail.mockImplementation(async (id: string) => {
      maxRunning = Math.max(maxRunning, ++running)
      await new Promise((resolve) => setTimeout(resolve, 5))
      running--
      return { id, thumbnailDataUrl: 'data:image/webp;base64,AAAA', thumbnailVersion: 2 }
    })
    const { images, thumbnailsByImageId } = await readExportImages(ids)
    expect(images.map((image) => image.id)).toEqual(ids)
    expect(thumbnailsByImageId.size).toBe(10)
    expect(maxRunning).toBe(1)
  })

  it('分卷估算只使用文件大小，结果与网页版读出 dataUrl 估算一致', async () => {
    const image: StoredImage = { id: 'a', dataUrl: 'data:image/png;base64,AAECAwQF' }
    const thumbnail: StoredImageThumbnail = { id: 'a', thumbnailDataUrl: 'data:image/webp;base64,AAEC', thumbnailVersion: 2 }
    mocks.getImageStats.mockResolvedValue([
      { id: 'a', bytes: 6, width: null, height: null, thumbnailBytes: 3, thumbnailVersion: 2 },
      { id: 'b', bytes: 6, width: null, height: null, thumbnailBytes: 3, thumbnailVersion: 1 },
      { id: 'c', bytes: 6, width: null, height: null, thumbnailBytes: null, thumbnailVersion: null },
      { id: 'other', bytes: 1, width: null, height: null, thumbnailBytes: null, thumbnailVersion: null },
    ])
    const sizes = await getExportImageSizes(['a', 'b', 'c'])
    expect(sizes).toEqual([
      { id: 'a', bytes: estimateFromDataUrl(image, thumbnail) },
      { id: 'b', bytes: estimateFromDataUrl(image) },
      { id: 'c', bytes: estimateFromDataUrl(image) },
    ])
    expect(mocks.getImageFile).not.toHaveBeenCalled()
    expect(mocks.db.getImage).not.toHaveBeenCalled()
  })
})
