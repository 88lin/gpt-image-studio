import { describe, expect, it } from 'vitest'
import { normalizeBatchPromptConcurrency, runWithConcurrency, splitBatchPrompts } from './batchPrompts'

describe('splitBatchPrompts', () => {
  it('splits prompts by two or more blank lines', () => {
    expect(splitBatchPrompts('a\n\n\nb\n\n\n\nc')).toEqual(['a', 'b', 'c'])
    expect(splitBatchPrompts('a\r\n\r\n\r\nb')).toEqual(['a', 'b'])
    expect(splitBatchPrompts('a\n  \n\t\nb')).toEqual(['a', 'b'])
  })

  it('keeps single blank lines inside a prompt', () => {
    expect(splitBatchPrompts('a\n\n[image 1] notes:\n1. x\n\n\nb')).toEqual(['a\n\n[image 1] notes:\n1. x', 'b'])
  })

  it('drops empty prompts', () => {
    expect(splitBatchPrompts('\n\n\n a \n\n\n\n\n\n')).toEqual(['a'])
  })
})

describe('normalizeBatchPromptConcurrency', () => {
  it('keeps at least one without an upper limit', () => {
    expect(normalizeBatchPromptConcurrency(0)).toBe(1)
    expect(normalizeBatchPromptConcurrency(99)).toBe(99)
    expect(normalizeBatchPromptConcurrency('3')).toBe(10)
    expect(normalizeBatchPromptConcurrency(4.6)).toBe(5)
  })
})

describe('runWithConcurrency', () => {
  it('never exceeds the limit and processes every item', async () => {
    let active = 0
    let peak = 0
    const done: number[] = []
    await runWithConcurrency([1, 2, 3, 4, 5], 2, async (item) => {
      active += 1
      peak = Math.max(peak, active)
      await new Promise((resolve) => setTimeout(resolve, 5))
      active -= 1
      done.push(item)
    })
    expect(peak).toBe(2)
    expect(done.sort()).toEqual([1, 2, 3, 4, 5])
  })

  it('stops starting new items once requested', async () => {
    const started: number[] = []
    let stop = false
    await runWithConcurrency([1, 2, 3, 4], 1, async (item) => {
      started.push(item)
      if (item === 2) stop = true
    }, () => stop)
    expect(started).toEqual([1, 2])
  })
})
