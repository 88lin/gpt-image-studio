import { useEffect, useRef, useState } from 'react'
import { useStore } from '../store'
import { setUpdateModalOpen, useReleaseUpdates } from '../hooks/useReleaseUpdates'
import { useTooltip } from '../hooks/useTooltip'
import { detectOs } from '../lib/announcements'
import { getPageScroller, getPageScrollTop } from '../lib/pageScroll'
import { isTauri } from '../lib/platform'
import { RELEASES_PAGE_URL, shouldShowUpdate } from '../lib/releaseUpdates'
import { dismissAllTooltips } from '../lib/tooltipDismiss'
import ViewportTooltip from './ViewportTooltip'
import HelpModal from './HelpModal'
import HistoryModal from './HistoryModal'
import { useFavoriteCollectionTitle } from './FavoriteCollections'
import { DesktopDownloadIcon, EditIcon, HelpCircleIcon, HistoryIcon, InstallIcon, SettingsIcon } from './icons'

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
}

// 客户端目前只有 Windows 版，只向网页版的 Windows 用户显示下载入口
const SHOW_CLIENT_DOWNLOAD = !isTauri
  && detectOs(navigator.userAgent, (navigator as Navigator & { userAgentData?: { platform?: string } }).userAgentData?.platform, navigator.maxTouchPoints) === 'windows'

function isInstalledPwa() {
  const nav = window.navigator as Navigator & { standalone?: boolean }
  return window.matchMedia('(display-mode: standalone)').matches || nav.standalone === true
}

export default function Header() {
  const appMode = useStore((s) => s.appMode)
  const setAppMode = useStore((s) => s.setAppMode)
  const setShowSettings = useStore((s) => s.setShowSettings)
  const setShowPromptLibrary = useStore((s) => s.setShowPromptLibrary)
  const setConfirmDialog = useStore((s) => s.setConfirmDialog)
  const agentMobileHeaderVisible = useStore((s) => s.agentMobileHeaderVisible)
  const agentConversations = useStore((s) => s.agentConversations)
  const activeAgentConversationId = useStore((s) => s.activeAgentConversationId)
  const filterFavorite = useStore((s) => s.filterFavorite)
  const activeFavoriteCollectionId = useStore((s) => s.activeFavoriteCollectionId)
  const activeConversation = agentConversations.find((item) => item.id === activeAgentConversationId)
  const favoriteCollectionTitle = useFavoriteCollectionTitle()
  const showFavoriteCollectionTitle = appMode === 'gallery' && Boolean(activeFavoriteCollectionId)
  const latestRelease = useReleaseUpdates((s) => s.releases[0])
  const hasUpdate = useReleaseUpdates((s) => shouldShowUpdate(s.releases[0], __APP_VERSION__, s.ignoredVersion))
  const [showHelp, setShowHelp] = useState(false)
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isPwaInstalled, setIsPwaInstalled] = useState(isInstalledPwa)
  const [hintVisible, setHintVisible] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
  const [showHistoryModal, setShowHistoryModal] = useState(false)
  const historyButtonRef = useRef<HTMLButtonElement>(null)
  const createConversation = useStore((s) => s.createAgentConversation)
  const privacyModeEpoch = useStore((s) => s.privacyModeEpoch)
  const [popupEpoch, setPopupEpoch] = useState(privacyModeEpoch)
  // 进入隐私模式时在渲染中直接关闭帮助和历史弹窗；整个顶栏不重新挂载，保留已捕获的 PWA 安装事件
  if (popupEpoch !== privacyModeEpoch) {
    setPopupEpoch(privacyModeEpoch)
    setShowHelp(false)
    setShowHistoryModal(false)
  }

  // 页面滚动条的起点随顶栏实际高度变化（index.css 的 --header-height），窄屏以外 CSS 不使用这个标记
  const headerState = appMode === 'agent' && !agentMobileHeaderVisible
    ? 'hidden'
    : appMode === 'gallery' && scrollDirection === 'down' ? 'compact' : undefined
  useEffect(() => {
    const root = document.documentElement
    if (headerState) root.dataset.header = headerState
    else delete root.dataset.header
  }, [headerState])

  useEffect(() => {
    if (appMode === 'agent') {
      setScrollDirection('up')
      return
    }

    let lastScrollY = getPageScrollTop()
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = getPageScrollTop()
          if (currentScrollY < 20) {
            setScrollDirection('up')
          } else if (currentScrollY > lastScrollY + 10) {
            setScrollDirection('down')
          } else if (currentScrollY < lastScrollY - 10) {
            setScrollDirection('up')
          }
          lastScrollY = currentScrollY
          ticking = false
        })
        ticking = true
      }
    }

    const scroller = getPageScroller()
    scroller.addEventListener('scroll', handleScroll, { passive: true })
    return () => scroller.removeEventListener('scroll', handleScroll)
  }, [appMode])

  useEffect(() => {
    if (appMode === 'agent' && !agentMobileHeaderVisible) {
      setHintVisible(true)
      const timer = setTimeout(() => {
        setHintVisible(false)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [appMode, agentMobileHeaderVisible])

  const installTooltip = useTooltip()
  const clientTooltip = useTooltip()
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
      <header data-no-drag-select className={`safe-area-top pr-[var(--page-scrollbar-width)] fixed top-0 left-0 right-0 z-40 border-b border-gray-950/[0.07] bg-[#f8f9f4]/95 backdrop-blur-md shadow-[0_6px_18px_rgba(24,24,27,0.03)] supports-[backdrop-filter]:bg-[#f8f9f4]/80 dark:border-white/[0.08] dark:bg-[#0d0f0c]/95 dark:supports-[backdrop-filter]:bg-[#0d0f0c]/80 dark:shadow-[0_6px_18px_rgba(0,0,0,0.14)] transition-transform duration-300 ease-in-out ${appMode === 'agent' && !agentMobileHeaderVisible ? '-translate-y-full sm:translate-y-0' : 'translate-y-0'}`}>
        <div className="safe-area-x safe-header-inner max-w-7xl mx-auto flex items-center justify-between relative">
          <div className="flex-1 min-w-0 pr-2 flex items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-gray-950/10 bg-gray-950 text-[11px] font-black text-white shadow-sm dark:border-white/10 dark:bg-white dark:text-gray-950">
              G2
            </div>
            <h1 className="inline-flex min-w-0 items-start relative mr-2">
              {showFavoriteCollectionTitle ? (
                <>
                  <span className="min-w-0 truncate text-[17px] font-bold tracking-tight text-gray-950 dark:text-gray-100 sm:hidden" title={favoriteCollectionTitle}>{favoriteCollectionTitle}</span>
                  <a
                    href={isTauri ? 'https://gpt-image-2.88lin.eu.org/' : '/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden text-lg font-bold tracking-tight text-gray-950 transition-colors hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300 sm:inline"
                  >
                    GPT Image 2
                  </a>
                </>
              ) : (
                <a
                  href={isTauri ? 'https://gpt-image-2.88lin.eu.org/' : '/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[17px] sm:text-lg font-bold tracking-tight text-gray-950 transition-colors hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300"
                >
                  GPT Image 2
                </a>
              )}
              {/* 透明伪元素把点击区域扩大到 32px 以上，外观不变 */}
              {hasUpdate && latestRelease && (
                <button
                  type="button"
                  onClick={() => setUpdateModalOpen(true)}
                  className="relative mt-0.5 rounded border border-red-500/30 bg-red-500 px-1.5 py-0.5 text-[10px] font-bold leading-none text-white transition-colors hover:bg-red-600 animate-fade-in before:absolute before:left-0 before:-right-[9px] before:-inset-y-[9px] before:content-['']"
                  title={`新版本 ${latestRelease.tag}`}
                >
                  NEW
                </button>
              )}
            </h1>
            {appMode === 'agent' && <div className="hidden sm:flex items-center gap-1 relative">
              <button
                ref={historyButtonRef}
                type="button"
                onClick={() => setShowHistoryModal((visible) => !visible)}
                className="p-1.5 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/[0.04] rounded-lg transition-colors"
                title="历史任务"
              >
                <HistoryIcon className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setAppMode('agent')
                  createConversation()
                }}
                className="p-1.5 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/[0.04] rounded-lg transition-colors"
                title="新对话"
              >
                <EditIcon className="w-5 h-5" />
              </button>
              {showHistoryModal && (
                <HistoryModal onClose={() => setShowHistoryModal(false)} ignoreOutsideClickRef={historyButtonRef} />
              )}
            </div>}
          </div>
          {appMode === 'agent' && activeConversation && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden sm:flex max-w-[30%]">
              <button
                type="button"
                onClick={() => {
                  setShowHistoryModal(true)
                  // Use setTimeout to ensure HistoryModal is mounted before setting editing id
                  setTimeout(() => {
                    useStore.getState().setAgentEditingConversationId(activeConversation.id)
                  }, 0)
                }}
                className="text-sm font-semibold text-gray-700 dark:text-gray-300 truncate hover:bg-gray-100 dark:hover:bg-white/[0.04] px-2 py-1 rounded transition-colors"
              >
                {activeConversation.title || 'Agent'}
              </button>
            </div>
          )}
          {showFavoriteCollectionTitle && (
            <div className="absolute left-1/2 top-1/2 hidden max-w-[30%] -translate-x-1/2 -translate-y-1/2 sm:flex">
              <div className="truncate rounded px-2 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300" title={favoriteCollectionTitle}>
                {favoriteCollectionTitle}
              </div>
            </div>
          )}
          <div className="hidden sm:flex items-center gap-1 rounded-xl border border-transparent bg-black/[0.04] dark:bg-white/[0.06] p-1 mr-4">
            <button
              type="button"
              onClick={() => setAppMode('gallery')}
              className={`px-4 py-1.5 rounded-lg text-sm transition-colors ${appMode === 'gallery' ? 'bg-white dark:bg-white/[0.12] text-gray-900 dark:text-white shadow-sm font-medium' : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'}`}
            >
              画廊
            </button>
            <button
              type="button"
              onClick={() => setAppMode('agent')}
              className={`px-4 py-1.5 rounded-lg text-sm transition-colors ${appMode === 'agent' ? 'bg-white dark:bg-white/[0.12] text-gray-900 dark:text-white shadow-sm font-medium' : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'}`}
            >
              Agent
            </button>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            {/* 客户端本身就是安装版，不显示 PWA 安装入口 */}
            {!isTauri && !isPwaInstalled && (
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
                  <InstallIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
                <ViewportTooltip visible={installTooltip.visible} className="whitespace-nowrap">
                  安装为应用
                </ViewportTooltip>
              </div>
            )}
            {/* 窄屏时按钮区空间不足，同样不显示 */}
            {SHOW_CLIENT_DOWNLOAD && (
              <div
                className="relative hidden sm:block"
                {...clientTooltip.handlers}
              >
                <a
                  href={`${RELEASES_PAGE_URL}/latest`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => dismissAllTooltips()}
                  className="block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                  aria-label="下载客户端"
                >
                  <DesktopDownloadIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </a>
                <ViewportTooltip visible={clientTooltip.visible} className="whitespace-nowrap">
                  下载客户端
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
                <HelpCircleIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
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
                <SettingsIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <ViewportTooltip visible={settingsTooltip.visible} className="whitespace-nowrap">
                设置
              </ViewportTooltip>
            </div>
          </div>
        </div>
        {/* 这一行的高度与 index.css 的 --header-row2-height、下方占位块的第二行一致，改动尺寸时需同步 */}
        <div className={`safe-area-x sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${appMode === 'gallery' && scrollDirection === 'down' ? 'max-h-0 opacity-0 pb-0' : 'max-h-20 opacity-100 pb-2'}`}>
          <div className="grid grid-cols-2 gap-1 rounded-xl border border-transparent bg-black/[0.04] dark:bg-white/[0.06] p-1 mx-2">
            <button
              type="button"
              onClick={() => setAppMode('gallery')}
              className={`px-4 py-1.5 rounded-lg text-sm transition-colors ${appMode === 'gallery' ? 'bg-white dark:bg-white/[0.12] text-gray-900 dark:text-white shadow-sm font-medium' : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'}`}
            >
              画廊
            </button>
            <button
              type="button"
              onClick={() => setAppMode('agent')}
              className={`px-4 py-1.5 rounded-lg text-sm transition-colors ${appMode === 'agent' ? 'bg-white dark:bg-white/[0.12] text-gray-900 dark:text-white shadow-sm font-medium' : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'}`}
            >
              Agent
            </button>
          </div>
        </div>
      </header>
      {/* Agent 模式下顶栏上推隐藏时的提示；停在 --safe-area-top 下方，客户端不被标题栏挡住 */}
      <div className={`fixed top-0 left-0 right-0 pr-[var(--page-scrollbar-width)] z-30 flex justify-center pointer-events-none transition-all duration-300 ease-in-out sm:hidden ${appMode === 'agent' && hintVisible && !agentMobileHeaderVisible ? 'translate-y-[var(--safe-area-top)] opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-b-xl shadow-lg">
          下拉展示顶栏
        </div>
      </div>

      <div className={`safe-area-top invisible pointer-events-none transition-all duration-300 ease-in-out ${appMode === 'agent' && !agentMobileHeaderVisible ? 'max-h-0 sm:max-h-[500px] opacity-0 sm:opacity-100 overflow-hidden sm:overflow-visible' : 'max-h-[500px] opacity-100'}`} aria-hidden="true">
        <div className="safe-header-inner" />
        <div className={`safe-area-x sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${appMode === 'gallery' && scrollDirection === 'down' ? 'max-h-0 pb-0' : 'max-h-20 pb-2'}`}>
          <div className="p-1">
            <div className="py-1.5 text-sm">占位</div>
          </div>
        </div>
      </div>
      {showHelp && <HelpModal appMode={appMode} isFavoriteCollectionOverview={appMode === 'gallery' && filterFavorite && !activeFavoriteCollectionId} onClose={() => setShowHelp(false)} />}
    </>
  )
}
