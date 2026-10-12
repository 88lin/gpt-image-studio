import { isTauri } from './platform'
import { tauriStorage } from './tauriStorage'

// 更新检查、公告等只属于本机的记录：网页版用 localStorage，客户端用 SQLite kv；两者都不在设置中，不会进入备份 ZIP
export function readLocal(key: string) {
  try {
    return (isTauri ? tauriStorage.getItem(key) : localStorage.getItem(key)) as string | null
  } catch {
    return null
  }
}

export function writeLocal(key: string, value: string) {
  try {
    if (isTauri) tauriStorage.setItem(key, value)
    else localStorage.setItem(key, value)
  } catch (err) {
    console.warn(`保存本地记录失败（${key}）：`, err)
  }
}
