import { useEffect, useState } from 'react'
import { getCachedProxySetting, getProxySetting, setProxySetting, type ProxyMode, type ProxySetting } from '../../lib/networkProxy'
import { useStore } from '../../store'
import Select from '../Select'

/** 仅客户端：API 请求和应用内更新使用的网络代理 */
export default function ProxySettingsSection() {
  const showToast = useStore((s) => s.showToast)
  // 启动时已预先读取，通常首次渲染就有值
  const [saved, setSaved] = useState(getCachedProxySetting)
  // 选择“自定义”后先显示地址输入框，填写有效地址后才保存并生效
  const [mode, setMode] = useState<ProxyMode>(() => saved?.mode ?? 'system')
  const [url, setUrl] = useState(() => saved?.url ?? '')
  const [error, setError] = useState('')
  const [showUrl, setShowUrl] = useState(false)
  // 自定义地址保存失败时下拉框回到生效中的模式，地址输入框仍保留以便修改
  const [editing, setEditing] = useState(false)
  const showInput = mode === 'custom' || editing
  // 地址中带用户名和密码时默认隐藏
  const hasAuth = url.includes('@')

  useEffect(() => {
    if (saved) return
    getProxySetting()
      .then((setting) => {
        setSaved(setting)
        setMode(setting.mode)
        setUrl(setting.url)
      })
      .catch((err) => {
        console.error('读取代理设置失败：', err)
        setError(typeof err === 'string' ? err : '读取代理设置失败')
      })
  }, [])

  const apply = async (next: ProxySetting) => {
    if (saved && next.mode === saved.mode && next.url.trim() === saved.url) return
    try {
      const setting = await setProxySetting(next)
      setSaved(setting)
      setUrl(setting.url)
      setError('')
      setEditing(false)
      showToast('代理设置已生效', 'success')
    } catch (err) {
      console.warn('保存代理设置失败：', err)
      setError(typeof err === 'string' ? err : '保存代理设置失败')
      if (!saved || next.mode !== 'custom') return
      setMode(saved.mode)
      setEditing(true)
    }
  }

  const handleModeChange = (val: ProxyMode) => {
    setMode(val)
    setError('')
    setEditing(false)
    if (val === 'custom' && !url.trim()) return
    void apply({ mode: val, url })
  }

  return (
    <section className="space-y-4">
      <h4 className="text-sm font-bold text-gray-800 dark:text-gray-100">网络</h4>
      <div className="block">
        <div className="mb-1 flex items-center justify-between gap-3">
          <span className="block text-sm text-gray-600 dark:text-gray-300">网络代理</span>
          <div className="w-28 shrink-0">
            <Select
              value={mode}
              onChange={handleModeChange}
              disabled={!saved}
              options={[
                { label: '跟随系统', value: 'system' },
                { label: '不使用代理', value: 'none' },
                { label: '自定义', value: 'custom' },
              ]}
              className="w-full px-3 py-1.5 rounded-xl border border-transparent bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.07] dark:hover:bg-white/[0.1] text-xs transition-all duration-200 text-gray-700 dark:text-gray-200 outline-none"
            />
          </div>
        </div>
        {showInput && (
          <div className="relative mt-2 mb-1">
            <input
              value={url}
              onChange={(e) => {
                setUrl(e.target.value)
                setError('')
              }}
              onBlur={() => void apply({ mode: 'custom', url })}
              onKeyDown={(e) => {
                if (e.key === 'Enter') void apply({ mode: 'custom', url })
              }}
              type={hasAuth && !showUrl ? 'password' : 'text'}
              spellCheck={false}
              placeholder="http://127.0.0.1:7890"
              aria-label="代理地址"
              className={`w-full rounded-xl border border-transparent bg-black/[0.04] px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-blue-300 dark:bg-white/[0.06] dark:text-gray-200 dark:focus:border-blue-500/50 ${hasAuth ? 'pr-10' : ''}`}
            />
            {hasAuth && (
              <button
                type="button"
                onClick={() => setShowUrl((v) => !v)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
                tabIndex={-1}
                aria-label={showUrl ? '隐藏代理地址' : '显示代理地址'}
              >
                {showUrl ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                    <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                )}
              </button>
            )}
          </div>
        )}
        {error && <div data-selectable-text className="mb-1 text-xs text-red-500 dark:text-red-400">{error}</div>}
        <div data-selectable-text className="text-xs text-gray-500 dark:text-gray-500">
          {showInput
            ? '只支持 HTTP 代理，可带用户名和密码。本机地址始终直连。'
            : mode === 'none'
              ? '所有请求直接连接。'
              : 'API 请求和应用内更新使用的代理，修改后立即生效。系统使用自动配置脚本（PAC）时，请改为自定义并填写代理地址。'}
        </div>
      </div>
    </section>
  )
}
