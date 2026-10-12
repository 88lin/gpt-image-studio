import { useEffect, useState } from 'react'
import type { Announcement, AnnouncementContext } from '../lib/announcements'
import { detectOs, filterAnnouncements, parseAnnouncements, parseDismissedAnnouncements } from '../lib/announcements'
import { readLocal, writeLocal } from '../lib/localRecord'
import { isTauri } from '../lib/platform'
import { countSuccessfulOutputImages, isAgentTask, useStore } from '../store'

const DISMISSED_KEY = 'dismissed-announcements'

// 公告列表和媒体都随应用打包（public/），从应用自身的地址读取（base 为 ./，与页面同目录）
const APP_BASE = new URL(import.meta.env.BASE_URL, window.location.href).href

function getContext(): AnnouncementContext {
  const nav = navigator as Navigator & { userAgentData?: { platform?: string }; standalone?: boolean }
  const tasks = useStore.getState().tasks
  return {
    platform: isTauri ? 'client' : 'web',
    os: detectOs(nav.userAgent, nav.userAgentData?.platform, nav.maxTouchPoints),
    language: nav.language,
    version: __APP_VERSION__,
    // 直接用已加载到内存的任务列表计算，排除 Agent 中的重复记录
    imageCount: countSuccessfulOutputImages(tasks),
    taskCount: tasks.filter((task) => !isAgentTask(task)).length,
    standalone: !isTauri && (window.matchMedia('(display-mode: standalone)').matches || nav.standalone === true),
    now: new Date().toISOString(),
  }
}

let loaded = false

/** 任务加载完成（ready）后读取一次公告，返回待显示的未读公告和标记已读的方法；读取失败时静默 */
export function useAnnouncements(ready: boolean) {
  const [list, setList] = useState<Announcement[]>([])
  const [dismissed, setDismissed] = useState(() => parseDismissedAnnouncements(readLocal(DISMISSED_KEY)))

  useEffect(() => {
    // 开发模式下 StrictMode 会执行两次 effect，用模块级标记保证只请求一次
    if (!ready || loaded) return
    loaded = true
    void (async () => {
      try {
        // 网页版重新部署后可能被 HTTP 缓存挡住，绕过缓存
        const res = await fetch(`${APP_BASE}announcements.json`, { cache: 'no-store' })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        // 条件只在启动时求值一次，之后生成图片等变化不会让公告突然出现或消失
        setList(filterAnnouncements(parseAnnouncements(await res.json(), APP_BASE), getContext(), dismissed))
      } catch (err) {
        console.warn('读取公告失败：', err)
      }
    })()
  }, [ready])

  const pending = list.filter((item) => !dismissed.includes(item.id))
  const dismiss = (ids: string[]) => {
    const next = [...dismissed, ...ids]
    writeLocal(DISMISSED_KEY, JSON.stringify(next))
    setDismissed(next)
  }
  return { pending, dismiss }
}
