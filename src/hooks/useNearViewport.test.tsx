// @vitest-environment jsdom

import { act, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { describe, expect, it, vi } from 'vitest'

import { useNearViewport } from './useNearViewport'

;(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true

describe('useNearViewport', () => {
  it('共用一个观察器，进入可视区域后保持为 true 并停止观察', () => {
    let trigger: IntersectionObserverCallback = () => {}
    const observe = vi.fn()
    const unobserve = vi.fn()
    const ctor = vi.fn(function (this: object, callback: IntersectionObserverCallback) {
      trigger = callback
      Object.assign(this, { observe, unobserve, disconnect: vi.fn() })
    })
    vi.stubGlobal('IntersectionObserver', ctor)

    const states: Record<string, boolean[]> = { a: [], b: [] }
    function Card({ name }: { name: string }) {
      const ref = useRef<HTMLDivElement>(null)
      states[name].push(useNearViewport(ref))
      return <div ref={ref} data-name={name} />
    }

    const container = document.createElement('div')
    const root = createRoot(container)
    act(() => root.render(<><Card name="a" /><Card name="b" /></>))
    expect(ctor).toHaveBeenCalledOnce()
    expect(observe).toHaveBeenCalledTimes(2)

    const a = container.querySelector('[data-name="a"]')!
    act(() => trigger([{ target: a, isIntersecting: true } as unknown as IntersectionObserverEntry], {} as IntersectionObserver))
    expect(states.a[states.a.length - 1]).toBe(true)
    expect(states.b[states.b.length - 1]).toBe(false)
    expect(unobserve).toHaveBeenCalledWith(a)

    act(() => root.unmount())
    vi.unstubAllGlobals()
  })
})
