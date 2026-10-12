import { create } from 'zustand'

/** 进度单位：决定进度条下方的计数文案；省略时只显示阶段 */
export type DataProgressUnit = 'image' | 'file' | 'byte'

export interface DataProgress {
  mode: 'export' | 'import'
  stage: string
  done: number
  /** 0 表示总量未知，显示不确定进度 */
  total: number
  unit?: DataProgressUnit
  /** 当前阶段能否取消；导入写入数据库后不可取消，避免留下半份数据 */
  cancelable: boolean
}

// 独立的小 store，只有进度弹窗订阅，导出导入过程中不会让设置弹窗重渲染
export const useDataProgress = create<{ progress: DataProgress | null }>(() => ({ progress: null }))

// 同一阶段内的计数更新至多每 100ms 写一次 store，避免逐张图片触发渲染
const THROTTLE_MS = 100

let controller: AbortController | null = null
let lastEmitAt = 0

/** 开始一次导出或导入，返回用于检查是否已取消的 signal */
export function startDataProgress(mode: DataProgress['mode'], cancelable: boolean) {
  controller = new AbortController()
  lastEmitAt = Date.now()
  useDataProgress.setState({ progress: { mode, stage: '准备中', done: 0, total: 0, cancelable } })
  return controller.signal
}

/** 更新阶段与计数；阶段、单位变化或已完成时立即更新，其余按 THROTTLE_MS 节流 */
export function updateDataProgress(stage: string, done = 0, total = 0, unit?: DataProgressUnit) {
  const prev = useDataProgress.getState().progress
  if (!prev) return
  const now = Date.now()
  const changed = prev.stage !== stage || prev.unit !== unit || prev.total !== total
  if (!changed && done < total && now - lastEmitAt < THROTTLE_MS) return
  lastEmitAt = now
  useDataProgress.setState({ progress: { ...prev, stage, done, total, unit } })
}

export function setDataProgressCancelable(cancelable: boolean) {
  const prev = useDataProgress.getState().progress
  if (prev && prev.cancelable !== cancelable) useDataProgress.setState({ progress: { ...prev, cancelable } })
}

/** 用户点击取消；仅在当前阶段允许取消时生效 */
export function cancelDataProgress() {
  if (!useDataProgress.getState().progress?.cancelable) return
  controller?.abort()
}

export function endDataProgress() {
  controller = null
  useDataProgress.setState({ progress: null })
}
