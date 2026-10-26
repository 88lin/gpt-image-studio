import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  DEFAULT_GROK_BASE_URL,
  DEFAULT_GROK_MODEL,
  createDefaultGrokProfile,
  createDefaultOpenAIProfile,
  getActiveApiProfile,
  normalizeSettings,
} from './apiProfiles'
import { prepareSettingsForCommit } from './settingsActions'

afterEach(() => {
  vi.unstubAllEnvs()
})

describe('保存 Grok 配置', () => {
  it('地址和模型留空时使用 xAI 默认值', () => {
    const settings = normalizeSettings({
      profiles: [createDefaultOpenAIProfile({ id: 'openai' }), createDefaultGrokProfile({ id: 'grok' })],
      activeProfileId: 'grok',
    })
    const saved = prepareSettingsForCommit({
      ...settings,
      profiles: settings.profiles.map((profile) => profile.provider === 'grok' ? { ...profile, baseUrl: '  ', model: '  ' } : profile),
    })

    expect(getActiveApiProfile(saved)).toMatchObject({
      provider: 'grok',
      baseUrl: DEFAULT_GROK_BASE_URL,
      model: DEFAULT_GROK_MODEL,
    })
  })

  it('保留中转地址的路径和自定义模型', () => {
    const profile = createDefaultGrokProfile({ id: 'grok' })
    const saved = prepareSettingsForCommit(normalizeSettings({
      profiles: [{ ...profile, baseUrl: ' https://relay.example.com/grok/// ', model: ' custom-grok ' }],
      activeProfileId: profile.id,
    }))

    expect(getActiveApiProfile(saved)).toMatchObject({
      baseUrl: 'https://relay.example.com/grok',
      model: 'custom-grok',
    })
  })

  it('部署端代理可用时保留空地址', () => {
    vi.stubEnv('VITE_API_PROXY_AVAILABLE', 'true')
    const profile = createDefaultGrokProfile({ id: 'grok', apiProxy: true })
    const settings = normalizeSettings({ profiles: [profile], activeProfileId: profile.id })
    const saved = prepareSettingsForCommit({ ...settings, profiles: [{ ...settings.profiles[0], baseUrl: '' }] })

    expect(getActiveApiProfile(saved)).toMatchObject({ baseUrl: '', apiProxy: true })
  })
})
