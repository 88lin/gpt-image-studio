import type { TaskRecord, FavoriteCollection } from '../../types'
import { ALL_FAVORITES_COLLECTION_ID, getTaskFavoriteCollectionIds } from '../../store'

export type CollectionCard = {
  id: string
  name: string
  collection?: FavoriteCollection
  tasks: TaskRecord[]
}

function sameIdSet(a: string[], b: string[]) {
  if (a.length !== b.length) return false
  const bSet = new Set(b)
  return a.every((id) => bSet.has(id))
}

export function getInitialCheckedCollectionIds(tasks: TaskRecord[], defaultFavoriteCollectionId: string | null) {
  if (!tasks.length) return defaultFavoriteCollectionId ? [defaultFavoriteCollectionId] : []
  const idSets = tasks.map(getTaskFavoriteCollectionIds)
  const hasFavorite = idSets.some((ids) => ids.length > 0)
  if (!hasFavorite) return defaultFavoriteCollectionId ? [defaultFavoriteCollectionId] : []
  const first = idSets[0] ?? []
  return idSets.every((ids) => sameIdSet(ids, first)) ? first : []
}

export function getCollectionTasks(collectionId: string, tasks: TaskRecord[]) {
  const favoriteTasks = tasks.filter((task) => task.isFavorite)
  if (collectionId === ALL_FAVORITES_COLLECTION_ID) return favoriteTasks
  return favoriteTasks.filter((task) => getTaskFavoriteCollectionIds(task).includes(collectionId))
}

export function getLatestCoverTask(tasks: TaskRecord[]) {
  return [...tasks]
    .filter((task) => task.outputImages?.length)
    .sort((a, b) => b.createdAt - a.createdAt)[0]
}
