import { describe, expect, it, vi } from 'vitest'

const open = vi.hoisted(() => ({ req: null as null | { result?: unknown; onblocked?: () => void; onsuccess?: () => void } }))
vi.stubGlobal('indexedDB', {
  open: () => {
    open.req = {}
    return open.req
  },
})

import { isDbBlocked, openDB, subscribeDbBlocked } from './idb'

describe('idb', () => {
  it('打开被其他标签页阻塞时通知界面，解除后自动继续并清除提示', async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    const listener = vi.fn()
    const unsubscribe = subscribeDbBlocked(listener)
    const opening = openDB()

    open.req!.onblocked!()
    expect(isDbBlocked()).toBe(true)
    expect(listener).toHaveBeenCalledOnce()

    const db = { close: vi.fn() }
    open.req!.result = db
    open.req!.onsuccess!()
    await expect(opening).resolves.toBe(db)
    expect(isDbBlocked()).toBe(false)
    expect(listener).toHaveBeenCalledTimes(2)
    unsubscribe()
  })
})
