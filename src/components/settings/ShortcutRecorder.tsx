import { useEffect, useRef, useState } from 'react'
import { setShortcutRecording } from '../../hooks/usePrivacyMode'
import { formatShortcut, getShortcutFromEvent } from '../../lib/keyboardShortcut'

const IS_MAC = navigator.userAgent.includes('Mac')
// 全局监听会拦截快捷键的默认行为，不能占用全选、复制、粘贴、剪切、撤销和重做
const RESERVED_SHORTCUTS = new Set([
  'Ctrl+A', 'Ctrl+C', 'Ctrl+V', 'Ctrl+X', 'Ctrl+Z', 'Ctrl+Y', 'Ctrl+Shift+Z',
  'Meta+A', 'Meta+C', 'Meta+V', 'Meta+X', 'Meta+Z', 'Shift+Meta+Z',
])
const ACTION_BUTTON_CLASS = 'shrink-0 rounded-xl border border-transparent bg-black/[0.04] px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-black/[0.07] hover:text-gray-900 dark:bg-white/[0.06] dark:text-gray-300 dark:hover:bg-white/[0.1] dark:hover:text-white'

interface ShortcutRecorderProps {
  value: string
  defaultValue: string
  onChange: (value: string) => void
}

export default function ShortcutRecorder({ value, defaultValue, onChange }: ShortcutRecorderProps) {
  const [recording, setRecording] = useState(false)
  const onChangeRef = useRef(onChange)
  onChangeRef.current = onChange

  useEffect(() => {
    if (!recording) return
    setShortcutRecording(true)
    // 捕获阶段拦截，避免 Esc 关闭设置弹窗或按键触发其他快捷操作
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault()
      e.stopPropagation()
      if (e.key === 'Escape' && !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey) {
        setRecording(false)
        return
      }
      const shortcut = getShortcutFromEvent(e)
      if (!shortcut || RESERVED_SHORTCUTS.has(shortcut)) return
      onChangeRef.current(shortcut)
      setRecording(false)
    }
    window.addEventListener('keydown', handleKeyDown, true)
    return () => {
      setShortcutRecording(false)
      window.removeEventListener('keydown', handleKeyDown, true)
    }
  }, [recording])

  return (
    <div className="flex shrink-0 items-center gap-2">
      <button
        type="button"
        onClick={() => setRecording((prev) => !prev)}
        onBlur={() => setRecording(false)}
        className={`min-w-[7.5rem] shrink-0 rounded-xl border px-3 py-1.5 text-xs font-medium tabular-nums transition ${
          recording
            ? 'border-blue-400 bg-blue-50 text-blue-600 dark:border-blue-400/60 dark:bg-blue-500/10 dark:text-blue-300'
            : 'border-transparent bg-black/[0.04] text-gray-700 hover:bg-black/[0.07] dark:bg-white/[0.06] dark:text-gray-200 dark:hover:bg-white/[0.1]'
        }`}
      >
        {recording ? '请按下快捷键' : value ? formatShortcut(value, IS_MAC) : '未设置'}
      </button>
      {value !== defaultValue && (
        <button type="button" onClick={() => onChange(defaultValue)} className={ACTION_BUTTON_CLASS}>
          默认
        </button>
      )}
      {value && (
        <button type="button" onClick={() => onChange('')} className={ACTION_BUTTON_CLASS}>
          清除
        </button>
      )}
    </div>
  )
}
