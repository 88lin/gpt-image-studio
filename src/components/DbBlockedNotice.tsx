import { useSyncExternalStore } from 'react'
import { isDbBlocked, subscribeDbBlocked } from '../lib/idb'

/** 新版升级数据库时被其他标签页的旧连接挡住，提示用户关闭或刷新那些标签页；解除后自动消失并继续加载 */
export default function DbBlockedNotice() {
  const blocked = useSyncExternalStore(subscribeDbBlocked, isDbBlocked)
  if (!blocked) return null

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[130]" role="alert">
      <div className="flex items-center gap-2 sm:gap-2.5 w-max max-w-[calc(100vw-32px)] px-4 sm:px-5 py-3 bg-amber-50/95 dark:bg-amber-950/90 backdrop-blur-xl border border-amber-200 dark:border-amber-500/30 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-[13px] sm:text-sm font-medium text-amber-800 dark:text-amber-200">
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        </svg>
        {/* 窄屏缩小字号和内边距，放得下一行；仍需换行时均分两行，避免最后一个字单独成行 */}
        <span className="leading-5 text-balance">请关闭或刷新本应用的其他标签页以完成升级</span>
      </div>
    </div>
  )
}
