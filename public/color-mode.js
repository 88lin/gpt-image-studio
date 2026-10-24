// 在页面渲染前按上次的颜色模式设置 dark 类，避免首屏先显示另一种配色；之后由 src/hooks/useColorMode.ts 接管。
// 缓存键和判断规则与 src/lib/colorMode.ts 一致，由 colorMode.test.ts 校验
// 放在外部文件：客户端 CSP 不允许内联 <script>
(() => {
  let mode = 'system'
  try {
    mode = localStorage.getItem('color-mode') || 'system'
  } catch {}
  const dark = mode === 'dark' || (mode !== 'light' && matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.classList.toggle('dark', dark)
})()
