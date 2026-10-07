import { describe, expect, it } from 'vitest'
import { createDefaultOpenAIProfile, importCustomProviderSettingsFromJson, mergePresetImportedSettings, normalizeSettings } from './apiProfiles'
import { mergeSponsorPresets } from './sponsorPresets'

describe('JSON sponsor presets', () => {
  it('keeps a default OpenAI profile and SheApi without an environment variable', () => {
    const current = normalizeSettings({ profiles: [createDefaultOpenAIProfile()] })
    const imported = mergeSponsorPresets(null, current)
    expect(imported.profiles.map((profile) => profile.id)).toEqual(['default-openai', 'sheapi'])
    expect(imported.profiles.find((profile) => profile.id === 'sheapi')).toMatchObject({
      baseUrl: 'https://www.sheapi.top/v1', apiKey: '',
      model: 'gpt-image-2, gpt-image-2.5-sunburst, gpt-image-2.5-flare',
      codexCli: false, streamImages: false, apiProxy: false,
    })
    const merged = mergePresetImportedSettings(current, imported)
    expect(merged.settings.activeProfileId).toBe('default-openai')
  })

  it('keeps a single deployment profile as the default after merging JSON', () => {
    const deployed = importCustomProviderSettingsFromJson(JSON.stringify({
      profiles: [{ id: 'existing', name: 'Existing', provider: 'openai', baseUrl: 'https://example.com/v1', model: 'custom-model' }],
    }), [], { deploymentConfig: true })
    const current = normalizeSettings({ profiles: [createDefaultOpenAIProfile()] })
    const merged = mergePresetImportedSettings(current, mergeSponsorPresets(deployed, current))
    expect(merged.settings.profiles.map((profile) => profile.id)).toEqual(['existing', 'sheapi'])
    expect(merged.settings.activeProfileId).toBe('existing')
  })

  it('preserves saved endpoints, keys, models, order and Agent references across reloads', () => {
    const current = normalizeSettings({
      profiles: [
        createDefaultOpenAIProfile({ id: 'personal', apiKey: 'personal-test-key', model: 'personal-a,personal-b', selectedModel: 'personal-b' }),
        createDefaultOpenAIProfile({ id: 'sheapi', baseUrl: 'https://private.example.com/v1', apiKey: 'private-test-key', model: 'private-model' }),
        createDefaultOpenAIProfile({ id: 'text', apiMode: 'responses', apiKey: 'text-test-key', model: 'text-model' }),
      ],
      activeProfileId: 'personal', agentApiConfigMode: 'hybrid', agentTextProfileId: 'text', agentImageProfileId: 'personal',
    })
    const deployed = { customProviders: [], profiles: [createDefaultOpenAIProfile({ id: 'deployed', isDefault: true })] }
    const first = mergePresetImportedSettings(current, mergeSponsorPresets(deployed, current))
    const second = mergePresetImportedSettings(first.settings, mergeSponsorPresets(deployed, first.settings), { previousPresetConfig: first.presetConfig })
    for (const result of [first, second]) {
      expect(result.settings.profiles.filter((profile) => ['personal', 'sheapi', 'text'].includes(profile.id))).toEqual(current.profiles)
      expect(result.settings).toMatchObject({ activeProfileId: 'personal', agentTextProfileId: 'text', agentImageProfileId: 'personal' })
    }
  })

  it('keeps deployment definitions when JSON contains the same ID', () => {
    const current = normalizeSettings({})
    const profile = createDefaultOpenAIProfile({ id: 'sheapi', baseUrl: 'https://deployment.example.com/v1' })
    const imported = mergeSponsorPresets({ customProviders: [], profiles: [profile] }, current)
    expect(imported.profiles).toEqual([{ ...profile, isDefault: true }])
  })

  it('preserves a configured default and SheApi when an environment preset is removed', () => {
    const current = normalizeSettings({
      profiles: [
        createDefaultOpenAIProfile({ baseUrl: 'https://saved.example.com/v1', apiKey: 'saved-key', model: 'saved-a,saved-b', selectedModel: 'saved-b' }),
        createDefaultOpenAIProfile({ id: 'sheapi', baseUrl: 'https://private.example.com/v1', apiKey: 'private-key', model: 'private-model' }),
      ],
      activeProfileId: 'default-openai', agentImageProfileId: 'default-openai',
    })
    const deployed = {
      customProviders: [],
      profiles: [createDefaultOpenAIProfile({ baseUrl: 'https://saved.example.com/v1', isDefault: true })],
    }
    const first = mergePresetImportedSettings(current, mergeSponsorPresets(deployed, current))
    const imported = mergeSponsorPresets(null, first.settings)
    const removed = mergePresetImportedSettings(first.settings, imported, { previousPresetConfig: first.presetConfig })
    const reloaded = mergePresetImportedSettings(removed.settings, mergeSponsorPresets(null, removed.settings), { previousPresetConfig: removed.presetConfig })
    for (const result of [removed, reloaded]) {
      expect(result.settings.profiles.map((profile) => ({ ...profile, isDefault: undefined }))).toEqual(current.profiles)
      expect(result.settings).toMatchObject({ activeProfileId: 'default-openai', agentImageProfileId: 'default-openai' })
      expect(result.presetConfig.profiles.every((profile) => profile.apiKey === '')).toBe(true)
    }
  })

  it('retains a working profile from the previous JSON default ID', () => {
    const previous = {
      customProviders: [],
      profiles: [createDefaultOpenAIProfile({ id: 'gpt_image_studio-default-openai', isDefault: true })],
    }
    const current = normalizeSettings({
      profiles: [{ ...previous.profiles[0], apiKey: 'saved-key' }],
      activeProfileId: 'gpt_image_studio-default-openai', agentImageProfileId: 'gpt_image_studio-default-openai',
    })
    const merged = mergePresetImportedSettings(current, mergeSponsorPresets(null, current), { previousPresetConfig: previous })
    expect(merged.settings.profiles.find((profile) => profile.id === 'gpt_image_studio-default-openai')).toEqual({ ...current.profiles[0], isDefault: undefined })
    expect(merged.settings).toMatchObject({ activeProfileId: 'gpt_image_studio-default-openai', agentImageProfileId: 'gpt_image_studio-default-openai' })
    expect(merged.settings.profiles.filter((profile) => profile.id === 'sheapi')).toHaveLength(1)
  })

  it('keeps multiple deployment profiles, their explicit default and Agent configuration', () => {
    const deployed = importCustomProviderSettingsFromJson(JSON.stringify({
      profiles: [
        { id: 'text', provider: 'openai', apiMode: 'responses', model: 'text-model' },
        { id: 'image', provider: 'openai', model: 'image-model', isDefault: true },
      ],
      agent: { apiConfigMode: 'hybrid', textProfileId: 'text', imageProfileId: 'image' },
    }), [], { deploymentConfig: true })
    const current = normalizeSettings({ profiles: [createDefaultOpenAIProfile()] })
    const imported = mergeSponsorPresets(deployed, current)
    expect(imported.profiles.map((profile) => profile.id)).toEqual(['text', 'image', 'sheapi'])
    expect(imported.profiles.filter((profile) => profile.isDefault).map((profile) => profile.id)).toEqual(['image'])
    expect(imported.agent).toEqual(deployed.agent)
    const merged = mergePresetImportedSettings(current, imported)
    expect(merged.settings).toMatchObject({ activeProfileId: 'image', agentApiConfigMode: 'hybrid', agentTextProfileId: 'text', agentImageProfileId: 'image' })
  })

  it('does not register a saved custom provider profile as a new built-in', () => {
    const current = normalizeSettings({
      customProviders: [{ id: 'private', name: 'Private', submit: { path: 'images/generations' } }],
      profiles: [createDefaultOpenAIProfile({ id: 'sheapi', provider: 'private', apiKey: 'private-key' })],
      activeProfileId: 'sheapi',
    })
    const imported = mergeSponsorPresets(null, current)
    expect(imported.profiles.some((profile) => profile.id === 'sheapi')).toBe(false)
    const merged = mergePresetImportedSettings(current, imported)
    expect(merged.settings.profiles.find((profile) => profile.id === 'sheapi')).toEqual(current.profiles[0])
    expect(merged.settings.activeProfileId).toBe('sheapi')
  })

  it('respects explicitly deleted presets instead of forcing them back after merging', () => {
    const current = normalizeSettings({ profiles: [createDefaultOpenAIProfile()] })
    const merged = mergePresetImportedSettings(current, mergeSponsorPresets(null, current), { dismissedPresetProfileIds: ['sheapi'] })
    expect(merged.settings.profiles.some((profile) => profile.id === 'sheapi')).toBe(false)
  })
})
