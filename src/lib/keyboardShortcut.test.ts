import { describe, expect, it } from 'vitest'
import { DEFAULT_PRIVACY_MODE_SHORTCUT, formatShortcut, getShortcutFromEvent, normalizeShortcut, normalizeShortcutSetting } from './keyboardShortcut'

function keyEvent(key: string, mods: { ctrl?: boolean; alt?: boolean; shift?: boolean; meta?: boolean } = {}, code?: string) {
  return { key, code, ctrlKey: Boolean(mods.ctrl), altKey: Boolean(mods.alt), shiftKey: Boolean(mods.shift), metaKey: Boolean(mods.meta) }
}

describe('getShortcutFromEvent', () => {
  it('orders modifiers as Ctrl, Alt, Shift, Meta and uppercases letters', () => {
    expect(getShortcutFromEvent(keyEvent('h', { ctrl: true, shift: true }))).toBe('Ctrl+Shift+H')
    expect(getShortcutFromEvent(keyEvent('p', { meta: true, alt: true }))).toBe('Alt+Meta+P')
  })

  it('rejects lone modifiers and keys without Ctrl, Alt or Meta', () => {
    expect(getShortcutFromEvent(keyEvent('Control', { ctrl: true }))).toBeNull()
    expect(getShortcutFromEvent(keyEvent('Shift', { ctrl: true, shift: true }))).toBeNull()
    expect(getShortcutFromEvent(keyEvent('h'))).toBeNull()
    expect(getShortcutFromEvent(keyEvent('H', { shift: true }))).toBeNull()
  })

  it('allows F1 to F12 without modifiers', () => {
    expect(getShortcutFromEvent(keyEvent('F8'))).toBe('F8')
    expect(getShortcutFromEvent(keyEvent('F12', { shift: true }))).toBe('Shift+F12')
    expect(getShortcutFromEvent(keyEvent('F13'))).toBeNull()
  })

  it('uses the physical key when Shift or Option changes the character', () => {
    expect(getShortcutFromEvent(keyEvent('!', { ctrl: true, shift: true }, 'Digit1'))).toBe('Ctrl+Shift+1')
    expect(getShortcutFromEvent(keyEvent('π', { alt: true, meta: true }, 'KeyP'))).toBe('Alt+Meta+P')
  })

  it('ignores characters typed with AltGr', () => {
    const altGr = { ...keyEvent('@', { ctrl: true, alt: true }, 'KeyQ'), getModifierState: (key: string) => key === 'AltGraph' }
    expect(getShortcutFromEvent(altGr)).toBeNull()
  })
})

describe('normalizeShortcut', () => {
  it('normalizes case, aliases and modifier order', () => {
    expect(normalizeShortcut('shift+ctrl+h')).toBe('Ctrl+Shift+H')
    expect(normalizeShortcut('Cmd+Option+p')).toBe('Alt+Meta+P')
    expect(normalizeShortcut('f5')).toBe('F5')
    expect(normalizeShortcut('Ctrl++')).toBe('Ctrl++')
  })

  it('keeps an empty value as disabled and rejects invalid values', () => {
    expect(normalizeShortcut('  ')).toBe('')
    expect(normalizeShortcut('H')).toBeNull()
    expect(normalizeShortcut('Ctrl+')).toBeNull()
    expect(normalizeShortcut('Hyper+H')).toBeNull()
  })

  it('falls back to the default for missing or invalid settings', () => {
    expect(normalizeShortcutSetting(undefined, DEFAULT_PRIVACY_MODE_SHORTCUT)).toBe('Ctrl+Shift+H')
    expect(normalizeShortcutSetting(123, DEFAULT_PRIVACY_MODE_SHORTCUT)).toBe('Ctrl+Shift+H')
    expect(normalizeShortcutSetting('Shift+H', DEFAULT_PRIVACY_MODE_SHORTCUT)).toBe('Ctrl+Shift+H')
    expect(normalizeShortcutSetting('', DEFAULT_PRIVACY_MODE_SHORTCUT)).toBe('')
    expect(normalizeShortcutSetting('alt+F2', DEFAULT_PRIVACY_MODE_SHORTCUT)).toBe('Alt+F2')
  })
})

describe('formatShortcut', () => {
  it('formats for display with platform symbols', () => {
    expect(formatShortcut('Ctrl+Shift+H', false)).toBe('Ctrl + Shift + H')
    expect(formatShortcut('Alt+Meta+P', true)).toBe('⌥ + ⌘ + P')
    expect(formatShortcut('Alt+Meta+P', false)).toBe('Alt + Win + P')
  })
})
