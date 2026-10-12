import { describe, expect, it, vi } from 'vitest'

vi.mock('@tauri-apps/api/core', () => ({ isTauri: () => false, invoke: vi.fn() }))

import * as db from './db'
import * as indexedDbBackend from './dbIndexedDb'

describe('db 门面（网页版）', () => {
  it('底层存取全部使用 IndexedDB 实现', () => {
    for (const [name, fn] of Object.entries(indexedDbBackend)) {
      expect(db[name as keyof typeof db], name).toBe(fn)
    }
  })
})
