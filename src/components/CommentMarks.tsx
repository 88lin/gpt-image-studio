import type { HTMLAttributes } from 'react'

export const COMMENT_PIN_SIZE = 26

/** 评论气泡，左下尖角指向评论位置；画板与图片预览共用 */
export function CommentPin({ index, active = false, className = '', style, ...props }: HTMLAttributes<HTMLDivElement> & { index: number; active?: boolean }) {
  return (
    <div
      {...props}
      // 选中时以尖角为原点放大，尖角位置不变；深色模式下描边减淡，避免过亮
      className={`flex origin-bottom-left select-none items-center justify-center rounded-full rounded-bl-[3px] bg-blue-500 text-[11px] font-semibold tabular-nums text-white shadow-[0_2px_6px_rgba(0,0,0,0.25)] ring-2 ring-white transition-transform dark:ring-white/40 ${
        active ? 'scale-110' : ''
      } ${className}`}
      style={{ width: COMMENT_PIN_SIZE, height: COMMENT_PIN_SIZE, ...style }}
    >
      {index + 1}
    </div>
  )
}

/** 缩略图左上角的评论角标，与遮罩的 MASK 角标同款样式（缩略图同样加蓝色描边），className 负责定位 */
export function CommentBadge({ count, className }: { count: number; className: string }) {
  return (
    <span className={`absolute z-10 flex items-center gap-0.5 rounded bg-blue-500/90 px-1 py-0.5 text-[8px] font-bold leading-none text-white backdrop-blur-sm pointer-events-none ${className}`}>
      <svg className="h-2 w-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4 3h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-8l-6 4.5V18H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      </svg>
      {count}
    </span>
  )
}
