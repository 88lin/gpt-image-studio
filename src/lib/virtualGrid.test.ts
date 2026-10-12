import { describe, expect, it } from 'vitest'
import { getIndexesInRect, getVisibleRange } from './virtualGrid'

const m = { columns: 3, rowHeight: 100, rowGap: 10, columnGap: 10, width: 320 }

describe('getVisibleRange', () => {
  it('只渲染视口及上下 overscan 范围内的行，占位加已渲染行等于完整高度', () => {
    // 100 项共 34 行，行距 110；视口 1100~1650，上下各多 550
    const r = getVisibleRange(100, m, 1100, 1650, 550)
    expect(r).toEqual({ startIndex: 15, endIndex: 60, paddingTop: 550, paddingBottom: 14 * 110 })
    const rendered = (r.endIndex - r.startIndex) / 3
    expect(r.paddingTop + rendered * 110 - 10 + r.paddingBottom).toBe(34 * 110 - 10)
  })

  it('顶部和底部不越界，最后一行不满时截到总数', () => {
    expect(getVisibleRange(100, m, -200, 300, 300)).toMatchObject({ startIndex: 0, endIndex: 18, paddingTop: 0 })
    expect(getVisibleRange(100, m, 3500, 4000, 500)).toMatchObject({ startIndex: 81, endIndex: 100, paddingBottom: 0 })
  })

  it('网格完全在视口外时仍渲染一行，保证总高度正确', () => {
    const below = getVisibleRange(100, m, -5000, -4000, 500)
    expect(below).toEqual({ startIndex: 0, endIndex: 3, paddingTop: 0, paddingBottom: 33 * 110 })
    const above = getVisibleRange(100, m, 9000, 9500, 500)
    expect(above).toEqual({ startIndex: 99, endIndex: 100, paddingTop: 33 * 110, paddingBottom: 0 })
  })

  it('没有项目时返回空区间', () => {
    expect(getVisibleRange(0, m, 0, 500, 500)).toEqual({ startIndex: 0, endIndex: 0, paddingTop: 0, paddingBottom: 0 })
  })
})

describe('getIndexesInRect', () => {
  it('返回与矩形相交的卡片，落在间距里的部分不算', () => {
    // 列宽 100，第二列 110~210，第二行 110~210
    expect(getIndexesInRect(100, m, { left: 50, top: 50, right: 150, bottom: 150 })).toEqual([0, 1, 3, 4])
    expect(getIndexesInRect(100, m, { left: 102, top: 102, right: 108, bottom: 108 })).toEqual([])
    expect(getIndexesInRect(100, m, { left: 0, top: 0, right: 320, bottom: 5 })).toEqual([0, 1, 2])
  })

  it('跨越大量未渲染的行时也能选中，并截到总数', () => {
    const ids = getIndexesInRect(10, m, { left: 0, top: 0, right: 50, bottom: 10000 })
    expect(ids).toEqual([0, 3, 6, 9])
    expect(getIndexesInRect(10, m, { left: 300, top: 330, right: 320, bottom: 10000 })).toEqual([])
  })
})
