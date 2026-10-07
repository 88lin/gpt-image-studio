import { describe, expect, it } from 'vitest'
import type { InputImage } from '../types'
import { expandImageCommentMentions, getAtImageQuery, getImageCommentMention, getImageComments, getPromptIndexFromVisibleIndex, getPromptMentionParts, getSelectedImageMentionLabel, getTaskPromptText, getSelectedTextMentionLabel, insertImageMention, insertTextMentionAtVisibleRange, isCursorInSelectedImageMention, remapImageMentionsForOrder, replaceImageMentionsForApi, stripImageMentionMarkers, upsertImageCommentMention } from './promptImageMentions'

const images: InputImage[] = [
  { id: 'image-a', dataUrl: 'data:image/png;base64,a' },
  { id: 'image-b', dataUrl: 'data:image/png;base64,b' },
]

describe('prompt image mentions', () => {
  it('detects @ query after the cursor', () => {
    expect(getAtImageQuery('参考 @图', 5, images)).toEqual({ start: 3, query: '图' })
  })

  it('ignores @ query when there are no current reference images', () => {
    expect(getAtImageQuery('参考 @图', 5, [])).toBeNull()
  })

  it('keeps a completed image mention query selectable', () => {
    expect(getAtImageQuery('参考 @图2', 6, images)).toEqual({ start: 3, query: '图2' })
  })

  it('detects @ query in the middle of text without requiring whitespace prefix', () => {
    expect(getAtImageQuery('参考@', 3, images)).toEqual({ start: 2, query: '' })
  })

  it('replaces middle-text @ query with selected current reference image mention', () => {
    expect(insertImageMention('参考@生成', 2, 3, 1)).toEqual({
      prompt: `参考${getSelectedImageMentionLabel(1)}生成`,
      cursor: 5,
    })
  })

  it('does not add extra spaces around line breaks when inserting mentions', () => {
    expect(insertImageMention('参考\n@\n生成', 3, 4, 0)).toEqual({
      prompt: `参考\n${getSelectedImageMentionLabel(0)}\n生成`,
      cursor: 6,
    })
  })

  it('inserts selected agent round image mentions', () => {
    expect(insertTextMentionAtVisibleRange('参考@生成', 2, 3, '@第1轮图2')).toEqual({
      prompt: `参考${getSelectedTextMentionLabel('@第1轮图2')}生成`,
      cursor: 8,
    })
  })



  it('splits valid image mentions for tag rendering', () => {
    expect(getPromptMentionParts(`用${getSelectedImageMentionLabel(1)}的方式生成@图9`, images)).toEqual([
      { type: 'text', text: '用' },
      { type: 'mention', text: '@图2', imageIndex: 1 },
      { type: 'text', text: '的方式生成@图9' },
    ])
  })

  it('keeps manually typed mentions as plain text', () => {
    expect(getPromptMentionParts('用@图2的方式生成', images)).toEqual([
      { type: 'text', text: '用@图2的方式生成' },
    ])
  })

  it('splits selected agent round image mentions for tag rendering', () => {
    expect(getPromptMentionParts(`用${getSelectedTextMentionLabel('@第2轮图4')}生成`, images)).toEqual([
      { type: 'text', text: '用' },
      { type: 'mention', text: '@第2轮图4', mentionText: getSelectedTextMentionLabel('@第2轮图4') },
      { type: 'text', text: '生成' },
    ])
  })

  it('detects cursor inside selected image mentions', () => {
    const prompt = `参考 ${getSelectedImageMentionLabel(1)} 生成`

    expect(isCursorInSelectedImageMention(prompt, 6)).toBe(true)
    expect(isCursorInSelectedImageMention(prompt, 3)).toBe(false)
    expect(isCursorInSelectedImageMention(prompt, 7)).toBe(false)
    expect(isCursorInSelectedImageMention('参考 @图2 生成', 6)).toBe(false)
  })

  it('detects cursor inside selected agent round image mentions', () => {
    const prompt = `参考 ${getSelectedTextMentionLabel('@第1轮图2')} 生成`

    expect(isCursorInSelectedImageMention(prompt, 9)).toBe(true)
    expect(isCursorInSelectedImageMention(prompt, 3)).toBe(false)
    expect(isCursorInSelectedImageMention(prompt, 10)).toBe(false)
  })

  describe('remapImageMentionsForOrder', () => {
    it('keeps mentions attached to the same image after reordering', () => {
      expect(remapImageMentionsForOrder(`用 ${getSelectedImageMentionLabel(1)} 参考 ${getSelectedImageMentionLabel(0)}`, images, [images[1], images[0]])).toBe(`用 ${getSelectedImageMentionLabel(0)} 参考 ${getSelectedImageMentionLabel(1)}`)
    })

    it('marks removed image mentions as unavailable', () => {
      expect(remapImageMentionsForOrder(`用 ${getSelectedImageMentionLabel(1)}`, images, [images[0]])).toBe('用 @已移除图片')
    })

    it('keeps mentions attached when an image id is replaced with an equivalent id', () => {
      const replacement = { id: 'image-b-replacement', dataUrl: images[1].dataUrl }

      expect(remapImageMentionsForOrder(
        `用 ${getSelectedImageMentionLabel(1)}`,
        images,
        [images[0], replacement],
        { [images[1].id]: replacement.id },
      )).toBe(`用 ${getSelectedImageMentionLabel(1)}`)
    })
  })

  describe('replaceImageMentionsForApi', () => {
    it('replaces single mention', () => {
      expect(replaceImageMentionsForApi(`把 ${getSelectedImageMentionLabel(0)} 变蓝`)).toBe('把 [image 1] 变蓝')
    })

    it('replaces multiple mentions', () => {
      expect(replaceImageMentionsForApi(`把 ${getSelectedImageMentionLabel(1)} 的背景换到 ${getSelectedImageMentionLabel(0)} 上`)).toBe('把 [image 2] 的背景换到 [image 1] 上')
    })

    it('does not replace manually typed mentions', () => {
      expect(replaceImageMentionsForApi('把 @图1 变蓝')).toBe('把 @图1 变蓝')
    })

    it('returns prompt unchanged when no mentions', () => {
      expect(replaceImageMentionsForApi('生成一只猫')).toBe('生成一只猫')
    })

    it('does not replace mentions outside the current image range', () => {
      expect(replaceImageMentionsForApi(`把 ${getSelectedImageMentionLabel(2)} 变蓝`, 2)).toBe('把 @图3 变蓝')
    })
  })

  describe('image comment mentions', () => {
    const comments = [{ x: 0.52, y: 0.41, text: '改成红色 "引号"' }, { x: 0.1, y: 0.8, text: '删除' }]

    it('round-trips comments and hides the data segment from visible text', () => {
      const prompt = `参考${getImageCommentMention(1, comments)}调整`
      expect(getImageComments(prompt, 1)).toEqual(comments)
      expect(getImageComments(prompt, 0)).toEqual([])
      expect(stripImageMentionMarkers(prompt)).toBe('参考@图2 评论调整')
      // 可见偏移 8 位于胶囊之后，应跳过隐藏的数据段
      expect(prompt.slice(getPromptIndexFromVisibleIndex(prompt, 8))).toBe('调整')
      expect(getPromptMentionParts(prompt, images)[1]).toEqual({ type: 'mention', text: '@图2 评论', imageIndex: 1, mentionText: getImageCommentMention(1, comments) })
    })

    it('inserts a comment mention right before an existing mention without breaking it', () => {
      const prompt = `abc${getSelectedImageMentionLabel(0)} tail`
      for (const [cursor, before] of [[3, 'abc'], [0, '']] as const) {
        const next = upsertImageCommentMention(cursor === 0 ? `${getSelectedImageMentionLabel(0)} tail` : prompt, 1, comments, cursor).prompt
        expect(next).toBe(`${before}${getImageCommentMention(1, comments)}${getSelectedImageMentionLabel(0)} tail`)
      }
    })

    it('replaces the selected mention and returns the cursor after the new comment mention', () => {
      const prompt = `前${getSelectedImageMentionLabel(0)}后`
      const result = upsertImageCommentMention(prompt, 1, comments, 1, 4)
      expect(result.prompt).toBe(`前${getImageCommentMention(1, comments)}后`)
      expect(result.cursor).toBe(7)
      expect(upsertImageCommentMention(result.prompt, 1, comments.slice(1), 0, 8).cursor).toBeNull()
    })

    it('inserts, replaces and removes the comment mention of an image', () => {
      const inserted = upsertImageCommentMention('前后', 0, comments, 1).prompt
      expect(stripImageMentionMarkers(inserted)).toBe('前@图1 评论后')
      const replaced = upsertImageCommentMention(inserted, 0, comments.slice(1), 0).prompt
      expect(getImageComments(replaced, 0)).toEqual(comments.slice(1))
      expect(stripImageMentionMarkers(replaced)).toBe('前@图1 评论后')
      expect(upsertImageCommentMention(replaced, 0, [], 0)).toEqual({ prompt: '前后', cursor: null })
      expect(stripImageMentionMarkers(upsertImageCommentMention('文本', 1, comments, Infinity).prompt)).toBe('文本@图2 评论')
    })

    it('follows image reordering and disappears with the removed image', () => {
      const prompt = getImageCommentMention(0, comments)
      expect(getImageComments(remapImageMentionsForOrder(prompt, images, [images[1], images[0]]), 1)).toEqual(comments)
      expect(remapImageMentionsForOrder(prompt, images, [images[1]])).toBe('')
    })

    it('expands comments into percentage-coordinate lines, separated from text and other images by a blank line', () => {
      const prompt = `把背景换掉${getImageCommentMention(0, comments)}${getImageCommentMention(1, [comments[1]])} 整体偏暖色调`
      expect(stripImageMentionMarkers(expandImageCommentMentions(prompt))).toBe([
        '把背景换掉',
        '',
        '@图1 notes:',
        '1. (X=52%, Y=41%) 改成红色 "引号"',
        '2. (X=10%, Y=80%) 删除',
        '',
        '@图2 notes:',
        '1. (X=10%, Y=80%) 删除',
        '',
        '整体偏暖色调',
      ].join('\n'))
      expect(replaceImageMentionsForApi(expandImageCommentMentions(getImageCommentMention(0, comments)), 1)).toContain('[image 1] notes:')
    })

    it('shows the exact request text for task records', () => {
      const prompt = `参考 ${getSelectedImageMentionLabel(0)} ${getImageCommentMention(0, [comments[1]])}`
      expect(getTaskPromptText(prompt, 1)).toBe('参考 [image 1]\n\n[image 1] notes:\n1. (X=10%, Y=80%) 删除')
      // 原本就空了一行时不再重复补空行
      expect(getTaskPromptText(`前\n\n${getImageCommentMention(0, [comments[1]])}\n\n后`, 1)).toBe('前\n\n[image 1] notes:\n1. (X=10%, Y=80%) 删除\n\n后')
    })
  })
})
