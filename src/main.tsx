import 'core-js/actual/array/at'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'streamdown/styles.css'
import 'katex/dist/katex.min.css'
import './index.css'
import { getProxySetting } from './lib/networkProxy'
import { installBrowserBehaviorGuards, installExternalLinkHandler, isTauri } from './lib/platform'
import { installTauriLog } from './lib/tauriLog'
import { installTauriStorageFlush, loadTauriStorage } from './lib/tauriStorage'
import { installMobileViewportGuards } from './lib/viewport'

installMobileViewportGuards()

if (isTauri) {
  installTauriLog()
  installExternalLinkHandler()
  installBrowserBehaviorGuards()
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
