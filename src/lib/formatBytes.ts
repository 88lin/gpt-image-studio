export function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`
  const units = ['B', 'KB', 'MB', 'GB', 'TB']
  const idx = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1)
  const value = bytes / 1024 ** idx
  return `${value.toFixed(value < 10 ? 2 : 1)} ${units[idx]}`
}
