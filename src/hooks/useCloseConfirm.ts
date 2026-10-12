import { useEffect } from 'react'
import { useStore } from '../store'
import { hasInterruptibleOperations } from '../lib/dataOperations'
import { isTauri } from '../lib/platform'
import { setTauriCloseGuard } from '../lib/tauriStorage'

// AppState 未导出，从 store 推导确认框类型
type ConfirmDialogState = NonNullable<ReturnType<typeof useStore.getState>['confirmDialog']>

/**
 * 客户端关闭窗口时，如有关闭后无法恢复的任务或数据操作，先弹出确认。
 * 关闭确认可能被剪贴板导入等其他确认框替换，此时视为取消，用户再点一次关闭即可
 */
export function useCloseConfirm() {
  useEffect(() => {
    if (!isTauri) return
    let waiting = false

    setTauriCloseGuard(async () => {
      const state = useStore.getState()
      if (!hasInterruptibleOperations(state.tasks, state.agentConversations, state.batchProgress)) return true
      // 确认仍在等待时再次请求关闭，直接关闭（即连点两次关闭会跳过确认，这是有意为之）：确认框可能因渲染异常没有显示出来，否则窗口将无法关闭
      if (waiting) return true

      let confirmed = false
      const dialog: ConfirmDialogState = {
        title: '关闭客户端',
        message: '当前有任务或数据操作正在进行，关闭后会被中断。确定要关闭吗？',
        confirmText: '关闭',
        tone: 'warning',
        action: () => { confirmed = true },
      }
      waiting = true
      state.setConfirmDialog(dialog)
      // 取消、按 Esc、点击遮罩或被其他对话框替换时都视为不关闭
      await new Promise<void>((resolve) => {
        const unsubscribe = useStore.subscribe((s) => {
          if (s.confirmDialog === dialog) return
          unsubscribe()
          resolve()
        })
      })
      waiting = false
      return confirmed
    })
  }, [])
}
