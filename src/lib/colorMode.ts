import type { ColorMode } from '../types'

// public/color-mode.js 在页面渲染前按同一个键和规则设置 dark 类，两处需保持一致（由 colorMode.test.ts 校验）
export const COLOR_MODE_KEY = 'color-mode'

export function resolveDarkMode(mode: ColorMode, systemDark: boolean) {
  return mode === 'dark' || (mode === 'system' && systemDark)
}
