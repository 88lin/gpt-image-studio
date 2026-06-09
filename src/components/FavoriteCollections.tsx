import { useCallback, useEffect, useMemo, useRef, useState, type MouseEvent as ReactMouseEvent, type ReactNode, type SVGProps } from 'react'
import { createPortal } from 'react-dom'
import type { TaskRecord, FavoriteCollection } from '../types'
import {
  ALL_FAVORITES_COLLECTION_ID,
  createFavoriteCollection,
  deleteFavoriteCollection,
  ensureImageThumbnailCached,
  getFavoriteCollectionTitle,
  getTaskFavoriteCollectionIds,
  renameFavoriteCollection,
  subscribeImageThumbnail,
  updateTasksFavoriteCollections,
  useStore,
} from '../store'
import { useCloseOnEscape } from '../hooks/useCloseOnEscape'
import { useDragSelect } from '../hooks/useDragSelect'
import { usePreventBackgroundScroll } from '../hooks/usePreventBackgroundScroll'
import { useTooltip } from '../hooks/useTooltip'
import { Checkbox } from './Checkbox'
import { EditIcon, FavoriteIcon, TrashIcon, CloseIcon, DragHandleIcon } from './icons'
import ViewportTooltip from './ViewportTooltip'

function FolderIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7a2 2 0 012-2h4.172a2 2 0 011.414.586L12 7h7a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
    </svg>
  )
}

function FavoriteActionButton({
  tooltip,
  className,
  wrapperClassName = 'relative inline-flex',
  disabled = false,
  onClick,
  onMouseDown,
  children,
}: {
  tooltip: string
  className: string
  wrapperClassName?: string
  disabled?: boolean
  onClick?: (e: ReactMouseEvent<HTMLButtonElement>) => void
  onMouseDown?: (e: ReactMouseEvent<HTMLButtonElement>) => void
  children: ReactNode
}) {
  const tooltipState = useTooltip()

  return (
    <span className={wrapperClassName} {...tooltipState.handlers}>
      <button
        type="button"
        className={className}
        aria-label={tooltip}
        disabled={disabled}
        onClick={(e) => {
          tooltipState.dismiss()
          if (disabled) return
          onClick?.(e)
        }}
        onMouseDown={(e) => {
          tooltipState.dismiss()
          if (disabled) return
          onMouseDown?.(e)
        }}
      >
        {children}
      </button>
      <ViewportTooltip visible={tooltipState.visible} className="whitespace-nowrap">
        {tooltip}
      </ViewportTooltip>
    </span>
  )
}

function sameIdSet(a: string[], b: string[]) {
  if (a.length !== b.length) return false
  const bSet = new Set(b)
  return a.every((id) => bSet.has(id))
}

function getInitialCheckedCollectionIds(tasks: TaskRecord[], defaultFavoriteCollectionId: string | null) {
  if (!tasks.length) return defaultFavoriteCollectionId ? [defaultFavoriteCollectionId] : []
  const idSets = tasks.map(getTaskFavoriteCollectionIds)
  const hasFavorite = idSets.some((ids) => ids.length > 0)
  if (!hasFavorite) return defaultFavoriteCollectionId ? [defaultFavoriteCollectionId] : []
  const first = idSets[0] ?? []
  return idSets.every((ids) => sameIdSet(ids, first)) ? first : []
}

function getCollectionTasks(collectionId: string, tasks: TaskRecord[]) {
  const favoriteTasks = tasks.filter((task) => task.isFavorite)
  if (collectionId === ALL_FAVORITES_COLLECTION_ID) return favoriteTasks
  return favoriteTasks.filter((task) => getTaskFavoriteCollectionIds(task).includes(collectionId))
}

function getLatestCoverTask(tasks: TaskRecord[]) {
  return [...tasks]
    .filter((task) => task.outputImages?.length)
    .sort((a, b) => b.createdAt - a.createdAt)[0]
}

function CoverThumbnail({ task }: { task?: TaskRecord }) {
  const [src, setSrc] = useState('')
  const imageId = task?.outputImages?.[0]

  useEffect(() => {
    setSrc('')
    if (!imageId) return
    let cancelled = false
    const unsubscribe = subscribeImageThumbnail(imageId, (thumbnail) => {
      if (!cancelled) setSrc(thumbnail.dataUrl)
    })
    ensureImageThumbnailCached(imageId).then((thumbnail) => {
      if (!cancelled && thumbnail) setSrc(thumbnail.dataUrl)
    }).catch(() => {})
    return () => {
      cancelled = true
      unsubscribe()
    }
  }, [imageId])

  if (src) return <img src={src} alt="" className="h-full w-full object-cover" />
  return (
    <div className="flex h-full w-full items-center justify-center bg-yellow-50 text-yellow-500 dark:bg-[#2a2211] dark:text-yellow-500">
      <FavoriteIcon filled className="h-8 w-8 opacity-80" />
    </div>
  )
}

type CollectionCard = {
  id: string
  name: string
  collection?: FavoriteCollection
  tasks: TaskRecord[]
}

function FavoriteCollectionOverviewCard({
  card,
  coverTask,
  isVirtualAll,
  isDefault,
  canDelete,
  isSelected,
  editingId,
  editingName,
  setEditingName,
  confirmRename,
  handleRenameKeyDown,
  startRename,
  handleSetDefault,
  handleDelete,
  onOpen,
  onToggleSelection,
  suppressClickUntilRef,
}: {
  card: CollectionCard
  coverTask?: TaskRecord
  isVirtualAll: boolean
  isDefault: boolean
  canDelete: boolean
  isSelected: boolean
  editingId: string | null
  editingName: string
  setEditingName: (value: string) => void
  confirmRename: () => void
  handleRenameKeyDown: (e: React.KeyboardEvent) => void
  startRename: (e: React.MouseEvent, collection: FavoriteCollection) => void
  handleSetDefault: (collection: FavoriteCollection) => void
  handleDelete: (collection: FavoriteCollection, collectionTasks: TaskRecord[]) => void
  onOpen: () => void
  onToggleSelection: () => void
  suppressClickUntilRef: { current: number }
}) {
  const [isSwiping, setIsSwiping] = useState(false)
  const [swipeStartedSelected, setSwipeStartedSelected] = useState(false)
  const [swipeActionActive, setSwipeActionActive] = useState(false)
  const [swipeDirection, setSwipeDirection] = useState<-1 | 0 | 1>(0)
  const cardRef = useRef<HTMLElement>(null)
  const touchStartRef = useRef<{ x: number; y: number } | null>(null)
  const horizontalSwipeRef = useRef(false)
  const suppressSwipeClickUntilRef = useRef(0)
  const swipeResetTimerRef = useRef<number | null>(null)
  const swipeFrameRef = useRef<number | null>(null)
  const swipeOffsetRef = useRef(0)
  const pendingSwipeOffsetRef = useRef(0)

  const applySwipeOffset = (offset: number) => {
    swipeOffsetRef.current = offset
    if (cardRef.current) cardRef.current.style.transform = offset ? `translateX(${offset}px)` : ''
  }

  const cancelSwipeFrame = () => {
    if (swipeFrameRef.current != null) {
      window.cancelAnimationFrame(swipeFrameRef.current)
      swipeFrameRef.current = null
    }
  }

  const scheduleSwipeOffset = (offset: number) => {
    if (swipeFrameRef.current == null && swipeOffsetRef.current === offset) return
    pendingSwipeOffsetRef.current = offset
    if (swipeFrameRef.current != null) return
    swipeFrameRef.current = window.requestAnimationFrame(() => {
      swipeFrameRef.current = null
      applySwipeOffset(pendingSwipeOffsetRef.current)
    })
  }

  const resetSwipe = () => {
    touchStartRef.current = null
    horizontalSwipeRef.current = false
    setIsSwiping(false)
    setSwipeDirection(0)
    setSwipeActionActive(false)
    cancelSwipeFrame()
    applySwipeOffset(0)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if ((e.target as HTMLElement).closest('button, a, input, textarea, select')) {
      resetSwipe()
      return
    }
    if (swipeResetTimerRef.current != null) {
      window.clearTimeout(swipeResetTimerRef.current)
      swipeResetTimerRef.current = null
    }
    touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    horizontalSwipeRef.current = false
    setSwipeStartedSelected(isSelected)
    setSwipeActionActive(false)
    setSwipeDirection(0)
    cancelSwipeFrame()
    applySwipeOffset(0)
    setIsSwiping(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return
    const deltaX = e.touches[0].clientX - touchStartRef.current.x
    const deltaY = e.touches[0].clientY - touchStartRef.current.y
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
      horizontalSwipeRef.current = true
      e.preventDefault()
      const boundedOffset = Math.max(-60, Math.min(60, deltaX))
      setSwipeDirection(boundedOffset > 0 ? 1 : boundedOffset < 0 ? -1 : 0)
      setSwipeActionActive(Math.abs(deltaX) >= 40)
      scheduleSwipeOffset(boundedOffset)
    }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsSwiping(false)
    cancelSwipeFrame()
    setSwipeDirection(0)
    if (!touchStartRef.current) return
    const deltaX = e.changedTouches[0].clientX - touchStartRef.current.x
    touchStartRef.current = null
    const isSwipeAction = horizontalSwipeRef.current && Math.abs(deltaX) > 40
    horizontalSwipeRef.current = false
    setSwipeActionActive(isSwipeAction)
    swipeResetTimerRef.current = window.setTimeout(() => {
      setSwipeActionActive(false)
      swipeResetTimerRef.current = null
    }, 220)
    if (isSwipeAction) {
      suppressSwipeClickUntilRef.current = Date.now() + 350
      e.preventDefault()
      e.stopPropagation()
      onToggleSelection()
    }
  }

  useEffect(() => () => {
    if (swipeResetTimerRef.current != null) window.clearTimeout(swipeResetTimerRef.current)
    cancelSwipeFrame()
  }, [])

  useEffect(() => {
    if (!isSwiping) applySwipeOffset(0)
  }, [isSwiping])

  const showSwipeAction = swipeActionActive
  const swipeBgClass = showSwipeAction
    ? swipeStartedSelected
      ? 'bg-gray-500 dark:bg-gray-600'
      : 'bg-blue-500'
    : 'bg-gray-200 dark:bg-gray-700'

  return (
    <div className="relative rounded-xl">
      <div className={`absolute inset-0 rounded-xl flex items-center transition-opacity duration-200 pointer-events-none ${isSwiping || swipeDirection !== 0 || swipeActionActive ? 'opacity-100' : 'opacity-0'} ${swipeBgClass} ${swipeDirection > 0 ? 'justify-start pl-6' : 'justify-end pr-6'}`}>
        <svg className={`w-8 h-8 transition-transform duration-150 ${showSwipeAction ? 'scale-110 text-white' : 'scale-90 text-white/60'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {swipeStartedSelected && showSwipeAction ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          )}
        </svg>
      </div>
      <article
        ref={cardRef}
        className={`relative bg-white dark:bg-gray-900 rounded-xl border overflow-hidden cursor-pointer touch-pan-y will-change-transform duration-200 hover:shadow-lg dark:hover:bg-gray-800/80 ${!isSwiping ? 'transition-[box-shadow,border-color,background-color,transform]' : 'transition-[box-shadow,border-color,background-color]'} ${isSelected ? 'border-blue-500 shadow-md ring-2 ring-blue-500/50' : 'border-gray-200 dark:border-white/[0.08] hover:border-gray-300 dark:hover:border-white/[0.18]'}`}
        onClick={(e) => {
          if (Date.now() < suppressClickUntilRef.current || Date.now() < suppressSwipeClickUntilRef.current) {
            e.preventDefault()
            e.stopPropagation()
            return
          }
          const isCtrl = /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? e.metaKey : e.ctrlKey
          if (isCtrl) {
            e.preventDefault()
            onToggleSelection()
            return
          }
          onOpen()
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={resetSwipe}
      >
        <div className="flex h-40">
          <div className="w-40 min-w-[10rem] h-full bg-gray-100 dark:bg-black/20 relative flex items-center justify-center overflow-hidden flex-shrink-0">
            <CoverThumbnail task={coverTask} />
          </div>
          <div className="flex-1 p-3 flex flex-col min-w-0">
            <div className="flex-1 min-h-0 mb-2 overflow-hidden">
              <div className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">
                {isVirtualAll ? <FavoriteIcon filled className="h-4 w-4 shrink-0 text-yellow-500" /> : <FolderIcon className="h-4 w-4 shrink-0 text-gray-400 dark:text-gray-400" />}
                {editingId === card.id ? (
                  <input
                    type="text"
                    className="h-6 min-w-0 flex-1 rounded border border-blue-400/50 bg-white px-1.5 py-0 text-[14px] leading-6 text-gray-900 shadow-sm outline-none focus:border-blue-500 dark:border-white/20 dark:bg-black/20 dark:text-white dark:focus:border-white/40"
                    value={editingName}
                    onChange={(e) => setEditingName(e.target.value)}
                    onKeyDown={handleRenameKeyDown}
                    onClick={(e) => e.stopPropagation()}
                    autoFocus
                    onBlur={confirmRename}
                  />
                ) : (
                  <span className="truncate" title={card.name}>{card.name}</span>
                )}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{card.tasks.length} 条任务</p>
            </div>
            <div className="mt-auto flex items-center justify-end gap-1">
              {!isVirtualAll && card.collection && (
                <>
                  <FavoriteActionButton
                    tooltip={isDefault ? '取消默认收藏夹' : '设为默认收藏夹'}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleSetDefault(card.collection!)
                    }}
                    className={`p-1.5 rounded-md transition ${isDefault ? 'text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-500/10' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-500/10'}`}
                  >
                    <FavoriteIcon filled={isDefault} className="w-4 h-4" />
                  </FavoriteActionButton>
                  {editingId === card.id ? (
                    <FavoriteActionButton
                      tooltip="确认"
                      onMouseDown={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        confirmRename()
                      }}
                      className="p-1.5 rounded-md hover:bg-green-50 dark:hover:bg-green-950/30 text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300 transition"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </FavoriteActionButton>
                  ) : (
                    <FavoriteActionButton
                      tooltip="编辑名称"
                      onClick={(e) => startRename(e, card.collection!)}
                      className="p-1.5 rounded-md hover:bg-green-50 dark:hover:bg-green-950/30 text-gray-400 hover:text-green-500 transition"
                    >
                      <EditIcon className="w-4 h-4" />
                    </FavoriteActionButton>
                  )}
                  <FavoriteActionButton
                    tooltip={canDelete ? '删除收藏夹' : '至少保留一个收藏夹'}
                    disabled={!canDelete}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDelete(card.collection!, card.tasks)
                    }}
                    className={`p-1.5 rounded-md transition ${canDelete ? 'hover:bg-red-50 dark:hover:bg-red-950/30 text-gray-400 hover:text-red-500' : 'text-gray-300 dark:text-gray-600 cursor-not-allowed'}`}
                  >
                    <TrashIcon className="w-4 h-4" />
                  </FavoriteActionButton>
                </>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export function FavoriteCollectionsView() {
  const tasks = useStore((s) => s.tasks)
  const collections = useStore((s) => s.favoriteCollections)
  const defaultFavoriteCollectionId = useStore((s) => s.defaultFavoriteCollectionId)
  const setDefaultFavoriteCollectionId = useStore((s) => s.setDefaultFavoriteCollectionId)
  const searchQuery = useStore((s) => s.searchQuery)
  const setActiveFavoriteCollectionId = useStore((s) => s.setActiveFavoriteCollectionId)
  const setConfirmDialog = useStore((s) => s.setConfirmDialog)
  const selectedFavoriteCollectionIds = useStore((s) => s.selectedFavoriteCollectionIds)
  const setSelectedFavoriteCollectionIds = useStore((s) => s.setSelectedFavoriteCollectionIds)
  const toggleFavoriteCollectionSelection = useStore((s) => s.toggleFavoriteCollectionSelection)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingName, setEditingName] = useState('')
  const suppressClickUntilRef = useRef(0)

  const cards = useMemo<CollectionCard[]>(() => {
    const allTasks = getCollectionTasks(ALL_FAVORITES_COLLECTION_ID, tasks)
    return [
      { id: ALL_FAVORITES_COLLECTION_ID, name: '全部', tasks: allTasks },
      ...collections.map((collection) => ({
        id: collection.id,
        name: collection.name,
        collection,
        tasks: getCollectionTasks(collection.id, tasks),
      })),
    ]
  }, [collections, tasks])

  const filteredCards = useMemo(() => {
    if (!searchQuery.trim()) return cards
    const lowerQuery = searchQuery.toLowerCase()
    return cards.filter(c => c.name.toLowerCase().includes(lowerQuery))
  }, [cards, searchQuery])

  const handleCollectionSelectionChange = useCallback((ids: string[]) => {
    setSelectedFavoriteCollectionIds(ids)
  }, [setSelectedFavoriteCollectionIds])

  const { selectionBox } = useDragSelect({
    containerSelector: '[data-drag-select-surface]',
    itemSelector: '.favorite-collection-card-wrapper',
    getItemId: (element) => element.getAttribute('data-favorite-collection-id'),
    onSelectionChange: handleCollectionSelectionChange,
    initialSelectedIds: selectedFavoriteCollectionIds,
    onSuppressClick: () => {
      suppressClickUntilRef.current = Date.now() + 250
    },
  })

  const startRename = (e: React.MouseEvent, collection: FavoriteCollection) => {
    e.preventDefault()
    e.stopPropagation()
    setEditingId(collection.id)
    setEditingName(collection.name)
  }

  const confirmRename = () => {
    if (editingId && editingName.trim()) renameFavoriteCollection(editingId, editingName.trim())
    setEditingId(null)
    setEditingName('')
  }

  const handleRenameKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      confirmRename()
    } else if (e.key === 'Escape') {
      e.preventDefault()
      setEditingId(null)
      setEditingName('')
    }
  }

  const handleDelete = (collection: FavoriteCollection, collectionTasks: TaskRecord[]) => {
    if (collections.length <= 1) return
    const imageCount = new Set(collectionTasks.flatMap((task) => task.outputImages || [])).size
    setConfirmDialog({
      title: '删除收藏夹',
      message: `确定要删除收藏夹「${collection.name}」吗？`,
      checkbox: imageCount > 0
        ? {
            label: `同时删除收藏夹中的图片（${imageCount} 张）`,
            tone: 'danger',
          }
        : undefined,
      action: (deleteImages = false) => {
        void deleteFavoriteCollection(collection.id, deleteImages)
      },
    })
  }

  const handleSetDefault = (collection: FavoriteCollection) => {
    if (collection.id === defaultFavoriteCollectionId) {
      setDefaultFavoriteCollectionId(null)
      return
    }
    const current = collections.find((item) => item.id === defaultFavoriteCollectionId)
    if (!current) {
      setDefaultFavoriteCollectionId(collection.id)
      return
    }
    setConfirmDialog({
      title: '修改默认收藏夹',
      message: `确定要将默认收藏夹从「${current.name}」改为「${collection.name}」吗？`,
      action: () => setDefaultFavoriteCollectionId(collection.id),
    })
  }

  return (
    <div data-favorite-collections-root className="relative min-h-[50vh]">
      {filteredCards.length === 0 ? (
        <div className="py-32 text-center text-gray-400 dark:text-gray-500">
          <FavoriteIcon className="mx-auto mb-4 h-12 w-12 text-gray-300 dark:text-gray-600" />
          <p className="text-sm">{cards.length === 0 ? '还没有收藏的图片' : '没有找到匹配的收藏夹'}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 pb-10">
          {filteredCards.map((card) => {
            const coverTask = getLatestCoverTask(card.tasks)
            const isVirtualAll = card.id === ALL_FAVORITES_COLLECTION_ID
            const isDefault = card.id === defaultFavoriteCollectionId
            const canDelete = collections.length > 1
            return (
              <div
                key={card.id}
                className="favorite-collection-card-wrapper"
                data-favorite-collection-id={card.id}
              >
                <FavoriteCollectionOverviewCard
                  card={card}
                  coverTask={coverTask}
                  isVirtualAll={isVirtualAll}
                  isDefault={isDefault}
                  canDelete={canDelete}
                  isSelected={selectedFavoriteCollectionIds.includes(card.id)}
                  editingId={editingId}
                  editingName={editingName}
                  setEditingName={setEditingName}
                  confirmRename={confirmRename}
                  handleRenameKeyDown={handleRenameKeyDown}
                  startRename={startRename}
                  handleSetDefault={handleSetDefault}
                  handleDelete={handleDelete}
                  onOpen={() => setActiveFavoriteCollectionId(card.id)}
                  onToggleSelection={() => toggleFavoriteCollectionSelection(card.id)}
                  suppressClickUntilRef={suppressClickUntilRef}
                />
              </div>
            )
          })}
        </div>
      )}
      {selectionBox && (
        <div
          className="fixed bg-blue-500/20 border border-blue-500/50 pointer-events-none z-[30]"
          style={{
            left: Math.min(selectionBox.startPageX, selectionBox.currentPageX) - window.scrollX,
            top: Math.min(selectionBox.startPageY, selectionBox.currentPageY) - window.scrollY,
            width: Math.abs(selectionBox.currentPageX - selectionBox.startPageX),
            height: Math.abs(selectionBox.currentPageY - selectionBox.startPageY),
          }}
        />
      )}
    </div>
  )
}

export function FavoriteCollectionPickerModal() {
  const taskIds = useStore((s) => s.favoritePickerTaskIds)
  const tasks = useStore((s) => s.tasks)
  const collections = useStore((s) => s.favoriteCollections)
  const defaultFavoriteCollectionId = useStore((s) => s.defaultFavoriteCollectionId)
  const setDefaultFavoriteCollectionId = useStore((s) => s.setDefaultFavoriteCollectionId)
  const setFavoriteCollections = useStore((s) => s.setFavoriteCollections)
  const setConfirmDialog = useStore((s) => s.setConfirmDialog)
  const closePicker = useStore((s) => s.closeFavoritePicker)
  const [checkedIds, setCheckedIds] = useState<string[]>([])
  const [draft, setDraft] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingName, setEditingName] = useState('')
  const modalRef = useRef<HTMLDivElement>(null)
  const open = Boolean(taskIds?.length)

  const [draggedId, setDraggedId] = useState<string | null>(null)
  const [dragOverId, setDragOverId] = useState<string | null>(null)
  const [dragDropPosition, setDragDropPosition] = useState<'before' | 'after' | null>(null)

  const [touchDragPreview, setTouchDragPreview] = useState<{
    label: string
    x: number
    y: number
    width: number
    height: number
    offsetX: number
    offsetY: number
  } | null>(null)
  const touchDragRef = useRef<{ id: string, startX: number, startY: number, moved: boolean } | null>(null)

  const selectedTasks = useMemo(() => tasks.filter((task) => taskIds?.includes(task.id)), [tasks, taskIds])
  const selectableCollections = collections

  useEffect(() => {
    if (!open) return
    setCheckedIds(getInitialCheckedCollectionIds(selectedTasks, defaultFavoriteCollectionId))
    setDraft('')
    setEditingId(null)
    setEditingName('')
  }, [defaultFavoriteCollectionId, open, selectedTasks])

  useCloseOnEscape(open, closePicker)
  usePreventBackgroundScroll(open, modalRef)

  useEffect(() => {
    if (!touchDragPreview) return

    const preventTouchScroll = (event: TouchEvent) => {
      event.preventDefault()
    }
    const listenerOptions = { passive: false, capture: true } as AddEventListenerOptions
    const previousOverflow = document.body.style.overflow
    const previousOverscroll = document.body.style.overscrollBehavior

    document.body.style.overflow = 'hidden'
    document.body.style.overscrollBehavior = 'none'
    window.addEventListener('touchmove', preventTouchScroll, listenerOptions)

    return () => {
      document.body.style.overflow = previousOverflow
      document.body.style.overscrollBehavior = previousOverscroll
      window.removeEventListener('touchmove', preventTouchScroll, listenerOptions)
    }
  }, [touchDragPreview])

  if (!open || !taskIds) return null

  const toggleChecked = (id: string, checked: boolean) => {
    setCheckedIds((current) => checked ? Array.from(new Set([...current, id])) : current.filter((item) => item !== id))
  }

  const handleCreate = () => {
    const collection = createFavoriteCollection(draft)
    if (!collection) return
    setCheckedIds((current) => Array.from(new Set([...current, collection.id])))
    setDraft('')
  }

  const handleConfirm = () => {
    void updateTasksFavoriteCollections(taskIds, checkedIds)
    closePicker()
  }

  const handleDragStart = (e: React.DragEvent, id: string) => {
    setDraggedId(id)
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', id)
  }

  const handleDragOver = (e: React.DragEvent, targetId: string) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'

    const targetElement = e.currentTarget as HTMLElement
    const rect = targetElement.getBoundingClientRect()
    const position = e.clientY < rect.top + rect.height / 2 ? 'before' : 'after'

    if (dragOverId !== targetId || dragDropPosition !== position) {
      setDragOverId(targetId)
      setDragDropPosition(position)
    }

    const scrollContainer = targetElement.closest('.custom-scrollbar')
    if (scrollContainer) {
      const containerRect = scrollContainer.getBoundingClientRect()
      const scrollThreshold = 30
      if (e.clientY < containerRect.top + scrollThreshold) {
        scrollContainer.scrollTop -= 10
      } else if (e.clientY > containerRect.bottom - scrollThreshold) {
        scrollContainer.scrollTop += 10
      }
    }
  }

  const handleDragEnd = () => {
    setDraggedId(null)
    setDragOverId(null)
    setDragDropPosition(null)
    setTouchDragPreview(null)
    touchDragRef.current = null
  }

  const handleTouchStart = (e: React.TouchEvent, collection: FavoriteCollection) => {
    if (!(e.target as HTMLElement).closest('[data-drag-handle]')) return
    const touch = e.touches[0]
    const rect = e.currentTarget.getBoundingClientRect()

    e.preventDefault()
    e.stopPropagation()
    touchDragRef.current = { id: collection.id, startX: touch.clientX, startY: touch.clientY, moved: false }
    setDraggedId(collection.id)
    setTouchDragPreview({
      label: collection.name,
      x: touch.clientX,
      y: touch.clientY,
      width: rect.width,
      height: rect.height,
      offsetX: touch.clientX - rect.left,
      offsetY: touch.clientY - rect.top,
    })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    const drag = touchDragRef.current
    if (!drag) return
    const touch = e.touches[0]

    if (!drag.moved) {
      if (Math.abs(touch.clientX - drag.startX) > 5 || Math.abs(touch.clientY - drag.startY) > 5) {
        drag.moved = true
      } else {
        return
      }
    }

    e.preventDefault()
    setTouchDragPreview((current) => current ? { ...current, x: touch.clientX, y: touch.clientY } : current)

    const el = document.elementFromPoint(touch.clientX, touch.clientY)
    const targetElement = el?.closest('[data-collection-id]') as HTMLElement | null
    if (!targetElement) return

    const targetId = targetElement.getAttribute('data-collection-id')
    if (!targetId) return

    const rect = targetElement.getBoundingClientRect()
    const position = touch.clientY < rect.top + rect.height / 2 ? 'before' : 'after'
    setDragOverId(targetId)
    setDragDropPosition(position)

    const scrollContainer = targetElement.closest('.custom-scrollbar') as HTMLElement | null
    if (scrollContainer) {
      const containerRect = scrollContainer.getBoundingClientRect()
      const scrollThreshold = 30
      if (touch.clientY < containerRect.top + scrollThreshold) {
        scrollContainer.scrollTop -= 10
      } else if (touch.clientY > containerRect.bottom - scrollThreshold) {
        scrollContainer.scrollTop += 10
      }
    }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const drag = touchDragRef.current
    if (!drag) return
    if (drag.moved && dragOverId && dragOverId !== drag.id) {
      e.preventDefault()
      const sourceId = drag.id
      const targetId = dragOverId

      const sourceIndex = selectableCollections.findIndex((c) => c.id === sourceId)
      const targetIndex = selectableCollections.findIndex((c) => c.id === targetId)
      if (sourceIndex >= 0 && targetIndex >= 0) {
        const newCollections = [...selectableCollections]
        const [removed] = newCollections.splice(sourceIndex, 1)

        let newTargetIndex = targetIndex
        if (dragDropPosition === 'after') newTargetIndex++
        if (sourceIndex < targetIndex) newTargetIndex--

        newCollections.splice(newTargetIndex, 0, removed)
        setFavoriteCollections(newCollections)
      }
    }
    handleDragEnd()
  }

  const handleDrop = (e: React.DragEvent, targetId: string) => {
    e.preventDefault()
    e.stopPropagation()
    const sourceId = draggedId || e.dataTransfer.getData('text/plain')
    if (!sourceId || sourceId === targetId) return handleDragEnd()

    const sourceIndex = selectableCollections.findIndex((c) => c.id === sourceId)
    const targetIndex = selectableCollections.findIndex((c) => c.id === targetId)
    if (sourceIndex < 0 || targetIndex < 0) return handleDragEnd()

    const newCollections = [...selectableCollections]
    const [removed] = newCollections.splice(sourceIndex, 1)

    let newTargetIndex = targetIndex
    if (dragDropPosition === 'after') newTargetIndex++
    if (sourceIndex < targetIndex) newTargetIndex--

    newCollections.splice(newTargetIndex, 0, removed)
    setFavoriteCollections(newCollections)
    handleDragEnd()
  }

  const startRename = (e: React.MouseEvent, collection: FavoriteCollection) => {
    e.preventDefault()
    e.stopPropagation()
    setEditingId(collection.id)
    setEditingName(collection.name)
  }

  const confirmRename = () => {
    if (editingId && editingName.trim()) renameFavoriteCollection(editingId, editingName.trim())
    setEditingId(null)
    setEditingName('')
  }

  const handleRenameKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      confirmRename()
    } else if (e.key === 'Escape') {
      e.preventDefault()
      setEditingId(null)
      setEditingName('')
    }
  }

  const handleDelete = (e: React.MouseEvent, collection: FavoriteCollection) => {
    e.preventDefault()
    e.stopPropagation()
    if (collections.length <= 1) return
    const collectionTasks = tasks.filter(t => getTaskFavoriteCollectionIds(t).includes(collection.id))
    const imageCount = new Set(collectionTasks.flatMap((task) => task.outputImages || [])).size
    setConfirmDialog({
      title: '删除收藏夹',
      message: `确定要删除收藏夹「${collection.name}」吗？`,
      checkbox: imageCount > 0
        ? {
            label: `同时删除收藏夹中的图片（${imageCount} 张）`,
            tone: 'danger',
          }
        : undefined,
      action: (deleteImages = false) => {
        void deleteFavoriteCollection(collection.id, deleteImages)
      },
    })
  }

  const handleSetDefault = (e: React.MouseEvent, collection: FavoriteCollection) => {
    e.preventDefault()
    e.stopPropagation()
    if (collection.id === defaultFavoriteCollectionId) {
      setDefaultFavoriteCollectionId(null)
      return
    }
    const current = collections.find((item) => item.id === defaultFavoriteCollectionId)
    if (!current) {
      setDefaultFavoriteCollectionId(collection.id)
      return
    }
    setConfirmDialog({
      title: '修改默认收藏夹',
      message: `确定要将默认收藏夹从「${current.name}」改为「${collection.name}」吗？`,
      action: () => setDefaultFavoriteCollectionId(collection.id),
    })
  }

  return createPortal(
    <div data-no-drag-select className="fixed inset-0 z-[105] flex items-center justify-center p-4 sm:p-0" onClick={closePicker}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-overlay-in" />
      <div ref={modalRef} className="relative z-10 flex max-h-[85vh] w-full max-w-[400px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-200 dark:border-[#333] dark:bg-[#1c1c1e] animate-modal-in" onClick={(e) => e.stopPropagation()}>
        <div className="px-6 pt-6 pb-4 shrink-0 relative border-b border-gray-100 dark:border-[#333]">
          <FavoriteActionButton tooltip="关闭" onClick={closePicker} wrapperClassName="absolute right-5 top-5 inline-flex" className="shrink-0 rounded-full p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/[0.06] dark:hover:text-gray-200">
            <CloseIcon className="h-5 w-5" />
          </FavoriteActionButton>
          <h2 className="mb-2 pr-8 flex items-center gap-2.5 text-lg font-semibold text-gray-800 dark:text-gray-100 leading-snug">
            <FavoriteIcon filled className="h-5 w-5 shrink-0 text-yellow-500" />
            保存到收藏夹
          </h2>
          <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed">
            取消勾选会将任务从对应的收藏夹中移除。
          </p>
        </div>
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden pt-3 pb-1">
          <div className="flex items-center justify-between mb-1.5 px-6 shrink-0">
            <span className="text-[13px] font-medium text-gray-500 dark:text-gray-400">选择要保存的收藏夹</span>
            <div className="flex gap-4">
              <button type="button" onClick={() => setCheckedIds(selectableCollections.map((collection) => collection.id))} className="text-[13px] font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">全选</button>
              <button type="button" onClick={() => setCheckedIds([])} className="text-[13px] font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors">取消</button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar relative">
            {selectableCollections.length === 0 ? (
              <div className="py-8 text-center text-sm text-gray-400 dark:text-gray-500">暂无收藏夹</div>
            ) : selectableCollections.map((collection) => {
              const isDefault = collection.id === defaultFavoriteCollectionId
              const canDelete = collections.length > 1
              return (
              <div
                key={collection.id}
                data-collection-id={collection.id}
                draggable={editingId !== collection.id}
                onDragStart={(e) => handleDragStart(e, collection.id)}
                onDragEnd={handleDragEnd}
                onTouchStart={(e) => handleTouchStart(e, collection)}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleDragEnd}
                onClick={(e) => {
                  const target = e.target as HTMLElement
                  if (editingId === collection.id || target.closest('button,input,[data-drag-handle]')) return
                  toggleChecked(collection.id, !checkedIds.includes(collection.id))
                }}
                className={`group relative flex items-center justify-between transition-colors ${
                  draggedId === collection.id ? 'opacity-40 bg-gray-100 dark:bg-white/[0.04]' : 'hover:bg-gray-50 dark:hover:bg-white/[0.04]'
                }`}
                onDragOver={(e) => handleDragOver(e, collection.id)}
                onDrop={(e) => handleDrop(e, collection.id)}
              >
                {dragOverId === collection.id && dragDropPosition === 'before' && draggedId !== collection.id && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-500 z-40 pointer-events-none" />
                )}
                {dragOverId === collection.id && dragDropPosition === 'after' && draggedId !== collection.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 z-40 pointer-events-none" />
                )}
                <div className="flex h-12 cursor-pointer items-center flex-1 min-w-0 gap-3 pl-4 pr-3">
                  <div
                    data-drag-handle
                    className="flex cursor-grab active:cursor-grabbing items-center justify-center text-gray-400 opacity-60 transition-opacity hover:opacity-100 dark:text-gray-500 shrink-0"
                    style={{ touchAction: 'none' }}
                  >
                    <DragHandleIcon className="h-3.5 w-3.5" />
                  </div>
                  <div onClick={(e) => e.stopPropagation()}>
                    <Checkbox
                      checked={checkedIds.includes(collection.id)}
                      onChange={(checked) => toggleChecked(collection.id, checked)}
                      className="shrink-0 scale-110"
                    />
                  </div>
                  {editingId === collection.id ? (
                    <input
                      type="text"
                      className="h-6 min-w-0 flex-1 rounded border border-blue-400/50 bg-white px-1.5 py-0 text-[15px] leading-6 text-gray-900 shadow-sm outline-none focus:border-blue-500 dark:border-white/20 dark:bg-black/20 dark:text-white dark:focus:border-white/40"
                      value={editingName}
                      onChange={(e) => setEditingName(e.target.value)}
                      onKeyDown={handleRenameKeyDown}
                      onClick={(e) => e.stopPropagation()}
                      autoFocus
                      onBlur={confirmRename}
                    />
                  ) : (
                    <span className="min-w-0 flex-1 truncate text-[15px] font-medium text-gray-700 dark:text-gray-200" title={collection.name}>{collection.name}</span>
                  )}
                </div>
                <div className={`flex shrink-0 items-center justify-end gap-2 overflow-hidden pr-4 transition-all duration-150 ${editingId === collection.id ? 'w-12' : 'w-28'}`}>
                    {editingId === collection.id ? (
                      <FavoriteActionButton
                        tooltip="确认"
                        onMouseDown={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          confirmRename()
                        }}
                        className="p-1.5 hover:bg-gray-200 dark:hover:bg-white/10 rounded-md text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </FavoriteActionButton>
                    ) : (
                      <>
                        <FavoriteActionButton tooltip={isDefault ? '取消默认收藏夹' : '设为默认收藏夹'} onClick={(e) => handleSetDefault(e, collection)} className={`p-1.5 hover:bg-gray-200 dark:hover:bg-white/10 rounded-md transition-colors ${isDefault ? 'text-yellow-500 dark:text-yellow-400' : 'text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400'}`}><FavoriteIcon filled={isDefault} className="w-3.5 h-3.5" /></FavoriteActionButton>
                        <FavoriteActionButton tooltip="重命名" onClick={(e) => startRename(e, collection)} className="p-1.5 hover:bg-gray-200 dark:hover:bg-white/10 rounded-md text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"><EditIcon className="w-3.5 h-3.5" /></FavoriteActionButton>
                        <FavoriteActionButton tooltip={canDelete ? '删除' : '至少保留一个收藏夹'} disabled={!canDelete} onClick={(e) => handleDelete(e, collection)} className={`p-1.5 hover:bg-gray-200 dark:hover:bg-white/10 rounded-md transition-colors ${canDelete ? 'text-gray-400 hover:text-red-500 dark:hover:text-red-400' : 'text-gray-300 dark:text-gray-600 cursor-not-allowed'}`}><TrashIcon className="w-3.5 h-3.5" /></FavoriteActionButton>
                      </>
                    )}
                  </div>
              </div>
            )})}
          </div>
        </div>
        <div className="border-t border-gray-200 p-6 dark:border-[#333] shrink-0">
          <div className="flex gap-3">
            <input
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') handleCreate()
              }}
              type="text"
              placeholder="新建收藏夹..."
              className="min-w-0 flex-1 rounded-xl border border-gray-300 bg-transparent px-4 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-white/10 dark:text-white dark:focus:border-white/30 dark:focus:ring-white/30"
            />
            <button
              type="button"
              onClick={handleCreate}
              disabled={!draft.trim()}
              className="inline-flex items-center justify-center rounded-xl bg-gray-200 px-5 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-white/10 dark:text-gray-300 dark:hover:bg-white/20"
            >
              新建
            </button>
          </div>
          <div className="mt-5 flex gap-4">
            <button type="button" onClick={closePicker} className="flex-1 rounded-xl border border-gray-200 bg-transparent px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors dark:border-white/10 dark:text-gray-200 dark:hover:bg-white/[0.04]">取消</button>
            <button type="button" onClick={handleConfirm} className="flex-1 rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-600 transition-colors shadow-sm border border-transparent">确认</button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}

export function useFavoriteCollectionTitle() {
  const activeFavoriteCollectionId = useStore((s) => s.activeFavoriteCollectionId)
  const collections = useStore((s) => s.favoriteCollections)
  return activeFavoriteCollectionId ? getFavoriteCollectionTitle(activeFavoriteCollectionId, collections) : ''
}

export function ManageCollectionsModal() {
  const open = useStore((s) => s.isManageCollectionsModalOpen)
  const closeManage = useStore((s) => s.closeManageCollectionsModal)
  const collections = useStore((s) => s.favoriteCollections)
  const defaultFavoriteCollectionId = useStore((s) => s.defaultFavoriteCollectionId)
  const setDefaultFavoriteCollectionId = useStore((s) => s.setDefaultFavoriteCollectionId)
  const setFavoriteCollections = useStore((s) => s.setFavoriteCollections)
  const setConfirmDialog = useStore((s) => s.setConfirmDialog)
  const tasks = useStore((s) => s.tasks)

  const [draft, setDraft] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingName, setEditingName] = useState('')
  const modalRef = useRef<HTMLDivElement>(null)

  const [draggedId, setDraggedId] = useState<string | null>(null)
  const [dragOverId, setDragOverId] = useState<string | null>(null)
  const [dragDropPosition, setDragDropPosition] = useState<'before' | 'after' | null>(null)

  const [touchDragPreview, setTouchDragPreview] = useState<{
    label: string
    x: number
    y: number
    width: number
    height: number
    offsetX: number
    offsetY: number
  } | null>(null)
  const touchDragRef = useRef<{ id: string, startX: number, startY: number, moved: boolean } | null>(null)

  const selectableCollections = collections

  useCloseOnEscape(open, closeManage)
  usePreventBackgroundScroll(open, modalRef)

  useEffect(() => {
    if (!open) return
    setDraft('')
    setEditingId(null)
    setEditingName('')
  }, [open])

  useEffect(() => {
    if (!touchDragPreview) return

    const preventTouchScroll = (event: TouchEvent) => {
      event.preventDefault()
    }
    const listenerOptions = { passive: false, capture: true } as AddEventListenerOptions
    const previousOverflow = document.body.style.overflow
    const previousOverscroll = document.body.style.overscrollBehavior

    document.body.style.overflow = 'hidden'
    document.body.style.overscrollBehavior = 'none'
    window.addEventListener('touchmove', preventTouchScroll, listenerOptions)

    return () => {
      document.body.style.overflow = previousOverflow
      document.body.style.overscrollBehavior = previousOverscroll
      window.removeEventListener('touchmove', preventTouchScroll, listenerOptions)
    }
  }, [touchDragPreview])

  if (!open) return null

  const handleCreate = () => {
    if (!draft.trim()) return
    createFavoriteCollection(draft)
    setDraft('')
  }

  const handleDragStart = (e: React.DragEvent, id: string) => {
    setDraggedId(id)
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', id)
  }

  const handleDragOver = (e: React.DragEvent, targetId: string) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'

    const targetElement = e.currentTarget as HTMLElement
    const rect = targetElement.getBoundingClientRect()
    const position = e.clientY < rect.top + rect.height / 2 ? 'before' : 'after'

    if (dragOverId !== targetId || dragDropPosition !== position) {
      setDragOverId(targetId)
      setDragDropPosition(position)
    }

    const scrollContainer = targetElement.closest('.custom-scrollbar')
    if (scrollContainer) {
      const containerRect = scrollContainer.getBoundingClientRect()
      const scrollThreshold = 30
      if (e.clientY < containerRect.top + scrollThreshold) {
        scrollContainer.scrollTop -= 10
      } else if (e.clientY > containerRect.bottom - scrollThreshold) {
        scrollContainer.scrollTop += 10
      }
    }
  }

  const handleDragEnd = () => {
    setDraggedId(null)
    setDragOverId(null)
    setDragDropPosition(null)
    setTouchDragPreview(null)
    touchDragRef.current = null
  }

  const handleTouchStart = (e: React.TouchEvent, collection: FavoriteCollection | { id: string, name: string }) => {
    if (!(e.target as HTMLElement).closest('[data-drag-handle]')) return
    const touch = e.touches[0]
    const rect = e.currentTarget.getBoundingClientRect()

    e.preventDefault()
    e.stopPropagation()
    touchDragRef.current = { id: collection.id, startX: touch.clientX, startY: touch.clientY, moved: false }
    setDraggedId(collection.id)
    setTouchDragPreview({
      label: collection.name,
      x: touch.clientX,
      y: touch.clientY,
      width: rect.width,
      height: rect.height,
      offsetX: touch.clientX - rect.left,
      offsetY: touch.clientY - rect.top,
    })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    const drag = touchDragRef.current
    if (!drag) return
    const touch = e.touches[0]

    if (!drag.moved) {
      if (Math.abs(touch.clientX - drag.startX) > 5 || Math.abs(touch.clientY - drag.startY) > 5) {
        drag.moved = true
      } else {
        return
      }
    }

    e.preventDefault()
    setTouchDragPreview((current) => current ? { ...current, x: touch.clientX, y: touch.clientY } : current)

    const el = document.elementFromPoint(touch.clientX, touch.clientY)
    const targetElement = el?.closest('[data-collection-id]') as HTMLElement | null
    if (!targetElement) return

    const targetId = targetElement.getAttribute('data-collection-id')
    if (!targetId) return

    const rect = targetElement.getBoundingClientRect()
    const position = touch.clientY < rect.top + rect.height / 2 ? 'before' : 'after'
    setDragOverId(targetId)
    setDragDropPosition(position)

    const scrollContainer = targetElement.closest('.custom-scrollbar') as HTMLElement | null
    if (scrollContainer) {
      const containerRect = scrollContainer.getBoundingClientRect()
      const scrollThreshold = 30
      if (touch.clientY < containerRect.top + scrollThreshold) {
        scrollContainer.scrollTop -= 10
      } else if (touch.clientY > containerRect.bottom - scrollThreshold) {
        scrollContainer.scrollTop += 10
      }
    }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const drag = touchDragRef.current
    if (!drag) return
    if (drag.moved && dragOverId && dragOverId !== drag.id) {
      e.preventDefault()
      const sourceId = drag.id
      const targetId = dragOverId

      const sourceIndex = selectableCollections.findIndex((c) => c.id === sourceId)
      const targetIndex = selectableCollections.findIndex((c) => c.id === targetId)
      if (sourceIndex >= 0 && targetIndex >= 0) {
        const newCollections = [...selectableCollections]
        const [removed] = newCollections.splice(sourceIndex, 1)

        let newTargetIndex = targetIndex
        if (dragDropPosition === 'after') newTargetIndex++
        if (sourceIndex < targetIndex) newTargetIndex--

        newCollections.splice(newTargetIndex, 0, removed)
        setFavoriteCollections(newCollections)
      }
    }
    handleDragEnd()
  }

  const handleDrop = (e: React.DragEvent, targetId: string) => {
    e.preventDefault()
    e.stopPropagation()
    const sourceId = draggedId || e.dataTransfer.getData('text/plain')
    if (!sourceId || sourceId === targetId) return handleDragEnd()

    const sourceIndex = selectableCollections.findIndex((c) => c.id === sourceId)
    const targetIndex = selectableCollections.findIndex((c) => c.id === targetId)
    if (sourceIndex < 0 || targetIndex < 0) return handleDragEnd()

    const newCollections = [...selectableCollections]
    const [removed] = newCollections.splice(sourceIndex, 1)

    let newTargetIndex = targetIndex
    if (dragDropPosition === 'after') newTargetIndex++
    if (sourceIndex < targetIndex) newTargetIndex--

    newCollections.splice(newTargetIndex, 0, removed)
    setFavoriteCollections(newCollections)
    handleDragEnd()
  }

  const startRename = (e: React.MouseEvent, collection: { id: string, name: string }) => {
    e.preventDefault()
    e.stopPropagation()
    setEditingId(collection.id)
    setEditingName(collection.name)
  }

  const confirmRename = () => {
    if (editingId && editingName.trim()) renameFavoriteCollection(editingId, editingName.trim())
    setEditingId(null)
    setEditingName('')
  }

  const handleRenameKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      confirmRename()
    } else if (e.key === 'Escape') {
      e.preventDefault()
      setEditingId(null)
      setEditingName('')
    }
  }

  const handleDelete = (e: React.MouseEvent, collection: { id: string, name: string }) => {
    e.preventDefault()
    e.stopPropagation()
    if (collections.length <= 1) return
    const collectionTasks = tasks.filter(t => getTaskFavoriteCollectionIds(t).includes(collection.id))
    const imageCount = new Set(collectionTasks.flatMap((task) => task.outputImages || [])).size
    setConfirmDialog({
      title: '删除收藏夹',
      message: `确定要删除收藏夹「${collection.name}」吗？`,
      checkbox: imageCount > 0
        ? {
            label: `同时删除收藏夹中的图片（${imageCount} 张）`,
            tone: 'danger',
          }
        : undefined,
      action: (deleteImages = false) => {
        void deleteFavoriteCollection(collection.id, deleteImages)
      },
    })
  }

  const handleSetDefault = (e: React.MouseEvent, collection: { id: string, name: string }) => {
    e.preventDefault()
    e.stopPropagation()
    if (collection.id === defaultFavoriteCollectionId) {
      setDefaultFavoriteCollectionId(null)
      return
    }
    const current = collections.find((item) => item.id === defaultFavoriteCollectionId)
    if (!current) {
      setDefaultFavoriteCollectionId(collection.id)
      return
    }
    setConfirmDialog({
      title: '修改默认收藏夹',
      message: `确定要将默认收藏夹从「${current.name}」改为「${collection.name}」吗？`,
      action: () => setDefaultFavoriteCollectionId(collection.id),
    })
  }

  return createPortal(
    <div data-no-drag-select className="fixed inset-0 z-[105] flex items-center justify-center p-4 sm:p-0" onClick={closeManage}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-overlay-in" />
      <div ref={modalRef} className="relative z-10 flex max-h-[85vh] w-full max-w-[400px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-200 dark:border-[#333] dark:bg-[#1c1c1e] animate-modal-in" onClick={(e) => e.stopPropagation()}>
        <div className="px-6 pt-6 pb-4 shrink-0 relative border-b border-gray-100 dark:border-[#333]">
          <FavoriteActionButton tooltip="关闭" onClick={closeManage} wrapperClassName="absolute right-5 top-5 inline-flex" className="shrink-0 rounded-full p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/[0.06] dark:hover:text-gray-200">
            <CloseIcon className="h-5 w-5" />
          </FavoriteActionButton>
          <h2 className="mb-2 pr-8 flex items-center gap-2.5 text-lg font-semibold text-gray-800 dark:text-gray-100 leading-snug">
            管理收藏夹
          </h2>
          <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed">
            在这里管理你的收藏夹列表及排序。
          </p>
        </div>
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden pt-3 pb-1">
          <div className="flex-1 overflow-y-auto custom-scrollbar relative">
            {selectableCollections.length === 0 ? (
              <div className="py-8 text-center text-sm text-gray-400 dark:text-gray-500">暂无收藏夹</div>
            ) : selectableCollections.map((collection) => {
              const isDefault = collection.id === defaultFavoriteCollectionId
              const canDelete = collections.length > 1
              return (
              <div
                key={collection.id}
                data-collection-id={collection.id}
                draggable={editingId !== collection.id}
                onDragStart={(e) => handleDragStart(e, collection.id)}
                onDragEnd={handleDragEnd}
                onTouchStart={(e) => handleTouchStart(e, collection)}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleDragEnd}
                className={`group relative flex items-center justify-between transition-colors ${
                  draggedId === collection.id ? 'opacity-40 bg-gray-100 dark:bg-white/[0.04]' : 'hover:bg-gray-50 dark:hover:bg-white/[0.04]'
                }`}
                onDragOver={(e) => handleDragOver(e, collection.id)}
                onDrop={(e) => handleDrop(e, collection.id)}
              >
                {dragOverId === collection.id && dragDropPosition === 'before' && draggedId !== collection.id && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-500 z-40 pointer-events-none" />
                )}
                {dragOverId === collection.id && dragDropPosition === 'after' && draggedId !== collection.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 z-40 pointer-events-none" />
                )}
                <div className="flex h-12 items-center flex-1 min-w-0 gap-3 pl-4 pr-3">
                  <div
                    data-drag-handle
                    className="flex cursor-grab active:cursor-grabbing items-center justify-center text-gray-400 opacity-60 transition-opacity hover:opacity-100 dark:text-gray-500 shrink-0"
                    style={{ touchAction: 'none' }}
                  >
                    <DragHandleIcon className="h-3.5 w-3.5" />
                  </div>
                  {editingId === collection.id ? (
                    <input
                      type="text"
                      className="h-6 min-w-0 flex-1 rounded border border-blue-400/50 bg-white px-1.5 py-0 text-[15px] leading-6 text-gray-900 shadow-sm outline-none focus:border-blue-500 dark:border-white/20 dark:bg-black/20 dark:text-white dark:focus:border-white/40"
                      value={editingName}
                      onChange={(e) => setEditingName(e.target.value)}
                      onKeyDown={handleRenameKeyDown}
                      onClick={(e) => e.stopPropagation()}
                      autoFocus
                      onBlur={confirmRename}
                    />
                  ) : (
                    <span className="min-w-0 flex-1 truncate text-[15px] font-medium text-gray-700 dark:text-gray-200" title={collection.name}>{collection.name}</span>
                  )}
                </div>
                <div className={`flex shrink-0 items-center justify-end gap-2 overflow-hidden pr-4 transition-all duration-150 ${editingId === collection.id ? 'w-12' : 'w-28'}`}>
                    {editingId === collection.id ? (
                      <FavoriteActionButton
                        tooltip="确认"
                        onMouseDown={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          confirmRename()
                        }}
                        className="p-1.5 hover:bg-gray-200 dark:hover:bg-white/10 rounded-md text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </FavoriteActionButton>
                    ) : (
                      <>
                        <FavoriteActionButton tooltip={isDefault ? '取消默认收藏夹' : '设为默认收藏夹'} onClick={(e) => handleSetDefault(e, collection)} className={`p-1.5 hover:bg-gray-200 dark:hover:bg-white/10 rounded-md transition-colors ${isDefault ? 'text-yellow-500 dark:text-yellow-400' : 'text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400'}`}><FavoriteIcon filled={isDefault} className="w-3.5 h-3.5" /></FavoriteActionButton>
                        <FavoriteActionButton tooltip="重命名" onClick={(e) => startRename(e, collection)} className="p-1.5 hover:bg-gray-200 dark:hover:bg-white/10 rounded-md text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"><EditIcon className="w-3.5 h-3.5" /></FavoriteActionButton>
                        <FavoriteActionButton tooltip={canDelete ? '删除' : '至少保留一个收藏夹'} disabled={!canDelete} onClick={(e) => handleDelete(e, collection)} className={`p-1.5 hover:bg-gray-200 dark:hover:bg-white/10 rounded-md transition-colors ${canDelete ? 'text-gray-400 hover:text-red-500 dark:hover:text-red-400' : 'text-gray-300 dark:text-gray-600 cursor-not-allowed'}`}><TrashIcon className="w-3.5 h-3.5" /></FavoriteActionButton>
                      </>
                    )}
                  </div>
              </div>
            )})}
          </div>
        </div>
        <div className="border-t border-gray-200 p-6 dark:border-[#333] shrink-0">
          <div className="flex gap-3">
            <input
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') handleCreate()
              }}
              type="text"
              placeholder="新建收藏夹..."
              className="min-w-0 flex-1 rounded-xl border border-gray-300 bg-transparent px-4 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-white/10 dark:text-white dark:focus:border-white/30 dark:focus:ring-white/30"
            />
            <button
              type="button"
              onClick={handleCreate}
              disabled={!draft.trim()}
              className="inline-flex items-center justify-center rounded-xl bg-gray-200 px-5 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-white/10 dark:text-gray-300 dark:hover:bg-white/20"
            >
              新建
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
