import { describe, expect, it } from 'vitest'
import {
  getShapePolylines,
  getSketchCanvasSize,
  hitTestElement,
  moveElement,
  resizeBounds,
  snapToAngle,
  transformElement,
  type SketchPathElement,
  type SketchShapeElement,
  type SketchTextElement,
} from './sketch'

// 路径与图形的命中检测不依赖 Canvas 文字测量
const ctx = {} as CanvasRenderingContext2D

function shape(kind: SketchShapeElement['shape'], start = { x: 0, y: 0 }, end = { x: 100, y: 100 }): SketchShapeElement {
  return { id: 's', type: 'shape', shape: kind, color: '#000', width: 4, start, end }
}

describe('getSketchCanvasSize', () => {
  it('uses the size param aspect ratio with a fixed long edge', () => {
    expect(getSketchCanvasSize('1536x1024')).toEqual({ width: 1536, height: 1024 })
    expect(getSketchCanvasSize('1024x1536')).toEqual({ width: 1024, height: 1536 })
    expect(getSketchCanvasSize('3840x2160')).toEqual({ width: 1536, height: 864 })
  })

  it('falls back to a square canvas for auto or invalid sizes', () => {
    expect(getSketchCanvasSize('auto')).toEqual({ width: 1536, height: 1536 })
    expect(getSketchCanvasSize('0x100')).toEqual({ width: 1536, height: 1536 })
  })
})

describe('getShapePolylines', () => {
  it('keeps every shape within its bounding box', () => {
    for (const kind of ['rect', 'ellipse', 'triangle', 'diamond', 'star', 'heart'] as const) {
      const points = getShapePolylines(shape(kind, { x: 100, y: 50 }, { x: 0, y: 0 })).flat()
      for (const p of points) {
        expect(p.x).toBeGreaterThanOrEqual(-0.01)
        expect(p.x).toBeLessThanOrEqual(100.01)
        expect(p.y).toBeGreaterThanOrEqual(-0.01)
        expect(p.y).toBeLessThanOrEqual(50.01)
      }
    }
  })

  it('draws arrow heads at the end point', () => {
    const [shaft, head] = getShapePolylines(shape('arrow', { x: 0, y: 0 }, { x: 100, y: 0 }))
    expect(shaft).toEqual([{ x: 0, y: 0 }, { x: 100, y: 0 }])
    expect(head[1]).toEqual({ x: 100, y: 0 })
    expect(head[0].x).toBeLessThan(100)
  })
})

describe('hitTestElement', () => {
  const path: SketchPathElement = { id: 'p', type: 'path', color: '#000', width: 10, points: [{ x: 0, y: 0 }, { x: 100, y: 0 }] }

  it('hits paths near the stroke', () => {
    expect(hitTestElement(path, { x: 50, y: 6 }, 2, ctx, 'erase')).toBe(true)
    expect(hitTestElement(path, { x: 50, y: 20 }, 2, ctx, 'erase')).toBe(false)
  })

  it('selects closed shapes from inside but only erases on the outline', () => {
    const rect = shape('rect')
    expect(hitTestElement(rect, { x: 50, y: 50 }, 2, ctx, 'select')).toBe(true)
    expect(hitTestElement(rect, { x: 50, y: 50 }, 2, ctx, 'erase')).toBe(false)
    expect(hitTestElement(rect, { x: 50, y: 1 }, 2, ctx, 'erase')).toBe(true)
  })
})

describe('resizeBounds', () => {
  const bounds = { x: 0, y: 0, width: 100, height: 50 }

  it('keeps the opposite edge fixed', () => {
    expect(resizeBounds(bounds, 'se', { x: 200, y: 100 })).toEqual({ x: 0, y: 0, width: 200, height: 100 })
    expect(resizeBounds(bounds, 'w', { x: -50, y: 999 })).toEqual({ x: -50, y: 0, width: 150, height: 50 })
  })

  it('does not flip past the minimum size', () => {
    expect(resizeBounds(bounds, 'e', { x: -100, y: 0 }, 8)).toEqual({ x: 0, y: 0, width: 8, height: 50 })
  })

  it('locks the aspect ratio when requested', () => {
    expect(resizeBounds(bounds, 'se', { x: 200, y: 60 }, 8, 1)).toEqual({ x: 0, y: 0, width: 200, height: 200 })
    expect(resizeBounds(bounds, 'nw', { x: 50, y: -100 }, 8, 2)).toEqual({ x: -200, y: -100, width: 300, height: 150 })
    expect(resizeBounds(bounds, 'e', { x: 150, y: 0 }, 8, 1)).toEqual({ x: 0, y: 0, width: 150, height: 150 })
  })
})

describe('snapToAngle', () => {
  it('snaps to multiples of 45 degrees', () => {
    const snapped = snapToAngle({ x: 0, y: 0 }, { x: 100, y: 10 })
    expect(snapped.x).toBeCloseTo(Math.hypot(100, 10))
    expect(snapped.y).toBeCloseTo(0)
    const diagonal = snapToAngle({ x: 0, y: 0 }, { x: 100, y: 90 })
    expect(diagonal.x).toBeCloseTo(diagonal.y)
  })
})

describe('transformElement', () => {
  it('maps shape points into the new bounds', () => {
    const next = transformElement(shape('rect'), { x: 0, y: 0, width: 100, height: 100 }, { x: 10, y: 20, width: 200, height: 50 }, 'se')
    expect(next).toMatchObject({ start: { x: 10, y: 20 }, end: { x: 210, y: 70 } })
  })

  it('only translates degenerate axes', () => {
    const line = shape('line', { x: 0, y: 10 }, { x: 100, y: 10 })
    const next = transformElement(line, { x: 0, y: 10, width: 100, height: 0 }, { x: 0, y: 10, width: 50, height: 8 }, 'se')
    expect(next).toMatchObject({ start: { x: 0, y: 10 }, end: { x: 50, y: 10 } })
  })

  it('scales text uniformly and anchors the opposite corner', () => {
    const text: SketchTextElement = { id: 't', type: 'text', color: '#000', width: 4, x: 100, y: 100, text: 'hi', fontSize: 20 }
    const next = transformElement(text, { x: 100, y: 100, width: 40, height: 25 }, { x: 60, y: 50, width: 80, height: 50 }, 'nw')
    expect(next).toMatchObject({ x: 60, y: 75, fontSize: 40 })
  })

  it('keeps scaled text within the font size range the slider can represent', () => {
    const text: SketchTextElement = { id: 't', type: 'text', color: '#000', width: 4, x: 0, y: 0, text: 'hi', fontSize: 100 }
    const from = { x: 0, y: 0, width: 200, height: 125 }
    expect(transformElement(text, from, { x: 0, y: 0, width: 20000, height: 12500 }, 'se')).toMatchObject({ fontSize: 656 })
    expect(transformElement(text, from, { x: 0, y: 0, width: 2, height: 1 }, 'se')).toMatchObject({ fontSize: 24 })
  })
})

describe('moveElement', () => {
  it('offsets every point', () => {
    expect(moveElement(shape('line'), 5, -5)).toMatchObject({ start: { x: 5, y: -5 }, end: { x: 105, y: 95 } })
  })

  it('moves attached erase strokes with the element', () => {
    const erased = { ...shape('rect'), erase: [{ width: 10, points: [{ x: 50, y: 0 }] }] }
    expect(moveElement(erased, 10, 20).erase).toEqual([{ width: 10, points: [{ x: 60, y: 20 }] }])
  })
})

describe('transformElement erase strokes', () => {
  it('maps erase strokes into the new bounds', () => {
    const erased = { ...shape('rect'), erase: [{ width: 10, points: [{ x: 50, y: 50 }] }] }
    const next = transformElement(erased, { x: 0, y: 0, width: 100, height: 100 }, { x: 0, y: 0, width: 200, height: 100 }, 'e')
    expect(next.erase).toEqual([{ width: 10, points: [{ x: 100, y: 50 }] }])
  })
})
