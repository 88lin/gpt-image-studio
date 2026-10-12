import type { StoredImage, StoredImageThumbnail } from '../types'
import { blobToDataUrl } from './dataUrl'
import { dataUrlToPayload, RAW_DATA_URL_MIME } from './dbTauri'
import { dbTransaction, openDB, STORE_IMAGES, STORE_THUMBNAILS, THUMBNAIL_VERSION_INDEX } from './idb'

/**
 * 网页版 IndexedDB 中的原图与缩略图记录。新版把 dataUrl 解码成 Blob 存入 blob 字段（体积约为字符串的 3/4），
 * 旧版记录和无法无损还原的 dataUrl 仍是字符串，读取时两种格式都兼容
 */
export type StoredImageRecord = Omit<StoredImage, 'dataUrl'> & { dataUrl?: string; blob?: Blob }
export type StoredThumbnailRecord = Omit<StoredImageThumbnail, 'thumbnailDataUrl'> & { thumbnailDataUrl?: string; blob?: Blob }

const MIGRATED_KEY = 'gpt-image-playground:image-blob-migrated'
const DISABLED_KEY = 'gpt-image-playground:image-blob-disabled'

// 存 Blob 失败（如部分旧版 Safari 或隐私模式）后改回存字符串；读回不一致说明浏览器存 Blob 不可靠，记下标记以后一直存字符串
let blobStorageEnabled = true
try {
  blobStorageEnabled = !localStorage.getItem(DISABLED_KEY)
} catch {
  // localStorage 不可用（测试环境等）时按支持 Blob 处理
}

export function disableBlobStorage(reason: unknown, persist = false) {
  if (persist) {
    try {
      localStorage.setItem(DISABLED_KEY, '1')
    } catch {
      // 标记写不进去时只在本次会话内停用
    }
  }
  if (!blobStorageEnabled) return
  blobStorageEnabled = false
  console.warn('当前浏览器无法在 IndexedDB 中可靠地保存 Blob，改为保存 dataUrl 字符串', reason)
}

/**
 * dataUrl 转成 Blob。图片 id 是 dataUrl 原串的哈希，读回时必须得到完全相同的字符串，
 * 因此只转换规范 base64、且 mime 经 Blob 规范化（转小写等）后不变的 dataUrl，其他返回 undefined
 */
export function dataUrlToLosslessBlob(dataUrl: string): Blob | undefined {
  const payload = dataUrlToPayload(dataUrl)
  if (payload.mime === RAW_DATA_URL_MIME) return undefined
  const blob = new Blob([payload.bytes as BlobPart], { type: payload.mime })
  return blob.type === payload.mime ? blob : undefined
}

export function toImageRecord(image: StoredImage): StoredImageRecord {
  const blob = blobStorageEnabled ? dataUrlToLosslessBlob(image.dataUrl) : undefined
  if (!blob) return image
  const { dataUrl, ...rest } = image
  return { ...rest, blob }
}

export function toThumbnailRecord(thumbnail: StoredImageThumbnail): StoredThumbnailRecord {
  const blob = blobStorageEnabled ? dataUrlToLosslessBlob(thumbnail.thumbnailDataUrl) : undefined
  if (!blob) return thumbnail
  const { thumbnailDataUrl, ...rest } = thumbnail
  return { ...rest, blob }
}

/** 浏览器原生 FileReader 编码 base64 比在 JS 中拼接快数倍；没有 FileReader（测试环境）或输出不是预期格式时退回手动编码 */
async function readBlobAsDataUrl(blob: Blob) {
  if (typeof FileReader === 'undefined') return blobToDataUrl(blob)
  const result = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result))
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(blob)
  })
  return result.startsWith(`data:${blob.type};base64,`) ? result : blobToDataUrl(blob)
}

/** Blob 读取失败时视为图片不存在，避免一张坏图让启动恢复等流程整体失败 */
export async function fromImageRecord(rec: StoredImageRecord | undefined): Promise<StoredImage | undefined> {
  if (!rec?.blob) return rec as StoredImage | undefined
  const { blob, ...rest } = rec
  try {
    return { ...rest, dataUrl: await readBlobAsDataUrl(blob) }
  } catch (err) {
    console.warn('读取图片失败', rec.id, err)
    return undefined
  }
}

export async function fromThumbnailRecord(rec: StoredThumbnailRecord | undefined): Promise<StoredImageThumbnail | undefined> {
  if (!rec?.blob) return rec as StoredImageThumbnail | undefined
  const { blob, ...rest } = rec
  try {
    return { ...rest, thumbnailDataUrl: await readBlobAsDataUrl(blob) }
  } catch (err) {
    console.warn('读取缩略图失败', rec.id, err)
    return undefined
  }
}

/** 原始记录（Blob 不转换），供显示缩略图、导出等可以直接使用二进制的场景 */
export function getStoredImageRecord(id: string) {
  return dbTransaction<StoredImageRecord | undefined>(STORE_IMAGES, 'readonly', (s) => s.get(id))
}

export function getStoredThumbnailRecord(id: string) {
  return dbTransaction<StoredThumbnailRecord | undefined>(STORE_THUMBNAILS, 'readonly', (s) => s.get(id))
}

/** 已有指定版本缩略图的图片 id，只查索引，不读取缩略图和原图内容 */
export async function getFreshThumbnailIds(version: number): Promise<string[]> {
  const keys = await dbTransaction(STORE_THUMBNAILS, 'readonly', (s) => s.index(THUMBNAIL_VERSION_INDEX).getAllKeys(version))
  return keys.map(String)
}

/** 读取用于显示的缩略图：Blob 直接生成 Blob URL，省去 base64 编码；旧格式仍返回 dataUrl */
export async function getThumbnailSource(id: string, version: number) {
  const rec = await getStoredThumbnailRecord(id)
  if (!rec || rec.thumbnailVersion !== version) return undefined
  const src = rec.blob ? URL.createObjectURL(rec.blob) : rec.thumbnailDataUrl
  if (!src) return undefined
  return { src, width: rec.width, height: rec.height, thumbnailVersion: rec.thumbnailVersion }
}

type WrittenRecord = { original: string; size: number; thumbnailVersion?: unknown }
type MigrationOutcome = { result: 'converted' | 'skipped' | 'kept'; written?: WrittenRecord }

/** 记录仍是迁移写入的那条：缩略图补全等并发写入会换成新内容或新版本，此时不能再拿原串覆盖 */
function isWrittenRecord(rec: Record<string, unknown> | undefined, written: WrittenRecord): rec is Record<string, unknown> & { blob: Blob } {
  return rec?.blob instanceof Blob && rec.blob.size === written.size && rec.thumbnailVersion === written.thumbnailVersion
}

/**
 * 在单个读写事务内读出一条记录，把字符串字段转成 Blob 并写回。转换是同步的，事务内没有异步等待，
 * 与用户同时进行的读写由 IndexedDB 按事务排队，不会互相覆盖。返回被替换的原串和写入的特征，用于写后校验
 */
function convertRecord(storeName: string, field: 'dataUrl' | 'thumbnailDataUrl', id: IDBValidKey) {
  return openDB().then((db) => new Promise<MigrationOutcome>((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite')
    const store = tx.objectStore(storeName)
    let outcome: MigrationOutcome = { result: 'skipped' }
    const req = store.get(id)
    req.onsuccess = () => {
      const rec = req.result as Record<string, unknown> | undefined
      const original = rec?.[field]
      if (!rec || typeof original !== 'string') return
      const blob = dataUrlToLosslessBlob(original)
      if (!blob) {
        outcome = { result: 'kept' }
        return
      }
      const { [field]: _, ...rest } = rec
      store.put({ ...rest, blob })
      outcome = { result: 'converted', written: { original, size: blob.size, thumbnailVersion: rec.thumbnailVersion } }
    }
    tx.oncomplete = () => resolve(outcome)
    tx.onerror = () => reject(tx.error)
    tx.onabort = () => reject(tx.error)
  }))
}

/**
 * 读回刚写入的 Blob 并还原成 dataUrl 与原串比较；读不回来或不一致时，若记录仍是迁移写入的那条就写回原串。
 * 记录已被其他写入替换时视为成功
 */
async function verifyRecord(storeName: string, field: 'dataUrl' | 'thumbnailDataUrl', id: IDBValidKey, written: WrittenRecord) {
  const rec = await dbTransaction<Record<string, unknown> | undefined>(storeName, 'readonly', (s) => s.get(id))
  if (!isWrittenRecord(rec, written)) return true
  try {
    if (await readBlobAsDataUrl(rec.blob) === written.original) return true
  } catch (err) {
    console.warn('读回转换后的图片失败', id, err)
  }
  await openDB().then((db) => new Promise<void>((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite')
    const store = tx.objectStore(storeName)
    const req = store.get(id)
    req.onsuccess = () => {
      const cur = req.result as Record<string, unknown> | undefined
      if (!isWrittenRecord(cur, written)) return
      const { blob, ...rest } = cur
      store.put({ ...rest, [field]: written.original })
    }
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
    tx.onabort = () => reject(tx.error)
  }))
  return false
}

let migrationRunning = false

/**
 * 把旧版以 dataUrl 字符串保存的原图和缩略图逐条转成 Blob。每条单独事务并在写后校验，随时可中断；
 * 下次启动重新扫描，已转换的直接跳过。全部处理完后记下标记，之后启动不再扫描
 */
export async function migrateImagesToBlob() {
  if (migrationRunning || !blobStorageEnabled) return
  try {
    if (localStorage.getItem(MIGRATED_KEY)) return
  } catch {
    // localStorage 不可用时每次启动都扫描一遍，已转换的记录很快跳过
  }
  migrationRunning = true
  let converted = 0
  let kept = 0
  try {
    for (const [storeName, field] of [[STORE_IMAGES, 'dataUrl'], [STORE_THUMBNAILS, 'thumbnailDataUrl']] as const) {
      const ids = await dbTransaction(storeName, 'readonly', (s) => s.getAllKeys())
      for (const id of ids) {
        if (!blobStorageEnabled) return
        try {
          const outcome = await convertRecord(storeName, field, id)
          if (outcome.result === 'kept') {
            kept++
            console.warn('图片无法无损转换为 Blob，保留原格式', id)
          }
          if (outcome.result === 'converted') {
            if (!await verifyRecord(storeName, field, id, outcome.written!)) {
              disableBlobStorage(`读回的 Blob 与原图不一致：${String(id)}`, true)
              return
            }
            converted++
          }
        } catch (err) {
          // 单条写入失败（如空间不足）保留原样，留待下次启动再试
          console.warn('图片转换为 Blob 失败，保留原格式', id, err)
          return
        }
        // 让出主线程，避免长时间占用影响界面和其他读写
        await new Promise((resolve) => setTimeout(resolve, 0))
      }
    }
    try {
      localStorage.setItem(MIGRATED_KEY, '1')
    } catch {
      // 标记写不进去不影响数据，下次启动再扫描一遍
    }
  } catch (err) {
    console.warn('图片存储格式迁移中断，下次启动继续', err)
  } finally {
    migrationRunning = false
    if (converted || kept) console.info(`图片存储格式迁移：转换 ${converted} 条，保留原格式 ${kept} 条`)
  }
}
