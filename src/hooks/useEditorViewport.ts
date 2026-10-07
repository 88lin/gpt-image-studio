import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import type { PointerEvent as ReactPointerEvent, RefObject } from 'react'
import {
  clampViewTransform,
  getPinchTransform,
  zoomAtPoint,
  type Point,
  type ViewBounds,
  type ViewTransform,
} from '../lib/viewportTransform'

interface PinchGesture {
  startTransform: ViewTransform
  startCentroid: Point
  startDistance: number
}

interface PanGesture {
  pointerId: number
  startPoint: Point
  startTransform: ViewTransform
}

const DEFAULT_VIEW_TRANSFORM: ViewTransform = { scale: 1, x: 0, y: 0 }

/**
 * 编辑器画布的缩放与平移：Alt / Ctrl + 滚轮缩放，Alt + 拖动平移，触屏双指捏合缩放和平移。
 * frameRef 为画布未缩放时的布局框，viewportRef 为整个可见区域；放大后画布可铺满整个可见区域。
 * 指针事件需先交给 pointerDown / pointerMove / pointerUp，返回值表示是否已被视口手势接管。
 */
export function useEditorViewport(
  frameRef: RefObject<HTMLElement | null>,
  viewportRef: RefObject<HTMLElement | null>,
  active: boolean,
) {
  const transformRef = useRef<ViewTransform>(DEFAULT_VIEW_TRANSFORM)
  const pointersRef = useRef<Map<number, Point>>(new Map())
  const pinchRef = useRef<PinchGesture | null>(null)
  const panRef = useRef<PanGesture | null>(null)
  const [transform, setTransform] = useState<ViewTransform>(DEFAULT_VIEW_TRANSFORM)
  const [isAltPressed, setIsAltPressed] = useState(false)
  const [isPanning, setIsPanning] = useState(false)
  const [frameWidth, setFrameWidth] = useState(0)

  /** 可见区域相对于画布布局框左上角的位置 */
  function getBounds(): ViewBounds {
    const frameRect = frameRef.current!.getBoundingClientRect()
    const viewRect = viewportRef.current!.getBoundingClientRect()
    return { x: viewRect.left - frameRect.left, y: viewRect.top - frameRect.top, width: viewRect.width, height: viewRect.height }
  }

  function getFrameSize() {
    const frame = frameRef.current!
    return { width: frame.clientWidth, height: frame.clientHeight }
  }

  function commit(next = DEFAULT_VIEW_TRANSFORM) {
    const clamped = clampViewTransform(next, getFrameSize(), getBounds())
    transformRef.current = clamped
    setTransform(clamped)
  }

  function getFramePoint(point: Point) {
    const rect = frameRef.current!.getBoundingClientRect()
    return { x: point.x - rect.left, y: point.y - rect.top }
  }

  function beginPinch() {
    const [a, b] = Array.from(pointersRef.current.values())
    pinchRef.current = {
      startTransform: transformRef.current,
      startCentroid: getFramePoint({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }),
      startDistance: Math.hypot(a.x - b.x, a.y - b.y),
    }
  }

  useEffect(() => {
    if (!active) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey) setIsAltPressed(true)
    }
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'Alt') setIsAltPressed(false)
    }
    const handleBlur = () => setIsAltPressed(false)
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    window.addEventListener('blur', handleBlur)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      window.removeEventListener('blur', handleBlur)
    }
  }, [active])

  useLayoutEffect(() => {
    if (!active) return
    const frame = frameRef.current!
    const view = viewportRef.current!

    // React 的 wheel 监听是被动的，无法阻止浏览器缩放，这里改用原生监听
    const handleWheel = (event: WheelEvent) => {
      if (!event.altKey && !event.ctrlKey) return
      event.preventDefault()
      commit(zoomAtPoint(
        transformRef.current,
        getFramePoint({ x: event.clientX, y: event.clientY }),
        transformRef.current.scale * Math.exp(-event.deltaY * 0.002),
        getFrameSize(),
        getBounds(),
      ))
    }
    const observer = new ResizeObserver(() => {
      setFrameWidth(frame.clientWidth)
      commit(transformRef.current)
    })
    setFrameWidth(frame.clientWidth)
    view.addEventListener('wheel', handleWheel, { passive: false })
    observer.observe(frame)
    observer.observe(view)
    return () => {
      view.removeEventListener('wheel', handleWheel)
      observer.disconnect()
    }
  }, [active])

  const pointerDown = (event: ReactPointerEvent<HTMLElement>): 'pan' | 'pinch' | null => {
    if (event.altKey && event.pointerType !== 'touch') {
      panRef.current = {
        pointerId: event.pointerId,
        startPoint: { x: event.clientX, y: event.clientY },
        startTransform: transformRef.current,
      }
      setIsPanning(true)
      return 'pan'
    }

    pointersRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY })
    if (pointersRef.current.size < 2) return null
    beginPinch()
    return 'pinch'
  }

  const pointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    const pan = panRef.current
    if (pan?.pointerId === event.pointerId) {
      commit({
        scale: pan.startTransform.scale,
        x: pan.startTransform.x + event.clientX - pan.startPoint.x,
        y: pan.startTransform.y + event.clientY - pan.startPoint.y,
      })
      return true
    }

    if (pointersRef.current.has(event.pointerId)) {
      pointersRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY })
    }
    const pinch = pinchRef.current
    if (!pinch || pointersRef.current.size < 2) return Boolean(pinch)

    const [a, b] = Array.from(pointersRef.current.values())
    commit(getPinchTransform({
      startTransform: pinch.startTransform,
      startCentroid: pinch.startCentroid,
      nextCentroid: getFramePoint({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }),
      startDistance: pinch.startDistance,
      nextDistance: Math.hypot(a.x - b.x, a.y - b.y),
      viewportSize: getFrameSize(),
      bounds: getBounds(),
    }))
    return true
  }

  const pointerUp = (event: ReactPointerEvent<HTMLElement>) => {
    pointersRef.current.delete(event.pointerId)
    if (pinchRef.current) {
      if (pointersRef.current.size >= 2) beginPinch()
      // 双指抬起一根后，剩下的手指不再作画，直到全部抬起
      else if (pointersRef.current.size === 0) pinchRef.current = null
    }
    if (panRef.current?.pointerId === event.pointerId) {
      panRef.current = null
      setIsPanning(false)
    }
  }

  const isZoomed = transform.scale > 1.01 || Math.abs(transform.x) > 1 || Math.abs(transform.y) > 1

  return {
    transform,
    transformRef,
    isZoomed,
    isAltPressed,
    isPanning,
    /** 画布布局框（未缩放）的宽度 */
    frameWidth,
    /** 是否处于双指手势中（包括刚抬起一根手指的余下阶段） */
    isPinching: () => pinchRef.current != null,
    /** 可见区域中心对应的内容坐标（contentScale 为内容像素与布局框像素之比） */
    getVisibleCenter: (contentScale: number): Point => {
      const b = getBounds()
      const t = transformRef.current
      return {
        x: (b.x + b.width / 2 - t.x) / (t.scale * contentScale),
        y: (b.y + b.height / 2 - t.y) / (t.scale * contentScale),
      }
    },
    commit,
    pointerDown,
    pointerMove,
    pointerUp,
  }
}
