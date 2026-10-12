import { beforeEach, describe, expect, it, vi } from 'vitest'

import type { StoredImage, StoredImageThumbnail, TaskParams, TaskRecord } from '../types'

const mocks = vi.hoisted(() => ({
  db: {
    CURRENT_THUMBNAIL_VERSION: 2,
    getImage: vi.fn(),
    getImageThumbnail: vi.fn(),
  },
  getStoredImageRecord: vi.fn(),
  getStoredThumbnailRecord: vi.fn(),
}))

vi.mock('./platform', () => ({ isTauri: false }))
vi.mock('./imageCache', () => ({ cacheThumbnail: vi.fn() }))
vi.mock('./db', () => mocks.db)
vi.mock('./imageBlob', async (importOriginal) => ({
  ...await importOriginal<typeof import('./imageBlob')>(),
  getStoredImageRecord: mocks.getStoredImageRecord,
  getStoredThumbnailRecord: mocks.getStoredThumbnailRecord,
}))

import { DEFAULT_SETTINGS } from './apiProfiles'
import { getExportImageSizes, readExportImages } from './exportImages'
import { buildExportZip, getExportFileEstimatedBytes, readExportZip } from './exportZip'
import { getDataUrlDecodedByteSize } from './imageApiShared'
import { toImageRecord, toThumbnailRecord } from './imageBlob'

// 按 dataUrl 解码后的字节数估算，作为只取文件大小估算的对照
const estimateFromDataUrl = (image: StoredImage, thumbnail?: StoredImageThumbnail) => getExportFileEstimatedBytes(
  getDataUrlDecodedByteSize(image.dataUrl),
  thumbnail?.thumbnailDataUrl ? getDataUrlDecodedByteSize(thumbnail.thumbnailDataUrl) : undefined,
)

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

const images: StoredImage[] = [
  { id: 'png', dataUrl: 'data:image/png;base64,iVBORw0KGgo=', source: 'generated', createdAt: 1700000000100, width: 10, height: 20 },
  { id: 'jpeg', dataUrl: 'data:image/jpeg;base64,/9j/4AAQ', source: 'upload' },
  // 非 image/<单词> 的 mime、无法转成 Blob 的 dataUrl、尚未迁移的旧记录都回退到 dataUrl
  { id: 'svg', dataUrl: 'data:image/svg+xml;base64,PHN2Zy8+', source: 'upload' },
  { id: 'raw', dataUrl: 'data:image/png;base64,AAE', source: 'upload' },
  { id: 'legacy', dataUrl: 'data:image/webp;base64,UklGRg==', source: 'generated' },
]
const thumbnails: StoredImageThumbnail[] = [
  { id: 'png', thumbnailDataUrl: 'data:image/webp;base64,UklGRiQ=', width: 10, height: 20, thumbnailVersion: 2 },
  { id: 'jpeg', thumbnailDataUrl: 'data:image/webp;base64,UklGRig=', width: 30, height: 40, thumbnailVersion: 2 },
  { id: 'svg', thumbnailDataUrl: 'data:image/webp;base64,UklGRiw=', thumbnailVersion: 2 },
  { id: 'legacy', thumbnailDataUrl: 'data:image/webp;base64,UklGRjA=', thumbnailVersion: 2 },
]
// 模拟 IndexedDB：legacy 保持旧版字符串格式，其余按新版写入；raw 的缩略图是旧版本，导出时重新生成
function storeLikeIndexedDb() {
  const imageRecords = new Map(images.map((image) => [image.id, image.id === 'legacy' ? image : toImageRecord(image)]))
  const thumbnailRecords = new Map(thumbnails.map((thumbnail) => [thumbnail.id, thumbnail.id === 'legacy' ? thumbnail : toThumbnailRecord(thumbnail)]))
  thumbnailRecords.set('raw', toThumbnailRecord({ id: 'raw', thumbnailDataUrl: 'data:image/webp;base64,AAAA', thumbnailVersion: 1 }))
  mocks.getStoredImageRecord.mockImplementation(async (id: string) => imageRecords.get(id))
  mocks.getStoredThumbnailRecord.mockImplementation(async (id: string) => thumbnailRecords.get(id))
}
const rawFresh: StoredImageThumbnail = { id: 'raw', thumbnailDataUrl: 'data:image/webp;base64,UklGRjQ=', thumbnailVersion: 2 }

describe('exportImages（网页版）', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    storeLikeIndexedDb()
    mocks.db.getImageThumbnail.mockImplementation(async (id: string) => id === 'raw' ? rawFresh : thumbnails.find((thumbnail) => thumbnail.id === id))
  })

  it('直接读取 Blob 导出的 ZIP 与经 dataUrl 导出的逐字节一致', async () => {
    const base = {
      options: { exportConfig: true, exportTasks: true },
      exportedAt: 1700000001000,
      settings: DEFAULT_SETTINGS,
      tasks: [task('t1', ['png', 'jpeg'], ['svg']), task('t2', ['raw', 'legacy'])],
      favoriteCollections: [],
      defaultFavoriteCollectionId: null,
      agentConversations: [],
    }
    const viaDataUrl = await buildExportZip({ ...base, images, thumbnailsByImageId: new Map([...thumbnails, rawFresh].map((thumbnail) => [thumbnail.id, thumbnail])) })

    const read = await readExportImages(images.map((image) => image.id))
    expect(read.images.map((image) => image.id)).toEqual(images.map((image) => image.id))
    expect(read.images.filter((image) => 'bytes' in image).map((image) => image.id)).toEqual(['png', 'jpeg'])
    expect(mocks.db.getImageThumbnail.mock.calls.map(([id]) => id)).toEqual(['raw', 'legacy'])
    const viaBlob = await buildExportZip({ ...base, images: read.images, thumbnailsByImageId: read.thumbnailsByImageId })

    expect(viaBlob.manifest).toEqual(viaDataUrl.manifest)
    const [a, b] = [(await readExportZip(viaDataUrl.bytes)).files, (await readExportZip(viaBlob.bytes)).files]
    expect(Object.keys(b).sort()).toEqual(Object.keys(a).sort())
    expect(viaBlob.bytes).toEqual(viaDataUrl.bytes)
  })

  it('分卷估算只取大小，不读出图片，结果与读出 dataUrl 估算一致', async () => {
    const sizes = await getExportImageSizes(['png', 'raw', 'legacy', 'missing'])
    expect(sizes).toEqual([
      { id: 'png', bytes: estimateFromDataUrl(images[0], thumbnails[0]) },
      { id: 'raw', bytes: estimateFromDataUrl(images[3]) },
      { id: 'legacy', bytes: estimateFromDataUrl(images[4], thumbnails[3]) },
    ])
    expect(mocks.db.getImage).not.toHaveBeenCalled()
    expect(mocks.db.getImageThumbnail).not.toHaveBeenCalled()
  })
})
