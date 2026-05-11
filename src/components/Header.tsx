import { useEffect, useState } from 'react'
import { useStore } from '../store'
import { useVersionCheck } from '../hooks/useVersionCheck'
import { useTooltip } from '../hooks/useTooltip'
import { dismissAllTooltips } from '../lib/tooltipDismiss'
import ViewportTooltip from './ViewportTooltip'
import HelpModal from './HelpModal'

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
}

function isInstalledPwa() {
  const nav = window.navigator as Navigator & { standalone?: boolean }
  return window.matchMedia('(display-mode: standalone)').matches || nav.standalone === true
}

export default function Header() {
  const setShowSettings = useStore((s) => s.setShowSettings)
  const setShowPromptLibrary = useStore((s) => s.setShowPromptLibrary)
  const setConfirmDialog = useStore((s) => s.setConfirmDialog)
  const { hasUpdate, latestRelease, dismiss } = useVersionCheck()
  const [showHelp, setShowHelp] = useState(false)
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isPwaInstalled, setIsPwaInstalled] = useState(isInstalledPwa)

  const installTooltip = useTooltip()
  const helpTooltip = useTooltip()
  const promptLibraryTooltip = useTooltip()
  const settingsTooltip = useTooltip()
  const iconButtonClass =
    'p-2 rounded-xl border border-transparent hover:border-gray-200/80 dark:hover:border-white/[0.08] hover:bg-white/80 dark:hover:bg-white/[0.06] transition-colors'

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault()
      setInstallPrompt(event as BeforeInstallPromptEvent)
      setIsPwaInstalled(false)
    }

    const handleAppInstalled = () => {
      setInstallPrompt(null)
      setIsPwaInstalled(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  const handleInstallClick = async () => {
    if (installPrompt) {
      const promptEvent = installPrompt
      setInstallPrompt(null)

      try {
        await promptEvent.prompt()
        const choice = await promptEvent.userChoice
        setIsPwaInstalled(choice.outcome === 'accepted')
      } catch {
        setIsPwaInstalled(isInstalledPwa())
      }
    } else {
      const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
      if (isIos) {
        setConfirmDialog({
          title: '安装为应用',
          message: '在 Safari 浏览器中，点击底部「分享」按钮，选择「添加到主屏幕」即可安装此应用。',
          showCancel: false,
          confirmText: '我知道了',
          icon: 'info',
          action: () => {},
        })
      } else {
        setConfirmDialog({
          title: '安装为应用',
          message: '请在浏览器的菜单中选择「添加到主屏幕」或「安装应用」。\n\n（如果在微信等内置浏览器中，请先在外部浏览器打开）',
          showCancel: false,
          confirmText: '我知道了',
          icon: 'info',
          action: () => {},
        })
      }
    }
  }

  return (
    <>
      <header data-no-drag-select className="safe-area-top fixed top-0 left-0 right-0 z-40 border-b border-gray-950/[0.07] bg-[#f8f9f4] shadow-[0_6px_18px_rgba(24,24,27,0.03)] dark:border-white/[0.08] dark:bg-[#0d0f0c] dark:shadow-[0_6px_18px_rgba(0,0,0,0.14)]">
        <div className="safe-area-x safe-header-inner max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-gray-950/10 bg-gray-950 text-[11px] font-black text-white shadow-sm dark:border-white/10 dark:bg-white dark:text-gray-950">
              G2
            </div>
            <div className="flex items-start gap-1.5">
              <h1 className="text-base font-semibold tracking-tight sm:text-lg">
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-950 transition-colors hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300"
                >
                  GPT Image 2
                </a>
              </h1>
              <span className="mt-1 hidden rounded-full border border-emerald-700/15 bg-emerald-700/[0.07] px-2 py-0.5 text-[10px] font-medium text-emerald-900 dark:border-emerald-300/15 dark:bg-emerald-300/[0.08] dark:text-emerald-100 sm:inline">
                Workspace
              </span>
              {hasUpdate && latestRelease && (
                <a
                  href={latestRelease.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={dismiss}
                  className="mt-0.5 rounded border border-red-500/30 bg-red-500 px-1.5 py-0.5 text-[10px] font-bold leading-none text-white transition-colors hover:bg-red-600 animate-fade-in"
                  title={`新版本 ${latestRelease.tag}`}
                >
                  NEW
                </a>
              )}
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            {!isPwaInstalled && (
              <div
                className="relative"
                {...installTooltip.handlers}
              >
                <button
                  onClick={() => {
                    dismissAllTooltips()
                    handleInstallClick()
                  }}
                  className={iconButtonClass}
                  aria-label="安装为应用"
                >
                  <svg
                    className="w-5 h-5 text-gray-600 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </button>
                <ViewportTooltip visible={installTooltip.visible} className="whitespace-nowrap">
                  安装为应用
                </ViewportTooltip>
              </div>
            )}
            <div
              className="relative"
              {...helpTooltip.handlers}
            >
              <button
                onClick={() => {
                  dismissAllTooltips()
                  setShowHelp(true)
                }}
                className={iconButtonClass}
                aria-label="操作指南"
              >
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
              </button>
              <ViewportTooltip visible={helpTooltip.visible} className="whitespace-nowrap">
                操作指南
              </ViewportTooltip>
            </div>
            <div
              className="relative"
              {...promptLibraryTooltip.handlers}
            >
              <button
                onClick={() => {
                  dismissAllTooltips()
                  setShowPromptLibrary(true)
                }}
                className="flex items-center gap-2 rounded-xl border border-emerald-700/15 bg-emerald-700/[0.07] px-2.5 py-2 text-emerald-900 transition-colors hover:bg-emerald-700/[0.11] dark:border-emerald-300/15 dark:bg-emerald-300/[0.08] dark:text-emerald-100 dark:hover:bg-emerald-300/[0.12]"
                aria-label="提示词模板库"
              >
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z" />
                  <path d="M8 7h8" />
                  <path d="M8 11h6" />
                </svg>
                <span className="hidden text-xs font-medium sm:inline">模板库</span>
              </button>
              <ViewportTooltip visible={promptLibraryTooltip.visible} className="whitespace-nowrap">
                提示词模板库
              </ViewportTooltip>
            </div>
            <div
              className="relative"
              {...settingsTooltip.handlers}
            >
              <button
                onClick={() => setShowSettings(true)}
                className={iconButtonClass}
                aria-label="设置"
              >
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
              <ViewportTooltip visible={settingsTooltip.visible} className="whitespace-nowrap">
                设置
              </ViewportTooltip>
            </div>
          </div>
        </div>
      </header>
      <div className="safe-area-top invisible pointer-events-none" aria-hidden="true">
        <div className="safe-header-inner" />
      </div>
      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
    </>
  )
}
