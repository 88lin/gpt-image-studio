import { describe, expect, it } from 'vitest'
import {
  createDefaultFalProfile,
  createDefaultOpenAIProfile,
  DEFAULT_IMAGES_MODEL,
  DEFAULT_SETTINGS,
  normalizeSettings,
} from './apiProfiles'
import { buildSettingsFromUrlParams, clearUrlSettingParams, hasUrlSettingParams } from './urlSettings'

describe('URL settings params', () => {
  it('creates and activates a new OpenAI profile for legacy URL params', () => {
    const current = normalizeSettings(DEFAULT_SETTINGS)
    const next = normalizeSettings({
      ...current,
      ...buildSettingsFromUrlParams(current, new URLSearchParams('apiUrl=https://api.example.com/v1&apiKey=test-key')),
    })

    expect(next.profiles).toHaveLength(2)
    expect(next.activeProfileId).not.toBe(current.activeProfileId)
    expect(next.profiles.find((profile) => profile.id === next.activeProfileId)).toMatchObject({
      name: 'URL 参数配置',
      provider: 'openai',
      baseUrl: 'https://api.example.com/v1',
      apiKey: 'test-key',
      model: DEFAULT_IMAGES_MODEL,
    })
  })

  it('uses model from URL params for OpenAI profiles', () => {
    const current = normalizeSettings(DEFAULT_SETTINGS)
    const next = normalizeSettings({
      ...current,
      ...buildSettingsFromUrlParams(current, new URLSearchParams('apiUrl=https://api.example.com/v1&apiKey=test-key&model=custom-image-model')),
    })

    expect(next.profiles.find((profile) => profile.id === next.activeProfileId)).toMatchObject({
      provider: 'openai',
      baseUrl: 'https://api.example.com/v1',
      apiKey: 'test-key',
      model: 'custom-image-model',
      apiMode: 'images',
    })
  })

  it('does not create a duplicate profile for matching legacy URL params', () => {
    const existingProfile = createDefaultOpenAIProfile({
      id: 'existing-openai',
      name: 'Existing OpenAI',
      baseUrl: 'https://api.example.com/v1',
      apiKey: 'test-key',
    })
    const current = normalizeSettings({
      ...DEFAULT_SETTINGS,
      profiles: [createDefaultOpenAIProfile(), existingProfile],
      activeProfileId: DEFAULT_SETTINGS.activeProfileId,
    })
    const next = normalizeSettings({
      ...current,
      ...buildSettingsFromUrlParams(current, new URLSearchParams('apiUrl=https://api.example.com/v1/&apiKey=test-key')),
    })

    expect(next.profiles).toHaveLength(2)
    expect(next.activeProfileId).toBe(existingProfile.id)
  })

  it('creates a separate profile when URL streaming options differ', () => {
    const existingProfile = createDefaultOpenAIProfile({
      id: 'existing-openai',
      name: 'Existing OpenAI',
      baseUrl: 'https://api.example.com/v1',
      apiKey: 'test-key',
      streamImages: true,
      streamPartialImages: 0,
    })
    const current = normalizeSettings({
      ...DEFAULT_SETTINGS,
      profiles: [createDefaultOpenAIProfile(), existingProfile],
      activeProfileId: DEFAULT_SETTINGS.activeProfileId,
    })
    const next = normalizeSettings({
      ...current,
      ...buildSettingsFromUrlParams(current, new URLSearchParams('apiUrl=https://api.example.com/v1/&apiKey=test-key&streamImages=true&streamPartialImages=3')),
    })
    const activeProfile = next.profiles.find((profile) => profile.id === next.activeProfileId)

    expect(next.profiles).toHaveLength(3)
    expect(next.activeProfileId).not.toBe(existingProfile.id)
    expect(activeProfile).toMatchObject({
      provider: 'openai',
      baseUrl: 'https://api.example.com/v1',
      apiKey: 'test-key',
      streamImages: true,
      streamPartialImages: 3,
    })
  })

  it('creates an OpenAI profile from legacy params even when fal is active', () => {
    const falProfile = createDefaultFalProfile({ id: 'fal-active', apiKey: 'fal-key' })
    const current = normalizeSettings({
      ...DEFAULT_SETTINGS,
      profiles: [falProfile],
      activeProfileId: falProfile.id,
    })
    const next = normalizeSettings({
      ...current,
      ...buildSettingsFromUrlParams(current, new URLSearchParams('apiUrl=https://api.example.com/v1&apiKey=openai-key')),
    })

    expect(next.profiles).toHaveLength(2)
    expect(next.profiles.find((profile) => profile.id === next.activeProfileId)).toMatchObject({
      provider: 'openai',
      baseUrl: 'https://api.example.com/v1',
      apiKey: 'openai-key',
    })
  })

  it('clears known URL setting params without touching unrelated params', () => {
    const params = new URLSearchParams('apiUrl=https://api.example.com/v1&apiKey=test-key&model=test-model&streamImages=false&streamPartialImages=3&foo=bar')

    expect(hasUrlSettingParams(params)).toBe(true)
    clearUrlSettingParams(params)

    expect(params.toString()).toBe('foo=bar')
  })

  it('imports settings with custom providers from URL params', () => {
    const importedSettings = {
      customProviders: [{
        id: 'custom-json',
        name: 'Custom JSON',
        submit: {
          path: 'images/generations',
          method: 'POST',
          contentType: 'json',
          body: { model: '$profile.model', prompt: '$prompt' },
          result: { imageUrlPaths: ['data.*.url'], b64JsonPaths: [] },
        },
      }],
      profiles: [{
        id: 'custom-profile',
        name: 'Custom Profile',
        provider: 'custom-json',
        baseUrl: 'https://api.example.com/v1',
        apiKey: 'custom-key',
        model: 'custom-model',
        timeout: 300,
        apiMode: 'images',
        codexCli: false,
        apiProxy: false,
      }],
    }
    const params = new URLSearchParams()
    params.set('settings', JSON.stringify(importedSettings))

    const next = normalizeSettings({
      ...DEFAULT_SETTINGS,
      ...buildSettingsFromUrlParams(DEFAULT_SETTINGS, params),
    })

    expect(next.customProviders).toHaveLength(1)
    expect(next.customProviders[0]).toMatchObject({ id: 'custom-json', name: 'Custom JSON' })
    expect(next.activeProfileId).toBe('custom-profile')
    expect(next.profiles[0]).toMatchObject({
      id: 'custom-profile',
      provider: 'custom-json',
      apiKey: 'custom-key',
      model: 'custom-model',
    })
  })

  it('activates the first profile imported from URL settings when current settings are customized', () => {
    const current = normalizeSettings({
      ...DEFAULT_SETTINGS,
      profiles: [createDefaultOpenAIProfile({
        id: 'current-openai',
        name: 'Current OpenAI',
        baseUrl: 'https://current.example.com/v1',
        apiKey: 'current-key',
        model: 'current-model',
      })],
      activeProfileId: 'current-openai',
    })
    const importedSettings = {
      customProviders: [{
        id: 'custom-json',
        name: 'Custom JSON',
        submit: {
          path: 'images/generations',
          method: 'POST',
          contentType: 'json',
          body: { model: '$profile.model', prompt: '$prompt' },
          result: { imageUrlPaths: ['data.*.url'], b64JsonPaths: [] },
        },
      }],
      profiles: [{
        id: 'custom-profile',
        name: 'Custom Profile',
        provider: 'custom-json',
        baseUrl: 'https://api.example.com/v1',
        apiKey: 'custom-key',
        model: 'custom-model',
        timeout: 300,
        apiMode: 'images',
        codexCli: false,
        apiProxy: false,
      }],
    }
    const params = new URLSearchParams()
    params.set('settings', JSON.stringify(importedSettings))

    const next = normalizeSettings({
      ...current,
      ...buildSettingsFromUrlParams(current, params),
    })
    const activeProfile = next.profiles.find((profile) => profile.id === next.activeProfileId)

    expect(next.activeProfileId).not.toBe('current-openai')
    expect(activeProfile).toMatchObject({
      provider: 'custom-json',
      baseUrl: 'https://api.example.com/v1',
      apiKey: 'custom-key',
      model: 'custom-model',
    })
  })

  it('imports custom provider settings wrapper from URL params', () => {
    const params = new URLSearchParams()
    params.set('settings', JSON.stringify({
      version: 1,
      settings: {
        customProviders: [{
          id: 'wrapped-custom',
          name: 'Wrapped Custom',
          submit: {
            path: 'images/generations',
            method: 'POST',
            contentType: 'json',
            body: { model: '$profile.model', prompt: '$prompt' },
            result: { imageUrlPaths: ['data.*.url'], b64JsonPaths: [] },
          },
        }],
        profiles: [{
          id: 'wrapped-profile',
          name: 'Wrapped Profile',
          provider: 'wrapped-custom',
          baseUrl: 'https://wrapped.example.com/v1',
          apiKey: 'wrapped-key',
          model: 'wrapped-model',
          timeout: 300,
          apiMode: 'images',
          codexCli: false,
          apiProxy: false,
        }],
      },
    }))

    const next = normalizeSettings({
      ...DEFAULT_SETTINGS,
      ...buildSettingsFromUrlParams(DEFAULT_SETTINGS, params),
    })

    expect(next.customProviders).toHaveLength(1)
    expect(next.customProviders[0]).toMatchObject({ id: 'wrapped-custom', name: 'Wrapped Custom' })
    expect(next.profiles).toHaveLength(1)
    expect(next.profiles[0]).toMatchObject({
      id: 'wrapped-profile',
      provider: 'wrapped-custom',
      baseUrl: 'https://wrapped.example.com/v1',
      apiKey: 'wrapped-key',
      model: 'wrapped-model',
    })
  })
})
