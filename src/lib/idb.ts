const DB_NAME = 'gpt-image-playground'
// v4：缩略图 store 按 thumbnailVersion 建索引，启动时不读取图片即可知道哪些缺少缩略图
const DB_VERSION = 4
export const STORE_TASKS = 'tasks'
export const STORE_IMAGES = 'images'
export const STORE_THUMBNAILS = 'thumbnails'
export const STORE_AGENT_CONVERSATIONS = 'agentConversations'
export const THUMBNAIL_VERSION_INDEX = 'thumbnailVersion'

let dbPromise: Promise<IDBDatabase> | null = null
let blocked = false
const blockedListeners = new Set<() => void>()

function setBlocked(value: boolean) {
  if (blocked === value) return
  blocked = value
  for (const listener of blockedListeners) listener()
}

/** 打开数据库是否被其他标签页的旧连接阻塞（升级需等旧连接关闭），供界面提示；解除后打开请求自动继续 */
export function isDbBlocked() {
  return blocked
}

export function subscribeDbBlocked(listener: () => void) {
  blockedListeners.add(listener)
  return () => {
    blockedListeners.delete(listener)
  }
}

/** 复用同一个连接；其他标签页升级数据库时主动关闭，避免阻塞升级，下次访问再重新打开 */
export function openDB(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION)
    req.onupgradeneeded = () => {
      setBlocked(false)
      const db = req.result
      if (!db.objectStoreNames.contains(STORE_TASKS)) {
        db.createObjectStore(STORE_TASKS, { keyPath: 'id' })
      }
      if (!db.objectStoreNames.contains(STORE_IMAGES)) {
        db.createObjectStore(STORE_IMAGES, { keyPath: 'id' })
      }
      const thumbnails = db.objectStoreNames.contains(STORE_THUMBNAILS)
        ? req.transaction!.objectStore(STORE_THUMBNAILS)
        : db.createObjectStore(STORE_THUMBNAILS, { keyPath: 'id' })
      if (!thumbnails.indexNames.contains(THUMBNAIL_VERSION_INDEX)) {
        thumbnails.createIndex(THUMBNAIL_VERSION_INDEX, 'thumbnailVersion')
      }
      if (!db.objectStoreNames.contains(STORE_AGENT_CONVERSATIONS)) {
        db.createObjectStore(STORE_AGENT_CONVERSATIONS, { keyPath: 'id' })
      }
    }
    req.onsuccess = () => {
      setBlocked(false)
      const db = req.result
      db.onversionchange = () => {
        db.close()
        dbPromise = null
      }
      db.onclose = () => {
        dbPromise = null
      }
      resolve(db)
    }
    req.onerror = () => {
      setBlocked(false)
      dbPromise = null
      reject(req.error)
    }
    req.onblocked = () => {
      console.warn('数据库升级等待其他标签页关闭旧连接')
      setBlocked(true)
    }
  })
  return dbPromise
}

/** 读写事务等到提交完成才算成功：空间不足、写入 Blob 失败等错误可能在提交阶段才报出 */
export function dbTransaction<T>(
  storeName: string,
  mode: IDBTransactionMode,
  fn: (store: IDBObjectStore) => IDBRequest<T>,
): Promise<T> {
  return openDB().then(
    (db) =>
      new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, mode)
        const store = tx.objectStore(storeName)
        const req = fn(store)
        if (mode === 'readonly') {
          req.onsuccess = () => resolve(req.result)
          req.onerror = () => reject(req.error)
          return
        }
        tx.oncomplete = () => resolve(req.result)
        tx.onerror = () => reject(tx.error ?? req.error)
        tx.onabort = () => reject(tx.error ?? req.error)
      }),
  )
}
