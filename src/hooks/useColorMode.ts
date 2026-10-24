import { useLayoutEffect, useSyncExternalStore } from 'react'
import { COLOR_MODE_KEY, resolveDarkMode } from '../lib/colorMode'
import { useStore } from '../store'

export function useColorMode() {
  const colorMode = useStore((s) => s.settings.colorMode)

  useLayoutEffect(() => {
    try {
      if (localStorage.getItem(COLOR_MODE_KEY) !== colorMode) localStorage.setItem(COLOR_MODE_KEY, colorMode)
    } catch (err) {
      console.warn('缓存颜色模式失败：', err)
    }
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const apply = () => {
      document.documentElement.classList.toggle('dark', resolveDarkMode(colorMode, media.matches))
    }
    apply()
    if (colorMode !== 'system') return
    media.addEventListener('change', apply)
    return () => media.removeEventListener('change', apply)
  }, [colorMode])
}

function subscribeDarkClass(onChange: () => void) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  return () => observer.disconnect()
}

/** 当前是否为深色，随颜色模式设置和系统切换更新 */
export function useIsDarkMode() {
  return useSyncExternalStore(subscribeDarkClass, () => document.documentElement.classList.contains('dark'))
}
