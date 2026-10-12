import { useEffect, useState, type RefObject } from 'react'

// 所有卡片共用一个观察器；上下各预留一屏，滚动到达前就开始加载
let observer: IntersectionObserver | null = null
const callbacks = new WeakMap<Element, () => void>()

function getObserver() {
  observer ??= new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      callbacks.get(entry.target)?.()
    }
  }, { rootMargin: '100% 0px' })
  return observer
}

/** 元素首次进入（或接近）可视区域后返回 true，之后保持 true；不支持 IntersectionObserver 时直接为 true */
export function useNearViewport(ref: RefObject<Element | null>) {
  const [near, setNear] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (near || !el) return
    const io = getObserver()
    callbacks.set(el, () => setNear(true))
    io.observe(el)
    return () => {
      io.unobserve(el)
      callbacks.delete(el)
    }
  }, [near, ref])

  return near
}
