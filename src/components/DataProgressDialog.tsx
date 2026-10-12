import { useEffect, useState } from 'react'
import { cancelDataProgress, useDataProgress } from '../lib/dataProgress'
import { formatBytes } from '../lib/formatBytes'
import { isTauri } from '../lib/platform'

const UNIT_LABELS = { image: '张图片', file: '个文件' }

/** 数据导出、导入的进度弹窗；超过 300ms 才显示，避免短任务一闪而过。层级在设置弹窗之上、确认框和 Toast 之下 */
export default function DataProgressDialog() {
  const progress = useDataProgress((s) => s.progress)
  const active = progress !== null
  const [visible, setVisible] = useState(false)
  const [canceling, setCanceling] = useState(false)

  useEffect(() => {
    setCanceling(false)
    if (!active) {
      setVisible(false)
      return
    }
    const timer = window.setTimeout(() => setVisible(true), 300)
    return () => window.clearTimeout(timer)
  }, [active])

  if (!progress || !visible) return null
  const percent = progress.total > 0 ? Math.min(100, Math.round((progress.done / progress.total) * 100)) : null
  const count = !progress.unit || !progress.total
    ? ''
    : progress.unit === 'byte'
      ? `${formatBytes(progress.done)} / ${formatBytes(progress.total)}`
      : `已处理 ${progress.done} / ${progress.total} ${UNIT_LABELS[progress.unit]}`

  return (
    <div data-no-drag-select className="fixed inset-0 z-[105] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-md animate-overlay-in" />
      <div className="relative z-10 w-full max-w-sm rounded-3xl border border-white/50 bg-white/90 p-6 shadow-[0_8px_40px_rgb(0,0,0,0.12)] ring-1 ring-black/5 backdrop-blur-xl animate-confirm-in dark:border-white/[0.08] dark:bg-gray-900/90 dark:shadow-[0_8px_40px_rgb(0,0,0,0.4)] dark:ring-white/10">
        <h3 className="mb-2 text-base font-bold text-gray-800 dark:text-gray-100">
          {progress.mode === 'export' ? '正在导出数据' : '正在导入数据'}
        </h3>
        <div className="mb-3 flex items-baseline justify-between gap-3 text-sm text-gray-500 dark:text-gray-400">
          <span className="min-w-0">{progress.stage}</span>
          {percent !== null && <span className="shrink-0 tabular-nums">{percent}%</span>}
        </div>
        <div
          role="progressbar"
          aria-label={progress.stage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent ?? undefined}
          className="h-1.5 overflow-hidden rounded-full bg-black/[0.06] dark:bg-white/[0.08]"
        >
          {percent !== null
            ? <div className="h-full rounded-full bg-blue-500" style={{ width: `${percent}%` }} />
            : <div className="h-full w-2/5 rounded-full bg-blue-500 animate-progress-indeterminate" />}
        </div>
        <p className="mt-2 min-h-[1rem] text-xs tabular-nums text-gray-400 dark:text-gray-500">{count}</p>
        {progress.mode === 'import' && !progress.cancelable && (
          <p className="mt-3 text-xs leading-relaxed text-gray-500 dark:text-gray-400">正在写入，请勿关闭{isTauri ? '应用' : '页面'}。</p>
        )}
        {progress.cancelable && (
          <button
            onClick={() => {
              setCanceling(true)
              cancelDataProgress()
            }}
            disabled={canceling}
            className="mt-5 w-full rounded-xl border border-transparent bg-black/[0.04] py-2 text-sm text-gray-600 transition hover:bg-black/[0.07] disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white/[0.06] dark:text-gray-400 dark:hover:bg-white/[0.1]"
          >
            {canceling ? '正在取消…' : '取消'}
          </button>
        )}
      </div>
    </div>
  )
}
