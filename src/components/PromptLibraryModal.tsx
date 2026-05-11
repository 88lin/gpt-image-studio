import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  BUILT_IN_PROMPT_TEMPLATES,
  PROMPT_TEMPLATE_CATEGORIES,
  getPromptTemplateSubcategories,
  getPromptTemplatesByFilters,
  searchPromptTemplates,
  type PromptTemplate,
  type PromptTemplateCategory,
  type PromptTemplateSubcategory,
} from '../lib/promptTemplates'
import { copyTextToClipboard, getClipboardFailureMessage } from '../lib/clipboard'
import { useStore } from '../store'
import { useCloseOnEscape } from '../hooks/useCloseOnEscape'
import { usePreventBackgroundScroll } from '../hooks/usePreventBackgroundScroll'
import { CloseIcon, CopyIcon } from './icons'

const ALL_CATEGORY = '全部' as const
type CategoryFilter = typeof ALL_CATEGORY | PromptTemplateCategory
const ALL_SUBCATEGORY = '全部细分' as const
type SubcategoryFilter = typeof ALL_SUBCATEGORY | PromptTemplateSubcategory

function focusPromptInput() {
  window.requestAnimationFrame(() => {
    document.querySelector<HTMLTextAreaElement>('[data-prompt-input]')?.focus()
  })
}

function TemplateBadge({ children, tone = 'default' }: { children: string; tone?: 'default' | 'warm' | 'ink' }) {
  const toneClass =
    tone === 'warm'
      ? 'bg-amber-100 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300'
      : tone === 'ink'
        ? 'bg-zinc-900 text-zinc-50 dark:bg-white/[0.08] dark:text-zinc-200'
        : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300'

  return (
    <span className={`inline-flex shrink-0 items-center rounded-full px-2 py-1 text-[11px] font-semibold leading-none ${toneClass}`}>
      {children}
    </span>
  )
}

function SearchIcon() {
  return (
    <svg className="h-4 w-4 text-zinc-400 dark:text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
    </svg>
  )
}

function ApplyIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  )
}

function AppendIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  )
}

function ZoomInIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
      <path d="M11 8v6" />
      <path d="M8 11h6" />
    </svg>
  )
}

function TemplatePreviewImage({
  src,
  alt,
  className = '',
  fit = 'cover',
  sizing = 'fill',
}: {
  src?: string
  alt?: string
  className?: string
  fit?: 'cover' | 'contain'
  sizing?: 'fill' | 'intrinsic'
}) {
  if (!src) {
    return (
      <div className={`flex items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 text-xs text-zinc-400 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-500 ${className}`}>
        无示例图
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt ?? ''}
      loading="lazy"
      decoding="async"
      className={`block ${sizing === 'fill' ? 'w-full' : 'h-auto max-w-full'} ${fit === 'cover' ? 'object-cover' : 'object-contain'} ${className}`}
    />
  )
}

function TemplateDetailPanel({
  template,
  compact = false,
  onApply,
  onAppend,
  onCopy,
  onZoom,
  onClose,
}: {
  template: PromptTemplate
  compact?: boolean
  onApply: (template: PromptTemplate) => void
  onAppend: (template: PromptTemplate) => void
  onCopy: (template: PromptTemplate) => void
  onZoom: (template: PromptTemplate) => void
  onClose?: () => void
}) {
  return (
    <div className={`flex min-h-full flex-col ${compact ? 'relative px-4 pb-4 pt-3' : 'p-4 sm:p-5'}`}>
      {compact && (
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-3 rounded-full p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-800 dark:hover:bg-white/[0.06] dark:hover:text-zinc-100"
          aria-label="关闭模板详情"
        >
          <CloseIcon className="h-5 w-5" />
        </button>
      )}

      <div className={`mb-4 ${compact ? 'pr-12' : ''}`}>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <TemplateBadge>{template.category}</TemplateBadge>
          <TemplateBadge tone="ink">{template.subcategory}</TemplateBadge>
          <TemplateBadge tone="warm">{template.recommendedSize}</TemplateBadge>
        </div>
        <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-bold leading-tight text-zinc-950 dark:text-zinc-50`}>{template.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{template.description}</p>
      </div>

      {template.imageUrl ? (
        <button
          type="button"
          onClick={() => onZoom(template)}
          className="group relative flex w-fit max-w-full self-center overflow-hidden rounded-3xl border border-zinc-200/70 bg-zinc-50 shadow-sm transition hover:border-emerald-400/70 hover:shadow-[0_18px_38px_rgba(15,23,42,0.12)] focus:outline-none focus:ring-2 focus:ring-emerald-500/40 dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-emerald-300/40"
          aria-label="放大查看示例图"
          title="放大查看示例图"
        >
          <TemplatePreviewImage
            src={template.imageUrl}
            alt={template.imageAlt ?? template.title}
            className={`bg-zinc-100 transition duration-200 group-hover:scale-[1.015] dark:bg-zinc-950 ${
              compact ? 'max-h-[38vh]' : 'max-h-[62vh] sm:max-h-[520px] lg:max-h-[54vh]'
            }`}
            fit="contain"
            sizing="intrinsic"
          />
          <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-950/75 text-white opacity-0 shadow-sm backdrop-blur transition group-hover:opacity-100 group-focus:opacity-100 dark:bg-white/85 dark:text-zinc-950">
            <ZoomInIcon />
          </span>
        </button>
      ) : (
        <div className="overflow-hidden rounded-3xl border border-zinc-200/70 bg-zinc-50 shadow-sm dark:border-white/[0.08] dark:bg-white/[0.03]">
          <TemplatePreviewImage
            src={template.imageUrl}
            alt={template.imageAlt ?? template.title}
            className={compact ? 'max-h-[38vh]' : 'max-h-[62vh] sm:max-h-[520px] lg:max-h-[54vh]'}
            fit="contain"
            sizing="intrinsic"
          />
        </div>
      )}

      <div className="mt-3 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => onApply(template)}
          className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-3 py-3 text-sm font-semibold text-white shadow-sm shadow-emerald-600/20 transition hover:bg-emerald-700 dark:bg-emerald-400 dark:text-emerald-950 dark:hover:bg-emerald-300"
        >
          <ApplyIcon />
          填入提示词
        </button>
        <button
          type="button"
          onClick={() => onAppend(template)}
          className="flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-zinc-200 dark:hover:bg-white/[0.08]"
        >
          <AppendIcon />
          追加到末尾
        </button>
      </div>

      <button
        type="button"
        onClick={() => onCopy(template)}
        className="mt-2 flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white px-3 py-2.5 text-sm font-medium text-zinc-600 transition hover:bg-zinc-50 hover:text-zinc-900 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-300 dark:hover:bg-white/[0.06] dark:hover:text-white"
      >
        <CopyIcon className="h-4 w-4" />
        复制模板
      </button>

      {template.sourceUrl && (
        <a
          href={template.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-2 flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-3 py-2.5 text-sm font-medium text-zinc-500 transition hover:bg-zinc-50 hover:text-zinc-900 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-400 dark:hover:bg-white/[0.06] dark:hover:text-white"
        >
          查看原帖
        </a>
      )}

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between gap-2">
          <div className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">Prompt</div>
          <span className="text-xs text-zinc-400 dark:text-zinc-500">{template.prompt.length} 字符</span>
        </div>
        <div
          data-selectable-text
          className={`overflow-y-auto whitespace-pre-wrap break-words rounded-2xl border border-zinc-200/80 bg-[#fbfcfa] p-4 text-[13px] leading-relaxed text-zinc-700 shadow-inner shadow-zinc-200/30 dark:border-white/[0.08] dark:bg-zinc-950/80 dark:text-zinc-200 dark:shadow-black/20 ${
            compact ? 'max-h-[28vh] min-h-[180px]' : 'max-h-[38vh] min-h-[260px] lg:max-h-[46vh]'
          }`}
        >
          {template.prompt}
        </div>
      </div>

      <div className="mt-5">
        <div className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">Tips</div>
        <div className="space-y-2">
          {template.tips.map((tip) => (
            <div
              key={tip}
              className="rounded-2xl border border-emerald-200/60 bg-emerald-50/70 px-3 py-2.5 text-[13px] leading-relaxed text-emerald-900 dark:border-emerald-400/10 dark:bg-emerald-400/[0.08] dark:text-emerald-100"
            >
              {tip}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-zinc-200/70 bg-zinc-50/80 p-3 text-xs leading-relaxed text-zinc-500 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-400">
        <div className="mb-1 font-bold text-zinc-800 dark:text-zinc-100">来源整理</div>
        {template.source}
      </div>
    </div>
  )
}

export default function PromptLibraryModal() {
  const showPromptLibrary = useStore((s) => s.showPromptLibrary)
  const setShowPromptLibrary = useStore((s) => s.setShowPromptLibrary)
  const prompt = useStore((s) => s.prompt)
  const setPrompt = useStore((s) => s.setPrompt)
  const showToast = useStore((s) => s.showToast)
  const setConfirmDialog = useStore((s) => s.setConfirmDialog)

  const panelRef = useRef<HTMLDivElement>(null)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<CategoryFilter>(ALL_CATEGORY)
  const [subcategory, setSubcategory] = useState<SubcategoryFilter>(ALL_SUBCATEGORY)
  const [selectedId, setSelectedId] = useState(BUILT_IN_PROMPT_TEMPLATES[0]?.id ?? '')
  const [mobileDetailId, setMobileDetailId] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1024)
  const [zoomImage, setZoomImage] = useState<{ src: string; alt: string } | null>(null)

  const close = () => {
    setZoomImage(null)
    setMobileDetailId(null)
    setShowPromptLibrary(false)
  }
  const closeZoomImage = () => setZoomImage(null)
  const closeMobileDetail = () => setMobileDetailId(null)

  useCloseOnEscape(showPromptLibrary, close)
  useCloseOnEscape(Boolean(zoomImage), closeZoomImage)
  useCloseOnEscape(Boolean(mobileDetailId), closeMobileDetail)
  usePreventBackgroundScroll(showPromptLibrary, panelRef)
  usePreventBackgroundScroll(Boolean(zoomImage))

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const categoryCounts = useMemo(() => {
    const counts = new Map<PromptTemplateCategory, number>()
    for (const item of PROMPT_TEMPLATE_CATEGORIES) counts.set(item, 0)
    for (const template of BUILT_IN_PROMPT_TEMPLATES) {
      counts.set(template.category, (counts.get(template.category) ?? 0) + 1)
    }
    return counts
  }, [])

  const availableSubcategories = useMemo(() => getPromptTemplateSubcategories(category), [category])

  useEffect(() => {
    if (subcategory !== ALL_SUBCATEGORY && !availableSubcategories.includes(subcategory)) {
      setSubcategory(ALL_SUBCATEGORY)
    }
  }, [availableSubcategories, subcategory])

  const subcategoryCounts = useMemo(() => {
    const counts = new Map<PromptTemplateSubcategory, number>()
    const templates = getPromptTemplatesByFilters(category)
    for (const template of templates) {
      counts.set(template.subcategory, (counts.get(template.subcategory) ?? 0) + 1)
    }
    return counts
  }, [category])

  const categoryTemplates = useMemo(
    () => getPromptTemplatesByFilters(category, subcategory === ALL_SUBCATEGORY ? '全部' : subcategory),
    [category, subcategory],
  )

  const filteredTemplates = useMemo(
    () => searchPromptTemplates(query, categoryTemplates),
    [categoryTemplates, query],
  )

  useEffect(() => {
    if (!showPromptLibrary || filteredTemplates.length === 0) return
    if (!filteredTemplates.some((template) => template.id === selectedId)) {
      setSelectedId(filteredTemplates[0].id)
    }
  }, [filteredTemplates, selectedId, showPromptLibrary])

  useEffect(() => {
    if (!mobileDetailId) return
    if (!filteredTemplates.some((template) => template.id === mobileDetailId)) {
      setMobileDetailId(null)
    }
  }, [filteredTemplates, mobileDetailId])

  const selectedTemplate = filteredTemplates.find((template) => template.id === selectedId) ?? filteredTemplates[0]
  const mobileDetailTemplate = filteredTemplates.find((template) => template.id === mobileDetailId) ?? null

  const applyTemplate = (template: PromptTemplate) => {
    const writeTemplate = () => {
      setPrompt(template.prompt)
      close()
      showToast('已填入模板', 'success')
      focusPromptInput()
    }

    if (prompt.trim()) {
      setConfirmDialog({
        title: '替换当前提示词',
        message: '当前输入框已有内容，确定要用模板替换吗？',
        confirmText: '替换',
        tone: 'warning',
        action: writeTemplate,
      })
      return
    }

    writeTemplate()
  }

  const appendTemplate = (template: PromptTemplate) => {
    setPrompt(prompt.trim() ? `${prompt.trimEnd()}\n\n${template.prompt}` : template.prompt)
    close()
    showToast('已追加模板', 'success')
    focusPromptInput()
  }

  const copyTemplatePrompt = async (template: PromptTemplate) => {
    try {
      await copyTextToClipboard(template.prompt)
      showToast('模板提示词已复制', 'success')
    } catch (err) {
      showToast(getClipboardFailureMessage('复制失败', err), 'error')
    }
  }

  if (!showPromptLibrary) return null

  return createPortal(
    <div
      data-no-drag-select
      className="fixed inset-0 z-[95] bg-[#f8faf5] dark:bg-zinc-950"
      onClick={close}
    >
      <div
        ref={panelRef}
        className="relative flex h-full w-full flex-col overflow-hidden bg-[#f8faf5] animate-template-library-in dark:bg-zinc-950"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="hidden shrink-0 border-b border-zinc-200/70 bg-white/90 px-4 py-3 dark:border-white/[0.08] dark:bg-zinc-900/95 sm:px-6 lg:block">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-300" />
                提示词模板库
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 lg:justify-end">
              <div className="hidden items-center gap-2 rounded-2xl border border-zinc-200/70 bg-zinc-50 px-3 py-2 text-xs text-zinc-500 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-400 sm:flex">
                <span className="font-semibold text-zinc-800 dark:text-zinc-100">{BUILT_IN_PROMPT_TEMPLATES.length}</span>
                个模板
                <span className="h-3 w-px bg-zinc-200 dark:bg-white/[0.1]" />
                <span className="font-semibold text-zinc-800 dark:text-zinc-100">{PROMPT_TEMPLATE_CATEGORIES.length}</span>
                类
              </div>
              <button
                onClick={close}
                className="rounded-full p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-800 dark:hover:bg-white/[0.06] dark:hover:text-zinc-100"
                aria-label="关闭模板库"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto lg:grid lg:grid-cols-[250px_minmax(0,1fr)_430px] lg:overflow-hidden">
          <aside className="relative border-b border-zinc-200/70 bg-[#eef4ec]/70 p-4 pt-3 dark:border-white/[0.08] dark:bg-white/[0.02] lg:border-b-0 lg:border-r lg:overflow-y-auto">
            <div className="absolute right-4 top-3 lg:hidden">
              <button
                onClick={close}
                className="rounded-full bg-white p-1.5 text-zinc-500 shadow-sm transition hover:bg-zinc-50 hover:text-zinc-800 dark:bg-zinc-900 dark:hover:bg-white/[0.08] dark:hover:text-zinc-100"
                aria-label="关闭模板库"
              >
                <CloseIcon className="h-4 w-4" />
              </button>
            </div>

            <label className="block pr-10 lg:pr-0">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">Search</span>
              <div className="flex items-center gap-2 rounded-2xl border border-zinc-200/80 bg-white px-3 py-2.5 shadow-sm dark:border-white/[0.08] dark:bg-zinc-900">
                <SearchIcon />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="搜索：电商 / RAG / RAW"
                  className="min-w-0 flex-1 bg-transparent text-sm text-zinc-800 outline-none placeholder:text-zinc-400 dark:text-zinc-100 dark:placeholder:text-zinc-500"
                  aria-label="搜索模板"
                />
              </div>
            </label>

            <div className="mt-4 grid grid-cols-2 gap-2 lg:hidden">
              <label className="block">
                <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">分类</span>
                <select
                  aria-label="模板分类"
                  value={category}
                  onChange={(event) => {
                    const nextCategory = event.target.value as CategoryFilter
                    setCategory(nextCategory)
                    setSubcategory(ALL_SUBCATEGORY)
                  }}
                  className="w-full rounded-2xl border border-zinc-200/80 bg-white px-3 py-2.5 text-sm text-zinc-800 shadow-sm outline-none transition focus:border-emerald-400 dark:border-white/[0.08] dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-emerald-400"
                >
                  <option value={ALL_CATEGORY}>全部模板</option>
                  {PROMPT_TEMPLATE_CATEGORIES.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">细分</span>
                <select
                  aria-label="模板细分"
                  value={subcategory}
                  onChange={(event) => setSubcategory(event.target.value as SubcategoryFilter)}
                  className="w-full rounded-2xl border border-zinc-200/80 bg-white px-3 py-2.5 text-sm text-zinc-800 shadow-sm outline-none transition focus:border-emerald-400 dark:border-white/[0.08] dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-emerald-400"
                >
                  <option value={ALL_SUBCATEGORY}>全部细分</option>
                  {availableSubcategories.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-5 hidden lg:block">
              <div className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">Category</div>
              <div className="space-y-1.5">
                <button
                  type="button"
                  onClick={() => {
                    setCategory(ALL_CATEGORY)
                    setSubcategory(ALL_SUBCATEGORY)
                  }}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition ${
                    category === ALL_CATEGORY
                      ? 'bg-zinc-950 text-white shadow-sm dark:bg-zinc-100 dark:text-zinc-950'
                      : 'text-zinc-600 hover:bg-white/75 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/[0.06] dark:hover:text-white'
                  }`}
                >
                  <span>全部模板</span>
                  <span className={`rounded-full px-2 py-0.5 text-xs ${category === ALL_CATEGORY ? 'bg-white/15 dark:bg-zinc-950/10' : 'bg-white/80 text-zinc-500 dark:bg-white/[0.06] dark:text-zinc-400'}`}>
                    {BUILT_IN_PROMPT_TEMPLATES.length}
                  </span>
                </button>
                {PROMPT_TEMPLATE_CATEGORIES.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setCategory(item)
                      setSubcategory(ALL_SUBCATEGORY)
                    }}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition ${
                      category === item
                        ? 'bg-emerald-700 text-white shadow-sm dark:bg-emerald-400 dark:text-emerald-950'
                        : 'text-zinc-600 hover:bg-white/75 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/[0.06] dark:hover:text-white'
                    }`}
                  >
                    <span className="min-w-0 truncate">{item}</span>
                    <span className={`rounded-full px-2 py-0.5 text-xs ${category === item ? 'bg-white/15 dark:bg-emerald-950/10' : 'bg-white/80 text-zinc-500 dark:bg-white/[0.06] dark:text-zinc-400'}`}>
                      {categoryCounts.get(item) ?? 0}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 hidden lg:block">
              <div className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">Subcategory</div>
              <div className="grid grid-cols-2 gap-1.5 lg:grid-cols-1">
                <button
                  type="button"
                  onClick={() => setSubcategory(ALL_SUBCATEGORY)}
                  className={`flex min-w-0 items-center justify-between rounded-xl px-3 py-2 text-left text-xs transition ${
                    subcategory === ALL_SUBCATEGORY
                      ? 'bg-zinc-950 text-white shadow-sm dark:bg-zinc-100 dark:text-zinc-950'
                      : 'text-zinc-600 hover:bg-white/75 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/[0.06] dark:hover:text-white'
                  }`}
                >
                  <span className="truncate">全部细分</span>
                  <span className={`rounded-full px-2 py-0.5 text-[11px] ${subcategory === ALL_SUBCATEGORY ? 'bg-white/15 dark:bg-zinc-950/10' : 'bg-white/80 text-zinc-500 dark:bg-white/[0.06] dark:text-zinc-400'}`}>
                    {getPromptTemplatesByFilters(category).length}
                  </span>
                </button>
                {availableSubcategories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSubcategory(item)}
                    className={`flex min-w-0 items-center justify-between rounded-xl px-3 py-2 text-left text-xs transition ${
                      subcategory === item
                        ? 'bg-emerald-700 text-white shadow-sm dark:bg-emerald-400 dark:text-emerald-950'
                        : 'text-zinc-600 hover:bg-white/75 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/[0.06] dark:hover:text-white'
                    }`}
                  >
                    <span className="min-w-0 truncate">{item}</span>
                    <span className={`rounded-full px-2 py-0.5 text-[11px] ${subcategory === item ? 'bg-white/15 dark:bg-emerald-950/10' : 'bg-white/80 text-zinc-500 dark:bg-white/[0.06] dark:text-zinc-400'}`}>
                      {subcategoryCounts.get(item) ?? 0}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 hidden rounded-2xl border border-emerald-200/70 bg-white/70 p-3 text-xs leading-relaxed text-zinc-500 dark:border-emerald-400/10 dark:bg-white/[0.03] dark:text-zinc-400 lg:block">
              <div className="mb-1 font-bold text-zinc-800 dark:text-zinc-100">筛选原则</div>
              写真、摄影、文档教程分开归类；细分优先贴近真实用途，例如人像写真、知识图谱、屏幕样机、报告模板和研究论文图。
            </div>
          </aside>

          <section className="min-h-[430px] border-b border-zinc-200/70 bg-[#f8faf5] dark:border-white/[0.08] dark:bg-zinc-950 lg:min-h-0 lg:border-b-0 lg:overflow-y-auto">
            <div className="hidden border-b border-zinc-200/70 bg-[#f8faf5]/95 px-4 py-3 dark:border-white/[0.08] dark:bg-zinc-950/95 sm:px-5 lg:block lg:sticky lg:top-0 lg:z-10 lg:backdrop-blur">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    {subcategory !== ALL_SUBCATEGORY ? subcategory : category === ALL_CATEGORY ? '全部模板' : category}
                  </div>
                  <div className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                    {filteredTemplates.length} 个结果{query.trim() ? ` · ${query.trim()}` : ''}
                  </div>
                </div>
                <div className="hidden sm:block">
                  <TemplateBadge tone="ink">实用精选</TemplateBadge>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5">
              {filteredTemplates.length === 0 ? (
                <div className="flex min-h-[280px] flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-300 bg-white/60 px-6 text-center dark:border-white/[0.12] dark:bg-white/[0.03]">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 dark:bg-white/[0.06] dark:text-zinc-300">
                    <SearchIcon />
                  </div>
                  <div className="text-sm font-bold text-zinc-800 dark:text-zinc-100">没有匹配模板</div>
                  <p className="mt-1 max-w-xs text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                    换一个关键词，或切回全部分类查看内置模板。
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-3 xl:grid-cols-2">
                  {filteredTemplates.map((template, index) => {
                    const selected = selectedTemplate?.id === template.id

                    return (
                      <button
                        key={template.id}
                        type="button"
                        onClick={() => {
                          setSelectedId(template.id)
                          if (isMobile) setMobileDetailId(template.id)
                        }}
                        className={`group flex min-h-[206px] flex-col rounded-2xl border p-4 text-left transition ${
                          selected
                            ? 'border-emerald-500/70 bg-white shadow-[0_14px_34px_rgba(16,185,129,0.16)] ring-2 ring-emerald-500/10 dark:border-emerald-400/60 dark:bg-white/[0.06] dark:ring-emerald-400/10'
                            : 'border-zinc-200/75 bg-white/75 hover:border-zinc-300 hover:bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-white/[0.16] dark:hover:bg-white/[0.055]'
                        }`}
                      >
                        <div className="mb-3 grid grid-cols-[118px_minmax(0,1fr)] gap-3">
                          <TemplatePreviewImage
                            src={template.imageUrl}
                            alt={template.imageAlt ?? template.title}
                            className="h-[118px] rounded-2xl"
                          />
                          <div className="min-w-0">
                            <div className="mb-2 flex flex-wrap items-center gap-1.5">
                              <TemplateBadge>{template.category}</TemplateBadge>
                              <TemplateBadge tone="ink">{template.subcategory}</TemplateBadge>
                              <TemplateBadge tone="warm">{template.recommendedSize}</TemplateBadge>
                            </div>
                            <h3 className="text-[15px] font-bold leading-snug text-zinc-950 dark:text-zinc-50">
                              {template.title}
                            </h3>
                            <div className="mt-2 flex items-center gap-2">
                              <span className={`rounded-full px-2 py-1 text-[11px] font-semibold ${selected ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300' : 'bg-zinc-100 text-zinc-400 dark:bg-white/[0.06] dark:text-zinc-500'}`}>
                                {String(index + 1).padStart(2, '0')}
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-300">
                          {template.description}
                        </p>

                        <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                          {template.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-lg bg-zinc-100 px-2 py-1 text-[11px] font-medium text-zinc-500 dark:bg-white/[0.06] dark:text-zinc-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          </section>

          <aside className="hidden min-h-[540px] bg-white/80 dark:bg-zinc-900/70 lg:block lg:min-h-0 lg:overflow-y-auto lg:border-l lg:border-zinc-200/70 lg:dark:border-white/[0.08]">
            {selectedTemplate ? (
              <TemplateDetailPanel
                template={selectedTemplate}
                onApply={applyTemplate}
                onAppend={appendTemplate}
                onCopy={copyTemplatePrompt}
                onZoom={(template) => setZoomImage({ src: template.imageUrl!, alt: template.imageAlt ?? template.title })}
              />
            ) : (
              <div className="flex min-h-full items-center justify-center p-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
                当前筛选下暂无模板。
              </div>
            )}
          </aside>
        </div>
        {isMobile && mobileDetailTemplate && (
          <div
            data-prompt-template-drawer
            className="fixed inset-0 z-[110] flex items-end bg-zinc-950/28 backdrop-blur-[1px] lg:hidden"
            onClick={closeMobileDetail}
          >
            <div
              data-prompt-template-drawer-panel
              className="w-full overflow-hidden rounded-t-[32px] bg-[#f8faf5] shadow-[0_-18px_46px_rgba(15,23,42,0.18)] dark:bg-zinc-900"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="max-h-[88vh] overflow-y-auto">
                <TemplateDetailPanel
                  template={mobileDetailTemplate}
                  compact
                  onApply={applyTemplate}
                  onAppend={appendTemplate}
                  onCopy={copyTemplatePrompt}
                  onZoom={(template) => setZoomImage({ src: template.imageUrl!, alt: template.imageAlt ?? template.title })}
                  onClose={closeMobileDetail}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      {zoomImage && (
        <div
          data-prompt-template-lightbox
          className="fixed inset-0 z-[120] flex items-center justify-center bg-zinc-950/90 p-4 backdrop-blur-sm sm:p-7"
          onClick={(event) => {
            event.stopPropagation()
            closeZoomImage()
          }}
        >
          <button
            type="button"
            onClick={closeZoomImage}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/18 focus:outline-none focus:ring-2 focus:ring-white/50 sm:right-6 sm:top-6"
            aria-label="关闭示例图预览"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
          <img
            src={zoomImage.src}
            alt={zoomImage.alt}
            className="max-h-[90vh] max-w-[94vw] rounded-2xl object-contain shadow-[0_28px_90px_rgba(0,0,0,0.45)]"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>,
    document.body,
  )
}
