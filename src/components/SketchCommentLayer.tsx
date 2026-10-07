import { useRef } from 'react'
import type { PointerEvent as ReactPointerEvent } from 'react'
import type { SketchComment, SketchPoint } from '../lib/sketch'
import { COMMENT_PIN_SIZE, CommentPin } from './CommentMarks'
import { TooltipButton } from './TooltipButton'
import { CheckIcon } from './editor/EditorControls'
import { TrashIcon } from './icons'

const EDITOR_WIDTH = 280
const EDITOR_HEIGHT = 44
const EDITOR_GAP = 8

export interface CommentEditorBounds {
  left: number
  right: number
  top: number
  bottom: number
}

/**
 * 输入框位置：优先放在气泡右侧，其次左侧，左右都放不下（如手机竖屏）时放到气泡下方或上方，
 * 并限制在可见区域内。坐标相对画布布局框。
 */
function getEditorPosition(x: number, y: number, bounds: CommentEditorBounds) {
  const width = Math.min(EDITOR_WIDTH, bounds.right - bounds.left)
  const clampTop = (top: number) => Math.min(Math.max(top, bounds.top), bounds.bottom - EDITOR_HEIGHT)
  const centerTop = clampTop(y - COMMENT_PIN_SIZE / 2 - EDITOR_HEIGHT / 2)
  const rightLeft = x + COMMENT_PIN_SIZE + EDITOR_GAP
  if (rightLeft + width <= bounds.right) return { left: rightLeft, top: centerTop, width }
  const leftLeft = x - EDITOR_GAP - width
  if (leftLeft >= bounds.left) return { left: leftLeft, top: centerTop, width }
  const left = Math.min(Math.max(x + COMMENT_PIN_SIZE / 2 - width / 2, bounds.left), bounds.right - width)
  const below = y + EDITOR_GAP
  return { left, top: clampTop(below + EDITOR_HEIGHT <= bounds.bottom ? below : y - COMMENT_PIN_SIZE - EDITOR_GAP - EDITOR_HEIGHT), width }
}

/**
 * 画板评论气泡层：气泡按屏幕像素固定大小，不随画布缩放；
 * 只有选择工具和评论工具能拖动气泡，评论工具下点击气泡会展开输入框，其余工具下气泡不拦截指针。
 */
export default function SketchCommentLayer({
  comments,
  activeId,
  docSize,
  viewScale,
  offset,
  bounds,
  interactive,
  canOpen,
  toDocPoint,
  onMove,
  onMoveEnd,
  onOpen,
  onChangeText,
  onFinish,
  onDelete,
}: {
  comments: SketchComment[]
  activeId: string | null
  docSize: { width: number; height: number }
  viewScale: number
  /** 画布平移量，气泡位置 = 文档坐标 × viewScale + offset */
  offset: SketchPoint
  /** 输入框可放置的可见区域（相对画布布局框），仅在编辑时提供 */
  bounds: CommentEditorBounds | null
  interactive: boolean
  canOpen: boolean
  toDocPoint: (event: { clientX: number; clientY: number }) => SketchPoint
  onMove: (id: string, x: number, y: number) => void
  onMoveEnd: () => void
  onOpen: (id: string) => void
  onChangeText: (id: string, text: string) => void
  onFinish: () => void
  onDelete: (id: string) => void
}) {
  // offsetX / offsetY 为按下点相对气泡尖角（评论坐标）的偏移，拖动时保持不变，气泡不会跳到指针下
  const dragRef = useRef<{ id: string; startX: number; startY: number; offsetX: number; offsetY: number; moved: boolean } | null>(null)

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>, id: string) => {
    if (event.pointerType !== 'touch' && event.button !== 0) return
    // 不交给画布处理，避免拖动气泡时同时作画
    event.stopPropagation()
    event.currentTarget.setPointerCapture(event.pointerId)
    const rect = event.currentTarget.getBoundingClientRect()
    dragRef.current = { id, startX: event.clientX, startY: event.clientY, offsetX: event.clientX - rect.left, offsetY: event.clientY - rect.bottom, moved: false }
  }

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current
    if (!drag || !event.currentTarget.hasPointerCapture(event.pointerId)) return
    event.stopPropagation()
    if (!drag.moved && Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY) < 4) return
    drag.moved = true
    const point = toDocPoint({ clientX: event.clientX - drag.offsetX, clientY: event.clientY - drag.offsetY })
    onMove(drag.id, Math.min(1, Math.max(0, point.x / docSize.width)), Math.min(1, Math.max(0, point.y / docSize.height)))
  }

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current
    if (!drag) return
    event.stopPropagation()
    dragRef.current = null
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
    if (drag.moved) onMoveEnd()
    else if (canOpen) onOpen(drag.id)
  }

  const activeIndex = comments.findIndex((comment) => comment.id === activeId)
  const active = comments[activeIndex]
  const getPosition = (comment: SketchComment) => ({
    x: comment.x * docSize.width * viewScale + offset.x,
    y: comment.y * docSize.height * viewScale + offset.y,
  })
  const activePosition = active && getPosition(active)
  const editorPosition = activePosition && bounds ? getEditorPosition(activePosition.x, activePosition.y, bounds) : null

  return (
    <>
      {comments.map((comment, idx) => {
        const { x, y } = getPosition(comment)
        return (
          <CommentPin
            key={comment.id}
            index={idx}
            active={comment.id === activeId}
            className={`absolute z-10 touch-none ${interactive ? '' : 'pointer-events-none'}`}
            style={{ left: x, top: y - COMMENT_PIN_SIZE, cursor: canOpen ? 'pointer' : 'grab' }}
            onPointerDown={(event) => handlePointerDown(event, comment.id)}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          />
        )
      })}
      {/* 只渲染一个编辑框，切换评论时复用同一元素，避免卸载触发失焦把新打开的评论关掉 */}
      {active && editorPosition && (
        <div
          className="absolute z-20 flex items-center gap-1 rounded-2xl border border-gray-200/80 bg-white/95 p-1.5 shadow-xl backdrop-blur-md animate-fade-in dark:border-white/[0.08] dark:bg-gray-800/95"
          style={{ ...editorPosition, height: EDITOR_HEIGHT }}
          onPointerDown={(event) => event.stopPropagation()}
          // 点击两侧按钮时不让输入框失焦，由按钮自己决定删除或收起
          onMouseDown={(event) => {
            if (!(event.target instanceof HTMLInputElement)) event.preventDefault()
          }}
        >
          <TooltipButton
            tooltip="删除评论"
            wrapperClassName="relative inline-flex flex-none"
            className="flex h-8 w-8 items-center justify-center rounded-xl text-gray-400 transition hover:bg-red-500/[0.1] hover:text-red-600 dark:hover:bg-red-500/[0.16]"
            onClick={() => onDelete(active.id)}
          >
            <TrashIcon className="h-4 w-4" />
          </TooltipButton>
          <input
            autoFocus
            value={active.text}
            placeholder="添加评论…"
            aria-label={`评论 ${activeIndex + 1}`}
            onChange={(event) => onChangeText(active.id, event.target.value)}
            onBlur={onFinish}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.nativeEvent.isComposing) event.currentTarget.blur()
            }}
            className="min-w-0 flex-1 bg-transparent px-1.5 text-sm text-gray-800 outline-none placeholder:text-gray-400 dark:text-gray-100 dark:placeholder:text-gray-500"
          />
          <TooltipButton
            tooltip="完成"
            wrapperClassName="relative inline-flex flex-none"
            className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500 text-white shadow-sm transition hover:bg-blue-600"
            onClick={onFinish}
          >
            <CheckIcon />
          </TooltipButton>
        </div>
      )}
    </>
  )
}
