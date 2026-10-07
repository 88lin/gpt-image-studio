import type { AppSettings } from '../types'
import { importCustomProviderSettingsFromJson, type ImportedProviderSettings } from './apiProfiles'
import sponsorPresetsJson from '../../sponsor-presets.json?raw'

export function mergeSponsorPresets(deployed: ImportedProviderSettings | null, current: AppSettings): ImportedProviderSettings {
  const builtIn = importCustomProviderSettingsFromJson(sponsorPresetsJson, [], { deploymentConfig: true })
  const deployedProfiles = deployed?.profiles ?? []
  const deployedIds = new Set(deployedProfiles.map((profile) => profile.id))
  const providers = deployed?.customProviders ?? []
  const extras = builtIn.profiles
    .filter((profile) => !deployedIds.has(profile.id) && (!profile.isDefault || !deployedProfiles.length))
    .flatMap((profile) => {
      const existing = current.profiles.find((item) => item.id === profile.id)
      // 已切换服务商的用户配置保持原样，不注册为新的预置配置。
      if (existing && existing.provider !== profile.provider) return []
      // 保留用户的接口参数；Key 留在用户配置中，不写进部署快照。
      return [existing ? { ...existing, apiKey: '', description: profile.description, isDefault: profile.isDefault } : profile]
    })
  const profiles = [...deployedProfiles, ...extras]
  const defaultId = deployedProfiles.find((profile) => profile.isDefault)?.id
    ?? deployedProfiles[0]?.id
    ?? profiles.find((profile) => profile.isDefault)?.id
    ?? profiles[0]?.id

  return {
    ...builtIn,
    ...deployed,
    customProviders: [...providers, ...builtIn.customProviders.filter((provider) => !providers.some((item) => item.id === provider.id))],
    profiles: profiles.map((profile) => ({ ...profile, isDefault: profile.id === defaultId ? true : undefined })),
    presetProfileFields: { ...builtIn.presetProfileFields, ...deployed?.presetProfileFields },
  }
}
