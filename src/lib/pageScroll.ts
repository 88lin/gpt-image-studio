let container: HTMLElement | null = null

/**
 * 页面的滚动容器。浏览器原生是经典滚动条时（main.tsx 标记的 data-classic-scrollbar），页面在 App 的 `[data-page-scroll]` 里滚动、窗口本身不滚动，
 * 这样顶栏和客户端的标题栏能盖住滚动条那一列；悬浮滚动条下仍滚动窗口
 */
export function getPageScroller(): HTMLElement | Window {
  if (!('classicScrollbar' in document.documentElement.dataset)) return window
  if (!container?.isConnected) container = document.querySelector<HTMLElement>('[data-page-scroll]')
  return container ?? window
}

export function getPageScrollTop() {
  const scroller = getPageScroller()
  return scroller instanceof Window ? scroller.scrollY : scroller.scrollTop
}
