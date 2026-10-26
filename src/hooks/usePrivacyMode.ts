import { useEffect, useMemo } from 'react'
import { useStore } from '../store'
import { getShortcutFromEvent } from '../lib/keyboardShortcut'
import { getPageScroller } from '../lib/pageScroll'
import { isPrivacyHiddenConversation, isPrivacyHiddenTask } from '../lib/privacyMode'
import { setUpdateModalOpen } from './useReleaseUpdates'

// 设置中录制快捷键时不触发隐私模式
let shortcutRecording = false

export function setShortcutRecording(recording: boolean) {
  shortcutRecording = recording
}

/** 全局监听隐私模式快捷键；捕获阶段注册，焦点在输入框中也生效 */
export function usePrivacyModeShortcut() {
  const shortcut = useStore((s) => s.settings.privacyModeShortcut)

  useEffect(() => {
    if (!shortcut) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (shortcutRecording || e.isComposing || getShortcutFromEvent(e) !== shortcut) return
      e.preventDefault()
      e.stopPropagation()
      if (e.repeat) return
      useStore.getState().togglePrivacyMode()
      if (!useStore.getState().privacyMode) return
      setUpdateModalOpen(false)
      getPageScroller().scrollTo({ top: 0 })
    }
    window.addEventListener('keydown', handleKeyDown, true)
    return () => window.removeEventListener('keydown', handleKeyDown, true)
  }, [shortcut])
}

export function useVisibleTasks() {
  const tasks = useStore((s) => s.tasks)
  const privacyMode = useStore((s) => s.privacyMode)
  return useMemo(() => privacyMode ? tasks.filter((task) => !isPrivacyHiddenTask(privacyMode, task)) : tasks, [tasks, privacyMode])
}

export function useVisibleAgentConversations() {
  const conversations = useStore((s) => s.agentConversations)
  const privacyMode = useStore((s) => s.privacyMode)
  return useMemo(() => privacyMode ? conversations.filter((c) => !isPrivacyHiddenConversation(privacyMode, c)) : conversations, [conversations, privacyMode])
}
