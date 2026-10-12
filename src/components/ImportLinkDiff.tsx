import type { describeImportLink, ImportLinkDiffValue } from '../lib/importLink'
import { useTooltip } from '../hooks/useTooltip'
import ViewportTooltip from './ViewportTooltip'

const KEY_REUSE_HINT = '将继续使用该配置已保存的 API Key，并发送到新的 API 地址，请确认该地址可信。'

// 字面值用等宽字体；程序生成的固定标签用常规字体；说明性占位值再加斜体弱化
const valueClass = (value: ImportLinkDiffValue) => `min-w-0 break-all ${value.hint ? 'font-sans italic opacity-80' : value.fixed ? 'font-sans' : ''}`

/** 地址变了而继续使用已保存的 Key 时，标题旁的提示图标；气泡通过 portal 显示，不会被滚动区域裁切 */
function KeyReuseHint() {
  const tooltip = useTooltip()
  return (
    <button
      type="button"
      aria-label={KEY_REUSE_HINT}
      className="mt-0.5 shrink-0 text-orange-500 transition hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300"
      {...tooltip.handlers}
      onClick={() => {
        tooltip.handlers.onClick()
        tooltip.show()
      }}
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </svg>
      <ViewportTooltip visible={tooltip.visible} className="max-w-[16rem] leading-relaxed">
        {KEY_REUSE_HINT}
      </ViewportTooltip>
    </button>
  )
}

/** 导入确认框中的配置变化，按上下 diff 展示；文本均已在 describeImportLink 中做过安全处理，这里只按原样显示 */
export default function ImportLinkDiff({ desc }: { desc: ReturnType<typeof describeImportLink> }) {
  return (
    <div className="space-y-3 text-sm">
      {desc.notes.map((note) => (
        <p key={note} className="text-gray-500 dark:text-gray-400 break-all">{note}</p>
      ))}
      {desc.groups.map((group, idx) => (
        <div key={idx} className="rounded-2xl border border-gray-200/70 p-3 dark:border-white/[0.08]">
          <div className="mb-2 flex items-start gap-1.5 font-semibold text-gray-700 dark:text-gray-200">
            <span className="min-w-0 break-all">{group.title}</span>
            {group.keyReuse && <KeyReuseHint />}
          </div>
          <div className="space-y-2">
            {group.rows.map((row) => (
              <div key={row.label}>
                <div className="mb-1 text-xs text-gray-400 dark:text-gray-500">{row.label}</div>
                <div className="overflow-hidden rounded-lg font-mono text-xs leading-relaxed">
                  {row.before && (
                    <div className="flex gap-1.5 bg-red-50 px-2 py-1 text-red-600 dark:bg-red-500/10 dark:text-red-400">
                      <span className="shrink-0 select-none">-</span>
                      <span className={valueClass(row.before)}>{row.before.text}</span>
                    </div>
                  )}
                  {row.after && (
                    <div className="flex gap-1.5 bg-green-50 px-2 py-1 text-green-600 dark:bg-green-500/10 dark:text-green-400">
                      <span className="shrink-0 select-none">+</span>
                      <span className={valueClass(row.after)}>{row.after.text}</span>
                    </div>
                  )}
                  {row.note && (
                    <div className="bg-gray-50 px-2 py-1 font-sans text-gray-500 dark:bg-white/[0.04] dark:text-gray-400">
                      {row.note}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
