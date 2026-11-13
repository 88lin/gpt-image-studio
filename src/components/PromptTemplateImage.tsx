import { useState, type ImgHTMLAttributes } from 'react'

export function PromptTemplateImage({ src, alt, className, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const [failure, setFailure] = useState({ src, attempt: 0 })
  const attempt = failure.src === src ? failure.attempt : 0
  const match = src?.match(/^https:\/\/cdn\.jsdmirror\.com\/gh\/([^/]+\/[^@]+)@([^/]+)\/(.+)$/)
  const fallback = match ? `https://raw.githubusercontent.com/${match[1]}/${match[2]}/${match[3]}` : undefined
  const currentSrc = attempt === 0 ? src : attempt === 1 ? fallback : undefined

  if (!currentSrc) {
    return (
      <div role="status" className={`flex min-h-24 items-center justify-center rounded-2xl bg-zinc-100 p-4 text-center text-xs text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400 ${className ?? ''}`}>
        示例图暂时无法加载
      </div>
    )
  }

  return (
    <img
      {...props}
      src={currentSrc}
      alt={alt ?? ''}
      className={className}
      referrerPolicy="no-referrer"
      onError={() => setFailure({ src, attempt: attempt + 1 })}
    />
  )
}
