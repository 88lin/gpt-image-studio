import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { getReleasesApiUrl, MANUAL_CHECK_MIN_INTERVAL_MS, parseReleasePage, RELEASE_CACHE_TTL_MS, shouldShowUpdate } from '../lib/releaseUpdates'

const platform = vi.hoisted(() => ({ isTauri: true, apiFetch: vi.fn<typeof fetch>() }))
const records = vi.hoisted(() => new Map<string, string>())

vi.mock('../lib/platform', () => ({
  get isTauri() { return platform.isTauri },
  apiFetch: platform.apiFetch,
}))
vi.mock('../lib/localRecord', () => ({
  readLocal: (key: string) => records.get(key) ?? null,
  writeLocal: (key: string, value: string) => records.set(key, value),
}))

const { checkForUpdates, loadOlderReleases, useReleaseUpdates } = await import('./useReleaseUpdates')

const MANIFEST_URL = 'https://github.com/88lin/gpt-image-studio/releases/latest/download/latest.json'
const manifest = {
  version: '0.9.6',
  notes: '## v0.9.6（2026-11-17）\n\n### 新增\n- 新功能。',
  pub_date: '2026-11-17T03:36:30Z',
}
const rawRelease = (tag: string) => ({ tag_name: tag, body: `## ${tag}\n- 更新说明。` })
const response = (data: unknown, init?: ResponseInit) => new Response(JSON.stringify(data), init)

describe('Release 更新检查', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-11-17T04:00:00Z'))
    records.clear()
    platform.apiFetch.mockReset()
    platform.isTauri = true
    useReleaseUpdates.setState({ releases: [], pages: 0, hasMore: false, ignoredVersion: '', modalOpen: false, checkError: '' })
  })

  afterEach(() => vi.useRealTimers())

  it('客户端在 GitHub API 限流时仍能从更新清单发现新版本', async () => {
    platform.apiFetch.mockImplementation(async (url) => String(url).startsWith('https://api.github.com/')
      ? response({ message: 'API rate limit exceeded' }, { status: 403, headers: { 'x-ratelimit-remaining': '0' } })
      : response(manifest))

    const latest = await checkForUpdates()
    expect(latest).toEqual({
      tag: 'v0.9.6', version: '0.9.6', body: manifest.notes, publishedAt: manifest.pub_date,
      url: 'https://github.com/88lin/gpt-image-studio/releases/tag/v0.9.6',
    })
    expect(shouldShowUpdate(latest, '0.9.4', '')).toBe(true)
    expect(platform.apiFetch).toHaveBeenCalledTimes(1)
    expect(platform.apiFetch.mock.calls[0][0]).toBe(MANIFEST_URL)
    expect(useReleaseUpdates.getState()).toMatchObject({ pages: 0, hasMore: true, checkError: '' })
  })

  it('同时检查共用请求，重建状态后仍可从清单缓存恢复', async () => {
    platform.apiFetch.mockResolvedValueOnce(response(manifest))
    const results = await Promise.all([checkForUpdates(), checkForUpdates(), checkForUpdates(MANUAL_CHECK_MIN_INTERVAL_MS)])
    expect(results.map((item) => item?.version)).toEqual(['0.9.6', '0.9.6', '0.9.6'])

    useReleaseUpdates.setState({ releases: [], pages: 0, hasMore: false, checkError: '旧错误' })
    expect((await checkForUpdates())?.version).toBe('0.9.6')
    expect(platform.apiFetch).toHaveBeenCalledTimes(1)
    expect(useReleaseUpdates.getState()).toMatchObject({ releases: [results[0]], hasMore: true, checkError: '' })
  })

  it('自动检查复用一小时缓存，手动检查超过一分钟后重新获取清单', async () => {
    platform.apiFetch.mockResolvedValueOnce(response(manifest))
    await checkForUpdates()
    vi.advanceTimersByTime(MANUAL_CHECK_MIN_INTERVAL_MS - 1)
    await checkForUpdates(MANUAL_CHECK_MIN_INTERVAL_MS)
    vi.advanceTimersByTime(1)
    await checkForUpdates()
    expect(platform.apiFetch).toHaveBeenCalledTimes(1)

    platform.apiFetch.mockResolvedValueOnce(response({ ...manifest, version: '0.9.7' }))
    expect((await checkForUpdates(MANUAL_CHECK_MIN_INTERVAL_MS))?.version).toBe('0.9.7')
    expect(platform.apiFetch).toHaveBeenCalledTimes(2)
    expect(platform.apiFetch.mock.calls[1][0]).toBe(MANIFEST_URL)
  })

  it('清单缓存的历史记录从 API 第一页开始，后续页追加并保留第一页时间', async () => {
    platform.apiFetch.mockResolvedValueOnce(response(manifest))
    await checkForUpdates()
    vi.advanceTimersByTime(5000)
    const fetchedAt = Date.now()
    const tags = ['v0.9.6', 'v0.9.5', 'v0.9.4', 'v0.9.3', 'v0.9.2', 'v0.9.1', 'v0.9.0', 'v0.8.2', 'v0.8.1', 'v0.8.0']
    platform.apiFetch.mockResolvedValueOnce(response(tags.map(rawRelease)))
    await Promise.all([loadOlderReleases(), loadOlderReleases()])
    expect(platform.apiFetch.mock.calls[1][0]).toBe(getReleasesApiUrl(1))
    expect(useReleaseUpdates.getState().releases.map((item) => item.tag)).toEqual(tags)
    expect(useReleaseUpdates.getState()).toMatchObject({ pages: 1, hasMore: true })

    vi.advanceTimersByTime(5000)
    platform.apiFetch.mockResolvedValueOnce(response([rawRelease('v0.8.0'), rawRelease('v0.7.17')]))
    await loadOlderReleases()
    expect(platform.apiFetch.mock.calls[2][0]).toBe(getReleasesApiUrl(2))
    expect(useReleaseUpdates.getState().releases.map((item) => item.tag)).toEqual([...tags, 'v0.7.17'])
    expect(JSON.parse(records.get('release-cache-v1')!)).toMatchObject({ fetchedAt, pages: 2, hasMore: false })
  })

  it('历史查询限流时保留最新版本，下一次检查仍可使用清单缓存', async () => {
    platform.apiFetch.mockResolvedValueOnce(response(manifest))
    const latest = await checkForUpdates()
    const cache = records.get('release-cache-v1')
    platform.apiFetch.mockResolvedValueOnce(response({ message: 'API rate limit exceeded' }, { status: 403, headers: { 'x-ratelimit-remaining': '0' } }))

    await expect(loadOlderReleases()).rejects.toThrow('GitHub 请求过于频繁')
    expect(useReleaseUpdates.getState()).toMatchObject({ releases: [latest], pages: 0, hasMore: true, checkError: '' })
    expect(records.get('release-cache-v1')).toBe(cache)
    expect(await checkForUpdates(MANUAL_CHECK_MIN_INTERVAL_MS)).toEqual(latest)
    expect(platform.apiFetch).toHaveBeenCalledTimes(2)
  })

  it('更新源连接失败时保留过期缓存并显示失败原因，恢复后可重试', async () => {
    const releases = parseReleasePage([rawRelease('v0.9.5')]).releases
    records.set('release-cache-v1', JSON.stringify({ fetchedAt: Date.now() - RELEASE_CACHE_TTL_MS, pages: 1, hasMore: false, releases }))
    platform.apiFetch.mockRejectedValueOnce(new TypeError('网络连接失败'))

    await expect(checkForUpdates()).rejects.toThrow('网络连接失败')
    expect(useReleaseUpdates.getState()).toMatchObject({ releases, checkError: '网络连接失败' })
    platform.apiFetch.mockResolvedValueOnce(response(manifest))
    expect((await checkForUpdates())?.version).toBe('0.9.6')
    expect(useReleaseUpdates.getState().checkError).toBe('')
  })

  it('客户端更新源返回 HTTP 错误时显示状态，不回退到 API 查询', async () => {
    platform.apiFetch.mockResolvedValueOnce(response({ message: 'Forbidden' }, { status: 403 }))
    await expect(checkForUpdates()).rejects.toThrow('HTTP 403')
    expect(platform.apiFetch).toHaveBeenCalledTimes(1)
    expect(platform.apiFetch.mock.calls[0][0]).toBe(MANIFEST_URL)
    expect(useReleaseUpdates.getState().checkError).not.toContain('请求过于频繁')
  })

  it('网页版继续使用 Releases API，最新版本和历史列表一并缓存', async () => {
    platform.isTauri = false
    platform.apiFetch.mockResolvedValueOnce(response([rawRelease('v0.9.6'), rawRelease('v0.9.5')]))

    expect((await checkForUpdates())?.version).toBe('0.9.6')
    expect(platform.apiFetch.mock.calls[0][0]).toBe(getReleasesApiUrl(1))
    expect(useReleaseUpdates.getState()).toMatchObject({ pages: 1, hasMore: false, checkError: '' })
    expect(useReleaseUpdates.getState().releases).toHaveLength(2)
  })

  it.each([
    { status: 403, headers: new Headers({ 'x-ratelimit-remaining': '0' }), message: 'API rate limit exceeded' },
    { status: 403, headers: new Headers({ 'retry-after': '60' }), message: 'Forbidden' },
    { status: 403, headers: new Headers(), message: 'You have exceeded a secondary rate limit' },
    { status: 429, headers: new Headers(), message: 'Too many requests' },
  ])('API 限流响应显示稍后重试提示：$status $message', async ({ status, headers, message }) => {
    platform.isTauri = false
    platform.apiFetch.mockResolvedValueOnce(response({ message }, { status, headers }))
    await expect(checkForUpdates()).rejects.toThrow('GitHub 请求过于频繁')
  })

  it('没有限流证据的 API 403 显示 HTTP 状态，不误报请求频繁', async () => {
    platform.isTauri = false
    platform.apiFetch.mockResolvedValueOnce(response({ message: 'Forbidden' }, { status: 403, headers: { 'x-ratelimit-remaining': '59' } }))
    await expect(checkForUpdates()).rejects.toThrow('HTTP 403')
    expect(useReleaseUpdates.getState().checkError).not.toContain('请求过于频繁')
  })
})
