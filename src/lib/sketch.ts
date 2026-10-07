import type { ImageComment } from '../types'

export type SketchTool = 'select' | 'pen' | 'text' | 'shape' | 'eraser' | 'comment'

export function createSketchId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

/** 画板中的评论，坐标同样为相对画布宽高的比例，与原图一致 */
export interface SketchComment extends ImageComment {
  id: string
}
export type SketchShapeKind = 'line' | 'arrow' | 'rect' | 'ellipse' | 'triangle' | 'diamond' | 'star' | 'heart'
export type SketchHandle = 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w'

export interface SketchPoint {
  x: number
  y: number
}

export interface SketchBounds {
  x: number
  y: number
  width: number
  height: number
}

/** 像素擦除笔迹，挂在被擦到的元素上，随元素一起移动和缩放 */
export interface SketchEraseStroke {
  width: number
  points: SketchPoint[]
}

interface SketchElementBase {
  id: string
  color: string
  width: number
  erase?: SketchEraseStroke[]
}

export interface SketchPathElement extends SketchElementBase {
  type: 'path'
  points: SketchPoint[]
}

export interface SketchShapeElement extends SketchElementBase {
  type: 'shape'
  shape: SketchShapeKind
  start: SketchPoint
  end: SketchPoint
}

export interface SketchTextElement extends SketchElementBase {
  type: 'text'
  x: number
  y: number
  text: string
  fontSize: number
}

export type SketchElement = SketchPathElement | SketchShapeElement | SketchTextElement

export const SKETCH_SHAPES: SketchShapeKind[] = ['line', 'arrow', 'rect', 'ellipse', 'triangle', 'diamond', 'star', 'heart']
export const SKETCH_HANDLES: SketchHandle[] = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w']
export const SKETCH_FONT_FAMILY = 'system-ui, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif'
export const SKETCH_LINE_HEIGHT = 1.25
export const SKETCH_MIN_STROKE = 2
export const SKETCH_MAX_STROKE = 160

/** 文字字号与粗细滑块共用一个数值，字号范围随粗细范围确定 */
export function getSketchFontSize(strokeWidth: number) {
  return Math.round(16 + strokeWidth * 4)
}

export function getSketchStrokeWidthFromFontSize(fontSize: number) {
  return Math.round((fontSize - 16) / 4)
}

function getRawBounds(points: SketchPoint[]): SketchBounds {
  const xs = points.map((p) => p.x)
  const ys = points.map((p) => p.y)
  const x = Math.min(...xs)
  const y = Math.min(...ys)
  return { x, y, width: Math.max(...xs) - x, height: Math.max(...ys) - y }
}

/** 将图形转换为折线组，绘制与命中检测共用同一份几何数据 */
export function getShapePolylines(el: SketchShapeElement): SketchPoint[][] {
  const { start, end } = el
  if (el.shape === 'line') return [[start, end]]
  if (el.shape === 'arrow') {
    const angle = Math.atan2(end.y - start.y, end.x - start.x)
    const length = Math.hypot(end.x - start.x, end.y - start.y)
    const head = Math.min(length * 0.4, Math.max(16, el.width * 3.5))
    const wing = (angle: number) => ({ x: end.x - head * Math.cos(angle), y: end.y - head * Math.sin(angle) })
    return [[start, end], [wing(angle - Math.PI / 6), end, wing(angle + Math.PI / 6)]]
  }

  const b = getRawBounds([start, end])
  const cx = b.x + b.width / 2
  const cy = b.y + b.height / 2
  const at = (u: number, v: number) => ({ x: b.x + b.width * u, y: b.y + b.height * v })

  switch (el.shape) {
    case 'rect':
      return [[at(0, 0), at(1, 0), at(1, 1), at(0, 1), at(0, 0)]]
    case 'triangle':
      return [[at(0.5, 0), at(1, 1), at(0, 1), at(0.5, 0)]]
    case 'diamond':
      return [[at(0.5, 0), at(1, 0.5), at(0.5, 1), at(0, 0.5), at(0.5, 0)]]
    case 'ellipse':
      return [Array.from({ length: 73 }, (_, i) => {
        const t = (i / 72) * Math.PI * 2
        return { x: cx + (b.width / 2) * Math.cos(t), y: cy + (b.height / 2) * Math.sin(t) }
      })]
    case 'star':
      return [Array.from({ length: 11 }, (_, i) => {
        const t = -Math.PI / 2 + (i * Math.PI) / 5
        const r = i % 2 === 0 ? 1 : 0.382
        // 单位五角星外顶点范围为 x∈[-0.951, 0.951]、y∈[-1, 0.809]，映射到图形包围盒
        return at((r * Math.cos(t) + 0.951) / 1.902, (r * Math.sin(t) + 1) / 1.809)
      })]
    case 'heart':
      return [Array.from({ length: 97 }, (_, i) => {
        const t = (i / 96) * Math.PI * 2
        // 经典心形参数方程，x ∈ [-16, 16]，y ∈ [-17, 12]
        const hx = 16 * Math.sin(t) ** 3
        const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))
        return { x: cx + (hx / 32) * b.width, y: b.y + ((hy + 12) / 29) * b.height }
      })]
  }
}

export function measureTextElement(ctx: CanvasRenderingContext2D, el: SketchTextElement) {
  ctx.save()
  ctx.font = `${el.fontSize}px ${SKETCH_FONT_FAMILY}`
  const lines = el.text.split('\n')
  const width = Math.max(el.fontSize * 0.5, ...lines.map((line) => ctx.measureText(line).width))
  ctx.restore()
  return { width, height: lines.length * el.fontSize * SKETCH_LINE_HEIGHT }
}

export function getElementBounds(el: SketchElement, ctx: CanvasRenderingContext2D): SketchBounds {
  if (el.type === 'text') {
    const size = measureTextElement(ctx, el)
    return { x: el.x, y: el.y, ...size }
  }
  const b = el.type === 'path' ? getRawBounds(el.points) : getRawBounds(getShapePolylines(el).flat())
  const pad = el.width / 2
  return { x: b.x - pad, y: b.y - pad, width: b.width + pad * 2, height: b.height + pad * 2 }
}

function distanceToSegment(p: SketchPoint, a: SketchPoint, b: SketchPoint) {
  const dx = b.x - a.x
  const dy = b.y - a.y
  const lengthSq = dx * dx + dy * dy
  const t = lengthSq === 0 ? 0 : Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / lengthSq))
  return Math.hypot(p.x - (a.x + t * dx), p.y - (a.y + t * dy))
}

function distanceToPolyline(p: SketchPoint, points: SketchPoint[]) {
  if (points.length === 1) return Math.hypot(p.x - points[0].x, p.y - points[0].y)
  let min = Infinity
  for (let i = 1; i < points.length; i++) min = Math.min(min, distanceToSegment(p, points[i - 1], points[i]))
  return min
}

function boundsContain(b: SketchBounds, p: SketchPoint, pad = 0) {
  return p.x >= b.x - pad && p.x <= b.x + b.width + pad && p.y >= b.y - pad && p.y <= b.y + b.height + pad
}

/**
 * 命中检测。选择时封闭图形内部也算命中，橡皮擦只检测笔画轮廓，
 * 避免擦过大矩形内部时把整个图形删掉。
 */
export function hitTestElement(
  el: SketchElement,
  point: SketchPoint,
  tolerance: number,
  ctx: CanvasRenderingContext2D,
  mode: 'select' | 'erase',
) {
  if (el.type === 'text') return boundsContain(getElementBounds(el, ctx), point, tolerance)

  const reach = el.width / 2 + tolerance
  if (el.type === 'path') return distanceToPolyline(point, el.points) <= reach

  const polylines = getShapePolylines(el)
  if (polylines.some((line) => distanceToPolyline(point, line) <= reach)) return true
  return mode === 'select' && el.shape !== 'line' && el.shape !== 'arrow' && boundsContain(getElementBounds(el, ctx), point)
}

export function findTopElementAt(
  elements: SketchElement[],
  point: SketchPoint,
  tolerance: number,
  ctx: CanvasRenderingContext2D,
) {
  for (let i = elements.length - 1; i >= 0; i--) {
    if (hitTestElement(elements[i], point, tolerance, ctx, 'select')) return elements[i]
  }
  return null
}

export function getHandlePoint(bounds: SketchBounds, handle: SketchHandle): SketchPoint {
  const u = handle.includes('w') ? 0 : handle.includes('e') ? 1 : 0.5
  const v = handle.includes('n') ? 0 : handle.includes('s') ? 1 : 0.5
  return { x: bounds.x + bounds.width * u, y: bounds.y + bounds.height * v }
}

/**
 * 按拖动的控制点计算新包围盒，固定对边，不允许翻转。
 * 传入 aspect（宽 / 高）时锁定比例，用于 Shift 等比缩放。
 */
export function resizeBounds(bounds: SketchBounds, handle: SketchHandle, point: SketchPoint, minSize = 8, aspect?: number): SketchBounds {
  let left = bounds.x
  let top = bounds.y
  let right = bounds.x + bounds.width
  let bottom = bounds.y + bounds.height
  if (handle.includes('w')) left = Math.min(point.x, right - minSize)
  if (handle.includes('e')) right = Math.max(point.x, left + minSize)
  if (handle.includes('n')) top = Math.min(point.y, bottom - minSize)
  if (handle.includes('s')) bottom = Math.max(point.y, top + minSize)
  if (!aspect || !Number.isFinite(aspect)) return { x: left, y: top, width: right - left, height: bottom - top }

  const isCorner = handle.length === 2
  const horizontal = handle === 'e' || handle === 'w'
  let width = right - left
  let height = bottom - top
  if (isCorner ? width / height > aspect : horizontal) height = width / aspect
  else width = height * aspect
  return {
    x: handle.includes('w') ? right - width : left,
    y: handle.includes('n') ? bottom - height : top,
    width,
    height,
  }
}

/** Shift 约束：以 origin 为起点，把 point 吸附到 45° 的整数倍方向 */
export function snapToAngle(origin: SketchPoint, point: SketchPoint): SketchPoint {
  const step = Math.PI / 4
  const angle = Math.round(Math.atan2(point.y - origin.y, point.x - origin.x) / step) * step
  const length = Math.hypot(point.x - origin.x, point.y - origin.y)
  return { x: origin.x + length * Math.cos(angle), y: origin.y + length * Math.sin(angle) }
}

export function isLineShape(el: SketchElement): el is SketchShapeElement {
  return el.type === 'shape' && (el.shape === 'line' || el.shape === 'arrow')
}

function mapErase(el: SketchElement, map: (p: SketchPoint) => SketchPoint, widthScale = 1) {
  return el.erase?.map((stroke) => ({ width: stroke.width * widthScale, points: stroke.points.map(map) }))
}

export function moveElement(el: SketchElement, dx: number, dy: number): SketchElement {
  const map = (p: SketchPoint) => ({ x: p.x + dx, y: p.y + dy })
  const erase = mapErase(el, map)
  if (el.type === 'text') return { ...el, erase, x: el.x + dx, y: el.y + dy }
  if (el.type === 'path') return { ...el, erase, points: el.points.map(map) }
  return { ...el, erase, start: map(el.start), end: map(el.end) }
}

/** 将元素从旧包围盒线性映射到新包围盒；退化方向（如水平线的高度）只平移 */
export function transformElement(el: SketchElement, from: SketchBounds, to: SketchBounds, handle: SketchHandle): SketchElement {
  if (el.type === 'text') {
    // 文字等比缩放，并固定被拖动控制点的对角；字号限制在滑块可表示的范围内
    const horizontal = handle === 'e' || handle === 'w'
    const raw = horizontal ? to.width / Math.max(1, from.width) : to.height / Math.max(1, from.height)
    const minScale = getSketchFontSize(SKETCH_MIN_STROKE) / el.fontSize
    const maxScale = getSketchFontSize(SKETCH_MAX_STROKE) / el.fontSize
    const scale = Math.min(maxScale, Math.max(minScale, raw))
    const x = handle.includes('w') ? from.x + from.width * (1 - scale) : from.x
    const y = handle.includes('n') ? from.y + from.height * (1 - scale) : from.y
    const mapText = (p: SketchPoint) => ({ x: x + (p.x - from.x) * scale, y: y + (p.y - from.y) * scale })
    return { ...el, erase: mapErase(el, mapText, scale), x, y, fontSize: el.fontSize * scale }
  }

  const map = (p: SketchPoint) => ({
    x: from.width < 1 ? p.x + to.x - from.x : to.x + ((p.x - from.x) / from.width) * to.width,
    y: from.height < 1 ? p.y + to.y - from.y : to.y + ((p.y - from.y) / from.height) * to.height,
  })
  const erase = mapErase(el, map)
  if (el.type === 'path') return { ...el, erase, points: el.points.map(map) }
  return { ...el, erase, start: map(el.start), end: map(el.end) }
}

/** 包围盒包含了笔画宽度，变换前需要先去掉，以免笔画越缩越偏 */
export function getTransformBounds(el: SketchElement, ctx: CanvasRenderingContext2D): SketchBounds {
  const b = getElementBounds(el, ctx)
  if (el.type === 'text') return b
  const pad = el.width / 2
  return { x: b.x + pad, y: b.y + pad, width: b.width - pad * 2, height: b.height - pad * 2 }
}

export function drawSketchElement(ctx: CanvasRenderingContext2D, el: SketchElement) {
  ctx.save()
  ctx.strokeStyle = el.color
  ctx.fillStyle = el.color
  ctx.lineWidth = el.width
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'

  if (el.type === 'text') {
    ctx.font = `${el.fontSize}px ${SKETCH_FONT_FAMILY}`
    // 按 CSS 行框规则放置基线（字体上下边界在行高内居中），与编辑时的 textarea 完全重合；
    // textBaseline = 'middle' 取的是 em 框中线，中文会整体偏上
    const lineHeight = el.fontSize * SKETCH_LINE_HEIGHT
    const metrics = ctx.measureText(el.text)
    const ascent = metrics.fontBoundingBoxAscent
    const baseline = (lineHeight - ascent - metrics.fontBoundingBoxDescent) / 2 + ascent
    el.text.split('\n').forEach((line, idx) => ctx.fillText(line, el.x, el.y + baseline + idx * lineHeight))
    ctx.restore()
    return
  }

  if (el.type === 'path') {
    const points = el.points
    if (points.length === 1) {
      ctx.beginPath()
      ctx.arc(points[0].x, points[0].y, el.width / 2, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
      return
    }
    // 用中点二次贝塞尔平滑手绘笔迹
    ctx.beginPath()
    ctx.moveTo(points[0].x, points[0].y)
    for (let i = 1; i < points.length - 1; i++) {
      const mid = { x: (points[i].x + points[i + 1].x) / 2, y: (points[i].y + points[i + 1].y) / 2 }
      ctx.quadraticCurveTo(points[i].x, points[i].y, mid.x, mid.y)
    }
    const last = points[points.length - 1]
    ctx.lineTo(last.x, last.y)
    ctx.stroke()
    ctx.restore()
    return
  }

  for (const line of getShapePolylines(el)) {
    ctx.beginPath()
    ctx.moveTo(line[0].x, line[0].y)
    for (const p of line.slice(1)) ctx.lineTo(p.x, p.y)
    ctx.stroke()
  }
  ctx.restore()
}

/** 画板长边像素，空白画板和底图都缩放到这个尺寸，保证笔画粗细观感一致 */
export const SKETCH_LONG_EDGE = 1536

/** 根据当前尺寸参数推导画板比例 */
export function getSketchCanvasSize(size: string, longEdge = SKETCH_LONG_EDGE) {
  const match = /^\s*(\d+)\s*[xX×]\s*(\d+)\s*$/.exec(size)
  const width = match ? Number(match[1]) : 1
  const height = match ? Number(match[2]) : 1
  if (!width || !height) return { width: longEdge, height: longEdge }
  return width >= height
    ? { width: longEdge, height: Math.round((longEdge * height) / width) }
    : { width: Math.round((longEdge * width) / height), height: longEdge }
}

export function drawEraseStroke(ctx: CanvasRenderingContext2D, stroke: SketchEraseStroke) {
  ctx.save()
  ctx.globalCompositeOperation = 'destination-out'
  drawSketchElement(ctx, { id: '', type: 'path', color: '#000', width: stroke.width, points: stroke.points })
  ctx.restore()
}

/** 把带擦除痕迹的元素单独画到临时画布上，返回临时画布在文档中的左上角坐标 */
function renderErasedElement(el: SketchElement, scratch: HTMLCanvasElement) {
  const sctx = scratch.getContext('2d')!
  const b = getElementBounds(el, sctx)
  const x = Math.floor(b.x) - 2
  const y = Math.floor(b.y) - 2
  // 重设尺寸同时会清空画布
  scratch.width = Math.max(1, Math.ceil(b.width) + 4)
  scratch.height = Math.max(1, Math.ceil(b.height) + 4)
  sctx.setTransform(1, 0, 0, 1, -x, -y)
  drawSketchElement(sctx, el)
  for (const stroke of el.erase ?? []) drawEraseStroke(sctx, stroke)
  sctx.setTransform(1, 0, 0, 1, 0, 0)
  return { x, y }
}

/** 带擦除痕迹的元素先画到临时画布再贴回，避免擦掉其他元素 */
export function drawSketchElementWithErase(ctx: CanvasRenderingContext2D, el: SketchElement, scratch: HTMLCanvasElement) {
  if (!el.erase?.length) {
    drawSketchElement(ctx, el)
    return
  }
  const offset = renderErasedElement(el, scratch)
  ctx.drawImage(scratch, offset.x, offset.y)
}

/**
 * 擦除后元素是否还有可见像素；完全擦掉的元素应被移除，避免留下不可见却可选中的对象。
 * probe 需是专用画布：首次取上下文时声明 willReadFrequently，不能与绘制用的临时画布共用。
 */
export function isSketchElementVisible(el: SketchElement, probe: HTMLCanvasElement) {
  const pctx = probe.getContext('2d', { willReadFrequently: true })!
  renderErasedElement(el, probe)
  const data = pctx.getImageData(0, 0, probe.width, probe.height).data
  for (let i = 3; i < data.length; i += 4) {
    if (data[i] > 8) return true
  }
  return false
}
