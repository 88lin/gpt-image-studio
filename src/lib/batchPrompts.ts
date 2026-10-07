export const DEFAULT_BATCH_PROMPT_CONCURRENCY = 10

/** 批量模式下提示词之间以至少两个空行分隔；单个空行属于提示词内部（如评论段） */
export function splitBatchPrompts(text: string) {
  return text
    .split(/\r?\n[ \t]*\r?\n[ \t]*\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean)
}

export function normalizeBatchPromptConcurrency(value: unknown) {
  if (typeof value !== 'number' || !Number.isFinite(value)) return DEFAULT_BATCH_PROMPT_CONCURRENCY
  return Math.max(1, Math.round(value))
}

/** 以最多 limit 个并发依次处理 items，shouldStop 返回 true 后不再启动新的项 */
export async function runWithConcurrency<T>(
  items: T[],
  limit: number,
  worker: (item: T, idx: number) => Promise<void>,
  shouldStop: () => boolean = () => false,
) {
  let next = 0
  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (next < items.length && !shouldStop()) {
      const idx = next
      next += 1
      await worker(items[idx], idx)
    }
  })
  await Promise.all(runners)
}
