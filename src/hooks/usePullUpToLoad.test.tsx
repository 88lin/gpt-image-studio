// @vitest-environment jsdom

import { act, useRef } from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { usePullUpToLoad, WHEEL_IDLE_MS } from './usePullUpToLoad'

;(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true

let root: Root
let container: HTMLDivElement
const onTrigger = vi.fn()

function Harness() {
  const ref = useRef<HTMLDivElement>(null)
  usePullUpToLoad(ref, onTrigger)
  return <div ref={ref} data-testid="scroll" />
}

// jsdom 中 scrollTop、clientHeight、scrollHeight 都是 0，元素始终处于底部
function wheel(deltaY: number, deltaMode = 0) {
  const el = container.querySelector('[data-testid="scroll"]')!
  act(() => {
    el.dispatchEvent(new WheelEvent('wheel', { deltaY, deltaMode, bubbles: true, cancelable: true }))
  })
}

function wait(ms: number) {
  act(() => {
    vi.advanceTimersByTime(ms)
  })
}

beforeEach(() => {
  vi.useFakeTimers()
  onTrigger.mockReset()
  container = document.createElement('div')
  document.body.appendChild(container)
  root = createRoot(container)
  act(() => root.render(<Harness />))
})

afterEach(() => {
  act(() => root.unmount())
  container.remove()
  vi.useRealTimers()
})

describe('usePullUpToLoad 滚轮', () => {
  it('Chrome 鼠标逐格滚两格（间隔 400ms）触发，一格不触发', () => {
    wheel(100)
    wait(400)
    expect(onTrigger).not.toHaveBeenCalled()
    wheel(100)
    expect(onTrigger).toHaveBeenCalledTimes(1)
  })

  it('Firefox 按行滚动两格触发', () => {
    wheel(3, 1)
    wait(400)
    wheel(3, 1)
    expect(onTrigger).toHaveBeenCalledTimes(1)
  })

  it('一格后停顿超过手势间隔会回弹，不累计', () => {
    wheel(100)
    wait(WHEEL_IDLE_MS + 50)
    wheel(100)
    expect(onTrigger).not.toHaveBeenCalled()
  })

  it('触发后同一手势中的后续滚动（惯性）不再触发', () => {
    for (let i = 0; i < 40; i += 1) {
      wheel(30)
      wait(16)
    }
    expect(onTrigger).toHaveBeenCalledTimes(1)
  })
})
