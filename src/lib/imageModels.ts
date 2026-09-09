import type { ApiProfile } from '../types'

export const GPT_IMAGE_25_MODELS = ['gpt-image-2.5-sunburst', 'gpt-image-2.5-flare'] as const
export const DEFAULT_IMAGES_MODEL = 'gpt-image-2.5-sunburst'

export function getImageGenerationModel(profile: ApiProfile) {
  return profile.provider === 'openai' && profile.apiMode === 'responses'
    ? profile.imageGenerationModel?.trim() ?? ''
    : profile.model
}

export function isGptImage25Model(model: string) {
  return model.trim().toLowerCase().includes('gpt-image-2.5')
}
