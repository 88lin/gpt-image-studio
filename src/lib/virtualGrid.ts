/** 固定行高网格的布局参数（px），由实际渲染的网格测量得到 */
export interface GridMetrics {
  columns: number
  rowHeight: number
  rowGap: number
  columnGap: number
  width: number
}

/**
 * 计算需要渲染的项目区间：viewTop、viewBottom 是视口相对网格顶部的位置，上下各多渲染 overscan 像素。
 * 至少渲染一行，这样上下占位加上已渲染的行正好等于完整网格的高度（行数 × 行距 − 行间距）。
 */
export function getVisibleRange(count: number, m: GridMetrics, viewTop: number, viewBottom: number, overscan: number) {
  const rows = Math.ceil(count / m.columns)
  if (!rows) return { startIndex: 0, endIndex: 0, paddingTop: 0, paddingBottom: 0 }
  const stride = m.rowHeight + m.rowGap
  const startRow = Math.min(rows - 1, Math.max(0, Math.floor((viewTop - overscan) / stride)))
  const endRow = Math.min(rows, Math.max(startRow + 1, Math.ceil((viewBottom + overscan) / stride)))
  return {
    startIndex: startRow * m.columns,
    endIndex: Math.min(count, endRow * m.columns),
    paddingTop: startRow * stride,
    paddingBottom: (rows - endRow) * stride,
  }
}

/** 与矩形（相对网格左上角）相交的项目下标，按卡片实际占据的区域判断，不含间距 */
export function getIndexesInRect(count: number, m: GridMetrics, rect: { left: number; top: number; right: number; bottom: number }) {
  const stride = m.rowHeight + m.rowGap
  const colWidth = (m.width - (m.columns - 1) * m.columnGap) / m.columns
  const colStride = colWidth + m.columnGap
  const rows = Math.ceil(count / m.columns)
  const firstRow = Math.max(0, Math.floor(rect.top / stride))
  const lastRow = Math.min(rows - 1, Math.floor(rect.bottom / stride))
  const result: number[] = []
  for (let row = firstRow; row <= lastRow; row++) {
    const top = row * stride
    if (!(rect.top < top + m.rowHeight && rect.bottom > top)) continue
    for (let col = 0; col < m.columns; col++) {
      const idx = row * m.columns + col
      if (idx >= count) break
      const left = col * colStride
      if (rect.left < left + colWidth && rect.right > left) result.push(idx)
    }
  }
  return result
}
