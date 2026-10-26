import 'core-js/actual/array/at'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'streamdown/styles.css'
import 'katex/dist/katex.min.css'
import './index.css'
import { getProxySetting } from './lib/networkProxy'
import { installBrowserBehaviorGuards, installExternalLinkHandler, isTauri, TITLEBAR_HEIGHT } from './lib/platform'
import { installTauriLog } from './lib/tauriLog'
import { installTauriStorageFlush, loadTauriStorage } from './lib/tauriStorage'
import { installMobileViewportGuards } from './lib/viewport'

installMobileViewportGuards()

// 经典滚动条占着右侧一整列，会伸进顶栏和标题栏，此时改用细滚动条并让页面在 [data-page-scroll] 里滚动（见 index.css）；
// 手机等悬浮滚动条不占宽度，仍滚动窗口，保留地址栏收起和下拉刷新。须在细滚动条样式生效前测量浏览器原生的滚动条。
// Firefox 不支持 ::-webkit-scrollbar，滚动条无法从顶栏下方开始，改为容器滚动后反而被顶栏遮住，所以仍滚动窗口
if (CSS.supports('selector(::-webkit-scrollbar)')) {
  const probe = document.createElement('div')
  probe.style.cssText = 'position:absolute;top:-9999px;width:100px;height:100px;overflow:scroll'
  document.body.appendChild(probe)
  if (probe.offsetWidth > probe.clientWidth) document.documentElement.dataset.classicScrollbar = ''
  probe.remove()
}

if (isTauri) {
  installTauriLog()
  installExternalLinkHandler()
  installBrowserBehaviorGuards()
  document.documentElement.style.setProperty('--safe-area-top', `${TITLEBAR_HEIGHT}px`)
  // 预先读取代理设置，打开设置时不必等待；失败时由设置页重新读取并显示原因
  void getProxySetting().catch((err) => console.warn('预读代理设置失败：', err))
}

// 客户端不注册 Service Worker，避免缓存与客户端版本更新冲突
if (!isTauri && 'serviceWorker' in navigator) {
  if (import.meta.env.PROD) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`).catch((error) => {
        console.error('Service worker registration failed:', error)
      })
    })
  } else {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => registration.unregister())
    })
  }
}

// store 在模块加载时就会同步完成 persist hydration，因此 App（以及它引入的 store）必须在客户端设置读入内存之后才动态加载
async function start() {
  if (isTauri) {
    await loadTauriStorage()
    void installTauriStorageFlush().catch((err) => console.error('注册关闭前保存失败：', err))
  }
  const { default: App } = await import('./App')
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

void start()
