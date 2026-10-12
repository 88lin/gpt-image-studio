import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { cancelDataProgress, endDataProgress, setDataProgressCancelable, startDataProgress, updateDataProgress, useDataProgress } from './dataProgress'

describe('dataProgress', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(0)
  })

  afterEach(() => {
    endDataProgress()
    vi.useRealTimers()
  })

  it('同一阶段内按 100ms 节流，阶段变化或完成时立即更新', () => {
    startDataProgress('export', true)
    updateDataProgress('读取图片', 0, 10, 'image')
    expect(useDataProgress.getState().progress).toMatchObject({ stage: '读取图片', done: 0, total: 10 })

    vi.setSystemTime(50)
    updateDataProgress('读取图片', 3, 10, 'image')
    expect(useDataProgress.getState().progress?.done).toBe(0)

    vi.setSystemTime(120)
    updateDataProgress('读取图片', 5, 10, 'image')
    expect(useDataProgress.getState().progress?.done).toBe(5)

    vi.setSystemTime(130)
    updateDataProgress('读取图片', 10, 10, 'image')
    expect(useDataProgress.getState().progress?.done).toBe(10)

    vi.setSystemTime(140)
    updateDataProgress('打包')
    expect(useDataProgress.getState().progress).toMatchObject({ stage: '打包', done: 0, total: 0, unit: undefined })
  })

  it('未开始时忽略更新，结束后清空', () => {
    updateDataProgress('读取图片', 1, 2, 'image')
    expect(useDataProgress.getState().progress).toBeNull()
    startDataProgress('import', true)
    endDataProgress()
    expect(useDataProgress.getState().progress).toBeNull()
  })

  it('仅在可取消阶段响应取消', () => {
    const signal = startDataProgress('import', true)
    setDataProgressCancelable(false)
    cancelDataProgress()
    expect(signal.aborted).toBe(false)

    setDataProgressCancelable(true)
    cancelDataProgress()
    expect(signal.aborted).toBe(true)
  })
})
