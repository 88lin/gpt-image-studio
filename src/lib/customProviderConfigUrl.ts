import type { ImportedProviderSettings } from './apiProfiles'
import { importCustomProviderSettingsFromJson } from './apiProfiles'
import { readRuntimeEnv } from './runtimeEnv'

const DEFAULT_API_URL = readRuntimeEnv(import.meta.env.VITE_DEFAULT_API_URL)

type FetchLike = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>

export function isImportableConfigUrl(value: string): boolean {
  const url = value.trim()
  if (!url) return false

  try {
    const parsed = new URL(url)
    return parsed.searchParams.has('settings') || parsed.pathname.toLowerCase().endsWith('.json')
  } catch {
    return false
  }
}

export function getCustomProviderConfigUrl(defaultApiUrl = DEFAULT_API_URL): string {
  const url = defaultApiUrl.trim()
  return isImportableConfigUrl(url) ? url : ''
}

function getSettingsJsonTextFromUrl(value: string): string | null {
  try {
    const raw = new URL(value).searchParams.get('settings')
    if (!raw) return null

    const parsed = JSON.parse(raw)
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed) && 'settings' in parsed) {
      return JSON.stringify((parsed as { settings?: unknown }).settings ?? null)
    }
    return raw
  } catch {
    return null
  }
}

export async function loadCustomProviderSettingsFromUrl(
  configUrl: string,
  fetcher: FetchLike = fetch,
): Promise<ImportedProviderSettings | null> {
  const url = configUrl.trim()
  if (!url) return null

  const settingsJsonText = getSettingsJsonTextFromUrl(url)
  if (settingsJsonText) return importCustomProviderSettingsFromJson(settingsJsonText)

  const response = await fetcher(url, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(`自定义服务商配置 URL 请求失败：HTTP ${response.status}`)
  }

  return importCustomProviderSettingsFromJson(await response.text())
}
