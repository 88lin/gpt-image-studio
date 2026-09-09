import { describe, expect, it } from 'vitest'
import { buildApiUrl } from './devProxy'
import { parseDefaultApiUrl } from './defaultApiUrl'

describe('parseDefaultApiUrl', () => {
  it.each(['', '   ', ' gpt-image-2.5-flare '])('preserves and trims an explicit image generation model %j', (model) => {
    const params = new URLSearchParams({ apiMode: 'responses', imageGenerationModel: model })
    const parsed = parseDefaultApiUrl(`https://api.example.com?${params}`)

    expect(parsed).toMatchObject({ apiMode: 'responses', imageGenerationModel: model.trim() })
  })

  it('leaves an omitted image generation model unset', () => {
    expect(parseDefaultApiUrl('https://api.example.com?apiMode=responses')).not.toHaveProperty('imageGenerationModel')
  })

  it('keeps automatic v1 routing for a root URL without a trailing slash', () => {
    const parsed = parseDefaultApiUrl('https://api.example.com')

    expect(parsed.baseUrl).toBe('https://api.example.com')
    expect(buildApiUrl(parsed.baseUrl, 'responses')).toBe('https://api.example.com/v1/responses')
  })

  it('preserves a trailing slash for direct endpoint joining', () => {
    const parsed = parseDefaultApiUrl('https://api.example.com/')

    expect(parsed.baseUrl).toBe('https://api.example.com/')
    expect(buildApiUrl(parsed.baseUrl, 'responses')).toBe('https://api.example.com/responses')
  })
})
