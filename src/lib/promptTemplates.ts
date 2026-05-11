import { EXPANDED_PROMPT_TEMPLATES } from './promptTemplateData'

export const PROMPT_TEMPLATE_CATEGORIES = [
  'UI 与界面',
  '图表与信息图',
  '海报与排版',
  '商品与电商',
  '品牌与空间',
  '人物写真',
  '摄影与写实',
  '文档与教程',
] as const

export type PromptTemplateCategory = typeof PROMPT_TEMPLATE_CATEGORIES[number]
type LegacyPromptTemplateCategory = '摄影与文档'
type LegacyPromptTemplateSubcategory = '美女写真' | '男士写真'

export const PROMPT_TEMPLATE_SUBCATEGORIES = [
  '移动 App',
  '网页仪表盘',
  '社媒截图',
  'UI 系统',
  '屏幕样机',
  '信息图',
  '知识图谱',
  '数据可视化',
  '技术拆解',
  '研究论文图',
  '地图时间线',
  '活动海报',
  '字体排版',
  '插画艺术',
  '出版物',
  '商品广告',
  '包装卖点',
  '电商详情',
  '品牌 VI',
  '联名 Campaign',
  '建筑空间',
  '室内场景',
  '人像写真',
  '情侣写真',
  '时尚写真',
  '生活写真',
  '写实摄影',
  '街拍摄影',
  '产品摄影',
  '美食摄影',
  '电影感摄影',
  '风景摄影',
  '文档出版',
  '说明文档',
  '报告模板',
  '教程步骤',
  '菜谱食谱',
  '手写笔记',
  '手账素材',
  '旅行城市',
  '流程图',
  '手绘风格',
  '卡通风格',
  '通用模板',
] as const

export type PromptTemplateSubcategory = typeof PROMPT_TEMPLATE_SUBCATEGORIES[number]

export interface PromptTemplate {
  id: string
  title: string
  category: PromptTemplateCategory
  subcategory: PromptTemplateSubcategory
  description: string
  tags: string[]
  source: string
  sourceUrl?: string
  recommendedSize: string
  imageUrl?: string
  imageAlt?: string
  prompt: string
  tips: string[]
}

export type PromptTemplateInput = Omit<PromptTemplate, 'category' | 'subcategory'> & {
  category: PromptTemplateCategory | LegacyPromptTemplateCategory
  subcategory?: PromptTemplateSubcategory | LegacyPromptTemplateSubcategory
}

export const EXCLUDED_PROMPT_TEMPLATE_KEYWORDS = [
  '游戏',
  '动漫',
  '二次元',
  'GTA',
  '英雄联盟',
  '塞尔达',
  '悟空',
  '角色卡牌',
  '角色设定',
  'Cosplayer',
  'coser',
  'Persona5',
  'Galgame',
  '超级任天堂',
  'AmongUs',
  '特朗普',
  '拜登',
  '刘亦菲',
  '收款',
  '处方',
]

const EXCLUDED_TEMPLATE_IDS = new Set([
  'gallery-github-raw-2046144801071079612',
  'gallery-github-raw-2046501587762188535',
])

const EXCLUDED_RAW_KEYWORDS = [
  'game',
  'gaming',
  'ゲーム',
  'mecha girl',
  'mid-teens',
  'elon musk',
  'アニメ',
  'ソシャゲ',
  'マイクラ',
]

const LOCALIZED_TEMPLATE_OVERRIDES: Record<string, Partial<Pick<PromptTemplateInput, 'title' | 'prompt' | 'tags'>>> = {
  'gallery-2': {
    prompt: `生成一张电影感极简人像：一名孤独男性站在强烈橙红渐变环境中，人物以剪影式光线呈现，深阴影与高反差形成清晰轮廓。地面为有反射的光滑材质，构图保持居中、对称、克制，背景尽量干净，只保留红橙色氛围和少量空间纵深。

画面要求：使用极简商业海报构图，人物不需要复杂动作，重点表现孤独、沉静、张力和强烈色彩情绪。光线从侧后方或上方打出硬边高光，地面反射不要喧宾夺主。整体要像高端电影海报或专辑封面，而不是普通棚拍照片。`,
  },
  'gallery-5': {
    prompt: `生成一张自然真实的卧室镜自拍照片：一位年轻东亚女性坐在温暖、略微凌乱但干净的床边，用手机对着镜子自拍。人物穿灰色休闲家居服和白色短袜，妆容自然，皮肤保留真实纹理，姿态放松，不要过度摆拍。

光线与画质：窗边金色自然光从侧面进入，形成柔和电影感氛围；35mm 镜头质感，焦点落在镜中主体，背景轻微虚化。画面要像 iPhone 日常照片，真实、有生活感、高清但不过度精修。避免多余肢体、变形手指、模糊、噪点、水印、文字和卡通化风格。输出比例 3:4。`,
  },
  'gallery-7': {
    prompt: `生成一张奢华美妆人像商业摄影：主体是一位气质自信的黑肤色女性，画面强调高级护肤、丝滑发丝、奶油色肌肤高光、红棕色发色和蓝宝石色服装质感。妆容为自然水光妆，配饰极简，整体有海边微风、镜头眩光和轻微怀旧电影感。

构图要求：使用对称或半对称构图，浅景深、柔焦、高级时尚摄影质感。色彩以蓝宝石、奶油色、红棕色和柔和肤色为主，避免过度磨皮和廉价滤镜。画面要适合美妆广告、品牌形象图或杂志封面。`,
  },
  'gallery-1': {
    prompt: `生成一张 2026 年波士顿春季城市宣传海报，整体优雅、庆祝感强、现代而克制。背景为带细腻纹理的米白色，留出大面积负空间；右下角有一名微缩单人划艇运动员，正在一条狭窄反光水带上划行。

划桨激起的水痕向上形成动态书法曲线，逐渐变成查尔斯河和波士顿城市全景。曲线中融入后湾天际线、灯塔山红砖建筑、Acorn Street、公共花园天鹅船、Zakim 大桥、芬威元素、港口渡轮和滨水氛围。晨雾、春日金光、深红与金色节庆点缀都要细腻。左下角排版显示“SPRING 2026”，并配竖排口号“Boston, a city of river, memory, and invention”。输出 9:16，文字清晰完整。`,
  },
  'gallery-ui-2': {
    prompt: `生成一张发布会人群视角的业余 iPhone 照片：地点是现代科技园区的大型产品发布会，观众站在人群中从较远处拍摄，舞台上有一位科技公司高管正在演讲。画面要有真实手机抓拍感，而不是官方宣传照。

要求：保留观众头顶、手机屏幕、舞台灯光、远处大屏幕和现场空间纵深；曝光略有不完美，画面清晰但带一点手持感。整体氛围像普通观众在发布会现场随手拍下的照片，比例可为 4:5 或 16:9。`,
  },
  'gallery-ui-3': {
    prompt: `生成一张摊开的手写笔记本照片：笔记本平放在桌面上，页面里用黑色圆珠笔写满自然随意的手写笔记。字迹略有凌乱，包含划掉的词、下划线标题、箭头、边注和真实的小瑕疵，像个人学习或工作笔记。

拍摄方式：从略高角度俯拍，窗边自然日光，无闪光灯，桌面有少量日常物件但不要杂乱。整体像 iPhone 拍摄的真实桌面照片，纸张纹理、笔迹压力和光影都要自然。`,
  },
  'gallery-github-raw-2046115431144902732': {
    title: '柔和 35mm 胶片窗边人像',
    prompt: `生成一张柔和 35mm 胶片风格的人像照片：整体为日式清透空气感，窗边自然光柔和扩散，略微过曝，粉彩色调、低对比、柔和高光和细腻胶片颗粒。

场景是极简室内空间，靠近白色窗帘和浅色墙面。人物为年轻东亚女性，自然淡妆、真实皮肤纹理、略微凌乱的深色长发，穿宽松白衬衫和浅色休闲短裤，赤脚，造型简单放松。构图为平视角，画面从大腿中部到头部，人物自然站立，双臂放松或轻放身后，面向镜头带轻微微笑。重点表现光线、空气感、安静日常和克制梦幻氛围。输出 9:16。`,
  },
  'gallery-github-raw-2046434670724907395': {
    title: '黑柔滤镜编辑人像',
    prompt: `生成一张 9:16 竖版编辑人像：单人主体，使用黑柔滤镜、轻微雾感、柔和高光泛光、低饱和色调和细腻颗粒。空间为干净极简室内，背景有轻微纹理。

人物为年轻韩系女性，自然淡妆、真实皮肤纹理，穿合身针织上衣或柔软内搭外加宽松衬衫，下身为高腰短裤或半裙，整体不暴露、自然舒适。姿态为坐在地面上，一条腿弯曲，另一条腿放松，身体轻微倾斜，肩线错开，头部微微偏转。构图略偏离中心，保留负空间；表情平静、疏离、自然。侧面柔光制造温和阴影，整体氛围安静、克制、真实。`,
  },
  'gallery-github-raw-2046502288102170757': {
    title: '富士胶片情侣人像',
    prompt: `生成一张 9:16 竖版富士胶片风情侣人像：两位年轻情侣在窗边自然光下互动，整体有 Pro 400H / Superia 胶片质感，粉彩色调、轻微绿品色偏、低对比、柔和高光过渡、细腻颗粒和轻微晕光。

场景为明亮极简室内，白色窗帘和干净柔和背景。女生穿宽松衬衫和休闲短裤，男生穿简单 T 恤或浅色衬衫，发型自然微乱。两人保持亲密距离，可以坐着或站着，女生轻轻靠向男生，手自然搭在肩膀或胸前，男生微微靠近，捕捉接近亲吻前的自然瞬间。构图为腰部以上近景，平视角，有轻微手持感，情绪温暖、浪漫、真实。`,
  },
  'gallery-github-raw-2046523198116889064': {
    title: '2026 硅谷城市宣传海报',
    prompt: `生成一张 2026 年硅谷城市宣传海报，气质未来、优雅、开阔。使用双重曝光构图，并保留 S 形流动动势：纯白纹理背景上，右下角有一位穿现代科技服饰的微缩人物，正在释放一条银蓝色发光丝带。丝带像柔软绸带一样向左上方流动，并逐渐转化为丘陵、海岸线、数据流和发光城市地形。

在这条“光之河”中叠加手绘式硅谷全景地图，融合科技、自然、创新和加州阳光。加入斯坦福拱廊、Apple Park 风格园区、Google 园区式建筑、玻璃办公楼、自动驾驶车辆、创业实验室、半导体纹理、AI 数据中心、Palo Alto 街道、San Jose 天际线、Santa Cruz 山脉、旧金山湾和高速公路。左下角排版显示“SILICON VALLEY 2026”，并配竖排口号“Where Ideas Shape Tomorrow”。输出 9:16，版式高级，文字清晰。`,
  },
  'gallery-github-raw-2046413660147314714': {
    title: '科普百科模块信息图',
    prompt: `基于[主题]生成一张高质量竖版科普百科信息图。它不是普通海报，也不是单纯插画，而是一张结合图鉴感、百科感、信息结构和收藏价值的模块化知识卡片。

画面需要包含：主题的清晰主视觉、多个局部放大细节、圆角模块化信息区、明确标题层级、关键标签、简洁但有信息量的百科内容，以及评分、要点摘要或 Top 5 模块。内容模块根据主题自动选择，可包含基础档案、分类信息、外观特征、习性生态、形成机制、结构组成、使用条件、养护建议、风险提醒、适用人群、优缺点对比和快速评分卡。

视觉要求：浅色干净背景、柔和配色、细腻阴影、精致小图标、圆角信息盒、整齐排版。信息密度高但不杂乱，阅读体验好，像可出版、可收藏、可系列化生产的百科卡片。`,
  },
  'gallery-github-raw-2046414546378584558': {
    title: '前沿玻璃质感 UI 设计系统',
    prompt: `生成一套前沿、大胆、独特主题的 UI 设计系统。整体包含玻璃质感、透明层、折射高光、细腻阴影和具有未来感的界面组件，但不要变成廉价炫光效果。

画面需要展示：核心页面、组件库、按钮、卡片、输入框、导航、图表模块、状态标签、图标风格、色彩规范和字体层级。请统一圆角、间距、投影、透明度和交互动效暗示，让它像真实产品设计系统展示板。文字标签清晰可读，适合交给前端或设计团队继续拆解。`,
  },
  'gallery-opennana-jin-ping-mei-tupu': {
    prompt: `生成一张经典科学百科风格的通用图鉴信息图，主题可选择人物、植物或动物，也可以替换为[具体主题]。整体为复古米黄色纸张背景、精细线稿、复杂但有秩序的专业百科插画。

中心主体位于画面 C 位，具有写实 3D 跃出纸面的效果，像突破平面边框向观众伸出。主体周围保留策略性留白，强化视觉焦点。上下左右和角落分布 6-8 个知识模块，每个模块有清晰边框、标题和详细内容。使用细引线、箭头、括号、虚线和连接点，把中心主体与周围模块连接成完整知识网络。

信息模块可以包含基础档案、结构拆解、历史背景、行为特征、分类关系、尺寸比例、关键细节和知识摘要。画面要像无品牌科学百科页，不出现 logo，文字尽量清晰可读。`,
  },
  'gallery-opennana-hyper-realistic-3d-instagram-ad': {
    title: '超真实 3D Instagram 广告',
    prompt: `生成一张超真实电影感 Instagram 帖子广告画面：Instagram 界面本身是一个可触摸的实体 3D 白色卡片，像高级商业产品摄影一样被拍摄。卡片有磨砂塑料微纹理、可见厚度、真实倒角、圆角、柔和工作室反射和边缘高光。

界面要求：顶部栏包含圆形头像、用户名“June”、浅蓝色 FOLLOW 按钮、右侧三点菜单，间距、字体和图标比例接近真实 Instagram。主体是一位真实运动风女性从 Instagram 卡片中部分探出，像从平面进入真实 3D 空间。姿态自然坐姿，双腿弯曲偏向一侧，一只膝盖略抬，双臂轻抱膝盖，神情平静自信，视线略向侧上方。

服装为柔和象牙白运动上衣和深蓝色运动短裤，材质真实、褶皱自然、品牌标记清晰但不夸张。整体为 1:1 构图，干净高级，像真实棚拍商业广告。`,
  },
  'gallery-opennana-floating-rose-agarwood-scene': {
    prompt: `生成一张 2:3 竖版超现实商业产品摄影：主体是一只透明玻璃香水瓶，置于华丽深色雕花木桌上。瓶身为圆角矩形，金色金属瓶盖，瓶中有淡金色香水液体，表面高光细腻，不出现明显标签。

场景为古老中东市场走廊：粗糙石墙、巨大石拱、暖棕石地面、装满香料的木架、袋装干货、碗装香料、悬挂草药束和暖黄色传统金属灯笼。光线为柔和金色环境光，两侧灯笼形成暖色辉光，薄雾增强光线漫射。

香水瓶上方按竖向堆叠悬浮香调成分：琥珀树脂、大马士革玫瑰、白麝香晶体、沉香木片和金色粒子。成分围绕瓶身旋转，带发光粒子、闪耀尘埃和柔光尾迹。整体为 8K 超精细质感、电影级光效、温暖金调和柔和琥珀高光，适合高端香水广告。`,
  },
}

const LOCALIZED_TITLE_OVERRIDES: Record<string, string> = {
  'gallery-github-raw-2046498264774791514': '商品广告专业重设计',
  'gallery-github-raw-2046530758190440928': '提示词流程说明页',
  'gallery-github-raw-2046371076402503709': '架空世界观视觉海报',
  'gallery-github-raw-2046494262158930154': '反向传播知识图解',
  'gallery-github-raw-2046500429786402973': '透明头鱼结构图鉴',
  'gallery-github-raw-2046188377524076915': '图片提示词说明卡',
  'gallery-github-raw-2046501692246470871': '清爽夏日产品广告',
  'gallery-github-raw-2046215187678790140': '多页提示词整理示例',
  'gallery-github-raw-2046530764871696750': '手相鉴定报告模板',
  'gallery-github-raw-2046437230127034774': 'OpenClaw 信息调研图',
  'gallery-github-raw-2046514558064586782': '热闹超市促销折页',
  'gallery-github-raw-2046448773162033240': '混沌笔记视觉生成',
  'gallery-github-raw-2046542225358917945': '参考图提示词复刻',
  'gallery-github-raw-2046528889124728993': '普拉提课程广告图',
  'gallery-github-raw-2046507362266259832': '棒球运动员摄影海报',
}

const BOILERPLATE_TEMPLATE_DESCRIPTION_PATTERN =
  /来自.+(?:案例|精选).*(?:可直接替换主题|已转写为中文可复用模板)|实用案例|可直接替换主题、文案、产品或场景后复用|已转写为中文可复用模板|保留原站中文提示词与示例图片/

const TEMPLATE_DESCRIPTION_MEDIUMS: Record<PromptTemplateSubcategory, string> = {
  '移动 App': '界面设计',
  '网页仪表盘': '仪表盘界面',
  '社媒截图': '社媒界面',
  'UI 系统': '设计系统',
  '屏幕样机': '屏幕样机',
  '信息图': '信息图',
  '知识图谱': '知识图谱',
  '数据可视化': '数据可视化',
  '技术拆解': '技术图解',
  '研究论文图': '研究配图',
  '地图时间线': '地图时间线',
  '活动海报': '海报视觉',
  '字体排版': '排版海报',
  '插画艺术': '插画画面',
  '出版物': '出版版式',
  '商品广告': '商品广告',
  '包装卖点': '包装卖点图',
  '电商详情': '电商详情图',
  '品牌 VI': '品牌视觉',
  '联名 Campaign': 'Campaign 视觉',
  '建筑空间': '空间视觉',
  '室内场景': '室内场景',
  '人像写真': '人像写真',
  '情侣写真': '情侣写真',
  '时尚写真': '时尚写真',
  '生活写真': '生活写真',
  '写实摄影': '写实摄影',
  '街拍摄影': '街拍摄影',
  '产品摄影': '产品摄影',
  '美食摄影': '美食摄影',
  '电影感摄影': '电影感摄影',
  '风景摄影': '风景摄影',
  '文档出版': '文档版式',
  '说明文档': '说明文档',
  '报告模板': '报告模板',
  '教程步骤': '教程步骤图',
  '菜谱食谱': '菜谱页面',
  '手写笔记': '手写笔记',
  '手账素材': '手账素材',
  '旅行城市': '城市视觉',
  '流程图': '流程图',
  '手绘风格': '手绘风格',
  '卡通风格': '卡通画面',
  '通用模板': '通用模板',
}

const TEMPLATE_DESCRIPTION_USE_CASES: Record<PromptTemplateSubcategory, string> = {
  '移动 App': '产品展示、提案汇报和交互参考',
  '网页仪表盘': '后台展示、数据汇报和产品提案',
  '社媒截图': '社媒包装、内容展示和传播预览',
  'UI 系统': '视觉统一、设计交付和组件整理',
  '屏幕样机': '应用预览、提案展示和多端包装',
  '信息图': '主题讲解、知识整理和内容展示',
  '知识图谱': '主题讲解、结构整理和课程展示',
  '数据可视化': '数据分析、报告呈现和洞察表达',
  '技术拆解': '原理讲解、功能说明和结构展示',
  '研究论文图': '论文展示、课程资料和学术表达',
  '地图时间线': '路线说明、历史梳理和城市介绍',
  '活动海报': '活动宣传、传播封面和主视觉发布',
  '字体排版': '海报封面、品牌表达和宣传物料',
  '插画艺术': '主视觉创作、封面表达和氛围包装',
  '出版物': '专题包装、画册展示和版式参考',
  '商品广告': '商业投放、品牌宣传和主图包装',
  '包装卖点': '新品发布、礼盒展示和卖点提炼',
  '电商详情': '商品转化、上新推广和卖点说明',
  '品牌 VI': '品牌升级、提案汇报和视觉规范',
  '联名 Campaign': '品牌联动、整合传播和活动发布',
  '建筑空间': '方案提案、空间叙事和展示图输出',
  '室内场景': '空间提案、陈列展示和氛围参考',
  '人像写真': '人物展示、封面视觉和情绪表达',
  '情侣写真': '写真参考、社媒封面和情感表达',
  '时尚写真': '品牌大片、封面视觉和商业人像参考',
  '生活写真': '社媒更新、生活记录和轻商业人像',
  '写实摄影': '参考图生成、日常题材和真实场景表达',
  '街拍摄影': '城市记录、人物瞬间和纪实表达',
  '产品摄影': '商业主图、详情页和广告物料',
  '美食摄影': '菜单设计、餐饮宣传和种草内容',
  '电影感摄影': '情绪封面、视觉叙事和氛围海报',
  '风景摄影': '旅行内容、环境展示和封面视觉',
  '文档出版': '白皮书整理、多页内容和出版展示',
  '说明文档': '介绍页、说明页和结构化整理',
  '报告模板': '汇报材料、分析结果和专业输出',
  '教程步骤': '教学资料、指南页面和操作说明',
  '菜谱食谱': '菜单设计、教程卡片和美食内容',
  '手写笔记': '学习资料、教程封面和真实记录',
  '手账素材': '日常记录、灵感整理和内容包装',
  '旅行城市': '文旅宣传、专题包装和路线展示',
  '流程图': '方案讲解、课程说明和流程拆解',
  '手绘风格': '概念表达、封面设计和风格实验',
  '卡通风格': '趣味传播、社媒内容和视觉包装',
  '通用模板': '快速换题、结构复用和方向扩展',
}

const CATEGORY_DESCRIPTION_MEDIUMS: Record<PromptTemplateCategory, string> = {
  'UI 与界面': '界面设计',
  '图表与信息图': '信息图',
  '海报与排版': '海报视觉',
  '商品与电商': '商品展示',
  '品牌与空间': '品牌空间视觉',
  '人物写真': '人物写真',
  '摄影与写实': '写实摄影',
  '文档与教程': '文档教程',
}

const CATEGORY_DESCRIPTION_USE_CASES: Record<PromptTemplateCategory, string> = {
  'UI 与界面': '产品展示、提案汇报和交互参考',
  '图表与信息图': '主题讲解、知识整理和内容展示',
  '海报与排版': '活动宣传、封面发布和视觉包装',
  '商品与电商': '商业投放、卖点展示和转化表达',
  '品牌与空间': '品牌提案、空间展示和视觉规范',
  '人物写真': '人物展示、封面视觉和情绪表达',
  '摄影与写实': '参考图生成、场景表达和商业拍摄参考',
  '文档与教程': '说明整理、资料输出和教学展示',
}

const TEMPLATE_DESCRIPTION_KEYWORD_RULES = [
  { pattern: /(知识图谱|knowledge graph|关系网络|network graph)/i, label: '知识图谱' },
  { pattern: /(信息图|infographic|百科|图鉴|encyclopedia|field guide)/i, label: '信息图' },
  { pattern: /(技术|结构|拆解|diagram|breakdown|剖面|exploded)/i, label: '结构图解' },
  { pattern: /(教程|步骤|guide|how to|workflow|操作)/i, label: '步骤讲解' },
  { pattern: /(胶片|film|fujifilm|portra|superia|classic chrome)/i, label: '胶片质感' },
  { pattern: /(电影感|cinematic|noir|dramatic|剧照)/i, label: '电影光影' },
  { pattern: /(自拍|selfie)/i, label: '自拍视角' },
  { pattern: /(情侣|couple)/i, label: '情侣互动' },
  { pattern: /(美食|food|dessert|recipe|餐饮|咖啡)/i, label: '美食呈现' },
  { pattern: /(品牌|logo|vi|campaign)/i, label: '品牌系统' },
  { pattern: /(包装|packaging|详情页|commerce|amazon|卖点)/i, label: '卖点排版' },
  { pattern: /(dashboard|数据面板|指标|chart|analytics|趋势)/i, label: '数据展示' },
  { pattern: /(社媒|instagram|tiktok|feed|post|小红书|抖音)/i, label: '社媒传播' },
  { pattern: /(建筑|室内|interior|architecture|showroom|展厅|店铺)/i, label: '空间呈现' },
  { pattern: /(旅行|city|地图|路线|travel|城市)/i, label: '城市叙事' },
  { pattern: /(香水|护肤|美妆|skincare|perfume|cosmetic)/i, label: '美妆产品' },
  { pattern: /(海报|poster|封面|排版|typography)/i, label: '海报排版' },
  { pattern: /(手写|笔记|notebook|journal|手账)/i, label: '记录版式' },
]

function normalizeGithubImageUrl(url?: string) {
  if (!url) return url

  const freestyleImagePrefix = 'https://cdn.jsdelivr.net/gh/freestylefly/awesome-gpt-image-2@main/images/'
  if (url.startsWith(freestyleImagePrefix)) {
    return url.replace('@main/images/', '@main/data/images/')
  }

  const rawPrefix = 'https://raw.githubusercontent.com/'
  if (url.startsWith(rawPrefix)) {
    const parts = url.slice(rawPrefix.length).split('/')
    const [owner, repo, branch, ...pathParts] = parts
    if (owner && repo && branch && pathParts.length > 0) {
      return `https://cdn.jsdelivr.net/gh/${owner}/${repo}@${branch}/${pathParts.join('/')}`
    }
  }

  const githubBlobMatch = url.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.+)$/)
  if (githubBlobMatch) {
    const [, owner, repo, branch, path] = githubBlobMatch
    return `https://cdn.jsdelivr.net/gh/${owner}/${repo}@${branch}/${path}`
  }

  return url
}

function chineseCharacterRatio(text: string) {
  const lettersAndNumbers = Array.from(text).filter((char) => /[\p{L}\p{N}]/u.test(char))
  if (lettersAndNumbers.length === 0) return 1
  const chineseCharacters = lettersAndNumbers.filter((char) => /[\u4e00-\u9fff]/.test(char))
  return chineseCharacters.length / lettersAndNumbers.length
}

function hasUntranslatedPromptBlock(prompt: string) {
  return (
    chineseCharacterRatio(prompt) <= 0.2 ||
    /[\u3040-\u30ff\uac00-\ud7af]/.test(prompt) ||
    /[A-Za-z][A-Za-z0-9 ,;:().'"&/_-]{120,}/.test(prompt)
  )
}

function localizeTitle(template: PromptTemplateInput) {
  const overrideTitle = LOCALIZED_TITLE_OVERRIDES[template.id]
  if (overrideTitle) return overrideTitle

  if (/[\u3040-\u30ff\uac00-\ud7af]/.test(template.title) || chineseCharacterRatio(template.title) <= 0.1) {
    if (template.category === 'UI 与界面') return '界面设计模板'
    if (template.category === '图表与信息图') return '信息图模板'
    if (template.category === '海报与排版') return '海报排版模板'
    if (template.category === '商品与电商') return '商品商业模板'
    if (template.category === '品牌与空间') return '品牌空间模板'
    if (template.category === '人物写真') return '人物写真模板'
    if (template.category === '文档与教程') return '文档教程模板'
    return '写实摄影模板'
  }

  return template.title
}

function buildChineseFallbackPrompt(template: PromptTemplateInput) {
  const safeTitle = localizeTitle(template)

  return `围绕「${safeTitle}」生成一张高质量图片。

模板用途：${template.description}

请补充或替换这些变量：
- 主题或主体：[主题]
- 使用场景：[社媒/广告/汇报/课程/商品页/品牌提案]
- 必须出现的文字：[标题、栏目名、短标签]
- 视觉风格：[材质、光线、色彩、参考行业]
- 输出比例：${template.recommendedSize}

画面要求：主体明确、信息层级清楚、构图稳定，关键文字必须清晰可读。请根据用途自动补齐标题、副标题、图例、标注、产品或场景细节。不要生成乱码、水印、重复元素、低清截图或与主题无关的装饰。`
}

const SHORT_PROMPT_APPENDIX_TINY =
  '补充要求：补齐必要细节，确保中文可读，避免水印、乱码和无关装饰。'
const SHORT_PROMPT_APPENDIX_LIGHT =
  '补充要求：保持原始主体、构图、光线、材质和比例关系，补齐必要细节，确保中文可读，避免水印、乱码和无关装饰。'
const SHORT_PROMPT_APPENDIX_FULL =
  '补充要求：保持原始主体、构图、光线、材质、比例和层级关系，按示例图补齐缺失细节；如果包含文字，确保中文清晰可读、排版稳定且语义准确；避免水印、乱码、重复元素、低清噪点和无关装饰；整体呈现专业、可复用、成品感强的模板效果。'

function extendShortPrompt(prompt: string) {
  const trimmed = prompt.trim()
  if (trimmed.length > 120) return trimmed
  if (trimmed.length <= 60) return `${trimmed}\n\n${SHORT_PROMPT_APPENDIX_FULL}`
  if (trimmed.length <= 100) return `${trimmed}\n\n${SHORT_PROMPT_APPENDIX_LIGHT}`
  return `${trimmed}\n\n${SHORT_PROMPT_APPENDIX_TINY}`
}

const PROMPT_SOURCE_CHATTER_LINE_PATTERN =
  /PromptShare|Nano Banana|nanobanana|基础提示词|谷歌 Gemini|Gemini 3|@Adobe|@AdobeFirefly|评论区|私信|提示词分享|提示词👇|完整工作流程见帖子|输入以下提示词|上传一张你的照片|启用图像生成选项|花\d+分钟|复制下方提示词|Melisa的提示词|换成黑色的头发|这些图像可能会激活你的味蕾|悉尼·斯威尼|安娜·德·阿玛斯/i
const PROMPT_SOURCE_CHATTER_PREFIX_PATTERN =
  /^\s*(?:基础提示词|提示词|电影黄金提示词|电影级黄金提示词)[：:]\s*/

function stripPromptSourceChatter(template: PromptTemplateInput) {
  if (!template.source.includes('prompts.kkkm.cn')) return template.prompt.trim()

  const cleanedLines = template.prompt
    .split('\n')
    .map((line) => {
      const trimmed = line.trim()
      if (PROMPT_SOURCE_CHATTER_LINE_PATTERN.test(trimmed)) return null

      const withoutPrefix = line.replace(PROMPT_SOURCE_CHATTER_PREFIX_PATTERN, '')
      if (PROMPT_SOURCE_CHATTER_LINE_PATTERN.test(withoutPrefix.trim())) return null
      if (/^@[a-z0-9_]+$/i.test(withoutPrefix.trim())) return null
      return withoutPrefix.trimEnd()
    })
    .filter((line): line is string => line !== null)

  return cleanedLines.join('\n').replace(/\n{3,}/g, '\n\n').trim()
}

function getTemplateClassificationHaystack(template: PromptTemplateInput) {
  return [
    template.title,
    template.prompt,
  ].join('\n').toLowerCase()
}

function getTemplateHaystack(template: PromptTemplateInput) {
  return [
    template.title,
    template.category,
    template.description,
    template.tags.join(' '),
    template.prompt,
  ].join('\n').toLowerCase()
}

function normalizeTemplateTextForDedup(text: string) {
  return text
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[\s\p{P}\p{S}]+/gu, '')
}

function clampTextByCharacters(text: string, maxCharacters: number) {
  const characters = Array.from(text)
  if (characters.length <= maxCharacters) return text
  return `${characters.slice(0, Math.max(0, maxCharacters - 1)).join('')}…`
}

function normalizeTemplateDescriptionTitle(title: string) {
  return title
    .replace(/[【\[][^】\]]+[】\]]/g, '')
    .replace(/[\p{P}\p{S}]+/gu, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function titleNeedsMediumHint(title: string) {
  return /模板|案例|精选|合集|分类|风格方向$/i.test(title)
}

function shouldPreserveTemplateDescription(description: string) {
  const trimmed = description.trim()
  if (!trimmed) return false
  if (BOILERPLATE_TEMPLATE_DESCRIPTION_PATTERN.test(trimmed)) return false
  if (chineseCharacterRatio(trimmed) < 0.15) return false
  return Array.from(trimmed).length <= 80
}

function getTemplateDescriptionKeywords(template: PromptTemplateInput) {
  const haystack = [
    template.title,
    template.tags.join(' '),
    template.prompt,
  ].join('\n')

  const keywords: string[] = []
  for (const rule of TEMPLATE_DESCRIPTION_KEYWORD_RULES) {
    if (!rule.pattern.test(haystack)) continue
    if (keywords.includes(rule.label)) continue
    keywords.push(rule.label)
    if (keywords.length >= 2) break
  }

  return keywords
}

function normalizeTemplateDescription(
  template: PromptTemplateInput,
  category: PromptTemplateCategory,
  subcategory: PromptTemplateSubcategory,
) {
  const rawDescription = template.description.trim()
  if (shouldPreserveTemplateDescription(rawDescription)) return rawDescription

  const medium = TEMPLATE_DESCRIPTION_MEDIUMS[subcategory] ?? CATEGORY_DESCRIPTION_MEDIUMS[category]
  const useCases = TEMPLATE_DESCRIPTION_USE_CASES[subcategory] ?? CATEGORY_DESCRIPTION_USE_CASES[category]
  const title = normalizeTemplateDescriptionTitle(localizeTitle(template))
  const shortTitle = clampTextByCharacters(title, 24)
  const keywords = getTemplateDescriptionKeywords(template).filter(
    (keyword) => !shortTitle.includes(keyword),
  )

  const focus =
    !shortTitle || titleNeedsMediumHint(shortTitle)
      ? medium
      : shortTitle.includes(medium)
        ? shortTitle
        : `${shortTitle}${/界面|视觉|海报|摄影|写真|图|版式|步骤|模板/.test(shortTitle) ? '' : medium}`

  if (keywords.length > 0) {
    const withKeywords = `${focus}，突出${keywords.join('、')}，适合${useCases}。`
    if (Array.from(withKeywords).length <= 78) return withKeywords
  }

  return `${focus}，适合${useCases}。`
}

const PORTRAIT_CATEGORY_PATTERN =
  /(人像|肖像|写真|头像|portrait|selfie|自拍|美妆|美女|女孩|女性|女士|女模特|女子|女生|couple|情侣|男士|男性|模特|汉服|胶片人像|编辑人像|时尚人像|\bwoman\b|\bwomen\b|\bgirl\b|\bfemale\b|\bcouple\b|\bman\b|\bmale\b)/i
const DOCUMENT_CATEGORY_PATTERN = /(文档|报告|教程|说明卡|说明页|使用说明|手写|笔记|notebook|白板|板书|药方|处方|鉴定|论文|paper|research|cookbook|guide|步骤|slides|幻灯|报告模板|report|analysis)/i
const PHOTO_CATEGORY_PATTERN = /(摄影|照片|photo|shot|拍摄|抓拍|街拍|纪实|实拍|手机照片|iphone photo|camera|镜头|film|胶片)/i
const UI_INTENT_PATTERN = /(ui|界面|app|dashboard|web|screen|screenshot|mockup|mobile|手机界面|手机屏幕|浏览器|直播|feed|post|样机|组件|设计系统)/i
const SCREEN_MOCKUP_PATTERN = /(屏幕|screen|screenshot|样机|mockup|laptop|webcam|monitor|显示器)/i
const RESEARCH_FIGURE_PATTERN = /(论文|paper|research|benchmark|transformer|llm|prompt 注入|prompt-injection|backprop|反向传播|模型架构|智能体|agent architecture|系统架构)/i
const DATA_VIS_PATTERN = /(数据可视化|data visualization|小倍数|small multiples|heatmap|热力图|sankey|桑基|chord|弦图|treemap|树图|choropleth|图表|chart|流向|趋势|指标|可视化)/i
const KNOWLEDGE_GRAPH_PATTERN = /(知识图谱|knowledge graph|network graph|关系图|协作网络|节点|关系网络|图鉴|百科|encyclopedia|field guide)/i
const FOOD_PHOTO_PATTERN = /(美食摄影|美食|食物|菜品|餐饮|甜点|蛋糕|咖啡|饮品|鸡尾酒|可颂|披萨|食材|烘焙|food|dessert|coffee|cocktail|pastry|drink)/i
const CINEMATIC_PHOTO_PATTERN = /(电影感摄影|电影感|电影镜头|剧照|胶片|黑白肖像|夜雨|黄昏|cinematic|film still|film|noir|moody|dramatic)/i
const LANDSCAPE_PHOTO_PATTERN = /(风景摄影|风景|自然景观|山顶|灯塔|水景|海边|城市星球|微缩城市|旅行摄影|landscape|scenery|cityscape|garden|travel)/i
const HUMAN_PORTRAIT_PATTERN =
  /(女子|女生|女性|女士|女模特|男士|男性|情侣|自拍|美妆|妆容|皮肤|发型|脸部|面部|眼睛|双人|单人|couple|selfie|makeup|portrait|pose|face|skin|hair|\bwoman\b|\bwomen\b|\bgirl\b|\bfemale\b|\bman\b|\bmale\b)/i
const POSTER_LAYOUT_PATTERN = /(海报|poster|排版|字体|字形|宣传页|宣传海报|城市海报|杂志版式|typography)/i
const COMMERCE_INTENT_PATTERN = /(商品|产品|product|电商|详情页|卖点|包装|packaging|营销|促销|购物|sku|amazon|taobao)/i
const BRAND_SPACE_INTENT_PATTERN = /(品牌|brand identity|vi|空间设计|建筑|architecture|展厅|店铺|门店|showroom)/i
const RECIPE_PATTERN = /(菜谱|食谱|配方|菜单|烹饪|recipe|cookbook|menu|分步骤菜谱)/i
const FLOWCHART_PATTERN = /(流程图|流程|工作流|步骤图|创作流程|制作流程|pipeline|process|flowchart|workflow|journey map)/i
const JOURNAL_PATTERN = /(手账|手帐|剪贴簿|手写笔记|学习笔记|bullet journal|scrapbook|planner|journal)/i
const HAND_DRAWN_PATTERN = /(手绘|水彩|素描|草图|涂鸦|彩铅|线稿|hand-drawn|watercolor|sketch|doodle|ink)/i
const CARTOON_PATTERN = /(卡通|q版|贴纸|表情包|漫像|可爱|cartoon|sticker|emoji|cute)/i

function normalizeTemplateCategory(template: PromptTemplateInput): PromptTemplateCategory {
  const haystack = getTemplateClassificationHaystack(template)
  const hasPortraitIntent = PORTRAIT_CATEGORY_PATTERN.test(haystack)
  const hasDocumentIntent = DOCUMENT_CATEGORY_PATTERN.test(haystack)
  const hasPhotoIntent = PHOTO_CATEGORY_PATTERN.test(haystack)
  const hasUiIntent = UI_INTENT_PATTERN.test(haystack)
  const hasScreenIntent = SCREEN_MOCKUP_PATTERN.test(haystack)
  const hasHumanPortraitIntent = HUMAN_PORTRAIT_PATTERN.test(haystack)
  const hasPosterIntent = POSTER_LAYOUT_PATTERN.test(haystack)
  const hasCommerceIntent = COMMERCE_INTENT_PATTERN.test(haystack)
  const hasBrandSpaceIntent = BRAND_SPACE_INTENT_PATTERN.test(haystack)

  if (template.category === '摄影与文档') {
    if (hasScreenIntent) return '摄影与写实'
    if (hasDocumentIntent) return '文档与教程'
    if (hasPortraitIntent) return '人物写真'
    return '摄影与写实'
  }

  if (
    template.category !== '人物写真' &&
    hasPortraitIntent &&
    hasHumanPortraitIntent &&
    !hasUiIntent &&
    !hasDocumentIntent &&
    !hasPosterIntent &&
    !hasCommerceIntent &&
    !hasBrandSpaceIntent &&
    hasPhotoIntent
  ) {
    return '人物写真'
  }

  if ((template.category === 'UI 与界面' || template.category === '海报与排版') && hasPortraitIntent && !hasUiIntent) {
    return '人物写真'
  }

  if ((template.category === 'UI 与界面' || template.category === '海报与排版') && hasDocumentIntent && !hasUiIntent) {
    return '文档与教程'
  }

  if (template.category === 'UI 与界面' && hasPhotoIntent && !hasUiIntent) {
    return '摄影与写实'
  }

  return template.category
}

function inferSubcategory(template: PromptTemplateInput, category = normalizeTemplateCategory(template)): PromptTemplateSubcategory {
  const haystack = getTemplateClassificationHaystack(template)

  if (template.title.includes('通用模板') || template.tags.includes('通用模板')) return '通用模板'

  if (category === '人物写真') {
    if (/(情侣|couple)/i.test(haystack)) return '情侣写真'
    if (/(时尚|美妆|fashion|beauty|editorial|glam|杂志|高端|影棚肖像)/i.test(haystack)) return '时尚写真'
    if (/(日常|生活|公园|卧室|窗边|居家|家居|床边|镜自拍|自拍|胶片|街拍|纪实|抓拍|旅行|咖啡馆|镜子|room|bedroom|home|lifestyle|candid)/i.test(haystack)) return '生活写真'
    return '人像写真'
  }

  if (category === '摄影与写实') {
    if (FOOD_PHOTO_PATTERN.test(haystack)) return '美食摄影'
    if (CINEMATIC_PHOTO_PATTERN.test(haystack)) return '电影感摄影'
    if (LANDSCAPE_PHOTO_PATTERN.test(haystack)) return '风景摄影'
    if (SCREEN_MOCKUP_PATTERN.test(haystack)) return '屏幕样机'
    if (/(街拍|地铁|subway|纪实|抓拍|现场|手机照片|iphone|candid|发布会|人群)/i.test(haystack)) return '街拍摄影'
    if (/(产品|product|棚拍|studio|still life|静物)/i.test(haystack)) return '产品摄影'
    return '写实摄影'
  }

  if (category === '文档与教程') {
    if (JOURNAL_PATTERN.test(haystack)) return '手账素材'
    if (RECIPE_PATTERN.test(haystack)) return '菜谱食谱'
    if (/(手写|笔记|notebook|白板|板书|药方|处方)/i.test(haystack)) return '手写笔记'
    if (/(报告|report|评分|鉴定|analysis|审查|分析报告)/i.test(haystack)) return '报告模板'
    if (RESEARCH_FIGURE_PATTERN.test(haystack)) return '研究论文图'
    if (/(教程|步骤|step|guide|how to|cookbook|流程|使用|操作)/i.test(haystack)) return '教程步骤'
    return '说明文档'
  }

  if (category === 'UI 与界面') {
    if (/(小红书|抖音|微博|直播|社媒|instagram|tiktok|social|feed|post|截图)/i.test(haystack)) return '社媒截图'
    if (/(design system|设计系统|组件|component|玻璃质感|ui kit)/i.test(haystack)) return 'UI 系统'
    if (/(dashboard|仪表盘|网页|web|后台|数据面板)/i.test(haystack)) return '网页仪表盘'
    if (/(屏幕|screen|screenshot|样机|mockup)/i.test(haystack)) return '屏幕样机'
    return '移动 App'
  }

  if (category === '图表与信息图') {
    if (FLOWCHART_PATTERN.test(haystack)) return '流程图'
    if (KNOWLEDGE_GRAPH_PATTERN.test(haystack)) return '知识图谱'
    if (RESEARCH_FIGURE_PATTERN.test(haystack)) return '研究论文图'
    if (DATA_VIS_PATTERN.test(haystack)) return '数据可视化'
    if (/(拆解|结构|技术|流程|diagram|breakdown)/i.test(haystack)) return '技术拆解'
    if (/(地图|路线|时间线|timeline|map)/i.test(haystack)) return '地图时间线'
    return '信息图'
  }

  if (category === '海报与排版') {
    if (CARTOON_PATTERN.test(haystack)) return '卡通风格'
    if (HAND_DRAWN_PATTERN.test(haystack)) return '手绘风格'
    if (/(城市|旅行|波士顿|硅谷|成都|city|travel)/i.test(haystack)) return '旅行城市'
    if (/(字体|书法|typography|字形|排版)/i.test(haystack)) return '字体排版'
    if (/(插画|水彩|水墨|艺术|illustration)/i.test(haystack)) return '插画艺术'
    if (/(出版|杂志|跨页|封面|画册|document|publishing|海报|poster)/i.test(haystack)) return '出版物'
    return '活动海报'
  }

  if (category === '商品与电商') {
    if (/(包装|packaging|瓶|罐|盒|成分)/i.test(haystack)) return '包装卖点'
    if (/(详情页|amazon|电商|commerce|购物)/i.test(haystack)) return '电商详情'
    return '商品广告'
  }

  if (category === '品牌与空间') {
    if (/(联名|campaign|活动视觉)/i.test(haystack)) return '联名 Campaign'
    if (/(建筑|空间|architecture|城市|地图|展厅)/i.test(haystack)) return '建筑空间'
    if (/(室内|interior|店铺|房间)/i.test(haystack)) return '室内场景'
    return '品牌 VI'
  }

  if (/(手写|笔记|notebook|白板|板书)/i.test(haystack)) return '手写笔记'
  if (/(文档|报告|出版|document|paper|页面)/i.test(haystack)) return '文档出版'
  return '写实摄影'
}

function normalizeTemplateSubcategory(template: PromptTemplateInput, category: PromptTemplateCategory) {
  return inferSubcategory(template, category)
}

function normalizeTemplate(template: PromptTemplateInput): PromptTemplate {
  const override = LOCALIZED_TEMPLATE_OVERRIDES[template.id]
  const overriddenTemplate = {
    ...template,
    ...override,
    tags: override?.tags ?? template.tags,
  }
  const sourcePrompt = stripPromptSourceChatter(overriddenTemplate)
  const promptForClassification = sourcePrompt || overriddenTemplate.prompt
  const classificationTemplate = { ...overriddenTemplate, prompt: promptForClassification }
  const category = normalizeTemplateCategory(classificationTemplate)
  const subcategory = normalizeTemplateSubcategory(classificationTemplate, category)
  const description = normalizeTemplateDescription(classificationTemplate, category, subcategory)
  const prompt = !sourcePrompt
    ? buildChineseFallbackPrompt({ ...overriddenTemplate, description })
    : hasUntranslatedPromptBlock(sourcePrompt)
      ? buildChineseFallbackPrompt({ ...overriddenTemplate, prompt: sourcePrompt, description })
      : extendShortPrompt(sourcePrompt)

  return {
    ...overriddenTemplate,
    title: override?.title ?? localizeTitle(overriddenTemplate),
    category,
    description,
    prompt,
    subcategory,
    tags: Array.from(new Set(overriddenTemplate.tags.filter(Boolean))),
    imageUrl: normalizeGithubImageUrl(overriddenTemplate.imageUrl),
  }
}

function dedupeTemplates(templates: PromptTemplateInput[]) {
  const seenIds = new Set<string>()
  const seenImages = new Set<string>()
  const seenPromptKeys = new Set<string>()
  const result: PromptTemplate[] = []

  for (const template of templates) {
    if (EXCLUDED_TEMPLATE_IDS.has(template.id)) continue
    const rawHaystack = getTemplateHaystack(template)
    if (EXCLUDED_RAW_KEYWORDS.some((keyword) => rawHaystack.includes(keyword))) continue
    const normalized = normalizeTemplate(template)
    const promptKey = normalizeTemplateTextForDedup(normalized.prompt)
    if (seenIds.has(normalized.id)) continue
    if (promptKey && seenPromptKeys.has(promptKey)) continue
    if (normalized.imageUrl) {
      if (seenImages.has(normalized.imageUrl)) continue
      seenImages.add(normalized.imageUrl)
    }
    seenIds.add(normalized.id)
    if (promptKey) seenPromptKeys.add(promptKey)
    result.push(normalized)
  }

  return result
}

export const BUILT_IN_PROMPT_TEMPLATES: PromptTemplate[] = dedupeTemplates(EXPANDED_PROMPT_TEMPLATES)

function normalizeQuery(query: string) {
  return query.trim().toLowerCase()
}

export function getPromptTemplatesByCategory(category: PromptTemplateCategory | '全部') {
  if (category === '全部') return BUILT_IN_PROMPT_TEMPLATES
  return BUILT_IN_PROMPT_TEMPLATES.filter((template) => template.category === category)
}

export function getPromptTemplatesBySubcategory(subcategory: PromptTemplateSubcategory | '全部') {
  if (subcategory === '全部') return BUILT_IN_PROMPT_TEMPLATES
  return BUILT_IN_PROMPT_TEMPLATES.filter((template) => template.subcategory === subcategory)
}

export function getPromptTemplateSubcategories(category: PromptTemplateCategory | '全部' = '全部') {
  const templates = getPromptTemplatesByCategory(category)
  const presentSubcategories = new Set(templates.map((template) => template.subcategory))
  return PROMPT_TEMPLATE_SUBCATEGORIES.filter((subcategory) => presentSubcategories.has(subcategory))
}

export function getPromptTemplatesByFilters(
  category: PromptTemplateCategory | '全部',
  subcategory: PromptTemplateSubcategory | '全部' = '全部',
) {
  const templates = getPromptTemplatesByCategory(category)
  if (subcategory === '全部') return templates
  return templates.filter((template) => template.subcategory === subcategory)
}

export function searchPromptTemplates(query: string, templates = BUILT_IN_PROMPT_TEMPLATES) {
  const normalizedQuery = normalizeQuery(query)
  if (!normalizedQuery) return templates

  return templates.filter((template) => {
    const haystack = [
      template.title,
      template.category,
      template.subcategory,
      template.description,
      template.tags.join(' '),
      template.prompt,
    ].join('\n').toLowerCase()
    return haystack.includes(normalizedQuery)
  })
}
