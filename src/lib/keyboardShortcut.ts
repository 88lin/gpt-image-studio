export const DEFAULT_PRIVACY_MODE_SHORTCUT = 'Ctrl+Shift+H'

const MODIFIER_ALIASES: Record<string, 'Ctrl' | 'Alt' | 'Shift' | 'Meta'> = {
  ctrl: 'Ctrl',
  control: 'Ctrl',
  alt: 'Alt',
  option: 'Alt',
  shift: 'Shift',
  meta: 'Meta',
  cmd: 'Meta',
  command: 'Meta',
  win: 'Meta',
}
const MODIFIER_KEYS = new Set(['Control', 'Alt', 'AltGraph', 'Shift', 'Meta', 'OS', 'Dead', 'Unidentified', 'Process'])
const FUNCTION_KEY_PATTERN = /^F([1-9]|1[0-2])$/

type ShortcutKeyEvent = Pick<KeyboardEvent, 'key' | 'ctrlKey' | 'altKey' | 'shiftKey' | 'metaKey'> & { code?: string; getModifierState?: (key: string) => boolean }

function normalizeKey(key: string, code = '') {
  if (key === ' ') return 'Space'
  if (key.length !== 1) return key
  const upper = key.toUpperCase()
  if (/^[A-Z0-9]$/.test(upper)) return upper
  // Shift + 数字、macOS 的 Option + 字母会改变 e.key，按物理键位还原，录制和触发时保持一致
  const physical = /^Key([A-Z])$/.exec(code)?.[1] ?? /^Digit([0-9])$/.exec(code)?.[1]
  return physical ?? upper
}

/** 由按键得到快捷键文本，修饰键顺序固定为 Ctrl、Alt、Shift、Meta；只按修饰键或缺少 Ctrl / Alt / Meta（F1–F12 除外）时返回 null */
export function getShortcutFromEvent(e: ShortcutKeyEvent): string | null {
  // Windows 上 AltGr 会同时报告 Ctrl 和 Alt，按下时是在输入字符（如德语键盘的 @），不是快捷键
  if (!e.key || MODIFIER_KEYS.has(e.key) || e.getModifierState?.('AltGraph')) return null
  const key = normalizeKey(e.key, e.code)
  if (!e.ctrlKey && !e.altKey && !e.metaKey && !FUNCTION_KEY_PATTERN.test(key)) return null
  const mods = [e.ctrlKey && 'Ctrl', e.altKey && 'Alt', e.shiftKey && 'Shift', e.metaKey && 'Meta'].filter(Boolean)
  return [...mods, key].join('+')
}

function parseShortcut(text: string) {
  const trimmed = text.trim()
  const parts = trimmed.endsWith('++') ? [...trimmed.slice(0, -2).split('+'), '+'] : trimmed.split('+')
  const key = parts.pop()?.trim()
  if (!key) return null
  const mods = new Set<string>()
  for (const part of parts) {
    const mod = MODIFIER_ALIASES[part.trim().toLowerCase()]
    if (!mod) return null
    mods.add(mod)
  }
  return {
    key: key.length === 1 ? key : key.toLowerCase() === 'space' ? ' ' : key.replace(/^f(\d+)$/i, 'F$1'),
    ctrlKey: mods.has('Ctrl'),
    altKey: mods.has('Alt'),
    shiftKey: mods.has('Shift'),
    metaKey: mods.has('Meta'),
  }
}

/** 归一化外部来源的快捷键文本；空字符串表示禁用，无效时返回 null */
export function normalizeShortcut(text: string): string | null {
  if (!text.trim()) return ''
  const parsed = parseShortcut(text)
  return parsed ? getShortcutFromEvent(parsed) : null
}

export function normalizeShortcutSetting(value: unknown, fallback: string) {
  if (typeof value !== 'string') return fallback
  return normalizeShortcut(value) ?? fallback
}

/** 显示用：macOS 上 Meta、Alt 显示为 ⌘、⌥ */
export function formatShortcut(shortcut: string, isMac: boolean) {
  const parsed = parseShortcut(shortcut)
  if (!parsed) return shortcut
  const labels = [
    parsed.ctrlKey && 'Ctrl',
    parsed.altKey && (isMac ? '⌥' : 'Alt'),
    parsed.shiftKey && 'Shift',
    parsed.metaKey && (isMac ? '⌘' : 'Win'),
    parsed.key === ' ' ? 'Space' : parsed.key,
  ].filter(Boolean)
  return labels.join(' + ')
}
