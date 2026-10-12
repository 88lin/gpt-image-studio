import { afterEach, describe, expect, it, vi } from 'vitest'

import { apiFetch, FetchConnectError } from './platform'

const invoke = vi.hoisted(() => vi.fn())
// 替换 FinalizationRegistry，用来检查登记、注销，并模拟回收
const registry = vi.hoisted(() => {
  const state = { cleanup: (_id: string) => undefined as unknown, live: new Map<object, string>() }
  globalThis.FinalizationRegistry = class {
    // 其他库也会创建实例，只记下 apiFetch 登记过的那个
    constructor(private cleanup: (id: string) => unknown) {}
    register(_target: object, id: string, token: object) {
      state.cleanup = this.cleanup
      state.live.set(token, id)
    }
    unregister(token: object) { return state.live.delete(token) }
  } as unknown as typeof FinalizationRegistry
  return state
})

vi.mock('@tauri-apps/api/core', () => ({ isTauri: () => true, invoke }))

const encode = (text: string) => new TextEncoder().encode(text).buffer

/** 按 Rust 侧的行为模拟 http_send / http_read / http_cancel：chunks 用完时读到结尾；取消后读取立即失败，挂起中的读取也随之失败 */
function fakeBackend(head: Record<string, unknown>, chunks: Array<ArrayBuffer | 'hang' | Error>) {
  let canceled = false
  let cancelPending: ((reason: string) => void) | null = null
  invoke.mockImplementation(async (cmd: string) => {
    if (cmd === 'http_send') return { status: 200, statusText: 'OK', headers: [], url: 'https://api.example.com/v1', ...head }
    if (cmd === 'http_cancel') {
      canceled = true
      cancelPending?.('请求已取消')
      return
    }
    if (canceled) throw '请求已取消'
    const next = chunks.shift() ?? new ArrayBuffer(0)
    if (next instanceof Error) throw next.message
    if (next !== 'hang') return next
    return new Promise((_, reject) => { cancelPending = reject })
  })
}

const sendCall = () => invoke.mock.calls.find((call) => call[0] === 'http_send')!

describe('apiFetch（客户端）', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    invoke.mockReset()
  })

  it('data: 和 blob: 地址走调用时的全局 fetch', async () => {
    const nativeFetch = vi.fn().mockResolvedValue(new Response('ok'))
    vi.stubGlobal('fetch', nativeFetch)

    await apiFetch('data:text/plain,hi')
    await apiFetch('blob:http://tauri.localhost/abc')

    expect(nativeFetch).toHaveBeenCalledTimes(2)
    expect(invoke).not.toHaveBeenCalled()
  })

  it('http/https 地址交给 Rust：请求体以二进制传入，参数经 x-meta 传入，响应体逐块读出', async () => {
    fakeBackend({ status: 201, statusText: 'Created', headers: [['content-type', 'application/json']], url: 'https://cdn.example.com/final' }, [encode('{"a":'), encode('1}')])

    const res = await apiFetch('https://api.example.com/v1/responses', { method: 'POST', headers: new Headers({ Authorization: 'Bearer k' }), body: '{"x":1}' })

    const [, body, opts] = sendCall()
    expect(new TextDecoder().decode(body as Uint8Array)).toBe('{"x":1}')
    const meta = JSON.parse(decodeURIComponent(opts.headers['x-meta']))
    expect(meta).toMatchObject({ method: 'POST', url: 'https://api.example.com/v1/responses' })
    expect(meta.headers).toContainEqual(['authorization', 'Bearer k'])
    expect(meta.headers.some(([name]: [string]) => name === 'origin')).toBe(false)
    expect(res.status).toBe(201)
    expect(res.headers.get('Content-Type')).toBe('application/json')
    expect(res.url).toBe('https://cdn.example.com/final')
    expect(await res.json()).toEqual({ a: 1 })
    expect(invoke.mock.calls.filter((call) => call[0] === 'http_read')).toHaveLength(3)
  })

  it('FormData 请求体带上 multipart 边界', async () => {
    fakeBackend({}, [])
    const form = new FormData()
    form.append('prompt', '猫')

    await apiFetch('https://api.example.com/v1/images/edits', { method: 'POST', body: form })

    const [, body, opts] = sendCall()
    const meta = JSON.parse(decodeURIComponent(opts.headers['x-meta']))
    const contentType = meta.headers.find(([name]: [string]) => name === 'content-type')[1] as string
    expect(contentType).toMatch(/^multipart\/form-data; boundary=/)
    expect(new TextDecoder().decode(body as Uint8Array)).toContain('猫')
  })

  it('204 等状态不带响应体，并释放 Rust 侧的请求', async () => {
    fakeBackend({ status: 204, statusText: 'No Content' }, [])

    const res = await apiFetch('https://api.example.com/v1/x', { method: 'DELETE' })

    expect(res.status).toBe(204)
    expect(res.body).toBeNull()
    expect(invoke.mock.calls.some((call) => call[0] === 'http_cancel')).toBe(true)
  })

  it('连接阶段的错误转换为 FetchConnectError，消息只保留中文原因', async () => {
    invoke.mockRejectedValue('连接被拒绝，请检查 API 地址和端口是否正确、服务是否已启动。（错误码 10061）')

    const err = await apiFetch('http://127.0.0.1:1/v1').catch((e) => e)

    expect(err).toBeInstanceOf(FetchConnectError)
    expect(err).toBeInstanceOf(TypeError)
    expect(err.message).toBe('连接被拒绝，请检查 API 地址和端口是否正确、服务是否已启动。（错误码 10061）')
  })

  it('读取响应体时断流转换为普通 TypeError，不是 FetchConnectError', async () => {
    fakeBackend({}, [encode('data: 1\n\n'), new Error('读取响应时连接中断。（错误码 10054）')])

    const res = await apiFetch('https://api.example.com/v1')
    const err = await res.text().catch((e) => e)

    expect(err).toBeInstanceOf(TypeError)
    expect(err).not.toBeInstanceOf(FetchConnectError)
    expect(err.message).toBe('读取响应时连接中断。（错误码 10054）')
  })

  it('json()、blob() 直接读取响应体流：保留取消原因和 Content-Type', async () => {
    fakeBackend({ headers: [['content-type', 'image/png']] }, [encode('ab'), 'hang'])
    const controller = new AbortController()

    const res = await apiFetch('https://api.example.com/a.png', { signal: controller.signal })
    const pending = res.json()
    await vi.waitFor(() => expect(invoke.mock.calls.filter((call) => call[0] === 'http_read')).toHaveLength(2))
    controller.abort(new DOMException('请求超时', 'AbortError'))
    await expect(pending).rejects.toMatchObject({ name: 'AbortError', message: '请求超时' })

    fakeBackend({ headers: [['content-type', 'image/png']] }, [encode('ab'), encode('c')])
    const blob = await (await apiFetch('https://api.example.com/a.png')).blob()
    expect(blob.type).toBe('image/png')
    expect(await blob.text()).toBe('abc')
  })

  it('响应体读完后注销回收登记；未读就被回收时通知 Rust 取消', async () => {
    // 前面的用例有未读的响应体，登记仍在
    registry.live.clear()
    fakeBackend({}, [encode('ok')])
    expect(await (await apiFetch('https://api.example.com')).text()).toBe('ok')
    expect(registry.live.size).toBe(0)

    fakeBackend({ status: 503 }, [encode('busy')])
    await apiFetch('https://api.example.com')
    expect(registry.live.size).toBe(1)
    const [id] = registry.live.values()
    registry.live.clear()
    registry.cleanup(id)
    expect(invoke).toHaveBeenCalledWith('http_cancel', { id })
  })

  it('已取消的信号不发出请求', async () => {
    const controller = new AbortController()
    controller.abort()

    await expect(apiFetch('https://api.example.com', { signal: controller.signal })).rejects.toMatchObject({ name: 'AbortError' })
    expect(invoke).not.toHaveBeenCalled()
  })

  it('读取响应体期间取消：通知 Rust 断开连接，并抛出 signal.reason', async () => {
    fakeBackend({}, [encode('data: 1\n\n'), 'hang'])
    const controller = new AbortController()

    const res = await apiFetch('https://api.example.com', { signal: controller.signal })
    const reader = res.body!.getReader()
    expect(new TextDecoder().decode((await reader.read()).value)).toBe('data: 1\n\n')
    const pending = reader.read()
    // 等第二次 http_read 挂起后再取消，对应流式停顿时点击停止或超时
    await vi.waitFor(() => expect(invoke.mock.calls.filter((call) => call[0] === 'http_read')).toHaveLength(2))
    controller.abort(new DOMException('请求超时', 'AbortError'))

    await expect(pending).rejects.toMatchObject({ name: 'AbortError', message: '请求超时' })
    const id = JSON.parse(decodeURIComponent(sendCall()[2].headers['x-meta'])).id
    expect(invoke).toHaveBeenCalledWith('http_cancel', { id })
  })

  it('请求阶段取消时抛出 signal.reason，读完后不再响应取消', async () => {
    let rejectSend: (reason: string) => void = () => undefined
    invoke.mockImplementation((cmd: string) => cmd === 'http_send'
      ? new Promise((_, reject) => { rejectSend = reject })
      : Promise.resolve())
    const controller = new AbortController()

    const pending = apiFetch('https://api.example.com', { signal: controller.signal })
    await vi.waitFor(() => expect(invoke).toHaveBeenCalledWith('http_send', expect.anything(), expect.anything()))
    controller.abort()
    rejectSend('请求已取消')

    await expect(pending).rejects.toMatchObject({ name: 'AbortError' })
    expect(invoke.mock.calls.filter((call) => call[0] === 'http_cancel')).toHaveLength(1)

    invoke.mockReset()
    fakeBackend({}, [encode('ok')])
    const done = new AbortController()
    const res = await apiFetch('https://api.example.com', { signal: done.signal })
    expect(await res.text()).toBe('ok')
    done.abort()
    expect(invoke.mock.calls.some((call) => call[0] === 'http_cancel')).toBe(false)
  })
})
