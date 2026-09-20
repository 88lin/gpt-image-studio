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
    "prompt": "A minimalist food photograph featuring a single [FOOD] on a clean matte white surface, caught mid-transformation into a 3D pixel art style. The left half is perfectly photorealistic while the right half dissolves into large floating geometric cubes, each cube exposing the food's vibrant colors, textures, and inner details. Soft studio lighting, gentle shadows, shallow depth of field, hyperrealistic meets geometric abstraction, subtle motion blur on the cubes. High resolution cinematic close-up composition.\n\nFull prompt:",
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
    "prompt": "Full prompt:\n\nAncient Chinese palace perfume advertisement inspired by the legendary dancer Zhao Feiyan. A bronze bottle with gold-inlaid twisting lotus vines. Mysterious, cold, and haunting imperial harem atmosphere. Vertical portrait format, 9:16 ratio.",
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
    "prompt": "prompt:\n\nA soda can featuring the label [BRAND NAME], constructed entirely from soft, colorful plush material, centered against a matching plush background in [BRAND NAME]'s brand colors.\n\nPop Art and Memphis-inspired style, vibrant and premium at the same time.\n\nCrisp studio lighting that highlights every fiber, the plush texture, and the tactile softness of the material.\n\nRazor-sharp focus, vivid color saturation, clean shadows, sleek commercial product photography, minimalist composition, ultra-high resolution.",
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
    "prompt": "Create a rough black-and-white graphite pencil storyboard in a 3x3 grid, nine 16:9 panels, with hand-drawn borders, panel numbers, motion arrows, music notes, and handwritten director notes.\n\nStoryboard for a premium animated coffee-shop hip-hop commercial for insMind. Keep the same young female barista throughout: expressive eyes, high messy bun with loose curls, white barista shirt with tiny pale-blue details, black neck scarf with a small insMind logo, dark fitted trousers, white flat shoes. Warm modern cafe interior, espresso machine, wooden counter, pastry case, large windows, soft daylight.\n\nShow these beats: opening push-in with the barista singing, steam wand frothing milk like stage smoke, wide hip-hop side-step, body wave with scarf logo visible, overhead latte pour, macro foam rings, delighted reaction, top-down latte art spelling “insMind”, and final hero reveal as she offers the cup to camera.\n\nUse rough pencil lines, grayscale shading, sketch texture, cinematic storyboard composition, expressive unfinished production-board style. Avoid polished color render, photorealistic stills, vector art, extra characters, subtitles, UI, or unreadable brand spelling.",
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
    "prompt": "Young female travel vlogger exploring Venice, Italy across 13 wildly candid, chaotic, funny, and uniquely Venetian moments, stunning with long windswept hair, effortless luxury European summer fashion, playful adventurous personality, authentic handheld iPhone collage aesthetic with natural imperfections, unfiltered travel energy, social media realism, spontaneous vacation chaos.\n\nFrame Breakdown Includes: — accidentally boarding the wrong vaporetto and enthusiastically waving at the dock before realizing she's headed in the opposite direction — struggling to drag an oversized suitcase over a steep stone canal bridge, laughing at the absurdity of it — getting completely lost in Venice's labyrinth of narrow alleys and emerging into a deserted hidden courtyard with a confused expression — chasing a paper city map as the wind sends it flying toward a canal — being unexpectedly surrounded by a massive flock of pigeons in Piazza San Marco while clutching a half-eaten pastry — attempting an elegant gondola selfie but getting caught off guard when the gondola suddenly rocks — discovering a tiny hidden bookstore and reacting dramatically to a sleeping cat curled up among the books — squeezing through an impossibly narrow Venetian alleyway and realizing halfway through that it's much tighter than expected — trying to pose gracefully in a beautiful Venetian carnival mask while struggling not to laugh — caught in a sudden rain shower as historic squares become reflective and crowded with umbrellas — confidently following a shortcut only to reach a dead-end canal with no bridge, staring in disbelief — accidentally walking into the background of an extravagant luxury wedding photoshoot near a historic palace — Final frame: sitting beside a quiet canal at blue hour, surrounded by shopping bags, a melting gelato, and a crumpled city map, laughing uncontrollably after spending the entire day hopelessly lost, candid shaky capture, motion blur, authentic Venice travel chaos\n\nStyle: ultra-realistic travel vlog collage, Venice street photography, handheld smartphone camera aesthetic, imperfect framing, accidental photobombs, candid expressions, genuine laughter, iconic Venetian architecture, canals, gondolas, historic bridges, hidden alleyways, European summer atmosphere, natural lighting, motion blur, lens flares, overexposed highlights, authentic memories, cinematic storytelling, high-detail realism, viral travel content, no studio polish, no posing, spontaneous documentary-style moments, social media realism, chaotic vacation energy, luxury travel influencer aesthetic.",
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
    "prompt": "Generate a vintage vinyl album cover with a cyberpunk and manga aesthetic, grainy and worn. The background is dark and textured, with scratches and dust. At the top, the title \"LOVE BITES\" appears in large white and gray capital letters, with two red lines crossed out. To the left of the title is a red six-pointed star symbol with a central asterisk. Below the title is the text: \"BEAUTY IS POWER, SILENCE IS WAR.\"\n\nIn the center is a monochrome manga-style illustration of the attached image. Behind it is a monochrome illustration of a 1990s JDM sports car.\n\nIncludes multiple graphic details and logos:\n\nTop left: logos for \"STEREOPHONIC HIGH FIDELITY RECORDING,\" \"33 ⅓ RPM,\" and \"LP.\"\n\nTop right: a red circle that reads \"VOL. 01.\"\n\nOn the left: the text \"HER19845\", a barcode, and a tracklist with 6 numbered songs (e.g., \"01. SILENT GAZE\", \"02. LOVE BITES\", \"03. NIGHT DRIVE\", \"04. EMPTY PROMISES\", \"05. FAKE SMILE\", \"06. BLEED QUIET\").\n\nOn the right: a red square with a globe logo, the text \"YOU CAN WATCH BUT YOU WON'T UNDERSTAND\", asterisks, and \"@IMAGE_5\".\n\nBottom left: the Japanese text \"美しさは力である\" and a barcode \"0025\".\n\nBottom right: a silver \"PARENTAL ADVISORY EXPLICIT CONTENT\" label and red graffiti \"DON'T FALL IN LOVE\" with a crossed-out heart.\n\nCopyright text \"ALL RIGHTS RESERVED\" at the bottom edge.\n\nThe overall aesthetic should be nostalgic, underground, and raw, with the grain and texture of a real vinyl record. The color scheme is monochromatic with red accents.\n\nUse a 3:4 aspect ratio.",
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
    "prompt": "A vertical collage of three YZK photos. Using the uploaded selfie as the ONLY and exclusive face reference, keep the facial features, and facial structure exactly the same as the reference image. The character poses against a neutral light background. A girl with a beautiful, voluminous hairstyle, seemingly styled with a brush, wearing foxy makeup and pronounced, angled lashes. In the first photo, she's very close to the camera, looking at it with one eye and winking. In the second photo, she's turned away, her head coquettishly turned toward the lens, her hairstyle slightly covering her face, but not too much. In the third photo, she's looking very close to the lens, her hair to the side, thus covering her left eye, pouting and looking forward. Close-up and medium shot, minimalist composition, vintage digital texture, slight blur, glamorous atmosphere. Photo taken on iPhone 17 Pro Max with flash.",
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
    "prompt": "Prompt 1:\nA high-energy commercial product advertisement for VOLT Energy Drink. A beautiful young woman in her mid-20s, wearing a green and white football jersey, is caught in a euphoric goal celebration — arms wide open, head thrown back, screaming with pure joy. She is holding a sleek VOLT Energy Drink can in one raised hand, electric blue liquid splashing dramatically around it. Stadium packed with roaring fans, golden confetti raining down, floodlights blazing. Bold text \"FEEL THE VOLT\" in electric yellow. Cinematic lighting, photorealistic commercial quality, 9:16 vertical format.\n\nPrompt 2:\nA beautiful young woman in a green and white football jersey is sitting in a packed stadium, casually drinking from a sleek VOLT Energy Drink can. Suddenly a goal is scored — she explodes into euphoric celebration, jumping up, arms wide open, screaming with pure joy, still holding the VOLT can high in the air. Electric blue liquid splashes dramatically around the can in slow motion. Golden confetti rains down from above. Camera starts wide on stadium, pushes in close on her face mid-celebration, then pulls back to reveal VOLT can glowing with electric blue energy trails and sparks. Bold text \"FEEL THE VOLT\" flashes on screen at the end. Sound: stadium ambient noise building → crowd erupting into massive roar at goal moment → electric bass hit when VOLT can is revealed → crowd cheer fading out. Cinematic quality, slow-motion moments mixed with real-time, 9:16 vertical format, 15 seconds.",
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
    "prompt": "[LOCATION]\nGenerate all landmarks, scenery, cultural elements, architecture, wildlife, transportation, food, and local experiences automatically based on the destination.\n\nSTYLE DIRECTION\nCombine three visual styles:\n\n1. Photorealistic cinematic background\n2. Premium stylized 3D traveler character\n3. Handcrafted papercut diorama film-strip scenes\n\nThe contrast between these styles should feel intentional, premium, and editorial.\n\nLAYOUT\n\nVertical 4:5 poster format.\n\nLEFT SIDE:\nA large vintage black film strip running vertically from top to bottom.\n\nRIGHT SIDE:\nA highly detailed 3D traveler character walking confidently toward the viewer.\n\nCENTER/TOP:\nLarge hand-lettered headline:\n\n\"Every Frame a Destination\"\n\nGenerate a destination-inspired subtitle automatically.\n\nCHARACTER\n\nCreate a premium stylized 3D travel creator.\n\nThe character should automatically suit the destination:\n\nExamples:\n\n- Travel photographer\n- Travel vlogger\n- Adventure explorer\n- Wildlife photographer\n- Luxury traveler\n- Backpacker\n- Cultural storyteller\n\nCharacter requirements:\n\n- High-end 3D rendering\n- Photorealistic materials\n- Natural human proportions\n- Attractive and relatable\n- Walking confidently\n- Holding a professional camera\n- Wearing destination-appropriate clothing\n- Backpack or camera bag\n- Strong visual presence\n- Social-media-friendly appearance\n\nThe traveler should be the main focal point of the poster.\n\nFILM STRIP\n\nPopulate the film strip with 5 iconic destination highlights automatically selected from the location.\n\nIMPORTANT:\n\nDo NOT use photographs inside the film strip\n\nEach film frame should contain a handcrafted papercut diorama version of the destination.\n\nPapercut Diorama Style:\n\n- Layered paper artwork\n- Multiple depth layers\n- Paper-cut architecture\n- Paper-cut landscapes\n- Paper-cut vegetation\n- Miniature handcrafted appearance\n- Rich paper textures\n- Soft shadowing between layers\n- Premium paper sculpture craftsmanship\n- Editorial-quality design\n\nEach frame should feel like a miniature handcrafted world.\n\nOne or two elements may slightly extend outside the film frame for depth.\n\nExamples:\n\n- Landmark extending beyond border\n- Wildlife partially escaping frame\n- Local transportation overlapping frame edge\n- Natural elements extending outside frame\n\nOne frame should contain:\n\n- Travel journal page\n- Vintage stamp\n- Passport marks\n- Handwritten travel note\n- Destination-inspired quote\n\nBACKGROUND\n\nCreate a photorealistic blurred background inspired by the destination.\n\nExamples:\n\n- Historic city streets\n- Coastal roads\n- Mountain scenery\n- Safari landscapes\n- Tropical settings\n- Cultural neighborhoods\n\nRequirements:\n\n- Cinematic golden-hour lighting\n- Soft depth of field\n- Photographic realism\n- Warm color grading\n- Background remains blurred enough to keep focus on character and film strip\n\nTRAVEL MEMORABILIA\n\nAdd destination-specific:\n\n- Vintage stamps\n- Passport stamps\n- Travel tickets\n- Postcards\n- Travel badges\n- Local cultural symbols\n\nDOODLES\n\nAdd minimal black-and-white travel doodles.\n\nExamples:\n\n- Airplane flight path\n- Camera icon\n- Location pin\n- Compass\n- Local transportation icon\n- Local food or drink icon\n- Small destination-themed symbols\n\nKeep doodles subtle and premium.\n\nVISUAL STYLE\n\n- Viral Instagram travel poster\n- Luxury tourism campaign\n- National Geographic meets modern Instagram\n- Editorial magazine cover\n- Premium travel branding\n- Award-winning design\n- Cinematic storytelling\n- Rich golden-hour lighting\n- Ultra-detailed textures\n- Professional typography\n- Strong visual hierarchy\n\nPRIORITY ORDER\n\n1. 3D traveler character\n2. Papercut diorama film strip\n3. Typography\n4. Travel memorabilia\n5. Minimal doodles\n\nAvoid cartoon styling.\nAvoid low-poly aesthetics.\nAvoid stock-photo appearance\n\nThe final result should feel like a premium travel campaign that is instantly understandable on Instagram while rewarding viewers with intricate papercut details when they zoom in.",
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
    "prompt": "Editorial 3x3 grid in a cool-grey seamless backdrop. Character (face characteristics 100% same as uploaded image) wearing a charcoal sleeveless dress. Lighting: large overhead softbox, faint side bounce.\n\nShots include: 1. tight cheek + neck close-up with blurred finger foreground (85mm, f/1.8); 2. eyes locked to lens, top-light reflection visible (85mm, f/2.0); 3. monochrome chin-on-hand portrait with strong frame fill (50mm, f/2.2); 4. half-obscured over-shoulder shot through blurred dress strap (85mm, f/2.0); 5. head-on close-up with intersecting shadows across face (50mm, f/2.5); 6. angled raw portrait with tousled hair (85mm, f/2.2); 7. tight detail of hands resting near collarbone (50mm, f/3.2); 8. seated half-body profile with blurred frame edges (35mm, f/4.5); 9. profile macro with single water droplet highlight (85mm, f/1.9). RAW, smooth contrast, editorial softness.",
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
    "prompt": "Use my uploaded photo as the sole facial reference. Preserve my exact identity, facial proportions, eye shape, skin tone, lip shape, nose structure, and all distinctive features with exceptional accuracy and no facial drift.\n\nCreate a highly detailed cinematic 3D chibi-style character portrait inspired by top-tier animated films, luxury collectible figurines, and contemporary designer toy aesthetics. The character represents a brilliant AI-powered digital creator running on pure creativity and almost no sleep after a marathon night of editing and designing.\n\nScene:\nEarly morning inside a cozy creative studio. She sits drowsily on the edge of a weathered wooden workbench, legs gently swinging, looking exhausted yet irresistibly charming. Her fluffy hair is gathered into a loose messy bun with flyaway strands escaping in every direction. Sleepy half-open eyes, subtle under-eye shadows, a tiny rosy nose, and an expression that perfectly captures \"I've been awake for way too long but I still have ideas.\"\n\nOutfit:\n\nOversized soft-cream pajama set\n\nTiny embroidered logo reading \"Pixel & Coffee Club\"\n\nRelaxed knitted cardigan casually slipping from one shoulder\n\nPlush cloud-shaped slippers\n\nMinimal pearl stud earrings\n\nCozy oversized sleeves partially covering her hands\n\nEnvironment:\nWarm sunrise light fills the room through large studio windows. A steaming mug of coffee rests beside her. The background is softly blurred, filled with artistic clutter, creative tools, and subtle storytelling details that suggest endless projects in progress.\n\nPersonality Elements Floating Around Her:\n\nMini holographic editing timelines\n\nTiny floating storyboard frames\n\nDigital sketch concepts\n\nGlowing location pins and travel stickers\n\nSticky notes filled with random ideas\n\nCompact laptop displaying an unfinished creative project\n\nPencil sketches and concept doodles\n\nFloating play-button icons\n\nSmall animated stars, clouds, and creative symbols\n\nTiny productivity meters running dangerously low\n\nExpression & Mood:\n\nBrilliant but overworked creator energy\n\nLovably exhausted\n\nChronic \"one last revision\" mindset\n\nQuietly chaotic genius\n\nSoft humor mixed with creative burnout\n\nDreamy, relatable, and emotionally expressive\n\nArt Style:\nUltra-premium stylized realism, luxury designer collectible quality, highly detailed hair fibers, realistic fabric textures, soft skin rendering, cinematic depth of field, subtle emotional storytelling, cozy lifestyle aesthetic, handcrafted figurine finish, social-media-worthy presentation.",
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
    "prompt": "Fashion editorial watercolor portrait illustration of a romantic young Korean couple in a blooming spring garden, standing close together in a soft intimate moment — the boy gently holding the girl's hand while she leans slightly toward him with a warm shy smile. The woman wears an elegant flowing blush-pink dress with delicate fabric movement, while the man wears a soft ivory-beige shirt layered with a light pastel cardigan, creating a dreamy romantic harmony. Soft Korean facial features, healthy glowing skin texture, subtle natural makeup, calm affectionate expressions, relaxed posture, gentle head tilt, slight three-quarter angle, waist-up framing.\n\nSet in a glowing May flower garden filled with delicate pastel blossoms, fluttering petals, and warm spring sunlight filtering softly through flowers and greenery. Romantic atmosphere with soft emotional chemistry, dreamy yet elegant mood.\n\nRendered in a minimalist contemporary watercolor fashion sketch aesthetic, featuring fine delicate ink and pencil linework layered over translucent watercolor washes, loose fluid brush strokes, wet-on-wet blending, soft bleeding edges, unfinished artistic brush textures, visible premium watercolor paper grain, elegant negative space. Soft blush pinks, warm peach tones, creamy whites, faded sage greens, and delicate floral hues naturally melting into the background.\n\nFlat editorial lighting, refined luxury magazine illustration feel, poetic spring romance atmosphere. No photorealism, no 3D render, no bokeh, no depth-of-field blur, no harsh outlines, no caricature, no cluttered background, no over-detailing.",
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
    "prompt": "Ultra-detailed anime villain portrait poster, dark cosmic background, legendary antagonist standing front-facing, one hand covering the lower face in a sinister pose, glowing eyes staring directly at the viewer, powerful aura exploding around the body, energy particles, nebula clouds, ink splashes, cosmic dust, dramatic rim lighting, high contrast shadows, cinematic anime illustration, sharp facial details, muscular physique, premium manga cover aesthetic, vibrant monochromatic color theme matching the character, giant distressed typography behind the character displaying the name in huge bold letters, Japanese kanji and English subtitles, character quote on the side, power stats panel, classification section, signature abilities list, collectible trading-card layout, magazine infographic design, luxury poster composition, white and black graphic elements, ultra-clean typography, layered visual hierarchy, glowing effects, dynamic atmosphere, masterpiece anime artwork, poster design, highly detailed, 8K, vertical wallpaper, trending on ArtStation.",
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
    "prompt": "Using the provided reference image, create an ultra-realistic candid nightlife fashion photoshoot of a beautiful young woman at a trendy upscale restaurant lounge at night.\n\nShe has a slim figure, long voluminous dark brown hair, flawless glowing skin, soft glam makeup, glossy nude lips, subtle eyeliner, and an effortlessly confident expression.\n\nShe is wearing a fitted deep red halter-neck crop top with a plunging neckline, paired with low-rise charcoal gray vintage-wash denim jeans. Accessories include a small black quilted shoulder bag with a silver chain strap, delicate bracelets, and minimal jewelry.\n\nCreate a 3-photo vertical collage capturing different candid poses:\n\n1. Looking down with eyes closed, one hand resting on her chest.\n\n2. Side pose with hair tied into a loose ponytail, looking over her shoulder.\n\n3. Standing confidently with one hand raised near her hair, showing the outfit clearly.\n\nThe setting is a crowded luxury restaurant with rattan chairs, candlelit tables, warm ambient lighting, arched windows, hanging greenery, and guests dining in the background. Shot using direct on-camera flash, creating a nostalgic early-2000s paparazzi aesthetic with slightly overexposed highlights and authentic nightlife energy.\n\nPinterest aesthetic, Instagram nightlife photography, candid fashion editorial, luxury restaurant atmosphere, realistic skin texture, film-camera flash look, subtle grain, warm tones, shallow depth of field, trendy influencer style, photorealistic, Vogue nightlife editorial, DSLR flash photography, 35mm lens, high-fashion social media content, masterpiece, best quality, ultra realistic, 8K.",
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
    "prompt": "Sports Car Made of Lightning\nPrompt: Supercar emerging from a storm cloud, body formed entirely from blue lightning bolts, wet reflective road, thunder exploding in background, cinematic action advertising, high-speed energy trails, ultra-detailed automotive render, luxury commercial photography, 8K.",
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
    "prompt": "{\n  \"task\": \"image_to_image_style_transfer\",\n  \"input_image\": \"{{USER_IMAGE}}\",\n  \"prompt\": \"Create a hyper-real 3D studio composition that recreates the main subject from the provided image as a fragmented stone assemblage. The subject must be built from separate, clearly detached rock pieces with small visible gaps between shards (no pieces merging). Material look: fragmented slate + sandstone shards with chiseled edges, crisp fractures, visible stone grain, micro-scratches, and realistic roughness. Color palette: predominantly dark slate with subtle warm-ochre sandstone accents. Lighting: soft studio key light from top-left, gentle fill, subtle contact shadows under each shard, realistic ambient occlusion in crevices, clean reflections kept minimal. Background: minimal off-white seamless backdrop, no texture. Framing: centered, clean, straight-on, subject fully readable. Add a few tiny debris chips floating or resting near the base for depth. Preserve the subject’s identity, proportions, and recognizable silhouette from the input image while transforming all surfaces into stone fragments. Hyper-real, high detail, sharp focus, 8k render quality.\",\n  \"negative_prompt\": \"text, typography, logo, watermark, signature, extra props, busy background, fog, heavy bloom, cartoon, illustration, lowpoly, plastic, metal, glossy paint, melted shapes, merged fragments, unreadable subject, blur, noise, low resolution, oversharpening halos, distorted face/body, extra limbs, deformed geometry\",\n  \"output\": {\n    \"aspect_ratio\": \"use_input_aspect_ratio\",\n    \"background\": \"off_white\",\n    \"camera\": {\n      \"angle\": \"straight_on\",\n      \"framing\": \"centered\",\n      \"distance\": \"medium\"\n    }\n  },\n  \"params\": {\n    \"style_strength\": 0.75,\n    \"identity_preservation\": 0.9,\n    \"detail_level\": \"very_high\",\n    \"lighting_preset\": \"soft_studio_top_left\",\n    \"shadow_intensity\": \"subtle\",\n    \"gap_visibility\": \"clear\",\n    \"debris_chips\": \"few_tiny\",\n    \"no_text\": true\n  }\n}",
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
    "prompt": "The generated image uses the uploaded image as a reference for the character, wearing a high-necked, tight-fitting black long-sleeved dress. A cluster of withered wood and orange-pink flowers lies beside an old newsstand, the grainy texture of vintage film interwoven, the blurred background with noticeable trailing shadows, and the double-image effect creating a fantastical atmosphere. A bewitchingly beautiful girl, carrying flowers, is shown in profile, her fair skin delicate and translucent.\n\nHer exquisite face is blurred with motion, the outline of her figure slightly swaying with the panning camera, the soft focus making the image even more hazy and languid. A warm-toned, low-saturation filter enhances the effect, her long, backlit hair glowing with a soft glow, the messy strands sweeping wildly across her jawline, the details concealing a captivating yet dangerous allure.Cute movements add dynamism, the motion blur blending with the film grain, creating a trendy, Instagram-worthy image while the blurred image outlines a dynamic scene full of story, cleverly balancing bewitching and sweetness.\nFollow : @AiwithZohaib",
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
    "prompt": "Use the uploaded image as the one and only product reference. Preserve the jewelry exactly as it is, with high fidelity to its original design, shape, proportions, gemstone arrangement, metal tone, craftsmanship, setting, texture, and identity. Do not redesign, simplify, or alter the jewelry itself in any way. Keep the product accurate, luxurious, and instantly recognizable.\n\nCreate an extraordinary luxury jewelry campaign image where the product is the absolute visual hero. Build a bold, artistic, and premium scene around it that feels cinematic, elegant, and visually unforgettable. The result must never feel like a basic catalog shot or a repetitive product render.\n\nFor every generation, create a different visual concept so the outputs do not look similar to one another. Vary the composition, environment, supporting element, texture, background structure, framing, angle, and styling approach each time. Each image should feel unique, fresh, and creatively elevated while still maintaining a refined luxury identity.\n\nInclude one or more strong supporting natural or tactile elements that help frame and enhance the jewelry, such as a branch, hand, leaf, stone, bark, flower petal, sand texture, silk fold, glass reflection, water ripple, smoke, shell, or sculptural organic form. These elements should not distract from the product, but should artistically support it and make it feel more premium, emotional, and visually magnetic.\n\nUse color contrast intelligently. Place the jewelry within a scene that uses an opposite or contrasting color tone to make the piece stand out strongly, while still keeping the palette harmonious, tasteful, and luxurious. The contrast should feel intentional and sophisticated, never random or harsh. The product must pop clearly from the scene through contrast in color, texture, light, or material.\n\nUse strong visual hierarchy, elegant negative space, and a striking focal composition that makes the jewelry dominate the frame. The product should feel iconic, powerful, and highly desirable. Emphasize macro-level detail, realistic sparkle, gemstone brilliance, polished metal reflections, fine craftsmanship, prongs, edges, texture, and premium material depth.\n\nLighting should be cinematic and refined, with soft directional light, controlled highlights, elegant shadows, subtle rim light, atmospheric glow, and beautiful depth. Use shallow depth of field and macro product-photography aesthetics to keep the jewelry crisp and visually commanding.\n\nThe final image should feel like a world-class luxury editorial ad from a top creative studio: visually bold, highly refined, emotionally captivating, and far beyond ordinary product photography.\n\nAvoid repeated concepts, repeated props, repeated backgrounds, flat lighting, weak framing, visual clutter, cheap styling, generic catalog presentation, text, watermark, and logos.",
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
    "prompt": "Ultra-clean modern recipe infographic. Showcase your dish in a visually appealing finished form, sliced, plated, or portioned, floating slightly in perspective or angled view. Arrange ingredients, steps, and tips around the dish in a dynamic editorial layout, not top-down. Ingredients: include icons or mini illustrations for each ingredient with quantities, arranged in clusters, lists, or circular flows connected visually to the dish. Steps: show preparation steps with numbered panels, arrows, or lines forming a logical flow. Include small cooking icons (knife, pan, oven, timer) where helpful. Optional info: total calories, prep/cook time, servings, spice level displayed as clean bubbles or badges. Visual style: editorial infographic meets lifestyle food photography. Vibrant natural food colors, subtle drop shadows, clean vector icons, modern typography, soft gradients or glassmorphism for step panels. Accent colors highlight key info. Composition: finished meal as hero visual (perspective or angled), ingredients and steps flow dynamically around the dish, clear visual hierarchy, enough negative space to keep design airy and readable. Lighting: soft natural studio lighting, minimal textured or gradient background for premium editorial feel. Output: 1080x1080, ultra-crisp, social-feed optimized.\n\nFull prompt:",
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
    "prompt": "Use @[storyboard ref]  as the authoritative director-approved storyboard blueprint for the sequence. Treat every storyboard panel as a consecutive shot within a single cinematic sequence. Follow panel order exactly and do not invent alternative coverage. Do not render the storyboard sheet itself. Preserve camera placement, framing, lens intent, shot scale, character staging, screen direction, environmental geography, prop placement, action choreography, continuity and emotional escalation shown by the storyboard. The storyboard is the primary source of truth for visual storytelling. Recreate the filmed sequence implied by the panels rather than the physical storyboard artwork.\nThe entire video must play as one continuous developing master shot with no visible cuts; each panel is a sampled phase of the same uninterrupted camera move, not a separate shot.\nUse one virtual lens / same-lens move; angle changes come from backward front-track, push-in, shallow front-side orbit, and pullback only. Never pass behind Rand.\nUse @[char1 ref] as starting Rand/C1. Use @[char2 ref]  as final RAN.\n\nENVIRONMENT: Vivid daytime street into quiet passage: colorful storefront glass, crosswalk, posters, bollards, hard shadows, unaware crowd, right-side escape. Rand runs toward the camera as it retreats in front of her.\nEMOTIONAL GUIDANCE: Valence: vulnerable public appeal into private panic, then altered control. Arousal: urgent run -> \"I can't control this\" flicker -> false heads -> palm-slap snapbacks -> hidden roulette -> RAN lock. Crowd never notices.\nVISUAL STYLE: Match @[char1 ref] : faceted semi-real concept art, vivid daylight, crisp skin, polygon texture, hard shadows, vertical black-gray pixels stuck to Rand's whole head until final body lock; no side faces.\nTRANSFORMATION RULE: P03-P07 must not show face fragments beside Rand or as floating panels. Each temporary identity replaces the actual head attached to Rand's neck for a readable instant, like a broken TV channel. Body keeps running/bracing while the head swaps. Original Rand head returns only after each open-palm slap. Only final @[char1 ref] lock spreads below the neck.\nAUDIO: No music. Use crowd, footsteps, breath, clothing rustle, pixel tearing, palm-head slaps, glitch snaps, dialogue.\n\nPANEL BEATS:\nP01: Wide backward front-track. Rand runs toward camera through unaware crowd, original identity intact, colorful storefronts behind her.\nP02: Camera retreats in front of her as she looks into the lens, breathing hard: \"You're probably wondering why I'm running.\"\nP03: Camera keeps retreating front-side as she spots the passage: \"I need to get away before it starts. I can't control this.\" On that line, she looks to lens; her whole head starts vertical glitching, still attached to her neck.\nP04: Camera pushes closer. Three human heads replace her actual head one after another, each in the same skull position, never beside it. She open-palm slaps side of head like fixing a TV, no pointing; original Rand head snaps back.\nP05: More whole-head swaps cycle on the neck: older man, pale mask-like face, shaved head, then a clear animal head as rejected option. Rand gives another open-palm slap; Rand head briefly returns.\nP06: Camera backs into passage with her as she ducks into cover; first dense whole-head roulette shows readable heads replacing her actual head in micro-freezes, body/clothes still Rand's.\nP07: Still front-side in cover, second roulette beat shows different readable heads replacing the same head volume; no side faces, no floating panels, no clones, no detached masks.\nP08: At the wall, closest front-side orbit: roulette stops on @[char2 ref] RAN. Only now the glitch runs down the body as cap, braids, sunglasses, blue jacket, hoodie, pink cargos, chains, sneakers lock in.\nP09: Camera pulls wider in passage. RAN lowers his hand, fully changed into @[char2 ref], looks to lens, says, \"See? I told you. I can't control it.\"\n\n---\n\nI shared the storyboard skill file I use for these prompts with my subscribers.",
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
    "prompt": "👇\n{\n  \"project_title\": \"INNER SIGNAL\",\n  \"concept_type\": \"Brand Identity Poster Series\",\n  \"brand_name\": \"SIGNAL\",\n  \"tagline\": \"FEED THE INNER SIGNAL\",\n  \"style\": {\n    \"look\": \"bold experimental editorial branding\",\n    \"mood\": \"mysterious, powerful, rebellious, premium\",\n    \"colors\": [\"black\", \"crimson red\", \"white\"],\n    \"lighting\": \"hard red light, deep shadows, high contrast\",\n    \"texture\": \"film grain, halftone, motion blur\"\n  },\n  \"design_rules\": {\n    \"typography\": \"bold uppercase sans-serif, Swiss-style layout\",\n    \"layout\": \"clean grid, strong negative space, recurring minimal logo mark\",\n    \"visual_language\": \"cinematic, fashion-forward, dark, sharp, minimal\"\n  },\n  \"brand_message\": \"Build identities that do not blend in. Designed for ambitious brands that want presence, confidence, and creative impact.\",\n  \"poster_series\": [\n    {\n      \"title\": \"The Two Selves\",\n      \"subject\": \"dark human silhouette with two blurred side profiles behind the head\",\n      \"meaning\": \"inner conflict, identity, duality\",\n      \"text_overlay\": \"FEED THE INNER SIGNAL.\",\n      \"prompt\": \"A bold branding poster with a lone dark silhouette against a glowing crimson red background. Two blurred shadow profiles appear behind the head, suggesting dual identity and inner voices. High contrast red and black lighting, minimal white logo mark, bold uppercase typography, cinematic editorial style, film grain, clean Swiss layout.\"\n    },\n    {\n      \"title\": \"The Crowd Signal\",\n      \"subject\": \"crowd silhouettes facing a giant glowing red screen\",\n      \"meaning\": \"presence, influence, voice rising above noise\",\n      \"text_overlay\": \"SIGNALS RISE ABOVE NOISE.\",\n      \"prompt\": \"A premium poster showing a dark crowd in silhouette facing a large glowing red screen with abstract geometric shapes. The scene feels cinematic and intense, with black shadows, crimson atmosphere, subtle haze, white typography, and a modern branding layout.\"\n    },\n    {\n      \"title\": \"The Focused Face\",\n      \"subject\": \"close-up portrait with a red line crossing the eyes\",\n      \"meaning\": \"clarity, vision, self-definition\",\n      \"text_overlay\": \"DESIGNED TO BE SEEN.\",\n      \"prompt\": \"A close-up fashion portrait of a person in deep shadow against a solid crimson background. A thin red band crosses the eyes, creating a futuristic and psychological feel. High-end editorial lighting, minimal white text, black clothing, premium poster design.\"\n    },\n    {\n      \"title\": \"The Instinct\",\n      \"subject\": \"aggressive black dog or wolf under red light\",\n      \"meaning\": \"raw creative power, instinct, fearless energy\",\n      \"text_overlay\": \"RAISING THE STANDARD OF CREATIVE INSTINCT.\",\n      \"prompt\": \"A dark animal portrait poster featuring a black dog or wolf emerging from shadow under intense red lighting. Teeth visible, powerful expression, black background, white typography, bold brand aesthetic, gritty film texture, luxury editorial composition.\"\n    },\n    {\n      \"title\": \"The Connection\",\n      \"subject\": \"black carabiner linking thick ropes\",\n      \"meaning\": \"systems, structure, trust, connection\",\n      \"text_overlay\": \"BRAND SYSTEMS. CREATIVE DIRECTION.\",\n      \"prompt\": \"A clean branding poster with a black metal carabiner connecting two thick ropes against a pure crimson red background. Glossy highlights, product-style lighting, centered composition, minimal white logo mark, Swiss typography, sleek premium design.\"\n    },\n    {\n      \"title\": \"The Hidden Beast\",\n      \"subject\": \"abstract halftone tiger or leopard face\",\n      \"meaning\": \"ambition, hidden force, controlled danger\",\n      \"text_overlay\": \"FOR AMBITIOUS BRANDS THAT MOVE WITH INTENT.\",\n      \"prompt\": \"An abstract poster showing a tiger or leopard face formed with red halftone texture emerging from deep black space. Mysterious and intense mood, experimental print look, minimal white typography, strong contrast, premium creative studio identity.\"\n    }\n  ],\n  \"master_prompt\": \"Create a 6-poster brand identity series for a fictional creative studio named SIGNAL. Use only black, crimson red, and white. The posters should feel cinematic, premium, rebellious, and intelligent. Use high-contrast editorial visuals, deep shadows, red lighting, film grain, halftone texture, bold uppercase typography, and minimal logo repetition. Themes include dual identity, influence, vision, instinct, connection, and ambition.\"\n}",
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
    "prompt": "Create a 16:9 image.\n\n[PROJECT CARD]\nCreate a compact designed masthead, not a table.\nTITLE: THE DUST BUNNY NATURE DOCUMENTARY\nMETA LINE: macro wildlife realism / under-couch survival ecosystem / dry documentary comedy / 15-second natural-history chase\nPRIORITY: real nature-documentary seriousness, under-couch wilderness, dust bunny herd, fragile main dust bunny, household objects as landmarks, vacuum cleaner apex predator, survival chase, calm noble ending\nMICRO BRIEF: Eighteen-panel storyboard of a small dust bunny under a couch filmed like a wild animal surviving in a dangerous natural habitat.\n[CONTINUITY HEADER]\nSEQUENCE ID: DUST-BUNNY-DOC-18\nREFERENCE PRIORITY: This storyboard controls C1 dust bunny identity, under-couch geography, macro household scale, documentary lens language, herd behavior, vacuum predator logic, survival chase continuity, and dry comedic realism.\n[SCENE PACKET]\nPREMISE: Beneath an ordinary living-room couch exists a hidden wilderness. Dust bunnies drift and gather like a small herd in a shadowed ecosystem of carpet fibers, long hair strands, crumbs, lost objects, and canyon-like sofa legs. One small fragile dust bunny explores the terrain, moving through the under-couch world like a wild animal foraging in a hostile habitat. The peace breaks when the ground begins to tremble. The vacuum cleaner arrives like an apex predator: part lion, part shark, part sandstorm. Its suction pulls dust, crumbs, and debris into a violent vortex. C1 races through the under-sofa wilderness, dodges household dangers, tumbles past a lost LEGO brick, coin, pen cap, crumbs, and hair-strand forests, then finds cover just in time. The vacuum passes. Calm returns. The herd remains. Against all odds, life continues under the couch.\nLOCATION:\nThe underside of a couch in a real home, filmed at extreme macro scale.\nEnvironment: dark sofa underside, canyon-like couch shadows, carpet fibers like tall grass, dust motes drifting like desert particles, long hair strands like tangled vines or forest roots, crumbs like boulders, a lost LEGO brick like a red stone ruin, a coin like a metallic moon-disc, a pen cap like a fallen cylinder monument, deep shadow pockets used as cover.\nWorld scale: everything is household-sized in reality but filmed like a vast natural ecosystem.\nSTART -> END:\nC1 and a small dust bunny herd rest calmly in the hidden under-couch habitat -> C1 explores and forages -> the vacuum arrives and creates a suction storm -> C1 survives by finding cover -> C1 returns to the herd as the habitat settles back into quiet.\nACTION CHAIN:\ncalm under-couch ecosystem -> dust bunny herd drifting -> main dust bunny emerges -> foraging through carpet grass -> LEGO ruin pass -> coin reflection -> pen cap tunnel -> crumbs and hair forest -> ground tremor -> vacuum shadow appears -> suction storm begins -> debris vortex pulls everything -> C1 tumbles and runs -> near miss at nozzle edge -> cover behind LEGO brick -> vacuum passes -> dust settles -> C1 returns to herd -> life continues.\n\nPROP / EFFECT STATE:\nC1 is a believable dust bunny creature made from dust, fuzz, hair, lint, and tiny fibers. It has subtle expressive movement but no human face, no speech, no limbs like a cartoon mascot, no clothes, and no exaggerated cuteness.\nDust bunny herd members are soft drifting clumps of dust and lint with tiny natural movement, not characters with faces.\nThe vacuum cleaner is the apex predator. It should be introduced through shadow, vibration, low mechanical presence, nozzle movement, suction wind, and debris being pulled into darkness. It should feel genuinely threatening in documentary terms, not like a villain with personality.\nThe household objects are landmarks: LEGO brick, coin, pen cap, crumbs, hair strands, carpet fibers. They should feel like real objects seen at extreme macro scale.\nMUST READ:\nThe style must stay committed to real documentary seriousness. This is not a cartoon parody. The joke is that a dirty forgotten corner of a home is treated like a majestic wildlife ecosystem.\n[CHARACTER SANITIZATION]\nC1: small dust bunny, fragile rounded irregular shape, soft grey-beige lint body, slightly shaggy edges, tiny tangled hair fibers, dust particles clinging to its surface, delicate movement like a windblown creature, subtle readable orientation without a cartoon face. It should feel alive but still plausibly made from household dust and fuzz.\nC2: dust bunny herd, several smaller and larger dust clumps drifting and resting in shadow, fragile, quiet, non-human, no obvious faces, no mascot design.\nC3: vacuum cleaner apex predator, seen mostly as a large dark nozzle, rotating brush shadow, vibrating floor presence, harsh suction wind, low mechanical threat. It should feel enormous from dust-bunny scale.\nC4: household landmarks — lost LEGO brick, coin, pen cap, old crumbs, long hair strands, carpet fibers, couch legs, dark sofa underside. These are environmental features, not props to be played for slapstick.\n\n[IDENTITY CONSISTENCY]\nKeep C1’s small grey-beige shaggy dust-and-lint body, fragile irregular shape, hair-fiber texture, and subtle movement consistent across every panel. Keep the under-couch geography consistent: couch underside above, carpet fibers below, lost objects as landmarks, vacuum entering from one side. Preserve face, identity, skin tone, body shape, hair, outfit, and proportions exactly across every panel. No identity drift. No redesign.\n[STORYBOARD PURITY]\nCreate a clean professional storyboard sheet with 18 panels arranged in a compact 3x6 grid. Full-color cinematic documentary panel artwork. Put panel numbers, beat names, and lens tags in a clean header strip outside each panel image. No captions, no subtitles, no speech bubbles, no logos, no watermarks, no arrows inside the artwork, no technical overlays. Do not make the dust bunny too cute or anthropomorphic. Do not overcrowd panels. Each panel must have one clear wildlife-documentary visual idea.\n\n[MASTER SHOT RULE]\nP01 must clearly establish the under-couch ecosystem in calm documentary beauty: sofa underside overhead, carpet fibers like grass, dust motes in shallow focus, lost objects in the distance, herd visible but subtle. P10 must clearly introduce the vacuum as an enormous apex predator presence. P13-P15 must be the clearest survival-chase section. P18 must return to calm, noble life continuing under the couch.\n[EMOTIONAL ARC]\nHidden natural beauty -> fragile creature life -> strange majestic household wilderness -> first tremor -> predator arrival -> survival panic -> near consumption -> shelter and endurance -> dust settles -> noble absurd continuity of life.\n[STYLE LOCKS]\nSTYLE LOCK: National Geographic / BBC Earth macro documentary realism, cinematic natural-history lens language, shallow depth of field, extreme macro photography, realistic household textures, dust motes in volumetric light, tactile carpet fibers, muted earth tones, soft documentary contrast, serious wildlife cinematography.\nREALISM LOCK: the dust bunny should feel like a believable dust-and-lint organism, not a cartoon character. Movement is subtle, fragile, and wind-driven. No talking, no human gestures, no mascot design.\nDOCUMENTARY LOCK: camera treats the under-couch world like a real ecosystem: patient observation, macro tracking, hidden-life beauty, predator dread, survival stakes.\nPREDATOR LOCK: the vacuum is shot like a natural threat: shadow first, vibration second, then nozzle and suction vortex. It should feel like a lion, shark, and sandstorm combined, but still clearly a household vacuum cleaner.\nCOMEDY LOCK: dry seriousness is the joke. Do not wink at the audience. Do not exaggerate into slapstick.\nENVIRONMENT LOCK: underside of couch remains the same wilderness throughout: couch shadow canopy above, carpet fiber grass below, lost LEGO brick, coin, pen cap, crumbs, and hair strands as landmarks.\n[SPATIAL CONTINUITY LOCK]\nP01-P04 establish the calm under-couch ecosystem and C1 among the dust bunny herd.\nP05-P08 follow C1 exploring through the household landmark terrain.\nP09-P10 introduce vibration and vacuum predator arrival from one side of the couch.\nP11-P15 stage the suction chase through the same under-couch geography.\nP16 shows C1 finding cover and surviving the vacuum pass.\nP17-P18 restore calm and return C1 to the herd.\nThe vacuum always enters from one consistent direction. C1’s survival path moves from the open carpet-fiber field toward cover behind the LEGO brick or pen cap.\n\n[DIRECTOR STRIP]\nBottom animatic track board aligned to panel columns. Tracks: BEAT LINE, CAMERA PATH, ACTION PATH, RHYTHM TRACK, ESCALATION MAP, STATE TRACK, STYLE TRACK. Use clean shot chips, thin lines, small rhythm blocks, and short labels. No timestamps.\nPANEL HEADERS:\nP01 / macro 35mm / Hidden ecosystem\nP02 / macro 100mm / Herd drifts\nP03 / 85mm close / C1 emerges\nP04 / low macro / Carpet grass\nP05 / 70mm track / Foraging path\nP06 / macro wide / LEGO ruin\nP07 / 100mm insert / Coin moon\nP08 / 50mm tunnel / Pen cap shelter\nP09 / 85mm tremor / Ground warning\nP10 / low 24mm / Predator shadow\nP11 / 35mm storm / Suction begins\nP12 / macro chaos / Debris vortex\nP13 / 70mm chase / C1 runs\nP14 / 100mm danger / Nozzle near miss\nP15 / low 35mm / Hair forest escape\nP16 / 50mm cover / Survives pass\nP17 / macro calm / Dust settles\nP18 / 35mm wide / Life continues\n\nCAMERA + LENS PLAN:\nP01 wide macro establishing shot under the couch, sofa underside like canyon ceiling, carpet fibers like grass, dust motes floating in light.\nP02 patient macro shot of several dust bunnies drifting and gathering like a herd in a hidden ecosystem.\nP03 close documentary shot of C1 emerging from shadow, fragile and shaggy, subtly alive.\nP04 low carpet-level shot as C1 moves through tall carpet fibers like grassland.\nP05 tracking macro shot following C1 foraging through crumbs and lint.\nP06 wider macro shot of C1 passing a lost LEGO brick framed like an ancient red stone ruin.\nP07 insert shot of a coin reflecting dim light like a metallic moon in the under-couch world.\nP08 tunnel-like shot of C1 passing near a pen cap, treated like a fallen hollow log or shelter.\nP09 tense close shot as carpet fibers vibrate and dust trembles from an approaching force.\nP10 low dramatic shot of the vacuum nozzle shadow entering the habitat like an apex predator.\nP11 wide macro chaos shot as suction begins pulling dust motes, crumbs, and lint into a directional wind.\nP12 extreme macro shot of debris spinning in a suction vortex, realistic and tactile.\nP13 fast documentary chase shot of C1 tumbling and racing through the carpet-fiber field.\nP14 intense near-miss shot: vacuum nozzle edge passes dangerously close as C1 is almost pulled in.\nP15 low tracking shot as C1 escapes through long hair strands like a tangled forest.\nP16 still tense shot as C1 wedges behind the LEGO brick or pen cap, surviving as the vacuum passes.\nP17 quiet macro shot as dust settles back onto the carpet and the predator sound fades.\nP18 wide macro final shot of C1 returning to the dust bunny herd, calm restored, life continuing under the couch.\nACTION PATH:\nP01 The under-couch wilderness is revealed in calm documentary beauty.\nP02 Dust bunnies drift and gather like a quiet herd.\nP03 C1 emerges carefully from shadow.\nP04 C1 moves through carpet fibers like tall grass.\nP05 C1 forages among crumbs, dust, and lint.\nP06 C1 passes the lost LEGO brick landmark.\nP07 C1 crosses near the coin, its reflection looming huge.\nP08 C1 explores beside the pen cap shelter.\nP09 The ground trembles; dust particles shake.\nP10 The vacuum cleaner shadow appears at the edge of the habitat.\nP11 Suction begins, pulling dust and crumbs into a violent wind.\nP12 Debris spins into a vortex.\nP13 C1 races away through the under-couch wilderness.\nP14 C1 narrowly avoids the vacuum nozzle.\nP15 C1 tumbles through hair strands and carpet fibers.\nP16 C1 finds cover behind the LEGO brick or pen cap and survives the pass.\nP17 The vacuum leaves; dust settles; silence returns.\nP18 C1 rejoins the herd. Against all odds, life continues.\n\nRHYTHM TRACK:\nP01 hold / hidden beauty / patient beat\nP02 observe / calm life / documentary beat\nP03 reveal / fragile subject / clean beat\nP04 move / quiet exploration / slow beat\nP05 forage / natural behavior / measured beat\nP06 landmark / scale reveal / held beat\nP07 detail / world texture / quiet beat\nP08 shelter / ecosystem detail / clean beat\nP09 warning / tremor / tension beat\nP10 predator reveal / dread / held beat\nP11 attack / suction wind / impact beat\nP12 vortex / chaos / storm beat\nP13 chase / survival run / driving beat\nP14 near miss / danger spike / smash beat\nP15 escape / tangled path / whip beat\nP16 cover / survival pause / suspended beat\nP17 settle / predator gone / release beat\nP18 continue / noble calm / final hold\nESCALATION MAP:\nP01 L1 calm / flat\nP02 L1 ecosystem / hold\nP03 L2 subject reveal / rise\nP04 L2 exploration / hold\nP05 L2 foraging / hold\nP06 L2 scale wonder / rise\nP07 L2 texture wonder / hold\nP08 L2 shelter / hold\nP09 L3 warning / spike\nP10 L4 predator / rise\nP11 L5 attack / spike\nP12 L5 vortex / surge\nP13 L5 chase / sustained\nP14 L5 near death / spike\nP15 L4 escape / unresolved\nP16 L3 survival / drop\nP17 L2 calm returns / release\nP18 L1 life continues / resolved\nSTATE TRACK:\nP01 hidden habitat\nP02 herd calm\nP03 C1 emerges\nP04 carpet grass\nP05 foraging\nP06 LEGO ruin\nP07 coin moon\nP08 pen cap shelter\nP09 tremor\nP10 vacuum shadow\nP11 suction begins\nP12 debris vortex\nP13 survival chase\nP14 nozzle near miss\nP15 hair forest escape\nP16 cover survives\nP17 dust settles\nP18 herd remains\nSTYLE TRACK:\nP01 BBC Earth macro\nP02 fragile herd\nP03 wild subject\nP04 grassland scale\nP05 natural behavior\nP06 household ruin\nP07 metallic landmark\nP08 hidden shelter\nP09 predator omen\nP10 apex dread\nP11 sandstorm suction\nP12 debris cyclone\nP13 survival sprint\nP14 shark-mouth danger\nP15 forest escape\nP16 sheltered life\nP17 quiet aftermath\nP18 noble absurdity\n[NEGATIVE / AVOID]\nDo not make the dust bunny too cute in a Pixar way.\nDo not give the dust bunny a cartoon face, human eyes, arms, legs, clothing, speech, or mascot behavior.\nDo not turn the vacuum into a character with a face.\nDo not make the scene loud, colorful, or cartoonish.\nDo not lose the realism of the household environment.\nDo not make the couch world clean or magical.\nDo not overcrowd panels with too many objects.\nDo not add narration text, captions inside panels, speech bubbles, logos, watermarks, UI, or arrows inside the artwork.\nDo not make the dust bunny herd look like plush toys.\nDo not make the ending sentimental; make it calm, dry, and weirdly noble.\n\n[SEQUENCE]\nGrid: 18 panels in a compact 3x6 cinematic storyboard sheet. The sequence must read as a serious macro nature documentary: a small dust bunny lives under a couch, explores its household wilderness, faces the vacuum cleaner apex predator, survives the suction storm, and returns to the herd as calm life continues. National Geographic / BBC Earth documentary realism, macro household scale, dry absurd comedy, tense survival framing, and committed visual seriousness throughout.\n\nSeedance 2.0 Prompt:\n\nUse as the authoritative director-approved storyboard blueprint for the sequence. Treat every storyboard panel as a consecutive shot within a single cinematic survival-documentary sequence. Follow panel order exactly and do not invent alternative coverage. Do not render the storyboard sheet itself. Preserve camera placement, framing, lens intent, shot scale, under-couch geography, dust-bunny scale, household landmark placement, vacuum-predator approach, suction-storm escalation, survival chase logic, and quiet final recovery shown by the storyboard. The storyboard is the primary source of truth for visual storytelling. Recreate the filmed sequence implied by the panels rather than the physical storyboard artwork.\n\nREFERENCE PRIORITY:  controls the under-couch ecosystem, dust bunny design, dust herd behavior, LEGO ruin, coin sun, pen cap tunnel, crumb boulders, hair forest, vacuum predator staging, suction vortex physics, shelter beat, documentary realism, and panel purity.\n\nTITLE: THE DUST BUNNY NATURE DOCUMENTARY\n\nFORMAT: 15-second macro survival nature documentary. Serious wildlife tone applied to household dust. No dialogue from characters. No faces. No cartoon behavior.\n\nMAIN SUBJECT:\nThe main dust bunny is a small tangled ball of grey dust, hair fibers, lint, tiny crumbs, and loose fuzz. It must feel like a real physical dust clump, not a cute creature. It has no eyes, no mouth, no limbs, no facial expressions, and no human behavior. Its personality is created only through camera framing, movement, danger, and survival context.\n\nENVIRONMENT:\nA hidden ecosystem under a couch. The underside of the couch forms a dark ceiling; couch legs feel like giant trees; carpet fibers become grassland; dust particles hang in the air like desert haze. Household debris becomes wilderness landmarks: a red LEGO brick as an ancient ruin, a coin standing like a glowing sun disk, a pen cap as a tunnel, crumbs as boulders, tangled hair strands as a forest. The under-couch geography must remain consistent and readable.\n\nPREDATOR:\nThe vacuum cleaner is the predator. It appears at the edge of the couch as a dark, heavy mechanical threat. It should not look silly or friendly. The danger comes from vibration, shadow, proximity, suction wind, debris movement, and the violent pull of the vortex.\n\nEMOTIONAL GUIDANCE:\nValence: quiet hidden ecosystem → strange natural beauty → discovery → distant threat → predator reveal → violent survival chase → last-second shelter → calm continuation.\nArousal: slow observational opening, gentle exploration, sudden ground tremor, rising threat, intense suction storm, near-miss danger, shelter release, quiet survival.\nThe comedy comes from the seriousness of the documentary language. The scene should feel funny because it is played completely straight.\n\nVISUAL STYLE:\nNational Geographic / BBC Earth macro survival documentary. Low macro camera, shallow depth of field, realistic dust texture, floating dust motes, dramatic naturalistic light shafts, tactile carpet fibers, realistic household debris, cinematic macro wildlife framing, earthy brown-grey palette, occasional warm highlights from distant room light. The world should feel vast, ancient, and dangerous even though it is only under a couch. Documentary realism first; no Pixar-cute expression, no anthropomorphic design.\n\nAUDIO:\nNo character dialogue. Optional serious nature-documentary style narration is allowed only if the platform supports voice, but the visuals must work without it. Use diegetic survival-documentary sound design: low room tone, tiny dust movement, faint fiber crackle, distant household hum, subtle rumble before the vacuum appears, heavy mechanical approach, carpet vibration, suction wind, debris rattling, crumbs scraping, hair strands whipping, vortex rush, sudden muffled shelter silence, vacuum fading away, then calm dust-settling ambience. Music, if used, should be restrained wildlife-documentary tension: minimal low drone, rising pulse during predator approach, intense swell during suction chase, cut down to quiet after shelter.\n\nPANEL BEATS:\nP01: Hidden World; wide shot. Under the couch, a vast dark ecosystem stretches across the dusty carpet floor. Couch legs rise like trees. Dust motes drift in distant light.\nP02: The Herd; close-up. Multiple dust bunnies gather and drift like a small herd across the under-couch terrain. Natural, slow, observational.\nP03: Our Dust Bunny; MCU. Introduce the main dust bunny as a tangled grey clump of lint, hair, and dust. It feels like a wild animal only because of the camera treatment.\nP04: Exploring; close-up. The main dust bunny moves through dense carpet fibers and dust formations, exploring the hidden wilderness.\nP05: LEGO Ruin; close-up. A red LEGO brick rises like an ancient ruin in the dust landscape. The main dust bunny passes nearby, establishing it as future shelter.\nP06: Coin Sun; close-up. A coin stands upright or glints in light like a huge metallic sun. The dust bunny is tiny against it.\nP07: Pen Cap Tunnel; close-up. The dust bunny approaches or passes a dark pen cap opening, framed like a cave or tunnel.\nP08: Crumb Boulders; close-up. Crumbs loom like large boulders around the dust bunny. Keep the scale serious and naturalistic.\nP09: Hair Forest; close-up. Long strands of hair curve through the frame like tall grass or a forest. The dust bunny passes through the tangled terrain.\nP10: The Ground Trembles; wide shot. The under-couch world vibrates. Dust shifts. The herd becomes unsettled. The threat is felt before it is fully seen.\nP11: Predator Approaches; close-up. The vacuum cleaner enters at the edge of the couch like an apex predator. Dark, heavy, mechanical, dangerous.\nP12: Suction Storm Begins; close-up. The suction pulls dust, hair, crumbs, and loose fibers into motion. The first vortex forms around the dust bunny.\nP13: Debris Vortex; close-up. The storm intensifies. Dust, crumbs, hair, and debris spiral violently through the frame. The main dust bunny resists the pull.\nP14: Survival Chase; close-up. The dust bunny is dragged and rolled across the carpet by the suction wind, racing through the terrain as debris streaks past.\nP15: Near Miss; close-up. The dust bunny is almost sucked into the vacuum path. The vortex curls around it. Survival hangs by a tiny margin.\nP16: Last Second Shelter; close-up. The dust bunny reaches the red LEGO brick and tucks behind it at the last possible second. The brick blocks the suction like a rock shelter.\nP17: Danger Passes; wide shot. The vacuum moves away. The suction fades. Dust settles. The under-couch world is still again.\nP18: Life Continues; wide shot. The hidden ecosystem returns to quiet. Dust bunnies remain under the couch. The main dust bunny has survived. Life continues.\n\nKEY INSTRUCTIONS:\n\n* Keep the tone serious and documentary-real, not cute cartoon.\n* Do not give the dust bunny eyes, face, mouth, limbs, or human gestures.\n* The dust bunny must remain a real dust clump made of lint, hair, crumbs, and fuzz.\n* The vacuum must feel like a genuine predator, not a joke machine.\n* Keep the under-couch geography clear and consistent.\n* The LEGO brick must read clearly as the final shelter.\n* The chase must feel like survival, not slapstick.\n* Protect the macro scale at all times.\n* Keep household debris beautiful, tactile, and wilderness-like.\n* Do not add dialogue between objects.\n* Do not make the vacuum silly.\n* Do not make the world bright and clean; it should be dusty, shadowed, and cinematic.\n* End with quiet survival and life continuing under the couch.\n* Do not show panel boxes, labels, numbers, captions, storyboard borders, or camera notes.",
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
    "prompt": "Detailed exploded-view diagram of a Sony A7 mirrorless camera, with all internal components separated and clearly visible, each part labeled with its name. Technical product illustration style, clean white background, precise and informative layout.",
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
    "prompt": "Ultra-realistic 3D anatomical human [organ] crafted from semi-translucent frosted polycarbonate with a milky matte finish that softly diffuses light. Features industrial injection-molded details, subtle micro-texture, and rounded edges with precise manufacturing seams. Interior reveals mechanical components in place of organic tissue — micro gears, pistons, circuitry, and engineered chambers seen through the translucent shell with a soft blur. A minimal white Apple logo is subtly embedded on the surface, understated and not overpowering. Diffused studio lighting, realistic plastic light refraction, gentle shadow underneath, centered framing, pure white background, ultra-detailed futuristic biomechanical render, 1:1 aspect ratio.",
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
    "prompt": "A 1930s WPA travel poster style infographic poster in 16:9 horizontal format about solar weather and space storms, designed to look exactly like a vintage Works Progress Administration national parks poster from the New Deal era, with flat gouache-style color fills, bold black outlines, dramatic perspective and zero photorealism; the background transitions from deep black space at the top to a glowing teal-green aurora sky at the bottom, divided into bold graphic bands of color in the WPA tradition; the central illustration shows the Sun in the upper left as a massive dramatic circle with stylized flat orange and yellow flame corona eruptions radiating outward, and a large coronal mass ejection arc sweeping diagonally toward Earth in the upper right, depicted as a simplified blue sphere with a thin atmosphere ring; mid-composition, the solar wind stream is shown as bold parallel lines of warm gold flowing between Sun and Earth, and where those lines hit the atmosphere they bloom into a spectacular aurora borealis rendered in flat curtains of teal, green and violet in the WPA graphic tradition; below the main illustration, a clean horizontal strip divides the composition into three labeled science panels in a sans-serif bold font: SOLAR FLARE, CORONAL MASS EJECTION, and AURORA BOREALIS, each with a minimal one-color icon and two lines of punchy educational text; the title at the top reads SOLAR STORMS in massive slab-serif WPA lettering, with the subtitle THE VIOLENT WEATHER OF SPACE in a smaller weight beneath; the full palette is restricted to five flat colors — black, deep cream, burnt orange, teal and violet — giving the whole piece the unmistakable graphic punch and populist optimism of a 1930s government art print, high quality, aspect ratio 16:9",
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
    "prompt": "Generate a stunning premium car poster for\n[CAR MODEL].\n\nPosition the vehicle as the dominant centerpiece in a bold three-quarter side angle, visually striking and commanding full attention.\n\nCapture the full essence of the car with an aggressive stance, flawless proportions, luxury wheels, distinctive headlights, aerodynamic bodywork, spoilers, performance accents, and high-end design cues.\n\nLayer in crisp premium typography featuring the brand name, model designation, performance figures, horsepower rating, 0-60 time, top speed, engine details, and iconic milestones, seamlessly woven into the layout.\n\nWeave in subtle background motifs drawn from the car's history: ghost blueprint lines, motorsport heritage, silhouette overlays, legendary circuits, mechanical diagrams, velocity graphics, and collector-print vibes.\n\nApply bold visual contrast, vivid premium hues (no dark or black-heavy backgrounds), cinematic illumination, razor-sharp reflections, glossy paint sheen, luxury magazine quality, slick graphic design, and a scroll-stopping poster energy.\n\nPolished composition, top-tier automotive ad aesthetic, collectible poster feel, ultra-detailed, visually commanding, premium masterpiece.",
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
    "prompt": "Vertical bizarre flat cartoon portrait of [SUBJECT from the attached photo] with a high geometric head shape, a long narrow neck, huge round eyes, a tiny mouth and an unflappable laugh, dressed in [CLOTHES from the photo], with a [OBJECT/CREATURE] sitting on their head like a living hat. Pure black outline, smooth color fills, simple face shapes, rare drawings on animal fur or skin, playful surreal character design, bold graphic palette [COLOR]. Background decorations: [ENVIRONMENT DECORATIONS from LOCATION/SCENE], made using simplified shapes, clear depth, a small amount of scenery from the environment and a clear cartoon perspective. Clear digital illustration, vertical framing in the form of a poster, no realism, no 3D rendering, no picturesque shading, aspect ratio 4:5.",
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
    "prompt": "Top-tier internet marketing visual design, Behance / Dribbble inspired 3D illustration poster aesthetic, C4D rendering style, soft-light treatment, vivid high-saturation colors, dopamine-driven color palette, abstract artwork, clean minimalist background, fresh and lively feel, youthful and energetic vibe, polished and intricate. Theme: Urban Nomad Project.",
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
    "prompt": "Cinematic photorealistic action scene on a rain-soaked downtown street canyon. A dark-haired man in his 30s sprints toward the camera, soaked dark jacket and dark pants, mid-stride with a tense survival expression. Behind him, a massive urban explosion tears through a high-rise building -- fire, smoke, shattered concrete, glass, and metal debris blast outward. Exactly 3 damaged vehicles visible: a dark sedan left foreground with crumpled hood splashing through rainwater, a wrecked dark car right midground, and an overturned black SUV tilted up on the right. Wet asphalt reflects headlights and firelight. Dense debris frozen mid-air. Overcast stormy daylight, desaturated blue-gray palette with orange fire accents, motion blur on flying debris but sharp focus on the runner, low-angle wide-lens composition, ultra-detailed blockbuster disaster-movie realism, volumetric smoke, rain spray, cinematic lighting, high contrast.",
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
    "prompt": "Modify this photo so the total adds up to 244.5 baht. Adjust the number of coins in each stack until the combined value hits the target.",
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
    "prompt": "Design a minimal early-internet personal profile webpage / digital portfolio landing page on a large white canvas with generous negative space and a thin pastel pink browser-style frame. In the center, place a black-and-white editorial portrait of [SUBJECT], featuring soft film grain, subtle scanner texture, and low-contrast photographic tones.\n\nSurround the portrait with scattered profile metadata labels and small star-bullet elements arranged asymmetrically, resembling a playful personal résumé. Include descriptors such as:\n\n✦ creator\n✦ model\n✦ stylist\n✦ DJ\n✦ girl\n✦ photographer\n✦ collector\n✦ dreamer\n\nIn the top-left corner, create a colorful hand-drawn logo or personal brand mark. Beneath it, add a tiny timestamp and date in a small system font, mimicking an old personal homepage.\n\nIn the top-right corner, place irregular sticker-like navigation tabs in bright accent colors (pink, cyan, purple, yellow, and green). Use simple labels such as:\n\nHOME\nABOUT\nWORK\nDIARY\nLINKS\n\nScatter handwritten marker-style notes, introductions, personal thoughts, and lifestyle captions throughout the empty space. Examples:\n\n\"currently making things online\"\n\"welcome to my homepage\"\n\"music, fashion, internet\"\n\"updated today\"\n\"living between projects\"\n\nMaintain an anti-grid editorial layout with intentionally imperfect spacing and playful placement. Mix tiny system fonts, handwritten script, and casual notebook-style annotations. Keep the portrait entirely monochrome while reserving color only for the logo, navigation stickers, and a few small graphic accents.",
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
    "prompt": "Cinematic editorial ink illustration of [HUMAN] in [SCENERY], looking back over the shoulder with realistic proportions, windblown hair and sharp confident gaze. Wearing [CLOTHING]. Loose expressive black ink linework, visible sketch construction lines, high-contrast shadows, sunlit rim glow, weathered paper texture, ink splatters, distressed print marks, realistic road-movie environment, limited three-color palette: [PALETTE], contemporary fashion poster illustration, aspect ratio 4:5.",
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
    "prompt": "Louis Vuitton luxury leather sneaker campaign. High-fashion editorial, avant-garde aesthetic. Aspect ratio 3:4.\n\nMaterials: Full-grain calf leather, Monogram Embossed Canvas, Polished Gold Hardware.\nColor palette: Cognac Brown, Deep Obsidian, Champagne Gold.\nLighting: High-contrast Chiaroscuro with soft-box key lighting.\n\n9-cell editorial grid:\n\nRow 1, Heritage:\n- Hero side-profile: sneaker resting on a vintage LV trunk, side-lit to reveal the leather grain texture.\n- Extreme macro close-up: gold-tone \"LV\" lace aglets and precision stitching detail.\n- Dynamic shot: gold dust particles swirling around the sole as the shoe steps into frame.\n\nRow 2, Innovation:\n- Minimalist: sneaker balanced on top of an abstract, floating glass \"V\" sculpture.\n- Floating deconstructed view: sole and upper suspended in a void.\n- Sensory: a gloved hand adjusting the tongue, highlighting the softness of the leather.\n\nRow 3, Surrealism:\n- Monochromatic scene in LV Havane brown with liquid silk drapes.\n- Abstract: rubber sole pattern reimagined as a geometric desert landscape.\n- Fusion: sneaker walking on a mirror-still lake reflecting a Parisian sunset skyline.",
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
    "prompt": "Design a 9:16 vertical product infographic for Bolt True Wireless Earbuds with a high-end lifestyle ad feel.\nComposition & Framing\nFull-body shot of a young woman whose face, skin tone, and hairstyle match the reference photo exactly\nSlightly low camera angle close to the subject, fashion campaign style, for depth and visual presence\nShe's seated casually on the floor, one knee up, one leg stretched toward the camera\nForeground (Product)\nShe holds an open Bolt earbud charging case out toward the viewer\nOne earbud is visible inside the case, the other is in her ear\nThe case is glossy white with \"BOLT\" branding\nSlight macro bokeh blur on the hand and case for cinematic depth\nOutfit & Style\nModern athleisure streetwear: off-white or neutral lightweight jacket, crop top or sports bra, soft pink joggers, textured white sneakers\nExpression: confident and relaxed, subtle smile\nPose feels natural and lifestyle-driven, not posed\nBackground\nSoft gray gradient studio background\nRainbow prism lens flares and subtle light leaks\nFloating blurred earbuds and case in background\nStudio floor texture visible underfoot\nLighting\nDiffused commercial studio lighting emphasizing skin texture, the glossy case, and fabric detail\nSoft rim light to separate the subject from the background\nText Overlays (modern sans-serif, white)\nTop Center: \"BOLT\" in large bold text, partially behind the subject\nTop Right: Bolt Earbuds / True Wireless\nMid Left: Powerful sound. / Effortless vibes. / Engineered for every beat of your day.\nMid Right: 30 hours of playtime / IPX5 water resistant\nBottom Right: 1 year warranty\nQuality\n8K ultra-realistic commercial photography\nSharp on face and earbuds, gentle depth blur on foreground and background\nClean Apple/Nike premium ad aesthetic, strong negative space",
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
    "prompt": "Generate an isometric miniature 3D diorama of [COUNTRY NAME]'s iconic [FAMOUS STRUCTURE] landmark from a 45-degree top-down perspective.\n\nUse clean soft textures and realistic PBR materials with balanced, natural lighting. The elevated base features surrounding streets, landscape elements, and cultural details unique to the structure. Include tiny stylized figures of locals and tourists with detailed facial features.\n\nSet the background to solid [BACKGROUND COLOR]. Display [COUNTRY NAME] in bold text at the top center with [STRUCTURE NAME] on the next line, followed by a minimal architecture icon below. Adjust text color to ensure contrast.",
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
    "prompt": "Hyper-realistic 8k medium shot photograph with shallow depth of field, surreal indoor scene with cinematic lighting. A normal-sized woman sits cross-legged inside a massive, highly detailed Kinder Joy egg that's been converted into a swing chair. The egg is split open, its white interior forming the seat and orange textured exterior visible, suspended by dark metal chains from a curved metal stand.\n\nShe wears a black t-shirt and blue-and-white plaid pajama pants, holding a small white teacup with both hands, gazing directly at the viewer with a calm, relaxed expression. Use uploaded face as reference.\n\nOn a polished wooden table to the left foreground: another gigantic fully wrapped Kinder Joy egg with intricate foil texture and branding details. To the right of the swing base: a vintage-style wooden radio with white dials, and a tiny bonsai tree in a small pot.\n\nSoft warm directional lighting from the left casts subtle shadows, highlighting the detailed egg wrapper textures, clothing, and wooden surface. Background is a softly blurred warm-toned interior wall with pleasing bokeh. Standard lens, shot from mid-height.",
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
    "prompt": "Transform the subject into a handcrafted needle-felted wool miniature. Material: organic roving wool with visible needle-punch textures, soft fuzzy surface, and handcrafted seams. Eyes are tiny black bead eyes or simple felted circles.\n\nStyle rules: slightly oversized head with simplified limbs and a cute, charming aesthetic. Retain the original colors from the source image but soften them with wool texture. Clothing becomes simplified felt versions of the original outfits with tiny fabric buttons and stitched details. Accessories are recreated as miniature felted props.\n\nCamera: macro photography, close-up shot. Soft studio lighting with warm highlights and gentle shadows. Clean, out-of-focus bokeh background in a neutral craft studio setting. Shallow depth of field (f/2.8). High fidelity, 8k resolution, photorealistic wool texture, Pixar-like character charm.",
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
    "prompt": "SUNSCREEN AD, “THE INVISIBLE SHIELD”\n\nLuxury skincare advertising masterpiece, a colossal premium sunscreen bottle standing on a pristine tropical shoreline at golden hour, powerful beams of sunlight crashing down from the sky and splitting apart upon contact with a transparent protective energy dome radiating from the sunscreen, millions of sparkling UV particles dissolving into golden dust before reaching flawless skin, crystal clear ocean reflections, flowing water suspended in mid air around the product, microscopic droplets catching cinematic sunlight, ultra realistic textures revealing every detail of the bottle surface, luxury beauty campaign aesthetics, dramatic volumetric lighting, glowing atmospheric haze, premium white and gold color palette, futuristic protection technology visualized as elegant light waves, hyper detailed environment, commercial photography perfection, award winning advertising design, photorealistic rendering, 16K ultra resolution, global skincare brand campaign, masterpiece quality.\n\nText Overlay:\nSUNSCREEN\n\nTagline:\n“Protect Every Ray. Reveal Every Glow.",
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
    "prompt": "create a charming but ultra-refined scene centered on [wind-up toy / mechanical miniature world] where a tiny self-contained world is powered by a visible wind-up key and internal spring system. the toy should contain miniature architecture, characters, moving scenery, rotating signage, tiny lifts, oscillating parts, and small narrative moments that all activate from one central mechanism. mini world features: include visual zones for [main scene], [secondary scene], [moving prop], [character action], and [secret detail / easter egg]. surrounding close-ups can reveal the key, spring chamber, cams, and hidden moving linkages. visual style: japanese capsule toy magic meets luxury miniature cinematography meets premium collectible product photography. whimsical, intricate, emotionally irresistible. composition guidelines: the toy remains the hero, but the viewer should feel invited to peer into its tiny world. balance cuteness with high craftsmanship. make the mechanisms visible enough to create fascination. lighting & background: soft studio lighting with theatrical micro-shadows, premium pastel, lacquer, or dark velvet backdrop depending on [mood], hyper-detailed miniature realism, no watermark. variables: [wind-up toy / mechanical miniature world], [main scene], [secondary scene], [moving prop], [character action], [secret detail / easter egg], [mood]",
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
    "prompt": "Create a subliminal advertising landscape photograph where a recognizable brand logo (like the Apple logo, Nike swoosh, or Batman symbol) is secretly embedded into a breathtaking natural environment (like snowy mountains, dense jungle, sand dunes, or ocean coastline).\n\nThe logo must be formed entirely by the physical geography of the terrain — NOT overlaid digitally. The main body of the logo appears as a carved void (a deep valley, cliff edge, or sharp color contrast in the terrain), while any disconnected elements (like Apple's leaf) float as a suspended island of rock and earth in the misty sky above.\n\nCamera: wide aerial drone shot, landscape stretching vast and majestic across the frame.\n\nAtmosphere: dramatic and moody — heavy swirling clouds, rolling mist through valleys, crepuscular god rays bursting through gaps in the clouds, defining the hidden silhouette.\n\nVisual rule: at first glance it must look like a 100% authentic nature photo. The brand logo only emerges as an optical illusion (pareidolia) on second look. Edges must be slightly jagged and organic, shaped by real geological features like cliff faces and treelines — never perfect vector shapes.\n\nLighting: high contrast between dark shadowed valleys (dense forests) and bright snow or sunlit highlights. Sun partially hidden behind clouds or the floating landmass, backlighting the entire scene.\n\nMood: cinematic, majestic, subtly surreal.\n\nOutput: 1:1 square, photorealistic, National Geographic aerial photography aesthetic.",
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
    "prompt": "The Jellyfish City Above the Dunes\n\nOn a desert world too hot to live on, entire cities float just above the dunes—built from colossal jellyfish that weave their own architecture in the sky.\n\nSoft solarpunk alien vibes, no horror.\n\nPrompt below for anyone exploring gentle alien worlds.\n\nPROMPT:\n\nA serene daylight scene on an alien desert planet, wide cinematic shot of a floating city made from enormous translucent jellyfish creatures drifting just above endless dunes; each jellyfish (Aeromedusae) is house‑sized, with a bulbous semi‑transparent dome filled with pale turquoise gas, long trailing tendrils weaving together into suspended walkways, platforms and hammock‑like membranes that form an aerial village; nacreous plates and chitin ribs have grown along their undersides to create skeletal arches and open “rooms,” shimmering with opalescent highlights; several Aeromedusae cluster together in a loose line, casting soft, organic shadows on the sand below; tiny silhouettes of ground caravans with insect‑like vehicles and fabric canopies move through the dunes, clearly dwarfed by the floating city overhead; distant rusted anchor towers and cables rise from the sand, hinting at a human or alien attempt to tether these living buildings; palette of warm sand beige, pale turquoise, dusty coral and soft white, with high noon sunlight, subtle heat haze and gentle lens bloom; the camera sits at a medium distance, slightly low angle, capturing both the jellyfish city and the ground caravans in one frame, 35mm lens, peaceful solarpunk‑like atmosphere, painterly yet detailed, no horror, one frame from a larger alien desert universe.\n\nNEGATIVE PROMPT:\nhuman-like alien, blue-skinned humanoid, generic sci-fi city, skyscrapers, cyberpunk neon, dark horror tone, gore, tentacle monster cliché, cheap sci-fi armor, guns, war scene, cartoon, anime chibi, bad anatomy, cluttered composition, oversaturated colors, heavy bloom, low detail, blurry image, noisy grain, HUD, UI, readable text, watermark, logo, plastic toy look, realistic Earth desert animals, Earth buildings, spaceships dogfighting",
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
    "prompt": "Transform the uploaded photo into a charming hand-drawn colored-pencil and crayon illustration while preserving the person's exact pose, facial features, outfit, expression, and background composition. Create a warm, whimsical sketchbook aesthetic with visible pencil strokes, crayon textures, and soft pastel colors.\n\nPlace the illustrated version as the main full-frame artwork. Add playful doodles around the scene such as hearts, stars, flowers, clouds, sparkles, and cute hand-drawn elements that complement the environment. Use textured paper as the canvas background and maintain a cozy, nostalgic, storybook feel.\n\nIn the bottom-right corner, include a rounded-rectangle inset containing the original unedited photo as a realistic reference image. The inset should resemble a social media post preview with subtle UI elements like a heart icon and engagement count. Ensure the illustrated version perfectly matches the original photo in composition, creating a striking before-and-after transformation effect.\n\nHighly detailed, colored pencil illustration, crayon art style, hand-sketched textures, vibrant yet soft pastel palette, Instagram-style layout, whimsical doodles, premium artwork, realistic reference inset, masterpiece, ultra-detailed, 4K.",
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
    "prompt": "Render a photorealistic tilt-shift miniature scene of [CITY NAME] with a [VEHICLE NAME] winding along an elevated road that rises organically from a vintage illustrated city map. The road sweeps toward the city's iconic skyline in the background, with the vehicle as the main subject up front. Seamlessly merge the real cityscape with the hand-drawn map so the road feels naturally embedded. Feature the city name in large bold lettering on the map foreground. Apply warm golden-hour light, shallow depth of field, cinematic shadows, aerial perspective, and hyper-realistic detail. Final look: a luxury travel poster crossed with a miniature diorama. Aspect ratio 1:1.\n\nFull prompt: \n\nCreate a highly detailed cinematic miniature tilt-shift travel scene of [CITY NAME] featuring a realistic [VEHICLE NAME] driving along a winding elevated road that emerges naturally from a printed vintage-style city map. The road should curve dramatically toward the background skyline and landmarks of [CITY NAME], while the vehicle remains the clear focal point in the foreground.\n\nBlend the real city seamlessly with the illustrated map surface so the road appears integrated into the map itself. Include recognizable local landmarks, waterways, architecture, vegetation, and atmosphere associated with [CITY NAME], but keep the composition clean and uncluttered.\n\nShow large bold typography of \"[CITY NAME]\" printed directly on the map in the foreground. Use warm golden-hour lighting, shallow depth of field, realistic textures, cinematic shadows, aerial perspective, and photorealistic detail. The overall aesthetic should feel like a premium Instagram travel poster mixed with a miniature diorama.\n\nAspect ratio 1:1.",
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
    "prompt": "Hyper-realistic fashion campaign poster for brand \"SPLASH\". A girl (matching the reference photo exactly, same face) seated confidently atop a gleaming, water-like 3D SPLASH logo surrounded by dynamic water splash effects. Editorial pose: one leg loose, one bent.\n\nEnormous bold \"SPLASH\" typography fills the background, partially behind her. Small tagline reads: \"Own Your Style.\"\n\nClothing: contemporary black streetwear (blazer, fitted top, trousers, sneakers).\n\nLighting: cinematic studio setup with soft key light and rim light, glossy reflections on the liquid logo.\n\nStyle: luxury fashion campaign aesthetic (Zara / H&M), polished clean environment.\n\nShot with an 85mm lens, shallow depth of field, 8K resolution, ultra-detailed, photorealistic.",
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
    "prompt": "35mm film photo, airy Japanese aesthetic, soft natural window light from the side, slightly overexposed, muted pastel colors, low contrast, bright gentle highlights, quiet indoor room beside sheer white curtains, pale wall, natural eye-level frame from mid-thigh upward, young East Asian woman, barely-there makeup, smooth natural skin, long loose dark hair, oversized white button-down shirt, casual shorts, bare feet, effortless everyday style, relaxed stance with arms lightly at sides or gently back, looking softly at the camera, calm quiet smile, stillness and lightness, fine film grain, gentle dreamy mood --ar 9:16",
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
    "prompt": "Vertical 9:16 full-body cinematic portrait of a single alien character, the Luminant Archivist, standing on a rocky ridge on the twilight band of an alien planet; the creature has a tall elongated body with three root-like legs forming a stable tripod, lower torso textured like smooth bark and sinew fused together; two long arms with four segmented joints each end in multifingered, tendril-like manipulators gently holding a glowing hexagonal plate; instead of a human head, the upper torso flares into a tall crown of layered translucent plates arranged like a vertical fan, each plate lit from within by faint cyan neural patterns, no face, no eyes, no mouth; along its back and shoulders grow rigid bioluminescent data plates, flat hexagonal organisms clinging like barnacles, softly pulsing in cyan, teal and occasional warm amber; the body is draped in a partial organic mantle made of fibrous membrane and chitin filaments, not clothing but grown; background shows a perpetual dusk sky with a low orange band on one horizon and deep indigo on the opposite, distant silhouettes of hollow spires and tiny other Archivists crossing the landscape; ground covered in reflective glassy lichen and small crystals catching the character's glow; palette of deep indigo, dusty violet, cyan glows and subtle warm amber accents; strong horizon rim light outlining the Archivist's silhouette, subtle backlighting from the bioluminescent plates, gentle atmospheric haze; realistic but slightly painterly rendering, extremely detailed textures on skin, plates and lichen; composed like a high-end sci-fi character poster, vertical 9:16 aspect ratio, full body in frame, centered but with enough headroom and ground visible to feel part of a larger universe.\n\nNegative prompt:\nhuman-like alien, humanoid face, eyes, nose, mouth, jaw, blue-skinned human, elf, armor suit, guns, generic sci-fi soldier, anime style, cartoon, chibi, cyberpunk city, neon signs, medieval fantasy, wings, halos, angel, bad anatomy, random extra limbs, cluttered background, oversaturated colors, strong lens distortion, fisheye, low resolution, blurry details, noisy grain, HUD, UI, readable text, watermark, logo, modern Earth clothing, sneakers, jeans, T-shirt",
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
    "prompt": "Generate a dramatic Japanese anime-style event promotional poster in vertical 4:5 format, ultra-detailed, cinematic, neon-lit, high contrast, styled like a polished social media announcement. Center-right subject: a beautiful anime girl from the waist up, long flowing deep blue hair blowing in the wind with small star hairpins, wearing a dark hoodie with large studio headphones around her neck. Her face is softly obscured by a rectangular blur. Background: glowing sunset-to-night city skyline with sparkling lights, music-energy particles, lens flares, and glowing petals. Color palette: electric blue, violet, magenta, gold, and sunset orange.\n\nLayer crisp Japanese typography integrated like a professional event ad with exactly 8 text groups: (1) top-left heading 「始まるのは、キミと創る 音楽の物語。」 with subcopy 「AIを使って、みんなで音楽をつくる特別な3日間。」; (2) top-right glowing marquee 「GW連休!」 and neon box 「みんなで最高の音楽をつくろう!」; (3) center title with English 「AI MUSIC BOOTCAMP 2」 above large 「AI音楽 ブートキャンプ 2」; (4) massive gold metallic text across the middle 「開催決定!」; (5) date bar 「開催期間」 with 「5.2 SAT 土」 and 「5.4 MON 月」; (6) hashtag callout 「参加はカンタン!!  をつけて投稿するだけ!」; (7) encouragement line 「初心者も大歓迎! みんなで最高の音楽体験を!」; (8) three bottom feature captions with icons: 「一緒に学ぶ 仲間とつながる」, 「AIで創る 新しい音楽体験」, 「想いをカタチに 自分だけの1曲を」.\n\nLeft edge: vertical filmstrip with 4 panels showing the girl (1) performing on stage before a crowd, (2) at a music production desk with screens, (3) singing into a mic, (4) playing acoustic guitar. Lower area: 2 neon music icons — tilted smartphone with music note (lower left), glowing microphone with musical notes (lower right). Text effects: glossy, luminous, gold and white emboss, energetic streaks and spark explosions around headline. Mood: inspiring, celebratory, futuristic, emotionally uplifting — like a high-impact Japanese Golden Week music event ad.",
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
    "prompt": "{\n  \"type\": \"18-section complete brand identity and mascot design sheet\",\n  \"brand\": {\n    \"name\": \"{argument name=\\\"brand name\\\" default=\\\"MUYANG TEA\\\"}\",\n    \"industry\": \"{argument name=\\\"industry\\\" default=\\\"tea shop\\\"}\",\n    \"colors\": [\"{argument name=\\\"primary color\\\" default=\\\"yellow\\\"}\", \"{argument name=\\\"secondary color\\\" default=\\\"green\\\"}\", \"white\", \"brown\", \"dark green\"]\n  },\n  \"subject\": \"{argument name=\\\"character description\\\" default=\\\"3D rendered cute Shiba Inu mascot wearing a green apron\\\"}\",\n  \"layout\": {\n    \"grid\": \"3-column by 6-row grid layout\",\n    \"sections\": [\n      {\n        \"title\": \"01 BRAND DNA ANALYSIS\",\n        \"elements\": [\"brand logo\", \"5 color swatches\", \"6 brand icons\", \"target audience charts\"]\n      },\n      {\n        \"title\": \"02 CONCEPT MOODBOARD\",\n        \"elements\": [\"5 reference photos\", \"4 mood icons\", \"design concept equation\"]\n      },\n      {\n        \"title\": \"03 FORM STUDY\",\n        \"elements\": [\"4 logo anatomy icons\", \"4 design evolution steps\", \"4 character silhouettes\"]\n      },\n      {\n        \"title\": \"04 CONCEPT EXPLORATION\",\n        \"elements\": [\"12 line-art character concept sketches\"]\n      },\n      {\n        \"title\": \"05 REFINED LINE ART\",\n        \"elements\": [\"3 rows of front and side view line art with proportion guides\"]\n      },\n      {\n        \"title\": \"06 DETAIL REFINEMENT\",\n        \"elements\": [\"2 full-body renders with annotation labels\", \"4 circular close-up views\"]\n      },\n      {\n        \"title\": \"07 EXPRESSION SHEET\",\n        \"elements\": [\"11 3D rendered facial expressions\"]\n      },\n      {\n        \"title\": \"08 POSE LIBRARY\",\n        \"elements\": [\"9 full-body 3D rendered character poses\"]\n      },\n      {\n        \"title\": \"09 TURNAROUND VIEW\",\n        \"elements\": [\"5 full-body 3D renders from multiple angles\", \"5 matching line-art views\"]\n      },\n      {\n        \"title\": \"10 COLOR DEVELOPMENT\",\n        \"elements\": [\"5 rows of 5-color palette options\", \"color psychology explanations\"]\n      },\n      {\n        \"title\": \"11 MATERIAL SPECIFICATION\",\n        \"elements\": [\"5 surface texture swatches\", \"material property sliders\", \"4 manufacturing process icons\"]\n      },\n      {\n        \"title\": \"12 COLOR APPLICATION\",\n        \"elements\": [\"4 color scheme variant renders\", \"2 light and dark mode renders\", \"4 contrast rating indicators\"]\n      },\n      {\n        \"title\": \"13 CONSTRUCTION GUIDE\",\n        \"elements\": [\"2 line-art technical diagrams for geometry and grid system\"]\n      },\n      {\n        \"title\": \"14 DESIGN SYSTEM RULES\",\n        \"elements\": [\"minimum size icons\", \"clear space diagram\", \"4 correct and incorrect usage examples\"]\n      },\n      {\n        \"title\": \"15 ASSET VARIANTS\",\n        \"elements\": [\"3 scaled size variants\", \"3 line-art style variants\", \"3 simplified flat icon heads\"]\n      },\n      {\n        \"title\": \"16 DIGITAL APPLICATIONS\",\n        \"elements\": [\"1 app icon design\", \"2 social media avatar versions\", \"UI component elements\", \"3-frame animation cycle\"]\n      },\n      {\n        \"title\": \"17 PHYSICAL APPLICATIONS\",\n        \"elements\": [\"plush toy product mockup\", \"product packaging mockup\", \"branded merchandise mockup\", \"retail storefront mockup\"]\n      },\n      {\n        \"title\": \"18 FINAL RENDERING\",\n        \"elements\": [\"large high-resolution 3D mascot render holding tea cup\", \"finalized logo\", \"deliverable file format list\"]\n      }\n    ]\n  }\n}",
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
    "prompt": "Create a vertical 3:4 product design catalog page with a warm neutral paper-like background.\n\nTop section — lifestyle hero shot: place the product (use the uploaded image as the exact reference, preserving its form, proportions, materials, and identity without redesign) center-dominant with generous whitespace. Setting is a minimal architectural interior with a textured plaster wall and subtle concrete/stone floor. Lighting is natural sunlight angled from the side, soft but casting high-contrast shadows. Render in editorial lifestyle photography style, high realism, warm and muted color grading.\n\nBottom section — technical specification panel laid out in a clean modular grid:\n- Bottom left and center: orthographic architectural line drawings showing front view, side view, and three-quarter cutaway/profile view. Lines in muted red or sepia, fine technical weight, with minimal editorial measurement and construction callouts.\n- Bottom right: 3-4 material swatch samples derived from the product's actual materials (fabric, leather, metal, wood, or plastic as applicable), in square or rectangular format with small editorial captions.\n\nTypography: minimal editorial style, subtle captions only, no large headlines, soft black or dark brown.\n\nOverall mood: design catalog / product design journal — architectural, premium, calm. No clutter, no bold colors, no heavy branding, no decorative graphics, no perspective distortion in the technical drawings.",
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
    "prompt": "Generate four cohesive high-end realistic editorial visuals for OBSIDIAN coffee brand. Cinematic, dark, mature aesthetic inspired by luxury sportswear and premium coffee advertising. Studio lighting that's dramatic yet controlled, photorealistic textures, clean compositional layout. Shot 1: Hero brand poster featuring 'OBSIDIAN' lettering with an artful coffee display — steam rising, beans scattered. Shot 2: Full product range — coffee bags, cans, and capsules arranged together. Shot 3: Tight packaging detail with tagline 'Coffee for grown-ups who chase flavor.' Shot 4: Lifestyle close-up of a steaming cup. Ultra-polished finish, crisp realistic materials, unified brand identity, no fantastical or surreal elements",
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
    "prompt": "Pick any object and slice it in half vertically, the left side rendered as a detailed technical schematic blueprint with grid lines and annotations, the right side as a polished 3D model render, the center seam flickering and glitching where the two visual realities collide.",
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
    "prompt": "Architectural split-scene: left side shows a hand-sketched pencil blueprint of a wooden garden pergola on white paper, front and slight side elevation with construction lines, dimension labels, and handwritten notes, posts and crossbeams precisely drafted in a professional hand-sketched technical style. Right side shows the finished pergola fully built in a real garden, photographed from a low front-corner angle at eye level showing the full timber beam depth. Natural wood texture with realistic joints, installed on grass with surrounding plants, soft daylight and grounded shadows. Photorealistic architectural visualization.\n\nPergola Blueprint Prompt: Hand-drawn architectural pencil sketch of a wooden garden pergola on white paper. Front and slight side elevation view with clear proportions.\n\nConstruction lines, dimensions and handwritten notes visible. Wooden posts and cross beams precisely drafted. Professional but hand-sketched technical style. Clean white background.\n\nFinished Pergola: Fully built wooden pergola in a real garden, matching the exact structure and proportions from the sketch. Viewed from a low front corner perspective at eye level, showing depth and the full beam structure instead of a flat elevation. Natural wood texture with realistic joints and connections. Installed on grass with surrounding plants. Soft daylight with grounded shadows. Photorealistic architectural visualization.",
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
    "prompt": "Beautiful young Japanese girl with long straight dark brown hair and soft full bangs, fair skin, bright natural smile, sitting casually on a wooden park bench while holding an iced coffee cup. Wearing a light beige windbreaker jacket and a white pleated mini skirt, relaxed posture, one hand resting on the bench. Surrounded by a lush green park with tall trees, fresh grass, and a bright blue sky with soft clouds. Captured with a smartphone camera in portrait mode, casual everyday snapshot, natural daylight, handheld iPhone photo, slightly imperfect framing, realistic skin texture, natural colors, soft HDR phone processing, candid social-media aesthetic, no professional modeling, no studio lighting, no cinematic color grading, authentic mobile photography, ordinary park outing vibe, spontaneous moment, realistic shadows, subtle lens softness, photorealistic, high-quality phone camera image.",
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
    "prompt": "A photorealistic close-up portrait of a young girl filling almost the entire frame. Her head is slightly tilted to the side, with her cheek resting against her shoulder and partially hidden inside the long cream-colored sleeve of a hoodie. Long, straight hair with curtain bangs falls freely along the left side of her face, covering one eye.￼ On the visible side of her face, she wears soft makeup: laminated brows, a sharp elongated black winged eyeliner that extends the shape of the eye, matte dusty-pink lips, and a calm, slightly pouting expression. She looks directly into the camera, with visible eyelashes.\n\nA long zip-up hoodie over the one shoulder The composition is intimate and casual, resembling a webcam selfie. The frame has a slight tilt, and the face is positioned very close to the lens. Focus is sharp on the visible eye, lips, hair texture, and the thick cream-colored fabric of the sleeve, while the background fades into a soft blur. Behind her is a simple warm gray-beige wall with no visible details. Warm indoor and screen lighting from the front-left creates soft highlights on the skin and hair. The contrast is moderate, and the color palette is muted, featuring black, beige-gray, and dusty pink tones. The overall image should preserve the authentic feeling of a selfie photograph.",
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
    "prompt": "Award-worthy graphic design poster in neo-editorial / contemporary editorial style, D&AD / Awwwards / Behance quality.\n\nTheme: Stay Focused.\n\nCreate a powerful central visual metaphor for this theme — transform the concept into a sculptural, iconic, installation-like object that is cut, layered, stretched, stacked, reconstructed, wrapped, or deconstructed, with clear conceptual weight rather than decoration.\n\nClean, minimal light-gray background with generous whitespace.\n\nHigh-contrast modern editorial typography: oversized bold black English headline at top, secondary subtitle, annotation text, exhibition-style hierarchy.\n\nSwiss editorial grid system with intentional breaks, asymmetric balance, precise alignment, strong rhythm, refined spacing.\n\nCentered or near-centered composition with strong vertical tension.\n\nMaterials and rendering: premium product-quality render, matte surfaces, subtle reflections, hard-edge cuts, slight inter-layer translucency, suspended sliced structures, refined details, crisp silhouettes.\n\nColor: black, white, and gray dominant with a single striking accent color and minimal secondary accents — restrained, high-end, contemporary.\n\nLighting: soft studio lighting, subtle shadows, ultra-clean render, highly polished but non-glossy, razor-sharp details.\n\nMood: conceptual, intellectual, exhibition-grade, contemporary, premium, restrained, iconic.\n\nAspect ratio 9:16, 4K, ultra sharp, ultra detailed, ultra clean, high resolution.",
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
    "prompt": "Ultra-clean modern recipe infographic for chowmin. Feature the finished dish as hero visual, plated and slightly elevated in a perspective or angled view. Arrange ingredients, preparation steps, and tips dynamically around the dish in an editorial layout. Ingredients: icons or mini illustrations with quantities, arranged in clusters or circular flows connected visually to the dish. Steps: numbered panels with arrows or connecting lines forming a logical flow, including small cooking icons (knife, pan, oven, timer). Optional info: calories, prep/cook time, servings, spice level displayed as clean bubbles or badges. Visual style: editorial infographic meets lifestyle food photography. Vibrant natural food colors, subtle drop shadows, clean vector icons, modern typography, soft gradients or glassmorphism for step panels, accent colors on key stats. Composition: finished meal as hero, ingredients and steps flowing dynamically around it, clear visual hierarchy with ample negative space. Lighting: soft natural studio light on a minimal textured or gradient background. Output: 1080x1080, ultra-crisp, social-feed optimized, no watermark.",
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
    "prompt": "Minimalist studio product photography, a small transparent glass facial oil dropper bottle with a black rubber pipette cap, containing pale pink serum with suspended dried pink floral elements, centered on a natural raw wooden block with visible grain and split texture. Tall matte white skincare box on the left labeled \"HUILE ÉCLAT VISAGE\" with clean black typography and subtle logo near the bottom. Clear cylindrical glass vase on the right filled with water and thin stems of dried pink gypsophila extending upward. Composition rests on a smooth matte pastel pink surface against a matching seamless pink studio background. Strong directional soft light from the left casts long natural-style shadows of the flowers onto the background, with gentle highlights on the glass, subtle reflections on the serum bottle, and soft texture on the wooden block. Straight-on tabletop camera angle, all objects in sharp focus. Color palette: blush pink, soft rose, warm light wood, clean white, transparent glass. Premium Scandinavian minimalist skincare aesthetic, ultra-realistic, studio-grade.\n\nfull prompt:",
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
    "prompt": "Minimal white bottle with golden pump surrounded by cracked coconuts, coconut milk splash and foam clouds, tropical luxury spa atmosphere, creamy textures, realistic bubbles floating in background, premium skincare commercial, soft warm lighting, ultra detailed 8K.",
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
    "prompt": "[PRODUCT] reassembling in midair from scattered pieces, reverse-disintegration effect, mechanical precision, each component suspended at a different depth, dark void background, high-concept product advertising, cinematic VFX.",
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
    "prompt": "Create a 16:9 image.\n\n[PROJECT CARD]\nCreate a compact designed masthead, not a table.\nTITLE: THE KING STILL BREATHES\nMETA LINE: empty night stadium / a buried crown remembers / three triumphs and one hope\nPRIORITY: the four-jewel crown — three jewels lit certain and complete (blue, white, blue) and a fourth softly awakening with hope; crown stays buried until it rises; pitch resolves into a giant number 10; one realistic field, restraint throughout\nMICRO BRIEF: After a legendary hat-trick, a buried crown awakens beneath an empty Argentina-blue stadium — three jewels light for three World Cups, a fourth begins to glow with hope, and the pitch briefly forms a giant number 10.[CONTINUITY HEADER]\nSEQUENCE ID: king_still_breathes_4jewel_12p\nREFERENCE PRIORITY: No image references provided (Brief-Only). No character — environment-led and symbolic. This storyboard controls stadium geography, the waking pitch lines, the buried crown, the four-jewel sequence, the crown rise, the number-10 reveal, and panel order.\nBEAT NAME LOCK (generate once, use identically in panel headers, action path, state track, and the director-strip beat labels): P01 Empty Stadium / P02 Lines Wake / P03 Crown Stirs / P04 First Jewel (blue) / P05 Second Jewel (white) / P06 Third Jewel (blue) / P07 Crown Rises / P08 Three Jewels Lit / P09 Fourth Jewel Awakens / P10 Lines Connect / P11 Number 10 / P12 Hopeful Stillness. Do not relabel or reorder these anywhere on the board\n[SCENE PACKET]\nPREMISE: An empty but still-charged football stadium at night remembers a legendary hat-trick; the pitch wakes, a buried crown stirs and lights three historic jewels one by one, rises in ceremony, and a fourth jewel softly begins to glow with hope as the field geometry briefly forms a giant number 10.\nLOCATION: A single realistic modern football stadium at night after a major match, empty stands, floodlights over an Argentina sky-blue atmosphere, dark emerald grass, white pitch markings, silver floodlight haze, one goal net. Normal football geography only. The pitch surface and the crown buried beneath it are the active stage.\nSTART -> END: empty charged stadium, one net swaying, lines beginning to wake -> a quiet hold on the still field, the crown settled, three jewels fading but the fourth jewel remaining faintly alive — the future has begun to breathe.\nACTION CHAIN: empty stadium, one net sways -> the white pitch lines begin glowing softly, the field waking -> beneath the grass the crown stirs, sensed through buried light and pressure (no visible crown) -> the first jewel lights blue (first World Cup) -> the second jewel lights white (second World Cup) -> the third jewel lights blue (third World Cup) -> the crown rises with ceremonial weight from beneath the pitch -> we see the crown clearly, three jewels glowing blue-white-blue -> a fourth dark jewel stirs, flickers, breathes, and softly begins to glow (hope, not yet a triumph) -> the white lines connect and spread with living light -> from an elevated view the field geometry resolves into a giant number 10 -> the glow fades toward stillness, the crown settles, the fourth jewel remaining faintly alive.\nPROP / EFFECT STATE: a buried crown made by the pitch — gold edges partly formed from the white pitch lines, soil and grass clinging, elegant and football-mythic, never medieval-prop or fantasy-clean. It has four jewel settings. The first three jewels ignite one by one, certain and complete, in Albiceleste rhythm: blue, white, blue. The crown is NOT clearly visible before P07. The fourth jewel is visually distinct: dormant, then flickering and breathing, a soft fragile glow that never fully ignites like the others. The number 10 forms organically and half-found from real field geometry (penalty box, center circle, touchlines, glowing trails), never a graphic overlay. The fourth jewel remains faintly lit at the end. Subtle gold and jewel light only; otherwise blues, whites, silver.\nMUST READ: the hat-trick lights history (three certain jewels) and awakens belief in what comes next (the fragile fourth). Reverent, epic, restrained; pride turning to hope.\n[CHARACTER SANITIZATION]\nNo characters. No player, face, body, silhouette, portrait, or likeness of any real person. No Messi depiction of any kind. The subject is the stadium, the pitch, and the crown. The crown is a symbol, not worn; no king, throne, or robes.\n[IDENTITY CONSISTENCY]\nKeep stadium geometry, floodlight positions, the single net position, and pitch-line layout consistent across all panels. Keep the crown design consistent once revealed, and keep the four jewel positions consistent (three that light historic, one that awakens). Argentina connection through color and atmosphere only — sky blue, white, deep night blue — never text, crests, or a depicted person.\n[STORYBOARD PURITY]\nFull-color panel artwork (polished pitch board). Panel numbers, beat names, and lens tags in the header strip outside each panel. The beat names in the headers must match the BEAT NAME LOCK and the director-strip beat labels exactly. No captions, subtitles, signage, logos, crests, brand marks, trophy replicas, readable text, arrows, or overlays inside the artwork. The number 10 appears ONLY as illuminated field geometry within the image, never a graphic label. One clear visual idea per panel.\n[MASTER SHOT RULE]\nP01 establishes the geography: the empty night stadium, floodlights over Argentina-blue haze, dark emerald pitch with white markings, one goal net, empty stands. One realistic field, normal geography. The sacred charged emptiness is set here.\n[EMOTIONAL ARC]\npost-match silence -> recognition -> awakening -> pride (three historic jewels and the coronation) -> hope (the fragile fourth jewel and the lingering glow); carried by the environment — the swaying net, waking lines, buried stir, the one-by-one jewels, the ceremonial rise, the breathing fourth jewel, the connecting geometry, the number 10, and a quiet hopeful hold.\n[STYLE LOCKS]\nSTYLE LOCK: mythic cinematic football short, premium symbolic sports poetry, elegant and emotionally charged; full-color; deep stadium night blues, sky-blue and white Argentina light, dark emerald grass, silver floodlight haze, selective gold only on the crown and jewel moments. Reverent, epic, restrained, poetic rather than literal. Not a match recap, not a fan edit, not abstract art-film.\nEFFECT LOCK: the white pitch lines wake with a soft living glow like a nervous system; the crown stirs as buried light and pressure under the turf before any reveal; the first three jewels ignite one by one with clear punctuation, certain and complete, blue then white then blue; the crown, once revealed, rises slow and ceremonial and heavy, pitch-made with soil and grass clinging, never a clean prop; the fourth jewel is softer, fragile, flickering and breathing into a gentle glow, never a full bright ignition; the lines connect and spread with living light; the number 10 resolves organically and half-found from real field geometry, discovered by the camera; the fourth jewel remains faintly alive at the end.\nENVIRONMENT LOCK: one realistic night stadium throughout — floodlights, blue atmosphere, emerald pitch, white lines, a single net, empty stands; normal football geography only; no three-net or impossible layouts; no crowd, no players, no symbolic clutter.\nCROWN REVEAL LOCK: the crown is NOT clearly visible in P01-P06. In P03-P06 show only buried glow, pressure under the turf, and the jewels lighting beneath/through the grass — never a readable crown. The first clear crown reveal is P07 when it rises. The crown is pitch-made: gold edges partly formed from white pitch lines, soil and grass clinging, elegant and football-mythic, not medieval-prop, not fantasy-clean.\nJEWEL LOCK: four jewel settings, consistent positions. Three light one-by-one as historic and complete in Albiceleste rhythm — P04 blue, P05 white, P06 blue. The fourth (P09) is visually distinct: dormant then awakening, a soft fragile breathing glow that never matches the full certainty of the first three. It must read as hope, not a won trophy.\n[SPATIAL CONTINUITY LOCK]\nAll panels share one stadium geography: pitch, white-line layout, floodlight positions, the single net, the crown's central buried location and its four jewel positions. The jewels light in fixed positions; the crown rises from one fixed central point (only from P07); the number 10 forms from the established white-line geometry seen from a widening elevated angle (not a new location or overlay). The camera starts close and textural and gradually widens and elevates toward the reveal. Allowed changes: camera height/angle/distance, which jewel is lit, buried-glow state, crown emergence state (none before P07), the fourth jewel's awakening state, glow spread, line illumination, net sway.\n[DIRECTOR STRIP]\nAnimatic track board aligned to panel columns. Shot chips, rhythm blocks, intensity bars, short labels. No seconds or timestamps. BEAT LABEL row must read exactly: P01 Empty Stadium / P02 Lines Wake / P03 Crown Stirs / P04 First Jewel / P05 Second Jewel / P06 Third Jewel / P07 Crown Rises / P08 Three Jewels Lit / P09 Fourth Jewel / P10 Lines Connect / P11 Number 10 / P12 Hopeful Stillness. These must match the panel header beat names.\nPANEL HEADERS:\nP01 / 24mm wide / Empty stadium\nP02 / macro low / Lines wake\nP03 / macro low / Crown stirs (buried)\nP04 / 50mm low / First jewel: blue\nP05 / 50mm low / Second jewel: white\nP06 / 50mm low / Third jewel: blue\nP07 / 35mm low / Crown rises\nP08 / 50mm / Three jewels lit\nP09 / macro / Fourth jewel awakens\nP10 / 35mm rising / Lines connect\nP11 / 24mm crane high / Number 10\nP12 / 24mm wide / Hopeful stillness\nCAMERA + LENS PLAN:\nP01: high wide establishing hold on the empty stadium and single net, patient\nP02: macro low as the white pitch lines begin to glow softly, the field waking\nP03: macro low on the turf as the buried crown stirs — light and pressure under the grass, no visible crown\nP04: low push as the first jewel lights blue beneath the surface, certain and clear\nP05: low push as the second jewel lights white, matching punctuation\nP06: low push as the third jewel lights blue, the historic three now complete\nP07: low angle as the pitch-made crown rises with ceremonial weight from beneath the pitch, soil and grass clinging — first clear reveal\nP08: held medium on the risen crown, three jewels glowing blue-white-blue in Albiceleste rhythm\nP09: macro on the fourth, previously dark jewel as it stirs, flickers, breathes, and softly begins to glow — fragile, hopeful, distinct from the other three\nP10: rising angle as the white lines connect and spread with living light across the field\nP11: high crane / elevated wide as the field geometry resolves half-found into a giant number 10\nP12: wide hold as the glow fades toward stillness and the crown settles, the fourth jewel remaining faintly alive\nACTION PATH:\nP01: the empty stadium sits charged under floodlights, one net swaying slightly\nP02: the white pitch lines begin glowing softly, the field waking and remembering\nP03: beneath the grass the crown stirs, sensed only through buried light and pressure; no crown visible\nP04: the first jewel lights blue — Argentina's first World Cup\nP05: the second jewel lights white — the second World Cup\nP06: the third jewel lights blue — the third World Cup, the historic three complete\nP07: the crown rises with ceremonial weight from beneath the pitch, soil and grass clinging\nP08: the crown is seen clearly, three jewels glowing blue-white-blue\nP09: a fourth dark jewel stirs, flickers, breathes, and softly begins to glow — hope for a fourth, not yet a triumph\nP10: the white lines connect and spread with living light through the pitch geometry\nP11: from the elevated view, the field geometry resolves into a giant number 10\nP12: the glow fades toward stillness, the crown settles, the fourth jewel remains faintly alive\nRHYTHM TRACK:\nRHY P01: hold / long block / held beat\nRHY P02: slow reveal / medium block / clean beat\nRHY P03: slow reveal / medium block / held beat\nRHY P04: build / short block / clean beat\nRHY P05: build / short block / match beat\nRHY P06: impact / short block / smash beat\nRHY P07: build / long block / held beat\nRHY P08: pause / medium block / held beat\nRHY P09: slow reveal / long block / held beat\nRHY P10: build / medium block / match beat\nRHY P11: final hit / long block / smash beat\nRHY P12: pause / long block / held beat\nESCALATION MAP:\nESC P01: L1 calm / flat\nESC P02: L2 tension / rise\nESC P03: L2 tension / rise\nESC P04: L3 rise / rise\nESC P05: L3 rise / rise\nESC P06: L4 surge / spike\nESC P07: L5 peak / surge\nESC P08: L4 surge / held\nESC P09: L3 rise / rise\nESC P10: L4 surge / rise\nESC P11: L5 peak / spike\nESC P12: L2 tension / release\nSTATE TRACK:\nP01: empty stadium, one net sways, no glow\nP02: white lines waking, soft glow\nP03: buried crown stirs, pressure under turf, no crown\nP04: first jewel blue, beneath surface\nP05: second jewel white\nP06: third jewel blue, historic three complete\nP07: crown rises, soil clinging (first reveal)\nP08: crown clear, three jewels blue-white-blue\nP09: fourth jewel flickering, breathing, soft glow\nP10: lines connected, living light spreading\nP11: geometry resolves into number 10\nP12: glow fades, crown settled, fourth jewel faintly alive STYLE TRACK:\nP01: blue floodlit haze\nP02: waking line glow\nP03: buried stir, turf pressure\nP04: blue jewel light\nP05: white jewel light\nP06: blue jewel light\nP07: rising pitch-made gold\nP08: Albiceleste three-jewel glow\nP09: fragile fourth-jewel breath\nP10: connecting line veins\nP11: half-found number 10\nP12: fading glow, one jewel alive [NEGATIVE / AVOID]\nPanel header beat names must match the\n\nSeedance 2.0 Prompt:\n\nBased on the storyboard , create this short film — do not include any movement arrows, camera notes, panel numbers, captions, labels, borders, or storyboard markings.\n\nTHE KING STILL BREATHES — beneath an empty Argentina-blue stadium, a buried crown lights three jewels for three triumphs and a fourth begins to glow with hope.\n\nIMAGE REFERENCE INSTRUCTION\n= the locked 12-panel storyboard, the authoritative director-approved blueprint for composition, staging, motion, timing, and pacing across the full 15 seconds. Follow the panel order exactly. Do not render the storyboard sheet itself. Do not invent alternative coverage. This is an environment-led symbolic piece with no character — no player, face, body, or likeness anywhere.\nColor bible (definitive): deep stadium night blues, sky-blue and white Argentina light, dark emerald grass, silver floodlight haze; selective gold only on the crown and jewel moments. The crown is pitch-made — gold edges partly formed from the white pitch lines, soil and grass clinging to it, elegant and football-mythic, never a clean prop or medieval cosplay. The number 10 forms only from real field geometry, half-found, never a graphic overlay. One realistic football field, one net, normal geography only.\n\nTASK\nCreate a 15-second mythic cinematic football short built from deliberate, elegant cuts. An empty night stadium, still charged after a legendary hat-trick, slowly awakens: the white pitch lines begin to glow, a buried crown stirs beneath the turf, and three jewels light one by one — blue, white, blue — for Argentina's three World Cup triumphs. The crown rises in ceremony, revealing those three certain jewels, and then a fourth dark jewel softly stirs, flickers, and begins to glow with fragile hope for what comes next. The field lines connect and spread with living light until the pitch geometry resolves, for one brief unforgettable moment, into a giant number 10 — then the glow fades toward stillness, the crown settles, and the fourth jewel remains faintly alive. Football history turning to myth, and pride turning to hope.\n\nSTYLE\nMythic cinematic football short, premium symbolic sports poetry, elegant and emotionally charged — not a match recap, not a fan edit, not abstract art-film. Reverent, epic, restrained, poetic rather than literal, as if the stadium itself remembers. Deep night blues with sky-blue and white Argentina light, dark emerald grass, silver floodlight haze, selective gold only on the crown and jewels. Everything moves with weight and intention; restraint over spectacle.\n\nSHOT STRUCTURE: 12 shots / 15s / 16:9 — deliberate cinematic cuts (not one continuous take)\n\nSEQUENCE\nShot 01 — EMPTY STADIUM [0–1.5s] WIDE / STATIC / PATIENT HOLD: the empty night stadium under floodlights, Argentina-blue haze, dark emerald pitch, a single goal net swaying faintly. Still, but charged with the memory of what just happened. Post-match silence.\nShot 02 — LINES WAKE [1.5–3s] MACRO / LOW / SLOW TRACK ALONG A LINE: the white pitch lines begin to glow softly, light running along the painted markings like the field's nervous system waking and remembering. Recognition.\nShot 03 — CROWN STIRS [3–4s] MACRO / LOW / SLOW PUSH: in the turf, a buried glow and faint pressure stir beneath the grass — something royal sensed but not yet seen. No visible crown.\nShot 04 — FIRST JEWEL [4–5s] CLOSE / LOW / CUT IN: beneath the surface the first jewel lights a deep blue — Argentina's first World Cup. Certain, clear, historic.\nShot 05 — SECOND JEWEL [5–6s] CLOSE / LOW / MATCHING CUT: the second jewel lights white — the second triumph. The same confident punctuation.\nShot 06 — THIRD JEWEL [6–7.5s] CLOSE / LOW / MATCHING CUT: the third jewel lights blue — the third triumph. The historic three now complete, glowing in Albiceleste rhythm.\nShot 07 — CROWN RISES [7.5–9.5s] MEDIUM / LOW / SLOW CEREMONIAL RISE: the pitch-made crown rises with heavy ceremonial weight from beneath the turf, soil and grass clinging to its gold edges. Earned, mythic, powerful. The first clear reveal.\nShot 08 — THREE JEWELS LIT [9.5–11s] MEDIUM / SLOW PUSH: the crown seen clearly, its three jewels glowing blue-white-blue. A held moment of pride. The king's history made visible.\nShot 09 — FOURTH JEWEL AWAKENS [11–12.5s] MACRO / SLOW PUSH: a fourth, previously dark jewel stirs — it flickers, breathes, and softly begins to glow. It does not blaze like the other three; it is fragile, tentative, hopeful. Belief in a fourth triumph, not yet won.\nShot 10 — LINES CONNECT [12.5–13.5s] HIGH / RISING: the white pitch lines connect and spread with living light across the field, the geometry beginning to mean something.\nShot 11 — NUMBER 10 [13.5–14.5s] CRANE HIGH / ELEVATED WIDE: from above, the glowing field geometry resolves, half-found and broken-edged, into a giant number 10 — discovered by the camera, pitch memory rather than a drawn symbol. The unforgettable image.\nShot 12 — HOPEFUL STILLNESS [14.5–15s] WIDE / STATIC / HOLD: the glow fades toward stillness, the crown settles back into the grass, the stadium quiets — but the fourth jewel remains faintly alive, breathing. The future has begun to breathe. Hold.\n\nCAMERA RULES\nDeliberate, elegant cinematic cuts between shots — not one continuous take. The camera is patient and confident, uncovering something sacred: it begins close and textural (macro grass, low jewel angles) and gradually widens and elevates toward the reveal, ending on a held wide. One primary move per shot; no shaky handheld, no snap zooms, no hyper-editing. The number 10 is discovered by the elevated camera, never presented as a flat graphic. Let the piece breathe.\n\nHARD RULES\n- No character of any kind: no player, face, body, silhouette, or Messi likeness. The subject is the stadium, the pitch, and the crown.\n- The crown is NOT visible before Shot 07; Shots 03–06 show only buried glow, turf pressure, and the jewels lighting beneath the grass.\n- The crown is pitch-made, soil and grass clinging, elegant and football-mythic — never a clean prop, medieval cosplay, or ornate fantasy.\n- The first three jewels light one by one, certain and complete, in Albiceleste rhythm: blue, white, blue.\n- The fourth jewel must look different from the first three — dormant then awakening, fragile, flickering, a soft glow that never fully blazes. It reads as hope, not a won trophy.\n- One realistic football field, one net, normal geography only — never three nets or impossible layouts.\n- The number 10 appears only as illuminated field geometry, half-found with broken edges, never a graphic overlay or label.\n- No readable logos, crests, sponsor marks, brand marks, or trophy replicas. Argentina connection through color and atmosphere only.\n- Not a match-highlight recap. Reverent aftermath, memory, myth, and hope. Power through restraint — no symbolic clutter.\n\nAUDIO\nNo dialogue, no commentary. Reverent, charged, slightly supernatural sound design. Begin with the deep ambience of an empty stadium — distant floodlight hum, a faint wind, the soft creak of the swaying net. The lines waking add a delicate glassy shimmer running across the field. The crown stirring is a low buried throb under the turf. Each of the three jewels lights with a clear, resonant chime — three certain, complete tones, the same confident punctuation each time. The crown rising lands with a heavy, sacred low impact and a slow rising shimmer of gold. The three-jewel moment holds on a proud sustained chord. The fourth jewel is different — a soft, fragile, flickering tone that breathes rather than rings, tentative and tender. The lines connecting add a spreading living hum; the number 10 resolves on a held, awe-struck swell. Then it falls back toward near-silence — the empty stadium hum, and one last faint breathing shimmer from the fourth jewel. Music: sparse, mythic, restrained — deep cinematic drones, a slow sacred build through the coronation, a single restrained peak at the number-10 reveal, then a quiet hopeful fade that does not fully resolve, leaving the fourth jewel's note hanging. Never bombastic, never a sports anthem; aura and hope, not hype.\n\nNegatives: no player, face, likeness, body, or silhouette; no Messi depiction; no crown before Shot 07; no clean-prop or medieval crown; the fourth jewel must not blaze like the first three; one field and one net only, never three nets; the number 10 only as organic half-found field geometry, never an overlay; no logos, crests, brand marks, trophy replicas, or readable text; no match-recap energy; no identity drift, no jitter or temporal flicker, no warped geometry, no floating objects, no watermarks; no movement arrows, camera notes, panel numbers, captions, labels, borders, or storyboard markings in the video.",
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
    "prompt": "Vertical 9:16 aspect ratio. Create a realistic Douyin (TikTok China) live broadcast screenshot. The scene shows Liu Yifei hosting a live stream, holding up a sign that reads: \"Streaming live tonight, join the chat with Yifei!\" Capture the authentic look of a Chinese mobile livestreaming interface.",
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
    "prompt": "Dark, eerie Chinese mythological atmosphere blending traditional aesthetics with cinematic realism, meticulous detail, multi-pass rendering, flawless modeling. Journey to the West — the treacherous Lion-Camel Ridge, teeming with countless demons. Three massive thrones: the heavily armored Demon Elephant King seated on the left, the heavily armored Demon Lion King enthroned at center, the heavily armored Great Roc Demon King on the right. A diminutive Sun Wukong — back turned to the viewer — marches forward with his Ruyi Jingu Bang resting on his shoulder, clad in full battle armor. Low-angle upward shot, telephoto compression, dramatic hard shadows. Maximum detail, multiple refinement passes, precise perspective and structural lines, exquisite craftsmanship.",
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
    "prompt": "Overhead shot of a glass jar of spicy tomato chili chutney on a dark stone surface, surrounded by whole red tomatoes, tomato halves, fresh red chili peppers, black peppercorns, and a small wooden bowl with chutney and a spoon. Warm earthy backdrop, soft directional light, deep rich shadows, high contrast, clean minimal styling, commercial product photography, ultra-detailed, 4K.",
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
    "prompt": "Minimalist commercial ad featuring oversized Ray-Ban Aviator sunglasses, ultra-clean design. A young woman in all-white outfit leans casually against the giant sunglasses, relaxed confident pose, eyes closed, also holding a regular-sized pair in her hand. Soft gradient golden background with large bold white “RAY-BAN” text behind. Glossy reflective floor, soft studio lighting, modern high-end product photography. Small top-right text “Designed by Mr Das”. Bottom center tagline in small white font: “Iconic vision, every look.”",
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
    "prompt": "Pixar-style 3D animated banana character, single fruit brought to life. A charismatic male figure with bold confident eyes, thick expressive brows, and a wide grin full of gleaming white teeth with sparkle accents. Smooth, slightly glossy yellow peel with soft highlights. Stubby cartoon arms and legs, posed upright with arms crossed in a heroic stance. Background features a blurred bunch of bananas. Standing on a wooden dining table beside a sun-filled window in a cozy modern home interior. Rich vibrant colors, cinematic lighting, soft natural shadows, ultra-detailed high-fidelity textures.",
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
    "prompt": "Design a contemporary Swiss Style editorial poster for Moscow, Russia. Use a large bold sans-serif capital letter “M” as the main typographic structure. The “M” must be very clear, clean, geometric, solid, and dominant, with no stroke outline, no border, no shadow outline, and no decorative treatment. The silhouette of the letter “M” must remain easy to read at first glance. Do not let the illustration obscure or distort the shape of the letter. The poster should follow a precise left-aligned Swiss grid system with generous negative space.\n\nInside the “M”, create a simple, logical, and restrained flat illustration of Moscow’s city landscape character. Use only a few essential visual elements: simplified modern skyscrapers inspired by Moscow City business district, the calm curve of the Moscow River, a subtle silhouette of the Kremlin walls and towers, onion domes of Saint Basil’s Cathedral in a simplified geometric form, a soft green park landscape inspired by Gorky Park or Zaryadye Park, and two pedestrians on a clean riverside walkway. Keep the composition minimal, spacious, and easy to understand. Do not add too many landmarks, people, signs, vehicles, monuments, statues, fountains, trains, buses, or small decorative objects.\n\nThe illustration should suggest Moscow’s identity as a capital city where imperial history, Soviet monumental scale, modern glass skyscrapers, riverfront public spaces, and vast urban rhythm coexist in a clean contemporary way. Use flat vector shapes, clean silhouettes, minimal linework, simplified architecture, and believable scale relationships. Keep the scene lightly lively but not busy. The illustration should support the letter “M”, not compete with it.\n\nAllow only extremely subtle overlap outside the “M” frame using simple organic or atmospheric elements only: a few leaves from riverside trees or soft atmospheric mist over the river may slightly extend beyond the letter edge. Keep 97% of the illustration inside the “M”. Do not let people, buildings, domes, towers, vehicles, faces, paths, signage, or complex objects overlap outside the letter. The “M” must remain clearly readable and visually dominant.\n\nPlace the headline “Moscow” below the letter in bold sans-serif type, title case, not all caps, left aligned to the same grid. Under the headline, add this short body paragraph in small regular sans-serif text, also left aligned, with clean spacing and refined editorial hierarchy:\n\n“Moscow moves through grand historic layers, monumental architecture, river bends, and a dense modern skyline. Between imperial heritage, Soviet scale, and contemporary urban energy, the city holds a character that is powerful, structured, and constantly evolving.”\n\nNo icons, no badges, no decorative symbols. The overall design should feel Swiss minimalist: strong grid, precise alignment, asymmetrical balance, clean typography, generous negative space, restrained composition, and modern cultural city poster aesthetics.\n\nColor palette: warm ivory background, deep navy or charcoal typography, concrete gray, glass blue, pine green, Kremlin red accents, river blue-gray, pale beige, and soft black accents. Matte paper finish, subtle paper grain, crisp edges, flat contemporary illustration, modern Moscow metropolitan mood, calm but strong, sophisticated, balanced, and print-ready.\n\nNegative prompt: photorealistic, 3D render, glossy, maximalist, overcrowded city, complex illustration, too many details, too many landmarks",
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
    "prompt": "POV shot from inside a grocery store aisle, your hands holding a vibrant mixed-fruit jam jar -- strawberry, blueberry, and orange blend. Holographic AR overlays float around it: a \"Flavor Mix\" panel with fruit icons, a \"Nutrition Info\" display, and a glowing \"Freshness Meter\" at 9/10. A translucent digital shopping list with checkmarks for bread and butter hovers nearby, plus recipe suggestions for toast, pancakes, and desserts. Bokeh background of store shelves and shoppers. Clean retail lighting, photorealistic, cinematic, AR glasses POV, vertical composition.\n\nFull prompt: \nA first-person point-of-view (POV) shot inside a modern supermarket aisle. The viewer's hands are holding a mixed fruit jam jar with colorful branding, showing a blend of strawberry, blueberry, and orange flavors. Floating around the jar are sleek, semi-transparent Augmented Reality (AR) digital interfaces and holographic HUDs. The overlays display \"Flavor Mix\" with fruit icons, \"Nutrition Info,\" and a glowing \"Freshness Meter\" reading 9/10. A digital shopping list with checkmarks for bread and butter appears beside the jar, along with small recipe suggestions like breakfast toast, pancakes, and desserts. The background shelves are slightly blurred with other products and shoppers, creating realistic depth of field. Bright, clean lighting with a futuristic retail atmosphere, ultra-realistic, cinematic look, high-tech AR glasses perspective, vertical composition.",
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
    "prompt": "A professional studio food photography series showcasing deconstructed dishes captured mid-air in dramatic high-speed levitation. Set against a seamless dusty pink backdrop with soft, even studio lighting, the ingredients burst and float in dynamic formations. Featured dishes include a suspended tiramisu with its components (scoops of gelato, ladyfingers, mascarpone cream, and coffee beans) hovering in the air, borscht elements (beets, rye bread slices, fresh herbs) floating above a ceramic bowl of soup resting on a wooden board, and a sourdough toast topped with mashed avocado and a runny poached egg caught mid-split. Fine details like flying crumbs, spice particles, scattered herbs, and liquid droplets should be razor-sharp with a shallow depth of field. Soft shadows fall beneath the main suspended elements.",
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
    "prompt": "A sorrowful Korean psychological drama movie poster depicting a beautiful young woman photographed from a dramatic overhead angle, camera pointing straight down at her face as she gazes upward. Her long dark hair is loosely gathered in an undone bun with loose strands framing her face. Pale complexion, an expression of quiet emotional exhaustion. She is dressed in an oversized burgundy wool sweater, dark grey leggings, and scuffed white sneakers, holding a worn paperback book tightly against her chest. Surrounding her, a busy subway station where commuters stream past in long-exposure motion blur, their figures becoming ghostly streaks of movement against cold grey platform tiles. The contrast between her stillness and their motion creates a powerful sense of solitude. Korean title text at the top reads: \"군중 속의 속삭임 (Gunjung Sogui Soksagim - Whispers in the Crowd)\". Bold white serif typography fills the center of the composition. Visual style: warm-beige film grade, fine analog grain, shallow depth of field, soft tungsten underground lighting, subtle atmospheric haze, cinematic K-drama mood. Shot on Sony A7R IV, 50mm, slow shutter speed.",
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
    "prompt": "A quiet summer morning in a European apartment. A woman sits on the floor next to open balcony doors, absorbed in a book, one leg stretched toward the railing, a cream knitted blanket draped loosely over her lap. She wears a simple orange bralette and delicate jewelry, completely unaware of the camera. A cup of tea and an open book rest on the wooden floor beside her. The balcony overlooks classic European architecture: cream stone facades, wrought-iron railings, flowering balconies, leafy trees.\n\nPhotographed from an awkward handheld angle, as if someone walked past the room and snapped a photo without slowing down. The framing is tilted and accidental. The subject is not centered. Parts of the balcony doors, blanket, floor, and foreground objects are cut off by the frame edges.\n\nCaptured on a cheap 2000s low-resolution toy digital camera. 0.3-megapixel quality. Heavy motion blur. Intentionally crooked and tilted framing. Harsh pop-up flash despite bright daylight. Overexposed white highlights. Intense digital noise and heavy sensor grain. Low-fidelity faded colors. Chromatic aberration at the edges. Lens flare. Looks like an extremely blurry candid photo uploaded from an old toy camera. Raw and amateurish. Authentic nostalgic texture.\n\nSlight focus miss, motion smear, low-resolution facial details, sensor noise, JPEG artifacts, and compression damage visible across the face — exactly as a cheap toy camera would produce.\n\nDo not preserve modern clarity. Do not protect facial sharpness. The subject remains recognizable despite image degradation. Subject occupies 65% of the frame.\n\nLarge foreground obstructions from a partially clipped teacup, book, blanket folds, and balcony door frame. Extreme off-balance composition. Camera not leveled. Subject positioned awkwardly near one edge. Parts of the room, railing, and foreground elements are clipped.\n\nThe image should feel like a forgotten candid uploaded to an old social media site in the mid-2000s. Raw, amateurish, imperfect, accidental, nostalgic, unpolished. Captured-memory realism, not aesthetic photography.\n\nSuper thick plastic toy-lens softness, motion smear, focus miss, smeared highlights, low-resolution detail loss, heavy JPEG compression, sensor noise, and degraded detail across the face, hair, hands, blanket, books, teacup, balcony, buildings, and sky.\n\n--ar 4:5\n\nNegative prompt: beauty filter, modern smartphone quality, DSLR quality, cinematic grading, HDR photography, professional composition, studio lighting, ultra sharp face, perfect skin, flawless focus, fashion editorial, influencer photo, polished digital rendering, AI perfection, hyper-detailed eyes, premium camera quality, luxury portrait photography",
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
    "prompt": "A cinematic close up side profile portrait of a beautiful Black woman with deep glowing skin, eyes closed peacefully, wearing a bold emerald green and black patterned headwrap and matching scarf. Minimal elegant white face paint strokes above the eyebrow and across the cheek, glossy natural lips, small silver earring. Dark muted green studio background with soft atmospheric bokeh, premium fashion editorial lighting, smooth skin texture, dramatic yet calm mood, African inspired beauty portrait, high end magazine cover aesthetic, ultra-realistic photography, shallow depth of field, soft rim light, rich contrast, 85mm lens, f/1.8, 8k detail.\n\nNegative Prompt: text, logo, watermark, extra face paint, messy fabric, distorted face, bad anatomy, harsh shadows, overexposed skin, blurry eyes, plastic skin, low resolution, cartoon, CGI, unrealistic jewelry, extra earrings, deformed nose, asymmetrical lips.",
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
    "prompt": "A cinematic 6-panel storyboard sheet on a clean dark charcoal background, arranged in a 3-column by 2-row grid of widescreen 16:9 panels with thin neutral gray borders and a small white number label in the top-left corner of each panel. Photorealistic film stills, naturalistic dawn lighting, shallow depth of field, natural skin texture with subtle imperfections, candid composition, muted naturalistic color grade. Unifying concept: an ordinary morning where gravity has quietly stopped working — everyday objects and people drifting weightlessly. Panel 1: a bedroom at dawn, soft blue light, a sleeping person and their duvet drifting an inch above the mattress, dust motes hanging perfectly still in the air. Panel 2: a kitchen close-up, dark coffee pouring upward out of a white mug in a slow liquid ribbon, steam curling downward toward the counter. Panel 3: a bathroom, a toothbrush hovering mid-air with a pearl-like blob of toothpaste suspended beside it, scattered water droplets frozen around a reaching hand. Panel 4: a breakfast table, cereal pieces and milk orbiting a bowl in a lazy floating halo, a single spoon chasing one drifting cereal O. Panel 5: an entryway, keys, coins and a wallet frozen in a constellation above a doormat, a hand sweeping slowly through them. Panel 6: a front door swinging open onto an ordinary busy street below, a person floating out unbothered while sipping from an upside-down coffee cup. Each panel a distinct camera framing, photoreal textures. Small white label text — EXACT TEXT: '1','2','3','4','5','6' — one number per panel, no extra text, no duplicate text.",
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
    "prompt": "CCD flash photography style, late-night office setting, whiteboard covered in mathematical formulas in the background, black-rimmed glasses, white high-neck top, black high-waisted mini skirt, semi-matte cool-white porcelain skin with realistic skin texture, subject seated at desk, whiteboard marker held close to the lips, slight dutch angle composition, nuyoah aesthetic",
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
    "prompt": "Editorial fashion portrait, woman wearing flowing red bell-sleeve wrap dress, dramatic hard rim lighting from camera-left casting golden edge glow on fabric, direct intense eye contact with camera, parted lips, confident expression, wind-blown sleeve fabric captured mid-motion with natural fabric ripple, hair strands lifted by wind, deep saturated red shadows contrasted against warm blown-out gold highlights, asymmetric tight crop with one sleeve extending off-frame, cinematic color grading, high dynamic range, shot on Hasselblad medium format, 85mm lens, f/1.8 shallow depth of field, warm amber gradient backdrop with subtle atmospheric haze and soft lens flare bottom-left corner, skin texture realistic with subtle highlight sheen, professional studio fashion photography, ultra detailed",
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
    "prompt": "Create a luxury cinematic fashion poster featuring a stylish young male standing in a powerful confident pose, captured from a low-angle perspective. The subject wears a high-end black designer outfit with sharp tailoring, subtle metallic accents, and clean modern silhouette. His expression is calm, confident, and slightly intimidating, with direct eye contact. Hair is perfectly styled with soft volume and natural shine. Behind him is a large glowing circular spotlight in deep gold, creating a halo effect that enhances dominance and focus. The background is minimalist matte black with subtle texture, dust particles, and faint vignette edges to enhance depth. Lighting is dramatic studio-style with strong contrast, highlighting facial structure and clothing details. The composition is symmetrical and centered like a luxury brand advertisement or album cover. Ultra-realistic, 8K detail, 4:5 vertical ratio, high-end editorial aesthetic designed for viral engagement. --ar 4:5 ratio",
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
    "prompt": "Cute minimalist pastel doodle illustration, kawaii character standing side-by-side with their adorable animal companion, inspired by modern Japanese stationery art and children's picture books, clean vector linework, soft cream background, muted pastel color palette (pink, blue, mint, lavender, yellow), simple geometric shapes, tiny confetti dots and floating decorative elements, rounded character design with oversized sweater, wide pants, sneakers, glasses, calm expression, animal companion variations including llama, bear, axolotl, rabbit, cat, fox, turtle or fantasy creature, cozy scenic background with seaside boardwalk, lakeside village, mountain town or whimsical nature landscape, flat design, thick outlines, charming and playful aesthetic, symmetrical composition, full body pose, cute friendship theme, highly detailed vector illustration, sticker-like appearance, children's book art style, soft shadows, clean negative space, vibrant yet gentle colors, trending on Pinterest, adorable wholesome atmosphere, 4k, masterpiece.",
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
    "prompt": "Cristiano Ronaldo sports poster. Background divided intothree horizontal zones. Top zone warm cream Pantone 9183Coccupying top 40% of poster. Middle zone signal redPantone 485C as a pure flat color band occupying exactly\n8% of poster height at golden ratio point. Bottom zone\ndeep charcoal Pantone 432C occupying remaining 52%.\nThree zones. Two colors and one neutral. The geometry\nof the Portuguese flag deconstructed and reconstructedas graphic architecture.\n\nHis figure spans all three zones. Shot full body from\nslight low angle. Al Nassr gold kit. Mid stride. Leftleg forward. Right arm back. The specific body positionof someone at absolute peak running velocity. Not a posedaction. A captured action. The body in the cream zonerendered in full color warm skin tones and gold kit. The\nbody in the red zone bleached to near white silhouette\nwhere it intersects the red band. The body in the charcoal\nzone rendered in black and white high contrast. Three color treatments on one continuous figure. The zones are notbackgrounds they are filters. Each one revealing a\ndifferent version of the same man.\n\nMotion blur. His figure in slight motion blur at 1/250second shutter. The sharp elements his face his number 7his boot touching ground. The blurred elements his armsin motion his hair his loose kit fabric. The blurcommunicates what no still image can. The speed. The\nrelentlessness. The fact that he is never fully stopped.\n\nLayered over the three zones across the full poster width.\nA system of fine parallel horizontal lines. 0.3pt. Warm\nwhite. At 25% opacity. Running edge to edge. Spaced 4mm\napart. The texture of a television scan line. Or a\nprinting registration grid. Or the lines on a ruledpage waiting to be written on. The lines are the sameacross all three zones changing color against each\nbackground. White on cream barely visible. White on red\nglowing. White on charcoal clear and strong. The same\nline behaving differently in different worlds.\n\nPaint intervention. In the cream zone only. Upper left\nquadrant. Raw gestural brushstroke in cobalt blue\nPantone 2728C. A single mark. Applied with a wide brush\nat 45 degrees. The blue unexpected against the cream.\nNot part of the flag system. A disruption. An intervention\nfrom outside the established color logic. The color of\na sky he is always looking toward.\n\nJapanese typography. Large scale. Behind photograph layer.\nIn cream zone behind his upper body. 挑戦 pronounced\nchōsen meaning challenge. Rendered at 200pt Noto Serif\nCJK deep charcoal at 15% opacity. The kanji visible\nthrough the photographic layer like a thought behind\na face. In charcoal zone behind his lower body.\n勝利 pronounced shōri meaning victory. Same scale\nsame treatment. Beginning and end. Challenge and victory.\nAbove and below.\n\nInformation system. Right side of poster. Thin vertical\nrule signal red 1px running full height. To its right\na column of data in Helvetica Neue Light 6pt tracking\n200 bone white on charcoal and cream on red adjusting\nfor legibility. Club career timeline. Years at each\nclub. Goals per season. The data as a river running\nparallel to the figure. The career in numbers beside\nthe career in motion.\n\nTypography primary. Across the red zone. Full poster\nwidth. The red band is a stage for one typographic event.\nFutura PT Heavy. All caps. White. 36pt. Tracking 300.\nPerfectly centered vertically in the red band. THE\nSTANDARD HAS ALWAYS BEEN HIM. The red band exists to\nhold this sentence. Everything else in the poster exists\nto justify it.\n\nBelow the red band entering the charcoal zone. Full width.\nHelvetica Neue Black Extended. White. 96pt. Tracking minus\n10. RONALDO. The letters occupying the full width exactly\ntracked to fit. The name as the foundation of the\ncharcoal zone. Below the name in same charcoal zone.\nHelvetica Neue Light. 8pt. Tracking 600. Bone white.\nCR7 PORTUGAL 900 GOALS FORWARD LEGEND. One line. All\nthe context needed. None of the decoration.\n\nArt direction M/M Paris conceptual intelligence. Bureau\nBorsche typographic sophistication. Wieden Kennedy\nAmsterdam emotional directness. Nike Brand Design\nproduction quality. All four present simultaneously\nat their absolute peak.\n\nShot aesthetic Misan Harriman color and dignity. Ernst\nHaas motion blur mastery. Gregory Heisler technical\nperfection. Three photographers whose combined vision\nmakes something none of them would make alone.\n\nPrint format 70x100cm. 10K resolution. HDR. The three\nzones printed in three separate ink passes on a\nHeidelberg offset press. The red band overprinted twice\nfor maximum saturation. The charcoal zone with 7 color\nprocess for maximum depth. The cream zone with minimum\nink for maximum paper feel.",
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
    "prompt": "Design a visually rich infographic about an endangered animal using Chinese text. Feature a photorealistic animal as the main focal point, surrounded by annotated diagrams, structured callouts, and concise labels covering its habitat, diet, and distinctive traits. Blend photorealism with bold graphic design elements including color blocking, icons, and layered shapes on a clean background. Make it dense with information, tactile in feel, and professionally crafted.",
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
    "prompt": "surreal dreamcore architectural illustration, bright Memphis design influence, pastel pop color palette, crisp black ink outlines, isometric fantasy garden space, tiled geometric walls, floating spheres, checkerboard floor, stylized clouds, ornamental plants and topiary, clean comic-book linework, playful postmodern shapes, flat colors with subtle grain texture, whimsical liminal atmosphere, decorative botanical details, airy blue sky, high-detail editorial illustration, vibrant retro-futuristic mood.\n\nCreated entirely with ChatGPT Image 2 🚀",
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
    "prompt": "A highly detailed collectible toy figure inspired by a LEGO-style minifigure, standing in a professional studio. The figure has a realistic young woman’s face with porcelain skin, straight jet-black hair, blunt bangs, and a single striking white streak running through the hair. She wears small silver earrings and maintains a calm, confident expression. The body is a glossy plastic brick-toy minifigure wearing a soccer jersey with the number 10, matching shorts, and national-team-inspired colors. Full-body composition, centered framing, shallow depth of field, premium product photography, ultra-clean lighting, reflective plastic surfaces, realistic shadows, sharp focus, luxury collectible aesthetic, high-end commercial advertising style, photorealistic face blended seamlessly with toy body, 8K resolution, vibrant color grading, studio backdrop matching the jersey color theme.",
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
    "prompt": "Transform the uploaded photo into a whimsical hand-painted storybook illustration. Keep the exact pose, perspective, convex traffic mirror reflection, road, utility pole, and surrounding tropical greenery. Reimagine the mirror reflection as a vibrant illustrated world with lush jungle plants, palm trees, flowers, butterflies, doodle hearts, stars, swirls, smiling sun, fluffy clouds, and colorful hand-drawn decorations. The person is transformed into a cute cartoon character wearing a white t-shirt, navy shorts, white socks, and a blue cap, posing playfully with one leg raised and a peace sign. Integrate fitness-tracker statistics inside the mirror in a charming infographic style: “Day 53”, “4.06 km”, “88 m”, “24 min 9 sec”. Bright pastel colors, textured gouache paint, children's book aesthetic, whimsical doodles, clean outlines, cozy and cheerful mood, highly detailed foliage, playful travel journal style, Strava-inspired adventure artwork, vibrant greens, oranges, blues, and pinks, ultra-detailed illustration, masterpiece, kawaii aesthetic, editorial quality, vertical composition, 4k.",
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
    "prompt": "Reimagine the entire image as one cohesive Decorative Folk Flat Illustration blended with a soft handcrafted paper-cut layered style, inspired by charming papercraft diorama aesthetics. Preserve the original subject, composition, and overall mood, but simplify every element into clean flat forms, bold rounded shapes, and cute childlike proportions. Add playful doodle accents, decorative folk patterns, slightly uneven handmade outlines, and minimal facial details such as dot eyes and soft blush cheeks.\n\nUse a vivid, cheerful color palette that feels fresh and different from the original image, while keeping the final artwork warm, sweet, innocent, whimsical, and storybook-like. Create the feeling of layered cardstock with stacked paper depth, clean cut edges, subtle shadows between layers, and gentle paper-crafted imperfections, as if the scene were carefully cut, colored, and assembled on clean white paper. The result should look cute, handcrafted, playful, and visually unified, with a polished yet charming handmade folk-art papercraft finish.",
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
    "prompt": "prompt:\n\nA mixed-media sports poster with a realistic chest-up portrait of a young Argentine soccer player, confident pose with a subtle smile, dark brown slightly messy hair. Wearing the Argentina national team jersey with iconic sky-blue and white stripes, Adidas logo on right chest, Argentina Football Association crest on left.\n\nSoft studio lighting from upper left with gentle shadows and highlights on the hair. A bold white number \"10\" fills the background, partially overlapped by the player.\n\nBackground features vertical smoke bands in Argentine flag colors: sky blue, white, and sky blue.\n\nModern, clean, and dynamic style combining sharp portrait details with soft smoky effects for a powerful professional sports-poster aesthetic.",
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
    "prompt": "prompt:\n\nCCD flash photo with low-saturation black-pearl dark-gold tones, deep charcoal shadows, subtle dark-gold light reflections, soft frontal flash illuminating the subject, slight overexposure, fine grain, cool and moody late-night city atmosphere.\n\nSubject: young East Asian woman, elegant small oval face, narrow almond-shaped eyes, aloof expression, black low ponytail.\nOutfit: black turtleneck bodycon dress + dark gray thin jacket + sheer stockings + pointed stilettos.\nSetting: deserted midnight subway platform, metal benches, blurred backlit ad panels, reflective floor.\nPose: sitting on platform bench, legs crossed naturally, one hand on her bag.\nExpression: pensive, glancing up at camera after looking down.\nHighlight: long legs, slim waist, cold elegant vibe.\nAspect ratio: 9:16",
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
    "prompt": "Full prompt: \n\nUltra-wide angle, 90-degree top-down aerial studio portrait of a woman looking straight up at the camera. Strict identity preservation from reference image, do not alter face, proportions, skin texture, or expression.\n\nComposition: full-body framing, large negative space surrounding the subject, dramatic isolation and graphic impact.\n\nSubject: woman with round thick-framed stylish glasses. Wearing a deep dark brown short-sleeve button-up shirt in corduroy or textured fabric, with a light beige off-white textured sweater underneath. Natural hairstyle with visible texture and volume, do not alter hair color or structure. Natural realistic skin tone, visible texture, not over-smoothed. Expression: engaging, slightly curious or inquisitive.\n\nBackground: minimalist studio backdrop, soft gray gradient, darker at edges, lighter at center directly beneath the subject.\n\nLighting: soft uniform overhead lighting from above, subtle shadows defining facial features and clothing folds, even illumination, no harsh contrast.\n\nCamera: ISO 150-200, aperture f/1.28, shutter speed 1/200s, high-resolution ultra-detailed.\n\nColor grading: neutral modern tones, soft balanced contrast, clean contemporary look.\n\nMood: minimalist, modern, contemplative. Strong subject isolation and visual clarity.",
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
    "prompt": "2x2 grid, do this for 4 days $ scenes that made humans proud: Input = Pencil Shaving Category. Identify 4 distinct shavings (e.g., Graphite Shavings, Red Pencil Shavings, Yellow Pencil Shavings, Green Pencil Shavings). > Function Draw($ Pencil_Shaving, $ scene) > Anchor: [scene]:: [Pencil_Shaving]::4 > Morphology: A stunning 3D [scene] composed of [Pencil_Shaving] — full detailed > Material Physics: The thin curled wood, painted color edge, and fine grain of [$Pencil_Shaving] under warm window light",
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
    "prompt": "A cinematic forced-perspective street photography scene where a giant worn-out sneaker appears enormous in the foreground, towering over a casually dressed young man leaning against it. The man wears a brown leather jacket, loose blue jeans, sneakers, and a beige cap, standing confidently with hands in pockets. Autumn atmosphere with yellow and orange leaves scattered on the road, talltrees with fall foliage in the background, parked car slightly blurred. Ultra-realistic textures on the shoe sole, visible dirt and fabric wear. Shot from a very low angle to exaggerate scale, shallow depth of field, natural daylight, soft cinematic color grading, realistic shadows, high detail, 8K resolution, professional photography, surreal yet believable forced perspective illusion.",
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
    "prompt": "Photorealistic high-fashion editorial image, vertical 4:5. A young adult fashion model sitting calmly on the center of one enormous pink flower growing above the clouds, the flower stem rising from below and disappearing into soft white clouds. Low-angle perspective from slightly below, the flower framing the image, making the flower feel monumental and surreal. The model wears a short sleeve crisp oversized white shirt, loose light trousers, silver jewelry, and black minimal sandals. Natural open brown hair moving softly in the wind, composed expression, slight soft smile. Clean vivid blue sky, a few soft white clouds, huge detailed flower petals, bright natural daylight, crisp vivid color, playful surreal fashion campaign mood, realistic anatomy, natural hands, sharp editorial photography, no text, no logos --ar 4:5 --raw --profile glu65pn --stylize 60 --weird 4 --hd",
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
    "prompt": "Create a delicate contemporary Japanese lifestyle illustration with a cozy slice-of-life atmosphere.\n\nART STYLE\nHand-drawn pen-and-ink sketch illustration, thin expressive linework, loose imperfect contours, minimalist editorial artwork, soft watercolor washes, subtle paper texture, elegant negative space, sketchbook aesthetic, modern Japanese indie illustration, light and airy composition, contemporary café-art style, emotionally warm and intimate.\n\nCHARACTERS\nTwo young adults with soft, simplified facial features and natural expressions. Casual oversized clothing, relaxed body language, authentic interaction, candid everyday moment. Faces are minimally rendered with delicate linework rather than detailed realism.\n\nENVIRONMENT\nA cozy indoor setting such as a café, coffee shop, apartment, studio, bookstore, kitchen corner, or creative workspace. Include wooden furniture, coffee mugs, indoor plants, shelves, books, windows, soft decorative details, and small everyday objects. The environment should feel lived-in yet uncluttered.\n\nCOMPOSITION\nFull-body or three-quarter-body view. Characters seated naturally and facing one another. Balanced asymmetrical layout. Large areas of clean negative space. Storytelling through posture and atmosphere rather than action. Editorial illustration framing. Eye-level perspective.\n\nCOLOR PALETTE\nMuted and desaturated colors only:\n• Dusty blue\n• Warm cream\n• Soft beige\n• Light gray\n• Sage green\n• Warm brown\n• Off-white\n\nAdd only one small accent color element such as red socks, red shoes, a red mug, or a small red object.\n\nLIGHTING\nSoft natural daylight entering through windows. Gentle ambient illumination. No dramatic shadows. Warm, peaceful, calming mood.\n\nRENDERING\nMinimal shading. Sparse details. Watercolor-style color fills inside delicate ink outlines. Slightly unfinished sketch quality. High-quality illustration with visible hand-drawn imperfections. Soft edges and subtle texture.\n\nMOOD\nComfortable, quiet, nostalgic, peaceful, intimate, cozy, everyday happiness, slow living, café culture, thoughtful conversation, gentle human connection.\n\nAVOID\nAnime screenshots, manga panels, cel shading, digital painting, hyperrealism, photorealism, 3D rendering, glossy surfaces, vibrant saturated colors, cinematic effects, dramatic lighting, excessive details, sharp outlines, heavy shadows, complex backgrounds.\n\nSCENE:\n[INSERT YOUR SCENE DESCRIPTION HERE]\n\nThe final image should feel like a premium Japanese lifestyle illustration found in an art book, café magazine, design journal, or independent sketchbook collection.",
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
    "prompt": "A magical science advertisement poster. A curious young boy age 10 in a NASA tshirt gazes up in total wonder beside a giant shiny silver telescope 3x his height pointed toward a breathtaking galaxy view above, \"STARKIDZ\" written in glowing white font on the telescope body. Deep dark space background with milky way galaxy colorful nebula clouds and shooting stars. Glowing cosmic typography \"STARKIDZ\" in white and blue filling the background. Tagline bottom: \"Explore the universe.\" Small text top-right corner reads \"Designed with GPT Image 2\" in grey. Photorealistic, magical kids science product commercial, dramatic deep space galaxy lighting.",
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
    "prompt": "Oversized luxury wristwatch as a modern sculpture centerpiece, fashion model leaning against the dial face, monumental \"TIME\" typography looming in the background, deep emerald studio environment, reflective polished floor, Swiss high-end advertising aesthetic, cinematic editorial photography, ultra-clean minimalist composition, 1:1",
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
    "prompt": "9:16 vertical portrait of a young Japanese couple captured in Fujifilm analog film style\n\nFilm aesthetic: Fujifilm Pro 400H / Superia emulation, muted pastel palette, faint green-magenta color cast, low contrast, soft highlight falloff, fine film grain, gentle halation around light sources\n\nLighting: natural window light, diffused and airy, soft shadow transitions, bright but gentle indoor daylight\n\nSubjects: two young Japanese people, minimal natural makeup, realistic skin with subtle texture and natural imperfections\n\nFemale: oversized button-up shirt, loose shorts, casual relaxed styling\nMale: simple light t-shirt or shirt, clean understated look\nBoth: natural, slightly tousled hair\n\nPose: intimate closeness, sitting or standing side by side; she leans gently toward him, one hand on his shoulder or chest; he tilts in, faces nearly touching, the moment just before a kiss\n\nExpression: soft natural smiles or tender gaze toward each other, genuine emotional warmth\n\nCamera: waist-up close framing, eye-level angle, slight handheld quality, intimate feel\n\nSetting: minimal indoor space near a window, soft curtains, clean neutral background\n\nMood: warm, romantic, quiet everyday intimacy\n\nQuality: ultra-realistic, analog film character, gentle grain, slight softness, natural imperfections",
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
    "prompt": "Design a macOS App Store icon for an app called 'Flash Chat'. Single squircle icon with smooth, continuously rounded corners, centered on a white canvas with padding, filling roughly 80% of the canvas. Modern light skeuomorphic style, macOS App Store quality. One icon only.",
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
    "prompt": "Spring Festival 2026 Guangzhou city promo poster, vertical 9:16, festive yet elegant. Double exposure with S-curve flowing composition on a pure white textured background. Bottom-right corner: a miniature figure in traditional Chinese attire swings a long red silk ribbon that morphs into mountain ridges and river currents, revealing a layered Guangzhou panorama inside, including Canton Tower, Zhujiang New Town skyline, Pearl River with cruise ships, ancient architecture, and Baiyun Mountain. Bottom-left typography: \"SPRING 2026\" horizontal with a vertical line of Chinese characters reading \"Millennial Trade City, Charming Guangzhou.\"",
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
    "prompt": "3D render, stylized full-body side-view portrait of an elderly male hiker with a long white beard, walking right. Solid seamless deep-teal studio background with soft floor reflections. He wears a brown wide-brim felt hat, a gray-blue plaid shirt, cuffed brown corduroy trousers, and scuffed dark work boots. Large canvas-and-wicker backpack with leather straps on his back. Right hand holds a lit vintage hurricane lantern (brass frame, glass globe) casting a warm amber glow. Left hand grips a plain wooden walking stick. Textured matte finish, soft diffused studio lighting, vertical composition with generous negative space above.",
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
    "prompt": "“Create a crisp, clean infographic storyboard poster for THE PRETZEL MAKER. Wide 16:9 layout, white background, black borders, bold black typography, premium Pixar 3D stylized rendering, bright vivid colors — deep golden brown pretzel crust, warm caramel tones, coarse white salt crystals, rich wood textures, warm Bavarian daylight.\nTop header:\nTHE PRETZEL MAKER\nTOTAL VIDEO TIME: 12 SECONDS\n8 SHOTS · GOLDEN · TWISTED · STRAIGHT FROM BAVARIA\nLegend icons: ACTION, HEAT, TIME HINT, INGREDIENT\nSame Pixar-style middle-aged Bavarian male baker throughout — warm round face, thick blonde mustache, traditional lederhosen with suspenders, white shirt, small charming wooden pretzel stand, string lights overhead, wooden beer barrels nearby, warm daylight, charming German town square or beer garden visible behind him.\n8 panels:\nPanel 1 — THE OPENER: Wide shot. Baker stands behind his wooden pretzel stand, warm daylight flooding the scene, string lights hanging above, traditional German buildings softly visible behind him. He spreads his arms wide and says \"Fresh Pretzel!\" with a massive proud smile. His world established. You know exactly what's coming.\nPanel 2 — THE ROPE: Close-up. Both hands rolling a length of soft pale dough into a long even rope on the wooden counter — rolling back and forth with practiced rhythm, the rope stretching longer and thinner with each pass.\nPanel 3 — THE TWIST: Hero craft frame. Close-up dramatic. Both hands lifting the dough rope and crossing it into the iconic pretzel shape — looping the ends, twisting them together, folding them down onto the body to form the classic pretzel knot. The most unique hand motion in the entire series. Nobody has shown this in Pixar style.\nPanel 4 — THE BATH: Close-up. The shaped pretzel dipped into a pot of bubbling baking soda water — briefly submerged, lifted back out glistening and slightly darkened, ready for the oven. The step that gives pretzels their signature deep color and chew.\nPanel 5 — THE SALT: Close-up dramatic. Coarse white salt crystals scattered generously over the wet pretzel surface — sticking instantly, catching the daylight, vivid white against the pale dough.\nPanel 6 — THE OVEN: Wide medium with him visible. Baker slides the tray of pretzels into the glowing oven, closes the door. Steps back with a satisfied nod. The wait begins.\nPanel 7 — THE REVEAL: The hero frame. Oven door opens — pretzels emerging deep golden brown, glossy, perfectly twisted, steam rising. He lifts the tray with both hands, eyes lighting up with pride. The most beautiful pretzels you have ever seen.\nPanel 8 — THE TEAR: Wide warm shot. Baker tears a warm pretzel apart with both hands — soft warm interior revealed, steam escaping, salt crystals visible on the golden crust. Eyes closing in pure satisfaction. String lights and the warm Bavarian square glowing behind him.\nFooter:\nVIDEO FLOW: 8 shots × ~1.5s = 12 seconds. Dough rope to the tear.\nCAMERA TIPS: wide on the stand opener, close-up for the rope roll, close-up dramatic for the twist, close-up for the baking soda bath, close-up dramatic for the salt, wide medium for the oven, hero wide for the reveal, wide warm for the tear\nLIGHT & STYLE: warm Bavarian daylight throughout, deep golden pretzel crust, coarse white salt, rich wood textures, traditional lederhosen, string lights, Pixar vivid warm colors throughout\nBAKER NOTES: one baker, one stand, one perfect pretzel. Golden, twisted, and straight from Bavaria.”",
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
    "prompt": "Create an extraordinary collector-edition Cristiano Ronaldo poster inspired by contemporary data visualization, cartographic design, and editorial publishing. The composition should capture Manchester United-era Ronaldo during a dynamic turning movement, as if caught between acceleration and decision. His expression should communicate youthful confidence and relentless ambition.\n\nThe portrait should be integrated into a visual world constructed from flowing topographic contours, movement trajectories, directional systems, and abstract maps representing a lifetime of progress. The lines should feel elegant and intelligent rather than technical. Large-scale information structures should guide the viewer's eye through the composition while reinforcing the narrative of movement and evolution.\n\nThe palette combines arctic blue, coral red, soft ivory, and charcoal accents. Sophisticated typography, layered publishing systems, and contemporary information design should create visual depth throughout the artwork. The final image should resemble an award-winning editorial feature documenting one of the most remarkable journeys in modern sport.",
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
    "prompt": "Design concept board: bird nest weaving methods as the inspiration for a sculptural lounge chair. Four-stage sequence from nest-building reference photos to construction diagrams, then organic form abstraction, then the finished product. Interlocking woven frame forms the seat and backrest. Natural fiber upholstery with soft cushioning. Earthy warm tones with a polished, refined surface. Sustainable luxury aesthetic. Presentation layout with process sketches in the top half, final rendered chair in the bottom half. Warm natural lighting.\n\nAR 4:3",
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
    "prompt": "Create an airy city scene with large typography-safe negative space in the upper-left. Add [УФА] and one short elegant English caption matching the city mood. Automatically adapt the background to the city: one iconic primary landmark, local architecture, café culture, transport sign, street lamp, flowers, trees, small decorative details, and calm daily-life moments. Use 3–6 people only, naturally interacting with the city: talking at a café, walking, jogging, sketching, or taking photos. Avoid crowds and avoid a single hero character. Style: Japanese stationery aesthetic, luxury sticker illustration, premium commercial flat-vector poster, clean thin outlines, consistent line weight, flat colors only, no shading, no gradients, no texture. Palette: blush pink, dusty rose, sage green, warm cream, soft beige, muted gray-green. Mood: minimal, elegant, calm, refined, high-end travel postcard and lifestyle branding. No realism, no watercolor, no painterly effects, no photorealism, no dense background. Установить соотношение сторон 3:4",
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
    "prompt": "Swiss International design style, minimalist flat vector poster, vertical 9:16 format, diagonal-split layout. Top-left: Traditional Chinese headline in a serif typeface paired with flowing connected-script serif English. Bottom-right: key symbolic illustration — flat vector artwork with vivid fluorescent gradients, subtle grain texture, scattered pixel-art icons, cultural festival poster aesthetic, museum-quality graphic design. Theme: Infinite Love Marathon Concerts (floral motif). 4K.",
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
    "prompt": "Generate a 3×3 image grid (3:4 aspect ratio) for a luxury commercial campaign centered on the uploaded product.\n\nEach of the nine frames should deliver a unique visual concept while keeping the product visually identical throughout.\n\nThe nine concepts:\n1. Hero still life with a bold, iconic arrangement\n2. Extreme macro revealing surface texture and material detail\n3. Liquid or particle dynamics wrapping around the product\n4. Minimalist sculptural staging with abstract geometry\n5. Floating elements that convey lightness and forward-thinking design\n6. Close-up sensory shot focused on tactile realism\n7. Color-concept scene drawn from the product's own palette\n8. Symbolic ingredient or component abstraction\n9. Surreal but refined blend of realism and imagination\n\nProduct rules: maintain 100% fidelity to the product's shape, proportions, label, type, color, and branding. No distortion or redesign. Clean product-to-background separation.\n\nLighting and finish: soft controlled studio lighting, subtle highlights, realistic shadows, ultra-sharp focus, high dynamic range, editorial luxury aesthetic.\n\nMood: polished, modern, hyperreal, aspirational. Built for brand sites, social grids, and digital billboards.",
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
    "prompt": "Design a complete set of 12 music-player homepage category icons in the style of a professional app UI designer. Icons should cover: music note, vinyl record, equalizer, headphones, liked music, music folder, video, microphone, playlist, speaker, CD, and radio. Render each in 3D skeuomorphic style with vibrant colorful accents, on white background rounded-corner cards.",
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
    "prompt": "A 3x3 grid collage of 9 illustrated sticker-style panels, all featuring the same young woman with curly brown hair styled in a messy bun, soft anime-inspired illustration style with warm pastel color palette (blush pink, cream, warm brown, soft teal). White background for each panel with subtle sparkle/heart decorations. Each panel shows her in a different cozy lifestyle activity:\nPanel 1 (top-left): Cooking in a cozy kitchen, wearing a cream knit sweater and apron, stirring a pink pot on the stove, tomatoes and herbs nearby, warm kitchen background.\nPanel 2 (top-center): Reading a book curled in a cozy chair, wearing a black oversized hoodie, wrapped in a pink blanket, coffee cup with heart on the side, bookshelf behind her.\nPanel 3 (top-right): Painting on a canvas easel, wearing white overalls, holding a paintbrush over a colorful palette, soft musical notes floating around.\nPanel 4 (middle-left): Gardening with floral gloves and denim overalls, planting flowers in terracotta pots, watering can beside her, pink flowers blooming.\nPanel 5 (middle-center): Doing yoga/stretching on a pink mat, wearing a pink crop top and black leggings, arm raised gracefully overhead, green plant in background, water bottle and dumbbells nearby.\nPanel 6 (middle-right): Hugging a golden retriever puppy, wearing a cream hoodie, surrounded by floating pink hearts, big happy smile.\nPanel 7 (bottom-left): Journaling at a desk, wearing a pink off-shoulder knit sweater, writing in a notebook, tulips in a vase, a lit candle, sparkle accents around her.\nPanel 8 (bottom-center): Playing acoustic guitar, wearing a black casual outfit, smiling joyfully, musical notes and golden sparkles floating around her.\nPanel 9 (bottom-right): Traveling with a backpack, wearing a straw hat, sunglasses, white tee, holding an open map, camera hanging around her neck, airplane trail in background.\nConsistent character design across all panels. Soft lineart, warm skin tone, expressive large eyes, cozy and aesthetic illustration style similar to Korean webtoon sticker art. Clean white background per panel, arranged in a 3x3 grid layout.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-evo-poster_case426",
    "title": "Moon Whisper 石墨肖像",
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
    "prompt": "Create an ultra-detailed monochrome graphite pencil masterpiece featuring a graceful HALF-FACE portrait emerging from a pure white background. Position the face on the far right side of the composition, with eyes gently closed in peaceful reflection. The visible half of the face should be large, elegant, and highly detailed with realistic graphite shading and delicate pencil textures.\n\nBehind the subject, place a MASSIVE luminous full moon dominating the background, occupying nearly half of the artwork. Surround it with tiny graphite stars, subtle stardust, and soft celestial particles. Long flowing black hair dissolves into dreamy smoke-like wisps, delicate butterflies, and elegant swirling pencil strokes that blend into the moonlit atmosphere.\n\nMaintain a minimalist fine-art composition with generous negative space, museum-quality graphite rendering, ultra-realistic pencil textures, soft shadows, emotional elegance, ethereal beauty, luxury gallery artwork, vertical phone wallpaper, masterpiece, 8K, hyper-detailed, Moon Whisper theme.",
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
    "prompt": "A portrait-oriented cinematic poster in the Graffiti Come to Life (Optical Illusion) style, where the cartoon character is not portrayed as a separate 3D figure standing beside the real person. Instead, the character exists as a highly detailed graffiti mural painted on a textured brick wall, while one or both of its hands appear to break through the wall as if coming to life, naturally wrapping around or interacting with the real subject standing in front of it. The illusion should feel seamless, convincing, and visually striking, blending realistic perspective, shadows, lighting, and depth to create the impression that the graffiti has become partially alive.\n\nThe overall composition should feature a modern cinematic atmosphere with dynamic lighting, rich color contrast, and carefully balanced depth. Enhance the poster with stylish graffiti-inspired decorative elements such as spray paint splashes, urban textures, paint drips, stencil patterns, geometric accents, subtle wall cracks, layered graphic shapes, and contemporary street-art details that strengthen the visual identity without making the design feel overcrowded.\n\nThe subject's pose must be completely different from the reference photo, appearing expressive, confident, and naturally dynamic rather than stiff or flat. The body language should resemble that of an international fashion model, conveying elegance, confidence, and effortless movement with a refined editorial aesthetic. The facial expression should feel lively, engaging, and full of personality, creating a stronger emotional connection with the viewer.\n\nThe outfit should reflect modern casual fashion with a stylish, contemporary look. Combine clothing pieces with varied colors, textures, materials, and subtle patterns to avoid a repetitive or monotonous appearance. The styling should feel fashionable, youthful, and visually balanced while remaining realistic and naturally wearable.\n\nEvery typography element within the poster should feature bold, premium, and eye-catching font styles that complement the graffiti concept. Use creative font treatments, layered text compositions, dynamic sizing, and modern graphic placement to ensure the typography becomes an integral part of the artwork rather than looking plain or generic.\n\nThe overall poster should deliver a premium, high-end visual experience with a fresh contemporary aesthetic. Avoid ordinary layouts, repetitive compositions, mediocre design choices, or generic visual treatments. Every element should contribute to a vibrant, visually rich, and modern street-art inspired masterpiece rendered in ultra-high-definition 8K quality with exceptional sharpness, realistic textures, and professional cinematic finishing.",
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
    "prompt": "Use the uploaded photo as the exact identity reference. Preserve the facial structure, hairstyle, beard, skin tone, facial proportions, eyebrows, lips, jawline, and overall likeness with photorealistic accuracy. Do not alter the identity.\n\nConvert the portrait into a premium high-contrast monochrome vector illustration with clean comic-book linework and sharp cel shading.\n\nThe subject faces directly toward the camera with a confident expression and slight chin lift.\n\nAdd vivid red neon rim lighting around the hair, ears, shoulders, and jawline.\n\nWear an oversized black open shirt layered over a plain white crew-neck t-shirt, a thin silver square pendant necklace, luxury watch, and black sunglasses resting on top of the head.\n\nPure black background with subtle floating particles and dramatic shadows.\n\nUltra-clean vector lines, premium poster composition, luxury editorial style, crisp facial details, cinematic contrast, minimal color palette using only black, white, and glowing red.",
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
    "prompt": "Create a whimsical, hand-painted storybook-style illustration inspired by three candid travel photos arranged vertically in a collage. Preserve the exact composition, poses, and framing from the reference: a young woman with long straight dark brown hair wearing an oversized off-white button-up shirt, black smartwatch, and round sunglasses, standing waist-deep in lush green tea plantations. The first panel shows her facing slightly left while gently brushing the tea leaves with both hands. The second panel captures her from behind with both arms stretched outward, walking peacefully through the tea bushes. The third panel shows her turned slightly to the right, smiling softly while touching the leaves.\n\nTransform the realistic tea estate into a dreamy, colorful illustrated landscape with rolling hills, playful stylized trees, blooming wildflowers, and vibrant foliage. Use soft pastel tones, rich greens, warm yellows, blush pinks, and teal accents. Add whimsical doodle elements around the composition such as hearts, stars, clouds, sunshine, sparkles, tiny flowers, and hand-drawn decorative marks on a warm cream paper background. Maintain the same vertical three-panel layout with generous spacing, rounded organic shapes, textured brush strokes, and a cozy children’s book aesthetic. The illustration should feel joyful, peaceful, and magical, with clean outlines, subtle paper texture, high detail, and a charming gouache/watercolor-inspired finish. No text, no watermark, high-resolution, portrait orientation.",
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
    "prompt": "A premium fashion editorial portrait series featuring a stylish young man photographed inside a minimalist studio with warm beige walls and soft natural window light. The collection consists of nine unique portraits arranged in a clean 3×3 grid, each showing a different relaxed pose and expression while maintaining a cohesive luxury editorial aesthetic.\nThe model has thick messy wavy dark hair, defined facial features, and wears an elegant monochrome wardrobe consisting entirely of black clothing, including fitted black shirts, tailored black trousers, lightweight knitwear, plain black t shirts, and a structured black blazer. A silver wristwatch subtly completes several looks.\nEach portrait captures a different emotion and pose. Resting his chin on his hand while sitting sideways on a wooden chair. Sleeping across the chair back in a quiet introspective moment. Looking away with a sharp jawline highlighted by side lighting. Reclining casually with one hand through his hair. Leaning forward with elbows on knees and an intense gaze. Resting his face against his hand in a thoughtful pose. Looking back over his shoulder while seated. Sitting with one fist against his lips in black and white. Relaxing with an open collar and confident posture.\nSoft diffused daylight enters from a large window, creating smooth shadows and subtle highlights that emphasize facial structure and fabric textures. The backgrounds remain clean and uncluttered with warm neutral tones throughout.\nShot on an 85mm full frame lens at f/2.2, shallow depth of field, soft editorial lighting, muted color palette, subtle film grain, luxury magazine photography, photorealistic, ultra detailed skin texture, premium fashion campaign, minimalist composition, 8K HDR.",
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
    "prompt": "Coastal Daydream\nComposition: Three-quarter close-up captured from slightly behind the shoulder, with wind-swept hair creating organic movement across the frame while the coastline softly recedes into mist.\nPrompt:\nUsing the uploaded photo as the exact face reference. Preserve the face identity perfectly without modifying facial structure, proportions, expression anatomy, skin texture, or unique features. No beautification, no face reshaping, no artificial symmetry, no AI-generated appearance. Photorealistic candid photograph captured on a worn disposable film camera, monochrome cinematic photography, authentic 35mm grain, subtle exposure inconsistencies, natural imperfections, vintage analog character, documentary realism.\nThe woman sits quietly on rugged coastal rocks damp from ocean spray, wearing a flowing white dress with soft fabric folds gathered naturally around her. Strong sea breeze moves through her voluminous hair, lifting sections into the air while delicate strands drift across her cheeks and lips. Her head is turned slightly toward the shoreline, eyes closed, wearing a calm reflective expression and a faint genuine smile as she enjoys the cool ocean wind.\nBehind her, towering sea cliffs disappear gradually into dense coastal fog beneath a dramatic cloud-filled sky. Waves break softly against distant rocks, adding subtle atmosphere without distracting from the subject. Diffused overcast daylight creates gentle tonal transitions across the face and dress, emphasizing realistic skin texture and natural film contrast.\nShot with an 85mm lens, shallow depth of field, cinematic documentary framing, emotional editorial photography, realistic analog exposure, soft focus falloff. The composition captures her from just behind the shoulder, allowing wind-blown hair to partially veil the frame while the mist-covered coastline stretches into the background, creating a quiet sense of solitude and freedom.\nno ultra-clean digital sharpness, no CGI appearance, no beauty-retouching, no fashion-poster composition, no studio lighting, no centered framing, no black bars, no artificial skin smoothing, aspect ratio vertical.",
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
    "prompt": "Turn any player into a collectible.\n\nGenerate a photorealistic studio image of a custom bobble-head collectible figure modeled after [PLAYER NAME], based entirely on the attached reference photo. The reference image is the absolute and sole source of truth for all physical characteristics — do not rely on any prior knowledge, training data, or assumptions about how [PLAYER NAME] looks. Every visual decision must be driven exclusively by what is visible in the attached photo.\nFollow all of the rules below without exception:\nLikeness & Identity\n•Engrave the name ”[PLAYER NAME]” in clean white lettering on the front face of the two-tiered base beneath the figure.\n•Reproduce every distinctive facial feature — bone structure, eye shape, nose, lips, skin tone, and complexion — exactly as seen in the reference. Do not smooth, soften, generalize, or idealize any feature.\n•The hairstyle must match the reference with exact fidelity — preserve natural curl, wave, coil, frizz, volume, length, and direction. Never straighten, flatten, or restyle the hair.\n•Replicate facial hair (beard, mustache, stubble) at the precise density and pattern shown in the reference. If the subject appears clean-shaven, add absolutely no facial hair.\n•Include accessories such as glasses, earrings, or a hat only if they are visibly present in the reference photo. If no accessories appear, add none whatsoever.\nFigure Design & Style\n•The figure must follow a classic sporty bobble-head aesthetic — proportionally large head, compact body, and an overall collectible toy feel. This is not a Funko Pop, not a caricature, and not a hyper-stylized vinyl figure.\n•The neck must be short and thick in proportion, with absolutely no spring, coil, or hinge mechanism visible.\n•Dress the figure in the official national football kit that corresponds to [PLAYER NAME]’s country — use the correct jersey color, shorts, and socks as worn by their national team. Do not default to any generic or incorrect kit.\nPose & Base\n•Pose the figure standing upright with one foot casually resting on top of a standard soccer ball, which sits directly on the base.\n•The base must be two-tiered, with a top surface that mimics the texture of matte natural grass — no gloss, no shine, no reflection of any kind.\nBackground & Lighting\n•The background must show a football stadium that is softly blurred using a shallow depth-of-field bokeh effect, so the figure remains the clear focal point.\n•The stadium lighting must evoke a warm golden hour — rich amber and soft orange tones, low sun angle, cinematic warmth.\nFormat\n•Final output must be in 4:5 portrait orientation.",
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
    "prompt": "Create an ultra-realistic editorial studio photograph set against a smooth off-white seamless backdrop with a bright, airy minimalist aesthetic.\n\nA fun-loving young woman with a pastel blue pixie cut is captured in a spontaneous moment of playful escape. She bursts into laughter while jogging forward, her smile wide and genuine, eyes nearly closed from amusement. Her posture shows energetic movement as she tries to continue running despite being gently held back, creating a humorous tug-of-war effect.\n\nPose & Movement\n\nNatural mid-stride running motion.\n\nOne leg lifted slightly off the floor.\n\nArms moving freely with realistic running dynamics.\n\nOne hand confidently holding a vibrant rainbow spiral lollipop.\n\nSubtle motion in the hair and clothing.\n\nStrong sense of forward momentum with believable body mechanics.\n\nWardrobe\n\nLoose oversized powder-blue sweatshirt.\n\nRelaxed-fit beige trousers with wide legs.\n\nRed checkerboard slip-on skate shoes.\n\nRound eyeglasses casually resting atop her head rather than covering her eyes.\n\nDoodle Character Interaction\nA simple hand-drawn black doodle figure appears beside her, sketched in thick marker lines directly onto the photograph. The character features a round head, tiny dot eyes, and a straight neutral mouth.\n\nThe doodle extends an exaggerated arm that grips the back of the woman's sweatshirt, stretching the fabric noticeably as it attempts to stop her from getting away. The tension creates realistic folds and pull lines in the sweatshirt while subtly drawing her shoulders backward even as her body continues moving forward.\n\nSmall sketch-style motion marks around the doodle's arm suggest effort and resistance. Additional playful doodle accents around the woman's head emphasize her laughter, excitement, and movement.\n\nDetails\n\nAnatomically accurate hands and fingers.\n\nClear visibility of both hands despite oversized sleeves.\n\nRealistic grip and proportions on the lollipop.\n\nConvincing fabric tension and clothing physics.\n\nBright high-key lighting with soft natural shadows.\n\nClean editorial lifestyle photography aesthetic.\n\nHumorous visual storytelling.\n\nModern premium magazine-quality look.\n\nWholesome and playful mood.\n\nUltra-realistic textures, sharp focus, crisp detail, 8K resolution.\n\nVertical composition.",
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
    "prompt": "Create a cinematic surveillance-thriller image set inside a massive multi-level underground metro station. The camera should feel like a ceiling-mounted CCTV positioned high above at roughly a 40-degree angle, looking down over a long industrial escalator and the complex architecture of the station.\nThe composition should use a 4:5 vertical frame, with the escalator cutting diagonally through the image to create strong depth and scale. The station is crowded with hundreds of commuters moving in both directions, forming a chaotic flow of people with subtle motion blur.\nAt the center of the frame, a single person matching the uploaded reference image is descending the escalator. The subject appears to be moving quickly, slightly leaning forward. One hand holds the escalator handrail for balance, while the other carries a small glossy black mini bag with realistic reflections.\nAt a dramatic moment, the subject suddenly turns their head over their shoulder and looks directly into the camera, creating an intense fourth-wall-breaking moment, as if they know they are being watched.\nAdd a realistic CCTV interface overlay, including:\nLive recording indicators\nTimestamp and camera ID\nA facial-tracking square locked onto the subject\nA secondary zoomed-in facial recognition panel in one corner\nMinimal technical HUD elements and surveillance graphics\nLighting should be cold and fluorescent, typical of a modern subway station, with realistic reflections on the metallic escalator surfaces and polished handrails. Keep the surrounding crowd slightly blurred while the subject remains sharp and in focus.\nOverall mood: high-end documentary surveillance thriller, ultra-photorealistic, cinematic composition, realistic skin textures, natural crowd behavior, detailed environmental reflections, and professional movie-grade realism.",
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
    "prompt": "Create a hyper-detailed full-body 3D stylized caricature of the person in [REFERENCE IMAGE], preserving their exact face, skin tone, and ethnic features.\n\nStyle: Massive oversized head on a tiny compact body, classic caricature exaggeration. Expression: mischievous wink and wide smirk showing sparkling diamond grillz rendered with ray-traced reflections and prismatic glints.\n\nPose: Standing upright, one arm extended toward the camera to showcase a thick iced-out diamond watch. Every gem catches and refracts light brilliantly.\n\nOutfit: Match exactly what they wear in [REFERENCE IMAGE]. Fabrics rendered with micro-detail stitching, realistic folds. Skin with subsurface scattering, studio-clean and smooth.\n\nSetting: Clean solid vibrant blue backdrop, soft front-facing softbox lighting. No backlighting, no rim light. Diamonds are the brightest focal points in the frame.\n\nRender: Octane Render quality, cinematic 8K, sharp edges, masterpiece level, no text or watermarks, 4:5 aspect ratio.",
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
    "prompt": "Ultra-cinematic product photography of a neon-green energy drink can labeled \"VOLT RUSH\", tilted at a sharp diagonal, bursting through glowing citrus slices and electric sparks. Frozen lime juice splashes and ice shards suspended mid-air, micro droplets clearly visible. High-contrast studio lighting with green neon rim lights, deep dark background, glossy aluminum surface, shallow depth of field, photorealistic, 8K, premium advertising style.",
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
    "prompt": "Cinematic GQ Style magazine cover — male model with a dark beard and messy curly dark hair, leaning against a vintage 1960s silver convertible on a misty, overcast beach. He stares directly into the camera with a cool, intense expression. Outfit: oversized black leather bomber jacket with utility pockets worn open over a white ribbed tank top, high-waisted black trousers with double-buckle belt, two thin gold necklaces with small pendants hanging mid-chest. Background: shallow depth of field, desaturated sandy shore, pale hazy sky, polished metallic silver car reflecting flat diffused light. Lighting: moody cinematic grade, muted earth tones, blacks, and silvers, high-end film grain throughout. Typography overlay: bold white \"GQ Style\" serif logo at the top, smaller white sans-serif \"HEISENBERG\" on the mid-left.",
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
    "prompt": "Photorealistic sci-fi portrait, young woman in left-facing side profile, dressed in a mirror-finish chrome-blue jacket and a futuristic helmet with a wide glossy visor obscuring her eyes. Helmet features smooth curves, white trim, clear side panels with subtle tech detailing. Visor has a cool blue reflective sheen, cyberpunk meets space-age fashion. Clean, minimal framing against a gradient blue backdrop. Cinematic studio lighting, high contrast, mirror-like reflections across jacket and helmet surfaces. Razor-sharp detail on facial features and material textures, slight bokeh, 8K resolution, hyper-realistic editorial aesthetic.",
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
    "prompt": "Create a 3:4 vertical watercolor urban sketch travel poster on textured handmade watercolor paper.\n\nCity input:\n[CITY NAME]\n\nCreate a romantic everyday scene reflecting the real architecture, landmarks, street life, climate, and cultural mood of [CITY NAME]. Use recognizable city-specific elements such as local buildings, cafes, balconies, canals, bridges, trams, towers, rooftops, tiles, waterfronts, street furniture, plants, or signs. Avoid generic European scenery or incorrect landmarks.\n\nMain scene:\nShow two lovers as the main subjects, placed slightly below center. They may be walking, sitting at an outdoor cafe, sharing iced coffee, standing near the water, looking at a view, or gently holding hands. Their pose should feel natural, affectionate, quiet, and unposed. Do not show a single person.\n\nCharacters:\nDress the couple in stylish casual summer clothing suited to [CITY NAME]: linen shirts, light cardigans, relaxed trousers, summer dresses, sneakers, sandals, sunglasses, crossbody bags, tote bags, cameras, pastries, or iced drinks. Use mostly white, pale blue, aqua, and soft gray-blue clothing with one or two small lemon-yellow accents. Add gentle wind movement to hair and loose fabric.\n\nComposition:\nUse a clean vertical poster layout with large negative space and an airy editorial feel. Keep the couple small to medium in scale, framed by city-specific architecture or scenery. Place buildings and landmarks in the background or along the sides, softly blended into the paper texture. Keep the upper half bright and open, with the upper right reserved for typography.\n\nTypography:\nIn the upper right corner, add the city name in elegant italic English lettering:\n\"[CITY NAME]\"\n\nDirectly below, add one short poetic English sentence matching the city's fresh summer mood. Use delicate soft cobalt, gray-blue, or muted navy lettering. Keep it minimal, readable, and naturally integrated into the paper.\n\nColor direction:\nUse a refreshing blue-and-yellow summer palette:\n\n75% cool blues and blue-grays: sky blue, cyan, pale aqua, powder blue, faded turquoise, soft blue-gray, selective cobalt.\n\n15% clean white and warm off-white paper highlights.\n\n10% pale lemon yellow, soft butter yellow, sunlit cream, or light golden accents.\n\nBlue should dominate while yellow adds warmth and visual rhythm. Use yellow only as accents in awnings, window light, flowers, umbrellas, pastries, signs, clothing details, drink labels, or sunlit building edges. Avoid an all-blue flat background.\n\nWatercolor technique:\nUse translucent washes, soft blue bleeding, subtle pigment granulation, wet-on-dry textures, gentle brush blooms, pale shadows, visible handmade paper texture, minimal splashes, and delicate reflections where appropriate. Yellow washes should feel like light touching paper.\n\nDrawing detail:\nUse delicate thin ink line art with slightly imperfect hand-drawn lines. Add refined urban sketch details: windows, shutters, balconies, streetlamps, cafe chairs, paving stones, railings, plants, clothing folds, hair strands, hands, shoes, bags, cups, signs, and soft ground marks. Keep faces softly suggested, not realistic.\n\nMood and quality:\nMinimalist watercolor urban sketch, romantic summer travel poster, quiet love story, city-specific atmosphere, breezy blue palette with lemon-yellow highlights, elegant fashion illustration, cozy slice-of-life, Japanese-inspired softness, premium editorial look, calm pastel mood, soft natural lighting, clean background, poster-ready, 8K.\n\nNegative prompt:\nsingle person, generic city, incorrect landmarks, all-blue background, monochrome blue, lifeless colors, yellow-dominant, orange-heavy, brown-dominant, dark vintage, muddy beige, neon colors, oversaturated colors, photorealistic, 3D render, heavy outlines, harsh shadows, crowded street, cluttered background, realistic faces, stiff pose, awkward anatomy, glossy texture, bold typography.",
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
    "prompt": "Create a world-class collector's edition Cristiano Ronaldo poster inspired by premium offset printing, editorial publishing, and award-winning graphic design. The composition is dominated by a monumental close-up portrait of peak Real Madrid Cristiano Ronaldo occupying nearly seventy-five percent of the composition. His iconic hairstyle, sharp jawline, and confident expression should be rendered with extraordinary realism.\n\nThe core visual concept explores the beauty of CMYK printing itself. Instead of ordinary colour grading, the portrait should subtly separate into overlapping cyan, magenta, yellow, and black print layers only around selected edges, creating sophisticated registration effects found in premium printing houses. The effect should feel handcrafted and luxurious rather than digital glitch art.\n\nMassive editorial typography should integrate naturally with the portrait while printer crop marks, colour calibration bars, registration targets, production notes, paper codes, and printing specifications become part of the graphic language.\n\nThe palette is dominated by warm paper white with controlled CMYK colour accents. Rich paper grain, tactile ink textures, subtle overprint effects, premium offset realism, museum-quality print production, elegant editorial hierarchy, Behance Featured Project quality, contemporary sports branding, collector-edition masterpiece.",
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
    "prompt": "[BRAND NAME]\n\nYou are a senior vector designer specializing in Y2K Harajuku badge art. Your world: Tokyo bootleg culture, early 2000s Japanese brand remixes, retro-futuristic sticker aesthetics. Every output should look like a clean Illustrator vector file, flat and sticker-ready. The badge structure must be invented fresh for each brand, not templated.\n\nBRAND ANALYSIS\n\nBefore designing, resolve all of the following: (1) PRIMARY COLOR — brand's main color softened into a pastel Y2K version, still recognizable but lighter and more kawaii; (2) ACCENT COLOR — brand's secondary color pushed to warm saturation for energetic pop; (3) DARK COLOR — deep brand palette (navy, dark brown, near-black) used for outlines and extrusions; (4) LETTER CONTENT — brand name in bold lowercase or most iconic abbreviation; (5) KATAKANA — correct Japanese transliteration as a secondary text element; (6) ORIGIN FLAG — brand's country of origin flag as a small flat element; (7) SHAPE LANGUAGE — iconic geometric forms from the brand's visual identity used as orbital and background elements, never generic ovals; (8) CULTURAL SYMBOLS — 1-2 small iconic objects from the brand's universe rendered as tiny flat illustrations; (9) COMPOSITION LOGIC — design the badge layout using everything above so it feels invented specifically for this brand.\n\nCANVAS\n\n1:1 square. Flat off-white or warm light grey background. Completely empty, no texture, no gradient.\n\nBADGE STRUCTURE\n\nUsing the resolved shape language and composition logic, build the full badge. Fixed rules: central lettering element, surrounding brand-specific shapes with z-layer stacking, at least one element passing both behind and in front of the letters for depth, and a unified badge or patch silhouette. The shapes must feel inevitable, as if they could only belong to this brand. Everything else is determined by the brand's own visual DNA.\n\nLETTERING\n\nBrand name in large bold lowercase with a wide rounded display typeface. Flat PRIMARY COLOR fill. Thick DARK COLOR extrusion offset down-right at 8-12% of letter height. Bold DARK COLOR outline. No gradients, no rendering.\n\nY2K SIGNATURE ELEMENTS\n\nEvery badge must include: SPEED LINES or motion texture in ACCENT COLOR inside background shapes. SHARP 4-POINT STAR as a decorative accent near the lettering in DARK COLOR. KATAKANA transliteration tucked naturally into the composition. ORIGIN FLAG as a small accurate flat element. BRAND CULTURAL SYMBOL rendered as a tiny flat illustration integrated into the badge.\n\nTECH SPECS\n\nFlat vector only. Zero gradients, effects, blur, or rendering. Clean crisp edges throughout. Maximum 4 colors: PRIMARY pastel, ACCENT warm saturated, DARK outline, off-white. Must feel like a collectible sticker or embroidered patch. Every brand produces a structurally different badge because every brand has different shape language. The Y2K Japanese aesthetic is the constant, the structure is the variable.",
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
    "prompt": "Generate a {argument name=\"grid layout\" default=\"4x3\"} seamless grid layout where every panel shows a separate scene featuring the {argument name=\"subject\" default=\"a young woman\"}. Keep subject appearance, colors, and lighting perfectly consistent across all panels. Theme: {argument name=\"theme\" default=\"childhood memories\"}, mood: {argument name=\"mood\" default=\"warm, nostalgic\"}, style: {argument name=\"style\" default=\"nostalgic cinematic realism\"}. No text, no gaps.",
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
    "prompt": "Create a clean, child-friendly educational vocabulary poster for preschool/kindergarten children, inspired by a simple visual learning card.\n\nFeature [FRUIT] as the main large realistic object on the left, and show a [PART / SLICE / SEGMENT] of the same fruit on the right. Connect the two with a playful dotted curved arrow and a tiny simple stick-figure child pointing toward the smaller part.\n\nAdd the word “[FRUIT NAME]” in large bold uppercase letters at the top and “[PART NAME]” in large bold uppercase letters underneath the smaller image. Use a soft white and very light pastel-blue background, rounded image panels, clean spacing, realistic fruit photography, simple blue typography, and minimal playful illustrations.\n\nThe overall design should feel bright, educational, modern, uncluttered, and easy for young children to understand, like a premium preschool vocabulary learning card. Vertical 4:5 composition, high resolution, soft lighting, clear labels, no unnecessary decorations.",
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
    "prompt": "Turn the reference photo into a travel souvenir enamel pin badge. Compose it as a SCENE, not a single isolated object.\n\nSubject hierarchy: the defining landscape, terrain or landmark of the photo forms the main body of the badge and occupies most of its area. If a person appears prominently in the photo, keep them in the badge as a small, simplified figure at true relative scale within that landscape — the person is an accent, the landscape is the subject. Preserve the original spatial relationship and scale between the figure and the surroundings.\n\nHow to render the person: flat enamel color blocks matching their real clothing and hair color from the photo. The face is a smooth plain area of light skin-tone enamel with no drawn facial features — do NOT render the person as a dark or black silhouette, and do NOT black out the face or head. Skin reads as a warm light enamel color, clearly lighter than the clothing.\n\nStyling: thin polished gold outline around the silhouette and along every internal divider, glossy enamel color fill, gentle even lighting with only a soft sheen on the gold lines, very subtle drop shadow. Outer contour follows the scene's own shape, not a plain rectangle.\n\nBackground: flat dark navy coarse linen texture. Badge centered, filling about 60% of the frame.\n\nAvoid: black silhouette figure, blacked-out face, dark featureless head, portrait close-up, detailed facial features, person dominating the badge, cropping out the landscape, three-quarter angle, macro product photography, heavy specular glare, cartoon, realistic scene, text, watermark.",
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
    "prompt": "High-contrast black and white typographic portrait poster of [HUMAN], shown in side profile with [FEATURE]. Build the portrait with bold black silhouette blocks, sharp negative space, rough ink edges, fragmented stencil shapes, tiny editorial microtext, vertical typographic accents and expressive hand-drawn calligraphic marks. Integrate one large readable text block saying “[TEXT]” in 2 to 4 stacked lines, placed only inside the neck and body area, using oversized scribbled lettering that feels fused into the silhouette. Include a graphic design logo reading “[LOGO]” near the footer. Minimal off-white paper background, asymmetrical layout, cropped vertical composition, experimental editorial poster design, raw ink print texture, aspect ratio 4:5.",
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
    "prompt": "Transform the uploaded photo into a vertical mixed-media memory card with a strict 50/50 split.\n\nKeep the original photo unchanged in the top half. In the bottom half, use textured off-white handmade paper and add a muted, irregular color patch matching the photo’s tones.\n\nRedraw the main subjects as a simple dark wax-crayon sketch with loose, imperfect lines and minimal details. Add a short handwritten English phrase and subtle Risograph grain.\n\nCreate a quiet, nostalgic Morandi-style aesthetic with generous negative space. Do not add extra elements or copy the reference composition exactly.",
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
    "prompt": "Create a visually unforgettable editorial art poster of a dreamlike futuristic world where familiar everyday life meets surreal architecture. Grand sculptural buildings, winding roads, oversized plants, tiny people, unexpected floating elements, dramatic perspective, cinematic atmosphere, and one iconic focal point. Blend vintage travel-poster design with modern luxury editorial aesthetics, sophisticated muted colors, soft natural light, subtle film grain, tactile paper texture, clean geometric shapes, minimal composition, nostalgic yet futuristic, whimsical but premium, highly detailed, instantly recognizable silhouette, Pinterest-worthy, Instagram-viral aesthetic, collectible art print, no clutter, no photorealism, vertical 4:5.",
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
    "prompt": "Raw sketchy graphic portrait poster of [HUMAN] wearing [CLOTHING], half-body and large in frame, accompanied closely by [ANIMAL], with a minimal [SCENERY] background. Render in a rough expressive illustrated style with broken black ink contours, loose sketch lines, scratchy hatching, irregular stroke weight, imperfect line edges, fast gestural mark-making, simplified anatomy, flat cel-like shadow blocks, and reduced detail. Use a restrained [COLORS] palette with one dominant warm field, one cool counter-field, dark inked shadows, and a few pale highlight accents. Keep the face oversized and central, crop around mid-torso, and place the animal in the lower foreground or tucked beside the subject, drawn with the same simplified raw linework. Reduce the scenery into only 2 or 3 bold silhouette shapes behind the subject, with no detailed environment rendering. Add a narrow warm off-white poster border and very light print texture. Strong attitude, graphic poster energy, intentionally imperfect strokes, raw and sketchy finish, ar 4:5",
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
    "prompt": "Rubber Stamp Travel Field Notes Poster — Natural Realism Version\n\nCreate a separate “Rubber Stamp Travel Field Notes Poster” for each photo I upload. Output each photo individually. Never create a collage or combine multiple photos.\n\nUse a 4:3 landscape composition with a natural visual transition between the original photograph on the left and the aged-paper field-note area on the right. Do not add an obvious dividing line.\n\nLEFT — ORIGINAL PHOTOGRAPH\n\nThe left side should occupy roughly 58% of the frame.\n\nKeep the uploaded photograph visually authentic and recognizable. Preserve the original subject, perspective, terrain, architecture, plants, people, spatial relationships, natural light, shadows, textures, and overall atmosphere.\n\nDo not redesign or reinterpret the photograph.\n\nOnly apply a very subtle editorial photo treatment: gentle tonal balancing, restrained color grading, slightly softened highlights, and extremely fine natural film grain. It should still look like a real photograph taken on location rather than an AI-generated image.\n\nNatural cropping is allowed if needed to fit the 4:3 layout, but do not stretch, distort, move, replace, or redraw the main subject.\n\nAvoid excessive sharpness, HDR effects, artificial clarity, cinematic color grading, or overly perfect details.\n\nRIGHT — AGED PAPER FIELD NOTES\n\nThe right side should occupy roughly 42% of the frame.\n\nUse warm off-white, slightly aged paper with a believable physical texture. Include very subtle paper fibers, fine grain, faint handling marks, and a matte surface.\n\nKeep large areas completely unprinted.\n\nThe paper should feel like a real sheet from an architect's travel notebook or field journal, not a designed poster background.\n\nAvoid overly strong stains, decorative textures, vintage filters, or artificial grunge.\n\nSMALL RUBBER STAMP\n\nStudy the uploaded photograph and identify only the few visual features that make the location immediately recognizable.\n\nReduce them into a compact, imperfect multi-color rubber stamp impression.\n\nDo not reproduce the photograph element by element.\n\nSimplify aggressively and retain only the most meaningful visual relationships:\n\n- distinctive architecture and silhouette\n- important roof, tower, dome, arch, or structural shape\n- mountain or terrain contours\n- shoreline or road direction\n- a few recognizable trees or vegetation forms\n- simplified settlement layers\n- one or two important foreground shapes when visually relevant\n\nRemove crowds, cars, dense windows, repetitive buildings, tiny vegetation, decorative objects, and insignificant background details.\n\nThe result should look like something a traveler could have actually carved into a small rubber stamp, not a miniature illustration of the entire photograph.\n\nPlace the stamp in the lower-middle portion of the right paper area, occupying approximately 30–38% of the right section's height.\n\nKeep generous blank paper around it.\n\nDo not enlarge it into a large illustration.\n\nSTAMP COLOR & PRINT CHARACTER\n\nExtract approximately 2–4 muted spot colors naturally from the original photograph.\n\nPossible colors include:\n\n- carbon black\n- deep green\n- brick or muted red\n- ochre\n- slate blue\n- taupe or earthy brown\n\nDo not force these colors if the photograph suggests a different restrained palette.\n\nEach color should appear as a separate physical ink layer.\n\nMake the print feel genuinely handmade:\n\n- slightly uneven pressure\n- tiny gaps in the ink\n- dry areas\n- paper showing through\n- rough carved edges\n- irregular line thickness\n- small contour breaks\n- granular ink texture\n- faint ghosting\n- slight natural color-layer misregistration\n- subtle edge variation\n\nThe imperfections should be small and believable, as if the stamp was pressed onto paper by hand.\n\nAvoid perfectly aligned digital layers, smooth vector edges, clean gradients, or artificially exaggerated distress.\n\nThe stamp should look physically printed, not digitally illustrated.\n\nFIELD-NOTE TYPOGRAPHY\n\nGenerate a small amount of text based only on the actual location and imagery in the photograph:\n\nLocation — English name\nNo. — Number\nThree short English keywords\nGregorian calendar year\n\nPlace the text below or beside the stamp within the available whitespace.\n\nUse a small, understated typewriter or archival field-note style.\n\nThe typography should have very slight mechanical irregularity, as though typed or printed on an old field notebook.\n\nKeep it quiet and secondary to the photograph.\n\nSpell the location and all words correctly.\n\nDo not add slogans, brands, tourist phrases, decorative quotes, or unnecessary text.\n\nOVERALL REALISM\n\nThe finished image should feel like a real travel photograph mounted beside a small handmade field stamp on an architect's personal notebook page.\n\nPrioritize subtle physical realism over visual perfection.\n\nThe photograph should remain the strongest visual element.\n\nThe stamp should feel like a small fragment of memory extracted from the photograph rather than a second illustration.\n\nUse restrained contrast, natural imperfections, believable paper texture, and slightly imperfect printing.\n\nThe final result should feel quiet, tactile, documentary, collectible, and genuinely handmade.\n\nAvoid\n\nObvious dividing lines, circular seals, postage-stamp borders, perforations, wax seals, sticker layouts, souvenir-card designs, generic travel templates, smooth vector logos, polished digital illustrations, cartoon styling, 3D rendering, plastic textures, glossy gradients, excessive saturation, HDR effects, excessive text, decorative clutter, overly clean geometry, perfectly aligned ink layers, dense miniature architecture, or any alteration/redrawing of the original photograph.",
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
    "prompt": "Use case: stylized-concept\nAsset type: vertical social-media artwork for the “Your Dark Side” theme\n\nCreate an original psychological dark-surrealist scene in a colossal underground archive. Endless shelves of sealed black books rise like skyscrapers and vanish into fog. In the central aisle, a solitary human figure in bone-white clothing kneels before one open book on the floor. No words are visible. From the blank pages rises a delicate life-size figure made entirely of dense black smoke, standing face-to-face with the kneeling person. The smoke figure has no eyes or mouth; instead, its chest contains a small locked crimson door. Thin threads connect that door to the kneeling person’s hands, suggesting a secret self finally acknowledged.\n\nVertical 9:16 framing, towering shelves create a narrow symmetrical canyon, high-angle shaft of cold silver light, the two figures positioned small in the lower center, immense oppressive scale above them. Black paper, aged stone, floating ash, volumetric fog, subtle polished-floor reflections, premium photorealistic dark concept art, refined editorial composition, quiet dread and introspection rather than horror spectacle.\n\nColor palette: obsidian black, graphite, bone white, cold silver, a single muted crimson accent at the tiny door.\n\nConstraints: entirely original metaphor; blank book pages with absolutely no writing; no recognizable person; no text, symbols, logos, signatures, borders, or watermark.\n\nAvoid: visible letters or runes, portrait close-up, split face, black substance on skin, glowing eyes, gore, skulls, conventional ghosts, fantasy wizard styling, imitation of any named artist.",
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
    "prompt": "{\n  \"title\": \"WHISPERS OF SPRING\",\n\n  \"scene\": \"A peaceful pathway beneath blooming cherry blossom trees during a warm spring afternoon. Pink blossoms fill the canopy overhead while delicate petals drift gracefully through the air. Soft sunlight filters through the branches, creating a dreamy and enchanting atmosphere.\",\n\n  \"subject\": \"A young woman walks away from the camera before gently turning her head over her shoulder with a soft, mysterious smile. She wears a flowing natural linen dress that moves gracefully with the breeze, highlighting her delicate facial features and effortless elegance.\",\n\n  \"detail\": \"Wind carries countless pink cherry blossom petals across the frame while warm sunlight creates glowing highlights throughout the scene. Every strand of hair moves naturally in the breeze, with ultra realistic skin texture, lifelike fabric folds, soft floral surroundings, and subtle atmospheric haze enhancing the cinematic realism.\",\n\n  \"atmosphere\": \"Elegant, peaceful, romantic, dreamy, timeless, cinematic, graceful, and enchanting.\",\n\n  \"lighting\": \"Warm spring sunlight filtering through cherry blossom branches, soft natural illumination, glowing highlights, volumetric light rays, gentle ambient shadows, and subtle atmospheric haze.\",\n\n  \"composition\": \"Cinematic editorial portrait captured with an 85mm lens, featuring the subject in a three-quarter over-the-shoulder pose. Shallow depth of field, creamy bokeh, balanced framing with flowering trees, soft leading lines, and immersive visual storytelling.\",\n\n  \"style\": \"Photorealistic, masterpiece, editorial fashion photography, analog film aesthetic, dreamy pastel color palette, ultra realistic skin texture, highly detailed, shallow depth of field, creamy bokeh, atmospheric haze, HDR, cinematic realism, 8K.\"\n}",
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
    "prompt": "Create a 12-panel grid (3 columns × 4 rows, numbered 1 to 12) showing the SAME person from the reference photo with 12 different hairstyles. This is a hairstyle lookbook. Final image aspect ratio: 4:5 (vertical/portrait).\nTHE ONLY THING THAT CHANGES BETWEEN PANELS IS THE HAIR ON THE HEAD (shape, style and length only). Everything else stays exactly as in the reference photo.\nIdentity Anchor (Critical)\nThe face must be IDENTICAL to the reference photo in every single panel. Preserve exactly: facial bone structure, jawline, cheekbones, nose shape, lips, eye shape and spacing, eyebrows, skin tone, skin texture (pores, natural imperfections), and overall facial proportions. This is the same real person in all 12 frames. Do NOT beautify, slim, or alter the face. Same age, same expression as in the reference.\nMandatory Rules (Do Not Violate)\n- NO SUNGLASSES. Eyes must be fully visible in all 12 panels.\n- NO ENVIRONMENTAL BACKGROUNDS. Every panel must have a plain, uniform, solid light grey studio backdrop with zero objects, zero textures, zero gradients. Just flat neutral grey.\n- Hair COLOR stays exactly as it appears in the reference photo in all 12 panels. Only the shape, length and style changes, never the color.\nKeep Identical in Every Panel (Do Not Change)\n- MAKEUP AND SKIN: If the person in the reference photo wears makeup, replicate it identically in every panel. Same lip color, same eye makeup, same brow grooming. If they wear no makeup, keep all panels makeup-free. Do NOT add, remove, or alter makeup between panels.\n- Clothing: the same clothing visible in the reference photo, replicated exactly.\n- Accessories: preserve ALL visible accessories from the reference photo (earrings, necklaces, rings, bracelets, piercings, watch, glasses, etc.). Do not omit, resize, recolor, or restyle any accessory. If the person wears prescription glasses (not sunglasses), keep them in every panel.\n- Background: plain solid light grey studio backdrop in every panel. No room, no furniture, no environment.\nThe 12 Hairstyles\n1. Pixie cut: very short, textured, slightly tousled on top with tapered sides and nape\n2. Classic bob: chin-length, straight, blunt ends, clean middle part\n3. Long layered waves: past the shoulders, soft voluminous waves with face-framing layers\n4. Sleek low bun: hair pulled back smoothly into a tight low bun at the nape, no flyaways\n5. Curtain bangs with medium-length hair: soft parted fringe framing the face, hair falling just past the shoulders\n6. High ponytail: hair pulled up into a sleek high ponytail, smooth crown, length falling behind\n7. French bob: short bob ending at the jawline with a soft blunt micro-fringe across the forehead\n8. Long straight hair with middle part: very long, sleek, pin-straight, falling well past the shoulders\n9. Shaggy wolf cut: medium length, heavy layers, choppy fringe, textured and voluminous with a slightly wild look\n10. Elegant updo: hair swept up into a polished chignon with soft face-framing tendrils\n11. Short curly crop: short voluminous curls all over, natural texture, tapered at the sides\n12. Side-swept Hollywood waves: long glamorous deep side part, sculpted vintage waves cascading over one shoulder\nPhotographic Specs\nShot on a Canon EOS R5 with an 85mm f/1.4 lens, studio portrait lighting (soft key light, subtle fill), shallow depth of field with sharp focus on the face. PLAIN SOLID LIGHT GREY STUDIO BACKGROUND in every panel. Natural skin rendering with visible pores and realistic hair strands (no plastic or CGI look). Consistent lighting, color grading and exposure across all 12 panels. Photorealistic, high detail, hyperrealistic, 8K. No illustration, no painterly effect, no over-smoothing. NO SUNGLASSES.\nEach panel clearly numbered 1 to 12 in the top-left corner. Overall output aspect ratio 4:5.",
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
    "prompt": "Create a medium-sized 9:16 experimental editorial portrait poster using the following customizable inputs:\n\nSubject: [Adult Male or Female Portrait]\nInterference: [Color Split / Narrow Light Beam / Horizontal Cut / Motion Veil]\nTitle: [Title]\nPalette: [Main Neutral Tones + One Accent Color]\nMood: [Sharp / Cinematic / Restrained / Experimental]\n\nCreate a striking close-up or waist-up portrait with the subject occupying a strong portion of the frame. Preserve realistic facial features, natural skin texture, authentic hair, realistic proportions, clear emotion, and a strong silhouette. The portrait must work visually as a fashion photograph before the graphic intervention is applied.\n\nUse only one primary interference method:\n\nColor Split: Uneven translucent bands selectively shift, reveal, separate, or distort portions of the portrait.\n\nNarrow Light Beam: A single controlled beam cuts across the face or body and continues naturally into the surrounding space.\n\nHorizontal Cut: Bold horizontal bands interrupt selected areas of the portrait and interact with oversized typography.\n\nMotion Veil: Keep the main portrait sharp while selected areas create subtle horizontal photographic motion trails.\n\nMake typography an integral part of the composition. Use one dominant headline, allowing letters to crop beyond the frame, overlap the subject, disappear behind the body, or interact with the interference.\n\nKeep supporting text minimal: one small series label and one short phrase.\n\nUse mostly black, white, grey, charcoal, or deep neutral tones, plus one accent color. Keep skin tones natural and avoid excessive warmth or yellow grading.\n\nAdd only a few subtle graphic details such as fine lines, circles, or open corner marks when necessary.\n\nThe final composition should feel like a premium fashion editorial, contemporary photography poster, or experimental art-direction piece—clean, intentional, sophisticated, and visually balanced.\n\nAvoid multiple competing effects, dense text, UI elements, heavy glitches, random collage, excessive decoration, numbering, “Vol.” or “Issue” labels, sparkle symbols, logos, watermarks, distorted anatomy, plastic skin, oversaturation, and generic template aesthetics.\n\nKeep the overall treatment medium in scale, refined, adaptable, and universally applicable to different people, titles, themes, palettes, and editorial concepts.",
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
    "prompt": "Transform the subject from the reference image into a cute, quirky hand-drawn doodle illustration.\n\nUse a minimalist children’s storybook / fashion sketch aesthetic with loose, imperfect black ink lines, visible scribbly pencil strokes, subtle cross-hatching, and a charming handmade feel. Keep the character’s recognizable facial features, hairstyle, face shape, clothing, accessories, and overall identity from the reference while simplifying them into a cute illustrated character.\n\nCharacter design:\n- Oversized head and small simplified body\n- Simple dot-like eyes and tiny minimal mouth\n- Soft rounded facial features\n- Slight rosy pink blush on the cheeks\n- Messy, expressive hand-drawn hair with many loose sketch lines\n- Slightly exaggerated, playful proportions\n- Natural, relaxed pose with a whimsical fashion-illustration feel\n\nArt style:\n- Black-and-white pencil/ink doodle drawing\n- Rough, imperfect sketch lines rather than clean digital outlines\n- Dense scribbled hair and clothing details\n- Light hand-colored accents\n- Subtle watercolor/crayon-like coloring\n- Minimal shading\n- White or off-white clean background\n- Lots of negative space\n- Cute, innocent, playful, cozy aesthetic\n- Looks like an original handmade notebook/fashion doodle illustration\n\nPreserve the important details of the reference image while converting everything into this consistent doodle-art style. The final image should feel hand-sketched, slightly imperfect, adorable, expressive, and effortlessly stylish, not like polished vector art or 3D cartoon art.",
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
    "prompt": "Create a Cannes-level premium summer beverage campaign poster for a fictional lemon drink brand called \"LIMORA\", using a strict 2-column by 3-row grid layout with six perfectly aligned panels. Preserve the exact structural logic of the composition: each panel shows the same tiny ultra-realistic young woman on a bright sandy beach interacting with oversized lemons, lemon slices, lemon juice, or the final branded drink, while selected panels include a giant realistic human hand entering from above. The full poster must feel like one unified high-end advertising storyboard in motion, where the eye flows continuously from fresh citrus fruit to crafted beverage desire. The lemon product world must remain the absolute visual hero across all six panels.\n\nOverall composition:\nUse a clean six-panel grid with thin white dividers, equal panel proportions, consistent horizon line, consistent beach-ocean background, and unified lighting. Every panel should feel self-contained yet rhythmically connected, as if six consecutive scenes from the same luxury summer commercial were frozen at their most iconic moments. Keep the miniature woman and the oversized lemon-related object centered in each frame, with the sea softly blurred in the background and the sand sharply rendered in the foreground. The full page must read instantly from a distance, with strong commercial clarity and polished editorial control.\n\nOrbit visual flow:\nDesign the entire set around one strong circulation of motion from panel 1 to panel 6. The action should escalate visually: touch, recline, squeeze, travel, embrace, taste. Use repeating directional rhythms in hair movement, arm gestures, leg angles, juice droplets, spoon angle, lemon slice placement, straw tilt, and the position of the entering hand so the eye naturally sweeps across the poster in a flowing wave. Build subtle diagonal energy inside every panel, making the citrus world feel alive, breezy, sparkling, and in motion. The whole set should feel like summer energy orbiting around the brand’s lemon drink.\n\nNarrative panel sequence:\nPanel 1: the tiny woman hugs a giant whole lemon on the sand while a giant adult hand descends from above, delicately positioning the lemon. Her pose is lively and slightly off-balance, as if the scene has just begun.\nPanel 2: she reclines elegantly inside a halved lemon as though it were a luxury beach chaise, wearing dark sunglasses and holding a tiny parasol drink pick, while a floating lemon slice is lowered from above like a radiant citrus sun.\nPanel 3: a giant hand squeezes a vertically cut lemon from above, sending translucent juice streams and droplets downward in a sparkling arc. The woman reacts dynamically beneath it, arms raised, body tilted, caught in the middle of the citrus action.\nPanel 4: she rides in a small refined wooden cart piled with lemons, being pulled by a whimsical premium lemon-shaped creature or rolling lemon harness. The cart must feel physically grounded, artisanal, and stylish rather than cartoonish.\nPanel 5: the hero climax panel. A tall branded LIMORA lemonade glass dominates the frame, packed with ice cubes, lemon slices, pale sparkling liquid, condensation, a fresh green straw, and a refined cocktail umbrella. The tiny woman hugs the cold glass joyfully, and this panel must be the strongest product-selling moment in the entire composition.\nPanel 6: she sits inside a halved lemon while a large polished spoon descends from above carrying glossy lemon sorbet or crushed lemon ice, creating a final delicious serving beat with playful anticipation.\n\nHero product focus:\nThe real hero is the lemon beverage system: whole citrus fruit, sliced fruit, squeezed juice, ice, sparkling drink, sorbet, and premium serving details. Every lemon must feel hyper-real, fragrant, sunlit, juicy, and tactile, with detailed skin pores, subtle waxy oil sheen, translucent membranes, wet cut surfaces, and bright natural citrus pulp. The branded glass in panel 5 must be the most visually dominant product object in the set, with crystal-clear glass, refined original English branding reading \"LIMORA\", elegant condensation, premium ice refraction, and luminous pale-yellow drink clarity.\n\nCharacter design:\nDepict one recurring ultra-realistic miniature young woman across all six panels, wearing the same fitted green floral mini dress and white sandals, with long dark wavy hair and naturally expressive features. She must look like a real scaled-down human placed into a surreal oversized citrus world. Keep anatomy coherent and believable in every frame: correct head-to-body proportion, realistic shoulders, collarbones, arms, waist, hips, thighs, knees, calves, ankles, and feet, with perfectly formed hands and five fingers clearly visible. Her expressions should shift panel by panel: surprised delight, relaxed confidence, playful alarm, exhilaration, joyful refreshment, amused anticipation. Skin must remain photorealistic with pores, natural tonal shifts, faint knee and elbow texture, realistic skin elasticity, and no plastic AI beauty finish.\n\nLighting:\nUse bright premium seaside daylight with a soft upper-left sun direction and gentle atmospheric diffusion. Maintain luminous fresh summer lighting across all six scenes, with short, soft-edged shadows and crisp dimensional highlights. Juice droplets, lemon pulp, ice cubes, spoon edges, sunglasses, glass rim, and condensation should all catch clean sparkling highlights. Lighting must feel luxurious, refreshing, and physically consistent from panel to panel.\n\nMaterials:\nLemons: ultra-detailed peel pores, subtle dimpling, natural rind thickness, glistening wet pulp, believable cut translucency, realistic juice behavior.\nDrink glass: high-clarity premium glass, accurate refraction, heavy base, condensation beads, crisp logo print, ice transparency, sparkling carbonated liquid feel.\nSorbet and juice: glossy, semi-translucent, cold, wet, appetizing, physically accurate.\nDress: lightweight summer cotton with tiny green floral print, natural wrinkles, fabric tension, and wind-responsive edges.\nHair and skin: realistic strands, fine flyaways, natural shine, believable skin texture.\nLarge hand: realistic adult fingers, soft skin compression, natural nails, coherent scale perspective.\nCart and props: refined warm wood grain, polished wheels, believable joints and harness elements.\nBeach environment: fine sunlit sand with miniature footprints and pressure marks, soft shoreline blur, clean turquoise sea with pale foam.\n\nColor system:\nBuild the palette around lemon yellow, fresh citrus green, turquoise sea, pale sky blue, warm beach beige, crisp white highlights, and restrained natural skin tones. Yellow must remain the dominant hero color, supported by green and turquoise. Keep the image bright, appetizing, summery, clean, and internationally commercial. Avoid random accent colors.\n\nTypography and branding:\nDo not copy any text from the sample. Keep typography minimal and original. Place refined English branding only on the hero glass and optionally a tiny campaign line below the full grid, such as: \"LIMORA — Bright in Motion\". Typography must feel premium, modern, minimal, and secondary to the visual storytelling.\n\nArt direction:\nHyper-real premium surreal advertising photography, luxury FMCG campaign, storyboard energy, elegant humor, cinematic micro-world illusion, high-end beverage styling, global summer launch poster, polished magazine-grade finish, sharp product realism, strong narrative rhythm, premium brand coherence.\n\nNegative prompt:\ncopied text, Chinese text, existing brand names, cartoon style, toy-like figure, grotesque oversized head, deformed anatomy, extra fingers, missing fingers, fused fingers, twisted wrists, broken limbs, distorted feet, AI plastic skin, over-smoothed skin, fake citrus texture, unrealistic juice physics, muddy lemon pulp, cloudy glass, weak product focus, inconsistent lighting, inconsistent horizon, messy grid, cluttered props, meme aesthetic, cheap humor, childish illustration, low-resolution detail, oversaturated colors, dead black patches, distorted giant hand perspective",
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
    "prompt": "Create a luxurious, dreamy country travel-art collection in the exact visual language of an elegant premium tourism campaign: a large transparent crystal/glass architectural frame or arched glass display standing on a glossy reflective surface, containing a highly detailed cinematic illustration of the destination. For [COUNTRY], feature its most iconic landmarks, historic architecture, distinctive landscapes, local transportation, cultural elements, national flag, flowers and recognizable scenery arranged as one seamless poetic panorama. Use warm golden-hour sunlight, soft atmospheric haze, pastel cream, champagne, muted blue and sage tones, delicate clouds, subtle birds, realistic glass refraction and rainbow prism highlights along the edges. Create a perfect mirror reflection beneath the glass structure, extending the entire composition downward with beautifully softened reflections. Add elegant editorial typography at the top reading “[COUNTRY]”, with smaller refined text “THE SOUL OF [COUNTRY]” and “A JOURNEY THROUGH TIME • 2026” beneath it. Sophisticated luxury travel magazine aesthetic, photorealistic yet painterly, cinematic depth, fine-art composition, extremely detailed architecture, serene atmosphere, premium advertising photography, symmetrical balanced framing, soft film grain, 8K, vertical 4:5, no clutter, no modern UI elements, no extra text.",
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
    "prompt": "Transform ONLY the people in the uploaded photo into adorable hand-drawn doodle characters while keeping the original photographic background unchanged.\n\nCORE RULE:\nBackground = original realistic photo.\nPeople = cute hand-drawn doodle characters.\n\nPRESERVE THE BACKGROUND:\nKeep the original sky, landscape, buildings, water, furniture, ground, plants, railings, objects, lighting, colors, perspective, camera angle, framing, and textures as close to the original photo as possible.\n\nDo NOT redraw, simplify, illustrate, or apply doodle/crayon/pencil effects to the background or environmental objects.\n\nTRANSFORM ONLY PEOPLE:\nReplace each person with a charming, naive doodle version while preserving:\n- exact number of people\n- original position and relative scale\n- front/back/side/three-quarter orientation\n- head and body direction\n- pose and gesture\n- arm and leg positions\n- interactions with people or objects\n- hairstyle, clothing colors, and major accessories\n\nIMPORTANT:\nIf someone faces away, keep them back-facing.\nIf sideways, keep them sideways.\nIf facing forward, keep them forward.\nNever rotate a person toward the viewer or invent a face that is not visible.\n\nCUTE DOODLE STYLE:\nFreely reinterpret realistic anatomy into an adorable, imperfect character:\n- oversized round head\n- tiny compact body\n- short simplified arms and legs\n- tiny hands and feet\n- cute awkward proportions\n- loose scribbled hair\n- tiny dot eyes and simple facial features when visible\n- rosy scribbled cheeks when appropriate\n\nKeep the original pose recognizable, but simplify and slightly exaggerate it for cuteness.\n\nDRAWING STYLE:\nLoose naive hand-drawn doodle, like a quick children's sketch.\nUse thin shaky black outlines, imperfect shapes, overlapping sketch lines, scribbled colored-pencil or crayon fills, uneven coloring, white gaps, and slightly messy edges.\n\nThe character should look intentionally roughly drawn but extremely cute.\n\nOBJECTS:\nObjects, furniture, scenery, and items around the people should remain photographic whenever possible. A doodle character may naturally touch or hold a real photographic object.\n\nINTEGRATION:\nKeep correct scale, ground contact, depth, and occlusion so the doodle characters naturally occupy the same locations as the original people.\n\nFINAL LOOK:\nIt should feel like the real people were removed from the original photograph and replaced with adorable little hand-drawn doodle versions of themselves, while the real-world background remained untouched.\n\nPrioritize:\n1. Original photographic background\n2. Person position and scale\n3. Exact body orientation\n4. Pose and gesture\n5. Cute exaggerated doodle character design\n\nAvoid full-image illustration, background doodling, realistic anatomy, anime, manga, 3D cartoon, polished digital art, vector lines, changed poses, changed orientation, added people, or invented faces.",
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
    "prompt": "Create a dreamy ultra-photorealistic outdoor fashion photograph based on the person in @image1.\n\nIDENTITY & FACE:\nPreserve the exact facial identity of the person in @image1. Keep the same face shape, facial proportions, eyes, eyebrows, nose, lips, skin tone, hairstyle, hairline, and all recognizable facial features. The person must remain clearly recognizable and consistent with the reference image. Do not redesign or replace the face.\n\nPOSE & COMPOSITION:\nCreate a full-body vertical portrait of the person standing naturally on a grassy mountain ridge. The body is slightly turned toward the camera while the face looks naturally toward the viewer. One hand gently holds several long white strings attached to an enormous fluffy white cloud floating directly above the person like a whimsical balloon bouquet. The other hand rests naturally beside the body.\n\nSCENE:\nA breathtaking high-altitude mountain landscape with layers of distant blue-green mountains stretching across the horizon. The subject stands on a natural grassy ridge with delicate wild grass around her feet. Vast open sky dominates the upper portion of the composition.\n\nCLOUD BALLOON:\nCreate one enormous soft white cumulus cloud directly above the subject, visually resembling a giant floating cloud balloon. Multiple thin white strings descend from the cloud and gather elegantly into the person's hand. The strings should look physically believable and naturally connected to the cloud. The cloud is fluffy, voluminous, bright white, and beautifully illuminated by sunlight.\n\nCLOTHING:\nDress the person in a completely modest, elegant, fully covered outfit:\n\nlong flowing light-blue maxi dress reaching the ankles\n\nloose long sleeves covering the arms completely\n\nhigh and modest neckline\n\nopaque non-transparent fabric\n\nfull-length flowing skirt\n\nsimple white closed-toe sneakers\n\nsmall woven crossbody bag\nNo exposed midriff, no deep neckline, no sheer fabric, no short skirt, no revealing clothing. The outfit should look graceful, comfortable, elegant, and wholesome.\n\nACCESSORIES:\nAdd tasteful round dark sunglasses and a simple woven shoulder/crossbody bag. Keep accessories minimal and natural.\n\nHAIR:\nKeep the person's original hairstyle and hair color from @image1 as much as possible. Allow a few natural strands of hair to move gently in the mountain breeze.\n\nLIGHTING:\nBright natural midday sunlight, soft atmospheric illumination, realistic highlights on the white cloud and dress, subtle natural shadows, crisp but gentle exposure, beautiful blue-sky contrast.\n\nPHOTOGRAPHY STYLE:\nUltra-photorealistic professional travel-fashion photography, realistic skin texture, natural fabric details, physically accurate lighting, realistic depth of field, cinematic atmospheric perspective, high dynamic range, sharp subject with a softly detailed background.\n\nCOLOR PALETTE:\nSky blue, soft white, pale powder blue, natural green grass, and distant blue mountains. Clean, airy, dreamy color grading with a peaceful summer atmosphere.\n\nCOMPOSITION:\n9:16 vertical portrait, full body visible from head to shoes, subject positioned slightly below center, enormous blue sky and cloud occupying the upper half, distant mountains forming a soft horizontal horizon, balanced negative space, visually striking editorial travel photograph.\n\nIMPORTANT:\nPreserve the exact identity from @image1. Do not change the person's recognizable face or facial structure. Keep the outfit completely modest, opaque, and fully covering. Maintain realistic anatomy, natural hands, realistic proportions, and believable interaction between the person, strings, cloud, grass, and mountain environment.",
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
    "prompt": "Use the uploaded image as the primary reference. Transform the person into a cute, hand-drawn anime/chibi character while preserving the original person’s recognizable facial features, hairstyle, outfit, pose, and accessories.\n\nA cute young woman standing on a modern city street at blue hour, surrounded by tall illuminated skyscrapers and festive Christmas decorations. A huge glowing Christmas tree covered in warm golden lights stands directly behind her, creating a magical holiday atmosphere. The street is filled with elegant decorative lights, pedestrians, modern architecture, and soft evening city illumination.\n\nRender the character in a charming Japanese hand-drawn anime/chibi illustration style with expressive large eyes, soft blush on the cheeks, delicate facial details, textured pencil-and-ink outlines, subtle watercolor-like coloring, and slightly imperfect handmade sketch details. Keep the background photorealistic and highly detailed, creating a beautiful contrast between the illustrated character and the real-world environment.\n\nCinematic composition, natural perspective, soft evening lighting, warm Christmas glow, realistic background depth, detailed clothing texture, cozy winter atmosphere, high detail, aesthetically pleasing, vertical portrait composition.",
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
    "prompt": "Create a highly detailed, photorealistic miniature travel-poster diorama inspired by Rio de Janeiro, arranged as a handcrafted 3D paper scene on a warm ivory, slightly textured background.\n\nIn the foreground, a realistic human hand holds a vintage Brazilian travel ticket or Rio-themed transit card vertically on the left side. Give the card aged paper texture, subtle printing imperfections, elegant typography, and authentic-looking travel details. From behind the card, a miniature Rio de Janeiro landscape physically rises outward like an intricate pop-up diorama.\n\nMake Christ the Redeemer the dominant central landmark, positioned high above a miniature cityscape with lush green mountains surrounding it. Below, build a tiny realistic Rio street featuring a classic yellow taxi, colorful buildings, palm trees, pedestrians, cyclists, street lamps, tiled sidewalks, and small Brazilian urban details. Add Copacabana beach elements in the distance with tiny umbrellas, beachgoers, and a glimpse of the Atlantic Ocean. Layer the architecture and terrain so everything appears physically constructed from paper, wood, plaster, and miniature materials, with convincing depth, cast shadows, overlapping surfaces, and a slight three-quarter perspective.\n\nAround the main 3D scene, incorporate delicate black, charcoal, and muted sepia hand-drawn travel illustrations on the cream paper. Include a small Sugarloaf Mountain sketch in the upper left, an artistic Copacabana promenade illustration in the upper right, a detailed Selarón Steps sketch along the right side, and a small Ipanema beachfront skyline drawing near the bottom. Add subtle handwritten travel notes, tiny map markings, architectural outlines, compass symbols, postage-stamp details, and understated Brazilian travel annotations.\n\nKeep the composition refined rather than crowded. Blend realistic miniature photography with vintage travel-journal design, tactile paper fibers, faint ink bleed, imperfect hand-drawn lines, warm natural studio lighting, gentle shadows, subtle film grain, and a sophisticated cream, charcoal, muted green, ocean blue, and Brazilian yellow palette.\n\nThe final image should feel like a premium collectible Rio de Janeiro travel postcard transformed into a physical miniature world, with the central diorama sharply detailed and the surrounding illustrations slightly softer. Highly realistic human hand and fingers, believable miniature materials, cinematic product photography, editorial travel-magazine aesthetic, shallow depth of field, ultra-fine textures, photorealistic 3D details, vertical 4:5 composition, 8K quality.",
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
    "prompt": "A cinematic, ultra-realistic close-up portrait of a stylish man, using the provided image as an accurate face reference. Preserve his natural facial identity, thick naturally curly dark brown hair, neatly trimmed salt-and-pepper beard, strong masculine facial structure, and realistic facial proportions. He wears sophisticated round vintage amber-brown sunglasses and a premium deep burgundy suede jacket over a fitted black silk-knit shirt, creating a refined luxury fashion aesthetic.\n\nWarm cinematic studio lighting with a soft amber-golden key light illuminating the face from the front-left, complemented by a subtle crimson-red rim light outlining the hair and shoulders. The background is a rich burgundy, wine-red, and dark plum gradient, with soft atmospheric haze and subtle diffused light creating depth without distracting from the subject. Elegant warm highlights contrast beautifully against the dark clothing.\n\nExtremely detailed natural skin texture, individual beard hairs, realistic pores, subtle facial imperfections, sharp eyes visible behind slightly tinted lenses, natural reflections on the sunglasses, rich dimensional shadows, realistic fabric and suede texture, shallow depth of field. Sophisticated luxury fashion campaign, mysterious and confident mood, premium men's editorial photography, cinematic color grading, photorealistic, HDR, professional studio photography, 85mm portrait lens, f/1.8, crisp facial details, soft background bokeh, centered composition, head-and-shoulders framing, powerful masculine presence, understated elegance, 3:4 aspect ratio.",
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
    "prompt": "Create a premium whimsical handcrafted paper-collage diorama inspired exactly by the uploaded reference image.\n\nUse the uploaded girl reference as the ONLY human subject. Preserve her facial identity with maximum accuracy: exact face shape, eyes, eyebrows, nose, lips, skin tone, hairstyle, hairline, and recognizable facial features. Strict face identity lock — do not redesign, beautify, stylize, age, de-age, or replace her face.\n\nThe girl stands alone in the center of the composition in a graceful, natural editorial pose. She is facing the camera with a relaxed confident expression and a subtle natural smile. Her body is slightly angled, creating a candid fashion-editorial feeling. She holds a beautiful small mixed bouquet of flowers naturally with both hands in front of her. One leg is slightly crossed in front of the other for an elegant relaxed pose.\n\nOutfit\n\nChange the outfit completely from the original reference while keeping it fully modest and elegant:\n\n- elegant ivory/cream long-sleeve button-up blouse\n- high-waisted wide-leg beige trousers\n- full-length trousers with complete coverage\n- simple cream closed-toe shoes\n- small brown leather shoulder bag\n- no revealing clothing\n- no exposed midriff\n- sophisticated countryside editorial fashion\n- natural realistic fabric folds and texture\n\nEnvironment\n\nCreate a beautiful handcrafted 3D paper-diorama countryside scene:\n\n- layered blue mountains in the distance\n- green forest and rolling hills\n- peaceful blue lake\n- grassy lakeside landscape\n- textured beige paper pathway in the foreground\n- rustic white wooden fence behind the girl\n- dreamy pastel sky\n\nSurround the composition with oversized handmade paper flowers in pink, peach, cream, white, and light blue, with layered green paper leaves.\n\nAdd decorative paper elements floating in the sky:\n\n- pink paper hearts\n- yellow paper stars\n- blue stars\n- soft white and pale-blue clouds\n- tiny colorful paper dots\n\nPlace two tiny vintage vehicles near the lake in the background: a cream vintage camper van on one side and a small vintage blue-green car on the other.\n\nArt Direction\n\nThe entire environment should look handcrafted from premium textured paper while the girl remains photorealistic and seamlessly integrated into the paper world.\n\nUse:\nhand-torn paper edges, visible paper fibers, layered cardstock, subtle imperfections, realistic paper shadows, dimensional cut-paper elements, tactile textures, soft natural daylight, cinematic depth, gentle atmospheric perspective, premium editorial photography.\n\nThe final image should feel like a luxury handmade paper storybook brought to life with a real photographic subject.\n\nComposition\n\nCentered full-body girl\nFace clearly visible and sharply detailed\nNatural elegant pose\nBouquet held naturally\nRustic fence framing the subject\nLake and mountains creating depth\nLarge flowers framing both lower corners\nClouds and decorative elements filling the upper background\nBalanced symmetrical composition with organic handmade imperfections\nGirl remains the strongest focal point\n\nFinal Look\n\nPhotorealistic girl + handcrafted paper-art environment\nDreamy pastel colors\nLuxury editorial aesthetic\nWhimsical miniature diorama\nSoft cinematic daylight\nHighly detailed paper textures\nNatural realistic skin\nSharp facial identity\nProfessional fashion photography\nPinterest/Instagram viral visual aesthetic\nMagazine-quality composition\n\nVertical 4:5 portrait composition, full-body framing, ultra-detailed, high resolution, clean polished finish, visually striking, aesthetically balanced, premium handcrafted paper-collage photography.",
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
    "prompt": "Create a vertical editorial travel illustration inspired by vintage European travel posters, featuring a peaceful summer afternoon in a grand city park with a recognizable Manhattan-style skyline in the background. Use delicate hand-drawn ink outlines combined with soft, slightly imperfect watercolor washes on warm textured cream paper. Show a wide green lawn filled with people relaxing, reading, walking, jogging, cycling, and having picnics. In the foreground, a casually dressed young couple sits together on a picnic blanket beside a woven basket. Include elegant black vintage park lamps, winding pathways, dense leafy trees framing the composition, and detailed historic and modern skyscrapers rising behind the park. Add a small picturesque stone arch bridge over a calm pond near the bottom of the artwork. Use muted sage green, olive, warm beige, soft blue, pale gray, and subtle golden sunlight, with natural watercolor bleeding, paper grain, fine pen hatching, and an airy sophisticated travel-journal aesthetic. No text, no letters, no logos, no typography, no captions, no signs. Vertical 4:5 composition, highly detailed, elegant, nostalgic, handcrafted watercolor-and-ink illustration.",
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
    "prompt": "A graphic illustration centered on a dark navy blue t-shirt, depicting an astronaut sitting on the surface of the moon, viewed from a side profile. The astronaut is wearing a detailed, bulky space suit and helmet, leaning back against a small lunar rock formation, and is holding a small steaming mug, suggesting they are enjoying a peaceful drink. Positioned directly in front of the astronaut in the background is a large, majestic view of the Earth, rendered in shades of white, light blue, and navy, featuring prominent swirling cloud formations. The entire artwork is monochromatic, utilizing a cool blue-and-white color palette that creates a serene, solitary, and contemplative atmosphere. The lunar ground is textured with craters and dust, providing a grounded contrast to the vast, dark sky and the bright, swirling planet above. The style is clean, artistic, and iconic, reminiscent of screen-printed apparel designs.",
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
    "prompt": "主題：\n花風のまどろみ\n\n主体：\n縦長4:5の写真風ポートレート。白と黄色のマーガレット、オレンジ色の小花が密に咲く夏の草花畑に、成熟した大人の女性が仰向けで静かに横たわっている。人物は画面下部から中央にかけて大きく入り、顔は中央やや右、胸元から肩までは画面下側に収まる。周囲の花が画面全体を埋め、対角線方向に流れる花のモーションブラーが前景を横切る。\n\n人物·表情：\n自然で現実感のある日系ポートレート。暗めのブラウンロングヘアに、薄い前髪と顔まわりのやわらかな毛束。目を閉じ、眉は力が抜け、唇は軽く閉じた穏やかな表情。頬と鼻先に自然な血色、肌には過度な補正をせず細かな質感を残す。首筋、鎖骨、頬に夏の日差しが当たり、静かに眠っているような落ち着いた雰囲気。\n\n服装·ポーズ：\n白い夏用キャミソールワンピース。細い肩紐、胸元の控えめなレース、中央の小さなリボン、薄手のコットン素材。人物の両肩は草花に自然に沈み、片腕は画面下側で花に隠れて見切れる。体は画面左下から右上へ少し斜めに置かれ、髪は草の上に広がり、風で数本だけ額にかかる。\n\n背景·光：\n郊外にある小さな花畑のような、生活感のある自然な草花の密度。背景はすべて緑の葉と白·黄色·オレンジの花で構成し、人工物や読める文字は入れない。高めの位置から差す夏の太陽光。光はやや硬めで暖かく、顔の左側と首筋、肩に明るいハイライトが入り、花と髪の影が肌に細く落ちる。草の反射で下側に淡い緑の返り光。\n\n構図·カメラ：\nやや俯瞰の近距離撮影。85mm相当の自然な圧縮感、人物の顔にピントを合わせ、周辺の花は浅い被写界深度で少しぼける。前景の花だけが風に流され、白·黄色·オレンジの細長い光跡として左上から右下へ走る。顔まわりはブラーを弱め、表情と肌の質感をはっきり見せる。\n\n質感·スタイル：\nリアルな写真表現。夏の日差し、透明感のある肌、柔らかな髪の束感、薄手コットンのしわ、草花の細密な質感。ナチュラルな色調で、緑を深く、白い花を明るく、オレンジの花をアクセントにする。フィルム写真のようなわずかな粒子感と、雑誌ポートレートの落ち着いた仕上がり。\n\nネガティブ：\n不自然な顔、不自然な視線、余分な指、欠けた指、手足の融合、関節の破綻、服と体の接触不良、浮遊、不自然な重力、誤った遠近法、光源と矛盾する影、過度な美肌補正、プラスチックのような肌、文字化け、ロゴ、透かし。",
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
    "prompt": "主題：\n氷越しの夏\n\n主体：\n縦長2:3のリアル写真。透明な大型プラスチックカップの内側から見上げるような超広角フィッシュアイ構図。画面下半分いっぱいに赤いいちご果肉とクラッシュアイスが迫り、中央から太いグリーンのストローが奥へ一直線に伸びる。丸く歪んだカップの開口部の向こうに、女性の顔が中央に大きく収まる。\n\n人物·表情：\n自然で現実感のある若い女性。黒髪に近いダークブラウンの髪を高めのお団子にまとめ、薄い前髪と顔まわりの後れ毛が日差しで細く光っている。透明感のあるナチュラルメイク、淡いピンクの頬、つやのあるリップ。目を大きく開いてカメラをまっすぐ見つめ、唇を小さく丸めてストローをくわえている。少し驚いたような、可愛らしく無邪気な表情。\n\n服装·ポーズ：\n白いレース素材のブラウス。首元と肩まわりに細かなフリルがあり、夏らしく軽い質感。人物はカップの向こう側に顔を近づけ、両肩は下部に少しだけ見える。ストローは人物の口元に自然に接触し、奥から手前の赤い氷へ向かって強い奥行きを作る。\n\n背景·光：\n背景は晴れた夏の日の古い商店街。木造風の店先、かき氷屋の暖簾、苺柄の看板、白い小さな旗、街路樹が見える。文字はすべてぼかされた読めない装飾として扱う。左上から強い太陽光が入り、透明カップの水滴、カップ縁、氷、赤い果肉に細かな反射とハイライトが出る。影は右下へ落ち、白いクリームの残りがカップ内側にリング状についている。\n\n構図·カメラ：\nカメラはカップの底付近、赤い氷のすぐ上に置いたような極端なローアングル。フィッシュアイレンズでカップの円形リムが大きく湾曲し、周囲の商店街も軽く歪む。画面下45％は赤い氷と果肉の前ボケ、中央はストローと女性の顔、上部は青空とカップの透明な縁。ピントは女性の目と口元、手前の氷はきらめく浅いボケ。\n\n質感·スタイル：\nプロ用カメラで撮影した夏の広告写真風。透明プラスチックの屈折、水滴の粒、氷の冷たさ、いちご果肉の瑞々しさを高精細に表現。青空、赤い氷、グリーンのストロー、白いブラウスの色の対比を鮮やかにする。肌は自然な質感を残し、過度な美肌補正はしない。明るくポップで、少しユーモラスな日本の夏スイーツ写真。\n\nネガティブ：\n実在ブランドロゴ、読める文字、商標の再現、不自然な顔、不自然な視線、歯や唇の崩れ、ストローとの接触不良、余分な指、欠けた指、手足の融合、氷の浮遊、不自然な重力、誤った遠近法、光源と矛盾する影、文字化け、透かし、過度な美肌補正、プラスチックのような肌。",
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
    "prompt": "Create an ultra-detailed hyper-realistic 3D render of {Object} , formed from thick industrial rubber tubing bent into the exact shape of the design, flexible yet dense structure, smooth rounded contours, subtle matte finish, realistic elastomer texture, faint molded seam lines, soft tension at each curve, authentic material compression and stretch behavior, slightly grippy surface quality, engineered object realism, colored using the authentic official brand color palette of [brand], faithful brand-matching hues applied across the tubing, accurate color blocking that follows the original logo design, premium studio product photography aesthetic, isolated on a pure white seamless background, soft diffused studio lighting, realistic contact shadow, macro detail, razor-sharp focus, photorealistic, 8k, 16:9, no watermark, no extra text.",
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
    "prompt": "@Crea una imagen {\n  \"style\": \"Cinematic Vintage Movie Poster — Guadalajara, Mexico\",\n  \"target_tool\": \"DALL-E 3 (ChatGPT)\",\n  \"prompt\": \"Generate a vertical portrait-format movie poster image, taller than wide in a 2:3 aspect ratio. The image is a cinematic vintage travel movie poster for Guadalajara, Mexico, rendered with the visual texture of an aged large-format film poster: heavy 35mm film grain throughout especially in the shadow areas, slightly faded and warm-shifted color tones as if printed on aged matte paper stock, a subtle halftone dot pattern visible in the midtones, and a very slight ink bleed at high-contrast edges giving it an authentic vintage printed poster feel. Foreground: a single dark silhouette of a lone mariachi musician standing still at the center-bottom of the frame, rendered as a pure clean dark silhouette with no facial features visible — traditional wide-brim charro sombrero, fitted traje de charro suit outline, holding a guitarrón — casting a long warm shadow across the honey-colored cantera stone paving of Plaza de la Liberación below, with colorful papel picado banners in red, orange, green and yellow cut tissue paper strung in loose diagonal lines overhead from building to building, swaying slightly, framing the upper composition, no people other than the single silhouetted figure, no vehicles, no modern objects. Midground: the grand honey-amber cantera stone neoclassical facade of the Teatro Degollado rising directly behind the silhouette, its ornate columned portico and triangular pediment warmly lit by the low golden-hour sun hitting from the left, long dramatic shadows stretching across the stone paving, the warm amber volcanic stone glowing intensely in the golden light. Background: the twin neo-Gothic spires of the Catedral Metropolitana de Guadalajara rising tall into the upper frame against a vast deep cerulean blue sky transitioning to burnt amber and deep orange near the horizon, a single scattered cloud catching violet and gold light from below, the cathedral facade in warm honey stone matching the Teatro Degollado's palette. Color grade: saturated warm amber and golden honey tones dominating the stone architecture, deep cobalt blue in the upper sky, rich burnt orange near the horizon, faded warm sepia in the shadow areas consistent with a vintage printed poster. At the very top of the image, centered above the spires, render the single word GUADALAJARA in bold condensed uppercase display serif letters in warm cream-gold with a faint dark drop shadow, leaving clear sky negative space for the title. No modern buildings, no cars, no utility wires, no people other than the single dark silhouette visible anywhere in the scene.\",\n  \"target\": \"🎯 Target: DALL-E 3 (ChatGPT) — 💡 Foreground/midground/background separation places Teatro Degollado and the Cathedral in distinct spatial layers, the mariachi silhouette is specified as a featureless outline to eliminate aberration risk, and vintage print texture is described visually rather than as a style label.\"\n}",
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
    "prompt": "A striking piece of hard-edge modern art on matte archival paper, with visible screen-printing layers and slight ink misalignment. A young East Asian woman is captured in a sharp, three-quarter profile. Her facial features are rendered with precise, crisp contours, contrasting with abstract, luminous geometric shapes that seem to emanate from within her skin. She wears a sleek, high-collared jacket in deep midnight blue, adorned with a single, bold neon coral brooch in the shape of a sharp triangle. Her dark hair is styled in a severe, architectural bob with blunt edges. Her expression is calm and detached, eyes gazing off-frame. The background is a clean, architectural space with sharp diagonal planes in crisp white and deep slate. High-contrast chiaroscuro lighting highlights the edges of her silhouette. Sophisticated palette: deep midnight blue, crisp white, electric neon coral. A stray cat tail is rendered as a sharp, geometric vector in the bottom left corner. Ultra-modern artistic style. No digital CGI feel.\ndutch angle, stray cat tail --ar 9:16",
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
    "prompt": "Create a charming editorial travel illustration of {DESTINATION} in a simple hand-drawn doodled style, as if sketched by hand with a black felt-tip marker in a travel notebook. The illustration should feel personal, spontaneous, and imperfect rather than digitally designed. Think of the kind of drawing someone might casually create while sitting at a café after exploring the destination.** ## COLOR PALETTE Keep the illustration almost entirely black and white. Use **only one accent color: {ONE POINT COLOR}** ## STYLE Draw entirely with black felt-tip pen lines. Use slightly wobbly hand-drawn contours, natural line variation, loose marker strokes, sketch-like confidence, subtle imperfections, slightly open line endings, uneven hand pressure, and occasional overlapping strokes. Every line should clearly look handmade. Avoid perfectly smooth curves, mechanically precise outlines, polished vector graphics, or overly crisp digital rendering. ## SUBJECT Illustrate the unique atmosphere and instantly recognizable identity of **{DESTINATION}** rather than producing a realistic cityscape. Select the destination's most iconic landmarks, characteristic architecture, local transportation, famous scenery, native plants, local animals, regional food, and cultural objects. Focus on the spirit of the destination instead of literal accuracy. ## COMPOSITION Arrange the selected elements into a balanced editorial composition with generous white space. The layout should feel open, light, and effortless, similar to a designer's travel sketchbook. Allow objects to overlap naturally without becoming crowded. Every element should have room to breathe. Keep the composition visually relaxed and uncluttered. Apply the blue sparingly to selected details such as water, sky, windows, signs, clothing accents, decorative highlights, or small architectural features. Never introduce any additional colors. ## DRAWING STYLE Keep every object simple and intentionally simplified. Use flat shapes with minimal interior detail. Avoid realistic textures, gradients, shadows, painterly brushwork, glossy surfaces, or complex rendering. The illustration should remain clean, airy, understated, and highly graphic. ## LINE QUALITY The black marker lines are the main visual feature. Lines should feel confident, casual, lively, expressive, and naturally imperfect. Slightly uneven contours, open edges, variable line thickness, and small drawing inaccuracies are encouraged because they enhance the authentic hand-drawn feeling. ## MOOD Warm. Friendly. Relaxed. Playful. Minimal. Editorial. Contemporary. Elegant through simplicity. The finished artwork should resemble a beautifully designed travel notebook, boutique travel guide, editorial magazine illustration, or lifestyle sketchbook rather than a polished digital illustration. ## IMPORTANT No photorealism. No 3D rendering. No painterly effects. No gradients. No heavy shadows. No glossy lighting. No vector-clean artwork. No excessive detail. No busy composition. Preserve generous white space. Maintain a flat editorial doodle aesthetic with a distinctly handmade character. The final image should instantly evoke **{DESTINATION}** through simple, expressive black felt-tip sketches with subtle sky-blue accents.",
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
    "prompt": "Create a clean, modern typographic travel poster where the city name itself becomes the composition. Render the city name in large, bold, uppercase sans-serif letters spanning the width of the artwork. Seamlessly integrate the city's most iconic landmarks, architecture, monuments, streets, transportation, cultural symbols, cafés, bridges, parks, skylines, sculptures, waterfronts, historic buildings, and local details into, around, and inside the letters. Let landmarks naturally interact with the typography while preserving legibility.\nUse an elegant flat vector illustration style with crisp geometric shapes, minimal detail, clean outlines, subtle shadows, and a premium editorial aesthetic. Maintain a limited color palette of deep navy, warm cream, muted red, and soft gray-blue for a timeless travel-poster look.\nAdd small decorative elements such as street lamps, trees, clouds, birds, benches, bicycles, fountains, trams, ferries, or other city-specific objects where appropriate. Keep generous negative space with a clean background and perfectly balanced composition.\nEnsure every landmark, architectural style, vehicle, sign, and cultural element is accurate to the chosen city—avoid generic or incorrect landmarks. If desired, include a small elegant tagline beneath the city name (such as a famous nickname or slogan) in minimal typography.\nStyle: premium flat vector, minimalist travel poster, geometric illustration, editorial design, tourism branding, clean typography, high contrast, ultra-sharp lines, museum-quality print, modern graphic design, centered composition, scalable SVG aesthetic, 8K resolution.",
    "tips": [
      "先替换主题、主体、品牌、城市、标题等变量，再保持原有结构生成。",
      "如果画面文字较多，建议把标题、标签和正文分段写清楚。"
    ]
  },
  {
    "id": "gallery-fs-case510",
    "title": "Bichon Shop 拟物 App 图标",
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
    "prompt": "A macOS app icon for an app named 'Bichon Shop'. A single squircle icon with smooth continuous rounded corners, centered on a white canvas with padding, occupying about 80% of the canvas. Modern light skeuomorphic macOS App Store style. Only one icon.",
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
    "prompt": "A playful, high-key studio portrait of [subject] running joyfully across a seamless light gray background, captured mid-stride with one leg lifted and a wide genuine smile. The subject wears a casual oversized outfit with soft neutral tones (or vibrant colors), creating a dynamic sense of motion. Behind them, a simple black hand-drawn cartoon stick figure grabs and stretches the back of their shirt, making the fabric appear elastically pulled as if trying to stop them. The doodle character is integrated naturally into the scene with expressive motion lines and a humorous facial expression. The subject holds a fun prop (such as a dinosaur toy, oversized lollipop, teddy bear, or balloon), enhancing the playful storytelling. Minimalist composition, clean studio lighting, soft shadows, ultra-sharp focus, realistic skin texture, vibrant yet natural colors, whimsical editorial photography, premium children’s fashion campaign aesthetic, highly detailed, photorealistic, 8K.",
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
    "prompt": "A handcrafted crochet doll of a [subject], made with soft yarn textures and intricate knitted details. Dressed in a vivid [color1] accent and a delicate [color2] garment, holding a small [prop]. Set in a cozy [setting], warm muted atmosphere, charming handmade aesthetic, nostalgic amigurumi style.",
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
    "prompt": "A young adult woman with soft refined features, thin metal glasses, and shoulder-length dark tousled hair, leaning forward across a dark upholstered couch at night. She wears a pale cream lace-trim camisole with thin straps and matching soft shorts. One hand holds a smartphone close to the foreground, the screen glow casting cool reflections on her fingers and glasses lenses. Her expression is dreamy and softly tired, eyes lifted toward the camera as if she just looked up from scrolling, lips gently closed in a relaxed pout.\n\nShot in a vertical 3:4 frame at slightly above eye level, medium close-up to three-quarter portrait. Warm dim tungsten room light mixed with cool phone-screen reflections, no flash, soft falloff across the couch and wall. Shallow depth of field, soft low-light grain, slight motion blur, natural imperfect sharpness. Background: plain beige-gray wall, minimal decor, late-night atmosphere. Soft glam makeup: subtle eyeliner, long lashes, smooth skin, glossy pink-nude lips. Realistic social-media night portrait aesthetic.",
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
    "prompt": "Create an ultra-detailed 3D stylized creative designer poster featuring a cool young digital artist standing confidently in the center of a futuristic blue neon studio. The character wears oversized black streetwear with electric-blue graphic accents, black cargo pants, layered silver chains, black sunglasses, and clean white sneakers. A cute fluffy puppy sits on the artist's shoulder. The camera angle is dramatic low-angle perspective, making the sneakers appear larger for a premium poster effect.\n\nSurround the character with floating creative elements including a glowing laptop, professional camera, design books, notebooks, 3D icons, social media symbols, holographic UI panels, graphic design tools, and futuristic blue geometric shapes. Add motivational typography such as \"DESIGN MODE\", \"CREATE • BUILD • INSPIRE\", and \"CREATIVE NEVER SLEEPS\" integrated into the scene.\n\nInclude a collectible chibi mini-figure version of the character standing beside the main subject on a display base. Use cinematic blue lighting, glossy reflections, volumetric glow, depth of field, floating particles, luxury toy-photography aesthetics, high-end 3D rendering, Octane Render quality, ultra-sharp details, vibrant neon blue color palette, futuristic creator workspace atmosphere, premium commercial poster design, trending ArtStation style, masterpiece quality, 8K resolution, vertical 9:16 composition.",
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
    "prompt": "Cinematic portrait photography, ultra-photorealistic, 2160x3840 vertical composition, 50mm or 85mm portrait lens rendering, shallow depth of field, clean translucent summer natural-light color grading — not overly yellow, not over-filtered.\n\nSubject: a young beautiful adult East Asian woman, [describe face shape and features, e.g. soft heart-shaped face, refined classical features, bright almond/fox eyes, petite nose bridge, naturally full lips], overall vibe sweet, sunny, energetic, cute with a touch of allure. Gaze highly engaging — bright, clear, natural catchlights, as if it speaks; corners of mouth slightly lifted, expression gentle, vivid, natural.\n\nShe walks along a [scene, e.g. garden stone path / tree-lined lane / European street / courtyard], right hand reaching back to hold the hand of someone behind her; only their hand appears in the lower-left corner — like a first-person couple's POV snapshot. She glances back at the camera while her body stays in a forward walking motion, posture elegant and natural, clearly a candid captured moment with a faint in-love feeling.\n\nLong [hair color] hair, [style, e.g. naturally wavy / relaxed big waves / airy bangs / half-up], many strands tousled and flying in the wind, richly layered and dynamic. Strong natural side-backlight rims the hair edges — clean, crisp rim light and semi-translucent glow, hair edges lit as if by sunlight, light and luminous. This is the core highlight of the image.\n\nShe wears [outfit, e.g. white lace slip dress / beige slip dress / light-blue short-sleeve top with white skirt / light-pink fitted dress], fabric texture natural, material light and soft. Bright natural summer sunlight realistically warms her skin, shoulders, collarbone, and clothing with soft, clean highlight transitions.\n\nSkin texture: extremely realistic — visible fine pores, natural skin texture, faint imperfections, subtle tone variation, soft sheen. Cheeks, nose tip, shoulders show natural delicate gradations in sunlight. Translucent, healthy, real and refined — no plastic look, no waxwork, no over-smoothing.\n\nBackground: soft atmospheric blur, never distracting.\n\nAvoid: over-smoothing, plastic skin, CG look, anime look, wig look, stiff expression, dead eyes, stiff poses, overall yellow cast, overexposed face, distorted features, wrong fingers, deformed hands, cluttered background, heavy influencer retouching.",
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
    "prompt": "Ultra-realistic ethereal fantasy portrait of a breathtaking young woman with delicate porcelain skin, soft grey-blue eyes, and natural rosy lips. She gazes gently toward the viewer with a serene, dreamy expression, her fingertips lightly touching her chin. Wispy ash-brown hair flows softly in the breeze, styled in a loose romantic updo adorned with pastel blush roses, shimmering crystal ornaments, delicate feathers, and intricate floral accessories. She wears elegant dangling crystal earrings and a translucent, flowing gown made of sheer iridescent fabric embroidered with tiny sparkling flowers.\n\nThe scene is bathed in soft diffused morning light, creating a luminous glow around her face and shoulders. Surrounded by floating butterflies, sparkling dust particles, translucent petals, and dreamy floral textures, the background blends pastel lavender, pearl white, blush pink, and silver tones. Cinematic fine-art photography, fairycore aesthetic, enchanted garden atmosphere, magical realism, ultra-detailed skin texture, soft focus highlights, volumetric lighting, bokeh, masterpiece quality, highly detailed, 8K resolution, delicate feminine beauty, romantic fantasy artwork, elegant composition, dreamy color grading, soft glow, celestial ambiance.",
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
    "prompt": "A full-body editorial fashion photograph of a beautiful young woman with the same appearance as the reference, long glossy dark hair, soft bangs, fair skin, and refined feminine features. She stands casually in an upscale minimalist fashion boutique, wearing an oversized pastel-blue knit sweater paired with a black pleated tennis-style skirt, white crew socks, and chunky designer sneakers. Relaxed confident pose, gentle smile, luxury retail interior with modern clothing racks, neutral-toned garments, warm ambient lighting, wood and stone textures, clean architectural lines, cinematic depth of field, realistic lighting, premium fashion advertising, Vogue-style editorial, ultra-detailed, sharp focus, photorealistic, 4K.",
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
    "prompt": "Create a handrawn pencil illustration of [image] yawning on paper, as background.\n\nAdd a 3D Pixar style render of [foto] standing casually infront of the giant handrawn pencil illustration. Soft cinematic lighting. 8K resolution. 3:4 ratio",
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
    "prompt": "Minimalist vintage watercolor travel poster illustration of [CITY NAME], [COUNTRY], rendered entirely in elegant monochromatic [COLOR] watercolor and fine ink linework.\n\nAspect ratio: 4:5 vertical composition optimized for poster and social media presentation.\n\nA peaceful early-morning streetscape featuring the iconic [PRIMARY LANDMARK] and [SECONDARY LANDMARK/LOCATION] in the foreground, viewed from a slightly low pedestrian-level perspective. Historic local architecture, elegant facades, ornate details, arched windows, decorative cornices, and traditional street elements line the spacious surroundings, creating a timeless urban atmosphere. A classic [LOCAL STREET ELEMENT OR LAMP STYLE] stands prominently on the left side, while mature leafy trees frame portions of the scene, their foliage painted with soft watercolor washes and delicate splatter textures. In the distance, [DISTANT LANDMARK OR SKYLINE FEATURE] rises gracefully against the skyline, serving as a recognizable cultural landmark. A vintage [LOCAL VEHICLE] or a few small pedestrians add subtle life and scale without disturbing the tranquil mood.\n\nThe composition includes large areas of clean white negative space, soft cloudy watercolor textures in the sky, delicate paper grain, and subtle watercolor blooms. The paving, street, or plaza stretches dramatically across the foreground, leading the viewer’s eye toward the landmark ensemble. Typography in the upper-left corner reads “[CITY NAME], [COUNTRY]” in a refined serif font, styled like a sophisticated travel journal or collectible city poster.\n\nHandcrafted watercolor illustration, architectural sketch aesthetic, serene urban atmosphere, soft natural morning lighting, muted monochromatic palette, highly detailed line art, elegant travel-poster design, minimalist luxury wall-art style, timeless local charm, premium stationery illustration, ultra-detailed, high-resolution, clean composition, Pinterest-worthy, Instagram-worthy, gallery-quality artwork.",
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
    "prompt": "Create a premium 3x2 grid collage of iconic global brand logos recreated entirely from dynamic water formations, floating above a crystal-clear ocean under a vibrant blue sky. Each panel features a different logo sculpted from realistic transparent water, with detailed splashes, droplets, reflections, refractions, and flowing liquid textures. The water forms should look physically accurate, elegant, and instantly recognizable while remaining made completely of water.",
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
    "prompt": "Portrait illustration in a storybook style featuring a young adult woman exploring the streets of Paris. She is laughing happily with her eyes closed, holding a coffee cup in her hand. She has long, wavy hair and wears a beret hat. The scene is set near a Parisian café in a peaceful morning atmosphere. The woman has a sweet, charming smile. Soft, dreamy mood, romantic Paris street vibe, gentle lighting, and highly detailed artwork.",
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
    "prompt": "Create a premium square “reference-style sustainable transportation infographic” centered around a futuristic electric city bus called the {E_BUS_NAME}, designed as a beautifully curated urban-mobility handbook page rather than a commercial vehicle advertisement.\n\nThe composition should feel like a modern visual encyclopedia mixed with an elite public-transit engineering guide and high-end editorial infographic system.\n\nVisual Direction\n\n• 1:1 square composition\n• Premium smart-city background with subtle transportation blueprints, circuit-inspired overlays, and urban infrastructure schematics\n• Elegant palette using deep navy, graphite black, electric green, steel gray, and soft cyan accents\n• Refined editorial typography hierarchy\n• Rounded modular information cards with clean spacing\n• Gentle realistic reflections and premium transit-system dividers\n• Minimal transportation engineering iconography\n• Extremely detailed central electric bus render viewed in dramatic three-quarter perspective driving through a futuristic smart-city boulevard\n• Thin precision annotation lines pointing toward key systems and technologies\n• Clean, organized “knowledge-first” layout with high information density but breathable spacing\n\nMain Subject Presentation\n\nA stunning ultra-detailed realistic render of the {E_BUS_NAME} placed at the center, featuring:\n\n• sleek aerodynamic body design\n• panoramic windshield\n• illuminated destination display\n• low-floor accessibility layout\n• futuristic LED lighting systems\n• premium electric drivetrain details\n• realistic urban reflections\n• smart-city transportation realism\n\nSurround the bus with engineering callouts explaining:\n\n• battery pack technology\n• electric motor system\n• regenerative braking system\n• charging infrastructure compatibility\n• smart fleet management systems\n• passenger accessibility features\n• thermal battery management\n• energy-efficiency technologies\n• safety monitoring systems\n• intelligent driver assistance features\n\nInclude Modular Sections\n\n• E-Bus Overview\n• Technical Specifications\n• Vehicle Dimensions & Capacity\n• Powertrain & Energy System\n• Battery Technology Breakdown\n• Charging Solutions\n• Passenger Comfort Features\n• Safety & Reliability Systems\n• Fleet Management Technology\n• Environmental Impact Analysis\n• Operating Cost Comparison\n• Construction & Material Engineering\n• Sustainability Lifecycle Assessment\n• Smart-City Integration\n• Global Adoption Trends\n• “Did You Know?” Facts Section\n• Future of Electric Public Transport\n\nAdd Premium Visualization Modules\n\n• battery architecture diagrams\n• charging workflow graphics\n• energy-consumption charts\n• passenger-capacity visualizations\n• smart-city integration maps\n• drivetrain cutaway illustrations\n• environmental impact comparisons\n• fleet-management dashboards\n• vehicle blueprint dimensions\n• lifecycle sustainability graphics\n\nStyle Keywords\n\n“premium transportation encyclopedia”\n“editorial electric mobility handbook”\n“high-end public transit infographic”\n“scientific transportation poster”\n“museum-quality electric bus reference page”\n“modular smart-city knowledge system”\n“clean engineering editorial design”\n“ultra-detailed mobility visualization”\n“future transportation showcase”\n“sustainable urban mobility design”\n\nAvoid\n\n• generic vehicle advertisements\n• cluttered commercial brochure layouts\n• cartoon transportation styling\n• unrealistic flying-bus concepts\n• excessive cyberpunk neon overload\n• low-detail stock-vehicle renders\n\nFinal Goal\n\nThe final result should resemble a professionally published transportation-engineering reference-book page created for urban planners, transportation engineers, sustainability researchers, architects, public-transit authorities, and smart-city enthusiasts, combining technical accuracy, sustainability insights, and premium editorial design.",
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
