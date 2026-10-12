import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const mocks = vi.hoisted(() => ({
  apiFetch: vi.fn(),
  write: vi.fn(),
}))

vi.mock('@tauri-apps/plugin-clipboard-manager', () => ({ writeText: vi.fn() }))
vi.mock('./platform', () => ({ isTauri: true, apiFetch: mocks.apiFetch }))

import { copyImageSourceToClipboard } from './clipboard'

class FakeClipboardItem {
  static supports = (type: string) => type === 'image/png'
  constructor(public items: Record<string, Blob | Promise<Blob>>) {}
}

describe('copyImageSourceToClipboard', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.stubGlobal('window', { isSecureContext: true })
    vi.stubGlobal('navigator', { clipboard: { write: mocks.write } })
    vi.stubGlobal('ClipboardItem', FakeClipboardItem)
    mocks.write.mockImplementation(async (items: FakeClipboardItem[]) => {
      await items[0].items['image/png']
    })
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('在图片源完成之前同步调用 write，取图放进 ClipboardItem 的 Promise', async () => {
    let resolveSrc!: (src: string) => void
    const src = new Promise<string>((resolve) => { resolveSrc = resolve })
    const png = new Blob([new Uint8Array([1])], { type: 'image/png' })
    mocks.apiFetch.mockResolvedValue({ blob: async () => png })

    const done = copyImageSourceToClipboard(src)

    expect(mocks.write).toHaveBeenCalledTimes(1)
    expect(mocks.apiFetch).not.toHaveBeenCalled()
    const item = mocks.write.mock.calls[0][0][0] as FakeClipboardItem
    expect(Object.keys(item.items)).toEqual(['image/png'])

    resolveSrc('blob:image')
    await done
    expect(mocks.apiFetch).toHaveBeenCalledWith('blob:image')
    await expect(item.items['image/png']).resolves.toBe(png)
  })

  it('取图失败时 write 随之失败，不会挂起', async () => {
    mocks.apiFetch.mockResolvedValue({ blob: async () => new Blob(['x'], { type: 'text/html' }) })

    await expect(copyImageSourceToClipboard('https://example.com/a')).rejects.toThrow('Clipboard item is not an image')
    expect(mocks.write).toHaveBeenCalledTimes(1)
  })

  it('图片源为空时报错', async () => {
    await expect(copyImageSourceToClipboard(Promise.resolve(undefined))).rejects.toThrow('Image source is not available')
    expect(mocks.apiFetch).not.toHaveBeenCalled()
  })
})
