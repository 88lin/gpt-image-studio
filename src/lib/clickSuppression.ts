import { useEffect } from 'react'

let suppressClicksUntil = 0

export function suppressGlobalClicks(durationMs = 450) {
  suppressClicksUntil = Math.max(suppressClicksUntil, Date.now() + durationMs)
}

export function useGlobalClickSuppression() {
  useEffect(() => {
    const stopSuppressedClick = (event: MouseEvent) => {
      if (Date.now() > suppressClicksUntil) return

      suppressClicksUntil = 0
      if (event.cancelable) event.preventDefault()
      event.stopPropagation()
      event.stopImmediatePropagation()
    }

    document.addEventListener('click', stopSuppressedClick, { capture: true })
    return () => document.removeEventListener('click', stopSuppressedClick, { capture: true })
  }, [])
}
