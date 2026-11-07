import { beforeEach, describe, expect, it, vi } from 'vitest'
import { invoke } from '@tauri-apps/api/core'
import { listen } from '@tauri-apps/api/event'
import type { AppSettings } from '../types'
import { useStore } from '../store'
import { NATIVE_IMAGE_PROVIDERS, createDefaultOpenAIProfile, normalizeApiProfile, normalizeSettings } from './apiProfiles'
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
    ['grok', NATIVE_IMAGE_PROVIDERS.xai.baseUrl, NATIVE_IMAGE_PROVIDERS.xai.model],
    ['google', NATIVE_IMAGE_PROVIDERS.google.baseUrl, NATIVE_IMAGE_PROVIDERS.google.model],
    ['xai', NATIVE_IMAGE_PROVIDERS.xai.baseUrl, NATIVE_IMAGE_PROVIDERS.xai.model],
  ])('可以保存 %s 配置，并把旧 Grok 请求迁移到 xAI', async (provider, baseUrl, model) => {
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
        provider: provider === 'grok' ? 'xai' : provider,
        baseUrl,
        model,
        active: true,
      }) }),
    }))
    stop()
  })

  it('可以修改已有 Grok 配置，并在回复中隐藏 API Key', async () => {
    const profile = normalizeApiProfile({ id: 'legacy-grok', provider: 'grok', apiKey: 'private-key' })
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
        provider: 'xai',
        baseUrl: NATIVE_IMAGE_PROVIDERS.xai.baseUrl,
        model: NATIVE_IMAGE_PROVIDERS.xai.model,
        apiKeySet: true,
      }) }),
    }))
    const reply = vi.mocked(invoke).mock.calls.find((call) => call[0] === 'cli_respond')
    expect(JSON.stringify(reply)).not.toContain('private-key')
    expect(useStore.getState().settings.profiles[0].apiKey).toBe('private-key')
    stop()
  })
})
