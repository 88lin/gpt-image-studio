import type { ApiMode, AppSettings } from '../types'
import { normalizeBaseUrl } from './devProxy'
import {
  createDefaultOpenAIProfile,
  DEFAULT_IMAGES_MODEL,
  DEFAULT_RESPONSES_MODEL,
  findEquivalentApiProfile,
  mergeImportedSettings,
  normalizeSettings,
  normalizeStreamPartialImages,
} from './apiProfiles'

const URL_SETTING_KEYS = ['settings', 'apiUrl', 'apiKey', 'codexCli', 'apiMode', 'model', 'streamImages', 'streamPartialImages']

function getProfileDedupKey(profile: Pick<AppSettings['profiles'][number], 'provider' | 'baseUrl' | 'apiKey' | 'model' | 'apiMode' | 'streamImages' | 'streamPartialImages'>) {
  return JSON.stringify([
    profile.provider,
    profile.baseUrl.trim().replace(/\/+$/, '').toLowerCase(),
    profile.apiKey.trim(),
    profile.model.trim(),
    profile.apiMode,
    profile.streamImages === true,
    profile.streamPartialImages ?? 0,
  ])
}

function createUrlProfileId(usedIds: Set<string>) {
  let id = `openai-url-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`
  while (usedIds.has(id)) {
    id = `openai-url-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`
  }
  return id
}

function pickUrlSettingsPayload(value: unknown): unknown | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null
  const record = value as Record<string, unknown>
  return {
    customProviders: record.customProviders,
    profiles: record.profiles,
  }
}

function getUrlSettingsPayload(searchParams: URLSearchParams): unknown | null {
  const raw = searchParams.get('settings')
  if (!raw) return null

  try {
    const parsed = JSON.parse(raw)
    if (parsed && typeof parsed === 'object' && 'settings' in parsed) {
      return pickUrlSettingsPayload((parsed as { settings?: unknown }).settings ?? null)
    }
    return pickUrlSettingsPayload(parsed)
  } catch {
    return null
  }
}

function activateFirstImportedProfile(settings: AppSettings, importedSettings: unknown): AppSettings {
  if (!importedSettings || typeof importedSettings !== 'object' || Array.isArray(importedSettings)) return settings

  const record = importedSettings as Record<string, unknown>
  if (!Array.isArray(record.profiles) || record.profiles.length === 0) return settings

  const imported = normalizeSettings({
    customProviders: record.customProviders,
    profiles: record.profiles,
  })
  const importedProfile = imported.profiles[0]
  const activeProfile = findEquivalentApiProfile(settings, importedProfile, imported.customProviders)

  return activeProfile
    ? normalizeSettings({ ...settings, activeProfileId: activeProfile.id })
    : settings
}

export function hasUrlSettingParams(searchParams: URLSearchParams) {
  return URL_SETTING_KEYS.some((key) => searchParams.has(key))
}

export function clearUrlSettingParams(searchParams: URLSearchParams) {
  for (const key of URL_SETTING_KEYS) searchParams.delete(key)
}

export function buildSettingsFromUrlParams(currentSettings: Partial<AppSettings> | unknown, searchParams: URLSearchParams): Partial<AppSettings> {
  const importedSettings = getUrlSettingsPayload(searchParams)
  const apiUrlParam = searchParams.get('apiUrl')
  const apiKeyParam = searchParams.get('apiKey')
  const codexCliParam = searchParams.get('codexCli')
  const apiModeParam = searchParams.get('apiMode')
  const modelParam = searchParams.get('model')
  const streamImagesParam = searchParams.get('streamImages')
  const streamPartialImagesParam = searchParams.get('streamPartialImages')
  const apiMode: ApiMode | undefined = apiModeParam === 'images' || apiModeParam === 'responses' ? apiModeParam : undefined

  const hasLegacyOpenAIParams = apiUrlParam !== null || apiKeyParam !== null || codexCliParam !== null || apiMode !== undefined || modelParam !== null || streamImagesParam !== null || streamPartialImagesParam !== null
  const settings = importedSettings == null
    ? normalizeSettings(currentSettings)
    : activateFirstImportedProfile(mergeImportedSettings(currentSettings, importedSettings), importedSettings)

  if (hasLegacyOpenAIParams) {
    const profileApiMode = apiMode ?? 'images'
    const profile = createDefaultOpenAIProfile({
      id: createUrlProfileId(new Set(settings.profiles.map((item) => item.id))),
      name: 'URL 参数配置',
      apiMode: profileApiMode,
      model: profileApiMode === 'responses' ? DEFAULT_RESPONSES_MODEL : DEFAULT_IMAGES_MODEL,
    })
    if (apiUrlParam !== null) profile.baseUrl = normalizeBaseUrl(apiUrlParam.trim())
    if (apiKeyParam !== null) profile.apiKey = apiKeyParam.trim()
    if (modelParam !== null && modelParam.trim()) profile.model = modelParam.trim()
    if (codexCliParam !== null) profile.codexCli = codexCliParam.trim().toLowerCase() === 'true'
    if (streamImagesParam !== null) profile.streamImages = streamImagesParam.trim().toLowerCase() === 'true'
    if (streamPartialImagesParam !== null) profile.streamPartialImages = normalizeStreamPartialImages(streamPartialImagesParam)

    const existingProfile = settings.profiles.find((item) => getProfileDedupKey(item) === getProfileDedupKey(profile))
    if (existingProfile) {
      return normalizeSettings({ ...settings, activeProfileId: existingProfile.id })
    }

    return normalizeSettings({
      ...settings,
      profiles: [...settings.profiles, profile],
      activeProfileId: profile.id,
    })
  }

  return importedSettings == null ? {} : settings
}
