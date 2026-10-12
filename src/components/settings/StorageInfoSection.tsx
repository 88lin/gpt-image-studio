import { useEffect, useState } from 'react'
import { changeDataDir, getStorageInfo, openStorageDir, pickDataDir, type StorageInfo } from '../../lib/dbTauri'
import { formatBytes } from '../../lib/formatBytes'
import { flushTauriStorage } from '../../lib/tauriStorage'
import { useStore } from '../../store'
import { ExternalLinkIcon } from '../icons'
import { PathBox } from './saveDirMigration'

/** 仅客户端：显示本地数据目录与占用空间，可更改数据目录 */
export default function StorageInfoSection() {
  const showToast = useStore((s) => s.showToast)
  const setConfirmDialog = useStore((s) => s.setConfirmDialog)
  const [info, setInfo] = useState<StorageInfo | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    getStorageInfo()
      .then(setInfo)
      .catch((err) => {
        console.error('读取存储信息失败：', err)
        setError(err instanceof Error ? err.message : String(err))
      })
  }, [])

  const handleOpen = async () => {
    try {
      await openStorageDir()
    } catch (err) {
      console.error('打开数据目录失败：', err)
      showToast(err instanceof Error ? err.message : '打开数据目录失败', 'error')
    }
  }

  const handleChange = async () => {
    const change = await pickDataDir().catch((err) => {
      console.error('选择数据目录失败：', err)
      setConfirmDialog({
        title: '无法使用该目录',
        message: err instanceof Error ? err.message : String(err),
        confirmText: '我知道了',
        showCancel: false,
      })
      return null
    })
    if (!change) return
    if (change.blocked) {
      setConfirmDialog({
        title: '无法使用该目录',
        message: change.blocked,
        content: <PathBox rows={[['当前目录', change.from], ['所选目录', change.to]]} />,
        confirmText: '我知道了',
        showCancel: false,
      })
      return
    }
    setConfirmDialog({
      title: '更改数据目录',
      message: `将 **${change.files}** 个文件（${formatBytes(change.bytes)}）复制到新目录，然后重启客户端。`,
      content: (
        <div className="space-y-3">
          <PathBox rows={[['原目录', change.from], ['新目录', change.to]]} />
          <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
            完成后会删除原目录。正在生成的任务会中断。
          </p>
        </div>
      ),
      confirmText: '重启并更改',
      busyText: '正在重启…',
      awaitAction: true,
      action: async () => {
        try {
          // 重启前写入尚未保存的设置
          await flushTauriStorage()
          await changeDataDir()
          return false
        } catch (err) {
          console.error('更改数据目录失败：', err)
          showToast(err instanceof Error ? err.message : '更改数据目录失败', 'error')
          return true
        }
      },
    })
  }

  const rows = info
    ? [
        ['数据库', formatBytes(info.dbBytes)],
        ['原图', `${formatBytes(info.imageBytes)}（${info.imageCount} 张）`],
        ['缩略图', formatBytes(info.thumbnailBytes)],
      ]
    : []

  return (
    <div className="rounded-2xl border border-transparent bg-black/[0.04] p-4 dark:bg-white/[0.06] space-y-4">
      <div className="flex items-center gap-2 mb-1">
        <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
        <h4 className="text-sm font-bold text-gray-800 dark:text-gray-100">本地存储</h4>
      </div>
      {error ? (
        <p className="text-xs text-red-500 dark:text-red-400 break-all">{error}</p>
      ) : (
        <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
          <div className="break-all">
            <span className="text-gray-600 dark:text-gray-300">数据目录：</span>
            <span className="select-text">{info?.dataDir ?? '读取中…'}</span>
            {info && (
              // 紧跟在路径末尾，与文字同高同色，悬停时才加深
              <button
                type="button"
                onClick={handleOpen}
                title="打开数据目录"
                aria-label="打开数据目录"
                className="ml-1 inline-flex align-[-2px] text-gray-400 transition hover:text-blue-500 dark:text-gray-500 dark:hover:text-blue-400"
              >
                <ExternalLinkIcon className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
          {/* 统计期间占住一行，避免加载完后内容下移、恢复的滚动位置被截短 */}
          {rows.length > 0 ? (
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              {rows.map(([label, value]) => (
                <span key={label}>
                  <span className="text-gray-600 dark:text-gray-300">{label}：</span>
                  {value}
                </span>
              ))}
            </div>
          ) : (
            <div>正在统计占用空间…</div>
          )}
        </div>
      )}
      <button
        onClick={handleChange}
        className="w-full rounded-xl bg-gray-100/80 px-4 py-2.5 text-sm font-medium text-gray-700 transition-all hover:bg-gray-200 hover:text-gray-900 dark:bg-white/[0.06] dark:text-gray-300 dark:hover:bg-white/[0.1] dark:hover:text-white flex items-center justify-center gap-2"
      >
        更改数据目录
      </button>
    </div>
  )
}
