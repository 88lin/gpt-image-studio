import type { FontMode } from '../types'
import { readRuntimeEnv } from './runtimeEnv'

export type FontSlot = 'ui' | 'mono'
export type ResolvedFont =
  | { source: 'builtin' | 'system' }
  | { source: 'custom'; name: string }
export type BuiltinFontSource = 'local' | 'cdn'

const FONT_MODES: FontMode[] = ['default', 'builtin', 'system', 'custom']

// 内置字体的加载来源由部署决定：local 为随应用分发的字体文件，其他值（含未设置）为公共 CDN
const BUILTIN_FONT_SOURCE: BuiltinFontSource = readRuntimeEnv(import.meta.env.VITE_BUILTIN_FONT_SOURCE).toLowerCase() === 'local' ? 'local' : 'cdn'

// 内置字体的族名与 CDN 切片 CSS 保持一致，两种加载来源共用同一套 CSS 变量
const FONT_SLOTS = {
  ui: {
    family: 'HarmonyOS Sans SC',
    fallback: "'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif",
    cssVar: '--font-ui-sans',
    cdnCss: 'https://cdn.jsdmirror.com/npm/@lobehub/webfont-harmony-sans-sc@1.0.0/css/index.css',
    deployValue: readRuntimeEnv(import.meta.env.VITE_DEFAULT_UI_FONT),
    loadLocal: () => import('../../fonts/harmonyos-sans-sc.css'),
  },
  mono: {
    family: 'Maple Mono NF CN',
    fallback: "'Cascadia Code', 'SF Mono', Menlo, Consolas, monospace",
    cssVar: '--font-mono',
    cdnCss: 'https://fontsapi.zeoseven.com/442/main/result.css',
    deployValue: readRuntimeEnv(import.meta.env.VITE_DEFAULT_MONO_FONT),
    loadLocal: () => import('../../fonts/maple-mono-nf-cn.css'),
  },
}

export function normalizeFontMode(value: unknown): FontMode {
  return FONT_MODES.includes(value as FontMode) ? value as FontMode : 'default'
}

/** 解析部署默认值：builtin 为内置字体，system 为系统字体，其他非空字符串视为自定义字体名称，未设置时为内置字体 */
export function parseDeployFont(value: string): ResolvedFont {
  const raw = value.trim()
  const lower = raw.toLowerCase()
  if (!raw || lower === 'builtin') return { source: 'builtin' }
  if (lower === 'system') return { source: 'system' }
  return { source: 'custom', name: raw }
}

/** 用户设置优先；选择部署默认（default）时使用部署值，自定义但未填写名称时退回系统字体 */
export function resolveFont(mode: FontMode, name: string, deployValue: string): ResolvedFont {
  if (mode === 'default') return parseDeployFont(deployValue)
  if (mode !== 'custom') return { source: mode }
  return name.trim() ? { source: 'custom', name: name.trim() } : { source: 'system' }
}

export function resolveSlotFont(slot: FontSlot, mode: FontMode, name: string) {
  return resolveFont(mode, name, FONT_SLOTS[slot].deployValue)
}

function quoteFontFamily(name: string) {
  return `"${name.replace(/["\\]/g, '\\$&')}"`
}

export function buildFontStack(slot: FontSlot, font: ResolvedFont) {
  const cfg = FONT_SLOTS[slot]
  if (font.source === 'system') return cfg.fallback
  return `${quoteFontFamily(font.source === 'custom' ? font.name : cfg.family)}, ${cfg.fallback}`
}

/** 按需加载字体：只有内置字体才加载字体文件，来源为 CDN 时插入样式表，来源为本地时动态加载本地 @font-face */
export function applyFont(slot: FontSlot, font: ResolvedFont, source = BUILTIN_FONT_SOURCE) {
  const cfg = FONT_SLOTS[slot]
  const linkId = `cdn-font-${slot}`
  const link = document.getElementById(linkId)
  const useCdn = font.source === 'builtin' && source === 'cdn'
  if (!useCdn) link?.remove()
  if (useCdn && !link) {
    const el = document.createElement('link')
    el.id = linkId
    el.rel = 'stylesheet'
    el.href = cfg.cdnCss
    document.head.appendChild(el)
  }
  // 本地样式表加载后无法移除，但只有切到其他字体时才会出现，此时 CSS 变量已不再引用内置字体
  if (font.source === 'builtin' && source === 'local') cfg.loadLocal().catch((err) => console.error('本地字体加载失败：', err))
  document.documentElement.style.setProperty(cfg.cssVar, buildFontStack(slot, font))
}

export function getFontLabel(font: ResolvedFont) {
  if (font.source === 'custom') return font.name
  return font.source === 'builtin' ? '内置字体' : '系统字体'
}
