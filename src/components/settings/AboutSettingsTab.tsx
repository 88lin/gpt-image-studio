import { useState, type ReactNode } from 'react'
import { checkForUpdates, setUpdateModalOpen, useReleaseUpdates } from '../../hooks/useReleaseUpdates'
import { compareVersions, LICENSE_URL, MANUAL_CHECK_MIN_INTERVAL_MS } from '../../lib/releaseUpdates'
import { useStore } from '../../store'
import { ChevronRightIcon, ExternalLinkIcon, GithubIcon, HistoryIcon, RefreshIcon } from '../icons'

interface AboutRowProps {
  icon: ReactNode
  title: string
  subtitle?: string
  right?: ReactNode
  href?: string
  onClick?: () => void
  disabled?: boolean
  highlight?: boolean
}

/** 列表中的一行：有 href 时为外链，否则为按钮 */
function AboutRow({ icon, title, subtitle, right, href, onClick, disabled, highlight }: AboutRowProps) {
  const className = `flex min-h-[56px] w-full items-center gap-3 px-4 py-2.5 text-left outline-none transition-colors disabled:cursor-default ${highlight ? 'bg-blue-500/[0.08] hover:bg-blue-500/[0.12] focus-visible:bg-blue-500/[0.12] dark:bg-blue-500/[0.12] dark:hover:bg-blue-500/[0.16] dark:focus-visible:bg-blue-500/[0.16]' : 'hover:bg-black/[0.03] focus-visible:bg-black/[0.03] dark:hover:bg-white/[0.04] dark:focus-visible:bg-white/[0.04]'}`
  const content = (
    <>
      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${highlight ? 'bg-blue-500 text-white' : 'bg-white text-gray-600 shadow-sm dark:bg-white/[0.08] dark:text-gray-300 dark:shadow-none'}`}>
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className={`block text-sm ${highlight ? 'font-medium text-blue-600 dark:text-blue-400' : 'text-gray-800 dark:text-gray-100'}`}>{title}</span>
        {subtitle && <span className="mt-0.5 block text-xs text-gray-500 dark:text-gray-400">{subtitle}</span>}
      </span>
      {right}
    </>
  )
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    )
  }
  return (
    <button type="button" onClick={onClick} disabled={disabled} className={className}>
      {content}
    </button>
  )
}

/** 设置页样式的卡片：标题行下是以细线分隔的若干行 */
function AboutCard({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-transparent bg-black/[0.04] dark:bg-white/[0.06]">
      <div className="flex items-center gap-2 px-4 pb-1 pt-4 text-gray-700 dark:text-gray-300">
        {icon}
        <h4 className="text-sm font-bold text-gray-800 dark:text-gray-100">{title}</h4>
      </div>
      <div className="divide-y divide-black/[0.05] dark:divide-white/[0.06]">{children}</div>
    </div>
  )
}

const CHEVRON = <ChevronRightIcon className="h-4 w-4 shrink-0 text-gray-400 dark:text-gray-500" />
const EXTERNAL = <ExternalLinkIcon className="h-4 w-4 shrink-0 text-gray-400 dark:text-gray-500" />

export default function AboutSettingsTab({ onOpenFontLicenses }: { onOpenFontLicenses: () => void }) {
  const showToast = useStore((s) => s.showToast)
  const latest = useReleaseUpdates((s) => s.releases[0])
  const checkError = useReleaseUpdates((s) => s.checkError)
  const [checking, setChecking] = useState(false)

  const handleCheck = async () => {
    setChecking(true)
    try {
      // 手动检查只复用一分钟内的缓存；有新版本时直接打开更新弹窗（即使该版本已被忽略）
      const next = await checkForUpdates(MANUAL_CHECK_MIN_INTERVAL_MS)
      if (next && compareVersions(next.version, __APP_VERSION__) > 0) setUpdateModalOpen(true)
      else showToast('已是最新版本', 'success')
    } catch (err) {
      showToast(`检查更新失败：${err instanceof Error ? err.message : String(err)}`, 'error')
    } finally {
      setChecking(false)
    }
  }

  const hasUpdate = Boolean(latest && compareVersions(latest.version, __APP_VERSION__) > 0)
  const checkStatus = checking ? (
    <span className="shrink-0 text-xs text-gray-500 dark:text-gray-400">正在检查…</span>
  ) : checkError ? (
    <span className="shrink-0 text-xs text-red-500 dark:text-red-400">检查失败</span>
  ) : latest ? (
    <span className="shrink-0 text-xs text-gray-500 dark:text-gray-400">已是最新版本</span>
  ) : null

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 rounded-2xl border border-transparent bg-black/[0.04] p-4 dark:bg-white/[0.06]">
        <div className="min-w-0 flex-1">
          <h4 className="text-base font-bold text-gray-800 dark:text-gray-100">
            <a
              href="https://github.com/88lin/gpt-image-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded outline-none underline-offset-2 hover:underline focus-visible:underline focus-visible:ring-2 focus-visible:ring-blue-500/40"
            >
              GPT Image Studio
            </a>
          </h4>
          <p className="mt-0.5 text-[13px] text-gray-500 dark:text-gray-400">
            基于{' '}
            <a
              href="https://github.com/CookSleep/gpt_image_playground"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded outline-none underline-offset-2 transition-colors hover:text-gray-700 hover:underline focus-visible:text-gray-700 focus-visible:underline focus-visible:ring-2 focus-visible:ring-blue-500/40 dark:hover:text-gray-200 dark:focus-visible:text-gray-200"
            >
              GPT Image Playground · @CookSleep
            </a>{' '}
            二次开发（MIT）
          </p>
          <p data-selectable-text className="mt-3 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
            基于 OpenAI gpt-image-2.5 API 的图片生成、编辑与提示词工作台，已内置提示词模板。
          </p>
        </div>
        <a
          href="https://github.com/88lin/gpt-image-studio"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub 仓库"
          title="GitHub 仓库"
          className="shrink-0 rounded-lg p-1 text-gray-400 outline-none transition-colors hover:text-gray-700 focus-visible:text-gray-700 focus-visible:ring-2 focus-visible:ring-blue-500/40 dark:text-gray-500 dark:hover:text-gray-200 dark:focus-visible:text-gray-200"
        >
          <GithubIcon className="h-6 w-6" />
        </a>
      </div>

      <AboutCard icon={<RefreshIcon className="h-4 w-4" />} title="版本与更新">
        {hasUpdate && !checking ? (
          <AboutRow
            highlight
            icon={<RefreshIcon className="h-4 w-4" />}
            title="发现新版本"
            subtitle={`当前版本 v${__APP_VERSION__}`}
            onClick={() => setUpdateModalOpen(true)}
            right={(
              <span className="flex shrink-0 items-center gap-1">
                <span className="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-medium text-white">{latest?.tag}</span>
                <ChevronRightIcon className="h-4 w-4 text-blue-500 dark:text-blue-400" />
              </span>
            )}
          />
        ) : (
          <AboutRow
            icon={<RefreshIcon className={`h-4 w-4 ${checking ? 'animate-spin' : ''}`} />}
            title="检查更新"
            subtitle={checkError && !checking ? checkError : `当前版本 v${__APP_VERSION__}`}
            onClick={() => void handleCheck()}
            disabled={checking}
            right={checkStatus}
          />
        )}
        <AboutRow
          icon={<HistoryIcon className="h-4 w-4" />}
          title="更新日志"
          onClick={() => setUpdateModalOpen(true)}
          right={CHEVRON}
        />
      </AboutCard>

      <AboutCard
        icon={(
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        )}
        title="支持与反馈"
      >
        <AboutRow
          icon={(
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          )}
          title="反馈问题"
          href="https://github.com/88lin/gpt-image-studio/issues"
          right={EXTERNAL}
        />
        <AboutRow
          icon={<ExternalLinkIcon className="h-4 w-4" />}
          title="交流群"
          href="https://qm.qq.com/q/ln5SLYxBjW"
          right={EXTERNAL}
        />
        <AboutRow
          icon={(
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          )}
          title="赞助作者"
          href="https://blog.88lin.eu.org/coffee"
          right={EXTERNAL}
        />
      </AboutCard>

      <div className="divide-y divide-black/[0.05] overflow-hidden rounded-2xl border border-transparent bg-black/[0.04] dark:divide-white/[0.06] dark:bg-white/[0.06]">
        <AboutRow
          icon={(
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
          )}
          title="开源协议"
          subtitle="本软件以 MIT 协议开源"
          href={LICENSE_URL}
          right={EXTERNAL}
        />
        <AboutRow
          icon={(
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          )}
          title="第三方许可"
          subtitle="本软件使用的字体与依赖库的许可"
          onClick={onOpenFontLicenses}
          right={CHEVRON}
        />
      </div>
    </div>
  )
}
