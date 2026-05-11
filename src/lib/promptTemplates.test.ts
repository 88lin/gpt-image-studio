import { describe, expect, it } from 'vitest'
import {
  BUILT_IN_PROMPT_TEMPLATES,
  EXCLUDED_PROMPT_TEMPLATE_KEYWORDS,
  PROMPT_TEMPLATE_CATEGORIES,
  PROMPT_TEMPLATE_SUBCATEGORIES,
  getPromptTemplatesByCategory,
  getPromptTemplatesBySubcategory,
  getPromptTemplateSubcategories,
  searchPromptTemplates,
} from './promptTemplates'

function chineseCharacterRatio(text: string) {
  const lettersAndNumbers = Array.from(text).filter((char) => /[\p{L}\p{N}]/u.test(char))
  if (lettersAndNumbers.length === 0) return 1
  const chineseCharacters = lettersAndNumbers.filter((char) => /[\u4e00-\u9fff]/.test(char))
  return chineseCharacters.length / lettersAndNumbers.length
}

function normalizeTemplateTextForDedup(text: string) {
  return text
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[\s\p{P}\p{S}]+/gu, '')
}

describe('promptTemplates', () => {
  it('contains the expanded curated library', () => {
    expect(BUILT_IN_PROMPT_TEMPLATES.length).toBeGreaterThanOrEqual(490)
  })

  it('includes newly curated practical prompt sources', () => {
    const sources = BUILT_IN_PROMPT_TEMPLATES.map((template) => template.source)

    expect(sources.some((source) => source.includes('wuyoscar/gpt_image_2_skill'))).toBe(true)
    expect(sources.some((source) => source.includes('EvoLinkAI/awesome-gpt-image-2-API-and-Prompts'))).toBe(true)
    expect(sources.some((source) => source.includes('YouMind-OpenLab/awesome-gpt-image-2'))).toBe(true)
    expect(sources.some((source) => source.includes('prompts.kkkm.cn'))).toBe(true)
  })

  it('adds a broad practical selection from prompts.kkkm.cn with original site images', () => {
    const kkkmTemplates = BUILT_IN_PROMPT_TEMPLATES.filter((template) =>
      template.source.includes('prompts.kkkm.cn'),
    )
    const imageUrls = kkkmTemplates.map((template) => template.imageUrl)

    expect(kkkmTemplates.length).toBeGreaterThanOrEqual(250)
    const originalSiteImageUrls = imageUrls.filter((imageUrl) =>
      imageUrl?.startsWith('https://prompts.kkkm.cn/images/'),
    )
    const jsdelivrFallbackImageUrls = imageUrls.filter((imageUrl) =>
      imageUrl?.startsWith('https://cdn.jsdelivr.net/gh/junxiaopang/all-image-prompts@main/public/images/'),
    )
    const gptImageCaseUrls = imageUrls.filter((imageUrl) => imageUrl?.includes('/gpt-image-2/'))
    const newerImageFallbackTemplate = kkkmTemplates.find((template) =>
      template.id === 'kkkm-gemini-2018223863532790007',
    )

    expect(new Set(imageUrls).size).toBe(imageUrls.length)
    expect(originalSiteImageUrls.length).toBeGreaterThan(200)
    expect(originalSiteImageUrls.length + jsdelivrFallbackImageUrls.length).toBe(imageUrls.length)
    expect(gptImageCaseUrls.length).toBeGreaterThan(0)
    expect(gptImageCaseUrls.every((imageUrl) => imageUrl?.startsWith('https://cdn.jsdelivr.net/'))).toBe(true)
    expect(newerImageFallbackTemplate?.imageUrl).toBe(
      'https://cdn.jsdelivr.net/gh/junxiaopang/all-image-prompts@main/public/images/2026-02-02/2018223863532790007_0.jpg',
    )
  })

  it('keeps prompts.kkkm.cn prompt text focused on reusable prompt content', () => {
    const kkkmTemplates = BUILT_IN_PROMPT_TEMPLATES.filter((template) =>
      template.source.includes('prompts.kkkm.cn'),
    )
    const sourceChatterPattern =
      /PromptShare|Nano Banana|基础提示词|谷歌 Gemini|@Adobe|@AdobeFirefly|评论区|私信|提示词分享|完整工作流程见帖子|输入以下提示词|上传一张你的照片|花\d+分钟|复制下方提示词/i

    for (const template of kkkmTemplates) {
      expect(template.prompt).not.toMatch(sourceChatterPattern)
    }
  })

  it('uses refined top-level categories instead of mixing photography and documents', () => {
    expect(PROMPT_TEMPLATE_CATEGORIES).toContain('人物写真')
    expect(PROMPT_TEMPLATE_CATEGORIES).toContain('摄影与写实')
    expect(PROMPT_TEMPLATE_CATEGORIES).toContain('文档与教程')
    expect(PROMPT_TEMPLATE_CATEGORIES).not.toContain('摄影与文档')

    expect(getPromptTemplatesByCategory('人物写真').length).toBeGreaterThan(0)
    expect(getPromptTemplatesByCategory('摄影与写实').length).toBeGreaterThan(0)
    expect(getPromptTemplatesByCategory('文档与教程').length).toBeGreaterThan(0)
    expect(BUILT_IN_PROMPT_TEMPLATES.map((template) => String(template.category))).not.toContain('摄影与文档')
  })

  it('exposes richer practical subcategories in the all-template view', () => {
    const allSubcategories = getPromptTemplateSubcategories('全部')

    expect(allSubcategories).toContain('人像写真')
    expect(allSubcategories).not.toContain('美女写真')
    expect(allSubcategories).not.toContain('男士写真')
    expect(allSubcategories).toContain('知识图谱')
    expect(allSubcategories).toContain('数据可视化')
    expect(allSubcategories).toContain('屏幕样机')
    expect(allSubcategories).toContain('说明文档')
    expect(allSubcategories).toContain('报告模板')
    expect(allSubcategories).toContain('研究论文图')
    expect(allSubcategories).toContain('美食摄影')
    expect(allSubcategories).toContain('电影感摄影')
    expect(allSubcategories).toContain('风景摄影')
    expect(allSubcategories).toContain('菜谱食谱')
    expect(allSubcategories).toContain('流程图')
    expect(allSubcategories).toContain('手账素材')
    expect(allSubcategories).toContain('手绘风格')
    expect(allSubcategories).toContain('卡通风格')
  })

  it('reclassifies portrait templates from prompt content instead of source gender tags', () => {
    const lavenderPortrait = BUILT_IN_PROMPT_TEMPLATES.find(
      (template) => template.id === 'gallery-opennana-lavender-sunrise-dreamy-triptych',
    )
    const couplePortrait = BUILT_IN_PROMPT_TEMPLATES.find(
      (template) => template.id === 'gallery-github-raw-2046502288102170757',
    )
    const fashionPortrait = BUILT_IN_PROMPT_TEMPLATES.find(
      (template) => template.id === 'kkkm-gemini-2017483949271085191',
    )
    const lifestylePortrait = BUILT_IN_PROMPT_TEMPLATES.find((template) => template.id === 'gallery-5')

    expect(lavenderPortrait?.category).toBe('人物写真')
    expect(lavenderPortrait?.subcategory).toBe('人像写真')
    expect(couplePortrait?.subcategory).toBe('情侣写真')
    expect(fashionPortrait?.subcategory).toBe('时尚写真')
    expect(lifestylePortrait?.subcategory).toBe('生活写真')
  })

  it('uses unique ids', () => {
    const ids = BUILT_IN_PROMPT_TEMPLATES.map((template) => template.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('has complete template metadata', () => {
    for (const template of BUILT_IN_PROMPT_TEMPLATES) {
      expect(template.id.trim()).not.toBe('')
      expect(template.title.trim()).not.toBe('')
      expect(PROMPT_TEMPLATE_CATEGORIES).toContain(template.category)
      expect(PROMPT_TEMPLATE_SUBCATEGORIES).toContain(template.subcategory)
      expect(template.description.trim()).not.toBe('')
      expect(template.tags.length).toBeGreaterThan(0)
      expect(new Set(template.tags).size).toBe(template.tags.length)
      expect(template.source.trim()).not.toBe('')
      expect(template.sourceUrl?.trim()).not.toBe('')
      expect(template.recommendedSize.trim()).not.toBe('')
      expect(template.imageUrl?.trim()).not.toBe('')
      expect(template.imageAlt?.trim()).not.toBe('')
      expect(template.prompt.trim().length).toBeGreaterThan(120)
      expect(template.tips.length).toBeGreaterThan(0)
    }
  })

  it('replaces source boilerplate descriptions with concise usage summaries', () => {
    const boilerplateDescriptionPattern =
      /来自.+(?:案例|精选).*(?:可直接替换主题|已转写为中文可复用模板)|实用案例|可直接替换主题、文案、产品或场景后复用/

    const infographicTemplate = BUILT_IN_PROMPT_TEMPLATES.find((template) => template.subcategory === '知识图谱')
    const portraitTemplate = BUILT_IN_PROMPT_TEMPLATES.find(
      (template) => template.id === 'gallery-opennana-lavender-sunrise-dreamy-triptych',
    )

    for (const template of BUILT_IN_PROMPT_TEMPLATES) {
      expect(template.description).not.toMatch(boilerplateDescriptionPattern)
      expect(template.description.length).toBeLessThanOrEqual(80)
    }

    expect(infographicTemplate?.description).toMatch(/信息图|知识图谱|图解/)
    expect(portraitTemplate?.description).toMatch(/人像|写真|氛围/)
  })

  it('generates different summaries for different templates in the same subcategory', () => {
    const knowledgeGraphTemplates = BUILT_IN_PROMPT_TEMPLATES.filter((template) => template.subcategory === '知识图谱')
    const portraitTemplates = BUILT_IN_PROMPT_TEMPLATES.filter((template) => template.subcategory === '人像写真')

    expect(knowledgeGraphTemplates.length).toBeGreaterThan(1)
    expect(portraitTemplates.length).toBeGreaterThan(1)
    expect(knowledgeGraphTemplates[0]?.description).not.toBe(knowledgeGraphTemplates[1]?.description)
    expect(portraitTemplates[0]?.description).not.toBe(portraitTemplates[1]?.description)
  })

  it('preserves already-good concise descriptions from source data', () => {
    const uiCategoryTemplate = BUILT_IN_PROMPT_TEMPLATES.find((template) => template.id === 'style-category-ui')
    const infographicCategoryTemplate = BUILT_IN_PROMPT_TEMPLATES.find(
      (template) => template.id === 'style-category-infographic',
    )

    expect(uiCategoryTemplate?.description).toBe('App、网页、仪表盘、社媒截图与产品界面。')
    expect(infographicCategoryTemplate?.description).toBe('信息图、知识图谱、技术解释与结构化图解。')
  })

  it('removes title punctuation when generating fallback summaries', () => {
    const fashionPortrait = BUILT_IN_PROMPT_TEMPLATES.find(
      (template) => template.title === '深红丝绒·高定肖像写真',
    )
    const cinematicPortrait = BUILT_IN_PROMPT_TEMPLATES.find(
      (template) => template.title === '电影感时尚大片：翡翠海岸',
    )

    expect(fashionPortrait?.description).not.toContain('·')
    expect(cinematicPortrait?.description).not.toContain('：')
  })

  it('uses https example images and mirrors GitHub image assets through jsDelivr', () => {
    for (const template of BUILT_IN_PROMPT_TEMPLATES) {
      expect(template.imageUrl).toMatch(/^https:\/\//)
      expect(template.imageUrl).not.toContain('raw.githubusercontent.com')
      expect(template.imageUrl).not.toContain('github.com/')
      if (template.imageUrl?.includes('EvoLinkAI') || template.imageUrl?.includes('freestylefly')) {
        expect(template.imageUrl).toContain('cdn.jsdelivr.net')
      }
      if (template.imageUrl?.includes('freestylefly/awesome-gpt-image-2')) {
        expect(template.imageUrl).toContain('@main/data/images/')
      }
    }
  })

  it('does not reuse one image for different prompt templates', () => {
    const imageUrls = BUILT_IN_PROMPT_TEMPLATES.map((template) => template.imageUrl)
    expect(new Set(imageUrls).size).toBe(imageUrls.length)
  })

  it('deduplicates repeated practical prompt content such as the encyclopedia infographic template', () => {
    const scienceCardTemplates = BUILT_IN_PROMPT_TEMPLATES.filter((template) =>
      template.title.includes('科普百科图'),
    )

    expect(scienceCardTemplates).toHaveLength(1)
  })

  it('does not keep duplicate templates with the same normalized prompt content', () => {
    const promptKeys = BUILT_IN_PROMPT_TEMPLATES.map((template) =>
      normalizeTemplateTextForDedup(template.prompt),
    )

    expect(new Set(promptKeys).size).toBe(promptKeys.length)
  })

  it('does not include duplicate visible prompt template titles', () => {
    const titleKeys = BUILT_IN_PROMPT_TEMPLATES.map((template) =>
      normalizeTemplateTextForDedup(template.title),
    )

    expect(new Set(titleKeys).size).toBe(titleKeys.length)
  })

  it('does not include excluded anime or game prompt categories', () => {
    const corpus = BUILT_IN_PROMPT_TEMPLATES
      .map((template) => `${template.title}\n${template.description}\n${template.tags.join('\n')}\n${template.prompt}`)
      .join('\n')
      .toLowerCase()

    for (const keyword of EXCLUDED_PROMPT_TEMPLATE_KEYWORDS) {
      expect(corpus).not.toContain(keyword.toLowerCase())
    }
  })

  it('uses Chinese prompt text instead of untranslated foreign prompt blocks', () => {
    for (const template of BUILT_IN_PROMPT_TEMPLATES) {
      expect(chineseCharacterRatio(template.title)).toBeGreaterThan(0.1)
      expect(template.title).not.toMatch(/[\u3040-\u30ff\uac00-\ud7af]/)
      expect(chineseCharacterRatio(template.prompt)).toBeGreaterThan(0.2)
      expect(template.prompt).not.toMatch(/[\u3040-\u30ff\uac00-\ud7af]/)
      expect(template.prompt).not.toMatch(/[A-Za-z][A-Za-z0-9 ,;:().'"&/_-]{120,}/)
    }
  })

  it('filters by category', () => {
    const uiTemplates = getPromptTemplatesByCategory('UI 与界面')
    expect(uiTemplates.length).toBeGreaterThan(0)
    expect(uiTemplates.every((template) => template.category === 'UI 与界面')).toBe(true)
  })

  it('supports refined subcategory filtering', () => {
    const uiSubcategories = getPromptTemplateSubcategories('UI 与界面')
    expect(uiSubcategories.length).toBeGreaterThan(2)
    expect(uiSubcategories).toContain('社媒截图')

    const socialTemplates = getPromptTemplatesBySubcategory('社媒截图')
    expect(socialTemplates.length).toBeGreaterThan(0)
    expect(socialTemplates.every((template) => template.subcategory === '社媒截图')).toBe(true)
  })

  it('searches title, description, tags, and prompt content', () => {
    expect(searchPromptTemplates('电商').map((template) => template.id)).toContain('style-product-commerce-visual')
    expect(searchPromptTemplates('信息图').map((template) => template.id)).toContain('style-infographic-engine')
    expect(searchPromptTemplates('RAW').length).toBeGreaterThan(0)
    expect(searchPromptTemplates('演示').length).toBeGreaterThan(0)
    expect(searchPromptTemplates('健身').length).toBeGreaterThan(0)
    expect(searchPromptTemplates('食谱').length).toBeGreaterThan(0)
    expect(searchPromptTemplates('美食摄影').length).toBeGreaterThan(0)
    expect(searchPromptTemplates('美女写真').length).toBeGreaterThan(0)
    expect(searchPromptTemplates('电影感摄影').length).toBeGreaterThan(0)
    expect(searchPromptTemplates('技术图解').length).toBeGreaterThan(0)
    expect(searchPromptTemplates('风景').length).toBeGreaterThan(0)
    expect(searchPromptTemplates('菜谱').length).toBeGreaterThan(0)
    expect(searchPromptTemplates('知识图谱').length).toBeGreaterThan(0)
    expect(searchPromptTemplates('流程图').length).toBeGreaterThan(0)
    expect(searchPromptTemplates('手账').length).toBeGreaterThan(0)
    expect(searchPromptTemplates('手绘').length).toBeGreaterThan(0)
    expect(searchPromptTemplates('卡通').length).toBeGreaterThan(0)
    expect(searchPromptTemplates('电商营销').length).toBeGreaterThan(0)
  })
})
