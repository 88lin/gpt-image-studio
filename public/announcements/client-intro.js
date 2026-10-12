// 逐页向左滑动；开启减少动态效果时保留静态网格
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const b = document.body
  const track = document.querySelector('.slides')
  const count = track.children.length
  // 克隆首页放在末尾：最后一页之后继续向左滑到克隆页，再无过渡地换回真正的首页
  track.appendChild(track.children[0].cloneNode(true)).setAttribute('aria-hidden', 'true')
  b.classList.add('js')
  let i = 0
  const go = (n, animate) => {
    i = n
    b.classList.toggle('jump', !animate)
    b.style.setProperty('--i', String(i))
    b.dataset.i = String(i % count)
    void track.offsetWidth
    b.classList.remove('jump')
  }
  track.addEventListener('transitionend', () => {
    if (i >= count) go(0, false)
  })
  setInterval(() => {
    // 页面在后台时可能收不到 transitionend，停在克隆页上就先换回首页
    if (i >= count) go(0, false)
    go(i + 1, true)
  }, 3200)
})()
