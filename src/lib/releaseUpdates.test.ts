import { describe, expect, it } from 'vitest'
import {
  compareVersions,
  isReleaseCacheFresh,
  MANUAL_CHECK_MIN_INTERVAL_MS,
  mergeReleasePage,
  parseReleaseCache,
  parseReleasePage,
  RELEASE_CACHE_TTL_MS,
  RELEASES_PER_PAGE,
  shouldShowUpdate,
  stripReleaseHeading,
} from './releaseUpdates'

const rawRelease = (tag: string, extra: Record<string, unknown> = {}) => ({
  tag_name: tag,
  body: `## ${tag}`,
  published_at: '2026-10-08T12:00:00Z',
  html_url: `https://github.com/88lin/gpt-image-studio/releases/tag/${tag}`,
  ...extra,
})

const release = (version: string) => ({
  tag: `v${version}`,
  version,
  body: '',
  publishedAt: '',
  url: 'https://github.com/',
})

describe('compareVersions', () => {
  it('按数字逐段比较，忽略前缀 v 和预发布后缀', () => {
    expect(compareVersions('0.7.17', '0.7.9')).toBeGreaterThan(0)
    expect(compareVersions('v0.8.0', '0.7.17')).toBeGreaterThan(0)
    expect(compareVersions('0.7.17', 'v0.7.17')).toBe(0)
    expect(compareVersions('0.7', '0.7.0')).toBe(0)
    expect(compareVersions('0.7.16', '0.7.17')).toBeLessThan(0)
    expect(compareVersions('1.0.0-beta.1', '1.0.0')).toBe(0)
  })
})

describe('parseReleasePage', () => {
  it('过滤草稿、预发布和无效条目，rawCount 保留原始数量', () => {
    const result = parseReleasePage([
      rawRelease('v0.8.0'),
      rawRelease('v0.8.1-beta', { prerelease: true }),
      rawRelease('v0.7.99', { draft: true }),
      { tag_name: '' },
      null,
      rawRelease('v0.7.17', { html_url: 'javascript:alert(1)' }),
    ])
    expect(result.rawCount).toBe(6)
    expect(result.releases.map((item) => item.tag)).toEqual(['v0.8.0', 'v0.7.17'])
    expect(result.releases[0]).toEqual({
      tag: 'v0.8.0',
      version: '0.8.0',
      body: '## v0.8.0',
      publishedAt: '2026-10-08T12:00:00Z',
      url: 'https://github.com/88lin/gpt-image-studio/releases/tag/v0.8.0',
    })
    // 非 https 的链接替换为仓库的 Release 页面
    expect(result.releases[1].url).toBe('https://github.com/88lin/gpt-image-studio/releases/tag/v0.7.17')
  })

  it('不是数组时抛出错误', () => {
    expect(() => parseReleasePage({ message: 'API rate limit exceeded' })).toThrow()
  })
})

describe('mergeReleasePage', () => {
  const fullPage = parseReleasePage(Array.from({ length: RELEASES_PER_PAGE }, (_, i) => rawRelease(`v0.7.${30 - i}`)))

  it('第一页重新开始计时并替换旧列表', () => {
    const old = { fetchedAt: 1, pages: 2, hasMore: true, releases: [release('0.1.0')] }
    const cache = mergeReleasePage(old, 1, fullPage, 1000)
    expect(cache.fetchedAt).toBe(1000)
    expect(cache.pages).toBe(1)
    expect(cache.hasMore).toBe(true)
    expect(cache.releases).toHaveLength(RELEASES_PER_PAGE)
  })

  it('后续页追加并去重，沿用第一页的时间，不满一页时没有更多', () => {
    const first = mergeReleasePage(null, 1, fullPage, 1000)
    const second = mergeReleasePage(first, 2, parseReleasePage([rawRelease('v0.7.21'), rawRelease('v0.7.20')]), 5000)
    expect(second.fetchedAt).toBe(1000)
    expect(second.pages).toBe(2)
    expect(second.hasMore).toBe(false)
    expect(second.releases.map((item) => item.tag).slice(-2)).toEqual(['v0.7.21', 'v0.7.20'])
    expect(second.releases).toHaveLength(RELEASES_PER_PAGE + 1)
  })
})

describe('Release 缓存', () => {
  it('可以往返序列化，损坏或格式不对时视为没有缓存', () => {
    const cache = mergeReleasePage(null, 1, parseReleasePage([rawRelease('v0.8.0')]), 1000)
    expect(parseReleaseCache(JSON.stringify(cache))).toEqual(cache)
    expect(parseReleaseCache(null)).toBeNull()
    expect(parseReleaseCache('{')).toBeNull()
    expect(parseReleaseCache(JSON.stringify({ fetchedAt: '1', pages: 1, releases: [] }))).toBeNull()
  })

  it('一小时内有效，过期、未来时间或没有数据时失效', () => {
    const cache = { fetchedAt: 10_000, pages: 1, hasMore: false, releases: [] }
    expect(isReleaseCacheFresh(cache, 10_000)).toBe(true)
    expect(isReleaseCacheFresh(cache, 10_000 + RELEASE_CACHE_TTL_MS - 1)).toBe(true)
    expect(isReleaseCacheFresh(cache, 10_000 + RELEASE_CACHE_TTL_MS)).toBe(false)
    expect(isReleaseCacheFresh(cache, 9_000)).toBe(false)
    expect(isReleaseCacheFresh({ ...cache, pages: 0 }, 10_000)).toBe(false)
    expect(isReleaseCacheFresh(null, 10_000)).toBe(false)
  })

  it('手动检查只复用一分钟内的缓存', () => {
    const cache = { fetchedAt: 10_000, pages: 1, hasMore: false, releases: [] }
    expect(isReleaseCacheFresh(cache, 10_000 + MANUAL_CHECK_MIN_INTERVAL_MS - 1, MANUAL_CHECK_MIN_INTERVAL_MS)).toBe(true)
    expect(isReleaseCacheFresh(cache, 10_000 + MANUAL_CHECK_MIN_INTERVAL_MS, MANUAL_CHECK_MIN_INTERVAL_MS)).toBe(false)
  })
})

describe('shouldShowUpdate', () => {
  it('只在最新版本高于当前版本时提示', () => {
    expect(shouldShowUpdate(release('0.8.0'), '0.7.17', '')).toBe(true)
    expect(shouldShowUpdate(release('0.7.17'), '0.7.17', '')).toBe(false)
    expect(shouldShowUpdate(release('0.7.16'), '0.7.17', '')).toBe(false)
    expect(shouldShowUpdate(undefined, '0.7.17', '')).toBe(false)
  })

  it('忽略某个版本后，出现更新的版本前不再提示', () => {
    expect(shouldShowUpdate(release('0.8.0'), '0.7.17', '0.8.0')).toBe(false)
    expect(shouldShowUpdate(release('0.8.0'), '0.7.17', '0.8.1')).toBe(false)
    expect(shouldShowUpdate(release('0.8.1'), '0.7.17', '0.8.0')).toBe(true)
  })
})

describe('stripReleaseHeading', () => {
  it('去掉开头与版本号对应的标题及其后的空行', () => {
    expect(stripReleaseHeading('## v0.7.17（2026-10-08）\n\n### 新增\n- 内容', '0.7.17')).toBe('### 新增\n- 内容')
    expect(stripReleaseHeading('\r\n# 0.7.17\r\n- 内容', '0.7.17')).toBe('- 内容')
  })

  it('开头不是标题或版本号不匹配时保持原样', () => {
    expect(stripReleaseHeading('- 内容\n## v0.7.17', '0.7.17')).toBe('- 内容\n## v0.7.17')
    expect(stripReleaseHeading('## v0.7.17', '0.7.1')).toBe('## v0.7.17')
    expect(stripReleaseHeading('### 新增\n- 内容', '0.7.17')).toBe('### 新增\n- 内容')
  })

  it('只去掉第一个标题', () => {
    expect(stripReleaseHeading('## v0.7.17\n## v0.7.17 补充', '0.7.17')).toBe('## v0.7.17 补充')
  })
})
