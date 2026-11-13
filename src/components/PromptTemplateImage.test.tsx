// @vitest-environment jsdom

import { act } from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { PromptTemplateImage } from './PromptTemplateImage'

describe('模板预览图片', () => {
  let container: HTMLDivElement
  let root: Root
  const src = 'https://cdn.jsdmirror.com/gh/houshifang/image@main/assets/example.webp'

  beforeEach(() => {
    vi.stubGlobal('IS_REACT_ACT_ENVIRONMENT', true)
    container = document.createElement('div')
    document.body.appendChild(container)
    root = createRoot(container)
  })

  afterEach(() => {
    act(() => root.unmount())
    container.remove()
    vi.unstubAllGlobals()
  })

  it('CDN 加载失败后回退到同一张原图，原图失败后停止重试', () => {
    act(() => root.render(<PromptTemplateImage src={src} alt="示例" />))
    const img = container.querySelector('img')!
    act(() => img.dispatchEvent(new Event('error')))

    expect(img.src).toBe('https://raw.githubusercontent.com/houshifang/image/main/assets/example.webp')
    expect(img.alt).toBe('示例')
    expect(img.getAttribute('referrerpolicy')).toBe('no-referrer')

    act(() => img.dispatchEvent(new Event('error')))
    expect(container.querySelector('img')).toBeNull()
    expect(container.querySelector('[role="status"]')?.textContent).toBe('示例图暂时无法加载')
  })

  it('切换模板时从新图片开始加载', () => {
    act(() => root.render(<PromptTemplateImage src={src} />))
    act(() => container.querySelector('img')!.dispatchEvent(new Event('error')))
    const next = 'https://img.opennana.com/prompts/example.jpeg'
    act(() => root.render(<PromptTemplateImage src={next} />))

    expect(container.querySelector('img')?.src).toBe(next)
    act(() => container.querySelector('img')!.dispatchEvent(new Event('error')))
    expect(container.querySelector('img')).toBeNull()
  })
})
