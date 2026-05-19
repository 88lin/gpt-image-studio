import { useStore } from '../store'
import Select from './Select'

export default function SearchBar() {
  const searchQuery = useStore((s) => s.searchQuery)
  const setSearchQuery = useStore((s) => s.setSearchQuery)
  const filterStatus = useStore((s) => s.filterStatus)
  const setFilterStatus = useStore((s) => s.setFilterStatus)
  const filterFavorite = useStore((s) => s.filterFavorite)
  const setFilterFavorite = useStore((s) => s.setFilterFavorite)

  return (
    <div data-no-drag-select className="mt-6 mb-4 flex gap-3">
      <div className="flex gap-2 flex-shrink-0 z-20">
        <button
          onClick={() => setFilterFavorite(!filterFavorite)}
          className={`p-2.5 rounded-xl border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/40 ${
            filterFavorite
              ? 'border-yellow-400 bg-yellow-50 dark:bg-yellow-500/10 text-yellow-500 shadow-[0_0_0_3px_rgba(250,204,21,0.12)]'
              : 'border-gray-200 dark:border-white/[0.08] bg-white dark:bg-gray-900 text-gray-400 hover:text-yellow-500 hover:border-yellow-300/70 hover:bg-yellow-50/60 dark:hover:bg-yellow-500/[0.06]'
          }`}
          title={filterFavorite ? '取消只看收藏' : '只看收藏'}
          aria-pressed={filterFavorite}
        >
          <svg className="w-5 h-5" fill={filterFavorite ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </button>
        <div className="relative w-28">
          <Select
            value={filterStatus}
            onChange={(val) => setFilterStatus(val as any)}
            options={[
              { label: '全部状态', value: 'all' },
              { label: '已完成', value: 'done' },
              { label: '生成中', value: 'running' },
              { label: '失败', value: 'error' },
            ]}
            className="px-3 py-2.5 rounded-xl border border-gray-200 dark:border-white/[0.08] bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-white/[0.06] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition"
          />
        </div>
      </div>
      <div className="relative flex-1 z-10">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="搜索提示词、参数..."
          aria-label="搜索任务"
          className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-gray-200 dark:border-white/[0.08] bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            aria-label="清空搜索"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 dark:hover:bg-white/[0.08] dark:hover:text-gray-200 transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
