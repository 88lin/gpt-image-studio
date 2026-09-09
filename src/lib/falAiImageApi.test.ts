import { fal } from '@fal-ai/client'
import { afterEach, describe, expect, it, vi, type Mock } from 'vitest'
import { DEFAULT_PARAMS } from '../types'
import { createDefaultFalProfile, DEFAULT_FAL_BASE_URL, DEFAULT_SETTINGS } from './apiProfiles'
import { callFalAiImageApi } from './falAiImageApi'

vi.mock('@fal-ai/client', () => ({
  fal: {
    config: vi.fn(),
    subscribe: vi.fn(),
    queue: {
      subscribeToStatus: vi.fn(),
      result: vi.fn(),
    },
  },
}))

const falMock = fal as unknown as {
  config: Mock
  subscribe: Mock
}

describe('callFalAiImageApi', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('uses the default fal endpoint without proxyUrl', async () => {
    falMock.subscribe.mockResolvedValue({
      requestId: 'req-1',
      data: { images: [{ b64_json: 'aW1hZ2U=' }] },
    })

    await callFalAiImageApi({
      settings: DEFAULT_SETTINGS,
      prompt: 'prompt',
      params: { ...DEFAULT_PARAMS },
      inputImageDataUrls: [],
    }, createDefaultFalProfile({ apiKey: 'fal-key', baseUrl: DEFAULT_FAL_BASE_URL }))

    expect(falMock.config).toHaveBeenCalledWith({
      credentials: 'fal-key',
      suppressLocalCredentialsWarning: true,
    })
  })

  it('passes custom fal API URL to the SDK proxyUrl option', async () => {
    falMock.subscribe.mockResolvedValue({
      requestId: 'req-1',
      data: { images: [{ b64_json: 'aW1hZ2U=' }] },
    })

    await callFalAiImageApi({
      settings: DEFAULT_SETTINGS,
      prompt: 'prompt',
      params: { ...DEFAULT_PARAMS },
      inputImageDataUrls: [],
    }, createDefaultFalProfile({
      apiKey: 'fal-key',
      baseUrl: 'https://fal-proxy.example.com/api/fal/',
    }))

    expect(falMock.config).toHaveBeenCalledWith({
      credentials: 'fal-key',
      suppressLocalCredentialsWarning: true,
      proxyUrl: 'https://fal-proxy.example.com/api/fal',
    })
  })

  it('uses the GPT Image 2.5 text-to-image endpoint and preserves max quality', async () => {
    falMock.subscribe.mockResolvedValue({
      requestId: 'req-1',
      data: { images: [{ b64_json: 'aW1hZ2U=' }] },
    })

    await callFalAiImageApi({
      settings: DEFAULT_SETTINGS,
      prompt: 'prompt',
      params: { ...DEFAULT_PARAMS, quality: 'max' },
      inputImageDataUrls: [],
    }, createDefaultFalProfile({ model: 'openai/gpt-image-2.5/sunburst', apiKey: 'fal-key' }))

    expect(falMock.subscribe).toHaveBeenCalledWith('openai/gpt-image-2.5/sunburst/text-to-image', expect.objectContaining({
      input: expect.objectContaining({ quality: 'max' }),
    }))
  })

  it('uses the GPT Image 2.5 edit endpoint', async () => {
    falMock.subscribe.mockResolvedValue({
      requestId: 'req-1',
      data: { images: [{ b64_json: 'aW1hZ2U=' }] },
    })

    await callFalAiImageApi({
      settings: DEFAULT_SETTINGS,
      prompt: 'prompt',
      params: { ...DEFAULT_PARAMS },
      inputImageDataUrls: ['data:image/png;base64,aW1hZ2U='],
    }, createDefaultFalProfile({ model: 'openai/gpt-image-2.5/flare', apiKey: 'fal-key' }))

    expect(falMock.subscribe).toHaveBeenCalledWith('openai/gpt-image-2.5/flare/edit', expect.anything())
  })

  it('requests a native transparent background', async () => {
    falMock.subscribe.mockResolvedValue({
      requestId: 'req-1',
      data: { images: [{ b64_json: 'aW1hZ2U=' }] },
    })

    await callFalAiImageApi({
      settings: DEFAULT_SETTINGS,
      prompt: 'prompt',
      params: { ...DEFAULT_PARAMS, output_format: 'webp', transparent_output: true },
      nativeTransparentBackground: true,
      inputImageDataUrls: [],
    }, createDefaultFalProfile({ apiKey: 'fal-key' }))

    expect(falMock.subscribe).toHaveBeenCalledWith('openai/gpt-image-2', expect.objectContaining({
      input: expect.objectContaining({ background: 'transparent' }),
    }))
  })

})
