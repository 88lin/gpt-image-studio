import { useStore } from '../store'
import { PathBox } from './settings/saveDirMigration'

/** 一项提示：标题、一句话结论，以及可选的路径和补充说明（原因等，每项一段） */
export interface NoticeSection {
  title: string
  message: string
  paths?: Array<[string, string]>
  details?: string[]
}

// 排版与默认保存地址迁移的弹窗一致：路径放在浅底小框里，补充说明另起一段用小字
function SectionBody({ paths = [], details = [] }: Pick<NoticeSection, 'paths' | 'details'>) {
  return (
    <>
      {paths.length > 0 && <PathBox rows={paths} />}
      {details.map((text, idx) => (
        <p key={idx} data-selectable-text className="break-all text-xs leading-relaxed text-gray-500 dark:text-gray-400">
          {text}
        </p>
      ))}
    </>
  )
}

/** 仅客户端：启动时的提示合并到一个弹窗，第一项作为弹窗的标题和正文，其余各项用分隔线和小标题分开 */
export function showStartupNotices(sections: NoticeSection[]) {
  if (!sections.length) return
  const [first, ...rest] = sections
  const hasBody = Boolean(first.paths?.length || first.details?.length || rest.length)
  useStore.getState().setConfirmDialog({
    title: first.title,
    message: first.message,
    content: hasBody
      ? (
        <div className="space-y-3">
          <SectionBody paths={first.paths} details={first.details} />
          {rest.map((section, idx) => (
            <div key={idx} className="space-y-3 border-t border-black/[0.06] pt-3 dark:border-white/[0.08]">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-200">{section.title}</div>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{section.message}</p>
              <SectionBody paths={section.paths} details={section.details} />
            </div>
          ))}
        </div>
      )
      : undefined,
    confirmText: '我知道了',
    showCancel: false,
    tone: 'warning',
  })
}
