import { useLayoutEffect } from 'react'
import { useStore } from '../store'
import { applyFont, resolveSlotFont } from '../lib/fonts'

export function useAppFonts() {
  const uiFont = useStore((s) => s.settings.uiFont)
  const uiFontName = useStore((s) => s.settings.uiFontName)
  const monoFont = useStore((s) => s.settings.monoFont)
  const monoFontName = useStore((s) => s.settings.monoFontName)

  // store 在 App 加载前已同步完成 hydration，用 layout effect 在首次绘制前应用字体，避免先用默认字体再切换
  useLayoutEffect(() => {
    applyFont('ui', resolveSlotFont('ui', uiFont, uiFontName))
  }, [uiFont, uiFontName])

  useLayoutEffect(() => {
    applyFont('mono', resolveSlotFont('mono', monoFont, monoFontName))
  }, [monoFont, monoFontName])
}
