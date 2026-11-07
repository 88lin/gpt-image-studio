import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  NATIVE_IMAGE_PROVIDERS,
  normalizeApiProfile,
  createDefaultOpenAIProfile,
  getActiveApiProfile,
  normalizeSettings,
} from './apiProfiles'
import { prepareSettingsForCommit } from './settingsActions'

afterEach(() => {
  vi.unstubAllEnvs()
})

describe('保存迁移后的 Grok 配置', () => {
  it('地址和模型留空时使用 xAI 默认值', () => {
    const settings = normalizeSettings({
      profiles: [createDefaultOpenAIProfile({ id: 'openai' }), normalizeApiProfile({ id: 'legacy-grok', provider: 'grok' })],
      activeProfileId: 'legacy-grok',
    })
    const saved = prepareSettingsForCommit({
      ...settings,
      profiles: settings.profiles.map((profile) => profile.provider === 'xai' ? { ...profile, baseUrl: '  ', model: '  ' } : profile),
    })

    expect(getActiveApiProfile(saved)).toMatchObject({
      provider: 'xai',
      baseUrl: NATIVE_IMAGE_PROVIDERS.xai.baseUrl,
      model: NATIVE_IMAGE_PROVIDERS.xai.model,
    })
  })

  it('保留中转地址的路径和自定义模型', () => {
    const profile = normalizeApiProfile({ id: 'legacy-grok', provider: 'grok' })
    const saved = prepareSettingsForCommit(normalizeSettings({
      profiles: [{ ...profile, baseUrl: ' https://relay.example.com/grok/ ', model: ' custom-grok ' }],
      activeProfileId: profile.id,
    }))

    expect(getActiveApiProfile(saved)).toMatchObject({
      baseUrl: 'https://relay.example.com/grok/',
      model: 'custom-grok',
    })
  })

  it('部署端代理可用时保留空地址', () => {
    vi.stubEnv('VITE_API_PROXY_AVAILABLE', 'true')
    const profile = normalizeApiProfile({ id: 'legacy-grok', provider: 'grok', apiProxy: true })
    const settings = normalizeSettings({ profiles: [profile], activeProfileId: profile.id })
    const saved = prepareSettingsForCommit({ ...settings, profiles: [{ ...settings.profiles[0], baseUrl: '' }] })

    expect(getActiveApiProfile(saved)).toMatchObject({ provider: 'openai', baseUrl: '', apiProxy: true })
  })
})
