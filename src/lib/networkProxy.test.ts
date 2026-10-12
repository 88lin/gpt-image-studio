import { beforeEach, describe, expect, it, vi } from 'vitest'

const invoke = vi.hoisted(() => vi.fn())

vi.mock('@tauri-apps/api/core', () => ({ invoke }))

describe('networkProxy', () => {
  beforeEach(() => {
    vi.resetModules()
    invoke.mockReset()
  })

  it('只读取一次并缓存结果', async () => {
    invoke.mockResolvedValue({ mode: 'custom', url: 'http://127.0.0.1:7890' })
    const proxy = await import('./networkProxy')
    expect(proxy.getCachedProxySetting()).toBeNull()
    await Promise.all([proxy.getProxySetting(), proxy.getProxySetting()])
    expect(invoke).toHaveBeenCalledTimes(1)
    expect(proxy.getCachedProxySetting()).toEqual({ mode: 'custom', url: 'http://127.0.0.1:7890' })
  })

  it('读取失败后下次重新读取', async () => {
    invoke.mockRejectedValueOnce('失败').mockResolvedValueOnce({ mode: 'none', url: '' })
    const proxy = await import('./networkProxy')
    await expect(proxy.getProxySetting()).rejects.toBe('失败')
    expect(proxy.getCachedProxySetting()).toBeNull()
    await expect(proxy.getProxySetting()).resolves.toEqual({ mode: 'none', url: '' })
    expect(invoke).toHaveBeenCalledTimes(2)
  })

  it('保存成功后更新缓存，失败时保持原值', async () => {
    invoke.mockResolvedValueOnce({ mode: 'system', url: '' })
    const proxy = await import('./networkProxy')
    await proxy.getProxySetting()
    invoke.mockResolvedValueOnce({ mode: 'custom', url: 'http://127.0.0.1:7890' })
    await proxy.setProxySetting({ mode: 'custom', url: ' http://127.0.0.1:7890 ' })
    expect(proxy.getCachedProxySetting()).toEqual({ mode: 'custom', url: 'http://127.0.0.1:7890' })
    invoke.mockRejectedValueOnce('地址不合法')
    await expect(proxy.setProxySetting({ mode: 'custom', url: 'bad' })).rejects.toBe('地址不合法')
    expect(proxy.getCachedProxySetting()).toEqual({ mode: 'custom', url: 'http://127.0.0.1:7890' })
    await expect(proxy.getProxySetting()).resolves.toEqual({ mode: 'custom', url: 'http://127.0.0.1:7890' })
    expect(invoke).toHaveBeenCalledTimes(3)
  })
})
