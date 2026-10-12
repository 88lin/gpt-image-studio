import { beforeEach, describe, expect, it, vi } from 'vitest'

import type * as DbIndexedDb from './dbIndexedDb'
import type * as Idb from './idb'
import type * as ImageBlob from './imageBlob'

type Row = Record<string, unknown> & { id: string }

// 只实现用到的 IndexedDB 子集：请求在微任务中完成，事务在所有请求结束后的下一个宏任务提交；
// put 抛错模拟提交阶段才失败（请求本身已成功）
const stores: Record<string, Map<string, Row>> = { images: new Map(), thumbnails: new Map() }
const hooks: { onPut?: (store: string, row: Row) => Row; onGet?: (store: string, id: string) => void } = {}

function request<T>(onDone: () => void, fn: () => T) {
  const req: { result?: T; onsuccess?: () => void; onerror?: () => void; error?: unknown } = {}
  queueMicrotask(() => {
    req.result = fn()
    req.onsuccess?.()
    onDone()
  })
  return req
}

const fakeDb = {
  objectStoreNames: { contains: (name: string) => name in stores },
  close() {},
  transaction(name: string) {
    const tx: { oncomplete?: () => void; onerror?: () => void; onabort?: () => void; error: unknown; objectStore: () => unknown } = { error: null, objectStore: () => store }
    let pending = 0
    let failed = false
    const done = () => {
      pending--
      setTimeout(() => {
        if (pending || failed) return
        tx.oncomplete?.()
      })
    }
    const data = stores[name]
    const track = <T>(fn: () => T) => {
      pending++
      return request(done, fn)
    }
    const store = {
      get: (id: string) => track(() => {
        hooks.onGet?.(name, id)
        return data.get(id)
      }),
      getAllKeys: () => track(() => [...data.keys()]),
      put: (row: Row) => track(() => {
        try {
          const next = hooks.onPut ? hooks.onPut(name, row) : row
          data.set(next.id, next)
        } catch (err) {
          failed = true
          tx.error = err
          setTimeout(() => {
            tx.onerror?.()
            tx.onabort?.()
          })
        }
        return row.id
      }),
    }
    return tx
  },
}

vi.stubGlobal('indexedDB', {
  open: () => {
    const req: { result?: unknown; onsuccess?: () => void } = {}
    queueMicrotask(() => {
      req.result = fakeDb
      req.onsuccess?.()
    })
    return req
  },
})

const storage = new Map<string, string>()
vi.stubGlobal('localStorage', {
  getItem: (key: string) => storage.get(key) ?? null,
  setItem: (key: string, value: string) => storage.set(key, value),
})

const PNG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
const WEBP = 'data:image/webp;base64,UklGRhYAAABXRUJQVlA4TAoAAAAvAAAAAEX/I/of'
const MIGRATED_KEY = 'gpt-image-playground:image-blob-migrated'
const DISABLED_KEY = 'gpt-image-playground:image-blob-disabled'

// 每个用例重新加载模块，避免停用 Blob、缓存的连接等模块状态互相影响
let blob: typeof ImageBlob
const named = (name: string) => Object.assign(new Error(name), { name })
// 写入的 Blob 大小不变但内容损坏，模拟浏览器读回的数据不对
const corrupt = (_store: string, row: Row) => (row.blob instanceof Blob ? { ...row, blob: new Blob([new Uint8Array(row.blob.size)], { type: row.blob.type }) } : row)

async function reset() {
  storage.clear()
  hooks.onPut = undefined
  hooks.onGet = undefined
  vi.resetModules()
  blob = await import('./imageBlob')
  stores.images.clear()
  stores.thumbnails.clear()
  stores.images.set('legacy', { id: 'legacy', dataUrl: PNG, width: 1, height: 1, source: 'generated' })
  stores.images.set('raw', { id: 'raw', dataUrl: 'data:image/png;base64,AAE' })
  stores.images.set('current', blob.toImageRecord({ id: 'current', dataUrl: PNG }) as Row)
  stores.thumbnails.set('legacy', { id: 'legacy', thumbnailDataUrl: WEBP, thumbnailVersion: 2, width: 1, height: 1 })
  vi.spyOn(console, 'warn').mockImplementation(() => {})
  vi.spyOn(console, 'info').mockImplementation(() => {})
}

describe('migrateImagesToBlob', () => {
  beforeEach(reset)

  it('把旧版字符串记录转成 Blob，无法无损转换的保留原样，读回内容不变', async () => {
    await blob.migrateImagesToBlob()

    const legacy = stores.images.get('legacy')!
    expect(legacy.dataUrl).toBeUndefined()
    expect(legacy.blob).toBeInstanceOf(Blob)
    expect(legacy).toMatchObject({ width: 1, height: 1, source: 'generated' })
    await expect(blob.fromImageRecord(legacy)).resolves.toEqual({ id: 'legacy', dataUrl: PNG, width: 1, height: 1, source: 'generated' })

    expect(stores.images.get('raw')).toEqual({ id: 'raw', dataUrl: 'data:image/png;base64,AAE' })
    expect(console.warn).toHaveBeenCalledWith(expect.stringContaining('保留原格式'), 'raw')

    const thumbnail = stores.thumbnails.get('legacy')!
    expect(thumbnail.thumbnailDataUrl).toBeUndefined()
    await expect(blob.fromThumbnailRecord(thumbnail as never)).resolves.toMatchObject({ thumbnailDataUrl: WEBP, thumbnailVersion: 2 })

    // 全部处理完后记下标记，之后不再扫描
    expect([...storage.keys()]).toEqual([MIGRATED_KEY])
    stores.images.set('later', { id: 'later', dataUrl: PNG })
    await blob.migrateImagesToBlob()
    expect(stores.images.get('later')?.dataUrl).toBe(PNG)
  })

  it('写入失败时保留原样并中断，下次启动接着转换', async () => {
    hooks.onPut = (store, row) => {
      if (store === 'thumbnails') throw named('QuotaExceededError')
      return row
    }
    await blob.migrateImagesToBlob()

    expect(stores.images.get('legacy')?.blob).toBeInstanceOf(Blob)
    expect(stores.thumbnails.get('legacy')).toMatchObject({ thumbnailDataUrl: WEBP })
    expect(storage.size).toBe(0)

    hooks.onPut = undefined
    await blob.migrateImagesToBlob()
    expect(stores.thumbnails.get('legacy')?.blob).toBeInstanceOf(Blob)
    expect(storage.get(MIGRATED_KEY)).toBe('1')
  })

  it('校验前缩略图已被补全任务换成新版本时视为成功，不用旧内容覆盖', async () => {
    const newer = { id: 'legacy', blob: new Blob([new Uint8Array([9, 9])], { type: 'image/webp' }), thumbnailVersion: 3 }
    let gets = 0
    hooks.onGet = (store, id) => {
      // 第 1 次是转换事务，第 2 次是校验读取：在两者之间被其他写入替换
      if (store === 'thumbnails' && id === 'legacy' && ++gets === 2) stores.thumbnails.set('legacy', newer)
    }
    await blob.migrateImagesToBlob()

    expect(stores.thumbnails.get('legacy')).toBe(newer)
    expect(storage.get(MIGRATED_KEY)).toBe('1')
    expect(storage.has(DISABLED_KEY)).toBe(false)
  })

  it('校验不一致准备写回时记录已被替换，不写回原串', async () => {
    hooks.onPut = corrupt
    const newer = { id: 'legacy', blob: new Blob([new Uint8Array([7])], { type: 'image/png' }), width: 1, height: 1 }
    let gets = 0
    hooks.onGet = (store, id) => {
      // 第 3 次是写回事务里的读取
      if (store === 'images' && id === 'legacy' && ++gets === 3) stores.images.set('legacy', newer)
    }
    await blob.migrateImagesToBlob()

    expect(stores.images.get('legacy')).toBe(newer)
    expect(storage.get(DISABLED_KEY)).toBe('1')
  })

  it('读回的 Blob 与原图不一致时写回原串并停止迁移，记下标记后一直存字符串', async () => {
    hooks.onPut = corrupt
    await blob.migrateImagesToBlob()

    expect(stores.images.get('legacy')).toEqual({ id: 'legacy', dataUrl: PNG, width: 1, height: 1, source: 'generated' })
    expect(stores.thumbnails.get('legacy')).toMatchObject({ thumbnailDataUrl: WEBP })
    expect(storage.has(MIGRATED_KEY)).toBe(false)
    expect(storage.get(DISABLED_KEY)).toBe('1')
    const image = { id: 'x', dataUrl: PNG }
    expect(blob.toImageRecord(image)).toBe(image)

    // 下次启动读取标记：不再存 Blob，也不再迁移
    vi.resetModules()
    blob = await import('./imageBlob')
    expect(blob.toImageRecord(image)).toBe(image)
    hooks.onPut = undefined
    await blob.migrateImagesToBlob()
    expect(stores.thumbnails.get('legacy')).toMatchObject({ thumbnailDataUrl: WEBP })
  })
})

describe('读写事务与写入回退', () => {
  let idb: typeof Idb
  let backend: typeof DbIndexedDb

  beforeEach(async () => {
    await reset()
    idb = await import('./idb')
    backend = await import('./dbIndexedDb')
  })

  it('读写事务在提交完成后才成功，提交阶段的错误会被抛出', async () => {
    hooks.onPut = () => {
      throw named('QuotaExceededError')
    }
    await expect(idb.dbTransaction('images', 'readwrite', (s) => s.put({ id: 'q', dataUrl: PNG }))).rejects.toThrow('QuotaExceededError')
    expect(stores.images.has('q')).toBe(false)

    hooks.onPut = undefined
    await expect(idb.dbTransaction('images', 'readwrite', (s) => s.put({ id: 'ok', dataUrl: PNG }))).resolves.toBe('ok')
    expect(stores.images.has('ok')).toBe(true)
  })

  it('浏览器拒绝保存 Blob（UnknownError、DataCloneError）时改存字符串并停用 Blob', async () => {
    hooks.onPut = (_store, row) => {
      if (row.blob) throw named('UnknownError')
      return row
    }
    await backend.putImage({ id: 'new', dataUrl: PNG })
    expect(stores.images.get('new')).toEqual({ id: 'new', dataUrl: PNG })

    hooks.onPut = undefined
    await backend.putImageThumbnail({ id: 'new', thumbnailDataUrl: WEBP, thumbnailVersion: 2 })
    expect(stores.thumbnails.get('new')).toMatchObject({ thumbnailDataUrl: WEBP })
  })

  it('其他错误照常抛出，不停用 Blob；元数据读取不含图片内容', async () => {
    hooks.onPut = () => {
      throw named('InvalidStateError')
    }
    await expect(backend.putImage({ id: 'new', dataUrl: PNG })).rejects.toThrow('InvalidStateError')
    expect(stores.images.has('new')).toBe(false)

    hooks.onPut = undefined
    await backend.putImage({ id: 'new', dataUrl: PNG, width: 1, height: 1 })
    expect(stores.images.get('new')?.blob).toBeInstanceOf(Blob)
    await expect(backend.getImageMeta('new')).resolves.toEqual({ id: 'new', width: 1, height: 1 })
  })
})
