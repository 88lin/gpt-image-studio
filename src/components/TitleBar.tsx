import { useEffect, useState } from 'react'
import { getCurrentWindow } from '@tauri-apps/api/window'
import { TITLEBAR_HEIGHT } from '../lib/platform'

const BUTTON = 'flex h-full w-[46px] items-center justify-center text-gray-500 transition-colors dark:text-gray-400'

/**
 * 客户端的标题栏：窗口不用系统边框（tauri.conf.json 的 `decorations: false`），这里只有拖动区和右上角的三个按钮，
 * 透明地叠在页面顶部；页面经 `--safe-area-top` 让出它的高度（main.tsx 按 `TITLEBAR_HEIGHT` 设置），顶栏的背景随之延伸到标题栏下。
 * 拖动区双击切换最大化由 Tauri 处理；关闭按钮发出普通的关闭请求，同样经过关闭前的确认与保存
 */
export default function TitleBar() {
  const [maximized, setMaximized] = useState(false)

  useEffect(() => {
    const win = getCurrentWindow()
    const sync = () => win.isMaximized().then(setMaximized).catch((err) => console.warn('无法读取窗口状态：', err))
    void sync()
    // 拖动调整大小时每帧最多查一次
    let frame = 0
    const unlisten = win.onResized(() => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => void sync())
    })
    return () => {
      cancelAnimationFrame(frame)
      void unlisten.then((fn) => fn())
    }
  }, [])

  const run = (action: string, fn: () => Promise<void>) => fn().catch((err) => console.error(`${action}失败：`, err))

  return (
    <div data-no-drag-select className="fixed inset-x-0 top-0 z-[130] flex select-none" style={{ height: TITLEBAR_HEIGHT }}>
      <div data-tauri-drag-region className="flex-1" />
      <button type="button" aria-label="最小化" className={`${BUTTON} hover:bg-black/[0.06] dark:hover:bg-white/[0.08]`} onClick={() => run('最小化窗口', () => getCurrentWindow().minimize())}>
        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M0 5h10" stroke="currentColor" /></svg>
      </button>
      <button type="button" aria-label={maximized ? '向下还原' : '最大化'} className={`${BUTTON} hover:bg-black/[0.06] dark:hover:bg-white/[0.08]`} onClick={() => run('切换最大化', () => getCurrentWindow().toggleMaximize())}>
        {maximized
          ? <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" aria-hidden="true"><path d="M2.5 2.5V.5h7v7h-2M.5 2.5h7v7h-7z" /></svg>
          : <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" aria-hidden="true"><path d="M.5.5h9v9h-9z" /></svg>}
      </button>
      <button type="button" aria-label="关闭" className={`${BUTTON} hover:bg-[#c42b1c] hover:text-white dark:hover:text-white`} onClick={() => run('关闭窗口', () => getCurrentWindow().close())}>
        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M0 0l10 10M10 0L0 10" stroke="currentColor" /></svg>
      </button>
    </div>
  )
}
