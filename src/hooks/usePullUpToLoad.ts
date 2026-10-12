import { useEffect, useRef, useState, type RefObject } from 'react'

// 阻尼后的拉出距离上限与触发阈值（px）；阈值对应实际拉动约 92px
const PULL_MAX = 160
export const PULL_THRESHOLD = 58
// 滚轮事件间隔超过该值视为一次手势结束；需容纳普通鼠标逐格滚动的间隔
export const WHEEL_IDLE_MS = 450
// 单个滚轮事件最多计入的距离：Chrome 一格约 100、Firefox 一格约 48，限制后两格都能跨过阈值、一格都不会
const WHEEL_STEP_MAX = 60

/** 拉得越远越难拉动，距离趋近 PULL_MAX */
function damp(raw: number) {
  return raw / (1 + raw / PULL_MAX)
}

/**
 * 滚动到底部后继续上滑（触屏）或向下滚动（滚轮、触控板），有阻尼地拉出一段距离；
 * 触屏松手时、滚轮累计时超过阈值即调用 onTrigger。
 * 滚轮只在手势开始时已在底部才计入，避免一路滚到底的同一次滚动或惯性直接触发加载。
 */
export function usePullUpToLoad(ref: RefObject<HTMLElement | null>, onTrigger: () => void) {
  const [pull, setPull] = useState(0)
  const [dragging, setDragging] = useState(false)
  const triggerRef = useRef(onTrigger)
  triggerRef.current = onTrigger

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raw = 0
    let lastY = 0
    let wheelActive = false
    let wheelFromBottom = false
    let wheelTimer: ReturnType<typeof setTimeout> | undefined

    const atBottom = () => el.scrollTop + el.clientHeight >= el.scrollHeight - 1
    const move = (delta: number) => {
      raw = Math.max(0, raw + delta)
      setPull(damp(raw))
      setDragging(raw > 0)
    }
    const release = (fire: boolean) => {
      const triggered = fire && damp(raw) >= PULL_THRESHOLD
      raw = 0
      setPull(0)
      setDragging(false)
      if (triggered) triggerRef.current()
    }

    const onWheel = (e: WheelEvent) => {
      const dy = Math.min(e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY, WHEEL_STEP_MAX)
      if (!wheelActive) wheelFromBottom = atBottom()
      wheelActive = true
      clearTimeout(wheelTimer)
      wheelTimer = setTimeout(() => {
        wheelActive = false
        if (raw > 0) release(false)
      }, WHEEL_IDLE_MS)
      if (!wheelFromBottom || (raw === 0 && (dy <= 0 || !atBottom()))) return
      e.preventDefault()
      move(dy)
      if (damp(raw) < PULL_THRESHOLD) return
      // 本次手势剩余的滚动（含惯性）不再计入
      wheelFromBottom = false
      release(true)
    }

    const onTouchStart = (e: TouchEvent) => {
      lastY = e.touches[0]?.clientY ?? 0
    }

    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0]
      if (!touch) return
      const dy = lastY - touch.clientY
      lastY = touch.clientY
      if (raw === 0 && (dy <= 0 || !atBottom())) return
      if (e.cancelable) e.preventDefault()
      move(dy)
    }

    const onTouchEnd = (e: TouchEvent) => {
      if (raw > 0) release(e.type === 'touchend')
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    el.addEventListener('touchend', onTouchEnd)
    el.addEventListener('touchcancel', onTouchEnd)
    return () => {
      clearTimeout(wheelTimer)
      el.removeEventListener('wheel', onWheel)
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
      el.removeEventListener('touchcancel', onTouchEnd)
    }
  }, [ref])

  return { pull, dragging, armed: pull >= PULL_THRESHOLD }
}
