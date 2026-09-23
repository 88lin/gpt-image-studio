import { afterEach, describe, expect, it, vi } from 'vitest'
import type { PresetConfig } from '../types'
import { DEFAULT_PARAMS } from '../types'
import { createDefaultOpenAIProfile, DEFAULT_SETTINGS, importCustomProviderSettingsFromJson, mergePresetImportedSettings, normalizeSettings } from './apiProfiles'
import { normalizePersistedState } from './persistedState'

const image = createDefaultOpenAIProfile({ id: 'image', isDefault: true })
const text = createDefaultOpenAIProfile({ id: 'text', apiMode: 'responses' })
const other = createDefaultOpenAIProfile({ id: 'other', apiMode: 'responses' })
const config: PresetConfig = {
  customProviders: [],
  profiles: [image, text, other],
  agent: { apiConfigMode: 'hybrid', textProfileId: text.id, imageProfileId: image.id },
}

afterEach(() => {
  vi.restoreAllMocks()
  vi.unstubAllEnvs()
  vi.resetModules()
})

describe('Agent deployment settings', () => {
  it('loads agent settings through embedded config and deployment URLs', async () => {
    const { loadEmbeddedDefaultConfig, loadCustomProviderSettingsFromUrl } = await import('./customProviderConfigUrl')
    const json = JSON.stringify(config)
    expect(loadEmbeddedDefaultConfig(`embedded-config:${btoa(String.fromCharCode(...new TextEncoder().encode(json)))}`)?.agent).toEqual(config.agent)
    expect((await loadCustomProviderSettingsFromUrl(`https://example.com/?settings=${encodeURIComponent(json)}`))?.agent).toEqual(config.agent)
    const ordinary = importCustomProviderSettingsFromJson(JSON.stringify({
      ...config,
      customProviders: [{ id: 'custom', name: 'Custom', submit: { path: 'generate' } }],
    }))
    expect(ordinary).not.toHaveProperty('agent')
  })

  it.each([
    { apiConfigMode: 'invalid' },
    { apiConfigMode: ['off'] },
    { textProfileId: 'missing' },
    { textProfileId: image.id },
    { imageProfileId: null },
  ])('ignores invalid agent settings without losing profiles: %j', (agent) => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const imported = importCustomProviderSettingsFromJson(JSON.stringify({ ...config, agent }), [], { deploymentConfig: true })
    expect(imported.agent).toBeUndefined()
    expect(imported.profiles.map((profile) => profile.id)).toEqual(['image', 'text', 'other'])
    expect(warn).toHaveBeenCalledOnce()
  })

  it('applies deployment changes once, preserves local edits, and releases removed fields', () => {
    const initial = mergePresetImportedSettings(DEFAULT_SETTINGS, config)
    expect(initial.settings).toMatchObject({ agentApiConfigMode: 'hybrid', agentTextProfileId: 'text', agentImageProfileId: 'image' })
    const local = { ...initial.settings, agentApiConfigMode: 'off' as const, agentTextProfileId: 'other' }
    const repeated = mergePresetImportedSettings(local, config, { previousPresetConfig: initial.presetConfig })
    expect(repeated.settings).toMatchObject({ agentApiConfigMode: 'off', agentTextProfileId: 'other' })
    expect(repeated.presetConfig.agent).toEqual(config.agent)
    const locked = mergePresetImportedSettings(local, config, { previousPresetConfig: initial.presetConfig, lockPresetParams: true })
    expect(locked.settings).toMatchObject({ agentApiConfigMode: 'hybrid', agentTextProfileId: 'text' })

    const changed = mergePresetImportedSettings(local, { ...config, agent: { ...config.agent, apiConfigMode: 'native' } }, { previousPresetConfig: initial.presetConfig })
    expect(changed.settings).toMatchObject({ agentApiConfigMode: 'native', agentTextProfileId: 'other' })
    const removed = mergePresetImportedSettings(changed.settings, { ...config, agent: undefined }, { previousPresetConfig: changed.presetConfig })
    expect(removed.settings).toEqual(changed.settings)
    expect(removed.presetConfig).not.toHaveProperty('agent')
    const reintroduced = mergePresetImportedSettings(removed.settings, config, { previousPresetConfig: removed.presetConfig })
    expect(reintroduced.settings.agentTextProfileId).toBe('text')
  })

  it('keeps legacy behavior and applies newly added fields to existing users', () => {
    const legacy = { customProviders: [], profiles: config.profiles }
    const local = normalizeSettings({ ...legacy, agentApiConfigMode: 'native', agentTextProfileId: 'other' })
    expect(mergePresetImportedSettings(local, legacy).settings).toEqual(local)
    const merged = mergePresetImportedSettings(local, { ...legacy, agent: { apiConfigMode: 'off' } }, { previousPresetConfig: legacy })
    expect(merged.settings.agentApiConfigMode).toBe('off')
    expect(merged.settings.agentTextProfileId).toBe('other')
    expect(merged.presetConfig.agent).toEqual({ apiConfigMode: 'off' })
  })

  it('restores sparse deployment snapshots without filling missing agent fields', () => {
    const previousPresetConfig = { ...config, agent: { apiConfigMode: 'off' as const } }
    const restored = normalizePersistedState(JSON.parse(JSON.stringify({ previousPresetConfig })), {
      settings: DEFAULT_SETTINGS,
      params: DEFAULT_PARAMS,
      dismissedCodexCliPrompts: [],
      agentConversations: [],
      favoriteCollections: [],
      defaultFavoriteCollectionId: null,
    })
    expect(restored?.state.previousPresetConfig?.agent).toEqual({ apiConfigMode: 'off' })
  })

  it('enforces only explicit locked fields through store writes and retains deletion behavior', async () => {
    vi.stubEnv('VITE_LOCK_PRESET_CONFIG_PARAMS', 'true')
    const policy = await import('./presetConfig')
    const { useStore } = await import('../store')
    policy.setPresetConfig({ ...config, agent: { apiConfigMode: 'hybrid', textProfileId: 'text' } })
    useStore.setState({ settings: normalizeSettings(config), dismissedPresetProviderIds: [] })
    useStore.getState().setSettings({ agentApiConfigMode: 'off', agentTextProfileId: 'other', agentImageProfileId: 'other' })
    expect(useStore.getState().settings).toMatchObject({ agentApiConfigMode: 'hybrid', agentTextProfileId: 'text', agentImageProfileId: 'other' })
    expect(policy.isPresetAgentFieldLocked('apiConfigMode')).toBe(true)
    expect(policy.isPresetAgentFieldLocked('imageProfileId')).toBe(false)
    expect(policy.isPresetConfigDeletionPrevented()).toBe(false)

    policy.setPresetConfig(config)
    useStore.getState().setSettings({ agentImageProfileId: 'other' })
    expect(useStore.getState().settings.agentImageProfileId).toBe('image')
    expect(policy.isPresetAgentFieldLocked('imageProfileId')).toBe(true)

    useStore.getState().setSettings({ profiles: [image, other] })
    expect(useStore.getState().settings.profiles.map((profile) => profile.id)).toEqual(['image', 'other'])
    expect(useStore.getState().settings.agentTextProfileId).toBe('other')
    expect(policy.getPresetConfig()?.agent).toEqual(config.agent)
    policy.setPresetConfig(null)
    expect(policy.isPresetAgentFieldLocked('apiConfigMode')).toBe(false)
  })

  it('does not reapply unchanged selections or restore dismissed profiles', () => {
    const initial = mergePresetImportedSettings(DEFAULT_SETTINGS, config)
    const local = normalizeSettings({ ...initial.settings, profiles: [image, other] })
    const merged = mergePresetImportedSettings(local, config, {
      previousPresetConfig: initial.presetConfig,
      dismissedPresetProfileIds: ['text'],
    })
    expect(merged.settings.profiles.some((profile) => profile.id === 'text')).toBe(false)
    expect(merged.settings.agentTextProfileId).toBe('other')
    expect(merged.presetConfig.agent).toEqual(config.agent)
  })
})
