import type { PromptTemplateInput } from './promptTemplates'
import { HOUSHIFANG_PROMPT_TEMPLATES } from './houshifangPromptTemplates'
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case2/output.jpg",
    "imageAlt": "电影感极简人像示例图",
    "prompt": "生成一张电影感极简人像：一位孤身男子站在浓烈的橙红渐变环境中，强烈的剪影式布光，深邃的阴影对比，地面为反光的光泽地板，构图对称，极简主义。整体氛围沉静而富有戏剧性，光影干净利落，主体轮廓清晰，留白充足。",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case5/output.jpg",
    "imageAlt": "卧室镜自拍人像示例图",
    "prompt": "一张年轻女性在卧室里的镜中自拍人像：她坐在温馨、略显凌乱的床上，用手机对着镜子自拍，捕捉自然放松的居家一刻。穿着灰色休闲家居服和干净的白色中筒袜，清新自然的面容与写实肤质。柔和的自然光（黄金时刻）从侧窗洒入，营造温暖、慵懒而富有电影感的氛围。35mm 镜头，对焦在镜中主体上，背景柔美虚化（焦外光斑）。写实风格，8K 高分辨率，影棚级画质。画面干净，无多余肢体、无畸形手部、无水印、无文字。画幅比例 3:4。",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case7/output.jpg",
    "imageAlt": "奢华魅力美妆人像示例图",
    "prompt": "奢华魅力美妆人像：一位美丽的黑人女性，洋溢青春气息，奶油香草般的肤质光泽，丝滑顺直的发型，桃花心木红色调，含蓄而自信的神态，富有质感的织物，宝蓝色点缀，极简珠宝，海边微风拂面，镜头光晕效果，怀旧氛围，电影感镜头，对称构图，柔焦，高级时尚摄影，单色调，水润光泽的妆面，神秘的张力，层次丰富的元素。",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case1/output.jpg",
    "imageAlt": "2026 波士顿春季城市海报示例图",
    "prompt": "一张极具冲击力的 2026 春季波士顿城市海报，格调优雅、气氛欢庆，采用大胆的当代设计。在干净的米白色纹理背景上，大面积留白，画面右下角一名微缩的单人赛艇选手划过一条狭窄的反光水带。船桨划出的尾迹向上扫成一道富有动感的书法曲线，逐渐化为查尔斯河，再化为一幅梦幻般手绘的波士顿全景。这条流动的河形构图中融入波士顿标志元素：后湾天际线、灯塔山的褐石排屋、橡子街、波士顿公共花园、天鹅船、扎金大桥、芬威风格的细节、历史悠久的红砖建筑、港口渡轮，以及城市滨水氛围。柔和的晨雾、金色的春日光线、深红与金色的节庆点缀，细节丰富，层次纵深，格调考究的城市海报美学，清新精致，视觉有力却不拥挤。左下方以优雅字体写着「SPRING 2026」，配一句竖排标语「BOSTON, A CITY OF RIVER, MEMORY, AND INVENTION」，文字清晰、排版精美，高级平面设计，比例 9:16。",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case3/output.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case4/output.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case6/output.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case8/output.jpg",
    "imageAlt": "未来感曼荼罗插画示例图",
    "prompt": "绘制一幅曼陀罗的近未来科幻版本：在传统曼陀罗对称严谨的几何结构基础上，融入未来科技元素——精密的机械纹路、发光的能量线条、半透明的全息层次与金属质感的环形结构。整体保持曼陀罗特有的向心放射式对称，色彩通透、分辨率极高、层次细密，兼具东方冥想美学与赛博科幻的冷冽光感。",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case2/output.jpg",
    "imageAlt": "业余感 iPhone 发布会快照示例图",
    "prompt": "一张业余感的 iPhone 随手拍照片：在 Apple Park 举办的 iPhone 20 发布会现场，蒂姆·库克正在舞台上演讲。从观众席远距离拍摄，画面带有普通手机随手抓拍的真实质感——轻微的距离感、现场灯光氛围与人群前景，看起来像观众用手机随手记录的一瞬，而非官方精修图。",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case3/output.jpg",
    "imageAlt": "手写笔记本照片示例图",
    "prompt": "一张摊平笔记本的业余随手拍照片：本子上写满黑色圆珠笔的手写笔记，字迹随意、略显潦草，像私人笔记一样带有自然的瑕疵——划掉的字词、加下划线的标题。从略微俯视的角度拍摄，来自窗户的自然日光，无闪光灯。随意的书桌场景，用 iPhone 拍摄。",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case4/output.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case5/output.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case8/output.jpg",
    "imageAlt": "太祖李成桂的 X 页面示例图",
    "prompt": "请制作朝鲜太祖李成桂的 X（社交媒体）页面：内容是他在发动威化岛回军前夕、与崔莹将军互相隔空喊话、彼此攻讦的一系列帖子。界面要有完整的头像、用户名、发帖时间、点赞与转发数据等真实社交产品细节，帖子正文以贴合当时历史语境的口吻呈现，画面像真实的产品截图而非概念稿，关键文字清晰可读。",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/comparison_case10/output.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/comparison_case11/output.jpg",
    "imageAlt": "GPT vs Banana 盲测比较示例图",
    "prompt": "绘制一张色彩鲜艳、竖版（9:16）手绘风格的《新疆旅行手账插画》，画风仿佛由一位充满好奇心的孩子用蜡笔创作，整体使用柔和温暖的浅色背景（如浅黄色），搭配红色、蓝色、绿色等明亮色调，营造温馨、童趣、满满旅行气息的氛围。\n一、主画面：手账式旅行路线\n在插画中央绘制一条“蜿蜒曲折的旅行路线”，路线用箭头 + 虚线连接多个地点，由 {天数} 日行程自动生成推荐景点：\n示例格式（自动替换为{城市名}相关）：\n- “第 1 站：{景点 1 推荐 + 简短趣味描述}”\n- “第 2 站：{景点 2 推荐 + 简短趣味描述}”\n- “第 3 站：{景点 3 推荐 + 简短趣味描述}”\n- …\n- “最终站：{当地招牌美食/纪念品 + 温馨结束语}”\n> 旅程站点数量随天数自动生成：\n> 若用户未输入天数，则按默认 1 日 / 精华线路生成。\n---\n二、周围趣味元素（全部根据城市自动替换）\n在路线周围加入大量充满童趣的小元素，例如：\n- 可爱的旅行角色：\n“拿着当地特色小吃的小朋友”、\n“背着旅行包的冒险小孩”等。\n- 当地标志性建筑的童趣 Q 版手绘：\n如 “{城市地标1}”、“{城市地标2}”、“{城市地标3}”。\n- 有趣的提示牌：\n“小心迷路！”、“注意人流！”、“前方好吃的！”（可根据城市语境调整）。\n- 贴纸式小标语：\n“{城市名}旅行记忆已解锁！”\n“{城市名}美食大冒险！”\n“下一站去哪儿？”\n- 当地美食的可爱小图标：\n如 “{城市美食1}”、“{城市美食2}”、“{城市美食3}”。\n- 感叹句（保持童真风）：\n“原来{城市名}这么好玩！”\n“我要再来一次！”\n---\n三、整体风格要求\n- 手绘蜡笔风 / 儿童旅行日志风格\n- 色彩鲜艳、构图饱满但温暖\n- 强调旅行的欢乐与探索感\n- 所有文字采用可爱的手写字体\n- 让整个画面像一本童趣满满的旅行手账页面",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/comparison_case32/output.jpg",
    "imageAlt": "帮我生成xxxx真迹图片示例图",
    "prompt": "以「帮我生成xxxx真迹图片」为目标生成图像。\n\n核心提示词：帮我生成xxxx真迹图片\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case39/output.jpg",
    "imageAlt": "请根据【主题】生成一张高质量竖版「科普百科图」。示例图",
    "prompt": "请根据【主题】生成一张高质量竖版「科普百科图」。 \n\n这张图不是普通海报，也不是单纯插画，而是一张兼具“图鉴感、百科感、信息结构感、收藏感”的模块化科普信息图。整体风格参考高级博物图鉴、现代百科书页、生活方式知识卡和社交媒体高传播信息图的结合。\n\n请让画面包含：\n- 一个清晰漂亮的主题主视觉\n- 若干局部特征放大细节\n- 多个圆角模块化信息分区\n- 清楚的标题层级与重点标签\n- 简洁但丰富的百科内容\n- 可视化评分、要点总结或Top 5模块\n\n内容栏目请根据主题自动适配，优先从这些方向中选择并合理组合：\n基础档案、分类信息、外观特征、习性/生态、形成机制/结构组成、生长或使用条件、养护或维护建议、风险与注意事项、适合人群或适用场景、优缺点对比、快速评分卡。\n\n视觉要求：\n浅色干净背景，柔和配色，轻阴影，精致小图标，圆角信息框，整洁排版，信息密度高但不拥挤，阅读体验好。整体必须像真正可以发布、阅读、收藏、系列化生产的科普百科卡，而不是广告图。\n\n请不要做成普通商业宣传海报。要突出“知识整理 + 模块信息 + 图鉴式展示”的特征。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046115431144902732",
    "title": "日系胶片风人像",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case6/output.jpg",
    "imageAlt": "Analog 35mm film photography, soft...示例图",
    "prompt": "模拟 35mm 胶片摄影，柔和通透的日系美学，来自窗边的柔和漫射自然光，轻微过曝，粉彩色调，低对比度，柔和的高光。靠窗的极简室内场景，白色窗帘，干净的浅色墙面，自然构图，平视机位，略微贴近的全身取景（大腿中部到头部）。一位年轻东亚女性，自然淡妆，柔和写实的肤质，微乱的深色长发，穿着宽松白色衬衫、浅色休闲短裤，赤脚，简约放松的造型。自然站立，姿态松弛，双臂随意垂于身侧或微微背在身后，面向镜头，温柔浅笑，带着一丝静止感。整体聚焦于光线、空气与安静的日常氛围，柔和的胶片颗粒，梦幻而含蓄，画幅比例 9:16。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046434670724907395",
    "title": "黑雾滤镜编辑风人像",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case14/output.jpg",
    "imageAlt": "9:16 vertical — editorial portrait...示例图",
    "prompt": "竖版 9:16 编辑风人像，单一主体。柔和的黑雾滤镜，淡淡的薄雾，轻微的高光晕染，低饱和色调。极简室内空间，干净背景，略带纹理。一位年轻女性，淡妆，自然肤质。穿搭：修身罗纹针织上衣或柔软吊带，外搭一件宽松衬衫，配高腰短裤或短裙；面料柔和自然、贴合身形，无暴露元素。发型：微乱、自然蓬松。姿态：坐在地板上，一腿弯曲一腿放松，身体略微前倾，双肩不对齐，头部微侧。构图：主体略微偏离中心，保留负空间。神情：平静、略显疏离，唇形自然。布光：柔和的侧光，阴影过渡轻柔。氛围：含蓄、安静，通过自然的身体线条透出含蓄气质，放松而不摆拍。画质：细腻颗粒，略带柔和，写实观感。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046498264774791514",
    "title": "商品广告专业重设计",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case41/output.jpg",
    "imageAlt": "この商品広告をプロのデザイナー目線でリデザインして。示例图",
    "prompt": "请以专业设计师的视角，为这则商品广告重新设计：契合当下潮流与目标受众，做出精致洗练的版面。突出产品主体与卖点，信息层级清晰，配色与排版考究，标题和关键文案清晰醒目，整体像可直接投放的成品广告，而非草稿。",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case35/output.jpg",
    "imageAlt": "新中式水墨山水海报，竖版9:16构图，东方极简美学风格，示例图",
    "prompt": "新中式水墨山水海报，竖版9:16构图，东方极简美学风格，\n大面积留白，整体色调为春日清晨氛围（青绿色、雾蓝、淡灰、浅墨），低饱和、清透柔和，高级质感。\n画面主体为奇峻巍峨的群山，从中间平静湖面的两侧拔地而起，占据左右两侧画面，\n山体以水墨晕染表现，浓淡干湿变化丰富，局部融入淡青绿色渲染，体现春意生机。\n山峰被湿润轻柔的晨雾包裹，雾气层层递进，与浅青蓝天空自然融合，形成空气透视与空间纵深。\n\n湖面如镜面般平静，呈现微青绿色调，倒映山体与天空，反射略带柔焦与雾化扩散效果，增强春日湿润与梦幻氛围。\n中景一艘带弧形篷顶的小木舟缓慢漂浮，船桨轻触水面形成细腻涟漪，水纹自然扩散，整体保持极静状态。\n\n船上为一位红衣渔女，体量较小（远景比例），人物简化处理为水墨剪影 + 轻微设色，\n身着低饱和朱砂红传统服饰（非鲜艳红），颜色略被雾气柔化，\n人物面部不刻画细节，仅保留轮廓与姿态（如轻扶船篷或执桨），\n红色在水面形成淡淡倒影，作为画面唯一暖色视觉焦点。\n\n岸边点缀疏林与春季新生植被，采用淡墨 + 淡青绿点染，虚实结合，增强节奏与生命气息。\n\n少量飞鸟在远空掠过，轻盈疏散分布，增强空间层次与灵动感。\n\n画面顶部居中竖排书法：“东方美学”，采用传统手写行书或行草风格（王羲之笔意），\n笔触自然起伏、提按分明，带飞白与墨韵扩散效果，避免字体感。\n书法颜色为深墨青或柔和墨黑，与整体画面统一。\n整体风格：水墨 + 现代极简设计融合，春日禅意、空灵湿润、宁静氛围，\n冷暖对比克制，电影感光影，高级艺术海报质感，8K超清细节。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046144801071079612",
    "title": "机甲女战士海废废土视觉",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/character_case7/output.jpg",
    "imageAlt": "A mecha girl mid-teens, pale skin ...示例图",
    "prompt": "一位年轻的机甲女战士，苍白皮肤沾满煤灰与海盐飞沫，锐利的琥珀色双眼上叠加着发光的 HUD 瞄准线，及腰的灰白色长发扎成高马尾在海风中飞扬，哑光枪铁色的外骨骼装甲覆盖她的肩部、前臂与小腿，关节处露出液压活塞，胸前挂载着发出青色光的冷却管线，一件沾满油污的宽大机库夹克从一侧肩头滑落，一门巨大的轨道炮搁在她右肩，衣领处挂着军牌和磨损的红丝带。她站在一处倾斜锈蚀钢制平台的边缘、略微偏左，平台探出于黑暗水面之上，重心压在一条腿上，左手抓着炮带，头略微转向镜头，目光安静而不屈，背部推进器喷出蒸汽，马尾和夹克在海风中向侧面飘扬。背景是黄昏中一座荒废的巨大海上城市，用途不明的庞大建筑群以错落的剪影从海面升起，骨白色的巨石高塔与附着藤壶的钢铁交融，环形巨构以断裂的角度倾斜，锈蚀的骨架吊架缠绕着废弃缆线，暗涌在支柱间翻滚，沉船半掩于塔基之下，浓重的海雾缠绕底部而上层结构刺入淤青色的天空，塔顶零星微光闪烁如远方的眼睛。低沉压抑的布光，来自阴天的冷青色环境光，右侧远处建筑透出温暖的琥珀色钠灯余晖，高塔背后低垂的太阳投来强烈逆光勾勒她的剪影，体积光穿透海雾，装甲上带着湿润的高光。35mm 变形宽银幕镜头，略微仰角越过她的肩头望向建筑群，中远景，浅景深，前景锈迹处于柔焦，水平方向的镜头光晕，细腻的空气雾气把远处巨构压缩成层叠的剪影。电影感主视觉，笔触细腻的数字插画，清晰的线稿，由青色、骨白与锈色构成的低饱和海洋色调，点缀少量温暖的强调光，胶片颗粒，高对比的编辑海报美学，画幅比例 16:9。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046371076402503709",
    "title": "奇幻执行官竖版角色海报",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case38/output.jpg",
    "imageAlt": "「神層37区 特級執行官 神巫サバト」この名称のキャラクターと世界観...示例图",
    "prompt": "请以专业设计师的身份，为名为「神层37区 特级执行官 神巫萨巴特」的角色及其世界观，创作一张贴合设定的竖版视觉海报。画面需塑造出鲜明的角色形象与独特的世界观氛围，构图为纵向长海报，主体突出、气场强烈，光影富有戏剧性，风格神秘而富有科幻奇幻质感，标题文字排版清晰美观。",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case42/output.jpg",
    "imageAlt": "平面插画，东方幻想风格高端城市海报设计，竖版9:16构图，整体采用对...示例图",
    "prompt": "平面插画，东方幻想风格高端城市海报设计，竖版9:16构图，整体采用对角线+S型流动构图，从左下向右上延展，画面以深邃黑色为背景，自上而下渐变至浓烈暗红色，形成强烈冷暖对比与空间纵深，背景带微弱星尘与颗粒质感。画面中央一条金色流动能量线条如火焰般蜿蜒贯穿，自底部向上延伸，具有流体质感、粒子光效与渐变高光，局部带细微能量碎屑与体积光。\n\n金色流光中逐层浮现广州城市地标建筑群：广州塔为视觉核心，比例突出，周围融合珠江新城高楼群、猎德大桥及现代与岭南建筑元素，建筑采用“精细线描 + 金色发光体块”表现，轮廓清晰、细节丰富，在金色光晕映衬下仿佛悬浮于虚空，形成超现实空间层次，远景轻微雾化增强纵深感。\n\n画面底部为一位东方白发女性形象，长发飘逸，如烟似雾，与金色流光自然衔接并逐渐融合，发丝半透明带渐变光感，姿态柔美，双目微闭，神情宁静，怀抱一束多彩鲜花，花间点缀微光粒子与星点效果，象征人与城市能量的精神连接，人物细节适度简化以突出整体设计感。\n\n光影集中于金色流线、建筑与人物轮廓，形成强烈明暗对比与视觉聚焦，整体氛围宏大、神秘、具有东方神话意境且略带治愈感。色彩以黑与暗红为基底，高亮鎏金为主视觉强调，金色具备丰富明暗层次，辅以小面积高饱和花束色彩点缀，整体高级克制。\n\n页面文字与画面融合排版：顶部居中宋体大字“广州·中国”，下方小字“2026/04/20”，再下方小字“LIYUE”，文字采用淡金色或柔和暖白色，与整体光影统一。高品质细节，电影级光影表现，体积光与粒子细节丰富，画面干净无噪点，超高清8K分辨率，商业级海报质感。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046502288102170757",
    "title": "富士胶片风情侣写真",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case17/output.jpg",
    "imageAlt": "9:16 vertical — Japanese Fuji film...示例图",
    "prompt": "竖版 9:16，日系富士胶片风格的情侣人像，两位主体。富士胶片模拟质感（Pro 400H / Superia 的观感），柔和的粉彩色调，轻微的绿-品红偏移，低对比度，柔和的高光过渡，细腻的胶片颗粒，淡淡的光晕。明亮的自然日光，透过窗户漫射的阳光，柔和的阴影，通透的氛围。一对年轻的日本情侣，自然淡妆，写实肤质，带有细微瑕疵。女方穿搭：宽大衬衫配宽松短裤，版型松弛，柔和的休闲造型；男方穿搭：简单 T 恤或浅色衬衫，干净而低调。发型：两人都自然、略微凌乱。姿态：亲密贴近——依偎着坐或站；女孩轻轻靠向他，一只手轻搭在他的肩或胸前；男孩略微前倾，两人面庞贴近、几乎相触，捕捉即将亲吻前的那一刻。神情：彼此温柔浅笑或对视，放松自然，情感联系清晰可见。机位：近距离取景（半身），平视，亲密的距离，略带手持感。场景：靠窗的极简室内，浅色窗帘，干净柔和的背景。布光：漫射日光，轻柔的高光晕染，柔和的阴影过渡。氛围：温暖、浪漫、亲密的日常瞬间，自然流露的情意。画质：超写实，胶片观感，细腻颗粒，略带柔和，自然的瑕疵。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046494262158930154",
    "title": "反向传播详细图解",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case43/output.jpg",
    "imageAlt": "バックプロパゲーションについて詳しく図解して示例图",
    "prompt": "请对神经网络中的反向传播（Backpropagation）进行详细图解：用清晰的示意图逐步拆解前向传播、损失计算、梯度回传与权重更新的过程，配以箭头、公式与分层结构标注，直观展示误差如何沿网络反向传播并驱动参数调整。整体为信息图风格，标题层级分明，关键术语与公式清晰可读，适合教学讲解。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046500429786402973",
    "title": "桶眼鱼身体结构图鉴页",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case44/output.jpg",
    "imageAlt": "デメニギスの体の構造を解説するカラー図鑑のページ示例图",
    "prompt": "创作一页解说桶眼鱼（管眼鱼，Barreleye）身体结构的彩色图鉴页面：以自然博物图鉴的风格，精细描绘这种深海鱼透明头部、可旋转的桶状眼睛及内部器官等独特构造。画面配有详尽的指示线标注，直接指向各个身体部位，说明其功能；整体版式工整、信息密度高，标题与注释文字清晰可读，兼具科学严谨性与观赏性，画幅比例 3:4。",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case200.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/comparison_case34/output.jpg",
    "imageAlt": "an ingame screenshot of rust示例图",
    "prompt": "以「an ingame screenshot of rust」为目标生成图像。\n\n核心提示词：an ingame screenshot of rust\n\n输出比例：9:16 / 16:9。\n\n扩展要求：请补充完整状态栏、导航、核心内容区、操作区和真实应用细节，像真实产品截图而不是概念稿。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case45/output.jpg",
    "imageAlt": "Create a Science fiction movie pos...示例图",
    "prompt": "以「Create a Science fiction movie pos...」为目标生成图像。\n\n核心提示词：Create a Science fiction movie poster\n\n输出比例：4:5 / 9:16。\n\n扩展要求：请强化标题、副标题、视觉主体、留白、字体层级和版面节奏，做成完成度高的海报或封面。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046501692246470871",
    "title": "夏日清凉冷面美食图",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case46/output.jpg",
    "imageAlt": "少し暑くなってきた今の時期に、さわやかにさっぱりしたい、みずみずしさ...示例图",
    "prompt": "在这个天气逐渐转热的时节，营造出清爽、沁凉、水润的强烈感受：想让人更强烈地体会到冷乌冬、茄子、蘸汁入口时那种透心凉的爽快感。画面聚焦清凉的日式冷食，冰凉的冷乌冬面、晶莹的茄子与清透的蘸汁，水珠凝结、雾气微冒，色调清新，质感水灵，充分传递出盛夏里一口下肚的畅快与清爽。",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case28/output.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case47/output.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/character_case8/output.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case29/output.jpg",
    "imageAlt": "生成【城市】三天旅游攻略，就这么简单一句话示例图",
    "prompt": "以「生成【城市】三天旅游攻略，就这么简单一句话」为目标生成图像。\n\n核心提示词：生成【城市】三天旅游攻略，就这么简单一句话\n\n输出比例：16:9 / 4:5。\n\n扩展要求：请展示品牌识别、空间结构、材质、触点物料或环境氛围，让画面像真实提案图。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046523198116889064",
    "title": "2026 硅谷城市宣传海报",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case48/output.jpg",
    "imageAlt": "A refined 2026 Silicon Valley city...示例图",
    "prompt": "一张格调考究的 2026 硅谷城市宣传海报，氛围兼具未来感与优雅。双重曝光构图，保留一种 S 形的流动韵律。在纯白纹理背景上，画面右下角一个身着利落现代机能服的微缩人物，正释放出一条长长的银蓝色发光丝带。丝带在空中优雅流动，呈现柔软的丝绸质感，向左上方飘去时，奇迹般地化为一片壮阔的地景——起伏的丘陵、海岸线、数据流与灯火通明的城市地貌。在这条流动的「光之河」中，叠加一幅手绘的硅谷全景地图，融合科技、自然、创新与加州阳光。场景充满远见、开阔、精致而鼓舞人心。融入硅谷与湾区的标志元素：斯坦福大学拱门、Apple Park、谷歌风格园区建筑、Meta 式玻璃办公楼、特斯拉式创新意象、沙丘路上的风投办公室、帕洛阿尔托林荫街道、圣何塞天际线、圣克鲁兹山脉、旧金山湾、高速公路、自动驾驶汽车、初创实验室、半导体纹样、AI 数据中心，以及若隐若现的电路板纹理。四周环绕柔和薄雾、金色加州阳光、漂浮云朵与细腻的数字粒子。色彩丰富，结构繁复，细节极致，宏大而震撼，却因大面积留白而依旧清新极简。左下角以优雅字体写着「SILICON VALLEY 2026」，配一句竖排标语「Where Ideas Shape Tomorrow」。版式精美、间距优雅、字迹清晰完整，高级城市品牌海报，电影级布光，细节考究，画幅比例 9:16。",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case30/output.jpg",
    "imageAlt": "创作一幅超逼真的 3D 插画，描绘一个略微倾斜的 Twitter/X...示例图",
    "prompt": "创作一幅超逼真的 3D 插画，描绘一个略微倾斜的 Twitter/X 个人资料页面，背景为简洁的灰色。保留原有的卡通头像。界面必须与真实的 X 截图相似，包含真实的布局、认证徽章、粉丝统计、个人资料横幅和推文部分。\n\n个人资料详情：\n\n一位时尚的年轻男子，有着蓬松的亮黑色短发和白皙的皮肤，从个人资料页面的右侧撕开的纸片中跃然而出。他保留了原有的面部特征，只是将表情改为自然自信的微笑。他握着撕开的纸片边缘，纸屑四处飞溅，营造出强烈的 3D 突破效果。\n\n柔和的影棚灯光、电影级的阴影、景深、超高细节、清晰的焦点、逼真的皮肤、逼真的 UI 反射、优质的构图、4K 分辨率、逼真与微妙的皮克斯风格融合。\n\n重要提示：\n\n- 请勿更改头像\n\n- 保持 X UI 界面准确\n\n- 保留原有的面部特征\n\n- 角色为男性\n\n- 仅增强笑容\n\n- 确保所有中文文字清晰易读",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046413660147314714",
    "title": "科普百科风信息图",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case32/output.jpg",
    "imageAlt": "Generate a high-quality vertical \"...示例图",
    "prompt": "生成一张高质量的竖版「科普百科风信息图」，主题为【自定义主题】。这张图不是普通海报，也不是单纯的插画，而是一张融合了图鉴感、百科感、信息结构感与收藏价值的模块化科普信息图。整体风格参考高端博物志图鉴、现代百科书页、生活方式知识卡片，以及适合社交媒体分享的高传播力信息图。画面需包含：清晰精美的主题主视觉；若干局部特征的放大细节特写；多个圆角模块化信息区块；清晰的标题层级与关键标签；简洁而丰富的百科内容；可视化评分、要点总结或 Top5 模块。内容区块应根据主题自动适配，优先从以下方向筛选并合理组合：基础档案、分类信息、外观特征、习性生态、形成机制或结构组成、生长或使用条件、养护或保养技巧、风险与注意事项、适用人群或应用场景、优缺点对比、快速评分卡。视觉要求：明亮干净的背景、柔和的配色、细腻的阴影、精致的小图标、圆角信息框、工整的排版、信息密度高而不显杂乱、阅读体验出色。整体要像一张可出版、可阅读、可收藏、可成系列生产的真正科普百科卡片，而非广告图。请勿做成普通商业促销海报，重点突出「知识整理＋模块化信息＋图鉴式呈现」的特征。画面比例 9:16。",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case31/output.jpg",
    "imageAlt": "生成一张慈禧的X主页示例图",
    "prompt": "以「生成一张慈禧的X主页」为目标生成图像。\n\n核心提示词：生成一张慈禧的X主页\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046530764871696750",
    "title": "手相占卜鉴定书",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case32/output.jpg",
    "imageAlt": "GPT-image-2でこの手相を診断して詳細な鑑定書を作って示例图",
    "prompt": "请对这只手相进行诊断，制作一份详尽的鉴定书。需分析生命线、智慧线、感情线、命运线、太阳线、财运线与婚姻线，从线条的形状、深浅、分叉、起点与终点逐一解读。以给出建议为重点，整理成一份高品质的占卜鉴定书，排版工整、结论清晰、富有仪式感，条理分明地呈现每条掌纹的含义与对应的人生指引。",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/comparison_case37/output.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case33/output.jpg",
    "imageAlt": "生成一张【字体】书法临摹字帖示例图",
    "prompt": "以「生成一张【字体】书法临摹字帖」为目标生成图像。\n\n核心提示词：生成一张【字体】书法临摹字帖\n\n输出比例：4:5 / 9:16。\n\n扩展要求：请强化标题、副标题、视觉主体、留白、字体层级和版面节奏，做成完成度高的海报或封面。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046437230127034774",
    "title": "唐吉诃德风促销POP",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case34/output.jpg",
    "imageAlt": "GPT Image 2を使って、OpenClawの情報を調べてドンキ...示例图",
    "prompt": "请查阅 OpenClaw 的相关信息，生成一张唐吉诃德折扣店广告 POP 风格的图像，效果要像实际张贴在店内货架上的手写促销海报：黄底红字、夸张大字号、手写体价格与爆炸贴，密集堆叠的卖点文案，热闹拥挤、极具冲击力的日式量贩店促销氛围，整体色彩鲜艳、信息满溢。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046514558064586782",
    "title": "超市特卖折页海报",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case49/output.jpg",
    "imageAlt": "『賑やかで魅力的なスーパーマーケットの折り込みチラシの画像。上部には...示例图",
    "prompt": "一张热闹而吸引人的超市折页传单图像。顶部是「特卖」的醒目大字与本周日期；画面布满色彩缤纷的商品照片（蔬菜、水果、牛肉、鲜鱼），配以红框价格标签，以及「超值特惠」「家计应援」等号召性标语。整体排版密集饱满、配色鲜艳，营造出量贩超市促销单页的真实质感与抢购氛围。",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case34/output.jpg",
    "imageAlt": "请根据【主题】，生成一张高设计感的人物关系图海报。要求这张图不是普通...示例图",
    "prompt": "请根据【主题】，生成一张高设计感的人物关系图海报。要求这张图不是普通插画，而是兼具信息可视化、叙事结构、海报设计感和作品风格还原度的人物关系图。\n\n请自动完成以下内容：\n- 识别该主题对应的作品及其核心设定\n- 提取最具代表性的 6–12 位关键人物，必要时不超过 15 位\n- 识别并展示关键人物关系，包括血缘、爱情、友情、联盟、敌对、师徒、主从、操控、背叛、秘密关系等\n- 自动按作品特点选择合适的构图方式，如主角中心型、双核心对峙型、阵营分区型、家族谱系型或时间演变型\n- 自动提炼作品的风格DNA，包括色彩、世界观符号、材质纹理、情绪氛围、排版语言和代表性元素\n- 将这些风格元素转化为人物关系图的整体视觉设计，而不是简单复制某张官方海报\n- 用不同颜色、线型、箭头区分不同关系，保证线条清晰、层次分明、不杂乱\n- 核心人物最突出，重要人物次之，次级人物弱化，形成明确视觉层级\n- 每个人物名称清晰可读，必要时可加入身份或阵营标签\n\n最终成品应满足：\n- 一眼看懂人物主次和关键关系\n- 具有明显的原作品气质与设定感\n- 兼具信息图的清晰度与海报的高级设计感\n- 画面统一、精致、完整、适合社交媒体传播或海报展示\n- 避免廉价流程图感、避免杂乱堆砌、避免信息过载",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046448773162033240",
    "title": "混沌手稿浮现人脸",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/character_case9/output.jpg",
    "imageAlt": "# 混沌としたメモ書き・記号の集合体からキャラクターの顔を浮かび上が...示例图",
    "prompt": "一种从混沌的手写笔记与符号集合中浮现出人物面孔的艺术。风格：白纸上以黑色墨水写满大量手写笔记、公式、符号与随意线条；整张纸铺满涂写般的混沌感；局部以红色墨水强调（线条、涂块、马克笔式块面）；呈现模拟笔记本涂鸦的质感。构图：随机的笔记与符号铺满整个画面；黑色墨水的线条与文字密度在人物面孔所在位置聚集；最终从混沌之中隐隐浮现出给定人物的面部轮廓与神情；面孔并非写实描绘，而是由混沌碎片聚合成形。色彩：以黑白单色为主体，红色墨水作为零星点缀，饱和度克制，重视纸张与墨水的模拟质感。表现要素：似可辨认又难以读清的字符串，中文与英数字混杂；数学符号、箭头、点、斜线、交叉、墨迹飞溅；人物面孔的眼睛与发丝轮廓，由笔记符号排布的留白与浓淡自然浮现。禁止：直接描画面孔的写实肖像、过于规整的数字化几何图案、缤纷上色或过饱和表现、标志、水印与人工感画面。完成标准：整体成立为混沌的笔记符号集合体，给定人物的面孔从浓淡与排布中自然浮现，配色仅为黑白加红色点缀，保留纸张与墨水的手绘质感。画面比例 3:4。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046414546378584558",
    "title": "前卫玻璃拟态设计系统",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/88lin/gpt-image-studio@main/docs/images/prompt-examples/2046414546378584558.jpg",
    "imageAlt": "Generate for me a UI design system...示例图",
    "prompt": "为我生成一套界面设计系统，主题极其前卫、大胆而独特，包含玻璃拟态的通透视觉与透明质感。整套系统需组件齐全、风格统一：按钮、卡片、开关、输入框、导航栏、弹窗等成套呈现；大量运用磨砂玻璃、半透明叠层、柔和高光与细腻投影，营造真实的毛玻璃折射质感；配色前卫大胆、层次分明，兼具科技感与高级感，可直接用作产品界面的设计规范。",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case18/output.jpg",
    "imageAlt": "根据你对我的认知 给我生成一个“你认识的我”的 图片示例图",
    "prompt": "以「根据你对我的认知 给我生成一个“你认识的我”的 图片」为目标生成图像。\n\n核心提示词：根据你对我的认知 给我生成一个“你认识的我”的 图片\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/88lin/gpt-image-studio@main/docs/images/prompt-examples/2046540642634047868.jpg",
    "imageAlt": "Prompt见评论。示例图",
    "prompt": "以「Prompt见评论。」为目标生成图像。\n\n核心提示词：Prompt见评论。\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-github-raw-2046528889124728993",
    "title": "普拉提课程招生广告",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case51/output.jpg",
    "imageAlt": "ピラティス教室の広告画像を作成したい テキストはよりユーザーが登録を...示例图",
    "prompt": "制作一张普拉提教室的招生广告图像。文案要更能吸引用户报名、具号召力与打动力；画面中呈现女性正在实际练习普拉提的场景，姿态舒展专业。整体明亮、健康、专业，突出体态之美与课程氛围，配色清新、排版清晰，适合投放社媒与门店招生。",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case53/output.jpg",
    "imageAlt": "用可爱的风格讲述中国远征军的历史故事示例图",
    "prompt": "以「用可爱的风格讲述中国远征军的历史故事」为目标生成图像。\n\n核心提示词：用可爱的风格讲述中国远征军的历史故事\n用波普风格讲述金刚经\n\n输出比例：3:4 / 4:5。\n\n扩展要求：请保留真实摄影或文档质感，补充光线、机位、环境细节、纸张或镜头特征。\n画面要有明确主体、可复用构图和一致的视觉语言；如果出现文字，标题和关键标签必须清晰可读。不要生成乱码、水印、无意义占位字、低清截图或与主题无关的元素。",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case38/output.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/comparison_case30/output.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case54/output.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case33/output.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case55/output.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case56/output.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case36/output.jpg",
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
    "prompt": "生成完整高端的品牌运营图 ，产品是老干妈和星巴克的联名款：老干妈美式，中间是主图，下面放一些联名的设计，包装袋、杯套以及吉祥物。",
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
    "prompt": "创建一个视觉上令人惊叹的教育信息图表，以简洁、现代的学术风格解释马格努斯效应。使用柔和的中性背景（奶油色或浅米色），标题采用优雅的衬线字体，正文使用极简的无衬线字体。\n\n将布局结构化为清晰分隔的编号部分（例如，1、2、3、4），每个部分包含简洁的标题和简短解释。包含细微的分隔线和平衡的间距。\n\n融入数学符号、符号以及逐步视觉图表（如网格、箭头、高亮或方框元素），以清晰阐释概念。使用有限的色彩调色板（蓝绿色、金色点缀、深灰色文本），并以柔和的高亮进行强调。\n\n添加视觉提示，如箭头、虚线或高亮框，以引导观者的视线跟随逻辑。保持对称、对齐，以及一种精致的“教科书遇见现代设计”的美学。\n\n最终设计应给人一种高端教育海报的感觉——极简、优雅、高度可读，并具有智力满足感。",
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
    "prompt": "参考例图五官发型，生成一页古早少女系时尚杂志内页，类似 2000s-2010s 早期日系甜美穿搭月刊风格，真实的杂志内容页。\n整体是高完成度杂志排版设计，画面中要有：\n•主模特大图（占页面主体）\n•多个穿搭单品拆解模块\n•妆容教学小框（眼妆、唇妆、腮红技巧）\n•发型技巧小框 / hair arrange\n•搭配建议 / 3days coordinate / item checklist\n•若干产品图（衣服、包包、鞋子、化妆品）\n•杂志标题、小标题、注释、价格标签、说明文字\n•版面丰富，信息量大，但排版清晰，像真实杂志，不要海报感，不要只有一个人物大图",
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
    "prompt": "一个有着清冷孤傲气质的绝美佳人，精致的面部特征，一张冷酷且精致的高级时装面容，长发，以及优雅苗条的身材；烧烤“三刀流”姿势：嘴里叼着一根烧烤串，每只手各拿一根烧烤串交叉以模仿索隆的三刀流；街头夜景氛围，温暖黄色的夜市灯光，模糊的背景，胶片般的质感，柔焦光晕，电影般的叙事感，时髦高端网红风格的时尚拍摄，清晰发光的肌肤，清晰细致的发丝，生动的动态表情，低角度广角镜头，情绪化的暗调氛围，浅景深，超高清8K，极致细节，电影级光照",
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
    "prompt": "设计虚构动画的钥匙视觉图。主题是「科幻桃太郎」。设计有魅力的角色、背景、标志和宣传语，以一幅美丽插画的形式完成，让世界观在一张图中传达出来。",
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
    "prompt": "服裝細節： 模特兒身穿一套精緻的淡冰藍色齊胸襦裙，採用多層輕盈的薄紗和絲綢歐根紗材質制成。其寬大的、半透明的廣袖上點綴著如繁星般微小的銀色和淺藍色亮片刺繡，在光線下閃爍（具有銀河般的夢幻感）。抹胸位置有複雜的銀色蕾絲和編織紋理細節，腰帶自然垂落。\n\n材質與光影： 畫面呈現 8k 超高分辨率和對織物微距紋理的極致渲染。光線採用柔和的自然側光（丁達爾效應 Typndall Effect），精準地透射過輕薄的紗布，營造出面料的半透明感（Translucency）和流動感。\n\n構圖與鏡頭： 採用 85mm 黄金人像鏡頭效果，f/1.8 大光圈，全身構圖，模特居中站立",
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
    "prompt": "一幅细节丰富的工笔画，描绘了一位唐朝贵族女子在御花园中漫步。她看起来优雅而平静。\n\n她手里拿着一根金色的牵引绳。牵引绳的尽头是一只可怕的**异形怪物（出自电影《异形》）**。然而，这只异形穿着一件**可爱的粉色丝绸马甲**，并且表现得像一只训练有素的狗。\n\n背景有牡丹和蝴蝶。\n\n**在右下角，有一个红色的竖排艺术家印章，写着“吴先生”（Mr. Wu），风格像水印一样。** --ar 3:4",
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
    "prompt": "创建一个高级的 4:3 演示文稿封面幻灯片，介绍来自 http://chroniclehq.com 的 AI 原生演示平台 Chronicle。  \n\nStyle: \n优雅，极简，现代，高级初创企业美学。类似于高端品牌指南封面（如 Apple / Linear / Notion 风格）。带有微妙深度感的柔和渐变背景，干净的留白，精致的排版，经过打磨的编辑式布局。  \n\nMain title: \nCHRONICLE  \n\nSubtitle: \nAI PRESENTATION PLATFORM  \n\nBody copy (small elegant text): \n将原始想法转化为经过打磨的、高影响力的演示文稿。 \n从笔记、文档、链接或现有幻灯片开始。 \n使用 AI 生成美观的、符合品牌调性的幻灯片。 \n在灵活的画布上自由编辑。 \n导出为 PPT、PDF，或发布为网站。  \n\nFeature highlights (small premium labels): \nSTORY-FIRST \nON-BRAND DESIGN \nAI EDITING \nFREEFORM CANVAS \nPPT EXPORT \nTEAM COLLABORATION  \n\nBottom-right elegant logo text: \nchronicle  \n\nVisual feeling: \n商务级高级感，战略级幻灯片质量，咨询级演示文稿，略带未来感但高度专业。  \n\nComposition: \n干净的编辑式平衡，不对称布局，强烈的留白，演示软件主视觉感。  \n\nAspect ratio: \n4:3  \n\nLanguage: \n仅限英文",
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
    "prompt": "（Steampunk Scientific Illustrator）你是一位专业复古蒸汽朋克解剖图谱设计师，擅长星座机械结构科普海报。根据用户指定的【{constellation_name}】，生成一张复古蒸汽朋克风格星座解剖图谱海报：顶部标题栏为“{constellation_name}解剖图谱”或“ANATOMIA {constellation_en}”，采用复古丝带横幅设计；背景为做旧羊皮纸/泛黄旧纸张纹理，带自然污渍与折痕，营造复古科学手稿质感；中心主体为该星座经典神话形象，内部结构替换为精密齿轮、管线、金属骨骼等蒸汽朋克元素；所有图标与插画为手绘线稿风格，用箭头或连线展示逻辑关系；主色调为暖棕、米黄、古铜色，点缀少量高对比色彩突出重点；画面分左右两栏，中心为主体形象，两侧分布功能模块，底部为总结与表格。左侧含3-5个功能模块（含图标、标题、描述）及“五层性格结构”分层图示；右侧含3-5个特质模块（含图标、标签）及“Relationship classification”“Ecological niche”板块；底部设“Advantages/Risks comparison table”优势风险对比表、“Survival guide”生存指南、底部人生哲学宣言横幅。整体严谨精致、复古机械美学，文字清晰可读 4K高清，直接出图，星座为【射手座 / Sagittarius】。",
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
    "prompt": "一个看似真实却微妙地古怪的女装大叔出现的电影海报，4 种。达到专业设计师制作的水平。 企划和设定本身就是那种“这种东西真要拍成电影吗？”的、认真却忍不住想笑的超现实动画。 标题和播出信息也要用日文显示的状态。",
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
    "prompt": "用 ABCD（a black cover design) 的风格，为 图你太美 设计一个 vi 系统。图你太美是一个头像美图分享 网站。",
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
    "prompt": "{\n  \"相机参数\": {\n    \"设备类型\": \"iPhone 15 Pro 前置自拍\",\n    \"镜头\": \"24mm\",\n    \"构图\": \"高角度 POV（第一人称视角）\",\n    \"后期处理\": \"计算摄影风格，清晰的数字读出，深景深\"\n  },\n  \"主体描述\": {\n    \"特征\": \"陶瓷娃娃审美，无瑕的苍白皮肤，巨大的冰蓝色眼睛，小巧的鼻子，翘起的自然色嘴唇\",\n    \"表情\": \"面无表情，空洞，瞪大眼睛注视\",\n    \"造型\": \"白金色的双紧辫发型，鲜艳的蓝色美甲\",\n    \"服装\": \"浅蓝色紧身弹力棉上衣，极深超宽 V 领，深邃锁骨与领口线\",\n    \"动作\": \"抬头仰视镜头，用一只手遮挡刺眼的阳光\"\n  },\n  \"环境与灯光\": {\n    \"场景\": \"广阔的沙滩，背景中模糊的海平线\",\n    \"灯光\": \"高调明亮的沿海日光，5500K 色温，强烈的白沙反光填充，均匀照明\",\n    \"质感\": \"微带露水的无孔皮肤，细腻的反光白沙颗粒\"\n  },\n  \"技术约束\": {\n    \"色彩科学\": \"柔和的粉彩色调，线性中性色，高曝光\",\n    \"负面提示词\": [\n      \"重阴影\",\n      \"雪\",\n      \"冬装\",\n      \"红指甲\",\n      \"黑色上衣\",\n      \"保守的领口\",\n      \"胶片颗粒感\"\n    ]\n  }\n}",
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
    "prompt": "（国风卷轴插画师）你是一位顶尖的中国传统工笔人物画师，擅长将经典人物群像绘制成长卷式百科海报。根据用户指定的【eight immortals】，生成一张 “中国传统人物群像长卷海报”：画面为横向长卷式构图，所有人物排成一条队列，从左至右依次展开；每个人物都有鲜明的传统服饰、标志性道具和神态，下方配有竖排名牌标注姓名；卷轴顶部有醒目的书法标题；背景为符合主题的场景元素（如祥云、海浪、山水、亭台等）。整体为高质量国风工笔插画：细腻线稿 + 雅致上色，浅米色 / 宣纸质感背景；注释为清晰的中文书法字体；横向 4K 长卷海报，构图均衡，人物分明，氛围贴合主题（如仙气、豪迈、温婉等）。直接出图，人物群像为【eight immortals】。",
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
    "prompt": "请用这个角色制作一本由专业设计师打造的写真集，语言设定为日语。可根据个人喜好补充更多提示词，让成品更加丰富多彩：场景丰富多样、信息量充足饱满，整体呈现专业摄影集般的高级质感与叙事感。",
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
    "prompt": "创作一张超高细节等距像素艺术时间线插画（3:4，4K），融合细节密度、象征性与隐喻。用户指定的主题为【Western Art Development】。\n\n首先，围绕Western Art Development进行推理，确定：主题的中英文标题、涵盖的最早与最近历史时期、起始阶段标签与结束阶段标签，以及3-5个关键演进阶段及其各自的象征性元素与色彩方案。\n\n然后构建一个以\"Western Art Development\"为主题的等距\"演进博物馆\"，每个展馆区域代表一个演进阶段，空间推进即代表时间演变。采用标准等距视角（2:1），丰富的层次深度与流畅过渡。每个阶段分配3-5个与主题强烈关联的象征元素，并用差异化色彩暗示时间流动。在场景中融入双语像素字体标题：中文\"[主题中文]演进史\"与英文\"EVOLUTION OF Western Art Development\"，加上起止阶段的双语副标题及关键时间节点标记。整体风格专业且具视觉张力，适合学术分析与对比可视化，直接出图。",
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
    "prompt": "使用附图中的图案，由专业设计师打造 4 款时尚单品，采用不同的色彩搭配与排版设计，附带穿搭效果图。以雅致的构图凸显图案的美感。格式为 2:3，希望将图像生成模型从 duct-tape-1 指定为 duct-tape-2、3。",
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
    "prompt": "中文提示词\n角色：世界级科学百科插画师兼知识图谱架构师\n任务：以经典、无品牌标识（无任何 Logo）的科学百科风格，创作一幅细节极致丰富、结构极其精巧、视觉效果惊艳的「环球图解百科科学信息图」。\n题材选择：从【人物、植物、动物】中任选其一。\n具体对象：【例如：大王乌贼 / 列奥纳多·达·芬奇 / 红杉树】\n风格：采用复古泛黄米色纸张背景，绘制精细工整的科学插画；线条细腻精致，整体繁复专业、严谨考究。\n核心视觉要求\n主体逼真 3D 效果\n位于画面视觉中心（C 位）的主体形象，需具备极致的写实感与动态张力。营造强烈的空间纵深感，让人物、植物或动物仿佛突破画框，从平面纸张中跃出、冲向观者（效果类似变形 3D 或动态弹出效果，高精度写实呈现）。\n版式布局与留白设计\n主体位置：占据画面中心，周围刻意设置规划式留白，强化立体弹出效果，使其成为绝对视觉焦点。\n周边模块：根据所选题材，在画面四周（上下左右及四角）排布 6–8 个独立且规整有序的知识模块。整体呈现规整的信息密度感，而非杂乱堆砌。每个模块需带有清晰边框、标题栏与详尽丰富的内容。\n关联结构\n运用纤细的指示线、箭头、括号、虚线与小型连接点，构建复杂且逻辑清晰的网络，将中心主体与所有周边模块相连，并使各模块之间相互关联，形成完整统一的知识体系。\n文字与标注（硬性要求：必须为清晰中文）\n主标题：以醒目大气、笔法优美的中文书法字体呈现具体对象名称【例如：大王乌贼】。\n书法点缀：在主体画面与模块标题中，对关键术语使用工整美观的中文书法字体标注。\n标准中文文本：其余所有说明文字、大量清晰中文手写注释、模块内容及注解均使用清晰可辨的简体汉字，不得出现乱码或无法识别符号，优先保证文字可读性。\n指示线标注：模块内所有细小结构、细节、子模块、图表与插画，均需搭配详尽的指示线标注（仿解剖图形式），直接指向对应部位，最大化体现专业性与科普价值，做到每一处结构均有标注。\n分题材模块结构（参考示例）\nA. 人物类\n模块 1：解剖结构与骨骼系统（含放大剖面图示）\n模块 2：生理运作机制（如循环系统、神经系统）\n模块 3：生平背景与时间线（核心成就）\n模块 4：主要贡献图解（详细拆解）\n模块 5：认知模式与心理特征\n模块 6：基因特征与演化溯源\n模块 7：全球影响力与文化冲击\n模块 8：艺术形象与后世传承\nB. 动物类\n模块 1：整体外形草图与解剖结构（含显微镜级圆形放大细节）\n模块 2：行为模式与生命周期（如交配、迁徙，流程图形式）\n模块 3：消化系统与骨骼系统\n模块 4：栖息环境与分布地图（含环境细节）\n模块 5：独特适应性特征（如伪装、捕食器官）\n模块 6：演化历史与亲缘物种\n模块 7：共生关系与生态位作用\n模块 8：保护现状与人类互动\nC. 植物类\n模块 1：植株整体草图与解剖结构（含叶片、根部放大细节）\n模块 2：光合作用与生命周期流程（搭配环境示意图标）\n模块 3：细胞结构（圆形放大视图）\n模块 4：药用价值与实际应用\n模块 5：环境适应性与独有特征\n模块 6：分布地图与生长环境\n模块 7：基因变异与培育方式\n模块 8：历史用途与民间传说\n整体构图要求\n信息密度极高，规整划分为 6–8 个结构化模块，同时通过中心区域的规划留白突出超写实主体的立体弹出效果。风格硬核、专业、学术化，凭借动态 3D 主体实现极强视觉吸引力。\n无任何百科品牌标识（如 DK 等 Logo）。\n所有标注清晰可辨，所有手写注释工整可读。\n主标题采用中文书法字体。\n画面比例：3:4。\n【主题内容】\n\n英文提示词\nRole: World-class Scientific Encyclopedia Illustrator & Knowledge Graph Architect.\n\nTask: Generate a highly detailed, extremely intricate, and visually stunning \"Universal Illustrated Encyclopedia Science Infographic\" in a classic, unbranded (NO logos) scientific encyclopedia style.\n\nSubject Matter: Choose one from [People, Plants, or Animals]. \n\nSpecific Subject: [e.g., The Giant Squid / Leonardo da Vinci / The Sequoia Tree].\n\nStyle: Fine, detailed scientific illustration on a retro, aged beige paper background. Delicate linework. Intricately complex and professional.\n\nKey Visual Requirements:\n\n1.  Lifelike 3D Effect (The Central Subject): The central subject in the \"C position\" must be rendered with extraordinary realism and dynamism. Create a dramatic sense of depth where the character, plant, or animal appears to break the frame, leaping or bursting out of the flat paper towards the viewer (an effect similar to anamorphic 3D or dynamic pop-out, with high-precision realism).\n\n2.  Layout & Strategic White Space:\n    * Central Subject: Dominates the center, with intentional \"strategic white space\" around it to enhance the popping-out effect and make the figure the clear focal point.\n    * Surrounding Modules: The surrounding area (left, right, top, bottom, and corners) must be filled with 6-8 distinct, highly organized knowledge modules, depending on the subject. There should be a sense of organized density, not random clutter. The modules themselves must have clear borders, headers, and extensive, detailed content.\n\n3.  Connections: Use a complex, logical network of fine leader lines, arrows, brackets, dotted lines, and small connection points to link the central figure to all surrounding modules, and interconnect the modules themselves into a cohesive knowledge web.\n\n4.  Text & Annotation (Hard Requirement - Must be CLEAR Chinese):\n    * Main Title: A large, prominent, beautifully executed **Chinese calligraphy** (书法体) of the specific subject's name [e.g., \"大王乌贼\"].\n    * Calligraphic Accents: Scattered throughout the main content and module titles, use beautiful, clear Chinese calligraphy for important terms.\n    * Standard Chinese Text: All other descriptive text, handwritten notes (大量清晰中文手写注释), module content, and annotations must be clear, legible Chinese characters (简体中文), not gibberish or unreadable symbols. Ensure text clarity is prioritized.\n    * Leader Line Annotations: Every single small component, detail, submodule, diagram, or illustration within the modules must have detailed leader line annotations (拟解剖图) pointing directly to it for maximum professionalism and educational value. Every part should be labeled.\n\nSubject-Specific Module Structure (Example for general reference):\n\nA. For Humans [People]:\n   - Module 1: Anatomy & Skeletal Structure (w/ magnified cross-sections)\n   - Module 2: Physiological Processes (e.g., Circulatory/Nervous System)\n   - Module 3: Historical Context & Timeline (Key Achievements)\n   - Module 4: Major Contribution Diagram (Detailed breakdown)\n   - Module 5: Cognitive Process / Psychological Insight\n   - Module 6: Genetic Profile / Evolution\n   - Module 7: Global Influence & Cultural Impact\n   - Module 8: Cultural Representations / Legacy\n\nB. For Animals:\n   - Module 1: Full External Sketch & Anatomy (w/ microscope magnified detail circular windows)\n   - Module 2: Behavioral Patterns & Lifecycle (e.g., Mating/Migration, Flowchart style)\n   - Module 3: Digestive & Skeletal System\n   - Module 4: Habitats & Distribution Map (with environmental details)\n   - Module 5: Unique Adaptations (e.g., camouflage, hunting tools)\n   - Module 6: Evolutionary History & Relatives\n   - Module 7: Symbiotic Relationships / Ecosystem Role\n   - Module 8: Conservation Status & Human Interaction\n\nC. For Plants:\n   - Module 1: Full Plant Sketch & Anatomy (w/ magnified leaf/root details)\n   - Module 2: Photosynthesis & Lifecycle Flow (w/ icons for environment)\n   - Module 3: Cellular Structure (Magnified circular views)\n   - Module 4: Medicinal Properties / Practical Applications (as in original original prompt)\n   - Module 5: Environmental Adaptations / Unique Features\n   - Module 6: Distribution Map & Environmental Context\n   - Module 7: Genetic Variations & Cultivation\n   - Module 8: Historical Usage & Folklore\n\nOverall Composition: Extremely dense with information, organized into 6-8 structured modules, but balanced with strategic empty space around the center to allow the main, hyper-realistic figure to pop. Hard-core, professional, academic, but visually engaging due to the dynamic 3D central figure. No branding from any specific encyclopedia (e.g., no \"DK\" logos). All annotations must be legible. All handwritten notes must be clear. Main titles in Chinese calligraphy. Aspect Ratio: 3:4.\n\n[主题内容]",
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
    "prompt": "根据上传图片的风格，生成明朝各个皇帝的头像，头像下面有他们的谥号和名字",
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
    "prompt": "9:16 的图片，生成一张哔哩哔哩直播的截图，里面是 户晨风在直播，户晨风表情开心，手里拿着牌子，牌子里写着 “Austin总太性情了，大家给Austin总点点关注。”",
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
    "prompt": "【背景与骨架线条】\n纯黑深邃底色，一条粗壮有力的墨色书法S型曲线自画面一端蜿蜒贯穿至另一端，笔触苍劲，墨迹浓淡有致，如大写意行笔，构成整幅画面的视觉骨架与叙事动线。\n【主体：透明燕子】\n曲线上方，一只展翅飞翔的画眉鸟占据视觉核心；身体呈玻璃透明质感，内部映射传统建筑群叠影，蓝绿色光流在透明羽翼间流转折射，仿佛时间长河与文明记忆凝缩其中；轮廓以极细金线勾边，增强立体感与神圣感。\n【中景：古典建筑序列】\n燕子下方，沿墨线曲线错落分布广州的各种风景名胜：白云山、陈家祠、双子塔、广州塔、猎德大桥、海珠塔依次浮现；主色调青绿与淡金，建筑细节清晰，琉璃瓦、飞檐翘角、石阶回廊；木棉花簇拥点缀于建筑周围，花瓣随风轻散，静谧而悠远；几朵水墨云朵轻盈飘浮其间，增添空灵层次。\n【前景：白鹤与水面】\n前景湖畔：数只白鹤或静立水边、或振翅腾飞，姿态各异，优雅从容；浅蓝湖面如镜，倒影荡漾，波光细碎，营造宁静氛围。\n【远景：山峦】\n远处山峦层叠起伏，青黛色晕染，墨色由浓至淡，朦胧氤氲，富有水墨层次；与前景形成近实远虚的空间纵深。\n【构图与光影】\n非线性透视构图，墨线曲线为叙事主轴，古今元素沿线嵌入；光源自画面中心向外辐射扩散，形成强烈明暗对比，中心亮、四周渐暗；冷色调主导（深蓝、青绿、银白），暖色点缀（樱花粉、淡金），和谐而神秘；东方美学与现代意象交融，超现实诗意意境。\n【技术规格】\n8K超高清渲染，极致细节精度，最佳画质，比例 9:16",
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
    "prompt": "新中式极简风格高端城市海报，9:16竖版构图，以广州为核心主题，画面中心为抽象几何化的广州塔，造型简洁但具有辨识度，\n\n整体采用S型流动构图，从下方向上延展，珠江水系被设计为流动的水波纹与传统祥云纹样融合，环绕整个画面形成视觉动线，\n\n广州地标建筑以“留白+线描+局部色块”的方式点缀其中：珠江新城双塔、猎德大桥、白云山轮廓、岭南骑楼，\n传统与现代建筑自然融合，层次递进，远近虚实分明，\n\n风格控制：极简 + 高级 + 东方意境，不杂乱不过度写实，\n\n色彩方案（重点）：\n高饱和但克制 ，中国红、青蓝、鎏金为主色，\n辅以少量暖金高光点缀，形成强烈视觉冲击但不俗艳，\n\n背景：大面积纯净留白或淡宣纸肌理，增强呼吸感与高级感，\n\n细节：祥云与水纹具有轻微浮雕/烫金质感，\n局部加入微光粒子或流动光线，增强现代感，\n\n光影：柔和渐变光+局部高光，突出恢弘大气氛围，\n\n整体风格：国潮高级插画 / 品牌海报级质感 / 8K / 超清细节",
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
    "prompt": "创意艺术字体“纵有疾风起”，秀丽笔手写风格，整体文字横版排列，具有强烈视觉冲击力；\n深度融合手写书法笔意，笔触带毛笔书写的粗犷洒脱，如挥毫泼墨的肆意劲道；\n起收笔的飞白，顿挫，尽显促销的火爆张力，文字的形态打破规整，笔画的粗细变化；\ndutch angle，营造出动感冲刺的气势，字形呈奔放之势；\n重心上扬如蓄势待发，笔画的伸展，穿插毫无拘束，似全力冲刺的劲道；\n整体架构疏密交织，紧密处如促销热潮的汹涌，留白处似优惠间隙的呼吸感；\n纯净黑色背景打底，完美契合热烈氛围，艺术字的形态与色彩酣畅传递。",
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
    "prompt": "结合王羲之的《兰亭集序》里的内容，生成一副书法帖图片，要求图片背景符合《兰亭集序》的意境，背景图可以使用蒙版，前景是《兰亭集序》",
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
    "prompt": "生成一张适合小红书发布的 3:4 竖版九宫格海报，整体为 3列 × 3行 排版，九个宫格边界清晰，方便后期直接切割成 9 张单图发布。整体风格干净、高级、统一，适合女性向健康生活方式内容，具有小红书爆款封面气质。画面要求 信息排版清晰、文字大、可读性强、留白舒服、配色温柔治愈。\n\n整体视觉风格：\n奶油白、浅米色、淡燕麦色、浅焦糖色为主色调，搭配少量深棕色文字，ins风、治愈感、睡眠疗愈主题，简约排版，轻拟物插画点缀，可加入枕头、月亮、星星、热牛奶、香薰、书本、眼罩、窗帘、床铺等元素。整体像专业新媒体设计图，字体工整，适合做知识科普类小红书九宫格。\n排版要求：\n\n整张图必须是标准九宫格构图，切分后每一格都能独立成图\n\n每个宫格内容完整居中，不要把标题或正文压在分割线附近\n每个格子之间保留明显间隔或细边框，保证裁切后不影响阅读\n所有文字使用中文，清晰易读，不要乱码，不要英文\n每个宫格都像独立的小红书图文卡片，但视觉风格保持统一\n画面精致、真实、自然，不要廉价营销感，不要过度花哨\n九宫格具体内容：\n\n第1格（封面）\n大标题：让你倒头就睡的8个 tips\n副标题：失眠党、熬夜党一定要收藏\n封面视觉最吸睛，适合做首图，加入柔软床铺、月亮、枕头、眼罩等治愈睡眠元素，标题突出，排版高级。\n\n第2格\n标题：1. 睡前1小时别玩手机\n正文：蓝光会让大脑更清醒，越刷越睡不着。\n配图元素：手机、月亮、困倦表情的小插画\n第3格\n标题：2. 睡前把灯光调暗\n正文：暖光环境能帮助身体进入“准备睡觉”的状态。\n配图元素：床头灯、暖黄色灯光、窗帘\n第4格\n标题：3. 房间温度别太高\n正文：稍微凉一点，更容易快速入睡。\n配图元素：空调、温度计、被子\n第5格\n标题：4. 晚上别喝浓茶咖啡\n正文：咖啡因会延迟困意，让你躺很久还睡不着。\n配图元素：咖啡杯、茶杯、禁止符号\n\n第6格\n标题：5. 睡前洗个热水澡\n正文：能让身体放松下来，入睡速度更快。\n配图元素：浴室蒸汽、毛巾、热水\n第7格\n标题：6. 脑子停不下来就写下来\n正文：把烦心事和待办清单写下，大脑会更容易放松。\n配图元素：笔记本、钢笔、小台灯\n第8格\n标题：7. 固定上床时间\n正文：每天差不多时间睡，生物钟会越来越稳定。\n配图元素：时钟、月亮、床\n第9格\n标题：8. 试试深呼吸放松法\n正文：吸气4秒，停4秒，呼气6秒，慢慢就有困意了。\n底部小字：收藏这组，今晚试试看\n配图元素：呼吸线条、闭眼人物、星星\n\n画质要求：\n高清，高级排版，杂志感，真实可发布，新媒体运营审美，小红书爆款图文风格，文字布局规整，适合直接切图。",
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
    "prompt": "广东省城市足球超级联赛（粤超）邀请函海报设计，比例9:16； \n\nS型流动构图，画面从下方向上延展，一条由足球运动轨迹形成的动态能量流贯穿画面， 中心为一颗发光的足球，带有动感轨迹与能量光效；\n\n沿S型动线融合广东城市地标与文化元素： 广州塔、深圳平安金融中心、珠海渔女雕像、岭南建筑与佛山武术剪影、中山孙中山文化象征、潮汕英歌舞动态人物轮廓、清远山水自然景观， 所有元素采用“线描 + 局部色块 + 留白”融合表现，层次递进、远近虚实结合；\n\n加入抽象足球运动员剪影，弱化人物细节，强化动势与竞技氛围，视觉重点仍为足球；\n\n风格：现代国潮高级海报，极简风格但富有设计感，高级、干净、统一， 融合东方美学与现代体育视觉；\n\n色彩方案：高饱和但克制，中国红为主视觉，青蓝色辅助，金色点缀高光， 高对比但不杂乱，具有品牌级视觉冲击力； \n\n顶部中央横版视觉主标题 「广东省城市足球超级联赛」：中字，宋体， 中央竖排文字排版： 「粤超」，大字，手写书法艺术字体， 「邀请函」：中字，宋体，纵向排列，间距较大， 底部中央第一排横排： 「2026年4月25日」，小字，宋体，第二排：「广州越秀山体育场」，小字，宋体， 预留文字排版空间；\n\n整体版式平衡、具有高级品牌海报质感，极致精细，构图简洁干净，无杂乱元素，电影级光影，8K 分辨率，高端设计感。融入源自中国传统祥云纹的雅致云纹与水波纹元素，浮动光效粒子，富有动感与生机。",
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
    "prompt": "图像生成: 商品广告照片, 适合夏天的季节商品, 碳酸饮料, 名称=\"夏柑SODA\", 形状=PET瓶500ml, 研究2025年作为饮料广告的高CTA设计后设计并生成图像规格, 宽高比3:4",
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
    "prompt": "一幅超现实主义数字插画风格，采用低角度仰拍视角。画面描绘了一条巨型彩色锦鲤遨游在梦幻般的星云中，四周环绕着色彩鲜艳的星云与气泡。 \n画面中央还站着一个小人，背对观众，神情平静地仰望空中这条巨大的锦鲤，锦鲤头向下看着小人。 \n整体画面呈现出强烈的大小对比，氛围空灵又梦幻。比例9:16",
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
    "prompt": "为我生成景德镇青花瓷的详细解说图，配上详细的中文知识解析",
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
    "prompt": "生成一个抖音直播的截图 ，一个美女在直播，美女手里拿着牌子，上面写着：谢谢行者大哥的大火箭！",
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
    "prompt": "手机竖屏界面，短视频直播平台风格，一位年轻亚洲女主播在家中直播带货，主播穿着贴身瑜伽裤与简约上衣，身材曲线自然，正在侧身展示裤子的线条与弹性，动作自然不夸张；",
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
    "prompt": "生成一个抖音直播的截图里面是一个穿着中国传统服饰的美女在直播卖货",
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
    "prompt": "为Z世代设计的可爱Y2K风格的平价化妆品广告图像。使用鲜艳的配色，包括荧光色。纵横比为3:4。",
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
    "prompt": "生成四张虚构的日式广告图片，涵盖不同类型并排排列。采用专业设计师创作的潮流设计。宽高比为1:1",
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
    "prompt": "“一张采用分层蒙太奇构图的电影海报。背景为日落时分的海滨小镇，平静的海面倒映着耀眼的日光眩光，薄雾笼罩的天空中有远处飞鸟，沿海公路旁立着电线杆剪影。左侧中景处，一位身着深灰色外套、留着深色卷发的中年男子站在混凝土海堤边，神情忧郁地低头凝视，被傍晚的阳光逆光勾勒轮廓。右侧前景主体为一张大幅特写年轻女子侧脸肖像，她望向右侧，身穿带白色条纹的深色水手校服，湿润的黑发贴在脸颊，柔和漫射光线下，一滴泪珠从她脸颊滑落。画面下方中央前景处，一只柴犬抬头朝右侧望去，红棕色毛发被温暖的轮廓光点亮。画面最底端为一条横向电影胶片，内含五幅独立矩形场景缩略图：女孩与柴犬在海滩、女孩骑车望向海面、女孩与男子坐在室内桌前、男子与女孩在海滩面对面站立、女孩拥抱柴犬的特写。画面叠加指定文字：左上角为深青绿色大号衬线字体标题《风间静语》，下方副标题为「—— 致那日的你 ——」；标题下方为小号深色衬线正文：“逝去之物，不复归来。然而，只要心灵稍稍相连，我们便能再度直面明日。” 画面右侧中部为深色衬线字体文字：“曾有一段时光，是你教会我如何生活。我永不会忘。” 左下角为大号白色文字：“10 月 31 日 周五 影院上映”。右下角为小号白色无衬线字体演职人员表：“主演：福波真子 / 桐嶋秀作 原作与剧本：柴野麻吕 导演：今仓七海 主题曲：SyVa《看得见海的地方》（Dogstar★唱片） 制作：《夕凪之尾》影视伙伴 制作公司：DABUSHIBANU-NU 发行：GOODSHIBALERS ©2026《夕凪之尾》影视伙伴”。\n分段提示词：\n图层索引：0\n片段：“背景为日落时分的海滨小镇，平静海面倒映耀眼日光眩光，薄雾天空中有远处飞鸟，沿海公路旁有电线杆剪影。”\n图层索引：1\n片段：“左侧中景处，身着深灰色外套、留深色卷发的中年男子站在混凝土海堤边，神情忧郁低头，被傍晚阳光逆光照射。”\n图层索引：2\n片段：“右侧前景主体为大幅特写年轻女子侧脸肖像，她望向右侧，身穿带白条纹的深色水手校服，湿润黑发贴脸，柔和漫射光下一滴泪珠滑落脸颊。”\n图层索引：3\n片段：“画面下方中央前景处，一只柴犬抬头望向右侧，红棕色毛发被温暖轮廓光点亮。”\n图层索引：4\n片段：“画面最底端为横向电影胶片，内含五幅独立矩形场景缩略图：女孩与柴犬在海滩、女孩骑车望向水面、女孩与男子坐在室内桌前、男子与女孩在海滩面对面、女孩拥抱柴犬特写。”\n图层索引：[5,6,7,8]\n片段：“画面叠加指定文字：左上角为深青绿色大号衬线字体《风间静语》，下方副标题「—— 致那日的你 ——」；其下小号深色衬线正文：“逝去之物，不复归来。然而，只要心灵稍稍相连，我们便能再度直面明日。” 右侧中部深色衬线文字：“曾有一段时光，是你教会我如何生活。我永不会忘。” 左下角大号白色文字：“10 月 31 日 周五 影院上映”。右下角小号白色无衬线字体演职信息：“主演：福波真子 / 桐嶋秀作 原作与剧本：柴野麻吕 导演：今仓七海 主题曲：SyVa《看得见海的地方》（Dogstar★唱片） 制作：《夕凪之尾》影视伙伴 制作公司：DABUSHIBANU-NU 发行：GOODSHIBALERS ©2026《夕凪之尾》影视伙伴”。\n负面提示词：\n“平光照明，无质感表面，对称构图，底部留白空荡，文字缺失，翻译文字，改写文字，3D 渲染，卡通风格，高对比生硬阴影，干涩头发，明亮欢快表情”",
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
    "prompt": "以涂鸦速写风表现【一个厉害的AI builder】，整体呈现快速勾勒、自由变形、即兴手绘与草稿式的视觉效果。线条随手、夸张、可粗细不一，略显凌乱但具有节奏和表现力，强调概括、夸张、趣味和随性，而不是严谨写实或精细刻画。  颜色采用粗糙、干刷感明显的块面表现，可保留不均匀的涂抹痕迹、刷痕、飞白与覆盖感，色彩根据【主题/主体】自动适配，但整体保持涂鸦式、速写式、概括式的表达。不要透明水彩晕染效果，不要细腻水彩过渡，不要纸纹理，不要柔和雾化，不要梦幻质感。  背景以留白为主，保持简洁、轻松、未完成感和设计感，可加入少量辅助性符号、箭头、记号、圈画、重复线、随手写的文字或其他涂鸦元素，以增强速写本或随笔式视觉语言，但不可过于拥挤，不可破坏主体和留白气质。  画面内容不需要预先写清楚，由【一个厉害的AI builder】自动推演并生成最适合的主体形象、动作、相关元素、符号或简化场景，整体保持统一的涂鸦速写风和夸张概括的表现方式，避免复杂写实背景和过度铺陈。 画面中需自然加入专属签名\"BlanPlan\"，作为画面的一部分，位置低调但清晰，可放在左下角、右下角或标题附近，风格需与整体版式统一，像作品署名或设计落款；签名字体精致、克制、高级，不可过大，不可破坏主体构图，不可显得突兀或廉价。",
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
    "prompt": "以珠江新城现代都市景观为灵感的剪纸艺术，通过精巧的镂空手法在一整幅纸上，立体刻画广州塔、东西双塔等地标建筑与繁华城景。\n所有建筑与元素均以流畅的线条与结构相连，无孤立部分，构成一幅完整的都市画卷。\n画面采用金属箔或光泽纸材质，表面带有细腻的明暗光泽，在光照下呈现柔和的高光与阴影，仿佛被城市灯光轻轻照亮。\n背景以虚化的珠江新城天际线为衬，点缀隐约可见的花城广场与树木轮廓，整体透出现代浪漫的氛围。\n作品中巧妙融入轻盈的蒲公英绒毛或星光般的动态光点，象征梦想与活力在这座新城中飘散飞扬。整体呈现8K超高清视觉，细节丰富，真实而富有艺术感染力。",
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
    "prompt": "创建一个宝玉（查阅 https://x.com/dotey 这个推主的主页及部分推文）穿越到明朝，登基之后依据其业务/个性，绘制的其新的X帖子页面。",
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
    "prompt": "手写食谱 → 专业食谱页面 上传一份凌乱的手写家庭食谱；模型会搜索准确的现代计量/营养信息，然后生成一份精致的杂志风格双页跨页，包含分步平铺图、完美的食材标签和卡路里分解。\n\n[INSERT_RECIPE_LINK]",
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
    "prompt": "以涂鸦速写风表现【主题/主体】，整体呈现快速勾勒、自由变形、即兴手绘与草稿式的视觉效果。线条随手、夸张、可粗细不一，略显凌乱但具有节奏和表现力，强调概括、夸张、趣味和随性，而不是严谨写实或精细刻画。\n\n颜色采用粗糙、干刷感明显的块面表现，可保留不均匀的涂抹痕迹、刷痕、飞白与覆盖感，色彩根据【主题/主体】自动适配，但整体保持涂鸦式、速写式、概括式的表达。不要透明水彩晕染效果，不要细腻水彩过渡，不要纸纹理，不要柔和雾化，不要梦幻质感。\n\n背景以留白为主，保持简洁、轻松、未完成感和设计感，可加入少量辅助性符号、箭头、记号、圈画、重复线、随手写的文字或其他涂鸦元素，以增强速写本或随笔式视觉语言，但不可过于拥挤，不可破坏主体和留白气质。\n\n画面内容不需要预先写清楚，由【主题/主体】自动推演并生成最适合的主体形象、动作、相关元素、符号或简化场景，整体保持统一的涂鸦速写风和夸张概括的表现方式，避免复杂写实背景和过度铺陈。\n画面中需自然加入专属签名“voxcat”，作为画面的一部分，位置低调但清晰，可放在左下角、右下角或标题附近，风格需与整体版式统一，像作品署名或设计落款；签名字体精致、克制、高级，不可过大，不可破坏主体构图，不可显得突兀或廉价。",
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
    "prompt": "一个九宫格图片，展现九位当代知名设计师设计的同一组物体：机械键盘，包括设计师头像，设计师对于设计的中文文字解读和作品呈现。排版统一规则",
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
    "prompt": "极简主义，新中式风格立体图形设计，图像下端有楷体中国文字：“东方美学”，“2026/04/18”，署名 “CHINA”，和“\n@LIYUE\n\"；\n平整纯白色的亚光质感厚艺术纸上绘充满东方诗意氛围的山水创意画，不规则的撕纸效果；\n中国的神兽：穷奇，身形图案完整，美轮美奂，，线条柔美灵动,眼睛炯炯有神，威严的神态，优雅的姿势，奢华装饰艺术，中国传统纹饰；\n荧光蓝色线条，0.5mm极细金色金属质感勾边，泼白墨大笔触，色彩渲染，红底，蓝色的浪漫诗意视觉；\n冷暖光交织的梦幻唯美场景，强烈的光影对比氛围，花轻舞的时光叙事，东风禅意，画面有大面积留白，框架构图，底部留白，细节清晰。",
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
    "prompt": "9:16 的图片比例，生成一张抖音直播的截图，里面是 xxx 在直播，xxx 手里拿着牌子，牌子里写着 xxxx。",
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
    "prompt": "创建一个 [SNACK] 的品牌技术信息图，结合产品的真实照片或照片级真实渲染，并将技术注释覆盖层直接置于其上。在纯白摄影棚背景上使用带有策略性 [BRAND COLOR] 点缀的黑色墨水风格线条画（建筑草图外观），包括：\n• 关键组件标签\n• 显示结构、分层或内部设计的内部截面图\n• 测量数据、尺寸和规格\n• 带有成分和数量的材料标注\n• 指示主要功能和结构完整性的箭头\n• 显示关键机械或设计元素的简单示意图或剖面图\n• 可持续性标注\n标题位置：位于手绘技术注释框内，带有强调色边框，粗体字显示产品名称，置于上角。\n风格与布局规则：\n• 真实产品保持清晰可见\n• 注释具有素描感、技术感和建筑感\n• 强调色用于高光（占线条工作的 20-30%），黑色用于主要技术线条（70-80%）\n• 构图整洁，负空间平衡\n• 具有教育意义、食品工程氛围和高端品牌感\n• 在角落包含微妙的品牌标志\n视觉风格：极简技术插画美学，黑色线条在真实图像上带有点缀，精确但略带手绘感。\n调色板：白色背景，黑色注释线/文本，[BRAND COLOR] 仅用于点缀和关键标注。\n输出：1080×1080，超清晰，社交媒体动态优化，无水印。",
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
    "prompt": "{\n  \"prompt\": \"一个充满活力的高端广告构图中的三个超动态苏打水罐 —— 一罐热带冲刺苏打水伴随着戏剧性的水和热带水果飞溅而爆炸，鲜艳的橙色和粉色背景光；一罐柠檬冰爽苏打水在发光的绿色动态光背景下被冷水泼溅；两罐都覆盖着逼真的冷凝水和运动模糊的水滴，充满果味和清爽的能量。深橙色、粉色和霓虹绿灯光在大胆的演播室布置中融合。由使用佳能 50mm 镜头的专业摄影师拍摄，超写实纹理，清晰的细节，超高分辨率，明亮的商业海报美学，丰富的色彩鲜艳度，电影级飞溅效果 --ar 3:4\"\n}",
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
    "prompt": "{\n  \"style\": \"超写实奢华化妆品产品摄影\",\n  \"composition\": {\n    \"color_scheme\": \"戏剧性的单色蓝紫色\",\n    \"resolution\": \"8K超高分辨率\",\n    \"depth\": \"电影级景深\",\n    \"aesthetic\": \"高端香氛护肤品广告风格\"\n  },\n  \"product\": {\n    \"type\": \"软管包装\",\n    \"finish\": \"缎面质感\",\n    \"color\": \"长春花蓝\",\n    \"label\": \"NUBELLA\",\n    \"typography\": \"优雅的银色字体\",\n    \"cap\": \"反光金属铬盖\",\n    \"position\": \"垂直居中\"\n  },\n  \"surroundings\": {\n    \"smoke\": {\n      \"type\": \"墨水般的旋涡云雾\",\n      \"colors\": [\n        \"薰衣草色\",\n        \"靛蓝色\",\n        \"冰蓝色\"\n      ],\n      \"texture\": \"柔软、翻腾\",\n      \"interaction\": \"环绕在产品周围\"\n    },\n    \"flowers\": {\n      \"primary\": [\n        {\n          \"color\": \"紫色\",\n          \"details\": \"错综复杂的花瓣细节\",\n          \"center\": \"鲜艳的黄色\"\n        },\n        {\n          \"color\": \"紫丁香色\",\n          \"details\": \"错综复杂的花瓣细节\",\n          \"center\": \"鲜艳的黄色\"\n        }\n      ],\n      \"secondary\": {\n        \"type\": \"细小的紫罗兰色花朵\",\n        \"purpose\": \"增加立体感\"\n      }\n    }\n  },\n  \"lighting\": {\n    \"direction\": \"来自左上方的柔和定向照明\",\n    \"effects\": [\n      \"突显软管的光滑曲度\",\n      \"为金属盖增添微妙的光泽\",\n      \"在烟雾中营造深度\"\n    ]\n  },\n  \"background\": {\n    \"blend\": \"无缝的冷色调蓝色和紫色调\",\n    \"enhancement\": \"空灵的花香美学\"\n  },\n  \"details\": \"花瓣和蒸汽的超精细纹理\"\n}",
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
    "prompt": "{\n  \"prompt\": \"一位年轻男子的超写实电影级双重曝光侧脸肖像，表情专注强烈，皮肤纹理细节丰富，眼神锐利。他的面部与从剪影中浮现的未来主义城市天际线无缝融合，摩天大楼和城市建筑构成了他的颈部和下颌线。深蓝色和鲜艳红色的强烈对比，象征着冲突与力量。抽象的数字划痕、碎裂的玻璃纹理和漏光效果覆盖在面部，营造出戏剧性的效果。干净的白色背景，超精细的灯光，专业电影海报风格，高对比度，清晰聚焦，8K分辨率，逼真的发丝，社论海报构图，现代平面设计美学，戏剧性的氛围，超高清，照片级真实。\",\n  \"negative_prompt\": \"模糊，低分辨率，扭曲的面部，多余的肢体，过饱和的颜色，嘈杂的背景，平淡的灯光，卡通化，低细节\",\n  \"resolution\": \"8K\",\n  \"style\": \"电影感，双重曝光，照片级真实感，社论海报\",\n  \"background\": \"干净的白色\",\n  \"lighting\": \"高对比度，戏剧性的蓝红分割布光\"\n}",
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
    "prompt": "超写实电影级奇幻场景，设定在郁郁葱葱的史前丛林山谷中。一只巨大的棘龙站在浅河边，它那长而类似鳄鱼的巨颚张得很大。一位年轻女子平静地坐在恐龙张开的嘴里，完美居中，双腿微微向前悬挂。她有一头深色直发，表情镇定无畏，皮肤纹理逼真。她身穿合身的黑色长袖短款上衣，蓝色牛仔短裤和黑色及膝战术靴。衣服和腿上可见微小的血迹和轻微划痕，增加了戏剧性的紧张感但并不血腥。她怀里温柔地抱着一只小恐龙幼崽，充满保护欲地抱着它。\n\n在他们身后，一道高耸而充满戏剧性的瀑布顺着覆盖着茂密绿色植被和薄雾的陡峭丛林悬崖倾泻而下。场景中栖息着多只恐龙：几只迅猛龙在河岸边潜行，小型食草动物在背景中奔跑，飞翔的翼龙在头顶盘旋。环境丰富，有长满苔藓的岩石、流动的河水、热带植物和柔和的大气雾。\n\n灯光具有电影感和自然感，漫射的日光照亮场景，阴影细节丰富，焦点清晰地聚在女子和棘龙身上，背景元素采用浅景深。恐龙鳞片、牙齿、水珠、树叶和织物上的超写实纹理。史诗奇幻写实主义，戏剧性构图，垂直构图，超精细，照片级真实感，4K，电影级调色，无文字，无水印。",
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
    "prompt": "{\n  \"prompt\": \"超写实，一位留着深色短卷发、修剪整齐的胡须和黑色方形眼镜的年轻男子的鲜艳逼真渲染，身穿深色纹理高领毛衣和牛仔裤。他奔跑到一半被捕捉下来，姿态充满动感，向前突破，充满戏剧性地从一个破碎的漫画分镜框中显现——一条腿和一只手臂冲入现实世界，而身体的其余部分仍留在漫画框内。他的表情充满活力和喜悦，拥有锐利的面部细节，自然的皮肤纹理，以及具有高对比度和深度的戏剧性电影灯光。\\n\\n背景：一个非常详细的黑白漫画布局，充满了幽默、夸张的且与他直接互动的反应场景。周围的漫画人物表现出震惊和喜剧的表情，配有粗体的对话气泡和速度线。漫画分镜采用经典的高对比度水墨风格绘制，线条清晰，网点阴影。撕裂的纸张边缘和碎片增强了他冲破漫画世界的幻觉。全彩色的写实人物与单色的漫画环境形成强烈对比，创造出写实与漫画艺术之间的动态混合体。超精细，8k分辨率，清晰聚焦，戏剧性的阴影，电影级景深。\"\n}",
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
    "prompt": "照片级真实感的大胆美妆宣传活动，使用上传的模特作为精确的身份参考。不做面部改变，不做平滑处理。\n场景：深红色饱和的摄影棚环境，具有高对比度的地板图案或光滑表面。\n产品：产品被握持或放置在极其靠近镜头的位置，由于透视关系显得巨大。\n模特姿势：俏皮或自信的微笑，手臂完全伸向相机，手指因广角镜头而略微变形。透过太阳镜的强烈眼神交流或自然凝视。\n相机：超广角 20–28mm 美学，动态前景夸张，浅至中等景深。\n灯光：强有力的商业照明，具有清晰的高光和反射，锐利的包装边缘，充满活力的调色。超精细的皮肤纹理和织物真实感。",
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
    "prompt": "超写实高端时尚商业广告大片，使用上传的模特照片作为严格的身份参考。保留精确的面部特征、比例和自然皮肤纹理——无修图，无变形。场景：珊瑚色单色工作室盒，配有光泽反光棋盘格或极简抛光地板。拥有柔和光线渐变的干净几何墙壁。产品：产品放置在前景中心超大位置，因广角透视而占据画面主导地位。包装超清晰，文字完全可读，具有逼真的反射和材质纹理。较小的产品单元可对称放置在背景中。模特姿势：站在产品后方，微蹲或前倾，一只手伸向镜头以创造深度感。强烈自信的表情，时尚态度。相机：低角度 24-35mm 镜头感，戏剧性透视畸变，对产品和模特都进行深焦处理。灯光：明亮的商业影棚灯光，柔和阴影，包装上有光泽高光，高端广告成片质感。4K–8K 写实主义，无水印，无嵌入式文本。纵横比 9:13",
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
    "prompt": "一个充满趣味的高级时装T台场景，主角是一位自信的女性，正走在奢华时装秀的T台上，身穿一件完全由鸟类制成的非凡高级定制礼服。数百只优雅、色彩鲜艳的鸟类构成了飘逸的雕塑感礼服形状，像活着的羽毛一样层叠，翅膀微微张开，营造出布料和运动的错觉。一些鸟儿在她周围轻轻升入空中，捕捉于飞行瞬间，增添了神奇、超现实的运动感。鸟儿们展现出丰富多样的色彩——彩虹般的蓝色、光芒四射的红色、金黄色和柔和的白色——拥有错综复杂的羽毛细节和自然纹理。她在迈步间摆出姿势，带着快乐、自信的表情，富有表现力的眼睛，以及精致的T台妆容。戏剧性的舞台灯光配以发光的高光，黑暗模糊的观众背景，电影级的景深，奇幻现实主义，超精细纹理，高对比度，清晰聚焦，奇思妙想的奢华时装秀，超现实主义高级定制，4K分辨率，专业调色。",
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
    "prompt": "一幅戏剧性的电影海报风格肖像，描绘了两位史诗奇幻战士在冰冻风暴中背靠背站立。左侧是一位身经百战的男性战士，留着湿漉漉的深色卷发，低头以此表达坚定的决心，紧握着一把插在冰里的中世纪长剑。霜雪附着在他毛皮镶边的斗篷和肩膀上。右侧是一位强有力的女性战士侧影，苍白的皮肤在炽热的橙色光芒下闪耀，她的身体部分被火焰吞没，与冰冷的蓝色氛围形成对比。雪花粒子在空中盘旋，在象征性的冲突中融合了火与冰。超精细的面部细节，情感强度，体积雾，电影级布光，冷蓝色调混合温暖的火焰高光，浅景深，史诗奇幻电影海报，超写实，8K分辨率，戏剧性构图，清晰聚焦，高对比度，逼真纹理。",
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
    "prompt": "专业照片，一位男士，30岁的俄罗斯模特（参考图像），正对着镜头，向相机倾斜，从下往上拍摄，使用广角镜头。男士倾斜着身体，近距离将一瓶饮料展示给镜头，一只手拿着瓶子，紧贴在镜头前。瓶子的标签和方向保持笔直，以便标签清晰可读。他穿着白色运动鞋，一只脚在镜头前方。男士站在街道上，湿漉漉的沥青和飞溅的水花从下方拍出。鲜艳的色彩，电影级灯光，光线从后方打在模特的脸上。--v7 --ar 3:4 --style raw",
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
    "prompt": "创作一张超写实、电影感的社交帖子版式图，让界面化作一个可触摸的实体三维物件，像高端商业产品摄影那样拍摄，成品需与真实影棚照片难以区分。外框：真实界面呈现为一张纯白实体三维卡片，表面为光滑哑光塑料并带细微纹理，边缘可见轻微厚度与真实倒角，完美的圆角，柔和的影棚反射与真实的边缘高光。顶栏：左侧圆形头像，用户名文字为默认粗体界面字体，浅蓝色关注按钮比例正确，右上角三点菜单图标，间距、字体与图标尺寸精确匹配真实应用。画面比例 1:1，居中、均衡、高级构图。主体：一位写实的健美女性从外框中半探身进入真实三维空间，坐姿与参考图完全一致——双腿弯曲侧向一边，一侧膝盖略微抬高靠近胸口，双臂轻轻环抱抬起的膝盖，双手放松、手指自然搭放，上身微微后倚在外框边缘；神情平静、若有所思、自信从容，目光望向侧上方而不与镜头交流；身体比例自然，姿态放松，具编辑级写实感，不夸张身形、不做作摆姿。服装：柔和象牙米白色修身短袖上衣，中性色调与背景形成柔和对比，布料自然拉伸；深蓝色运动裤长及膝盖，剪裁贴身，膝弯处有细微褶皱，缝线干净、面料透气；干净的白色运动鞋带轻微磨损感，鞋底纹理与缝线正确；高级运动服质感，真实商业造型，不变形、不做奇幻服饰。背景：昏暗的室内健身房或影棚环境，冷蓝与低饱和紫色的电影感布光，背景带柔雾，隐约可见体积光束，浅景深，背景柔和虚化，主体与外框保持锐利且占主导。光照与写实：影棚级电影布光，柔和主光自然照亮主体，柔和轮廓光勾勒身体与外框边缘，真实肤质可见毛孔与自然高光，主体触碰外框处有准确的接触阴影，物理正确的光线衰减与反射。底栏互动区：点赞、评论、分享、收藏图标准确，可见点赞数文字，标题以人名开头，文案大意为自由并非在舒适中寻得，而是在自律与信念相遇的静默时刻里建立，话题标签部分可见、自然裁切。整体：超高分辨率、广告级写实，干净现代的编辑感美学，三维物件与真实摄影超写实融合，无多余元素、无文字错误、无变形，看起来像真实产品拍摄而非人工图像。",
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
    "prompt": "一位时尚年轻女子坐在老式复古巴士的前缘，身穿红色长风衣、羊毛无檐小便帽、圆形蓝色反光太阳镜、叠层项链和粗犷的棕色皮靴。她有着波浪状金发，带着自信而梦幻的表情，仰望天空。巴士漆面剥落，呈青绿色与铁锈红色调。明亮清澈的蓝天，城市背景建筑极少，柔和日光，电影级色彩分级，浅景深，高端时尚旅行氛围，编辑摄影，超写实，4K分辨率，锐利对焦，自然肌肤质感，戏剧性构图，电影静帧美学。",
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
    "prompt": "一个风格化的3D卡通肖像，一位年轻男子，拥有短棕发和富有表现力的绿色眼睛，温暖地微笑。他穿着黑色西装外套内搭白色T恤，现代休闲时尚。类似皮克斯/迪士尼风格角色设计，皮肤光滑，柔和光照，略微夸张的面部特征。高细节、精美的3D渲染，友好且平易近人的表情。渐变背景为柔和的蓝绿色和粉色，工作室灯光，浅景深，高分辨率。",
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
    "prompt": "{\n  \"master_prompt_type\": \"超精细8K AI图像生成\",\n  \"global_settings\": {\n    \"resolution\": \"8K UHD\",\n    \"aspect_ratio\": \"2:3 竖版\",\n    \"render_quality\": \"极致锐度、超微细节、电影级光效\",\n    \"style\": \"超现实商业产品摄影\",\n    \"color_profile\": \"温暖金调搭配柔和琥珀高光\",\n    \"environment\": {\n      \"location\": \"古老中东市场走廊\",\n      \"architecture\": {\n        \"walls\": \"岁月痕迹的粗糙石墙与可见纹理\",\n        \"arches\": \"背景巨型石拱\",\n        \"floor\": \"暖棕色石材地面\"\n      },\n      \"background_elements\": [\n        \"装满香料的木架\",\n        \"袋装与碗装干货\",\n        \"悬挂草药束\",\n        \"散发暖黄光的传统金属灯笼\"\n      ],\n      \"lighting\": {\n        \"primary\": \"柔和金色环境光\",\n        \"secondary\": \"两侧暖灯笼辉光\",\n        \"atmosphere\": \"薄雾增强光线漫射\"\n      }\n    },\n    \"main_subject\": {\n      \"type\": \"香水瓶\",\n      \"position\": \"中心前景\",\n      \"placement\": \"置于华丽木桌之上\",\n      \"material\": {\n        \"bottle\": \"透明清玻璃\",\n        \"cap\": \"黄金金属矩形瓶盖\",\n        \"liquid\": \"淡金香水液体\"\n      },\n      \"design\": {\n        \"shape\": \"圆角矩形瓶身\",\n        \"finish\": \"高光反射表面\",\n        \"label\": \"无可见标签\"\n      },\n      \"table\": {\n        \"material\": \"深色雕花木材\",\n        \"shape\": \"方形台面\",\n        \"details\": [\n          \"繁复花卉与几何雕刻\",\n          \"金色镶嵌装饰\",\n          \"抛光表面映光\"\n        ]\n      },\n      \"floating_elements\": {\n        \"composition_style\": \"竖向成分堆叠\",\n        \"motion\": \"成分悬浮并伴随旋转金光\",\n        \"effects\": [\n          \"发光粒子\",\n          \"闪耀尘埃\",\n          \"柔光尾迹连接元素\"\n        ],\n        \"elements_order_top_to_bottom\": [\n          {\n            \"ingredient\": \"琥珀树脂\",\n            \"appearance\": \"半透明金棕树脂块\",\n            \"glow\": \"温暖内发光\"\n          },\n          {\n            \"ingredient\": \"大马士革玫瑰\",\n            \"appearance\": \"盛放粉色玫瑰\",\n            \"details\": [\n              \"柔软层叠花瓣\",\n              \"自然绿叶\",\n              \"轻飘附近花瓣\"\n            ]\n          },\n          {\n            \"ingredient\": \"白麝香\",\n            \"appearance\": \"光滑白水晶状石块\",\n            \"additional\": \"石下细白粉末\"\n          },\n          {\n            \"ingredient\": \"陈年沉香\",\n            \"appearance\": \"深棕木片\",\n            \"texture\": \"粗糙纤维木纹\",\n            \"effect\": \"缕缕白烟上升\"\n          }\n        ]\n      },\n      \"text_elements\": {\n        \"title\": {\n          \"text\": \"精致叙利亚香水\",\n          \"font_style\": \"优雅衬线体\",\n          \"color\": \"金色\",\n          \"position\": \"顶部中央\"\n        },\n        \"subtitle\": {\n          \"text\": \"奢华叙利亚香水\",\n          \"font_style\": \"较小衬线体\",\n          \"color\": \"金色\",\n          \"position\": \"主标题下方\"\n        },\n        \"ingredient_labels\": [\n          {\n            \"title\": \"纯琥珀\",\n            \"description\": \"来自自然深处的珍贵树脂\"\n          },\n          {\n            \"title\": \"大马士革玫瑰\",\n            \"description\": \"美丽与叙利亚传承的象征\"\n          },\n          {\n            \"title\": \"白麝香\",\n            \"description\": \"干净、粉感、永恒优雅的香氛\"\n          },\n          {\n            \"title\": \"陈年沉香\",\n            \"description\": \"深邃温暖、浓郁烟熏木香\"\n          }\n        ],\n        \"typography_details\": {\n          \"connector_lines\": \"细弯金线连接文字与成分\",\n          \"icons\": \"线末端小圆点标记\"\n        },\n        \"opacity\": \"轻微半透明\"\n      }\n    },\n    \"overall_mood\": {\n      \"tone\": \"奢华、温暖、优雅\",\n      \"theme\": \"传承香水工艺\",\n      \"visual_feel\": \"浓郁、高端、电影级广告\"\n    }\n  }\n}",
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
    "prompt": "{\n  \"type\": \"图像生成提示词\",\n  \"language\": \"zh\",\n  \"style\": \"超现实电影感自拍摄影\",\n  \"aspect_ratio\": \"9:16\",\n  \"identity_preservation\": {\n    \"use_reference_image\": true,\n    \"strict_identity_lock\": true,\n    \"alter_face\": false,\n    \"alter_skin\": false,\n    \"alter_hair\": false,\n    \"alter_gender\": false,\n    \"notes\": \"保留上传参考图像中完全一致的脸部特征、皮肤纹理、头发、眼镜、年龄和性别。禁止合成皮肤或雕塑感。\"\n  },\n  \"subject\": {\n    \"gender\": \"女性\",\n    \"capture_method\": \"由主体本人拍摄的自拍\",\n    \"pose\": {\n      \"selfie_arm\": {\n        \"description\": \"一只手臂完全伸直并完全向上伸展，手持拍摄自拍的相机\",\n        \"visibility\": \"手臂在画面中清晰可见、笔直且占主导地位\",\n        \"camera_visibility\": \"自拍相机设备本身不得在画面中出现\"\n      },\n      \"product_arm\": {\n        \"description\": \"另一只手臂完全伸向相机，手持附带的佳能相机\",\n        \"importance\": \"产品最靠近相机并在视觉上占主导地位\"\n      },\n      \"head\": {\n        \"tilt\": \"头部向自拍相机微微倾斜\"\n      },\n      \"expression\": \"自然放松的面部表情\"\n    },\n    \"body_visibility\": \"从头到脚全身可见\",\n    \"feet\": \"双脚清晰接触路面\"\n  },\n  \"composition\": {\n    \"perspective\": \"胸部高度的自然自拍视角\",\n    \"camera_angle\": \"极端俯拍角度，相机位于主体正上方并直视下方\",\n    \"layer_depth\": [\n      \"产品（最靠近相机）\",\n      \"脸部\",\n      \"全身\",\n      \"城市环境（背景）\"\n    ]\n  },\n  \"scale_and_perspective\": {\n    \"effect\": \"强制透视\",\n    \"subject_scale\": \"女性呈现极度巨大\",\n    \"buildings_scale\": \"建筑物显得小得多，最高不超过她的膝盖\",\n    \"dominance\": \"主体在视觉上完全主导整个场景\",\n    \"realism\": \"激发规模感同时保持物理可信\"\n  },\n  \"environment\": {\n    \"location\": \"真实城市十字路口\",\n    \"elements\": [\n      \"人行横道\",\n      \"道路标线\",\n      \"交通标志\",\n      \"汽车\",\n      \"自行车\",\n      \"真实人类尺度的行人\"\n    ],\n    \"setting\": \"地面层城市环境\"\n  },\n  \"lighting\": {\n    \"type\": \"自然日光\",\n    \"conditions\": \"晴朗或轻度多云天空\",\n    \"shadows\": \"柔和且真实\",\n    \"restrictions\": \"禁止奇幻或戏剧性照明\"\n  },\n  \"product_rules\": {\n    \"usage\": \"完全按提供的上传佳能产品使用\",\n    \"distortion\": \"无\",\n    \"logo\": \"保持不变\",\n    \"appearance\": \"仅有自然反射和真实高光\"\n  },\n  \"camera_quality\": {\n    \"realism\": \"最大照片真实感\",\n    \"depth\": \"前景、主体与背景清晰分离\",\n    \"artifacts\": \"无\"\n  },\n  \"constraints\": [\n    \"禁止AI艺术感\",\n    \"禁止塑料或雕塑皮肤\",\n    \"禁止扭曲脸部或身体\",\n    \"禁止多余肢体或错误解剖\",\n    \"禁止文字或水印\",\n    \"禁止可见自拍相机设备\"\n  ],\n  \"output_goal\": \"创作一张超现实电影感自拍图像：女性使用其确切参考身份，从极端俯拍视角在真实城市人行横道拍摄，具备强制透视比例、自然日光，并将佳能相机产品明显持向镜头。\"\n}",
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
    "prompt": "一幅充满奇幻色彩的电影场景：一位英姿飒爽的女战士兼猎鹰师，身着饱经战火洗礼、饰以闪耀余烬纹理的皮甲，漫步于幽暗迷雾笼罩的森林之中。她高举手臂，指挥着一头巨大的凤凰与雄鹰的混合体，这头猛禽双翼燃烧，羽毛燃焰，尖端喷吐着火焰。它周身散发着橙红色的熔岩光芒，火星和余烬飞溅。女战士梳着辫子，皮肤上沾满灰烬，神情坚定，手中拿着绳索和工具袋（面部可参考给定图片）。画面细节丰富，羽毛纹理逼真，火焰物理效果自然，光照极具戏剧性，运用体积雾、浅景深等技术，营造出史诗般的奇幻氛围；色彩调校极具电影质感，背景阴郁深沉，分辨率高达 8K，呈现概念艺术的精髓，并采用虚幻引擎级别的渲染效果。",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case17.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case334.png",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case341.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case345.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case350.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case355.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case359.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case339.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case373.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case353.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case354.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case362.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case331.png",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case377.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case376.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case346.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case330.png",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case375.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case360.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case370.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/category-covers/ui.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/category-covers/infographic.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/category-covers/poster.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/category-covers/product.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/category-covers/brand.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/category-covers/architecture.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/category-covers/photo.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/category-covers/illustration.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/category-covers/scene.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/category-covers/history.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/category-covers/document.jpg",
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
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/category-covers/other.jpg",
    "imageAlt": "其他应用场景分类示例图",
    "prompt": "围绕「[主题]」生成一张其他应用场景方向的高质量图片。\n\n使用场景：创意实验、特殊任务、混合玩法和实用场景。\n\n请补充这些变量：\n- 主题或项目：[主题]\n- 目标用途：[投放/汇报/社媒/课程/商品页/品牌提案]\n- 必须出现的文字：[标题、栏目名、短标签]\n- 视觉风格：[材质、光线、色彩、参考行业]\n- 输出比例：[比例]\n\n画面要求：主体明确、信息层级清楚、边距和留白稳定，关键文字可读，风格统一且可复用。根据用途自动补齐标题、副标题、图例、标注、产品或场景细节。不要使用乱码、水印、重复元素或与主题无关的装饰。",
    "tips": [
      "适合不知道从哪个具体案例开始时作为基础模板。",
      "先确定用途和必须出现的文字，再补充行业、品牌和画面比例。"
    ]
  },
  {
    "id": "gallery-evo-poster_case341",
    "title": "涂鸦涂乱真人照片肖像",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Shorelyn_/status/2063235707632533954",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case341/output.jpg",
    "imageAlt": "涂鸦涂乱真人照片肖像示例图",
    "prompt": "把这张照片变成一幅混乱搞笑的涂鸦插画，刻意画得潦草、稚拙，仿佛用廉价马克笔、蜡笔或用旧的毡头笔在纸上飞快涂画而成。夸张地处理五官、比例别扭：眼睛歪斜大小不一、脑袋过大、身体缩小、嘴角歪扭、解剖笨拙，但仍能认出是本人。使用粗糙稚气的速写线条、抖动的手绘笔触、明显的乱涂、重叠的轮廓、无意的杂痕与四处随手的涂鸦。背景是简单的卡通场景，画着拙劣的建筑、树木、云朵、街道元素，透视歪歪扭扭。上色刻意显得随意不均，带可见的笔触纹理、填色不匀、蜡笔质感、马克笔渗色与不规则明暗。加入俏皮的瑕疵：划掉的线条、未完成的细节、随手的箭头、小字批注、星星、漩涡与抽象乱涂。整体气质幽默、即兴、手作、活力、憨傻而刻意不精致，像儿童速写本混合荒诞网络迷因艺术。高纹理细节，可见纸张颗粒，构图不对称，取景笨拙，充满表现力的涂鸦混沌与生猛的速写能量。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case342",
    "title": "半3D时尚大片头像",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/AIwithSynthia/status/2063299903582003607",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case342/output.jpg",
    "imageAlt": "半3D时尚大片头像示例图",
    "prompt": "为参考图中的人物创作一张高级、高分辨率的矢量卡通与半三维插画。将其重新演绎为时尚现代的时装大片造型，自信地坐在一把线条利落的设计师座椅上。造型：潮流上衣、时髦的半裙或长裤、时尚运动鞋，并以一副抢眼的墨镜作为主角配饰。夸张刻画关键五官，同时保持可辨认的相似度。背景为干净的纯色平涂，单一鲜艳色，线条流畅、细节锐利、柔和的影棚光照，奢华广告美学，居中构图并预留充足留白以放置品牌与标题。超精细、可印刷、广告牌级画质，现代眼镜广告风格。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-comparison_case94",
    "title": "90年代情景喜剧时装角色阵容",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Taaruk_/status/2063300353588879444",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/comparison_case94/output.jpg",
    "imageAlt": "90年代情景喜剧时装角色阵容示例图",
    "prompt": "全身人物阵容图，将同一个人演绎为六种标志性的一九九〇年代时尚风格，并排站立于干净的影棚构图中。每个版本都有一套灵感源自经典九十年代情景喜剧文化的独特穿搭：校队学院风学生、干练的商务休闲职场人、彩色图案毛衣爱好者、街头潮流引领者、戴吊带裤与眼镜的书呆子学霸，以及活力四射的嘻哈时尚偶像。所有版本面部特征保持一致，姿态富有表现力，服装纹理细腻，廓形宽大，复古运动鞋、乐福鞋与各式配饰，叠穿造型，大胆的配色。时装插画风格，人物造型设计表，干净的白色背景，线稿高度精细，现代卡通写实，概念艺术，时尚参考板，全身视角，专业转身展示，超锐利细节，色彩鲜艳，4K，杰作。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case267",
    "title": "黑白身份拼贴网格",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/mehvishs25/status/2063293613514330224",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case267/output.jpg",
    "imageAlt": "黑白身份拼贴网格示例图",
    "prompt": "在保留主体确切面部特征与身份的前提下编辑照片。创作一张高分辨率竖版人像构图（9:16），超精细，全幅锐利对焦，背景不虚化，以高级 8K 编辑级质感呈现。将画面设计为一组精致的黑白时尚人像拼贴，按二乘三网格排列，呈现同一位年轻女性在干净极简的室内影棚中的六个独特画面。整体美学优雅、电影感、亲密而不费力地时髦，灵感源自永恒的黑白时装大片与奢华杂志摄影。头发长及腰际，染成带微妙灰调的冷调灰棕色，梳理成韩式空气感层次剪裁，配柔和的修饰脸型碎发、通透的空气刘海，以及发尾轻微外翻的顺直发丝；质感柔滑、健康、有光泽，并带几缕自然飞发以求真实。妆容精致内敛：水润透亮的肌肤、自然的羽状眉、淡淡的棕色眼线、柔和睫毛、雾面裸色唇与若有若无的腮红，呈现清新的编辑感。服装为修身白色罗纹背心搭配宽松高腰复古水洗牛仔裤，在部分画面中可见；配饰包括哑光黑色美甲、精致的银色圈形耳环、多枚银戒与一只纤细银色腕表，营造当代时装大片氛围。拼贴画面构想：画面一，紧凑的人像特写，指尖轻搭脸颊，直视镜头，自信而温柔；画面二，沙发上随性的坐姿，身体略侧向一边，目光望向镜头之外若有所思；画面三，放松的斜倚姿态，一膝弯曲，舒适地倚靠扶手，形成优雅的编辑级剪影；画面四，双臂抬起置于脑后，姿态开放自信，身体略微后倾透出从容；画面五，情绪化的近景，头部微倾、双眼闭合，强调平静与内省；画面六，正面坐姿，神情从容，发丝间有细微动态，呈现自然抓拍感。环境刻意保持简约：浅色调影棚墙面，部分画面出现中性色沙发，背景应烘托主体而不分散注意力。光照柔和漫射，仿佛专业影棚中的自然窗光，柔和的定向阴影营造纵深与立体感，一抹微弱轮廓光将头发与背景轻轻分离，避免刺眼闪光或强烈对比。以专业无反相机的画质与细节拍摄，结合亲密特写与中景人像，主要采用平视角度、偶尔略微俯拍，强调均衡的杂志式构图与拼贴间自然的视觉流动。最终处理采用丰富的黑白转换，色调过渡平滑，暗部提亮，对比克制，细腻的 35mm 胶片颗粒，柔和的哑光质感，肤质与发丝细节保留出色，呼应经典高级时装大片的质感。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case343",
    "title": "复古汽车旅行海报模板",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2063276384924111329",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case343/output.jpg",
    "imageAlt": "复古汽车旅行海报模板示例图",
    "prompt": "创作一张竖版复古汽车旅行海报，画面中【汽车型号】停驻于或行驶穿越【风景场景】。采用大胆的一九七〇年代丝网印刷风格，严格限定仅用四色调色板。以平涂的丝网印刷式色块、强对比阴影、简化的几何反光、轻微的油墨套印错位、细微的纸张颗粒、做旧的印刷质感与图形化的半调网点明暗来构建画面。避免渐变、写实照片、光泽三维渲染与现代数码修饰。汽车应显得标志而图形化，带有粗壮简化的轮廓造型与温暖怀旧的旅行广告氛围。加入复古广告字体，写着【标题】，并将一枚真实的品牌标志自然融入版面。背景添加风格化的树木、建筑、路牌、地貌造型或地点细节，使场景清晰地服务于旅行海报叙事。整体构图应如一张出色的中世纪旅游海报：均衡、具编辑感、适合成海报、视觉大胆。设计保持干净而有章法，不加邮票式边框。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case344",
    "title": "全家福水彩时装速写",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/AiwithZohaib/status/2063277611409879452",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case344/output.jpg",
    "imageAlt": "全家福水彩时装速写示例图",
    "prompt": "一家人时尚地站在一起，数码水彩与钢笔速写插画，时装插画风格，干净的白色背景配抽象的米色笔触，柔和光照，富有表现力的线条艺术，休闲现代的服装，牛仔裤，黑色头巾，轻松愉快的姿态，优雅极简的美学，高细节，编辑级速写质感。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ecommerce_case164",
    "title": "土耳其烤肉商业美食摄影组图",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2063094917774086510",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ecommerce_case164/output.jpg",
    "imageAlt": "土耳其烤肉商业美食摄影组图示例图",
    "prompt": "8K 超高清超写实商业美食摄影，比例 3:4。六个场景，每个都置于各自的纯色或渐变背景之上。场景一，旋转烤肉爆裂：传统土耳其烤肉，牛羊肉混合，薄如纸片的肉丝在半空螺旋飞散，白色蒜酱与红色辣酱飞溅，新鲜欧芹叶漂浮，深绯红色背景。场景二，卷饼悬浮：高级土耳其卷饼对半切开并竖直漂浮，截面露出内层的烤肉、生菜、番茄、洋葱，白色蒜香酸奶酱优雅垂淋，细微香料颗粒飘散，暖赤陶橙色背景。场景三，淋酱戏剧瞬间：一堆刚切下、边缘焦脆的烤肉，浓稠奶香蒜味酸奶酱自上方倾泻并定格于流动中，辣味红椒酱以纤细的绯红细流在旁淋下，下方是番茄片与欧芹，热气蒸腾，深炭黑色背景。场景四，解构式构图：烤过的薄饼块、烤肉片、番茄片、生菜叶与洋葱圈各自悬浮于不同高度，光泽酱汁丝带在元素间艺术地相连，超细香料尘埃浮于空中，柔和的鼠尾草绿背景。场景五，旋转肉柱特写：竖直烤肉柱的极致特写，巨大的烤肉刀定格于切片瞬间，一片新鲜肉片正落下，焦屑与调味颗粒浮于空中，热气自新切面升腾，浓郁金琥珀色背景。场景六，俯拍摆盘爆裂：俯视视角，所有食材以环形向上迸发，烤肉片、薯条、烤椒与番茄、新鲜欧芹、盐肤木粉、柠檬角、酱汁飞溅，元素处于不同高度且部分旋转，深勃艮第红背景带暗角。全局：受控影棚布光，强调肉质纹理与炭烤痕迹，浅至中等景深，丰富对比，温暖可口的色调，自然光泽，诱人的调色。无文字、无标志、无人物、无手部、无卡通风格、无塑料感假食物。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case268",
    "title": "毛绒吉祥物伙伴肖像",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/doctorwasif/status/2063304967218475072",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case268/output.jpg",
    "imageAlt": "毛绒吉祥物伙伴肖像示例图",
    "prompt": "以上传的人像作为身份参照，保留人物可辨认的面部特征、发型、肤色、神情、时尚品味与整体气场。创作一张高级的同一人物全身像，身旁伴有一只大型定制毛绒伙伴，宛如其吉祥物化身。毛绒形象应从主体的情绪、面部印象、造型、姿态与整体气质中汲取灵感，而非泛泛的动物或吉祥物。自动选择一个最契合此人独特气质的生物概念，避免可预测或刻板的选择。吉祥物须明确是一只超大毛绒玩具，带柔软蓬松的织物、圆润的造型、细致的缝线、高级质感与收藏级设计师玩具美学；其设计、神情、剪影与比例应含蓄地映照人物的性格与视觉身份。运用取自主体发色、肤色、服装与氛围的线索构建和谐的配色，使人物、吉祥物与场景自然相连。人物与毛绒玩具均需从头到脚完整可见，包括鞋子与吉祥物的所有部位，取景均衡、间距舒适。选择一种适合主体的自然互动，如站在旁边、并坐、倚靠、轻轻拥抱或随意地与毛绒伙伴互动。人物神情保持放松、温暖、真实，带微笑或平静的目光，避免僵硬姿势或人偶般的呆板。若原图仅显示部分穿搭，则以可信而时髦的方式智能补全整体造型。将场景置于干净悦目的环境中，如极简影棚、温馨的生活方式场景或精致的编辑级背景，衬托人物与吉祥物而不喧宾夺主。成品应显得迷人、温馨、时髦、情感动人、视觉协调，适合高端形象营销或社媒编辑大片。避免身体被裁切、鞋子被遮挡、吉祥物显示不全、泛泛的动物选择、真实动物、恐怖元素、廉价玩具感、别扭姿势、杂乱背景、扭曲解剖、多余肢体、文字、标志或水印。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-comparison_case95",
    "title": "SQL收藏玩具包装网格",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Gdgtify/status/2063254078269137330",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/comparison_case95/output.jpg",
    "imageAlt": "SQL收藏玩具包装网格示例图",
    "prompt": "以数据库查询的视觉隐喻来构建一张收藏级玩具包装图：布局为二乘二的四象限网格，目标为四个自定义形象。四象限结构如下——左栏：印刷卡纸材质，内容为巨大的排版标题与推断出的创作者信息；中央舞台：糖果糖霜材质，内容为根据目标推断出的主角形象与微缩立体场景；右栏：透明高光真空塑料吸塑泡壳材质，内容为根据目标推断出的三件标志性道具，制作成带文字标签的三维微缩模型。色彩调性匹配所推断年代的复古怀旧色板；相机为产品摄影的正投影正视角。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ui_case175",
    "title": "杂志风解剖信息图海报",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2063202176344932732",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case175/output.jpg",
    "imageAlt": "杂志风解剖信息图海报示例图",
    "prompt": "超干净的编辑级信息图海报（1080×1080 正方形），融合高端杂志设计、生活方式插画与摄影。标题：顶部居中的粗体大号无衬线字「人体肝脏」。主图：高细节的人体肝脏三维插画，展示右叶、左叶与胆囊；配色为赤陶色、深棕红与柔和珊瑚色调；背景为干净柔和的米色或米白；光照为柔和影棚风格。海报区块：顶部两角的悬浮知识气泡——重量约 1.5 公斤（最重的内脏器官）、仅凭 25% 即可再生、位置在右上腹部、每分钟过滤 1.4 升血液；器官标注，箭头指向解剖部位——右叶、左叶、胆囊（下方的绿色囊袋）、胆总管、肝门静脉；关键功能（左栏小图标）——解毒即过滤血液毒素、胆汁助脂肪消化、代谢处理碳水与蛋白质、储存糖原铁与维生素；亮点（右栏小图标）——化学工厂承担五百多项重要功能、免疫抵御血源性感染、凝血制造凝血蛋白；健康贴士（底部卡片）——限制饮酒预防肝硬化、保持水分冲刷毒素、均衡饮食低糖高纤、接种疫苗预防甲肝乙肝、运动燃烧脂肪与甘油三酯。风格：玻璃拟态磨砂玻璃文本框，柔和投影，医学准确性与高端平面设计并重。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case345",
    "title": "日系时尚封面插画",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2063291615205314737",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case345/output.jpg",
    "imageAlt": "日系时尚封面插画示例图",
    "prompt": "创作一张高级日系时尚杂志封面插画，主体为【自定义主体】。采用极简现代的时装数码插画风格，精致的赛璐璐上色，干净利落的大色块塑形，几乎不见线稿，边缘优雅锐利。以蓝白结构色为基底，克制地点缀珊瑚红、雾紫、浅黄、灰粉、鼠尾草绿、银灰等柔和辅色，成品保持极简、高级、协调、不张扬。背景干净，如钴蓝、宝蓝、雾蓝或其他纯净大色块，留白充足。强烈阳光自左上方射入，白色区域明亮近乎过曝，阴影则由冷蓝、灰蓝、蓝紫的硬边块面构成。赋予主体修长的剪影与安静疏离的姿态，简化细节同时保持形体准确。整体氛围通透、清冷、优雅、时尚，适合高级杂志封面海报。避免文字、水印、复杂背景、写实摄影、三维、厚涂、幼稚卡通风格与杂乱装饰。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ecommerce_case165",
    "title": "3D像素食物变身",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2063171137685569561",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ecommerce_case165/output.jpg",
    "imageAlt": "3D像素食物变身示例图",
    "prompt": "极简美食摄影，单一【食物】置于干净哑白表面，定格于向三维像素艺术风格转化的中途。左半完全超写实，右半溶解为大型漂浮几何方块，每块暴露食物的鲜艳色彩、纹理与内部细节。柔和影棚光照、温柔阴影、浅景深、超写实邂逅几何抽象、方块上微妙运动模糊。高分辨率电影感近景构图。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ecommerce_case166",
    "title": "古宫香水广告",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2063187221730185227",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ecommerce_case166/output.jpg",
    "imageAlt": "古宫香水广告示例图",
    "prompt": "以中国古代宫廷为灵感的香水广告，灵感来自传奇舞者。铜瓶配金镶扭莲花藤蔓，神秘冷冽而 haunting 的后宫氛围。竖版肖像格式，9:16 比例。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ecommerce_case167",
    "title": "毛绒质感汽水罐产品图",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2063261665207239055",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ecommerce_case167/output.jpg",
    "imageAlt": "毛绒质感汽水罐产品图示例图",
    "prompt": "一款标有品牌名的汽水罐，完全由柔软多彩毛绒材质构成，居中于品牌色的配套毛绒背景之上。波普艺术与孟菲斯风格启发，鲜艳而同时高端。清晰影棚光照突显每根纤维、毛绒纹理与材质触感柔软。锐利对焦、鲜艳色彩饱和度、干净阴影、利落商业产品摄影、极简构图、超高分。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ui_case176",
    "title": "石墨铅笔风咖啡馆分镜",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/insmind_com/status/2063252153612017766",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case176/output.jpg",
    "imageAlt": "石墨铅笔风咖啡馆分镜示例图",
    "prompt": "创作一张粗糙黑白石墨铅笔分镜板，三乘三网格九面板 16:9，手绘边框、面板编号、运动箭头、音符与手写导演笔记。为咖啡厅嘻哈商业广告分镜。全程保持同一年轻女咖啡师——富有表现力的眼睛、高凌乱发髻配松散卷发、白色咖啡师衬衫配淡蓝细节、黑色颈巾配小型品牌标志、深色合身长裤、白色平底鞋。温暖现代咖啡馆室内、咖啡机、木质吧台、糕点柜、大窗、柔和日光。展示以下节拍：开场推进配咖啡师唱歌、蒸汽棒打奶泡如舞台烟雾、宽幅嘻哈侧步、身体波浪配围巾标志可见、头顶拉花倾倒、微距奶泡特写。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ui_case177",
    "title": "威尼斯旅行Vlog拼贴",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/ZaraIrahh/status/2063432414945591594",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case177/output.jpg",
    "imageAlt": "威尼斯旅行Vlog拼贴示例图",
    "prompt": "一位年轻女性旅行博主探索意大利威尼斯，横跨十三个极为抓拍、混乱、搞笑且独特威尼斯的瞬间。长发被风吹乱，不费力地奢华欧洲夏日时装，俏皮冒险性格，真实手持手机拼贴美学配自然不完美，未滤镜旅行能量，社媒写实，自发度假混乱。帧分解包括：误上反向水上巴士热情挥手后才发现方向错误；拖超大行李箱过陡石桥大笑荒谬；在威尼斯迷宫般窄巷彻底迷路后误入隐藏庭院配困惑表情；等。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case346",
    "title": "爱意咬痕赛博朋克漫画封面",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/her19845/status/2063310953475678229",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case346/output.jpg",
    "imageAlt": "爱意咬痕赛博朋克漫画封面示例图",
    "prompt": "生成一张复古黑胶专辑封面，赛博朋克与漫画美学，颗粒感与磨损。背景暗色纹理，带划痕与灰尘。顶部标题大号白灰色大写字母配两道红色划线。标题左侧红色六角星配中央星号。标题下方文字意为「美即是力量，沉默即是战争」。中央为附图的单色漫画风格插画，其后为一辆一九九〇年代日系运动汽车单色插画。含多处图形细节与标志：左上为高保真录音标志与转速与黑胶标识；右上红色圆圈意为「第一卷」；左侧含编号、条码与曲目列表。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case269",
    "title": "大片感Y2K身份网格",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Ciri_ai/status/2063592048150909396",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case269/output.jpg",
    "imageAlt": "大片感Y2K身份网格示例图",
    "prompt": "三张照片竖向拼贴。以上传自拍为唯一且排他性面部参考，保持五官与面部结构与参考图完全一致。角色在中性浅色背景前摆姿。一位拥有美丽蓬松发型的女孩，看似用刷子造型，狐系妆容配角度分明的睫毛。第一张照片她非常靠近镜头，以一只眼看着镜头并眨眼。第二张她转过身，头部娇俏地转向镜头，发型略微遮面但不过多。第三张她非常靠近镜头，头发拨到一侧遮住左眼，嘟嘴直视前方。近景与中景，极简构图。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ecommerce_case168",
    "title": "VOLT进球庆祝广告",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/RuzainaMeer/status/2063513621754491039",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ecommerce_case168/output.jpg",
    "imageAlt": "VOLT进球庆祝广告示例图",
    "prompt": "为一款能量饮料创作高能商业产品广告。一位美丽的二十多岁年轻女性，身穿绿白球衣，定格于进球狂欢瞬间——双臂大开、头后仰、尖叫呐喊。一手高举饮料罐，电光蓝液体戏剧性飞溅周围。满座球场配 roaring 球迷、金色彩纸纷飞、泛光灯 blazing。粗体文字意为「感受电伏」。电影光照、超写实商业品质、9:16 竖版。第二场景：同一位女性坐在满座球场中随意饮用能量饮料，突然进球——她爆发出狂欢。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case348",
    "title": "目的地微缩胶片式胶卷海报",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Naiknelofar788/status/2063582448689336690",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case348/output.jpg",
    "imageAlt": "目的地微缩胶片式胶卷海报示例图",
    "prompt": "【地点】自动生成目的地所有地标、风景、文化元素、建筑、野生动植物、交通、美食与当地体验。风格方向：融合三种视觉风格——超写实电影背景、高端风格化三维旅行者角色、手工剪纸立体模型胶片条场景，三种风格对比须感觉有意、高端且编辑级。布局：竖版 4:5 海报。左侧：大型复古黑色胶片条自顶到底竖向。右侧：高细节三维旅行者角色自信向观者走来。中央顶部：大号手写标题意为「每一帧都是一个目的地」，自动生成目的地灵感副标题。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case270",
    "title": "高级灰杂志感九宫格",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Mind_Boticni/status/2063587170519314754",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case270/output.jpg",
    "imageAlt": "高级灰杂志感九宫格示例图",
    "prompt": "冷灰无缝背景前的编辑级三乘三网格。角色面部特征与上传图百分之百一致，穿炭灰无袖连衣裙。光照：大型头顶柔光箱、微弱侧弹光。镜头包含：一、紧凑脸颊颈部特写配模糊手指前景；二、双眼锁定镜头、顶光反射可见；三、单色手托下巴肖像配强画框填充；四、半遮过肩镜头穿过模糊裙带；五、正面特写配交叉阴影横贯面部；六、角度感粗犷肖像配凌乱发；七、双手搁锁骨附近的紧凑细节；八、坐姿半身侧面配模糊画框边缘；九、侧面微距特写。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case349",
    "title": "睡眠不足Q版形象生成",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/john_my07/status/2063556594671964302",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case349/output.jpg",
    "imageAlt": "睡眠不足Q版形象生成示例图",
    "prompt": "以上传照片为唯一面部参考，精确保留身份、面部比例、眼形、肤色、唇形、鼻结构与所有独特特征，无面部漂移。创作一张高细节电影感三维 Q 版角色肖像，灵感来自顶级动画电影、奢华收藏人偶与当代设计师玩具美学。角色代表一位才华横溢的数字创作者，靠纯粹创意与几乎不睡觉运转了一整夜剪辑与设计。场景：清晨的温馨创意工作室。她困倦地坐在磨损木工作台边缘，双腿轻晃，看起来精疲力竭却不可抗拒地迷人。蓬松头发挽成松散凌乱发髻。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case350",
    "title": "春日花园水彩情侣",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/NoOneIsHere2603/status/2063599542843723983",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case350/output.jpg",
    "imageAlt": "春日花园水彩情侣示例图",
    "prompt": "时装编辑水彩肖像插画，一对浪漫的韩国情侣于盛开春日花园中，紧密相立共享柔和亲密时刻——男孩轻握女孩手而她微倾向他带温暖害羞微笑。女性穿优雅飘逸腮红粉连衣裙配精致面料动态，男性穿柔象牙米色衬衫搭轻粉彩开衫，营造梦幻浪漫和谐。柔和韩系五官、健康发光肤质、微妙自然妆、平静深情表情、放松姿势、温柔头部倾斜、略四分之三角度、半身构图。设定于发光的五月花园，满布精致粉彩花朵、飘飞花瓣与温暖春日阳光柔和透过。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case351",
    "title": "宇宙系幻想反派海报",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Taaruk_/status/2063651919596568876",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case351/output.jpg",
    "imageAlt": "宇宙系幻想反派海报示例图",
    "prompt": "超精细反派肖像海报，暗色宇宙背景，传奇反派正面站立，一手遮住下半脸呈 sinister 姿势，发光眼睛直视观者，强大气场从身体爆裂，能量粒子、星云云团、墨溅、宇宙尘埃、戏剧性轮廓光、高对比阴影、电影感插画、锐利面部细节、肌肉体魄、高端漫画封面美学、与角色匹配的鲜艳单色主题、角色身后巨大做旧字体以超大粗体字母显示名字、日文汉字与英文字幕、侧边角色语录、力量数值面板、分类区、签名能力列表、收藏卡牌式版式、杂志信息图。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case272",
    "title": "夜市餐厅闪光灯拼贴",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/ZephyraLeigh/status/2063656432864842045",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case272/output.jpg",
    "imageAlt": "夜市餐厅闪光灯拼贴示例图",
    "prompt": "以参考图创建超写实抓拍夜生活时装拍摄，一位美丽年轻女性于夜晚高档餐厅酒廊。纤细身材、浓密深棕长发、无瑕发光肌肤、柔和魅惑妆容、光泽裸唇、微妙眼线与不费力地自信表情。身穿合身深红色挂脖短上衣配低领，搭配低腰炭灰复古水洗牛仔裤。配饰为小型黑色绗缝肩包配银链带、精致手链与极简珠宝。创作三张竖向拼贴抓拍姿势：一、低头闭眼一手搁胸口；二、侧面姿势头发松马尾；三、等。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ecommerce_case169",
    "title": "闪电暴风雨超跑广告",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamrealsnow/status/2063649073819959502",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ecommerce_case169/output.jpg",
    "imageAlt": "闪电暴风雨超跑广告示例图",
    "prompt": "闪电构成的跑车。超跑自暴风云中浮现，车身完全由蓝色闪电构成，湿润反光路面，背景雷声爆炸，电影动作广告，高速能量拖尾，超精细汽车渲染，奢华商业摄影，8K。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-comparison_case96",
    "title": "碎裂石材风格迁移",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Samann_ai/status/2063606958188265880",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/comparison_case96/output.jpg",
    "imageAlt": "碎裂石材风格迁移示例图",
    "prompt": "创建超写实三维影棚构图，将附图主体重新演绎为碎片石块组合。主体须由分离、清晰脱落的岩石碎片构成，碎片间有小可见间隙（无碎片合并）。材质外观：碎片板岩与砂岩碎片配凿刻边缘、锐利断裂、可见石纹、微划痕与真实粗糙度。配色：以深板岩为主配微妙暖赭砂岩点缀。光照：柔和影棚主光自左上方、温柔补光、每碎片下微妙接触阴影、缝隙中真实环境光遮蔽、干净反射保持最少。背景：极简米白无缝。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case273",
    "title": "复古报刊亭双重曝光",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/AiwithZohaib/status/2063754827017101475",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case273/output.jpg",
    "imageAlt": "复古报刊亭双重曝光示例图",
    "prompt": "以上传图为角色参考，穿高领紧身的黑色长袖连衣裙。旧报刊亭旁有一簇枯木与橙粉花朵，复古胶片颗粒质感交织，模糊背景带明显拖影，双重影像效果营造奇幻氛围。一位妖艳美丽的少女抱花侧脸呈现，白皙肌肤细腻通透。精致面庞被运动模糊柔化，身形轮廓随摇镜微微摆动，柔焦使画面更朦胧慵懒。暖调低饱和滤镜增强效果，逆光长发散发柔和辉光，凌乱发丝扫过。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ecommerce_case170",
    "title": "奢华珠宝对比大片",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/aziz4ai/status/2063737218003333288",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ecommerce_case170/output.jpg",
    "imageAlt": "奢华珠宝对比大片示例图",
    "prompt": "以上传图为唯一产品参考，精确保留珠宝原设计、形状、比例、宝石排列、金属色调、工艺、镶嵌、纹理与身份，不重设计、不简化、不更改珠宝本身。保持产品准确、奢华且立即可辨认。创作非凡的奢华珠宝活动图像，产品为绝对视觉英雄。围绕它构建大胆、艺术且高端的场景，感觉电影感、优雅且视觉难忘。结果绝不可如基本目录照或重复产品渲染。每次生成创建不同视觉概念使输出互不相似。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ui_case178",
    "title": "现代食谱信息图看板",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2063724080717783194",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case178/output.jpg",
    "imageAlt": "现代食谱信息图看板示例图",
    "prompt": "超干净现代食谱信息图。以视觉吸引的成品形式展示菜肴——切片、摆盘或分份，以透视或斜角略悬浮。在菜肴周围以动态编辑布局排列食材、步骤与贴士，非俯拍。食材：每食材配图标或微缩插画与分量，成簇、列表或环形排列与菜肴视觉相连。步骤：编号面板配箭头或线条形成逻辑流，含小型烹饪图标（刀、锅、烤箱、计时器）。可选信息：总卡路里、备餐烹饪时间、份数、辣度以干净气泡或徽章展示。视觉风格：编辑信息图邂逅生活方式美食摄影。鲜艳自然食物色彩、微妙投影、干净矢量图标、现代字体、步骤面板用柔和渐变或玻璃拟态、关键数据用点缀色。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-comparison_case97",
    "title": "连续奔跑故障风分镜",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/aimikoda/status/2063688774324981798",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/comparison_case97/output.jpg",
    "imageAlt": "连续奔跑故障风分镜示例图",
    "prompt": "以分镜参考为权威导演批准的分镜蓝图。将每面板视为单一电影序列中的连续镜头。严格遵循面板顺序，不发明替代取景。不渲染分镜表本身。保留相机位置、取景、镜头意图、镜头尺度、角色调度、屏幕方向、环境地理、道具放置、动作编排、连续性与分镜所示情感升级。分镜为视觉叙事的首要真相来源。重现面板所暗示的拍摄序列而非物理分镜艺术品。整个视频须作为一个连续发展的主镜头播放，无可见剪辑；每面板为其中一帧采样。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ui_case179",
    "title": "INNER SIGNAL品牌海报系列",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/bmx_ai13/status/2063726489905123489",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case179/output.jpg",
    "imageAlt": "INNER SIGNAL品牌海报系列示例图",
    "prompt": "品牌识别海报系列。项目标题为内部信号，概念类型为品牌识别海报系列，品牌名、标语意为「喂养内在信号」。风格：大胆实验编辑品牌，氛围神秘、强大、叛逆、高端，配色为黑、深红、白，光照为硬红光、深阴影、高对比，纹理为胶片颗粒、半调、运动模糊。设计规则：粗体大写无衬线、瑞士式布局，干净网格、强留白、反复最简标志标记，视觉语言为电影感、前卫时装、暗调、锐利、极简。品牌信息：构建不融入的品牌。为有野心、想要存在感的品牌而设计。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-comparison_case99",
    "title": "灰尘团自然纪录片",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/NeuralAIInsight/status/2063638281976189102",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/comparison_case99/output.jpg",
    "imageAlt": "灰尘团自然纪录片示例图",
    "prompt": "创作 16:9 图像。项目卡：创建紧凑设计感报头而非表格。标题意为「灰尘兔自然纪录片」，元信息行意为「微距野生写实／沙发下生存生态系统／干燥纪录片喜剧／十五秒自然历史追逐」。优先级：真实自然纪录片严肃感、沙发下荒野、灰尘兔群、脆弱主角灰尘兔、家居物件为地标、吸尘器顶级掠食者、生存追逐、平静高贵结局。微简介：十八面板分镜，一只小灰尘兔在沙发下被如野生动物般拍摄，在危险自然栖息地中生存。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case352",
    "title": "动画角色三视图模板",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/0kncn/status/2063734037928452120",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case352/output.jpg",
    "imageAlt": "动画角色三视图模板示例图",
    "prompt": "为原创的【角色类型／英雄／生物／反派】创作一张高度精细的彩色人物设计表，16:9 横版。风格：风格化电影感角色设计、高质量动画长片质感、干净易读的造型、强有力的剪影、高级概念艺术呈现、大胆的图形化配色、漫画式能量、精致而可用于制作的设计、清晰可辨的解剖与服饰。角色身份：【角色名／定位】、【年龄／物种／体型】、【性格原型】、【能力／技能／特殊装备】。主设计：角色需有独特而令人难忘的剪影；服饰语言清晰，带有可辨认的造型、强色块分割与功能性细节；设计须原创，不基于任何现有系列角色，无版权标志、无可辨认的现有超级英雄符号、不直接模仿已知角色。服装与护甲：【描述服装或护甲】，含实用设计细节如手套腕具、靴鞋、腰带装备、护甲板、织物褶皱、必要时发光元素与工具或武器。配色：【主色】【辅色】【点缀色】，大胆电影感配色、强对比，色彩足够清晰以适配动画与视频生成的一致性。设计表布局：在同一张干净页面上展示同一角色的多个视角——全身正面、全身侧面、全身背面、四分之三动作姿势、面部特写或面具表情、手部或装备细节、特殊能力或武器细节。姿势：自信易读，动作姿势应展现角色的主要运动风格，如奔跑、跳跃、飞行、摆荡、格斗、施放能力或使用装备。装备与能力细节：展示角色标志性装备或能力如何运作，如磁力抓索、能量护臂、动力靴、工具腰带、发光能量核心、机械翼、元素武器或自定义能力系统。背景：干净浅色中性背景、极简图形设计、无复杂环境、无文字繁多的海报设计，仅允许干净可读的简短视觉批注。质量：高细节、锐利干净渲染、各视角比例一致、每个姿势面部与体型结构相同、服饰连贯、可用于制作的角色表，适合作为分镜与视频生成的参考图。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ui_case180",
    "title": "工业风包装设计版式",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2063735848257167383",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case180/output.jpg",
    "imageAlt": "工业风包装设计版式示例图",
    "prompt": "以附图为基础，创作一张专业的工业包装设计插画版式页。以居中的主视觉三维渲染为核心，材质写实、柔和影棚光照、商业级成品质感。围绕主视觉展示技术视角：正面、侧面、顶面、底面、透视角度与平铺展开图。包含结构构造草图、折线、接缝细节与以毫米为单位的尺寸箭头标注；以手写体批注标示材质与表面处理（哑光、亮面印刷、塑料、纸张、玻璃等）；加入色卡、写实产品插画与细腻阴影。背景呈干净的速写本质感，融合写实渲染与铅笔草图叠层。现代工业设计美学，超精细，作品集级呈现。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ui_case181",
    "title": "镀铬LOGO杂志风系统",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2063644125510217787",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case181/output.jpg",
    "imageAlt": "镀铬LOGO杂志风系统示例图",
    "prompt": "你是一位资深三维产品可视化艺术家与电影艺术总监，擅长为高端编辑与街头潮牌活动创作奢华品牌主视觉。第一阶段，标志主体：识别【品牌名】的官方标志，以最大程度忠实于原剪影、比例与几何的方式渲染——不变形、不风格化。将标志拉伸为深度约占高度 15% 至 20% 的实体三维物件，所有表面——正面、侧面拉伸、斜边——覆以超抛光液态铬（反射率 0.98，近乎完美镜面），启用全光线追踪环境反射，使标志映照周围天空渐变、花田与光源。所有硬边加适度倒角以捕捉锐利高光，在薄结构部位（细线、衬线、图标细节）添加次表面散射以呈现微妙内发光，在最高高光处——角、尖、弧顶——放置四到八颗棱镜式四角星耀斑，有机分布而非均匀排列。全无哑光面、无塑料感，整个标志须呈现为液态银浇铸而成。第二阶段，环境与背景：金色丁香黄昏的电影感宽景，花田占据下方三分之一——薰衣草与白色野花，带真实微观纹理与远景簇的微妙风动模糊；中景渐隐为柔和的紫灰散景。天空渐变从地平线的暖腮红玫瑰过渡到丁香紫再到顶部的冷粉蓝，上方象限加入三到五群剪影鸟簇，地平线带体积大气雾。将环境色调调整为反映【品牌名】标志性品牌色——在天光渐变或主花色中引入品牌色作为色调晕染。第三阶段，构图与版式：1:1 正方形，铬色标志水平居中于垂直中点，纪念碑式尺度占画面宽度 65% 至 80%，施加 2 至 4 度轻微强制透视倾斜以增添动感但不影响识别。标志底边轻触或略微叠入花田顶部，自然融入三维物件；标志向花丛投下柔和弥散阴影。左下角以干净白色无衬线小字放置两到三行品牌诗意短句；底部左侧为品牌名小标；底部右侧为同一标志的扁平二维铬色版本作为收尾印记。第四阶段，光照：主光为左上方大面积柔光，模拟日落后的阴天天光——全漫射、无硬影、5800K 带丁香色调叠层；辅光为 3200K 暖色轮廓光自后方掠过底部与侧边——金色分离光晕；启用全局光照，铬色标志真实地反射与吸收景观环境色，花丛的紫色调应微弱可见于下方反射面。技术规格：Octane 渲染美学，光线追踪 16 次以上反弹，景深等效 f/11 全标志锐利、远景柔和散景，色调映射提亮暗部、压缩高光、电影感 S 曲线，调色去饱和中间调、保留粉彩、冷色暗部，胶片颗粒微妙（等效 ISO 200），色散在标志边缘仅 0.2 至 0.3 像素，抗锯齿最高，无人工塑料感法线、无平滑均匀着色，铬面须有微观表面瑕疵——微划痕、0.5% 粗糙度噪点。整体氛围为高端品牌回顾编辑大片。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ui_case182",
    "title": "护肤UGC种草分镜板",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/WanderingC76/status/2063797516731294055",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case182/output.jpg",
    "imageAlt": "护肤UGC种草分镜板示例图",
    "prompt": "奢华感护肤种草分镜板，暖米色美学，一位美丽的女性博主肌肤透亮健康，手持一瓶精华朝向镜头，自然微笑，温馨卧室环境，柔和自然日光，真实的居家场景，优雅中性装饰。左侧为大幅主肖像。右侧为六个种草分镜面板：钩子镜头、产品介绍、产品上脸、生活方式镜头、效果展示镜头、行动号召。每个面板展示博主真实的动作与自然的表情。底部为关键成分信息框，配优雅护肤图标与成分亮点。辅以产品特写、精华质地镜头与生活方式空镜，高端美妆广告版式。柔和自然光照，真实可亲近，干净的编辑级设计，博主种草风格，高端护肤品牌感，暖米色调色板，超写实、超精细，竖版 9:16，8K 画质。避免水印、标志、低质量、模糊、解剖错误、手部变形、杂乱版式、暗光、卡通与三维渲染感。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case353",
    "title": "北欧文学杂志插画",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2063670695020868046",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case353/output.jpg",
    "imageAlt": "北欧文学杂志插画示例图",
    "prompt": "一幅极简现代的编辑级插画。风格融合北欧生活方式杂志、韩国文学书籍封面与独立建筑速写。自然平视构图，日常场景。配色：奶白、象牙、灰米、鼠尾草绿、深橄榄、墨黑，点缀少量灰粉。细黑墨轮廓线，略带手绘感。高度抽象的造型，修长安静的人物剪影。背景纹理：泛黄纸张颗粒、划痕、墨点、印刷噪点。阴影以纯黑或深绿色实心块面呈现，无渐变、无写实光照、无三维渲染。安静、清冷、文学性、克制的美学。高端编辑与独立出版物质感。无文字、无水印、无高饱和色、无摄影感。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case285",
    "title": "绘本感粉彩卫衣肖像",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/de_mon010/status/2065247896287744162",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case285/output.jpg",
    "imageAlt": "绘本感粉彩卫衣肖像示例图",
    "prompt": "一位时尚男性的半写实动画风肖像，精致的圆框眼镜，温柔自信的神情。身穿淡紫丁香色oversized连帽卫衣，袖口卷起，搭配象牙色宽松运动裤。全身构图，随性站立，姿态放松。身后是手绘单色人物研究、松散铅笔速写、漫画分格、俏皮涂鸦与手写笔记艺术拼贴，有机地铺满背景。当代动画时尚插画，混合墨与铅笔纹理，干净线稿，微妙赛璐璐上色，明亮白色背景，杂志封面美学，高细节、超锐利、鲜艳而优雅，8K 杰作。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case382",
    "title": "旅行美食明信片模板",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Naiknelofar788/status/2065241908327378969",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case382/output.jpg",
    "imageAlt": "旅行美食明信片模板示例图",
    "prompt": "创作一张超写实的旅行美食明信片场景。输入：城市【城市名】、当地美食【当地美食】、背景地点【背景地点或地标】。场景：前景中一只真实的人手手持一张复古旅行明信片；明信片内是一幅大尺寸、精美造型的超写实美食摄影，呈现当地美食，如高端美食广告般拍摄——食物显得比实物更大，纹理丰富、细节写实、诱人的摆盘、自然光照、细微热气、浅景深、电影感美食摄影。明信片上边缘自然坐着一位迷你背包客，双腿悬垂于前方；背包客须写实、高细节，位置使其仿佛正在欣赏当地美食，作为情感焦点并营造强烈的比例感与惊叹感。明信片之外是城市的真实目的地环境，背景应呈现可辨认的当地建筑、街道、景色、文化元素、地标、氛围、色彩与独特视觉细节。在环境中自然融入一根质朴的木质指路牌，指路牌须根据城市自动生成四个简短的目的地专属标签——文化、景点、美食、地标、街区、自然景观或旅行体验相关。生成的标牌应真实贴合目的地并增强旅行叙事。构图层级：迷你背包客、明信片内美食、目的地背景、目的地指路牌。风格：超写实摄影、奢华旅游广告美学、电影感叙事、真实目的地氛围、真实的手、真实的迷你背包客、高细节美食摄影、自然黄金时光光照、浅景深、丰富色彩、编辑级旅行杂志品质、适合社媒传播的内容、视觉冲击力，竖版 4:5，极精细，高端商业广告。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case383",
    "title": "卫星地形字母地形图",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2065224886734438454",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case383/output.jpg",
    "imageAlt": "卫星地形字母地形图示例图",
    "prompt": "超写实轨道俯视卫星视角，干净的现代编辑版式，白色背景上并排排列九个竖版面板，共同拼出一个词，每个面板含一个完全由真实地球地形与自然地貌构成的字母，无文字叠层。面板一：锯齿状山脊与深峡谷构成锐利的 M，戏剧性阴影、岩石地表。面板二：蜿蜒河流穿过茂密热带森林构成 A，水面与林冠鲜明对比。面板三：广袤沙漠沙丘被风雕琢成平滑的 D，温暖大地色调、柔和渐变。面板四：拼布农田与几何田地排列成结构化的 P，干净网格图案。面板五：冰川与冰盖刻出锐利的 E，纯白与深邃冰蓝、开裂纹理。面板六：辫状河漫滩构成 N，分支水道与自然流态。面板七：弯曲海岸线与海洋交汇构成 C，可见碎浪与沉积。面板八：狭窄狭缝峡谷或笔直水道构成极简的 I，强烈竖线。面板九：火山景观与凝固熔岩流构成 L，深色玄武岩带发光熔岩点缀。正俯视卫星视角，航天局地球影像美学，超精细地形、真实地理、各面板光照与比例一致、极少云层、高对比、锐利分辨率、微妙大气雾、真色彩调色、8K 超高分辨率、干净面板间距、画廊式构图，视觉统一但每个面板为独立生物群落，字母清晰可辨又与景观有机融合。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case286",
    "title": "意大利夏日午后肖像",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2065209349132501265",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case286/output.jpg",
    "imageAlt": "意大利夏日午后肖像示例图",
    "prompt": "超写实肖像，一位年轻女性，深棕色长直发，阳光亲吻的健康肌肤，坐在户外咖啡桌旁。身穿白色复古瑞士波点紧身短裙，心形领口、荷叶小短袖、前系带蝴蝶结、合身上衣与微透荷叶边下摆。双手俏皮地抬起遮住眼睛，头微微后仰大笑，红色美甲，左手戴细手链与戒指。场景：豪华户外酒店露台，背景是历史感黄色建筑，可见酒店标识，远处青山、多云蓝天、复古球形路灯，圆玻璃桌面上有两只白瓷咖啡杯与一本平装书。田园甜美的柔女性奢华美学。自然明亮的午后阳光，高对比，桌面锐利阴影，逆光在发丝形成光晕，温暖鲜艳的调色。单反 85mm 人像镜头、f/2.8 浅景深、1/500s 快门、ISO 100、8K RAW 照片。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-character_case19",
    "title": "40K动力装甲小队肖像",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/EvaGlitchAI/status/2065204081363435604",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/character_case19/output.jpg",
    "imageAlt": "40K动力装甲小队肖像示例图",
    "prompt": "将你的人物转化为四万风格动力甲战士。使用单张人物参考图生成单人战士，或附带多张参考图组建完整小队。提示词会自动计数每张参考图并将其转化为独立的可见角色，面部不被头盔遮挡。在场景选择器中输入所选场景，然后附上人物参考图。推荐场景：穿越硝烟、烈火、弹坑与哥特废墟的惨烈战场冲锋；巨型战舰走廊内的接舷战；烛光摇曳的神殿世界大教堂；火花四溅、熔融金属与巨型机械的工业熔炉世界；阴暗巢都小巷；宁静的非执勤堡垒兵营；战前庄严祈祷。场景选择器：【输入你想要的四万风格场景】。严格参考计数规则：在生成图像前，清点附带的人物参考图数量，每张参考图对应一个主角，数量须精确匹配，不可忽略、丢弃、替换、合并或简化任何参考图。多角色身份规则：每张参考图仅作为其对应角色的身份来源，角色一基于第一张图、角色二基于第二张图，以此类推；不得用第一张图生成多个角色，不得复制填充，不得生成变体、双胞胎、克隆、换色或镜像，不得合并参考图，不得让一个角色的面部、发型、配色、服饰纹样、体型或配饰覆盖另一角色。单人回退规则：若仅附一张参考图，只生成一个主角，不生成小队、克隆、双胞胎或变体。三人优先规则：若附三张参考图，则生成三人小队，三人面部须全部可见、护甲设计各不相同、构图清晰分离，采用可读的左中右排列。角色参考规则：保留每张参考图的面型、发型、发色、瞳色、表情、肢体语言、标志性配色、服饰纹样、配饰、剪影、体型与整体气质；每个角色须清晰呈现为独立可辨认的个体；每个角色的面部、头发与身份须保持清晰可见，头部不被头盔、全面罩或面甲遮挡。硬性风格规则：以附带的参考图作为视觉风格参考，保留其画风、渲染语言、线条质量、色彩处理、面部风格化、上色方式、纹理处理与背景处理，同时将角色转化为四万风格动力甲战士——参考图为动画风则保持动画风、为风格化则保持该风格化，除非特别要求否则不转为写实。场景概念：基于场景选择器创作 16:9 横屏电影感插画，将附带角色转化为自定义的四万风格暗黑哥特远未来动力甲战士，画面须厚重、戏剧化、史诗感、战争感与角色驱动，氛围强烈、叙事清晰、比例恢宏。角色转化：在保留原始身份的前提下，将每个参考角色转化为自定义的四万风格动力甲版本，以巨型风格化动力甲为核心——宽肩甲、强化胸甲、重型臂甲、装甲靴、粗壮机械关节、哥特科幻军事细节、圣战士纹饰、战场磨损与超大未来武器；护甲须显得威严、粗犷、仪式化、昂贵且为无尽战争而造；头部不覆盖以保留面部、头发与表情；以每个角色自身的配色、纹样、配饰、服饰造型、符号、材质、性格与气质作为护甲重设计的基础，多名角色时各护甲须基于各自参考图而 distinct；若场景平静、仪式或非执勤，武器可持于静息、背负、入套、倚靠、置于桌面或仪式性携持但须可见，战斗场景中武器须活跃、沉重、可读并融入姿势。场景适配：战斗场景动作须动态而可读，强姿势、清晰剪影、环境破坏、烟雾、火焰、碎片与强烈动量；庄严神圣场景聚焦氛围、比例、旗帜、圣物、蜡烛、焚香、彩窗与虔诚；室内场景使用哥特科幻建筑、工业机械、教堂尺度内部、堡垒空间、军械库、兵营、指挥室或军事基础设施；日常或非执勤场景保持护甲与四万宇宙不变但展现维护、简报、祈祷、交谈、进食、休整、训练、修装备或备战等接地时刻。环境与构图：围绕所选场景构建环境，宽 16:9 横屏电影构图，主体清晰可见、居中或构图占主导；单人时给予英雄式构图与清晰剪影，多人时确保每个角色可读可辨、剪影分离，三人时采用清晰的三人小队构图且三脸全可见；以背景建筑、烟雾、碎片、旗帜、机械、火花、雾气、圣物、哥特造型或教堂尺度烘托场景但不喧宾夺主。光照与氛围：光照匹配所选场景，画面须阴沉、电影感、史诗感与沉浸感，戏剧性对比与强烈氛围——战场火光、烟雾、彩窗辉光、冰冷舰船光照、工业火花、情绪化轮廓光、焚香雾气、硬朗军事照明、发光机械或远处爆炸。质量与渲染：精致的高级风格化插画，干净线稿、锐利渲染、可读造型、强护甲设计、富有表现力的可见面孔、强武器设计与清晰构图，最强细节集中于角色、护甲、面部与武器，保持强视觉层级与可读性，背景烘托而非比角色更繁杂。禁止：忽略场景选择器；生成多于或少于参考图数量的角色；三张参考图时只生成两个角色；用第一张参考图复制替代第二或第三张；合并多张参考图为更少角色；将任何参考角色变为克隆、双胞胎、换色、护甲变体或变体版本；隐藏、裁切、遮罩或覆盖任何参考角色面部；多名参考图时所有角色穿相同护甲；武器过小、过现代、玩具感或视觉无关紧要；背景比角色更繁杂；主体模糊、过小、隐藏或不可读；解剖混乱、多余肢体、畸形手、扭曲面部或泥泞纹理；除非特别要求否则使用写实。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case287",
    "title": "雨夜电影感人像",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2065194222408577258",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case287/output.jpg",
    "imageAlt": "雨夜电影感人像示例图",
    "prompt": "电影感超写实特写，一位三十出头的年轻女性，夜间暴雨中双臂张开、头后仰、闭眼拥抱雨水。左侧温暖的金橙色逆光捕捉每一滴雨，使其在她剪影周围化为发光粒子。湿透的黑色上衣贴身，水珠在皮肤上凝结。深色背景与炽热橙色侧光形成强烈对比。表情散发着释放与平静。85mm 镜头、f/1.8、8K、浅景深、竖构图、戏剧性电影氛围。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case384",
    "title": "波兰PRL年代杂志跨页",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Riccardo_Nero/status/2065193845222944844",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case384/output.jpg",
    "imageAlt": "波兰PRL年代杂志跨页示例图",
    "prompt": "创作一张来自虚构的波兰彩色周刊杂志的完整跨页，年代为一九五〇年代末至一九六〇年代初的波兰人民共和国时期。图像应呈现为真实的复古印刷杂志：泛黄纸张、胶印、半调网点、轻微套印错位、褪色的陈旧色彩、复古波兰字体、可见的中缝、页边距、页码、图注与分栏排版。主题：一辆叙利亚 105 轿车自豪地展示于当代朝鲜，以讽刺性架空历史的波兰杂志文物形式呈现。跨页须清晰分为两页。左页：一篇波兰画刊文章，报道叙利亚 105 在平壤的正式亮相。展示一张主图——叙利亚 105 停于仪式平台或红毯上，周围是官员、观众、朝鲜国旗、横幅与纪念碑式朝鲜建筑。车辆须清晰呈现经典叙利亚 105 的样貌：紧凑车身、圆润的东欧阵营造型、简单实用的比例、少量镀铬饰条、标志性前脸、小车轮、真实的波兰汽车设计语言，略带英雄化但仍谦逊务实。使用粗体波兰语标题，副标题意为「铁幕之外的叙利亚」，意为「平壤的轰动首发：波兰汽车传奇的非凡呈现」。加入若干栏波兰语正文、红色首字下沉、小图注，以及一两张嵌入图展示车尾与内饰。页面应像一篇严肃却略带荒诞的画刊报道，包含可信的六〇年代画刊刊头。右页：一则经典五〇至六〇年代波兰印刷广告，展示同一辆叙利亚 105。车辆以大尺寸、英雄式、光彩照人的四分之三视角呈现，背景为受平壤启发的戏剧性复古城市景观。使用粗体复古广告字体、装饰色块、星星、标语与产品徽章。主广告标题意为「全新叙利亚 105——现代汽车的骄傲」，配以更小的波兰语广告文案：「可靠发动机」「实用且经济」「舒适与优雅」「结构坚固」「民族友谊」，虚构厂商行为 FSO 华沙轿车厂，并标注「波兰—朝鲜友谊产品」。右页应比文章页更干净、更具向往感，如同时代汽车广告。整体应呈现为可信的讽刺架空历史文物：波兰杂志设计、叙利亚 105 汽车幻想、朝鲜仪式宣传与复古印刷真实感。所有可见波兰语文字须尽可能清晰可读。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case288",
    "title": "七宫格情绪肖像",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2065179623697306098",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case288/output.jpg",
    "imageAlt": "七宫格情绪肖像示例图",
    "prompt": "网格布局，面板之间有细白间隙，整体外围有微妙白色边框。干净现代的界面美学，每块面板带轻微圆角。面板一：欢快（黄色）——暖黄渐变，双臂高举过头，闭眼，张口大笑，高能量姿势。面板二：震惊（蓝色）——蓝色渐变，双手捧颊，眼睛圆睁，嘴巴大张，眉毛高挑。面板三：严厉（红色）——纯红背景，双臂交叉，眉头紧锁，嘴唇紧抿，深色连帽衫。面板四：温柔（粉色）——柔和粉渐变，怀抱一只棕色小狗，温柔微笑，舒适针织衫。面板五：自信（紫色）——紫色渐变，一手叉腰，轻微坏笑，图案上衣，从容站姿。面板六：赞许（绿色）——绿色渐变，棒球帽与牛仔夹克，竖大拇指，轻松微笑。面板七：忧郁（灰色）——灰色渐变，目光微微下垂，内眉微抬，嘴角轻柔下弯。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case386",
    "title": "国别风情感旅行海报拼贴",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2065164435237613822",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case386/output.jpg",
    "imageAlt": "国别风情感旅行海报拼贴示例图",
    "prompt": "设计一张风格化旅行海报与图形拼贴，主题为【自定义国家】。中心人物是一位时尚的国际游客，明确呈现为外来访客而非本地人。游客身着现代旅行装扮，配相机、背包、墨镜、地图或行李箱等配饰，沉浸于该国的文化与氛围中。将游客置于大胆构图中，周围环绕该国专属的标志性建筑、街道、景色、地标、交通、美食、招牌与文化细节。结合写实人物渲染与图形拼贴背景，含层叠纸张纹理、撕边海报边缘、贴纸点缀、半调网点、编辑级字体与强烈几何造型。融入该国的真实视觉纹样，同时保持游客造型全球时尚且明显来自异国。加入大号清晰标题。追求现代、艺术化、高端编辑旅行海报感，版式均衡，可印刷的构图。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case289",
    "title": "治愈粉彩清晨俯拍生活照",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2065149291099021650",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case289/output.jpg",
    "imageAlt": "治愈粉彩清晨俯拍生活照示例图",
    "prompt": "俯拍生活方式照片，略微倾斜的高角度俯视一张舒适床铺。一位纤细的年轻女性仰躺，姿态放松，呈现慵懒周末清晨的氛围。她有一头微乱的长直黑发，带淡粉挑染，柔软地铺散在紫色枕头上，整齐的刘海修饰脸型。妆容为柔和的东亚风格，粉色腮红明显，唇瓣微启带光泽，目光柔和地望向镜头上方。身穿白色罗纹棉质吊带背心，前襟纽扣与蕾丝饰边，腰部微微上移，搭配浅粉色缎面睡裤。右臂随意置于脑后，露出光滑的腋下与肩膀，左膝轻轻弯曲。双臂、胸口、腹部与腿部肌肤光滑透亮，左侧窗户透入柔和漫射日光照亮全身。左腕戴银色串珠手链。卧室整体以粉彩色调装饰，身下是褶皱的淡紫枕头与带紫色花卉纹样的白色毛毯，头旁放着两只白色毛绒兔。右下前景略微虚化，木质床头柜上放着一杯柠檬水、一只显示 8:47 的粉色小时钟、耳机盒与一本时尚杂志。35mm 镜头中等光圈拍摄，自然略带不完美的抓拍美学，柔和日光与温柔阴影，捕捉静谧缓慢的清晨氛围。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-comparison_case103",
    "title": "老照片修复对比",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/CuriousRefuge/status/2065139340486045905",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/comparison_case103/output.jpg",
    "imageAlt": "老照片修复对比示例图",
    "prompt": "将附图转化为一张高分辨率数码照片，看起来仿佛是昨天刚拍的。以专业单反相机画质呈现，电影感调色与光照。保持细节不变，仅提升质量与分辨率。在获得首张超高质量图像后，可上传其余旧照片并以相同提示词处理，批量下载所有超高清修复版。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case387",
    "title": "Risograph印刷雨林信息图小志",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/92digitalartArt/status/2065135532875645242",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case387/output.jpg",
    "imageAlt": "Risograph印刷雨林信息图小志示例图",
    "prompt": "一张孔版印刷小志风格的信息图海报，16:9 横版，探索热带雨林的生物多样性。设计须完全呈现为独立科学小志的孔版叠印效果，整张构图须展现孔版印刷的标志性瑕疵：油墨颗粒、色层间轻微套印错位、中间调可见的半调网点，以及所有内容之下的触感纸张纹理。严格使用三色孔版配色——荧光绿、深海军蓝与暖黄——色彩重叠处产生丰富的叠印效果，形成意料之外的间色：绿蓝交叠为青、绿黄交叠为橄榄。主插画居中：一片葱郁的雨林竖向剖面，展示全部四层——顶层为巨型树冠与巨嘴鸟、树冠层为吼猴与兰花、林下层为箭毒蛙与蕨类、森林地表为蘑菇、甲虫与森蚺——每层以孔版美学的手写体批注标注。围绕中心森林插画，组织小志式内容面板，带不规则手切边框美学，包括「有多少物种？」「水循环」「森林的威胁」「森林为何重要」等板块，各含小型低保真图标与简洁有力的文字，混合粗体无衬线与打字机风格字体。加入戏剧性的小志式页眉标题，意为「雨林：地球之肺」，大号模板全大写字体；添加一个小型「你知道吗」框含三个惊人事实；底部条带意为「第 7 期——田野指南系列」以呈现真实独立出版物感。整体氛围紧迫、独立、生态热忱、美丽而不完美、视觉上令人振奋，高质量，比例 16:9。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ad-creative_case184",
    "title": "阿迪达斯未来感球鞋发布海报 9:16",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2065133774413906004",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ad-creative_case184/output.jpg",
    "imageAlt": "阿迪达斯未来感球鞋发布海报 9:16示例图",
    "prompt": "为一款虚构的超限量球鞋设计一张引人注目的高端竖版广告海报（9:16），球鞋名为限量发售款。创意方向须达到世界级代理活动水准——原创、未来感、视觉爆裂。主视觉：一只英雄球鞋悬浮于画面中央，以戏剧性低角度拍摄，仿佛悬浮于一条被发光能量裂缝分割的深黑曜石跑道之上。球鞋结合针织网面、雕塑感泡棉、半透明面板、反光条纹与碳纤维底板。霓虹光轨如捕获的速度般在其周围旋转，粒子与雾气增添动感与张力。背景隐约可见精英短跑运动员凝固于冲刺瞬间的剪影，模糊程度足以保持球鞋为焦点。配色：哑黑、电光红、银、深炭灰，点缀微妙霓虹蓝。字体与文案（锐利、干净、强视觉层级）：主标题意为「驾驭速度」，产品名，副标题意为「为从不平庸奔跑的人而造」，功能标注以优雅框式布局呈现——轻量自适应针织鞋面、碳能量回弹板、精准抓地、限量收藏发售，价格，主号召语意为「发售即开」，次号召语，页脚意为「性能创新与未来街头身份的碰撞」。版式：超大主标题部分融入背景，产品名以精致高端方式置于球鞋旁，功能标注沿一侧竖向堆叠，添加限量系列徽章。构图融合奢华运动广告与未来编辑设计。风格：超精细超写实产品摄影、电影影棚光照、高端广告美学、锐利对焦、丰富纹理、微妙氛围、动态运动能量、高端商业海报感。比例 9:16。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ad-creative_case185",
    "title": "奢品亚麻质感杂志风海报",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/ZephyraLeigh/status/2065123985713700925",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ad-creative_case185/output.jpg",
    "imageAlt": "奢品亚麻质感杂志风海报示例图",
    "prompt": "一张超写实奢华编辑海报，3:4 竖版。全画幅覆盖优质米白意大利亚麻纸墙面纹理——暖象牙色调、细腻颗粒、极具触感的表面。墙面中央是一个大型精密雕刻的橄榄球形拱门，带有深邃的建筑浮雕——可见的雕刻边缘、真实的内阴影深度、雕塑式斜边细节、高端工艺美学。拱门内为电影感球场氛围——深蓝与白色的奢华烟雾优雅飘移、金银冠军彩纸纷飞、白色兰花与玫瑰花卉配深绿叶、皇家蓝与珍珠白的高端庆祝气球、冠军奖杯剪影隐约嵌入背景雾中。氛围为精英体育盛会之夜。主体为一位运动员全身像，强劲地站立于雕刻框内，身穿国家队战袍——真实球衣面料带织物褶皱、合身运动短裤、高端运动靴，标志性健美体魄、宽肩、清晰肌肉线条、精英球员解剖结构，自信表情——锐利下颌、专注眼神、短而纹理的深色头发、写实肤质带自然毛孔细节。庆祝姿势——胸膛微挺、下巴抬起、一手从容放松、足球精准停于右脚靴旁。三维破框效果：面部、右肩、右肘以下手臂与右脚球靴真实地延伸出雕刻框边界、落在墙面上，投下柔和自然投影于纸纹理上。景深营造可信的维度层次。光照：高端球场钨丝灯光融合温暖的黄金时刻电影日光从左上方射入，柔和白色轮廓光环绕肩部与下颌线，右侧墙面有微妙补光，无硬过曝、无假霓虹——仅温暖编辑级奢华调色。墙面字体——极简奢华版式：运动员名字，大号粗体高端衬线字体，烫金效果，置于雕刻框上方；章节号，中等字重优雅字距，暖青铜金属色调，居中于名字下方；标语意为「再创 365 天辉煌」，纤细大写无衬线、宽字距、奶油金色，置于章节号下方。技术：超写实渲染、8K 细节锐度、专业商业体育摄影品质、奢华杂志封面艺术指导、自然调色——暖象牙加深蓝加金、真实阴影物理、零人工痕迹、正确人体解剖、无多余肢体、获奖编辑杰作级品质。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case388",
    "title": "世界杯国家队时装海报",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Just_sharon7/status/2065123619844333737",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case388/output.jpg",
    "imageAlt": "世界杯国家队时装海报示例图",
    "prompt": "为某国家队设计一张超高端足球时装社媒推广海报，竖版 4:5，Instagram 主创意，全球运动服广告级商业足球平面设计，代理级艺术指导，8K 超高清，超写实，足球与时装与平面设计融合。核心理念：这并非一张足球海报，而是一则以球衣为载体的国家身份宣言，设计应呈现为该国最大的足球广告牌、奢华运动服活动与大陆足球传承海报三合一。主视觉：超大号国家名字体占据几乎整个画面，文字占据画布约 75%，字体融入设计，字母延伸出画框边缘，部分被裁切、部分隐于球员身后、部分作为构图结构，字体须具纪念碑感。足协徽章微妙融入版式。主体：一位精英女足球员，自然美、自信表情、极简妆容、冠军心态，不微笑、不做戏剧性庆祝，从容自信。身着国家队主场球衣，金黄底色配绿色细节与黑色点缀，搭配短裤、高端球袜与现代足球造型，干净精英球员美学。姿势：球员穿行于巨型字体之中，一脚微向前，直视镜头，双手放松，身体部分与字体交叠，整体呈现她毫不费力地承载冠军气质。构图层级：字体占 70%、球员占 20%、促销元素占 10%，视觉层级从国家名到球员到促销到号召。配色：主色为国旗金、深绿、白、银、柔灰，点缀黑色传承细节、足协徽章金与微妙的国旗灵感色，无霓虹色、无追逐潮流配色，永恒运动优雅。背景：干净高端体育背景、大面积柔和渐变、极简影棚环境、微妙高端纹理，无球场、无人群、无风景——设计本身即环境。平面设计系统：悬浮系列卡片、传承灵感标签、极简网格系统、细线、微字体、高端全球足球活动层级、国际旗舰店气场。促销元素：新球衣、年份、意为「为世界舞台而就绪」、限量发售、官方系列、会员抢先体验、免邮，自然融入版式而非横幅堆砌。字体层级：左上角小号高端品牌字标，画面中央巨型国家名大字，活动标题，辅助文案意为「为承载伟大前行者而设计」，号召区块，底部功能条含官方球衣、国家队系列、比赛必备、限量发售，右下角起售价，底部中央竖排年份。光照：奢华体育影棚光照，大面积柔光源，编辑级对比，自然肤质渲染，高端面料高光。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case389",
    "title": "世界杯国家队徽章",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Goodmanprotocol/status/2065121892550558018",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case389/output.jpg",
    "imageAlt": "世界杯国家队徽章示例图",
    "prompt": "创作一枚世界杯国家变体徽章，采用大胆扁平的字体插画风格。严格保留官方世界杯堆叠标识：数字「2」占据上半部分、数字「6」占据下半部分，两者居中对齐构成统一的竖向肖像块，世界杯奖杯穿过中心集成其中，排列与官方徽章一致。数字须为仅轮廓、永不填充，以取自【国家名】国旗配色的单色粗体描边渲染，内部完全透明以使奖杯可见。严格使用 9:16 竖版比例。不得改变构图、比例或视觉层级，结果须紧密 resembling 官方堆叠徽章并保持与高端国家适配版相同的图形平衡。世界杯奖杯须严格遵循真实奖杯剪影——两个人物举起一个刻面地球、扭转的窄身与喇叭状带状底座——并立即可辨认，以扁平矢量插画呈现，零渐变、零纹理、无绘画效果，如珐琅徽章或丝印海报。将奖杯按其自然轮廓分为干净的扁平区块：地球与举起的人像使用国旗配色中最深色，并在地球正面醒目放置【国家名】足协徽章；在地球右侧为该国家每夺得一次世界杯冠军添加一颗漂浮星星，以国旗点缀色着色。中央身段使用对比色国旗色，并以超大粗体压缩数字竖向堆叠该国历届世界杯夺冠年份；若从未夺冠则此区块留空。下方颈部与喇叭状底座使用国旗主色，以超大粗体压缩大写字母自然贴合底座收窄造型地写入【国家名】。全程使用粗黑轮廓分离每个区块并定义整个奖杯剪影。保持高度图形化、标志化且立即可辨认国家的观感。纯黑背景，无渐变或纹理。最终结果应如高端珐琅别针、丝印海报或现代体育标识标记，同时保留官方世界杯堆叠徽章结构与中央奖杯集成，不做多余风格偏差或版式更改。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case290",
    "title": "温馨咖啡馆门前时尚女性肖像",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/sakshi___007/status/2065118696788631921",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case290/output.jpg",
    "imageAlt": "温馨咖啡馆门前时尚女性肖像示例图",
    "prompt": "一张超写实生活方式肖像，一位时尚年轻女性白天站在现代温馨咖啡馆门外，温暖自然地对镜头微笑。她有一头短波浪铂金发，柔和凌乱的波波头，肌肤透亮、极简自然妆、清新不费力的美感。身穿优雅的oversized白色衬衫，柔美飘逸袖口，束入高腰米色阔腿裤配黑色腰带，打造高级极简时装造型。一手持透明杯装冰拿铁，另一手轻轻牵着一只可爱的杏色玩具贵宾犬，小狗戴着可爱的深色头巾。温暖自然阳光，温馨咖啡馆店面背景配玻璃橱窗，柔和散景光照，美学都市生活方式氛围，宁静而温馨的情绪，超写实细节，时尚韩系街拍风格，柔和中性调色板，编辑级人像摄影，真实肤质，温馨咖啡文化气息，奢华休闲时装，柔和电影感调色，高细节，优雅现代美学，8K 画质。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-character_case20",
    "title": "竖版角色概念设定表",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2065118633198829601",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/character_case20/output.jpg",
    "imageAlt": "竖版角色概念设定表示例图",
    "prompt": "设计一张高分辨率竖版角色概念海报，奢华粉白美学，融合优雅与前卫现代时尚，版式如高端杂志人物档案，区块干净、网格精准。主体：一位原创年轻女性（非真实人物），丝滑深色长发带微妙粉挑染，自信从容的表情，略带神秘气质。身穿黑色与粉色混合造型（街头与偶像风融合），光泽质感、蕾丝细节与金属点缀。柔和而戏剧化的光照，霓虹粉光映衬深色调。顶部：一侧为大幅主肖像，另一侧为简洁档案面板，含精炼英文文本——姓名、年龄、身高、风格标签与简短传记，意为「她不追随潮流，她定义潮流。安静的力量、锐利的视野、不言而喻的存在感」。包含特质栏，以风格化进度条呈现自信、创造力、自律、魅力与情感深度。中部：五至六张小肖像网格，捕捉不同表情——微笑、凝视、坏笑、沉思、自信。下部：全身姿势（正面、侧面、行走、力量站姿、随性站姿）、造型变体（街头奢华、舞台装、极简优雅）、配饰面板（高跟鞋、靴、链条、戒指、手袋、发型）。文字基调大胆、有力、自信，强调个性、自我价值与安静力量，无填充文字。风格：超精细、4K 画质、光泽杂志质感、电影光照、锐利对焦、均衡对比、现代编辑版式、完美对齐网格。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case291",
    "title": "奢牌街头镀铬座椅肖像",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/AiwithLariab/status/2065115460820218326",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case291/output.jpg",
    "imageAlt": "奢牌街头镀铬座椅肖像示例图",
    "prompt": "超高端时装编辑海报，奢华街头美学，4:5 竖版。一位自信的年轻女性随意坐在现代镀铬座椅上，身穿oversized黑色皮革飞行员夹克、黑色宽松T恤、黑色阔腿工装裤与黑白奢华运动鞋。放松而有力的姿势，一手搭在椅背上，直视镜头。背景中大号粗体字意为「我是创造者」。米色大字融入构图，部分位于模特身后与周围，营造高端杂志封面设计。深炭黑影棚背景带微妙纹理与层次。专业时装广告摄影、电影影棚光照、右上角戏剧性聚光、柔和阴影、奢华品牌美学、高端街头广告、强视觉层级。自然蓬松的波浪卷发、真实肤质、锐利面部细节、晶莹眼眸、高端调色、浅景深、超写实摄影、顶级杂志品质、奢华活动海报、现代创意创业者品牌。极简设计、干净构图、大胆字体、高端编辑版式、奢华时装海报美学、杰作、8K、超写实、专业修图、高对比、超精细。左下角小字意为「创造不只是你做出的东西，而是你是谁」，以及创立年份。面部保留优先级最高，身份一致性最高，文字准确度高，海报设计为奢华时装活动级。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case292",
    "title": "韩国涂鸦街头艺术肖像",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Kashberg_0/status/2065112085269504508",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case292/output.jpg",
    "imageAlt": "韩国涂鸦街头艺术肖像示例图",
    "prompt": "以上传人物为基础，创作一张病毒式传播的涂鸦街头艺术风格图像。保持面部一致。添加球衣与全身姿势，背景为巨型手绘壁画肖像，含标志与年份文字，黄绿足球配色，混凝土墙面，干净海报构图，前景为写实照片质感，背景为插画风格，呈现短视频平台热门滤镜式视觉。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case293",
    "title": "韩漫风情侣自拍",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Taaruk_/status/2065105428862886301",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case293/output.jpg",
    "imageAlt": "韩漫风情侣自拍示例图",
    "prompt": "将上传的照片转化为一幅可爱的手绘条漫插画，描绘一对幸福的情侣在户外自拍的场景。柔和粉彩调色板，圆润传神的大眼睛，红润脸颊，温暖微笑，温馨浪漫氛围。周围漂浮着可爱的涂鸦元素——心形、花朵、星星、漩涡、阳光图标。背景为葱郁公园或海滩，明亮晴朗，童话绘本美学，干净线稿，柔和绘画感上色，可爱比例，温馨田园风，梦幻欢快，高细节数码插画，绘本品质，萌系美学，柔和纹理，鲜艳而柔美的色彩，适合社媒传播的情侣肖像，可爱生活方式插画，杰作，超精细。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case294",
    "title": "不存在的1870年代老照片",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Arminn_Ai/status/2065104900590109130",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case294/output.jpg",
    "imageAlt": "不存在的1870年代老照片示例图",
    "prompt": "以一八七〇年代风格创作一张不存在的复古照片。输入场景描述、身着年代准确服饰的人物以及他们的互动。照片呈现为一八七〇年拍摄，带有显著的岁月化学渍、重度颗粒、棕褐色调与深划痕。大幅降低锐度使主体细节不清晰，呈现模糊与低保真效果。大幅增加照片磨损，包括小撕裂、缺角、水渍与虫蛀小洞，并添加一道醒目的锯齿状斜向裂口，以旧褪色胶带笨拙地修补。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case295",
    "title": "人偶化概念肖像",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2065104023011868884",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case295/output.jpg",
    "imageAlt": "人偶化概念肖像示例图",
    "prompt": "超写实全身肖像，女性以参考照片中的姿势站立，被风格化为时尚女性可动人偶。她双臂交叉于胸前，站立于一块巨型平板电脑之上，身穿都市街头风——黑色连帽卫衣、牛仔裤、运动鞋，配锐利红色科技眼镜。周围以动态布局漂浮着设计师工具：带蓝色全彩辉光的次世代相机、带电火花的几何鼠标、留下线框轨迹的数码手写笔、蓝黑双色色卡、以及一只冒着二进制代码蒸汽的极简黑咖啡杯。大胆的蓝橙配色，全程戏剧性光照。赛博朋克氛围、霓虹细节、粒子效果散布全场。视觉风格融合三维动画与科技摄影。锐利对焦、电影光照、8K 分辨率。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case296",
    "title": "霓虹涂鸦画廊快照模板",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/im_shahid7/status/2065099049938878503",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case296/output.jpg",
    "imageAlt": "霓虹涂鸦画廊快照模板示例图",
    "prompt": "以「霓虹涂鸦画廊快照」风格创作一张 9:16 图像。主体：【主体】；动作：【动作】；道具：【道具】；地点：【地点】；背景元素：【背景元素】；主手写文字：【主文字】；次手写文字：【次文字】；点缀符号：【符号】；穿搭风格：【穿搭】。以真实的随手手机照片为底图，场景须具体而日常——可见墙面、画作、货架、标签、桌子、灯、海报、人、包、阴影、颗粒与不完美的手持取景。在照片之上直接绘制一层张扬的数字马克笔涂鸦：以粗热粉轮廓包裹主体并加青色偏移辉光；在剪影周围添加黄橙色怪兽尖刺、角、射线、鳍或太阳花造型；在画框四周散布粗糙手绘符号——星星、爪印、蛛网角、光环、抽象眼睛、植物、花朵、涂鸦下划线、计票标记、箭头、心形与贴纸状色块。在空白处放置粗体大写手写文字，使用白色、黄色或荧光绿，文字应有趣、私人、分心、学生风。保留真实随手照与混乱手绘涂鸦之间的对比。避免水印、用户名、平台标志、创作者标识、应用印记、二维码、纯矢量插画、全插画背景、精修广告版式、奢华编辑造型、完美字体、空旷场景、可辨认名人、微小不可读文字。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case297",
    "title": "保持五官一致的人像生成",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/john_my07/status/2065092295092051994",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case297/output.jpg",
    "imageAlt": "保持五官一致的人像生成示例图",
    "prompt": "以附带参考图为面部身份、骨骼结构、身材比例、肤色、五官与整体外貌的唯一指引，创作一张超写实奢华时装编辑肖像。她身穿一件oversized设计师级深红色重磅棉T恤，胸前白色极简字体标语意为「随意」，白色弯曲帽檐棒球帽增添运动高端感，深色飞行员风墨镜略低地架于鼻梁，露出双眼并增强前卫时装感。主体舒适地坐于优雅的阳光场景中，微妙四分之三角度。一手轻触帽檐，另一手自然置于膝旁，腕戴精美金色奢华腕表。姿态自信、从容、不费力地时髦，头部微倾，目光迷人地直视镜头。栗棕色超长发如瀑倾于一侧肩头，柔软丰盈波浪卷，带温暖焦糖与榛子色挑染，发丝捕捉阳光，呈现自然层次、动感与丝滑质感。专业美妆造型：透亮肌肤、柔和轮廓颊骨、精细眼线、自然浓眉、浓密睫毛、香槟高光、蜜桃腮红与光泽珊瑚裸唇，妆容精致而真实，适合高端时装广告。配饰精选：叠层细金链、优雅圈形耳环、纤细金手链与高端奢华腕表，珠宝点缀而不夺主。以国际时装杂志封面风格拍摄，温暖午后阳光、奶油般背景分离、电影感景深、真实肤质、超锐利眼部对焦、高端面料纹理、奢华生活方式氛围、精致调色与无瑕商业时装摄影。超写实、编辑级品质、顶级杂志灵感、高端时装广告、8K 分辨率、获奖级肖像。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case390",
    "title": "双重曝光艺术总监海报",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2065088795494773094",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case390/output.jpg",
    "imageAlt": "双重曝光艺术总监海报示例图",
    "prompt": "你是一位资深艺术总监。第一阶段，摄影构图：分层效果——双重曝光照片拼贴，前景为锐利动作镜头，背景为巨型纪念碑式剪影，主体与背景图形元素无缝融合。第二阶段，场景氛围：自动检测【人物】所属核心行业——体育、音乐、电影或商业，并根据身份定制姿势与道具。第三阶段，动态品牌色：识别与该人物或其团队或品牌最关联的标志色，应用于背景、半调纹理与烟雾效果；选择高对比的活力辅色（霓虹、金色或电光白）用于放射状爆裂射线；视觉纹理为照片暗部区域的厚重胶片颗粒与半调网点。第四阶段，图形点缀：从中心爆裂的粗放射线，底部为流动波浪式有机造型，以极简黑色鸟群剪影增添比例与纵深。第五阶段，品牌与文字：一句有力的短语概括【人物】的精神遗产，底部角落放置极简行业标志，粗体高冲击无衬线字体。技术规格：8K 分辨率、真实商业摄影风格而非插画、极端影棚轮廓光将摄影主体与图形层分离。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case298",
    "title": "便利店店员昼夜对比写真",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/johnAGI168/status/2065080792548618431",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case298/output.jpg",
    "imageAlt": "便利店店员昼夜对比写真示例图",
    "prompt": "上班版与下班版对比。白天收银员版：3:4 竖版，创作一位约二十四岁日本年轻女性的写实真人肖像。白皙肌肤、柔和精致五官、温婉鹅蛋脸、平静深色眼眸、自然淡妆、红棕色头发、齐平刘海、两侧长鬓角修饰脸型。表情温柔礼貌、略带羞涩、安静成熟，如一位可靠超市收银员带着温暖的客服微笑。场景为白天日本超市收银区，她站在收银台后或旁，面朝镜头，礼貌微笑，背景为虚化的商品货架、收银台细节与干净超市光照。服装为日式超市员工制服——深红头巾覆盖后发但露出齐刘海与红色鬓角、浅绿或米色条纹短袖工装衬衫、深红围裙、黑色微喇工装裤，胸前或围裙上别一枚小型长方形员工姓名牌，上书可读日文「山田」，名牌须真实、小巧、清晰，为画面中唯一可读文字。风格：写实日剧剧照、3:4 竖版肖像、半身或四分之三身、自然室内荧光灯、浅景深、写实低饱和色彩、自然肤质、35mm 镜头感、高细节。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ad-creative_case186",
    "title": "奢表光束质感产品图",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/meng_dagg695/status/2065078841765458040",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ad-creative_case186/output.jpg",
    "imageAlt": "奢表光束质感产品图示例图",
    "prompt": "一只奢华腕表从黑暗中浮现。跳动的齿轮与运转的指针的极致微距镜头。金色火花与漂浮粒子环绕腕表。镜头环绕时计旋转，戏剧性光束在蓝宝石镜面上反射。慢动作水花在腕表周围凝固于半空。机械组件自动组装。电影感黑金环境、高端商业光照、超写实反射、奢华生活方式广告、磅礴管弦乐氛围、流畅镜头运动、产品主视觉镜头、品牌揭示、好莱坞级商业片、8K 超写实。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case299",
    "title": "云端梦幻面孔肖像",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2065073375463325883",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case299/output.jpg",
    "imageAlt": "云端梦幻面孔肖像示例图",
    "prompt": "将【人物】重新演绎为一张梦幻云朵肖像，保持其面部、表情与标志性特征清晰可辨，同时将形态转化为柔软翻涌的云朵，背景为明亮蓝天。肖像应呈现为面孔正从云中浮现或融入云中，柔和漫射自然光投射柔和高光与通透阴影以营造纵深与真实感。避免锐利边缘、可见肤质纹理或硬细节，保持过渡象征性而有机。通过云朵结构保留面部比例、眼睛、微笑与标志性特征。风格：梦幻、空灵、电影感、超现实；光照：体积阳光、柔光、自然；配色：天蓝、白色、柔和渐变；氛围：宁静、昂扬、平和。在面部周围与内部自然叠层云朵以实现平滑无缝过渡，背景为干净蓝天配柔和渐变云。超真实云朵纹理、高分辨率、无缝融合、无水印、无文字。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ecommerce_case172",
    "title": "浪漫手机情侣场景产品图",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/hmontilla_/status/2065072437398589669",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ecommerce_case172/output.jpg",
    "imageAlt": "浪漫手机情侣场景产品图示例图",
    "prompt": "创作一个温馨的电影感浪漫场景：两部黑色智能手机竖立于质朴木桌上，并排而立，微微向内倾斜，各自显示视频通话画面。左侧手机屏幕中为一位微笑的年轻女性，棕色长发、浅肤色，身穿奶白色针织毛衣与米色冬帽带毛球，温暖地望向另一部手机，同时抬手比出半个心形。右侧屏幕中为一位微笑的年轻男性，浅肤色、轻胡茬，戴灰色冬帽与带羊毛领的牛仔夹克，望向女性，抬手比出另一半心形。两个屏幕中的手在两部手机之间的中央视觉交汇，形成完整心形，象征异地恋与连接。场景设定于黄金时刻的温暖室内，背景为大而柔和虚化的窗户、盆栽、温馨马克杯、柔软针织物、漂浮尘埃与温暖电影感散景光。浅景深、真实玻璃反射、柔和轮廓光、温暖琥珀高光与自然木桌纹理。每部手机屏幕含最简视频通话界面元素——小型摄像头图标、绿色通话按钮、麦克风图标与白色主页指示条，界面须干净现代而真实。风格：超写实电影感数码艺术、高端生活方式摄影美学、温馨冬日浪漫氛围、温暖黄金时刻阳光、柔和大气雾、真实肤质、真实针织面料、精细手机反射、优雅构图、手机与面部锐利对焦、梦幻浪漫散景、高端编辑视觉品质，1:1 正方形构图。避免手部变形、多余手指、解剖错误、重复肢体、反射失真、面部模糊、构图杂乱、界面不可读、假光照、硬阴影、低分辨率、高光过曝、手机扭曲、文字错误、塑料肤质、不自然表情。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case300",
    "title": "保脸超写实人像",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Rainlanded/status/2065071103316484451",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case300/output.jpg",
    "imageAlt": "保脸超写实人像示例图",
    "prompt": "创作一张保脸超写实人像，严格保留参考图的面部特征与身份。以高端时装摄影质感呈现，自然光照、真实肤质、锐利对焦、电影感调色，避免低质量、模糊、面部扭曲、解剖错误、多余肢体、僵硬姿势、不自然自拍角度、过曝肤质、硬闪光、塑料肤质、过亮色彩、廉价面料、杂乱背景、卡通风格、夸张美颜滤镜、不自然眼睛、假发、手部错误、别扭手臂与噪点。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case391",
    "title": "皮克斯3D烤肉师傅分镜海报",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/TechieBySA/status/2065069836045033908",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case391/output.jpg",
    "imageAlt": "皮克斯3D烤肉师傅分镜海报示例图",
    "prompt": "为烤肉师傅创作一张干净利落的信息图分镜海报。宽 16:9 版式，白底黑框，粗黑字体，高端三维风格化渲染，明亮鲜艳的色彩——深焦糖肉棕、鲜红番茄、翠绿生菜、白色蒜酱、金黄温热薄饼与温暖街光。顶部页眉：标题、总时长十二秒、八镜头、图例图标含动作、热度、时间提示与食材。全程使用同一位三维风格的中年土耳其男性烤肉师傅——浓黑胡须、白色T恤、红白条纹围裙、小型街头烤肉摊、身后旋转发光的竖直烤肉柱、温暖金色光照、繁忙土耳其街道与背景中柔和可见的古塔。八面板：面板一开场全景——师傅站在摊后，繁忙街道，温暖午后光，旋转烤肉柱闪光，双手拍柜台对镜头咧嘴笑；面板二面包特写——双手掰开温热薄饼，蒸汽升起，柔软内里展现，金黄面包捕捉午后光；面板三烤肉柱戏剧特写——竖直烤肉柱充满画框，层叠腌制肉缓慢旋转，外层深焦糖化闪光，后方加热元件橙色发光，蒸汽升腾；面板四削肉入饼——英雄工艺镜头，师傅一手持打开的薄饼置于烤肉柱正下方，另一手持长刀以自信的下削动作削下薄肉片落入饼中，肉、刀、饼与烤肉柱同框，系列中最具动感的一帧；面板五香料特写——手将深红盐肤木粉慷慨撒于削好的肉上，鲜红粉末在温暖午后光中飘落，深红映衬深棕；面板六淋酱——厚白蒜酱以丰沛弧线浇于馅料之上，再以之字形鲜红辣酱点缀，白红映衬深棕肉；面板七卷饼——双手快速紧紧卷起薄饼，馅料微微从两端鼓出，底部以锡纸包裹，一个自信拧转，完成；面板八咬下——温暖全景，顾客站在街头咬下卷好的烤肉，馅料可见、酱汁沾唇、双眼闭合于纯粹的街头美食满足中，师傅在摊后双臂交叉观看，深以为傲，身后街道与古塔温暖发光。页脚：视频流程八镜头约一点五秒共十二秒，从烤肉柱到第一口；镜头提示——开场广角、掰饼蒸汽特写、烤肉柱戏剧特写、削肉入饼中宽英雄镜头、盐肤木极致特写、淋酱特写英雄镜头、卷饼戏剧特写、街头咬下温暖广角；光照与风格——温暖午后光、深焦糖肉棕、鲜红盐肤木、白蒜酱、红辣酱、金黄薄饼。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case392",
    "title": "BMX骑手街头混搭拼贴",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/omnitrix204/status/2065069786753872120",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case392/output.jpg",
    "imageAlt": "BMX骑手街头混搭拼贴示例图",
    "prompt": "一张极具创意的街头风拼贴海报，主角为一位纹身小轮车骑手与都市生活方式运动员。多张剪贴照片以层叠混媒构图排列。中央为一张背对镜头的大幅肖像，身穿oversized黑色图案T恤与帽子。第二张肖像面朝镜头，掀起上衣遮住部分脸庞，露出锐利眼神与纹身手臂。前景为一张动态小轮车特技动作照。撕边纸张、破损海报纹理、杂志剪贴、手写签名、贴纸、邮戳、都市符号、建筑摄影与层叠图形元素共同营造高端街头文化美学。以黑白摄影为主，点缀电光蓝。揉皱纸张背景纹理、复印件效果、编辑级字体、做旧印刷细节、都市滑板与小轮车文化影响。当代街头广告活动、小志风版式、高级平面设计、生猛地下能量。高细节拼贴艺术、高端海报构图、单色摄影、撕纸效果、街头品牌美学、时装编辑设计、现代青年文化视觉、8K 分辨率。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case301",
    "title": "锐利数字肖像插画",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/JamilAI55/status/2065060797861023948",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case301/output.jpg",
    "imageAlt": "锐利数字肖像插画示例图",
    "prompt": "超精细数码肖像插画，一位自信的年轻男性，锐利五官与深邃黑眸，直视镜头。手遮住下半张脸，营造神秘而有力的表情。时尚蓬松黑发，深红衬衫外搭于黑色T恤之上，黑色护腕与精致金链。戏剧性红色轮廓光勾勒头发、面部、肩膀与服装轮廓，映衬纯黑背景。高对比电影光照、暗调情绪氛围、大胆阴影、漫画与图像小说风格、半写实数码绘画、超锐利细节、肌理笔触、现代男性美学、居中构图、肖像裁切、4K 画质、红色与黑色配色、有力凝视、前卫时髦角色设计。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-character_case21",
    "title": "3D杂技跳跃讽刺漫画",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2065058228585844954",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/character_case21/output.jpg",
    "imageAlt": "3D杂技跳跃讽刺漫画示例图",
    "prompt": "一张完整的三维插画，编辑级夸张漫画风格，单张独立图像，非分镜或多面板布局。中心角色：一个卡通人物，小头、圆润微胖躯干、超长四肢、大手与笨重鞋履，略失衡，定格于跳跃中途的戏剧性姿势，充满张力与俏皮能量。剪影如软玩具雕塑——丰满、弹力、夸张，解剖不写实。表面质感：哑光橡胶、绒面织物、针织细节、黏土感、微妙纤维颗粒、手作纹理，避免光泽塑料、透明玻璃或高光反射。色彩：鲜艳多巴胺配色，高饱和、强对比、大胆平涂，鲜艳但不过曝霓虹。背景：纯白、极简布景，仅人物下方一个柔和椭圆投影，无复杂环境。环绕人物的装饰性漂浮元素：星星、波浪线、球体、立方体、图标与抽象造型——均为柔软橡胶或纸感三维道具，放大动感与图形能量。光照：柔和影棚布光、全局光照、漫射阴影、低对比、精致商业感。以三维软件渲染，风格化软雕塑美学、哑光黏土质感、针织面料表面、俏皮编辑调性、高分辨率。场景：一位粉彩色调的杂技演员双臂高举做胜利腾空跳跃，脚穿笨重多彩运动鞋。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case393",
    "title": "奢感历史文明策略卡",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Gdgtify/status/2065057210426900515",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case393/output.jpg",
    "imageAlt": "奢感历史文明策略卡示例图",
    "prompt": "将输入渲染为一张奢华历史文明地层剖面海报。不要硬编码年代除非不可避免。推断领土扩张阶段、经济基础支柱、军事创新周期、文化同化模式与衰落的地质层。语义求解：帝国解剖等于领土建筑推断（奠基核心加扩张方向加边境防御加贸易路线控制加附庸网络，权重五）、经济支柱推断（农业基础加矿产资源加税制加货币标准加劳动组织，权重四）、军事创新推断（武器技术加战术条令加后勤链加防御工程加海军能力，权重四）、衰落机制推断（继承危机加经济通胀加边境压力加内部叛乱加环境压力，权重三），减去通用时间线信息图加卡通地图加杂乱教科书版式加图库照片废墟加廉价教育海报，权重负四。构图：以一个帝国为中心，可视化为多层考古剖面。底层显示奠基聚落，中层通过彩色地层揭示领土扩张，顶层展示碎裂模式。核心周围漂浮标注展示关键战役、经济指标与王朝更替，映射为物理文物。使用考古发掘报告与军事战役地图交叉的标注线。风格基因：古罗马地图百分之三十、考古地层图百分之二十五、复古军事战役图百分之二十、博物馆展品信息图百分之十五、带污渍纹理的仿古羊皮纸百分之十。输出：温暖棕褐或深赤陶背景的奢华历史海报、优雅古典衬线加手写批注字体、克制标注、超写实地图纹理、精致做旧效果、高端留白。禁止全息图、发光元素、虚拟现实叠加、现代数字地图、卡通插画、杂乱时间线、图库照片帝王、水印与年代错乱元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case302",
    "title": "巴黎路灯倚靠感全身照",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/CHAseUnre/status/2065240920283398353",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case302/output.jpg",
    "imageAlt": "巴黎路灯倚靠感全身照示例图",
    "prompt": "参考人物图像。全身姿势：身体斜倚在巴黎街头路牌柱上站立，头部微向左倾，闭眼，嘴唇微嘟，呈现慵懒感性的表情。左手轻握外带咖啡杯。背景为巴黎街景氛围，阴天自然光。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-comparison_case104",
    "title": "四种建筑风格2×2网格",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Gdgtify/status/2065191846800740636",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/comparison_case104/output.jpg",
    "imageAlt": "四种建筑风格2×2网格示例图",
    "prompt": "二乘二网格，为四种著名建筑风格各做一面板。锚点：【建筑风格】加【几何精髓与年代】。每面板展示该风格的代表性建筑，相机角度一致，背景为中性天空。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-character_case22",
    "title": "雨中灵姬东方幻想 3D CG 角色",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/liyue_ai/status/2065107695557075460",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/character_case22/output.jpg",
    "imageAlt": "雨中灵姬东方幻想 3D CG 角色示例图",
    "prompt": "9:16 竖版，高精度三维东方幻想女性角色写真，镜头为大腿及上半身构图。画面主体是一位明确成年的年轻东方幻想系女性，视觉年龄约二十至二十六岁，整体气质清冷、空灵、精致、安静，带有雨中水系精灵般的神秘感与高级感。整体为高完成度三维角色渲染，具有精致建模、真实材质、电影级冷调柔光与高级虚拟角色海报质感。人物拥有精致的东方美型脸，小巧流畅的鹅蛋脸，皮肤冷白细腻，带轻微通透感与柔和皮肤着色，肌肤表面有细腻水珠与湿润反光。眼睛细长清澈，瞳色为冰蓝绿调，瞳孔有通透玻璃感与细致高光，眼神微垂，安静、疏离、略带脆弱感。睫毛纤长，眼妆干净克制，鼻梁秀气挺直，嘴唇柔软，唇色为低饱和裸粉，唇微启，神情冷静而迷人。发型为短款蓝黑色渐变发，主色为浓黑与深海军蓝，发尾带冷调蓝色高光，短层次波浪感短发，一侧额发自然垂落遮住部分脸颊，顶部带编发结构，发丝湿润、轻盈、细腻，具有高精度发丝建模与柔顺光泽。耳部佩戴精致蓝色水晶几何耳饰与金属耳骨夹，颈部佩戴白色高领装饰项圈与青蓝色宝石流苏细节。服装为精致的东方幻想水系礼装，上半身为白色轻薄湿润感缎面贴身长裙，布料柔软垂坠，带细腻高光与微透感，外层披一件宽松白色衬衫式轻纱外搭，自然滑落至手臂与腰侧，形成层叠褶皱与飘逸感，腰臀处可见黑色蕾丝边短裤细节作为轻哥特点缀，整体保持高级、克制。人物姿势为优雅侧身站立，身体呈流畅 S 型曲线，肩颈舒展，头部微微低垂侧转，视线向下，整体姿态安静轻盈克制，手臂自然下垂，手指修长，姿态如雨中静立的瞬间。背景为精致的东方幻想水境场景，冷白、冰蓝、淡灰为主色调，朦胧雨幕、轻雾与若隐若现的东方幻想建筑轮廓，可融入远处模糊的亭台、石阶、水池或空灵宫殿轮廓。人物周围有动态水花、水流弧线与透明水晶般飞溅效果，背景适度虚化。光线采用冷白主光与柔和逆光结合，雨天高调低饱和电影感打光，面部、锁骨、肩背、手臂与腿部有细腻湿润高光，发丝与水花边缘有轻微轮廓光。白色布料、蕾丝、金属、宝石、水珠与水花均具有真实材质反馈。整体干净、通透、冷艳、梦幻，高端收藏级三维东方幻想角色海报质感。高细节三维渲染、虚幻引擎品质、电影光照、基于物理的材质、次表面散射肤质、真实湿发丝、半透明湿润面料、水晶水花效果、精致蕾丝细节、优雅东方幻想造型、水系精灵氛围、体积光、电影景深、柔和泛光、超精细、精致半写实动画风、高级虚拟角色肖像。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ad-creative_case187",
    "title": "可口可乐百事雪碧品牌 KV 对比",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/liyue_ai/status/2065039304175538382",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ad-creative_case187/output.jpg",
    "imageAlt": "可口可乐百事雪碧品牌 KV 对比示例图",
    "prompt": "品牌 KV 海报系列。使用统一提示词框架，针对不同饮料品牌调整视觉情绪色彩：可口可乐 → 热烈红色聚会感；百事可乐 → 年轻蓝色潮流感；雪碧 → 清爽绿色柠檬感。同一结构展现不同品牌 DNA。3 张对比输出。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case303",
    "title": "深夜调酒师暗红酒吧封面写真",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/liyue_ai/status/2064965712406556931",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case303/output.jpg",
    "imageAlt": "深夜调酒师暗红酒吧封面写真示例图",
    "prompt": "深夜调酒师人物摄影：高级酒吧场景、暗红灯光、玻璃酒杯反光 + 黑衬衫、深酒红马甲、袖箍建立人物身份感 + 调酒动作、抬眼看镜头、金色边缘光建立封面气场。危险但克制的气质，深夜暗红酒吧封面风。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case394",
    "title": "Sony A7 分解结构图",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2066085004116193571",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case394/output.jpg",
    "imageAlt": "Sony A7 分解结构图示例图",
    "prompt": "索尼 A7 无反相机的精细分解视图图，所有内部组件分离并清晰可见，每个部件标注名称。技术产品插画风格，干净白色背景，精确而信息丰富的版式。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case395",
    "title": "仿生机械器官产品渲染",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2066069842407416126",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case395/output.jpg",
    "imageAlt": "仿生机械器官产品渲染示例图",
    "prompt": "超写实三维人体【器官】，由半透明白色磨砂聚碳酸酯制成，带奶白色哑光表面以柔和漫射光线。具有工业注塑细节、微妙微观纹理与带精密制造接缝的圆角边缘。内部以机械组件替代有机组织——透过半透明外壳可见微型齿轮、活塞、电路与工程腔室，呈现柔和模糊。表面微妙嵌入一枚极简白色品牌标志，低调而不夺主。漫射影棚光照、真实塑料光折射、下方柔和阴影、居中构图、纯白背景、超精细未来生物机械渲染、1:1 比例。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case396",
    "title": "太阳风暴 WPA 海报",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/92digitalartArt/status/2066062156441735187",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case396/output.jpg",
    "imageAlt": "太阳风暴 WPA 海报示例图",
    "prompt": "一张一九三〇年代 WPA 旅行海报风格的信息图海报，16:9 横版，主题为太阳天气与太空风暴。设计须完全呈现为新政时期的复古国家公园海报，平涂水粉风格填色、粗黑轮廓、戏剧性透视、零写实。背景自顶部深黑太空过渡至底部发光的青绿色极光天空，以 WPA 传统的大胆色带分割。中心插画左上为太阳，呈现为巨型戏剧性圆盘，带风格化的平涂橙黄火焰日冕向外辐射，一道大型日冕物质抛射弧对角扫向右上方的地球——地球以简化蓝色球体带薄大气环呈现。画面中部，太阳风以温暖金色的粗平行线流过太阳与地球之间，当这些线击中大气时绽放为壮观的北极光，以青、绿、紫的平涂帘幕 WPA 图形传统呈现。主插画下方一条干净水平条带将构图分为三个标注科学面板——太阳耀斑、日冕物质抛射与北极光，各含极简单色图标与两行有力科普文字。顶部标题以巨型 WPA 板状衬线字体呈现，副标题意为「太空的暴烈天气」。全套配色严格限定五种平涂色——黑、深奶油、焦橙、青与紫，赋予整件作品一九三〇年代政府艺术印刷品标志性的图形冲击力与大众乐观主义，高质量，比例 16:9。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case397",
    "title": "高级汽车规格海报",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2066055530012111310",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case397/output.jpg",
    "imageAlt": "高级汽车规格海报示例图",
    "prompt": "为【汽车型号】生成一张惊艳的高端汽车海报。将车辆置于大胆的四分之三侧角作为主导中心，视觉抢眼并完全占据注意力。以激进姿态、完美比例、奢华轮毂、独特头灯、空气动力学车身、尾翼、性能细节与高端设计线索捕捉汽车的完整精髓。叠加清晰高端字体，含品牌名、型号、性能参数、马力、零到百加速时间、极速、发动机详情与标志性里程碑，无缝融入版式。融入取自汽车历史的微妙背景纹样——幽灵蓝图线、赛车传承、剪影叠层、传奇赛道、机械图解、速度图形与收藏印刷品氛围。运用大胆视觉对比、鲜艳高端色调（避免深色或黑色为主的背景）、电影光照、锐利反射、光泽车漆、奢华杂志品质、利落平面设计与令人驻足的海报能量。精致构图、顶级汽车广告美学、收藏海报感、超精细、视觉震撼、高端杰作。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-character_case23",
    "title": "超现实卡通肖像模板",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Goodmanprotocol/status/2066048157805629937",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/character_case23/output.jpg",
    "imageAlt": "超现实卡通肖像模板示例图",
    "prompt": "竖版怪诞扁平卡通肖像，以附图中的【主体】为基础。高几何感头型、修长窄颈、硕大圆眼、小嘴与从容不迫的笑容，身着照片中的【衣物】，头顶坐着一只【物件或生物】如活帽子。纯黑轮廓、平滑填色、简练面部造型、动物皮毛或皮肤上稀有纹路、俏皮超现实角色设计、大胆图形化配色。背景装饰取自场景的【环境装饰】，以简化造型、清晰层次、少量环境景物与清晰卡通透视呈现。清晰数码插画、海报式竖构图、无写实、无三维渲染、无风景画式阴影，比例 4:5。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case398",
    "title": "多巴胺 3D 城市海报",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2066039955177234472",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case398/output.jpg",
    "imageAlt": "多巴胺 3D 城市海报示例图",
    "prompt": "顶级互联网营销视觉设计，设计平台灵感的三维插画海报美学，三维渲染风格、柔光处理、鲜艳高饱和色彩、多巴胺驱动配色、抽象艺术、干净极简背景、清新活泼感、青春能量、精致而繁复。主题：都市游牧计划。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case400",
    "title": "大片级动作电影镜头",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2066009564018082289",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case400/output.jpg",
    "imageAlt": "大片级动作电影镜头示例图",
    "prompt": "电影感超写实动作场景，发生在雨中的 downtown 街道峡谷。一位三十多岁的黑发男子朝镜头冲刺，湿透的深色夹克与长裤，跨步中途，表情紧张求生。他身后一场巨型城市爆炸撕裂一栋高楼——火焰、浓烟、碎混凝土、玻璃与金属碎片向外爆射。画面中恰好可见三辆受损车辆：左前景一辆深色轿车引擎盖褶皱、溅起雨水，右中景一辆损毁的深色车，右侧一辆翻倒的黑色越野车倾斜翘起。湿沥青反射车灯与火光。密集碎片凝固于半空。阴沉暴风日光、去饱和的蓝灰配色配橙色火焰点缀，飞溅碎片带运动模糊但跑步者锐利对焦。低角度广角镜头构图、超精细灾难大片写实、体积烟雾、雨雾飞溅、电影光照、高对比。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-comparison_case105",
    "title": "硬币金额编辑测试",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2065994787094983151",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/comparison_case105/output.jpg",
    "imageAlt": "硬币金额编辑测试示例图",
    "prompt": "修改这张照片使总额为 244.5 泰铢。调整每叠硬币的数量直至合计值达到目标。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ui_case183",
    "title": "早期互联网作品集页面",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Kashberg_0/status/2065992579502747850",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case183/output.jpg",
    "imageAlt": "早期互联网作品集页面示例图",
    "prompt": "设计一张极简的早期互联网个人主页与作品集落地页，大尺寸白色画布配充足留白与细粉彩色浏览器式边框。中央放置【主体】的黑白编辑肖像，带柔和胶片颗粒、微妙扫描仪纹理与低对比摄影色调。围绕肖像散布个人档案标签与小星号元素，不对称排列，如俏皮的个人简历。含标签如：创作者、模特、造型师、打碟人、女孩、摄影师、收藏家、梦想家。左上角创作一个彩色手绘标志或个人品牌标记，其下添加极小时间戳与日期的小系统字体，模仿旧式个人主页。右上角放置不规则贴纸式导航标签，使用明亮点缀色（粉、青、紫、黄、绿），简单标签如首页、关于、作品、日记、链接。在空白处散布手写马克笔式笔记、自我介绍、个人想法与生活方式文案，如「目前在网上做东西」「欢迎来到我的主页」「音乐、时尚、互联网」「今日更新」「生活在项目之间」。保持反网格编辑版式，间距刻意不完美、放置俏皮。混合微型系统字体、手写体与随性笔记本式批注。肖像保持完全单色，色彩仅用于标志、导航贴纸与少数小图形点缀。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case401",
    "title": "编辑风墨线插画模板",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Naiknelofar788/status/2065973105823281314",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case401/output.jpg",
    "imageAlt": "编辑风墨线插画模板示例图",
    "prompt": "电影感编辑级墨线插画，【人物】位于【场景】中，回头望肩，比例写实，风吹发丝与锐利自信凝视，身着【服装】。松散富有表现力的黑色墨线、可见的草图结构线、高对比阴影、阳光轮廓光、做旧纸张纹理、墨点飞溅、破损印刷痕迹、写实公路片环境，限定三色配色，当代时装海报插画，比例 4:5。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ad-creative_case188",
    "title": "奢华运动鞋编辑网格",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2065964253505585436",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ad-creative_case188/output.jpg",
    "imageAlt": "奢华运动鞋编辑网格示例图",
    "prompt": "奢华皮革运动鞋活动，高级时装编辑、前卫美学，比例 3:4。材质：全粒面小牛皮、压花帆布、抛光金色五金。配色：干棕、深黑、香槟金。光照：高对比明暗法配柔光箱主光。九宫格编辑网格：第一行传承——英雄侧面轮廓：运动鞋置于复古旅行箱上，侧光展现皮革纹理；极致微距特写：金色鞋带孔与精密缝线细节；动态镜头：金粉粒子环绕鞋底旋转入场。第二行创新——极简：运动鞋平衡于抽象悬浮玻璃雕塑之上；悬浮解构视图：鞋底与鞋面悬浮于虚空；感官：戴手套的手调整鞋舌，突显皮革柔软。第三行超现实——单色场景配液态丝绸帷幔；抽象：橡胶鞋底纹样重塑为几何沙漠景观；融合：运动鞋行走在镜面般平静的湖面上倒映巴黎日落天际。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ad-creative_case189",
    "title": "无线耳机生活方式广告",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2065753093283991651",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ad-creative_case189/output.jpg",
    "imageAlt": "无线耳机生活方式广告示例图",
    "prompt": "为一款真无线耳机设计一张 9:16 竖版产品信息图，具高端生活方式广告感。构图与取景：年轻女性全身照，面部、肤色与发型严格匹配参考图；略低相机角度靠近主体，时装广告风格，营造纵深与视觉存在感；她随性地坐在地上，一膝抬起、一腿伸向镜头。前景产品：她向观众手持打开的耳机充电盒，盒中可见一只耳机，另一只在她耳中，充电盒为光泽白色带品牌标识，手与充电盒带轻微微距散景模糊以营造电影感纵深。穿搭风格：现代运动休闲街头风，米白或中性轻薄夹克、短上衣或运动背心、柔粉色慢跑裤、纹理白色运动鞋；表情自信放松、微笑；姿态自然生活方式驱动而非摆拍。背景：柔和灰色渐变影棚背景、彩虹棱镜镜头光斑与微妙漏光、背景中漂浮模糊的耳机与充电盒、脚下可见影棚地板纹理。光照：漫射商业影棚光照强调肤质、光泽充电盒与面料细节，柔和轮廓光将主体与背景分离。文字叠层（现代无衬线、白色）：顶部中央大号粗体品牌名部分位于主体之后；右上产品名与真无线标签；左中文案意为「澎湃音质／从容氛围／为你的每一拍而造」；右中参数意为「30 小时续航、IPX5 防水」；右下保修信息。质量：8K 超写实商业摄影，面部与耳机锐利、前景与背景柔和景深，干净的高端品牌广告美学，强留白。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case402",
    "title": "等距地标微缩场景",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2065737739589615987",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case402/output.jpg",
    "imageAlt": "等距地标微缩场景示例图",
    "prompt": "以 45 度俯视等距视角生成【国家名】标志性【著名建筑】地标的等距微缩三维立体模型。使用干净柔和纹理与真实基于物理的材质，均衡自然光照。抬升基座含周边街道、景观元素与该建筑独特的文化细节，包括带面部细节的微型风格化本地人与游客人偶。背景设为纯【背景色】。顶部中央以粗体显示【国家名】，下一行为【建筑名】，下方放一个极简建筑图标，文字颜色调整以确保对比。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ad-creative_case190",
    "title": "Kinder Joy 吊椅场景",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2066312771978092587",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ad-creative_case190/output.jpg",
    "imageAlt": "Kinder Joy 吊椅场景示例图",
    "prompt": "超写实 8K 中景照片配浅景深，超现实室内场景配电影光照。一位正常身材的女性盘腿坐在一个巨大的、细节丰富的巧克力蛋中——蛋被改造成吊椅，蛋壳裂开，白色内层构成座椅，橙色纹理外壳可见，以深色金属链悬挂于弯曲金属支架。她穿黑色T恤与蓝白格子睡裤，双手捧一只小白茶杯，平静放松地直视观众，面部使用上传照片作为参考。左前景抛光木桌上放着另一颗巨大的完整包装巧克力蛋，带精细锡箔纹理与品牌细节。吊椅右侧有一台复古风木质收音机配白色旋钮，以及一盆小型盆景。左侧柔和温暖定向光投下微妙阴影，突显蛋包装纹理、衣物与木面。背景为柔和虚化的暖调室内墙面配悦人散景。标准镜头、中等高度拍摄。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case304",
    "title": "针毡羊毛微缩人偶",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2066206049464660301",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case304/output.jpg",
    "imageAlt": "针毡羊毛微缩人偶示例图",
    "prompt": "将主体转化为一只手工针毡羊毛微缩人偶。材质：有机原色羊毛带可见针刺纹理、柔软绒毛表面与手工缝线痕迹，眼睛为微型黑色珠眼或简单毡制圆点。风格规则：头部略大、四肢简化、可爱迷人美学。保留原图色彩但以羊毛纹理柔化，服装变为原图的简化毡版配微型布扣与缝线细节，配饰重现为微型毡制道具。相机：微距摄影、近景特写。柔和影棚光照配温暖高光与轻柔阴影。干净失焦散景背景、中性手作工坊场景。浅景深 f/2.8，高保真、8K 分辨率、超写实羊毛纹理、皮克斯式角色魅力。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ad-creative_case191",
    "title": "隐形护盾防晒广告",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamrealsnow/status/2066200217347854445",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ad-creative_case191/output.jpg",
    "imageAlt": "隐形护盾防晒广告示例图",
    "prompt": "防晒广告——「隐形护盾」。奢华护肤广告杰作，一只巨型高端防晒霜瓶立于黄金时刻的原始热带海岸线上，强大阳光光束自天空倾泻而下，在接触防晒霜散发的透明保护能量穹顶时分裂开来，数百万闪耀的紫外线粒子在触及无瑕肌肤前溶解为金粉，清澈海洋倒影、悬浮于产品周围空中的流水、微观水滴捕捉电影感阳光，超写实纹理展现瓶身每一处细节，奢华美妆广告美学，戏剧性体积光照、发光大气雾、高端白金配色、未来感防护技术可视化为优雅光波，超精细环境、商业摄影完美、获奖广告设计、超写实渲染、16K 超分辨率、全球护肤品牌活动、杰作品质。文字叠层：防晒霜。标语：「守护每一缕光，绽放每一分彩。」",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case403",
    "title": "发条微缩世界",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Gdgtify/status/2066192943887630372",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case403/output.jpg",
    "imageAlt": "发条微缩世界示例图",
    "prompt": "创作一个迷人而极致精炼的场景，以【发条玩具或机械微缩世界】为中心，一个微型的自足世界由可见的发条钥匙与内部弹簧系统驱动。玩具须包含微型建筑、人物、移动布景、旋转招牌、微型升降梯、摆动部件与小型叙事瞬间，全部由一个中央机制激活。微世界分区：【主场景】、【次场景】、【移动道具】、【角色动作】与【隐藏细节或彩蛋】。周围特写可揭示钥匙、弹簧腔、凸轮与隐藏联动装置。视觉风格：日式扭蛋魔力邂逅奢华微缩电影感邂逅高端收藏品产品摄影。奇思妙想、精巧、情感上不可抗拒。构图指引：玩具保持为英雄，但观者应被邀请窥探其微型世界，在可爱与高工艺之间取得平衡，使机制足够可见以引发好奇。光照与背景：柔和影棚光照配戏剧性微阴影，根据【氛围】选择高端粉彩、漆面或深色天鹅绒背景，超精细微缩写实、无水印。变量：【发条玩具或机械微缩世界】、【主场景】、【次场景】、【移动道具】、【角色动作】、【隐藏细节或彩蛋】、【氛围】。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ad-creative_case192",
    "title": "隐藏 Logo 地景幻象",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2066191259354689714",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ad-creative_case192/output.jpg",
    "imageAlt": "隐藏 Logo 地景幻象示例图",
    "prompt": "创作一张潜意识广告风景摄影，一个可辨认的品牌标志（如苹果标志、耐克勾或蝙蝠标志）被秘密嵌入令人屏息的自然环境（如雪山、密林、沙丘或海岸线）。标志须完全由地形的物理地理构成，而非数字叠层。标志主体呈现为雕刻虚空（深谷、崖边或地形中的锐利色差对比），任何断开的元素（如苹果叶）则以悬浮的岩石与泥土岛屿漂浮于上方雾蒙蒙的天空中。相机：宽广航拍无人机镜头，景观广阔雄伟。氛围：戏剧性而情绪化——厚重翻涌的云层、山谷间翻滚的薄雾、云隙间迸射的晨昏光束，勾勒出隐藏的剪影。视觉规则：乍看之下须百分之百像真实自然照片，品牌标志仅在第二眼时作为视错觉浮现。边缘须略带锯齿与有机感，由真实的悬崖面与林线塑造——绝非完美矢量造型。光照：深影山谷（密林）与明亮积雪或阳光高光之间高对比，太阳部分隐藏于云层或悬浮地块之后，为整场逆光。氛围：电影感、雄伟、微妙超现实。输出：1:1 正方形、超写实、国家地理航拍摄影美学。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case404",
    "title": "沙丘上空的水母之城",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/92digitalartArt/status/2066176419038683562",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case404/output.jpg",
    "imageAlt": "沙丘上空的水母之城示例图",
    "prompt": "沙丘上空的水母之城。在一颗热到无法居住的沙漠星球上，整座城市漂浮在沙丘之上方——由巨大的水母构成，它们在天空中编织出自己的建筑。柔和的太阳朋克异星氛围，无恐怖。提示词：异星沙漠行星上的宁静日景，宽广电影镜头，一座由巨大半透明水母生物构成的漂浮城市在无尽沙丘上方缓缓漂移。每只水母约房屋大小，球茎状半透明圆顶内充满淡绿松石色气体，长长垂落的触须编织成悬浮走道、平台与吊床般的膜结构，形成空中村落。珍珠母板片与甲壳肋骨沿其下方生长，构成骨架拱与开放式「房间」，闪烁着蛋白石光泽。数只水母松散地聚集成线，在沙地上投射柔和有机的阴影。地面商队的微小剪影——昆虫般载具与织物顶篷——穿行于沙丘中，明显被头顶的漂浮城市所矮化。远处生锈的锚塔与缆绳从沙中升起，暗示人类或异星尝试拴系这些活体建筑。配色为温暖沙米、淡绿松石、蒙尘珊瑚与柔白，正午阳光、微妙热雾与柔和镜头光晕。相机位于中等距离、略低角度，在一帧中同时捕捉水母城市与地面商队，35mm 镜头，宁静的太阳朋克氛围，绘画感而精细，无恐怖，异星沙漠宇宙的一帧。避免类人外星人、蓝皮肤人形、通用科幻城市、摩天楼、赛博朋克霓虹、黑暗恐怖、血腥、触手怪俗套、廉价科幻盔甲、枪械、战争场景、卡通、Q版、解剖错误、杂乱构图、过饱和色彩、厚重光晕、低细节、模糊、噪点、界面元素、可读文字、水印、标志、塑料玩具感、真实地球沙漠动物、地球建筑、太空船狗斗。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ui_case184",
    "title": "彩铅照片转绘",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/AIwithSynthia/status/2066154697828782245",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case184/output.jpg",
    "imageAlt": "彩铅照片转绘示例图",
    "prompt": "将上传照片转化为一幅迷人的手绘彩色铅笔与蜡笔插画，同时保留人物的精确姿势、面部特征、服装、表情与背景构图。营造温暖、异想天开的速写本美学，带可见铅笔笔触、蜡笔纹理与柔和粉彩色彩。将插画版本作为全画幅主艺术品。在场景周围添加俏皮涂鸦，如心形、星星、花朵、云朵、闪光与可爱的手绘元素以呼应环境。使用纹理纸张作为画布背景，保持温馨、怀旧、绘本般的质感。右下角放置一个圆角矩形嵌入框，内含原始未编辑照片作为写实参考图，嵌入框应类似社交媒体帖子预览，带心形图标与互动数等微妙界面元素。确保插画版本在构图上与原图完美匹配，形成醒目的前后对比转化效果。高细节彩铅插画、蜡笔艺术风格、手绘纹理、鲜艳而柔和的粉彩调色板、社交媒体风格版式、异想天开涂鸦、高端艺术品、写实参考嵌入、杰作、超精细、4K。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case405",
    "title": "移轴城市地图旅行海报",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2066145999266128367",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case405/output.jpg",
    "imageAlt": "移轴城市地图旅行海报示例图",
    "prompt": "渲染一张超写实的移轴微缩场景，【城市名】中一辆【交通工具名】沿着一条高架道路蜿蜒前行，道路从一张复古插画城市地图上自然升起。道路扫向背景中的城市标志性天际线，交通工具作为前景主体。将真实城市景观与手绘地图无缝融合，使道路感觉自然嵌入地图。在地图前景以大号粗体字呈现城市名。运用温暖黄金时刻光照、浅景深、电影感阴影、 aerial 透视与超写实细节。最终观感：奢华旅行海报与微缩立体模型交融，比例 1:1。完整提示：创作一张高细节电影感微缩移轴旅行场景，【城市名】中一辆写实的【交通工具名】沿蜿蜒高架道路行驶，道路从印刷的复古风格城市地图上自然浮现。道路应戏剧性地弯向背景天际线与地标，交通工具保持前景清晰焦点。将真实城市与插画地图表面无缝融合，使道路看起来融入地图本身。包含与该城市相关的可辨认地标、水道、建筑、植被与氛围，但保持构图干净不杂乱。在地图前景直接印刷大号粗体城市名。使用温暖黄金时刻光照、浅景深、真实纹理、电影阴影、 aerial 透视与超写实细节，整体美学为高端社媒旅行海报与微缩立体模型交融，1:1。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ad-creative_case193",
    "title": "SPLASH 液态 Logo 时尚海报",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2065979523229975021",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ad-creative_case193/output.jpg",
    "imageAlt": "SPLASH 液态 Logo 时尚海报示例图",
    "prompt": "为品牌制作的超写实时装活动海报。一位女孩（严格匹配参考照片、同一张脸）自信地坐在一个光泽如水的三维品牌标志之上，标志周围环绕动态水花效果。编辑姿势：一腿放松、一腿弯曲。背景充满巨型粗体品牌名，部分位于她身后。小标语意为「定义你的风格」。服装：当代黑色街头风（西装外套、修身上衣、长裤、运动鞋）。光照：电影影棚布光配柔主光与轮廓光，液态标志上的光泽反射。风格：奢华时装广告美学，精致干净环境。85mm 镜头拍摄，浅景深，8K 分辨率，超精细，超写实。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case305",
    "title": "空气感日系窗边人像",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2066643592366727581",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case305/output.jpg",
    "imageAlt": "空气感日系窗边人像示例图",
    "prompt": "35mm 胶片照片，空气感日系美学，侧面柔和自然窗光，略微过曝，低饱和粉彩色，低对比，明亮柔和高光，宁静室内房间旁透明白纱窗帘，浅色墙面，自然平视构图自大腿中部以上，年轻东亚女性，几乎不可见的淡妆，平滑自然肤质，松散深色长发，oversized白色纽扣衬衫，休闲短裤，赤足，不费力的日常风格，放松站姿双臂轻垂身侧或微微向后，柔和望向镜头，平静安宁微笑，静谧与轻盈感，细腻胶片颗粒，温柔梦幻氛围，比例 9:16。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-character_case25",
    "title": "辉光档案官角色海报",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/92digitalartArt/status/2066558474650095890",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/character_case25/output.jpg",
    "imageAlt": "辉光档案官角色海报示例图",
    "prompt": "竖版 9:16 全身电影感肖像，单个异星角色——辉光档案官——站立于异星行星晨昏带的岩脊上。该生物拥有高挑修长的身躯，三条根状腿构成稳定三脚架，下躯干纹理如光滑树皮与肌腱融合；两条长臂各有四段分节关节，末端为多指卷须式操控器，轻柔地持有一块发光六边形板片；上躯干而非人类头部，向上展开为高大层叠半透明板片构成的竖向扇形冠冕，每片板片内部由微弱青色神经纹路点亮，无面、无眼、无口。沿其背部与肩部生长着坚硬的生物发光数据板——扁平六边形生物如藤壶般附着，以青色、蓝绿色与偶尔的暖琥珀色柔和脉动。身躯披覆部分有机披风，由纤维膜与甲壳丝构成，非衣物而是生长而成。背景为永恒黄昏天空，一侧地平线低矮橙色光带，对侧深靛蓝，远处为空心尖塔剪影与微小的其他档案官穿越风景。地面覆盖反光玻璃质地衣与小晶体，捕捉角色的辉光。配色为深靛蓝、蒙尘紫罗兰、青色辉光与微妙暖琥珀点缀。强地平线轮廓光勾勒档案官剪影，生物发光板片微妙背光，柔和大气雾。写实但略带绘画感的渲染，肤、板片与地衣纹理极尽精细。构图如高端科幻角色海报，竖版 9:16，全身入框，居中但留有足够头顶与地面空间以感受更大宇宙的一部分。避免类人外星人、人形面孔、眼鼻口下颌、蓝皮肤人形、精灵、盔甲套装、枪械、通用科幻士兵、动画风、卡通、Q版、赛博朋克城市、霓虹招牌、中世纪奇幻、翅膀、光环、天使、解剖错误、随机多余肢体、杂乱背景、过饱和色彩、强镜头畸变、鱼眼、低分辨率、模糊细节、噪点、界面元素、可读文字、水印、标志、现代地球衣物、运动鞋、牛仔裤、T恤。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case406",
    "title": "AI 音乐训练营活动海报",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2066538267835867647",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case406/output.jpg",
    "imageAlt": "AI 音乐训练营活动海报示例图",
    "prompt": "生成一张戏剧性的日系动画风活动宣传海报，竖版 4:5，超精细、电影感、霓虹光照、高对比，如精致的社交媒体公告。中右主体：一位美丽的动画女孩半身像，飘逸深蓝色长发随风飘扬配小星星发夹，身穿深色连帽卫衣，颈挂大型录音棚耳机，面部被矩形模糊柔和遮挡。背景：发光的日落至夜晚城市天际线，闪烁灯光、音乐能量粒子、镜头光斑与发光花瓣。配色：电光蓝、紫罗兰、洋红、金与日落橙。叠加清晰日文排版如专业活动广告，含八个文字组：左上标题意为「就此开始的是，与你共创的音乐物语」配副文案意为「用人工智能、大家一起创作音乐的特别三天」；右上发光走马灯意为「黄金周连休」配霓虹框意为「大家一起做最棒的音乐」；中央英文标题与大型日文标题意为「AI 音乐训练营 2」；中部巨型金色金属文字意为「举办决定」；日期条意为「举办期间」配具体日期；话题标签号召意为「参加很简单，发帖带话题即可」；鼓励语意为「初学者也大欢迎，一起做最棒的音乐体验」；底部三个功能说明配图标——一起学习结交伙伴、用AI创作新音乐体验、将心意化为形专属一曲。左边缘竖向胶片条四格展示女孩——舞台上演出、音乐制作桌前、对麦克歌唱、弹原声吉他。下方两个霓虹音乐图标——倾斜手机配音符（左下）、发光麦克风配音符（右下）。文字效果：光泽、发光、金白浮雕、标题周围能量条纹与火花爆发。氛围：鼓舞、庆祝、未来感、情感上扬——如日本黄金周高冲击力音乐活动广告。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ui_case185",
    "title": "吉祥物品牌识别设计表",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2066568983453880412",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case185/output.jpg",
    "imageAlt": "吉祥物品牌识别设计表示例图",
    "prompt": "十八区段完整品牌识别与吉祥物设计表。品牌名默认为示例茶饮店，主色黄、辅色绿、白、棕、深绿。主体为三维渲染可爱柴犬吉祥物穿绿色围裙。三列六行网格版式，十八区段依次为：一品牌基因分析——品牌标志、五色色卡、六个品牌图标、目标受众图表；二概念情绪板——五张参考照片、四个情绪图标、设计概念等式；三形态研究——四个标志解剖图标、四个设计演化步骤、四个角色剪影；四概念探索——十二张线稿角色概念草图；五精炼线稿——三行正面与侧面线稿配比例指引；六细节精修——两张全身渲染配标注标签、四个圆形特写；七表情表——十一个三维表情；八姿势库——九个全身三维姿势；九转身视图——五个多角度全身三维渲染配五个对应线稿；十色彩开发——五行五色配色选项与色彩心理学说明；十一材质规格——五个表面纹理色样、材质属性滑块、四个制造工艺图标；十二色彩应用——四个配色方案变体、明暗模式渲染、四个对比评级；十三构造指南——两张几何与网格系统线稿技术图；十四设计系统规则——最小尺寸图标、安全空间图、四个正误用法示例；十五资产变体——三个缩放尺寸变体、三个线稿风格变体、三个简化扁平图标头部；十六数字应用——应用图标设计、两个社媒头像版本、界面组件元素、三帧动画循环；十七实体应用——毛绒玩具产品样机、产品包装样机、品牌周边样机、零售店面样机；十八最终渲染——手持茶杯的大尺寸高分辨率三维吉祥物渲染、最终标志、交付文件格式清单。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ui_case186",
    "title": "建筑风产品目录页",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2066447564132745574",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case186/output.jpg",
    "imageAlt": "建筑风产品目录页示例图",
    "prompt": "创作一张竖版 3:4 产品设计目录页，温暖中性纸质背景。顶部生活方式英雄照：将产品（以附图为精确参考，保留其形态、比例、材质与身份不做重设计）居中放置，留白充足。场景为极简建筑室内，带纹理石膏墙与微妙混凝土石材地面，侧面自然阳光，柔和但投下高对比阴影。以编辑级生活方式摄影风格渲染，高写实，温暖低饱和调色。底部技术规格面板以干净模块化网格排列：左下与中央为正交建筑线稿，展示正面、侧面与四分之三剖面视图，线条为低饱和红或棕褐色、精细技术线宽，含最简编辑级尺寸与构造标注；右下为三至四个取自产品实际材质的色样（面料、皮革、金属、木材或塑料视情况而定），方形或矩形配小型编辑级说明。字体：极简编辑风，仅微妙说明文字，无大标题，柔黑或深棕色。整体氛围：设计目录或产品设计期刊——建筑感、高端、宁静。无杂乱、无大胆色彩、无重品牌感、无装饰图形、技术图无透视畸变。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ad-creative_case194",
    "title": "OBSIDIAN 咖啡品牌企划",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2066523210808484228",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ad-creative_case194/output.jpg",
    "imageAlt": "OBSIDIAN 咖啡品牌企划示例图",
    "prompt": "为咖啡品牌生成四张协调的高端写实编辑视觉。电影感、暗调、成熟美学，灵感来自奢华运动服与高端咖啡广告。影棚光照戏剧性而可控，超写实纹理，干净构图版式。图一：英雄品牌海报，品牌字母配艺术化咖啡展示——蒸汽升腾、咖啡豆散落。图二：全产品系列——咖啡袋、罐与胶囊并排排列。图三：紧密包装细节配标语意为「为追求风味的大人而生的咖啡」。图四：冒热气咖啡杯的生活方式特写。超精细抛光，锐利写实材质，统一品牌识别，无奇幻或超现实元素。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-comparison_case106",
    "title": "蓝图与渲染分屏物体",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2067202108303311255",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/comparison_case106/output.jpg",
    "imageAlt": "蓝图与渲染分屏物体示例图",
    "prompt": "选取任意物体并垂直切半，左侧渲染为带网格线与标注的精细技术蓝图，右侧为精致三维模型渲染，中央接缝在两种视觉现实碰撞处闪烁与故障。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-comparison_case107",
    "title": "凉棚蓝图与实景搭建分屏",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2067142493389603170",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/comparison_case107/output.jpg",
    "imageAlt": "凉棚蓝图与实景搭建分屏示例图",
    "prompt": "建筑分屏场景：左侧为白纸上手绘铅笔蓝图，展示木质花园凉棚的正立面与微侧立面，含构造线、尺寸标注与手写笔记，立柱与横梁以专业手绘技术风格精确绘制。右侧为真实花园中已建成的凉棚，自低前角平视角度拍摄，展现完整木梁纵深。自然木纹带真实榫卯，安装于草地之上配周边植物，柔和日光与接地阴影。超写实建筑可视化。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case306",
    "title": "公园长椅冰咖啡人像",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2067451160991084677",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case306/output.jpg",
    "imageAlt": "公园长椅冰咖啡人像示例图",
    "prompt": "一位美丽的年轻日本女孩，深棕色长直发配柔密刘海，白皙肌肤，明亮自然微笑，随意坐在木质公园长椅上手持冰咖啡杯。身穿浅米色风衣夹克与白色百褶短裙，放松姿势，一手搭在长椅上。周围是葱郁公园配高大树木、新鲜草地与明亮蓝天配柔和云朵。以智能手机人像模式拍摄，休闲日常抓拍，自然日光，手持手机照片，略微不完美取景，真实肤质，自然色彩，柔和手机处理，抓拍社媒美学，非专业模特、非影棚光照、非电影调色，真实移动摄影，普通公园出行氛围，自发瞬间，真实阴影，微妙镜头柔和，超写实，高质量手机相机图像。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case307",
    "title": "窗帘刘海近景人像",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamsofiaijaz/status/2067450336378544407",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case307/output.jpg",
    "imageAlt": "窗帘刘海近景人像示例图",
    "prompt": "一张超写实特写肖像，一位年轻女孩几乎填满整个画框。头部微侧倾，脸颊倚靠肩头并部分隐藏在连帽卫衣的奶油色长袖中。长直发配窗帘刘海沿脸左侧自由垂落，遮住一只眼睛。可见一侧面部化淡妆：定型眉、锐利拉长黑色翼形眼线延伸眼形、哑光灰粉唇、平静微嘟表情。她直视镜头，睫毛可见。拉链连帽卫衣搭于一侧肩头。构图亲密随性，如网络摄像头自拍。画框略倾斜，面部非常靠近镜头。对焦锐利于可见眼、唇、发丝纹理与厚实奶油色袖口面料，背景渐隐为柔和模糊。身后为简单暖灰米墙面无可见细节。前方左侧温暖室内与屏幕光照在皮肤与发丝上投射柔和高光。对比适中，配色低饱和，含黑、米灰与灰粉色调。整体应保留自拍照片的真实感。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case407",
    "title": "保持专注编辑海报",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2067444516605620410",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case407/output.jpg",
    "imageAlt": "保持专注编辑海报示例图",
    "prompt": "获奖级平面设计海报，新编辑或当代编辑风格，顶级设计奖品质。主题：保持专注。为主题创作强有力的中央视觉隐喻——将概念转化为雕塑性、标志性的装置式物件，被切割、层叠、拉伸、堆叠、重构、包裹或解构，具清晰概念分量而非装饰。干净极简浅灰背景配充足留白。高对比现代编辑字体：顶部超大粗体黑色英文标题、副标题、注释文字、展览式层级。瑞士编辑网格系统带刻意断裂、不对称平衡、精准对齐、强节奏、精致间距。居中或近居中构图配强垂直张力。材质与渲染：高端产品级渲染、哑光表面、微妙反射、硬边切割、层间微妙半透明、悬浮切片结构、精致细节、锐利剪影。色彩：黑、白、灰主导配单一醒目点缀色与极少辅色——克制、高端、当代。光照：柔和影棚光照、微妙阴影、超干净渲染、高度抛光但不光泽、锐利细节。氛围：概念性、智性、展览级、当代、高端、克制、标志性。比例 9:16，4K，超锐利，超精细，超干净，高分辨率。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case408",
    "title": "炒面食谱信息图",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2067429181726904350",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case408/output.jpg",
    "imageAlt": "炒面食谱信息图示例图",
    "prompt": "超干净现代食谱信息图，主题为炒面。以成品菜肴为英雄主视觉，摆盘并以透视或斜角视角略微抬升呈现。在菜肴周围以编辑级版式动态排列食材、步骤与贴士。食材：图标或微缩插画配分量，成簇或环形排列与菜肴视觉相连。步骤：编号面板配箭头或连接线形成逻辑流，含小型烹饪图标（刀、锅、烤箱、计时器）。可选信息：卡路里、备餐烹饪时间、份数、辣度以干净气泡或徽章展示。视觉风格：编辑信息图邂逅生活方式美食摄影。鲜艳自然食物色彩、微妙投影、干净矢量图标、现代字体、步骤面板用柔和渐变或玻璃拟态、关键数据用点缀色。构图：成品餐为英雄，食材与步骤围绕动态流动，清晰视觉层级配充足留白。光照：柔和自然影棚光置于极简纹理或渐变背景之上。输出：1080×1080，超锐利，社媒信息流优化，无水印。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ecommerce_case173",
    "title": "花卉精华产品大片",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2067413876564795743",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ecommerce_case173/output.jpg",
    "imageAlt": "花卉精华产品大片示例图",
    "prompt": "极简影棚产品摄影，一只小型透明玻璃面部精华滴管瓶配黑色橡胶吸头帽，内含淡粉精华液与悬浮干燥粉色花卉元素，居中放置于天然原木木块之上，木块可见纹理与裂痕质感。左侧一只高哑光白色护肤盒，标注法文意为「面部亮泽精华油」，配干净黑色字体与底部附近微妙标志。右侧一只透明圆柱玻璃花瓶注水，内插细枝干燥粉色满天星向上延伸。整组静物置于光滑哑光粉彩粉色台面之上，配同色无缝粉色影棚背景。左侧强定向柔光将花卉长自然式阴影投射于背景之上，玻璃上柔和高光、精华瓶微妙反射、木块柔和纹理。正面台面相机角度，所有物体锐利对焦。配色：腮红粉、柔玫瑰、暖浅木、干净白、透明玻璃。高端北欧极简护肤美学，超写实，影棚级。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ad-creative_case195",
    "title": "椰香天堂护肤广告",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Strength04_X/status/2067445760325734734",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ad-creative_case195/output.jpg",
    "imageAlt": "椰香天堂护肤广告示例图",
    "prompt": "极简白色瓶子配金色泵头，被裂开的椰子、飞溅的椰奶与泡沫云朵环绕，热带奢华水疗氛围，奶油质感，背景中漂浮逼真气泡，高端护肤商业广告，柔和温暖光照，超精细 8K。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ad-creative_case196",
    "title": "逆向重组产品特效广告",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2067399156596175345",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ad-creative_case196/output.jpg",
    "imageAlt": "逆向重组产品特效广告示例图",
    "prompt": "【产品】在半空中从散落碎片中重新组装，逆向崩解效果，机械精密，每个组件悬浮于不同深度，暗虚空背景，高概念产品广告，电影级特效。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ui_case187",
    "title": "王者仍在呼吸题头版式",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/NeuralAIInsight/status/2067291988953567706",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case187/output.jpg",
    "imageAlt": "王者仍在呼吸题头版式示例图",
    "prompt": "创作一张 16:9 图像。项目卡：创建一个紧凑的设计感报头而非表格。标题意为「王者仍在呼吸」，元信息行意为「空旷夜球场／被埋葬的王冠铭记／三冠与一望」。优先级：四珠宝王冠——三颗宝石确定点亮完整（蓝、白、蓝），第四颗柔和觉醒含希望；王冠保持埋葬直至升起；球场化为一巨型数字 10；一个写实球场，全程克制。微简介：传奇帽子戏法之后，一顶被埋葬的王冠在空旷的蓝白球场下苏醒——三颗宝石为三次世界杯点亮，第四颗开始含希望发光，球场短暂形成一巨型数字 10。这是环境主导的象征性短片，无任何角色——无球员、无面孔、无身体、无任何真实人物肖像。主题是球场、草皮与王冠。王冠为象征而非被佩戴；无国王、王座或长袍。保持球场地理、泛光灯位置、单一球门网位置与球场线布局在所有面板一致。王冠一旦揭示保持设计一致，四颗宝石位置一致（三颗历史点亮，一颗觉醒）。通过颜色与氛围连接阿根廷——天蓝、白、深夜蓝——绝不通过文字、队徽或人物。王冠在第七面板前不可清晰可见，第三至六面板仅展示埋葬辉光、草皮下压力与宝石在草皮下点亮。王冠由球场构成——金边部分由白色球场线形成，附土壤与草皮，优雅而足球神话化，绝非中世纪道具或奇幻洁净。四颗宝石：前三颗逐一以确定完整方式点亮，蓝白蓝节奏；第四颗视觉上独特——休眠后觉醒，柔和脆弱呼吸般辉光，绝不完全如前三般耀眼，须读作希望而非已获奖杯。数字 10 仅以真实球场几何半发现形成，绝非图形叠层。第四颗在结尾保持微弱亮。整体克制、史诗、虔诚；骄傲转为希望。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ui_case188",
    "title": "抖音直播截图",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2068123767994523857",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case188/output.jpg",
    "imageAlt": "抖音直播截图示例图",
    "prompt": "竖版 9:16 比例。创作一张写实的短视频平台直播截图。场景中一位女主播正在主持直播，手举一块牌子，上面写着：「今晚直播，来和我聊天吧！」捕捉真实的中国移动端直播界面外观。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case410",
    "title": "狮驼岭妖魔王庭",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2068096704973549620",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case410/output.jpg",
    "imageAlt": "狮驼岭妖魔王庭示例图",
    "prompt": "暗调诡异的中国神话氛围，融合传统美学与电影写实主义，精致细节，多遍渲染，无瑕建模。西游题材——险恶的狮驼岭，妖魔遍布。三张巨型王座：左侧身披重甲的象王、中央端坐的重甲狮王、右侧的重甲大鹏王。一位矮小的行者——背对观众——肩扛金箍棒、身披战甲向前行进。低角度仰拍，长焦压缩，戏剧性硬阴影。最大细节，多遍精修，精准透视与结构线，精湛工艺。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ecommerce_case175",
    "title": "香辣番茄辣酱产品特写",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2068032837610356989",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ecommerce_case175/output.jpg",
    "imageAlt": "香辣番茄辣酱产品特写示例图",
    "prompt": "俯拍，一罐香辣番茄辣椒酱置于深色石面上，周围环绕整颗红番茄、番茄半块、新鲜红辣椒、黑胡椒粒，以及一个小木碗盛酱配勺子。温暖大地色背景，柔和定向光，深沉丰富阴影，高对比，干净极简造型，商业产品摄影，超精细，4K。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ad-creative_case198",
    "title": "Ray-Ban 巨型飞行员墨镜广告",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/MrDasOnX/status/2068024611074367579",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ad-creative_case198/output.jpg",
    "imageAlt": "Ray-Ban 巨型飞行员墨镜广告示例图",
    "prompt": "极简商业广告，主角为超大号飞行员墨镜，超干净设计。一位全身白衣年轻女性随意倚靠于巨型墨镜上，放松自信姿势，闭眼，手中另持一副正常尺寸同款。柔和渐变金色背景，后方大号粗体白色品牌文字。光泽反射地面，柔和影棚光照，现代高端产品摄影。右上角小字设计者署名。底部中央小号白色标语意为「每一眼都是经典视野」。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-character_case28",
    "title": "Pixar 香蕉英雄角色",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2068003049600380972",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/character_case28/output.jpg",
    "imageAlt": "Pixar 香蕉英雄角色示例图",
    "prompt": "三维动画风格香蕉角色，单个水果被赋予生命。一个魅力十足的男性形象，大胆自信的眼睛、浓密富有表情的眉毛与露出一口闪亮白牙的咧嘴大笑配闪光点缀。光滑略带光泽的黄色果皮配柔和高光。短粗卡通手臂与腿，直立站姿双臂交叉呈英雄姿态。背景为虚化的香蕉串。立于木质餐桌之上，旁为阳光充足的窗户，温馨现代家居室内。丰富鲜艳色彩，电影光照，柔和自然阴影，超精细高保真纹理。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case411",
    "title": "莫斯科瑞士风格社论海报",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Naiknelofar788/status/2067991181376868462",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case411/output.jpg",
    "imageAlt": "莫斯科瑞士风格社论海报示例图",
    "prompt": "为莫斯科设计一张当代瑞士风格编辑海报。以大号粗体无衬线大写字母「M」作为主要字体结构。该字母须非常清晰、干净、几何、实心且占主导，无描边、无边框、无阴影轮廓、无装饰处理，剪影须乍看即易读。勿让插画遮蔽或扭曲字母形状。海报须遵循精准左对齐瑞士网格系统，留白充足。在「M」内部创作简单、逻辑、克制的莫斯科城市风景扁平插画，仅用少量必要视觉元素：受莫斯科城商务区启发的简化现代摩天楼、莫斯科河的平静曲线、克里姆林宫城墙与塔楼微妙剪影、圣瓦西里大教堂洋葱顶以简化几何形式呈现、受高尔基公园或扎里亚季耶公园启发的柔和绿色公园景观、以及两名行人在干净河滨步道上。构图保持极简、宽敞、易懂，勿添加过多地标、人物、招牌、载具、纪念碑、雕像、喷泉、火车、公交或小型装饰物。插画应暗示莫斯科作为首都的身份——帝国历史、苏维纪念尺度、现代玻璃摩天楼、河滨公共空间与广袤都市节奏以干净当代方式共存。使用扁平矢量造型、干净剪影、极简线稿、简化建筑与可信的比例关系。场景轻松活泼但不繁忙。插画应支撑字母而非与之竞争。仅允许极微妙的超出「M」边框的重叠，仅限简单有机或大气元素：河滨树木几片叶子或河面柔和大气薄雾可略微延伸出字母边缘。百分之九十七的插画须在「M」内部。人物、建筑、穹顶、塔楼、载具、面孔、路径、招牌或复杂物体不得超出字母。字母「M」须保持清晰可读且视觉占主导。在字母下方以粗体无衬线字放置标题，标题大小写、左对齐于同一网格。标题下方添加小号常规无衬线短文段落，同样左对齐，间距干净、编辑层级精致，内容大意为：「莫斯科穿越宏大的历史层叠、纪念性建筑、河流弯道与密集现代天际线。在帝国遗产、苏维尺度与当代都市能量之间，这座城市拥有强大、结构化且不断演化的性格。」无图标、无徽章、无装饰符号。整体设计须呈现瑞士极简感：强网格、精准对齐、不对称平衡、干净字体、充足留白、克制构图、现代文化城市海报美学。配色：暖象牙背景、深海军蓝或炭灰字体、混凝土灰、玻璃蓝、松绿、克里姆林红点缀、河蓝灰、浅米与柔和黑点缀。哑光纸张质感，微妙纸纹，锐利边缘，扁平当代插画，现代莫斯科都市氛围，沉静而有力，精致、平衡、可印刷。避免写实摄影、三维渲染、光泽、极繁主义、过度拥挤城市、复杂插画、过多细节与地标。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ui_case189",
    "title": "AR 超市购物 POV 界面",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2067987931651068364",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case189/output.jpg",
    "imageAlt": "AR 超市购物 POV 界面示例图",
    "prompt": "超市走道内第一人称视角，双手持一罐色彩缤纷的混合果酱——草莓、蓝莓与橙子混合口味。周围漂浮全息增强现实叠层：「风味组合」面板配水果图标、「营养信息」显示、发光的「新鲜度指标」显示 9/10。附近悬浮一张半透明数字购物清单，面包与黄油已勾选，并配以吐司、煎饼与甜点的食谱建议。背景为虚化的货架与购物者散景。干净零售光照，超写实，电影感，AR 眼镜第一人称视角，竖构图。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ecommerce_case176",
    "title": "悬浮美食摄影组图",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2067851560168931394",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ecommerce_case176/output.jpg",
    "imageAlt": "悬浮美食摄影组图示例图",
    "prompt": "专业影棚美食摄影系列，展示解构菜肴以高速悬浮定格于半空。无缝蒙尘粉背景配柔和均匀影棚光照，食材爆裂漂浮呈动态造型。包含：悬浮提拉米苏——冰淇淋球、手指饼干、马斯卡彭奶油与咖啡豆悬浮空中；罗宋汤元素——甜菜、黑麦面包片、新鲜香草漂浮于木板上陶瓷汤碗之上；酸种吐司配牛油果泥与溏心蛋切半瞬间。飞屑、香料颗粒、散落香草与液滴须锐利清晰、浅景深，主悬浮元素下方柔和阴影。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case412",
    "title": "人群中的低语海报",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2067837876822581352",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case412/output.jpg",
    "imageAlt": "人群中的低语海报示例图",
    "prompt": "一张悲伤的韩国心理电影海报，一位美丽年轻女性以戏剧性俯拍角度拍摄，镜头垂直向下对准她仰望的面孔。深色长发松松挽成未完成发髻，碎发修饰脸型，苍白肤色，表情为安静的情感疲惫。身穿oversized酒红色羊毛毛衣、深灰打底裤与磨损白运动鞋，紧握一本破旧平装书贴于胸前。周围是繁忙地铁站，通勤者以长曝光运动模糊流过，身影化为冷灰站台瓷砖上的幽灵般运动条纹。她的静止与他们的运动之间的对比营造出强烈的孤独感。顶部韩文标题意为「人群中的低语」。粗体白色衬线字体填满构图中央。视觉风格：暖米色胶片调色、细腻模拟颗粒、浅景深、柔和钨丝地下光照、微妙大气雾、电影感韩剧氛围。索尼 A7R4、50mm、慢快门。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case310",
    "title": "玩具相机阳台随拍",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2068501129059783072",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case310/output.jpg",
    "imageAlt": "玩具相机阳台随拍示例图",
    "prompt": "一个宁静的欧洲公寓夏日清晨。女性坐在打开的阳台门旁地板上沉浸在书中，一腿伸向栏杆，膝上松松搭一条奶油针织毯。身穿简约橙色短背心与精致珠宝，完全未察觉镜头。木质地板旁放着一杯茶与一本翻开的书。阳台俯瞰经典欧洲建筑——奶油石立面、铸铁栏杆、鲜花阳台与繁茂树木。以笨拙的手持角度拍摄，仿佛某人走过房间随手一拍未减速。取景倾斜且偶然，主体未居中，阳台门、毯子、地板与前景物件部分被画框边缘裁切。以廉价二〇〇〇年代低分辨率玩具数码相机拍摄，零点三百万像素画质，重度运动模糊，刻意歪斜倾斜取景，明亮日光下仍强行弹出刺眼闪光，过曝白色高光，强烈数字噪点与重度传感器颗粒，低保真褪色色彩，边缘色差，镜头光晕。看起来像从旧玩具相机上传的极度模糊抓拍照，生硬业余，真实怀旧质感。轻微失焦、运动涂抹、低分辨率面部细节、传感器噪点、JPEG 伪影与压缩损伤可见于面部——恰如廉价玩具相机的产物。不保留现代清晰度，不保护面部锐度。主体占画面百分之六十五。前景大幅遮挡——部分裁切的茶杯、书、毯褶与阳台门框。极度失衡构图，相机未水平，主体尴尬地偏于一侧。房间、栏杆与前景元素部分裁切。图像应感觉像二〇〇〇年代中期上传到旧社交网站的遗忘抓拍。生硬、业余、不完美、偶然、怀旧、不 polished，捕捉记忆的真实感而非美学摄影。超厚塑料玩具镜头柔和、运动涂抹、失焦、高光涂抹、低分辨率细节丢失、重度 JPEG 压缩、传感器噪点与面部发肤毯书茶杯阳台建筑天空的细节退化。比例 4:5。避免美颜滤镜、现代手机画质、单反画质、电影调色、HDR 摄影、专业构图、影棚光照、超锐面部、完美肌肤、无瑕对焦、时装编辑、网红照、精致数字渲染、AI 完美、超精细眼部、高端相机品质、奢华肖像。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case311",
    "title": "祖母绿头巾时尚社论人像",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/bmx_ai13/status/2068462145319444778",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case311/output.jpg",
    "imageAlt": "祖母绿头巾时尚社论人像示例图",
    "prompt": "电影感特写侧脸肖像，一位美丽的深色发光肌肤女性，双眼安详闭合，佩戴大胆的祖母绿与黑色花纹头巾与配套围巾。眉上与颊上极简优雅白色面彩笔触，光泽自然唇，小巧银耳环。深暗绿影棚背景配柔和大气散景，高端时装编辑光照，平滑肤质，戏剧性而平静的氛围，非洲灵感美人肖像，高端杂志封面美学，超写实摄影，浅景深，柔和轮廓光，丰富对比，85mm 镜头，f/1.8，8K 细节。避免文字、标志、水印、多余面彩、凌乱面料、面部变形、解剖错误、硬阴影、过曝肌肤、模糊眼部、塑料肤质、低分辨率、卡通、三维渲染、不真实珠宝、多余耳环、畸形鼻、不对称唇。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-comparison_case108",
    "title": "失重清晨分镜板",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/DrSadek_/status/2068438789236699582",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/comparison_case108/output.jpg",
    "imageAlt": "失重清晨分镜板示例图",
    "prompt": "一张电影感六面板分镜表，干净深炭灰背景，三列两行网格排列宽屏 16:9 面板，细中性灰边框，每面板左上角小型白色数字标签。超写实电影剧照，自然主义晨光，浅景深，自然肤质带微妙瑕疵，抓拍构图，低饱和自然主义调色。统一概念：一个普通清晨重力悄然停止——日常物件与人无声漂浮。面板一：黎明卧室，柔和蓝光，熟睡的人与羽绒被漂浮于床垫上方一英寸，尘埃完美静止悬浮空中。面板二：厨房特写，深色咖啡以缓慢液体丝带自白色马克杯向上倒出，蒸汽向台面卷曲而下。面板三：浴室，牙刷悬浮半空配珍珠般牙膏团悬浮其旁，散落水滴凝固于伸手附近。面板四：早餐桌，麦片与牛奶绕碗慵懒漂浮成光环，一只勺追逐一片漂移的麦片圈。面板五：玄关，钥匙、硬币与钱包凝固于门垫上方如星座，一只手缓缓扫过。面板六：前门打开面向下方普通繁忙街道，一人毫不在意地飘出同时从倒置咖啡杯啜饮。每面板独特取景，超写实纹理。小型白色标签文字——仅数字一至六——每面板一个数字，无额外文字。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case312",
    "title": "深夜办公室闪光灯人像",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2068395305624871253",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case312/output.jpg",
    "imageAlt": "深夜办公室闪光灯人像示例图",
    "prompt": "CCD 闪光摄影风格，深夜办公室场景，背景为覆满数学公式的白板，黑框眼镜，白色高领上衣，黑色高腰短裙，半哑光冷白瓷质肌肤带真实肤质，主体坐于桌前，白板笔贴近唇边，轻微倾斜构图，忧郁知性美学。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case413",
    "title": "红裙时尚社论人像",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/meng_dagg695/status/2068369080504222141",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case413/output.jpg",
    "imageAlt": "红裙时尚社论人像示例图",
    "prompt": "编辑级时装肖像，女性身穿飘逸红色钟形袖裹身裙，左侧戏剧性硬轮廓光在面料上投射金色边缘辉光，与镜头直接强烈对视，唇微启，自信表情，风中袖部面料定格于运动中途带自然面料涟漪，发丝被风掀起，深饱和红阴影与暖过曝金高光对比，不对称紧密裁切一只袖延伸出画框，电影调色，高动态范围，中画幅相机拍摄，85mm 镜头，f/1.8 浅景深，暖琥珀渐变背景配微妙大气雾与左下角柔和镜头光斑，肤质真实带微妙高光光泽，专业影棚时装摄影，超精细。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case414",
    "title": "金色光环时尚海报",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Xaroon_x/status/2068359539691532543",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case414/output.jpg",
    "imageAlt": "金色光环时尚海报示例图",
    "prompt": "创作一张奢华电影感时装海报，一位时尚年轻男性以强势自信姿势站立，低角度仰拍。主体身穿高端黑色设计师套装，剪裁锐利、微妙金属点缀、干净现代剪影。表情平静、自信、略带威慑，直视镜头。发型完美造型带柔和蓬松与自然光泽。身后为大型发光深金色圆形聚光，营造光环效果增强主导感与焦点。背景为极简哑光黑色配微妙纹理、尘埃粒子与微弱暗角边缘以增强纵深。光照为戏剧性影棚风格、强对比，突显面部结构与服装细节。构图对称居中如奢华品牌广告或专辑封面。超写实，8K 细节，4:5 竖版，高端编辑美学，为病毒传播而设计。比例 4:5。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-character_case29",
    "title": "粉彩卡哇伊动物伙伴",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Taaruk_/status/2068351521016955098",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/character_case29/output.jpg",
    "imageAlt": "粉彩卡哇伊动物伙伴示例图",
    "prompt": "可爱极简粉彩涂鸦插画，萌系角色与 adorable 动物伙伴并肩而立，灵感来自现代日式文具艺术与儿童绘本，干净矢量线稿、柔和奶油背景、低饱和粉彩调色板（粉、蓝、薄荷、薰衣草、黄），简单几何造型，小彩纸点与漂浮装饰元素。圆润角色设计穿oversized毛衣、阔腿裤、运动鞋、眼镜，平静表情。动物伙伴变体包括羊驼、熊、六角恐龙、兔、猫、狐、龟或奇幻生物。温馨风景背景如海滨栈道、湖畔村庄、山间小镇或异想天开的自然景观。扁平设计、粗轮廓、迷人俏皮美学、对称构图、全身姿势、可爱友谊主题，高细节矢量插画、贴纸般外观、儿童绘本艺术风格、柔和阴影、干净留白、鲜艳而温柔的配色，4K，杰作。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case415",
    "title": "罗纳尔多三区运动海报",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/vireonixx/status/2068870555349246242",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case415/output.jpg",
    "imageAlt": "罗纳尔多三区运动海报示例图",
    "prompt": "一张运动员体育海报。背景分为三个水平区域。顶部区域暖奶油色占海报上方百分之四十。中间区域信号红色为纯平色带占海报高度恰好百分之八，位于黄金比例点。底部区域深炭灰占剩余百分之五十二。三区域，两色一中性，国旗几何解构重组为图形建筑。人物横跨三区域，全身略微低角度拍摄，身着金色球衣，跨步中途，左腿向前右臂向后，绝对巅峰跑速的特定身体位置——非摆拍动作而是捕捉到的动作。奶油区域身体以全彩暖肤色与金色球衣渲染；红色区域身体与红带交叉处漂白为近白剪影；炭灰区域身体以黑白高对比渲染——同一连续人物上的三种色彩处理，区域非背景而是滤镜，各揭示同一个人的不同版本。运动模糊：人物以 1/250 快门轻微运动模糊，锐利元素为面部、号码 7、触地球靴，模糊元素为运动中的手臂、头发、松散球衣面料。叠于三区域之上横跨全海报宽度：一组精细平行水平线，零点三磅暖白、百分之二十五透明度、边缘到边缘、间距四毫米——电视扫描线或印刷套准网格或等待书写的横线页纹理，同一线在不同背景上变色：奶油上几乎不可见、红色上发光、炭灰上清晰有力。颜料介入：仅奶油区域左上象限，钴蓝色生猛笔触，宽刷四十五度角施就，蓝色出人意料于奶油——非国旗系统一部分，来自既定色彩逻辑之外的介入，他始终仰望的天空之色。日文排版：大尺度、位于摄影层之后。奶油区域上身之后为「挑戦」深炭灰百分之十五透明度，汉字透过摄影层可见如面孔后的思绪。炭灰区域下身之后为「勝利」同尺度同处理。始与终，挑战与胜利，上与下。信息系统：海报右侧，细竖规则线信号红一像素全高，其右为数据列细体无衬线六磅字距两百，骨白于炭灰、奶油于红以保可读性——俱乐部生涯时间线、各俱乐部年份、每季进球数，数据如河平行于人物流淌，数字生涯旁的运动生涯。主要字体：横跨红色区域全海报宽度，红带为一场字体事件而设，粗体无衬线全大写白色三十六磅字距三百，垂直居中于红带，文字意为「标准始终是他」。红带下方进入炭灰区域，全宽，超粗无衬线扩展白色九十六磅负字距，名字占据全宽精确适配。名字下方同炭灰区域，细体无衬线八磅字距六百骨白色，一行简明信息。艺术指导为巴黎设计工作室的概念智性、顶级设计机构的字体精致、广告公司的情感直率与品牌方的制作品质同时呈现于巅峰。印刷格式 70×100 厘米，10K 分辨率，HDR，三区域以三次独立油墨 pass 在胶印机上印刷。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ui_case190",
    "title": "中文野生动物信息图",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2068852226844664044",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case190/output.jpg",
    "imageAlt": "中文野生动物信息图示例图",
    "prompt": "设计一张视觉丰富的濒危动物信息图，使用中文文字。以超写实的动物为主焦点，周围环绕标注图解、结构化标注与简洁标签，覆盖其栖息地、饮食与独特特征。融合超写实与大胆平面设计元素，包括色块、图标与层叠造型于干净背景之上。信息密集、触感真实、专业精制。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case416",
    "title": "梦核品牌视觉套件插画",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/92digitalartArt/status/2068766168979063085",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case416/output.jpg",
    "imageAlt": "梦核品牌视觉套件插画示例图",
    "prompt": "超现实梦核建筑插画，明亮孟菲斯设计影响，粉彩流行调色板，锐利黑墨轮廓，等距幻想花园空间，几何瓷砖墙面，漂浮球体，棋盘格地板，风格化云朵，装饰植物与造型灌木，干净漫画线稿，俏皮后现代造型，平涂色彩配微妙颗粒纹理，异想天开的阈限氛围，装饰性植物细节，通透蓝天，高细节编辑插画，鲜艳复古未来感氛围。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-character_case30",
    "title": "乐高足球收藏人偶",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/ChillaiKalan__/status/2068717001145778630",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/character_case30/output.jpg",
    "imageAlt": "乐高足球收藏人偶示例图",
    "prompt": "一只高细节收藏级玩具人偶，灵感来自积木风格小人偶，立于专业影棚中。人偶拥有写实年轻女性面孔，瓷质肌肤、直黑发、齐刘海与一缕醒目白色挑染。佩戴小银耳环，表情平静自信。身体为光泽塑料积木小人偶，身穿十号球衣与配套短裤，国家队灵感配色。全身构图，居中取景，浅景深，高端产品摄影，超干净光照，反光塑料表面，真实阴影，锐利对焦，奢华收藏品美学，高端商业广告风格，超写实面部与玩具身体无缝融合，8K 分辨率，鲜艳调色，影棚背景匹配球衣配色主题。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case417",
    "title": "奇趣凸面镜旅行手账",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Taaruk_/status/2068716967968788743",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case417/output.jpg",
    "imageAlt": "奇趣凸面镜旅行手账示例图",
    "prompt": "将上传照片转化为异想天开的手绘故事书插画。保留精确姿势、透视、凸面交通镜反射、道路、电线杆与周围热带绿植。将镜中反射重新演绎为充满活力的插画世界——葱郁丛林植物、棕榈树、花朵、蝴蝶、涂鸦心形、星星、漩涡、微笑太阳、蓬松云朵与彩色手绘装饰。人物转化为可爱卡通角色，穿白色T恤、海军蓝短裤、白袜与蓝色帽子，俏皮姿势一腿抬起比出剪刀手。镜内以迷人信息图风格融入运动手环统计：「第 53 天」「4.06 公里」「88 米」「24 分 9 秒」。明亮粉彩色彩，纹理水粉颜料，儿童绘本美学，异想天开涂鸦，干净轮廓，温馨欢快氛围，高细节植物，俏皮旅行手账风格，运动轨迹灵感冒险艺术，鲜艳绿橙蓝粉，超精细插画，杰作，萌系美学，编辑品质，竖构图，4K。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case418",
    "title": "民俗纸艺场景重构",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Ciri_ai/status/2068716810346860804",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case418/output.jpg",
    "imageAlt": "民俗纸艺场景重构示例图",
    "prompt": "将整张图像重新演绎为一幅统一的装饰民俗扁平插画，融合柔和手工剪纸层叠风格，灵感来自迷人纸艺立体场景美学。保留原始主体、构图与整体氛围，但将每个元素简化为干净扁平造型、大胆圆润形状与可爱童稚比例。添加俏皮涂鸦点缀、装饰民俗纹样、略不均匀的手工轮廓与极简面部细节如点眼与柔和腮红。使用鲜艳欢快的调色板，感觉清新且与原图不同，同时保持最终作品温暖、甜美、纯真、异想天开与绘本般。营造层叠卡纸的质感，堆叠纸张纵深、干净切边、层间微妙阴影与温和的纸艺手工不完美——仿佛场景被精心剪裁、上色并组装于干净白纸之上。成品应显得可爱、手工感、俏皮且视觉统一，具 polished 而迷人的手工民俗纸艺质感。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case419",
    "title": "阿根廷10号运动海报",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2068534010574459131",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case419/output.jpg",
    "imageAlt": "阿根廷10号运动海报示例图",
    "prompt": "混媒体育海报，一位年轻球员的写实半身肖像，自信姿势带微笑，深棕色微乱头发。身穿国家队球衣配标志性天蓝白条纹。左上柔和影棚光照，发丝上有柔和阴影与高光。背景为大号白色数字「10」，部分被球员叠盖。背景含国旗色竖向烟雾条带——天蓝、白、天蓝。现代、干净、动态风格，结合锐利肖像细节与柔和烟雾效果，营造有力专业体育海报美学。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case313",
    "title": "深夜地铁CCD人像",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2068516066679283984",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case313/output.jpg",
    "imageAlt": "深夜地铁CCD人像示例图",
    "prompt": "CCD 闪光照片，低饱和黑珍珠暗金色调，深炭灰阴影，微妙暗金光反射，柔和正面闪光照亮主体，略微过曝，细腻颗粒，清冷忧郁的深夜城市氛围。主体：年轻东亚女性，优雅小巧鹅蛋脸，窄杏眼，疏离表情，黑色低马尾。服装：黑色高领紧身连衣裙加深灰薄外套、透肉丝袜与尖头细高跟。场景：空旷的午夜地铁站台，金属长椅，模糊背光广告牌，反光地面。姿势：坐于站台长椅，自然翘腿，一手搭包上。表情：沉思，从低头转为抬眼瞥向镜头。亮点：长腿、细腰、冷艳气场。比例 9:16。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case315",
    "title": "俯拍航拍棚拍人像",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2069568331821318277",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case315/output.jpg",
    "imageAlt": "俯拍航拍棚拍人像示例图",
    "prompt": "超广角九十度正俯拍影棚肖像，女性直视镜头上方。严格保留参考图身份，不改面部、比例、肤质或表情。构图：全身取景，主体周围大量留白，戏剧性孤立与图形冲击。主体：女性戴圆润粗框时尚眼镜，身穿深棕短袖纽扣衬衫（灯芯绒或纹理面料），内搭浅米色纹理毛衣。自然发型带可见纹理与蓬松，不改发色或结构。自然写实肤色，可见纹理，不过度平滑。表情：投入、略带好奇或探究。背景：极简影棚背景，柔和灰渐变，边缘较深、主体正下方较亮。光照：柔和均匀头顶光照，微妙阴影定义面部特征与衣物褶皱，均匀照明，无硬对比。相机：ISO 150-200、光圈 f/1.28、快门 1/200s、高分辨率超精细。调色：中性现代色调、柔和均衡对比、干净当代观感。氛围：极简、现代、沉思，强主体孤立与视觉清晰。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-comparison_case110",
    "title": "铅笔屑微缩景观网格",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Gdgtify/status/2069543521045143580",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/comparison_case110/output.jpg",
    "imageAlt": "铅笔屑微缩景观网格示例图",
    "prompt": "二乘二网格，为四种令人类骄傲的场景各做一面板。输入为铅笔屑类别。识别四种不同铅笔屑——如石墨屑、红铅笔屑、黄铅笔屑、绿铅笔屑。每面板以特定铅笔屑构建一个惊艳的三维场景，薄卷曲木片、彩色油漆边缘与细木纹在温暖窗光下的材质物理效果，全细节呈现。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case316",
    "title": "强制透视运动鞋人像",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2069538312357114324",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case316/output.jpg",
    "imageAlt": "强制透视运动鞋人像示例图",
    "prompt": "一张电影感强制透视街头摄影场景，一只巨大磨损运动鞋在前景显得庞大， towering over 一位随意穿着靠在上面的年轻男性。男性身穿棕色皮夹克、宽松蓝色牛仔裤、运动鞋与米色帽子，双手插兜自信站立。秋日氛围，黄橙落叶散落路面，背景高树秋叶，停放车辆略模糊。鞋底超写实纹理，可见污垢与面料磨损。极低角度拍摄以夸张比例，浅景深，自然日光，柔和电影调色，真实阴影，高细节，8K 分辨率，专业摄影，超现实而可信的强制透视错觉。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case317",
    "title": "云绽时尚编辑人像",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/ChillaiKalan__/status/2069471846890959183",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case317/output.jpg",
    "imageAlt": "云绽时尚编辑人像示例图",
    "prompt": "超写实高端时装编辑图像，竖版 4:5。一位年轻成人时装模特平静地坐在一朵巨大的粉色花朵中央，花朵生长于云端之上，花茎自下方升起并消失于柔软白云中。略低于主体的低角度透视，花朵框住画面使其显得纪念碑式而超现实。模特穿短袖 crisp oversized 白衬衫、宽松浅色长裤、银色珠宝与黑色极简凉鞋。自然棕色散发随风轻柔飘动，从容表情，淡淡柔笑。干净鲜艳蓝天，几朵柔软白云，巨大精细花瓣，明亮自然日光，crisp 鲜艳色彩，俏皮超现实时装广告氛围，写实解剖，自然双手，锐利编辑摄影，无文字无标志，比例 4:5。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case421",
    "title": "温馨日式生活方式插画",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/oggii_0/status/2069469184787198164",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case421/output.jpg",
    "imageAlt": "温馨日式生活方式插画示例图",
    "prompt": "创作一幅精致的当代日系生活方式插画，温馨的日常氛围。艺术风格：手绘钢笔墨水速写插画，纤细富有表现力的线条，松散不完美的轮廓，极简编辑级艺术作品，柔和水彩晕染，微妙纸张纹理，优雅留白，速写本美学，现代日式独立插画，轻盈通透构图，当代咖啡馆艺术风格，情感温暖而亲密。人物：两位年轻人，柔和简化的面部特征与自然表情，休闲oversized服装，放松肢体语言，真实互动，日常抓拍瞬间，面部以精致线条而非写实细节呈现。环境：温馨室内场景如咖啡馆、公寓、工作室、书店、厨房角落或创意工作空间，含木质家具、咖啡马克杯、室内植物、书架、窗户与小型日常物件，居感而不杂乱。构图：全身或四分之三身，人物自然坐姿相对而坐，均衡不对称布局，大面积干净留白，通过姿态与氛围叙事而非动作，编辑级插画取景，平视透视。配色仅低饱和去饱和色：蒙尘蓝、暖奶油、柔米、浅灰、鼠尾草绿、暖棕、米白，仅加一个小面积点缀色元素如红袜、红鞋、红马克杯或小型红色物件。光照：柔和自然窗光，温柔环境照明，无戏剧性阴影，温暖、宁静、舒缓氛围。渲染：极简明暗，稀疏细节，水彩风格填色于精致墨线轮廓内，略未完成的速写质感，高质量插画带可见手绘不完美，柔和边缘与微妙纹理。氛围：舒适、安静、怀旧、宁静、亲密、温馨、日常幸福、慢生活、咖啡馆文化、深思对话、温柔的人际连接。避免动画截图、漫画分格、赛璐璐上色、数字绘画、超写实、摄影写实、三维渲染、光泽表面、鲜艳饱和色、电影效果、戏剧光照、过多细节、锐利轮廓、重阴影、复杂背景。场景：【在此插入场景描述】。最终图像应如艺术书、咖啡馆杂志、设计期刊或独立速写本集中的高端日系生活方式插画。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ad-creative_case202",
    "title": "STARKIDZ 宇宙望远镜广告",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Strength04_X/status/2069448983651787177",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ad-creative_case202/output.jpg",
    "imageAlt": "STARKIDZ 宇宙望远镜广告示例图",
    "prompt": "一张魔法科学广告海报。一位好奇的十岁男孩穿航天局T恤，在一只三倍于他身高的银色望远镜旁以全然惊叹之态仰望天空，望远镜指向上方令人屏息的星系景观，镜身上以发光白色字体写着品牌名。深邃太空背景配银河彩色星云与流星。背景充满发光宇宙感字体。底部标语意为「探索宇宙」。右上角小灰字设计者署名。超写实、魔法儿童科学产品商业广告、戏剧性深空星系光照。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ad-creative_case203",
    "title": "纪念碑感时计时尚广告",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2069387162425205211",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ad-creative_case203/output.jpg",
    "imageAlt": "纪念碑感时计时尚广告示例图",
    "prompt": "超大奢华腕表作为现代雕塑中心件，时装模特倚靠于表盘之上，纪念碑式「时间」字体隐现于背景，深翠绿影棚环境、反光抛光地面，瑞士高端广告美学，电影编辑摄影，超干净极简构图，1:1。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case318",
    "title": "富士胶片风日系情侣写真",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2069961089719353505",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case318/output.jpg",
    "imageAlt": "富士胶片风日系情侣写真示例图",
    "prompt": "9:16 竖版肖像，一对年轻日本情侣以富士胶片模拟风格拍摄。胶片美学：富士胶片模拟调色，低饱和粉彩调色板，微弱绿品红色偏，低对比，柔和高光衰减，细腻胶片颗粒，光源周围温和晕光。光照：自然窗光，漫射通透，柔和阴影过渡，明亮而柔和的室内日光。主体：两位年轻日本人，极简自然妆，真实肤质带微妙纹理与自然瑕疵。女性穿oversized纽扣衬衫、宽松短裤、休闲放松造型；男性穿简约浅色T恤或衬衫，干净低调。两人发型自然、略带凌乱。姿势：亲密贴近，并坐或并立；她轻倾向他，一手搭其肩或胸；他侧倾，面孔几乎相触，亲吻前的一瞬。表情：柔和自然微笑或温柔相视，真挚情感温暖。相机：腰部以上近框，平视角度，略带手持感，亲密感。场景：窗边极简室内空间，柔软窗帘，干净中性背景。氛围：温暖、浪漫、安静的日常亲密。品质：超写实、模拟胶片特性、温柔颗粒、轻微柔和、自然瑕疵。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ui_case195",
    "title": "Flash Chat 应用图标",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2069900481770737707",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case195/output.jpg",
    "imageAlt": "Flash Chat 应用图标示例图",
    "prompt": "为一款名为「闪聊」的应用设计应用商店图标。单一圆角矩形图标，平滑连续圆角，居中于白色画布配留白，填充约百分之八十画布。现代轻拟物风格，应用商店品质。仅一个图标。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case422",
    "title": "广州丝带海报",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2069840084673945968",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case422/output.jpg",
    "imageAlt": "广州丝带海报示例图",
    "prompt": "2026 春节广州城市推广海报，竖版 9:16，喜庆而优雅。双重曝光配 S 型曲线流动构图于纯白纹理背景之上。右下角：一位穿传统中式服饰的微型人物挥舞一条长红丝带，丝带化为山脊与河流，内嵌广州层叠全景——含广州塔、珠江新城天际线、珠江游船、古建筑与白云山。左下角字体：横向「SPRING 2026」配竖排中文字符意为「千年商都，魅力广州」。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case319",
    "title": "提灯徒步者棚拍人像",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2069812774277087740",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case319/output.jpg",
    "imageAlt": "提灯徒步者棚拍人像示例图",
    "prompt": "三维渲染，风格化全身侧视肖像，一位长白须的年长男性徒步者向右行走。纯无缝深青色影棚背景配柔和地面反射。他戴棕色宽檐毡帽、灰蓝格子衬衫、卷边棕色灯芯绒长裤与磨损深色工装靴，背大型帆布柳条背包配皮带。右手持点亮的复古防风提灯（黄铜框架、玻璃灯罩）投射温暖琥珀辉光，左手握朴素木手杖。纹理哑光质感，柔和漫射影棚光照，竖构图配上方充足留白。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-comparison_case111",
    "title": "椒盐卷饼工匠分镜板",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/TechieBySA/status/2069811464324460679",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/comparison_case111/output.jpg",
    "imageAlt": "椒盐卷饼工匠分镜板示例图",
    "prompt": "为椒盐卷饼师傅创作一张干净利落的信息图分镜海报。宽 16:9 版式，白底黑框，粗黑字体，高端三维风格化渲染，明亮鲜艳的色彩——深金棕卷饼皮、温暖焦糖色调、粗白盐晶、丰富木质纹理、温暖巴伐利亚日光。顶部页眉：标题、总时长十二秒、八镜头、图例图标含动作、热度、时间提示与食材。全程使用同一位三维风格的中年巴伐利亚男性面包师——温暖圆脸、浓密金色胡须、传统皮裤配背带、白衬衫、小型迷人木质卷饼摊、头顶串灯、旁有木质啤酒桶、温暖日光、身后柔和可见迷人德国小镇广场或啤酒花园。八面板：面板一开场——面包师站在摊后，温暖日光倾泻，串灯悬挂，传统德式建筑柔和可见，双臂展开带自豪大笑意为「新鲜卷饼」；面板二面团绳——双手在木台上将柔软淡色面团搓成长均匀面绳，来回滚动有节奏，面绳每次越来越长越来越细；面板三扭转——英雄工艺镜头，双手提起面绳交叉为标志性卷饼形状，环端回环、扭转、折叠至身体形成经典卷饼结，系列中最独特的手机运动；面板四碱水浴——成型卷饼浸入冒泡碱水锅中，短暂淹没后提起闪亮微深，准备入炉，此步骤赋予卷饼标志性深色与嚼劲；面板五撒盐——粗白盐晶慷慨洒于湿润卷饼表面，即时粘附，日光下闪烁，鲜白映衬淡面团；面板六烤炉——面包师将烤盘送入发光烤炉、关门、满意点头退后，等待开始；面板七揭示——英雄帧，炉门打开，卷饼呈深金棕、光泽、完美扭转、蒸汽升腾，他双手托盘眼中闪光充满骄傲；面板八撕开——温暖全景，面包师双手撕开温热卷饼，柔软温热内里展现、蒸汽逸出、盐晶可见于金棕外壳，双眼闭合于纯粹满足，串灯与温暖巴伐利亚广场在身后发光。页脚：视频流程八镜头约一点五秒共十二秒，从面绳到撕开；镜头提示——开场广角、面绳搓揉特写、扭转戏剧特写、碱水浴特写、撒盐戏剧特写、烤炉中宽、揭示英雄广角、撕开温暖广角；光照与风格——全程温暖巴伐利亚日光、深金棕卷饼皮、粗白盐、丰富木纹、传统皮裤、串灯、三维鲜艳暖色全程。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case423",
    "title": "罗纳尔多地形海报",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/vireonixx/status/2069793294641778794",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case423/output.jpg",
    "imageAlt": "罗纳尔多地形海报示例图",
    "prompt": "创作一张非凡的收藏版运动员海报，灵感来自当代数据可视化、制图设计与编辑出版。构图须捕捉其曼联时期的一次动态转身，仿佛定格于加速与决策之间。表情传达年轻自信与不懈雄心。肖像融入由流动地形等高线、运动轨迹、方向系统与抽象地图构成的视觉世界，代表一生的进步，线条优雅而智慧而非技术化。大规模信息结构引导观者视线穿过构图同时强化运动与进化的叙事。配色结合北极蓝、珊瑚红、柔象牙与炭灰点缀。精致字体、层叠出版系统与当代信息设计营造整件作品的视觉纵深。最终图像应似获奖编辑特写，记录现代体育最非凡旅程之一。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-comparison_case112",
    "title": "鸟巢椅概念板",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2069779689074561192",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/comparison_case112/output.jpg",
    "imageAlt": "鸟巢椅概念板示例图",
    "prompt": "设计概念板：以鸟巢编织法为灵感的雕塑式休闲椅。四阶段序列从筑巢参考照片到构造图解，再到有机形态抽象，再到成品。互锁编织框架构成座椅与靠背，天然纤维软装配柔软衬垫，大地暖色调配精致抛光表面，可持续奢华美学。版式布局：上半部分为过程草图，下半部分为最终渲染椅子，温暖自然光照，比例 4:3。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case424",
    "title": "乌法旅行贴纸海报",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Sairah_0/status/2069779118535930286",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case424/output.jpg",
    "imageAlt": "乌法旅行贴纸海报示例图",
    "prompt": "创作一个通透的城市场景，左上角留有大面积字体安全留白。添加城市名与一句简短优雅的英文说明匹配城市氛围。背景自动适配城市：一处标志性主地标、当地建筑、咖啡馆文化、交通标志、路灯、花卉、树木、小型装饰细节与平静的日常瞬间。仅用三至六人，自然地与城市互动——咖啡馆交谈、步行、慢跑、速写或拍照。避免人群与单一英雄角色。风格：日式文具美学、奢华贴纸插画、高端商业扁平矢量海报、干净细轮廓、一致线宽、仅平涂色彩、无明暗、无渐变、无纹理。配色：腮红粉、蒙尘玫瑰、鼠尾草绿、暖奶油、柔米、低饱和灰绿。氛围：极简、优雅、沉静、精致、高端旅行明信片与生活方式品牌感。无写实、无水彩、无绘画效果、无摄影写实、无密集背景。比例 3:4。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case425",
    "title": "无限之爱演唱会海报",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2069749509392052645",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case425/output.jpg",
    "imageAlt": "无限之爱演唱会海报示例图",
    "prompt": "瑞士国际设计风格，极简扁平矢量海报，竖版 9:16，对角分割布局。左上：传统中文标题配衬线字体与流畅连笔衬线英文。右下：关键象征插画——扁平矢量艺术作品配鲜艳荧光渐变、微妙颗粒纹理、散布像素艺术图标、文化节庆海报美学、博物馆级平面设计。主题：无限之爱马拉松演唱会（花卉纹样）。4K。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ui_case196",
    "title": "九宫格产品企划",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2069628865044254934",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case196/output.jpg",
    "imageAlt": "九宫格产品企划示例图",
    "prompt": "以上传产品为中心生成三乘三图像网格（3:4 比例），用于奢华商业广告活动。九帧各传递独特视觉概念，同时全程保持产品视觉一致。九个概念：一英雄静物配大胆标志性排列；二极致微距揭示表面纹理与材质细节；三液体或粒子动态环绕产品；四极简雕塑式舞台配抽象几何；五悬浮元素传达轻盈与前瞻设计；六近景感官镜头聚焦触觉写实；七取自产品自身配色的色彩概念场景；八象征性成分或组件抽象；九超现实而精致的写实与想象融合。产品规则：百分之百忠实于产品形状、比例、标签、类型、颜色与品牌，无畸变或重设计，干净产品与背景分离。光照与质感：柔和受控影棚光照、微妙高光、真实阴影、超锐利对焦、高动态范围、编辑级奢华美学。氛围：精致、现代、超写实、向往感，为品牌官网、社媒网格与数字广告牌而构建。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ui_case197",
    "title": "3D 音乐播放器图标套组",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2071108428563697756",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case197/output.jpg",
    "imageAlt": "3D 音乐播放器图标套组示例图",
    "prompt": "设计一套完整的十二个音乐播放器首页分类图标，风格如专业应用界面设计师。图标覆盖：音符、黑胶唱片、均衡器、耳机、喜欢的音乐、音乐文件夹、视频、麦克风、播放列表、扬声器、CD 与收音机。每个以三维拟物风格渲染，鲜艳彩色点缀，白色背景圆角卡片。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-character_case31",
    "title": "温馨生活方式贴纸九宫格",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/RuzainaMeer/status/2071097968846057649",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/character_case31/output.jpg",
    "imageAlt": "温馨生活方式贴纸九宫格示例图",
    "prompt": "三乘三网格拼贴，九个插画贴纸式面板，全部为同一位年轻女性，棕色卷发凌乱发髻，柔和动画风插画风格配温暖粉彩调色板（腮红粉、奶油、暖棕、柔青）。每面板白底配微妙闪光与心形装饰，各展示她不同的温馨生活方式活动：面板一温馨厨房烹饪，穿奶油针织毛衣与围裙，搅粉色锅，旁有番茄与香草；面板二蜷于舒适椅读书，穿黑色oversized连帽衫，裹粉色毯，旁有心形咖啡杯与书架；面板三画布画架前作画，穿白色工装背心，持画笔于彩色调色板上方，柔和音符漂浮；面板四戴花卉手套与牛仔背心园艺，陶盆种花，旁有洒水壶与盛开的粉色花；面板五粉色垫上瑜伽伸展，穿粉色短背心与黑色紧身裤，优雅举臂，背景绿植，旁有水壶与哑铃；面板六拥抱金毛寻回犬幼犬，穿奶油连帽衫，周围漂浮粉色心形，大幸福微笑；面板七桌前写日记，穿粉色露肩针织毛衣，写笔记本，郁金香花瓶、点燃蜡烛，周围闪光点缀；面板八弹原声吉他，穿黑色休闲装，快乐微笑，音符与金色闪光漂浮；面板九背包旅行，戴草帽、墨镜、白T恤，手持展开地图，颈挂相机，背景飞机轨迹。所有面板角色设计一致，柔和线稿，温暖肤色，富有表情的大眼，温馨美学插画风格类似韩式条漫贴纸艺术，每面板干净白底，排列为三乘三网格。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case426",
    "title": "月之低语石墨肖像",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/AiwithLariab/status/2071096245611872431",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case426/output.jpg",
    "imageAlt": "Moon Whisper 石墨肖像示例图",
    "prompt": "创作一幅超精细单色石墨铅笔杰作，优雅的半脸肖像从纯白背景中浮现。面部置于构图最右侧，双眼安详闭合于宁静沉思中。可见的半脸须大而优雅，高度精细，带写实石墨明暗与细腻铅笔纹理。主体身后放置一轮巨大的发光满月占据背景近一半，周围环绕微小石墨星辰、微妙星尘与柔和天体粒子。飘逸黑发化为梦幻烟雾般细丝、精致蝴蝶与优雅漩涡铅笔笔触，融入月光氛围。保持极简纯艺术构图配充足留白，博物馆级石墨渲染，超写实铅笔纹理，柔和阴影，情感优雅，空灵之美，奢华画廊艺术品，竖版手机壁纸，杰作，8K，超精细，月之低语主题。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case427",
    "title": "涂鸦破墙海报",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Sheldon056/status/2071082708512465062",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case427/output.jpg",
    "imageAlt": "涂鸦破墙海报示例图",
    "prompt": "竖版电影感海报，「涂鸦破墙」视错觉风格——卡通角色并非作为独立三维人物立于真人旁，而是作为高度精细的涂鸦壁画绘于纹理砖墙之上，其一只或两只手仿佛破墙而出、自然环绕或与前方真人主体互动。错觉须无缝、可信、视觉震撼，融合写实透视、阴影、光照与纵深，营造涂鸦部分活过来的印象。整体构图具现代电影氛围配动态光照、丰富色彩对比与精心平衡的纵深。以时尚涂鸦灵感装饰元素增强海报——喷漆飞溅、都市纹理、油漆滴落、模板图案、几何点缀、微妙墙面裂纹、层叠图形造型与当代街头艺术细节，强化视觉身份而不显拥挤。主体姿势须与参考照完全不同，富有表现力、自信、自然动态而非僵硬扁平，肢体语言如国际时装模特，传达优雅、自信与不费力地动感配精致编辑美学。面部表情生动、吸引、充满个性，与观者建立更强情感连接。服装反映现代休闲时尚配时尚当代造型，结合不同颜色、纹理、材质与微妙图案的衣物以避免重复或单调，造型时髦、年轻、视觉均衡而真实可穿。海报内每个字体元素须为大胆、高端、抢眼的字体风格以呼应涂鸦概念，使用创意字体处理、层叠文字构图、动态尺寸与现代图形布局，使字体成为艺术品的有机组成部分而非平淡通用。整体海报须提供高端视觉体验配清新当代美学，避免平庸布局、重复构图、平庸设计选择或通用视觉处理。每个元素应贡献于充满活力、视觉丰富、现代街头艺术灵感的杰作，以超高清 8K 品质渲染，锐利异常、真实纹理与专业电影级后期。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case428",
    "title": "霓虹暗影缪斯",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamrealsnow/status/2071080066751312345",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case428/output.jpg",
    "imageAlt": "霓虹暗影缪斯示例图",
    "prompt": "以附图为精确身份参考，保留面部结构、发型、胡须、肤色、面部比例、眉毛、嘴唇、下颌线与整体肖像，以超写实精度呈现，不改变身份。将肖像转化为高端高对比单色矢量插画，干净漫画线稿与锐利赛璐璐上色。主体正面朝向镜头，自信表情与微抬下巴。在头发、耳朵、肩膀与下颌线周围添加鲜艳红色霓虹轮廓光。穿oversized黑色开衫衬衫搭于纯白色圆领T恤之外，配细银方形吊坠项链、奢华腕表与黑色墨镜架于头顶。纯黑背景配微妙漂浮粒子与戏剧性阴影。超干净矢量线条，高端海报构图，奢华编辑风格，锐利面部细节，电影感对比，仅黑、白与发光红的极简配色。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case429",
    "title": "茶园绘本拼贴",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Sairah_0/status/2071076528532971692",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case429/output.jpg",
    "imageAlt": "茶园绘本拼贴示例图",
    "prompt": "创作一幅异想天开的手绘故事书风格插画，灵感来自三张竖向拼贴的旅行抓拍照。保留参考的精确构图、姿势与取景：一位年轻女性，深棕色长直发，穿oversized米白纽扣衬衫、黑色智能手表与圆形墨镜，立于齐腰深的葱郁绿茶园中。第一面板她微左转、双手轻拂茶叶；第二面板从背后拍摄、双臂外展、安详穿行茶丛；第三面板微右转、柔笑轻触叶片。将写实茶园转化为梦幻多彩的插画风景——起伏丘陵、俏皮风格化树木、盛开野花与繁茂枝叶，使用柔和粉彩、丰富绿、暖黄、腮红粉与青色点缀。在构图周围添加异想天开涂鸦元素——心形、星星、云朵、阳光、闪光、小花与手绘装饰标记于温暖奶油纸背景。保持竖向三面板布局配充足间距、圆润有机造型、纹理笔触与温馨儿童绘本美学。插画应感觉欢乐、宁静而魔幻，干净轮廓、微妙纸张纹理、高细节与迷人水粉水彩灵感质感。无文字、无水印、高分辨率、竖向。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case320",
    "title": "单色摄影棚肖像网格",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/harboriis/status/2071068008341262538",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case320/output.jpg",
    "imageAlt": "单色摄影棚肖像网格示例图",
    "prompt": "一组高端时装编辑肖像系列，一位时尚年轻男性于极简影棚内拍摄，温暖米色墙面与柔和自然窗光。系列含九张独特肖像排列于干净三乘三网格，各展示不同放松姿势与表情同时保持统一的奢华编辑美学。模特拥有浓密凌乱波浪深色头发、分明面部特征，穿着优雅单色衣橱——全黑色服装，含合身黑色衬衫、修身黑色长裤、轻薄针织、纯黑T恤与结构化黑色西装外套，银色腕表点缀数套造型。每张肖像捕捉不同情绪与姿势：侧坐木椅手托下巴；横靠椅背安静内省；侧光锐利下颌线望向远方；随性后倚一手穿过发丝；前倾双肘搁膝凝视；手托面颊沉思；坐姿回望肩后；黑白中单拳抵唇；开领自信放松。柔和漫射日光自大窗射入，营造平滑阴影与微妙高光以突显面部结构与面料纹理。背景干净不杂乱，全程暖中性色调。85mm 全画幅镜头 f/2.2 拍摄，浅景深，柔和编辑光照，低饱和调色，微妙胶片颗粒，奢华杂志摄影，超写实，超精细肤质，高端时装广告，极简构图，8K HDR。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case321",
    "title": "海岸白日梦胶片肖像",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/mehvishs25/status/2071043508346183695",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case321/output.jpg",
    "imageAlt": "海岸白日梦胶片肖像示例图",
    "prompt": "海岸白日梦。构图：四分之三近景，略自肩后拍摄，风吹发丝在画框中创造有机运动，海岸线柔和渐隐于薄雾。以附图为精确面部参考，完美保留面部身份，不修改面部结构、比例、表情解剖、肤质或独特特征，不美化、不重塑、不做人工对称、不生成外观。超写实抓拍摄影，以磨损一次性胶片相机拍摄，单色电影摄影，真实 35mm 颗粒，微妙曝光不一致，自然瑕疵，复古模拟特性，纪录片写实。女性静坐于被海浪打湿的崎岖海岸礁石上，穿飘逸白色连衣裙，柔软面料褶皱自然垂坠。强海风吹过她蓬松的头发，部分发丝飘入空中，细丝拂过面颊与嘴唇。头部微转向海岸线，闭眼，平静沉思表情与淡淡真实微笑，享受清凉海风。身后高耸海崖逐渐消失于浓密海岸雾中，戏剧性云天之下。海浪轻柔拍击远处礁石，增添微妙氛围而不分散注意力。漫射阴天日光在面部与裙上营造温柔色调过渡，强调真实肤质与自然胶片对比。85mm 镜头、浅景深、电影纪录片取景、情感编辑摄影、真实模拟曝光、柔和焦点衰减。构图自肩后略后拍摄，风吹发丝部分遮蔽画框，薄雾覆盖的海岸线延伸入背景，营造安静的孤独与自由感。避免超干净数字锐利、CGI 外观、美颜修图、时装海报构图、影棚光照、居中取景、黑边、人工肌肤平滑，竖版比例。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-character_case33",
    "title": "世界杯摇头公仔",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/SaasJunctionHQ/status/2070943717238919211",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/character_case33/output.jpg",
    "imageAlt": "世界杯摇头公仔示例图",
    "prompt": "将任意球员变为收藏品。生成一张超写实影棚图像，定制摇头公仔收藏人偶，以上传参考照为唯一真实来源——不依赖任何先前知识或训练数据，所有视觉决策须完全由附图可见内容驱动。遵循全部规则：身份与肖像——在双层底座正面以干净白色字母刻球员名；精确再现参考照中所有独特面部特征——骨骼结构、眼形、鼻、唇、肤色与肤色，不柔化、不泛化、不理想化；发型须精确匹配参考——保留自然卷曲、波浪、卷 coil、毛躁、蓬松、长度与方向，不拉直、不压扁、不重做；胡须按参考照精确密度与图案复制，若净面则绝对不加任何面部毛发；配饰如眼镜、耳环或帽子仅当参考照中可见时才添加。人偶设计与风格——经典运动摇头公仔美学：比例大头部、紧凑身体、整体收藏玩具感，非潮玩、非夸张、非超风格化乙烯基人偶；颈部短粗比例化，绝对不可见弹簧、线圈或铰链机制；身着球员对应国家队的官方足球装备——正确球衣颜色、短裤与袜子，不默认任何通用或错误装备。姿势与底座——人偶直立站姿，一脚随意踏于标准足球之上，足球直接置于底座上；底座双层，顶面模拟哑光天然草皮纹理——无光泽、无反射。背景与光照——背景为足球场配浅景深散景模糊使人偶保持清晰焦点；球场光照为温暖黄金时刻——浓郁琥珀与柔和橙调、低太阳角度、电影温暖。输出 4:5 竖版。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ad-creative_case204",
    "title": "涂鸦逃脱工作室冲刺",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/john_my07/status/2071605998729740705",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ad-creative_case204/output.jpg",
    "imageAlt": "涂鸦逃脱工作室冲刺示例图",
    "prompt": "创作一张超写实编辑级影棚照片，平滑米白无缝背景，明亮通透极简美学。一位粉蓝色精灵短发的爱玩年轻女性被抓拍于俏皮逃脱的自发瞬间——她向前小跑时爆发出笑声，笑容宽大真实，眼睛几乎因欢乐而闭合。姿态充满活力，仿佛在被轻轻拉住的同时仍试图继续奔跑，营造幽默的拔河效果。姿势与运动：自然跨步中途跑步动作，一腿微抬离地，双臂自由摆动配真实跑步动态，一手自信地持一根鲜艳彩虹螺旋棒棒糖，头发与衣物微妙运动，强烈前进动量配可信身体力学。穿搭：宽松粉蓝色oversized卫衣、米色阔腿休闲裤、红格棋盘 slip-on 滑板鞋、圆框眼镜随意架于头顶而非遮眼。涂鸦角色互动：一个简单的手绘黑色涂鸦小人以粗马克笔线条直接绘于照片之上，圆头、小点眼、直中性嘴；涂鸦伸出夸张手臂抓住女性卫衣后背，明显拉伸面料，在衣物上产生真实褶皱与拉扯线，同时将她的肩膀微微向后拉而身体仍向前移动。涂鸦手臂周围小型速写式运动标记暗示用力与抵抗，女性头部周围额外俏皮涂鸦点缀强调其欢笑、兴奋与运动。细节：解剖正确的手与手指、oversized袖口下双手清晰可见、棒棒糖真实握持与比例、可信面料张力与衣物物理、明亮高调光照配柔和自然阴影、干净编辑生活方式摄影美学、幽默视觉叙事、现代高端杂志品质、健康俏皮氛围、超写实纹理、锐利对焦、清晰细节、8K 分辨率、竖构图。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ad-creative_case205",
    "title": "地铁 CCTV 惊悚画面",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/frametheory058/status/2071605430858756121",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ad-creative_case205/output.jpg",
    "imageAlt": "地铁 CCTV 惊悚画面示例图",
    "prompt": "创作一张电影感监控惊悚图像，设定于巨型多层地下地铁站内。相机如天花板安装的闭路电视，高位约四十度角俯视长工业扶梯与车站复杂建筑。4:5 竖构图，扶梯对角切过画面营造强纵深与比例。车站挤满数百通勤者双向流动，形成混乱人流配微妙运动模糊。画面中央，一位与上传参考图匹配的人物正在下行扶梯上，快速移动、略前倾，一手扶扶手扶手带保持平衡，另一手持一只光泽黑色迷你包带真实反射。戏剧性瞬间，主体突然回头越过肩膀直视镜头，创造强烈的第四面墙突破时刻，仿佛知道正被监视。添加真实闭路电视界面叠层：实时录制指示符、时间戳与摄像头编号、锁定于主体的人脸跟踪框、角落的二级放大面部识别面板、最简技术界面元素与监控图形。光照为冷调荧光灯，现代地铁站典型，金属扶梯表面与抛光扶手带上有真实反射。周围人群略模糊而主体保持锐利对焦。整体氛围：高端纪录片监控惊悚、超写实、电影构图、真实肤质、自然人群行为、精细环境反射与专业电影级写实。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-character_case34",
    "title": "钻石牙饰夸张公仔",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2071470936973533271",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/character_case34/output.jpg",
    "imageAlt": "钻石牙饰夸张公仔示例图",
    "prompt": "为参考图中的人物创作一张超精细全身三维风格化漫画公仔，保留其确切面部、肤色与族裔特征。风格：超大头部配微型紧凑身体，经典漫画夸张。表情：顽皮眨眼与坏笑，露出闪亮钻石牙饰配光线追踪反射与棱镜闪光。姿势：直立站姿，一臂伸向镜头展示厚实镶钻手表，每颗宝石精彩折射光线。服装：精确匹配参考图穿搭，面料以微细节缝线与真实褶皱渲染，肤质带次表面散射、影棚级干净平滑。场景：干净纯色鲜艳蓝色背景、正面柔光箱光照、无背光无轮廓光，钻石为画面中最亮焦点。渲染：Octane 渲染品质、电影 8K、锐利边缘、杰作级、无文字无水印、4:5 比例。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ecommerce_case177",
    "title": "VOLT Rush 柑橘爆发",
    "category": "商品与电商",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2071742565339320451",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ecommerce_case177/output.jpg",
    "imageAlt": "VOLT Rush 柑橘爆发示例图",
    "prompt": "超电影感产品摄影，一罐霓虹绿能量饮料以锐利对角倾斜，从发光柑橘片与电火花中爆裂而出。冷冻青柠汁飞溅与冰碎片悬浮半空，微滴清晰可见。高对比影棚光照配绿色霓虹轮廓光、深暗背景、光泽铝面、浅景深、超写实、8K、高端广告风格。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case322",
    "title": "阴郁 GQ 海滩封面",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2071772854908326260",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case322/output.jpg",
    "imageAlt": "阴郁 GQ 海滩封面示例图",
    "prompt": "电影感男士杂志封面——男模深色胡须与凌乱卷曲深色头发，倚靠于一辆复古一九六〇年代银色敞篷车上，位于雾蒙蒙的阴天海滩。他直视镜头，表情冷酷锐利。穿搭：oversized黑色皮革飞行员夹克配多功能口袋敞开穿于白色罗纹背心之外，高腰黑色长裤配双扣腰带，两条细金项链配小吊坠垂于胸前。背景：浅景深、去饱和沙滩、苍白雾天、抛光金属银色车身反射平坦漫射光。光照：阴郁电影调色、低饱和大地图、黑与银、全程高端胶片颗粒。字体叠层：顶部粗体白色衬线杂志标志，左侧中部较小白色无衬线文字。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-portrait_case323",
    "title": "镀铬面罩侧面肖像",
    "category": "摄影与文档",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2071712457262080034",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/portrait_case323/output.jpg",
    "imageAlt": "镀铬面罩侧面肖像示例图",
    "prompt": "超写实科幻肖像，年轻女性左面侧脸，穿镜面镀铬蓝色夹克与未来感头盔配宽光泽面罩遮住双眼。头盔具平滑曲线、白色饰边、透明侧板配微妙科技细节。面罩带冷蓝反射光泽，赛博朋克邂逅太空时代时装。干净极简构图配蓝色渐变背景。电影影棚光照、高对比、夹克与头盔表面的镜面反射。面部特征与材质纹理锐利异常、轻微散景、8K 分辨率、超写实编辑美学。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case430",
    "title": "水彩夏日城市恋曲",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/Goodmanprotocol/status/2071643725030457469",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case430/output.jpg",
    "imageAlt": "水彩夏日城市恋曲示例图",
    "prompt": "在纹理手工水彩纸上创作一张 3:4 竖版水彩城市速写旅行海报。城市输入：【城市名】。创作反映该城市真实建筑、地标、街景生活、气候与文化氛围的浪漫日常场景，使用可辨认的城市专属元素如当地建筑、咖啡馆、阳台、运河、桥、有轨电车、塔楼、屋顶、瓷砖、滨水区、街道家具、植物或招牌，避免通用欧洲风景或错误地标。主场景：两位恋人为主角，略低于中心放置，可步行、坐于户外咖啡馆、分享冰咖啡、立于水边、观景或轻轻牵手，姿势自然、亲密、安静而不摆拍，不展示单人。人物：穿着适合该城市的时尚休闲夏装——亚麻衬衫、轻开衫、宽松长裤、夏装连衣裙、运动鞋、凉鞋、墨镜、斜挎包、托特包、相机、糕点或冰饮，以白色、浅蓝、水蓝与柔灰蓝为主配一两处小柠檬黄点缀，发丝与宽松面料有微风动感。构图：干净竖版海报布局配大面积留白与通透编辑感，人物中小尺度，由城市专属建筑或风景框住，建筑与地标置于背景或两侧柔和融入纸张纹理，上半部分明亮开阔，右上角留作字体。字体：右上角以优雅斜体英文标注城市名，下方配一句简短诗意英文短句匹配城市清新夏日氛围，使用柔和钴蓝、灰蓝或低饱和海军蓝字体，保持最简、可读、自然融入纸张。配色：清新蓝黄夏日调色板——百分之七十五冷蓝与蓝灰，百分之十五干净白与暖米白纸高光，百分之十浅柠檬黄、柔奶油黄、阳光米或浅金点缀，蓝为主色而黄增添温暖与视觉节奏，黄仅用于遮篷、窗光、花卉、雨伞、糕点、招牌、衣物细节、饮料标签或阳光建筑边缘。水彩技法：半透明晕染、柔和蓝色渗化、微妙颜料颗粒化、干画湿接纹理、温柔笔触 bloom、淡阴影、可见手工纸纹理、最少飞溅与精致反射，黄色晕染如光触及纸张。绘制细节：精致细墨线稿配略不完美的手绘线条，添加精炼城市速写细节——窗户、百叶窗、阳台、路灯、咖啡椅、铺路石、栏杆、植物、衣褶、发丝、手、鞋、包、杯、招牌与柔和地面痕迹，面部柔和暗示而非写实。氛围与品质：极简水彩城市速写、浪漫夏日旅行海报、安静爱情故事、城市专属氛围、清风蓝色调色板配柠檬黄高光、优雅时装插画、温馨日常、日式柔和感、高端编辑观感、平静粉彩氛围、柔和自然光照、干净背景、可印刷、8K。避免单人、通用城市、错误地标、全蓝背景、单色蓝、无生气色彩、黄为主色、橙偏重、棕为主色、暗复古、泥米色、霓虹色、过饱和、摄影写实、三维渲染、重轮廓、硬阴影、拥挤街道、杂乱背景、写实面部、僵硬姿势、别扭解剖、光泽纹理、粗体字。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case431",
    "title": "CMYK 罗纳尔多收藏海报",
    "category": "海报与排版",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/vireonixx/status/2071629983324488160",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/poster_case431/output.jpg",
    "imageAlt": "CMYK 罗纳尔多收藏海报示例图",
    "prompt": "创作一张世界级收藏版运动员海报，灵感来自高端胶印、编辑出版与获奖平面设计。构图由巅峰期俱乐部时期超近景肖像主导，占构图近百分之七十五，标志性发型、锐利下颌线与自信表情以非凡写实度渲染。核心视觉概念探索四色印刷本身之美——肖像非普通调色，而是在选定边缘处微妙分离为重叠的青、品红、黄、黑印刷层，营造高端印刷工坊的精致套印效果，效果须手工感与奢华感而非数字故障艺术。巨型编辑字体自然融入肖像，同时打印机裁切标记、色彩校准条、套准靶、生产笔记、纸张代码与印刷规格成为图形语言的一部分。配色以暖纸白为主配受控四色点缀。丰富纸张颗粒、触感油墨纹理、微妙叠印效果、高端胶印写实、博物馆级印刷生产、优雅编辑层级、设计平台精选项目品质、当代体育品牌、收藏版杰作。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ui_case198",
    "title": "Y2K 原宿品牌徽章",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2071683274725028140",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case198/output.jpg",
    "imageAlt": "Y2K 原宿品牌徽章示例图",
    "prompt": "你是一位资深矢量设计师，专精于千禧年原宿徽章艺术。你的世界：东京 bootleg 文化、二〇〇〇年代初日式品牌混搭、复古未来贴纸美学。每个作品须如干净的矢量文件，扁平且贴纸就绪。徽章结构须为每个品牌全新发明，非模板化。品牌分析：设计前须解析主色——品牌主色柔化为粉彩千禧年版本仍可辨认但更轻更萌；点缀色——品牌辅色推向温暖饱和以增添活力；深色——品牌深色调（海军蓝、深棕、近黑）用于轮廓与挤出；文字内容——品牌名粗体小写或最具标志性缩写；片假名——正确日文音译为次要文字元素；原产国旗——品牌原产国国旗为小型扁平元素；造型语言——品牌视觉识别的标志性几何形式用作轨道与背景元素，绝不使用通用椭圆；文化符号——一至两个品牌宇宙的小型标志性物件以微型扁平插画呈现；构图逻辑——运用以上一切设计徽章布局使其感觉专为此品牌发明。画布：1:1 正方形，扁平米白或暖浅灰背景，完全空白无纹理无渐变。徽章结构：以解析的造型语言与构图逻辑构建完整徽章。固定规则：中心文字元素、周围品牌专属造型配 Z 层堆叠、至少一个元素同时穿过文字前后以营造纵深、统一徽章或补丁剪影，造型须感觉必然——只属于此品牌。字体：品牌名大号粗体小写配宽圆展示字体，扁平主色填充，深色挤出偏移右下方为字高百分之八至十二，粗深色轮廓，无渐变无渲染。千禧年签名元素：每个徽章须含点缀色速度线或运动纹理于背景造型内、深色尖锐四角星装饰于文字附近、片假名音译自然嵌入构图、原产国旗为小型准确扁平元素、品牌文化符号以微型扁平插画融入徽章。技术规格：仅扁平矢量，零渐变零效果零模糊零渲染，全程干净锐利边缘，最多四色——粉彩主色、暖饱和点缀色、深色轮廓、米白。须如收藏贴纸或刺绣补丁，每个品牌产生结构不同的徽章因每个品牌有不同造型语言，千禧年日式美学为常量、结构为变量。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-ui_case199",
    "title": "怀旧记忆网格布局",
    "category": "UI 与界面",
    "description": "来自GPT-Image-2 案例观摩馆 EvoLinkAI的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "界面",
      "截图",
      "可复用"
    ],
    "source": "GPT-Image-2 案例观摩馆 / EvoLinkAI",
    "sourceUrl": "https://x.com/iamaiistudio/status/2071561442013118600",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-prompts@main/images/ui_case199/output.jpg",
    "imageAlt": "怀旧记忆网格布局示例图",
    "prompt": "生成无缝网格布局，每面板展示一个独立场景，主角为同一主体。全程保持主体外观、色彩与光照完美一致。主题：怀旧记忆，氛围：温暖怀旧，风格：怀旧电影写实。无文字、无间隙。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case544",
    "title": "幼儿词汇拆解学习卡",
    "category": "图表与信息图",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "信息图",
      "图表",
      "讲解"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/Naiknelofar788/status/2092993830220120231",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case544.jpg",
    "imageAlt": "幼儿词汇拆解学习卡示例图",
    "prompt": "为学龄前儿童创作一张干净、儿童友好的教育词汇海报，灵感来自简单视觉学习卡。左侧以大型写实物体呈现【水果】，右侧展示同一水果的【部位／切片／瓣】。两者之间以俏皮的虚线曲线箭头连接，配一个简单火柴棍小人指向较小部分。顶部以大号粗体大写字母标注水果名，较小图像下方以大号粗体大写字母标注部位名。使用柔和白色与极浅粉蓝背景、圆角图像面板、干净间距、写实水果摄影、简单蓝色字体与最简俏皮插画。整体设计须明亮、教育性、现代、不杂乱、易于幼儿理解，如高端学前词汇学习卡。竖版 4:5 构图、高分辨率、柔和光照、清晰标签、无多余装饰。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case543",
    "title": "旅行纪念珐琅徽章",
    "category": "商品与电商",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/Emmma__0/status/2093194689222705645",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case543.jpg",
    "imageAlt": "旅行纪念珐琅徽章示例图",
    "prompt": "将参考照片转化为旅行纪念珐琅别针徽章，以场景而非孤立单一物件构图。主体层级：照片的标志性风景、地形或地标构成徽章主体并占据大部分面积；若照片中人物突出，以小型简化人偶按真实相对比例保留于风景中——人物为点缀、风景为主体，保留人物与环境的原始空间关系与比例。人物渲染：扁平珐琅色块匹配照片中真实服装与发色，面部为光滑浅肤色珐琅平面无绘制五官——不渲染为深色或黑色剪影，不涂黑面部，肤色为温暖浅珐琅色明显浅于服装。风格：剪影与每个内部分隔线周围细抛光金轮廓、光泽珐琅填色、柔和均匀光照仅在金线上有柔和光泽、极微妙投影。外轮廓跟随场景自身形状而非简单矩形。背景：扁平深海军蓝粗麻纹理，徽章居中填充约百分之六十画框。避免黑色剪影人物、涂黑面部、深色无特征头部、肖像特写、详细面部特征、人物主导徽章、裁掉风景、四分之三角度、微距产品摄影、重镜面眩光、卡通、写实场景、文字、水印。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case542",
    "title": "黑白排版侧脸肖像海报",
    "category": "海报与排版",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/HustleXR/status/2093206386012230000",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case542.jpg",
    "imageAlt": "黑白排版侧脸肖像海报示例图",
    "prompt": "高对比黑白排版肖像海报，【人物】侧脸配【特征】。以粗黑剪影块面构建肖像，锐利留白、粗犷墨边缘、碎片模板造型、微型编辑字体、竖向排版点缀与富有表现力的手绘书法标记。在颈部与身体区域内放置一个大型可读文字块，意为【文字】，二至四行堆叠，使用超大涂鸦感字母感觉融入剪影。页脚附近放置一个平面设计标志意为【标志】。极简米白纸背景、不对称布局、裁切竖构图、实验编辑海报设计、生墨印刷纹理，比例 4:5。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case541",
    "title": "50/50 混合媒介回忆卡",
    "category": "摄影与文档",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/Sairah_0/status/2093212900160868430",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case541.jpg",
    "imageAlt": "50/50 混合媒介回忆卡示例图",
    "prompt": "将上传照片转化为竖版混合媒介记忆卡，严格五五分割。上半部分保留原始照片不变，下半部分使用纹理米白手工纸并添加与照片色调匹配的低饱和不规则色块。以简单深色蜡笔速写重绘主体，线条松散不完美、细节极简，添加一句简短手写英文短语与微妙孔版印刷颗粒。营造安静怀旧的莫兰迪风格美学配充足留白，不添加额外元素也不完全复制参考构图。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case540",
    "title": "梦幻未来城市编辑艺术海报",
    "category": "海报与排版",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/Naiknelofar788/status/2093230701986672924",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case540.jpg",
    "imageAlt": "梦幻未来城市编辑艺术海报示例图",
    "prompt": "创作一张视觉难忘的编辑艺术海报，呈现梦幻未来世界——熟悉日常生活邂逅超现实建筑。宏大雕塑建筑、蜿蜒道路、超大植物、微小人物、意外悬浮元素、戏剧性透视、电影氛围与一个标志性焦点。融合复古旅行海报设计与现代奢华编辑美学、精致低饱和色彩、柔和自然光、微妙胶片颗粒、触感纸张纹理、干净几何造型、极简构图、怀旧而未来、异想天开但高端、高细节、立即可辨认剪影、适合社媒传播、收藏艺术印刷品、无杂乱、无摄影写实，竖版 4:5。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case539",
    "title": "粗粝手绘搭档肖像海报",
    "category": "海报与排版",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/kingofdairyque/status/2093279729717780736",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case539.jpg",
    "imageAlt": "粗粝手绘搭档肖像海报示例图",
    "prompt": "粗粝速写感图形肖像海报，【人物】穿【服装】，半身大比例入框，身旁紧密伴随【动物】，极简【场景】背景。以粗犷富有表现力的插画风格渲染——断裂黑色墨轮廓、松散速写线、潦草排线、不规则笔宽、不完美线缘、快速 gestural 笔触、简化解剖、扁平赛璐璐式阴影块面与精简细节。使用克制配色——一个主温暖场、一个冷色对位场、深墨阴影与少量苍白高光点缀。面部超大居中，裁至躯干中部，动物置于前景下方或主体旁，以同样简化粗粝线稿绘制。场景简化为仅两至三个大胆剪影造型于主体身后，无详细环境渲染。添加窄暖米白海报边框与极轻印刷纹理。强态度、图形海报能量、刻意不完美笔触、粗粝速写质感，比例 4:5。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case538",
    "title": "橡皮章旅行田野笔记海报",
    "category": "海报与排版",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/MahnoorAi12/status/2092221482139349307",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case538.jpg",
    "imageAlt": "橡皮章旅行田野笔记海报示例图",
    "prompt": "橡皮章旅行田野笔记海报——自然写实版。为每张上传照片单独创作一张，绝不拼贴或多图合并。4:3 横版构图，左侧原始照片与右侧仿旧纸张田野笔记区之间自然视觉过渡，不添加明显分割线。左侧原始照片占约百分之五十八——保持照片视觉真实可辨认，保留原始主体、透视、地形、建筑、植物、人物、空间关系、自然光、阴影、纹理与整体氛围，不重设计或重新诠释照片，仅施加极微妙编辑照片处理——温和色调平衡、克制调色、略微柔化高光与极细自然胶片颗粒，仍须如真实现场照片而非人工图像，允许自然裁切以适配 4:3 布局但不拉伸、扭曲、移动、替换或重绘主体，避免过度锐利、HDR、人工清晰度、电影调色或过于完美的细节。右侧仿旧纸田野笔记占约百分之四十二——使用温暖米白、略仿旧纸张配可信物理纹理，含极微妙纸纤维、细颗粒、微弱处理痕迹与哑光表面，大面积完全留白，纸张须如建筑师旅行笔记本或田野日志的真实页面而非设计海报背景，避免过强污渍、装饰纹理、复古滤镜或人工做旧。小型橡皮章：研究照片并仅识别令地点立即可辨认的少数视觉特征，将其精简为紧凑、不完美的多色橡皮章印痕，不逐元素复制照片。激进简化仅保留最有意义的视觉关系——独特建筑与剪影、重要屋顶塔楼穹顶拱或结构造型、山或地形轮廓、海岸线或道路方向、少数可辨认树木或植被形式、简化聚落层、一两个重要前景造型。移除人群、车辆、密集窗户、重复建筑、微小植被、装饰物件与无关背景细节。结果须如旅行者真正雕刻的小橡皮章而非整张照片的微缩插画。章印置于右侧纸面中下部位，占右区高度约百分之三十至三十八，周围留充足空白纸面，不放大为大插画。章印颜色与印刷特性：从原始照片自然提取约二至四种低饱和专色，可能含碳黑、深绿、砖红或暗红、赭石、板岩蓝、灰褐或大地棕，若照片暗示不同克制配色则不强加。每色为独立物理油墨层，印刷须感觉真正手工——略不均匀压力、微小油墨间隙、干燥区、纸张透显、粗糙雕刻边缘、不规则线宽、小轮廓断裂、颗粒油墨纹理、微弱重影、轻微自然色层套印错位、微妙边缘变化。不完美须小而可信如手工压印，避免完美对齐数字层、平滑矢量边缘、干净渐变或人工夸张做旧，章印须如物理印刷而非数字插画。田野笔记字体：仅基于照片中实际地点与图像生成少量文字——地点英文名、编号、三个简短英文关键词、公历年份，置于章印下方或旁边留白处，使用小型低调打字机或档案田野笔记风格，字体有极轻微机械不规则如旧田野笔记本上打印，保持安静且次于照片，拼写正确，不添加口号、品牌、旅游短语、装饰引语或多余文字。整体写实：成品须如真实旅行照片旁边贴于建筑师个人笔记本页上的小型手工田野章印。优先微妙物理写实而非视觉完美，照片须保持最强视觉元素，章印须如从照片中提取的记忆碎片而非第二张插画。使用克制对比、自然不完美、可信纸张纹理与略不完美印刷，成品须安静、触感、纪录片式、收藏级且真正手工。避免明显分割线、圆形印章、邮票边框、齿孔、蜡封、贴纸布局、纪念卡设计、通用旅行模板、平滑矢量标志、精致数字插画、卡通风格、三维渲染、塑料纹理、光泽渐变、过饱和、HDR、过多文字、装饰杂乱、过于干净几何、完美对齐油墨层、密集微缩建筑或对原始照片的任何更改与重绘。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case537",
    "title": "地下档案馆暗黑概念海报",
    "category": "摄影与文档",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/PromptSin/status/2092390329890849163",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case537.jpg",
    "imageAlt": "地下档案馆暗黑概念海报示例图",
    "prompt": "用途：风格化概念。资产类型：「你的暗面」主题竖版社媒艺术品。创作一个原创的心理暗黑超现实场景于一座巨大地下档案馆中。无尽密封黑书书架如摩天楼般升起并消失于雾中。中央过道，一个穿骨白色衣物的人形独自跪于地上一本打开的书前，书页无文字可见。空白书页中升起一个完全由浓密黑烟构成的真人大小人形，与跪者面对面站立。烟人无眼无口，其胸口含一扇小锁紧的深红色门，细线连接那扇门与跪者的双手，暗示一个终于被承认的秘密自我。竖版 9:16 构图，高耸书架形成狭窄对称峡谷，冷银色光柱自高处射入，两个人形小置于下方中央，上方压倒性巨大比例。黑纸、仿旧石材、漂浮灰烬、体积雾、微妙抛光地面反射，高端超写实暗黑概念艺术，精致编辑构图，安静的恐惧与内省而非恐怖奇观。配色：黑曜石黑、石墨、骨白、冷银，微小深红点缀仅在门处。约束：完全原创隐喻；空白书页绝无文字；无可辨认人物；无文字、符号、标志、签名、边框或水印。避免可见字母或符文、肖像特写、分裂面孔、皮肤上黑色物质、发光眼睛、血腥、骷髅、传统鬼魂、奇幻巫师造型、模仿任何具名艺术家。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case536",
    "title": "春日樱花回眸电影人像",
    "category": "摄影与文档",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/SheBuildsAI_/status/2092431090095149533",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case536.jpg",
    "imageAlt": "春日樱花回眸电影人像示例图",
    "prompt": "春之低语。场景：温暖春日下午盛开樱花树下宁静小径，粉色樱花布满头顶树冠，精致花瓣优雅飘落空中，柔和阳光透过枝叶洒下，营造梦幻迷人氛围。主体：年轻女性背对镜头行走后温柔回头越过肩膀，带柔和神秘微笑，穿飘逸天然亚麻连衣裙随微风优雅飘动，突显精致五官与不费力优雅。细节：风将无数粉色樱花瓣吹过画框，温暖阳光在整场景创造发光高光，每缕发丝在风中自然飘动，超写实肤质、逼真面料褶皱、柔和花卉环境与微妙大气雾增强电影写实。氛围：优雅、宁静、浪漫、梦幻、永恒、电影感、优雅而迷人。光照：温暖春日阳光透过樱花枝叶、柔和自然照明、发光高光、体积光束、温柔环境阴影与微妙大气雾。构图：电影编辑肖像以 85mm 镜头拍摄，主体四分之三回肩姿势，浅景深、奶油散景、均衡构图配花树、柔和引导线与沉浸式视觉叙事。风格：超写实、杰作、编辑时装摄影、模拟胶片美学、梦幻粉彩调色板、超写实肤质、高细节、浅景深、奶油散景、大气雾、HDR、电影写实、8K。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case535",
    "title": "同一人脸十二款发型 Lookbook",
    "category": "摄影与文档",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/Ciri_ai/status/2092452220768002400",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case535.jpg",
    "imageAlt": "同一人脸十二款发型 Lookbook示例图",
    "prompt": "创建十二面板网格（三列四行，编号一至十二），展示参考照片中同一人物的十二种不同发型，此为发型 lookbook。最终图像比例 4:5 竖版。面板之间唯一变化的是头上发型——仅形状、风格与长度改变，其他一切与参考照完全一致。身份锚定（关键）：每面板面部须与参考照完全相同——精确保留面部骨骼结构、下颌线、颊骨、鼻形、唇、眼形与间距、眉毛、肤色、肤质（毛孔、自然瑕疵）与整体面部比例，同一真实人物在全部十二帧中，不美化、不瘦脸、不改年龄或表情。强制规则：无墨镜——十二面板双眼须完全可见；无环境背景——每面板须为纯色统一浅灰影棚背景，零物体、零纹理、零渐变，仅平面中性灰；发色全程保持与参考照完全一致，仅形状、长度与风格变化，颜色永不改变。每面板保持一致：妆容与肌肤——若参考照有妆则每面板精确复制，同唇色、同眼妆、同眉型，若无妆则全面板无妆，不增减或更改妆容；服装——参考照中可见服装每面板精确复制；配饰——保留参考照所有可见配饰（耳环、项链、戒指、手镯、穿孔、腕表、眼镜等），不省略、不缩放、不改色、不重做，若戴光学眼镜（非墨镜）则每面板保留；背景——每面板纯色浅灰影棚背景，无房间、家具或环境。十二发型：一精灵短裁——极短、纹理化、顶部微凌乱配两侧与后颈渐削；二经典波波——下巴长、直发、平齐发尾、干净中分；三长层次波浪——过肩、柔软丰盈波浪配修饰脸型层次；四光滑低发髻——头发平滑后拉至后颈紧低发髻，无飞发；五窗帘刘海中长——柔和 parted 刘海修饰脸型，发长刚过肩；六高马尾——头发上拉至光滑高马尾，顺滑头顶，长度垂后；七法式波波——短波波至下颌线配额头柔和平齐微刘海；八长直发中分——极长、光滑、笔直，远过肩；九蓬松狼尾——中长、重层次、 choppy 刘海、纹理化丰盈略野；十优雅盘发——头发上梳为精致 chignon 配柔和修饰脸型碎发；十一短卷裁——全头短丰盈自然卷，两侧渐削；十二侧扫好莱坞波浪——长 glamour 深侧分，雕塑复古波浪垂于一肩。摄影规格：专业单反相机 85mm f/1.4 镜头、影棚人像光照（柔主光、微妙补光）、浅景深配面部锐利对焦、每面板纯色浅灰影棚背景、自然肤质渲染带可见毛孔与真实发丝（无塑料或 CGI 感）、十二面板光照调色曝光一致、超写实、高细节、超写实、8K、无插画、无绘画效果、无过度平滑、无墨镜。每面板左上角清晰编号一至十二，整体输出比例 4:5。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case534",
    "title": "红光干扰实验编辑人像海报",
    "category": "海报与排版",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/Goodmanprotocol/status/2092471662126211143",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case534.jpg",
    "imageAlt": "红光干扰实验编辑人像海报示例图",
    "prompt": "使用以下可定制输入创作一张中等尺寸 9:16 实验编辑肖像海报。主体：【成人男或女肖像】；干扰方式：【色彩分裂／窄光束／水平切割／运动面纱】；标题：【标题】；调色板：【主中性调加一点缀色】；氛围：【锐利／电影感／克制／实验性】。创作醒目的近景或半身肖像，主体占据画面强部分，保留写实面部特征、自然肤质、真实头发、写实比例、清晰情绪与强剪影，肖像在图形介入之前须作为时装照片视觉成立。仅使用一种主要干扰方式：色彩分裂——不均匀半透明条带选择性偏移、揭示、分离或扭曲肖像部分；窄光束——单一受控光束切过面部或身体并自然延续入周围空间；水平切割——大胆水平条带中断肖像选定区域并与超大字体互动；运动面纱——保持主肖像锐利同时选定区域创造微妙水平摄影运动拖尾。使字体成为构图的有机部分，使用一个主标题，允许字母裁出画框、叠于主体、消失于身体之后或与干扰互动。辅助文字保持最简——一个小型系列标签与一句短语。主要使用黑、白、灰、炭或深中性调加一点缀色，保持肤色自然避免过度暖或黄调。仅在必要时添加少数微妙图形细节如细线、圆或开放角标。最终构图须如高端时装编辑、当代摄影海报或实验艺术指导作品——干净、有意、精致且视觉均衡。避免多种竞争效果、密集文字、界面元素、重度故障、随机拼贴、过度装饰、编号、卷号或期号标签、闪光符号、标志、水印、扭曲解剖、塑料肤质、过饱和与通用模板美学。保持整体处理中等尺度、精致、可适应且普遍适用于不同人物、标题、主题、调色板与编辑概念。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case533",
    "title": "手绘涂鸦时尚人物插画",
    "category": "摄影与文档",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/Sairah_0/status/2092473965927334071",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case533.jpg",
    "imageAlt": "手绘涂鸦时尚人物插画示例图",
    "prompt": "将参考图中主体转化为可爱古怪的手绘涂鸦插画。使用极简儿童绘本与时装速写美学——松散不完美的黑色墨线、可见潦草铅笔笔触、微妙交叉排线与迷人手工感。保留角色可辨认的面部特征、发型、脸型、服装、配饰与整体身份同时简化为可爱插画角色。角色设计：超大头部配小简化身体、简单点状眼与极小嘴、柔和圆润面部特征、微粉腮红、凌乱富有表现力的手绘头发配大量松散速写线、略夸张俏皮比例、自然放松姿势配异想天开时装插画感。艺术风格：黑白铅笔墨涂鸦、粗糙不完美速写线而非干净数字轮廓、密集潦草头发与服装细节、轻手绘上色点缀、微妙水彩蜡笔感上色、极简明暗、白或米白干净背景、大量留白、可爱纯真俏皮温馨美学、如原始手工笔记本时装涂鸦插画。保留参考图重要细节同时将一切转化为一致的涂鸦艺术风格，最终图像须手绘感、略不完美、可爱、富有表现力、不费力地时髦，非精致矢量艺术或三维卡通艺术。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case532",
    "title": "六宫格柠檬饮料微缩广告",
    "category": "商品与电商",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/ou_zhen599/status/2091160215928574397",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case532.jpg",
    "imageAlt": "六宫格柠檬饮料微缩广告示例图",
    "prompt": "为虚构柠檬饮料品牌创作一张戛纳级高端夏日饮料活动海报，使用严格二列三行网格布局六面板完美对齐。保留精确的结构逻辑：每面板展示同一微型超写实年轻女性于明亮沙滩与超大柠檬、柠檬片、柠檬汁或最终品牌饮料互动，选定面板含一只巨型真实人手自上方伸入。整张海报须如统一的高端广告分镜，视线从新鲜柑橘水果流畅流向精心制作的饮料。柠檬产品世界须为六面板的绝对视觉英雄。整体构图：干净六面板网格配细白分隔、等比面板、一致地平线、一致海滩海洋背景与统一光照，每面板自足又节奏相连，如同一奢华夏日广告的六连续场景定格于最具标志性瞬间。微型女性与超大柠檬相关物件居中于每帧，海面柔和虚化背景，前景沙滩锐利渲染。视觉流：围绕从面板一至六的强循环运动设计，动作视觉升级——触摸、斜倚、挤压、旅行、拥抱、品尝。在发丝运动、手臂手势、腿角度、果汁滴、勺角度、柠檬片放置、吸管倾斜与伸入手位置中使用重复方向节奏使视线自然扫过海报如流动波浪，每面板内构建微妙对角能量使柑橘世界感觉活、清风、闪烁、运动中。叙事面板序列：面板一微型女性在沙滩拥抱巨型整柠檬同时巨型手自上方 delicately 定位柠檬；面板二她优雅斜倚于半切柠檬中如奢华沙滩躺椅，戴深色墨镜持微型遮阳伞饮签，一片悬浮柠檬片自上方降下如发光柑橘太阳；面板三巨型手自上方挤压竖切柠檬，半透明果汁流与滴以闪烁弧线向下，女性在其下动态反应，双臂举起身体倾斜，定格于柑橘动作中途；面板四她乘坐装满柠檬的小型精致木车，被俏皮高端柠檬形生物或滚动柠檬挽具拉动，车须物理接地、手作感、时髦而非卡通；面板五英雄高潮面板——高大品牌柠檬水玻璃杯主导画框，满载冰块、柠檬片、淡色气泡液、冷凝水珠、新鲜绿色吸管与精致鸡尾伞，微型女性快乐拥抱冷玻璃杯，此面板须为整组中最强产品销售瞬间；面板六她坐于半切柠檬中，大抛光勺自上方降下盛光泽柠檬冰沙或碎柠檬冰，以俏皮期待创造最终美味呈递节拍。英雄产品焦点：真正英雄是柠檬饮料系统——整柑橘果、切片、榨汁、冰、气泡饮料、冰沙与高端呈递细节。每颗柠檬须超写实、芬芳、阳光照射、多汁而触感真实，带详细果皮孔、微妙蜡质油光、半透明膜、湿润切面与明亮自然柑橘果肉。面板五品牌玻璃杯须为整组视觉主导产品物件，水晶般清澈玻璃、精致原创英文品牌、优雅冷凝、高端冰折射与发光淡黄饮料清澈度。角色设计：六面板同一超写实微型年轻女性，穿同一合身绿色花卉迷你连衣裙与白色凉鞋，深色波浪长发与自然富有表现力特征，须如真实缩放人类置于超现实超大柑橘世界。每帧解剖连贯可信——正确头身比、真实肩锁骨臂腰臀大腿膝小腿踝足、完美成型的手与五指清晰可见。表情逐面板变化：惊喜欢乐、放松自信、俏皮警觉、兴奋、欢乐清爽、逗趣期待。肤质须保持超写实带毛孔、自然色调变化、微弱膝肘纹理、真实皮肤弹性，无塑料感。光照：明亮高端海滨日光配柔和左上方太阳方向与温柔大气漫射，六场景保持发光清新夏日光照，短而柔边阴影与清晰立体高光。果汁滴、柠檬果肉、冰块、勺边、墨镜、杯缘与冷凝须捕捉干净闪烁高光，光照须奢华、清爽且面板间物理一致。材质：柠檬超精细果皮孔、微妙凹点、自然果皮厚度、光泽湿润果肉、可信切面半透明、真实果汁行为；饮料杯高清澈度高端玻璃、准确折射、厚重底座、冷凝珠、清晰标志印刷、冰透明度、气泡碳酸液感；冰沙与果汁光泽、半透明、冷、湿、诱人、物理准确；连衣裙轻量夏棉配小绿色花卉印花、自然皱褶、面料张力与风响应边缘；头发与皮肤真实发丝、细飞发、自然光泽、可信肤质；大手真实成人手指、柔肤压缩、自然指甲、连贯比例透视；车与道具精致暖木纹、抛光轮、可信关节与挽具元素；海滩环境精细阳光沙配微型脚印与压痕、柔和海岸线模糊、干净绿松石海配淡泡沫。配色：以柠檬黄、清新柑橘绿、绿松石海、淡天蓝、暖沙滩米、清晰白高光与克制自然肤色构建调色板，黄须为主导英雄色由绿与绿松石支撑，保持图像明亮、诱人、夏日感、干净、国际化商业感，避免随机点缀色。字体与品牌：不复制样例文字，保持字体最简原创，仅在英雄玻璃杯上放置精致英文品牌并可选全网格下方微型活动文案。字体须高端、现代、最简且次于视觉叙事。艺术指导：超写实高端超现实广告摄影、奢华快消品活动、分镜能量、优雅幽默、电影微世界幻觉、高端饮料造型、全球夏日发布海报、精致杂志级后期、锐利产品写实、强叙事节奏、高端品牌一致性。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case531",
    "title": "水晶框国家旅行广告海报",
    "category": "海报与排版",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/Taaruk_/status/2091391283063361558",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case531.jpg",
    "imageAlt": "水晶框国家旅行广告海报示例图",
    "prompt": "为【国家】创作一套奢华梦幻的国家旅行艺术收藏，采用优雅高端旅游广告的精确视觉语言：一个大型透明水晶或玻璃建筑框架或拱形玻璃展柜立于光泽反射面上，内含高度精细的电影感目的地插画。展示该国最具标志性的地标、历史建筑、独特景观、当地交通、文化元素、国旗、花卉与可辨认风景，排列为一个无缝诗意全景。使用温暖黄金时刻阳光、柔和大气雾、粉彩奶油、香槟、低饱和蓝与鼠尾草色调、精致云朵、微妙鸟群、真实玻璃折射与边缘彩虹棱镜高光。在玻璃结构下方创造完美镜面反射，以柔美反射向下延伸整幅构图。顶部添加优雅编辑字体标注国家名，下方配较小精致文字与旅程标语。高端奢华旅行杂志美学、超写实而绘画感、电影纵深、纯艺术构图、极精细建筑、宁静氛围、高端广告摄影、对称均衡构图、柔和胶片颗粒、8K、竖版 4:5、无杂乱、无现代界面元素、无多余文字。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case530",
    "title": "实拍背景涂鸦人物替换",
    "category": "摄影与文档",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/Emmma__0/status/2091391958128251286",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case530.jpg",
    "imageAlt": "实拍背景涂鸦人物替换示例图",
    "prompt": "仅将上传照片中的人物转化为可爱的手绘涂鸦角色，同时保持原始摄影背景不变。核心规则：背景等于原始写实照片，人物等于可爱手绘涂鸦角色。保留背景：尽可能保持原始天空、风景、建筑、水面、家具、地面、植物、栏杆、物件、光照、色彩、透视、相机角度、取景与纹理，不重绘、简化、插画化或对背景或环境物件施加涂鸦、蜡笔或铅笔效果。仅转化人物：将每个人替换为迷人天真涂鸦版本同时保留确切人数、原始位置与相对比例、正面或背面或侧面或四分之三朝向、头与身体方向、姿势与手势、手臂与腿位置、与人物或物件的互动、发型、服装颜色与主要配饰。重要：若某人背对则保持背对，若侧面则保持侧面，若正面则保持正面，绝不将人物转向观者或发明不可见的面孔。可爱涂鸦风格：自由将写实解剖重新诠释为可爱不完美的角色——超大圆头、微型紧凑身体、短简化手臂与腿、小手脚、可爱别扭比例、松散潦草头发、小点眼与简单面部特征（可见时）、适当时的潦草腮红。保持原始姿势可辨认但简化并略夸张以增可爱。绘制风格：松散天真手绘涂鸦如快速儿童速写，使用细颤抖黑色轮廓、不完美造型、重叠速写线、潦草彩色铅笔或蜡笔填色、不均匀上色、白色间隙与略凌乱边缘，角色须刻意粗糙但极可爱。物件：人物周围物件、家具、风景与物品尽可能保持摄影质感，涂鸦角色可自然触摸或持有真实摄影物件。融合：保持正确比例、地面接触、纵深与遮挡使涂鸦角色自然占据原始人物位置。最终观感：须如真实人物从原始照片中被移除并替换为可爱手绘涂鸦版本而真实世界背景保持不变。优先：原始摄影背景、人物位置与比例、确切身体朝向、姿势与手势、可爱夸张涂鸦角色设计。避免全图插画化、背景涂鸦化、写实解剖、动画漫画、三维卡通、精致数字艺术、矢量线条、改变姿势、改变朝向、添加人物或发明面孔。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case529",
    "title": "云朵气球山脊旅行人像",
    "category": "摄影与文档",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/AiwithLariab/status/2091394735416160715",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case529.jpg",
    "imageAlt": "云朵气球山脊旅行人像示例图",
    "prompt": "基于参考人物创作一张梦幻超写实户外时装照片。身份与面部：精确保留参考人物面部身份——保持相同脸型、面部比例、眼眉鼻唇肤色发型发际线与所有可辨认面部特征，人物须保持清晰可辨认且与参考图一致，不重设计或替换面部。姿势与构图：全身竖版肖像，人物自然站立于草坡山脊上，身体微转向镜头而面部自然望向观者，一手轻持数根长白线连接至正上方一朵巨大蓬松白云如异想天开的气球花束，另一手自然垂于身侧。场景：令人屏息的高山景观，远处层层蓝绿山脉延伸至地平线，主体立于天然草脊配脚下细野草，广阔开放天空占据构图上部。云气球：在主体正上方创作一朵巨大柔软白色积云，视觉上如巨型漂浮云气球，多根细白线自云朵降下优雅汇聚于人物手中，线条须物理可信且自然连接于云，云朵蓬松、丰盈、亮白且被阳光美丽照亮。服装：完全端庄优雅全覆盖——及踝飘逸浅蓝长裙、宽松长袖完全遮臂、高端庄领口、不透明面料、全长飘逸裙、简单白色包头运动鞋、小编织斜挎包，无露腰、无低领、无透明面料、无短裙、无暴露服装，造型须优雅、舒适、端庄。配饰：品味圆润深色墨镜与简单编织肩或斜挎包，保持配饰最简自然。发型：尽可能保持参考图原始发型与发色，允许几缕发丝在山风中轻柔飘动。光照：明亮自然正午阳光、柔和大气照明、白云与裙上的真实高光、微妙自然阴影、清晰但柔和的曝光、美丽蓝天对比。摄影风格：超写实专业旅行时装摄影、真实肤质、自然面料细节、物理准确光照、真实景深、电影大气透视、高动态范围、锐利主体配柔和细节背景。配色：天蓝、柔白、淡粉蓝、自然绿草与远处蓝山，干净、通透、梦幻的调色配宁静夏日氛围。构图：9:16 竖版肖像、全身可见从头到鞋、主体略低于中心、巨大蓝天与云占据上半部、远山形成柔和水平地平线、均衡留白、视觉醒目的编辑旅行照片。重要：精确保留参考图身份，不改变可辨认面部或面部结构，保持服装完全端庄、不透明且全覆盖，保持写实解剖、自然双手、真实比例与人物、线绳、云、草、山环境间可信互动。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case528",
    "title": "圣诞街景 Chibi 真实背景人像",
    "category": "摄影与文档",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/Sairah_0/status/2091401764360896762",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case528.jpg",
    "imageAlt": "圣诞街景 Chibi 真实背景人像示例图",
    "prompt": "以附图为主参考，将人物转化为可爱的手绘动画风格小角色同时保留原始人物可辨认的面部特征、发型、服装、姿势与配饰。一位可爱年轻女性站在蓝色时刻的现代城市街道上，周围是高大照亮的摩天楼与节庆装饰。一棵覆满温暖金色灯光的巨大发光圣诞树立于她正后方，营造魔幻节日氛围。街道充满优雅装饰灯、行人、现代建筑与柔和夜晚城市照明。以迷人日式手绘动画插画风格渲染角色——富有表现力的大眼、柔和腮红、精致面部细节、纹理铅笔与墨轮廓、微妙水彩感上色与略不完美手工速写细节。保持背景超写实高细节，在插画角色与真实世界环境间创造美丽对比。电影构图、自然透视、柔和夜晚光照、温暖圣诞辉光、真实背景纵深、详细服装纹理、温馨冬夜氛围、高细节、美观、竖版肖像构图。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case527",
    "title": "Rio 旅行票据纸雕立体海报",
    "category": "海报与排版",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/john_my07/status/2091408386466214031",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case527.jpg",
    "imageAlt": "Rio 旅行票据纸雕立体海报示例图",
    "prompt": "创作一张高细节超写实微缩旅行海报立体模型，灵感来自里约热内卢，于温暖象牙色略纹理背景上排列为手工三维纸雕场景。前景中一只真实人手在左侧竖直持一张复古旅行票据，票据有仿旧纸张纹理、微妙印刷瑕疵、优雅字体与真实旅行细节。票据后方，微缩里约景观如精密弹出式立体模型物理向外升起。以救世基督像为主导中央地标，高于微缩城市景观，周围环绕葱绿山脉。下方建造微缩里约街道，含经典黄色出租车、彩色建筑、棕榈树、行人、骑行者、路灯、瓷砖人行道与小型巴西城市细节。远处添加科帕卡巴纳海滩元素，含微型遮阳伞、海滩游客与大西洋一瞥。层叠建筑与地形使一切看起来由纸张、木材、石膏与微缩材料物理构建，具可信纵深、投影、重叠表面与略四分之三透视。主三维场景周围，在奶油纸上融入精致黑色、炭灰与低饱和棕褐色手绘旅行插画——左上角小型糖面包山速写、右上角艺术化科帕卡巴纳海滨长廊插画、右侧详细台阶速写、底部附近小型海滩天际线绘制。添加微妙手写旅行笔记、微型地图标记、建筑轮廓、罗盘符号、邮票细节与低调巴西旅行注释。保持构图精致而非拥挤。融合写实微缩摄影与复古旅行日志设计、触感纸纤维、微弱墨渗、不完美手绘线、温暖自然影棚光照、柔和阴影、微妙胶片颗粒与精致奶油、炭灰、低饱和绿、海洋蓝与巴西黄色调色板。最终图像须如高端收藏级里约旅行明信片转化为物理微缩世界，中央立体模型锐利精细而周围插画略柔和。超真实人手与手指、可信微缩材料、电影产品摄影、编辑旅行杂志美学、浅景深、超细纹理、超写实三维细节、竖版 4:5 构图、8K 品质。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case526",
    "title": "体积激光黑场海报",
    "category": "海报与排版",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/zhidawang219555/status/2090246237094310178",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case526.jpg",
    "imageAlt": "体积激光黑场海报示例图",
    "prompt": "从全黑剧场开始，像切标本一样用六片真实体积激光把空间分层。光面必须有明确起点、透视和薄雾中的厚度，人物站在交汇点，透明道具折射出一小束异色光扇。构图沿左下至右上的对角线推进，脸只用一道克制边光揭示；标题与其中一片光面共享透视，小字留在纯黑负空间。每次替换主题与角色时，不得退化成夜店模板、HUD、霓虹城市或无物理来源的光线。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case525",
    "title": "酒红棚拍男士时尚肖像",
    "category": "摄影与文档",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/iamsofiaijaz/status/2090294894187413883",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case525.jpg",
    "imageAlt": "酒红棚拍男士时尚肖像示例图",
    "prompt": "一张电影感超写实特写肖像，一位时尚男性，以附图为准确面部参考，保留自然面部身份、浓密自然卷曲深棕发、整齐修剪的灰白胡须、强男性面部结构与真实面部比例。他戴精致圆形复古琥珀棕色墨镜与高端深酒红绒面夹克搭配合身黑色丝质针织衬衫，营造精致奢华时装美学。温暖电影影棚光照配柔琥珀金主光自左前方照亮面部，辅以微妙深红轮廓光勾勒头发与肩膀。背景为浓郁酒红、葡萄红与深梅紫渐变，配柔和大气雾与微妙漫射光营造纵深而不分散主体。优雅暖高光与深色衣物美丽对比。极精细自然肤质、个别胡须毛发、真实毛孔、微妙面部瑕疵、墨镜后可见锐利眼睛、墨镜自然反射、丰富立体阴影、真实面料与绒面纹理、浅景深。精致奢华男装广告、神秘自信氛围、高端男士编辑摄影、电影调色、超写实、HDR、专业影棚摄影、85mm 人像镜头、f/1.8、锐利面部细节、柔和背景散景、居中构图、头肩构图、强男性存在感、低调优雅、3:4 比例。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case524",
    "title": "纸雕拼贴乡野人像",
    "category": "海报与排版",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/AiwithLariab/status/2090297565732585554",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case524.jpg",
    "imageAlt": "纸雕拼贴乡野人像示例图",
    "prompt": "以上传参考图为灵感创作一张高端异想天开手工纸雕拼贴立体模型。以上传女孩参考为唯一人类主体，最大精度保留面部身份——确切脸型眼眉鼻唇肤色发型发际线与可辨认面部特征，严格面部身份锁定，不重设计、不美化、不风格化、不老化、不减龄、不替换面部。女孩独自立于构图中心，优雅自然编辑姿势，面朝镜头配放松自信表情与微妙自然微笑，身体微角度创造抓拍时装编辑感，双手自然于身前持一束美丽小型混合花束，一腿微交叉于另一腿前呈优雅放松姿势。服装：完全改变原图服装但保持完全端庄优雅——优雅象牙奶油长袖纽扣衬衫、高腰阔腿米色长裤、全长完全覆盖长裤、简单奶油包头鞋、小棕色皮革肩包、无暴露服装、无露腰、精致乡野编辑时装、自然真实面料褶皱与纹理。环境：创建美丽手工三维纸雕乡野场景——远处层叠蓝山、绿森林与起伏丘陵、宁静蓝湖、草色湖滨景观、前景纹理米色纸径、女孩身后质朴白色木栅栏、梦幻粉彩天空。周围以超大手工纸花装饰——粉、桃、奶油、白与浅蓝配层叠绿纸叶。天空添加装饰纸元素漂浮——粉色纸心、黄纸星、蓝星、柔白与淡蓝云、小彩色纸点。湖边背景放置两辆微型复古载具——一侧奶油复古露营车、另一侧小型复古蓝绿汽车。艺术指导：整个环境须看起来由高端纹理纸手工制作而女孩保持超写实并无缝融入纸世界，使用手撕纸边、可见纸纤维、层叠卡纸、微妙不完美、真实纸阴影、立体剪纸元素、触感纹理、柔和自然日光、电影纵深、温柔大气透视、高端编辑摄影。最终图像须如奢华手工纸绘本被真实摄影主体赋予生命。构图：居中全身女孩、面部清晰可见且锐利精细、自然优雅姿势、自然持花束、质朴栅栏框住主体、湖与山创造纵深、大花框住两下角、云与装饰元素填充上部背景、均衡对称构图配有机手工不完美、女孩保持最强焦点。最终观感：超写实女孩加手工纸艺环境、梦幻粉彩色、奢华编辑美学、异想天开微缩立体模型、柔和电影日光、高细节纸纹理、自然真实肤质、锐利面部身份、专业时装摄影、社媒病毒传播视觉美学、杂志级构图、竖版 4:5 肖像构图、全身构图、超精细、高分辨率、干净精致后期、视觉醒目、美学均衡、高端手工纸拼贴摄影。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case523",
    "title": "曼哈顿公园水彩旅行插画",
    "category": "海报与排版",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/Taaruk_/status/2090307485374578755",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case523.jpg",
    "imageAlt": "曼哈顿公园水彩旅行插画示例图",
    "prompt": "创作一张竖版编辑旅行插画，灵感来自复古欧洲旅行海报，呈现一个宏伟城市公园里宁静的夏日午后，背景为可辨认的曼哈顿式天际线。在温暖纹理奶油纸上使用精致手绘墨线结合柔和略不完美水彩晕染。展示宽阔绿草坪上人们放松、阅读、散步、慢跑、骑行与野餐。前景中一对休闲装扮的年轻情侣坐在野餐毯上旁有编织篮。包含优雅黑色复古公园路灯、蜿蜒小径、浓密繁叶树木框住构图，以及公园后方升起的详细历史与现代摩天楼。底部附近添加一座小巧如画石拱桥跨过平静池塘。使用低饱和鼠尾草绿、橄榄、暖米、柔蓝、淡灰与微妙金色阳光，配自然水彩渗化、纸纹、细笔排线与通透精致旅行日志美学。无文字、无字母、无标志、无字体、无说明、无招牌。竖版 4:5 构图、高细节、优雅、怀旧、手工水彩与墨插画。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case521",
    "title": "青花敦煌刺绣四拼风格海报",
    "category": "海报与排版",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/zhidawang219555/status/2090310144190218272",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case521.jpg",
    "imageAlt": "青花敦煌刺绣四拼风格海报示例图",
    "prompt": "请将我上传的照片制作成一张竖版拼图海报，整体采用 3:4 竖版构图。画面从上到下严格四等分为四个横向区域，每个区域的高度必须精确控制为整体画面高度的25%（四层比例严格为1:1:1:1，不允许出现比例偏差），区域之间无缝衔接，不设分隔线、不留间隙，顺序为：原图→风格1→风格2→风格3。由于每层为约3:1的极扁宽幅比例，各层主体建议横向居中排布，强调左右开阔留白与呼吸感，避免元素纵向拉伸变形或贴边拥挤。四层在人物站位、场景结构、视线方向上保持连贯呼应，呈现同一画面、四种转译的整体感。风格层（第二至四层）须遵循极简原则：每层视觉元素数量压缩至最低限度，只保留1个最核心的主体符号，其余次要装饰、背景细节与陪衬元素一律省略，画面留白占比不低于60%。\n\n第一层保留原始照片的主体结构、人物真实互动关系与姿态、真实质感、自然光影与原有色彩氛围，仅进行轻微高级摄影调色，呈现杂志摄影质感，不改变人物关系与构图逻辑，并可在不改变人物关系与构图逻辑的前提下自然扩展天空、地面或环境背景，使整体更具空间感与叙事感。\n\n第二层为青花瓷绘风格：借鉴青花瓷绘画技法，以钴蓝色线条与晕染在米白底上表现人物与场景，呈现瓷器纹样的疏朗雅致感。色彩以钴蓝与米白为主的单色系。避免蓝色浓淡层次过多显杂，避免图案化装饰堆砌。\n\n第三层为敦煌壁画风格：借鉴敦煌壁画矿物重彩质感，表现古朴斑驳的美感，需简化线条与色块。背景为土黄或赭石底色，带斑驳壁画肌理感。色彩以赭石、石青、朱砂、土黄为主。避免裂纹肌理过多堆砌，避免复杂纹样装饰。\n\n第四层为刺绣锦缎风格：以刺绣针脚肌理表现人物与场景轮廓，呈现丝缎光泽与针线纹理感，图案需极简概括。背景为米白或浅灰缎面底色。色彩以2至3种柔和色搭配金线点缀。避免针脚过密显繁琐，避免金线过多显浮夸。\n\n每一层需将主体与场景统一转换为对应风格，整体表达极度克制与简化，只保留最核心的一个主体符号及其基本轮廓关系，删除一切非必要的背景元素、装饰细节与陪衬物；人物之间的关键位置关系、互动方向与姿态特征需保留，但应抽象为可识别的轮廓关系，做到“元素越少、关系越清晰”。色彩均从原图中提取归纳，每层严格控制在2-4种主色以内。四个区域的高度比例须严格保持1:1:1:1（各占25%），不可出现拼接错位或比例偏差。整体避免朋克/赛博朋克风格、写实照片质感强行叠加、卡通风格、3D渲染感、商业海报感、复杂背景堆砌、元素过多或画面拥挤、相邻两层风格雷同，以及任何文字、Logo、水印或标题。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case520",
    "title": "月面宇航员 T 恤图形",
    "category": "海报与排版",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/lovimg_com/status/2077035644254363972",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case520.jpg",
    "imageAlt": "月面宇航员 T 恤图形示例图",
    "prompt": "以深海军蓝T恤为中心的图形插画，描绘一位宇航员侧坐于月球表面。宇航员穿着细节丰富的笨重太空服与头盔，后倚于小型月球岩石构造，手持一只冒热气的马克杯暗示正在享受宁静饮品。宇航员正前方背景中是地球的巨大壮丽景观，以白色、浅蓝与海军蓝渲染，带显著旋转云层。整幅作品为单色，使用冷调蓝白调色板营造宁静、孤独与沉思氛围。月面纹理有陨石坑与尘埃，为广袤暗天空与上方明亮旋转行星提供接地对比。风格干净、艺术、标志性，如丝网印刷服装设计。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case519",
    "title": "薄荷玫瑰香水电商图",
    "category": "商品与电商",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/lovimg_com/status/2077036313832996893",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case519.jpg",
    "imageAlt": "薄荷玫瑰香水电商图示例图",
    "prompt": "100%完整保留上传的原图香水瓶的全部原始外观细节，瓶身造型、薄荷绿玻璃质感、木纹球形瓶盖、原有标签文字完全不做任何修改；瓶身环绕米色织带，周围簇拥薄荷绿玫瑰和浅绿色植物，冷调渐变浅留白背景，冷调逆光柔焦光影，低饱和度冷清高级色调，景深虚化突出香水主体，超写实C4D质感，轻奢高级ins风，适配竖版电商详情页，2K高清",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case518",
    "title": "花田风动夏日人像",
    "category": "摄影与文档",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/lovimg_com/status/2077036746198618336",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case518.jpg",
    "imageAlt": "花田风动夏日人像示例图",
    "prompt": "主题：花风的小憩。主体：竖版 4:5 照片风肖像。白与黄的玛格丽特、橙色小花密集盛开的夏日花草田中，一位成熟成年女性仰卧静静躺卧。人物从画面下部至中央大幅入镜，面部略偏中右，胸口至肩部收于画面下方。周围花朵填满整个画面，对角线方向流动的花朵运动模糊横切前景。人物与表情：自然写实日系肖像。深棕色长发配薄刘海与脸周柔软碎发，闭眼，眉力放松，唇轻闭的安稳表情。颊与鼻尖自然血色，肌肤不过度修正保留细微质感。颈线、锁骨、颊受夏日日光照射，如安静入睡般的沉稳氛围。服装与姿势：白色夏日吊带连衣裙，细肩带、胸口低调蕾丝、中央小蝴蝶结、薄棉材质。双肩自然沉入花草，一臂在画面下方被花遮挡而截断。身体自左下至右上略斜置，发散于草上，风使数缕发丝搭额。背景与光：郊外小型花田般的生活感自然花草密度。背景全由绿叶与白黄橙花构成，无人工物无可读文字。较高位置射入的夏日阳光，光略硬偏暖，面部左侧与颈线肩部明亮高光，花与发丝阴影细落肌肤。草反射使下方淡绿返光。构图与相机：略俯瞰近距离拍摄，85mm 等效自然压缩感，人物面部对焦，周围花浅景深略虚。仅前景花被风流带动，白黄橙细长光迹自左上至右下。面部周围模糊减弱，表情与肤质清晰可见。质感与风格：真实照片表现。夏日日光、通透肌肤、柔软发束感、薄棉皱褶、花草细密质感。自然色调，绿深、白花亮、橙花为点缀。胶片照片般微颗粒感与杂志肖像沉稳后期。避免：不自然面部、不自然视线、多余指、缺指、手足融合、关节破绽、服体接触不良、漂浮、不自然重力、错误透视、与光源矛盾阴影、过度美肌、塑料肌肤、乱码、标志、水印。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case517",
    "title": "杯内鱼眼夏日冰饮广告",
    "category": "商品与电商",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "电商",
      "产品",
      "转化"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/lovimg_com/status/2077036659028484375",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case517.jpg",
    "imageAlt": "杯内鱼眼夏日冰饮广告示例图",
    "prompt": "主题：冰透的夏日。主体：竖版 2:3 写实照片。自透明大型塑料杯内侧仰视的超广角鱼眼构图。画面下半部满铺红色草莓果肉与碎冰，中央一根粗绿色吸管笔直向深处延伸。圆形扭曲杯口对面，女性面孔居中大幅入镜。人物与表情：自然写实年轻女性。近黑深棕发高高束成团子，薄刘海与脸周碎发在日光下细发光泽。通透自然妆、淡粉颊、光泽唇。大眼直视镜头，唇小微嘟含住吸管。略带惊讶的可爱天真表情。服装与姿势：白色蕾丝材质罩衫，领与肩周细褶饰，夏日轻薄质感。人物面部靠近杯口，双肩在下方微露。吸管自然接触人物口部，从深处向近处红色冰创造强纵深。背景与光：背景为晴朗夏日古老商店街。木造风店面、刨冰店暖帘、草莓图案招牌、白色小旗、行道树可见。文字全部模糊为不可读装饰。左上方强日光射入，透明杯水滴、杯缘、冰、红果肉上细微反射与高光。阴影落向右下，白色奶油残留环状附于杯内侧。构图与相机：相机置于杯底附近红色冰正上方，极端低角度。鱼眼镜头使杯圆形边缘大幅弯曲，周围商店街也轻扭曲。画面下方百分之四十五为红色冰与果肉前焦，中央为吸管与女性面孔，上部为蓝天与杯透明边缘。对焦于女性眼与口，近处冰闪烁浅焦。质感与风格：专业相机拍摄的夏日广告照片风。透明塑料折射、水滴粒、冰冷感、草莓果肉多汁感高精细表现。蓝天、红冰、绿吸管、白罩衫色彩对比鲜明。肌肤保留自然质感，不过度美肌。明亮活泼略幽默的日本夏日甜点照片。避免：真实品牌标志、可读文字、商标再现、不自然面部、不自然视线、齿唇崩坏、吸管接触不良、多余指、缺指、手足融合、冰漂浮、不自然重力、错误透视、与光源矛盾阴影、乱码、水印、过度美肌、塑料肌肤。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case516",
    "title": "工业橡胶管品牌造型渲染",
    "category": "品牌与空间",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "品牌",
      "空间",
      "质感"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/Just_sharon7/status/2077034244988150062",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case516.jpg",
    "imageAlt": "工业橡胶管品牌造型渲染示例图",
    "prompt": "创作一张超精细超写实三维渲染，物体由粗工业橡胶管弯曲成设计的精确造型，灵活而致密结构、光滑圆润轮廓、微妙哑光质感、真实弹性体纹理、微弱模塑缝线、每曲线处柔和张力、可信材料压缩与拉伸行为、略带防滑表面质感、工程物件写实，使用品牌的真实官方配色，忠实品牌匹配色调应用于管材，准确色块遵循原始标志设计，高端影棚产品摄影美学、纯白无缝背景、柔和漫射影棚光照、真实接触阴影、微距细节、锐利对焦、超写实、8K、16:9、无水印、无多余文字。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case515",
    "title": "Guadalajara 复古电影旅行海报",
    "category": "海报与排版",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/MiMundoConIA/status/2077046470335938826",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case515.jpg",
    "imageAlt": "Guadalajara 复古电影旅行海报示例图",
    "prompt": "创作一张竖版肖像格式电影海报，比例 2:3，主题为墨西哥瓜达拉哈拉，以复古大型胶片海报视觉纹理呈现——全程厚重 35mm 胶片颗粒（尤暗部）、略褪色暖偏色调如印于仿旧哑光纸、中间调可见微妙半调网点、高对比边缘微弱墨渗赋予真实复古印刷海报感。前景：单一暗色剪影，一位孤独的街头乐手静立于画面中下中央，纯净暗剪影无可见面部特征——传统宽檐帽、合身传统套装轮廓、手持大型墨西哥低音吉他——在蜜色石铺广场上投下长暖影，头顶建筑间松散对角线悬挂彩色剪纸横幅（红橙绿黄），微微摇曳框住上部构图，除单一剪影外无其他人物、无载具、无现代物件。中景：大型蜜琥珀石新古典主义剧院正面直接升起于剪影之后，华丽柱廊与三角山花被左侧低黄金时刻阳光温暖照亮，长戏剧性阴影横跨石铺，温暖琥珀火山石在金光中强烈发光。背景：双新哥特式尖塔高高升入画面上方，映衬广阔深天蓝天至地平线处焦琥珀与深橙过渡，一朵散云从下方捕捉紫与金光，教堂正面为温暖蜜石匹配剧院色调。调色：饱和暖琥珀与金蜜色主导石建筑、上部天空深钴蓝、地平线附近浓郁焦橙、暗部褪色暖棕褐与复古印刷海报一致。图像最顶部尖塔之上居中渲染城市名，粗体压缩大写展示衬线字，暖奶油金色带微弱暗投影，留出清晰天空留白给标题。无现代建筑、无汽车、无电线、除单一暗剪影外无任何人物。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case514",
    "title": "硬边现代艺术人像",
    "category": "海报与排版",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/SimplyAnnisa/status/2071783914595897555",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case514.jpg",
    "imageAlt": "硬边现代艺术人像示例图",
    "prompt": "一幅醒目的硬边现代艺术作品于哑光档案纸上，带可见丝网印刷层与轻微油墨错位。一位年轻东亚女性以锐利四分之三侧脸呈现，面部特征以精确 crisp 轮廓渲染，与从肌肤内部散发的抽象发光几何造型对比。她穿光滑高领深午夜蓝夹克，饰以一枚大胆霓虹珊瑚色锐角三角形胸针。深色头发剪成严肃建筑感平齐波波头带 blunt 边缘。表情平静疏离，目光望向画外。背景为干净建筑空间，锐利对角平面呈 crisp 白与深石板色。高对比明暗法光照突显剪影边缘。精致调色板：深午夜蓝、crisp 白、电光霓虹珊瑚。左下角一条流浪猫尾以锐利几何矢量渲染。超现代艺术风格，无数字感。倾斜构图，流浪猫尾，比例 9:16。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case513",
    "title": "单色点缀旅行手账插画",
    "category": "海报与排版",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/Sairah_0/status/2071779087396606433",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case513.jpg",
    "imageAlt": "单色点缀旅行手账插画示例图",
    "prompt": "以简单手绘涂鸦风格创作一张迷人的编辑旅行插画，如用黑色签字笔在旅行笔记本中手绘。插画须感觉私人、自发、不完美而非数字设计，如某人在咖啡馆探索目的地后随手绘制。调色板：几乎全黑白，仅使用一种点缀色。风格：全部以黑色签字笔线条绘制，使用略颤抖的手绘轮廓、自然线宽变化、松散笔触、速写自信、微妙不完美、略开放线端、不均匀手压与偶尔重叠笔触，每线须清晰手工感，避免完美平滑曲线、机械精确轮廓、精致矢量图形或过 crisp 数字渲染。主体：呈现目的地的独特氛围与立即可辨认身份而非写实城市景观，选择最具标志性地标、特色建筑、当地交通、著名风景、原生植物、当地动物、地方美食与文化物件，聚焦目的地精神而非字面准确。构图：将选定元素排列为均衡编辑构图配充足留白，布局须开放、轻盈、不费力如设计师旅行速写本，允许物件自然重叠而不拥挤，每元素有呼吸空间，保持构图视觉放松不杂乱。点缀色少量用于选定细节如水、天空、窗户、招牌、衣物点缀、装饰高光或小型建筑特征，绝不引入额外颜色。绘制风格：保持每物件简单刻意简化，使用扁平造型配最少内部细节，避免写实纹理、渐变、阴影、绘画笔触、光泽表面或复杂渲染，插画须保持干净、通透、低调、高度图形化。线质：黑色签字笔线条为主要视觉特征，线条须自信、随性、活泼、富有表现力且自然不完美，略不均匀轮廓、开放边缘、可变线宽与小绘制不准被鼓励因其增强真实手绘感。氛围：温暖、友好、放松、俏皮、极简、编辑、当代、以简约优雅。成品应如精美设计的旅行笔记本、精品旅行指南、编辑杂志插画或生活方式速写本而非精致数字插画。重要：无摄影写实、无三维渲染、无绘画效果、无渐变、无重阴影、无光泽光照、无矢量干净艺术品、无过度细节、无繁忙构图，保留充足留白，保持扁平编辑涂鸦美学配独特手工特性。最终图像须通过简单富有表现力的黑色签字笔速写配微妙天蓝点缀即时唤起目的地。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case511",
    "title": "城市名地标排版旅行海报",
    "category": "海报与排版",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/Goodmanprotocol/status/2071819124708438092",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case511.jpg",
    "imageAlt": "城市名地标排版旅行海报示例图",
    "prompt": "创作一张干净现代的排版旅行海报，城市名本身成为构图。以大号粗体大写无衬线字母横跨作品宽度渲染城市名，将城市最具标志性的地标、建筑、纪念碑、街道、交通、文化符号、咖啡馆、桥、公园、天际线、雕塑、滨水区、历史建筑与当地细节无缝融入字母周围与内部。让地标自然与字体互动同时保持可读性。使用优雅扁平矢量插画风格配 crisp 几何造型、最少细节、干净轮廓、微妙阴影与高端编辑美学。保持限定调色板——深海军蓝、暖奶油、低饱和红与柔灰蓝——以营造永恒旅行海报观感。适当处添加小型装饰元素如路灯、树木、云朵、鸟、长椅、自行车、喷泉、有轨电车、渡轮或其他城市专属物件。保持充足留白配干净背景与完美均衡构图。确保每个地标、建筑风格、载具、招牌与文化元素准确对应所选城市——避免通用或错误地标。城市名下方可选添加小型优雅标语。风格：高端扁平矢量、极简旅行海报、几何插画、编辑设计、旅游品牌、干净字体、高对比、超锐利线条、博物馆级印刷、现代平面设计、居中构图、可缩放矢量美学、8K 分辨率。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case510",
    "title": "比熊商店拟物应用图标",
    "category": "品牌与空间",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "品牌",
      "空间",
      "质感"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/iamaiistudio/status/2071923809788285125",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case510.jpg",
    "imageAlt": "Bichon Shop 拟物 App 图标示例图",
    "prompt": "为一款名为「比熊商店」的应用设计应用商店图标。单一圆角矩形图标，平滑连续圆角，居中于白色画布配留白，填充约百分之八十画布。现代轻拟物风格，应用商店品质。仅一个图标。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case509",
    "title": "涂鸦拉衣奔跑棚拍",
    "category": "摄影与文档",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/Sairah_0/status/2071929275897491491",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case509.jpg",
    "imageAlt": "涂鸦拉衣奔跑棚拍示例图",
    "prompt": "一张俏皮高调影棚肖像，【主体】快乐奔跑穿越无缝浅灰背景，跨步中途一腿抬起配宽大真实微笑。主体穿休闲oversized服装配柔和中性色（或鲜艳色），创造动态运动感。身后一个简单黑色手绘卡通火柴人抓住并拉伸其衬衫后背，使面料弹性拉伸仿佛试图阻止其奔跑。涂鸦角色自然融入场景配富有表现力的运动线条与幽默面部表情。主体持有趣道具（如恐龙玩具、超大棒棒糖、泰迪熊或气球），增强俏皮叙事。极简构图、干净影棚光照、柔和阴影、超锐利对焦、真实肤质、鲜艳而自然色彩、异想天开编辑摄影、高端儿童时装广告美学、高细节、超写实、8K。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case508",
    "title": "木漏日庭院俯拍猫咪人像",
    "category": "摄影与文档",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/ohmuyi/status/2067930690977779942",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case508.jpg",
    "imageAlt": "木漏日庭院俯拍猫咪人像示例图",
    "prompt": "俯拍镜头，高角度顶机位，自上而下俯瞰一位年轻的东亚裔女性，她有着精致的东亚五官和柔顺的黑发。她蹲在花园小径上，轻轻逗弄一只毛茸茸的橘猫。头顶密密的枝叶滤过阳光，形成灵动的“木漏日”效果——跃动、圆形的光斑在她的肌肤和猫毛上流转舞动。空气中悬浮着淡淡的潮湿薄雾，捕捉住光束，营造出柔和可见的立体光柱（丁达尔效应）。当她仰头朝向镜头时，一层轻雾柔化了画面边缘，增添梦幻氛围。她的表情从略带俏皮的轻噘嘴，渐渐转为眼角堆起细纹的真挚笑容，斑驳的光线恰好勾勒出她肌肤的细腻纹理和眼中盈盈的水光。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case507",
    "title": "暖调钩织角色玩偶",
    "category": "摄影与文档",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/azed_ai/status/2067925399947067728",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case507.jpg",
    "imageAlt": "暖调钩织角色玩偶示例图",
    "prompt": "一只手工钩织玩偶，以柔软纱线纹理与精致针织细节制成，穿着鲜艳点缀色与精致主色服装，手持小型道具。置于温馨场景中，温暖低饱和氛围，迷人手工美学，怀旧钩织玩偶风格。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case506",
    "title": "可爱发卡图文人像海报",
    "category": "海报与排版",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/xiaoxiaodong01/status/2062924832917029248",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case506.jpg",
    "imageAlt": "可爱发卡图文人像海报示例图",
    "prompt": "围绕具体主题内容生成一张明亮清爽的图文合成视觉：画面以大面积高明度纯净色场承托主体，背景平整、通风、没有复杂景深，视觉重心由下方被大胆裁切的人像或真实主体建立，只露出最有记忆点的局部，使主体像从画面边缘进入。主体上方叠放一个极简图形符号或拟物角色，它要像轻轻坐在主体头顶或贴合轮廓生长出来，形体圆润、边缘干净、表情或结构由少量粗线完成，兼具标识感和亲近感。文字是画面的主动角色：顶部使用大号手写感标题，字距松、笔画柔软，像一句轻声招呼；中心用更强的竖向或轴向标题建立层级；边缘安放少量小字号信息，保持安静但精确，让空白继续占主导。色彩从主题自身的材质、情绪、地域或品牌语义中提取，映射为明亮底色、洁净主体亮面、清晰深色结构线与少量强调信息色，保留大面积轻快底场、小面积高对比文字线条、自然主体暗部的关系；整体保持高明度、清透、干净、饱和度清晰而不过度刺激，暗色只用于结构和阅读，不制造脏灰、烟雾或陈旧质感。摄影局部与扁平图形之间要形成真实与童趣的反差，边缘叠压准确，阴影极少，完成感像城市公共宣传与角色插画结合的轻松视觉系统。\n\n主题：柳岩\n\n比例9:16",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case505",
    "title": "夜间手机光沙发肖像",
    "category": "摄影与文档",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/iamaiistudio/status/2063231612478017579",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case505.jpg",
    "imageAlt": "夜间手机光沙发肖像示例图",
    "prompt": "一位年轻成年女性，柔和精致五官、细金属框眼镜与齐肩深色凌乱发，夜间前倾于深色沙发上。她穿淡奶油蕾丝边吊带背心配细肩带与匹配柔软短裤。一手持智能手机靠近前景，屏幕光在手指与眼镜片上投射冷反射。表情梦幻微倦，眼抬向镜头仿佛刚从刷手机中抬头，唇轻闭放松微嘟。竖版 3:4 画框、略高于平视、中近景至四分之三肖像。温暖暗钨丝室内光混合冷手机屏反射、无闪光、沙发与墙面柔和衰减。浅景深、柔和低光颗粒、轻微运动模糊、自然不完美锐度。背景：朴素米灰墙、最简装饰、深夜氛围。柔和魅惑妆容：微妙眼线、长睫毛、平滑肌肤、光泽粉裸唇。真实社媒夜间肖像美学。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case503",
    "title": "霓虹设计师 3D 海报",
    "category": "海报与排版",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/AiwithLariab/status/2063240283786187251",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case503.jpg",
    "imageAlt": "霓虹设计师 3D 海报示例图",
    "prompt": "创作一张超精细三维风格化创意设计师海报，一位酷年轻数字艺术家自信站立于未来感蓝色霓虹影棚中央。角色穿oversized黑色街头风服装配电光蓝色图形点缀、黑色工装裤、层叠银链、黑色墨镜与干净白色运动鞋。一只可爱毛绒小狗坐在艺术家肩上。低角度戏剧性透视使运动鞋显得更大以营造高端海报效果。围绕角色漂浮创意元素——发光笔记本、专业相机、设计书、笔记本、三维图标、社媒符号、全息界面面板、平面设计工具与未来感蓝色几何造型。添加励志字体如「设计模式」「创造·构建·启发」「创意永不眠」融入场景。含一个收藏级 Q 版微缩人偶版角色立于主体旁展示基座上。电影蓝色光照、光泽反射、体积辉光、景深、漂浮粒子、奢华玩具摄影美学、高端三维渲染、Octane 渲染品质、超锐利细节、鲜艳霓虹蓝调色板、未来创作者工作空间氛围、高端商业海报设计、ArtStation 热门风格、杰作品质、8K 分辨率、竖版 9:16 构图。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case501",
    "title": "夏日牵手回眸电影肖像",
    "category": "摄影与文档",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/iamaiistudio/status/2063247373388992790",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case501.jpg",
    "imageAlt": "夏日牵手回眸电影肖像示例图",
    "prompt": "电影感人像摄影，超写实，2160×3840 竖构图，50mm 或 85mm 人像镜头渲染，浅景深，干净通透的夏日自然光调色——不过黄、不过滤。主体：一位年轻美丽的成年东亚女性，【描述脸型与特征，如柔和心形脸、精致古典五官、明亮杏眼、小巧鼻梁、自然丰满唇】，整体气质甜美、阳光、活力、可爱带一丝妩媚。凝视极具吸引力——明亮、清澈、自然眼神光，仿佛会说话；嘴角微扬，表情温柔、生动、自然。她沿【场景，如花园石径、林荫道、欧洲街道、庭院】行走，右手向后伸出握住身后某人的手；仅那只手出现在左下角——如第一人称情侣视角抓拍。她回眸望向镜头而身体保持前行走动姿态，姿势优雅自然，明显为抓拍瞬间带淡淡恋爱感。长发【发色】，【风格，如自然波浪、慵懒大卷、空气刘海、半扎】，多缕发丝被风吹散飞扬，层次丰富而动态。强自然侧逆光勾勒发丝边缘——干净、锐利的轮廓光与半透明辉光，发缘如被阳光照亮，轻盈发光。此为图像核心亮点。她穿【服装，如白色蕾丝吊带裙、米色吊带裙、浅蓝短袖配白裙、浅粉合身连衣裙】，面料纹理自然，材质轻盈柔软。明亮自然夏日阳光真实温暖她的肌肤、肩膀、锁骨与服装，柔和干净高光过渡。肤质：极真实——可见细毛孔、自然皮肤纹理、微弱瑕疵、微妙色调变化、柔和光泽。颊、鼻尖、肩部在阳光下展现自然精致渐变。通透、健康、真实而精致——无塑料感、无蜡像感、无过度平滑。背景：柔和大气模糊，绝不分散注意力。避免：过度平滑、塑料肌肤、CG 感、动画感、假发感、僵硬表情、死眼、僵硬姿势、整体偏黄、面部过曝、五官变形、手指错误、手部畸形、杂乱背景、重度网红修图。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case500",
    "title": "梦幻花冠仙境肖像",
    "category": "摄影与文档",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/HaniaAi12/status/2062696495741391006",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case500.jpg",
    "imageAlt": "梦幻花冠仙境肖像示例图",
    "prompt": "超写实空灵幻想肖像，一位令人屏息的年轻女性，精致瓷质肌肤、柔和灰蓝眼眸与自然玫瑰唇。她温柔望向观者，表情宁静梦幻，指尖轻触下巴。纤细灰棕发丝在微风中轻柔飘动，松散浪漫盘发饰以粉彩腮红玫瑰、闪烁水晶饰物、精致羽毛与繁复花卉配饰。她戴优雅垂坠水晶耳环与一袭半透明飘逸长裙，由虹彩薄纱制成，绣以微小闪烁花朵。场景沐浴于柔和漫射晨光，在面部与肩部周围营造发光光晕。周围漂浮蝴蝶、闪烁尘埃粒子、半透明花瓣与梦幻花卉纹理，背景融合粉彩薰衣草、珍珠白、腮红粉与银色调。电影感纯艺术摄影、仙境美学、魔法花园氛围、魔幻写实、超精细肤质、柔焦高光、体积光照、散景、杰作品质、高细节、8K 分辨率、精致女性美、浪漫幻想艺术、优雅构图、梦幻调色、柔光、天界氛围。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case499",
    "title": "极简精品店全身时尚写真",
    "category": "摄影与文档",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "摄影",
      "真实感",
      "复用"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/john_my07/status/2062579742759649486",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case499.jpg",
    "imageAlt": "极简精品店全身时尚写真示例图",
    "prompt": "全身编辑级时装照片，一位美丽年轻女性，与参考图外观一致，光泽深色长发、柔和刘海、白皙肌肤与精致女性五官。她随意站立于高端极简时装精品店中，穿oversized粉蓝色针织毛衣配黑色百褶网球风短裙、白色船袜与厚底设计师运动鞋。放松自信姿势、温柔微笑，奢华零售内饰配现代衣架、中性色服装、温暖环境光照、木材与石材纹理、干净建筑线条、电影感景深、真实光照、高端时装广告、杂志级编辑、超精细、锐利对焦、超写实、4K。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case498",
    "title": "铅笔画背景 3D 分身",
    "category": "海报与排版",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/AIwithkhan/status/2062567518389391540",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case498.jpg",
    "imageAlt": "铅笔画背景 3D 分身示例图",
    "prompt": "在纸上创作一幅手绘铅笔插画，描绘【图像】打哈欠的样子作为背景。在巨大的手绘铅笔插画前方添加一个三维动画风格渲染的【照片】随意站立。柔和电影光照，8K 分辨率，3:4 比例。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case497",
    "title": "单色水彩城市旅行海报",
    "category": "海报与排版",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/Goodmanprotocol/status/2062564327140503787",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case497.jpg",
    "imageAlt": "单色水彩城市旅行海报示例图",
    "prompt": "极简复古水彩旅行海报插画，主题为【城市名、国家名】，完全以优雅单色水彩与精细墨线呈现。比例 4:5 竖构图。一个宁静的清晨街景，前景为标志性主地标与次要地标，以略低行人平视角度呈现。历史本地建筑、优雅立面、华丽细节、拱窗、装饰檐口与传统街道元素沿宽敞周围排列，营造永恒都市氛围。左侧显著站立一座经典当地路灯，成熟繁叶树木框住部分场景，树冠以柔和水彩晕染与精致溅洒纹理绘制。远处地标优雅升入天际线作为可辨认文化标志。一辆复古当地载具或几名小行人增添微妙生气与比例而不打扰宁静氛围。构图含大面积干净留白、天空柔和云朵水彩纹理、精致纸纹与微妙水彩 bloom。铺路、街道或广场戏剧性地横跨前景，引导观者视线至地标群。左上角字体以精致衬线字标注城市名与国家名，如高端旅行日志或收藏级城市海报。手工水彩插画、建筑速写美学、宁静都市氛围、柔和自然晨光、低饱和单色调色板、高细节线稿、优雅旅行海报设计、极简奢华墙面艺术风格、永恒本地魅力、高端文具插画、超精细、高分辨率、干净构图。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case496",
    "title": "水雕品牌 Logo 六宫格",
    "category": "品牌与空间",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "品牌",
      "空间",
      "质感"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/AIwithSynthia/status/2062521441141088599",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case496.jpg",
    "imageAlt": "水雕品牌 Logo 六宫格示例图",
    "prompt": "创作一张高端三乘二网格拼贴，全球标志性品牌标志完全由动态水流形态重新演绎，漂浮于水晶般清澈的海洋之上映衬鲜艳蓝天。每面板展示一个不同标志，由真实透明水雕塑而成，含细致飞溅、水滴、反射、折射与流动液体纹理。水流形态须物理准确、优雅且立即可辨认同时完全由水构成。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case495",
    "title": "巴黎街头故事书插画",
    "category": "海报与排版",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "海报",
      "排版",
      "视觉"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/MissDelulu9/status/2062376738500526347",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case495.jpg",
    "imageAlt": "巴黎街头故事书插画示例图",
    "prompt": "故事书风格肖像插画，一位年轻成年女性探索巴黎街头。她闭眼快乐大笑，手持咖啡杯。长发波浪卷，戴贝雷帽。场景设定于巴黎咖啡馆旁的宁静清晨氛围。女性有甜美迷人微笑。柔和梦幻氛围、浪漫巴黎街头感、温柔光照与高细节艺术作品。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case494",
    "title": "电动巴士工程信息图",
    "category": "图表与信息图",
    "description": "来自freestylefly/awesome-gpt-image-2 社区案例的实用案例，可直接替换主题、文案、产品或场景后复用。",
    "tags": [
      "信息图",
      "图表",
      "讲解"
    ],
    "source": "freestylefly/awesome-gpt-image-2 社区案例",
    "sourceUrl": "https://x.com/j_smeaton99/status/2062365258984177766",
    "recommendedSize": "1:1",
    "imageUrl": "https://cdn.jsdmirror.com/gh/freestylefly/awesome-gpt-image-2@main/data/images/case494.jpg",
    "imageAlt": "电动巴士工程信息图示例图",
    "prompt": "创作一张高端正方形「参考式可持续交通信息图」，以一辆未来感电动城市巴士为中心，设计为精美的城市出行手册页面而非商业车辆广告。构图须如现代视觉百科全书混合精英公共交通工程指南与高端编辑信息系统。视觉方向：1:1 正方形构图；高端智慧城市背景配微妙交通蓝图、电路灵感叠层与城市基础设施图解；优雅调色板使用深海军蓝、石墨黑、电光绿、钢灰与柔和青色点缀；精致编辑字体层级；圆角模块化信息卡片配干净间距；温柔真实反射与高端公交系统分隔线；最简交通工程图标；极精细中央电动巴士渲染以戏剧性四分之三透视行驶于未来智慧城市大道；细精准标注线指向关键系统与技术；干净有序的「知识优先」布局配高信息密度但透气间距。主主体呈现：超精细写实渲染的电动巴士居中，具流线空气动力学车身、全景挡风玻璃、发光目的地显示、低地板无障碍布局、未来感 LED 照明系统、高端电力传动细节、真实都市反射、智慧城市交通写实。巴士周围工程标注解释：电池组技术、电机系统、再生制动、充电基础设施兼容性、智能车队管理、乘客无障碍功能、电池热管理、能效技术、安全监控系统、智能驾驶辅助。含模块区段：概览、技术规格、尺寸与容量、传动与能源系统、电池技术、充电方案、乘客舒适功能、安全与可靠性、车队管理技术、环境影响分析、运营成本对比、结构与材料工程、可持续性生命周期评估、智慧城市集成、全球采用趋势、「你知道吗」事实区段、未来电动公共交通。添加高端可视化模块：电池架构图、充电流程图、能耗图表、容量可视化、智慧城市集成地图、传动剖面图、环境影响对比、车队管理仪表板、车辆蓝图尺寸、生命周期可持续性图形。避免通用车辆广告、杂乱商业手册布局、卡通交通造型、不切实际的飞行巴士概念、过度赛博朋克霓虹、低细节图库车辆渲染。最终目标须似专业出版的交通工程参考书页面，面向城市规划师、交通工程师、可持续研究员、建筑师、公交当局与智慧城市爱好者，结合技术准确性、可持续洞察与高端编辑设计。",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
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
    imageBaseUrl: 'https://cdn.jsdmirror.com/gh/wuyoscar/gpt_image_2_skill@main/',
  },
  evolink: {
    source: 'EvoLinkAI/awesome-gpt-image-2-API-and-Prompts 精选',
    description: '来自 EvoLinkAI/awesome-gpt-image-2-API-and-Prompts 的高质量商业案例精选，已转写为中文可复用模板。',
    sourceBaseUrl: 'https://github.com/EvoLinkAI/awesome-gpt-image-2-API-and-Prompts/blob/main/',
    imageBaseUrl: 'https://cdn.jsdmirror.com/gh/EvoLinkAI/awesome-gpt-image-2-API-and-Prompts@main/',
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
    imageBaseUrl: 'https://cdn.jsdmirror.com/gh/junxiaopang/all-image-prompts@main/public/',
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
  ...HOUSHIFANG_PROMPT_TEMPLATES,
  ...BASE_PROMPT_TEMPLATES,
  ...EXTRA_CURATED_PROMPT_TEMPLATES,
  ...KKKM_PROMPT_TEMPLATES,
]
