import type { PromptTemplateInput } from './promptTemplates'
import { KKKM_PROMPT_TEMPLATES } from './kkkmPromptTemplates'

const BASE_PROMPT_TEMPLATES: PromptTemplateInput[] = [
  {
    "id": "gallery-2",
    "title": "电影感极简人像",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iam_miharbi/status/2045151354679665101",
    "recommendedSize": "4:5 / 9:16",
    "imageUrl": "https://cdn.jsdelivr.net/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case2/output.jpg",
    "imageAlt": "电影感极简人像示例图",
    "prompt": "Generate a cinematic minimal portrait of a solitary man standing in an intense orange to red gradient environment, strong silhouette lighting, deep shadow contrast, reflective glossy floor, symmetrical composition, minimal",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-5",
    "title": "卧室镜自拍人像",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Shinning1010/status/2045002808903020962",
    "recommendedSize": "3:4",
    "imageUrl": "https://cdn.jsdelivr.net/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case5/output.jpg",
    "imageAlt": "卧室镜自拍人像示例图",
    "prompt": "A stunning 18-year-old Chinese girl with a youthful, pure face and realistic skin texture, sitting on a cozy, slightly messy bed in her bedroom. She is taking a mirror selfie with a smartphone, capturing a natural and intimate moment. Wearing casual gray loungewear and neat white crew socks. Soft natural light (golden hour) streams in from a side window, creating a warm, moody, and cinematic atmosphere. 35mm lens, sharp focus on the subject in the mirror, depth of field with a beautifully blurred background (bokeh). Photorealistic, 8K, high resolution, studio quality, masterpiece.\nNegative Prompts: no extra limbs, no deformed hands, no blur, no noise, no watermark, no text, no cartoon/anime style. Aspect Ratio: 3:4.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-7",
    "title": "奢华魅力美妆人像",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/patrickassale/status/2044581766309060765",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case7/output.jpg",
    "imageAlt": "奢华魅力美妆人像示例图",
    "prompt": "Luxury Glam Beauty Portrait:, Beautiful Black woman, youthful spirit, creamy vanilla, silk press, mahogany red, subtle confidence, textured fabric, sapphire blue, minimal jewelry, beachside breeze, lens flare effect, nostalgic, cinematic lens, symmetrical composition, soft focus, high fashion photography, monochromatic, dewy finish, mysterious tension, layered elements\n\n*Found on Midjourney's Explore page.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-1",
    "title": "2026 波士顿春季城市海报",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/BubbleBrain/status/2045358053831172358",
    "recommendedSize": "9:16",
    "imageUrl": "https://cdn.jsdelivr.net/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case1/output.jpg",
    "imageAlt": "2026 波士顿春季城市海报示例图",
    "prompt": "A striking Spring 2026 city poster for Boston with an elegant celebratory mood and a bold contemporary design. On a clean off-white textured background with large areas of negative space, a miniature single sculler rows across the lower right corner of the image on a narrow ribbon of reflective water. The wake from the oar sweeps upward in a dynamic calligraphic curve, gradually transforming into the Charles River and then into a dreamlike hand-painted panorama of Boston. Inside this flowing river-shaped composition are iconic Boston elements: the Back Bay skyline, Beacon Hill brownstones, Acorn Street, Boston Public Garden, Swan Boats, Zakim Bridge, Fenway-inspired details, historic brick architecture, harbor ferries, and the city's waterfront atmosphere. Soft morning fog, golden spring light, subtle festive accents in crimson and gold, rich detail, layered depth, sophisticated city-poster aesthetics, fresh and refined, visually powerful but not overcrowded. Elegant typography in the lower left reads \"SPRING 2026\" with a vertical slogan \"BOSTON, A CITY OF RIVER, MEMORY, AND INVENTION\", text clear and beautifully composed, premium graphic design, 9:16",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-3",
    "title": "成都美食地图插画",
    "category": "图表与信息图",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "信息图",
      "结构化",
      "说明"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Panda20230902/status/2045396918965285111",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdelivr.net/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case3/output.jpg",
    "imageAlt": "成都美食地图插画示例图",
    "prompt": "一张手绘风格的城市美食地图，以成都为主题。画面以鸟瞰视角的手绘简化城市地图为底，标注主要道路和地标但不追求精确比例而是追求可爱的手绘感。地图上分布着 12 个美食地点的精致手绘小插画：春熙路的串串香（一把竹签插着各种食材冒着热气）、宽窄巷子的三大炮（三个糯米团子飞向铜盘）、建设路的蛋烘糕（金黄酥脆正在翻面）、玉林路的火锅（九宫格锅翻滚冒泡）等，每个插画约占地图的 5% 面积，旁边用手写体标注店名和一句推荐语\"凌晨两点还在排队的那家\"。地图边缘用手绘藤蔓和辣椒装饰形成边框。右下角有一个手绘指南针和图例说明。左上角标题\"成都·吃货暴走地图\"使用胖圆的手绘美术字配辣椒装饰。整体画风为水彩+彩铅混合的手绘质感，颜色以暖色系（辣椒红、姜黄、翠绿）为主，图片比例 1:1。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-4",
    "title": "中式极简 S 形海报",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/liyue_ai/status/2045368305079447853",
    "recommendedSize": "4:5 / 9:16",
    "imageUrl": "https://cdn.jsdelivr.net/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case4/output.jpg",
    "imageAlt": "中式极简 S 形海报示例图",
    "prompt": "极简新中式美学风格，画面以淡雅的灰白色为底，呈现出一种纸艺剪影般的立体感。\n一条S形蜿蜒的裂痕状边缘将画面分割，仿佛撕开了一层纸面，露出内部色彩斑斓的东方山水景象。\n裂口内，一条蜿蜒的河流自上而下贯穿整个构图，河水以深浅不一的蓝色渲染，层次分明，仿佛流动的丝带。\n河岸两侧点缀着青翠的山丘与梯田，色彩柔和，绿红交织，展现出田园的宁静之美。\n沿河而建的古风建筑错落有致，飞檐翘角，白墙黛瓦，在光影的映衬下更显古朴典雅。\n岸边树木葱茏，枝叶轻盈，一艘小船静泊于水中央，增添了几分悠然意境。\n整体构图呈S形曲线，富有韵律感，仿佛自然与人文的和谐共生。\n画作边缘采用撕纸效果，营造出立体浮雕般的视觉体验。\n下方题字\"东方美学\"以黑色楷体书写，日期\"2026/04/18\"与红色印章相呼应，底部\"CHINA\"字样庄重醒目，署名\"@LIYUE\"低调收尾，整体氛围静谧深远，充满诗意与哲思。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-6",
    "title": "创意书法字体设计",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/liyue_ai/status/2045328856937312549",
    "recommendedSize": "16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case6/output.jpg",
    "imageAlt": "创意书法字体设计示例图",
    "prompt": "创意艺术字体\"纵有疾风起\"，秀丽笔手写风格，整体文字横版排列，具有强烈视觉冲击力；\n深度融合手写书法笔意，笔触带毛笔书写的粗犷洒脱，如挥毫泼墨的肆意劲道；\n起收笔的飞白，顿挫，尽显促销的火爆张力，文字的形态打破规整，笔画的粗细变化；\ndutch angle，营造出动感冲刺的气势，字形呈奔放之势；\n重心上扬如蓄势待发，笔画的伸展，穿插毫无拘束，似全力冲刺的劲道；\n整体架构疏密交织，紧密处如促销热潮的汹涌，留白处似优惠间隙的呼吸感；\n纯净黑色背景打底，完美契合热烈氛围，艺术字的形态与色彩酣畅传递。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-8",
    "title": "未来感曼荼罗插画",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/4WEB1/status/2045390207072256179",
    "recommendedSize": "4:5 / 9:16",
    "imageUrl": "https://cdn.jsdelivr.net/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case8/output.jpg",
    "imageAlt": "未来感曼荼罗插画示例图",
    "prompt": "でChatGPTで画像を作成してもらって、今日また作成してもらったらGPT image 2かもしれず、出来が変わったように見えるのでメモ\n\n左の水色と黄色のが先週\n右の紫のが今日\n\n右のは透明感とか解像度、緻密さが違うような気がする…\n\nプロンプト\n曼荼羅の近未来SF版を描いて",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-ui-1",
    "title": "单一提示词生成 UI 设计",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/austinit/status/2044968740782272596",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case1/output.jpg",
    "imageAlt": "单一提示词生成 UI 设计示例图",
    "prompt": "看到GPT 2 Image 直出 UI 图的那一刻，奥特曼坦言：被吓到眩晕瘫坐，那一刻就像看到原子弹爆炸。\n\n别再说自己审美差，前端写不好了，现在 GPT 2 Image 一个 prompt 直出UI设计图，不满意还可以再编辑，或者继续让它以同样风格渲染其他页面。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-ui-2",
    "title": "业余感 iPhone 发布会快照",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/patrickassale/status/2044687244368441742",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case2/output.jpg",
    "imageAlt": "业余感 iPhone 发布会快照示例图",
    "prompt": "Amateur iPhone photo at Apple Park during the iPhone 20 keynote, Tim Cook presenting on stage. Shot from the crowd at a distance",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-ui-3",
    "title": "手写笔记本照片",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/patrickassale/status/2044569086013718958",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case3/output.jpg",
    "imageAlt": "手写笔记本照片示例图",
    "prompt": "Amateur photo of an open notebook lying flat, filled with handwritten notes in black ballpoint pen. The handwriting is casual and slightly messy, like personnal notes, natural imperfections, crossed out words, underlined headings. Shot from slightly above, natural daylight from a window, no flash. Casual desk setting, shot on iPhone",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-ui-4",
    "title": "宋朝社交媒体动态页",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Panda20230902/status/2045385588065313057",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case4/output.jpg",
    "imageAlt": "宋朝社交媒体动态页示例图",
    "prompt": "\"宋朝人的朋友圈\"/\"SONG DYNASTY SOCIAL MEDIA FEED\"，古今穿越幽默融合界面设计风格，画面模拟手机社交媒体界面，但内容全部是宋朝场景头像是宋代文人画像，用户名\"苏东坡SuShi_Official\"，发布内容\"刚到黄州，被贬了但心情还行。今天自己做了东坡肉，味道绝了，附菜谱：\"，配图为工笔画风格的东坡肉特写，点赞列表\"黄庭坚、秦观、佛印等126人\"，评论区\"王安石：呵呵\"\"司马光：还是那个味道\"，界面元素如点赞图标用宋代花纹替代，状态栏显示\"大宋移动 5G\"和\"元丰三年\"，配色为手机深色模式搭配宋代雅致色调，历史与社交媒体的趣味碰撞杰作",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-ui-5",
    "title": "多平台内容截图",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/MrLarus/status/2045373105041007013",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case5/output.jpg",
    "imageAlt": "多平台内容截图示例图",
    "prompt": "1、生成视频号内容截图，主题：中老年不要盲目催婚，iPhone尺寸\n2、生成抖音内容截图，主题：跟上AI浪潮9.9包教会，iPhone尺寸\n3、生成小红书内容截图，主题：精致女孩背后都有网贷，iPhone尺寸\n4、生成快手内容截图：主题：直播离婚预告，iPhone尺寸",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-ui-8",
    "title": "太祖李成桂的 X 页面",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/SKA_Neotype/status/2044637900978217334",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case8/output.jpg",
    "imageAlt": "太祖李成桂的 X 页面示例图",
    "prompt": "以「太祖李成桂的 X 页面」为目标生成图像。\n\n核心提示词：👍프롬프트 :\n태조 이성계의 X  페이지(위화도 회군을 벌이기 직전- 최영 장군과 서로 디스하는 내용이 담긴 게시글들)을 만들어 주세요.\ngpt-image-2\n\n输出比例：9:16 / 16:9。\n\n扩展要求：请补充完整状态栏、导航、核心内容区、操作区和真实应用细节，像真实产品截图而不是概念稿。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-10",
    "title": "GPT-Image-2 细节展示",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/liyue_ai/status/2045000106919997637",
    "recommendedSize": "3:4",
    "imageUrl": "https://cdn.jsdelivr.net/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/comparison_case10/output.jpg",
    "imageAlt": "GPT-Image-2 细节展示示例图",
    "prompt": "以眼部特写图片为基础，生成3:4的四屏构图超写实眼部特写，四屏按春夏秋冬上下排序。\n\n第一屏：眼眸中带着绽粉樱色的美瞳，睫毛缀满迷你春花，脸颊散落樱瓣与黄蕊小花，粉蝶萦绕眉眼，浅金发丝轻垂，下方簇簇樱花怒放，画面中央\"SPRING\"白色艺术字点缀，风格细腻唯美，光影柔和，色彩粉嫩治愈，下面用书法体写着春；\n\n第二屏：眼眸中带着着清荷色的美瞳，睫毛饰以粉莲与绿荷，脸颊挂着晶莹水珠，粉瓣、绿荷点缀其间，蜻蜓轻绕，浅金发丝若隐若现，画面中央\"Summer\"白色艺术字凸显，光影通透流光感，色彩清透凉爽，下面用书法体写着夏；\n\n第三屏：眼眸中带着金黄红相间的美瞳，睫毛饰以橙红枫叶，脸颊散落金红秋叶，橙蝶翩跹眉眼间，浅金发丝隐约可见，画面中央\"AUTUMN\"白色艺术字醒目，光影暖金流光，色彩浓郁温暖，下面用书法笔写着秋；\n\n第四屏：眼眸中带着雪花蓝色的美瞳，睫毛覆满冰晶雪片，脸颊散落白色雪花与红色腊梅，银白蝴蝶翩跹眉眼，浅金发丝朦胧似雪，画面中央\"WINTER\"白色艺术字亮眼，光影冷冽蓝白流光，色彩清透纯净，下面用书法体写着冬。\n\n整体呈现梦幻眼眸四季交替的唯美梦幻治愈画面，微调各屏的光影强度，让画面氛围感更浓郁。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-11",
    "title": "GPT vs Banana 盲测比较",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/linxiaobei888/status/2044947911495336262",
    "recommendedSize": "9:16",
    "imageUrl": "https://cdn.jsdelivr.net/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/comparison_case11/output.jpg",
    "imageAlt": "GPT vs Banana 盲测比较示例图",
    "prompt": "绘制一张色彩鲜艳、竖版（9:16）手绘风格的《新疆旅行手账插画》，画风仿佛由一位充满好奇心的孩子用蜡笔创作，整体使用柔和温暖的浅色背景（如浅黄色），搭配红色、蓝色、绿色等明亮色调，营造温馨、童趣、满满旅行气息的氛围。\n一、主画面：手账式旅行路线\n在插画中央绘制一条“蜿蜒曲折的旅行路线”，路线用箭头 + 虚线连接多个地点，由 {天数} 日行程自动生成推荐景点：\n示例格式（自动替换为{城市名}相关）：\n- “第 1 站：{景点 1 推荐 + 简短趣味描述}”\n- “第 2 站：{景点 2 推荐 + 简短趣味描述}”\n- “第 3 站：{景点 3 推荐 + 简短趣味描述}”\n- …\n- “最终站：{当地招牌美食/纪念品 + 温馨结束语}”\n> 旅程站点数量随天数自动生成：\n> 若用户未输入天数，则按默认 1 日 / 精华线路生成。\n---\n二、周围趣味元素（全部根据城市自动替换）\n在路线周围加入大量充满童趣的小元素，例如：\n- 可爱的旅行角色：\n“拿着当地特色小吃的小朋友”、\n“背着旅行包的冒险小孩”等。\n- 当地标志性建筑的童趣 Q 版手绘：\n如 “{城市地标1}”、“{城市地标2}”、“{城市地标3}”。\n- 有趣的提示牌：\n“小心迷路！”、“注意人流！”、“前方好吃的！”（可根据城市语境调整）。\n- 贴纸式小标语：\n“{城市名}旅行记忆已解锁！”\n“{城市名}美食大冒险！”\n“下一站去哪儿？”\n- 当地美食的可爱小图标：\n如 “{城市美食1}”、“{城市美食2}”、“{城市美食3}”。\n- 感叹句（保持童真风）：\n“原来{城市名}这么好玩！”\n“我要再来一次！”\n---\n三、整体风格要求\n- 手绘蜡笔风 / 儿童旅行日志风格\n- 色彩鲜艳、构图饱满但温暖\n- 强调旅行的欢乐与探索感\n- 所有文字采用可爱的手写字体\n- 让整个画面像一本童趣满满的旅行手账页面",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-16",
    "title": "A/B 测试签名输出",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/saskr_13/status/2044744396932079934",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://cdn.jsdelivr.net/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/comparison_case16/output.jpg",
    "imageAlt": "A/B 测试签名输出示例图",
    "prompt": "をシェアします💗🤣\nGPT Image 2 はまだ正式リリースされてないと言っておりましたが、添付した 2 枚は「 A / B どちらが良いか」選ばせるタイプでした。\nよく見ると右下にサインまで…！\nこれが噂の 2 なのでしょうか？\n懐かしの「私がどんなふうに扱ったか」シリーズです(笑)\n--------------------\n✅#prompt : \n私があなたをどんなふうに扱ってきたか、4 コマ漫画風に描いてください。まずは 800 字くらいのプロットをテキストで出して、私が「描いて」と言ったらプロットに沿った 4 コマ漫画を描いてください。\n--------------------\nまずテキストを生成しますので、そのあと「描いて」と送ってください。その前に画風など指定するのも良いかと思います。\n\n画風は「アクリル水彩の油絵＋現代風の大人の成熟したカップルで、実写じゃなくて少女漫画風に描いて欲しい」とお願いしました☺\n間違えて「アクリル水彩の油絵」と書いちゃいましたが…(笑)\nおなじタッチが出て来るか分かりませんが、いろいろなシチュエーションで試してみようと思います(^^♪\n大事なところに線をひいておきました🤣",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-17",
    "title": "duct-tape-1 文字渲染展示",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/kawai_design/status/2044739028420079840",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://cdn.jsdelivr.net/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/comparison_case17/output.jpg",
    "imageAlt": "duct-tape-1 文字渲染展示示例图",
    "prompt": "以「duct-tape-1 文字渲染展示」为目标生成图像。\n\n核心提示词：を試し続けたらGPT Image 2だと噂される「duct-tape-1」が登場しました。文字の描画とレイアウトのユニークさが特徴だと感じます。\n\nこれをデフォルトで使えるとなると...\nたくさん実験したくてウズウズします。\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-19",
    "title": "MAI-Image-2 vs GPT vs Nano Banana ...",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/old_pgmrs_will/status/2044356515751231527",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://cdn.jsdelivr.net/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/comparison_case19/output.jpg",
    "imageAlt": "MAI-Image-2 vs GPT vs Nano Banana ...示例图",
    "prompt": "以「MAI-Image-2 vs GPT vs Nano Banana ...」为目标生成图像。\n\n核心提示词：で\n☝️MAI-Image-2-Efficient\n👉GPT-Image-2️\n👇Nano Banana Pro\n個人的好みは GPT-Image-2\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-20",
    "title": "白板绘图展示",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/jrpj2010/status/2044817134761767306",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://cdn.jsdelivr.net/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/comparison_case20/output.jpg",
    "imageAlt": "白板绘图展示示例图",
    "prompt": "以「白板绘图展示」为目标生成图像。\n\n核心提示词：もこのレベル📷\nやべ〜\nいよいよ当人のYoutube板書レベルに・・・いや超えてね！？\n\n1.5年前はこのレベルで発狂してたかと思うと感慨深い・・・\n→\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046201836525302032",
    "title": "帮我生成xxxx真迹图片",
    "category": "摄影与文档",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/MrLarus/status/2046201836525302032",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://pbs.twimg.com/media/HGWPzvxXYAAUbsn.jpg",
    "imageAlt": "帮我生成xxxx真迹图片示例图",
    "prompt": "以「帮我生成xxxx真迹图片」为目标生成图像。\n\n核心提示词：帮我生成xxxx真迹图片\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046154976159035613",
    "title": "この画像からゲームのステータス画面を作ってください。情報量多め。言語...",
    "category": "摄影与文档",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/Kashiko_AIart/status/2046154976159035613",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://pbs.twimg.com/media/HGVi-N3bgAAMqi-.jpg",
    "imageAlt": "この画像からゲームのステータス画面を作ってください。情報量多め。言語...示例图",
    "prompt": "以「この画像からゲームのステータス画面を作ってください。情報量多め。言語...」为目标生成图像。\n\n核心提示词：この画像からゲームのステータス画面を作ってください。情報量多め。言語は日本語。\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046231542817497392",
    "title": "请根据【主题】生成一张高质量竖版「科普百科图」。",
    "category": "图表与信息图",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "信息图",
      "结构化",
      "说明"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/MrLarus/status/2046231542817497392",
    "recommendedSize": "9:16",
    "imageUrl": "https://pbs.twimg.com/media/HGWr_g5W8AAfcpm.jpg",
    "imageAlt": "请根据【主题】生成一张高质量竖版「科普百科图」。示例图",
    "prompt": "请根据【主题】生成一张高质量竖版「科普百科图」。 \n\n这张图不是普通海报，也不是单纯插画，而是一张兼具“图鉴感、百科感、信息结构感、收藏感”的模块化科普信息图。整体风格参考高级博物图鉴、现代百科书页、生活方式知识卡和社交媒体高传播信息图的结合。\n\n请让画面包含：\n- 一个清晰漂亮的主题主视觉\n- 若干局部特征放大细节\n- 多个圆角模块化信息分区\n- 清楚的标题层级与重点标签\n- 简洁但丰富的百科内容\n- 可视化评分、要点总结或Top 5模块\n\n内容栏目请根据主题自动适配，优先从这些方向中选择并合理组合：\n基础档案、分类信息、外观特征、习性/生态、形成机制/结构组成、生长或使用条件、养护或维护建议、风险与注意事项、适合人群或适用场景、优缺点对比、快速评分卡。\n\n视觉要求：\n浅色干净背景，柔和配色，轻阴影，精致小图标，圆角信息框，整洁排版，信息密度高但不拥挤，阅读体验好。整体必须像真正可以发布、阅读、收藏、系列化生产的科普百科卡，而不是广告图。\n\n请不要做成普通商业宣传海报。要突出“知识整理 + 模块信息 + 图鉴式展示”的特征。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046115431144902732",
    "title": "Analog 35mm film photography, soft...",
    "category": "UI 与界面",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/BubbleBrain/status/2046115431144902732",
    "recommendedSize": "9:16",
    "imageUrl": "https://pbs.twimg.com/media/HGVC87TaIAAYLc8.jpg",
    "imageAlt": "Analog 35mm film photography, soft...示例图",
    "prompt": "Analog 35mm film photography, soft airy Japanese-style aesthetic, gentle diffused natural window light, slight overexposure, pastel tones, low contrast, soft highlights,  minimal indoor setting near a window with white curtains, clean light-colored wall, natural composition, eye-level, slightly closer full-body framing (mid-thigh to head),  young East Asian woman, natural minimal makeup, soft realistic skin texture, long slightly messy dark hair,  oversized white button-up shirt, light casual shorts, barefoot, simple and relaxed styling,  standing naturally with relaxed posture, arms loosely at sides or slightly behind, facing camera, gentle soft smile, subtle stillness,  focus on light, air, and quiet everyday mood, soft film grain, dreamy and understated atmosphere --ar 9:16",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046434670724907395",
    "title": "9:16 vertical — editorial portrait...",
    "category": "UI 与界面",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/BubbleBrain/status/2046434670724907395",
    "recommendedSize": "9:16",
    "imageUrl": "https://pbs.twimg.com/media/HGZlWQiakAAAlF_.jpg",
    "imageAlt": "9:16 vertical — editorial portrait...示例图",
    "prompt": "9:16 vertical — editorial portrait, single subject  soft black mist filter, subtle haze, gentle highlight bloom, muted tones  minimal indoor space, clean background, slight texture  young Korean woman, minimal makeup, natural skin texture  outfit: fitted ribbed knit top or soft camisole layered under a loose shirt, paired with high-waisted shorts or skirt; fabric slightly clings to body shape, soft and natural, no revealing elements  hair: slightly messy, natural volume  pose: sitting on floor with one leg bent and the other relaxed, body slightly leaning, shoulders not aligned, head tilted  composition: subject slightly off-center, negative space present  expression: calm, slightly distant, natural lips  lighting: soft side light, gentle shadow falloff  mood: understated, quiet, subtly sensual through natural body lines, relaxed and unposed  quality: fine grain, slight softness, realistic look",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046509734954741780",
    "title": "架空のアニメ映画のポスターをGPT image2で作成。",
    "category": "摄影与文档",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/seiiiiiiiiiiru/status/2046509734954741780",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://pbs.twimg.com/media/HGao-GgakAAooqf.jpg",
    "imageAlt": "架空のアニメ映画のポスターをGPT image2で作成。示例图",
    "prompt": "以「架空のアニメ映画のポスターをGPT image2で作成。」为目标生成图像。\n\n核心提示词：架空のアニメ映画のポスターをGPT image2で作成。\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046498264774791514",
    "title": "この商品広告をプロのデザイナー目線でリデザインして。",
    "category": "商品与电商",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "商品",
      "商业",
      "卖点"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/genel_ai/status/2046498264774791514",
    "recommendedSize": "4:5 / 1:1",
    "imageUrl": "https://pbs.twimg.com/media/HGafRaKbAAADlrb.jpg",
    "imageAlt": "この商品広告をプロのデザイナー目線でリデザインして。示例图",
    "prompt": "以「この商品広告をプロのデザイナー目線でリデザインして。」为目标生成图像。\n\n核心提示词：この商品広告をプロのデザイナー目線でリデザインして。\n今のトレンド、ターゲットに合わせた洗練されたデザインで。\n\n输出比例：4:5 / 1:1。\n\n扩展要求：请突出产品主体、材质、卖点标注、使用场景、价格或活动信息，避免遮挡品牌和包装。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046215276249993720",
    "title": "新中式水墨山水海报，竖版9:16构图，东方极简美学风格，",
    "category": "海报与排版",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/liyue_ai/status/2046215276249993720",
    "recommendedSize": "9:16",
    "imageUrl": "https://pbs.twimg.com/media/HGWd3PRbAAA0IZ3.jpg",
    "imageAlt": "新中式水墨山水海报，竖版9:16构图，东方极简美学风格，示例图",
    "prompt": "新中式水墨山水海报，竖版9:16构图，东方极简美学风格，\n大面积留白，整体色调为春日清晨氛围（青绿色、雾蓝、淡灰、浅墨），低饱和、清透柔和，高级质感。\n画面主体为奇峻巍峨的群山，从中间平静湖面的两侧拔地而起，占据左右两侧画面，\n山体以水墨晕染表现，浓淡干湿变化丰富，局部融入淡青绿色渲染，体现春意生机。\n山峰被湿润轻柔的晨雾包裹，雾气层层递进，与浅青蓝天空自然融合，形成空气透视与空间纵深。\n\n湖面如镜面般平静，呈现微青绿色调，倒映山体与天空，反射略带柔焦与雾化扩散效果，增强春日湿润与梦幻氛围。\n中景一艘带弧形篷顶的小木舟缓慢漂浮，船桨轻触水面形成细腻涟漪，水纹自然扩散，整体保持极静状态。\n\n船上为一位红衣渔女，体量较小（远景比例），人物简化处理为水墨剪影 + 轻微设色，\n身着低饱和朱砂红传统服饰（非鲜艳红），颜色略被雾气柔化，\n人物面部不刻画细节，仅保留轮廓与姿态（如轻扶船篷或执桨），\n红色在水面形成淡淡倒影，作为画面唯一暖色视觉焦点。\n\n岸边点缀疏林与春季新生植被，采用淡墨 + 淡青绿点染，虚实结合，增强节奏与生命气息。\n\n少量飞鸟在远空掠过，轻盈疏散分布，增强空间层次与灵动感。\n\n画面顶部居中竖排书法：“东方美学”，采用传统手写行书或行草风格（王羲之笔意），\n笔触自然起伏、提按分明，带飞白与墨韵扩散效果，避免字体感。\n书法颜色为深墨青或柔和墨黑，与整体画面统一。\n整体风格：水墨 + 现代极简设计融合，春日禅意、空灵湿润、宁静氛围，\n冷暖对比克制，电影感光影，高级艺术海报质感，8K超清细节。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046144801071079612",
    "title": "A mecha girl mid-teens, pale skin ...",
    "category": "UI 与界面",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/old_pgmrs_will/status/2046144801071079612",
    "recommendedSize": "16:9",
    "imageUrl": "https://pbs.twimg.com/media/HGVdySnbQAANZ0i.jpg",
    "imageAlt": "A mecha girl mid-teens, pale skin ...示例图",
    "prompt": "A mecha girl mid-teens, pale skin smudged with soot and salt spray, sharp amber eyes with glowing HUD reticles, waist-length ash-white hair tied in a high ponytail whipping in the sea wind, matte gunmetal exoskeleton armor plating her shoulders, forearms and shins, exposed hydraulic pistons at the joints, chest rig with glowing cyan coolant lines, oversized oil-stained hangar jacket half slipping off one shoulder, a massive rail cannon resting on her right shoulder, dog tags and frayed red ribbon at her collar , standing off-center to the left on the rusted edge of a tilted steel platform jutting out over dark water, weight shifted onto one leg, left hand gripping the cannon strap, head turned slightly toward camera with a quiet defiant stare, steam venting from her back thrusters, her ponytail and jacket streaming sideways in the salt wind , a vast derelict sea-city at dusk, colossal megastructures of unknown purpose rising from the ocean in staggered silhouettes, bone-white monolithic towers fused with barnacled steel, cyclopean ring-shaped constructs canted at broken angles, rusted skeletal gantries threaded with dead cables, dark swells rolling between the pylons, shipwrecks half-swallowed at their feet, thick sea fog clinging to the bases while the upper structures pierce into a bruised sky, scattered faint lights blinking high in the towers like distant eyes , moody low-key lighting, cold teal ambient from the overcast sky, warm amber sodium glow leaking from a distant structure camera-right, hard backlight from a low sun behind the towers carving her silhouette, volumetric god rays cutting through sea mist, wet specular highlights on her armor , 35mm anamorphic lens, slight low angle looking up past her shoulder toward the structures, medium-wide shot, shallow depth of field with foreground rust in soft focus, horizontal lens flares, fine atmospheric haze compressing the distant megastructures into layered silhouettes , cinematic anime key visual, painterly digital illustration with crisp line art, desaturated oceanic palette of teal, bone-white and rust punched by small warm accent lights, film grain, high-contrast editorial poster aesthetic . Format 16:9.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046530758190440928",
    "title": "やり方とプロンプトはツリー↓",
    "category": "摄影与文档",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/agi_aibusi/status/2046530758190440928",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://pbs.twimg.com/media/HGa7kSwbUAAIuaV.jpg",
    "imageAlt": "やり方とプロンプトはツリー↓示例图",
    "prompt": "以「やり方とプロンプトはツリー↓」为目标生成图像。\n\n核心提示词：やり方とプロンプトはツリー↓\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046371076402503709",
    "title": "「神層37区 特級執行官 神巫サバト」この名称のキャラクターと世界観...",
    "category": "摄影与文档",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/tebasaki3D/status/2046371076402503709",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://pbs.twimg.com/media/HGYrpGwaIAAPUzE.jpg",
    "imageAlt": "「神層37区 特級執行官 神巫サバト」この名称のキャラクターと世界観...示例图",
    "prompt": "以「「神層37区 特級執行官 神巫サバト」この名称のキャラクターと世界観...」为目标生成图像。\n\n核心提示词：「神層37区　特級執行官　神巫サバト」この名称のキャラクターと世界観に合ったビジュアルイメージを、プロのデザイナーとして縦長のポスターイメージとして制作して\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046243132774494607",
    "title": "平面插画，东方幻想风格高端城市海报设计，竖版9:16构图，整体采用对...",
    "category": "海报与排版",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/liyue_ai/status/2046243132774494607",
    "recommendedSize": "9:16",
    "imageUrl": "https://pbs.twimg.com/media/HGW3PphaIAEANfl.jpg",
    "imageAlt": "平面插画，东方幻想风格高端城市海报设计，竖版9:16构图，整体采用对...示例图",
    "prompt": "平面插画，东方幻想风格高端城市海报设计，竖版9:16构图，整体采用对角线+S型流动构图，从左下向右上延展，画面以深邃黑色为背景，自上而下渐变至浓烈暗红色，形成强烈冷暖对比与空间纵深，背景带微弱星尘与颗粒质感。画面中央一条金色流动能量线条如火焰般蜿蜒贯穿，自底部向上延伸，具有流体质感、粒子光效与渐变高光，局部带细微能量碎屑与体积光。\n\n金色流光中逐层浮现广州城市地标建筑群：广州塔为视觉核心，比例突出，周围融合珠江新城高楼群、猎德大桥及现代与岭南建筑元素，建筑采用“精细线描 + 金色发光体块”表现，轮廓清晰、细节丰富，在金色光晕映衬下仿佛悬浮于虚空，形成超现实空间层次，远景轻微雾化增强纵深感。\n\n画面底部为一位东方白发女性形象，长发飘逸，如烟似雾，与金色流光自然衔接并逐渐融合，发丝半透明带渐变光感，姿态柔美，双目微闭，神情宁静，怀抱一束多彩鲜花，花间点缀微光粒子与星点效果，象征人与城市能量的精神连接，人物细节适度简化以突出整体设计感。\n\n光影集中于金色流线、建筑与人物轮廓，形成强烈明暗对比与视觉聚焦，整体氛围宏大、神秘、具有东方神话意境且略带治愈感。色彩以黑与暗红为基底，高亮鎏金为主视觉强调，金色具备丰富明暗层次，辅以小面积高饱和花束色彩点缀，整体高级克制。\n\n页面文字与画面融合排版：顶部居中宋体大字“广州·中国”，下方小字“2026/04/20”，再下方小字“LIYUE”，文字采用淡金色或柔和暖白色，与整体光影统一。高品质细节，电影级光影表现，体积光与粒子细节丰富，画面干净无噪点，超高清8K分辨率，商业级海报质感。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046502288102170757",
    "title": "9:16 vertical — Japanese Fuji film...",
    "category": "商品与电商",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "商品",
      "商业",
      "卖点"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/BubbleBrain/status/2046502288102170757",
    "recommendedSize": "9:16",
    "imageUrl": "https://pbs.twimg.com/media/HGai4GebkAAfesB.jpg",
    "imageAlt": "9:16 vertical — Japanese Fuji film...示例图",
    "prompt": "9:16 vertical — Japanese Fuji film style couple portrait, two subjects  Fujifilm analog aesthetic (Pro 400H / Superia feel), soft pastel tones, slight green-magenta shift, low contrast, gentle highlight roll-off, fine film grain, subtle halation  bright natural daylight, diffused sunlight through window, soft shadows, airy atmosphere  young Japanese couple, natural minimal makeup, realistic skin texture, slight imperfections  female outfit: oversized button-up shirt with loose shorts, relaxed fit, soft casual styling   male outfit: simple t-shirt or light shirt, clean and understated  hair: natural, slightly tousled for both  pose: close intimate distance — sitting or standing close together; the girl gently leaning toward him, one hand lightly resting on his shoulder or chest; the boy slightly leaning in, faces close, almost touching, capturing the moment just before a kiss  expression: soft smiles or gentle gaze toward each other, relaxed and natural, emotional connection visible  camera: close framing (waist-up), eye-level, intimate distance, slight handheld feel  setting: minimal indoor near window, light curtains, clean soft background  lighting: diffused daylight, gentle highlight bloom, soft shadow transitions  mood: warm, romantic, intimate everyday moment, natural affection  quality: ultra-realistic, analog film look, fine grain, slight softness, natural imperfections",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046494262158930154",
    "title": "バックプロパゲーションについて詳しく図解して",
    "category": "摄影与文档",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/itnavi2022/status/2046494262158930154",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://pbs.twimg.com/media/HGabrymaUAAoDXS.jpg",
    "imageAlt": "バックプロパゲーションについて詳しく図解して示例图",
    "prompt": "以「バックプロパゲーションについて詳しく図解して」为目标生成图像。\n\n核心提示词：バックプロパゲーションについて詳しく図解して\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046500429786402973",
    "title": "デメニギスの体の構造を解説するカラー図鑑のページ",
    "category": "摄影与文档",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/itnavi2022/status/2046500429786402973",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://pbs.twimg.com/media/HGahSugbEAA0yOv.jpg",
    "imageAlt": "デメニギスの体の構造を解説するカラー図鑑のページ示例图",
    "prompt": "以「デメニギスの体の構造を解説するカラー図鑑のページ」为目标生成图像。\n\n核心提示词：デメニギスの体の構造を解説するカラー図鑑のページ\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046536551681954207",
    "title": "生成一个抖音直播的截图 里面是一个美女在直播，在卖丝袜和内衣，她的在...",
    "category": "UI 与界面",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/xiaohu/status/2046536551681954207",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://pbs.twimg.com/media/HGbB4--bAAAfGnL.jpg",
    "imageAlt": "生成一个抖音直播的截图 里面是一个美女在直播，在卖丝袜和内衣，她的在...示例图",
    "prompt": "以「生成一个抖音直播的截图 里面是一个美女在直播，在卖丝袜和内衣，她的在...」为目标生成图像。\n\n核心提示词：生成一个抖音直播的截图 里面是一个美女在直播，在卖丝袜和内衣，她的在线人数是99996，热度是18+，有个叫小互的大哥，给她刷了一个飞机礼物\n\n输出比例：9:16 / 16:9。\n\n扩展要求：请补充完整状态栏、导航、核心内容区、操作区和真实应用细节，像真实产品截图而不是概念稿。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046272578705068476",
    "title": "an ingame screenshot of rust",
    "category": "UI 与界面",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/FixlationAI/status/2046272578705068476",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://pbs.twimg.com/media/HGXRG3IbUAA4iTM.jpg",
    "imageAlt": "an ingame screenshot of rust示例图",
    "prompt": "以「an ingame screenshot of rust」为目标生成图像。\n\n核心提示词：an ingame screenshot of rust\n\n输出比例：9:16 / 16:9。\n\n扩展要求：请补充完整状态栏、导航、核心内容区、操作区和真实应用细节，像真实产品截图而不是概念稿。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046188377524076915",
    "title": "画像のプロンプトはALTに載せてます。",
    "category": "摄影与文档",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/yudotanaka/status/2046188377524076915",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://pbs.twimg.com/media/HGV__0DakAAdaZR.jpg",
    "imageAlt": "画像のプロンプトはALTに載せてます。示例图",
    "prompt": "以「画像のプロンプトはALTに載せてます。」为目标生成图像。\n\n核心提示词：画像のプロンプトはALTに載せてます。\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046514205529088501",
    "title": "Create a Science fiction movie pos...",
    "category": "海报与排版",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/underwoodxie96/status/2046514205529088501",
    "recommendedSize": "4:5 / 9:16",
    "imageUrl": "https://pbs.twimg.com/media/HGatt-VasAAVQq2.jpg",
    "imageAlt": "Create a Science fiction movie pos...示例图",
    "prompt": "以「Create a Science fiction movie pos...」为目标生成图像。\n\n核心提示词：Create a Science fiction movie poster\n\n输出比例：4:5 / 9:16。\n\n扩展要求：请强化标题、副标题、视觉主体、留白、字体层级和版面节奏，做成完成度高的海报或封面。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046501692246470871",
    "title": "少し暑くなってきた今の時期に、さわやかにさっぱりしたい、みずみずしさ...",
    "category": "摄影与文档",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/genel_ai/status/2046501692246470871",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://pbs.twimg.com/media/HGag91IbAAAo4du.jpg",
    "imageAlt": "少し暑くなってきた今の時期に、さわやかにさっぱりしたい、みずみずしさ...示例图",
    "prompt": "以「少し暑くなってきた今の時期に、さわやかにさっぱりしたい、みずみずしさ...」为目标生成图像。\n\n核心提示词：少し暑くなってきた今の時期に、さわやかにさっぱりしたい、みずみずしさ、みたいなところをもっと強く感じたい。冷たいうどんやナス、つゆを口に含んだ時の爽快感、みたいなものをもっと感じるように\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046523491940225366",
    "title": "玄武门之变的朋友圈",
    "category": "摄影与文档",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/Tz_2022/status/2046523491940225366",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://pbs.twimg.com/media/HGa2ROUX0AAadhO.jpg",
    "imageAlt": "玄武门之变的朋友圈示例图",
    "prompt": "以「玄武门之变的朋友圈」为目标生成图像。\n\n核心提示词：玄武门之变的朋友圈\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046514998965371144",
    "title": "生成一张手写中/西医药方图",
    "category": "摄影与文档",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/MrLarus/status/2046514998965371144",
    "recommendedSize": "1:1",
    "imageUrl": "https://pbs.twimg.com/media/HGaqaO2W4AA2W-6.jpg",
    "imageAlt": "生成一张手写中/西医药方图示例图",
    "prompt": "以「生成一张手写中/西医药方图」为目标生成图像。\n\n核心提示词：生成一张手写中/西医药方图\n\n输出比例：1:1。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046476566537080849",
    "title": "生成圣斗士星矢12个黄金圣斗士的12宫格卡牌图片，每张卡牌上写上对应...",
    "category": "摄影与文档",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/songguoxiansen/status/2046476566537080849",
    "recommendedSize": "16:9",
    "imageUrl": "https://pbs.twimg.com/media/HGaLQTfbkAA3xpN.jpg",
    "imageAlt": "生成圣斗士星矢12个黄金圣斗士的12宫格卡牌图片，每张卡牌上写上对应...示例图",
    "prompt": "以「生成圣斗士星矢12个黄金圣斗士的12宫格卡牌图片，每张卡牌上写上对应...」为目标生成图像。\n\n核心提示词：生成圣斗士星矢12个黄金圣斗士的12宫格卡牌图片，每张卡牌上写上对应的中文名，每行4个，宽高比16:9。\n\n输出比例：16:9。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046523494003851300",
    "title": "生成【城市】三天旅游攻略，就这么简单一句话",
    "category": "品牌与空间",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "品牌",
      "空间",
      "视觉系统"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/MrLarus/status/2046523494003851300",
    "recommendedSize": "16:9 / 4:5",
    "imageUrl": "https://pbs.twimg.com/media/HGa2KbFXMAAv9Wh.jpg",
    "imageAlt": "生成【城市】三天旅游攻略，就这么简单一句话示例图",
    "prompt": "以「生成【城市】三天旅游攻略，就这么简单一句话」为目标生成图像。\n\n核心提示词：生成【城市】三天旅游攻略，就这么简单一句话\n\n输出比例：16:9 / 4:5。\n\n扩展要求：请展示品牌识别、空间结构、材质、触点物料或环境氛围，让画面像真实提案图。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046523198116889064",
    "title": "A refined 2026 Silicon Valley city...",
    "category": "UI 与界面",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/carsonyungos/status/2046523198116889064",
    "recommendedSize": "9:16",
    "imageUrl": "https://pbs.twimg.com/media/HGa1gocaAAAqVzg.jpg",
    "imageAlt": "A refined 2026 Silicon Valley city...示例图",
    "prompt": "A refined 2026 Silicon Valley city promotional poster with a futuristic yet elegant atmosphere.\n\nDouble exposure composition, preserving an S-shaped sense of flowing movement. On a pure white textured background, in the lower-right corner, a miniature figure dressed in sleek modern techwear is releasing a long ribbon of luminous silver-blue light. The ribbon flows gracefully through the air, showing a soft silk-like texture, and as it drifts toward the upper-left, it magically transforms into a grand landscape of rolling hills, coastline, data streams, and illuminated urban terrain.\n\nWithin this flowing “river of light,” overlay a hand-drawn panoramic map of Silicon Valley, blending technology, nature, innovation, and California sunlight. The scene feels visionary, expansive, sophisticated, and inspiring.\n\nInclude iconic Silicon Valley and Bay Area elements: Stanford University arches, Apple Park, Google campus-inspired buildings, Meta-like glass offices, Tesla-style innovation imagery, venture capital offices on Sand Hill Road, Palo Alto tree-lined streets, San Jose skyline, the Santa Cruz Mountains, San Francisco Bay, highways, autonomous vehicles, startup labs, semiconductor patterns, AI data centers, and subtle circuit-board textures.\n\nSurrounded by soft mist, golden California light, floating clouds, and delicate digital particles. Rich colors, complex structure, highly detailed, grand and breathtaking, yet still fresh and minimal because of the large areas of white space.\n\nIn the lower-left corner, elegant typography reads “SILICON VALLEY 2026” with a vertical promotional slogan: “Where Ideas Shape Tomorrow.” Beautiful editorial layout, graceful spacing, clear and complete lettering, premium city branding poster, cinematic lighting, sophisticated details, 9:16 aspect ratio.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046491397424111659",
    "title": "创作一幅超逼真的 3D 插画，描绘一个略微倾斜的 Twitter/X...",
    "category": "UI 与界面",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/GoSailGlobal/status/2046491397424111659",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://pbs.twimg.com/media/HGaYpIJbIAE8rsz.jpg",
    "imageAlt": "创作一幅超逼真的 3D 插画，描绘一个略微倾斜的 Twitter/X...示例图",
    "prompt": "创作一幅超逼真的 3D 插画，描绘一个略微倾斜的 Twitter/X 个人资料页面，背景为简洁的灰色。保留原有的卡通头像。界面必须与真实的 X 截图相似，包含真实的布局、认证徽章、粉丝统计、个人资料横幅和推文部分。\n\n个人资料详情：\n\n一位时尚的年轻男子，有着蓬松的亮黑色短发和白皙的皮肤，从个人资料页面的右侧撕开的纸片中跃然而出。他保留了原有的面部特征，只是将表情改为自然自信的微笑。他握着撕开的纸片边缘，纸屑四处飞溅，营造出强烈的 3D 突破效果。\n\n柔和的影棚灯光、电影级的阴影、景深、超高细节、清晰的焦点、逼真的皮肤、逼真的 UI 反射、优质的构图、4K 分辨率、逼真与微妙的皮克斯风格融合。\n\n重要提示：\n\n- 请勿更改头像\n\n- 保持 X UI 界面准确\n\n- 保留原有的面部特征\n\n- 角色为男性\n\n- 仅增强笑容\n\n- 确保所有中文文字清晰易读",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046413660147314714",
    "title": "Generate a high-quality vertical \"...",
    "category": "UI 与界面",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/pfanis/status/2046413660147314714",
    "recommendedSize": "9:16",
    "imageUrl": "https://pbs.twimg.com/media/HGZSJzFbEAAc0IO.jpg",
    "imageAlt": "Generate a high-quality vertical \"...示例图",
    "prompt": "Generate a high-quality vertical \"science popularization encyclopedia image\" based on [Theme].  \n\n This image is not an ordinary poster, nor is it purely an illustration; it's a modular science information graphic that combines \"atlas-like feel, encyclopedic feel, information structure, and collectible appeal.\" The overall style references a blend of advanced natural history atlases, modern encyclopedia pages, lifestyle knowledge cards, and highly shareable social media infographics.  Please include in the image: - A clear and beautiful main visual of the theme - Several magnified close-up details of partial features - Multiple rounded modular information sections - Clear title hierarchy and key labels - Concise yet rich encyclopedic content - Visualized ratings, key point summaries, or Top 5 modules  Content sections should automatically adapt based on the theme, prioritizing selection and reasonable combination from these directions: Basic profile, classification info, appearance features, habits/ecology, formation mechanism/structure composition, growth or usage conditions, care or maintenance tips, risks and precautions, suitable people or application scenarios, pros and cons comparison, quick rating card.  Visual requirements: Light, clean background; soft color palette; subtle shadows; refined small icons; rounded info boxes; neat typography; high information density without clutter; excellent reading experience. The overall design must feel like a genuine science encyclopedia card that can be published, read, collected, and produced in series—not like an ad graphic.  Please don't make it into an ordinary commercial promotional poster. Emphasize the features of \"knowledge organization + modular info + atlas-style presentation.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046215187678790140",
    "title": "プロンプトはリプに最終ページとまとめて掲載します↓",
    "category": "摄影与文档",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/minesan_ai/status/2046215187678790140",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://pbs.twimg.com/media/HGWdr8RagAAhg6x.jpg",
    "imageAlt": "プロンプトはリプに最終ページとまとめて掲載します↓示例图",
    "prompt": "以「プロンプトはリプに最終ページとまとめて掲載します↓」为目标生成图像。\n\n核心提示词：プロンプトはリプに最終ページとまとめて掲載します↓\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046165776055546341",
    "title": "生成一张慈禧的X主页",
    "category": "摄影与文档",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/Cryptohaifeng_/status/2046165776055546341",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://pbs.twimg.com/media/HGVw2JUbQAAG9Bn.jpg",
    "imageAlt": "生成一张慈禧的X主页示例图",
    "prompt": "以「生成一张慈禧的X主页」为目标生成图像。\n\n核心提示词：生成一张慈禧的X主页\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046530764871696750",
    "title": "GPT-image-2でこの手相を診断して詳細な鑑定書を作って",
    "category": "摄影与文档",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/agi_aibusi/status/2046530764871696750",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://pbs.twimg.com/media/HGa8bFSbsAA6rpa.jpg",
    "imageAlt": "GPT-image-2でこの手相を診断して詳細な鑑定書を作って示例图",
    "prompt": "以「GPT-image-2でこの手相を診断して詳細な鑑定書を作って」为目标生成图像。\n\n核心提示词：GPT-image-2でこの手相を診断して詳細な鑑定書を作って\n生命線・知能線・感情線・運命線・太陽線・財運線・結婚線を、線の形状・濃淡・枝分かれ・起点終点まで分析すること。\n助言を重点的に高品質な占い鑑定書にまとめること。\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046515319947354603",
    "title": "在计算机博物馆里，一个程序员在展厅中央，正在演示C语言编程，很多参观...",
    "category": "品牌与空间",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "品牌",
      "空间",
      "视觉系统"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/XiaohuiAI666/status/2046515319947354603",
    "recommendedSize": "16:9",
    "imageUrl": "https://pbs.twimg.com/media/HGaumsnbYAAxaPl.jpg",
    "imageAlt": "在计算机博物馆里，一个程序员在展厅中央，正在演示C语言编程，很多参观...示例图",
    "prompt": "以「在计算机博物馆里，一个程序员在展厅中央，正在演示C语言编程，很多参观...」为目标生成图像。\n\n核心提示词：在计算机博物馆里，一个程序员在展厅中央，正在演示C语言编程，很多参观者在围观，屏幕上的代码清晰可见。旁边的牌子写着：古法编程，现场表演。2D卡通画风，16:9\n\n输出比例：16:9。\n\n扩展要求：请展示品牌识别、空间结构、材质、触点物料或环境氛围，让画面像真实提案图。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046510310253539764",
    "title": "生成一张【字体】书法临摹字帖",
    "category": "海报与排版",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/MrLarus/status/2046510310253539764",
    "recommendedSize": "4:5 / 9:16",
    "imageUrl": "https://pbs.twimg.com/media/HGapfCrW4AAO_HH.jpg",
    "imageAlt": "生成一张【字体】书法临摹字帖示例图",
    "prompt": "以「生成一张【字体】书法临摹字帖」为目标生成图像。\n\n核心提示词：生成一张【字体】书法临摹字帖\n\n输出比例：4:5 / 9:16。\n\n扩展要求：请强化标题、副标题、视觉主体、留白、字体层级和版面节奏，做成完成度高的海报或封面。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046437230127034774",
    "title": "GPT Image 2を使って、OpenClawの情報を調べてドンキ...",
    "category": "摄影与文档",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/loglogrog/status/2046437230127034774",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://pbs.twimg.com/media/HGZnLqbboAAGFRB.jpg",
    "imageAlt": "GPT Image 2を使って、OpenClawの情報を調べてドンキ...示例图",
    "prompt": "以「GPT Image 2を使って、OpenClawの情報を調べてドンキ...」为目标生成图像。\n\n核心提示词：GPT Image 2を使って、OpenClawの情報を調べてドンキの広告ポップ風に実際のドンキに貼っているような感じで画像生成してください\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046514558064586782",
    "title": "『賑やかで魅力的なスーパーマーケットの折り込みチラシの画像。上部には...",
    "category": "商品与电商",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "商品",
      "商业",
      "卖点"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/weel_corp/status/2046514558064586782",
    "recommendedSize": "4:5 / 1:1",
    "imageUrl": "https://pbs.twimg.com/media/HGatbcobIAAuNfa.jpg",
    "imageAlt": "『賑やかで魅力的なスーパーマーケットの折り込みチラシの画像。上部には...示例图",
    "prompt": "以「『賑やかで魅力的なスーパーマーケットの折り込みチラシの画像。上部には...」为目标生成图像。\n\n核心提示词：『賑やかで魅力的なスーパーマーケットの折り込みチラシの画像。上部には「特売」の大きな文字と今週の日付。カラフルな商品写真（野菜・果物・牛肉・鮮魚）、赤枠の価格タグ、「超目玉商品」「家計応援」のキャッチ…』\n\n输出比例：4:5 / 1:1。\n\n扩展要求：请突出产品主体、材质、卖点标注、使用场景、价格或活动信息，避免遮挡品牌和包装。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046263153546174935",
    "title": "请根据【主题】，生成一张高设计感的人物关系图海报。要求这张图不是普通...",
    "category": "图表与信息图",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "信息图",
      "结构化",
      "说明"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/MrLarus/status/2046263153546174935",
    "recommendedSize": "4:5 / 16:9",
    "imageUrl": "https://pbs.twimg.com/media/HGXHhQcbAAAFcYA.jpg",
    "imageAlt": "请根据【主题】，生成一张高设计感的人物关系图海报。要求这张图不是普通...示例图",
    "prompt": "请根据【主题】，生成一张高设计感的人物关系图海报。要求这张图不是普通插画，而是兼具信息可视化、叙事结构、海报设计感和作品风格还原度的人物关系图。\n\n请自动完成以下内容：\n- 识别该主题对应的作品及其核心设定\n- 提取最具代表性的 6–12 位关键人物，必要时不超过 15 位\n- 识别并展示关键人物关系，包括血缘、爱情、友情、联盟、敌对、师徒、主从、操控、背叛、秘密关系等\n- 自动按作品特点选择合适的构图方式，如主角中心型、双核心对峙型、阵营分区型、家族谱系型或时间演变型\n- 自动提炼作品的风格DNA，包括色彩、世界观符号、材质纹理、情绪氛围、排版语言和代表性元素\n- 将这些风格元素转化为人物关系图的整体视觉设计，而不是简单复制某张官方海报\n- 用不同颜色、线型、箭头区分不同关系，保证线条清晰、层次分明、不杂乱\n- 核心人物最突出，重要人物次之，次级人物弱化，形成明确视觉层级\n- 每个人物名称清晰可读，必要时可加入身份或阵营标签\n\n最终成品应满足：\n- 一眼看懂人物主次和关键关系\n- 具有明显的原作品气质与设定感\n- 兼具信息图的清晰度与海报的高级设计感\n- 画面统一、精致、完整、适合社交媒体传播或海报展示\n- 避免廉价流程图感、避免杂乱堆砌、避免信息过载",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046448773162033240",
    "title": "# 混沌としたメモ書き・記号の集合体からキャラクターの顔を浮かび上が...",
    "category": "摄影与文档",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/loglogrog/status/2046448773162033240",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://pbs.twimg.com/media/HGZxpguaEAA1qcc.jpg",
    "imageAlt": "# 混沌としたメモ書き・記号の集合体からキャラクターの顔を浮かび上が...示例图",
    "prompt": "# 混沌としたメモ書き・記号の集合体からキャラクターの顔を浮かび上がらせるアート\n\n--- スタイル\n- 白い紙の上に黒インクで描かれた大量の手書きメモ、数式、記号、ランダムな線。\n- 紙いっぱいに散らばる書き殴り風のカオス。\n- 所々に赤インクの強調（ライン、塗り潰し、マーカー風の塊）。\n- アナログのノート落書きのような質感。\n\n--- 構図\n- ランダムなメモや記号が全体を覆い尽くす。\n- 黒インクの線や文字の密度が「キャラクターの顔」の位置に集中する。\n- 結果として、混沌の中から「与えられたキャラクターの顔のシルエット・表情」がうっすら浮かび上がる。\n- 顔は写実的ではなく、カオスの断片が集まって形を成す。\n\n--- 色彩\n- モノクロ（黒・白）を主体に構成。\n- 赤インクをアクセントとして散発的に配置。\n- 彩度は抑えめ、アナログの紙とインク感を重視。\n\n--- 表現要素\n- 読めるようで読めない文字列、日本語や英数字が混在。\n- 数式記号、矢印、点、斜線、クロス、ドリップ（インクの飛び散り）。\n- キャラクターの顔の目や髪の輪郭は、メモや記号の配置の「余白」や「濃淡」で浮かび上がる。\n\n--- 禁止事項\n- 顔を直接的に描き込む写実ポートレート。\n- デジタル処理的で整然とした幾何学模様。\n- カラフルな彩色や過飽和表現。\n- ロゴ、透かし、人工的なCG感。\n\n--- Definition of Done (DoD)\n- 全体は「混沌としたメモ・記号の集合体」として成立している。  \n- 与えられたキャラクターの顔が、混沌の濃淡・配置から自然に浮かび上がる。  \n- 色はモノクロ＋赤アクセントのみ。  \n- 紙とインクの手描き的質感を保持している。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046414546378584558",
    "title": "Generate for me a UI design system...",
    "category": "UI 与界面",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/pfanis/status/2046414546378584558",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://pbs.twimg.com/media/HGZTLbuaUAAczIJ.jpg",
    "imageAlt": "Generate for me a UI design system...示例图",
    "prompt": "Generate for me a UI design system with a very cutting-edge, bold, and unique theme that includes glassy visuals and transparencies",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046406024303976904",
    "title": "戦前日本の怪しげな研究所を探検しているマイクラのスクリーンショット画...",
    "category": "摄影与文档",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/RitaStar1128/status/2046406024303976904",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://pbs.twimg.com/media/HGZLYdWaMAAQScz.jpg",
    "imageAlt": "戦前日本の怪しげな研究所を探検しているマイクラのスクリーンショット画...示例图",
    "prompt": "以「戦前日本の怪しげな研究所を探検しているマイクラのスクリーンショット画...」为目标生成图像。\n\n核心提示词：戦前日本の怪しげな研究所を探検しているマイクラのスクリーンショット画像を作成して\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046218165961753047",
    "title": "根据你对我的认知 给我生成一个“你认识的我”的 图片",
    "category": "摄影与文档",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/80vul/status/2046218165961753047",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://pbs.twimg.com/media/HGWgkSvasAAuW2B.jpg",
    "imageAlt": "根据你对我的认知 给我生成一个“你认识的我”的 图片示例图",
    "prompt": "以「根据你对我的认知 给我生成一个“你认识的我”的 图片」为目标生成图像。\n\n核心提示词：根据你对我的认知 给我生成一个“你认识的我”的 图片\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046542225358917945",
    "title": "この画像のプロンプト↓",
    "category": "摄影与文档",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/hiro_ai_auto/status/2046542225358917945",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://pbs.twimg.com/media/HGbGRIibQAAjAV3.jpg",
    "imageAlt": "この画像のプロンプト↓示例图",
    "prompt": "以「この画像のプロンプト↓」为目标生成图像。\n\n核心提示词：この画像のプロンプト↓\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046540642634047868",
    "title": "Prompt见评论。",
    "category": "摄影与文档",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/EurekaLuyao/status/2046540642634047868",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://pbs.twimg.com/media/HGbF3GpakAE9nWN.jpg",
    "imageAlt": "Prompt见评论。示例图",
    "prompt": "以「Prompt见评论。」为目标生成图像。\n\n核心提示词：Prompt见评论。\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046528889124728993",
    "title": "ピラティス教室の広告画像を作成したい テキストはよりユーザーが登録を...",
    "category": "摄影与文档",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/ck_igarashi/status/2046528889124728993",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://pbs.twimg.com/media/HGa68yAawAA1aEE.jpg",
    "imageAlt": "ピラティス教室の広告画像を作成したい テキストはよりユーザーが登録を...示例图",
    "prompt": "以「ピラティス教室の広告画像を作成したい テキストはよりユーザーが登録を...」为目标生成图像。\n\n核心提示词：ピラティス教室の広告画像を作成したい テキストはよりユーザーが登録をするのに惹かれるような文言にし、画像内には女性がピラティスを実際に行っている様子を映して\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046519658166317160",
    "title": "日本のソシャゲのガチャ画面を生成して、",
    "category": "摄影与文档",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/the_wheel_2024/status/2046519658166317160",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://pbs.twimg.com/media/HGayF3iagAARTZ1.jpg",
    "imageAlt": "日本のソシャゲのガチャ画面を生成して、示例图",
    "prompt": "以「日本のソシャゲのガチャ画面を生成して、」为目标生成图像。\n\n核心提示词：日本のソシャゲのガチャ画面を生成して、\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046507931907080330",
    "title": "用可爱的风格讲述中国远征军的历史故事",
    "category": "摄影与文档",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/RainHuangapp/status/2046507931907080330",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://pbs.twimg.com/media/HGaoFjmW8AAfZlw.jpg",
    "imageAlt": "用可爱的风格讲述中国远征军的历史故事示例图",
    "prompt": "以「用可爱的风格讲述中国远征军的历史故事」为目标生成图像。\n\n核心提示词：用可爱的风格讲述中国远征军的历史故事\n用波普风格讲述金刚经\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046507362266259832",
    "title": "サムアルトマンがメジャーリーガーでバットを構えている。よくあるような...",
    "category": "摄影与文档",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/16kthir0GRXgNqn/status/2046507362266259832",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://pbs.twimg.com/media/HGanmTua8AAnw3k.jpg",
    "imageAlt": "サムアルトマンがメジャーリーガーでバットを構えている。よくあるような...示例图",
    "prompt": "以「サムアルトマンがメジャーリーガーでバットを構えている。よくあるような...」为目标生成图像。\n\n核心提示词：サムアルトマンがメジャーリーガーでバットを構えている。よくあるようなテレビ画面の構図\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046501587762188535",
    "title": "A 9:16 vertical version, high-deta...",
    "category": "UI 与界面",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/Shinning1010/status/2046501587762188535",
    "recommendedSize": "9:16",
    "imageUrl": "https://pbs.twimg.com/media/HGaiU_8XoAAAkaS.jpg",
    "imageAlt": "A 9:16 vertical version, high-deta...示例图",
    "prompt": "A 9:16 vertical version, high-detail realistic style Chinese TikTok live screenshot, Elon Musk is talking to the mobile phone camera in the live broadcast room, excited, smiling, and the live atmosphere is warm and real. He held a white handwritten sign in one hand, which clearly said: \"Thank you Shinning\". There are obvious Chinese TikTok interface elements in the live broadcast screen, including likes, comments and share icons arranged vertically on the right, scrolling Chinese bullet screens and interactive comments below, and the \"live broadcast\" logo at the top, which looks like a real mobile phone screenshot. There is an eye-catching gift prompt special effect in the screen: \"Shinning sent TikTok No. 1\", with gift animation light effect and platform-style prompt box. Musk is in a professional live broadcast environment, with a mobile phone holder, a ring fill light and a desktop microphone in front of him. The background is a modern technology live broadcast room with bright lights and a slight neon atmosphere. The composition is real and natural, like the ongoing live screenshot of the Chinese short video platform. The interface information is rich but not messy, the characters are clear, the expression is vivid, the details are rich, the sense of real photography, the depth of field, high definition, cinematic, photorealistic, realistic livestream screenshot, social media UI, Chinese Douyin live room, detailed lighting, natural skin texture.\n\nNegative prompts:\n\nLow definition, blur, cartoon, illustration, too strong CG sense, two-dimensional, deformed fingers, wrong text, scrambled code, multiple mobile phones, multiple brands, character repetition, face collapse, facial features distortion, excessive skin polishing, overexposure, too dark, messy background, wrong UI, non-Chinese short video interface, too many English bullet screens, gift special effects are not obvious, cropping error, proportional error\n\nSupplementary reinforcement words:\n\nReal mobile phone screen recording screenshot feeling, the live broadcast UI is complete, the gift prompt box conforms to the style of the Chinese short video platform, the Chinese comment area is active, the number of people online in the live broadcast room is clearly displayed, and the time, power and signal bar are visible.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046468976092533180",
    "title": "用未来都市风格生成UI设计系统，灵感来自赛博朋克城市夜景，包含霓虹灯...",
    "category": "UI 与界面",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/AZLnfvp/status/2046468976092533180",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://pbs.twimg.com/media/HGaD4PcbUAAOTRf.jpg",
    "imageAlt": "用未来都市风格生成UI设计系统，灵感来自赛博朋克城市夜景，包含霓虹灯...示例图",
    "prompt": "以「用未来都市风格生成UI设计系统，灵感来自赛博朋克城市夜景，包含霓虹灯...」为目标生成图像。\n\n核心提示词：用未来都市风格生成UI设计系统，灵感来自赛博朋克城市夜景，包含霓虹灯、玻璃建筑反射、高对比光影，配色以紫色、蓝色、粉色霓虹为主，设计网页Dashboard、移动端界面、卡片、按钮、控件等，视觉炫酷、层次丰富、科技感极强\n\n输出比例：9:16 / 16:9。\n\n扩展要求：请补充完整状态栏、导航、核心内容区、操作区和真实应用细节，像真实产品截图而不是概念稿。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046410519595348397",
    "title": "counter strike in game screenshot,...",
    "category": "UI 与界面",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/yssrski/status/2046410519595348397",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://pbs.twimg.com/media/HGZPY4FbAAAljq3.jpg",
    "imageAlt": "counter strike in game screenshot,...示例图",
    "prompt": "以「counter strike in game screenshot,...」为目标生成图像。\n\n核心提示词：counter strike in game screenshot, mixed with Terraria\n\n输出比例：9:16 / 16:9。\n\n扩展要求：请补充完整状态栏、导航、核心内容区、操作区和真实应用细节，像真实产品截图而不是概念稿。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046378199681257920",
    "title": "请根据【主题】生成一张高质量竖版「科普百科图」。",
    "category": "图表与信息图",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "信息图",
      "结构化",
      "说明"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/alanlovelq/status/2046378199681257920",
    "recommendedSize": "9:16",
    "imageUrl": "https://pbs.twimg.com/media/HGYyHmBaQAA6qFD.jpg",
    "imageAlt": "请根据【主题】生成一张高质量竖版「科普百科图」。示例图",
    "prompt": "请根据【主题】生成一张高质量竖版「科普百科图」。 \n\n这张图不是普通海报，也不是单纯插画，而是一张兼具“图鉴感、百科感、信息结构感、收藏感”的模块化科普信息图。整体风格参考高级博物图鉴、现代百科书页、生活方式知识卡和社交媒体高传播信息图的结合。\n\n请让画面包含：\n- 一个清晰漂亮的主题主视觉\n- 若干局部特征放大细节\n- 多个圆角模块化信息分区\n- 清楚的标题层级与重点标签\n- 简洁但丰富的百科内容\n- 可视化评分、要点总结或Top 5模块\n\n内容栏目请根据主题自动适配，优先从这些方向中选择并合理组合：\n基础档案、分类信息、外观特征、习性/生态、形成机制/结构组成、生长或使用条件、养护或维护建议、风险与注意事项、适合人群或适用场景、优缺点对比、快速评分卡。\n\n视觉要求：\n浅色干净背景，柔和配色，轻阴影，精致小图标，圆角信息框，整洁排版，信息密度高但不拥挤，阅读体验好。整体必须像真正可以发布、阅读、收藏、系列化生产的科普百科卡，而不是广告图。\n\n请不要做成普通商业宣传海报。要突出“知识整理 + 模块信息 + 图鉴式展示”的特征。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046271877577097376",
    "title": "以中国连环画（小人书）的风格帮我绘制大闹天空",
    "category": "摄影与文档",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/overseas58/status/2046271877577097376",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://pbs.twimg.com/media/HGXRKyKacAAdYwl.jpg",
    "imageAlt": "以中国连环画（小人书）的风格帮我绘制大闹天空示例图",
    "prompt": "以「以中国连环画（小人书）的风格帮我绘制大闹天空」为目标生成图像。\n\n核心提示词：以中国连环画（小人书）的风格帮我绘制大闹天空\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046267707881029934",
    "title": "帮我制作辣椒炒肉这道菜的详细制作流程图，真实风格，适用于小红书图文比例",
    "category": "UI 与界面",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/Kurt_Rousey466/status/2046267707881029934",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://pbs.twimg.com/media/HGXNeVCaAAQ7dMa.jpg",
    "imageAlt": "帮我制作辣椒炒肉这道菜的详细制作流程图，真实风格，适用于小红书图文比例示例图",
    "prompt": "以「帮我制作辣椒炒肉这道菜的详细制作流程图，真实风格，适用于小红书图文比例」为目标生成图像。\n\n核心提示词：帮我制作辣椒炒肉这道菜的详细制作流程图，真实风格，适用于小红书图文比例\n\n输出比例：9:16 / 16:9。\n\n扩展要求：请补充完整状态栏、导航、核心内容区、操作区和真实应用细节，像真实产品截图而不是概念稿。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046228485841334559",
    "title": "请围绕【主题】自动生成一张顶级概念海报 / 信息图式电影海报。",
    "category": "UI 与界面",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/A9Quant/status/2046228485841334559",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://pbs.twimg.com/media/HGWoYypbYAE7oiM.jpg",
    "imageAlt": "请围绕【主题】自动生成一张顶级概念海报 / 信息图式电影海报。示例图",
    "prompt": "请围绕【主题】自动生成一张顶级概念海报 / 信息图式电影海报。\n\n唯一输入变量只有：\n【主题】：__中国历史上的皇帝排名_         \n\n要求 AI 根据这个主题，自动推导并统一设计以下全部视觉系统，不需要我额外指定：\n- 核心主体（可以自动判断更适合人物、产品、建筑、器物、符号、场景或抽象意象）\n- 底部支撑结构\n- 上方悬浮符号或精神象征\n- 场景包裹元素\n- 隐喻系统\n- 色彩层级\n- 材质对比\n- 光影逻辑\n- 标题、副标题、辅助文案\n- 品牌感与高级感表达方式\n\n最终画面必须是：\n一张震撼、精密、统一、电影级、超高细节、可用于高端印刷的概念主视觉海报。\n\n【总风格】\n超写实 3D 商业 CGI 渲染，融合电影级布光、奢侈品视觉语言、未来感概念设计与史诗级构图。画面必须具有“唯一主视觉核心”，不能杂乱，不能像拼贴，不能像普通电商海报。\n\n【自动推导规则】\nAI 必须依据【主题】自动决定最合适的：\n1. 核心视觉隐喻\n2. 主体类型与姿态\n3. 支撑结构形式\n4. 悬浮元素形式\n5. 场景外壳与空间氛围\n6. 主色、辅色、强调色\n7. 材质组合\n8. 文字气质与版式风格\n\n例如：\n- 如果主题偏权力、秩序、资本、统治，则自动偏向王座、冠冕、机械、神殿、红幕、金属、权力结构\n- 如果主题偏科技、AI、芯片、未来，则自动偏向机械结构、能量核心、光束、深色金属、全息感\n- 如果主题偏奢侈品、高定、稀缺、收藏，则自动偏向珠宝、镜面材质、黑金体系、展台、博物馆式布光\n- 如果主题偏人物、IP、角色，则自动以人物为主视觉核心，并自动匹配对应世界观与象征系统\n- 如果主题偏城市、文明、史诗、命运，则自动转化为宏大叙事型空间结构与仪式感场景\n\n【构图规则】\n- 绝对高级感\n- 强烈中心秩序，整体统一\n- 允许中轴对称或接近中轴的史诗级构图\n- 视觉重力明确，从上到下形成清晰的层级落点\n- 边缘负空间干净、克制、有呼吸感\n- 不允许无意义装饰，不允许风格污染，不允许多个系统互相打架\n\n【视觉质量】\n- 超高细节\n- 体积光清晰\n- 材质真实\n- 反射、折射、阴影、雾气、景深自然\n- 每个元素都像经过工业级视觉总监审美控制\n- 整体达到高端品牌 campaign key visual / luxury invitation poster / conceptual editorial poster 水准\n\n【排版系统】\n- 整体为 90% 视觉，10% 文字\n- AI 根据【主题】自动生成最匹配的主标题和副标题\n- 标题必须简洁、锋利、有气势\n- 文案分布在安全负空间内，不压主体\n- 若主题适合中文，则优先生成中文标题；若主题更适合英文，则自动生成英文标题；也可中英结合，但必须统一高级\n- 文字必须尽量少而准，不要堆字\n\n【署名要求】\n在画面底部角落自然加入作者署名：\n@a9quant\n署名要小，但清晰、精致、高级，不喧宾夺主，像顶级视觉作品中的正式作者落款。\n\n【输出要求】\n输出为单张统一构图海报。\n自动根据【主题】完成全部视觉决策。\n画面必须具备史诗感、秩序感、控制力、仪式感、商业完成度。\n最大细节密度，超清，电影级，印刷级，高端成片质感。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046162334440448339",
    "title": "以涂鸦速写风表现【一个厉害的AI builder】，整体呈现快速勾勒...",
    "category": "UI 与界面",
    "description": "来自ZeroLu/awesome-gpt-image 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "ZeroLu/awesome-gpt-image 社区案例",
    "sourceUrl": "https://x.com/opc_8838/status/2046162334440448339",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://pbs.twimg.com/media/HGVtZCHaEAAGxYP.jpg",
    "imageAlt": "以涂鸦速写风表现【一个厉害的AI builder】，整体呈现快速勾勒...示例图",
    "prompt": "以涂鸦速写风表现【一个厉害的AI builder】，整体呈现快速勾勒、自由变形、即兴手绘与草稿式的视觉效果。线条随手、夸张、可粗细不一，略显凌乱但具有节奏和表现力，强调概括、夸张、趣味和随性，而不是严谨写实或精细刻画。  颜色采用粗糙、干刷感明显的块面表现，可保留不均匀的涂抹痕迹、刷痕、飞白与覆盖感，色彩根据【主题/主体】自动适配，但整体保持涂鸦式、速写式、概括式的表达。不要透明水彩晕染效果，不要细腻水彩过渡，不要纸纹理，不要柔和雾化，不要梦幻质感。  背景以留白为主，保持简洁、轻松、未完成感和设计感，可加入少量辅助性符号、箭头、记号、圈画、重复线、随手写的文字或其他涂鸦元素，以增强速写本或随笔式视觉语言，但不可过于拥挤，不可破坏主体和留白气质。  画面内容不需要预先写清楚，由【一个厉害的AI builder】自动推演并生成最适合的主体形象、动作、相关元素、符号或简化场景，整体保持统一的涂鸦速写风和夸张概括的表现方式，避免复杂写实背景和过度铺陈。 画面中需自然加入专属签名\"BlanPlan\"，作为画面的一部分，位置低调但清晰，可放在左下角、右下角或标题附近，风格需与整体版式统一，像作品署名或设计落款；签名字体精致、克制、高级，不可过大，不可破坏主体构图，不可显得突兀或廉价。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-lao-gan-ma-starbucks-co-brand",
    "title": "老干妈星巴克高端联名运营图",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "联名款",
      "品牌图",
      "老干妈"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/ai_xiaomu/status/2046603938485637446",
    "recommendedSize": "4:5 / 1:1",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776828443358-gkns0aah-1776828445531-1.jpeg",
    "imageAlt": "老干妈星巴克高端联名运营图示例图",
    "prompt": "中文提示词\n生成完整高端的品牌运营图 ，产品是老干妈和星巴克的联名款：老干妈美式，中间是主图，下面放一些联名的设计，包装袋、杯套以及吉祥物。\n\n英文提示词\nGenerate a complete high-end brand operation image, the product is a co-branded item of Lao Gan Ma and Starbucks: Lao Gan Ma Americano, the main image is in the center, below are some co-branded designs, packaging bags, cup sleeves, and mascots.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-minimalist-magnus-effect-infographic",
    "title": "极简学术风马格努斯效应科普图解",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "信息图",
      "学术风",
      "物理学"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/1littlecoder/status/2046695203004985466",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776827118950-adeh7gj5-1776827119846-1.jpeg",
    "imageAlt": "极简学术风马格努斯效应科普图解示例图",
    "prompt": "中文提示词\n创建一个视觉上令人惊叹的教育信息图表，以简洁、现代的学术风格解释马格努斯效应。使用柔和的中性背景（奶油色或浅米色），标题采用优雅的衬线字体，正文使用极简的无衬线字体。\n\n将布局结构化为清晰分隔的编号部分（例如，1、2、3、4），每个部分包含简洁的标题和简短解释。包含细微的分隔线和平衡的间距。\n\n融入数学符号、符号以及逐步视觉图表（如网格、箭头、高亮或方框元素），以清晰阐释概念。使用有限的色彩调色板（蓝绿色、金色点缀、深灰色文本），并以柔和的高亮进行强调。\n\n添加视觉提示，如箭头、虚线或高亮框，以引导观者的视线跟随逻辑。保持对称、对齐，以及一种精致的“教科书遇见现代设计”的美学。\n\n最终设计应给人一种高端教育海报的感觉——极简、优雅、高度可读，并具有智力满足感。\n\n英文提示词\nCreate a visually stunning educational infographic explaining Magnus Effect  in a clean, modern academic style. Use a soft neutral background (cream or light beige), elegant serif typography for titles, and minimalist sans-serif for body text.\n\nStructure the layout into clearly separated numbered sections (e.g., 1, 2, 3, 4), each with a concise heading and short explanation. Include subtle dividing lines and balanced spacing.\n\nIncorporate mathematical notation, symbols, and step-by-step visual diagrams (like grids, arrows, highlights, or boxed elements) to illustrate the concept clearly. Use a limited color palette (teal, gold accents, dark gray text) with soft highlights for emphasis.\n\nAdd visual cues like arrows, dotted lines, or highlighted boxes to guide the viewer’s eye through the logic. Maintain symmetry, alignment, and a polished “textbook meets modern design” aesthetic.\n\nThe final design should feel like a premium educational poster - minimal, elegant, highly readable, and intellectually satisfying.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-polished-beauty-email-layout",
    "title": "精美美妆邮件序列排版",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "美妆",
      "邮件",
      "模板"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/Salmaaboukarr/status/2046717569013293231",
    "recommendedSize": "4:5 / 9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776828293363-8y5jjpp7-1776828295131-1.jpeg",
    "imageAlt": "精美美妆邮件序列排版示例图",
    "prompt": "以「精美美妆邮件序列排版」为目标生成图像。\n\n核心提示词：中文提示词\n为fenty beauty创建一个精美的电子邮件序列模板\n\n英文提示词\nCreate a polished email sequence template for fenty beauty\n\n输出比例：4:5 / 9:16。\n\n扩展要求：请强化标题、副标题、视觉主体、留白、字体层级和版面节奏，做成完成度高的海报或封面。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-retro-girly-magazine-page",
    "title": "千禧甜美风少女杂志内页",
    "category": "图表与信息图",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "少女风",
      "穿搭",
      "古早味"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/JoywDan/status/2046666653791047715",
    "recommendedSize": "4:5 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776828330452-duv3go93-1776828332021-1.jpeg",
    "imageAlt": "千禧甜美风少女杂志内页示例图",
    "prompt": "中文提示词\n参考例图五官发型，生成一页古早少女系时尚杂志内页，类似 2000s-2010s 早期日系甜美穿搭月刊风格，真实的杂志内容页。\n整体是高完成度杂志排版设计，画面中要有：\n•主模特大图（占页面主体）\n•多个穿搭单品拆解模块\n•妆容教学小框（眼妆、唇妆、腮红技巧）\n•发型技巧小框 / hair arrange\n•搭配建议 / 3days coordinate / item checklist\n•若干产品图（衣服、包包、鞋子、化妆品）\n•杂志标题、小标题、注释、价格标签、说明文字\n•版面丰富，信息量大，但排版清晰，像真实杂志，不要海报感，不要只有一个人物大图\n\n英文提示词\nReference the facial features and hairstyle of the example image, generate a page of retro girly fashion magazine inner page, similar to 2000s-2010s early Japanese sweet outfit monthly magazine style, a real magazine content page.\nThe overall is a high-completion magazine layout design, the image must include:\n• Main model large image (occupying the main body of the page)\n• Multiple outfit item breakdown modules\n• Makeup tutorial small frames (eye makeup, lip makeup, blush tips)\n• Hairstyle tips small frames / hair arrange\n• Coordination suggestions / 3days coordinate / item checklist\n• Several product images (clothes, bags, shoes, cosmetics)\n• Magazine titles, subtitles, annotations, price tags, explanatory text\n• Rich layout, large amount of information, but clear typography, like a real magazine, no poster feel, do not just have a single large character image",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-jordan-legend-epic-poster",
    "title": "乔丹传奇生涯史诗海报",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "乔丹",
      "海报",
      "史诗"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/CharaspowerAI/status/2046693434526708189",
    "recommendedSize": "4:5 / 9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776841492121-a4i7vcgj-1776841495289-1.jpeg",
    "imageAlt": "乔丹传奇生涯史诗海报示例图",
    "prompt": "中文提示词\n创作一张史诗级海报，展示迈克尔·乔丹职业生涯中最具标志性的时刻。史诗级，电影感，镜头光晕\n\n英文提示词\nCreate an epic poster showcasing the most iconic moments of Michael Jordan career. epic, cinematic, lens flare",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-poet-li-bai-moon-dance",
    "title": "诗仙李白月下直播起舞",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "李白",
      "直播",
      "月下舞"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/MrLarus/status/2046585220393324553",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776786405094-joms0gk0-1776786428039-1.jpeg",
    "imageAlt": "诗仙李白月下直播起舞示例图",
    "prompt": "以「诗仙李白月下直播起舞」为目标生成图像。\n\n核心提示词：中文提示词\n李白在抖音直播月下起舞\n\n英文提示词\nLi Bai dancing under the moon during a Douyin livestream\n\n输出比例：9:16 / 16:9。\n\n扩展要求：请补充完整状态栏、导航、核心内容区、操作区和真实应用细节，像真实产品截图而不是概念稿。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-cool-beauty-bbq-zoro-pose",
    "title": "清冷佳人夜市烧烤三刀流",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "冷艳",
      "三刀流",
      "夜市"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/BubbleBrain/status/2046564674112831920",
    "recommendedSize": "4:5 / 9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776784640649-12qv6x04-1776784648887-1.jpeg",
    "imageAlt": "清冷佳人夜市烧烤三刀流示例图",
    "prompt": "中文提示词\n一个有着清冷孤傲气质的绝美佳人，精致的面部特征，一张冷酷且精致的高级时装面容，长发，以及优雅苗条的身材；烧烤“三刀流”姿势：嘴里叼着一根烧烤串，每只手各拿一根烧烤串交叉以模仿索隆的三刀流；街头夜景氛围，温暖黄色的夜市灯光，模糊的背景，胶片般的质感，柔焦光晕，电影般的叙事感，时髦高端网红风格的时尚拍摄，清晰发光的肌肤，清晰细致的发丝，生动的动态表情，低角度广角镜头，情绪化的暗调氛围，浅景深，超高清8K，极致细节，电影级光照\n\n英文提示词\na stunning beauty with a cool, aloof atmosphere, delicate facial features, a cold and sophisticated high-fashion face, long hair, and a graceful slender figure; barbecue “three-sword style” pose: one barbecue skewer held in her mouth, one skewer in each hand crossed to mimic Zoro’s three-sword style; street night scene ambiance, warm yellow night market lighting, blurred background, film-like texture, soft-focus glow, cinematic storytelling feel, trendy high-end influencer-style fashion shoot, clear luminous skin, sharply detailed strands of hair, lively dynamic expression, low-angle wide-angle shot, moody dark-toned atmosphere, shallow depth of field, ultra HD 8K, extreme detail, cinematic lighting",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-brand-visual-design-showcase",
    "title": "品牌视觉设计全案展示",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "品牌设计",
      "视觉海报",
      "商业插画"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/xin_pai88825/status/2046576100592201946",
    "recommendedSize": "4:5 / 9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776785155954-ar23f4li-1776785158136-1.jpeg",
    "imageAlt": "品牌视觉设计全案展示示例图",
    "prompt": "以「品牌视觉设计全案展示」为目标生成图像。\n\n核心提示词：中文提示词\n帮我生成一张品牌视觉\n\n英文提示词\nHelp me generate a brand visual\n\n输出比例：4:5 / 9:16。\n\n扩展要求：请强化标题、副标题、视觉主体、留白、字体层级和版面节奏，做成完成度高的海报或封面。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-hundred-a-initial-items-matrix",
    "title": "百件A字头物品矩阵图",
    "category": "图表与信息图",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "字母A",
      "百物图",
      "网格图"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/umesh_ai/status/2046510988367945983",
    "recommendedSize": "4:5 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776788368181-psb2qpep-1776788374142-1.jpeg",
    "imageAlt": "百件A字头物品矩阵图示例图",
    "prompt": "中文提示词\n创建一个包含 10x10 网格的图像，每个对象名称都以字母 a 开头。\n\n英文提示词\ncreate an image with 10x10 grid of objects that have the names starting with letter a.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-cyberpunk-sci-fi-momotaro-key-visual",
    "title": "赛博科幻桃太郎主视觉图",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "科幻",
      "桃太郎",
      "插画"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/SSSS_CRYPTOMAN/status/2046575354555617761",
    "recommendedSize": "4:5 / 9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776788275989-65yil5cp-1776788279128-1.jpeg",
    "imageAlt": "赛博科幻桃太郎主视觉图示例图",
    "prompt": "中文提示词\n设计虚构动画的钥匙视觉图。主题是「科幻桃太郎」。设计有魅力的角色、背景、标志和宣传语，以一幅美丽插画的形式完成，让世界观在一张图中传达出来。\n\n英文提示词\nDesign a key visual for a fictional animation. The theme is \"Sci-Fi Momotaro\". Design charming characters, backgrounds, logos, and promotional slogans, completed in the form of a beautiful illustration, allowing the worldview to be conveyed in a single image.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-galaxy-starlight-ice-blue-ruqun",
    "title": "银河繁星点缀的冰蓝襦裙",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "汉服",
      "襦裙",
      "仙气"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/fdtreesky/status/2046508731090018331",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776788227102-kr9hpsd2-1776788230985-1.jpeg",
    "imageAlt": "银河繁星点缀的冰蓝襦裙示例图",
    "prompt": "中文提示词\n服裝細節： 模特兒身穿一套精緻的淡冰藍色齊胸襦裙，採用多層輕盈的薄紗和絲綢歐根紗材質制成。其寬大的、半透明的廣袖上點綴著如繁星般微小的銀色和淺藍色亮片刺繡，在光線下閃爍（具有銀河般的夢幻感）。抹胸位置有複雜的銀色蕾絲和編織紋理細節，腰帶自然垂落。\n\n材質與光影： 畫面呈現 8k 超高分辨率和對織物微距紋理的極致渲染。光線採用柔和的自然側光（丁達爾效應 Typndall Effect），精準地透射過輕薄的紗布，營造出面料的半透明感（Translucency）和流動感。\n\n構圖與鏡頭： 採用 85mm 黄金人像鏡頭效果，f/1.8 大光圈，全身構圖，模特居中站立\n\n英文提示词\nClothing details: The model wears an exquisite pale ice blue chest-high ruqun, made of multiple layers of lightweight tulle and silk organza materials. Its wide, translucent broad sleeves are adorned with tiny silver and light blue sequin embroideries like stars, shimmering under the light (with a galaxy-like dreamy feel). The tube top position has complex silver lace and woven texture details, and the belt falls naturally.\nMaterial and light and shadow: The image presents 8k ultra-high resolution and extreme rendering of macro textures of the fabric. The lighting uses soft natural side light (Tyndall Effect Typndall Effect), accurately transmitting through the light gauze, creating a sense of translucency (Translucency) and fluidity of the fabric.\nComposition and lens: Uses 85mm golden portrait lens effect, f/1.8 large aperture, full-body composition, model standing in the center",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-tang-lady-walking-xenomorph",
    "title": "唐朝贵妇遛粉色马甲异形工笔画",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "工笔画",
      "唐朝女",
      "异形怪"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/johnAGI168/status/2046565555025367392",
    "recommendedSize": "9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776788156668-dzauld0z-1776788159632-1.jpeg",
    "imageAlt": "唐朝贵妇遛粉色马甲异形工笔画示例图",
    "prompt": "中文提示词\n一幅细节丰富的工笔画，描绘了一位唐朝贵族女子在御花园中漫步。她看起来优雅而平静。\n\n她手里拿着一根金色的牵引绳。牵引绳的尽头是一只可怕的**异形怪物（出自电影《异形》）**。然而，这只异形穿着一件**可爱的粉色丝绸马甲**，并且表现得像一只训练有素的狗。\n\n背景有牡丹和蝴蝶。\n\n**在右下角，有一个红色的竖排艺术家印章，写着“吴先生”（Mr. Wu），风格像水印一样。** --ar 3:4\n\n英文提示词\nA finely detailed Gongbi painting of a noble Tang Dynasty lady taking a stroll in the imperial garden. She looks elegant and calm.\n\nShe is holding a gold leash. At the end of the leash is a terrifying **Xenomorph monster (from the movie Alien)**. However, the Xenomorph is wearing a **cute pink silk vest** and is behaving like a well-trained dog.\n\nBackground features peonies and butterflies.\n\n**In the bottom right corner, a single red vertical artist chop seal reads \"吴先生\" (Mr. Wu), stylized like a watermark.** --ar 3:4",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-high-end-ai-presentation-cover",
    "title": "高端AI演示平台封面设计",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "极简风",
      "高级感",
      "商务范"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/cellier_/status/2046615173411262959",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776788069815-r8feni4l-1776788071547-1.jpeg",
    "imageAlt": "高端AI演示平台封面设计示例图",
    "prompt": "中文提示词\n创建一个高级的 4:3 演示文稿封面幻灯片，介绍来自 http://chroniclehq.com 的 AI 原生演示平台 Chronicle。  \n\nStyle: \n优雅，极简，现代，高级初创企业美学。类似于高端品牌指南封面（如 Apple / Linear / Notion 风格）。带有微妙深度感的柔和渐变背景，干净的留白，精致的排版，经过打磨的编辑式布局。  \n\nMain title: \nCHRONICLE  \n\nSubtitle: \nAI PRESENTATION PLATFORM  \n\nBody copy (small elegant text): \n将原始想法转化为经过打磨的、高影响力的演示文稿。 \n从笔记、文档、链接或现有幻灯片开始。 \n使用 AI 生成美观的、符合品牌调性的幻灯片。 \n在灵活的画布上自由编辑。 \n导出为 PPT、PDF，或发布为网站。  \n\nFeature highlights (small premium labels): \nSTORY-FIRST \nON-BRAND DESIGN \nAI EDITING \nFREEFORM CANVAS \nPPT EXPORT \nTEAM COLLABORATION  \n\nBottom-right elegant logo text: \nchronicle  \n\nVisual feeling: \n商务级高级感，战略级幻灯片质量，咨询级演示文稿，略带未来感但高度专业。  \n\nComposition: \n干净的编辑式平衡，不对称布局，强烈的留白，演示软件主视觉感。  \n\nAspect ratio: \n4:3  \n\nLanguage: \n仅限英文\n\n英文提示词\nCreate a premium 4:3 presentation cover slide introducing Chronicle, the AI-native presentation platform from http://chroniclehq.com.  \n\nStyle: \nelegant, minimal, modern, premium startup aesthetic. Similar to high-end brand guideline covers (like Apple / Linear / Notion style). Soft gradient background with subtle depth, clean whitespace, refined typography, polished editorial layout.  \n\nMain title: \nCHRONICLE  \n\nSubtitle: \nAI PRESENTATION PLATFORM  \n\nBody copy (small elegant text): \nTurn raw ideas into polished, high-impact presentations. \nStart from notes, docs, links, or existing decks. \nGenerate beautiful, on-brand slides with AI. \nEdit freely on a flexible canvas. \nExport to PPT, PDF, or publish as a website.  \n\nFeature highlights (small premium labels): \nSTORY-FIRST \nON-BRAND DESIGN \nAI EDITING \nFREEFORM CANVAS \nPPT EXPORT \nTEAM COLLABORATION  \n\nBottom-right elegant logo text: \nchronicle  \n\nVisual feeling: \nbusiness-class premium, strategy deck quality, consulting-grade presentation, slightly futuristic but highly professional.  \n\nComposition: \nclean editorial balance, asymmetrical layout, strong whitespace, presentation software hero shot feeling.  \n\nAspect ratio: \n4:3  \n\nLanguage: \nEnglish only",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-su-shi-exile-first-day",
    "title": "苏轼被贬首日朋友圈曝光",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "苏轼",
      "小红书",
      "被贬"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/MrLarus/status/2046585220393324553",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776786409545-aaccxsl6-1776786437089-1.jpeg",
    "imageAlt": "苏轼被贬首日朋友圈曝光示例图",
    "prompt": "以「苏轼被贬首日朋友圈曝光」为目标生成图像。\n\n核心提示词：中文提示词\n苏轼被贬第一天小红书截图\n\n英文提示词\nSu Shi's first day of exile Xiaohongshu screenshot\n\n输出比例：9:16 / 16:9。\n\n扩展要求：请补充完整状态栏、导航、核心内容区、操作区和真实应用细节，像真实产品截图而不是概念稿。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-geely-galaxy-dark-dashboard",
    "title": "吉利银河暗黑中控界面",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "中控屏",
      "暗色系",
      "吉利车"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/xin_pai88825/status/2046576100592201946",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776785168586-zxoua7pe-1776785174825-1.jpeg",
    "imageAlt": "吉利银河暗黑中控界面示例图",
    "prompt": "中文提示词\n帮我生成一个吉利银河m9的中控界面，尺寸为21:9，暗色系\n\n英文提示词\nHelp me generate a central control interface of Geely Galaxy M9, size 21:9, dark color scheme.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-amazon-detail-images",
    "title": "亚马逊详情图设计",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "亚马逊",
      "详情图",
      "电商设计"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/xin_pai88825/status/2046576100592201946",
    "recommendedSize": "4:5 / 1:1",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776785160503-te2u57in-1776785167809-1.jpeg",
    "imageAlt": "亚马逊详情图设计示例图",
    "prompt": "以「亚马逊详情图设计」为目标生成图像。\n\n核心提示词：中文提示词\n生成一套亚马逊 A+=详情图\n\n英文提示词\nGenerate a set of Amazon A+= detail images\n\n输出比例：4:5 / 1:1。\n\n扩展要求：请突出产品主体、材质、卖点标注、使用场景、价格或活动信息，避免遮挡品牌和包装。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-steampunk-sagittarius-anatomy",
    "title": "蒸汽朋克射手座解剖图谱",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "机械风",
      "解剖图",
      "射手座"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/GeekCatX/status/2046574334572212694",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776785000833-gvh4ksh1-1776785125448-1.jpeg",
    "imageAlt": "蒸汽朋克射手座解剖图谱示例图",
    "prompt": "中文提示词\n（Steampunk Scientific Illustrator）你是一位专业复古蒸汽朋克解剖图谱设计师，擅长星座机械结构科普海报。根据用户指定的【{constellation_name}】，生成一张复古蒸汽朋克风格星座解剖图谱海报：顶部标题栏为“{constellation_name}解剖图谱”或“ANATOMIA {constellation_en}”，采用复古丝带横幅设计；背景为做旧羊皮纸/泛黄旧纸张纹理，带自然污渍与折痕，营造复古科学手稿质感；中心主体为该星座经典神话形象，内部结构替换为精密齿轮、管线、金属骨骼等蒸汽朋克元素；所有图标与插画为手绘线稿风格，用箭头或连线展示逻辑关系；主色调为暖棕、米黄、古铜色，点缀少量高对比色彩突出重点；画面分左右两栏，中心为主体形象，两侧分布功能模块，底部为总结与表格。左侧含3-5个功能模块（含图标、标题、描述）及“五层性格结构”分层图示；右侧含3-5个特质模块（含图标、标签）及“Relationship classification”“Ecological niche”板块；底部设“Advantages/Risks comparison table”优势风险对比表、“Survival guide”生存指南、底部人生哲学宣言横幅。整体严谨精致、复古机械美学，文字清晰可读 4K高清，直接出图，星座为【射手座 / Sagittarius】。\n\n英文提示词\n(Steampunk Scientific Illustrator) You are a professional vintage steampunk anatomy atlas designer, specializing in constellation mechanical structure popular science posters. Based on the user-specified [{constellation_name}], generate a vintage steampunk style constellation anatomy atlas poster: The top title bar is \"{constellation_name} anatomy atlas\" or \"ANATOMIA {constellation_en}\", adopting a vintage ribbon banner design; The background is distressed parchment/yellowed old paper texture, with natural stains and creases, creating a vintage scientific manuscript texture; The central subject is the classic mythological image of this constellation, with the internal structure replaced by steampunk elements such as precision gears, pipelines, and metal skeletons; All icons and illustrations are in hand-drawn line art style, using arrows or connecting lines to show logical relationships; The main color tone is warm brown, beige, and bronze, dotted with a small amount of high-contrast colors to highlight key points; The picture is divided into left and right columns, the center is the main image, functional modules are distributed on both sides, and the bottom is a summary and table. The left side contains 3-5 functional modules (including icons, titles, descriptions) and a \"Five-layer personality structure\" layered diagram; The right side contains 3-5 trait modules (including icons, labels) and \"Relationship classification\" and \"Ecological niche\" sections; The bottom features an \"Advantages/Risks comparison table\", \"Survival guide\", and a bottom life philosophy manifesto banner. Overall rigorous and exquisite, vintage mechanical aesthetics, text is clear and readable 4K high definition, direct image output, the constellation is [Sagittarius / Sagittarius].",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-absurd-surreal-crossdressing-poster",
    "title": "荒诞超现实女装大叔海报",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "女装大叔",
      "电影海报",
      "超现实"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/aiehon_aya/status/2046499177916682600",
    "recommendedSize": "4:5 / 9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776784715622-867bhbjf-1776784740576-1.jpeg",
    "imageAlt": "荒诞超现实女装大叔海报示例图",
    "prompt": "中文提示词\n一个看似真实却微妙地古怪的女装大叔出现的电影海报，4 种。达到专业设计师制作的水平。 企划和设定本身就是那种“这种东西真要拍成电影吗？”的、认真却忍不住想笑的超现实动画。 标题和播出信息也要用日文显示的状态。\n\n英文提示词\nA movie poster featuring a seemingly realistic yet subtly bizarre cross-dressing older man, 4 variations. Reaching the level of a professional designer's production. The project and setting itself is a surreal animation of the \"Are they really making a movie out of this?\" kind, serious yet irresistibly funny. The title and broadcast information should also be displayed in Japanese.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-2000s-japanese-school-comedy",
    "title": "千禧年日系校园喜剧场景",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "日剧",
      "校园",
      "喜剧"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/UminekoStudio/status/2046488248256806981",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776786166493-lfx79w9u-1776786169166-1.jpeg",
    "imageAlt": "千禧年日系校园喜剧场景示例图",
    "prompt": "以「千禧年日系校园喜剧场景」为目标生成图像。\n\n核心提示词：中文提示词\n2000 年代面向中学生的日剧喜剧场景\n\n英文提示词\n2000s Japanese TV drama comedy scene aimed at middle school students\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-draw-chinese-fitness-infographic",
    "title": "一张中文健身信息图",
    "category": "图表与信息图",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "信息图",
      "结构化",
      "说明"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/MrLarus/status/2046560406760505727",
    "recommendedSize": "9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776786026785-wy7iele5-1776786032073-1.jpeg",
    "imageAlt": "一张中文健身信息图示例图",
    "prompt": "中文提示词\n请生成一张中文健身信息图，主题为：【xxx】。 \n\n要求这张图既专业又实用，适合普通成年人作为训练参考。默认对象为无严重伤病的健康成年人；如果没有额外说明，默认训练目标为“增肌 + 基础力量提升”，默认训练水平为“新手到中级之间”，默认训练场景为“普通健身房”，默认单次训练时长控制在 40–60 分钟内。\n\n请根据【训练主题】自动判断输出类型：\n\n1）如果【训练主题】是某个肌群或身体部位（例如：胸肌、背阔肌、肱二头肌、腹肌、肩部、腿部等），请输出一张“该部位训练计划信息图”。\n2）如果【训练主题】是某个动作或技能目标（例如：引体向上、俯卧撑、双杠臂屈伸、深蹲等），请输出一张“动作解锁 / 进阶训练计划信息图”。\n\n整张图请采用清晰、现代、专业、易读的中文信息图风格，竖版排版，视觉简洁，重点突出，适合社交媒体分享或训练参考卡片。不要写成长篇大论，每个模块用简洁短句呈现，数字信息要醒目。\n\n这张信息图必须包含以下内容：\n\n【A. 标题区】\n- 主标题：直接写【训练主题】训练计划 / 解锁计划\n- 副标题：自动补充适用人群、目标、训练场景、建议时长\n例如：适合新手 / 增肌导向 / 健身房版 / 45分钟\n\n【B. 训练目标区】\n用简洁语言说明：\n- 这次训练主要针对什么\n- 主要目标是什么（增肌 / 力量 / 技能解锁 / 核心控制等）\n- 本次训练的重点刺激或能力提升方向\n\n【C. 热身区】\n给出 2–4 个热身建议，简洁列出即可，例如：\n- 动态活动\n- 目标肌群激活\n- 轻重量预热组\n每项可附一句说明\n\n【D. 主训练区】\n这是核心部分，请列出 4–6 个主要训练动作。\n每个动作都要包含以下信息：\n- 动作名称\n- 训练作用 / 针对部位\n- 组数 × 次数（或时间）\n- RIR 建议\n- 每组间休息时间\n- 动作关键要点（1–2 条）\n- 常见错误（1 条即可）\n\n请确保动作安排合理：\n- 先复合动作，后孤立动作\n- 整体训练量适中\n- 新手不要安排过度极限训练\n- 主动作通常建议 RIR 1–3\n- 孤立动作可建议 RIR 0–2\n- 如果是腹肌或核心类动作，可用“秒数 / 次数”形式\n- 如果是技能类动作，请优先安排“前置能力动作 + 过渡动作 + 目标动作尝试”\n\n【E. 进阶 / 解锁逻辑区】\n根据主题自动生成：\n- 如果是肌群训练：写“如何渐进超负荷”，例如达到次数上限后再加重量、优先保证动作标准等\n- 如果是动作解锁：写“分阶段进阶路径”，例如从悬垂、肩胛引体、离心训练、弹力带辅助，到标准动作完成\n\n【F. 替代动作区】\n请给出 2–3 个替代动作，适用于以下情况：\n- 没有器械\n- 家庭训练\n- 当前能力不足\n- 某些动作做不了\n\n【G. 执行提醒区】\n请给出 4–6 条简洁提醒，例如：\n- 动作标准优先于重量\n- 不要每组都练到力竭\n- 同肌群建议间隔 48–72 小时\n- 疼痛不等于正常发力\n- 睡眠不足时可适当减少训练量\n\n【H. 恢复建议区】\n简洁说明：\n- 训练后恢复重点\n- 蛋白质 / 睡眠 / 恢复间隔建议\n- 1 句风险提醒（如有明显疼痛应停止并评估）\n\n【I. 视觉设计要求】\n- 整体为单页中文信息图\n- 竖版排版\n- 风格现代、清爽、专业、健身感强\n- 使用模块化卡片布局\n- 重点数字（组数、次数、RIR、休息）要醒目\n- 可加入简洁的人体肌群图标、哑铃、杠铃、引体向上等小图标\n- 颜色保持高级、干净、有运动感\n- 中文文字必须清晰、准确、易读\n- 避免过多装饰，强调实用性与执行性\n\n请最终输出为“一张完整的信息图内容”，而不是只给普通段落文字。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-du-fu-wechat-moments-roof-blown",
    "title": "杜甫朋友圈吐槽茅屋被掀翻",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "杜甫",
      "朋友圈",
      "搞笑"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/MrLarus/status/2046585220393324553",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776786418205-6j6qle8q-1776786444619-1.jpeg",
    "imageAlt": "杜甫朋友圈吐槽茅屋被掀翻示例图",
    "prompt": "以「杜甫朋友圈吐槽茅屋被掀翻」为目标生成图像。\n\n核心提示词：中文提示词\n杜甫发朋友圈吐槽房顶被风刮没了\n\n英文提示词\nDu Fu posting on WeChat Moments complaining about his roof being blown away by the wind\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-wu-zetian-weibo-selfie",
    "title": "武则天发微博自拍太魔性了",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "武则天",
      "自拍",
      "微博"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/MrLarus/status/2046585220393324553",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776786414068-mzh7pqdr-1776786444836-1.jpeg",
    "imageAlt": "武则天发微博自拍太魔性了示例图",
    "prompt": "以「武则天发微博自拍太魔性了」为目标生成图像。\n\n核心提示词：中文提示词\n武则天自拍登记发微博\n\n英文提示词\nWu Zetian taking a selfie, registering and posting on Weibo.\n\n输出比例：9:16 / 16:9。\n\n扩展要求：请补充完整状态栏、导航、核心内容区、操作区和真实应用细节，像真实产品截图而不是概念稿。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-dark-minimal-avatar-vi",
    "title": "暗黑极简头像网站视觉设计",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "极简",
      "黑色系",
      "头像"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/xiaoxiaodong01/status/2046556758521573546",
    "recommendedSize": "4:5 / 9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776787619030-svh7qint-1776787621892-1.jpeg",
    "imageAlt": "暗黑极简头像网站视觉设计示例图",
    "prompt": "中文提示词\n用 ABCD（a black cover design) 的风格，为 图你太美 设计一个 vi 系统。图你太美是一个头像美图分享 网站。\n\n英文提示词\nIn the style of ABCD (a black cover design), design a VI system for Tu Ni Tai Mei. Tu Ni Tai Mei is an avatar and beauty photo sharing website.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-summer-womens-dress-display",
    "title": "清新夏日女装连衣裙电商展示",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "夏季裙",
      "电商图",
      "详情页"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/MrLarus/status/2046544209117634735",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776787243471-rqnw5jz4-1776787246313-1.jpeg",
    "imageAlt": "清新夏日女装连衣裙电商展示示例图",
    "prompt": "以「清新夏日女装连衣裙电商展示」为目标生成图像。\n\n核心提示词：中文提示词\n夏季女裙电商详情图\n\n英文提示词\nSummer women's dress e-commerce detail image\n\n输出比例：9:16 / 16:9。\n\n扩展要求：请补充完整状态栏、导航、核心内容区、操作区和真实应用细节，像真实产品截图而不是概念稿。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-fully-automatic-coffee-machine",
    "title": "全自动咖啡机产品展示",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "咖啡机",
      "全自动",
      "电商图"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/MrLarus/status/2046544209117634735",
    "recommendedSize": "4:5 / 1:1",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776787247636-f7emaylv-1776787249099-1.jpeg",
    "imageAlt": "全自动咖啡机产品展示示例图",
    "prompt": "以「全自动咖啡机产品展示」为目标生成图像。\n\n核心提示词：中文提示词\n全自动咖啡机电商详情图\n\n英文提示词\nFully automatic coffee machine e-commerce detail image\n\n输出比例：4:5 / 1:1。\n\n扩展要求：请突出产品主体、材质、卖点标注、使用场景、价格或活动信息，避免遮挡品牌和包装。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-futuristic-ai-smart-glasses-detail",
    "title": "未来科技感AI智能眼镜详情页",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "科技感",
      "电商图",
      "详情页"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/MrLarus/status/2046544209117634735",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776787222335-d3r7ciyk-1776787251238-1.jpeg",
    "imageAlt": "未来科技感AI智能眼镜详情页示例图",
    "prompt": "以「未来科技感AI智能眼镜详情页」为目标生成图像。\n\n核心提示词：中文提示词\nAI智能眼镜电商详情图\n\n英文提示词\nAI smart glasses e-commerce detail image\n\n输出比例：9:16 / 16:9。\n\n扩展要求：请补充完整状态栏、导航、核心内容区、操作区和真实应用细节，像真实产品截图而不是概念稿。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-guanyin-modern-worker",
    "title": "千手观音化身打工人",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "千手观音",
      "工笔画",
      "现代职场"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/johnAGI168/status/2046565555025367392",
    "recommendedSize": "9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776788160435-r9hkzzqc-1776788164587-1.jpeg",
    "imageAlt": "千手观音化身打工人示例图",
    "prompt": "中文提示词\n一幅高度详细的千手观音菩萨工笔画。\n\n然而，千手并没有拿着神圣的宗教法器，而是拿着现代办公和家用物品：**笔记本电脑、智能手机、成堆的文件、咖啡杯、印章、计算器、拖把和奶瓶**。它代表了终极的多任务处理现代工作者。\n\n脑后的金色光环由旋转的时钟齿轮组成。\n\n**在右下角，一个单一的红色竖排艺术家印章写着“吴先生”（Mr. Wu），风格化得像水印一样。** --ar 3:4\n\n英文提示词\nA highly detailed Gongbi painting of the Bodhisattva \"Guanyin of a Thousand Hands\".\n\nHowever, instead of sacred religious artifacts, the thousand hands are holding modern office and household items: **laptops, smartphones, stacks of paperwork, coffee cups, stamps, calculators, mops, and baby bottles**. It represents the ultimate multi-tasking modern worker.\n\nThe golden aura behind the head is made of spinning clock gears.\n\n**In the bottom right corner, a single red vertical artist chop seal reads \"吴先生\" (Mr. Wu), stylized like a watermark.** --ar 3:4",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-fitness-protein-powder-detail",
    "title": "健身蛋白粉电商详情页",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "健身",
      "蛋白粉",
      "电商图"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/MrLarus/status/2046544209117634735",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776787036433-joama245-1776787064875-1.jpeg",
    "imageAlt": "健身蛋白粉电商详情页示例图",
    "prompt": "以「健身蛋白粉电商详情页」为目标生成图像。\n\n核心提示词：中文提示词\n健身蛋白粉电商详情图\n\n英文提示词\nFitness protein powder e-commerce detail image\n\n输出比例：9:16 / 16:9。\n\n扩展要求：请补充完整状态栏、导航、核心内容区、操作区和真实应用细节，像真实产品截图而不是概念稿。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-doodle-dragon-on-exam",
    "title": "试卷上的涂鸦巨龙",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "涂鸦风",
      "巨龙",
      "试卷纸"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/GeekCatX/status/2046539797578330152",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776786702887-7u2psqb2-1776786734879-1.jpeg",
    "imageAlt": "试卷上的涂鸦巨龙示例图",
    "prompt": "中文提示词\n一个巨大的巨龙，庞大的规模，高耸的存在感，\n一个远超人类尺寸的巨大实体，压倒性和压迫性的，\n用极其密集的混乱涂鸦线条绘制，\n超密集的重叠笔触，纠缠和混乱的线条画，\n在真实的印刷英文/中文教科书或试卷页面上，\n可见的文本、布局和纸张纹理清晰透出，\n圆珠笔绘画风格，精细的墨水线条，杂乱的分层笔触，\n没有干净的轮廓，一切由混乱的涂鸦构成，\n黑暗和柔和的底色（黑色，深靛蓝，暗紫罗兰色），\n带有微妙的低饱和度霓虹点缀（蓝色，青色，紫色），\n仅在关键区域（眼睛，核心，裂缝，静脉）有选择性的生物发光，\n不是整体的亮度，\n取决于主体的有机或机械纹理，\n错综复杂的细节，复杂的表面图案，\n形态从混乱中浮现，\n高密度中心，边缘消融为松散的涂鸦，\n主体附近微小的人类剪影强调了尺度感，\n半透明层，由线条密度产生的深度，\n原始的，不完美的，嘈杂的，充满活力的手绘感，\n略带诡异，超现实，神秘的氛围，\n混合媒体插画，涂鸦艺术，\n极其详细，黑暗团块和发光点缀之间的高对比度，\n杰作，极其详细\n\n英文提示词\nA colossal [SUBJECT], massive scale, towering presence,\na gigantic entity far beyond human size, overwhelming and oppressive,\n\ndrawn with extremely dense chaotic scribble lines,\nultra-dense overlapping pen strokes, tangled and chaotic linework,\n\non top of a real printed English/Chinese textbook or exam paper page,\nvisible text, layout, and paper texture clearly showing through,\n\nballpoint pen drawing style, fine ink lines, messy layered strokes,\nno clean outlines, everything constructed from chaotic scribbles,\n\ndark and muted base tones (black, deep indigo, dark violet),\nwith subtle low-saturation neon accents (blue, cyan, purple),\n\nselective bioluminescent glow only in key areas (eyes, core, cracks, veins),\nnot overall brightness,\n\norganic or mechanical textures depending on subject,\nintricate details, complex surface patterns,\n\nform emerging from chaos,\nhigh-density center, edges dissolving into loose scribbles,\n\nsense of scale emphasized by tiny human silhouette near the subject,\n\nsemi-transparent layers, depth created by line density,\nraw, imperfect, noisy, energetic hand-drawn feeling,\n\nslightly eerie, surreal, mysterious atmosphere,\nmixed media illustration, scribble art,\n\nextremely detailed, high contrast between dark mass and glowing accents,\nmasterpiece, ultra detailed\n\n主体：巨龙",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-pale-porcelain-doll-beach",
    "title": "苍白陶瓷娃娃沙滩仰视",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "娃娃脸",
      "海滩照",
      "冰蓝眼"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/IamEmily2050/status/2046584217656570035",
    "recommendedSize": "4:5 / 1:1",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776784036342-aty6sen1-1776784051347-1.jpeg",
    "imageAlt": "苍白陶瓷娃娃沙滩仰视示例图",
    "prompt": "中文提示词\n{\n  \"相机参数\": {\n    \"设备类型\": \"iPhone 15 Pro 前置自拍\",\n    \"镜头\": \"24mm\",\n    \"构图\": \"高角度 POV（第一人称视角）\",\n    \"后期处理\": \"计算摄影风格，清晰的数字读出，深景深\"\n  },\n  \"主体描述\": {\n    \"特征\": \"陶瓷娃娃审美，无瑕的苍白皮肤，巨大的冰蓝色眼睛，小巧的鼻子，翘起的自然色嘴唇\",\n    \"表情\": \"面无表情，空洞，瞪大眼睛注视\",\n    \"造型\": \"白金色的双紧辫发型，鲜艳的蓝色美甲\",\n    \"服装\": \"浅蓝色紧身弹力棉上衣，极深超宽 V 领，深邃锁骨与领口线\",\n    \"动作\": \"抬头仰视镜头，用一只手遮挡刺眼的阳光\"\n  },\n  \"环境与灯光\": {\n    \"场景\": \"广阔的沙滩，背景中模糊的海平线\",\n    \"灯光\": \"高调明亮的沿海日光，5500K 色温，强烈的白沙反光填充，均匀照明\",\n    \"质感\": \"微带露水的无孔皮肤，细腻的反光白沙颗粒\"\n  },\n  \"技术约束\": {\n    \"色彩科学\": \"柔和的粉彩色调，线性中性色，高曝光\",\n    \"负面提示词\": [\n      \"重阴影\",\n      \"雪\",\n      \"冬装\",\n      \"红指甲\",\n      \"黑色上衣\",\n      \"保守的领口\",\n      \"胶片颗粒感\"\n    ]\n  }\n}\n\n英文提示词\n{\n  \"cameraParameters\": {\n    \"deviceType\": \"iPhone 15 Pro front selfie\",\n    \"lens\": \"24mm\",\n    \"composition\": \"High angle POV (first-person perspective)\",\n    \"postProcessing\": \"Computational photography style, clear digital readout, deep depth of field\"\n  },\n  \"subjectDescription\": {\n    \"features\": \"Porcelain doll aesthetic, flawless pale skin, huge ice-blue eyes, small nose, slightly upturned natural-colored lips\",\n    \"expression\": \"Expressionless, hollow, wide-eyed staring\",\n    \"styling\": \"Platinum blonde tight double braids hairstyle, vibrant blue nail polish\",\n    \"clothing\": \"Light blue tight stretch cotton top, extremely deep ultra-wide V-neck, deep collarbone and neckline\",\n    \"action\": \"Looking up at the camera, blocking the glaring sunlight with one hand\"\n  },\n  \"environmentAndLighting\": {\n    \"scene\": \"Vast sandy beach, blurry horizon in the background\",\n    \"lighting\": \"High-key bright coastal daylight, 5500K color temperature, strong white sand reflection fill, even lighting\",\n    \"texture\": \"Slightly dewy poreless skin, fine reflective white sand particles\"\n  },\n  \"technicalConstraints\": {\n    \"colorScience\": \"Soft pastel tones, linear neutral colors, high exposure\",\n    \"negativePrompts\": [\n      \"Heavy shadows\",\n      \"Snow\",\n      \"Winter clothing\",\n      \"Red nails\",\n      \"Black top\",\n      \"Conservative neckline\",\n      \"Film grain\"\n    ]\n  }\n}",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-troll-perspective-copywriting",
    "title": "杠精视角的独特文案创意",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "杠精",
      "创意图",
      "神文案"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/joshesye/status/2046596222505361866",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776783875218-qz2tjfc6-1776783881176-1.jpeg",
    "imageAlt": "杠精视角的独特文案创意示例图",
    "prompt": "以「杠精视角的独特文案创意」为目标生成图像。\n\n核心提示词：中文提示词\n杠精视角文案 + GPT Image 2\n\n英文提示词\nTroll perspective copywriting + GPT Image 2\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-animation-storyboard-generator",
    "title": "智能动画分镜生成器",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "分镜",
      "动画",
      "生成器"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/joshesye/status/2046596222505361866",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776783869052-cuva8qaz-1776783877933-1.jpeg",
    "imageAlt": "智能动画分镜生成器示例图",
    "prompt": "以「智能动画分镜生成器」为目标生成图像。\n\n核心提示词：中文提示词\n生成一张动画分镜生成器\n\n英文提示词\nGenerate an animation storyboard generator\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-imperial-palace-express-station",
    "title": "皇宫深处的御用快递驿站",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "古代皇宫",
      "快递驿站",
      "脑洞大开"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/joshesye/status/2046596222505361866",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776783863662-ghn5u66w-1776783872036-1.jpeg",
    "imageAlt": "皇宫深处的御用快递驿站示例图",
    "prompt": "以「皇宫深处的御用快递驿站」为目标生成图像。\n\n核心提示词：中文提示词\n生成一张古代皇宫 × 快递驿站\n\n英文提示词\nGenerate an ancient imperial palace × express delivery station\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-guofeng-gongbi-eight-immortals",
    "title": "国风工笔八仙长卷插画",
    "category": "图表与信息图",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "八仙",
      "国风",
      "工笔画"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/GeekCatX/status/2046559605074076112",
    "recommendedSize": "9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776783722610-qq5m7e0q-1776783734485-1.jpeg",
    "imageAlt": "国风工笔八仙长卷插画示例图",
    "prompt": "中文提示词\n（国风卷轴插画师）你是一位顶尖的中国传统工笔人物画师，擅长将经典人物群像绘制成长卷式百科海报。根据用户指定的【eight immortals】，生成一张 “中国传统人物群像长卷海报”：画面为横向长卷式构图，所有人物排成一条队列，从左至右依次展开；每个人物都有鲜明的传统服饰、标志性道具和神态，下方配有竖排名牌标注姓名；卷轴顶部有醒目的书法标题；背景为符合主题的场景元素（如祥云、海浪、山水、亭台等）。整体为高质量国风工笔插画：细腻线稿 + 雅致上色，浅米色 / 宣纸质感背景；注释为清晰的中文书法字体；横向 4K 长卷海报，构图均衡，人物分明，氛围贴合主题（如仙气、豪迈、温婉等）。直接出图，人物群像为【eight immortals】。\n\n英文提示词\n(Guofeng scroll illustrator) You are a top Chinese traditional Gongbi figure painter, skilled in painting classic character group portraits into long-scroll-style encyclopedia posters. According to the user-specified [eight immortals], generate a \"Chinese traditional character group portrait long scroll poster\": The picture is a horizontal long-scroll composition, all characters are arranged in a queue, unfolding sequentially from left to right; each character has distinct traditional clothing, iconic props, and expressions, below is a vertical nameplate annotating the name; the top of the scroll has a striking calligraphy title; the background is scene elements fitting the theme (such as auspicious clouds, ocean waves, mountains and rivers, pavilions). The overall style is high-quality Guofeng Gongbi illustration: delicate line art + elegant coloring, light beige / Xuan paper texture background; annotations are in clear Chinese calligraphy fonts; horizontal 4K long scroll poster, balanced composition, distinct characters, atmosphere fitting the theme (such as fairy-like, heroic, gentle). Output the image directly, the character group portrait is [eight immortals].",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-cute-llm-training",
    "title": "萌系大模型训练图解",
    "category": "图表与信息图",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "大模型",
      "萌系",
      "科普"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/op7418/status/2046502136973001143",
    "recommendedSize": "4:5 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776783050495-hf6ae7jk-1776783053669-1.jpeg",
    "imageAlt": "萌系大模型训练图解示例图",
    "prompt": "以「萌系大模型训练图解」为目标生成图像。\n\n核心提示词：中文提示词\n可爱地解释一下大语言模型训练过程\n\n英文提示词\nCute explanation of the large language model training process\n\n输出比例：4:5 / 16:9。\n\n扩展要求：请把信息拆成清晰标题、分区、编号、标注、图例和短说明，保证中文或英文关键文字可读。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-temple-of-heaven-exploded",
    "title": "天坛古建拆解全图",
    "category": "图表与信息图",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "天坛",
      "建筑拆解",
      "中式美学"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/TanShilong/status/2046524996013662380",
    "recommendedSize": "4:5 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776782989344-465uezpx-1776782994541-1.jpeg",
    "imageAlt": "天坛古建拆解全图示例图",
    "prompt": "中文提示词\n生成一个天坛的建筑拆解图，有详细的说明，中式美学风格\n\n英文提示词\nGenerate an architectural exploded view of the Temple of Heaven, with detailed annotations, Chinese aesthetic style",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-professional-designer-photobook",
    "title": "专业设计师打造角色写真集",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "写真集",
      "日系风",
      "多场景"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/Kashiko_AIart/status/2046492817804099794",
    "recommendedSize": "4:5 / 1:1",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776782883300-p64dzlag-1776782886534-1.jpeg",
    "imageAlt": "专业设计师打造角色写真集示例图",
    "prompt": "中文提示词\n请用这个角色制作一本专业设计师打造的照片集。语言为日语。  \n\n根据喜好加入提示词会让它更丰富多彩…  \n・丰富的场景  \n・信息量较多\n\n英文提示词\nPlease use this character to create a photo book crafted by a professional designer. The language should be Japanese.\n\nAdding prompts according to your preferences will make it more colorful and rich\n・Rich scenes\n・Large amount of information",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-jin-ping-mei-tupu",
    "title": "绘制金瓶梅知识图谱",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/xiaoxiaodong01/status/2046252164717416641",
    "recommendedSize": "3:4",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776766580229-3ohndgsn-1776766582702-1.jpeg",
    "imageAlt": "绘制金瓶梅知识图谱示例图",
    "prompt": "英文提示词\nRole: World-class Scientific Encyclopedia Illustrator & Knowledge Graph Architect.\n\nTask: Generate a highly detailed, extremely intricate, and visually stunning \"Universal Illustrated Encyclopedia Science Infographic\" in a classic, unbranded (NO logos) scientific encyclopedia style.\n\nSubject Matter: Choose one from [People, Plants, or Animals]. \n\nSpecific Subject: [e.g., The Giant Squid / Leonardo da Vinci / The Sequoia Tree].\n\nStyle: Fine, detailed scientific illustration on a retro, aged beige paper background. Delicate linework. Intricately complex and professional.\n\nKey Visual Requirements:\n\n1.  Lifelike 3D Effect (The Central Subject): The central subject in the \"C position\" must be rendered with extraordinary realism and dynamism. Create a dramatic sense of depth where the character, plant, or animal appears to break the frame, leaping or bursting out of the flat paper towards the viewer (an effect similar to anamorphic 3D or dynamic pop-out, with high-precision realism).\n\n2.  Layout & Strategic White Space:\n    * Central Subject: Dominates the center, with intentional \"strategic white space\" around it to enhance the popping-out effect and make the figure the clear focal point.\n    * Surrounding Modules: The surrounding area (left, right, top, bottom, and corners) must be filled with 6-8 distinct, highly organized knowledge modules, depending on the subject. There should be a sense of organized density, not random clutter. The modules themselves must have clear borders, headers, and extensive, detailed content.\n\n3.  Connections: Use a complex, logical network of fine leader lines, arrows, brackets, dotted lines, and small connection points to link the central figure to all surrounding modules, and interconnect the modules themselves into a cohesive knowledge web.\n\n4.  Text & Annotation (Hard Requirement - Must be CLEAR Chinese):\n    * Main Title: A large, prominent, beautifully executed **Chinese calligraphy** (书法体) of the specific subject's name [e.g., \"大王乌贼\"].\n    * Calligraphic Accents: Scattered throughout the main content and module titles, use beautiful, clear Chinese calligraphy for important terms.\n    * Standard Chinese Text: All other descriptive text, handwritten notes (大量清晰中文手写注释), module content, and annotations must be clear, legible Chinese characters (简体中文), not gibberish or unreadable symbols. Ensure text clarity is prioritized.\n    * Leader Line Annotations: Every single small component, detail, submodule, diagram, or illustration within the modules must have detailed leader line annotations (拟解剖图) pointing directly to it for maximum professionalism and educational value. Every part should be labeled.\n\nSubject-Specific Module Structure (Example for general reference):\n\nA. For Humans [People]:\n   - Module 1: Anatomy & Skeletal Structure (w/ magnified cross-sections)\n   - Module 2: Physiological Processes (e.g., Circulatory/Nervous System)\n   - Module 3: Historical Context & Timeline (Key Achievements)\n   - Module 4: Major Contribution Diagram (Detailed breakdown)\n   - Module 5: Cognitive Process / Psychological Insight\n   - Module 6: Genetic Profile / Evolution\n   - Module 7: Global Influence & Cultural Impact\n   - Module 8: Cultural Representations / Legacy\n\nB. For Animals:\n   - Module 1: Full External Sketch & Anatomy (w/ microscope magnified detail circular windows)\n   - Module 2: Behavioral Patterns & Lifecycle (e.g., Mating/Migration, Flowchart style)\n   - Module 3: Digestive & Skeletal System\n   - Module 4: Habitats & Distribution Map (with environmental details)\n   - Module 5: Unique Adaptations (e.g., camouflage, hunting tools)\n   - Module 6: Evolutionary History & Relatives\n   - Module 7: Symbiotic Relationships / Ecosystem Role\n   - Module 8: Conservation Status & Human Interaction\n\nC. For Plants:\n   - Module 1: Full Plant Sketch & Anatomy (w/ magnified leaf/root details)\n   - Module 2: Photosynthesis & Lifecycle Flow (w/ icons for environment)\n   - Module 3: Cellular Structure (Magnified circular views)\n   - Module 4: Medicinal Properties / Practical Applications (as in original original prompt)\n   - Module 5: Environmental Adaptations / Unique Features\n   - Module 6: Distribution Map & Environmental Context\n   - Module 7: Genetic Variations & Cultivation\n   - Module 8: Historical Usage & Folklore\n\nOverall Composition: Extremely dense with information, organized into 6-8 structured modules, but balanced with strategic empty space around the center to allow the main, hyper-realistic figure to pop. Hard-core, professional, academic, but visually engaging due to the dynamic 3D central figure. No branding from any specific encyclopedia (e.g., no \"DK\" logos). All annotations must be legible. All handwritten notes must be clear. Main titles in Chinese calligraphy. Aspect Ratio: 3:4.\n\n主题内容：潘金莲",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-western-art-pixel-museum",
    "title": "西方艺术演进像素博物馆",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "像素风",
      "时间线",
      "艺术史"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/GeekCatX/status/2046172416716759171",
    "recommendedSize": "3:4",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776741242142-tlqwsihn-1776741245961-1.jpeg",
    "imageAlt": "西方艺术演进像素博物馆示例图",
    "prompt": "中文提示词\n创作一张超高细节等距像素艺术时间线插画（3:4，4K），融合细节密度、象征性与隐喻。用户指定的主题为【Western Art Development】。\n\n首先，围绕Western Art Development进行推理，确定：主题的中英文标题、涵盖的最早与最近历史时期、起始阶段标签与结束阶段标签，以及3-5个关键演进阶段及其各自的象征性元素与色彩方案。\n\n然后构建一个以\"Western Art Development\"为主题的等距\"演进博物馆\"，每个展馆区域代表一个演进阶段，空间推进即代表时间演变。采用标准等距视角（2:1），丰富的层次深度与流畅过渡。每个阶段分配3-5个与主题强烈关联的象征元素，并用差异化色彩暗示时间流动。在场景中融入双语像素字体标题：中文\"[主题中文]演进史\"与英文\"EVOLUTION OF Western Art Development\"，加上起止阶段的双语副标题及关键时间节点标记。整体风格专业且具视觉张力，适合学术分析与对比可视化，直接出图。\n\n英文提示词\nCreate an ultra-high-detail isometric pixel art timeline illustration (3:4, 4K), integrating detail density, symbolism, and metaphor. The user-specified theme is [Western Art Development]. First, reason around Western Art Development to determine: the Chinese and English titles of the theme, the earliest and most recent historical periods covered, the starting stage label and the ending stage label, as well as 3-5 key evolution stages and their respective symbolic elements and color schemes. Then build an isometric \"Evolution Museum\" themed \"Western Art Development\", where each exhibition hall area represents an evolution stage, and spatial progression represents time evolution. Adopt a standard isometric perspective (2:1), rich layer depth, and smooth transitions. Allocate 3-5 symbolic elements strongly associated with the theme to each stage, and use differentiated colors to imply the flow of time. Integrate bilingual pixel font titles in the scene: Chinese \"[Theme Chinese] Evolution History\" and English \"EVOLUTION OF Western Art Development\", plus bilingual subtitles for the starting and ending stages and key time node markers. The overall style is professional and visually tense, suitable for academic analysis and comparative visualization, direct image output.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-elegant-pattern-fashion-items",
    "title": "雅致图案四款时尚单品设计",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "时尚款",
      "穿搭秀",
      "图案感"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/aiehon_aya/status/2046348182301683954",
    "recommendedSize": "4:5 / 9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776737886849-rg2qpocb-1776737887640-1.png",
    "imageAlt": "雅致图案四款时尚单品设计示例图",
    "prompt": "中文提示词\n使用附图中的图案，由专业设计师打造 4 款时尚单品，采用不同的色彩搭配与排版设计，附带穿搭效果图。以雅致的构图凸显图案的美感。格式为 2:3，希望将图像生成模型从 duct-tape-1 指定为 duct-tape-2、3。\n\n英文提示词\nUse the patterns in the attached image, crafted by professional designers to create 4 fashion items, using different color schemes and layout designs, accompanied by outfit effect pictures. Highlight the beauty of the patterns with an elegant composition. The format is 2:3, hoping to specify the image generation model from duct-tape-1 to duct-tape-2, 3.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-draw-scientific-style-encyclopedia-infographic",
    "title": "绘制科学百科知识图谱",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/GeekCatX",
    "recommendedSize": "3:4",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776674850455-h2v9uqxa-1776674856973-1.jpeg",
    "imageAlt": "绘制科学百科知识图谱示例图",
    "prompt": "中文提示词\n角色：世界级科学百科插画师兼知识图谱架构师\n任务：以经典、无品牌标识（无任何 Logo）的科学百科风格，创作一幅细节极致丰富、结构极其精巧、视觉效果惊艳的「环球图解百科科学信息图」。\n题材选择：从【人物、植物、动物】中任选其一。\n具体对象：【例如：大王乌贼 / 列奥纳多・达・芬奇 / 红杉树】\n风格：采用复古泛黄米色纸张背景，绘制精细工整的科学插画；线条细腻精致，整体繁复专业、严谨考究。\n核心视觉要求\n主体逼真 3D 效果\n位于画面视觉中心（C 位）的主体形象，需具备极致的写实感与动态张力。营造强烈的空间纵深感，让人物、植物或动物仿佛突破画框，从平面纸张中跃出、冲向观者（效果类似变形 3D 或动态弹出效果，高精度写实呈现）。\n版式布局与留白设计\n主体位置：占据画面中心，周围刻意设置规划式留白，强化立体弹出效果，使其成为绝对视觉焦点。\n周边模块：根据所选题材，在画面四周（上下左右及四角）排布 6–8 个独立且规整有序的知识模块。整体呈现规整的信息密度感，而非杂乱堆砌。每个模块需带有清晰边框、标题栏与详尽丰富的内容。\n关联结构\n运用纤细的指示线、箭头、括号、虚线与小型连接点，构建复杂且逻辑清晰的网络，将中心主体与所有周边模块相连，并使各模块之间相互关联，形成完整统一的知识体系。\n文字与标注（硬性要求：必须为清晰中文）\n主标题：以醒目大气、笔法优美的中文书法字体呈现具体对象名称【例如：大王乌贼】。\n书法点缀：在主体画面与模块标题中，对关键术语使用工整美观的中文书法字体标注。\n标准中文文本：其余所有说明文字、大量清晰中文手写注释、模块内容及注解均使用清晰可辨的简体汉字，不得出现乱码或无法识别符号，优先保证文字可读性。\n指示线标注：模块内所有细小结构、细节、子模块、图表与插画，均需搭配详尽的指示线标注（仿解剖图形式），直接指向对应部位，最大化体现专业性与科普价值，做到每一处结构均有标注。\n分题材模块结构（参考示例）\nA. 人物类\n模块 1：解剖结构与骨骼系统（含放大剖面图示）\n模块 2：生理运作机制（如循环系统、神经系统）\n模块 3：生平背景与时间线（核心成就）\n模块 4：主要贡献图解（详细拆解）\n模块 5：认知模式与心理特征\n模块 6：基因特征与演化溯源\n模块 7：全球影响力与文化冲击\n模块 8：艺术形象与后世传承\nB. 动物类\n模块 1：整体外形草图与解剖结构（含显微镜级圆形放大细节）\n模块 2：行为模式与生命周期（如交配、迁徙，流程图形式）\n模块 3：消化系统与骨骼系统\n模块 4：栖息环境与分布地图（含环境细节）\n模块 5：独特适应性特征（如伪装、捕食器官）\n模块 6：演化历史与亲缘物种\n模块 7：共生关系与生态位作用\n模块 8：保护现状与人类互动\nC. 植物类\n模块 1：植株整体草图与解剖结构（含叶片、根部放大细节）\n模块 2：光合作用与生命周期流程（搭配环境示意图标）\n模块 3：细胞结构（圆形放大视图）\n模块 4：药用价值与实际应用\n模块 5：环境适应性与独有特征\n模块 6：分布地图与生长环境\n模块 7：基因变异与培育方式\n模块 8：历史用途与民间传说\n整体构图要求\n信息密度极高，规整划分为 6–8 个结构化模块，同时通过中心区域的规划留白突出超写实主体的立体弹出效果。风格硬核、专业、学术化，凭借动态 3D 主体实现极强视觉吸引力。\n无任何百科品牌标识（如 DK 等 Logo）。\n所有标注清晰可辨，所有手写注释工整可读。\n主标题采用中文书法字体。\n画面比例：3:4。\n【主题内容】\n\n英文提示词\nRole: World-class Scientific Encyclopedia Illustrator & Knowledge Graph Architect.\n\nTask: Generate a highly detailed, extremely intricate, and visually stunning \"Universal Illustrated Encyclopedia Science Infographic\" in a classic, unbranded (NO logos) scientific encyclopedia style.\n\nSubject Matter: Choose one from [People, Plants, or Animals]. \n\nSpecific Subject: [e.g., The Giant Squid / Leonardo da Vinci / The Sequoia Tree].\n\nStyle: Fine, detailed scientific illustration on a retro, aged beige paper background. Delicate linework. Intricately complex and professional.\n\nKey Visual Requirements:\n\n1.  Lifelike 3D Effect (The Central Subject): The central subject in the \"C position\" must be rendered with extraordinary realism and dynamism. Create a dramatic sense of depth where the character, plant, or animal appears to break the frame, leaping or bursting out of the flat paper towards the viewer (an effect similar to anamorphic 3D or dynamic pop-out, with high-precision realism).\n\n2.  Layout & Strategic White Space:\n    * Central Subject: Dominates the center, with intentional \"strategic white space\" around it to enhance the popping-out effect and make the figure the clear focal point.\n    * Surrounding Modules: The surrounding area (left, right, top, bottom, and corners) must be filled with 6-8 distinct, highly organized knowledge modules, depending on the subject. There should be a sense of organized density, not random clutter. The modules themselves must have clear borders, headers, and extensive, detailed content.\n\n3.  Connections: Use a complex, logical network of fine leader lines, arrows, brackets, dotted lines, and small connection points to link the central figure to all surrounding modules, and interconnect the modules themselves into a cohesive knowledge web.\n\n4.  Text & Annotation (Hard Requirement - Must be CLEAR Chinese):\n    * Main Title: A large, prominent, beautifully executed **Chinese calligraphy** (书法体) of the specific subject's name [e.g., \"大王乌贼\"].\n    * Calligraphic Accents: Scattered throughout the main content and module titles, use beautiful, clear Chinese calligraphy for important terms.\n    * Standard Chinese Text: All other descriptive text, handwritten notes (大量清晰中文手写注释), module content, and annotations must be clear, legible Chinese characters (简体中文), not gibberish or unreadable symbols. Ensure text clarity is prioritized.\n    * Leader Line Annotations: Every single small component, detail, submodule, diagram, or illustration within the modules must have detailed leader line annotations (拟解剖图) pointing directly to it for maximum professionalism and educational value. Every part should be labeled.\n\nSubject-Specific Module Structure (Example for general reference):\n\nA. For Humans [People]:\n   - Module 1: Anatomy & Skeletal Structure (w/ magnified cross-sections)\n   - Module 2: Physiological Processes (e.g., Circulatory/Nervous System)\n   - Module 3: Historical Context & Timeline (Key Achievements)\n   - Module 4: Major Contribution Diagram (Detailed breakdown)\n   - Module 5: Cognitive Process / Psychological Insight\n   - Module 6: Genetic Profile / Evolution\n   - Module 7: Global Influence & Cultural Impact\n   - Module 8: Cultural Representations / Legacy\n\nB. For Animals:\n   - Module 1: Full External Sketch & Anatomy (w/ microscope magnified detail circular windows)\n   - Module 2: Behavioral Patterns & Lifecycle (e.g., Mating/Migration, Flowchart style)\n   - Module 3: Digestive & Skeletal System\n   - Module 4: Habitats & Distribution Map (with environmental details)\n   - Module 5: Unique Adaptations (e.g., camouflage, hunting tools)\n   - Module 6: Evolutionary History & Relatives\n   - Module 7: Symbiotic Relationships / Ecosystem Role\n   - Module 8: Conservation Status & Human Interaction\n\nC. For Plants:\n   - Module 1: Full Plant Sketch & Anatomy (w/ magnified leaf/root details)\n   - Module 2: Photosynthesis & Lifecycle Flow (w/ icons for environment)\n   - Module 3: Cellular Structure (Magnified circular views)\n   - Module 4: Medicinal Properties / Practical Applications (as in original original prompt)\n   - Module 5: Environmental Adaptations / Unique Features\n   - Module 6: Distribution Map & Environmental Context\n   - Module 7: Genetic Variations & Cultivation\n   - Module 8: Historical Usage & Folklore\n\nOverall Composition: Extremely dense with information, organized into 6-8 structured modules, but balanced with strategic empty space around the center to allow the main, hyper-realistic figure to pop. Hard-core, professional, academic, but visually engaging due to the dynamic 3D central figure. No branding from any specific encyclopedia (e.g., no \"DK\" logos). All annotations must be legible. All handwritten notes must be clear. Main titles in Chinese calligraphy. Aspect Ratio: 3:4.\n\n[主题内容]",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-ancient-ming-emperor-group",
    "title": "古风明朝帝王群像长卷",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "明朝",
      "皇帝",
      "古风"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/liyue_ai/status/2045071977279635962",
    "recommendedSize": "4:5 / 9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776657588153-1ggv7ra0-1776657590726-1.jpeg",
    "imageAlt": "古风明朝帝王群像长卷示例图",
    "prompt": "中文提示词\n根据上传图片的风格，生成明朝各个皇帝的头像，头像下面有他们的谥号和名字\n\n英文提示词\nBased on the style of the uploaded image, generate portraits of the emperors of the Ming Dynasty, with their posthumous titles and names below the portraits",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-bilibili-hu-chenfeng-livestream",
    "title": "哔哩哔哩户晨风直播截图",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "直播",
      "举牌",
      "B站"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/austinit/status/2044994519649997183",
    "recommendedSize": "9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776657252001-ecj9s0aw-1776657253070-1.jpeg",
    "imageAlt": "哔哩哔哩户晨风直播截图示例图",
    "prompt": "中文提示词\n9:16 的图片，生成一张哔哩哔哩直播的截图，里面是 户晨风在直播，户晨风表情开心，手里拿着牌子，牌子里写着 “Austin总太性情了，大家给Austin总点点关注。”\n\n英文提示词\nA 9:16 image, generate a screenshot of a Bilibili live stream, inside is Hu Chenfeng broadcasting live, Hu Chenfeng has a happy expression, holding a sign in his hand, the sign says \"Boss Austin is so emotional, everyone please give Boss Austin some follows.\"",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-perfect-matching-poster-ad",
    "title": "完美匹配的海报广告图",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "广告图",
      "海报图",
      "高信息"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/Kashiko_AIart/status/2045787856292151322",
    "recommendedSize": "4:5 / 9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776658693374-r9e2p438-1776658698077-1.jpeg",
    "imageAlt": "完美匹配的海报广告图示例图",
    "prompt": "中文提示词\n生成一张与这张图片完美匹配的广告图片。信息量要多一些。\n\n英文提示词\nGenerate an advertising image that perfectly matches this image. There should be a lot of information.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-glazed-transparent-thrush-guangzhou",
    "title": "琉璃透明画眉鸟飞舞羊城墨卷",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "水墨风",
      "广州塔",
      "玻璃鸟"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/liyue_ai/status/2045873940883808523",
    "recommendedSize": "9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776657864578-gcgion2q-1776657867037-1.jpeg",
    "imageAlt": "琉璃透明画眉鸟飞舞羊城墨卷示例图",
    "prompt": "中文提示词\n【背景与骨架线条】\n纯黑深邃底色，一条粗壮有力的墨色书法S型曲线自画面一端蜿蜒贯穿至另一端，笔触苍劲，墨迹浓淡有致，如大写意行笔，构成整幅画面的视觉骨架与叙事动线。\n【主体：透明燕子】\n曲线上方，一只展翅飞翔的画眉鸟占据视觉核心；身体呈玻璃透明质感，内部映射传统建筑群叠影，蓝绿色光流在透明羽翼间流转折射，仿佛时间长河与文明记忆凝缩其中；轮廓以极细金线勾边，增强立体感与神圣感。\n【中景：古典建筑序列】\n燕子下方，沿墨线曲线错落分布广州的各种风景名胜：白云山、陈家祠、双子塔、广州塔、猎德大桥、海珠塔依次浮现；主色调青绿与淡金，建筑细节清晰，琉璃瓦、飞檐翘角、石阶回廊；木棉花簇拥点缀于建筑周围，花瓣随风轻散，静谧而悠远；几朵水墨云朵轻盈飘浮其间，增添空灵层次。\n【前景：白鹤与水面】\n前景湖畔：数只白鹤或静立水边、或振翅腾飞，姿态各异，优雅从容；浅蓝湖面如镜，倒影荡漾，波光细碎，营造宁静氛围。\n【远景：山峦】\n远处山峦层叠起伏，青黛色晕染，墨色由浓至淡，朦胧氤氲，富有水墨层次；与前景形成近实远虚的空间纵深。\n【构图与光影】\n非线性透视构图，墨线曲线为叙事主轴，古今元素沿线嵌入；光源自画面中心向外辐射扩散，形成强烈明暗对比，中心亮、四周渐暗；冷色调主导（深蓝、青绿、银白），暖色点缀（樱花粉、淡金），和谐而神秘；东方美学与现代意象交融，超现实诗意意境。\n【技术规格】\n8K超高清渲染，极致细节精度，最佳画质，比例 9:16\n\n英文提示词\n[\n  Background and Skeleton Lines\n] Pure black deep background,\na thick and powerful ink calligraphy S-shaped curve meanders from one end of the picture to the other,\nwith vigorous brushstrokes and well-proportioned ink shades,\nlike freehand brushwork,\nforming the visual skeleton and narrative dynamic line of the entire picture. [\n  Subject: Transparent Swallow\n] Above the curve,\na flying thrush with spread wings occupies the visual core; the body has a glass transparent texture,\nwith overlapping shadows of traditional architectural complexes mapped inside,\nblue-green light flows circulate and refract between the transparent wings,\nas if the long river of time and civilized memories are condensed within it; the outline is bordered with extremely thin gold lines to enhance three-dimensionality and sacredness. [\n  Midground: Classical Architecture Sequence\n] Below the swallow,\nvarious scenic spots in Guangzhou are scattered along the ink curve: Baiyun Mountain,\nChen Clan Ancestral Hall,\nTwin Towers,\nCanton Tower,\nLiede Bridge,\nHaizhu Tower appear in sequence; the main tone is cyan-green and pale gold,\narchitectural details are clear,\nglazed tiles,\nflying eaves,\nstone steps and corridors; kapok flowers cluster and decorate around the buildings,\npetals scatter lightly with the wind,\nquiet and distant; a few ink clouds float lightly among them,\nadding ethereal layers. [\n  Foreground: White Cranes and Water Surface\n] Lakeside in the foreground: several white cranes either stand quietly by the water or flap their wings to soar,\nwith different postures,\nelegant and calm; the light blue lake surface is like a mirror,\nreflections rippling,\nshimmering light,\ncreating a tranquil atmosphere. [\n  Distance: Mountains\n] Distant mountains rise and fall in layers,\nsmudged in cyan-black,\nink shades from thick to light,\nhazy and misty,\nrich in ink wash layers; forming a spatial depth with solid foreground and empty distance with the foreground. [\n  Composition and Light and Shadow\n] Non-linear perspective composition,\nthe ink curve is the main narrative axis,\nancient and modern elements are embedded along the line; the light source radiates and diffuses outward from the center of the picture,\nforming a strong contrast between light and dark,\nbright in the center and gradually darkening around; cool tones dominate (dark blue,\ncyan-green,\nsilver white),\nwarm tones embellish (cherry blossom pink,\npale gold),\nharmonious and mysterious; Eastern aesthetics blend with modern imagery,\nsurreal poetic mood. [\n  Technical Specifications\n] 8K ultra-high definition rendering,\nextreme detail precision,\nbest image quality,\nratio 9:16",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-minimalist-guochao-guangzhou-tower",
    "title": "极简国潮鎏金广州塔海报",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "新中式",
      "国潮",
      "极简风"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/liyue_ai/status/2045744531686166878",
    "recommendedSize": "9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776657798150-p8nxedw3-1776657800111-1.jpeg",
    "imageAlt": "极简国潮鎏金广州塔海报示例图",
    "prompt": "中文提示词\n新中式极简风格高端城市海报，9:16竖版构图，以广州为核心主题，画面中心为抽象几何化的广州塔，造型简洁但具有辨识度，\n\n整体采用S型流动构图，从下方向上延展，珠江水系被设计为流动的水波纹与传统祥云纹样融合，环绕整个画面形成视觉动线，\n\n广州地标建筑以“留白+线描+局部色块”的方式点缀其中：珠江新城双塔、猎德大桥、白云山轮廓、岭南骑楼，\n传统与现代建筑自然融合，层次递进，远近虚实分明，\n\n风格控制：极简 + 高级 + 东方意境，不杂乱不过度写实，\n\n色彩方案（重点）：\n高饱和但克制 ，中国红、青蓝、鎏金为主色，\n辅以少量暖金高光点缀，形成强烈视觉冲击但不俗艳，\n\n背景：大面积纯净留白或淡宣纸肌理，增强呼吸感与高级感，\n\n细节：祥云与水纹具有轻微浮雕/烫金质感，\n局部加入微光粒子或流动光线，增强现代感，\n\n光影：柔和渐变光+局部高光，突出恢弘大气氛围，\n\n整体风格：国潮高级插画 / 品牌海报级质感 / 8K / 超清细节\n\n英文提示词\nNeo-Chinese minimalist style high-end city poster, 9:16 vertical composition, with Guangzhou as the core theme, the center of the image is an abstract geometric Canton Tower, simple in shape but highly recognizable,\n\nThe overall adopts an S-shaped flowing composition, extending from bottom to top, the Pearl River water system is designed as flowing water ripples fused with traditional auspicious cloud patterns, surrounding the entire image to form a visual dynamic line,\n\nGuangzhou landmark buildings are embellished in it in the way of \"blank space + line drawing + local color blocks\": Zhujiang New Town Twin Towers, Liede Bridge, Baiyun Mountain outline, Lingnan arcade houses,\nTraditional and modern architecture naturally blend, progressive layers, clear distinction between far and near, virtual and real,\n\nStyle control: minimalist + high-end + Eastern artistic conception, not cluttered and not overly realistic,\n\nColor scheme (key point):\nHigh saturation but restrained, Chinese red, cyan blue, and gilded gold as the main colors,\nSupplemented by a small amount of warm gold highlight embellishments, forming a strong visual impact but not tacky,\n\nBackground: large area of pure blank space or light Xuan paper texture, enhancing a sense of breathing and high-end feel,\n\nDetails: auspicious clouds and water ripples have a slight relief/gold stamping texture,\nLocally add faint light particles or flowing light lines to enhance modernity,\n\nLight and shadow: soft gradient light + local highlights, highlighting a magnificent and grand atmosphere,\n\nOverall style: Guochao high-end illustration / brand poster-level texture / 8K / ultra-clear details",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-rising-wind-calligraphy-art",
    "title": "疾风起狂草艺术字体设计",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "书法字",
      "促销风",
      "手写体"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://opennana.com/awesome-prompt-gallery/rising-wind-calligraphy-art",
    "recommendedSize": "16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776657705664-3i5r5l7j-1776657706656-1.jpeg",
    "imageAlt": "疾风起狂草艺术字体设计示例图",
    "prompt": "中文提示词\n创意艺术字体“纵有疾风起”，秀丽笔手写风格，整体文字横版排列，具有强烈视觉冲击力；\n深度融合手写书法笔意，笔触带毛笔书写的粗犷洒脱，如挥毫泼墨的肆意劲道；\n起收笔的飞白，顿挫，尽显促销的火爆张力，文字的形态打破规整，笔画的粗细变化；\ndutch angle，营造出动感冲刺的气势，字形呈奔放之势；\n重心上扬如蓄势待发，笔画的伸展，穿插毫无拘束，似全力冲刺的劲道；\n整体架构疏密交织，紧密处如促销热潮的汹涌，留白处似优惠间隙的呼吸感；\n纯净黑色背景打底，完美契合热烈氛围，艺术字的形态与色彩酣畅传递。\n\n英文提示词\nCreative artistic typography \"Zong You Ji Feng Qi\", hand-written style with a fine brush, overall text arranged horizontally, with strong visual impact;\nDeeply integrated with the essence of handwritten calligraphy, the brushstrokes carry the rugged and free-spirited nature of brush writing, like the unrestrained vigor of splashing ink;\nThe flying white and pauses at the start and end of the strokes fully display the explosive tension of a promotion, the form of the text breaks away from neatness, with variations in the thickness of the strokes;\ndutch angle, creating a dynamic sprinting momentum, the font shape shows a bold and unrestrained trend;\nThe center of gravity rises like being ready to launch, the stretching and interlacing of the strokes are completely unconstrained, like the vigor of a full-force sprint;\nThe overall structure is intertwined with density and sparseness, the tight parts are like the surging of a promotional craze, and the blank spaces are like the breathing sense during promotional gaps;\nPure black background as the base, perfectly fitting the passionate atmosphere, the form and color of the artistic typography are conveyed with full expressiveness.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-lantingji-xu-calligraphy-art",
    "title": "兰亭集序书法帖意境图",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "书法",
      "兰亭序",
      "王羲之"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/liyue_ai/status/2045137549149286858",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776657682935-vnueoh7w-1776657684667-1.jpeg",
    "imageAlt": "兰亭集序书法帖意境图示例图",
    "prompt": "中文提示词\n结合王羲之的《兰亭集序》里的内容，生成一副书法帖图片，要求图片背景符合《兰亭集序》的意境，背景图可以使用蒙版，前景是《兰亭集序》\n\n英文提示词\nCombining the content from Wang Xizhi's \"Lantingji Xu\", generate a calligraphy copy image, requiring the image background to match the artistic conception of \"Lantingji Xu\", the background image can use a mask, the foreground is \"Lantingji Xu\"",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-mona-lisa-drinking-cola",
    "title": "蒙娜丽莎畅饮可乐的趣味油画",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "蒙娜丽莎",
      "喝可乐",
      "趣味油画"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/liyue_ai/status/2045058142858555733",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776657529804-tr4civws-1776657532444-1.jpeg",
    "imageAlt": "蒙娜丽莎畅饮可乐的趣味油画示例图",
    "prompt": "以「蒙娜丽莎畅饮可乐的趣味油画」为目标生成图像。\n\n核心提示词：中文提示词\n生成一张蒙娜丽莎喝可乐的油画。\n\n英文提示词\nGenerate an oil painting of Mona Lisa drinking cola.\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-zhu-yuanzhang-throne-x-post",
    "title": "朱元璋登基后的推特主页",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "朱元璋",
      "明朝",
      "皇帝"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/liyue_ai/status/2045021302315249738",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776657486195-qpu3k3qe-1776657487621-1.jpeg",
    "imageAlt": "朱元璋登基后的推特主页示例图",
    "prompt": "中文提示词\n创建一个明朝朱元璋登基之后的X帖子页面\n\n英文提示词\nCreate an X post page of Zhu Yuanzhang after his ascension to the throne in the Ming Dynasty",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-healing-sleep-guide-grid",
    "title": "治愈系助眠指南九宫格",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "助眠",
      "九宫格",
      "治愈系"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/austinit/status/2046037688969769346",
    "recommendedSize": "9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776657005744-ewii7m35-1776657007167-1.jpeg",
    "imageAlt": "治愈系助眠指南九宫格示例图",
    "prompt": "中文提示词\n生成一张适合小红书发布的 3:4 竖版九宫格海报，整体为 3列 × 3行 排版，九个宫格边界清晰，方便后期直接切割成 9 张单图发布。整体风格干净、高级、统一，适合女性向健康生活方式内容，具有小红书爆款封面气质。画面要求 信息排版清晰、文字大、可读性强、留白舒服、配色温柔治愈。\n\n整体视觉风格：\n奶油白、浅米色、淡燕麦色、浅焦糖色为主色调，搭配少量深棕色文字，ins风、治愈感、睡眠疗愈主题，简约排版，轻拟物插画点缀，可加入枕头、月亮、星星、热牛奶、香薰、书本、眼罩、窗帘、床铺等元素。整体像专业新媒体设计图，字体工整，适合做知识科普类小红书九宫格。\n排版要求：\n\n整张图必须是标准九宫格构图，切分后每一格都能独立成图\n\n每个宫格内容完整居中，不要把标题或正文压在分割线附近\n每个格子之间保留明显间隔或细边框，保证裁切后不影响阅读\n所有文字使用中文，清晰易读，不要乱码，不要英文\n每个宫格都像独立的小红书图文卡片，但视觉风格保持统一\n画面精致、真实、自然，不要廉价营销感，不要过度花哨\n九宫格具体内容：\n\n第1格（封面）\n大标题：让你倒头就睡的8个 tips\n副标题：失眠党、熬夜党一定要收藏\n封面视觉最吸睛，适合做首图，加入柔软床铺、月亮、枕头、眼罩等治愈睡眠元素，标题突出，排版高级。\n\n第2格\n标题：1. 睡前1小时别玩手机\n正文：蓝光会让大脑更清醒，越刷越睡不着。\n配图元素：手机、月亮、困倦表情的小插画\n第3格\n标题：2. 睡前把灯光调暗\n正文：暖光环境能帮助身体进入“准备睡觉”的状态。\n配图元素：床头灯、暖黄色灯光、窗帘\n第4格\n标题：3. 房间温度别太高\n正文：稍微凉一点，更容易快速入睡。\n配图元素：空调、温度计、被子\n第5格\n标题：4. 晚上别喝浓茶咖啡\n正文：咖啡因会延迟困意，让你躺很久还睡不着。\n配图元素：咖啡杯、茶杯、禁止符号\n\n第6格\n标题：5. 睡前洗个热水澡\n正文：能让身体放松下来，入睡速度更快。\n配图元素：浴室蒸汽、毛巾、热水\n第7格\n标题：6. 脑子停不下来就写下来\n正文：把烦心事和待办清单写下，大脑会更容易放松。\n配图元素：笔记本、钢笔、小台灯\n第8格\n标题：7. 固定上床时间\n正文：每天差不多时间睡，生物钟会越来越稳定。\n配图元素：时钟、月亮、床\n第9格\n标题：8. 试试深呼吸放松法\n正文：吸气4秒，停4秒，呼气6秒，慢慢就有困意了。\n底部小字：收藏这组，今晚试试看\n配图元素：呼吸线条、闭眼人物、星星\n\n画质要求：\n高清，高级排版，杂志感，真实可发布，新媒体运营审美，小红书爆款图文风格，文字布局规整，适合直接切图。\n\n英文提示词\nGenerate a 3:4 vertical 9-grid poster suitable for publishing on Xiaohongshu, with an overall layout of 3 columns × 3 rows. The boundaries of the nine grids are clear, making it easy to directly cut into 9 single images for later publishing. The overall style is clean, premium, and unified, suitable for female-oriented healthy lifestyle content, possessing the vibe of a viral Xiaohongshu cover. Image requirements: clear information layout, large text, strong readability, comfortable white space, gentle and healing color palette.\n\nOverall visual style:\nCream white, light beige, light oat color, and light caramel color as the main color tones, paired with a small amount of dark brown text. Ins style, healing sense, sleep therapy theme, minimalist layout, light skeuomorphic illustration embellishments. Elements such as pillows, moons, stars, hot milk, aromatherapy, books, eye masks, curtains, and beds can be added. The overall look should be like a professional new media design graphic, with neat fonts, suitable for a knowledge-based popular science Xiaohongshu 9-grid.\n\nLayout requirements:\nThe entire image must be a standard 9-grid composition, and each grid can stand alone as an independent image after being cut.\nThe content of each grid should be completely centered; do not place titles or body text near the dividing lines.\nKeep obvious gaps or thin borders between each grid to ensure that reading is not affected after cropping.\nAll text must use Chinese, be clear and readable, no garbled characters, no English.\nEach grid should look like an independent Xiaohongshu image-and-text card, but the visual style must remain unified.\nThe image should be exquisite, realistic, and natural, without a cheap marketing feel, and not overly flashy.\n\nSpecific content of the 9-grid:\n\nGrid 1 (Cover)\nMain title: 8 tips to make you fall asleep instantly\nSubtitle: Insomniacs and night owls must save this\nThe cover visuals should be the most eye-catching, suitable for the first image. Add healing sleep elements such as soft beds, moons, pillows, and eye masks. The title should be prominent with a premium layout.\n\nGrid 2\nTitle: 1. Don't play with your phone 1 hour before bed\nBody text: Blue light makes the brain more awake; the more you scroll, the harder it is to fall asleep.\nImage elements: Mobile phone, moon, small illustration of a sleepy expression\n\nGrid 3\nTitle: 2. Dim the lights before bed\nBody text: A warm light environment can help the body enter a \"ready to sleep\" state.\nImage elements: Bedside lamp, warm yellow light, curtains\n\nGrid 4\nTitle: 3. Don't keep the room temperature too high\nBody text: Keeping it a bit cooler makes it easier to fall asleep quickly.\nImage elements: Air conditioner, thermometer, quilt\n\nGrid 5\nTitle: 4. Don't drink strong tea or coffee at night\nBody text: Caffeine delays sleepiness, making you lie in bed for a long time unable to sleep.\nImage elements: Coffee cup, teacup, prohibition sign\n\nGrid 6\nTitle: 5. Take a hot shower before bed\nBody text: It can relax the body and help you fall asleep faster.\nImage elements: Bathroom steam, towel, hot water\n\nGrid 7\nTitle: 6. Write it down if your brain won't stop\nBody text: Writing down your worries and to-do lists makes it easier for your brain to relax.\nImage elements: Notebook, fountain pen, small desk lamp\n\nGrid 8\nTitle: 7. Fix your bedtime\nBody text: Going to bed at about the same time every day will make your biological clock increasingly stable.\nImage elements: Clock, moon, bed\n\nGrid 9\nTitle: 8. Try deep breathing relaxation\nBody text: Inhale for 4 seconds, hold for 4 seconds, exhale for 6 seconds, and sleepiness will gradually come.\nBottom small text: Save this set and try it tonight\nImage elements: Breathing lines, person with closed eyes, stars\n\nImage quality requirements:\nHigh definition, premium layout, magazine feel, realistically publishable, new media operation aesthetics, Xiaohongshu viral image-and-text style, neat text layout, suitable for direct image cutting.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-yuechao-guochao-poster",
    "title": "粤超联赛国潮风邀请函海报",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "国潮风",
      "足球赛",
      "邀请函"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/liyue_ai/status/2045772039521542202",
    "recommendedSize": "9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776656903352-rmd3llwp-1776656905414-1.jpeg",
    "imageAlt": "粤超联赛国潮风邀请函海报示例图",
    "prompt": "中文提示词\n广东省城市足球超级联赛（粤超）邀请函海报设计，比例9:16； \n\nS型流动构图，画面从下方向上延展，一条由足球运动轨迹形成的动态能量流贯穿画面， 中心为一颗发光的足球，带有动感轨迹与能量光效；\n\n沿S型动线融合广东城市地标与文化元素： 广州塔、深圳平安金融中心、珠海渔女雕像、岭南建筑与佛山武术剪影、中山孙中山文化象征、潮汕英歌舞动态人物轮廓、清远山水自然景观， 所有元素采用“线描 + 局部色块 + 留白”融合表现，层次递进、远近虚实结合；\n\n加入抽象足球运动员剪影，弱化人物细节，强化动势与竞技氛围，视觉重点仍为足球；\n\n风格：现代国潮高级海报，极简风格但富有设计感，高级、干净、统一， 融合东方美学与现代体育视觉；\n\n色彩方案：高饱和但克制，中国红为主视觉，青蓝色辅助，金色点缀高光， 高对比但不杂乱，具有品牌级视觉冲击力； \n\n顶部中央横版视觉主标题 「广东省城市足球超级联赛」：中字，宋体， 中央竖排文字排版： 「粤超」，大字，手写书法艺术字体， 「邀请函」：中字，宋体，纵向排列，间距较大， 底部中央第一排横排： 「2026年4月25日」，小字，宋体，第二排：「广州越秀山体育场」，小字，宋体， 预留文字排版空间；\n\n整体版式平衡、具有高级品牌海报质感，极致精细，构图简洁干净，无杂乱元素，电影级光影，8K 分辨率，高端设计感。融入源自中国传统祥云纹的雅致云纹与水波纹元素，浮动光效粒子，富有动感与生机。\n\n英文提示词\nGuangdong Provincial City Football Super League (Yuechao) invitation poster design, aspect ratio 9:16; \n\nS-shaped flowing composition, the picture extends from bottom to top, a dynamic energy flow formed by the trajectory of football movement runs through the picture, the center is a glowing football, with dynamic trajectory and energy light effects;\n\nAlong the S-shaped motion line, integrate Guangdong city landmarks and cultural elements: Canton Tower, Shenzhen Ping An Finance Centre, Zhuhai Fisher Girl statue, Lingnan architecture and Foshan martial arts silhouettes, Zhongshan Sun Yat-sen cultural symbols, Chaoshan Yingge dance dynamic character outlines, Qingyuan landscape natural scenery, all elements adopt the integrated expression of \"line drawing + partial color blocks + blank space\", progressive layers, combination of distance and virtual-real;\n\nAdd abstract football player silhouettes, weaken character details, strengthen momentum and competitive atmosphere, the visual focus remains on the football;\n\nStyle: modern Guochao high-end poster, minimalist style but rich in design sense, high-end, clean, unified, integrating oriental aesthetics and modern sports vision;\n\nColor scheme: high saturation but restrained, Chinese red as the main visual, cyan-blue as auxiliary, gold embellished highlights, high contrast but not cluttered, with brand-level visual impact; \n\nTop center horizontal visual main title \"Guangdong Provincial City Football Super League\": medium font, Song typeface, center vertical text layout: \"Yuechao\", large font, handwritten calligraphy art font, \"Invitation\": medium font, Song typeface, vertical arrangement, large spacing, bottom center first row horizontal: \"April 25, 2026\", small font, Song typeface, second row: \"Guangzhou Yuexiushan Stadium\", small font, Song typeface, reserve text layout space;\n\nThe overall layout is balanced, has a high-end brand poster texture, extremely detailed, the composition is simple and clean, no cluttered elements, cinematic light and shadow, 8K resolution, high-end design sense. Integrate elegant cloud patterns and water wave patterns derived from traditional Chinese auspicious clouds, floating light effect particles, full of dynamics and vitality.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-summer-citrus-soda-ad",
    "title": "夏日柑橘苏打高转化广告图",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "苏打水",
      "夏日感",
      "商品图"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/old_pgmrs_will/status/2045852114673635507",
    "recommendedSize": "3:4",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776656861987-5gb9o03c-1776656864574-1.jpeg",
    "imageAlt": "夏日柑橘苏打高转化广告图示例图",
    "prompt": "中文提示词\n图像生成: 商品广告照片, 适合夏天的季节商品, 碳酸饮料, 名称=\"夏柑SODA\", 形状=PET瓶500ml, 研究2025年作为饮料广告的高CTA设计后设计并生成图像规格, 宽高比3:4\n\n英文提示词\nImage generation: Product advertising photo, Seasonal product suitable for summer, Carbonated beverage, Name=\"Summer Citrus SODA\", Shape=500ml PET bottle, Design and generate image specifications after researching high CTA design as a beverage advertisement in 2025, Aspect ratio 3:4",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-surreal-nebula-koi",
    "title": "星云巨鲤与小人的奇幻对话",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "超现实",
      "大锦鲤",
      "星云"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/liyue_ai/status/2045875219307655337",
    "recommendedSize": "9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776656794495-v4bzy0gp-1776656796788-1.jpeg",
    "imageAlt": "星云巨鲤与小人的奇幻对话示例图",
    "prompt": "中文提示词\n一幅超现实主义数字插画风格，采用低角度仰拍视角。画面描绘了一条巨型彩色锦鲤遨游在梦幻般的星云中，四周环绕着色彩鲜艳的星云与气泡。 \n画面中央还站着一个小人，背对观众，神情平静地仰望空中这条巨大的锦鲤，锦鲤头向下看着小人。 \n整体画面呈现出强烈的大小对比，氛围空灵又梦幻。比例9:16\n\n英文提示词\nA surrealist digital illustration style, adopting a low-angle upward perspective. The picture depicts a giant colorful koi swimming in a dreamy nebula, surrounded by colorful nebulae and bubbles. In the center of the picture stands a small figure, with their back to the audience, calmly looking up at this huge koi in the air, and the koi is looking down at the small figure. The overall picture presents a strong size contrast, and the atmosphere is ethereal and dreamy. Aspect ratio 9:16",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-key-character-relationship-map",
    "title": "关键人物关系图谱",
    "category": "图表与信息图",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "关系图",
      "人物图",
      "结构图"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/yihui_indie/status/2045179926270361890",
    "recommendedSize": "4:5 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776524925775-50l71kyc-1776524929755-1.jpeg",
    "imageAlt": "关键人物关系图谱示例图",
    "prompt": "以「关键人物关系图谱」为目标生成图像。\n\n核心提示词：中文提示词\n请你生成 《XXX》 的关键人物关系图。\n\n英文提示词\nPlease generate a key character relationship diagram for \"XXX\".\n\n输出比例：4:5 / 16:9。\n\n扩展要求：请把信息拆成清晰标题、分区、编号、标注、图例和短说明，保证中文或英文关键文字可读。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-jingdezhen-blue-white-porcelain-diagram",
    "title": "景德镇青花瓷全景解说图谱",
    "category": "图表与信息图",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "青花瓷",
      "景德镇",
      "图解"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/joshesye/status/2045764695827562686",
    "recommendedSize": "4:5 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776650445623-1hkmq7cf-1776650446602-1.jpeg",
    "imageAlt": "景德镇青花瓷全景解说图谱示例图",
    "prompt": "中文提示词\n为我生成景德镇青花瓷的详细解说图，配上详细的中文知识解析\n\n英文提示词\nGenerate a detailed explanatory diagram of Jingdezhen blue and white porcelain, accompanied by detailed Chinese knowledge analysis.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-beautiful-woman-thanking-brother-for-rocket",
    "title": "美女举牌感谢大哥打赏大火箭",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "直播间",
      "美女",
      "打赏"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/joshesye/status/2044796366950703316",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776650737490-r1l0q5yv-1776650738041-1.jpeg",
    "imageAlt": "美女举牌感谢大哥打赏大火箭示例图",
    "prompt": "中文提示词\n生成一个抖音直播的截图 ，一个美女在直播，美女手里拿着牌子，上面写着：谢谢行者大哥的大火箭！\n\n英文提示词\nGenerate a screenshot of a TikTok live stream, a beautiful woman is live streaming, the beautiful woman is holding a sign in her hand, on which it says: Thank you Brother Xingzhe for the big rocket!",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-yoga-pants-streamer-curves",
    "title": "瑜伽裤女主播展示身材曲线",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "直播",
      "瑜伽裤",
      "带货"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/joshesye/status/2044796366950703316",
    "recommendedSize": "9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776650729722-rd4rhkwl-1776650730307-1.jpeg",
    "imageAlt": "瑜伽裤女主播展示身材曲线示例图",
    "prompt": "中文提示词\n手机竖屏界面，短视频直播平台风格，一位年轻亚洲女主播在家中直播带货，主播穿着贴身瑜伽裤与简约上衣，身材曲线自然，正在侧身展示裤子的线条与弹性，动作自然不夸张；\n\n英文提示词\nMobile vertical screen interface, short video live streaming platform style, a young Asian female streamer selling goods through live streaming at home, the streamer is wearing tight yoga pants and a simple top, natural body curves, turning sideways to show the lines and elasticity of the pants, natural movements without exaggeration;",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-douyin-beautiful-streamer",
    "title": "抖音直播间的绝美女主播",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "直播",
      "美女",
      "截图"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/joshesye/status/2044796366950703316",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776650719212-3u93a518-1776650719811-1.jpeg",
    "imageAlt": "抖音直播间的绝美女主播示例图",
    "prompt": "中文提示词\n生成一个抖音直播的截图 里面是一个美女在直播\n\n英文提示词\nGenerate a screenshot of a Douyin livestream, inside there is a beautiful woman livestreaming",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-douyin-hanfu-livestream",
    "title": "抖音汉服美女直播带货截图",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "汉服",
      "直播",
      "抖音"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/joshesye/status/2044796366950703316",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776650724977-7cfjghe1-1776650726134-1.jpeg",
    "imageAlt": "抖音汉服美女直播带货截图示例图",
    "prompt": "中文提示词\n生成一个抖音直播的截图里面是一个穿着中国传统服饰的美女在直播卖货\n\n英文提示词\nGenerate a screenshot of a Douyin live stream, featuring a beautiful woman wearing traditional Chinese clothing selling goods during the live broadcast.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-gen-z-y2k-affordable-makeup-ad",
    "title": "Z世代Y2K平价美妆广告图",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "千禧风",
      "美妆",
      "Z世代"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/midori_tatsuta/status/2045378877363798279",
    "recommendedSize": "3:4",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776527271516-4go9vf4d-1776527284495-1.jpeg",
    "imageAlt": "Z世代Y2K平价美妆广告图示例图",
    "prompt": "中文提示词\n为Z世代设计的可爱Y2K风格的平价化妆品广告图像。使用鲜艳的配色，包括荧光色。纵横比为3:4。\n\n英文提示词\nCute Y2K style affordable cosmetics advertising image designed for Gen Z. Using vibrant color schemes, including neon colors. Aspect ratio is 3:4.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-japanese-trendy-ads",
    "title": "日式潮流广告四联画",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "日式广告",
      "潮流设计",
      "创意海报"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/midori_tatsuta/status/2045253072289767815",
    "recommendedSize": "1:1",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776527138994-7uc10dwo-1776527145970-1.jpeg",
    "imageAlt": "日式潮流广告四联画示例图",
    "prompt": "中文提示词\n生成四张虚构的日式广告图片，涵盖不同类型并排排列。采用专业设计师创作的潮流设计。宽高比为1:1\n\n英文提示词\nGenerate four fictional Japanese advertisement images, covering different types arranged side by side. Trendy design created by professional designers. Aspect ratio 1:1",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-film-poster-with-layered-montage",
    "title": "一张采用分层蒙太奇构图的电影海报",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/old_pgmrs_will/status/2045440101359198302",
    "recommendedSize": "16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776526972578-td0hm5vb-1776526980244-1.jpeg",
    "imageAlt": "一张采用分层蒙太奇构图的电影海报示例图",
    "prompt": "中文提示词\n“一张采用分层蒙太奇构图的电影海报。背景为日落时分的海滨小镇，平静的海面倒映着耀眼的日光眩光，薄雾笼罩的天空中有远处飞鸟，沿海公路旁立着电线杆剪影。左侧中景处，一位身着深灰色外套、留着深色卷发的中年男子站在混凝土海堤边，神情忧郁地低头凝视，被傍晚的阳光逆光勾勒轮廓。右侧前景主体为一张大幅特写年轻女子侧脸肖像，她望向右侧，身穿带白色条纹的深色水手校服，湿润的黑发贴在脸颊，柔和漫射光线下，一滴泪珠从她脸颊滑落。画面下方中央前景处，一只柴犬抬头朝右侧望去，红棕色毛发被温暖的轮廓光点亮。画面最底端为一条横向电影胶片，内含五幅独立矩形场景缩略图：女孩与柴犬在海滩、女孩骑车望向海面、女孩与男子坐在室内桌前、男子与女孩在海滩面对面站立、女孩拥抱柴犬的特写。画面叠加指定文字：左上角为深青绿色大号衬线字体标题《风间静语》，下方副标题为「—— 致那日的你 ——」；标题下方为小号深色衬线正文：“逝去之物，不复归来。然而，只要心灵稍稍相连，我们便能再度直面明日。” 画面右侧中部为深色衬线字体文字：“曾有一段时光，是你教会我如何生活。我永不会忘。” 左下角为大号白色文字：“10 月 31 日 周五 影院上映”。右下角为小号白色无衬线字体演职人员表：“主演：福波真子 / 桐嶋秀作 原作与剧本：柴野麻吕 导演：今仓七海 主题曲：SyVa《看得见海的地方》（Dogstar★唱片） 制作：《夕凪之尾》影视伙伴 制作公司：DABUSHIBANU-NU 发行：GOODSHIBALERS ©2026《夕凪之尾》影视伙伴”。\n分段提示词：\n图层索引：0\n片段：“背景为日落时分的海滨小镇，平静海面倒映耀眼日光眩光，薄雾天空中有远处飞鸟，沿海公路旁有电线杆剪影。”\n图层索引：1\n片段：“左侧中景处，身着深灰色外套、留深色卷发的中年男子站在混凝土海堤边，神情忧郁低头，被傍晚阳光逆光照射。”\n图层索引：2\n片段：“右侧前景主体为大幅特写年轻女子侧脸肖像，她望向右侧，身穿带白条纹的深色水手校服，湿润黑发贴脸，柔和漫射光下一滴泪珠滑落脸颊。”\n图层索引：3\n片段：“画面下方中央前景处，一只柴犬抬头望向右侧，红棕色毛发被温暖轮廓光点亮。”\n图层索引：4\n片段：“画面最底端为横向电影胶片，内含五幅独立矩形场景缩略图：女孩与柴犬在海滩、女孩骑车望向水面、女孩与男子坐在室内桌前、男子与女孩在海滩面对面、女孩拥抱柴犬特写。”\n图层索引：[5,6,7,8]\n片段：“画面叠加指定文字：左上角为深青绿色大号衬线字体《风间静语》，下方副标题「—— 致那日的你 ——」；其下小号深色衬线正文：“逝去之物，不复归来。然而，只要心灵稍稍相连，我们便能再度直面明日。” 右侧中部深色衬线文字：“曾有一段时光，是你教会我如何生活。我永不会忘。” 左下角大号白色文字：“10 月 31 日 周五 影院上映”。右下角小号白色无衬线字体演职信息：“主演：福波真子 / 桐嶋秀作 原作与剧本：柴野麻吕 导演：今仓七海 主题曲：SyVa《看得见海的地方》（Dogstar★唱片） 制作：《夕凪之尾》影视伙伴 制作公司：DABUSHIBANU-NU 发行：GOODSHIBALERS ©2026《夕凪之尾》影视伙伴”。\n负面提示词：\n“平光照明，无质感表面，对称构图，底部留白空荡，文字缺失，翻译文字，改写文字，3D 渲染，卡通风格，高对比生硬阴影，干涩头发，明亮欢快表情”\n\n英文提示词\nA cinematic movie poster utilizing a layered montage composition. In the background, a coastal town at sunset with calm ocean water reflecting a glowing sun glare, distant birds in a hazy sky, and the silhouette of utility poles along a coastal road. In the left midground, a middle-aged man with dark wavy hair in a dark grey jacket stands near a concrete sea wall, looking downward with a melancholic expression, backlit by the late afternoon sun. Dominating the right foreground is a large, closely cropped profile portrait of a young woman looking right; she wears a dark school sailor uniform with white stripes, has wet dark hair clinging to her face, and a single tear rolls down her cheek under soft, diffuse lighting. In the lower center foreground, a Shiba Inu dog looks upwards toward the right, its reddish-brown fur catching warm rim lighting. Along the very bottom edge is a horizontal film strip of five distinct rectangular scene thumbnails: a dog and girl on a beach, a girl on a bicycle looking at the water, a girl and man sitting at an indoor table, a man and girl standing facing each other on a beach, and a close-up of a girl hugging a Shiba Inu. Overlaid on the image is specific text. In the top left, large dark teal serif text reads 'The Quiet Between Winds' with a subtitle below reading '— To You, That Day —'. Below that, smaller dark serif body text reads 'What is lost will not return. And yet, when hearts connect, even just a little, we can face tomorrow again.'. On the mid-right side, dark serif text reads 'There was a time when you taught me how to live. I won't forget it.'. In the bottom left, large white text reads 'OCTOBER 31 FRI. IN THEATERS'. In the lower right corner, small white sans-serif credit text reads 'Starring: Mako Fukunami / Shusaku Kirimine Original Story & Screenplay: Shibano Maruo Director: Nanami Imakura Theme Song: SyVa \\\"Umi no Mieru de\\\" (Dogstar★RECORDS) Production: \\\"Yūnagi no Shippo\\\" Film Partners Production Company: DABUSHIBANU-NU Distribution: GOODSHIBALERS ©2026 \\\"Yūnagi no Shippo\\\" Film Partners'.\"\n  segmented:\n    - layer_index: 0\n      segment: \"In the background, a coastal town at sunset with calm ocean water reflecting a glowing sun glare, distant birds in a hazy sky, and the silhouette of utility poles along a coastal road.\"\n    - layer_index: 1\n      segment: \"In the left midground, a middle-aged man with dark wavy hair in a dark grey jacket stands near a concrete sea wall, looking downward with a melancholic expression, backlit by the late afternoon sun.\"\n    - layer_index: 2\n      segment: \"Dominating the right foreground is a large, closely cropped profile portrait of a young woman looking right; she wears a dark school sailor uniform with white stripes, has wet dark hair clinging to her face, and a single tear rolls down her cheek under soft, diffuse lighting.\"\n    - layer_index: 3\n      segment: \"In the lower center foreground, a Shiba Inu dog looks upwards toward the right, its reddish-brown fur catching warm rim lighting.\"\n    - layer_index: 4\n      segment: \"Along the very bottom edge is a horizontal film strip of five distinct rectangular scene thumbnails: a dog and girl on a beach, a girl on a bicycle looking at the water, a girl and man sitting at an indoor table, a man and girl standing facing each other on a beach, and a close-up of a girl hugging a Shiba Inu.\"\n    - layer_indices: [5, 6, 7, 8]\n      segment: \"Overlaid on the image is specific text. In the top left, large dark teal serif text reads 'The Quiet Between Winds' with a subtitle below reading '— To You, That Day —'. Below that, smaller dark serif body text reads 'What is lost will not return. And yet, when hearts connect, even just a little, we can face tomorrow again.'. On the mid-right side, dark serif text reads 'There was a time when you taught me how to live. I won't forget it.'. In the bottom left, large white text reads 'OCTOBER 31 FRI. IN THEATERS'. In the lower right corner, small white sans-serif credit text reads 'Starring: Mako Fukunami / Shusaku Kirimine Original Story & Screenplay: Shibano Maruo Director: Nanami Imakura Theme Song: SyVa \\\"Umi no Mieru de\\\" (Dogstar★RECORDS) Production: \\\"Yūnagi no Shippo\\\" Film Partners Production Company: DABUSHIBANU-NU Distribution: GOODSHIBALERS ©2026 \\\"Yūnagi no Shippo\\\" Film Partners'.\"\n\nnegative: \"flat lighting, untextured surfaces, symmetrical composition, empty bottom margin, missing text, translated text, paraphrased text, 3D render, cartoon, high-contrast harsh shadows, dry hair, bright cheerful expressions",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-graffiti-sketch-ai-builder-master",
    "title": "涂鸦速写风AI建造者大师",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "涂鸦风",
      "手绘稿",
      "干刷感"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://opennana.com/awesome-prompt-gallery/graffiti-sketch-ai-builder-master",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776647559544-xrha4n2w-1776647560359-1.jpg",
    "imageAlt": "涂鸦速写风AI建造者大师示例图",
    "prompt": "中文提示词\n以涂鸦速写风表现【一个厉害的AI builder】，整体呈现快速勾勒、自由变形、即兴手绘与草稿式的视觉效果。线条随手、夸张、可粗细不一，略显凌乱但具有节奏和表现力，强调概括、夸张、趣味和随性，而不是严谨写实或精细刻画。  颜色采用粗糙、干刷感明显的块面表现，可保留不均匀的涂抹痕迹、刷痕、飞白与覆盖感，色彩根据【主题/主体】自动适配，但整体保持涂鸦式、速写式、概括式的表达。不要透明水彩晕染效果，不要细腻水彩过渡，不要纸纹理，不要柔和雾化，不要梦幻质感。  背景以留白为主，保持简洁、轻松、未完成感和设计感，可加入少量辅助性符号、箭头、记号、圈画、重复线、随手写的文字或其他涂鸦元素，以增强速写本或随笔式视觉语言，但不可过于拥挤，不可破坏主体和留白气质。  画面内容不需要预先写清楚，由【一个厉害的AI builder】自动推演并生成最适合的主体形象、动作、相关元素、符号或简化场景，整体保持统一的涂鸦速写风和夸张概括的表现方式，避免复杂写实背景和过度铺陈。 画面中需自然加入专属签名\"BlanPlan\"，作为画面的一部分，位置低调但清晰，可放在左下角、右下角或标题附近，风格需与整体版式统一，像作品署名或设计落款；签名字体精致、克制、高级，不可过大，不可破坏主体构图，不可显得突兀或廉价。\n\n英文提示词\nExpress [an awesome AI builder] in a graffiti sketch style, overall presenting a visual effect of quick sketching, free deformation, impromptu hand-drawing and draft-like. The lines are casual, exaggerated, and can vary in thickness, slightly messy but with rhythm and expressiveness, emphasizing summarization, exaggeration, fun and casualness, rather than rigorous realism or fine depiction. The colors use rough blocks with obvious dry brush feel, retaining uneven smearing traces, brush strokes, flying white and covering feel, the colors automatically adapt according to [theme/subject], but overall maintain a graffiti-style, sketch-style, and summarized expression. Do not use transparent watercolor smudging effects, do not use delicate watercolor transitions, do not use paper texture, do not use soft atomization, do not use dreamy texture. The background is mainly blank, keeping it simple, relaxed, unfinished and designed, can add a small amount of auxiliary symbols, arrows, marks, circled drawings, repeated lines, casually written text or other graffiti elements, to enhance the sketchbook or essay-style visual language, but it must not be too crowded, and must not destroy the subject and blank temperament. The picture content does not need to be written clearly in advance; [an awesome AI builder] automatically deduces and generates the most suitable subject image, movements, related elements, symbols or simplified scenes, overall maintaining a unified graffiti sketch style and exaggerated summarized expression method, avoiding complex realistic backgrounds and excessive padding. The exclusive signature \"BlanPlan\" needs to be naturally added into the picture as a part of the picture, the position is low-key but clear, can be placed in the bottom left corner, bottom right corner or near the title, the style needs to be unified with the overall layout, like an artwork signature or design sign-off; the signature font is exquisite, restrained, and high-end, must not be too large, must not destroy the subject composition, must not appear abrupt or cheap.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-zhujiang-new-town-paper-cut-night",
    "title": "珠江新城剪纸璀璨夜景",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "纸雕",
      "城景",
      "广州塔"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/liyue_ai/status/2045527750606487877",
    "recommendedSize": "1:1",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776648055004-203e9jn1-1776648055894-1.jpg",
    "imageAlt": "珠江新城剪纸璀璨夜景示例图",
    "prompt": "中文提示词\n以珠江新城现代都市景观为灵感的剪纸艺术，通过精巧的镂空手法在一整幅纸上，立体刻画广州塔、东西双塔等地标建筑与繁华城景。\n所有建筑与元素均以流畅的线条与结构相连，无孤立部分，构成一幅完整的都市画卷。\n画面采用金属箔或光泽纸材质，表面带有细腻的明暗光泽，在光照下呈现柔和的高光与阴影，仿佛被城市灯光轻轻照亮。\n背景以虚化的珠江新城天际线为衬，点缀隐约可见的花城广场与树木轮廓，整体透出现代浪漫的氛围。\n作品中巧妙融入轻盈的蒲公英绒毛或星光般的动态光点，象征梦想与活力在这座新城中飘散飞扬。整体呈现8K超高清视觉，细节丰富，真实而富有艺术感染力。\n\n英文提示词\nPaper-cut art inspired by the modern urban landscape of Zhujiang New Town, through exquisite hollow-carving techniques on a single sheet of paper, three-dimensionally depicting landmark buildings such as Canton Tower, East and West Twin Towers, and the bustling cityscape. All buildings and elements are connected by smooth lines and structures, with no isolated parts, forming a complete urban scroll. The picture uses metallic foil or glossy paper material, with delicate light and dark gloss on the surface, presenting soft highlights and shadows under illumination, as if gently illuminated by city lights. The background is set against a blurred Zhujiang New Town skyline, dotted with faintly visible outlines of Huacheng Square and trees, overall revealing a modern romantic atmosphere. The work cleverly integrates light dandelion fluff or starlight-like dynamic light points, symbolizing dreams and vitality fluttering and flying in this new city. The overall presents 8K ultra-high-definition vision, rich in details, realistic and full of artistic appeal.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-tiktok-beauty-live-interface",
    "title": "抖音美女直播间界面设计",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "抖音",
      "直播",
      "美女"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/msjiaozhu/status/2045470160576999812",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776525372786-z3yu2f3w-1776525381382-1.jpeg",
    "imageAlt": "抖音美女直播间界面设计示例图",
    "prompt": "中文提示词\n生成抖音直播间界面，内容是一个美女在直播\n\n英文提示词\nGenerate a TikTok live stream interface, the content is a beautiful woman live streaming",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-ming-dynasty-baoyu-tweet",
    "title": "明朝登基宝玉的推文页面",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "穿越者",
      "大明朝",
      "新帝"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/tuzi_ai/status/2045193918736736365",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776525706488-cqvbcfn0-1776525713548-1.jpeg",
    "imageAlt": "明朝登基宝玉的推文页面示例图",
    "prompt": "中文提示词\n创建一个宝玉（查阅 https://x.com/dotey 这个推主的主页及部分推文）穿越到明朝，登基之后依据其业务/个性，绘制的其新的X帖子页面。\n\n英文提示词\nCreate a new X post page illustrated for Baoyu (refer to the homepage and some posts of this Twitter user at https://x.com/dotey) after time-traveling to the Ming Dynasty and ascending the throne, based on his business/personality.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-focusing-on-ai-campus-daily",
    "title": "聚焦人工智能的校园日报",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "校园报",
      "学AI",
      "黑科技"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/MrLarus/status/2044824800909054181",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776525517075-n2mzyfzh-1776525526017-1.jpeg",
    "imageAlt": "聚焦人工智能的校园日报示例图",
    "prompt": "以「聚焦人工智能的校园日报」为目标生成图像。\n\n核心提示词：中文提示词\n生成一张校园日报，主题AI教育\n\n英文提示词\nGenerate a campus daily newspaper, theme AI education\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-exquisite-teochew-menu",
    "title": "精美潮汕菜馆菜单图",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "潮菜",
      "菜单",
      "美食"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/MrLarus/status/2044824800909054181",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776525522661-g3vics4w-1776525543539-1.jpeg",
    "imageAlt": "精美潮汕菜馆菜单图示例图",
    "prompt": "以「精美潮汕菜馆菜单图」为目标生成图像。\n\n核心提示词：中文提示词\n生成一张潮菜馆菜单图\n\n英文提示词\nGenerate a Teochew restaurant menu image.\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-retro-traditional-almanac-2026",
    "title": "复古传统老黄历二零二六年四月十八",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "老黄历",
      "复古风",
      "传统"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/MrLarus/status/2044824800909054181",
    "recommendedSize": "4:5 / 9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776525531952-le3fnwzg-1776525557920-1.jpeg",
    "imageAlt": "复古传统老黄历二零二六年四月十八示例图",
    "prompt": "以「复古传统老黄历二零二六年四月十八」为目标生成图像。\n\n核心提示词：中文提示词\n生成一张2026年4月18日的老黄历\n\n英文提示词\nGenerate an old almanac for April 18, 2026\n\n输出比例：4:5 / 9:16。\n\n扩展要求：请强化标题、副标题、视觉主体、留白、字体层级和版面节奏，做成完成度高的海报或封面。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-handwritten-recipe-to-magazine-spread",
    "title": "手写食谱变身杂志级跨页",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "杂志风",
      "烹饪书",
      "食谱页"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/maxescu/status/2045203839910056014",
    "recommendedSize": "4:5 / 9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776525912966-b9ho61su-1776525929746-1.jpeg",
    "imageAlt": "手写食谱变身杂志级跨页示例图",
    "prompt": "中文提示词\n手写食谱 → 专业食谱页面 上传一份凌乱的手写家庭食谱；模型会搜索准确的现代计量/营养信息，然后生成一份精致的杂志风格双页跨页，包含分步平铺图、完美的食材标签和卡路里分解。\n\n[INSERT_RECIPE_LINK]\n\n英文提示词\nHandwritten Recipe → Professional Cookbook Page Upload a messy handwritten family recipe; the model searches for accurate modern measurements/nutrition, then generates a polished, magazine-style double-page spread with step-by-step flat lays, perfect ingredient labels, and calorie breakdowns.\n\n[INSERT_RECIPE_LINK]",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-minimalist-blank-graffiti-draft",
    "title": "极简留白涂鸦手绘草图",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "涂鸦风",
      "速写本",
      "干刷感"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/VoxcatAI/status/2045131503001342302",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776525007722-xxynjreb-1776525014773-1.jpeg",
    "imageAlt": "极简留白涂鸦手绘草图示例图",
    "prompt": "中文提示词\n以涂鸦速写风表现【主题/主体】，整体呈现快速勾勒、自由变形、即兴手绘与草稿式的视觉效果。线条随手、夸张、可粗细不一，略显凌乱但具有节奏和表现力，强调概括、夸张、趣味和随性，而不是严谨写实或精细刻画。\n\n颜色采用粗糙、干刷感明显的块面表现，可保留不均匀的涂抹痕迹、刷痕、飞白与覆盖感，色彩根据【主题/主体】自动适配，但整体保持涂鸦式、速写式、概括式的表达。不要透明水彩晕染效果，不要细腻水彩过渡，不要纸纹理，不要柔和雾化，不要梦幻质感。\n\n背景以留白为主，保持简洁、轻松、未完成感和设计感，可加入少量辅助性符号、箭头、记号、圈画、重复线、随手写的文字或其他涂鸦元素，以增强速写本或随笔式视觉语言，但不可过于拥挤，不可破坏主体和留白气质。\n\n画面内容不需要预先写清楚，由【主题/主体】自动推演并生成最适合的主体形象、动作、相关元素、符号或简化场景，整体保持统一的涂鸦速写风和夸张概括的表现方式，避免复杂写实背景和过度铺陈。\n画面中需自然加入专属签名“voxcat”，作为画面的一部分，位置低调但清晰，可放在左下角、右下角或标题附近，风格需与整体版式统一，像作品署名或设计落款；签名字体精致、克制、高级，不可过大，不可破坏主体构图，不可显得突兀或廉价。\n\n英文提示词\nExpress [Subject/Theme] in a graffiti sketch style, presenting an overall visual effect of quick outlining, free deformation, impromptu hand-drawing, and draft-like appearance. The lines are casual, exaggerated, and can vary in thickness, slightly messy but rhythmic and expressive, emphasizing generalization, exaggeration, playfulness, and spontaneity, rather than rigorous realism or detailed rendering. Colors are expressed in rough blocks with a distinct dry-brush feel, retaining uneven smearing traces, brush strokes, dry-brush effects, and a sense of coverage. Colors automatically adapt to [Subject/Theme], but the overall expression remains graffiti-style, sketch-style, and generalized. Do not use transparent watercolor blooming effects, do not use delicate watercolor transitions, do not use paper textures, do not use soft atomization, and do not use dreamy textures. The background is mainly left blank, maintaining a sense of simplicity, relaxation, incompleteness, and design. A small number of auxiliary symbols, arrows, marks, circled areas, repeated lines, casually written text, or other graffiti elements can be added to enhance the visual language of a sketchbook or jotting style, but it must not be too crowded, and must not destroy the subject and the blank space temperament. The image content does not need to be written out in advance; the most suitable subject image, actions, related elements, symbols, or simplified scenes are automatically deduced and generated by [Subject/Theme], keeping the overall unified graffiti sketch style and exaggerated generalized expression, avoiding complex realistic backgrounds and over-elaboration. The exclusive signature \"voxcat\" needs to be naturally added to the image as a part of the picture. The position should be low-key but clear, and can be placed in the bottom left corner, bottom right corner, or near the title. The style must be consistent with the overall layout, like an artwork signature or a design sign-off; the signature font should be exquisite, restrained, and high-end, must not be too large, must not destroy the subject composition, and must not appear abrupt or cheap.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-master-mechanical-keyboard-design",
    "title": "九位大师的机械键盘设计图鉴",
    "category": "图表与信息图",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "九宫格",
      "键盘",
      "设计师"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/TanShilong/status/2045148649869692982",
    "recommendedSize": "4:5 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776525330845-cnps5dwe-1776525345767-1.jpeg",
    "imageAlt": "九位大师的机械键盘设计图鉴示例图",
    "prompt": "中文提示词\n一个九宫格图片，展现九位当代知名设计师设计的同一组物体：机械键盘，包括设计师头像，设计师对于设计的中文文字解读和作品呈现。排版统一规则\n\n英文提示词\nA nine-grid image showing the same group of objects designed by nine contemporary famous designers: mechanical keyboards, including designer avatars, designers' Chinese text interpretations of the designs, and artwork presentations. Unified layout rules",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-pep-third-grade-chinese-textbook",
    "title": "人教版三年级语文课本内页",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "语文书",
      "人教版",
      "小学"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/MrLarus/status/2044824800909054181",
    "recommendedSize": "4:5 / 1:1",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776525527475-fn5igqe2-1776525549682-1.jpeg",
    "imageAlt": "人教版三年级语文课本内页示例图",
    "prompt": "中文提示词\n生成人教版小学三年级语文课本的一页\n\n英文提示词\nGenerate a page from the PEP (People's Education Press) primary school third-grade Chinese textbook",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-neon-qiongqi-chinese-painting",
    "title": "荧光蓝穷奇新中式山水画",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "新中式",
      "穷奇",
      "禅意"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/liyue_ai/status/2045506567735558336",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776525754418-004mf9wu-1776525769834-1.jpeg",
    "imageAlt": "荧光蓝穷奇新中式山水画示例图",
    "prompt": "中文提示词\n极简主义，新中式风格立体图形设计，图像下端有楷体中国文字：“东方美学”，“2026/04/18”，署名 “CHINA”，和“\n@LIYUE\n\"；\n平整纯白色的亚光质感厚艺术纸上绘充满东方诗意氛围的山水创意画，不规则的撕纸效果；\n中国的神兽：穷奇，身形图案完整，美轮美奂，，线条柔美灵动,眼睛炯炯有神，威严的神态，优雅的姿势，奢华装饰艺术，中国传统纹饰；\n荧光蓝色线条，0.5mm极细金色金属质感勾边，泼白墨大笔触，色彩渲染，红底，蓝色的浪漫诗意视觉；\n冷暖光交织的梦幻唯美场景，强烈的光影对比氛围，花轻舞的时光叙事，东风禅意，画面有大面积留白，框架构图，底部留白，细节清晰。\n\n英文提示词\nMinimalism, Neo-Chinese style three-dimensional graphic design, at the bottom of the image there are Chinese characters in regular script: \"东方美学\", \"2026/04/18\", signature \"CHINA\", and \"\n@LIYUE\n\";\nDrawn on flat, pure white matte textured thick art paper, a creative landscape painting full of oriental poetic atmosphere, irregular torn paper effect;\nChinese mythical beast: Qiongqi, complete body pattern, magnificent,, soft and agile lines, bright piercing eyes, majestic demeanor, elegant posture, luxury decorative art, Chinese traditional patterns;\nFluorescent blue lines, 0.5mm ultra-fine gold metallic texture outlining, large strokes of splashed white ink, color rendering, red background, romantic and poetic blue vision;\nDreamy and aesthetic scene where cold and warm lights intertwine, strong light and shadow contrast atmosphere, time narrative of flowers dancing lightly, Oriental Zen, the picture has a large area of blank space, framework composition, blank space at the bottom, clear details.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-douyin-livestream-screenshot",
    "title": "抖音直播截图画面",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "直播间",
      "举牌子",
      "截图感"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/_FORAB/status/2044744023261519920",
    "recommendedSize": "9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202604/1776408209788-c38fkved-1776408211178-1.jpeg",
    "imageAlt": "抖音直播截图画面示例图",
    "prompt": "中文提示词\n9:16 的图片比例，生成一张抖音直播的截图，里面是 xxx 在直播，xxx 手里拿着牌子，牌子里写着 xxxx。\n\n英文提示词\n9:16 aspect ratio, generate a screenshot of a Douyin live stream, inside is xxx live streaming, xxx is holding a sign in their hand, the sign says xxxx.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-creative-leaf-collage-portrait",
    "title": "创意树叶拼贴构成的角色画像",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "树叶",
      "拼贴",
      "植物"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/meng_dagg695/status/2032019839070716170",
    "recommendedSize": "4:5 / 1:1",
    "imageUrl": "https://img.opennana.com/prompts/assets/202603/1773331399608-8r3h8k10-1.jpeg",
    "imageAlt": "创意树叶拼贴构成的角色画像示例图",
    "prompt": "中文提示词\n{ 角色名称 } 完全由天然树叶制成，创意树叶拼贴艺术，分层绿叶和干叶构成身体、面部和衣服，可见叶脉和纹理，手工植物艺术风格，干净的白色背景，俯视平铺构图，高度细节，柔和自然光，逼真树叶纹理，8k\n\n英文提示词\n{\n  CHARACTER NAME\n} made entirely from natural leaves,\ncreative leaf collage art,\nlayered green and dry leaves forming body,\nface and clothes,\nvisible leaf veins and textures,\nhandcrafted botanical art style,\nclean white background,\ntop-down flat lay composition,\nhighly detailed,\nsoft natural lighting,\nrealistic leaf textures,\n8k",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-snack-brand-technical-breakdown",
    "title": "零食品牌技术分解图",
    "category": "图表与信息图",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "技术绘图",
      "食品工程",
      "产品展示"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/TechieBySA/status/2031795709243019280",
    "recommendedSize": "4:5 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202603/1773332307174-dnudjvn7-1.jpeg",
    "imageAlt": "零食品牌技术分解图示例图",
    "prompt": "中文提示词\n创建一个 [SNACK] 的品牌技术信息图，结合产品的真实照片或照片级真实渲染，并将技术注释覆盖层直接置于其上。在纯白摄影棚背景上使用带有策略性 [BRAND COLOR] 点缀的黑色墨水风格线条画（建筑草图外观），包括：\n• 关键组件标签\n• 显示结构、分层或内部设计的内部截面图\n• 测量数据、尺寸和规格\n• 带有成分和数量的材料标注\n• 指示主要功能和结构完整性的箭头\n• 显示关键机械或设计元素的简单示意图或剖面图\n• 可持续性标注\n标题位置：位于手绘技术注释框内，带有强调色边框，粗体字显示产品名称，置于上角。\n风格与布局规则：\n• 真实产品保持清晰可见\n• 注释具有素描感、技术感和建筑感\n• 强调色用于高光（占线条工作的 20-30%），黑色用于主要技术线条（70-80%）\n• 构图整洁，负空间平衡\n• 具有教育意义、食品工程氛围和高端品牌感\n• 在角落包含微妙的品牌标志\n视觉风格：极简技术插画美学，黑色线条在真实图像上带有点缀，精确但略带手绘感。\n调色板：白色背景，黑色注释线/文本，[BRAND COLOR] 仅用于点缀和关键标注。\n输出：1080×1080，超清晰，社交媒体动态优化，无水印。\n\n英文提示词\nCreate a branded technical infographic of a [SNACK], combining a realistic photograph or photoreal render of the product with technical annotation overlays placed directly on top. Use black ink–style line drawings with strategic [BRAND COLOR] accents (architectural sketch look) on a pure white studio background, including:\n• Key component labels\n• Internal cross-section showing structure, layering, or internal design\n• Measurements, dimensions, and specifications\n• Material callouts with composition and quantities\n• Arrows indicating function for primary features and structural integrity\n• Simple schematic or sectional diagram showing key mechanical or design elements\n• Sustainability callouts\nTitle placement: Inside a hand-drawn technical annotation box with accent border reading the product name in bold font, positioned in upper corner.\nStyle & layout rules:\n• The realistic product remains clearly visible\n• Annotations feel sketched, technical, and architectural\n• Accents used for highlight (20-30% of linework), black for primary technical lines (70-80%)\n• Clean composition with balanced negative space\n• Educational, food-engineering vibe with premium branding\n• Include subtle brand logo mark in corner\nVisual style: Minimal technical illustration aesthetic, black linework with accents over realistic imagery, precise but slightly hand-drawn feel.\nColor palette: White background, black annotation lines/text, [BRAND COLOR] for accents and key callouts only.\nOutput: 1080×1080, ultra-crisp, social-feed optimized, no watermark.​​​​​​​​​​​​​​​​",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-lavender-sunrise-dreamy-triptych",
    "title": "晨曦薰衣草田梦幻少女三联画",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "薰衣草",
      "三联画",
      "唯美"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/Naiknelofar788/status/2028417667846341062",
    "recommendedSize": "16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202603/1772465342699-yfqywm1b-1.jpeg",
    "imageAlt": "晨曦薰衣草田梦幻少女三联画示例图",
    "prompt": "中文提示词\n日出时分薰衣草田中女子的水平三联画。\n上部：半身像，闭着眼睛，淡紫色连衣裙，一只手放在头发里，模糊的薰衣草前景。\n中部：特写镜头，看着镜头，蓬乱的头发，薄纱围巾，脸上的阳光。\n下部：四分之三镜头，手持薰衣草花束，飘逸的裙子，柔和的粉彩天空，温暖的梦幻色调。\n\n英文提示词\nHorizontal triptych of a woman in a lavender field at sunrise.\nTop: Waist-up, eyes closed, pale lilac dress, one hand in hair, blurred lavender foreground.\nMiddle: Close-up, looking at camera, tousled hair, sheer scarf, sunlight on face.\nBottom: Three-quarter shot, holding lavender bouquet, flowing skirt, soft pastel sky, warm dreamy tones.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-vibrant-neon-soda-splash-poster",
    "title": "鲜艳霓虹光影下的动感苏打水飞溅商业海报",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "商业摄影",
      "动感飞溅",
      "饮料海报"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/Fujimoto_hina/status/2028388808320819277",
    "recommendedSize": "3:4",
    "imageUrl": "https://img.opennana.com/prompts/assets/202603/1772464721838-fpheu1wo-1.jpeg",
    "imageAlt": "鲜艳霓虹光影下的动感苏打水飞溅商业海报示例图",
    "prompt": "中文提示词\n{\n  \"prompt\": \"一个充满活力的高端广告构图中的三个超动态苏打水罐 —— 一罐热带冲刺苏打水伴随着戏剧性的水和热带水果飞溅而爆炸，鲜艳的橙色和粉色背景光；一罐柠檬冰爽苏打水在发光的绿色动态光背景下被冷水泼溅；两罐都覆盖着逼真的冷凝水和运动模糊的水滴，充满果味和清爽的能量。深橙色、粉色和霓虹绿灯光在大胆的演播室布置中融合。由使用佳能 50mm 镜头的专业摄影师拍摄，超写实纹理，清晰的细节，超高分辨率，明亮的商业海报美学，丰富的色彩鲜艳度，电影级飞溅效果 --ar 3:4\"\n}\n\n英文提示词\n{\n  \"prompt\": \"Three ultra-dynamic soda cans in one vibrant high-end advertising composition — a can of TROPICAL RUSH exploding with dramatic water and tropical fruit splash, vibrant orange and pink background lighting; a can of LEMON ICED splashed with cold water against a glowing green dynamic light background; both cans covered in realistic condensation and motion-blurred droplets, bursting with fruity, refreshing energy. Deep orange, pink, and neon green lighting blend together in a bold studio setup. Captured by a professional photographer using a Canon 50mm lens, hyper-realistic textures, crisp details, ultra high resolution, bright commercial poster aesthetic, rich color vibrancy, cinematic splash effects --ar 3:4\"\n}",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-dreamy-blue-purple-nubella-skincare",
    "title": "梦幻蓝紫烟雾环绕的NUBELLA奢华护肤软管",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "护肤品",
      "商业摄影",
      "蓝紫调"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/Fujimoto_hina/status/2027903683154088431",
    "recommendedSize": "9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202603/1772382710956-097tb10d-1.jpeg",
    "imageAlt": "梦幻蓝紫烟雾环绕的NUBELLA奢华护肤软管示例图",
    "prompt": "中文提示词\n{\n  \"style\": \"超写实奢华化妆品产品摄影\",\n  \"composition\": {\n    \"color_scheme\": \"戏剧性的单色蓝紫色\",\n    \"resolution\": \"8K超高分辨率\",\n    \"depth\": \"电影级景深\",\n    \"aesthetic\": \"高端香氛护肤品广告风格\"\n  },\n  \"product\": {\n    \"type\": \"软管包装\",\n    \"finish\": \"缎面质感\",\n    \"color\": \"长春花蓝\",\n    \"label\": \"NUBELLA\",\n    \"typography\": \"优雅的银色字体\",\n    \"cap\": \"反光金属铬盖\",\n    \"position\": \"垂直居中\"\n  },\n  \"surroundings\": {\n    \"smoke\": {\n      \"type\": \"墨水般的旋涡云雾\",\n      \"colors\": [\n        \"薰衣草色\",\n        \"靛蓝色\",\n        \"冰蓝色\"\n      ],\n      \"texture\": \"柔软、翻腾\",\n      \"interaction\": \"环绕在产品周围\"\n    },\n    \"flowers\": {\n      \"primary\": [\n        {\n          \"color\": \"紫色\",\n          \"details\": \"错综复杂的花瓣细节\",\n          \"center\": \"鲜艳的黄色\"\n        },\n        {\n          \"color\": \"紫丁香色\",\n          \"details\": \"错综复杂的花瓣细节\",\n          \"center\": \"鲜艳的黄色\"\n        }\n      ],\n      \"secondary\": {\n        \"type\": \"细小的紫罗兰色花朵\",\n        \"purpose\": \"增加立体感\"\n      }\n    }\n  },\n  \"lighting\": {\n    \"direction\": \"来自左上方的柔和定向照明\",\n    \"effects\": [\n      \"突显软管的光滑曲度\",\n      \"为金属盖增添微妙的光泽\",\n      \"在烟雾中营造深度\"\n    ]\n  },\n  \"background\": {\n    \"blend\": \"无缝的冷色调蓝色和紫色调\",\n    \"enhancement\": \"空灵的花香美学\"\n  },\n  \"details\": \"花瓣和蒸汽的超精细纹理\"\n}\n\n英文提示词\n{\n  \"style\": \"Ultra-realistic luxury cosmetic product photography\",\n  \"composition\": {\n    \"color_scheme\": \"Dramatic monochromatic blue-violet\",\n    \"resolution\": \"8K ultra-high resolution\",\n    \"depth\": \"Cinematic depth\",\n    \"aesthetic\": \"High-end perfumed skincare advertising style\"\n  },\n  \"product\": {\n    \"type\": \"Squeeze tube\",\n    \"finish\": \"Satin-finish\",\n    \"color\": \"Periwinkle-blue\",\n    \"label\": \"NUBELLA\",\n    \"typography\": \"Elegant silver\",\n    \"cap\": \"Reflective metallic chrome\",\n    \"position\": \"Vertically centered\"\n  },\n  \"surroundings\": {\n    \"smoke\": {\n      \"type\": \"Ink-like swirling clouds\",\n      \"colors\": [\n        \"Lavender\",\n        \"Indigo\",\n        \"Icy blue\"\n      ],\n      \"texture\": \"Soft, billowing\",\n      \"interaction\": \"Wrapping around the product\"\n    },\n    \"flowers\": {\n      \"primary\": [\n        {\n          \"color\": \"Purple\",\n          \"details\": \"Intricate petal details\",\n          \"center\": \"Vibrant yellow\"\n        },\n        {\n          \"color\": \"Lilac\",\n          \"details\": \"Intricate petal details\",\n          \"center\": \"Vibrant yellow\"\n        }\n      ],\n      \"secondary\": {\n        \"type\": \"Tiny violet blossoms\",\n        \"purpose\": \"Added dimension\"\n      }\n    }\n  },\n  \"lighting\": {\n    \"direction\": \"Soft directional lighting from upper left\",\n    \"effects\": [\n      \"Highlights smooth curvature of the tube\",\n      \"Adds subtle sheen to metallic cap\",\n      \"Creates depth within smoke plumes\"\n    ]\n  },\n  \"background\": {\n    \"blend\": \"Seamless cool blue and purple tones\",\n    \"enhancement\": \"Ethereal floral fragrance aesthetic\"\n  },\n  \"details\": \"Hyper-detailed textures of petals and vapor\"\n}",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-red-blue-light-future-city-double-exposure-youth",
    "title": "红蓝光影下的未来都市双重曝光青年",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "双重曝光",
      "电影质感",
      "未来都市"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/Fujimoto_hina/status/2028045894088630679",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202603/1772374518725-5xe5pxb9-1.jpeg",
    "imageAlt": "红蓝光影下的未来都市双重曝光青年示例图",
    "prompt": "中文提示词\n{\n  \"prompt\": \"一位年轻男子的超写实电影级双重曝光侧脸肖像，表情专注强烈，皮肤纹理细节丰富，眼神锐利。他的面部与从剪影中浮现的未来主义城市天际线无缝融合，摩天大楼和城市建筑构成了他的颈部和下颌线。深蓝色和鲜艳红色的强烈对比，象征着冲突与力量。抽象的数字划痕、碎裂的玻璃纹理和漏光效果覆盖在面部，营造出戏剧性的效果。干净的白色背景，超精细的灯光，专业电影海报风格，高对比度，清晰聚焦，8K分辨率，逼真的发丝，社论海报构图，现代平面设计美学，戏剧性的氛围，超高清，照片级真实。\",\n  \"negative_prompt\": \"模糊，低分辨率，扭曲的面部，多余的肢体，过饱和的颜色，嘈杂的背景，平淡的灯光，卡通化，低细节\",\n  \"resolution\": \"8K\",\n  \"style\": \"电影感，双重曝光，照片级真实感，社论海报\",\n  \"background\": \"干净的白色\",\n  \"lighting\": \"高对比度，戏剧性的蓝红分割布光\"\n}\n\n英文提示词\n{\n  \"prompt\": \"A hyper-realistic cinematic double exposure portrait of a young man in side profile, intense focused expression, detailed skin texture and sharp eyes. His face seamlessly blended with a futuristic city skyline emerging from his silhouette, skyscrapers and urban buildings forming his neck and jawline. Strong contrast of deep blue and vibrant red tones symbolizing conflict and power. Abstract digital scratches, fractured glass textures, and light leaks overlaying the face for a dramatic effect. Clean white background, ultra-detailed lighting, professional movie poster style, high contrast, sharp focus, 8K resolution, realistic hair strands, editorial poster composition, modern graphic design aesthetics, dramatic mood, ultra-HD, photorealistic.\",\n  \"negative_prompt\": \"blurry, low resolution, distorted face, extra limbs, oversaturated colors, noisy background, flat lighting, cartoonish, low detail\",\n  \"resolution\": \"8K\",\n  \"style\": \"cinematic, double exposure, photorealistic, editorial poster\",\n  \"background\": \"clean white\",\n  \"lighting\": \"high contrast, dramatic blue and red split lighting\"\n}",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-fierce-girl-in-spinosaurus-jaws",
    "title": "棘龙巨口中的酷飒少女与史前奇观",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "棘龙",
      "史前",
      "少女"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/MrDasOnX/status/2028087254757867560",
    "recommendedSize": "9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202603/1772373599949-45krpuqa-1.jpeg",
    "imageAlt": "棘龙巨口中的酷飒少女与史前奇观示例图",
    "prompt": "中文提示词\n超写实电影级奇幻场景，设定在郁郁葱葱的史前丛林山谷中。一只巨大的棘龙站在浅河边，它那长而类似鳄鱼的巨颚张得很大。一位年轻女子平静地坐在恐龙张开的嘴里，完美居中，双腿微微向前悬挂。她有一头深色直发，表情镇定无畏，皮肤纹理逼真。她身穿合身的黑色长袖短款上衣，蓝色牛仔短裤和黑色及膝战术靴。衣服和腿上可见微小的血迹和轻微划痕，增加了戏剧性的紧张感但并不血腥。她怀里温柔地抱着一只小恐龙幼崽，充满保护欲地抱着它。\n\n在他们身后，一道高耸而充满戏剧性的瀑布顺着覆盖着茂密绿色植被和薄雾的陡峭丛林悬崖倾泻而下。场景中栖息着多只恐龙：几只迅猛龙在河岸边潜行，小型食草动物在背景中奔跑，飞翔的翼龙在头顶盘旋。环境丰富，有长满苔藓的岩石、流动的河水、热带植物和柔和的大气雾。\n\n灯光具有电影感和自然感，漫射的日光照亮场景，阴影细节丰富，焦点清晰地聚在女子和棘龙身上，背景元素采用浅景深。恐龙鳞片、牙齿、水珠、树叶和织物上的超写实纹理。史诗奇幻写实主义，戏剧性构图，垂直构图，超精细，照片级真实感，4K，电影级调色，无文字，无水印。\n\n英文提示词\nUltra-realistic cinematic fantasy scene set in a lush prehistoric jungle valley. A colossal Spinosaurus stands beside a shallow river, its long crocodile-like jaws stretched wide open. Seated calmly inside the dinosaur’s open mouth is a young woman, perfectly centered, legs hanging slightly forward. She has straight dark hair, a composed fearless expression, and realistic skin texture. She is wearing a fitted black long-sleeve crop top, blue denim shorts, and black knee-high combat boots. Small blood smears and light scratches are visible on her clothes and legs, adding dramatic tension without gore. She gently cradles a small baby dinosaur in her arms, holding it protectively.\n\nBehind them, a tall dramatic waterfall cascades down steep jungle cliffs covered in dense green foliage and mist. Multiple dinosaurs populate the scene: several Velociraptors stalking the riverbank, small herbivores running through the background, and flying pterosaurs circling overhead. The environment is rich with mossy rocks, flowing water, tropical plants, and soft atmospheric fog.\n\nLighting is cinematic and natural, with diffused daylight illuminating the scene, detailed shadows, sharp focus on the woman and the Spinosaurus, and shallow depth of field for background elements. Hyper-real textures on dinosaur scales, teeth, water droplets, foliage, and fabric. Epic fantasy realism, dramatic composition, vertical framing, ultra-detailed, photorealistic, 4K, cinematic color grading, no text, no watermark.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-realistic-runner-breaking-manga",
    "title": "冲破次元壁的写实漫画跑者",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "破次元",
      "漫画风",
      "写实风"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/Fujimoto_hina/status/2027748030825500722",
    "recommendedSize": "4:5 / 9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202603/1772370879093-klk7hbpq-1.jpeg",
    "imageAlt": "冲破次元壁的写实漫画跑者示例图",
    "prompt": "中文提示词\n{\n  \"prompt\": \"超写实，一位留着深色短卷发、修剪整齐的胡须和黑色方形眼镜的年轻男子的鲜艳逼真渲染，身穿深色纹理高领毛衣和牛仔裤。他奔跑到一半被捕捉下来，姿态充满动感，向前突破，充满戏剧性地从一个破碎的漫画分镜框中显现——一条腿和一只手臂冲入现实世界，而身体的其余部分仍留在漫画框内。他的表情充满活力和喜悦，拥有锐利的面部细节，自然的皮肤纹理，以及具有高对比度和深度的戏剧性电影灯光。\\n\\n背景：一个非常详细的黑白漫画布局，充满了幽默、夸张的且与他直接互动的反应场景。周围的漫画人物表现出震惊和喜剧的表情，配有粗体的对话气泡和速度线。漫画分镜采用经典的高对比度水墨风格绘制，线条清晰，网点阴影。撕裂的纸张边缘和碎片增强了他冲破漫画世界的幻觉。全彩色的写实人物与单色的漫画环境形成强烈对比，创造出写实与漫画艺术之间的动态混合体。超精细，8k分辨率，清晰聚焦，戏剧性的阴影，电影级景深。\"\n}\n\n英文提示词\n{\n  \"prompt\": \"Ultra-realistic, vibrant photorealistic rendering of a young man with short curly dark hair, neatly trimmed beard, and black rectangular glasses, wearing a dark textured turtleneck sweater and jeans. He is captured mid-run in a dynamic, forward-breaking pose, dramatically emerging from a torn manga panel — one leg and one arm bursting into the real world while the rest of his body remains inside the comic frame. His expression is energetic and joyful, with sharp facial details, natural skin texture, and dramatic cinematic lighting with high contrast and depth. \\n\\nBackground: a highly detailed black-and-white manga layout filled with humorous, exaggerated reaction scenes that directly interact with him. The surrounding manga characters display shocked and comedic expressions, with bold speech bubbles and motion lines. The manga panels are illustrated in a classic high-contrast ink style with crisp linework and halftone shading. Torn paper edges and debris enhance the illusion of him breaking through the comic world. The fully colored, photorealistic figure contrasts strongly against the monochrome manga environment, creating a dynamic hybrid between reality and comic art. Ultra-detailed, 8k resolution, sharp focus, dramatic shadows, cinematic depth of field.\"\n}",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-stunning-red-studio-wide-angle-beauty",
    "title": "震撼视觉的深红影棚广角美妆大片",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "美妆",
      "广角",
      "商业"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/Maercihh/status/2026941078885310750",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202602/1772111294034-xpxiipdw-1.jpeg",
    "imageAlt": "震撼视觉的深红影棚广角美妆大片示例图",
    "prompt": "中文提示词\n照片级真实感的大胆美妆宣传活动，使用上传的模特作为精确的身份参考。不做面部改变，不做平滑处理。\n场景：深红色饱和的摄影棚环境，具有高对比度的地板图案或光滑表面。\n产品：产品被握持或放置在极其靠近镜头的位置，由于透视关系显得巨大。\n模特姿势：俏皮或自信的微笑，手臂完全伸向相机，手指因广角镜头而略微变形。透过太阳镜的强烈眼神交流或自然凝视。\n相机：超广角 20–28mm 美学，动态前景夸张，浅至中等景深。\n灯光：强有力的商业照明，具有清晰的高光和反射，锐利的包装边缘，充满活力的调色。超精细的皮肤纹理和织物真实感。\n\n英文提示词\nPhotorealistic bold beauty campaign using uploaded model as exact identity reference. No facial changes, no smoothing.  \nScene: deep red saturated studio environment with high-contrast floor pattern or glossy surface.  \nProduct: the product held or positioned extremely close to the lens, appearing large due to perspective.   \nModel pose: playful or confident smile, arm fully extended toward camera, fingers slightly distorted by wide lens. Strong eye contact through sunglasses or natural gaze.  \nCamera: ultra-wide 20–28mm aesthetic, dynamic foreground exaggeration, shallow-to-medium depth of field.  \nLighting: punchy commercial lighting with defined highlights and reflections, crisp packaging edges, vibrant color grading. Hyper-detailed skin texture and fabric realism.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-coral-minimalist-fashion-campaign",
    "title": "珊瑚色极简影棚时尚商业大片",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "商业摄影",
      "时尚大片",
      "超高清"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/Maercihh/status/2026941078885310750",
    "recommendedSize": "4:5 / 1:1",
    "imageUrl": "https://img.opennana.com/prompts/assets/202602/1772111289141-hzd4rr9r-1.jpeg",
    "imageAlt": "珊瑚色极简影棚时尚商业大片示例图",
    "prompt": "中文提示词\n超写实高端时尚商业广告大片，使用上传的模特照片作为严格的身份参考。保留精确的面部特征、比例和自然皮肤纹理——无修图，无变形。场景：珊瑚色单色工作室盒，配有光泽反光棋盘格或极简抛光地板。拥有柔和光线渐变的干净几何墙壁。产品：产品放置在前景中心超大位置，因广角透视而占据画面主导地位。包装超清晰，文字完全可读，具有逼真的反射和材质纹理。较小的产品单元可对称放置在背景中。模特姿势：站在产品后方，微蹲或前倾，一只手伸向镜头以创造深度感。强烈自信的表情，时尚态度。相机：低角度 24-35mm 镜头感，戏剧性透视畸变，对产品和模特都进行深焦处理。灯光：明亮的商业影棚灯光，柔和阴影，包装上有光泽高光，高端广告成片质感。4K–8K 写实主义，无水印，无嵌入式文本。纵横比 9:13\n\n英文提示词\nUltra-realistic high-fashion commercial campaign using the uploaded model photo as strict identity reference. Preserve exact facial features, proportions and natural skin texture — no retouching, no reshaping.  \nScene: coral monochrome studio box with glossy reflective checker or minimal polished floor. Clean geometric walls with soft light gradients.  \nProduct: the product placed oversized in the center foreground, dominating the frame due to wide-angle perspective. The packaging is ultra-sharp, fully readable, realistic reflections and material texture. Smaller product units can be placed symmetrically in the background.  \nModel pose: standing behind the product, slightly crouched or leaning forward, one hand reaching toward the camera to create depth. Strong confident expression, fashion attitude.  \nCamera: low-angle 24–35mm lens look, dramatic perspective distortion, deep focus on both product and model.  \nLighting: bright commercial studio lighting, soft shadows, glossy highlights on packaging, high-end campaign finish. 4K–8K realism, no watermark, no embedded text.i ar 9:13",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-bird-woven-dream-couture",
    "title": "鸟群织就的梦幻高定时装秀",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "时装秀",
      "飞鸟裙",
      "超现实"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/MrDasOnX/status/2026284342549340190",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202602/1771992723517-11xkvi5s-1.jpeg",
    "imageAlt": "鸟群织就的梦幻高定时装秀示例图",
    "prompt": "中文提示词\n一个充满趣味的高级时装T台场景，主角是一位自信的女性，正走在奢华时装秀的T台上，身穿一件完全由鸟类制成的非凡高级定制礼服。数百只优雅、色彩鲜艳的鸟类构成了飘逸的雕塑感礼服形状，像活着的羽毛一样层叠，翅膀微微张开，营造出布料和运动的错觉。一些鸟儿在她周围轻轻升入空中，捕捉于飞行瞬间，增添了神奇、超现实的运动感。鸟儿们展现出丰富多样的色彩——彩虹般的蓝色、光芒四射的红色、金黄色和柔和的白色——拥有错综复杂的羽毛细节和自然纹理。她在迈步间摆出姿势，带着快乐、自信的表情，富有表现力的眼睛，以及精致的T台妆容。戏剧性的舞台灯光配以发光的高光，黑暗模糊的观众背景，电影级的景深，奇幻现实主义，超精细纹理，高对比度，清晰聚焦，奇思妙想的奢华时装秀，超现实主义高级定制，4K分辨率，专业调色。\n\n英文提示词\nA playful high-fashion runway scene featuring a confident woman walking a luxury fashion show catwalk, wearing an extraordinary couture dress made entirely of birds. Hundreds of elegant, vividly colored birds form the shape of a flowing, sculptural gown, layered like living feathers, with wings partially spread to create the illusion of fabric and motion. Some birds lift gently into the air around her, captured mid-flight, adding a magical, surreal sense of movement. The birds display a rich variety of colors — iridescent blues, radiant reds, golden yellows, and soft whites — with intricate feather details and natural textures. She poses mid-stride with a joyful, confident expression, expressive eyes, and refined runway makeup. Dramatic stage lighting with glowing highlights, dark blurred audience background, cinematic depth of field, fantasy realism, ultra-detailed textures, high contrast, sharp focus, whimsical luxury fashion show, surreal couture, 4K resolution, professional color grading.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-ice-fire-warriors-epic-poster",
    "title": "冰火双雄背靠背史诗电影海报",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "奇幻",
      "战士",
      "电影感"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/Naiknelofar788/status/2025972876554510482",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202602/1771924760833-8i25qoj7-1.jpeg",
    "imageAlt": "冰火双雄背靠背史诗电影海报示例图",
    "prompt": "中文提示词\n一幅戏剧性的电影海报风格肖像，描绘了两位史诗奇幻战士在冰冻风暴中背靠背站立。左侧是一位身经百战的男性战士，留着湿漉漉的深色卷发，低头以此表达坚定的决心，紧握着一把插在冰里的中世纪长剑。霜雪附着在他毛皮镶边的斗篷和肩膀上。右侧是一位强有力的女性战士侧影，苍白的皮肤在炽热的橙色光芒下闪耀，她的身体部分被火焰吞没，与冰冷的蓝色氛围形成对比。雪花粒子在空中盘旋，在象征性的冲突中融合了火与冰。超精细的面部细节，情感强度，体积雾，电影级布光，冷蓝色调混合温暖的火焰高光，浅景深，史诗奇幻电影海报，超写实，8K分辨率，戏剧性构图，清晰聚焦，高对比度，逼真纹理。\n\n英文提示词\nA dramatic cinematic poster-style portrait of two epic fantasy warriors standing back-to-back in a frozen storm. On the left, a battle-worn male warrior with wet, curly dark hair, head bowed in quiet resolve, gripping a medieval sword planted into the ice. Frost and snow cling to his fur-lined cloak and shoulders. On the right, a powerful female warrior in profile, pale skin glowing with fiery orange light, her body partially engulfed in flames thatcontrast against the icy blue atmosphere. Snow particles swirl through the air, blending fire and ice in a symbolic clash. Ultra-detailed faces, emotional intensity, volumetric fog, cinematic lighting, cold blue tones mixed with warm fire highlights, shallow depth of field, epic fantasy movie poster, hyper-realistic, 8K resolution, dramatic composition, sharp focus, high contrast, photorealistic textures.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-street-model-flaunt-bottle",
    "title": "街头炫瓶男模",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "街头",
      "广角",
      "潮男"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/ecommartinez/status/2017311074551533921",
    "recommendedSize": "3:4",
    "imageUrl": "https://img.opennana.com/prompts/assets/202601/1769873890606-csyjkxj3-1.jpeg",
    "imageAlt": "街头炫瓶男模示例图",
    "prompt": "中文提示词\n专业照片，一位男士，30岁的俄罗斯模特（参考图像），正对着镜头，向相机倾斜，从下往上拍摄，使用广角镜头。男士倾斜着身体，近距离将一瓶饮料展示给镜头，一只手拿着瓶子，紧贴在镜头前。瓶子的标签和方向保持笔直，以便标签清晰可读。他穿着白色运动鞋，一只脚在镜头前方。男士站在街道上，湿漉漉的沥青和飞溅的水花从下方拍出。鲜艳的色彩，电影级灯光，光线从后方打在模特的脸上。--v7 --ar 3:4 --style raw\n\n英文提示词\nProfessional photo, a guy, a 30-year-old Russian model (reference image), is facing the lens, tilted towards the camera, angle from below, shot with a wide-angle lens. The guy is tilted and shows a bottle close-up to the camera, a hand with a bottle close-up right in front of the lens. The label and direction of the bottle are straight so the label is readable. He's wearing white sneakers, one foot in front of the camera. The guy is standing on the street, wet asphalt and splashes from below. Bright colors, cinematic lighting, the light is behind and on the model’s face. --v7 --ar 3:4 --style raw",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-hyper-realistic-3d-instagram-ad",
    "title": "超真实3D INS广告大片",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "3D写实",
      "INS风",
      "Nike运动"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/Mystveil7/status/2015776042989039997",
    "recommendedSize": "1:1",
    "imageUrl": "https://img.opennana.com/prompts/assets/202601/1769442575444-xj11mror-1.jpeg",
    "imageAlt": "超真实3D INS广告大片示例图",
    "prompt": "中文提示词\nCreate a hyper-realistic, cinematic Instagram post layout where the Instagram UI exists as a physical, tangible 3D object, photographed like a premium commercial product shot. The result should feel indistinguishable from a real studio photograph.\nInstagram Frame (UI Accuracy – Critical)\nAuthentic Instagram interface rendered as a solid white physical 3D card\nSmooth matte plastic surface with subtle micro-texture\nSlight thickness visible on edges, realistic bevels\nPerfectly rounded corners (exact Instagram radius)\nSoft studio reflections and realistic edge highlights\nTop Bar (Pixel-accurate UI):\nCircular profile avatar on the left\nUsername text: “June” in Instagram’s default bold UI font\nLight blue FOLLOW button with correct proportions\nThree-dot menu icon aligned to the far right\nExact spacing, typography, and icon sizing matching the real Instagram app\nAspect ratio 1:1, centered, balanced, premium composition.\nMain Subject (Pose – Match Reference Image Exactly)\nA photorealistic athletic woman partially emerging out of the Instagram frame into real 3D space\nSeated pose identical to the reference image:\nBoth legs bent and angled to the side\nOne knee slightly raised and closer to the chest\nArms gently wrapped around the raised knee\nHands relaxed, fingers naturally resting\nTorso leaning slightly back against the frame edge\nExpression: calm, thoughtful, self-assured\nGaze: looking slightly to the side and upward, not engaging the camera\nNatural body proportions, relaxed posture, editorial realism\nNo exaggerated curves, no artificial posing\nClothing (Nike Only – Realistic Fit)\nMuted ivory / off-white Nike fitted short-sleeve blouse\nSoft neutral tone that contrasts beautifully with the background\nVisible white Nike swoosh\nNatural fabric stretch and tension\nDeep blue Nike athletic pants, length up to the knee\nTailored, performance-fit silhouette\nRealistic fabric weight with subtle folds at the knee bend\nClean stitching and breathable sports material\nClean white Nike sneakers\nSlight wear realism\nCorrect sole texture and stitching\nPremium sportswear look, real commercial styling\nNo distortion, no fantasy fashion\nBackground (Inside the Instagram Post Only)\nDark indoor gym or studio environment\nCool blue and muted purple cinematic lighting\nSoft haze in the background\nSubtle volumetric light beams barely visible\nShallow depth of field, background softly blurred\nSubject and Instagram frame remain sharp and dominant\nLighting & Photorealism\nStudio-grade cinematic lighting\nSoft key light illuminating the subject naturally\nGentle rim light outlining the body and Instagram frame\nRealistic skin texture with visible pores and natural highlights\nAccurate contact shadows where the subject touches the frame\nPhysically correct light falloff and reflections\nFooter UI (Engagement Section)\nInstagram action icons: like, comment, share, save (accurate icons)\nText visible: “785 likes”\nCaption begins with June\nCaption text:\nFreedom isn’t found in comfort.\nIt’s built in the quiet moments where discipline meets belief.\nHashtags partially visible and naturally cropped\nOverall Style & Quality\nUltra-high resolution\nAdvertising-grade realism\nClean, modern, editorial Instagram aesthetic\nHyper-realistic blend of 3D object + real photography\nNo extra elements\nNo text errors\nNo distortion\nLooks like a real product photoshoot, not AI art\n\n英文提示词\nCreate a hyper-realistic, cinematic Instagram post layout where the Instagram UI exists as a physical, tangible 3D object, photographed like a premium commercial product shot. The result should feel indistinguishable from a real studio photograph.\nInstagram Frame (UI Accuracy – Critical)\nAuthentic Instagram interface rendered as a solid white physical 3D card\nSmooth matte plastic surface with subtle micro-texture\nSlight thickness visible on edges, realistic bevels\nPerfectly rounded corners (exact Instagram radius)\nSoft studio reflections and realistic edge highlights\nTop Bar (Pixel-accurate UI):\nCircular profile avatar on the left\nUsername text: “June” in Instagram’s default bold UI font\nLight blue FOLLOW button with correct proportions\nThree-dot menu icon aligned to the far right\nExact spacing, typography, and icon sizing matching the real Instagram app\nAspect ratio 1:1, centered, balanced, premium composition.\nMain Subject (Pose – Match Reference Image Exactly)\nA photorealistic athletic woman partially emerging out of the Instagram frame into real 3D space\nSeated pose identical to the reference image:\nBoth legs bent and angled to the side\nOne knee slightly raised and closer to the chest\nArms gently wrapped around the raised knee\nHands relaxed, fingers naturally resting\nTorso leaning slightly back against the frame edge\nExpression: calm, thoughtful, self-assured\nGaze: looking slightly to the side and upward, not engaging the camera\nNatural body proportions, relaxed posture, editorial realism\nNo exaggerated curves, no artificial posing\nClothing (Nike Only – Realistic Fit)\nMuted ivory / off-white Nike fitted short-sleeve blouse\nSoft neutral tone that contrasts beautifully with the background\nVisible white Nike swoosh\nNatural fabric stretch and tension\nDeep blue Nike athletic pants, length up to the knee\nTailored, performance-fit silhouette\nRealistic fabric weight with subtle folds at the knee bend\nClean stitching and breathable sports material\nClean white Nike sneakers\nSlight wear realism\nCorrect sole texture and stitching\nPremium sportswear look, real commercial styling\nNo distortion, no fantasy fashion\nBackground (Inside the Instagram Post Only)\nDark indoor gym or studio environment\nCool blue and muted purple cinematic lighting\nSoft haze in the background\nSubtle volumetric light beams barely visible\nShallow depth of field, background softly blurred\nSubject and Instagram frame remain sharp and dominant\nLighting & Photorealism\nStudio-grade cinematic lighting\nSoft key light illuminating the subject naturally\nGentle rim light outlining the body and Instagram frame\nRealistic skin texture with visible pores and natural highlights\nAccurate contact shadows where the subject touches the frame\nPhysically correct light falloff and reflections\nFooter UI (Engagement Section)\nInstagram action icons: like, comment, share, save (accurate icons)\nText visible: “785 likes”\nCaption begins with June\nCaption text:\nFreedom isn’t found in comfort.\nIt’s built in the quiet moments where discipline meets belief.\nHashtags partially visible and naturally cropped\nOverall Style & Quality\nUltra-high resolution\nAdvertising-grade realism\nClean, modern, editorial Instagram aesthetic\nHyper-realistic blend of 3D object + real photography\nNo extra elements\nNo text errors\nNo distortion\nLooks like a real product photoshoot, not AI art",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-vintage-bus-red-trench-girl",
    "title": "复古巴士上的红风衣女郎",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "时尚",
      "复古",
      "旅行"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/iamsofiaijaz/status/2015337737860403283",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202601/1769340463229-ret3fajs-1.jpeg",
    "imageAlt": "复古巴士上的红风衣女郎示例图",
    "prompt": "中文提示词\n一位时尚年轻女子坐在老式复古巴士的前缘，身穿红色长风衣、羊毛无檐小便帽、圆形蓝色反光太阳镜、叠层项链和粗犷的棕色皮靴。她有着波浪状金发，带着自信而梦幻的表情，仰望天空。巴士漆面剥落，呈青绿色与铁锈红色调。明亮清澈的蓝天，城市背景建筑极少，柔和日光，电影级色彩分级，浅景深，高端时尚旅行氛围，编辑摄影，超写实，4K分辨率，锐利对焦，自然肌肤质感，戏剧性构图，电影静帧美学。\n\n英文提示词\nA stylish young woman sitting on the front edge of an old vintage bus, wearing a long red trench coat, woolen beanie cap, round blue reflective sunglasses, layered necklaces, and rugged brown leather boots. She has wavy blonde hair and a confident, dreamy expression, looking upward toward the sky. The bus is weathered with peeling paint in turquoise and rust red tones.Bright clear blue sky, urban background with minimal buildings, soft daylight, cinematic color grading, shallow depth of field, high fashion travel vibe, editorial photography, ultra-realistic, 4K resolution, sharp focus, natural skin texture, dramatic composition, film still aesthetic.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-pixar-style-sunny-youth",
    "title": "皮克斯风阳光少年",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "卡通",
      "3D",
      "青春"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/iamsofiaijaz/status/2013473309485343120",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://img.opennana.com/prompts/assets/202601/1768919593335-uya7wlam-1.jpeg",
    "imageAlt": "皮克斯风阳光少年示例图",
    "prompt": "中文提示词\n一个风格化的3D卡通肖像，一位年轻男子，拥有短棕发和富有表现力的绿色眼睛，温暖地微笑。他穿着黑色西装外套内搭白色T恤，现代休闲时尚。类似皮克斯/迪士尼风格角色设计，皮肤光滑，柔和光照，略微夸张的面部特征。高细节、精美的3D渲染，友好且平易近人的表情。渐变背景为柔和的蓝绿色和粉色，工作室灯光，浅景深，高分辨率。\n\n英文提示词\nA stylized 3D cartoon portrait of a young man with short brown hair and expressive green eyes, smiling warmly. He is wearing a black blazer over a white t-shirt, modern casual fashion. Pixar-like / Disney-style character design with smooth skin, soft lighting, and slightly exaggerated facial features. High detail, polished 3D render, friendly and approachable expression. Gradient background with soft teal and pink colors, studio lighting, shallow depth of field, high resolution.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-floating-rose-agarwood-scene",
    "title": "沉香玫瑰悬浮幻景",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "香水",
      "中东",
      "金调"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/meng_dagg695/status/2011334627290726746",
    "recommendedSize": "9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202601/1768402800354-cyso7pp1-1.jpeg",
    "imageAlt": "沉香玫瑰悬浮幻景示例图",
    "prompt": "中文提示词\n{\n  \"master_prompt_type\": \"超精细8K AI图像生成\",\n  \"global_settings\": {\n    \"resolution\": \"8K UHD\",\n    \"aspect_ratio\": \"2:3 竖版\",\n    \"render_quality\": \"极致锐度、超微细节、电影级光效\",\n    \"style\": \"超现实商业产品摄影\",\n    \"color_profile\": \"温暖金调搭配柔和琥珀高光\",\n    \"environment\": {\n      \"location\": \"古老中东市场走廊\",\n      \"architecture\": {\n        \"walls\": \"岁月痕迹的粗糙石墙与可见纹理\",\n        \"arches\": \"背景巨型石拱\",\n        \"floor\": \"暖棕色石材地面\"\n      },\n      \"background_elements\": [\n        \"装满香料的木架\",\n        \"袋装与碗装干货\",\n        \"悬挂草药束\",\n        \"散发暖黄光的传统金属灯笼\"\n      ],\n      \"lighting\": {\n        \"primary\": \"柔和金色环境光\",\n        \"secondary\": \"两侧暖灯笼辉光\",\n        \"atmosphere\": \"薄雾增强光线漫射\"\n      }\n    },\n    \"main_subject\": {\n      \"type\": \"香水瓶\",\n      \"position\": \"中心前景\",\n      \"placement\": \"置于华丽木桌之上\",\n      \"material\": {\n        \"bottle\": \"透明清玻璃\",\n        \"cap\": \"黄金金属矩形瓶盖\",\n        \"liquid\": \"淡金香水液体\"\n      },\n      \"design\": {\n        \"shape\": \"圆角矩形瓶身\",\n        \"finish\": \"高光反射表面\",\n        \"label\": \"无可见标签\"\n      },\n      \"table\": {\n        \"material\": \"深色雕花木材\",\n        \"shape\": \"方形台面\",\n        \"details\": [\n          \"繁复花卉与几何雕刻\",\n          \"金色镶嵌装饰\",\n          \"抛光表面映光\"\n        ]\n      },\n      \"floating_elements\": {\n        \"composition_style\": \"竖向成分堆叠\",\n        \"motion\": \"成分悬浮并伴随旋转金光\",\n        \"effects\": [\n          \"发光粒子\",\n          \"闪耀尘埃\",\n          \"柔光尾迹连接元素\"\n        ],\n        \"elements_order_top_to_bottom\": [\n          {\n            \"ingredient\": \"琥珀树脂\",\n            \"appearance\": \"半透明金棕树脂块\",\n            \"glow\": \"温暖内发光\"\n          },\n          {\n            \"ingredient\": \"大马士革玫瑰\",\n            \"appearance\": \"盛放粉色玫瑰\",\n            \"details\": [\n              \"柔软层叠花瓣\",\n              \"自然绿叶\",\n              \"轻飘附近花瓣\"\n            ]\n          },\n          {\n            \"ingredient\": \"白麝香\",\n            \"appearance\": \"光滑白水晶状石块\",\n            \"additional\": \"石下细白粉末\"\n          },\n          {\n            \"ingredient\": \"陈年沉香\",\n            \"appearance\": \"深棕木片\",\n            \"texture\": \"粗糙纤维木纹\",\n            \"effect\": \"缕缕白烟上升\"\n          }\n        ]\n      },\n      \"text_elements\": {\n        \"title\": {\n          \"text\": \"精致叙利亚香水\",\n          \"font_style\": \"优雅衬线体\",\n          \"color\": \"金色\",\n          \"position\": \"顶部中央\"\n        },\n        \"subtitle\": {\n          \"text\": \"奢华叙利亚香水\",\n          \"font_style\": \"较小衬线体\",\n          \"color\": \"金色\",\n          \"position\": \"主标题下方\"\n        },\n        \"ingredient_labels\": [\n          {\n            \"title\": \"纯琥珀\",\n            \"description\": \"来自自然深处的珍贵树脂\"\n          },\n          {\n            \"title\": \"大马士革玫瑰\",\n            \"description\": \"美丽与叙利亚传承的象征\"\n          },\n          {\n            \"title\": \"白麝香\",\n            \"description\": \"干净、粉感、永恒优雅的香氛\"\n          },\n          {\n            \"title\": \"陈年沉香\",\n            \"description\": \"深邃温暖、浓郁烟熏木香\"\n          }\n        ],\n        \"typography_details\": {\n          \"connector_lines\": \"细弯金线连接文字与成分\",\n          \"icons\": \"线末端小圆点标记\"\n        },\n        \"opacity\": \"轻微半透明\"\n      }\n    },\n    \"overall_mood\": {\n      \"tone\": \"奢华、温暖、优雅\",\n      \"theme\": \"传承香水工艺\",\n      \"visual_feel\": \"浓郁、高端、电影级广告\"\n    }\n  }\n}\n\n英文提示词\n{\n  \"master_prompt_type\": \"Ultra-detailed 8K AI image generation\",\n  \"global_settings\": {\n    \"resolution\": \"8K UHD\",\n    \"aspect_ratio\": \"2:3 vertical\",\n    \"render_quality\": \"extreme sharpness, ultra-fine detail, cinematic lighting\",\n    \"style\": \"hyper-realistic commercial product photography\",\n    \"color_profile\": \"warm golden tones with soft amber highlights\",\n    \"environment\": {\n      \"location\": \"ancient Middle Eastern market corridor\",\n      \"architecture\": {\n        \"walls\": \"aged stone walls with visible texture and wear\",\n        \"arches\": \"large stone archway in background\",\n        \"floor\": \"stone flooring, warm brown tone\"\n      },\n      \"background_elements\": [\n        \"wooden shelves filled with spices\",\n        \"sacks and bowls of dried goods\",\n        \"hanging bundles of herbs\",\n        \"traditional metal lanterns emitting warm yellow light\"\n      ],\n      \"lighting\": {\n        \"primary\": \"soft golden ambient light\",\n        \"secondary\": \"warm lantern glow from both sides\",\n        \"atmosphere\": \"slight haze enhancing light diffusion\" \"main_subject\": {\n          \"type\": \"perfume bottle\",\n          \"position\": \"center foreground\",\n          \"placement\": \"on top of an ornate wooden table\",\n          \"material\": {\n            \"bottle\": \"transparent clear glass\",\n            \"cap\": \"gold metallic rectangular cap\",\n            \"liquid\": \"light golden perfume liquid\"\n          },\n          \"design\": {\n            \"shape\": \"rectangular bottle with rounded edges\",\n            \"finish\": \"glossy reflective surface\",\n            \"label\": \"no visible label\" \"table\": {\n              \"material\": \"dark carved wood\",\n              \"shape\": \"square top\",\n              \"details\": [\n                \"intricate floral and geometric carvings\",\n                \"golden inlay accents\",\n                \"polished surface reflecting light\" \"floating_elements\": {\n                  \"composition_style\": \"vertical ingredient stack\",\n                  \"motion\": \"ingredients appear suspended with swirling golden light\",\n                  \"effects\": [\n                    \"glowing particles\",\n                    \"sparkling dust\",\n                    \"soft light trails connecting elements\"\n                  ],\n                  \"elements_order_top_to_bottom\": [\n                    {\n                      \"ingredient\": \"amber resin\",\n                      \"appearance\": \"translucent golden-brown resin chunks\",\n                      \"glow\": \"warm internal glow\" \"ingredient\": \"damask rose\",\n                      \"appearance\": \"fully bloomed pink rose\",\n                      \"details\": [\n                        \"soft layered petals\",\n                        \"natural green leaves\",\n                        \"petals gently floating nearby\"\n                      ] \"ingredient\": \"white musk\",\n                      \"appearance\": \"smooth white crystal-like stone\",\n                      \"additional\": \"fine white powder beneath the stone\" \"ingredient\": \"aged agarwood\",\n                      \"appearance\": \"dark brown wooden pieces\",\n                      \"texture\": \"rough, fibrous wood grain\",\n                      \"effect\": \"thin white smoke rising upward\" \"text_elements\": {\n                        \"title\": {\n                          \"text\": \"Exquisite Syrian Perfume\",\n                          \"font_style\": \"elegant serif\",\n                          \"color\": \"gold\",\n                          \"position\": \"top center\"\n                        },\n                        \"subtitle\": {\n                          \"text\": \"Luxury Syrian Perfume\",\n                          \"font_style\": \"smaller serif\",\n                          \"color\": \"gold\",\n                          \"position\": \"below main title\"\n                        },\n                        \"ingredient_labels\": [\n                          {\n                            \"title\": \"Pure Amber\",\n                            \"description\": \"Precious resin from the depths of nature\"\n                          } \"title\": \"Damask Rose\",\n                          \"description\": \"Symbol of beauty and Syrian heritage\"\n                        },\n                        {\n                          \"title\": \"White Musk\",\n                          \"description\": \"Clean, powdery scent of timeless elegance\"\n                        },\n                        {\n                          \"title\": \"Aged Agarwood\",\n                          \"description\": \"Rich, smoky wood with deep warmth\"\n                        }\n                      ],\n                      \"typography_details\": {\n                        \"connector_lines\": \"thin curved golden lines connecting text to ingredients\",\n                        \"icons\": \"small circular markers at line endpoints\"\n                      } \"opacity\": \"slightly translucent\"\n                    } \"overall_mood\": \"tone\": \"luxurious, warm, elegant\",\n                    \"theme\": \"heritage perfume craftsmanship\",\n                    \"visual_feel\": \"rich, premium, cinematic ads",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-giant-woman-topdown-selfie",
    "title": "俯拍巨女城景自拍",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "自拍",
      "巨人",
      "城景"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2009834337043394622",
    "recommendedSize": "9:16",
    "imageUrl": "https://img.opennana.com/prompts/assets/202601/1768056882155-qis0af56-1.jpeg",
    "imageAlt": "俯拍巨女城景自拍示例图",
    "prompt": "中文提示词\n{\n  \"type\": \"图像生成提示词\",\n  \"language\": \"zh\",\n  \"style\": \"超现实电影感自拍摄影\",\n  \"aspect_ratio\": \"9:16\",\n  \"identity_preservation\": {\n    \"use_reference_image\": true,\n    \"strict_identity_lock\": true,\n    \"alter_face\": false,\n    \"alter_skin\": false,\n    \"alter_hair\": false,\n    \"alter_gender\": false,\n    \"notes\": \"保留上传参考图像中完全一致的脸部特征、皮肤纹理、头发、眼镜、年龄和性别。禁止合成皮肤或雕塑感。\"\n  },\n  \"subject\": {\n    \"gender\": \"女性\",\n    \"capture_method\": \"由主体本人拍摄的自拍\",\n    \"pose\": {\n      \"selfie_arm\": {\n        \"description\": \"一只手臂完全伸直并完全向上伸展，手持拍摄自拍的相机\",\n        \"visibility\": \"手臂在画面中清晰可见、笔直且占主导地位\",\n        \"camera_visibility\": \"自拍相机设备本身不得在画面中出现\"\n      },\n      \"product_arm\": {\n        \"description\": \"另一只手臂完全伸向相机，手持附带的佳能相机\",\n        \"importance\": \"产品最靠近相机并在视觉上占主导地位\"\n      },\n      \"head\": {\n        \"tilt\": \"头部向自拍相机微微倾斜\"\n      },\n      \"expression\": \"自然放松的面部表情\"\n    },\n    \"body_visibility\": \"从头到脚全身可见\",\n    \"feet\": \"双脚清晰接触路面\"\n  },\n  \"composition\": {\n    \"perspective\": \"胸部高度的自然自拍视角\",\n    \"camera_angle\": \"极端俯拍角度，相机位于主体正上方并直视下方\",\n    \"layer_depth\": [\n      \"产品（最靠近相机）\",\n      \"脸部\",\n      \"全身\",\n      \"城市环境（背景）\"\n    ]\n  },\n  \"scale_and_perspective\": {\n    \"effect\": \"强制透视\",\n    \"subject_scale\": \"女性呈现极度巨大\",\n    \"buildings_scale\": \"建筑物显得小得多，最高不超过她的膝盖\",\n    \"dominance\": \"主体在视觉上完全主导整个场景\",\n    \"realism\": \"激发规模感同时保持物理可信\"\n  },\n  \"environment\": {\n    \"location\": \"真实城市十字路口\",\n    \"elements\": [\n      \"人行横道\",\n      \"道路标线\",\n      \"交通标志\",\n      \"汽车\",\n      \"自行车\",\n      \"真实人类尺度的行人\"\n    ],\n    \"setting\": \"地面层城市环境\"\n  },\n  \"lighting\": {\n    \"type\": \"自然日光\",\n    \"conditions\": \"晴朗或轻度多云天空\",\n    \"shadows\": \"柔和且真实\",\n    \"restrictions\": \"禁止奇幻或戏剧性照明\"\n  },\n  \"product_rules\": {\n    \"usage\": \"完全按提供的上传佳能产品使用\",\n    \"distortion\": \"无\",\n    \"logo\": \"保持不变\",\n    \"appearance\": \"仅有自然反射和真实高光\"\n  },\n  \"camera_quality\": {\n    \"realism\": \"最大照片真实感\",\n    \"depth\": \"前景、主体与背景清晰分离\",\n    \"artifacts\": \"无\"\n  },\n  \"constraints\": [\n    \"禁止AI艺术感\",\n    \"禁止塑料或雕塑皮肤\",\n    \"禁止扭曲脸部或身体\",\n    \"禁止多余肢体或错误解剖\",\n    \"禁止文字或水印\",\n    \"禁止可见自拍相机设备\"\n  ],\n  \"output_goal\": \"创作一张超现实电影感自拍图像：女性使用其确切参考身份，从极端俯拍视角在真实城市人行横道拍摄，具备强制透视比例、自然日光，并将佳能相机产品明显持向镜头。\"\n}\n\n英文提示词\n{\n  \"type\": \"image_generation_prompt\",\n  \"language\": \"en\",\n  \"style\": \"hyper-realistic cinematic selfie photography\",\n  \"aspect_ratio\": \"9:16\",\n  \"identity_preservation\": {\n    \"use_reference_image\": true,\n    \"strict_identity_lock\": true,\n    \"alter_face\": false,\n    \"alter_skin\": false,\n    \"alter_hair\": false,\n    \"alter_gender\": false,\n    \"notes\": \"Preserve identical facial features, skin texture, hair, glasses, age, and gender from the uploaded reference image. No synthetic skin or sculptural look.\"\n  },\n  \"subject\": {\n    \"gender\": \"female\",\n    \"capture_method\": \"selfie taken by the subject herself\",\n    \"pose\": {\n      \"selfie_arm\": {\n        \"description\": \"one arm fully straight and completely extended upward holding the camera that takes the selfie\",\n        \"visibility\": \"arm clearly visible, straight and dominant in frame\",\n        \"camera_visibility\": \"the selfie camera device itself must NOT be visible in the frame\"\n      },\n      \"product_arm\": {\n        \"description\": \"the other arm fully extended toward the camera holding the attached Canon camera\",\n        \"importance\": \"product is closest to the camera and visually dominant\"\n      },\n      \"head\": {\n        \"tilt\": \"slightly tilted toward the selfie camera\"\n      },\n      \"expression\": \"natural and relaxed facial expression\"\n    },\n    \"body_visibility\": \"full body visible from head to toe\",\n    \"feet\": \"feet clearly touching the road surface\"\n  },\n  \"composition\": {\n    \"perspective\": \"natural selfie perspective at chest height\",\n    \"camera_angle\": \"extreme top-down angle, camera above the subject looking directly downward\",\n    \"layer_depth\": [\n      \"product (closest to camera)\",\n      \"face\",\n      \"full body\",\n      \"city environment (background)\"\n    ]\n  },\n  \"scale_and_perspective\": {\n    \"effect\": \"forced perspective\",\n    \"subject_scale\": \"the woman appears extremely giant\",\n    \"buildings_scale\": \"buildings appear much smaller, reaching no higher than her knees\",\n    \"dominance\": \"the subject visually dominates the entire scene\",\n    \"realism\": \"inspiring scale while remaining physically believable\"\n  },\n  \"environment\": {\n    \"location\": \"real urban intersection\",\n    \"elements\": [\n      \"pedestrian crosswalk\",\n      \"road markings\",\n      \"traffic signs\",\n      \"cars\",\n      \"bicycles\",\n      \"pedestrians at realistic human scale\"\n    ],\n    \"setting\": \"ground-level urban environment\"\n  },\n  \"lighting\": {\n    \"type\": \"natural daylight\",\n    \"conditions\": \"clear or lightly cloudy sky\",\n    \"shadows\": \"soft and realistic\",\n    \"restrictions\": \"no fantasy or dramatic lighting\"\n  },\n  \"product_rules\": {\n    \"usage\": \"use the uploaded Canon product exactly as provided\",\n    \"distortion\": \"none\",\n    \"logo\": \"unchanged\",\n    \"appearance\": \"natural reflections and realistic highlights only\"\n  },\n  \"camera_quality\": {\n    \"realism\": \"maximum photorealism\",\n    \"depth\": \"clear separation of foreground, subject, and background\",\n    \"artifacts\": \"none\"\n  },\n  \"constraints\": [\n    \"No AI-art look\",\n    \"No plastic or sculpted skin\",\n    \"No distortion of face or body\",\n    \"No extra limbs or incorrect anatomy\",\n    \"No text or watermarks\",\n    \"No visible selfie camera device\"\n  ],\n  \"output_goal\": \"Create a hyper-realistic cinematic selfie image of a woman using her exact reference identity, captured from an extreme top-down perspective in a real urban crosswalk, with forced perspective scale, natural daylight, and a Canon camera product prominently held toward the lens.\"\n}",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-opennana-prompt-1145",
    "title": "烬甲猎鹰者与燃翼神禽",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 OpenNana的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "fantasy",
      "landscape",
      "nature"
    ],
    "source": "GPT-Image-2 案例观摩馆 / OpenNana",
    "sourceUrl": "https://x.com/iamsofiaijaz/status/2008896649901535342",
    "recommendedSize": "4:5 / 1:1",
    "imageUrl": "https://img.opennana.com/prompts/images/1145.jpeg",
    "imageAlt": "烬甲猎鹰者与燃翼神禽示例图",
    "prompt": "zh\n一幅充满奇幻色彩的电影场景：一位英姿飒爽的女战士兼猎鹰师，身着饱经战火洗礼、饰以闪耀余烬纹理的皮甲，漫步于幽暗迷雾笼罩的森林之中。她高举手臂，指挥着一头巨大的凤凰与雄鹰的混合体，这头猛禽双翼燃烧，羽毛燃焰，尖端喷吐着火焰。它周身散发着橙红色的熔岩光芒，火星和余烬飞溅。女战士梳着辫子，皮肤上沾满了灰烬，神情坚定，手中拿着绳索和工具袋。画面细节丰富，羽毛纹理逼真，火焰物理效果自然，光照效果极具戏剧性，运用了体积雾、浅景深等技术，营造出史诗般的奇幻氛围，色彩调校极具电影质感，背景阴郁深沉，分辨率高达8K，呈现出概念艺术的精髓，并采用了虚幻引擎的渲染效果。\n\nen\nA cinematic fantasy scene of a fierce female use image for face reference warrior falconer walking through a dark misty forest, wearing battle-worn leather armor infused with glowing ember textures. Her arm is raised, commanding a massive phoenix-eagle hybrid with blazing wings and flaming feathers, fire trailing from its tips. The bird radiates molten orange and red light, casting sparks and embers into the air.The warrior has braided hair, ash-streaked skin, and a determined expression, carrying a rope and utility pouch. Ultra-detailed feathers, realistic fire physics, dramatic lighting, volumetric fog, shallow depth of field, epic fantasy atmosphere, hyper-realistic, cinematic color grading, dark moody background, 8k, concept art, unreal engine quality.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "style-ui-screenshot-system",
    "title": "UI 截图系统",
    "category": "UI 与界面",
    "description": "生成 App、网页、仪表盘、社媒截图等高保真界面。",
    "tags": [
      "UI",
      "仪表盘",
      "截图"
    ],
    "source": "freestylefly/awesome-gpt-image-2 工业级模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-ui",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/case17.jpg",
    "imageAlt": "UI 截图系统模板示例图",
    "prompt": "使用「UI 截图系统」模板生成一张可直接用于生产流程的图像。\n\n用途：用于 App 截图、仪表盘、社媒截图和直播界面。\n\n请先填写这些变量：\n- 主题：[主题或项目名称]\n- 目标受众：[目标受众]\n- 核心内容：[必须准确呈现的信息]\n- 视觉风格：[品牌气质、材质、光线、色彩]\n- 画面比例：[输出比例]\n\n生成要求：\n1. 锁定平台、比例、层级和画面文字。\n2. 明确状态栏、Tab、操作区、评论层等 UI 元素。\n\n画面必须具备清晰的信息层级、真实可用的构图、准确可读的关键文字，以及统一的字体、色彩和间距系统。不要生成空泛的概念图，不要把无意义文字塞进画面。\n\n避坑约束：\n1. 避免平台描述过泛。\n2. 约束文字可读性和平台特征。\n\n输出一张完成度高、可作为参考样张或工作流模板复用的图片。",
    "tips": [
      "这是结构化模板，适合先填变量再批量复用。",
      "图片中文字越重要，越要把标题、栏目名和短句单独列出。"
    ]
  },
  {
    "id": "style-infographic-engine",
    "title": "信息图引擎",
    "category": "图表与信息图",
    "description": "生成结构化图解、时间线、知识图谱和技术解释图。",
    "tags": [
      "Infographic",
      "图表",
      "教育"
    ],
    "source": "freestylefly/awesome-gpt-image-2 工业级模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-infographic",
    "recommendedSize": "4:5 / 16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/case334.png",
    "imageAlt": "信息图引擎模板示例图",
    "prompt": "使用「信息图引擎」模板生成一张可直接用于生产流程的图像。\n\n用途：用于解释图、技术图解、时间线和知识卡片。\n\n请先填写这些变量：\n- 主题：[主题或项目名称]\n- 目标受众：[目标受众]\n- 核心内容：[必须准确呈现的信息]\n- 视觉风格：[品牌气质、材质、光线、色彩]\n- 画面比例：[输出比例]\n\n生成要求：\n1. 定义 3-5 个模块、信息流、层级和短标签。\n2. 用色块、箭头、图标和留白控制复杂度。\n\n画面必须具备清晰的信息层级、真实可用的构图、准确可读的关键文字，以及统一的字体、色彩和间距系统。不要生成空泛的概念图，不要把无意义文字塞进画面。\n\n避坑约束：\n1. 避免把长段正文塞进画面。\n2. 先限制模块数量，再补视觉细节。\n\n输出一张完成度高、可作为参考样张或工作流模板复用的图片。",
    "tips": [
      "这是结构化模板，适合先填变量再批量复用。",
      "图片中文字越重要，越要把标题、栏目名和短句单独列出。"
    ]
  },
  {
    "id": "style-scientific-scale-diagram",
    "title": "科学尺度缩放图",
    "category": "图表与信息图",
    "description": "生成多尺度科学信息图，强调层级、标签和可读性。",
    "tags": [
      "Infographic",
      "图表",
      "教育"
    ],
    "source": "freestylefly/awesome-gpt-image-2 工业级模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-infographic",
    "recommendedSize": "4:5 / 16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/case341.jpg",
    "imageAlt": "科学尺度缩放图模板示例图",
    "prompt": "使用「科学尺度缩放图」模板生成一张可直接用于生产流程的图像。\n\n用途：用于需要从微观到宏观展示尺度变化的科普主题。\n\n请先填写这些变量：\n- 主题：[主题或项目名称]\n- 目标受众：[目标受众]\n- 核心内容：[必须准确呈现的信息]\n- 视觉风格：[品牌气质、材质、光线、色彩]\n- 画面比例：[输出比例]\n\n生成要求：\n1. 使用 6-8 个尺度框，每个标签保持短句。\n2. 展示单位、倍率和不同尺度的细节。\n\n画面必须具备清晰的信息层级、真实可用的构图、准确可读的关键文字，以及统一的字体、色彩和间距系统。不要生成空泛的概念图，不要把无意义文字塞进画面。\n\n避坑约束：\n1. 避免所有尺度框长得一样。\n2. 避免通用放大镜式布局。\n\n输出一张完成度高、可作为参考样张或工作流模板复用的图片。",
    "tips": [
      "这是结构化模板，适合先填变量再批量复用。",
      "图片中文字越重要，越要把标题、栏目名和短句单独列出。"
    ]
  },
  {
    "id": "style-poster-layout-system",
    "title": "海报排版系统",
    "category": "海报与排版",
    "description": "生成活动、产品、电影和社媒传播海报。",
    "tags": [
      "Poster",
      "字体",
      "商业 Campaign"
    ],
    "source": "freestylefly/awesome-gpt-image-2 工业级模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-poster",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/case345.jpg",
    "imageAlt": "海报排版系统模板示例图",
    "prompt": "使用「海报排版系统」模板生成一张可直接用于生产流程的图像。\n\n用途：用于活动海报、电影海报、封面和社媒传播视觉。\n\n请先填写这些变量：\n- 主题：[主题或项目名称]\n- 目标受众：[目标受众]\n- 核心内容：[必须准确呈现的信息]\n- 视觉风格：[品牌气质、材质、光线、色彩]\n- 画面比例：[输出比例]\n\n生成要求：\n1. 锁定主体、标题、版式、配色和比例。\n2. 突出标题层级和主视觉。\n\n画面必须具备清晰的信息层级、真实可用的构图、准确可读的关键文字，以及统一的字体、色彩和间距系统。不要生成空泛的概念图，不要把无意义文字塞进画面。\n\n避坑约束：\n1. 需要成品海报时，避免生成拼贴展示板。\n2. 约束多余文字和装饰符号。\n\n输出一张完成度高、可作为参考样张或工作流模板复用的图片。",
    "tips": [
      "这是结构化模板，适合先填变量再批量复用。",
      "图片中文字越重要，越要把标题、栏目名和短句单独列出。"
    ]
  },
  {
    "id": "style-sports-campaign-poster",
    "title": "运动商业 Campaign",
    "category": "海报与排版",
    "description": "生成运动员、道具、品牌色统一的商业运动海报。",
    "tags": [
      "Poster",
      "商业 Campaign",
      "字体"
    ],
    "source": "freestylefly/awesome-gpt-image-2 工业级模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-poster",
    "recommendedSize": "4:5 / 9:16",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/case350.jpg",
    "imageAlt": "运动商业 Campaign模板示例图",
    "prompt": "使用「运动商业 Campaign」模板生成一张可直接用于生产流程的图像。\n\n用途：用于运动品牌 Campaign、运动员海报和运动产品视觉。\n\n请先填写这些变量：\n- 主题：[主题或项目名称]\n- 目标受众：[目标受众]\n- 核心内容：[必须准确呈现的信息]\n- 视觉风格：[品牌气质、材质、光线、色彩]\n- 画面比例：[输出比例]\n\n生成要求：\n1. 定义运动项目、姿态、核心道具、标题和品牌色。\n2. 使用强光影、干净构图和可读数据层。\n\n画面必须具备清晰的信息层级、真实可用的构图、准确可读的关键文字，以及统一的字体、色彩和间距系统。不要生成空泛的概念图，不要把无意义文字塞进画面。\n\n避坑约束：\n1. 避免错误运动器材和杂乱拼贴。\n2. 让运动员和核心道具占据主导。\n\n输出一张完成度高、可作为参考样张或工作流模板复用的图片。",
    "tips": [
      "这是结构化模板，适合先填变量再批量复用。",
      "图片中文字越重要，越要把标题、栏目名和短句单独列出。"
    ]
  },
  {
    "id": "style-conceptual-typography-poster",
    "title": "概念字体海报",
    "category": "海报与排版",
    "description": "生成以标题文字为主视觉的高级字体海报。",
    "tags": [
      "字体",
      "Poster",
      "风格"
    ],
    "source": "freestylefly/awesome-gpt-image-2 工业级模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-poster",
    "recommendedSize": "4:5 / 16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/case355.jpg",
    "imageAlt": "概念字体海报模板示例图",
    "prompt": "使用「概念字体海报」模板生成一张可直接用于生产流程的图像。\n\n用途：用于标题文字需要成为主视觉结构的海报。\n\n请先填写这些变量：\n- 主题：[主题或项目名称]\n- 目标受众：[目标受众]\n- 核心内容：[必须准确呈现的信息]\n- 视觉风格：[品牌气质、材质、光线、色彩]\n- 画面比例：[输出比例]\n\n生成要求：\n1. 让字体成为画面主角，并保证标题拼写准确。\n2. 人物、物体或风景需要服务标题含义。\n\n画面必须具备清晰的信息层级、真实可用的构图、准确可读的关键文字，以及统一的字体、色彩和间距系统。不要生成空泛的概念图，不要把无意义文字塞进画面。\n\n避坑约束：\n1. 避免默认字效、无关图标和标题错字。\n2. 控制配色数量，保持克制。\n\n输出一张完成度高、可作为参考样张或工作流模板复用的图片。",
    "tips": [
      "这是结构化模板，适合先填变量再批量复用。",
      "图片中文字越重要，越要把标题、栏目名和短句单独列出。"
    ]
  },
  {
    "id": "style-ink-double-exposure-poster",
    "title": "水墨双重曝光海报",
    "category": "海报与排版",
    "description": "生成水墨、人像与层叠氛围结合的视觉海报。",
    "tags": [
      "Poster",
      "古典",
      "风格"
    ],
    "source": "freestylefly/awesome-gpt-image-2 工业级模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-poster",
    "recommendedSize": "4:5 / 9:16",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/case359.jpg",
    "imageAlt": "水墨双重曝光海报模板示例图",
    "prompt": "使用「水墨双重曝光海报」模板生成一张可直接用于生产流程的图像。\n\n用途：用于诗意人像海报、水墨氛围和文化主题视觉。\n\n请先填写这些变量：\n- 主题：[主题或项目名称]\n- 目标受众：[目标受众]\n- 核心内容：[必须准确呈现的信息]\n- 视觉风格：[品牌气质、材质、光线、色彩]\n- 画面比例：[输出比例]\n\n生成要求：\n1. 融合人像剪影、水墨质感、氛围和留白。\n2. 保持构图克制、高级、可读。\n\n画面必须具备清晰的信息层级、真实可用的构图、准确可读的关键文字，以及统一的字体、色彩和间距系统。不要生成空泛的概念图，不要把无意义文字塞进画面。\n\n避坑约束：\n1. 避免廉价奇幻拼贴和景物堆叠。\n2. 非必要时减少文字。\n\n输出一张完成度高、可作为参考样张或工作流模板复用的图片。",
    "tips": [
      "这是结构化模板，适合先填变量再批量复用。",
      "图片中文字越重要，越要把标题、栏目名和短句单独列出。"
    ]
  },
  {
    "id": "style-nature-science-poster",
    "title": "自然科普海报",
    "category": "海报与排版",
    "description": "生成极简产品感自然科普海报。",
    "tags": [
      "Poster",
      "教育",
      "风格"
    ],
    "source": "freestylefly/awesome-gpt-image-2 工业级模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-poster",
    "recommendedSize": "4:5 / 16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/case339.jpg",
    "imageAlt": "自然科普海报模板示例图",
    "prompt": "使用「自然科普海报」模板生成一张可直接用于生产流程的图像。\n\n用途：用于自然主题的高级、干净科普海报。\n\n请先填写这些变量：\n- 主题：[主题或项目名称]\n- 目标受众：[目标受众]\n- 核心内容：[必须准确呈现的信息]\n- 视觉风格：[品牌气质、材质、光线、色彩]\n- 画面比例：[输出比例]\n\n生成要求：\n1. 使用清晰主体、少量文案、柔和阴影和充足留白。\n2. 让科普标签短而清楚。\n\n画面必须具备清晰的信息层级、真实可用的构图、准确可读的关键文字，以及统一的字体、色彩和间距系统。不要生成空泛的概念图，不要把无意义文字塞进画面。\n\n避坑约束：\n1. 避免广告感太重。\n2. 避免密集百科正文。\n\n输出一张完成度高、可作为参考样张或工作流模板复用的图片。",
    "tips": [
      "这是结构化模板，适合先填变量再批量复用。",
      "图片中文字越重要，越要把标题、栏目名和短句单独列出。"
    ]
  },
  {
    "id": "style-product-commerce-visual",
    "title": "商品商业视觉",
    "category": "商品与电商",
    "description": "生成商品图、包装、详情页和卖点排版。",
    "tags": [
      "Product",
      "Commerce",
      "包装"
    ],
    "source": "freestylefly/awesome-gpt-image-2 工业级模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-product",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/case373.jpg",
    "imageAlt": "商品商业视觉模板示例图",
    "prompt": "使用「商品商业视觉」模板生成一张可直接用于生产流程的图像。\n\n用途：用于商品主图、包装视觉、详情页和销售卖点排版。\n\n请先填写这些变量：\n- 主题：[主题或项目名称]\n- 目标受众：[目标受众]\n- 核心内容：[必须准确呈现的信息]\n- 视觉风格：[品牌气质、材质、光线、色彩]\n- 画面比例：[输出比例]\n\n生成要求：\n1. 定义商品、卖点、材质、场景、光线和版块。\n2. 区分主商品、卖点标签和辅助道具。\n\n画面必须具备清晰的信息层级、真实可用的构图、准确可读的关键文字，以及统一的字体、色彩和间距系统。不要生成空泛的概念图，不要把无意义文字塞进画面。\n\n避坑约束：\n1. 避免无关道具削弱商品识别。\n2. 约束包装文字和卖点表达。\n\n输出一张完成度高、可作为参考样张或工作流模板复用的图片。",
    "tips": [
      "这是结构化模板，适合先填变量再批量复用。",
      "图片中文字越重要，越要把标题、栏目名和短句单独列出。"
    ]
  },
  {
    "id": "style-personalized-beauty-report",
    "title": "个性化美妆报告",
    "category": "商品与电商",
    "description": "生成美妆与生活方式产品的推荐报告版式。",
    "tags": [
      "Product",
      "版式",
      "风格"
    ],
    "source": "freestylefly/awesome-gpt-image-2 工业级模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-product",
    "recommendedSize": "4:5 / 16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/case353.jpg",
    "imageAlt": "个性化美妆报告模板示例图",
    "prompt": "使用「个性化美妆报告」模板生成一张可直接用于生产流程的图像。\n\n用途：用于美妆推荐、肤质报告、导购助手和生活方式商品卡片。\n\n请先填写这些变量：\n- 主题：[主题或项目名称]\n- 目标受众：[目标受众]\n- 核心内容：[必须准确呈现的信息]\n- 视觉风格：[品牌气质、材质、光线、色彩]\n- 画面比例：[输出比例]\n\n生成要求：\n1. 使用诊断、推荐和商品卡片的报告层级。\n2. 对齐商品图、标签和评分。\n\n画面必须具备清晰的信息层级、真实可用的构图、准确可读的关键文字，以及统一的字体、色彩和间距系统。不要生成空泛的概念图，不要把无意义文字塞进画面。\n\n避坑约束：\n1. 避免医疗化结论和难读小字。\n2. 保持推荐逻辑清楚。\n\n输出一张完成度高、可作为参考样张或工作流模板复用的图片。",
    "tips": [
      "这是结构化模板，适合先填变量再批量复用。",
      "图片中文字越重要，越要把标题、栏目名和短句单独列出。"
    ]
  },
  {
    "id": "style-brand-identity-package",
    "title": "品牌身份包",
    "category": "品牌与空间",
    "description": "生成 Logo、配色、字体、应用触点与品牌系统。",
    "tags": [
      "Brand",
      "Logo",
      "身份系统"
    ],
    "source": "freestylefly/awesome-gpt-image-2 工业级模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-brand",
    "recommendedSize": "4:5 / 9:16",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/case354.jpg",
    "imageAlt": "品牌身份包模板示例图",
    "prompt": "使用「品牌身份包」模板生成一张可直接用于生产流程的图像。\n\n用途：用于 Logo 系统、品牌板、VI 套件和应用样机。\n\n请先填写这些变量：\n- 主题：[主题或项目名称]\n- 目标受众：[目标受众]\n- 核心内容：[必须准确呈现的信息]\n- 视觉风格：[品牌气质、材质、光线、色彩]\n- 画面比例：[输出比例]\n\n生成要求：\n1. 定义品牌名、定位、配色、字体、Logo 用法和触点。\n2. 要求视觉板中的应用统一对齐。\n\n画面必须具备清晰的信息层级、真实可用的构图、准确可读的关键文字，以及统一的字体、色彩和间距系统。不要生成空泛的概念图，不要把无意义文字塞进画面。\n\n避坑约束：\n1. 避免无关 Logo 变体和混乱配色。\n2. 保持品牌文字准确。\n\n输出一张完成度高、可作为参考样张或工作流模板复用的图片。",
    "tips": [
      "这是结构化模板，适合先填变量再批量复用。",
      "图片中文字越重要，越要把标题、栏目名和短句单独列出。"
    ]
  },
  {
    "id": "style-brand-touchpoint-board",
    "title": "品牌触点视觉板",
    "category": "品牌与空间",
    "description": "生成包装、社媒、网页和展示场景里的品牌触点板。",
    "tags": [
      "Brand",
      "身份系统",
      "商业 Campaign"
    ],
    "source": "freestylefly/awesome-gpt-image-2 工业级模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-brand",
    "recommendedSize": "4:5 / 16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/case362.jpg",
    "imageAlt": "品牌触点视觉板模板示例图",
    "prompt": "使用「品牌触点视觉板」模板生成一张可直接用于生产流程的图像。\n\n用途：用于多触点 Campaign 展示和品牌落地预览。\n\n请先填写这些变量：\n- 主题：[主题或项目名称]\n- 目标受众：[目标受众]\n- 核心内容：[必须准确呈现的信息]\n- 视觉风格：[品牌气质、材质、光线、色彩]\n- 画面比例：[输出比例]\n\n生成要求：\n1. 指定触点清单、统一视觉规则和样机排列。\n2. 让所有面板共享配色和字体逻辑。\n\n画面必须具备清晰的信息层级、真实可用的构图、准确可读的关键文字，以及统一的字体、色彩和间距系统。不要生成空泛的概念图，不要把无意义文字塞进画面。\n\n避坑约束：\n1. 避免混入多个无关 Campaign 风格。\n2. 可读性下降时减少触点数量。\n\n输出一张完成度高、可作为参考样张或工作流模板复用的图片。",
    "tips": [
      "这是结构化模板，适合先填变量再批量复用。",
      "图片中文字越重要，越要把标题、栏目名和短句单独列出。"
    ]
  },
  {
    "id": "style-architecture-space",
    "title": "建筑与空间",
    "category": "品牌与空间",
    "description": "生成室内、建筑、城市地图和空间概念视觉。",
    "tags": [
      "Architecture",
      "室内",
      "地图"
    ],
    "source": "freestylefly/awesome-gpt-image-2 工业级模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-architecture",
    "recommendedSize": "4:5 / 16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/case331.png",
    "imageAlt": "建筑与空间模板示例图",
    "prompt": "使用「建筑与空间」模板生成一张可直接用于生产流程的图像。\n\n用途：用于室内、建筑表现、城市地图、空间规划和环境概念图。\n\n请先填写这些变量：\n- 主题：[主题或项目名称]\n- 目标受众：[目标受众]\n- 核心内容：[必须准确呈现的信息]\n- 视觉风格：[品牌气质、材质、光线、色彩]\n- 画面比例：[输出比例]\n\n生成要求：\n1. 定义视角、尺度、材质、光线和空间功能。\n2. 地图需要指定地标、标签、边框装饰和准确度。\n\n画面必须具备清晰的信息层级、真实可用的构图、准确可读的关键文字，以及统一的字体、色彩和间距系统。不要生成空泛的概念图，不要把无意义文字塞进画面。\n\n避坑约束：\n1. 概念图之外要避免不合理透视。\n2. 锁定地图标签语言和相对位置。\n\n输出一张完成度高、可作为参考样张或工作流模板复用的图片。",
    "tips": [
      "这是结构化模板，适合先填变量再批量复用。",
      "图片中文字越重要，越要把标题、栏目名和短句单独列出。"
    ]
  },
  {
    "id": "style-realistic-photography",
    "title": "写实摄影",
    "category": "摄影与文档",
    "description": "控制镜头、光线、胶片质感和纪实摄影效果。",
    "tags": [
      "Photography",
      "Realistic",
      "镜头"
    ],
    "source": "freestylefly/awesome-gpt-image-2 工业级模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-photo",
    "recommendedSize": "4:5 / 16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/case377.jpg",
    "imageAlt": "写实摄影模板示例图",
    "prompt": "使用「写实摄影」模板生成一张可直接用于生产流程的图像。\n\n用途：用于人像、街拍、商品摄影和电影感写实。\n\n请先填写这些变量：\n- 主题：[主题或项目名称]\n- 目标受众：[目标受众]\n- 核心内容：[必须准确呈现的信息]\n- 视觉风格：[品牌气质、材质、光线、色彩]\n- 画面比例：[输出比例]\n\n生成要求：\n1. 指定机位、镜头、光源、质感、背景和动作。\n2. 加入可信的小瑕疵增强纪实感。\n\n画面必须具备清晰的信息层级、真实可用的构图、准确可读的关键文字，以及统一的字体、色彩和间距系统。不要生成空泛的概念图，不要把无意义文字塞进画面。\n\n避坑约束：\n1. 商业美妆之外，避免过度磨皮。\n2. 需要时加入手部、文字、结构类负面约束。\n\n输出一张完成度高、可作为参考样张或工作流模板复用的图片。",
    "tips": [
      "这是结构化模板，适合先填变量再批量复用。",
      "图片中文字越重要，越要把标题、栏目名和短句单独列出。"
    ]
  },
  {
    "id": "style-street-accident-moment",
    "title": "街头意外瞬间摄影",
    "category": "摄影与文档",
    "description": "生成手机纪实风街头瞬间，并加入负面约束。",
    "tags": [
      "Photography",
      "Realistic",
      "场景"
    ],
    "source": "freestylefly/awesome-gpt-image-2 工业级模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-photo",
    "recommendedSize": "4:5 / 9:16",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/case376.jpg",
    "imageAlt": "街头意外瞬间摄影模板示例图",
    "prompt": "使用「街头意外瞬间摄影」模板生成一张可直接用于生产流程的图像。\n\n用途：用于街头抓拍、意外泼洒、手机纪实和快速动作。\n\n请先填写这些变量：\n- 主题：[主题或项目名称]\n- 目标受众：[目标受众]\n- 核心内容：[必须准确呈现的信息]\n- 视觉风格：[品牌气质、材质、光线、色彩]\n- 画面比例：[输出比例]\n\n生成要求：\n1. 描述具体瞬间、机位高度、运动模糊和街景。\n2. 加入避免摆拍和广告棚拍感的限制。\n\n画面必须具备清晰的信息层级、真实可用的构图、准确可读的关键文字，以及统一的字体、色彩和间距系统。不要生成空泛的概念图，不要把无意义文字塞进画面。\n\n避坑约束：\n1. 避免画面过于干净。\n2. 让事件看起来可信。\n\n输出一张完成度高、可作为参考样张或工作流模板复用的图片。",
    "tips": [
      "这是结构化模板，适合先填变量再批量复用。",
      "图片中文字越重要，越要把标题、栏目名和短句单独列出。"
    ]
  },
  {
    "id": "style-illustration-art-style",
    "title": "插画与艺术风格",
    "category": "海报与排版",
    "description": "生成插画、水彩、水墨、材质实验和艺术风格图。",
    "tags": [
      "Illustration",
      "艺术",
      "风格"
    ],
    "source": "freestylefly/awesome-gpt-image-2 工业级模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-illustration",
    "recommendedSize": "4:5 / 9:16",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/case346.jpg",
    "imageAlt": "插画与艺术风格模板示例图",
    "prompt": "使用「插画与艺术风格」模板生成一张可直接用于生产流程的图像。\n\n用途：用于插画、水彩、水墨、装饰画和风格实验。\n\n请先填写这些变量：\n- 主题：[主题或项目名称]\n- 目标受众：[目标受众]\n- 核心内容：[必须准确呈现的信息]\n- 视觉风格：[品牌气质、材质、光线、色彩]\n- 画面比例：[输出比例]\n\n生成要求：\n1. 定义构图、主体、配色、笔触材质、情绪和完成度。\n2. 参考图任务需要说明保留哪些特征。\n\n画面必须具备清晰的信息层级、真实可用的构图、准确可读的关键文字，以及统一的字体、色彩和间距系统。不要生成空泛的概念图，不要把无意义文字塞进画面。\n\n避坑约束：\n1. 避免只写风格，不写构图。\n2. 使用参考图时锁定角色识别。\n\n输出一张完成度高、可作为参考样张或工作流模板复用的图片。",
    "tips": [
      "这是结构化模板，适合先填变量再批量复用。",
      "图片中文字越重要，越要把标题、栏目名和短句单独列出。"
    ]
  },
  {
    "id": "style-scene-storytelling",
    "title": "场景叙事",
    "category": "摄影与文档",
    "description": "生成分镜、世界观、故事场景和情绪节奏。",
    "tags": [
      "场景",
      "Story",
      "分镜"
    ],
    "source": "freestylefly/awesome-gpt-image-2 工业级模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-scene",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/case330.png",
    "imageAlt": "场景叙事模板示例图",
    "prompt": "使用「场景叙事」模板生成一张可直接用于生产流程的图像。\n\n用途：用于分镜、世界观、直播场景和情绪叙事画面。\n\n请先填写这些变量：\n- 主题：[主题或项目名称]\n- 目标受众：[目标受众]\n- 核心内容：[必须准确呈现的信息]\n- 视觉风格：[品牌气质、材质、光线、色彩]\n- 画面比例：[输出比例]\n\n生成要求：\n1. 定义人物、地点、时间、冲突、情绪和机位。\n2. 让场景细节服务故事。\n\n画面必须具备清晰的信息层级、真实可用的构图、准确可读的关键文字，以及统一的字体、色彩和间距系统。不要生成空泛的概念图，不要把无意义文字塞进画面。\n\n避坑约束：\n1. 避免通用幻想背景。\n2. 让故事线索在画面里可见。\n\n输出一张完成度高、可作为参考样张或工作流模板复用的图片。",
    "tips": [
      "这是结构化模板，适合先填变量再批量复用。",
      "图片中文字越重要，越要把标题、栏目名和短句单独列出。"
    ]
  },
  {
    "id": "style-history-classical-themes",
    "title": "历史与古风题材",
    "category": "海报与排版",
    "description": "生成朝代服饰、长卷叙事、诗词和传统题材。",
    "tags": [
      "History",
      "古典",
      "长卷"
    ],
    "source": "freestylefly/awesome-gpt-image-2 工业级模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-history",
    "recommendedSize": "4:5 / 9:16",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/case375.jpg",
    "imageAlt": "历史与古风题材模板示例图",
    "prompt": "使用「历史与古风题材」模板生成一张可直接用于生产流程的图像。\n\n用途：用于古风题材、长卷、朝代服饰、诗词视觉和历史场景。\n\n请先填写这些变量：\n- 主题：[主题或项目名称]\n- 目标受众：[目标受众]\n- 核心内容：[必须准确呈现的信息]\n- 视觉风格：[品牌气质、材质、光线、色彩]\n- 画面比例：[输出比例]\n\n生成要求：\n1. 指定朝代、服饰制度、器物参考、版式和文化气质。\n2. 明确长卷、册页或海报形式。\n\n画面必须具备清晰的信息层级、真实可用的构图、准确可读的关键文字，以及统一的字体、色彩和间距系统。不要生成空泛的概念图，不要把无意义文字塞进画面。\n\n避坑约束：\n1. 需要历史准确时，避免朝代混搭。\n2. 约束随机现代物件。\n\n输出一张完成度高、可作为参考样张或工作流模板复用的图片。",
    "tips": [
      "这是结构化模板，适合先填变量再批量复用。",
      "图片中文字越重要，越要把标题、栏目名和短句单独列出。"
    ]
  },
  {
    "id": "style-document-publishing",
    "title": "文档与出版物",
    "category": "摄影与文档",
    "description": "生成白皮书、手册、百科图鉴和页面系统。",
    "tags": [
      "文档",
      "出版",
      "版式"
    ],
    "source": "freestylefly/awesome-gpt-image-2 工业级模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-document",
    "recommendedSize": "4:5 / 16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/case360.jpg",
    "imageAlt": "文档与出版物模板示例图",
    "prompt": "使用「文档与出版物」模板生成一张可直接用于生产流程的图像。\n\n用途：用于白皮书、手册、百科图鉴、报告页面和出版系统。\n\n请先填写这些变量：\n- 主题：[主题或项目名称]\n- 目标受众：[目标受众]\n- 核心内容：[必须准确呈现的信息]\n- 视觉风格：[品牌气质、材质、光线、色彩]\n- 画面比例：[输出比例]\n\n生成要求：\n1. 定义页面尺寸、分栏、目录、图表系统和字体层级。\n2. 使用可读标题、表格、标签和页面节奏。\n\n画面必须具备清晰的信息层级、真实可用的构图、准确可读的关键文字，以及统一的字体、色彩和间距系统。不要生成空泛的概念图，不要把无意义文字塞进画面。\n\n避坑约束：\n1. 避免密集小字。\n2. 让图表和说明对齐页面网格。\n\n输出一张完成度高、可作为参考样张或工作流模板复用的图片。",
    "tips": [
      "这是结构化模板，适合先填变量再批量复用。",
      "图片中文字越重要，越要把标题、栏目名和短句单独列出。"
    ]
  },
  {
    "id": "style-concept-product-breakdown",
    "title": "概念产品研发拆解",
    "category": "摄影与文档",
    "description": "生成研发板、拆解图、混合任务和特殊输出。",
    "tags": [
      "创意",
      "研发",
      "特殊输出"
    ],
    "source": "freestylefly/awesome-gpt-image-2 工业级模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-other",
    "recommendedSize": "4:5 / 16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/case370.jpg",
    "imageAlt": "概念产品研发拆解模板示例图",
    "prompt": "使用「概念产品研发拆解」模板生成一张可直接用于生产流程的图像。\n\n用途：用于实验型任务、研发视觉板、拆解图和特殊视觉系统。\n\n请先填写这些变量：\n- 主题：[主题或项目名称]\n- 目标受众：[目标受众]\n- 核心内容：[必须准确呈现的信息]\n- 视觉风格：[品牌气质、材质、光线、色彩]\n- 画面比例：[输出比例]\n\n生成要求：\n1. 定义产物类型、组件、标签、材质逻辑和展示格式。\n2. 使用清晰标注和受控技术风格。\n\n画面必须具备清晰的信息层级、真实可用的构图、准确可读的关键文字，以及统一的字体、色彩和间距系统。不要生成空泛的概念图，不要把无意义文字塞进画面。\n\n避坑约束：\n1. 避免任务边界过泛。\n2. 标签要短，组件关系要清楚。\n\n输出一张完成度高、可作为参考样张或工作流模板复用的图片。",
    "tips": [
      "这是结构化模板，适合先填变量再批量复用。",
      "图片中文字越重要，越要把标题、栏目名和短句单独列出。"
    ]
  },
  {
    "id": "style-category-ui",
    "title": "UI 与界面通用模板",
    "category": "UI 与界面",
    "description": "App、网页、仪表盘、社媒截图与产品界面。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "freestylefly/awesome-gpt-image-2 分类模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/README.zh-CN.md#cat-ui",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/category-covers/ui.jpg",
    "imageAlt": "UI 与界面分类示例图",
    "prompt": "围绕「[主题]」生成一张UI 与界面方向的高质量图片。\n\n使用场景：App、网页、仪表盘、社媒截图与产品界面。\n\n请补充这些变量：\n- 主题或项目：[主题]\n- 目标用途：[投放/汇报/社媒/课程/商品页/品牌提案]\n- 必须出现的文字：[标题、栏目名、短标签]\n- 视觉风格：[材质、光线、色彩、参考行业]\n- 输出比例：[比例]\n\n画面要求：主体明确、信息层级清楚、边距和留白稳定，关键文字可读，风格统一且可复用。根据用途自动补齐标题、副标题、图例、标注、产品或场景细节。不要使用乱码、水印、重复元素或与主题无关的装饰。",
    "tips": [
      "适合不知道从哪个具体案例开始时作为基础模板。",
      "先确定用途和必须出现的文字，再补充行业、品牌和画面比例。"
    ]
  },
  {
    "id": "style-category-infographic",
    "title": "图表与信息可视化通用模板",
    "category": "图表与信息图",
    "description": "信息图、知识图谱、技术解释与结构化图解。",
    "tags": [
      "信息图",
      "结构化",
      "说明"
    ],
    "source": "freestylefly/awesome-gpt-image-2 分类模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/README.zh-CN.md#cat-infographic",
    "recommendedSize": "4:5 / 16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/category-covers/infographic.jpg",
    "imageAlt": "图表与信息可视化分类示例图",
    "prompt": "围绕「[主题]」生成一张图表与信息可视化方向的高质量图片。\n\n使用场景：信息图、知识图谱、技术解释与结构化图解。\n\n请补充这些变量：\n- 主题或项目：[主题]\n- 目标用途：[投放/汇报/社媒/课程/商品页/品牌提案]\n- 必须出现的文字：[标题、栏目名、短标签]\n- 视觉风格：[材质、光线、色彩、参考行业]\n- 输出比例：[比例]\n\n画面要求：主体明确、信息层级清楚、边距和留白稳定，关键文字可读，风格统一且可复用。根据用途自动补齐标题、副标题、图例、标注、产品或场景细节。不要使用乱码、水印、重复元素或与主题无关的装饰。",
    "tips": [
      "适合不知道从哪个具体案例开始时作为基础模板。",
      "先确定用途和必须出现的文字，再补充行业、品牌和画面比例。"
    ]
  },
  {
    "id": "style-category-poster",
    "title": "海报与排版通用模板",
    "category": "海报与排版",
    "description": "活动海报、封面、字体视觉和强排版画面。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "freestylefly/awesome-gpt-image-2 分类模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/README.zh-CN.md#cat-poster",
    "recommendedSize": "4:5 / 9:16",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/category-covers/poster.jpg",
    "imageAlt": "海报与排版分类示例图",
    "prompt": "围绕「[主题]」生成一张海报与排版方向的高质量图片。\n\n使用场景：活动海报、封面、字体视觉和强排版画面。\n\n请补充这些变量：\n- 主题或项目：[主题]\n- 目标用途：[投放/汇报/社媒/课程/商品页/品牌提案]\n- 必须出现的文字：[标题、栏目名、短标签]\n- 视觉风格：[材质、光线、色彩、参考行业]\n- 输出比例：[比例]\n\n画面要求：主体明确、信息层级清楚、边距和留白稳定，关键文字可读，风格统一且可复用。根据用途自动补齐标题、副标题、图例、标注、产品或场景细节。不要使用乱码、水印、重复元素或与主题无关的装饰。",
    "tips": [
      "适合不知道从哪个具体案例开始时作为基础模板。",
      "先确定用途和必须出现的文字，再补充行业、品牌和画面比例。"
    ]
  },
  {
    "id": "style-category-product",
    "title": "商品与电商通用模板",
    "category": "商品与电商",
    "description": "商品图、详情页、包装卖点和商业广告。",
    "tags": [
      "商品",
      "商业",
      "卖点"
    ],
    "source": "freestylefly/awesome-gpt-image-2 分类模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/README.zh-CN.md#cat-product",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/category-covers/product.jpg",
    "imageAlt": "商品与电商分类示例图",
    "prompt": "围绕「[主题]」生成一张商品与电商方向的高质量图片。\n\n使用场景：商品图、详情页、包装卖点和商业广告。\n\n请补充这些变量：\n- 主题或项目：[主题]\n- 目标用途：[投放/汇报/社媒/课程/商品页/品牌提案]\n- 必须出现的文字：[标题、栏目名、短标签]\n- 视觉风格：[材质、光线、色彩、参考行业]\n- 输出比例：[比例]\n\n画面要求：主体明确、信息层级清楚、边距和留白稳定，关键文字可读，风格统一且可复用。根据用途自动补齐标题、副标题、图例、标注、产品或场景细节。不要使用乱码、水印、重复元素或与主题无关的装饰。",
    "tips": [
      "适合不知道从哪个具体案例开始时作为基础模板。",
      "先确定用途和必须出现的文字，再补充行业、品牌和画面比例。"
    ]
  },
  {
    "id": "style-category-brand",
    "title": "品牌与标志通用模板",
    "category": "品牌与空间",
    "description": "Logo、VI、品牌触点和 Campaign 视觉系统。",
    "tags": [
      "品牌",
      "空间",
      "视觉系统"
    ],
    "source": "freestylefly/awesome-gpt-image-2 分类模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/README.zh-CN.md#cat-brand",
    "recommendedSize": "16:9 / 4:5",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/category-covers/brand.jpg",
    "imageAlt": "品牌与标志分类示例图",
    "prompt": "围绕「[主题]」生成一张品牌与标志方向的高质量图片。\n\n使用场景：Logo、VI、品牌触点和 Campaign 视觉系统。\n\n请补充这些变量：\n- 主题或项目：[主题]\n- 目标用途：[投放/汇报/社媒/课程/商品页/品牌提案]\n- 必须出现的文字：[标题、栏目名、短标签]\n- 视觉风格：[材质、光线、色彩、参考行业]\n- 输出比例：[比例]\n\n画面要求：主体明确、信息层级清楚、边距和留白稳定，关键文字可读，风格统一且可复用。根据用途自动补齐标题、副标题、图例、标注、产品或场景细节。不要使用乱码、水印、重复元素或与主题无关的装饰。",
    "tips": [
      "适合不知道从哪个具体案例开始时作为基础模板。",
      "先确定用途和必须出现的文字，再补充行业、品牌和画面比例。"
    ]
  },
  {
    "id": "style-category-architecture",
    "title": "建筑与空间通用模板",
    "category": "品牌与空间",
    "description": "建筑表现、室内空间、城市地图和空间概念。",
    "tags": [
      "品牌",
      "空间",
      "视觉系统"
    ],
    "source": "freestylefly/awesome-gpt-image-2 分类模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/README.zh-CN.md#cat-architecture",
    "recommendedSize": "4:5 / 16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/category-covers/architecture.jpg",
    "imageAlt": "建筑与空间分类示例图",
    "prompt": "围绕「[主题]」生成一张建筑与空间方向的高质量图片。\n\n使用场景：建筑表现、室内空间、城市地图和空间概念。\n\n请补充这些变量：\n- 主题或项目：[主题]\n- 目标用途：[投放/汇报/社媒/课程/商品页/品牌提案]\n- 必须出现的文字：[标题、栏目名、短标签]\n- 视觉风格：[材质、光线、色彩、参考行业]\n- 输出比例：[比例]\n\n画面要求：主体明确、信息层级清楚、边距和留白稳定，关键文字可读，风格统一且可复用。根据用途自动补齐标题、副标题、图例、标注、产品或场景细节。不要使用乱码、水印、重复元素或与主题无关的装饰。",
    "tips": [
      "适合不知道从哪个具体案例开始时作为基础模板。",
      "先确定用途和必须出现的文字，再补充行业、品牌和画面比例。"
    ]
  },
  {
    "id": "style-category-photo",
    "title": "摄影与写实通用模板",
    "category": "摄影与文档",
    "description": "人像、手机纪实、胶片质感和商业摄影。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "freestylefly/awesome-gpt-image-2 分类模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/README.zh-CN.md#cat-photo",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/category-covers/photo.jpg",
    "imageAlt": "摄影与写实分类示例图",
    "prompt": "围绕「[主题]」生成一张摄影与写实方向的高质量图片。\n\n使用场景：人像、手机纪实、胶片质感和商业摄影。\n\n请补充这些变量：\n- 主题或项目：[主题]\n- 目标用途：[投放/汇报/社媒/课程/商品页/品牌提案]\n- 必须出现的文字：[标题、栏目名、短标签]\n- 视觉风格：[材质、光线、色彩、参考行业]\n- 输出比例：[比例]\n\n画面要求：主体明确、信息层级清楚、边距和留白稳定，关键文字可读，风格统一且可复用。根据用途自动补齐标题、副标题、图例、标注、产品或场景细节。不要使用乱码、水印、重复元素或与主题无关的装饰。",
    "tips": [
      "适合不知道从哪个具体案例开始时作为基础模板。",
      "先确定用途和必须出现的文字，再补充行业、品牌和画面比例。"
    ]
  },
  {
    "id": "style-category-illustration",
    "title": "插画与艺术通用模板",
    "category": "海报与排版",
    "description": "插画、艺术风格、材质实验和装饰画面。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "freestylefly/awesome-gpt-image-2 分类模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/README.zh-CN.md#cat-illustration",
    "recommendedSize": "4:5 / 9:16",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/category-covers/illustration.jpg",
    "imageAlt": "插画与艺术分类示例图",
    "prompt": "围绕「[主题]」生成一张插画与艺术方向的高质量图片。\n\n使用场景：插画、艺术风格、材质实验和装饰画面。\n\n请补充这些变量：\n- 主题或项目：[主题]\n- 目标用途：[投放/汇报/社媒/课程/商品页/品牌提案]\n- 必须出现的文字：[标题、栏目名、短标签]\n- 视觉风格：[材质、光线、色彩、参考行业]\n- 输出比例：[比例]\n\n画面要求：主体明确、信息层级清楚、边距和留白稳定，关键文字可读，风格统一且可复用。根据用途自动补齐标题、副标题、图例、标注、产品或场景细节。不要使用乱码、水印、重复元素或与主题无关的装饰。",
    "tips": [
      "适合不知道从哪个具体案例开始时作为基础模板。",
      "先确定用途和必须出现的文字，再补充行业、品牌和画面比例。"
    ]
  },
  {
    "id": "style-category-scene",
    "title": "场景与叙事通用模板",
    "category": "摄影与文档",
    "description": "分镜、故事场景、直播画面和世界观叙事。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "freestylefly/awesome-gpt-image-2 分类模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/README.zh-CN.md#cat-scene",
    "recommendedSize": "9:16 / 16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/category-covers/scene.jpg",
    "imageAlt": "场景与叙事分类示例图",
    "prompt": "围绕「[主题]」生成一张场景与叙事方向的高质量图片。\n\n使用场景：分镜、故事场景、直播画面和世界观叙事。\n\n请补充这些变量：\n- 主题或项目：[主题]\n- 目标用途：[投放/汇报/社媒/课程/商品页/品牌提案]\n- 必须出现的文字：[标题、栏目名、短标签]\n- 视觉风格：[材质、光线、色彩、参考行业]\n- 输出比例：[比例]\n\n画面要求：主体明确、信息层级清楚、边距和留白稳定，关键文字可读，风格统一且可复用。根据用途自动补齐标题、副标题、图例、标注、产品或场景细节。不要使用乱码、水印、重复元素或与主题无关的装饰。",
    "tips": [
      "适合不知道从哪个具体案例开始时作为基础模板。",
      "先确定用途和必须出现的文字，再补充行业、品牌和画面比例。"
    ]
  },
  {
    "id": "style-category-history",
    "title": "历史与古风题材通用模板",
    "category": "海报与排版",
    "description": "古风长卷、历史人物、传统题材和诗词画面。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "freestylefly/awesome-gpt-image-2 分类模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/README.zh-CN.md#cat-history",
    "recommendedSize": "4:5 / 9:16",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/category-covers/history.jpg",
    "imageAlt": "历史与古风题材分类示例图",
    "prompt": "围绕「[主题]」生成一张历史与古风题材方向的高质量图片。\n\n使用场景：古风长卷、历史人物、传统题材和诗词画面。\n\n请补充这些变量：\n- 主题或项目：[主题]\n- 目标用途：[投放/汇报/社媒/课程/商品页/品牌提案]\n- 必须出现的文字：[标题、栏目名、短标签]\n- 视觉风格：[材质、光线、色彩、参考行业]\n- 输出比例：[比例]\n\n画面要求：主体明确、信息层级清楚、边距和留白稳定，关键文字可读，风格统一且可复用。根据用途自动补齐标题、副标题、图例、标注、产品或场景细节。不要使用乱码、水印、重复元素或与主题无关的装饰。",
    "tips": [
      "适合不知道从哪个具体案例开始时作为基础模板。",
      "先确定用途和必须出现的文字，再补充行业、品牌和画面比例。"
    ]
  },
  {
    "id": "style-category-document",
    "title": "文档与出版物通用模板",
    "category": "摄影与文档",
    "description": "白皮书、手册、百科图鉴和出版页设计。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "freestylefly/awesome-gpt-image-2 分类模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/README.zh-CN.md#cat-document",
    "recommendedSize": "4:5 / 16:9",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/category-covers/document.jpg",
    "imageAlt": "文档与出版物分类示例图",
    "prompt": "围绕「[主题]」生成一张文档与出版物方向的高质量图片。\n\n使用场景：白皮书、手册、百科图鉴和出版页设计。\n\n请补充这些变量：\n- 主题或项目：[主题]\n- 目标用途：[投放/汇报/社媒/课程/商品页/品牌提案]\n- 必须出现的文字：[标题、栏目名、短标签]\n- 视觉风格：[材质、光线、色彩、参考行业]\n- 输出比例：[比例]\n\n画面要求：主体明确、信息层级清楚、边距和留白稳定，关键文字可读，风格统一且可复用。根据用途自动补齐标题、副标题、图例、标注、产品或场景细节。不要使用乱码、水印、重复元素或与主题无关的装饰。",
    "tips": [
      "适合不知道从哪个具体案例开始时作为基础模板。",
      "先确定用途和必须出现的文字，再补充行业、品牌和画面比例。"
    ]
  },
  {
    "id": "style-category-other",
    "title": "其他应用场景通用模板",
    "category": "摄影与文档",
    "description": "创意实验、特殊任务、混合玩法和实用场景。",
    "tags": [
      "摄影",
      "文档",
      "真实感"
    ],
    "source": "freestylefly/awesome-gpt-image-2 分类模板",
    "sourceUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/README.zh-CN.md#cat-other",
    "recommendedSize": "3:4 / 4:5",
    "imageUrl": "https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/category-covers/other.jpg",
    "imageAlt": "其他应用场景分类示例图",
    "prompt": "围绕「[主题]」生成一张其他应用场景方向的高质量图片。\n\n使用场景：创意实验、特殊任务、混合玩法和实用场景。\n\n请补充这些变量：\n- 主题或项目：[主题]\n- 目标用途：[投放/汇报/社媒/课程/商品页/品牌提案]\n- 必须出现的文字：[标题、栏目名、短标签]\n- 视觉风格：[材质、光线、色彩、参考行业]\n- 输出比例：[比例]\n\n画面要求：主体明确、信息层级清楚、边距和留白稳定，关键文字可读，风格统一且可复用。根据用途自动补齐标题、副标题、图例、标注、产品或场景细节。不要使用乱码、水印、重复元素或与主题无关的装饰。",
    "tips": [
      "适合不知道从哪个具体案例开始时作为基础模板。",
      "先确定用途和必须出现的文字，再补充行业、品牌和画面比例。"
    ]
  }
]

const DEFAULT_CURATED_TEMPLATE_TIPS = [
  '把方括号变量替换成自己的产品、主题、城市或数据，再保留原案例的版式结构。',
  '如果画面包含文字，先限定标题、短标签和模块层级，生成后再局部修正文字。',
]

type CuratedSourceKey = 'wuyoscar' | 'evolink' | 'youmind' | 'kkkm'

const CURATED_SOURCE_META: Record<CuratedSourceKey, {
  source: string
  description: string
  sourceBaseUrl: string
  imageBaseUrl: string
}> = {
  wuyoscar: {
    source: 'wuyoscar/gpt_image_2_skill 精选',
    description: '来自 wuyoscar/gpt_image_2_skill 的实用案例精选，已转写为中文可复用模板。',
    sourceBaseUrl: 'https://github.com/wuyoscar/gpt_image_2_skill/blob/main/',
    imageBaseUrl: 'https://cdn.jsdelivr.net/gh/wuyoscar/gpt_image_2_skill@main/',
  },
  evolink: {
    source: 'EvoLinkAI/awesome-gpt-image-2-API-and-Prompts 精选',
    description: '来自 EvoLinkAI/awesome-gpt-image-2-API-and-Prompts 的高质量商业案例精选，已转写为中文可复用模板。',
    sourceBaseUrl: 'https://github.com/EvoLinkAI/awesome-gpt-image-2-API-and-Prompts/blob/main/',
    imageBaseUrl: 'https://cdn.jsdelivr.net/gh/EvoLinkAI/awesome-gpt-image-2-API-and-Prompts@main/',
  },
  youmind: {
    source: 'YouMind-OpenLab/awesome-gpt-image-2 精选',
    description: '来自 YouMind-OpenLab/awesome-gpt-image-2 的实用案例精选，已转写为中文可复用模板。',
    sourceBaseUrl: 'https://github.com/YouMind-OpenLab/awesome-gpt-image-2/blob/main/',
    imageBaseUrl: '',
  },
  kkkm: {
    source: 'prompts.kkkm.cn / all-image-prompts 精选',
    description: '来自 prompts.kkkm.cn 与 junxiaopang/all-image-prompts 的实用案例精选，已转写为中文可复用模板。',
    sourceBaseUrl: 'https://github.com/junxiaopang/all-image-prompts/blob/main/',
    imageBaseUrl: 'https://cdn.jsdelivr.net/gh/junxiaopang/all-image-prompts@main/public/',
  },
}

function resolveCuratedAssetUrl(baseUrl: string, path: string) {
  if (/^https?:\/\//.test(path)) return path
  return `${baseUrl}${path.replace(/^\/+/, '')}`
}

function buildCuratedImagePrompt(
  title: string,
  focus: string,
  structure: string,
  style: string,
  recommendedSize: string,
) {
  return `生成一张「${title}」高质量图片，主题可替换为[主题/品牌/产品/城市/数据]，但要保留原案例的清晰结构和可读性。

核心内容：${focus}

画面结构：${structure}

视觉要求：${style}

输出要求：比例 ${recommendedSize}，关键文字使用简体中文或用户指定语言，标题、标签、图例必须清晰可读。避免乱码、水印、低清截图、重复元素和与主题无关的装饰。`
}

function createCuratedTemplate(
  id: string,
  title: string,
  category: PromptTemplateInput['category'],
  subcategory: PromptTemplateInput['subcategory'],
  tags: string[],
  sourceKey: CuratedSourceKey,
  sourcePath: string,
  imagePath: string,
  recommendedSize: string,
  focus: string,
  structure: string,
  style: string,
): PromptTemplateInput {
  const source = CURATED_SOURCE_META[sourceKey]

  return {
    id,
    title,
    category,
    subcategory,
    description: source.description,
    tags,
    source: source.source,
    sourceUrl: resolveCuratedAssetUrl(source.sourceBaseUrl, sourcePath),
    recommendedSize,
    imageUrl: resolveCuratedAssetUrl(source.imageBaseUrl, imagePath),
    imageAlt: `${title}示例图`,
    prompt: buildCuratedImagePrompt(title, focus, structure, style, recommendedSize),
    tips: DEFAULT_CURATED_TEMPLATE_TIPS,
  }
}

const EXTRA_CURATED_PROMPT_TEMPLATES: PromptTemplateInput[] = [
  createCuratedTemplate(
    'wuyoscar-ui-budgeting-app',
    '移动预算 App 首页',
    'UI 与界面',
    '移动 App',
    ['移动 App', '金融', '界面'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-ui-ux-mockups.md',
    'docs/uiux-mockups/mobile-budgeting-app-neobank.png',
    '9:16',
    '为虚构银行、预算工具或个人财务产品生成完整首页，包含余额、收入支出、储蓄率、周消费图表和交易列表。',
    '手机正面展示，顶部问候语与总资产，中部三枚数据卡片，下方柱状图、交易明细和底部导航，所有数字与标签都要有真实产品感。',
    '深蓝、薄荷绿、暖灰和白色为主，圆角卡片克制，图标对齐，留白干净，像真实金融 App 的设计稿。',
  ),
  createCuratedTemplate(
    'wuyoscar-ui-operations-dashboard',
    'SaaS 运营仪表盘',
    'UI 与界面',
    '网页仪表盘',
    ['仪表盘', 'SaaS', '数据'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-ui-ux-mockups.md',
    'docs/uiux-mockups/desktop-analytics-dashboard-operations.png',
    '16:10',
    '为运维、增长或业务监控平台生成桌面端数据看板，展示关键指标、趋势图、表格和告警状态。',
    '左侧导航、顶部筛选栏、四个 KPI 卡片、折线图、环形图、数据表和告警面板形成严谨网格，文字如“运营概览”“近 30 天”“正常率”“延迟”等要清晰。',
    '冷静的 slate、钴蓝、青绿色和浅灰配色，轻玻璃面板、细边框、紧凑间距，适合企业级后台产品。',
  ),
  createCuratedTemplate(
    'wuyoscar-ui-design-system-board',
    '设计系统组件总览板',
    'UI 与界面',
    'UI 系统',
    ['设计系统', '组件', '规范'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-ui-ux-mockups.md',
    'docs/uiux-mockups/design-system-component-card-set.png',
    '1:1',
    '生成一个产品设计系统展示板，集中呈现按钮、输入框、状态标签、卡片、头像、告警和字体层级。',
    '使用整齐的方形组件画廊，顶部放系统名称，中间按模块分组，底部保留色彩、字号和状态示例，组件边距、圆角和阴影保持一致。',
    '象牙白、炭黑、雾蓝、鼠尾草绿和珊瑚色点缀，像从专业设计工具导出的组件库封面。',
  ),
  createCuratedTemplate(
    'wuyoscar-ui-web3-wallet',
    'Web3 钱包移动界面',
    'UI 与界面',
    '移动 App',
    ['钱包', '资产', '移动端'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-ui-ux-mockups.md',
    'docs/uiux-mockups/web3-wallet-app-concept.png',
    '9:16',
    '为虚构数字钱包或资产管理产品生成移动端界面，强调资产总览、收发兑换、代币卡片、安全等级和近期活动。',
    '手机屏幕置于深色背景，首页上方显示资产与涨跌，中部是操作按钮和代币列表，下方是安全模块与记录列表，所有金额和标签合理可读。',
    '黑色石墨、青蓝、翡翠绿、紫蓝和柔白组成高级科技感，不要做成廉价炫光界面。',
  ),
  createCuratedTemplate(
    'wuyoscar-ui-health-tracker',
    '健康追踪 App 日报',
    'UI 与界面',
    '移动 App',
    ['健康', '追踪', '日报'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-ui-ux-mockups.md',
    'docs/uiux-mockups/health-tracker-wellness-app.png',
    '9:16',
    '为健康、睡眠或运动记录产品生成日总结页，展示步数、睡眠、心率、饮水、恢复和专注状态。',
    '使用明亮手机界面，包含圆环进度、周趋势小图、洞察卡片和两个主要操作按钮，避免医学诊断口吻，只表现日常健康记录。',
    '薄荷绿、森林绿、奶油白、珊瑚色和冷灰搭配，干净、有序、像成熟健康应用的宣传截图。',
  ),
  createCuratedTemplate(
    'wuyoscar-product-dieline-box',
    '刀模展开到 3D 包装盒',
    '商品与电商',
    '包装卖点',
    ['包装', '刀模', '3D'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-product-and-food.md',
    'docs/product-food/product-dieline-box.png',
    '4:3',
    '基于[上传的刀模/包装平面图]生成完整 3D 包装展示，保持原有图案、文字、颜色和折线关系。',
    '左侧保留平面刀模视图，右侧展示已折成立体盒子的正面、侧面和顶部，旁边可加入局部放大与材质标注。',
    '白色或浅灰摄影棚背景，柔和接触阴影，纸盒边缘真实，适合包装提案、打样说明或电商主图。',
  ),
  createCuratedTemplate(
    'wuyoscar-product-chocolate-wafer',
    '巧克力威化产品渲染',
    '商品与电商',
    '商品广告',
    ['食品', '包装', '广告'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-product-and-food.md',
    'docs/product-food/product-chocolate-wafer.png',
    '1:1',
    '为巧克力、饼干或零食包装生成商业级主视觉，突出包装盒、打开的产品截面和真实食材质感。',
    '画面中心放主包装，前景展示切开的威化层、巧克力涂层和碎屑，背景加入少量可可、坚果或风味道具，标题和卖点短句清晰。',
    '暖棕、奶油色和金色高光，食品摄影真实诱人，阴影柔和，不要做成夸张卡通风。',
  ),
  createCuratedTemplate(
    'wuyoscar-food-salad-explosion',
    '沙拉飞溅美食摄影',
    '商品与电商',
    '商品广告',
    ['美食', '摄影', '广告'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-product-and-food.md',
    'docs/product-food/food-salad-explosion.png',
    '1:1',
    '为沙拉、轻食或健康餐生成动态商业美食图，表现食材飞溅、层次丰富和新鲜质感。',
    '中心为装盘成品，周围悬浮蔬菜、水滴、酱汁和香草，所有食材位置有节奏但不混乱，前景保留可食用细节。',
    '高速棚拍质感，清爽明亮背景，色彩真实饱满，适合外卖菜单、轻食品牌或社媒广告。',
  ),
  createCuratedTemplate(
    'wuyoscar-product-commercial-poster',
    '通用商品商业海报',
    '商品与电商',
    '商品广告',
    ['商品', '海报', '广告'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-product-and-food.md',
    'docs/product-food/aurora-oolong-poster.png',
    '9:16',
    '为饮料、护肤、香氛或食品生成竖版商业海报，主体是一个清晰可替换的产品。',
    '产品居中或偏右，左侧放主标题、卖点短句和三枚功能标签，底部放品牌名或行动按钮，背景用与产品风味相关的材质和光线。',
    '干净、明亮、商业完成度高，文字不超过三层，确保适合手机端广告投放。',
  ),
  createCuratedTemplate(
    'wuyoscar-poster-chinese-tea-launch',
    '新中式茶饮发布海报',
    '海报与排版',
    '活动海报',
    ['茶饮', '海报', '排版'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-typography-and-posters.md',
    'docs/typography-posters/tea-poster.png',
    '9:16',
    '为茶饮、香氛或东方生活方式品牌生成发布海报，突出产品气质、中文标题和新中式视觉。',
    '画面包含产品、茶叶或植物道具、留白标题区、细小日期地点信息和一两句短标语，版式纵向稳定。',
    '克制的新中式色彩、纸张纹理、柔和自然光和现代中文字体，避免过度古风堆砌。',
  ),
  createCuratedTemplate(
    'wuyoscar-poster-boston-city',
    '城市春季宣传海报',
    '海报与排版',
    '旅行城市',
    ['城市', '旅行', '海报'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-typography-and-posters.md',
    'docs/typography-posters/boston-poster.png',
    '9:16',
    '为[城市/季节/活动]生成一张旅行宣传海报，把城市地标、河流、街区、文化符号和季节氛围融合成主视觉。',
    '使用大面积浅色背景，主体视觉从底部或角落延展成流动曲线，曲线中嵌入多个城市细节，标题与日期放在低位留白区。',
    '像高端城市节庆海报，细节丰富但不拥挤，文字清晰，适合旅游局、城市活动或品牌城市企划。',
  ),
  createCuratedTemplate(
    'wuyoscar-poster-dual-exposure',
    '双重曝光叙事海报',
    '海报与排版',
    '活动海报',
    ['双重曝光', '叙事', '海报'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-typography-and-posters.md',
    'docs/typography-posters/dual-exposure-poster.png',
    '4:5',
    '为电影、展览、课程或品牌故事生成双重曝光海报，用一个主体轮廓承载内部场景和情绪线索。',
    '外层是清晰人物、建筑或产品剪影，内部叠加关键场景、道路、光带、天气或记忆片段，标题置于下方或侧边。',
    '高对比、层次干净、边缘清晰，叙事感强但不杂乱，适合封面和活动主视觉。',
  ),
  createCuratedTemplate(
    'wuyoscar-poster-chongqing-night',
    '雨夜城市宣传海报',
    '海报与排版',
    '旅行城市',
    ['城市', '夜景', '海报'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-typography-and-posters.md',
    'docs/typography-posters/city-tourism-promo-poster.png',
    '9:16',
    '为山城、港口、夜市或雨夜街区生成情绪化城市宣传海报，突出湿润街面、霓虹、层叠建筑和城市纵深。',
    '前景有人行道或交通动线，中景是坡道、桥梁或街巷，远景是密集楼宇和雾气，标题、地点和短口号放在安全留白处。',
    '电影感雨夜光线，真实反射，不要堆砌过多霓虹，整体高级、可读、适合城市文旅视觉。',
  ),
  createCuratedTemplate(
    'wuyoscar-infographic-museum-disassembly',
    '博物馆藏品拆解信息图',
    '图表与信息图',
    '技术拆解',
    ['博物馆', '拆解', '信息图'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-infographics-and-field-guides.md',
    'docs/infographics-field-guides/museum-infographic.png',
    '4:5',
    '为服饰、器物、建筑构件或传统工艺生成博物馆目录式拆解图，兼具主视觉和结构说明。',
    '中心展示主体，四周用引线连接局部放大模块，包含材料、纹样、结构、年代、尺寸、工艺和使用场景等短标签。',
    '复古纸张或博物馆白底风格，中文标注清楚，信息密度高但网格有序，适合课程讲义和展览说明。',
  ),
  createCuratedTemplate(
    'wuyoscar-infographic-seoul-travel',
    '周末旅行指南海报',
    '图表与信息图',
    '地图时间线',
    ['旅行', '指南', '地图'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-infographics-and-field-guides.md',
    'docs/infographics-field-guides/seoul-travel-guide.png',
    '4:5',
    '为[城市]生成周末旅行指南，把路线、地标、美食、交通和时间安排做成可收藏的图文海报。',
    '包含简化城市地图、一日或两日时间线、三到五个地标小插图、交通提示、预算提示和推荐清单。',
    '手绘与编辑排版结合，颜色轻快但不幼稚，适合小红书、旅游攻略和城市活动页。',
  ),
  createCuratedTemplate(
    'wuyoscar-research-rag-pipeline',
    'RAG 检索增强流程图',
    '图表与信息图',
    '技术拆解',
    ['RAG', '流程图', '技术'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-research-paper-figures.md',
    'docs/research-paper-figures/rag-pipeline.png',
    '16:9',
    '为检索增强生成、知识库问答或企业智能助手生成论文级流程图。',
    '从用户问题开始，依次展示查询改写、向量检索、重排、上下文组装、模型生成、引用返回和反馈闭环，箭头方向明确。',
    '白底学术图风格，模块颜色克制，图标简洁，术语短而准，可用于论文、技术博客或方案汇报。',
  ),
  createCuratedTemplate(
    'wuyoscar-research-transformer-architecture',
    'Transformer 架构论文图',
    '图表与信息图',
    '技术拆解',
    ['Transformer', '架构', '论文图'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-research-paper-figures.md',
    'docs/research-paper-figures/transformer-arch.png',
    '16:9',
    '为 Transformer、编码器解码器或深度学习模型生成结构图，强调层级、数据流和关键计算模块。',
    '左右或上下分成输入、编码、注意力、前馈、解码和输出模块，使用箭头展示张量流向，保留残差、归一化、位置编码等标签。',
    '论文插图风格，线条清晰，颜色分组稳定，模块对齐严格，避免把模型画成随意网络图。',
  ),
  createCuratedTemplate(
    'wuyoscar-data-climate-small-multiples',
    '气候小倍数数据图',
    '图表与信息图',
    '信息图',
    ['数据可视化', '气候', '图表'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-data-visualization.md',
    'docs/data-visualization/small-multiples-climate-grid.png',
    '16:9',
    '为气候、销售、流量或城市指标生成小倍数图表，用同一尺度对比多个地区或时间段。',
    '采用 3x4 或 4x4 图表矩阵，每个小图有简短标题、统一坐标、重点高亮和说明图例，右侧或底部放总体结论。',
    '编辑型数据新闻风格，网格严谨，色彩有限，重点数据突出，适合报告和演示。',
  ),
  createCuratedTemplate(
    'wuyoscar-technical-watch-exploded',
    '机械腕表爆炸拆解图',
    '图表与信息图',
    '技术拆解',
    ['拆解图', '机械', '产品'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-technical-illustration.md',
    'docs/technical-illustration/mechanical-watch-exploded-view.png',
    '4:5',
    '为腕表、耳机、小家电或精密产品生成爆炸拆解图，展示外壳、核心组件、连接关系和材料。',
    '主体沿中轴分层展开，每个零件保持真实比例，用细引线标注名称、材质和功能，底部可放整体组装示意。',
    '工程插画与高级产品渲染结合，背景干净，金属、玻璃和橡胶材质真实，标签短而可读。',
  ),
  createCuratedTemplate(
    'wuyoscar-technical-smartphone-internals',
    '智能手机内部层级图',
    '图表与信息图',
    '技术拆解',
    ['拆解', '手机', '结构'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-technical-illustration.md',
    'docs/technical-illustration/smartphone-internals-layered-view.png',
    '4:5',
    '为手机、平板或智能硬件生成内部结构层级展示图，突出屏幕、主板、电池、摄像头、散热和外壳。',
    '使用半透明外壳或分层爆炸视图，组件从上到下整齐错开，关键模块用编号与短标签对应到说明栏。',
    '科技产品白皮书风格，线条精细，结构可信，信息清晰，不要加入无意义炫光。',
  ),
  createCuratedTemplate(
    'wuyoscar-space-minimal-living-room',
    '日式极简客厅空间',
    '品牌与空间',
    '室内场景',
    ['室内', '空间', '极简'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-architecture-and-interior.md',
    'docs/architecture-interior/japanese-minimalist-living-room-render.png',
    '16:9',
    '为住宅、民宿或生活方式品牌生成日式极简客厅效果图，强调材质、光线和空间秩序。',
    '低矮家具、木质地板、纸质或织物纹理、绿植、窗边自然光和留白墙面构成安静生活场景。',
    '暖木色、米白和少量深色点缀，真实室内摄影视角，空间通透、克制、可落地。',
  ),
  createCuratedTemplate(
    'wuyoscar-brand-moss-radio',
    '自然系品牌 VI 展示板',
    '品牌与空间',
    '品牌 VI',
    ['品牌', 'VI', '展示板'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-brand-systems-and-identity.md',
    'docs/brand-systems-identity/brand-identity-moss-radio.png',
    '4:3',
    '为播客、咖啡馆、户外品牌或生活方式品牌生成一套 VI 展示板，包含标志、字体、色彩和触点物料。',
    '画面以品牌名称为核心，排布 logo、字标、色卡、名片、贴纸、海报、包装和社媒头像等触点。',
    '自然、温和、现代，使用苔藓绿、木色、炭黑和米白，像品牌提案页而不是随意拼贴。',
  ),
  createCuratedTemplate(
    'wuyoscar-photo-subway-iphone',
    '地铁街拍手机照片',
    '摄影与文档',
    '写实摄影',
    ['街拍', '手机照片', '写实'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-photography.md',
    'docs/photography/photoreal-subway.png',
    '4:5',
    '生成一张真实手机街拍照片，可替换为[城市/地点/天气/人物状态]，重点是现场感而不是棚拍感。',
    '拍摄点位在地铁站、街角或公共空间，保留人群、灯箱、湿润地面、路牌和轻微运动模糊等真实环境细节。',
    'iPhone 抓拍质感，自然曝光，有少量不完美构图，画面清晰但不过度修饰。',
  ),
  createCuratedTemplate(
    'wuyoscar-edit-tea-metro-lightbox',
    '海报地铁灯箱实景合成',
    '品牌与空间',
    '联名 Campaign',
    ['灯箱', '海报', '场景合成'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-edit-endpoint-showcase.md',
    'docs/edit-endpoint-showcase/tea-poster-metro-lightbox.png',
    '9:16',
    '把[已有海报/品牌主视觉]转换成真实地铁站灯箱或商场广告位展示图，保留海报主体和关键文字。',
    '海报位于竖向发光框中，加入玻璃反光、金属边框、站台墙面、地砖、顶部灯光和远处轻微虚化的人流。',
    '真实户外媒介 mockup 风格，海报要端正、清晰、占主导，不要重设计原图。',
  ),
  createCuratedTemplate(
    'evolink-ecommerce-amber-perfume',
    '琥珀香水奢华广告',
    '商品与电商',
    '商品广告',
    ['香水', '奢华', '广告'],
    'evolink',
    'cases/ecommerce_zh-CN.md',
    'images/poster_case113/output.jpg',
    '1:1',
    '为香水、精油或高端美妆产品生成黑金调商业主图，强调玻璃折射、琥珀液体和高级反射。',
    '产品略偏右放在黑色大理石台面，左侧或上方保留品牌标题区，背景有柔和烟雾、金色高光和浅景深。',
    '黑、金、琥珀和白色细字组成高端美妆广告感，产品边缘清晰，logo 小而克制。',
  ),
  createCuratedTemplate(
    'evolink-ecommerce-skincare-studio',
    '柔和护肤品棚拍主图',
    '商品与电商',
    '商品广告',
    ['护肤', '棚拍', '电商'],
    'evolink',
    'cases/ecommerce_zh-CN.md',
    'images/poster_case114/output.jpg',
    '1:1',
    '为乳液、洁面、精华或有机护理产品生成柔和电商主图，突出瓶身、泵头、泡沫和植物成分。',
    '瓶身置于哑光台座上，周围有丝滑泡沫和少量花朵或成分道具，背景是淡色渐变和细小气泡纹理。',
    '奶油色、浅黄、白色和柔光阴影，亲和干净，适合商品详情页和广告投放。',
  ),
  createCuratedTemplate(
    'evolink-ecommerce-citrus-soda',
    '热带柑橘汽水广告',
    '商品与电商',
    '商品广告',
    ['饮料', '夏日', '广告'],
    'evolink',
    'cases/ecommerce_zh-CN.md',
    'images/poster_case115/output.jpg',
    '4:5 / 9:16',
    '为汽水、果汁或功能饮料生成高能量夏日广告，强调瓶身冷凝水、柑橘切片、冰块和海滩氛围。',
    '单瓶产品偏右，左侧放大标题、风味短句、三枚卖点图标和小徽章，底部可加入容量或行动文案。',
    '高饱和柑橘色、蓝天海面、阳光眩光和水花，真实商业摄影质感，包装细节清晰。',
  ),
  createCuratedTemplate(
    'evolink-ecommerce-industrial-design-sheet',
    '工业设计产品展示板',
    '商品与电商',
    '包装卖点',
    ['工业设计', '展示板', '产品'],
    'evolink',
    'cases/ecommerce_zh-CN.md',
    'images/poster_case116/output.jpg',
    '16:9',
    '基于[参考产品图]生成工业设计展示板，展示外观、材质、配色、局部细节和多角度产品形态。',
    '顶部为 3x3 材料与局部特写，中部为三种配色主图，底部用悬浮交错构图展示正面和侧面。',
    '中性灰棚拍背景，柔和顶光，真实接触阴影，留出可替换品牌占位，像专业产品设计提案页。',
  ),
  createCuratedTemplate(
    'evolink-ecommerce-grain-powder-board',
    '食品电商详情整合板',
    '商品与电商',
    '电商详情',
    ['食品', '详情页', '电商'],
    'evolink',
    'cases/ecommerce_zh-CN.md',
    'images/poster_case154/output.jpg',
    '9:16',
    '为食品、饮品或营养代餐生成一张整合型电商详情长图，包含主图、成分、冲泡方式、场景和分镜卖点。',
    '页面分成主图区、成分说明、口感卖点、使用步骤、生活场景、便携包装和底部分镜表，文字模块短而明确。',
    '深色食品广告基调，金色标题、真实食材摄影、清晰中文标签，适合商品页首屏和卖点长图。',
  ),
  createCuratedTemplate(
    'evolink-ad-luxury-watch',
    '计时腕表黑红广告',
    '商品与电商',
    '商品广告',
    ['腕表', '广告', '奢华'],
    'evolink',
    'cases/ad-creative_zh-CN.md',
    'images/poster_case144/output.jpg',
    '4:5',
    '为腕表、耳机、汽车配件或运动科技产品生成黑红高对比商业广告，突出速度、精密和金属质感。',
    '产品三分之二角度站立，旁边可放包装盒或品牌标识，背景有横向速度光线、巨大淡化标题和底部系列文案。',
    '黑、炭灰、银色和赛车红为主，湿润反射地面，金属高光锐利，整体像高端性能产品 Campaign。',
  ),
  createCuratedTemplate(
    'youmind-vr-headset-exploded-poster',
    'VR 头显爆炸视图海报',
    '图表与信息图',
    '技术拆解',
    ['VR', '爆炸图', '产品结构'],
    'youmind',
    'README_zh.md',
    'https://cms-assets.youmind.com/media/1776658772018_lukyfw_HGSUfldbIAEiMWZ.jpg',
    '4:5',
    '为 VR 头显、智能眼镜或穿戴硬件生成产品爆炸拆解海报，突出镜片、外壳、传感器、绑带、电池和散热结构。',
    '主体沿中轴分层悬浮，零件按真实装配顺序展开，用细引线标注名称、材质和功能，底部保留完整产品小预览。',
    '高科技 3D 产品渲染，蓝紫渐变背景，摄影棚柔光，玻璃、织物、金属和塑料材质真实，信息标注克制清晰。',
  ),
  createCuratedTemplate(
    'youmind-live-commerce-ui-mockup',
    '电商直播 UI 样机',
    'UI 与界面',
    '社媒截图',
    ['直播', '电商', '界面'],
    'youmind',
    'README_zh.md',
    'https://cms-assets.youmind.com/media/1776699445498_ga2ry5_HGO7H0DWkAApdKK.jpg',
    '9:16',
    '为直播带货、线上发布会或社媒活动生成完整手机直播界面，展示主播、商品卡、弹幕、点赞、优惠券和购买入口。',
    '竖屏手机截图布局，顶部为直播状态与在线人数，中间是主播和产品展示，底部有商品横卡、评论流、礼物按钮和行动按钮。',
    '真实移动应用截图质感，图标和文案对齐，促销信息明显但不拥挤，色彩适合商业转化场景。',
  ),
  createCuratedTemplate(
    'youmind-stone-step-evolution-infographic',
    '3D 石阶演化信息图',
    '图表与信息图',
    '信息图',
    ['演化', '3D 信息图', '时间轴'],
    'youmind',
    'README_zh.md',
    'https://cms-assets.youmind.com/media/1776661968404_8a5flm_HGQc_KOaMAA2vt0.jpg',
    '16:9',
    '为历史演进、产品路线、能力成长或生态发展生成 3D 阶梯式信息图，用连续石阶呈现阶段递进。',
    '从左下到右上排列 5-7 个阶梯节点，每级台阶有标题、年份、代表物和一句关键说明，终点用更高光的成果节点收束。',
    '写实 3D 模型与信息设计结合，石材质感、自然阴影、清晰标签和稳定透视，适合课程、报告和演示。',
  ),
  createCuratedTemplate(
    'youmind-newton-prism-science-visual',
    '牛顿棱镜实验科普视觉',
    '图表与信息图',
    '技术拆解',
    ['科学', '光学', '科普'],
    'youmind',
    'README_zh.md',
    'https://cms-assets.youmind.com/media/1778402635863_mzqzk6_HH6gGb_XEAErAjY.jpg',
    '4:5',
    '为光学、物理实验或科学人物主题生成兼具场景感和讲解功能的科普视觉，重点表现光束、棱镜、光谱和实验台。',
    '画面中心是实验装置和光路，左右加入小型说明面板、步骤编号、关键概念和简化公式，背景保留实验室空间纵深。',
    '电影级写实科学场景，暗色实验室、彩色光谱、高对比光束和复古仪器质感，文字模块像科普杂志页面。',
  ),
  createCuratedTemplate(
    'youmind-jade-cabbage-museum-archive',
    '博物馆文物档案海报',
    '图表与信息图',
    '信息图',
    ['博物馆', '文物', '档案'],
    'youmind',
    'README_zh.md',
    'https://cms-assets.youmind.com/media/1778402672961_qwee7n_HH5Q0O_agAAd3ZS.jpg',
    '4:5',
    '为文物、艺术品、非遗器物或展览藏品生成档案式中文海报，突出主体照片、年代、材质、工艺和展览信息。',
    '中央放高清文物主图，周围是半透明档案面板、尺寸标注、材质说明、细节放大框和简短馆藏故事，信息层级明确。',
    '高级博物馆视觉，暖色纸张纹理、细金线、深褐与翠绿点缀，兼具学术感和展览宣传质感。',
  ),
  createCuratedTemplate(
    'youmind-arboreal-architecture-board',
    '建筑竞赛项目展示板',
    '图表与信息图',
    '技术拆解',
    ['建筑', '展示板', '轴测'],
    'youmind',
    'README_zh.md',
    'https://cms-assets.youmind.com/media/1778402608114_66pd6y_HH4tPVwXoAIPXPO.jpg',
    'A1 竖版 / 4:5',
    '为建筑概念、展亭、空间改造或室内项目生成专业竞赛展示板，包含立面、剖面、轴测、概念和材料说明。',
    '顶部放主立面或总平面，中段左右分布剖面、爆炸轴测和局部节点，底部加入材料板、流程图和简短设计策略。',
    '建筑学院竞赛图纸风格，白底精细线稿、浅绿色生态点缀、严格网格和清晰标题，视觉密度高但可读。',
  ),
  createCuratedTemplate(
    'youmind-plant-recognition-infographic',
    '中文植物识别信息图',
    '图表与信息图',
    '信息图',
    ['植物识别', '图鉴', 'App'],
    'youmind',
    'README_zh.md',
    'https://cms-assets.youmind.com/media/1778402629662_zzsj8p_HH3eZvLakAA6PQ2.jpg',
    '4:5',
    '把参考植物或指定植物转成简洁的中文识别信息图，展示名称、特征、花期、生长环境、养护建议和相似植物区分点。',
    '中心保留清晰植物主体，旁边用圆角卡片组织基础档案、叶片特征、花序细节、环境偏好和识别要点，配少量图标。',
    '植物 App 与科普海报结合的清爽风格，浅绿色背景、柔和阴影、真实植物摄影和可信赖的信息排版。',
  ),
  createCuratedTemplate(
    'youmind-caloryx-nutrition-app-prototype',
    '营养扫描 App 原型展示',
    'UI 与界面',
    '移动 App',
    ['营养', 'App', '原型'],
    'youmind',
    'README_zh.md',
    'https://cms-assets.youmind.com/media/1778402629261_1tkx6l_HH3Tu3WXgAASxnW.jpg',
    '16:9',
    '为营养记录、食物扫描、健身饮食或健康管理产品生成移动端原型展示，强调拍照识别、热量分析和饮食建议流程。',
    '横向画布中并排展示 3-4 个手机屏幕：扫描页、识别结果、营养拆分、日历记录和行动建议，旁边补品牌名和核心卖点。',
    '现代 iOS 产品展示风格，白底、绿色健康科技强调色、圆角卡片、柔和阴影，像可用于路演的 App 概念图。',
  ),
  createCuratedTemplate(
    'youmind-neural-ai-hybrid-infographic',
    '神经 AI 混合系统信息图',
    '图表与信息图',
    '知识图谱',
    ['AI', '系统架构', '知识图谱'],
    'youmind',
    'README_zh.md',
    'https://cms-assets.youmind.com/media/1778402608117_37icse_HH2b5G-WgAM1z6B.jpg',
    '1:1',
    '为神经科学、AI 系统、认知工程或智能体架构生成方形信息图，展示模块、数据流、反馈回路和评估指标。',
    '中心放系统核心节点，四周分布感知、记忆、推理、执行、反馈和监控模块，使用箭头、编号和小面板解释关系。',
    '深色科学手册风格，电光蓝和紫罗兰点缀，发光网络背景、银色细线和模块化面板，适合技术文章封面。',
  ),
  createCuratedTemplate(
    'youmind-ai-toolstack-map',
    'AI 工具栈地图信息图',
    '图表与信息图',
    '地图时间线',
    ['AI 工具', '地图', '工作流'],
    'youmind',
    'README_zh.md',
    'https://cms-assets.youmind.com/media/1778402647442_kwu261_HH2aXbIaQAAlBP2.jpg',
    '16:9',
    '为个人生产力、内容创作、销售增长或开发工作流生成工具栈地图，按任务场景组织多个工具和使用路径。',
    '白底横向地图布局，按“获客、写作、设计、自动化、分析、交付”等分类分区，每区有工具名、用途标签和箭头路径。',
    '高对比社交媒体信息图风格，粗边框、彩色分类条、清晰中文标题和紧凑说明，适合知识博主或课程封面。',
  ),
  createCuratedTemplate(
    'youmind-human-brain-education-poster',
    '人类大脑教育信息图',
    '图表与信息图',
    '知识图谱',
    ['大脑', '医学', '教育'],
    'youmind',
    'README_zh.md',
    'https://cms-assets.youmind.com/media/1778402630041_qdscii_HH2N01WakAARTSQ.jpg',
    '4:5',
    '为人体器官、医学基础、脑科学或课堂教学生成中文教育海报，展示主体结构、功能区域、连接关系和学习要点。',
    '中央放高细节主体图，周围布置 6-8 个功能区域说明、编号引线、小图标和重点术语，顶部有主标题与副标题。',
    '深海军蓝科学课堂风格，发光青色轮廓、细圆角面板、白色中文字体和简洁分隔线，适合打印和演示。',
  ),
  createCuratedTemplate(
    'youmind-retro-science-encyclopedia',
    '复古科学百科信息图',
    '图表与信息图',
    '信息图',
    ['百科', '科学', '出版物'],
    'youmind',
    'README_zh.md',
    'https://cms-assets.youmind.com/media/1778402591549_nff6j0_HH2ExK8WcAMqGNP.jpg',
    '4:5',
    '为科学人物、发明、自然现象或历史主题生成复古百科全书式信息图，兼顾收藏感和信息密度。',
    '上方为标题与年代，中间是主体视觉和关键成就，下方分成时间线、影响、实验、引用和资料卡等模块。',
    '旧书纸张、细线边框、铜版印刷质感、克制色彩和严谨排版，像高级科普书内页或博物馆说明牌。',
  ),
  createCuratedTemplate(
    'youmind-fintech-jar-ui-hero',
    '储蓄应用 3D UI 主视觉',
    'UI 与界面',
    '移动 App',
    ['金融科技', '储蓄', '3D UI'],
    'youmind',
    'README_zh.md',
    'https://cms-assets.youmind.com/media/1778402671731_8yosbo_HH5ciiGbYAALiNK.jpg',
    '16:9',
    '为储蓄、预算、理财或目标管理 App 生成金融科技主视觉，突出智能手机界面、透明储蓄罐和关键财务指标。',
    '手机屏幕显示账户目标、储蓄进度、交易记录和行动按钮，旁边放 3D 玻璃罐、硬币、渐变背景和简短产品卖点。',
    '深薄荷绿玻璃拟态，摄影棚柔光、高对比阴影、清晰 UI 数字和高级产品发布图质感。',
  ),
  createCuratedTemplate(
    'youmind-summer-skincare-ad',
    '夏季水感面霜广告',
    '商品与电商',
    '商品广告',
    ['护肤', '夏季', '广告'],
    'youmind',
    'README_zh.md',
    'https://cms-assets.youmind.com/media/1778402662356_6mlwvr_HH5ASTzbUAAHhDd.jpg',
    '4:5',
    '为面霜、精华、防晒或补水产品生成清爽夏季广告，突出水感质地、阳光、水面反射和产品瓶身。',
    '产品居中或偏右放在浅水台面上，周围有水波、蓝天反光、成分小卡和两三句卖点文案，标题短而清楚。',
    '韩式护肤商业摄影风格，蓝白清爽配色、柔和日光、浅景深和真实水滴质感，适合社媒投放。',
  ),
  createCuratedTemplate(
    'youmind-golden-hour-perfume-photo',
    '金色时刻香水产品摄影',
    '商品与电商',
    '商品广告',
    ['香水', '产品摄影', '奢华'],
    'youmind',
    'README_zh.md',
    'https://cms-assets.youmind.com/media/1778315798840_di01oq_HH1Vx8EX0AMd2lu.jpg',
    '4:5',
    '为香水、精油或高端礼品生成金色时刻产品摄影，强调透明玻璃、琥珀液体、金属瓶盖和湿润台面反射。',
    '单瓶产品居中放在黑色大理石或深色台面，背景用暖金光束、浅景深和少量香调道具，标签文字保持清晰。',
    '奢华商业棚拍，金色高光、深色背景、细腻水珠和真实玻璃折射，适合详情页首图和广告主视觉。',
  ),
  createCuratedTemplate(
    'youmind-marble-perfume-luxury',
    '湿润大理石香水广告',
    '商品与电商',
    '商品广告',
    ['香水', '大理石', '高端'],
    'youmind',
    'README_zh.md',
    'https://cms-assets.youmind.com/media/1778315798443_o5mly4_HH1VxseXkAYm1a3.jpg',
    '4:5',
    '为高端香水、护肤油或香氛礼盒生成湿润黑色大理石场景，突出瓶身切面、液体颜色和高级反射。',
    '产品置于画面中心，台面有水迹和白金纹理，背后加入柔焦高光、香调成分、品牌名和极简口号。',
    '黑金奢华调性，镜面反射、玻璃边缘锐利、标签简短可读，不使用过多装饰或杂乱背景。',
  ),
  createCuratedTemplate(
    'youmind-sparkling-water-can-ad',
    '奢华气泡水罐头广告',
    '商品与电商',
    '商品广告',
    ['饮料', '罐装', '商业摄影'],
    'youmind',
    'README_zh.md',
    'https://cms-assets.youmind.com/media/1778230129347_ap5f0k_HHuybllWsAAOYKz.jpg',
    '4:5',
    '为气泡水、功能饮料或低糖汽水生成高端罐装饮料广告，突出冷凝水、反射水面、风味元素和纤细罐身。',
    '罐体垂直站立在浅水面，前景有冰块、水花和水果或香草成分，旁边放品牌标题、风味名称和三枚卖点图标。',
    '清爽高端饮料摄影，暖米白罐身、柔和蓝绿色反光、细腻水滴和干净商业排版。',
  ),
  createCuratedTemplate(
    'youmind-skincare-splash-product',
    '护肤精华水花溅射图',
    '商品与电商',
    '商品广告',
    ['护肤', '水花', '精华'],
    'youmind',
    'README_zh.md',
    'https://cms-assets.youmind.com/media/1778143871705_l3vu36_HHpRFEnbAAAY0l-.jpg',
    '4:5',
    '为精华液、乳液或洗护产品生成高速水花商业图，突出透明瓶身、液体颜色、清洁感和补水卖点。',
    '瓶身位于画面中心，周围定格透明水花、水滴和少量成分道具，底部放品牌名、产品名和一行功能短句。',
    '超写实高速摄影，明亮洁净背景，水体边缘清晰，瓶身标签不变形，适合电商主图和详情页。',
  ),
  createCuratedTemplate(
    'youmind-fashion-product-collage',
    '时尚产品拼贴模板',
    '商品与电商',
    '电商详情',
    ['拼贴', '时尚', '产品模板'],
    'youmind',
    'README_zh.md',
    'https://cms-assets.youmind.com/media/1777971085663_mwu667_HHfCx8-WsAEVOmx.jpg',
    '1:1',
    '为服饰、香氛、配饰或生活方式商品生成编辑风格产品拼贴，展示主商品、局部特写、使用场景和品牌短句。',
    '方形白底画布，多个圆角图片面板围绕主商品排布，顶部放标题，底部放三条卖点和小型色卡或材质样本。',
    '高级时尚广告排版，留白充足、边框细、阴影轻，图片比例统一，适合小红书、Instagram 和商品详情图。',
  ),
  createCuratedTemplate(
    'youmind-minimal-perfume-ad',
    '极简主义香水广告',
    '商品与电商',
    '商品广告',
    ['香水', '极简', '广告'],
    'youmind',
    'README_zh.md',
    'https://cms-assets.youmind.com/media/1777971005892_vdwm77_HHfBG6eboAAkdDF.jpg',
    '4:5',
    '为香水、护肤或高端生活方式产品生成极简广告，突出超大产品装置、人物尺度感、品牌标题和清爽背景。',
    '产品瓶作为巨型主视觉占据画面一侧，旁边加入真实模特或使用者姿态，背景有大号品牌字和简洁卖点。',
    '柔和蓝白渐变、全白服装、干净影棚光和极简字体，画面要高级、安静、适合品牌形象投放。',
  ),
  createCuratedTemplate(
    'youmind-underwater-phone-product-shot',
    '智能手机水下产品大片',
    '商品与电商',
    '商品广告',
    ['手机', '水下', '产品摄影'],
    'youmind',
    'README_zh.md',
    'https://cms-assets.youmind.com/media/1777971012252_84sqpf_HHeuRXva4AEkmOC.jpg',
    '16:9 / 4:5',
    '为智能手机、运动相机或防水耳机生成水下商业大片，强调金属机身、镜头细节、防水卖点和清澈水体。',
    '前景放产品特写，保持品牌面和摄像头清晰；中景加入水泡、折射、漂浮光线和使用场景，边缘留出标题区。',
    '高端水下摄影质感，蓝绿色水光、真实反射、微小气泡和锐利产品边缘，适合新品广告和首屏主图。',
  ),
  createCuratedTemplate(
    'wuyoscar-research-multiagent-architecture',
    '多智能体 LLM 系统架构图',
    '图表与信息图',
    '技术拆解',
    ['LLM', '智能体', '架构图'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-research-paper-figures.md',
    'docs/research-paper-figures/agent-architecture.png',
    '16:9',
    '为多智能体协作、RAG 系统、自动化工作流或企业 AI 平台生成论文级系统架构图。',
    '从用户输入到规划、检索、工具调用、记忆、执行和评估形成闭环，每个模块有短标签，箭头清晰展示信息流。',
    '学术论文插图与产品技术白皮书之间的风格，白底、细线、柔和分组色和对齐严格的模块框。',
  ),
  createCuratedTemplate(
    'wuyoscar-research-prompt-injection-flow',
    'Prompt 注入攻击流程图',
    '图表与信息图',
    '技术拆解',
    ['安全', '流程图', 'AI 风险'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-research-paper-figures.md',
    'docs/research-paper-figures/prompt-injection-flow.png',
    '16:9',
    '为 AI 安全、权限隔离、越权风险或防护方案生成攻击路径与防御流程图。',
    '左侧展示攻击入口和恶意指令，中间展示模型、工具和数据通道，右侧展示影响结果与防护层，使用红色风险路径和蓝色防御路径区分。',
    '安全白皮书风格，图标简洁、箭头明确、风险节点醒目，适合技术分享和内部培训。',
  ),
  createCuratedTemplate(
    'wuyoscar-data-collaboration-network',
    '协作网络关系图',
    '图表与信息图',
    '知识图谱',
    ['网络图', '协作', '数据可视化'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-data-visualization.md',
    'docs/data-visualization/network-graph-collaboration-map.png',
    '16:9',
    '为团队协作、项目依赖、研究引用或社区关系生成网络图，突出节点群组、关键连接和中心节点。',
    '画面中心是多簇节点网络，使用颜色区分团队或主题，粗线代表高频连接，右侧加入图例、指标摘要和关键发现。',
    '数据新闻与管理报告结合，深浅背景均可，节点清晰不糊成一团，信息密度高但主结论明确。',
  ),
  createCuratedTemplate(
    'wuyoscar-data-energy-chord-diagram',
    '能源流向弦图',
    '图表与信息图',
    '信息图',
    ['弦图', '能源', '流向'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-data-visualization.md',
    'docs/data-visualization/chord-diagram-energy-flows.png',
    '1:1 / 16:9',
    '为能源、资金、用户路径或供应链流向生成弦图，展示多个类别之间的输入输出关系。',
    '圆环外侧是分类标签，内部用不同粗细的彩色弦连接流向，角落放总量、最大流向和异常变化三条结论。',
    '高级数据可视化风格，色彩有限、弦线层次清楚、标签留白充足，适合报告封面和演示页。',
  ),
  createCuratedTemplate(
    'wuyoscar-screen-laptop-music-webcam',
    '笔记本屏幕实拍样机',
    '摄影与文档',
    '写实摄影',
    ['屏幕实拍', '样机', '工作流'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-screen-photography.md',
    'docs/screen-photography/laptop-music-webcam-screen.png',
    '16:9',
    '为桌面软件、在线课程、音乐工具或创作者工作台生成真实笔记本屏幕实拍样机。',
    '画面保留笔记本边框、键盘、环境光和轻微屏幕反射，屏幕内展示主应用、侧边栏、媒体预览或视频窗口，文字可读。',
    '真实桌面摄影，轻微透视、自然曝光和生活化工作环境，适合产品截图包装、社媒发布和教程封面。',
  ),
  createCuratedTemplate(
    'wuyoscar-cookbook-coffee-infographic',
    '咖啡机使用信息图',
    '图表与信息图',
    '信息图',
    ['教程', '咖啡', '说明图'],
    'wuyoscar',
    'skills/gpt-image/references/gallery-official-openai-cookbook-examples.md',
    'docs/official-openai-cookbook/coffee-infographic.png',
    '4:5',
    '为咖啡机、小家电、工具或产品说明生成清晰的步骤信息图，展示部件名称、操作顺序和注意事项。',
    '上方是产品整体图，中间分成 4-6 个步骤卡片，底部有维护提醒、常见错误和安全提示，用编号箭头串联流程。',
    '干净产品说明书风格，图标统一、文字短句可读、浅色背景和柔和阴影，适合说明页和售后材料。',
  ),
]

export const EXPANDED_PROMPT_TEMPLATES: PromptTemplateInput[] = [
  ...BASE_PROMPT_TEMPLATES,
  ...EXTRA_CURATED_PROMPT_TEMPLATES,
  ...KKKM_PROMPT_TEMPLATES,
]
