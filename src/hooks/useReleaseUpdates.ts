import { createRef, useEffect } from 'react'
import { create } from 'zustand'
import type { ReleaseCache, ReleaseInfo } from '../lib/releaseUpdates'
import { CLIENT_UPDATE_MANIFEST_URL, getReleasesApiUrl, isReleaseCacheFresh, RELEASE_CACHE_TTL_MS, mergeReleasePage, parseReleaseCache, parseReleasePage, parseUpdateManifest } from '../lib/releaseUpdates'
import { readLocal, writeLocal } from '../lib/localRecord'
import { apiFetch, isTauri } from '../lib/platform'

const CACHE_KEY = 'release-cache-v1'
const IGNORED_KEY = 'ignored-release-version'

interface ReleaseUpdatesState {
  releases: ReleaseInfo[]
  pages: number
  hasMore: boolean
  ignoredVersion: string
  modalOpen: boolean
  // 最近一次检查失败的原因，成功后清空
  checkError: string
}

export const useReleaseUpdates = create<ReleaseUpdatesState>(() => ({
  releases: [],
  pages: 0,
  hasMore: false,
  ignoredVersion: readLocal(IGNORED_KEY) ?? '',
  modalOpen: false,
  checkError: '',
}))

/** 更新弹窗的滚动区域；设置弹窗打开时需要放行它的滚动 */
export const updateModalScrollRef = createRef<HTMLDivElement>()

async function fetchReleasePage(page: number) {
  // 客户端由 Rust 侧发出，不依赖 CSP 的 connect-src 和 GitHub 的 CORS；网页版即原生 fetch
  const res = await apiFetch(getReleasesApiUrl(page), { headers: { Accept: 'application/vnd.github+json' } })
  const data: unknown = res.status === 403 ? await res.json().catch(() => null) : null
  const message = data && typeof data === 'object' && 'message' in data && typeof data.message === 'string' ? data.message : ''
  if (res.status === 429 || (res.status === 403 && (res.headers.get('x-ratelimit-remaining') === '0' || res.headers.has('retry-after') || /rate limit/i.test(message)))) {
    throw new Error('GitHub 请求过于频繁，请稍后再试')
  }
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return parseReleasePage(await res.json())
}

function applyCache(cache: ReleaseCache) {
  useReleaseUpdates.setState({ releases: cache.releases, pages: cache.pages, hasMore: cache.hasMore, checkError: '' })
}

let checking: Promise<ReleaseInfo | undefined> | null = null

/** 获取最新版本；缓存在 ttl 内直接复用（默认一小时）。同时发起的检查共用一次请求 */
export function checkForUpdates(ttl = RELEASE_CACHE_TTL_MS) {
  checking ??= (async () => {
    const cache = parseReleaseCache(readLocal(CACHE_KEY))
    if (isReleaseCacheFresh(cache, Date.now(), ttl)) {
      applyCache(cache)
      return cache.releases[0]
    }
    try {
      // 客户端沿用安装包的更新源，避免消耗 Releases API 的匿名请求额度；历史版本按需加载
      const res = isTauri ? await apiFetch(CLIENT_UPDATE_MANIFEST_URL, { headers: { Accept: 'application/json' } }) : null
      if (res && !res.ok) throw new Error(`获取客户端更新信息失败（HTTP ${res.status}）`)
      const latest = res ? parseUpdateManifest(await res.json()) : null
      const next: ReleaseCache = latest
        ? { fetchedAt: Date.now(), pages: 0, hasMore: true, releases: [latest] }
        : mergeReleasePage(null, 1, await fetchReleasePage(1), Date.now())
      writeLocal(CACHE_KEY, JSON.stringify(next))
      applyCache(next)
      return next.releases[0]
    } catch (err) {
      // 失败时退回过期缓存，避免弹窗中已显示的内容消失
      if (cache) applyCache(cache)
      useReleaseUpdates.setState({ checkError: err instanceof Error ? err.message : String(err) })
      throw err
    }
  })().finally(() => {
    checking = null
  })
  return checking
}

let loadingMore: Promise<void> | null = null

/** 加载下一页更早的版本，并写回缓存；某页过滤后没有新增版本时继续加载，直到有新增或没有更多 */
export function loadOlderReleases() {
  loadingMore ??= (async () => {
    // 追加的页沿用第一页的获取时间，缓存整体按第一页过期
    const fetchedAt = parseReleaseCache(readLocal(CACHE_KEY))?.fetchedAt ?? Date.now()
    const count = useReleaseUpdates.getState().releases.length
    for (;;) {
      const state = useReleaseUpdates.getState()
      const next = mergeReleasePage({ fetchedAt, pages: state.pages, hasMore: state.hasMore, releases: state.releases }, state.pages + 1, await fetchReleasePage(state.pages + 1), Date.now())
      writeLocal(CACHE_KEY, JSON.stringify(next))
      applyCache(next)
      // 每轮页码递增，返回不足一页时 hasMore 为假，循环必然结束
      if (next.releases.length > count || !next.hasMore) return
    }
  })().finally(() => {
    loadingMore = null
  })
  return loadingMore
}

export function ignoreReleaseVersion(version: string) {
  writeLocal(IGNORED_KEY, version)
  useReleaseUpdates.setState({ ignoredVersion: version })
}

export function setUpdateModalOpen(modalOpen: boolean) {
  useReleaseUpdates.setState({ modalOpen })
}

let autoChecked = false

/** 启动时检查一次更新（开发模式下 StrictMode 会执行两次 effect，用模块级标记保证只检查一次） */
export function useAutoUpdateCheck(enabled: boolean) {
  useEffect(() => {
    if (!enabled || autoChecked) return
    autoChecked = true
    checkForUpdates().catch((err) => console.warn('检查更新失败：', err))
  }, [enabled])
}
