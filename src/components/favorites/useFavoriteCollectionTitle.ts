import { getFavoriteCollectionTitle, useStore } from '../../store'

export function useFavoriteCollectionTitle() {
  const activeFavoriteCollectionId = useStore((s) => s.activeFavoriteCollectionId)
  const collections = useStore((s) => s.favoriteCollections)
  return activeFavoriteCollectionId ? getFavoriteCollectionTitle(activeFavoriteCollectionId, collections) : ''
}
