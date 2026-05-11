import { useRef, useEffect, useCallback, useState, useMemo, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useStore, submitTask, addImageFromFile, updateTaskInStore, removeMultipleTasks, getCachedImage, ensureImageCached } from '../store'
import { DEFAULT_PARAMS } from '../types'
import { getActiveApiProfile, normalizeSettings } from '../lib/apiProfiles'
import { DEFAULT_FAL_IMAGE_SIZE, getChangedParams, getOutputImageLimitForSettings, normalizeParamsForSettings } from '../lib/paramCompatibility'
import { getAtImageQuery, getImageMentionLabel, getPromptIndexFromVisibleIndex, getPromptMentionParts, getSelectedImageMentionLabel, imageMentionMatches, insertImageMentionAtVisibleRange, isCursorInSelectedImageMention, stripImageMentionMarkers } from '../lib/promptImageMentions'
import { normalizeImageSize } from '../lib/size'
import { createMaskPreviewDataUrl } from '../lib/canvasImage'
import { dismissAllTooltips } from '../lib/tooltipDismiss'
import { getSafeBoundingClientRect } from '../lib/domRect'
import Select from './Select'
import SizePickerModal from './SizePickerModal'
import ViewportTooltip from './ViewportTooltip'


function getMentionTagTextLength(el: Element) {
  return el.textContent?.length ?? 0
}

function getNodeVisibleTextLength(node: Node): number {
  if (node.nodeType === Node.TEXT_NODE) return node.textContent?.length ?? 0
  if (node instanceof HTMLElement && node.classList.contains('mention-tag')) {
    return getMentionTagTextLength(node)
  }
  return Array.from(node.childNodes).reduce((sum, child) => sum + getNodeVisibleTextLength(child), 0)
}

function getVisibleOffsetBeforeNode(root: HTMLElement, target: Node): number {
  let offset = 0
  let found = false

  const walk = (node: Node) => {
    if (found) return
    if (node === target) {
      found = true
      return
    }
    if (node.nodeType === Node.TEXT_NODE) {
      offset += node.textContent?.length ?? 0
      return
    }
    if (node instanceof HTMLElement && node.classList.contains('mention-tag')) {
      offset += getMentionTagTextLength(node)
      return
    }
    node.childNodes.forEach(walk)
  }

  root.childNodes.forEach(walk)
  return offset
}

function getMentionTagForBoundary(root: HTMLElement, container: Node) {
  const el = container.nodeType === Node.ELEMENT_NODE
    ? container as Element
    : container.parentElement
  const tag = el?.closest('.mention-tag')
  return tag && root.contains(tag) ? tag : null
}

function getBoundaryOffsetInMention(tag: Element, container: Node, offset: number) {
  try {
    const range = document.createRange()
    range.selectNodeContents(tag)
    range.setEnd(container, offset)
    return range.toString().length
  } catch {
    return getMentionTagTextLength(tag)
  }
}

function getContentEditableBoundaryOffset(
  root: HTMLElement,
  container: Node,
  offset: number,
  edge: 'start' | 'end',
  collapsed: boolean,
) {
  if (container === root) {
    let visibleOffset = 0
    for (const child of Array.from(root.childNodes).slice(0, offset)) {
      visibleOffset += getNodeVisibleTextLength(child)
    }
    return visibleOffset
  }

  if (!root.contains(container)) {
    // 处理选区边界在输入框外部的情况（如 Ctrl+A）
    const position = root.compareDocumentPosition(container)
    if (position & Node.DOCUMENT_POSITION_PRECEDING) return 0
    if (position & Node.DOCUMENT_POSITION_FOLLOWING) return root.textContent?.length ?? 0

    // 如果是父容器，根据偏移量判断是在输入框前还是后
    if (container.contains(root)) {
      const children = Array.from(container.childNodes)
      const rootIndex = children.indexOf(root as any)
      return offset <= rootIndex ? 0 : root.textContent?.length ?? 0
    }
    return edge === 'start' ? 0 : root.textContent?.length ?? 0
  }

  const mentionTag = getMentionTagForBoundary(root, container)
  if (mentionTag) {
    const mentionStart = getVisibleOffsetBeforeNode(root, mentionTag)
    const mentionLength = getMentionTagTextLength(mentionTag)
    if (!collapsed) return edge === 'start' ? mentionStart : mentionStart + mentionLength
    const mentionOffset = getBoundaryOffsetInMention(mentionTag, container, offset)
    return mentionStart + (mentionOffset < mentionLength / 2 ? 0 : mentionLength)
  }

  if (container.nodeType === Node.TEXT_NODE) {
    return getVisibleOffsetBeforeNode(root, container) + offset
  }

  const element = container.nodeType === Node.ELEMENT_NODE ? container as Element : null
  if (element) {
    let visibleOffset = element === root ? 0 : getVisibleOffsetBeforeNode(root, element)
    for (const child of Array.from(element.childNodes).slice(0, offset)) {
      visibleOffset += getNodeVisibleTextLength(child)
    }
    return visibleOffset
  }

  return root.textContent?.length ?? 0
}

/** 获取 contentEditable 中光标的纯文本偏移量 */
function getContentEditableCursor(el: HTMLElement): number {
  const sel = window.getSelection()
  if (!sel || sel.rangeCount === 0) return el.textContent?.length ?? 0
  try {
    const range = sel.getRangeAt(0)
    if (!el.contains(range.startContainer)) return el.textContent?.length ?? 0
    return getContentEditableBoundaryOffset(el, range.startContainer, range.startOffset, 'start', range.collapsed)
  } catch {
    return el.textContent?.length ?? 0
  }
}

function getContentEditableSelection(el: HTMLElement): { start: number; end: number } {
  const sel = window.getSelection()
  if (!sel || sel.rangeCount === 0) {
    const end = el.textContent?.length ?? 0
    return { start: end, end }
  }
  try {
    const range = sel.getRangeAt(0)
    const start = getContentEditableBoundaryOffset(el, range.startContainer, range.startOffset, 'start', range.collapsed)
    const end = range.collapsed
      ? start
      : getContentEditableBoundaryOffset(el, range.endContainer, range.endOffset, 'end', false)
    return { start, end }
  } catch {
    const end = el.textContent?.length ?? 0
    return { start: end, end }
  }
}

function getContentEditablePlainText(el: HTMLElement): string {
  let text = ''
  const appendNodeText = (node: Node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      text += node.textContent ?? ''
      return
    }
    if (node instanceof HTMLElement && node.classList.contains('mention-tag')) {
      text += node.dataset.mentionText ?? node.textContent ?? ''
      return
    }
    node.childNodes.forEach(appendNodeText)
  }
  el.childNodes.forEach(appendNodeText)
  return text.replace(/\r\n?/g, '\n')
}

function syncMentionTagSelection(el: HTMLElement) {
  const tags = el.querySelectorAll<HTMLElement>('.mention-tag')
  const sel = window.getSelection()
  if (!sel || sel.rangeCount === 0) {
    tags.forEach((tag) => tag.classList.remove('selected'))
    return
  }

  const range = sel.getRangeAt(0)
  if (range.collapsed) {
    tags.forEach((tag) => tag.classList.remove('selected'))
    return
  }

  tags.forEach((tag) => {
    let isSelected = false
    try {
      isSelected = range.intersectsNode(tag)
    } catch {
      isSelected = false
    }
    tag.classList.toggle('selected', isSelected)
  })
}

/** 在 contentEditable 中设置光标到指定纯文本偏移量 */
function setContentEditableCursor(el: HTMLElement, offset: number) {
  const sel = window.getSelection()
  if (!sel) return
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT)
  let remaining = offset
  let node: Text | null = null
  while (walker.nextNode()) {
    node = walker.currentNode as Text
    const mentionTag = node.parentElement?.closest('.mention-tag')
    if (mentionTag) {
      if (remaining <= node.length) {
        const range = document.createRange()
        if (remaining < node.length / 2) {
          range.setStartBefore(mentionTag)
        } else {
          range.setStartAfter(mentionTag)
        }
        range.collapse(true)
        sel.removeAllRanges()
        sel.addRange(range)
        return
      }
      remaining -= node.length
      continue
    }
    if (remaining <= node.length) {
      const range = document.createRange()
      range.setStart(node, remaining)
      range.collapse(true)
      sel.removeAllRanges()
      sel.addRange(range)
      return
    }
    remaining -= node.length
  }
  // 如果偏移超出，放到末尾
  if (node) {
    const range = document.createRange()
    range.setStart(node, node.length)
    range.collapse(true)
    sel.removeAllRanges()
    sel.addRange(range)
  }
}

/** 通用悬浮气泡提示 */
function ButtonTooltip({ visible, text }: { visible: boolean; text: ReactNode }) {
  if (!visible) return null

  return (
    <ViewportTooltip visible className="z-10 whitespace-nowrap">
      {text}
    </ViewportTooltip>
  )
}

/** API 支持的最大参考图数量 */
const API_MAX_IMAGES = 16
const MOBILE_MIN_PROMPT_HEIGHT = 48
const DESKTOP_MIN_PROMPT_HEIGHT = 48
const MOBILE_MIN_PROMPT_MAX_HEIGHT = 96
const DESKTOP_MIN_PROMPT_MAX_HEIGHT = 132

export function getPromptTextareaLayout(input: {
  isMobile: boolean
  scrollHeight: number
  windowHeight: number
  imagesHeight: number
  manualHeight: number | null
}) {
  const minHeight = input.isMobile ? MOBILE_MIN_PROMPT_HEIGHT : DESKTOP_MIN_PROMPT_HEIGHT
  const minMaxHeight = input.isMobile ? MOBILE_MIN_PROMPT_MAX_HEIGHT : DESKTOP_MIN_PROMPT_MAX_HEIGHT
  const maxHeight = Math.max(input.windowHeight * 0.56 - (input.imagesHeight + 140), minMaxHeight)
  const desiredHeight = Math.max(
    input.scrollHeight,
    minHeight,
    input.isMobile ? 0 : input.manualHeight ?? 0,
  )
  const targetHeight = Math.min(desiredHeight, maxHeight)

  return {
    minHeight,
    targetHeight,
    shouldScroll: desiredHeight > maxHeight,
  }
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640)
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return isMobile
}

export default function InputBar() {
  const prompt = useStore((s) => s.prompt)
  const setPrompt = useStore((s) => s.setPrompt)
  const inputImages = useStore((s) => s.inputImages)
  const removeInputImage = useStore((s) => s.removeInputImage)
  const clearInputImages = useStore((s) => s.clearInputImages)
  const params = useStore((s) => s.params)
  const setParams = useStore((s) => s.setParams)
  const settings = useStore((s) => s.settings)
  const reusedTaskApiProfileId = useStore((s) => s.reusedTaskApiProfileId)
  const setShowSettings = useStore((s) => s.setShowSettings)
  const setLightboxImageId = useStore((s) => s.setLightboxImageId)
  const showToast = useStore((s) => s.showToast)
  const setConfirmDialog = useStore((s) => s.setConfirmDialog)
  const selectedTaskIds = useStore((s) => s.selectedTaskIds)
  const setSelectedTaskIds = useStore((s) => s.setSelectedTaskIds)
  const clearSelection = useStore((s) => s.clearSelection)
  const tasks = useStore((s) => s.tasks)
  const filterStatus = useStore((s) => s.filterStatus)
  const filterFavorite = useStore((s) => s.filterFavorite)
  const searchQuery = useStore((s) => s.searchQuery)

  const filteredTasks = useMemo(() => {
    const sorted = [...tasks].sort((a, b) => b.createdAt - a.createdAt)
    const q = searchQuery.trim().toLowerCase()
    
    return sorted.filter((t) => {
      if (filterFavorite && !t.isFavorite) return false
      const matchStatus = filterStatus === 'all' || t.status === filterStatus
      if (!matchStatus) return false
      
      if (!q) return true
      const prompt = (t.prompt || '').toLowerCase()
      const paramStr = JSON.stringify(t.params).toLowerCase()
      return prompt.includes(q) || paramStr.includes(q)
    })
  }, [tasks, searchQuery, filterStatus, filterFavorite])

  const handleSelectAllToggle = useCallback(() => {
    if (selectedTaskIds.length === filteredTasks.length && filteredTasks.length > 0) {
      clearSelection()
    } else {
      setSelectedTaskIds(filteredTasks.map((t) => t.id))
    }
  }, [selectedTaskIds.length, filteredTasks, clearSelection, setSelectedTaskIds])

  const handleToggleFavorite = useCallback(() => {
    const selectedTasks = tasks.filter((t) => selectedTaskIds.includes(t.id))
    const allFavorite = selectedTasks.length > 0 && selectedTasks.every((t) => t.isFavorite)
    const newFavoriteState = !allFavorite
    setConfirmDialog({
      title: newFavoriteState ? '批量收藏' : '批量取消收藏',
      message: newFavoriteState
        ? `确定要收藏选中的 ${selectedTaskIds.length} 条记录吗？`
        : `确定要取消收藏选中的 ${selectedTaskIds.length} 条记录吗？`,
      confirmText: newFavoriteState ? '确认收藏' : '确认取消',
      action: () => {
        selectedTaskIds.forEach((id) => {
          updateTaskInStore(id, { isFavorite: newFavoriteState })
        })
        clearSelection()
      },
    })
  }, [tasks, selectedTaskIds, clearSelection, setConfirmDialog])

  const handleDeleteSelected = useCallback(() => {
    setConfirmDialog({
      title: '批量删除',
      message: `确定要删除选中的 ${selectedTaskIds.length} 条记录吗？`,
      action: () => {
        removeMultipleTasks(selectedTaskIds)
      },
    })
  }, [selectedTaskIds, setConfirmDialog])

  const handleDownloadSelected = useCallback(async () => {
    const selectedTasks = tasks.filter((t) => selectedTaskIds.includes(t.id))
    const imageIds = selectedTasks.flatMap(t => t.outputImages || [])
    if (imageIds.length === 0) {
      showToast('选中的记录没有图片', 'info')
      return
    }
    
    showToast(`开始下载 ${imageIds.length} 张图片...`, 'info')
    let successCount = 0
    let failCount = 0
    
    for (const id of imageIds) {
      try {
        let url = getCachedImage(id)
        if (!url) {
          url = await ensureImageCached(id)
        }
        if (!url) {
          failCount++
          continue
        }
        
        const res = await fetch(url)
        const blob = await res.blob()
        const objUrl = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = objUrl
        const ext = blob.type.split('/')[1] || 'png'
        a.download = `image-${Date.now()}-${successCount}.${ext}`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(objUrl)
        successCount++
        
        await new Promise(resolve => setTimeout(resolve, 100))
      } catch (err) {
        console.error(err)
        failCount++
      }
    }
    
    if (failCount > 0) {
      showToast(`下载完成: 成功 ${successCount}，失败 ${failCount}`, 'info')
    } else {
      showToast(`成功下载 ${successCount} 张图片`, 'success')
    }
    clearSelection()
  }, [tasks, selectedTaskIds, showToast, clearSelection])

  const maskDraft = useStore((s) => s.maskDraft)
  const clearMaskDraft = useStore((s) => s.clearMaskDraft)
  const setMaskEditorImageId = useStore((s) => s.setMaskEditorImageId)
  const moveInputImage = useStore((s) => s.moveInputImage)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<HTMLDivElement>(null)
  const prevHeightRef = useRef(window.innerWidth < 640 ? 48 : 112)
  const manualPromptHeightRef = useRef<number | null>(null)

  const [isDragging, setIsDragging] = useState(false)
  const [submitHover, setSubmitHover] = useState(false)
  const [attachHover, setAttachHover] = useState(false)
  const [compressionHintVisible, setCompressionHintVisible] = useState(false)
  const [moderationHintVisible, setModerationHintVisible] = useState(false)
  const [sizeHintVisible, setSizeHintVisible] = useState(false)
  const [qualityHintVisible, setQualityHintVisible] = useState(false)
  const [imageHintId, setImageHintId] = useState<string | null>(null)
  const [mobileCollapsed, setMobileCollapsed] = useState(false)
  const [showSizePicker, setShowSizePicker] = useState(false)
  const [maskPreviewUrl, setMaskPreviewUrl] = useState('')
  const [imageDragIndex, setImageDragIndex] = useState<number | null>(null)
  const [imageDragOverIndex, setImageDragOverIndex] = useState<number | null>(null)
  const [atImageMenuIndex, setAtImageMenuIndex] = useState(0)
  const [atImageMenuDismissed, setAtImageMenuDismissed] = useState(false)
  const [touchDragPreview, setTouchDragPreview] = useState<{ src: string; x: number; y: number } | null>(null)
  const handleRef = useRef<HTMLDivElement>(null)
  const dragTouchRef = useRef({ startY: 0, moved: false })
  const imageDragIndexRef = useRef<number | null>(null)
  const imageTouchDragRef = useRef({ index: null as number | null, startX: 0, startY: 0, moved: false })
  const imageDragOverIndexRef = useRef<number | null>(null)
  const imageDragPreviewRef = useRef<HTMLElement | null>(null)
  const suppressImageClickRef = useRef(false)
  const isUserInputRef = useRef(false)
  const imageHintLockedRef = useRef(false)
  const imageHintReleaseRef = useRef<(() => void) | null>(null)
  const [cursorPos, setCursorPos] = useState(0)
  const [menuLeft, setMenuLeft] = useState(0)
  const maskConflictNoticeShownRef = useRef(false)
  const compressionHintTimerRef = useRef<number | null>(null)
  const moderationHintTimerRef = useRef<number | null>(null)
  const sizeHintTimerRef = useRef<number | null>(null)
  const qualityHintTimerRef = useRef<number | null>(null)
  const imageHintTimerRef = useRef<number | null>(null)
  const nLimitHintTimerRef = useRef<number | null>(null)
  const [outputCompressionInput, setOutputCompressionInput] = useState(
    params.output_compression == null ? '' : String(params.output_compression),
  )
  const [nInput, setNInput] = useState(String(params.n))
  const [nInputFocused, setNInputFocused] = useState(false)
  const [nLimitHintVisible, setNLimitHintVisible] = useState(false)
  const dragCounter = useRef(0)
  const isMobile = useIsMobile()

  const currentActiveProfile = useMemo(() => getActiveApiProfile(settings), [settings])
  const activeProfile = useMemo(() => (
    settings.reuseTaskApiProfileTemporarily && reusedTaskApiProfileId
      ? settings.profiles.find((profile) => profile.id === reusedTaskApiProfileId) ?? currentActiveProfile
      : currentActiveProfile
  ), [currentActiveProfile, reusedTaskApiProfileId, settings])
  const effectiveSettings = useMemo(() => (
    activeProfile.id === currentActiveProfile.id
      ? settings
      : normalizeSettings({ ...settings, activeProfileId: activeProfile.id })
  ), [activeProfile.id, currentActiveProfile.id, settings])
  const hasSubmitApiConfig = Boolean(activeProfile.apiKey)
  const canSubmit = Boolean(prompt.trim() && hasSubmitApiConfig)
  const activeProvider = activeProfile.provider
  const isFalProvider = activeProvider === 'fal'
  const moderationDisabled = activeProfile.apiMode === 'responses' || isFalProvider
  const compressionDisabled = params.output_format === 'png' || isFalProvider
  const outputImageLimit = getOutputImageLimitForSettings(effectiveSettings)
  const isFalTextToImage = isFalProvider && inputImages.length === 0
  const nLimitHintText = isFalProvider
    ? `fal.ai 最大请求数量为 ${outputImageLimit}`
    : `OpenAI 最大请求数量为 ${outputImageLimit}`
  const displaySize = isFalTextToImage && params.size === 'auto'
    ? DEFAULT_FAL_IMAGE_SIZE
    : normalizeImageSize(params.size) || DEFAULT_PARAMS.size
  const qualityOptions = isFalProvider
    ? [
        { label: 'low', value: 'low' },
        { label: 'medium', value: 'medium' },
        { label: 'high', value: 'high' },
      ]
    : [
        { label: 'auto', value: 'auto' },
        { label: 'low', value: 'low' },
        { label: 'medium', value: 'medium' },
        { label: 'high', value: 'high' },
      ]
  const atImageLimit = inputImages.length >= API_MAX_IMAGES
  const maskTargetImage = maskDraft
    ? inputImages.find((img) => img.id === maskDraft.targetImageId) ?? null
    : null
  const referenceImages = maskTargetImage
    ? inputImages.filter((img) => img.id !== maskTargetImage.id)
    : inputImages
  const cursorPosition = cursorPos
  const visiblePrompt = stripImageMentionMarkers(prompt)
  const atImageQuery = isCursorInSelectedImageMention(prompt, cursorPosition)
    ? null
    : getAtImageQuery(visiblePrompt, cursorPosition, inputImages)
  const atImageOptions = atImageQuery
    ? inputImages
        .map((img, index) => ({ img, index }))
        .filter(({ index }) => imageMentionMatches(atImageQuery.query, index))
    : []
  const showAtImageMenu = !atImageMenuDismissed && atImageOptions.length > 0





  const selectAtImageOption = useCallback((imageIndex: number) => {
    const el = textareaRef.current
    const cursor = el ? getContentEditableCursor(el) : prompt.length
    const query = getAtImageQuery(stripImageMentionMarkers(prompt), cursor, inputImages)
    setAtImageMenuDismissed(true)
    setAtImageMenuIndex(0)
    if (!query) return

    const next = insertImageMentionAtVisibleRange(prompt, query.start, cursor, imageIndex)
    isUserInputRef.current = false
    setPrompt(next.prompt)
    window.setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus()
        setContentEditableCursor(textareaRef.current, next.cursor)
      }
    }, 0)
  }, [inputImages, prompt, setPrompt])



  const insertPromptTextAtSelection = useCallback((text: string) => {
    const el = textareaRef.current
    const selection = el ? getContentEditableSelection(el) : { start: prompt.length, end: prompt.length }
    const promptStart = getPromptIndexFromVisibleIndex(prompt, selection.start)
    const promptEnd = getPromptIndexFromVisibleIndex(prompt, selection.end)
    const nextPrompt = `${prompt.slice(0, promptStart)}${text}${prompt.slice(promptEnd)}`
    const nextCursor = selection.start + text.length
    setPrompt(nextPrompt)
    window.setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus()
        setContentEditableCursor(textareaRef.current, nextCursor)
      }
    }, 0)
  }, [prompt, setPrompt])

  useEffect(() => {
    setOutputCompressionInput(
      params.output_compression == null ? '' : String(params.output_compression),
    )
  }, [params.output_compression])

  useEffect(() => {
    setNInput(String(params.n))
  }, [params.n])

  useEffect(() => {
    const normalizedParams = normalizeParamsForSettings(params, effectiveSettings, { hasInputImages: inputImages.length > 0 })
    const patch = getChangedParams(params, normalizedParams)
    if (Object.keys(patch).length) {
      setParams(patch)
    }
  }, [inputImages.length, params, effectiveSettings, setParams])

  useEffect(() => () => {
    if (compressionHintTimerRef.current != null) {
      window.clearTimeout(compressionHintTimerRef.current)
    }
    if (moderationHintTimerRef.current != null) {
      window.clearTimeout(moderationHintTimerRef.current)
    }
    if (qualityHintTimerRef.current != null) {
      window.clearTimeout(qualityHintTimerRef.current)
    }
    if (sizeHintTimerRef.current != null) {
      window.clearTimeout(sizeHintTimerRef.current)
    }
    if (imageHintTimerRef.current != null) {
      window.clearTimeout(imageHintTimerRef.current)
    }
    imageHintReleaseRef.current?.()
    if (nLimitHintTimerRef.current != null) {
      window.clearTimeout(nLimitHintTimerRef.current)
    }
  }, [])

  useEffect(() => {
    let cancelled = false
    if (!maskDraft || !maskTargetImage) {
      setMaskPreviewUrl('')
      return
    }

    createMaskPreviewDataUrl(maskTargetImage.dataUrl, maskDraft.maskDataUrl)
      .then((url) => {
        if (!cancelled) setMaskPreviewUrl(url)
      })
      .catch(() => {
        if (!cancelled) setMaskPreviewUrl('')
      })

    return () => {
      cancelled = true
    }
  }, [maskDraft, maskTargetImage?.id, maskTargetImage?.dataUrl])

  const commitOutputCompression = useCallback(() => {
    if (outputCompressionInput.trim() === '') {
      setOutputCompressionInput('')
      setParams({ output_compression: null })
      return
    }

    const nextValue = Number(outputCompressionInput)
    if (Number.isNaN(nextValue)) {
      setOutputCompressionInput(params.output_compression == null ? '' : String(params.output_compression))
      return
    }

    setOutputCompressionInput(String(nextValue))
    setParams({ output_compression: nextValue })
  }, [outputCompressionInput, params.output_compression, setParams])

  const commitN = useCallback(() => {
    setNLimitHintVisible(false)
    if (nLimitHintTimerRef.current != null) {
      window.clearTimeout(nLimitHintTimerRef.current)
      nLimitHintTimerRef.current = null
    }
    const nextValue = Number(nInput)
    const normalizedValue =
      nInput.trim() === '' ? DEFAULT_PARAMS.n : Number.isNaN(nextValue) ? params.n : nextValue
    const clampedValue = Math.min(outputImageLimit, Math.max(1, normalizedValue))
    setNInput(String(clampedValue))
    setParams({ n: clampedValue })
  }, [nInput, outputImageLimit, params.n, setParams])

  const showNLimitHint = useCallback(() => {
    setNLimitHintVisible(true)
    if (nLimitHintTimerRef.current != null) {
      window.clearTimeout(nLimitHintTimerRef.current)
    }
    nLimitHintTimerRef.current = window.setTimeout(() => {
      setNLimitHintVisible(false)
      nLimitHintTimerRef.current = null
    }, 2000)
  }, [])

  const hideNLimitHint = useCallback(() => {
    setNLimitHintVisible(false)
    if (nLimitHintTimerRef.current != null) {
      window.clearTimeout(nLimitHintTimerRef.current)
      nLimitHintTimerRef.current = null
    }
  }, [])

  const handleNInputChange = useCallback((value: string) => {
    setNInput(value)
    const nextValue = Number(value)
    if (!Number.isNaN(nextValue) && nextValue > outputImageLimit) {
      showNLimitHint()
    } else {
      hideNLimitHint()
    }
  }, [hideNLimitHint, outputImageLimit, showNLimitHint])

  const handleNLimitIncreaseAttempt = useCallback((preventDefault: () => void) => {
    const currentValue = Number(nInput)
    const effectiveValue = Number.isNaN(currentValue) ? params.n : currentValue
    if (!nInputFocused || effectiveValue < outputImageLimit) return

    preventDefault()
    showNLimitHint()
  }, [nInput, nInputFocused, outputImageLimit, params.n, showNLimitHint])

  const showModerationHint = () => {
    if (moderationDisabled) setModerationHintVisible(true)
  }

  const hideModerationHint = () => {
    setModerationHintVisible(false)
    clearModerationHintTimer()
  }

  const clearModerationHintTimer = () => {
    if (moderationHintTimerRef.current != null) {
      window.clearTimeout(moderationHintTimerRef.current)
      moderationHintTimerRef.current = null
    }
  }

  const startModerationHintTouch = () => {
    if (!moderationDisabled) return
    moderationHintTimerRef.current = window.setTimeout(() => {
      setModerationHintVisible(true)
      moderationHintTimerRef.current = null
    }, 450)
  }

  const showCompressionHint = () => setCompressionHintVisible(true)

  const hideCompressionHint = () => {
    setCompressionHintVisible(false)
    clearCompressionHintTimer()
  }

  const clearCompressionHintTimer = () => {
    if (compressionHintTimerRef.current != null) {
      window.clearTimeout(compressionHintTimerRef.current)
      compressionHintTimerRef.current = null
    }
  }

  const startCompressionHintTouch = () => {
    compressionHintTimerRef.current = window.setTimeout(() => {
      setCompressionHintVisible(true)
      compressionHintTimerRef.current = null
    }, 450)
  }

  const showQualityHint = () => {
    if (settings.codexCli || isFalProvider) setQualityHintVisible(true)
  }

  const showSizeHint = () => {
    if (isFalTextToImage) setSizeHintVisible(true)
  }

  const hideSizeHint = () => {
    setSizeHintVisible(false)
    clearSizeHintTimer()
  }

  const clearSizeHintTimer = () => {
    if (sizeHintTimerRef.current != null) {
      window.clearTimeout(sizeHintTimerRef.current)
      sizeHintTimerRef.current = null
    }
  }

  const startSizeHintTouch = () => {
    if (!isFalTextToImage) return
    sizeHintTimerRef.current = window.setTimeout(() => {
      setSizeHintVisible(true)
      sizeHintTimerRef.current = null
    }, 450)
  }

  const hideQualityHint = () => {
    setQualityHintVisible(false)
    clearQualityHintTimer()
  }

  const clearQualityHintTimer = () => {
    if (qualityHintTimerRef.current != null) {
      window.clearTimeout(qualityHintTimerRef.current)
      qualityHintTimerRef.current = null
    }
  }

  const startQualityHintTouch = () => {
    if (!settings.codexCli && !isFalProvider) return
    qualityHintTimerRef.current = window.setTimeout(() => {
      setQualityHintVisible(true)
      qualityHintTimerRef.current = null
    }, 450)
  }

  const clearImageHintTimer = () => {
    if (imageHintTimerRef.current != null) {
      window.clearTimeout(imageHintTimerRef.current)
      imageHintTimerRef.current = null
    }
  }

  const showImageHint = (id: string) => setImageHintId(id)

  const hideImageHint = () => {
    if (imageHintLockedRef.current) return
    setImageHintId(null)
    clearImageHintTimer()
  }

  const hideLockedImageHint = () => {
    imageHintLockedRef.current = false
    imageHintReleaseRef.current?.()
    imageHintReleaseRef.current = null
    setImageHintId(null)
    clearImageHintTimer()
  }

  const showImageHintUntilRelease = (id: string) => {
    if (imageHintLockedRef.current) {
      setImageHintId(id)
      return
    }
    imageHintLockedRef.current = true
    setImageHintId(id)
    const release = () => {
      window.removeEventListener('mouseup', release)
      window.removeEventListener('pointerup', release)
      window.removeEventListener('dragend', release)
      if (imageHintReleaseRef.current === release) {
        imageHintReleaseRef.current = null
        imageHintLockedRef.current = false
        setImageHintId(null)
        clearImageHintTimer()
      }
    }
    imageHintReleaseRef.current = release
    window.addEventListener('mouseup', release)
    window.addEventListener('pointerup', release)
    window.addEventListener('dragend', release)
  }

  const handleFiles = async (files: FileList | File[]) => {
    try {
      const currentCount = useStore.getState().inputImages.length
      if (currentCount >= API_MAX_IMAGES) {
        useStore.getState().showToast(
          `参考图数量已达上限（${API_MAX_IMAGES} 张），无法继续添加`,
          'error',
        )
        return
      }

      const remaining = API_MAX_IMAGES - currentCount
      const accepted = Array.from(files).filter((f) => f.type.startsWith('image/'))
      const toAdd = accepted.slice(0, remaining)
      const discarded = accepted.length - toAdd.length

      for (const file of toAdd) {
        await addImageFromFile(file)
      }

      if (discarded > 0) {
        useStore.getState().showToast(
          `已达上限 ${API_MAX_IMAGES} 张，${discarded} 张图片被丢弃`,
          'error',
        )
      }
    } catch (err) {
      useStore.getState().showToast(
        `图片添加失败：${err instanceof Error ? err.message : String(err)}`,
        'error',
      )
    }
  }

  const handleFilesRef = useRef(handleFiles)
  handleFilesRef.current = handleFiles

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await handleFilesRef.current(e.target.files || [])
    e.target.value = ''
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (showAtImageMenu) {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setAtImageMenuIndex((idx) => (idx + 1) % atImageOptions.length)
        return
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setAtImageMenuIndex((idx) => (idx - 1 + atImageOptions.length) % atImageOptions.length)
        return
      }
      if ((e.key === 'Enter' && !e.shiftKey) || e.key === 'Tab') {
        e.preventDefault()
        selectAtImageOption(atImageOptions[atImageMenuIndex]?.index ?? atImageOptions[0].index)
        return
      }
      if (e.key === 'Escape') {
        e.preventDefault()
        setAtImageMenuIndex(0)
        textareaRef.current?.blur()
        return
      }
    }

    // 阻止 contentEditable 默认换行
    if (e.key === 'Enter') {
      e.preventDefault()

      const isModifier = e.ctrlKey || e.metaKey

      if (settings.enterSubmit) {
        if (e.shiftKey) {
          insertPromptTextAtSelection('\n')
        } else if (!isModifier) {
          if (canSubmit) submitTask()
        }
      } else {
        if (isModifier) {
          if (canSubmit) submitTask()
        } else {
          insertPromptTextAtSelection('\n')
        }
      }
      return
    }
  }

  const handlePromptPaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    const text = e.clipboardData.getData('text/plain')
    if (!text) return
    if (Array.from(e.clipboardData.items).some((item) => item.type.startsWith('image/'))) return

    e.preventDefault()
    insertPromptTextAtSelection(text.replace(/\r\n?/g, '\n'))
  }

  const handlePromptCopy = (e: React.ClipboardEvent<HTMLDivElement>) => {
    const el = textareaRef.current
    if (!el) return

    const selection = getContentEditableSelection(el)
    if (selection.start === selection.end) return

    const promptStart = getPromptIndexFromVisibleIndex(prompt, selection.start)
    const promptEnd = getPromptIndexFromVisibleIndex(prompt, selection.end)
    const text = stripImageMentionMarkers(prompt.slice(promptStart, promptEnd))
    const copyText = /^\s*@图\d+\s*$/.test(text) ? text.trim() : text

    e.preventDefault()
    e.clipboardData.setData('text/plain', copyText)
  }

  const captureManualPromptHeight = useCallback(() => {
    const el = textareaRef.current
    if (!el) return

    const nextHeight = Math.round(el.getBoundingClientRect().height)
    const imagesHeight = imagesRef.current?.offsetHeight ?? 0
    const { targetHeight } = getPromptTextareaLayout({
      isMobile,
      scrollHeight: el.scrollHeight,
      windowHeight: window.innerHeight,
      imagesHeight,
      manualHeight: null,
    })

    manualPromptHeightRef.current = !isMobile && nextHeight > targetHeight + 4
      ? nextHeight
      : null
    prevHeightRef.current = nextHeight
  }, [isMobile])

  // 粘贴图片
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items
      if (!items) return
      const imageFiles: File[] = []
      for (const item of Array.from(items)) {
        if (item.type.startsWith('image/')) {
          const file = item.getAsFile()
          if (file) imageFiles.push(file)
        }
      }
      if (imageFiles.length > 0) {
        e.preventDefault()
        handleFilesRef.current(imageFiles)
      }
    }
    document.addEventListener('paste', handlePaste)
    return () => document.removeEventListener('paste', handlePaste)
  }, [])

  // 拖拽图片 - 监听整个页面
  useEffect(() => {
    const handleDragEnter = (e: DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      dragCounter.current++
      if (e.dataTransfer?.types.includes('Files')) {
        setIsDragging(true)
      }
    }

    const handleDragOver = (e: DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
    }

    const handleDragLeave = (e: DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      dragCounter.current--
      if (dragCounter.current === 0) {
        setIsDragging(false)
      }
    }

    const handleDrop = (e: DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      dragCounter.current = 0
      setIsDragging(false)
      const files = e.dataTransfer?.files
      if (files && files.length > 0) {
        handleFilesRef.current(files)
      }
    }

    document.addEventListener('dragenter', handleDragEnter)
    document.addEventListener('dragover', handleDragOver)
    document.addEventListener('dragleave', handleDragLeave)
    document.addEventListener('drop', handleDrop)

    return () => {
      document.removeEventListener('dragenter', handleDragEnter)
      document.removeEventListener('dragover', handleDragOver)
      document.removeEventListener('dragleave', handleDragLeave)
      document.removeEventListener('drop', handleDrop)
    }
  }, [])

  const adjustTextareaHeight = useCallback(() => {
    const el = textareaRef.current
    if (!el) return

    const imagesHeight = imagesRef.current?.offsetHeight ?? 0

    el.style.transition = 'none'
    el.style.height = '0'
    el.style.overflowY = 'hidden'
    const { minHeight, targetHeight, shouldScroll } = getPromptTextareaLayout({
      isMobile,
      scrollHeight: el.scrollHeight,
      windowHeight: window.innerHeight,
      imagesHeight,
      manualHeight: manualPromptHeightRef.current,
    })

    el.style.height = prevHeightRef.current + 'px'
    void el.offsetHeight

    el.style.transition = 'height 150ms ease, border-color 200ms, box-shadow 200ms'
    el.style.height = targetHeight + 'px'
    el.style.overflowY = shouldScroll ? 'auto' : 'hidden'

    prevHeightRef.current = targetHeight
  }, [isMobile])

  // 将 prompt 同步渲染到 contentEditable（含胶囊 tag）
  useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    // 用户正在输入时不重新渲染 DOM，避免光标跳动
    if (isUserInputRef.current) {
      isUserInputRef.current = false
      return
    }
    const parts = getPromptMentionParts(prompt, inputImages)
    const html = prompt
      ? parts.map((part) =>
          part.type === 'mention'
            ? `<span contenteditable="false" class="mention-tag" data-mention-text="${getSelectedImageMentionLabel(part.imageIndex)}">${part.text}</span>`
            : part.text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        ).join('')
      : ''
    if (el.innerHTML !== html) {
      el.innerHTML = html
    }
  }, [prompt, inputImages])

  useEffect(() => {
    adjustTextareaHeight()
  }, [prompt, inputImages, adjustTextareaHeight])

  // 监听 selectionchange 以在光标移动时更新位置（contentEditable 的 onSelect 不可靠）
  useEffect(() => {
    const handleSelectionChange = () => {
      const el = textareaRef.current
      if (!el) return
      const sel = window.getSelection()
      if (!sel || sel.rangeCount === 0) return

      const domRange = sel.getRangeAt(0)
      try {
        if (!domRange.intersectsNode(el)) {
          syncMentionTagSelection(el)
          return
        }
      } catch {
        return
      }

      const range = getContentEditableSelection(el)
      setCursorPos(range.start)
      syncMentionTagSelection(el)

      const rangeRect = domRange.getBoundingClientRect()
      const elRect = el.getBoundingClientRect()
      if (rangeRect.width === 0 && rangeRect.height === 0) return
      setMenuLeft(rangeRect.left - elRect.left)
    }
    document.addEventListener('selectionchange', handleSelectionChange)
    return () => document.removeEventListener('selectionchange', handleSelectionChange)
  }, [])
  useEffect(() => {
    adjustTextareaHeight()
  }, [inputImages.length, Boolean(maskDraft), maskPreviewUrl, adjustTextareaHeight])

  useEffect(() => {
    window.addEventListener('resize', adjustTextareaHeight)
    return () => window.removeEventListener('resize', adjustTextareaHeight)
  }, [adjustTextareaHeight])

  // 移动端拖动条手势
  useEffect(() => {
    const el = handleRef.current
    if (!el) return
    const onTouchStart = (e: TouchEvent) => {
      dragTouchRef.current = { startY: e.touches[0].clientY, moved: false }
    }
    const onTouchMove = (e: TouchEvent) => {
      const dy = e.touches[0].clientY - dragTouchRef.current.startY
      if (Math.abs(dy) > 10) dragTouchRef.current.moved = true
      if (dy > 30) setMobileCollapsed(true)
      if (dy < -30) setMobileCollapsed(false)
    }
    const onTouchEnd = () => {
      if (!dragTouchRef.current.moved) {
        setMobileCollapsed((v) => !v)
      }
    }
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: true })
    el.addEventListener('touchend', onTouchEnd)
    return () => {
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
    }
  }, [])

  const selectClass = 'px-3 py-1.5 rounded-xl border border-gray-200/60 dark:border-white/[0.08] bg-white/50 dark:bg-white/[0.03] hover:bg-white dark:hover:bg-white/[0.06] text-xs transition-all duration-200 shadow-sm'

  const getTouchDropIndex = (touch: React.Touch) => {
    const target = document
      .elementFromPoint(touch.clientX, touch.clientY)
      ?.closest<HTMLElement>('[data-input-image-index]')
    if (!target) return null
    const idx = Number(target.dataset.inputImageIndex)
    if (!Number.isInteger(idx)) return null
    const rect = getSafeBoundingClientRect(target)
    if (!rect) return null
    return touch.clientX < rect.left + rect.width / 2 ? idx : idx + 1
  }

  const normalizeImageDropIndex = (idx: number) => {
    const minIdx = maskTargetImage ? 1 : 0
    return Math.max(minIdx, Math.min(inputImages.length, idx))
  }

  const isBeforeMaskDropArea = (clientX: number) => {
    if (!maskTargetImage) return false
    const maskEl = document.querySelector<HTMLElement>('[data-input-image-index="0"]')
    if (!maskEl) return false
    const rect = getSafeBoundingClientRect(maskEl)
    if (!rect) return false
    return clientX < rect.left + rect.width / 2
  }

  const resetImageDrag = () => {
    setImageDragIndex(null)
    setImageDragOverIndex(null)
    imageDragIndexRef.current = null
    imageDragOverIndexRef.current = null
    imageTouchDragRef.current = { index: null, startX: 0, startY: 0, moved: false }
    setTouchDragPreview(null)
    imageDragPreviewRef.current?.remove()
    imageDragPreviewRef.current = null
    hideImageHint()
  }

  useEffect(() => {
    if (!touchDragPreview) return
    const previousOverflow = document.body.style.overflow
    const previousOverscroll = document.body.style.overscrollBehavior
    document.body.style.overflow = 'hidden'
    document.body.style.overscrollBehavior = 'none'
    return () => {
      document.body.style.overflow = previousOverflow
      document.body.style.overscrollBehavior = previousOverscroll
    }
  }, [touchDragPreview])

  const getDataTransferDragIndex = (e: React.DragEvent) => {
    const value = e.dataTransfer.getData('text/plain')
    const idx = Number(value)
    return Number.isInteger(idx) ? idx : null
  }

  const setImageDragTarget = (idx: number | null, clientX?: number) => {
    const fromIdx = imageDragIndexRef.current
    if (fromIdx !== null && maskTargetImage && (idx === 0 || (clientX != null && isBeforeMaskDropArea(clientX)))) {
      showImageHint(maskTargetImage.id)
      imageDragOverIndexRef.current = null
      setImageDragOverIndex(null)
      return
    }

    if (fromIdx !== null) hideImageHint()
    const normalizedIdx = idx == null ? null : normalizeImageDropIndex(idx)
    const isNoopTarget = fromIdx !== null && normalizedIdx !== null && (normalizedIdx === fromIdx || normalizedIdx === fromIdx + 1)
    const nextIdx = isNoopTarget ? null : normalizedIdx
    imageDragOverIndexRef.current = nextIdx
    setImageDragOverIndex(nextIdx)
  }

  const renderImageThumb = (img: (typeof inputImages)[number], idx: number) => {
    const isMaskTarget = maskDraft?.targetImageId === img.id
    const canEdit = !maskTargetImage || isMaskTarget
    const imageHintText = isMaskTarget ? '遮罩图必须为第一张图' : ''
    const displaySrc = isMaskTarget && maskPreviewUrl ? maskPreviewUrl : img.dataUrl
    const isImageDragging = imageDragIndex === idx
    const isLast = idx === inputImages.length - 1
    const showDropBefore = imageDragOverIndex === idx && imageDragIndex !== idx
    const showDropAfter = imageDragOverIndex === inputImages.length && isLast && imageDragIndex !== idx

    const handleDragStart = (e: React.DragEvent) => {
      if (isMaskTarget) {
        showImageHintUntilRelease(img.id)
        e.preventDefault()
        return
      }
      hideImageHint()
      imageDragIndexRef.current = idx
      setImageDragIndex(idx)
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('text/plain', String(idx))
      const preview = document.createElement('div')
      preview.style.cssText = 'position:fixed;left:-1000px;top:-1000px;width:52px;height:52px;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.25);'
      const previewImg = document.createElement('img')
      previewImg.src = displaySrc
      previewImg.style.cssText = 'width:52px;height:52px;object-fit:cover;display:block;'
      preview.appendChild(previewImg)
      document.body.appendChild(preview)
      imageDragPreviewRef.current = preview
      e.dataTransfer.setDragImage(preview, 26, 26)
    }

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault()
      e.dataTransfer.dropEffect = 'move'
      const fromIdx = imageDragIndexRef.current
      if (fromIdx === null || fromIdx === idx) return
      const rect = getSafeBoundingClientRect(e.currentTarget)
      if (!rect) return
      setImageDragTarget(e.clientX < rect.left + rect.width / 2 ? idx : idx + 1, e.clientX)
    }

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault()
      const fromIdx = imageDragIndexRef.current ?? getDataTransferDragIndex(e)
      const toIdx = imageDragOverIndexRef.current
      if (fromIdx !== null && toIdx !== null) {
        moveInputImage(fromIdx, toIdx)
      }
      resetImageDrag()
    }

    const handleTouchStart = (e: React.TouchEvent) => {
      if (isMaskTarget) {
        const touch = e.touches[0]
        imageTouchDragRef.current = { index: idx, startX: touch.clientX, startY: touch.clientY, moved: false }
        return
      }
      const touch = e.touches[0]
      imageDragIndexRef.current = idx
      imageTouchDragRef.current = { index: idx, startX: touch.clientX, startY: touch.clientY, moved: false }
      setTouchDragPreview(null)
    }

    const handleTouchMove = (e: React.TouchEvent) => {
      const touch = e.touches[0]
      const touchDrag = imageTouchDragRef.current
      if (touchDrag.index === null) return

      if (isMaskTarget) {
        if (Math.abs(touch.clientX - touchDrag.startX) > 6 || Math.abs(touch.clientY - touchDrag.startY) > 6) {
          e.preventDefault()
          showImageHintUntilRelease(img.id)
        }
        return
      }

      touchDrag.moved = true
      clearImageHintTimer()
      setImageHintId(null)
      suppressImageClickRef.current = true
      e.preventDefault()
      setImageDragIndex(touchDrag.index)
      setTouchDragPreview({ src: displaySrc, x: touch.clientX, y: touch.clientY })
      const dropIndex = getTouchDropIndex(touch)
      setImageDragTarget(dropIndex, touch.clientX)
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
      const touchDrag = imageTouchDragRef.current
      clearImageHintTimer()
      if (touchDrag.index !== null && imageDragOverIndexRef.current !== null) {
        e.preventDefault()
        moveInputImage(touchDrag.index, imageDragOverIndexRef.current)
        window.setTimeout(() => {
          suppressImageClickRef.current = false
        }, 0)
      }
      resetImageDrag()
      hideLockedImageHint()
    }

    const handleTouchCancel = () => {
      suppressImageClickRef.current = false
      hideLockedImageHint()
      resetImageDrag()
    }

    return (
      <div
        key={img.id}
        data-input-image-index={idx}
        className={`relative group inline-block h-[52px] w-[52px] shrink-0 self-start transition-opacity ${isImageDragging ? 'opacity-40' : ''}`}
        style={{ touchAction: isMaskTarget ? 'auto' : 'none' }}
        draggable={!isMobile}
        onMouseLeave={hideImageHint}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragEnd={resetImageDrag}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchCancel}
        onContextMenu={(e) => {
          e.preventDefault()
          const el = textareaRef.current
          const cursor = el ? getContentEditableCursor(el) : prompt.length
          const next = insertImageMentionAtVisibleRange(prompt, cursor, cursor, idx)
          isUserInputRef.current = false
          setPrompt(next.prompt)
          window.setTimeout(() => {
            if (textareaRef.current) {
              textareaRef.current.focus()
              setContentEditableCursor(textareaRef.current, next.cursor)
            }
          }, 0)
        }}
      >
        <ButtonTooltip
          visible={imageHintId === img.id && Boolean(imageHintText) && (!isMobile || isMaskTarget)}
          text={imageHintText}
        />
        {showDropBefore && (
          <div className="absolute -left-[5px] top-0 bottom-0 w-[2px] bg-blue-500 rounded-full z-40 shadow-sm pointer-events-none" />
        )}
        {showDropAfter && (
          <div className="absolute -right-[5px] top-0 bottom-0 w-[2px] bg-blue-500 rounded-full z-40 shadow-sm pointer-events-none" />
        )}
        <div
          className={`relative w-[52px] h-[52px] rounded-xl overflow-hidden shadow-sm cursor-grab active:cursor-grabbing select-none ${
            isMaskTarget
              ? 'border-2 border-blue-500'
              : 'border border-gray-200 dark:border-white/[0.08]'
          }`}
          onClick={() => {
            if (suppressImageClickRef.current) return
            if (isMaskTarget) {
              setMaskEditorImageId(img.id)
              return
            }
            if (maskTargetImage && !maskConflictNoticeShownRef.current) {
              maskConflictNoticeShownRef.current = true
              showToast('只能有一张遮罩图', 'info')
            }
            setLightboxImageId(img.id, inputImages.map((i) => i.id))
          }}
        >
          {displaySrc && (
            <div className="h-full w-full overflow-hidden rounded-xl">
              <img
                src={displaySrc}
                className="w-full h-full object-cover hover:opacity-90 transition-opacity pointer-events-none"
                alt=""
              />
            </div>
          )}
          {isMaskTarget && (
            <span className="absolute left-1 top-1 rounded bg-blue-500/90 px-1.5 py-0.5 text-[8px] leading-none text-white font-bold tracking-wider backdrop-blur-sm z-10 pointer-events-none">
              MASK
            </span>
          )}
          <span className="absolute bottom-1 left-1 flex h-4 w-4 items-center justify-center rounded-full bg-black/55 text-[9px] font-semibold text-white backdrop-blur-sm z-10 pointer-events-none">
            {idx + 1}
          </span>
          {canEdit && (
            <button 
              className="absolute inset-0 w-full h-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer z-20 focus:outline-none border-none"
              onClick={(e) => {
                e.stopPropagation()
                setMaskEditorImageId(img.id)
              }}
              title={isMaskTarget ? "编辑遮罩" : "添加遮罩"}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
          )}
        </div>
        {!isMaskTarget && (
          <span
            className="absolute right-0 top-0 flex h-5 w-5 translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-red-500 text-white opacity-0 shadow-md transition-opacity hover:bg-red-600 group-hover:opacity-100 z-30"
            onClick={(e) => {
              e.stopPropagation()
              removeInputImage(idx)
            }}
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        )}
      </div>
    )
  }

  const renderClearAllButton = () => (
    <button
      onClick={() =>
        setConfirmDialog({
          title: maskTargetImage ? '清空全部输入图' : '清空参考图',
          message: maskTargetImage
            ? `确定要清空遮罩主图、${referenceImages.length} 张参考图和当前遮罩吗？`
            : `确定要清空全部 ${inputImages.length} 张参考图吗？`,
          action: () => clearInputImages(),
        })
      }
      className="w-[52px] h-[52px] rounded-xl border border-dashed border-gray-300 dark:border-white/[0.08] flex flex-col items-center justify-center gap-0.5 text-gray-400 dark:text-gray-500 hover:text-red-500 hover:border-red-300 hover:bg-red-50/50 dark:hover:bg-red-950/30 transition-all cursor-pointer flex-shrink-0"
      title={maskTargetImage ? '清空遮罩主图、参考图和遮罩' : '清空全部参考图'}
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
      <span className="text-[8px] leading-none">{maskTargetImage ? '清空全部' : '清空'}</span>
    </button>
  )

  const renderImageThumbs = () => {
    return (
      <div ref={imagesRef}>
        <div className="grid grid-cols-[repeat(auto-fill,52px)] justify-between gap-x-2 gap-y-3 mb-3">
          {inputImages.map((img, idx) => renderImageThumb(img, idx))}
          {renderClearAllButton()}
        </div>
        {touchDragPreview?.src && createPortal(
          <div
            className="fixed z-[140] h-[52px] w-[52px] overflow-hidden rounded-xl shadow-xl pointer-events-none opacity-90"
            style={{ left: touchDragPreview.x, top: touchDragPreview.y, transform: 'translate(-50%, -50%)' }}
          >
            <img src={touchDragPreview.src} className="h-full w-full object-cover" alt="" />
          </div>,
          document.body,
        )}
      </div>
    )
  }

  const renderParams = (cols: string) => (
    <div className={`grid ${cols} gap-2 text-xs flex-1`}>
      <label
        className="relative flex flex-col gap-0.5"
        onMouseEnter={showSizeHint}
        onMouseLeave={hideSizeHint}
        onTouchStart={startSizeHintTouch}
        onTouchEnd={clearSizeHintTimer}
        onTouchCancel={hideSizeHint}
        onClick={showSizeHint}
      >
        <span className="text-gray-400 dark:text-gray-500 ml-1">尺寸</span>
        <button
          type="button"
          onClick={() => { dismissAllTooltips(); setShowSizePicker(true) }}
          className="px-3 py-1.5 rounded-xl border border-gray-200/60 dark:border-white/[0.08] bg-white/50 dark:bg-white/[0.03] hover:bg-white dark:hover:bg-white/[0.06] focus:outline-none text-xs text-left transition-all duration-200 shadow-sm font-mono"
          title="选择尺寸"
        >
          {displaySize}
        </button>
        <ButtonTooltip
          visible={isFalTextToImage && sizeHintVisible}
          text={<>fal.ai 的文生图模式不支持 <code className="rounded bg-white/10 px-1 py-0.5 font-mono">auto</code> 参数</>}
        />
      </label>
      <label
        className="relative flex flex-col gap-0.5"
        onMouseEnter={showQualityHint}
        onMouseLeave={hideQualityHint}
        onTouchStart={startQualityHintTouch}
        onTouchEnd={clearQualityHintTimer}
        onTouchCancel={hideQualityHint}
        onClick={showQualityHint}
      >
        <span className="text-gray-400 dark:text-gray-500 ml-1">质量</span>
        <Select
          value={settings.codexCli ? 'auto' : isFalProvider && params.quality === 'auto' ? 'high' : params.quality}
          onChange={(val) => {
            if (!settings.codexCli) setParams({ quality: val as any })
          }}
          options={qualityOptions}
          disabled={settings.codexCli}
          className={settings.codexCli
            ? 'px-3 py-1.5 rounded-xl border border-gray-200/60 dark:border-white/[0.08] bg-gray-100/50 dark:bg-white/[0.05] opacity-50 cursor-not-allowed text-xs transition-all duration-200 shadow-sm'
            : selectClass}
        />
        <ButtonTooltip
          visible={(settings.codexCli || isFalProvider) && qualityHintVisible}
          text={isFalProvider ? <>fal.ai 不支持 <code className="rounded bg-white/10 px-1 py-0.5 font-mono">auto</code> 质量参数</> : 'Codex CLI 不支持质量参数'}
        />
      </label>
      <label className="flex flex-col gap-0.5">
        <span className="text-gray-400 dark:text-gray-500 ml-1">格式</span>
        <Select
          value={params.output_format}
          onChange={(val) => setParams({ output_format: val as any })}
          options={[
            { label: 'PNG', value: 'png' },
            { label: 'JPEG', value: 'jpeg' },
            { label: 'WebP', value: 'webp' },
          ]}
          className={selectClass}
        />
      </label>
      <label
        className="relative flex flex-col gap-0.5"
        onMouseEnter={showCompressionHint}
        onMouseLeave={hideCompressionHint}
        onTouchStart={startCompressionHintTouch}
        onTouchEnd={clearCompressionHintTimer}
        onTouchCancel={hideCompressionHint}
        onClick={showCompressionHint}
      >
        <span className="text-gray-400 dark:text-gray-500 ml-1">压缩率</span>
        <input
          value={outputCompressionInput}
          onChange={(e) => setOutputCompressionInput(e.target.value)}
          onBlur={commitOutputCompression}
          disabled={compressionDisabled}
          type="number"
          min={0}
          max={100}
          placeholder="0-100"
          className={`px-3 py-1.5 rounded-xl border border-gray-200/60 dark:border-white/[0.08] focus:outline-none text-xs transition-all duration-200 shadow-sm ${
            compressionDisabled
              ? 'bg-gray-100/50 dark:bg-white/[0.05] opacity-50 cursor-not-allowed'
              : 'bg-white/50 dark:bg-white/[0.03]'
            }`}
        />
        <ButtonTooltip
          visible={compressionHintVisible}
          text={isFalProvider ? 'fal.ai 不支持压缩率参数' : '仅 JPEG 和 WebP 支持压缩率'}
        />
      </label>
      <label
        className="relative flex flex-col gap-0.5"
        onMouseEnter={showModerationHint}
        onMouseLeave={hideModerationHint}
        onTouchStart={startModerationHintTouch}
        onTouchEnd={clearModerationHintTimer}
        onTouchCancel={hideModerationHint}
        onClick={showModerationHint}
      >
        <span className="text-gray-400 dark:text-gray-500 ml-1">审核</span>
        <Select
          value={moderationDisabled ? 'auto' : params.moderation}
          onChange={(val) => {
            if (!moderationDisabled) setParams({ moderation: val as any })
          }}
          options={[
            { label: 'auto', value: 'auto' },
            { label: 'low', value: 'low' },
          ]}
          disabled={moderationDisabled}
          className={moderationDisabled
            ? 'px-3 py-1.5 rounded-xl border border-gray-200/60 dark:border-white/[0.08] bg-gray-100/50 dark:bg-white/[0.05] opacity-50 cursor-not-allowed text-xs transition-all duration-200 shadow-sm'
            : selectClass}
        />
        <ButtonTooltip
          visible={moderationDisabled && moderationHintVisible}
          text={isFalProvider ? 'fal.ai 不支持审核参数' : 'Responses API 不支持审核参数'}
        />
      </label>
      <label className="relative flex flex-col gap-0.5">
        <span className="text-gray-400 dark:text-gray-500 ml-1">数量</span>
        <input
          value={nInput}
          onChange={(e) => handleNInputChange(e.target.value)}
          onFocus={() => setNInputFocused(true)}
          onBlur={() => {
            setNInputFocused(false)
            commitN()
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowUp') {
              handleNLimitIncreaseAttempt(() => e.preventDefault())
            }
          }}
          onWheel={(e) => {
            if (e.deltaY < 0) {
              handleNLimitIncreaseAttempt(() => e.preventDefault())
            }
          }}
          type="number"
          min={1}
          max={outputImageLimit}
          className="px-3 py-1.5 rounded-xl border border-gray-200/60 dark:border-white/[0.08] bg-white/50 dark:bg-white/[0.03] focus:outline-none text-xs transition-all duration-200 shadow-sm"
        />
        <ButtonTooltip visible={nLimitHintVisible} text={nLimitHintText} />
      </label>
    </div>
  )

  return (
    <>
      {/* 全屏拖拽遮罩 */}
      {isDragging && (
        <div className="fixed inset-0 z-[100] bg-white/60 dark:bg-gray-900/60 backdrop-blur-md flex flex-col items-center justify-center pointer-events-none">
          <div className="flex flex-col items-center gap-4 p-8 rounded-3xl">
            <div className={`w-20 h-20 rounded-full border-2 border-dashed flex items-center justify-center ${
              atImageLimit ? 'bg-red-50 dark:bg-red-500/10 border-red-300' : 'bg-blue-50 dark:bg-blue-500/10 border-blue-400'
            }`}>
              {atImageLimit ? (
                <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              ) : (
                <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              )}
            </div>
            <div className="text-center">
              {atImageLimit ? (
                <>
                  <p className="text-lg font-semibold text-red-500">已达上限 {API_MAX_IMAGES} 张</p>
                  <p className="text-sm text-gray-400 mt-1">请先移除部分参考图后再添加</p>
                </>
              ) : (
                <>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">释放以添加参考图</p>
                  <p className="text-sm text-gray-400 mt-1">支持 JPG、PNG、WebP 等格式</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {showSizePicker && (
        <SizePickerModal
          currentSize={isFalTextToImage && params.size === 'auto' ? DEFAULT_FAL_IMAGE_SIZE : params.size}
          onSelect={(size) => setParams({ size })}
          onClose={() => setShowSizePicker(false)}
          allowAuto={!isFalTextToImage}
        />
      )}

      <div data-input-bar className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 w-full max-w-4xl px-3 sm:px-4 transition-all duration-300">
        {selectedTaskIds.length > 0 && (
          <div className="flex justify-center mb-3">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-lg rounded-full flex items-center p-1 border border-gray-200/50 dark:border-white/10 pointer-events-auto">
              <button
                onClick={clearSelection}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                title="取消选择"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="w-px h-5 bg-gray-200 dark:bg-white/20 mx-1"></div>
              <button
                onClick={handleSelectAllToggle}
                className="p-2 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                title={selectedTaskIds.length === filteredTasks.length && filteredTasks.length > 0 ? "取消全选" : "全选当前可见"}
              >
                {selectedTaskIds.length === filteredTasks.length && filteredTasks.length > 0 ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path strokeDasharray="4 4" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
                  </svg>
                )}
              </button>
              <div className="w-px h-5 bg-gray-200 dark:bg-white/20 mx-1"></div>
              <button
                onClick={handleToggleFavorite}
                className="p-2 text-yellow-500 dark:text-yellow-400 hover:text-yellow-600 dark:hover:text-yellow-300 transition-colors"
                title="收藏/取消收藏"
              >
                {selectedTaskIds.length > 0 && selectedTaskIds.every((id) => tasks.find((t) => t.id === id)?.isFavorite) ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                )}
              </button>
              <div className="w-px h-5 bg-gray-200 dark:bg-white/20 mx-1"></div>
              <button
                onClick={handleDownloadSelected}
                className="p-2 text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 transition-colors"
                title="批量下载"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
              <div className="w-px h-5 bg-gray-200 dark:bg-white/20 mx-1"></div>
              <button
                onClick={handleDeleteSelected}
                className="p-2 text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 transition-colors"
                title="删除选中"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        )}
        <div ref={cardRef} className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl border border-white/50 dark:border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] rounded-2xl sm:rounded-3xl p-3 sm:p-4 ring-1 ring-black/5 dark:ring-white/10">
          {/* 移动端拖动条 */}
          <div
            ref={handleRef}
            className="sm:hidden flex justify-center pt-0.5 pb-2 -mt-1 cursor-pointer touch-none"
            onClick={() => setMobileCollapsed((v) => !v)}
          >
            <div className={`w-10 h-1 rounded-full bg-gray-300 dark:bg-white/[0.06] transition-transform duration-200 ${mobileCollapsed ? 'scale-x-75' : ''}`} />
          </div>

          {/* 输入图片行（移动端可折叠） */}
          {inputImages.length > 0 && (
            isMobile ? (
              <>
                <div className={`collapse-section${mobileCollapsed ? ' collapsed' : ''}`}>
                  <div className="collapse-inner">
                    {renderImageThumbs()}
                  </div>
                </div>
                {mobileCollapsed && (
                  <div className="text-xs text-gray-400 dark:text-gray-500 mb-2 ml-1">
                    {maskDraft ? `1 张遮罩主图 · ${referenceImages.length} 张参考图` : `${inputImages.length} 张参考图`}
                  </div>
                )}
              </>
            ) : (
              renderImageThumbs()
            )
          )}

          {/* 输入框 */}
          <div className="relative">
            {showAtImageMenu && (
              <div style={{ left: `${menuLeft}px` }} className="absolute bottom-full z-50 mb-2 w-64 overflow-hidden rounded-2xl border border-gray-200/70 bg-white/95 p-1.5 shadow-xl ring-1 ring-black/5 backdrop-blur-xl dark:border-white/[0.08] dark:bg-gray-900/95 dark:ring-white/10">
                <div className="px-2 pb-1 pt-0.5 text-[11px] text-gray-400 dark:text-gray-500">选择当前参考图</div>
                <div className="max-h-56 overflow-y-auto custom-scrollbar">
                  {atImageOptions.map(({ img, index }, optionIndex) => (
                    <button
                      key={img.id}
                      type="button"
                      onMouseDown={(e) => {
                        e.preventDefault()
                        selectAtImageOption(index)
                      }}
                      onMouseEnter={() => setAtImageMenuIndex(optionIndex)}
                      className={`flex w-full items-center gap-2 rounded-xl px-2 py-1.5 text-left text-xs transition-colors ${
                        optionIndex === atImageMenuIndex
                          ? 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300'
                          : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/[0.06]'
                      }`}
                    >
                      <span className="h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-gray-200/70 dark:border-white/[0.08]">
                        <img src={img.dataUrl} className="h-full w-full object-cover" alt="" />
                      </span>
                      <span className="min-w-0 flex-1 truncate font-medium">{getImageMentionLabel(index)}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div
              ref={textareaRef}
              contentEditable
              suppressContentEditableWarning
              onInput={(e) => {
                isUserInputRef.current = true
                const el = e.currentTarget
                const range = getContentEditableSelection(el)
                setCursorPos(range.start)
                syncMentionTagSelection(el)
                const text = getContentEditablePlainText(el)
                setPrompt(text)
                setAtImageMenuIndex(0)
                setAtImageMenuDismissed(false)
              }}
              onSelect={(e) => {
                const el = e.currentTarget
                const range = getContentEditableSelection(el)
                setCursorPos(range.start)
                syncMentionTagSelection(el)
                setAtImageMenuIndex(0)
                setAtImageMenuDismissed(false)
              }}
              onKeyDown={handleKeyDown}
              onPaste={handlePromptPaste}
              onCopy={handlePromptCopy}
              onMouseUp={captureManualPromptHeight}
              onTouchEnd={captureManualPromptHeight}
              onBlur={captureManualPromptHeight}
              onClick={(e) => {
                const el = textareaRef.current
                if (!el) return
                const target = e.target as HTMLElement
                if (target.classList.contains('mention-tag')) {
                  const sel = window.getSelection()
                  if (sel) {
                    const range = document.createRange()
                    range.selectNode(target)
                    sel.removeAllRanges()
                    sel.addRange(range)
                    syncMentionTagSelection(el)
                  }
                  return
                }

                syncMentionTagSelection(el)
              }}
              data-prompt-input
              data-placeholder="描述你想生成的图片，可输入 @ 指定当前参考图..."
              className="min-h-[48px] w-full resize-none whitespace-pre-wrap break-words rounded-2xl border border-gray-200/60 bg-white/50 px-4 py-3 text-sm leading-relaxed shadow-sm outline-none transition-[border-color,box-shadow] duration-200 focus:ring-1 focus:ring-blue-300/40 empty:before:pointer-events-none empty:before:text-gray-400 empty:before:content-[attr(data-placeholder)] dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-gray-100 dark:focus:ring-blue-500/30 dark:empty:before:text-gray-500 sm:resize-y"
            />
          </div>

          {/* 参数 + 按钮 */}
          <div className="mt-3">
            {/* 桌面端布局 */}
            <div className="hidden sm:flex items-end justify-between gap-3">
              {renderParams('grid-cols-6')}

              <div className="flex gap-2 flex-shrink-0 mb-0.5">
                <div
                  className="relative"
                  onMouseEnter={() => setAttachHover(true)}
                  onMouseLeave={() => setAttachHover(false)}
                >
                  <ButtonTooltip visible={atImageLimit && attachHover} text={`参考图数量已达上限（${API_MAX_IMAGES} 张），无法继续添加`} />
                  <button
                    onClick={() => !atImageLimit && fileInputRef.current?.click()}
                    className={`p-2.5 rounded-xl transition-all shadow-sm ${
                      atImageLimit
                        ? 'bg-gray-200 dark:bg-white/[0.04] text-gray-300 dark:text-gray-500 cursor-not-allowed'
                        : 'bg-gray-200 dark:bg-white/[0.06] hover:bg-gray-300 dark:hover:bg-white/[0.1] text-gray-500 dark:text-gray-300 hover:shadow'
                    }`}
                    title={atImageLimit ? `已达上限 ${API_MAX_IMAGES} 张` : '添加参考图'}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </button>
                </div>
                <div
                  className="relative"
                  onMouseEnter={() => setSubmitHover(true)}
                  onMouseLeave={() => setSubmitHover(false)}
                >
                  <ButtonTooltip visible={!hasSubmitApiConfig && submitHover} text="尚未完成 API 配置，请在右上角设置中进行" />
                  <button
                    onClick={() => hasSubmitApiConfig ? submitTask() : setShowSettings(true)}
                    disabled={hasSubmitApiConfig ? !canSubmit : false}
                    className={`p-2.5 rounded-xl transition-all shadow-sm hover:shadow ${
                      !hasSubmitApiConfig
                        ? 'bg-gray-300 dark:bg-white/[0.06] text-white cursor-pointer'
                        : 'bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300 dark:disabled:bg-white/[0.04] disabled:opacity-50 disabled:cursor-not-allowed'
                    }`}
                    title={hasSubmitApiConfig ? (maskDraft ? '遮罩编辑 (Ctrl+Enter)' : '生成 (Ctrl+Enter)') : '请先配置 API'}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* 移动端布局 */}
            <div className="sm:hidden flex flex-col gap-2">
              <div className={`collapse-section${mobileCollapsed ? ' collapsed' : ''}`}>
                <div className="collapse-inner">
                  {renderParams('grid-cols-2')}
                  <div className="h-2" />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div
                  className="relative"
                  onMouseEnter={() => setAttachHover(true)}
                  onMouseLeave={() => setAttachHover(false)}
                >
                  <ButtonTooltip visible={atImageLimit && attachHover} text={`参考图数量已达上限（${API_MAX_IMAGES} 张），无法继续添加`} />
                  <button
                    onClick={() => !atImageLimit && fileInputRef.current?.click()}
                    className={`p-2.5 rounded-xl transition-all shadow-sm flex-shrink-0 ${
                      atImageLimit
                        ? 'bg-gray-200 dark:bg-white/[0.04] text-gray-300 dark:text-gray-500 cursor-not-allowed'
                        : 'bg-gray-200 dark:bg-white/[0.06] hover:bg-gray-300 dark:hover:bg-white/[0.1] text-gray-500 dark:text-gray-300'
                    }`}
                    title={atImageLimit ? `已达上限 ${API_MAX_IMAGES} 张` : '添加参考图'}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </button>
                </div>
                <div
                  className="relative flex-1"
                  onMouseEnter={() => setSubmitHover(true)}
                  onMouseLeave={() => setSubmitHover(false)}
                >
                  <ButtonTooltip visible={!hasSubmitApiConfig && submitHover} text="尚未完成 API 配置，请在右上角设置中进行" />
                  <button
                    onClick={() => hasSubmitApiConfig ? submitTask() : setShowSettings(true)}
                    disabled={hasSubmitApiConfig ? !canSubmit : false}
                    className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all shadow-sm ${
                      !hasSubmitApiConfig
                        ? 'bg-gray-300 dark:bg-white/[0.06] text-white cursor-pointer'
                        : 'bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300 dark:disabled:bg-white/[0.04] disabled:opacity-50 disabled:cursor-not-allowed'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    {maskDraft ? '遮罩编辑' : '生成图像'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleFileUpload}
          />
        </div>
      </div>
    </>
  )
}
