import { describe, expect, it } from 'vitest'
import { formatUpdateProgress } from './clientUpdate'

describe('formatUpdateProgress', () => {
  it('已知总大小时显示百分比', () => {
    expect(formatUpdateProgress({ downloaded: 42, total: 100 })).toBe('42%')
    expect(formatUpdateProgress({ downloaded: 100, total: 100 })).toBe('100%')
  })

  it('未知总大小时显示已下载的 MB', () => {
    expect(formatUpdateProgress({ downloaded: 5 * 1024 * 1024, total: null })).toBe('5.0 MB')
  })
})
