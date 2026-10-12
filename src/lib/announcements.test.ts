import { describe, expect, it, vi } from 'vitest'
import type { AnnouncementContext } from './announcements'
import { detectOs, filterAnnouncements, matchesWhen, parseAnnouncements as parse, parseDismissedAnnouncements } from './announcements'

const BASE = 'https://web.example.com/app/'
const parseAnnouncements = (data: unknown) => parse(data, BASE)

const ctx: AnnouncementContext = {
  platform: 'web',
  os: 'windows',
  language: 'zh-CN',
  version: '0.8.2',
  imageCount: 120,
  taskCount: 40,
  standalone: false,
  now: '2026-10-11T08:00:00.000Z',
}

describe('parseAnnouncements', () => {
  it('保留合法字段并去掉首尾空白，条件原样保留', () => {
    expect(parseAnnouncements([{
      id: ' a ',
      title: ' 标题 ',
      content: '正文',
      note: ' 说明 ',
      when: { platform: 'web' },
      action: { label: '下载', url: 'https://example.com/' },
    }])).toEqual([{
      id: 'a',
      title: '标题',
      content: '正文',
      note: '说明',
      when: { platform: 'web' },
      action: { label: '下载', url: 'https://example.com/' },
    }])
  })

  it('丢弃非法条目和重复 id', () => {
    expect(parseAnnouncements({ id: 'a' })).toEqual([])
    const list = parseAnnouncements([
      null,
      'text',
      [],
      { id: '', title: 't', content: '' },
      { id: 'a', title: '', content: '' },
      { id: 'a', title: 't' },
      { id: 'a', title: '第一条', content: '', note: 1 },
      { id: 'a', title: '重复', content: '' },
    ])
    // note 不是字符串或为空时忽略
    expect(list).toEqual([{ id: 'a', title: '第一条', content: '' }])
  })

  it('按钮缺少文字或地址不是 http(s) 时只去掉按钮', () => {
    expect(parseAnnouncements([
      { id: 'a', title: 't', content: '', action: { label: '', url: 'https://example.com/' } },
      { id: 'b', title: 't', content: '', action: { label: '打开', url: 'javascript:alert(1)' } },
      { id: 'c', title: 't', content: '', action: 'https://example.com/' },
    ]).map((item) => item.action)).toEqual([undefined, undefined, undefined])
  })
})

describe('parseAnnouncements media', () => {
  const media = (value: unknown) => parseAnnouncements([{ id: 'a', title: 't', content: '', media: value }])[0].media

  it('相对路径按应用地址解析，宽高比缺省为 16 / 9', () => {
    expect(media({ type: 'html', src: 'announcements/intro.html' })).toEqual({ type: 'html', src: 'https://web.example.com/app/announcements/intro.html', aspectRatio: '16 / 9' })
    expect(media({ type: 'image', src: './a.webp', aspectRatio: '4:3' })).toEqual({ type: 'image', src: 'https://web.example.com/app/a.webp', aspectRatio: '4 / 3' })
    expect(media({ type: 'image', src: 'a.svg', aspectRatio: ' 2.35 / 1 ' })?.aspectRatio).toBe('2.35 / 1')
    expect(media({ type: 'image', src: 'a.svg', aspectRatio: '0/1' })?.aspectRatio).toBe('16 / 9')
    expect(media({ type: 'image', src: 'a.svg', aspectRatio: 'auto' })?.aspectRatio).toBe('16 / 9')
    // 单个反斜杠和省略斜杠的同协议写法仍解析到本站，可以接受
    expect(media({ type: 'image', src: '\\a.svg' })?.src).toBe('https://web.example.com/a.svg')
    expect(media({ type: 'image', src: 'https:a.svg' })?.src).toBe('https://web.example.com/app/a.svg')
  })

  it('类型未知或解析后不同源时只去掉媒体', () => {
    expect(media({ type: 'video', src: 'a.mp4' })).toBeUndefined()
    expect(media({ type: 'html', src: '' })).toBeUndefined()
    expect(media({ type: 'html', src: '/a.html' })).toBeUndefined()
    expect(media('a.html')).toBeUndefined()
    for (const src of [
      'https://evil.com/a.html',
      '//evil.com/a.html',
      '\\\\evil.com/a.html',
      '\\/evil.com/a.html',
      '/\\evil.com/a.html',
      'javascript:alert(1)',
      'java\tscript:alert(1)',
      '\u0001https://evil.com/a.html',
      'h\nttps://evil.com/a.html',
      'http:evil.com/a.html',
      'data:image/png;base64,AA',
    ]) {
      expect(media({ type: 'html', src }), JSON.stringify(src)).toBeUndefined()
    }
  })
})

describe('matchesWhen', () => {
  const match = (when: unknown, extra: Partial<AnnouncementContext> = {}) => matchesWhen(when, { ...ctx, ...extra })

  it('缺省或空对象时总是满足', () => {
    expect(match(undefined)).toBe(true)
    expect(match({})).toBe(true)
  })

  it('字面量相等、数组属于其一，多个键为且', () => {
    expect(match({ platform: 'web' })).toBe(true)
    expect(match({ platform: 'client' })).toBe(false)
    expect(match({ os: ['macos', 'windows'] })).toBe(true)
    expect(match({ os: ['macos', 'linux'] })).toBe(false)
    expect(match({ standalone: false, platform: 'web' })).toBe(true)
    expect(match({ standalone: true, platform: 'web' })).toBe(false)
  })

  it('支持 eq、ne、in 和大小比较，同一对象内的运算为且', () => {
    expect(match({ platform: { eq: 'web' } })).toBe(true)
    expect(match({ platform: { ne: 'web' } })).toBe(false)
    expect(match({ language: { in: ['en-US', 'zh-CN'] } })).toBe(true)
    expect(match({ imageCount: { gt: 120 } })).toBe(false)
    expect(match({ imageCount: { gte: 120 } })).toBe(true)
    expect(match({ imageCount: { lt: 121 } })).toBe(true)
    expect(match({ imageCount: { lte: 119 } })).toBe(false)
    expect(match({ taskCount: { gte: 10, lt: 50 } })).toBe(true)
    expect(match({ taskCount: { gte: 10, lt: 40 } })).toBe(false)
  })

  it('version 按版本号比较，now 按日期比较', () => {
    expect(match({ version: '0.8.2' })).toBe(true)
    expect(match({ version: 'v0.8.2' })).toBe(true)
    expect(match({ version: { gte: '0.8.0', lt: '0.9.0' } })).toBe(true)
    expect(match({ version: { lt: '0.8.10' } })).toBe(true)
    expect(match({ version: ['0.7.0', '0.8.2'] })).toBe(true)
    expect(match({ now: { lt: '2026-11-01T00:00:00+08:00' } })).toBe(true)
    expect(match({ now: { gte: '2026-10-12T00:00:00Z' } })).toBe(false)
    expect(match({ now: { gte: '2026-10-11T00:00:00+08:00', lt: '2026-10-12T00:00:00+08:00' } })).toBe(true)
  })

  it('all、any、not 组合，值可为条件或条件数组', () => {
    expect(match({ any: [{ platform: 'client' }, { imageCount: { gte: 100 } }] })).toBe(true)
    expect(match({ any: [{ platform: 'client' }, { imageCount: { gte: 200 } }] })).toBe(false)
    expect(match({ all: [{ platform: 'web' }, { os: 'windows' }] })).toBe(true)
    expect(match({ all: { platform: 'web' } })).toBe(true)
    expect(match({ not: { platform: 'client' } })).toBe(true)
    expect(match({ not: [{ platform: 'web' }, { os: 'windows' }] })).toBe(false)
    expect(match({ not: [{ platform: 'web' }, { os: 'macos' }] })).toBe(true)
    expect(match({ platform: 'web', any: [{ os: 'macos' }, { not: { standalone: true } }] })).toBe(true)
    expect(match({ any: [] })).toBe(false)
    expect(match({ all: [] })).toBe(true)
  })

  it('未知变量或写法非法时不满足，not 也不会把它变成满足，同一问题只提示一次', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    for (const when of [
      null,
      'web',
      ['web'],
      { browser: 'chrome' },
      { toString: 'x' },
      { platform: { like: 'w' } },
      { platform: {} },
      { platform: { gt: 'a' } },
      { imageCount: '100' },
      { imageCount: { gte: '100' } },
      { imageCount: { in: 100 } },
      { version: { gte: 8 } },
      { version: 'abc' },
      { version: { lt: '1.x' } },
      { version: { gte: '' } },
      { version: ['0.8.2', 'latest'] },
      { now: { lt: '2026-11-01' } },
      { now: { gte: '2026/10/01T00:00:00' } },
      { now: { lt: '2026-13-45T99:00:00' } },
      { now: { lt: 'not a date' } },
      { standalone: 'false' },
      { not: { browser: 'chrome' } },
      { any: [{ platform: 'web' }, 'x'] },
      { all: [null] },
      { not: { taskCount: { gte: 100, like: 1 } } },
      { not: { taskCount: [100, 'x'] } },
    ]) {
      expect(matchesWhen(when, ctx, 'bad'), JSON.stringify(when)).toBe(false)
    }
    const count = warn.mock.calls.length
    expect(count).toBeGreaterThan(0)
    matchesWhen({ browser: 'chrome' }, ctx, 'bad')
    expect(warn.mock.calls.length).toBe(count)
    warn.mockRestore()
  })
})

describe('detectOs', () => {
  it('从 UA 和 userAgentData.platform 判断系统', () => {
    expect(detectOs('Mozilla/5.0 (Windows NT 10.0; Win64; x64) Edg/141.0')).toBe('windows')
    expect(detectOs('', 'Windows')).toBe('windows')
    expect(detectOs('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)')).toBe('macos')
    expect(detectOs('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', '', 5)).toBe('ios')
    expect(detectOs('Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)')).toBe('ios')
    expect(detectOs('Mozilla/5.0 (Linux; Android 15; Pixel 9)')).toBe('android')
    expect(detectOs('Mozilla/5.0 (X11; Linux x86_64)')).toBe('linux')
    expect(detectOs('Mozilla/5.0 (X11; CrOS x86_64 14541.0.0)')).toBe('linux')
    expect(detectOs('curl/8.0')).toBe('other')
  })
})

describe('filterAnnouncements', () => {
  const list = parseAnnouncements([
    { id: 'web', title: 't', content: '', when: { platform: 'web' } },
    { id: 'client', title: 't', content: '', when: { platform: 'client' } },
    { id: 'bad', title: 't', content: '', when: 'web' },
    { id: 'all', title: 't', content: '' },
  ])

  it('按文件顺序返回满足条件且未读的公告', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    expect(filterAnnouncements(list, ctx, []).map((item) => item.id)).toEqual(['web', 'all'])
    expect(filterAnnouncements(list, { ...ctx, platform: 'client' }, ['all']).map((item) => item.id)).toEqual(['client'])
    warn.mockRestore()
  })
})

describe('parseDismissedAnnouncements', () => {
  it('只保留字符串 id，内容损坏时为空', () => {
    expect(parseDismissedAnnouncements(null)).toEqual([])
    expect(parseDismissedAnnouncements('{')).toEqual([])
    expect(parseDismissedAnnouncements('{"a":1}')).toEqual([])
    expect(parseDismissedAnnouncements('["a",1,"b"]')).toEqual(['a', 'b'])
  })
})
