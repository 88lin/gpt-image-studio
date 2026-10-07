import { useRef, useState } from 'react'
import { useStore } from '../store'
import { createSketchId, type SketchComment } from '../lib/sketch'
import { getImageComments, upsertImageCommentMention } from '../lib/promptImageMentions'

/**
 * 画板评论：重新编辑参考图时从提示词中该图的评论胶囊恢复，保存时写回胶囊。
 * 坐标均为相对画布宽高的比例，与原图一致。
 * 新增、修改、拖动、删除结束且确有变化时调用 onCommit(变化前的评论)，由画板记入撤销历史。
 */
export function useSketchComments(replaceImageId: string | undefined, onCommit: (before: SketchComment[]) => void) {
  const [initialComments] = useState(() => {
    const state = useStore.getState()
    const idx = replaceImageId ? state.inputImages.findIndex((img) => img.id === replaceImageId) : -1
    return idx >= 0 ? getImageComments(state.prompt, idx) : []
  })
  const [comments, setComments] = useState<SketchComment[]>(() => initialComments.map((comment) => ({ ...comment, id: createSketchId() })))
  const [activeCommentId, setActiveCommentId] = useState<string | null>(null)
  // 打开输入框 / 开始拖动时的评论快照，结束时与结果比较，有变化才记一条撤销
  const editBeforeRef = useRef<SketchComment[] | null>(null)
  const dragBeforeRef = useRef<SketchComment[] | null>(null)

  const commentData = comments.filter((comment) => comment.text.trim()).map((comment) => ({ x: comment.x, y: comment.y, text: comment.text.trim() }))
  const commentsChanged = JSON.stringify(commentData) !== JSON.stringify(initialComments)

  const updateComment = (id: string, patch: Partial<SketchComment>) => {
    setComments((items) => items.map((comment) => comment.id === id ? { ...comment, ...patch } : comment))
  }

  /** 结束当前编辑：应用结果，并与打开输入框时的快照比较 */
  const settleEdit = (next: SketchComment[]) => {
    const before = editBeforeRef.current
    editBeforeRef.current = null
    setComments(next)
    if (before && JSON.stringify(before) !== JSON.stringify(next)) onCommit(before)
  }

  /** 收起正在编辑的评论：去掉首尾空白，空评论直接删除；keepId 对应的评论保留 */
  const closeActive = (keepId?: string) => comments.flatMap((comment) => {
    if (comment.id !== activeCommentId || comment.id === keepId) return [comment]
    return comment.text.trim() ? [{ ...comment, text: comment.text.trim() }] : []
  })

  const createComment = (x: number, y: number) => {
    const id = createSketchId()
    editBeforeRef.current = comments
    setComments([...comments, { id, x, y, text: '' }])
    setActiveCommentId(id)
  }

  const finishComment = () => {
    settleEdit(closeActive())
    setActiveCommentId(null)
  }

  const openComment = (id: string) => {
    const next = closeActive(id)
    settleEdit(next)
    editBeforeRef.current = next
    setActiveCommentId(id)
  }

  const removeComment = (id: string) => {
    if (!editBeforeRef.current) editBeforeRef.current = comments
    settleEdit(comments.filter((comment) => comment.id !== id))
    setActiveCommentId(null)
  }

  /** 拖动过程中只更新位置，松手时由 finishMove 记一条撤销 */
  const moveComment = (id: string, x: number, y: number) => {
    if (!dragBeforeRef.current) dragBeforeRef.current = comments
    updateComment(id, { x, y })
  }

  const finishMove = () => {
    const before = dragBeforeRef.current
    dragBeforeRef.current = null
    // 输入框打开期间的拖动并入这次编辑，收起时统一记录；拖动中途撤销过时位置可能并未变化
    if (before && !editBeforeRef.current && JSON.stringify(before) !== JSON.stringify(comments)) onCommit(before)
  }

  /** 撤销 / 重做时整体恢复评论，并收起输入框 */
  const restoreComments = (next: SketchComment[]) => {
    editBeforeRef.current = null
    dragBeforeRef.current = null
    setComments(next)
    setActiveCommentId(null)
  }

  /**
   * 把评论写入提示词中第 idx 张参考图的评论胶囊：已有则原地更新，否则插到输入框光标处（有选区时替换选中内容）。
   * merge 为 true 时保留该图原有评论，用于导出结果与已有参考图相同的情况。
   */
  const saveComments = (idx: number, merge = false) => {
    const latest = useStore.getState()
    const next = merge ? [...getImageComments(latest.prompt, idx), ...commentData] : commentData
    const selection = latest.promptSelection?.prompt === latest.prompt ? latest.promptSelection : { start: Infinity, end: Infinity }
    const result = upsertImageCommentMention(latest.prompt, idx, next, selection.start, selection.end)
    latest.setPrompt(result.prompt)
    // 输入框不在焦点上不会同步选区，手动移到新胶囊之后，避免下次插入仍按旧选区覆盖
    if (result.cursor != null) latest.setPromptSelection({ start: result.cursor, end: result.cursor })
  }

  return {
    comments,
    activeCommentId,
    commentData,
    commentsChanged,
    updateComment,
    createComment,
    finishComment,
    openComment,
    removeComment,
    moveComment,
    finishMove,
    restoreComments,
    saveComments,
  }
}
