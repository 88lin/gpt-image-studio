import { describe, expect, it } from 'vitest'
import {
  getCustomProviderConfigUrl,
  isImportableConfigUrl,
  loadCustomProviderSettingsFromUrl,
} from './customProviderConfigUrl'

describe('custom provider config URL', () => {
  it('returns config URL when default API URL points to .json', () => {
    expect(getCustomProviderConfigUrl('https://example.com/custom-provider.json'))
      .toBe('https://example.com/custom-provider.json')
  })

  it('returns empty when default API URL is a normal API endpoint', () => {
    expect(getCustomProviderConfigUrl('https://api.example.com/v1'))
      .toBe('')
  })

  it('detects importable URL values', () => {
    expect(isImportableConfigUrl('https://example.com/provider.json')).toBe(true)
    expect(isImportableConfigUrl('https://example.com/?settings={}')).toBe(true)
    expect(isImportableConfigUrl('https://api.openai.com/v1')).toBe(false)
  })

  it('returns null for empty URL', async () => {
    const result = await loadCustomProviderSettingsFromUrl('')

    expect(result).toBeNull()
  })

  it('loads custom provider settings from URL', async () => {
    const payload = {
      customProviders: [{
        id: 'custom-url',
        name: 'URL Custom',
        submit: {
          path: 'images/generations',
          method: 'POST',
          contentType: 'json',
          body: { model: '$profile.model', prompt: '$prompt' },
          result: { imageUrlPaths: ['data.*.url'], b64JsonPaths: [] },
        },
      }],
      profiles: [{
        id: 'url-profile',
        name: 'URL Profile',
        provider: 'custom-url',
        baseUrl: 'https://api.example.com/v1',
        apiKey: 'url-key',
        model: 'url-model',
        timeout: 300,
        apiMode: 'images',
        codexCli: false,
        apiProxy: false,
      }],
    }
    const calls: Array<[RequestInfo | URL, RequestInit | undefined]> = []

    const result = await loadCustomProviderSettingsFromUrl('https://example.com/provider.json', async (input, init) => {
      calls.push([input, init])
      return new Response(JSON.stringify(payload), { status: 200 })
    })

    expect(calls).toEqual([['https://example.com/provider.json', { cache: 'no-store' }]])
    expect(result?.customProviders[0]).toMatchObject({ id: 'custom-url', name: 'URL Custom' })
    expect(result?.profiles[0]).toMatchObject({ id: 'url-profile', provider: 'custom-url', model: 'url-model' })
  })

  it('imports settings directly from URL settings param', async () => {
    const settings = {
      customProviders: [{
        id: 'custom-share-url',
        name: 'Share URL Custom',
        submit: {
          path: 'images/generations',
          method: 'POST',
          contentType: 'json',
          body: { model: '$profile.model', prompt: '$prompt' },
          result: { imageUrlPaths: ['data.*.url'], b64JsonPaths: [] },
        },
      }],
      profiles: [{
        id: 'share-url-profile',
        name: 'Share URL Profile',
        provider: 'custom-share-url',
        baseUrl: 'https://api.example.com/v1',
        apiKey: 'share-url-key',
        model: 'share-url-model',
        timeout: 300,
        apiMode: 'images',
        codexCli: false,
        apiProxy: false,
      }],
    }
    const url = `https://example.com/?settings=${encodeURIComponent(JSON.stringify({ version: 1, settings }))}`

    const result = await loadCustomProviderSettingsFromUrl(url, async () => {
      throw new Error('should not fetch settings URLs')
    })

    expect(result?.customProviders[0]).toMatchObject({ id: 'custom-share-url', name: 'Share URL Custom' })
    expect(result?.profiles[0]).toMatchObject({ id: 'share-url-profile', provider: 'custom-share-url' })
  })

  it('throws when URL request fails', async () => {
    await expect(loadCustomProviderSettingsFromUrl('https://example.com/missing.json', async () => (
      new Response('not found', { status: 404 })
    ))).rejects.toThrow('HTTP 404')
  })
})
