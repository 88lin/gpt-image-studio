import { beforeEach, describe, expect, it, vi } from 'vitest'
import { invoke } from '@tauri-apps/api/core'
import { listen } from '@tauri-apps/api/event'
import type { AppSettings } from '../types'
import { useStore } from '../store'
import { DEFAULT_GROK_BASE_URL, DEFAULT_GROK_MODEL, NATIVE_IMAGE_PROVIDERS, createDefaultGrokProfile, createDefaultOpenAIProfile, normalizeSettings } from './apiProfiles'
import { installCliBridge } from './cliBridge'

vi.mock('@tauri-apps/api/core', () => ({ invoke: vi.fn(async () => undefined), isTauri: () => false }))
vi.mock('@tauri-apps/api/event', () => ({ listen: vi.fn(async () => vi.fn()) }))
vi.mock('../store', () => ({
  useStore: { getState: vi.fn() },
  createInputImageFromFile: vi.fn(),
  submitTask: vi.fn(),
  waitForTaskSettled: vi.fn(),
}))

beforeEach(() => {
  vi.clearAllMocks()
  const state = {
    settings: normalizeSettings({ profiles: [createDefaultOpenAIProfile({ id: 'openai' })] }),
    setSettings: vi.fn((settings: Partial<AppSettings>) => { state.settings = normalizeSettings({ ...state.settings, ...settings }) }),
    setReusedTaskApiProfile: vi.fn(),
  }
  vi.mocked(useStore.getState, { partial: true }).mockImplementation(() => state)
})

describe('CLI 的内置图像供应商配置', () => {
  it.each([
    ['grok', DEFAULT_GROK_BASE_URL, DEFAULT_GROK_MODEL],
    ['google', NATIVE_IMAGE_PROVIDERS.google.baseUrl, NATIVE_IMAGE_PROVIDERS.google.model],
    ['xai', NATIVE_IMAGE_PROVIDERS.xai.baseUrl, NATIVE_IMAGE_PROVIDERS.xai.model],
  ])('可以新建并启用内置 %s 配置', async (provider, baseUrl, model) => {
    const stop = installCliBridge()
    const handle = vi.mocked(listen).mock.calls[0][1]
    handle({ event: 'cli-request', id: 1, payload: {
      id: 42,
      tool: 'save_api_profile',
      arguments: { profile: { provider, name: provider } },
    } })

    await vi.waitFor(() => expect(invoke).toHaveBeenCalledWith('cli_respond', {
      id: 42,
      result: expect.objectContaining({ data: expect.objectContaining({
        provider,
        baseUrl,
        model,
        active: true,
      }) }),
    }))
    stop()
  })

  it('可以修改已有 Grok 配置，并在回复中隐藏 API Key', async () => {
    const profile = createDefaultGrokProfile({ id: 'grok', apiKey: 'private-key' })
    useStore.getState().settings = normalizeSettings({ profiles: [profile], activeProfileId: profile.id })
    const stop = installCliBridge()
    const handle = vi.mocked(listen).mock.calls[0][1]
    handle({ event: 'cli-request', id: 1, payload: {
      id: 43,
      tool: 'save_api_profile',
      arguments: { id: profile.id, profile: { name: '我的 Grok', baseUrl: '', model: '' } },
    } })

    await vi.waitFor(() => expect(invoke).toHaveBeenCalledWith('cli_respond', {
      id: 43,
      result: expect.objectContaining({ data: expect.objectContaining({
        name: '我的 Grok',
        provider: 'grok',
        baseUrl: DEFAULT_GROK_BASE_URL,
        model: DEFAULT_GROK_MODEL,
        apiKeySet: true,
      }) }),
    }))
    const reply = vi.mocked(invoke).mock.calls.find((call) => call[0] === 'cli_respond')
    expect(JSON.stringify(reply)).not.toContain('private-key')
    expect(useStore.getState().settings.profiles[0].apiKey).toBe('private-key')
    stop()
  })
})
