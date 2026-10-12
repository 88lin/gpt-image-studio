import { describe, expect, it, vi } from 'vitest'

import type { StoredImage, StoredImageThumbnail } from '../types'
import {
  dataUrlToLosslessBlob,
  disableBlobStorage,
  fromImageRecord,
  fromThumbnailRecord,
  toImageRecord,
  toThumbnailRecord,
} from './imageBlob'

const PNG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='

describe('imageBlob', () => {
  it('只把能原样还原的 dataUrl 转成 Blob', async () => {
    const blob = dataUrlToLosslessBlob(PNG)
    expect(blob?.type).toBe('image/png')
    expect(blob?.size).toBe(atob(PNG.split(',')[1]).length)

    expect(dataUrlToLosslessBlob('data:image/svg+xml;base64,PHN2Zy8+')?.type).toBe('image/svg+xml')
    // 非规范 base64、非 base64、mime 会被 Blob 改写（大写）时保留字符串
    expect(dataUrlToLosslessBlob('data:image/png;base64,AAE')).toBeUndefined()
    expect(dataUrlToLosslessBlob('data:image/png;base64,AB==')).toBeUndefined()
    expect(dataUrlToLosslessBlob('data:text/plain,hello')).toBeUndefined()
    expect(dataUrlToLosslessBlob('data:image/PNG;base64,iVBORw0KGgo=')).toBeUndefined()
    expect(dataUrlToLosslessBlob('not a data url')).toBeUndefined()
  })

  it('原图写入时转成 Blob，读回得到完全相同的 dataUrl 与元数据', async () => {
    const image: StoredImage = { id: 'a', dataUrl: PNG, createdAt: 1, source: 'generated', width: 1, height: 1 }
    const record = toImageRecord(image)

    expect('dataUrl' in record).toBe(false)
    expect(record.blob).toBeInstanceOf(Blob)
    expect(record).toMatchObject({ id: 'a', createdAt: 1, source: 'generated', width: 1, height: 1 })
    await expect(fromImageRecord(record)).resolves.toEqual(image)
  })

  it('无法无损转换的原图保留字符串', () => {
    const image: StoredImage = { id: 'raw', dataUrl: 'data:image/png;base64,AAE' }
    expect(toImageRecord(image)).toBe(image)
  })

  it('读取时兼容旧版字符串记录与新版 Blob 记录', async () => {
    const legacy = { id: 'old', dataUrl: PNG, width: 1, height: 1, thumbnailDataUrl: 'data:image/webp;base64,AA==' }
    const current = toImageRecord({ id: 'new', dataUrl: PNG, source: 'upload' })

    const [oldImage, newImage, missing] = await Promise.all([fromImageRecord(legacy), fromImageRecord(current), fromImageRecord(undefined)])
    expect(oldImage).toBe(legacy)
    expect(newImage).toEqual({ id: 'new', dataUrl: PNG, source: 'upload' })
    expect(missing).toBeUndefined()
  })

  it('缩略图同样转成 Blob 并兼容旧格式', async () => {
    const webp = 'data:image/webp;base64,UklGRhYAAABXRUJQVlA4TAoAAAAvAAAAAEX/I/of'
    const thumbnail: StoredImageThumbnail = { id: 't', thumbnailDataUrl: webp, width: 10, height: 20, thumbnailVersion: 2 }
    const record = toThumbnailRecord(thumbnail)

    expect('thumbnailDataUrl' in record).toBe(false)
    expect(record.blob?.type).toBe('image/webp')
    expect(record.thumbnailVersion).toBe(2)
    await expect(fromThumbnailRecord(record)).resolves.toEqual(thumbnail)
    await expect(fromThumbnailRecord(thumbnail)).resolves.toBe(thumbnail)
  })

  it('Blob 读取失败时视为不存在并记录警告', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const broken = { arrayBuffer: () => Promise.reject(new Error('NotReadableError')), type: 'image/png' } as unknown as Blob

    await expect(fromImageRecord({ id: 'broken', blob: broken })).resolves.toBeUndefined()
    await expect(fromThumbnailRecord({ id: 'broken', blob: broken, thumbnailVersion: 2 })).resolves.toBeUndefined()
    expect(warn).toHaveBeenCalledTimes(2)
    warn.mockRestore()
  })

  // 修改模块状态，放在最后
  it('浏览器无法保存 Blob 后改回存字符串，已有 Blob 记录仍可读取', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const blobRecord = toImageRecord({ id: 'before', dataUrl: PNG })
    disableBlobStorage(new Error('DataCloneError'))

    const image: StoredImage = { id: 'after', dataUrl: PNG }
    expect(toImageRecord(image)).toBe(image)
    const thumbnail: StoredImageThumbnail = { id: 'after', thumbnailDataUrl: PNG, thumbnailVersion: 2 }
    expect(toThumbnailRecord(thumbnail)).toBe(thumbnail)
    await expect(fromImageRecord(blobRecord)).resolves.toEqual({ id: 'before', dataUrl: PNG })
    expect(warn).toHaveBeenCalledOnce()
    warn.mockRestore()
  })
})
