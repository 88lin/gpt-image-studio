import { describe, expect, it } from 'vitest'
import CUSTOM_PROVIDER from '../../skills/gpt-image-studio/references/custom-provider.md?raw'
import PROMPT_DOC from '../../docs/custom-provider-llm-prompt.md?raw'
import { CUSTOM_PROVIDER_EXAMPLES, CUSTOM_PROVIDER_LLM_PROMPT, CUSTOM_PROVIDER_MANIFEST_SPEC } from './settingsCustomProvider'

describe('随附 Skill', () => {
  it('自定义服务商说明与应用的提示词一致', () => {
    expect(CUSTOM_PROVIDER).toContain(CUSTOM_PROVIDER_MANIFEST_SPEC)
    expect(CUSTOM_PROVIDER).toContain(CUSTOM_PROVIDER_EXAMPLES)
  })
})

describe('自定义服务商提示词文档', () => {
  it('与“复制给 LLM”的提示词一致', () => {
    const block = PROMPT_DOC.slice(PROMPT_DOC.indexOf('````text\n') + 9, PROMPT_DOC.lastIndexOf('\n````'))
    expect(block).toBe(CUSTOM_PROVIDER_LLM_PROMPT)
  })
})
