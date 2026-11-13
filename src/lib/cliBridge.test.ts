import { beforeEach, describe, expect, it, vi } from 'vitest'
import { DEFAULT_PARAMS, type AppSettings, type TaskParams } from '../types'
import { NATIVE_IMAGE_PROVIDERS, createDefaultOpenAIProfile, normalizeApiProfile, normalizeSettings } from './apiProfiles'
import { normalizeParamsForSettings } from './paramCompatibility'
import { installCliBridge } from './cliBridge'

const mocks = vi.hoisted(() => ({ invoke: vi.fn(), listen: vi.fn(), submitTask: vi.fn() }))
let state: {
  settings: AppSettings
  params: TaskParams
  setParams: (patch: Partial<TaskParams>) => void
  setSettings: (settings: AppSettings) => void
  setReusedTaskApiProfile: () => void
}

vi.mock('@tauri-apps/api/core', () => ({ invoke: mocks.invoke, isTauri: () => false }))
vi.mock('@tauri-apps/api/event', () => ({ listen: mocks.listen }))
vi.mock('./networkProxy', () => ({ getProxySetting: async () => ({ mode: 'system', url: '' }), setProxySetting: vi.fn() }))
vi.mock('../store', () => ({
  useStore: { getState: () => state },
  submitTask: mocks.submitTask,
  createInputImageFromFile: vi.fn(),
  waitForTaskSettled: vi.fn(),
}))

beforeEach(() => {
  vi.clearAllMocks()
  const profiles = [
    createDefaultOpenAIProfile({ id: 'gpt', model: 'gpt-image-2', apiKey: 'test-key' }),
    createDefaultOpenAIProfile({ id: 'seedream', provider: 'bytedance', model: 'doubao-seedream-5-5-261028', apiKey: 'test-key' }),
  ]
  state = {
    settings: normalizeSettings({ profiles, activeProfileId: 'seedream' }),
    params: { ...DEFAULT_PARAMS },
    setParams: (patch) => { state.params = { ...state.params, ...patch } },
    setSettings: (settings) => { state.settings = settings },
    setReusedTaskApiProfile: vi.fn(),
  }
  mocks.invoke.mockResolvedValue(undefined)
  mocks.listen.mockResolvedValue(() => {})
  // 在提交入口截取参数，不执行真实生成请求。
  mocks.submitTask.mockResolvedValue([])
  installCliBridge()
})

async function send(tool: string, args: Record<string, unknown>) {
  const listener = mocks.listen.mock.calls[0][1]
  listener({ payload: { id: 1, tool, arguments: args } })
  await vi.waitFor(() => expect(mocks.invoke.mock.calls.some(([cmd]) => cmd === 'cli_respond')).toBe(true))
  return mocks.invoke.mock.calls.find(([cmd]) => cmd === 'cli_respond')![1]
}

describe('CLI Seedream dimensions', () => {
  it('uses explicit generation dimensions even after choosing a preset ratio', async () => {
    state.params = { ...DEFAULT_PARAMS, aspect_ratio: '16:9', resolution: '1K' }
    await send('generate_image', { prompt: '测试', size: '1281x721' })
    expect(mocks.submitTask).toHaveBeenCalledOnce()
    expect(normalizeParamsForSettings(state.params, state.settings)).toMatchObject({ size: '1281x721', aspect_ratio: 'custom', resolution: undefined })
  })

  it('uses the target profile when switching profiles and setting dimensions together', async () => {
    state.settings = normalizeSettings({ ...state.settings, activeProfileId: 'gpt' })
    const reply = await send('update_settings', { active_profile_id: 'seedream', params: { size: '8192x512' } })
    expect(reply.error).toBeUndefined()
    expect(state.settings.activeProfileId).toBe('seedream')
    expect(normalizeParamsForSettings(state.params, state.settings)).toMatchObject({ size: '8192x512', aspect_ratio: 'custom' })
  })

  it.each(['auto', '1K', '1.5K', '2K'])('leaves custom mode for %s', async (size) => {
    state.params = { ...DEFAULT_PARAMS, size: '1281x721', aspect_ratio: 'custom' }
    const reply = await send('update_settings', { params: { size } })
    expect(reply.error).toBeUndefined()
    expect(normalizeParamsForSettings(state.params, state.settings)).toMatchObject({ size: size === 'auto' ? '2K' : size, aspect_ratio: 'auto' })
  })

  it('preserves the current custom mode if no size is supplied', async () => {
    state.params = { ...DEFAULT_PARAMS, size: '1281x721', aspect_ratio: 'custom' }
    await send('update_settings', { params: { output_format: 'jpeg' } })
    expect(state.params).toMatchObject({ size: '1281x721', aspect_ratio: 'custom', output_format: 'jpeg' })
  })

  it('keeps GPT size parsing unchanged when switching away from Seedream', async () => {
    await send('update_settings', { active_profile_id: 'gpt', params: { size: '1536x1024' } })
    expect(state.params.size).toBe('1536x1024')
    expect(state.params.aspect_ratio).toBeUndefined()
  })

  it('rejects an invalid Seedream size before submitting', async () => {
    const reply = await send('generate_image', { prompt: '测试', size: '4K' })
    expect(reply.error).toContain('Seedream size')
    expect(mocks.submitTask).not.toHaveBeenCalled()
  })
})

describe('CLI 的内置图像供应商配置', () => {
  it.each([
    ['grok', NATIVE_IMAGE_PROVIDERS.xai.baseUrl, NATIVE_IMAGE_PROVIDERS.xai.model],
    ['google', NATIVE_IMAGE_PROVIDERS.google.baseUrl, NATIVE_IMAGE_PROVIDERS.google.model],
    ['xai', NATIVE_IMAGE_PROVIDERS.xai.baseUrl, NATIVE_IMAGE_PROVIDERS.xai.model],
    ['bytedance', NATIVE_IMAGE_PROVIDERS.bytedance.baseUrl, NATIVE_IMAGE_PROVIDERS.bytedance.model],
  ])('可以保存 %s 配置，并把旧 Grok 请求迁移到 xAI', async (provider, baseUrl, model) => {
    const handle = mocks.listen.mock.calls[0][1]
    handle({ event: 'cli-request', id: 1, payload: {
      id: 42,
      tool: 'save_api_profile',
      arguments: { profile: { provider, name: provider } },
    } })

    await vi.waitFor(() => expect(mocks.invoke).toHaveBeenCalledWith('cli_respond', {
      id: 42,
      result: expect.objectContaining({ data: expect.objectContaining({
        provider: provider === 'grok' ? 'xai' : provider,
        baseUrl,
        model,
        active: true,
      }) }),
    }))
  })

  it('可以修改已有 Grok 配置，并在回复中隐藏 API Key', async () => {
    const profile = normalizeApiProfile({ id: 'legacy-grok', provider: 'grok', apiKey: 'private-key' })
    state.settings = normalizeSettings({ profiles: [profile], activeProfileId: profile.id })
    const handle = mocks.listen.mock.calls[0][1]
    handle({ event: 'cli-request', id: 1, payload: {
      id: 43,
      tool: 'save_api_profile',
      arguments: { id: profile.id, profile: { name: '我的 Grok', baseUrl: '', model: '' } },
    } })

    await vi.waitFor(() => expect(mocks.invoke).toHaveBeenCalledWith('cli_respond', {
      id: 43,
      result: expect.objectContaining({ data: expect.objectContaining({
        name: '我的 Grok',
        provider: 'xai',
        baseUrl: NATIVE_IMAGE_PROVIDERS.xai.baseUrl,
        model: NATIVE_IMAGE_PROVIDERS.xai.model,
        apiKeySet: true,
      }) }),
    }))
    const reply = mocks.invoke.mock.calls.find((call) => call[0] === 'cli_respond')
    expect(JSON.stringify(reply)).not.toContain('private-key')
    expect(state.settings.profiles[0].apiKey).toBe('private-key')
  })
})
