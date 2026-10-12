import { useCallback, useLayoutEffect, useRef, useState, type RefObject } from 'react'
import { getVisibleRange, type GridMetrics } from '../lib/virtualGrid'

// 首次测量前按单列、卡片默认高度估算，挂载后在绘制前就会用实际测量值修正
const INITIAL_METRICS: GridMetrics = { columns: 1, rowHeight: 162, rowGap: 16, columnGap: 16, width: 0 }

/**
 * 窗口滚动的固定行高网格虚拟列表：只渲染视口及上下各一屏内的行，其余用网格的上下 padding 撑开。
 * 列数、行高、间距都从实际渲染的网格读取，响应式断点只由 CSS 决定。
 */
export function useVirtualGrid(gridRef: RefObject<HTMLElement | null>, count: number) {
  const metricsRef = useRef(INITIAL_METRICS)
  // 视口顶部所在行的首个下标及视口顶部相对该行的偏移，列数或行高变化时据此保持阅读位置
  const anchorRef = useRef<{ index: number; offset: number } | null>(null)
  const countRef = useRef(count)
  countRef.current = count
  const [range, setRange] = useState(() => getVisibleRange(count, INITIAL_METRICS, 0, window.innerHeight, window.innerHeight))

  const update = useCallback(() => {
    const grid = gridRef.current
    if (!grid) return
    const m = metricsRef.current
    const vh = window.innerHeight
    const viewTop = -grid.getBoundingClientRect().top
    const stride = m.rowHeight + m.rowGap
    const row = Math.floor(viewTop / stride)
    anchorRef.current = viewTop > 0 ? { index: row * m.columns, offset: viewTop - row * stride } : null
    const next = getVisibleRange(countRef.current, m, viewTop, viewTop + vh, vh)
    setRange((prev) => prev.startIndex === next.startIndex && prev.endIndex === next.endIndex
      && prev.paddingTop === next.paddingTop && prev.paddingBottom === next.paddingBottom ? prev : next)
  }, [gridRef])

  const measure = useCallback(() => {
    const grid = gridRef.current
    if (!grid) return
    const style = getComputedStyle(grid)
    const prev = metricsRef.current
    const next = {
      columns: style.gridTemplateColumns.split(' ').length,
      rowHeight: grid.firstElementChild?.getBoundingClientRect().height || prev.rowHeight,
      rowGap: parseFloat(style.rowGap) || 0,
      columnGap: parseFloat(style.columnGap) || 0,
      width: grid.clientWidth,
    }
    metricsRef.current = next
    const anchor = anchorRef.current
    if (anchor && (next.columns !== prev.columns || next.rowHeight !== prev.rowHeight || next.rowGap !== prev.rowGap)) {
      // 让原先位于视口顶部的那一行在新布局下仍停在视口顶部附近
      const target = Math.floor(anchor.index / next.columns) * (next.rowHeight + next.rowGap) + anchor.offset
      window.scrollBy(0, target + grid.getBoundingClientRect().top)
    }
    update()
  }, [gridRef, update])

  const hasItems = count > 0
  useLayoutEffect(() => {
    const grid = gridRef.current
    if (!hasItems || !grid) return
    measure()
    // 网格宽度（窗口宽度、列数）或卡片高度变化时重新测量；只改窗口高度时由 resize 事件处理
    const ro = new ResizeObserver(measure)
    ro.observe(grid)
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      // 列表清空期间布局可能变化，旧锚点不再可信，恢复时不应据此滚动
      anchorRef.current = null
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', measure)
    }
  }, [gridRef, hasItems, measure, update])

  useLayoutEffect(() => update(), [count, update])

  return { ...range, metricsRef }
}
