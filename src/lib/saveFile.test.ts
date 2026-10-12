import { beforeEach, describe, expect, it, vi } from 'vitest'

const invoke = vi.hoisted(() => vi.fn())

vi.mock('@tauri-apps/api/core', () => ({ isTauri: () => true, invoke }))

import { pickSaveDir, saveFile, saveFileToDir, setBeforeSave, setSaveToDefaultDir } from './saveFile'

const MB = 1024 * 1024

describe('saveFile（客户端）', () => {
  beforeEach(() => {
    invoke.mockReset()
    setBeforeSave(null)
    setSaveToDefaultDir(false)
  })

  it('分块写入临时文件后提交，每块不超过 8 MB', async () => {
    const chunks: Uint8Array[] = []
    invoke.mockImplementation(async (cmd: string, args: unknown, opts?: { headers: Record<string, string> }) => {
      if (cmd === 'save_file') return 7
      if (cmd === 'save_write') {
        expect(opts?.headers['x-id']).toBe('7')
        chunks.push(new Uint8Array(args as Uint8Array))
        return null
      }
      if (cmd === 'save_commit') return 'D:\\out\\a.zip'
      throw new Error(`unexpected ${cmd}`)
    })
    const data = new Uint8Array(16 * MB + 3).map((_, i) => i % 251)
    expect(await saveFile(data, 'a.zip')).toBe('D:\\out\\a.zip')
    expect(invoke.mock.calls[0]).toEqual(['save_file', { name: 'a.zip' }])
    expect(chunks.map((c) => c.byteLength)).toEqual([8 * MB, 8 * MB, 3])
    const joined = new Uint8Array(data.byteLength)
    chunks.reduce((offset, c) => (joined.set(c, offset), offset + c.byteLength), 0)
    // 逐字节比较，toEqual 比较两个 16 MB 数组过慢
    expect(joined.every((v, i) => v === data[i])).toBe(true)
    expect(invoke.mock.calls[invoke.mock.calls.length - 1]).toEqual(['save_commit', { id: 7 }])
  })

  it('用户取消保存对话框时不写入', async () => {
    invoke.mockResolvedValue(null)
    expect(await saveFile(new Blob(['x']), 'a.png')).toBeNull()
    expect(invoke).toHaveBeenCalledTimes(1)
  })

  it('写入失败时丢弃临时文件并抛出原因', async () => {
    invoke.mockImplementation(async (cmd: string) => {
      if (cmd === 'save_dir_begin') return 3
      if (cmd === 'save_write') throw '磁盘已满'
      return null
    })
    await expect(saveFileToDir({ token: 1, path: 'D:\\out' }, new Blob(['abc']), 'a.png')).rejects.toBe('磁盘已满')
    expect(invoke.mock.calls.map((c) => c[0])).toEqual(['save_dir_begin', 'save_write', 'save_abort'])
    expect(invoke.mock.calls[0][1]).toEqual({ token: 1, name: 'a.png' })
    expect(invoke.mock.calls[2][1]).toEqual({ id: 3 })
  })

  it('空文件直接提交', async () => {
    invoke.mockImplementation(async (cmd: string) => (cmd === 'save_dir_begin' ? 1 : 'D:\\out\\empty.txt'))
    expect(await saveFileToDir({ token: 0, path: 'D:\\out' }, new Uint8Array(0), 'empty.txt')).toBe('D:\\out\\empty.txt')
    expect(invoke.mock.calls.map((c) => c[0])).toEqual(['save_dir_begin', 'save_commit'])
  })

  it('首次保存询问被取消时不弹保存对话框，也不写入', async () => {
    setBeforeSave(async () => false)
    expect(await saveFile(new Blob(['x']), 'a.png')).toBeNull()
    expect(await pickSaveDir()).toBeNull()
    expect(invoke).not.toHaveBeenCalled()
  })

  it('首次保存询问后按所选方式继续本次保存', async () => {
    setBeforeSave(async () => {
      setSaveToDefaultDir(true)
      return true
    })
    invoke.mockImplementation(async (cmd: string) => {
      if (cmd === 'download_dir_use') return { token: 2, path: 'D:\\out' }
      if (cmd === 'save_dir_begin') return 5
      if (cmd === 'save_commit') return 'D:\\out\\a.png'
      return null
    })
    expect(await saveFile(new Blob(['x']), 'a.png')).toBe('D:\\out\\a.png')
    expect(invoke.mock.calls.map((c) => c[0])).toEqual(['download_dir_use', 'save_dir_begin', 'save_write', 'save_commit'])
    expect(await pickSaveDir()).toEqual({ token: 2, path: 'D:\\out' })
  })

  it('报告写入进度，取消后不再写入并丢弃临时文件', async () => {
    const controller = new AbortController()
    const progress: number[] = []
    invoke.mockImplementation(async (cmd: string) => {
      if (cmd === 'save_dir_begin') return 4
      return null
    })
    const data = new Uint8Array(20 * MB)
    const saving = saveFileToDir({ token: 1, path: 'D:\\out' }, data, 'a.zip', {
      signal: controller.signal,
      onProgress: (written, total) => {
        progress.push(written)
        expect(total).toBe(20 * MB)
        if (written === 8 * MB) controller.abort()
      },
    })
    await expect(saving).rejects.toThrow()
    expect(progress).toEqual([8 * MB])
    expect(invoke.mock.calls.map((c) => c[0])).toEqual(['save_dir_begin', 'save_write', 'save_abort'])
  })

  it('最后一块写完后取消也不提交', async () => {
    const controller = new AbortController()
    invoke.mockImplementation(async (cmd: string) => (cmd === 'save_dir_begin' ? 6 : null))
    const saving = saveFileToDir({ token: 1, path: 'D:\\out' }, new Uint8Array(3), 'a.zip', {
      signal: controller.signal,
      onProgress: () => controller.abort(),
    })
    await expect(saving).rejects.toThrow()
    expect(invoke.mock.calls.map((c) => c[0])).toEqual(['save_dir_begin', 'save_write', 'save_abort'])
  })
})
