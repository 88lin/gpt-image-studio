import type { AppSettings } from '../../types'
import Select from '../Select'
import FontSettingField from './FontSettingField'

interface AppearanceSettingsTabProps {
  draft: AppSettings
  commitSettings: (nextDraft: AppSettings) => void
}

export default function AppearanceSettingsTab({ draft, commitSettings }: AppearanceSettingsTabProps) {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h4 className="text-sm font-bold text-gray-800 dark:text-gray-100">颜色</h4>
        <div className="block">
          <div className="mb-1 flex items-center justify-between gap-3">
            <span className="block text-sm text-gray-600 dark:text-gray-300">颜色模式</span>
            <div className="w-28 shrink-0">
              <Select
                value={draft.colorMode}
                onChange={(val) => commitSettings({ ...draft, colorMode: val as AppSettings['colorMode'] })}
                options={[
                  { label: '跟随系统', value: 'system' },
                  { label: '浅色', value: 'light' },
                  { label: '深色', value: 'dark' },
                ]}
                className="w-full px-3 py-1.5 rounded-xl border border-transparent bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.07] dark:hover:bg-white/[0.1] text-xs transition-all duration-200 text-gray-700 dark:text-gray-200 outline-none"
              />
            </div>
          </div>
          <div data-selectable-text className="text-xs text-gray-500 dark:text-gray-500">
            选择“跟随系统”时，随系统的浅色或深色设置自动切换。
          </div>
        </div>
      </section>
      <section className="space-y-4">
        <h4 className="text-sm font-bold text-gray-800 dark:text-gray-100">字体</h4>
        <FontSettingField
          slot="ui"
          label="界面字体"
          description="内置字体为 HarmonyOS Sans SC；选择“系统字体”时使用系统默认的字体。"
          mode={draft.uiFont}
          name={draft.uiFontName}
          onChange={(mode, name) => commitSettings({ ...draft, uiFont: mode, uiFontName: name })}
        />
        <FontSettingField
          slot="mono"
          label="代码字体"
          description="内置字体为 Maple Mono NF CN，用于代码块。"
          mode={draft.monoFont}
          name={draft.monoFontName}
          onChange={(mode, name) => commitSettings({ ...draft, monoFont: mode, monoFontName: name })}
        />
      </section>
    </div>
  )
}
