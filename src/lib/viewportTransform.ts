export interface Point {
  x: number
  y: number
}

export interface Size {
  width: number
  height: number
}

export interface ViewTransform {
  scale: number
  x: number
  y: number
}

/** 可见区域，坐标相对于内容（缩放前）的左上角 */
export interface ViewBounds {
  x: number
  y: number
  width: number
  height: number
}

export interface ClientRectLike {
  left: number
  top: number
  width: number
  height: number
}

const MIN_SCALE = 1
const MAX_SCALE = 8

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

/**
 * 限制视图变换。bounds 为可见区域（默认与内容等大）：
 * 放大后的内容比可见区域大时不能露出空白边，比可见区域小时不能移出可见区域。
 */
export function clampViewTransform(transform: ViewTransform, viewportSize: Size, bounds?: ViewBounds): ViewTransform {
  const scale = clamp(transform.scale, MIN_SCALE, MAX_SCALE)

  if (scale === MIN_SCALE) {
    return { scale, x: 0, y: 0 }
  }

  const b = bounds ?? { x: 0, y: 0, ...viewportSize }
  const clampAxis = (value: number, size: number, start: number, visible: number) => {
    const scaled = size * scale
    return scaled > visible
      ? clamp(value, start + visible - scaled, start)
      : clamp(value, start, start + visible - scaled)
  }

  return {
    scale,
    x: clampAxis(transform.x, viewportSize.width, b.x, b.width),
    y: clampAxis(transform.y, viewportSize.height, b.y, b.height),
  }
}

export function zoomAtPoint(
  transform: ViewTransform,
  point: Point,
  nextScale: number,
  viewportSize: Size,
  bounds?: ViewBounds,
): ViewTransform {
  const localPoint = {
    x: (point.x - transform.x) / transform.scale,
    y: (point.y - transform.y) / transform.scale,
  }
  const scale = clamp(nextScale, MIN_SCALE, MAX_SCALE)

  return clampViewTransform({
    scale,
    x: point.x - localPoint.x * scale,
    y: point.y - localPoint.y * scale,
  }, viewportSize, bounds)
}

export function getPinchTransform(input: {
  startTransform: ViewTransform
  startCentroid: Point
  nextCentroid: Point
  startDistance: number
  nextDistance: number
  viewportSize: Size
  bounds?: ViewBounds
}): ViewTransform {
  const localPoint = {
    x: (input.startCentroid.x - input.startTransform.x) / input.startTransform.scale,
    y: (input.startCentroid.y - input.startTransform.y) / input.startTransform.scale,
  }
  const distanceRatio = input.startDistance > 0 ? input.nextDistance / input.startDistance : 1
  const scale = clamp(input.startTransform.scale * distanceRatio, MIN_SCALE, MAX_SCALE)

  return clampViewTransform({
    scale,
    x: input.nextCentroid.x - localPoint.x * scale,
    y: input.nextCentroid.y - localPoint.y * scale,
  }, input.viewportSize, input.bounds)
}

export function clientPointToCanvasPoint(rect: ClientRectLike, point: Point, canvasSize: Size): Point {
  return {
    x: ((point.x - rect.left) / rect.width) * canvasSize.width,
    y: ((point.y - rect.top) / rect.height) * canvasSize.height,
  }
}

export function getComfortableInitialTransform(
  imageViewportSize: Size,
  editorViewportSize: Size,
  isCompactLayout: boolean,
): ViewTransform {
  if (!isCompactLayout || imageViewportSize.width <= 0 || imageViewportSize.height <= 0) {
    return { scale: MIN_SCALE, x: 0, y: 0 }
  }

  const targetHeight = editorViewportSize.height * 0.42
  const scale = clamp(targetHeight / imageViewportSize.height, MIN_SCALE, 3)
  return zoomAtPoint(
    { scale: MIN_SCALE, x: 0, y: 0 },
    { x: imageViewportSize.width / 2, y: imageViewportSize.height / 2 },
    scale,
    imageViewportSize,
  )
}
