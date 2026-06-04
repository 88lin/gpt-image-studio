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

    expect(sources.some((source) => source.includes('houshifang/image'))).toBe(true)
    expect(sources.some((source) => source.includes('wuyoscar/gpt_image_2_skill'))).toBe(true)
    expect(sources.some((source) => source.includes('EvoLinkAI/awesome-gpt-image-2-API-and-Prompts'))).toBe(true)
    expect(sources.some((source) => source.includes('YouMind-OpenLab/awesome-gpt-image-2'))).toBe(true)
    expect(sources.some((source) => source.includes('prompts.kkkm.cn'))).toBe(true)
  })

  it('adds the full image2hub prompt set first with source categories and CDN images', () => {
    const image2hubTemplates = BUILT_IN_PROMPT_TEMPLATES.filter((template) =>
      template.source.includes('houshifang/image'),
    )

    expect(PROMPT_TEMPLATE_CATEGORIES.slice(0, 5)).toEqual(['运营', 'APP', '海报', '插画', '卡通IP'])
    expect(image2hubTemplates).toHaveLength(97)
    expect(BUILT_IN_PROMPT_TEMPLATES.slice(0, image2hubTemplates.length)).toEqual(image2hubTemplates)
    expect(new Set(image2hubTemplates.map((template) => template.imageUrl)).size).toBe(image2hubTemplates.length)
    expect(image2hubTemplates.every((template) =>
      template.imageUrl?.startsWith('https://cdn.jsdmirror.com/gh/houshifang/image@main/assets/'),
    )).toBe(true)
    expect(getPromptTemplateSubcategories('APP')).toContain('App 图标')
    expect(getPromptTemplateSubcategories('APP')).toContain('金刚区图标')
    expect(getPromptTemplateSubcategories('运营')).toContain('3D海报')
    expect(getPromptTemplateSubcategories('海报')).toContain('电影海报')
    expect(getPromptTemplateSubcategories('插画')).toContain('黏土风格')
    expect(getPromptTemplateSubcategories('卡通IP')).toEqual(['卡通IP'])
    expect(image2hubTemplates.filter((template) => template.category === '卡通IP')).toHaveLength(7)
  })

  it('keeps image2hub generated titles aligned with source subcategory names', () => {
    const image2hubTemplates = BUILT_IN_PROMPT_TEMPLATES.filter((template) =>
      template.source.includes('houshifang/image'),
    )
    const gradientArtTemplates = image2hubTemplates.filter((template) => template.subcategory === '渐变艺术')
    const clayTemplates = image2hubTemplates.filter((template) => template.subcategory === '黏土风格')
    const exaggeratedTemplates = image2hubTemplates.filter((template) => template.subcategory === '夸张风格')

    expect(gradientArtTemplates.length).toBeGreaterThan(0)
    expect(gradientArtTemplates.every((template) => template.title.includes('渐变艺术'))).toBe(true)
    expect(gradientArtTemplates.some((template) => template.title.includes('渐变海报'))).toBe(false)
    expect(clayTemplates.every((template) => template.title.includes('黏土风格'))).toBe(true)
    expect(exaggeratedTemplates.every((template) => template.title.includes('夸张风格'))).toBe(true)
  })

  it('keeps image2hub prompt text translated without imported metadata chatter', () => {
    const image2hubTemplates = BUILT_IN_PROMPT_TEMPLATES.filter((template) =>
      template.source.includes('houshifang/image'),
    )
    const firstTemplate = image2hubTemplates[0]

    expect(firstTemplate?.description).toBe('APP / App 图标案例，适合应用上架、产品提案和品牌视觉起稿。')
    expect(firstTemplate?.prompt).toBe(
      '为名为“Bichon Shop”的 App 设计 macOS App 图标。具有平滑连续圆角的单个圆角方形图标，居中放置在带安全边距的白色画布上，占据画布的约 80%。现代轻拟物 macOS App Store 风格。只有一个图标。',
    )

    for (const template of image2hubTemplates) {
      expect(chineseCharacterRatio(template.prompt)).toBeGreaterThan(0.2)
      expect(template.description).not.toContain('image2hub')
      expect(template.tags).not.toContain('image2hub')
      expect(template.source).toContain('image2hub')
      expect(template.prompt).not.toContain('来源分类')
      expect(template.prompt).not.toContain('image2hub')
      expect(template.prompt).not.toContain('可替换变量')
      expect(template.prompt).not.toContain('运球标准')
      expect(template.prompt).not.toContain('卡片片')
      expect(template.prompt).not.toContain('松鼠图标')
    }
  })

  it('adds a broad practical selection from prompts.kkkm.cn with CDN images', () => {
    const kkkmTemplates = BUILT_IN_PROMPT_TEMPLATES.filter((template) =>
      template.source.includes('prompts.kkkm.cn'),
    )
    const imageUrls = kkkmTemplates.map((template) => template.imageUrl)
    const kkkmCdnPrefix = 'https://cdn.jsdmirror.com/gh/junxiaopang/all-image-prompts@main/public/images/'
    const unavailableImagePaths = [
      'images/2025-12-08/1998135786059759900_0.jpg',
      'images/2025-12-12/1999344734595350800_cover.jpg',
      'images/2025-12-13/1999781038177063400_0.jpg',
      'images/2025-12-25/2004015740329017600_0.jpg',
      'images/2025-12-25/2004239718121161200_0.jpg',
      'images/2025-12-26/2004462228490096652_0.jpg',
      'images/2025-12-26/2004528545033527385_0.jpg',
      'images/2025-12-26/2004697850920501600_0.jpg',
      'images/2026-01-07/2008944996091564500_0.jpg',
      'images/2026-01-09/2009717451710509600_0.jpg',
      'images/2026-01-10/2010116114668515600_0.jpg',
      'images/2026-01-11/2010210489813680000_0.jpg',
      'images/2026-01-16/2012134246924648700_0.jpg',
      'images/2026-01-17/2012458566771204400_0.jpg',
      'images/2026-01-20/2013660094664446322_0.jpg',
      'images/2026-01-25/2015437854206529800_0.jpg',
      'images/2026-01-26/2015582755711861000_0.jpg',
      'images/2026-01-26/2015622019845702000_0.jpg',
      'images/2026-01-31/2017454291909546357_0.jpg',
      'images/2026-02-08/2020337546828632155_0.jpg',
    ]

    expect(kkkmTemplates.length).toBeGreaterThanOrEqual(250)
    const gptImageCaseUrls = imageUrls.filter((imageUrl) => imageUrl?.includes('/gpt-image-2/'))
    const newerImageFallbackTemplate = kkkmTemplates.find((template) =>
      template.id === 'kkkm-gemini-2018223863532790007',
    )
    const origamiReplacementTemplate = kkkmTemplates.find((template) =>
      template.id === 'kkkm-gemini-2000553282767597800',
    )

    expect(new Set(imageUrls).size).toBe(imageUrls.length)
    expect(imageUrls.every((imageUrl) => imageUrl?.startsWith(kkkmCdnPrefix))).toBe(true)
    expect(imageUrls.some((imageUrl) => imageUrl?.startsWith('https://prompts.kkkm.cn/images/'))).toBe(false)
    for (const unavailableImagePath of unavailableImagePaths) {
      expect(imageUrls.some((imageUrl) => imageUrl?.includes(unavailableImagePath))).toBe(false)
    }
    expect(gptImageCaseUrls.length).toBeGreaterThan(0)
    expect(gptImageCaseUrls.every((imageUrl) => imageUrl?.startsWith('https://cdn.jsdmirror.com/'))).toBe(true)
    expect(newerImageFallbackTemplate?.imageUrl).toBe(
      'https://cdn.jsdmirror.com/gh/junxiaopang/all-image-prompts@main/public/images/2026-02-02/2018223863532790007_0.jpg',
    )
    expect(kkkmTemplates.find((template) => template.id === 'kkkm-chatgpt-2020337546828632155')).toBeUndefined()
    expect(origamiReplacementTemplate?.imageUrl).toBe(
      'https://cdn.jsdmirror.com/gh/junxiaopang/all-image-prompts@main/public/images/2025-12-15/2000553282767597800_0.jpg',
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
    expect(allSubcategories).toContain('说明文档')
    expect(allSubcategories).toContain('美食摄影')
    expect(allSubcategories).toContain('电影感摄影')
    expect(allSubcategories).toContain('风景摄影')
    expect(allSubcategories).toContain('菜谱食谱')
    expect(allSubcategories).toContain('流程图')
    expect(allSubcategories).toContain('手账素材')
    expect(allSubcategories).toContain('手绘风格')
    expect(allSubcategories).toContain('卡通风格')
  })

  it('merges sparse original subcategories into broader practical groups', () => {
    const originalTemplates = BUILT_IN_PROMPT_TEMPLATES.filter((template) =>
      !template.source.includes('houshifang/image'),
    )
    const originalSubcategories = new Set(originalTemplates.map((template) => template.subcategory))

    expect(getPromptTemplateSubcategories('品牌与空间')).toEqual(['品牌与空间'])
    expect(originalSubcategories).not.toContain('报告模板')
    expect(originalSubcategories).not.toContain('地图时间线')
    expect(originalSubcategories).not.toContain('电商详情')
    expect(originalSubcategories).not.toContain('联名 Campaign')
    expect(originalSubcategories).not.toContain('品牌 VI')
    expect(originalSubcategories).not.toContain('网页仪表盘')
    expect(originalSubcategories).not.toContain('街拍摄影')
    expect(originalSubcategories).not.toContain('屏幕样机')
    expect(originalSubcategories).not.toContain('情侣写真')
    expect(originalSubcategories).not.toContain('UI 系统')
    expect(originalSubcategories).not.toContain('插画艺术')
    expect(originalSubcategories).not.toContain('研究论文图')
    expect(originalSubcategories).not.toContain('教程步骤')
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
    expect(couplePortrait?.subcategory).toBe('生活写真')
    expect(fashionPortrait?.subcategory).toBe('时尚写真')
    expect(lifestylePortrait?.subcategory).toBe('生活写真')
  })

  it('classifies original templates from prompt intent instead of noisy source categories', () => {
    const byId = new Map(BUILT_IN_PROMPT_TEMPLATES.map((template) => [template.id, template]))

    expect(byId.get('gallery-opennana-guanyin-modern-worker')).toMatchObject({
      category: '海报与排版',
      subcategory: '手绘风格',
    })
    expect(byId.get('gallery-opennana-doodle-dragon-on-exam')).toMatchObject({
      category: '文档与教程',
      subcategory: '手写笔记',
    })
    expect(byId.get('gallery-opennana-pep-third-grade-chinese-textbook')).toMatchObject({
      category: '文档与教程',
      subcategory: '说明文档',
    })
    expect(byId.get('gallery-opennana-creative-leaf-collage-portrait')).toMatchObject({
      category: '海报与排版',
      subcategory: '手绘风格',
    })
    expect(byId.get('gallery-opennana-zhu-yuanzhang-throne-x-post')).toMatchObject({
      category: 'UI 与界面',
      subcategory: '社媒截图',
    })
    expect(byId.get('gallery-opennana-high-end-ai-presentation-cover')).toMatchObject({
      category: '文档与教程',
      subcategory: '说明文档',
    })
    expect(byId.get('gallery-opennana-draw-scientific-style-encyclopedia-infographic')).toMatchObject({
      category: '图表与信息图',
      subcategory: '知识图谱',
    })
    expect(byId.get('kkkm-gemini-2009310148867551200')).toMatchObject({
      category: '商品与电商',
      subcategory: '商品广告',
    })
    expect(byId.get('wuyoscar-screen-laptop-music-webcam')).toMatchObject({
      category: '摄影与写实',
      subcategory: '写实摄影',
    })
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
      expect(template.prompt.trim().length).toBeGreaterThan(
        template.source.includes('houshifang/image') ? 30 : 120,
      )
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
      (template) => template.id === 'kkkm-gemini-2000059750013456400',
    )

    expect(fashionPortrait?.description).not.toContain('·')
    expect(cinematicPortrait?.description).not.toContain('：')
  })

  it('uses https example images and mirrors GitHub image assets through jsdmirror', () => {
    for (const template of BUILT_IN_PROMPT_TEMPLATES) {
      expect(template.imageUrl).toMatch(/^https:\/\//)
      expect(template.imageUrl).not.toContain('raw.githubusercontent.com')
      expect(template.imageUrl).not.toContain('github.com/')
      expect(template.imageUrl).not.toContain('cdn.jsdelivr.net')
      if (template.imageUrl?.includes('EvoLinkAI') || template.imageUrl?.includes('freestylefly')) {
        expect(template.imageUrl).toContain('cdn.jsdmirror.com')
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
    const promptKeys = BUILT_IN_PROMPT_TEMPLATES
      .filter((template) => !template.source.includes('houshifang/image'))
      .map((template) => normalizeTemplateTextForDedup(template.prompt))

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
      .filter((template) => !template.source.includes('houshifang/image'))
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
      expect(template.prompt).not.toContain('中文提示词')
      expect(template.prompt).not.toContain('英文提示词')
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
