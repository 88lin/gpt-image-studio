// @vitest-environment jsdom

import { afterEach, describe, expect, it, vi } from 'vitest'
import { applyFont, buildFontStack, normalizeFontMode, parseDeployFont, resolveFont } from './fonts'

afterEach(() => {
  document.head.replaceChildren()
  document.documentElement.removeAttribute('style')
  vi.unstubAllEnvs()
})

describe('parseDeployFont', () => {
  it('未设置时默认内置字体', () => {
    expect(parseDeployFont('')).toEqual({ source: 'builtin' })
    expect(parseDeployFont('   ')).toEqual({ source: 'builtin' })
  })

  it('识别 builtin 与 system，其他字符串视为自定义字体名称', () => {
    expect(parseDeployFont(' BUILTIN ')).toEqual({ source: 'builtin' })
    expect(parseDeployFont('system')).toEqual({ source: 'system' })
    expect(parseDeployFont(' Sarasa Mono SC ')).toEqual({ source: 'custom', name: 'Sarasa Mono SC' })
  })
})

describe('resolveFont', () => {
  it('选择部署默认时使用部署值', () => {
    expect(resolveFont('default', 'ignored', 'builtin')).toEqual({ source: 'builtin' })
    expect(resolveFont('default', '', '')).toEqual({ source: 'builtin' })
    expect(resolveFont('default', '', 'Fira Code')).toEqual({ source: 'custom', name: 'Fira Code' })
  })

  it('用户设置优先于部署默认', () => {
    expect(resolveFont('system', '', 'builtin')).toEqual({ source: 'system' })
    expect(resolveFont('builtin', '', 'system')).toEqual({ source: 'builtin' })
    expect(resolveFont('custom', ' Fira Code ', 'builtin')).toEqual({ source: 'custom', name: 'Fira Code' })
  })

  it('自定义但未填写名称时退回系统字体', () => {
    expect(resolveFont('custom', '  ', 'builtin')).toEqual({ source: 'system' })
  })
})

describe('normalizeFontMode', () => {
  it('未知值退回部署默认', () => {
    expect(normalizeFontMode('builtin')).toBe('builtin')
    expect(normalizeFontMode('bogus')).toBe('default')
    expect(normalizeFontMode(undefined)).toBe('default')
  })
})

describe('buildFontStack', () => {
  it('内置字体使用固定族名', () => {
    expect(buildFontStack('ui', { source: 'builtin' }).startsWith('"HarmonyOS Sans SC", ')).toBe(true)
    expect(buildFontStack('mono', { source: 'builtin' }).startsWith('"Maple Mono NF CN", ')).toBe(true)
  })

  it('系统字体只使用后备字体栈，自定义名称会转义引号', () => {
    expect(buildFontStack('mono', { source: 'system' })).not.toContain('Maple')
    expect(buildFontStack('ui', { source: 'custom', name: 'A"B\\C' }).startsWith('"A\\"B\\\\C", ')).toBe(true)
  })
})

describe('applyFont', () => {
  it('只有内置字体且来源为 CDN 时插入样式表，切换后立即移除并更新 CSS 变量', () => {
    applyFont('ui', { source: 'builtin' }, 'cdn')
    expect(document.querySelectorAll('link[rel="stylesheet"]')).toHaveLength(1)
    expect(document.documentElement.style.getPropertyValue('--font-ui-sans')).toContain('HarmonyOS Sans SC')

    applyFont('ui', { source: 'builtin' }, 'cdn')
    expect(document.querySelectorAll('link[rel="stylesheet"]')).toHaveLength(1)

    applyFont('ui', { source: 'builtin' }, 'local')
    expect(document.querySelector('link[rel="stylesheet"]')).toBeNull()
    expect(document.documentElement.style.getPropertyValue('--font-ui-sans')).toContain('HarmonyOS Sans SC')

    applyFont('ui', { source: 'system' })
    expect(document.querySelector('link[rel="stylesheet"]')).toBeNull()
    expect(document.documentElement.style.getPropertyValue('--font-ui-sans')).not.toContain('HarmonyOS')

    applyFont('mono', { source: 'custom', name: 'Fira Code' })
    expect(document.querySelector('link[rel="stylesheet"]')).toBeNull()
    expect(document.documentElement.style.getPropertyValue('--font-mono').startsWith('"Fira Code", ')).toBe(true)
  })

  it('部署默认值来自 VITE_DEFAULT_UI_FONT / VITE_DEFAULT_MONO_FONT', async () => {
    vi.resetModules()
    vi.stubEnv('VITE_DEFAULT_UI_FONT', 'system')
    vi.stubEnv('VITE_DEFAULT_MONO_FONT', 'JetBrains Mono')
    const fonts = await import('./fonts')

    expect(fonts.resolveSlotFont('ui', 'default', '')).toEqual({ source: 'system' })
    expect(fonts.resolveSlotFont('mono', 'default', '')).toEqual({ source: 'custom', name: 'JetBrains Mono' })
    expect(fonts.resolveSlotFont('mono', 'builtin', '')).toEqual({ source: 'builtin' })
  })
})

describe('VITE_BUILTIN_FONT_SOURCE', () => {
  it('未设置时内置字体从 CDN 加载，设为 local 时不插入 CDN 样式表', async () => {
    vi.resetModules()
    const cdnFonts = await import('./fonts')
    cdnFonts.applyFont('mono', { source: 'builtin' })
    expect(document.getElementById('cdn-font-mono')).not.toBeNull()

    document.head.replaceChildren()
    vi.resetModules()
    vi.stubEnv('VITE_BUILTIN_FONT_SOURCE', 'local')
    const localFonts = await import('./fonts')
    localFonts.applyFont('mono', { source: 'builtin' })
    expect(document.getElementById('cdn-font-mono')).toBeNull()
  })
})
