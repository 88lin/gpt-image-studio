import { useEffect, useState, useMemo, useRef } from 'react'
import { useStore, getCachedImage, ensureImageCached, reuseConfig, editOutputs, removeTask, updateTaskInStore, showCodexCliPrompt, getCodexCliPromptKey, retryTask } from '../store'
import { useCloseOnEscape } from '../hooks/useCloseOnEscape'
import { usePreventBackgroundScroll } from '../hooks/usePreventBackgroundScroll'
import { useTooltip } from '../hooks/useTooltip'
import { formatImageRatio } from '../lib/size'
import { ActualValueBadge, DetailParamValue } from '../lib/paramDisplay'
import { copyBlobToClipboard, copyTextToClipboard, getClipboardFailureMessage } from '../lib/clipboard'
import { createMaskPreviewDataUrl } from '../lib/canvasImage'
import { dismissAllTooltips } from '../lib/tooltipDismiss'
import { CloseIcon, CodeIcon, CopyIcon, EditIcon, LinkIcon, TrashIcon } from './icons'

import ViewportTooltip from './ViewportTooltip'

export default function DetailModal() {
  const tasks = useStore((s) => s.tasks)
  const detailTaskId = useStore((s) => s.detailTaskId)
  const setDetailTaskId = useStore((s) => s.setDetailTaskId)
  const setLightboxImageId = useStore((s) => s.setLightboxImageId)
  const setMaskEditorImageId = useStore((s) => s.setMaskEditorImageId)
  const setConfirmDialog = useStore((s) => s.setConfirmDialog)
  const showToast = useStore((s) => s.showToast)
  const settings = useStore((s) => s.settings)
  const dismissedCodexCliPrompts = useStore((s) => s.dismissedCodexCliPrompts)

  const [imageIndex, setImageIndex] = useState(0)
  const [imageSrcs, setImageSrcs] = useState<Record<string, string>>({})
  const [outputPreviewSrcs, setOutputPreviewSrcs] = useState<Record<string, string>>({})
  const [imageRatios, setImageRatios] = useState<Record<string, string>>({})
  const [imageSizes, setImageSizes] = useState<Record<string, string>>({})
  const [maskPreviewSrc, setMaskPreviewSrc] = useState('')
  const [now, setNow] = useState(Date.now())
  const [showRawUrlsModal, setShowRawUrlsModal] = useState(false)
  const [showRawResponseModal, setShowRawResponseModal] = useState(false)
  const imagePanelRef = useRef<HTMLDivElement>(null)
  const mainImageRef = useRef<HTMLImageElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const rawUrlsModalRef = useRef<HTMLDivElement>(null)
  const rawResponseModalRef = useRef<HTMLDivElement>(null)
  const [imageLabelLeft, setImageLabelLeft] = useState(8)

  const rawUrlsBackdropPointerDownRef = useRef(false)
  const rawResponseBackdropPointerDownRef = useRef(false)

  const copyErrorTooltip = useTooltip()
  const copyRawUrlsTooltip = useTooltip()
  const viewRawResponseTooltip = useTooltip()
  const retryTooltip = useTooltip()

  const clearTextSelection = () => {
    const selection = window.getSelection()
    if (selection && !selection.isCollapsed) selection.removeAllRanges()
  }

  const task = useMemo(
    () => tasks.find((t) => t.id === detailTaskId) ?? null,
    [tasks, detailTaskId],
  )

  useCloseOnEscape(Boolean(task), () => setDetailTaskId(null))
  usePreventBackgroundScroll(Boolean(task), [modalRef, rawUrlsModalRef, rawResponseModalRef])

  // Reset index when task changes
  useEffect(() => {
    setImageIndex(0)
  }, [detailTaskId])

  useEffect(() => {
    if (task?.status !== 'running' && !(task?.status === 'error' && (task.falRecoverable || task.customRecoverable))) return
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    setNow(Date.now())
    return () => window.clearInterval(id)
  }, [task?.customRecoverable, task?.falRecoverable, task?.status])

  // 加载所有相关图片
  useEffect(() => {
    if (!task) {
      setImageSrcs({})
      setOutputPreviewSrcs({})
      setImageRatios({})
      setImageSizes({})
      return
    }

    let cancelled = false
    const ids = [...new Set([
      ...(task.inputImageIds || []),
      ...(task.maskImageId ? [task.maskImageId] : []),
    ])]
    const initial: Record<string, string> = {}
    for (const id of ids) {
      const cached = getCachedImage(id)
      if (cached) initial[id] = cached
    }
    setImageSrcs(initial)
    for (const id of ids) {
      if (initial[id]) continue
      ensureImageCached(id).then((url) => {
        if (!cancelled && url) setImageSrcs((prev) => ({ ...prev, [id]: url }))
      })
    }

    return () => {
      cancelled = true
    }
  }, [task])

  const currentOutputImageId = task?.outputImages?.[imageIndex] || ''
  const currentOutputPreviewSrc = currentOutputImageId ? outputPreviewSrcs[currentOutputImageId] || '' : ''
  const maskTargetId = task?.maskTargetImageId || null
  const maskTargetSrc = maskTargetId ? imageSrcs[maskTargetId] || '' : ''
  const maskSrc = task?.maskImageId ? imageSrcs[task.maskImageId] || '' : ''
  const allInputImageIds = task?.inputImageIds ?? []

  useEffect(() => {
    if (!currentOutputImageId) {
      setOutputPreviewSrcs({})
      return
    }

    let cancelled = false
    const setOutputImage = (dataUrl: string) => {
      if (!cancelled) setOutputPreviewSrcs({ [currentOutputImageId]: dataUrl })
    }

    const cached = getCachedImage(currentOutputImageId)
    if (cached) {
      setOutputImage(cached)
    } else {
      ensureImageCached(currentOutputImageId)
        .then((dataUrl) => {
          if (dataUrl) setOutputImage(dataUrl)
        })
        .catch(() => {
          if (!cancelled) setOutputPreviewSrcs({})
        })
    }

    return () => {
      cancelled = true
    }
  }, [currentOutputImageId])

  useEffect(() => {
    const updateImageLabelLeft = () => {
      const panel = imagePanelRef.current
      const image = mainImageRef.current
      if (!panel || !image) return

      const panelRect = panel.getBoundingClientRect()
      const imageRect = image.getBoundingClientRect()
      setImageLabelLeft(Math.max(8, imageRect.left - panelRect.left))
    }

    updateImageLabelLeft()
    window.addEventListener('resize', updateImageLabelLeft)
    return () => window.removeEventListener('resize', updateImageLabelLeft)
  }, [currentOutputPreviewSrc])

  useEffect(() => {
    let cancelled = false
    setMaskPreviewSrc('')
    if (!maskTargetSrc || !maskSrc) return

    createMaskPreviewDataUrl(maskTargetSrc, maskSrc)
      .then((url) => {
        if (!cancelled) setMaskPreviewSrc(url)
      })
      .catch(() => {
        if (!cancelled) setMaskPreviewSrc('')
      })

    return () => {
      cancelled = true
    }
  }, [maskTargetSrc, maskSrc])

  if (!task) return null

  const outputLen = task.outputImages?.length || 0
  const currentImageRatio = currentOutputImageId ? imageRatios[currentOutputImageId] : ''
  const currentImageSize = currentOutputImageId ? imageSizes[currentOutputImageId] : ''
  const currentActualParams = currentOutputImageId ? task.actualParamsByImage?.[currentOutputImageId] : undefined
  const currentRevisedPrompt = currentOutputImageId ? task.revisedPromptByImage?.[currentOutputImageId]?.trim() : ''
  const showRevisedPrompt = Boolean(currentRevisedPrompt && currentRevisedPrompt !== task.prompt.trim())
  const codexCliPromptKey = getCodexCliPromptKey(settings)
  const hasHandledPromptWarning = settings.codexCli || dismissedCodexCliPrompts.includes(codexCliPromptKey)
  const taskProvider = task.apiProvider
  const isOpenAiTask = (taskProvider ?? 'openai') === 'openai'
  const showPromptWarning = Boolean(isOpenAiTask && currentOutputImageId && (!currentRevisedPrompt || showRevisedPrompt) && !hasHandledPromptWarning)
  const taskProviderName = taskProvider === 'fal' ? 'fal.ai' : taskProvider ? 'OpenAI' : '未知'
  const taskProfileName = task.apiProfileName || '未知'
  const taskModel = task.apiModel || '未知'
  const showSourceInfo = Boolean(task.apiProvider || task.apiProfileName || task.apiModel)
  const isFalReconnecting = task.status === 'error' && task.falRecoverable
  const isCustomReconnecting = task.status === 'error' && task.customRecoverable
  const rawImageUrls = task.rawImageUrls ?? []

  const formatTime = (ts: number | null) => {
    if (!ts) return ''
    return new Date(ts).toLocaleString('zh-CN')
  }

  const formatDuration = () => {
    if (task.status === 'running' || isFalReconnecting || isCustomReconnecting) {
      const seconds = Math.max(0, Math.floor((now - task.createdAt) / 1000))
      const mm = String(Math.floor(seconds / 60)).padStart(2, '0')
      const ss = String(seconds % 60).padStart(2, '0')
      return `${mm}:${ss}`
    }
    if (task.elapsed == null) return null
    const seconds = Math.floor(task.elapsed / 1000)
    const mm = String(Math.floor(seconds / 60)).padStart(2, '0')
    const ss = String(seconds % 60).padStart(2, '0')
    return `${mm}:${ss}`
  }

  const handleReuse = () => {
    reuseConfig(task)
    setDetailTaskId(null)
  }

  const handleEdit = () => {
    editOutputs(task)
    setDetailTaskId(null)
  }

  const handleMaskEditCurrentOutput = () => {
    const imgId = task.outputImages?.[imageIndex]
    if (!imgId) return
    setMaskEditorImageId(imgId)
    setDetailTaskId(null)
  }

  const handleDelete = () => {
    setDetailTaskId(null)
    setConfirmDialog({
      title: '删除记录',
      message: '确定要删除这条记录吗？关联的图片资源也会被清理（如果没有其他任务引用）。',
      action: () => removeTask(task),
    })
  }

  const handleToggleFavorite = () => {
    updateTaskInStore(task.id, { isFavorite: !task.isFavorite })
  }

  const handleCopyError = async () => {
    const errorText = task.error || '生成失败'
    try {
      await copyTextToClipboard(errorText)
      showToast('完整报错已复制', 'success')
    } catch (err) {
      showToast(getClipboardFailureMessage('复制报错失败', err), 'error')
    }
  }

  const handleCopyPrompt = async () => {
    if (!task.prompt) return
    try {
      await copyTextToClipboard(task.prompt)
      showToast('提示词已复制', 'success')
    } catch (err) {
      showToast(getClipboardFailureMessage('复制提示词失败', err), 'error')
    }
  }

  const handleShowPromptWarning = () => {
    showCodexCliPrompt(
      true,
      currentRevisedPrompt ? '接口返回的提示词已被改写' : '接口没有返回官方 API 会返回的部分信息',
    )
  }

  const handleCopyInputImage = async () => {
    const imgId = allInputImageIds[0]
    const src = imgId ? imageSrcs[imgId] : ''
    if (!src) return
    try {
      const res = await fetch(src)
      const blob = await res.blob()
      await copyBlobToClipboard(blob)
      showToast('参考图已复制', 'success')
    } catch (err) {
      console.error(err)
      showToast(getClipboardFailureMessage('复制参考图失败', err), 'error')
    }
  }

  const handleRetry = () => {
    retryTask(task)
    setDetailTaskId(null)
  }

  return (
    <div
      data-no-drag-select
      className="fixed inset-0 z-50 flex items-center justify-center px-2 pb-[calc(var(--safe-area-bottom)+0.5rem)] pt-[calc(var(--safe-area-top)+0.5rem)] md:p-4"
      onClick={() => setDetailTaskId(null)}
    >
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-md animate-overlay-in" />
      <div
        ref={modalRef}
        className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-white/50 dark:border-white/[0.08] rounded-3xl shadow-[0_8px_40px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_40px_rgb(0,0,0,0.4)] max-w-4xl w-full max-h-full overflow-hidden flex flex-col md:flex-row z-10 ring-1 ring-black/5 dark:ring-white/10 animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-12 items-center justify-end px-4 md:hidden">
          <button
            onClick={() => setDetailTaskId(null)}
            className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-white/[0.06] transition text-gray-400"
            aria-label="关闭"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        {/* 左侧：图片 */}
        <div ref={imagePanelRef} className="md:w-1/2 w-full h-64 md:h-auto bg-gray-100 dark:bg-black/20 relative flex items-center justify-center flex-shrink-0 min-h-[16rem]">
          {task.status === 'done' && outputLen > 0 && currentOutputPreviewSrc && (
            <>
              <img
                ref={mainImageRef}
                src={currentOutputPreviewSrc}
                data-image-id={currentOutputImageId}
                className="saveable-image max-w-[calc(100%-2rem)] max-h-[calc(100%-2rem)] object-contain cursor-pointer"
                onLoad={() => {
                  const panel = imagePanelRef.current
                  const image = mainImageRef.current
                  if (!panel || !image) return

                  if (currentOutputImageId && image.naturalWidth > 0 && image.naturalHeight > 0) {
                    setImageRatios((prev) => ({
                      ...prev,
                      [currentOutputImageId]: formatImageRatio(image.naturalWidth, image.naturalHeight),
                    }))
                    setImageSizes((prev) => ({
                      ...prev,
                      [currentOutputImageId]: `${image.naturalWidth}×${image.naturalHeight}`,
                    }))
                  }

                  const panelRect = panel.getBoundingClientRect()
                  const imageRect = image.getBoundingClientRect()
                  setImageLabelLeft(Math.max(8, imageRect.left - panelRect.left))
                }}
                onClick={() =>
                  setLightboxImageId(task.outputImages[imageIndex], task.outputImages)
                }
                alt=""
              />
              <div data-selectable-text className="absolute top-[15px] flex items-center gap-1.5" style={{ left: imageLabelLeft }}>
                {currentImageRatio && currentImageSize ? (
                  <>
                    <span className="bg-black/50 text-white text-xs px-2 py-0.5 rounded backdrop-blur-sm font-mono">
                      {currentImageRatio}
                    </span>
                    <span className="bg-black/50 text-white/90 text-xs px-2 py-0.5 rounded backdrop-blur-sm font-medium">
                      {currentImageSize}
                    </span>
                  </>
                ) : (
                  formatDuration() && (
                    <span className="flex items-center gap-1 bg-black/50 text-white text-xs px-2 py-0.5 rounded backdrop-blur-sm font-mono">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {formatDuration()}
                    </span>
                  )
                )}
              </div>
              {outputLen > 1 && (
                <>
                  <button
                    onClick={() =>
                      setImageIndex(
                        (imageIndex - 1 + outputLen) % outputLen,
                      )
                    }
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/30 text-white hover:bg-black/50 transition"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() =>
                      setImageIndex((imageIndex + 1) % outputLen)
                    }
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/30 text-white hover:bg-black/50 transition"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full">
                    {imageIndex + 1} / {outputLen}
                  </span>
                </>
              )}
            </>
          )}
          {(task.status === 'running' || isFalReconnecting) && (
            <>
              <div className="absolute left-4 top-4 flex items-center gap-1 bg-black/50 text-white text-xs px-2 py-0.5 rounded backdrop-blur-sm font-mono">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {formatDuration()}
              </div>
              {task.status === 'running' && (
                <svg className="w-10 h-10 text-blue-400 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              )}
            </>
          )}
          {task.status === 'error' && isFalReconnecting && (
            <div className="w-full max-w-md px-4 text-center">
              <svg className="w-10 h-10 text-yellow-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <p className="text-sm font-medium text-yellow-500">重连中</p>
            </div>
          )}
          {task.status === 'error' && !isFalReconnecting && (
            <div className="w-full max-w-md px-4 text-center">
              <svg className="w-10 h-10 text-red-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p
                className="overflow-hidden whitespace-pre-line text-sm leading-6 text-red-500 break-words"
                style={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 4,
                }}
              >
                {task.error || '生成失败'}
              </p>
              <div className="mt-3 flex items-center justify-center gap-2">
                <div className="relative group">
                  <button
                    type="button"
                    {...copyErrorTooltip.handlers}
                    onClick={(e) => {
                      copyErrorTooltip.handlers.onClick()
                      handleCopyError()
                    }}
                    className="inline-flex items-center justify-center rounded-full border border-red-200/80 bg-white/80 px-3 py-1.5 text-red-500 transition hover:bg-red-50 dark:border-red-400/20 dark:bg-white/[0.04] dark:hover:bg-red-500/10"
                    aria-label="复制完整报错"
                  >
                    <CopyIcon className="h-4 w-4" />
                  </button>
                  <ViewportTooltip visible={copyErrorTooltip.visible} className="whitespace-nowrap">
                    复制完整报错
                  </ViewportTooltip>
                </div>
                {task.rawResponsePayload && (
                  <div className="relative group">
                    <button
                      type="button"
                      {...viewRawResponseTooltip.handlers}
                      onClick={(e) => {
                        dismissAllTooltips()
                        setShowRawResponseModal(true)
                      }}
                      className="inline-flex items-center justify-center rounded-full border border-purple-200/80 bg-purple-50 px-3 py-1.5 text-purple-600 transition hover:bg-purple-100 dark:border-purple-500/20 dark:bg-purple-500/10 dark:text-purple-400 dark:hover:bg-purple-500/20"
                      aria-label="查看原始响应"
                    >
                      <CodeIcon className="h-4 w-4" />
                    </button>
                    <ViewportTooltip visible={viewRawResponseTooltip.visible} className="whitespace-nowrap">
                      查看原始响应
                    </ViewportTooltip>
                  </div>
                )}
                {task.rawImageUrls && task.rawImageUrls.length > 0 && (
                  <div className="relative group">
                    <button
                      type="button"
                      {...copyRawUrlsTooltip.handlers}
                      onClick={async (e) => {
                        if (task.rawImageUrls!.length === 1) {
                          copyRawUrlsTooltip.handlers.onClick()
                          try {
                            await copyTextToClipboard(task.rawImageUrls![0])
                            showToast('图片链接已复制', 'success')
                          } catch (err) {
                            showToast(getClipboardFailureMessage('复制链接失败', err), 'error')
                          }
                        } else {
                          dismissAllTooltips()
                          setShowRawUrlsModal(true)
                        }
                      }}
                      className="inline-flex items-center justify-center rounded-full border border-green-200/80 bg-green-50 px-3 py-1.5 text-green-600 transition hover:bg-green-100 dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-400 dark:hover:bg-green-500/20"
                      aria-label="复制图片链接"
                    >
                      <LinkIcon className="h-4 w-4" />
                    </button>
                    <ViewportTooltip visible={copyRawUrlsTooltip.visible} className="whitespace-nowrap">
                      复制图片链接
                    </ViewportTooltip>
                  </div>
                )}
                <div className="relative group">
                  <button
                    type="button"
                    {...retryTooltip.handlers}
                    onClick={(e) => {
                      retryTooltip.handlers.onClick()
                      handleRetry()
                    }}
                    className="inline-flex items-center justify-center rounded-full border border-blue-200/80 bg-white/80 px-3 py-1.5 text-blue-500 transition hover:bg-blue-50 dark:border-blue-400/20 dark:bg-white/[0.04] dark:hover:bg-blue-500/10"
                    aria-label="重试任务"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                  <ViewportTooltip visible={retryTooltip.visible} className="whitespace-nowrap">
                    重试任务
                  </ViewportTooltip>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 右侧：信息 */}
        <div className="md:w-1/2 w-full min-h-0 flex-1 overflow-y-auto overscroll-contain p-5 flex flex-col">
          <button
            onClick={() => setDetailTaskId(null)}
            className="absolute top-3 right-3 hidden p-1 rounded-full hover:bg-gray-100 dark:hover:bg-white/[0.06] transition text-gray-400 z-10 md:block"
            aria-label="关闭"
          >
            <CloseIcon className="w-5 h-5" />
          </button>

          <div data-selectable-text className="flex-1">
            <div className="flex items-center gap-1.5 mb-2">
              <h3 className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                输入内容
              </h3>
              {task.prompt && (
                <button
                  onClick={handleCopyPrompt}
                  className="p-1 rounded text-gray-400 hover:bg-gray-100 dark:text-gray-500 dark:hover:bg-white/[0.06] transition"
                  title="复制提示词"
                >
                  <CopyIcon className="h-4 w-4" />
                </button>
              )}
              {showPromptWarning && (
                <span className="relative inline-flex">
                  <button
                    type="button"
                    className="p-1 rounded text-amber-500 hover:bg-amber-50 dark:text-yellow-300 dark:hover:bg-yellow-500/10 transition"
                    onClick={handleShowPromptWarning}
                    aria-label="提示词已被改写"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    </svg>
                  </button>
                </span>
              )}
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap mb-4">
              {task.prompt || '(无提示词)'}
            </p>
            {showRevisedPrompt && currentRevisedPrompt && (
              <div className="mb-4">
                <ActualValueBadge
                  value={currentRevisedPrompt}
                  className="max-w-full rounded px-2 py-1 text-left text-xs leading-relaxed whitespace-pre-wrap"
                />
              </div>
            )}

            {/* 参考图 */}
            {allInputImageIds.length > 0 && (
              <div className="mb-4">
                <div className="flex items-center gap-1.5 mb-2">
                  <h3 className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    参考图
                  </h3>
                  <button
                    onClick={handleCopyInputImage}
                    className="p-1 rounded text-gray-400 hover:bg-gray-100 dark:text-gray-500 dark:hover:bg-white/[0.06] transition"
                    title="复制参考图"
                  >
                    <CopyIcon className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {allInputImageIds.map((imgId) => {
                    const isMaskTarget = imgId === maskTargetId
                    const displaySrc = (isMaskTarget && maskPreviewSrc) ? maskPreviewSrc : (imageSrcs[imgId] || '')
                    return (
                      <div key={imgId} className="relative group inline-block">
                        <div
                          className={`relative w-16 h-16 rounded-lg overflow-hidden border cursor-pointer hover:opacity-80 transition ${
                            isMaskTarget ? 'border-blue-500 border-2 shadow-sm' : 'border-gray-200 dark:border-white/[0.08]'
                          }`}
                          onClick={() => setLightboxImageId(imgId, allInputImageIds)}
                        >
                          {displaySrc && (
                            <img
                              src={displaySrc}
                              data-image-id={imgId}
                              className="w-full h-full object-cover"
                              alt=""
                            />
                          )}
                          {isMaskTarget && (
                            <span className="absolute left-1 top-1 rounded bg-blue-500/90 px-1.5 py-0.5 text-[8px] leading-none text-white font-bold tracking-wider backdrop-blur-sm z-10 pointer-events-none">
                              MASK
                            </span>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* 参数 */}
            <h3 className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
              参数配置
            </h3>
            {showSourceInfo && (
              <div className="mb-2 rounded-lg bg-gray-50 px-3 py-2 text-xs dark:bg-white/[0.03]">
                <span className="text-gray-400 dark:text-gray-500">来源</span>
                <br />
                <span className="font-medium text-gray-700 dark:text-gray-200">{taskProviderName}</span>
                <span className="text-gray-400 dark:text-gray-500"> · {taskProfileName} · {taskModel}</span>
              </div>
            )}
            <div className="grid grid-cols-2 gap-2 text-xs mb-4">
              <div className="bg-gray-50 dark:bg-white/[0.03] rounded-lg px-3 py-2">
                <span className="text-gray-400 dark:text-gray-500">尺寸</span>
                <br />
                <DetailParamValue task={task} paramKey="size" className="font-medium" actualParams={currentActualParams} />
              </div>
              <div className="bg-gray-50 dark:bg-white/[0.03] rounded-lg px-3 py-2">
                <span className="text-gray-400 dark:text-gray-500">质量</span>
                <br />
                <DetailParamValue task={task} paramKey="quality" className="font-medium" actualParams={currentActualParams} />
              </div>
              <div className="bg-gray-50 dark:bg-white/[0.03] rounded-lg px-3 py-2">
                <span className="text-gray-400 dark:text-gray-500">格式</span>
                <br />
                <DetailParamValue task={task} paramKey="output_format" className="font-medium" actualParams={currentActualParams} />
              </div>
              <div className="bg-gray-50 dark:bg-white/[0.03] rounded-lg px-3 py-2">
                <span className="text-gray-400 dark:text-gray-500">审核</span>
                <br />
                <DetailParamValue task={task} paramKey="moderation" className="font-medium" actualParams={currentActualParams} />
              </div>
              <div className="bg-gray-50 dark:bg-white/[0.03] rounded-lg px-3 py-2">
                <span className="text-gray-400 dark:text-gray-500">数量</span>
                <br />
                <DetailParamValue task={task} paramKey="n" className="font-medium" />
              </div>
              {task.params.output_compression != null && (
                <div className="bg-gray-50 dark:bg-white/[0.03] rounded-lg px-3 py-2">
                  <span className="text-gray-400 dark:text-gray-500">压缩率</span>
                  <br />
                  <DetailParamValue task={task} paramKey="output_compression" className="font-medium" actualParams={currentActualParams} />
                </div>
              )}
            </div>

            {/* 时间 */}
            <div className="text-xs text-gray-400 dark:text-gray-500 mb-4">
              <span>创建于 {formatTime(task.createdAt)}</span>
              {formatDuration() && <span> · 耗时 {formatDuration()}</span>}
            </div>
          </div>

          {/* 操作按钮 */}
          <div className="grid grid-cols-4 sm:flex gap-2 pt-4 border-t border-gray-100 dark:border-white/[0.08]">
            <button
              onClick={handleReuse}
              className="col-span-2 sm:flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-500/20 transition text-sm font-medium whitespace-nowrap"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
              复用配置
            </button>
            <button
              onClick={handleEdit}
              disabled={!outputLen}
              className="col-span-2 sm:flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-500/20 disabled:opacity-40 disabled:cursor-not-allowed transition text-sm font-medium whitespace-nowrap"
            >
              <EditIcon className="w-4 h-4 flex-shrink-0" />
              编辑输出
            </button>
            <button
              onClick={handleDelete}
              className="col-span-3 sm:flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-500/20 transition text-sm font-medium whitespace-nowrap"
            >
              <TrashIcon className="w-4 h-4 flex-shrink-0" />
              删除记录
            </button>
            <button
              onClick={handleToggleFavorite}
              className={`col-span-1 sm:flex-none sm:w-11 w-full flex items-center justify-center rounded-xl transition ${
                task.isFavorite
                  ? 'bg-yellow-50 text-yellow-500 hover:bg-yellow-100 dark:bg-yellow-500/10 dark:hover:bg-yellow-500/20'
                  : 'bg-gray-50 text-gray-400 hover:bg-yellow-50 hover:text-yellow-500 dark:bg-white/[0.04] dark:hover:bg-yellow-500/10'
              }`}
              title={task.isFavorite ? '取消收藏' : '收藏记录'}
            >
              <svg className="w-5 h-5" fill={task.isFavorite ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {showRawUrlsModal && rawImageUrls.length > 0 && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm sm:p-6"
          onPointerDown={(e) => {
            rawUrlsBackdropPointerDownRef.current = e.target === e.currentTarget
          }}
          onClick={(e) => {
            e.stopPropagation()
            if (rawUrlsBackdropPointerDownRef.current && e.target === e.currentTarget) setShowRawUrlsModal(false)
            rawUrlsBackdropPointerDownRef.current = false
          }}
        >
          <div ref={rawUrlsModalRef} className="flex w-full max-w-2xl max-h-[90vh] flex-col overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-[#1c1c1e]" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-white/[0.08] shrink-0">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">原始图片链接 ({rawImageUrls.length})</h3>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      await copyTextToClipboard(rawImageUrls.join('\n'))
                      showToast('复制成功', 'success')
                    } catch (err) {
                      showToast(getClipboardFailureMessage('复制失败', err), 'error')
                    }
                  }}
                  className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-white/[0.04] text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/[0.08] transition-colors text-xs font-medium"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  全部复制
                </button>
                <button
                  type="button"
                  onClick={() => setShowRawUrlsModal(false)}
                  className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-white/[0.08] dark:hover:text-gray-300 transition-colors"
                >
                  <CloseIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto p-3 sm:p-5 bg-gray-50/50 dark:bg-black/20 overscroll-contain">
              <div className="space-y-2.5">
                {rawImageUrls.map((url, i) => (
                  <div key={i} className="group flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-white dark:bg-[#1c1c1e] border border-gray-100 dark:border-white/[0.06] shadow-sm hover:shadow-md transition-all">
                    <div className="flex-1 min-w-0 flex flex-col gap-1">
                      <div className="text-xs font-medium text-gray-400 dark:text-gray-500">
                        图片 {i + 1}
                      </div>
                      <div className="text-sm text-gray-700 dark:text-gray-300 truncate select-text" title={url}>
                        {url}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={async () => {
                        try {
                          await copyTextToClipboard(url)
                          showToast('复制成功', 'success')
                        } catch (err) {
                          showToast(getClipboardFailureMessage('复制失败', err), 'error')
                        }
                      }}
                      className="flex-shrink-0 p-2 sm:px-3 sm:py-1.5 flex items-center justify-center gap-1.5 rounded-lg bg-gray-50 dark:bg-white/[0.04] text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/[0.08] transition-colors text-xs font-medium border border-transparent dark:border-white/[0.04]"
                      title="复制链接"
                    >
                      <CopyIcon className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                      <span className="hidden sm:inline">复制</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {showRawResponseModal && task?.rawResponsePayload && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm sm:p-6"
          onPointerDown={(e) => {
            rawResponseBackdropPointerDownRef.current = e.target === e.currentTarget
          }}
          onClick={(e) => {
            e.stopPropagation()
            if (rawResponseBackdropPointerDownRef.current && e.target === e.currentTarget) setShowRawResponseModal(false)
            rawResponseBackdropPointerDownRef.current = false
          }}
        >
          <div
            ref={rawResponseModalRef}
            className="flex w-full max-w-3xl max-h-[90vh] flex-col overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-[#1c1c1e]"
            onPointerDown={(e) => {
              if (!(e.target as Element).closest('[data-selectable-text]')) clearTextSelection()
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-white/[0.08] shrink-0">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">原始响应数据</h3>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      await copyTextToClipboard(task.rawResponsePayload!)
                      showToast('复制成功', 'success')
                    } catch (err) {
                      showToast(getClipboardFailureMessage('复制失败', err), 'error')
                    }
                  }}
                  className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-white/[0.04] text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/[0.08] transition-colors text-xs font-medium"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  全部复制
                </button>
                <button
                  type="button"
                  onClick={() => setShowRawResponseModal(false)}
                  className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-white/[0.08] dark:hover:text-gray-300 transition-colors"
                >
                  <CloseIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto p-5 bg-gray-50/50 dark:bg-black/20 overscroll-contain">
              <pre data-selectable-text className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-300 font-mono whitespace-pre-wrap break-all select-text">
                {task.rawResponsePayload.replace(/"(b64_json|base64|data)":\s*"[^"]+"/g, '"$1": "<base64_data>"')}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
