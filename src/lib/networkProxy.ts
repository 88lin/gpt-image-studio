import { invoke } from '@tauri-apps/api/core'

/** 仅客户端：网络代理设置，保存在本机数据库中，不随备份导出 */
export type ProxyMode = 'system' | 'none' | 'custom'

export interface ProxySetting {
  mode: ProxyMode
  url: string
}

// 启动时预先读取，打开设置时首帧就能显示正确的模式和地址框
let cached: ProxySetting | null = null
let loading: Promise<ProxySetting> | null = null

export function getCachedProxySetting() {
  return cached
}

/** 读取成功后缓存，失败后下次调用会重新读取 */
export function getProxySetting() {
  loading ??= invoke<ProxySetting>('proxy_get')
    .then((setting) => (cached = setting))
    .catch((err) => {
      loading = null
      throw err
    })
  return loading
}

/** 地址不合法时以错误文案拒绝，不保存也不应用；成功时返回规范化后的设置 */
export async function setProxySetting(setting: ProxySetting) {
  const next = await invoke<ProxySetting>('proxy_set', { mode: setting.mode, url: setting.url })
  cached = next
  loading = Promise.resolve(next)
  return next
}
