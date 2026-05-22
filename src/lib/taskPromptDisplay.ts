import type { TaskRecord } from '../types'

export function isAgentTaskPromptPending(task: TaskRecord): boolean {
  const isAgentTask = task.sourceMode === 'agent' || Boolean(task.agentConversationId || task.agentRoundId)
  return isAgentTask && task.status === 'running' && !task.prompt.trim()
}
