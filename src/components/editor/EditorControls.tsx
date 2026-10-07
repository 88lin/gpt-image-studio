import { useRef } from 'react'
import type { PointerEvent as ReactPointerEvent, ReactNode, SVGProps } from 'react'
import { TooltipButton } from '../TooltipButton'

/** 画板与遮罩编辑共用的弹窗外壳、工具按钮样式、粗细滑块和笔刷光标 */

export const EDITOR_ICON_BUTTON_CLASS = 'flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl text-gray-500 transition hover:bg-gray-100 hover:text-gray-800 disabled:pointer-events-none disabled:opacity-30 aria-disabled:pointer-events-none aria-disabled:opacity-30 dark:text-gray-400 dark:hover:bg-white/[0.08] dark:hover:text-gray-100'

export function getEditorToolButtonClass(active: boolean) {
  return `flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl transition-colors disabled:opacity-40 ${
    active
      ? 'bg-white text-blue-500 shadow-sm dark:bg-white/[0.12] dark:text-blue-400 dark:shadow-none'
      : 'text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100'
  }`
}

export function EditorShell({ onBackdropClick, children }: { onBackdropClick: () => void; children: ReactNode }) {
  return (
    <div data-no-drag-select className="fixed inset-0 z-[80] flex items-center justify-center sm:p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-overlay-in" onClick={onBackdropClick} />
      <div className="relative z-10 flex h-full w-full flex-col overflow-hidden bg-white shadow-2xl animate-modal-in dark:bg-gray-900 sm:h-[min(92vh,920px)] sm:max-w-5xl sm:rounded-3xl sm:border sm:border-white/50 sm:ring-1 sm:ring-black/5 sm:dark:border-white/[0.08] sm:dark:ring-white/10">
        {children}
      </div>
    </div>
  )
}

/** 顶部栏：左右两列等宽，保证中间的工具栏始终居中 */
export function EditorTopBar({ left, center, right }: { left: ReactNode; center: ReactNode; right: ReactNode }) {
  return (
    <div className="grid flex-none grid-cols-[1fr_auto_1fr] items-center gap-2 px-3 py-3 sm:px-4">
      <div className="flex min-w-0 items-center gap-0.5">{left}</div>
      <div className="flex items-center gap-0.5 rounded-2xl bg-gray-100/80 p-1 dark:bg-white/[0.06] sm:gap-1">{center}</div>
      <div className="flex min-w-0 items-center justify-end gap-0.5">{right}</div>
    </div>
  )
}

/**
 * 竖向粗细滑块。使用平方映射，小尺寸区间更细腻，同时保留足够大的上限。
 */
export function EditorSizeSlider({
  value,
  min,
  max,
  label,
  displayValue = value,
  disabled = false,
  onChange,
  onAdjustStart,
  onAdjustEnd,
}: {
  value: number
  min: number
  max: number
  label: string
  displayValue?: number
  disabled?: boolean
  onChange: (value: number) => void
  onAdjustStart?: () => void
  onAdjustEnd?: () => void
}) {
  const ratio = Math.sqrt((value - min) / (max - min))
  const pad = 14
  // 当前调节来源：拖动或按住方向键各算一次调节，调用方据此只记一条撤销；两者重叠时以先开始的为准
  const adjustingRef = useRef<'pointer' | 'key' | null>(null)

  const startAdjust = (kind: 'pointer' | 'key') => {
    if (adjustingRef.current) return
    adjustingRef.current = kind
    onAdjustStart?.()
  }

  const endAdjust = (kind: 'pointer' | 'key') => {
    if (adjustingRef.current !== kind) return
    adjustingRef.current = null
    onAdjustEnd?.()
  }

  const updateFromPointer = (event: ReactPointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const next = Math.max(0, Math.min(1, 1 - (event.clientY - rect.top - pad) / (rect.height - pad * 2)))
    onChange(Math.round(min + next * next * (max - min)))
  }

  const finish = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return
    event.currentTarget.releasePointerCapture(event.pointerId)
    endAdjust('pointer')
  }

  return (
    <div className={`absolute left-3 top-1/2 z-10 flex -translate-y-1/2 flex-col items-center gap-2 sm:left-5 ${disabled ? 'pointer-events-none opacity-40' : ''}`}>
      <div
        className="relative h-48 w-9 cursor-ns-resize touch-none select-none rounded-full border border-gray-200/80 bg-white/95 shadow-sm dark:border-white/[0.08] dark:bg-gray-800/95"
        role="slider"
        aria-label={label}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => {
          const step = e.key === 'ArrowUp' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowDown' || e.key === 'ArrowLeft' ? -1 : 0
          if (disabled || !step) return
          e.preventDefault()
          startAdjust('key')
          onChange(Math.min(max, Math.max(min, value + step)))
        }}
        onKeyUp={() => endAdjust('key')}
        onBlur={() => endAdjust('key')}
        // 正在输入文字时点按滑块不抢焦点，可以边打字边调字号；其余情况照常聚焦以便方向键微调
        onMouseDown={(e) => {
          if (document.activeElement instanceof HTMLTextAreaElement) e.preventDefault()
        }}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId)
          startAdjust('pointer')
          updateFromPointer(e)
        }}
        onPointerMove={(e) => {
          if (e.currentTarget.hasPointerCapture(e.pointerId)) updateFromPointer(e)
        }}
        onPointerUp={finish}
        onPointerCancel={finish}
        // 未正常抬起就丢失捕获（如切走窗口）时也要结束调节，否则调用方会一直处于调节状态
        onLostPointerCapture={() => endAdjust('pointer')}
      >
        <div className="absolute bottom-[14px] left-1/2 top-[14px] w-1 -translate-x-1/2 rounded-full bg-gray-200 dark:bg-white/10" />
        <div
          className="absolute left-1/2 h-4 w-4 -translate-x-1/2 translate-y-1/2 rounded-full bg-blue-500 shadow-md ring-2 ring-white dark:ring-gray-800"
          style={{ bottom: `calc(${pad}px + (100% - ${pad * 2}px) * ${ratio})` }}
        />
      </div>
      <span className="min-w-[2.5rem] text-center text-sm font-semibold tabular-nums text-gray-600 dark:text-gray-300">{displayValue}</span>
    </div>
  )
}

/** 放大后右下角的重置视图按钮 */
export function EditorResetViewButton({ onClick }: { onClick: () => void }) {
  return (
    <TooltipButton
      tooltip="重置视图"
      wrapperClassName="absolute bottom-3 right-3 z-10 inline-flex"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200/80 bg-white/95 text-gray-600 shadow-sm transition hover:text-gray-900 dark:border-white/[0.08] dark:bg-gray-800/95 dark:text-gray-300 dark:hover:text-white"
      onClick={onClick}
    >
      <ResetViewIcon />
    </TooltipButton>
  )
}

/** 圆圈 + 准星的笔刷范围预览，坐标为相对画布外框的像素 */
export function BrushCursor({ x, y, size }: { x: number; y: number; size: number }) {
  return (
    <div
      className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2"
      style={{ left: x, top: y, width: Math.max(4, size), height: Math.max(4, size) }}
    >
      <div className="absolute inset-0 rounded-full border border-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.4),inset_0_0_0_1px_rgba(0,0,0,0.4)]" />
      <div className="absolute left-1/2 top-1/2 h-px w-[11px] -translate-x-1/2 -translate-y-1/2 bg-white shadow-[0_0_0_0.5px_rgba(0,0,0,0.55)]" />
      <div className="absolute left-1/2 top-1/2 h-[11px] w-px -translate-x-1/2 -translate-y-1/2 bg-white shadow-[0_0_0_0.5px_rgba(0,0,0,0.55)]" />
    </div>
  )
}

function EditorIcon({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      {children}
    </svg>
  )
}

export function PenIcon() {
  return (
    <EditorIcon>
      <path d="M21.17 6.81a1 1 0 0 0-3.98-3.98L3.84 16.17a2 2 0 0 0-.5.83l-1.32 4.35a.5.5 0 0 0 .62.62l4.35-1.32a2 2 0 0 0 .83-.5z" />
      <path d="m15 5 4 4" />
    </EditorIcon>
  )
}

export function EraserIcon() {
  return (
    <EditorIcon>
      <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21M22 21H7M5 11l9 9" />
    </EditorIcon>
  )
}

export function UndoIcon() {
  return (
    <EditorIcon>
      <path d="M9 14 4 9l5-5" />
      <path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11" />
    </EditorIcon>
  )
}

export function RedoIcon() {
  return (
    <EditorIcon>
      <path d="m15 14 5-5-5-5" />
      <path d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13" />
    </EditorIcon>
  )
}

function ResetViewIcon() {
  return (
    <EditorIcon>
      <path d="M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7" />
    </EditorIcon>
  )
}

export function ClearIcon() {
  return (
    <EditorIcon>
      <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </EditorIcon>
  )
}

export function CheckIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  )
}
