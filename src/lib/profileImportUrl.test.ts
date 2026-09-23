import { describe, expect, it } from 'vitest'
import { createDefaultOpenAIProfile, DEFAULT_SETTINGS, importCustomProviderSettingsFromJson, normalizeSettings } from './apiProfiles'
import { createCustomProfileImportUrl } from './profileImportUrl'
import { buildSettingsFromUrlParams } from './urlSettings'

describe('createCustomProfileImportUrl', () => {
  it('omits unused providers from built-in profile links and imports them normally', () => {
    const profile = createDefaultOpenAIProfile({ id: 'built-in', apiKey: 'key' })
    const url = new URL(createCustomProfileImportUrl('https://playground.example.com', profile, undefined, {
      includeApiKey: true, useNewApiAddress: false, useNewApiKey: false, useNewApiModel: false,
    }))
    const json = url.searchParams.get('settings')!
    expect(JSON.parse(json)).not.toHaveProperty('customProviders')
    expect(importCustomProviderSettingsFromJson(json).profiles).toHaveLength(1)
    expect(buildSettingsFromUrlParams(DEFAULT_SETTINGS, url.searchParams).profiles).toHaveLength(1)

    const legacy = JSON.stringify({ customProviders: [], profiles: JSON.parse(json).profiles })
    expect(importCustomProviderSettingsFromJson(legacy).profiles).toHaveLength(1)
    expect(buildSettingsFromUrlParams(DEFAULT_SETTINGS, new URLSearchParams({ settings: legacy })).profiles).toHaveLength(1)
  })

  it('does not include the source profile ID in the shared URL', () => {
    const provider = { id: 'custom-provider', name: 'Custom Provider', submit: { path: 'generate' } }
    const profile = createDefaultOpenAIProfile({
      id: 'custom-profile',
      provider: provider.id,
      apiKey: 'secret-key',
      model: 'custom-model',
    })

    const result = createCustomProfileImportUrl(
      'https://playground.example.com/app?old=value#section',
      profile,
      provider,
      { includeApiKey: false, useNewApiAddress: false, useNewApiKey: true, useNewApiModel: false },
    )
    const url = new URL(result.replace('{key}', '%7Bkey%7D'))
    const settings = JSON.parse(url.searchParams.get('settings')!)

    expect(url.origin + url.pathname).toBe('https://playground.example.com/app')
    expect(url.hash).toBe('')
    expect(url.searchParams.has('profileId')).toBe(false)
    expect(settings.customProviders).toEqual([provider])
    expect(settings.profiles).toEqual([expect.objectContaining({
      provider: provider.id,
      apiKey: '{key}',
      model: 'custom-model',
    })])
    expect(settings.profiles[0]).not.toHaveProperty('id')
  })

  it('imports the shared custom profile without converting it to OpenAI', () => {
    const provider = { id: 'custom-provider', name: 'Custom Provider', submit: { path: 'generate' } }
    const profile = createDefaultOpenAIProfile({
      id: 'custom-profile',
      provider: provider.id,
      apiKey: 'secret-key',
      model: 'custom-model',
    })
    const url = new URL(createCustomProfileImportUrl(
      'https://playground.example.com',
      profile,
      provider,
      { includeApiKey: true, useNewApiAddress: false, useNewApiKey: false, useNewApiModel: false },
    ))
    const next = normalizeSettings({
      ...DEFAULT_SETTINGS,
      ...buildSettingsFromUrlParams(DEFAULT_SETTINGS, url.searchParams),
    })

    expect(next.activeProfileId).not.toBe(profile.id)
    expect(next.customProviders).toEqual([expect.objectContaining({
      id: provider.id,
      submit: expect.objectContaining({ path: 'generate' }),
    })])
    expect(next.profiles[0]).toMatchObject({
      provider: provider.id,
      apiKey: 'secret-key',
      model: 'custom-model',
    })
  })
})
