import type { ApiMode } from '../types'
import { DEFAULT_STREAM_PARTIAL_IMAGES } from '../types'

import { normalizeBaseUrl } from './devProxy'

export function normalizeStreamPartialImages(value: unknown, fallback: number | undefined = DEFAULT_STREAM_PARTIAL_IMAGES): number {
  const fallbackValue = fallback ?? DEFAULT_STREAM_PARTIAL_IMAGES
  const numeric = typeof value === 'number' ? value : Number(value)
  if (!Number.isFinite(numeric)) return fallbackValue
  return Math.min(3, Math.max(0, Math.trunc(numeric)))
}

export interface DefaultApiUrlPatch {
  baseUrl: string
  apiKey?: string
  apiMode?: ApiMode
  model?: string
  name?: string
  codexCli?: boolean
  streamImages?: boolean
  streamPartialImages?: number
}

export function parseDefaultApiUrl(rawUrl: string): DefaultApiUrlPatch {
  const url = rawUrl.trim()
  if (!url) return { baseUrl: '' }

  try {
    const parsed = new URL(url)
    const patch: DefaultApiUrlPatch = {
      baseUrl: normalizeBaseUrl(parsed.origin + parsed.pathname),
    }

    const apiUrlParam = parsed.searchParams.get('apiUrl')
    const apiKeyParam = parsed.searchParams.get('apiKey')
    const apiModeParam = parsed.searchParams.get('apiMode')
    const modelParam = parsed.searchParams.get('model')
    const profileNameParam = parsed.searchParams.get('profileName')
    const codexCliParam = parsed.searchParams.get('codexCli')
    const streamImagesParam = parsed.searchParams.get('streamImages')
    const streamPartialImagesParam = parsed.searchParams.get('streamPartialImages')

    if (apiUrlParam !== null) patch.baseUrl = normalizeBaseUrl(apiUrlParam.trim())
    if (apiKeyParam !== null) patch.apiKey = apiKeyParam.trim()
    if (apiModeParam === 'images' || apiModeParam === 'responses') patch.apiMode = apiModeParam
    if (modelParam !== null && modelParam.trim()) patch.model = modelParam.trim()
    if (profileNameParam?.trim()) patch.name = profileNameParam.trim()
    if (codexCliParam !== null) patch.codexCli = codexCliParam.trim().toLowerCase() === 'true'
    if (streamImagesParam !== null) patch.streamImages = streamImagesParam.trim().toLowerCase() === 'true'
    if (streamPartialImagesParam !== null) patch.streamPartialImages = normalizeStreamPartialImages(streamPartialImagesParam)

    return patch
  } catch {
    return { baseUrl: normalizeBaseUrl(url) }
  }
}
