import { create } from 'zustand'
import type { UpdateProgress } from '../lib/clientUpdate'
import { downloadUpdate, getReadyUpdate, installUpdate } from '../lib/clientUpdate'
import { hasInterruptibleOperations } from '../lib/dataOperations'
import { compareVersions } from '../lib/releaseUpdates'
import { flushTauriStorageBeforeExit } from '../lib/tauriStorage'
import { useStore } from '../store'

interface ClientUpdateState {
  status: 'idle' | 'downloading' | 'ready' | 'installing'
  progress: UpdateProgress | null
  // 本地有效安装包的版本，可能低于弹窗中的最新版本
  readyVersion: string
}

/** 客户端应用内更新的状态；放在模块级 store 中，关闭弹窗后下载继续，再次打开仍能看到进度 */
export const useClientUpdate = create<ClientUpdateState>(() => ({
  status: 'idle',
  progress: null,
  readyVersion: '',
}))

const errorMessage = (err: unknown) => err instanceof Error ? err.message : String(err)

const isBusy = () => {
  const status = useClientUpdate.getState().status
  return status === 'downloading' || status === 'installing'
}

async function readReady() {
  try {
    return await getReadyUpdate()
  } catch (err) {
    console.warn('检查本地更新包失败：', err)
    return null
  }
}

/** 打开弹窗时检查本地是否已有校验通过的安装包，有则直接显示“安装” */
export async function refreshClientUpdate() {
  if (isBusy()) return
  const version = await readReady()
  // 校验期间可能已开始下载或安装，此时不能用旧结果覆盖状态
  if (isBusy()) return
  useClientUpdate.setState({ status: version ? 'ready' : 'idle', readyVersion: version ?? '' })
}

export async function startClientUpdateDownload(version: string) {
  useClientUpdate.setState({ status: 'downloading', progress: null })
  try {
    await downloadUpdate(version, (progress) => useClientUpdate.setState({ progress }))
    useClientUpdate.setState({ status: 'ready', readyVersion: version })
  } catch (err) {
    console.warn('下载客户端更新失败：', err)
    // 保存失败时原有安装包可能已被删除，也可能仍在，按磁盘上的实际情况显示“安装”或“下载”
    const ready = await readReady()
    useClientUpdate.setState({ status: ready ? 'ready' : 'idle', readyVersion: ready ?? '' })
    useStore.getState().showToast(errorMessage(err), 'error')
  }
}

export async function startClientUpdateInstall() {
  useClientUpdate.setState({ status: 'installing' })
  try {
    // 安装程序启动后应用直接退出，不经过关闭窗口时的写入，先写入尚未保存的设置
    await flushTauriStorageBeforeExit()
    // 成功时应用会退出并由安装程序重新打开，不会返回
    await installUpdate()
  } catch (err) {
    console.warn('安装客户端更新失败：', err)
    // 安装包可能已在 Rust 侧校验失败并被删除，重新确认后决定显示“安装”还是“下载”
    const version = await readReady()
    useClientUpdate.setState({ status: version ? 'ready' : 'idle', readyVersion: version ?? '' })
    useStore.getState().showToast(errorMessage(err), 'error')
  }
}

/**
 * 点击“安装”：安装会关闭客户端，有关闭后无法恢复的操作时先确认；
 * 已下载的版本低于最新版本时一并询问，可改为下载最新版本（覆盖已下载的安装包），取消时保留安装包
 */
export function requestClientUpdateInstall(latestVersion: string) {
  const state = useStore.getState()
  const readyVersion = useClientUpdate.getState().readyVersion
  const busy = hasInterruptibleOperations(state.tasks, state.agentConversations, state.batchProgress)
  const outdated = compareVersions(readyVersion, latestVersion) < 0
  if (!busy && !outdated) return void startClientUpdateInstall()
  const warning = '当前有任务或数据操作正在进行。\n\n安装更新会关闭客户端，并中断这些操作。'
  if (!outdated) {
    state.setConfirmDialog({
      title: '安装更新',
      message: warning,
      confirmText: '安装',
      tone: 'warning',
      action: () => void startClientUpdateInstall(),
    })
    return
  }
  state.setConfirmDialog({
    title: '发现更新的版本',
    message: `最新版本为 v${latestVersion}，已下载的是 v${readyVersion}。${busy ? `\n\n${warning}` : ''}`,
    buttons: [
      { label: '取消', tone: 'secondary', action: () => {} },
      { label: '下载新版本', tone: 'secondary', action: () => void startClientUpdateDownload(latestVersion) },
      { label: '继续安装', tone: busy ? 'warning' : 'primary', action: () => void startClientUpdateInstall() },
    ],
  })
}
