export const RELEASE_REPO = '88lin/gpt-image-studio'
export const RELEASES_PAGE_URL = `https://github.com/${RELEASE_REPO}/releases`
export const RELEASES_PER_PAGE = 10
// GitHub API 未登录每小时限 60 次，一小时内复用本地缓存
export const RELEASE_CACHE_TTL_MS = 60 * 60 * 1000
// 手动检查更新时，一分钟内仍复用缓存，避免连续点击重复请求
export const MANUAL_CHECK_MIN_INTERVAL_MS = 60 * 1000

export interface ReleaseInfo {
  tag: string
  /** 去掉前缀 v 的版本号 */
  version: string
  body: string
  publishedAt: string
  url: string
}

export interface ReleaseCache {
  fetchedAt: number
  /** 已加载的页数，下一页为 pages + 1 */
  pages: number
  hasMore: boolean
  releases: ReleaseInfo[]
}

export function getReleasesApiUrl(page: number) {
  return `https://api.github.com/repos/${RELEASE_REPO}/releases?per_page=${RELEASES_PER_PAGE}&page=${page}`
}

/** 按数字逐段比较版本号，忽略前缀 v 和预发布后缀 */
export function compareVersions(a: string, b: string) {
  const toParts = (v: string) => v.trim().replace(/^v/i, '').split(/[-+]/)[0].split('.').map((part) => Number.parseInt(part, 10) || 0)
  const aParts = toParts(a)
  const bParts = toParts(b)
  const length = Math.max(aParts.length, bParts.length)
  for (let i = 0; i < length; i += 1) {
    const diff = (aParts[i] ?? 0) - (bParts[i] ?? 0)
    if (diff !== 0) return diff
  }
  return 0
}

function normalizeRelease(raw: unknown): ReleaseInfo | null {
  if (!raw || typeof raw !== 'object') return null
  const record = raw as Record<string, unknown>
  if (record.draft === true || record.prerelease === true) return null
  const tag = typeof record.tag_name === 'string' ? record.tag_name.trim() : ''
  if (!tag) return null
  return {
    tag,
    version: tag.replace(/^v/i, ''),
    body: typeof record.body === 'string' ? record.body : '',
    publishedAt: typeof record.published_at === 'string' ? record.published_at : '',
    url: typeof record.html_url === 'string' && record.html_url.startsWith('https://') ? record.html_url : `${RELEASES_PAGE_URL}/tag/${encodeURIComponent(tag)}`,
  }
}

/** 去掉正文开头与版本号对应的标题（如“## v0.7.17（2026-10-08）”），版本卡顶部已显示版本号与日期 */
export function stripReleaseHeading(body: string, version: string) {
  const lines = body.split(/\r?\n/)
  const idx = lines.findIndex((line) => line.trim())
  const heading = lines[idx]?.match(/^\s*#{1,6}\s+(.*)$/)
  if (!heading) return body
  // 按完整的数字段比较，避免 0.7.1 误匹配 0.7.17
  if (!heading[1].match(/\d+(?:\.\d+)*/g)?.includes(version)) return body
  return lines.slice(idx + 1).join('\n').replace(/^(\s*\n)+/, '')
}

/** 解析 Releases API 的一页；rawCount 用于判断是否还有下一页（草稿和预发布会被过滤掉） */
export function parseReleasePage(data: unknown) {
  if (!Array.isArray(data)) throw new Error('Release 数据格式不正确')
  return {
    rawCount: data.length,
    releases: data.map(normalizeRelease).filter((item): item is ReleaseInfo => item !== null),
  }
}

/** 把新加载的一页合并进缓存；page 为 1 时视为重新获取，丢弃旧列表 */
export function mergeReleasePage(cache: ReleaseCache | null, page: number, result: ReturnType<typeof parseReleasePage>, now: number): ReleaseCache {
  const base = page === 1 || !cache ? [] : cache.releases
  const seen = new Set(base.map((item) => item.tag))
  return {
    fetchedAt: page === 1 || !cache ? now : cache.fetchedAt,
    pages: page,
    hasMore: result.rawCount >= RELEASES_PER_PAGE,
    releases: [...base, ...result.releases.filter((item) => !seen.has(item.tag))],
  }
}

/** 从本地存储恢复缓存，格式不对时视为没有缓存 */
export function parseReleaseCache(raw: string | null): ReleaseCache | null {
  if (!raw) return null
  try {
    const data = JSON.parse(raw) as Partial<ReleaseCache>
    if (typeof data.fetchedAt !== 'number' || typeof data.pages !== 'number' || !Array.isArray(data.releases)) return null
    const releases = parseReleasePage(data.releases.map((item: Partial<ReleaseInfo>) => ({
      tag_name: item?.tag,
      body: item?.body,
      published_at: item?.publishedAt,
      html_url: item?.url,
    }))).releases
    return { fetchedAt: data.fetchedAt, pages: data.pages, hasMore: data.hasMore === true, releases }
  } catch {
    return null
  }
}

export function isReleaseCacheFresh(cache: ReleaseCache | null, now: number, ttl = RELEASE_CACHE_TTL_MS): cache is ReleaseCache {
  // 时间戳在未来（系统时间被调回）时同样视为过期
  return Boolean(cache && cache.pages > 0 && now >= cache.fetchedAt && now - cache.fetchedAt < ttl)
}

/** 最新版本高于当前版本，且高于已忽略的版本时才提示 */
export function shouldShowUpdate(latest: ReleaseInfo | undefined, currentVersion: string, ignoredVersion: string) {
  if (!latest || compareVersions(latest.version, currentVersion) <= 0) return false
  return !ignoredVersion || compareVersions(latest.version, ignoredVersion) > 0
}
