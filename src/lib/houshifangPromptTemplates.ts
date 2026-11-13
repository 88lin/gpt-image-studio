import type { PromptTemplateCategory, PromptTemplateInput, PromptTemplateSubcategory } from './promptTemplates'

const HOUSHIFANG_SOURCE = 'houshifang/image / image2hub.netlify.app'
const HOUSHIFANG_SOURCE_URL = 'https://github.com/houshifang/image/blob/main/src/script.js'
const HOUSHIFANG_IMAGE_BASE_URL = 'https://cdn.jsdmirror.com/gh/houshifang/image@main/'

const HOUSHIFANG_TIPS = [
  '可替换标题、品牌、应用、活动或 IP 名称，保留原分类的版式和视觉节奏。',
  '图片比例按原站示例保留；如果包含界面或海报文字，先写短句并要求清晰可读。',
]

type HoushifangCategoryKey = 'ops' | 'app' | 'poster' | 'illustration' | 'ip'

type HoushifangPromptSeed = {
  id: string
  title: string
  categoryKey: HoushifangCategoryKey
  subcategory: PromptTemplateSubcategory
  ratio: string
  imagePath: string
  prompt: string
}

const HOUSHIFANG_CATEGORY_LABELS: Record<HoushifangCategoryKey, PromptTemplateCategory> = {
  ops: '运营',
  app: 'APP',
  poster: '海报',
  illustration: '插画',
  ip: '卡通IP',
}


const HOUSHIFANG_SUBCATEGORY_DIRECTIONS: Record<string, { focus: string; structure: string; style: string; useCase: string }> = {
  'AI Bot IP 角色设计': {
    focus: '设计具有统一材质和造型语言的智能体角色家族。',
    structure: '上方场景主视觉，下方独立角色展示，保持角色一一对应。',
    style: '现代互联网品牌 IP 与 3D 艺术玩具。',
    useCase: '智能体品牌、角色家族和场景主视觉',
  },
  '软雕塑角色': {
    focus: '通过夸张体块和服装材质塑造收藏人偶。',
    structure: '竖版单人展示，保留姿态、配饰和轮廓细节。',
    style: '柔软雕塑与 3D 设计师玩具。',
    useCase: '潮玩造型、时装人偶和角色提案',
  },
  '毛绒角色': {
    focus: '用针织、羊羔绒与蓬松纤维表达人物性格。',
    structure: '竖版人物或生活场景，突出毛绒材质与道具。',
    style: '毛绒艺术玩具与时装人偶。',
    useCase: '毛绒潮玩、品牌角色和生活场景',
  },
  '超现实叙事': {
    focus: '用人物、植物和日常物件建立奇异故事。',
    structure: '竖版叙事构图，扁平透视和富有表现力的人物。',
    style: '不透明水粉笔触与超现实绘本。',
    useCase: '绘本故事、艺术封面和叙事插画',
  },
  '表现主义肖像': {
    focus: '通过面部变形、夸张配色和服装纹样塑造肖像。',
    structure: '竖版半身肖像，强调面部与肩部的构图关系。',
    style: '表现主义水粉与粗颗粒笔触。',
    useCase: '艺术肖像、时装插画和出版封面',
  },
  'App 图标': {
    focus: '围绕应用名称设计单枚高完成度图标，主体清晰，图形语义一眼可读。',
    structure: '居中单个连续圆角图标，白色画布留出安全边距，图标主体约占画面 80%，不要生成多枚图标或复杂背景。',
    style: '现代轻拟物 macOS 图标质感，柔和高光、细腻材质、干净阴影和 App Store 级完成度。',
    useCase: '应用上架、产品提案和品牌视觉起稿',
  },
  '金刚区图标': {
    focus: '为移动 App 首页生成一组统一的功能或品类入口图标，强调清晰识别和一致风格。',
    structure: '9:16 画布中排布 12 个圆角卡片图标，每格有主体、短标签和统一留白，类别覆盖完整且不重复。',
    style: '3D 轻拟物或黏土质感，白底、柔光、圆润体块和商业 App 首页导航品质。',
    useCase: '移动首页导航、功能入口和产品视觉提案',
  },
  '空状态': {
    focus: '为指定 App 主题生成 6 张空状态插画，表达无内容、加载、邀请、收藏、搜索失败等常见状态。',
    structure: '每张插画放在独立容器中，统一尺寸、统一边距、下方留出短文案位置，整体排成干净展示板。',
    style: '3D 黏土插画，纯白背景、大留白、柔和投影、Dribbble 式产品插画质感。',
    useCase: 'App 空页面、组件库和产品说明',
  },
  '3D海报': {
    focus: '生成竖版运营活动海报，突出活动主题、核心标题、视觉主体和行动信息。',
    structure: '上方放大标题与副标题，中部使用 3D 主体或场景装置，下方组织时间、地点、卖点、按钮或活动说明。',
    style: '商业运营 3D 海报，饱满体块、鲜明配色、柔和棚拍光、层级清楚且适合社媒传播。',
    useCase: '节日活动、品牌运营和促销传播',
  },
  'KV海报': {
    focus: '生成横版品牌或活动 Key Visual，强调统一主题、主视觉冲击和传播延展性。',
    structure: '16:9 横向构图，左侧或中心为大标题，右侧安排主体场景、人物、商品或装置，底部留出活动信息。',
    style: '商业 KV 设计，画面开阔、主体集中、色彩有记忆点，适合线下物料和首页横幅。',
    useCase: '活动主视觉、品牌 Campaign 和横幅广告',
  },
  '电影海报': {
    focus: '为虚构电影生成完整竖版海报，突出片名、人物或核心意象、情绪冲突和上映信息。',
    structure: '9:16 构图，上方或中部为电影标题，主体用人物、剪影、城市、气候或象征物构成叙事焦点，底部有演职员式小字。',
    style: '电影级光影、强情绪色调、颗粒质感和专业海报排版，文字要像真实院线海报一样克制。',
    useCase: '影视概念、故事封面和情绪海报',
  },
  '拼贴海报': {
    focus: '生成带展览感或市集感的拼贴海报，突出多元素组合、纸张层次和主题视觉。',
    structure: '多张图片、撕纸、贴纸、图形块和文字层叠排布，主标题明确，信息区包含时间、地点和活动说明。',
    style: '复古与现代平面设计结合，纸张纹理、错位网格、高对比色块和手工拼贴质感。',
    useCase: '展览、市集、艺术节和社群活动宣传',
  },
  '艺术海报': {
    focus: '围绕抽象议题或情绪表达生成艺术海报，重点呈现观念、符号和视觉张力。',
    structure: '保留大面积主体画面或抽象装置，标题短而有力，辅助文字少量出现，版面留白稳定。',
    style: '当代艺术海报风格，克制字体、强构图、象征性图形和高级印刷质感。',
    useCase: '观点表达、展览封面和社媒视觉',
  },
  '渐变艺术': {
    focus: '生成高饱和渐变主题海报，强调音乐、运动、夏日、幻想或青春感。',
    structure: '竖版中央主体配合大面积渐变背景，标题与信息沿边缘或底部排版，装饰元素形成动势。',
    style: '柔和霓虹渐变、光晕、半透明图形和流动色彩，整体明亮但不刺眼。',
    useCase: '音乐节、运动活动和年轻化品牌传播',
  },
  '科技海报': {
    focus: '生成 AI、开发者、编程竞赛或黑客松主题科技海报，突出未来感和专业度。',
    structure: '主体可使用代码、芯片、发光界面、抽象空间或开发者形象，标题清晰，技术信息和时间地点分层组织。',
    style: '深色或高反差科技视觉，发光线框、粒子、网格、数据界面和硬朗字体，信息不能杂乱。',
    useCase: '技术大会、竞赛、产品发布和开发者活动',
  },
  '黏土风格': {
    focus: '生成单个完整黏土风商业插画，主体是可替换的物件、场景或小型装置。',
    structure: '主体居中或略偏心，配少量辅助道具和柔和地面阴影，背景干净，画面不做分镜或拼贴。',
    style: '哑光黏土、手工捏塑纹理、圆润体块、柔光和低对比阴影，整体轻松友好。',
    useCase: '产品介绍、活动封面和品牌插画',
  },
  '多巴胺': {
    focus: '生成高饱和快乐感 3D 插画，表现人物、物件或工作流中的动态瞬间。',
    structure: '主体动作夸张但可读，周围加入礼物、图标、纸片、箭头或抽象几何，背景保持简洁。',
    style: '多巴胺配色、圆润 3D 体块、明快撞色、柔和阴影和商业社媒插画质感。',
    useCase: '年轻化活动、产品功能和社媒封面',
  },
  '夸张风格': {
    focus: '生成单个夸张比例的 3D 编辑插画，强调动作张力、幽默感和视觉记忆点。',
    structure: '人物或主体有小头、圆身体、拉长四肢和夸张姿态，周围点缀抽象符号来强化动势。',
    style: '软胶、织物、橡皮泥和毛绒混合质感，高饱和色块，白底，商业渲染品质。',
    useCase: '专题封面、品牌插画和创意社媒视觉',
  },
  '卡通IP': {
    focus: '生成品牌 IP 形象展示板，突出形象名称、气质、材质、配件和多角度一致性。',
    structure: '2:3 竖版，上半区是大色块 Hero 与四分之三主体特写，下半区是 Multiview 四视图展示，比例和配件保持一致。',
    style: '潮玩级 3D 软胶或搪胶质感，色彩强记忆点，字体现代，画面像品牌手册中的形象页。',
    useCase: '品牌吉祥物、潮玩周边和 IP 视觉提案',
  },
}

const HOUSHIFANG_PROMPT_SEEDS: HoushifangPromptSeed[] = [
  {
      "id": "image2hub-bichon-shop",
      "title": "比熊商店 App 图标",
      "categoryKey": "app",
      "subcategory": "App 图标",
      "ratio": "1 / 1",
      "imagePath": "assets/app-icons/bichon-shop.webp",
      "prompt": "为名为“Bichon Shop”的 App 设计 macOS App 图标。具有平滑连续圆角的单个圆角方形图标，居中放置在带安全边距的白色画布上，占据画布的约 80%。现代轻拟物 macOS App Store 风格。只有一个图标。"
  },
  {
      "id": "image2hub-xiaoxiang-fast-food",
      "title": "小象快餐 App 图标",
      "categoryKey": "app",
      "subcategory": "App 图标",
      "ratio": "1 / 1",
      "imagePath": "assets/app-icons/xiaoxiang-fast-food.webp",
      "prompt": "为名为“Little Elephant Fast Food”的 App 设计 macOS App 图标。具有平滑连续圆角的单个圆角方形图标，居中放置在带安全边距的白色画布上，占据画布的约 80%。现代轻拟物 macOS App Store 风格。只有一个图标。"
  },
  {
      "id": "image2hub-pigeon-audiobook",
      "title": "飞鸟听书 App 图标",
      "categoryKey": "app",
      "subcategory": "App 图标",
      "ratio": "1 / 1",
      "imagePath": "assets/app-icons/pigeon-audiobook.webp",
      "prompt": "为名为“Pigeon Audiobook”的 App 设计 macOS App 图标。具有平滑连续圆角的单个圆角方形图标，居中放置在带安全边距的白色画布上，占据画布的约 80%。现代轻拟物 macOS App Store 风格。只有一个图标。"
  },
  {
      "id": "image2hub-flash-chat",
      "title": "闪聊 App 图标",
      "categoryKey": "app",
      "subcategory": "App 图标",
      "ratio": "1 / 1",
      "imagePath": "assets/app-icons/flash-chat.webp",
      "prompt": "为名为“Flash Chat”的 App 设计 macOS App 图标。具有平滑连续圆角的单个圆角方形图标，居中放置在带安全边距的白色画布上，占据画布的约 80%。现代轻拟物 macOS App Store 风格。只有一个图标。"
  },
  {
      "id": "image2hub-quick-vocabulary",
      "title": "快速背词 App 图标",
      "categoryKey": "app",
      "subcategory": "App 图标",
      "ratio": "1 / 1",
      "imagePath": "assets/app-icons/quick-vocabulary.webp",
      "prompt": "为名为“Quick Vocabulary”的 App 设计 macOS App 图标。具有平滑连续圆角的单个圆角方形图标，居中放置在带安全边距的白色画布上，占据画布的约 80%。现代轻拟物 macOS App Store 风格。只有一个图标。"
  },
  {
      "id": "image2hub-whiskey-glass",
      "title": "微醺酒杯 App 图标",
      "categoryKey": "app",
      "subcategory": "App 图标",
      "ratio": "1 / 1",
      "imagePath": "assets/app-icons/whiskey-glass.webp",
      "prompt": "为名为“Have a Drink”的 App 设计 macOS App 图标。具有平滑连续圆角的单个圆角方形图标，居中放置在带安全边距的白色画布上，占据画布的约 80%。现代轻拟物 macOS App Store 风格。只有一个图标。"
  },
  {
      "id": "image2hub-flower-delivery",
      "title": "鲜花速递 App 图标",
      "categoryKey": "app",
      "subcategory": "App 图标",
      "ratio": "1 / 1",
      "imagePath": "assets/app-icons/flower-delivery.webp",
      "prompt": "为名为“Flower Express”的 App 设计 macOS App 图标。具有平滑连续圆角的单个圆角方形图标，居中放置在带安全边距的白色画布上，占据画布的约 80%。现代轻拟物 macOS App Store 风格。只有一个图标。"
  },
  {
      "id": "image2hub-ingredients-set-a",
      "title": "生鲜食材金刚区图标 A",
      "categoryKey": "app",
      "subcategory": "金刚区图标",
      "ratio": "9 / 16",
      "imagePath": "assets/kingkong-icons/ingredients-set-a.webp",
      "prompt": "按照生鲜电商App视觉设计师的标准，设计一套首页金刚类目图标，涵盖大米、面包、牛奶、鸡蛋、肉类、蔬菜、苹果、海鲜、坚果、食用油、酱油、蛋糕等12个生鲜食材类别。统一白底圆角卡片，3D 拟物质感，干净精致，适合首页分类导航。"
  },
  {
      "id": "image2hub-food-set-a",
      "title": "外卖美食金刚区图标 A",
      "categoryKey": "app",
      "subcategory": "金刚区图标",
      "ratio": "9 / 16",
      "imagePath": "assets/kingkong-icons/food-set-a.webp",
      "prompt": "按照外卖App视觉设计师的标准，设计一套首页金刚类目图标，涵盖面条、汉堡、蛋糕、包子、披萨、咖啡、薯条、沙拉、酸奶、冰淇淋、饼干、牛奶等12个外卖品类。统一黏土风格的3D 拟物，圆润可爱，白底圆角卡片。"
  },
  {
      "id": "image2hub-ingredients-set-b",
      "title": "会员生鲜金刚区图标",
      "categoryKey": "app",
      "subcategory": "金刚区图标",
      "ratio": "9 / 16",
      "imagePath": "assets/kingkong-icons/ingredients-set-b.webp",
      "prompt": "遵循优质生鲜会员App视觉设计师的标准，设计一套首页金刚类目图标，涵盖牛油果、面包、酸奶、三文鱼、番茄、巧克力、燕麦、蜂蜜、奶酪、西兰花、鸡蛋、草莓12种食材。逼真的质感，白色背景的圆角卡片，强调新鲜、健康和优质的感觉。"
  },
  {
      "id": "image2hub-food-set-b",
      "title": "本地生活外卖金刚区图标",
      "categoryKey": "app",
      "subcategory": "金刚区图标",
      "ratio": "9 / 16",
      "imagePath": "assets/kingkong-icons/food-set-b.webp",
      "prompt": "按照本地外卖App视觉设计师的标准，设计了一套首页金刚类目图标，涵盖汉堡、蛋糕、牛肉面、咖啡、奶茶、薯条、包子、披萨、烤鸡、沙拉、酸奶、西瓜等12个外卖品类。黏土风格 3D 拟物，圆形且饱满，位于白色背景圆角卡片上。"
  },
  {
      "id": "image2hub-beauty-cosmetics",
      "title": "美妆电商金刚区图标",
      "categoryKey": "app",
      "subcategory": "金刚区图标",
      "ratio": "9 / 16",
      "imagePath": "assets/kingkong-icons/beauty-cosmetics.webp",
      "prompt": "按照美妆电商App视觉设计师的标准，设计一套粉色系的首页金刚类目图标，涵盖口红、粉饼、眼影、化妆刷、粉底、眼线笔、睫毛膏、腮红、香水、面霜、面膜、润唇膏等12个美妆品类。柔和的灯光优质质感，白色背景圆角卡片，每个卡片都带有文字标签。"
  },
  {
      "id": "image2hub-office-productivity",
      "title": "办公协作金刚区图标",
      "categoryKey": "app",
      "subcategory": "金刚区图标",
      "ratio": "9 / 16",
      "imagePath": "assets/kingkong-icons/office-productivity.webp",
      "prompt": "按照企业办公协作应用视觉设计师的标准，设计一套蓝色调的首页金刚类图标，涵盖文档、电子表格、演示、电子邮件、日历、云盘、任务、文件夹、联系人、会议、审批、通知等12种办公功能。 3D 拟物纹理，白色背景圆角卡片，每个卡片都有文字标签。"
  },
  {
      "id": "image2hub-fitness-equipment",
      "title": "健身器材金刚区图标",
      "categoryKey": "app",
      "subcategory": "金刚区图标",
      "ratio": "9 / 16",
      "imagePath": "assets/kingkong-icons/fitness-equipment.webp",
      "prompt": "按照健身电商App视觉设计师的标准，设计一套时尚的黑色高级首页金刚区分类图标，涵盖12个健身类别——哑铃、壶铃、举重片、跑步机、动感单车、跳绳、摇摇瓶、蛋白粉、运动手表、瑜伽垫、训练手套、体脂秤。逼真的拟物纹理，白色背景圆角卡片。"
  },
  {
      "id": "image2hub-music-audio",
      "title": "音乐音频金刚区图标",
      "categoryKey": "app",
      "subcategory": "金刚区图标",
      "ratio": "9 / 16",
      "imagePath": "assets/kingkong-icons/music-audio.webp",
      "prompt": "按照音乐播放应用视觉设计师的标准，设计一套首页金刚类图标，涵盖音符、黑胶唱片、均衡器、耳机、喜欢的音乐、音乐文件夹、视频、麦克风、播放列表、扬声器、CD、收音机等12种音乐功能。 3D 拟物纹理，带有色彩缤纷的口音，位于白色背景圆角卡片上。"
  },
  {
      "id": "image2hub-social",
      "title": "社交 App 空状态插画",
      "categoryKey": "app",
      "subcategory": "空状态",
      "ratio": "9 / 16",
      "imagePath": "assets/empty-states/social.webp",
      "prompt": "一套针对“社交”App的空态插画设计，具有以下要求：\n6 幅插图，3D 黏土风格。\n每个插画都放置在独立的容器中，布局统一。\n纯白背景，大间距，大留白，构图干净简洁。\nDribbble 标准。\n整体输出比例 9:16。"
  },
  {
      "id": "image2hub-music",
      "title": "音乐 App 空状态插画",
      "categoryKey": "app",
      "subcategory": "空状态",
      "ratio": "9 / 16",
      "imagePath": "assets/empty-states/music.webp",
      "prompt": "一套“音乐”App的空态插画设计，具有以下要求：\n6 幅插图，3D 黏土风格。\n每个插画都放置在独立的容器中，布局统一。\n纯白背景，大间距，大留白，构图干净简洁。\nDribbble 标准。\n整体输出比例 9:16。"
  },
  {
      "id": "image2hub-general",
      "title": "通用 App 空状态插画",
      "categoryKey": "app",
      "subcategory": "空状态",
      "ratio": "9 / 16",
      "imagePath": "assets/empty-states/general.webp",
      "prompt": "一套“通用”App的空态插画设计，具有以下要求：\n6 幅插图，3D 黏土风格。\n每个插画都放置在独立的容器中，布局统一。\n纯白背景，大间距，大留白，构图干净简洁。\nDribbble 标准。\n整体输出比例 9:16。"
  },
  {
      "id": "image2hub-ai",
      "title": "AI App 空状态插画",
      "categoryKey": "app",
      "subcategory": "空状态",
      "ratio": "9 / 16",
      "imagePath": "assets/empty-states/ai.webp",
      "prompt": "一套“AI”App的空态插画设计，具有以下要求：\n6 幅插图，3D 黏土风格。\n每个插画都放置在独立的容器中，布局统一。\n纯白背景，大间距，大留白，构图干净简洁。\nDribbble 标准。\n整体输出比例 9:16。"
  },
  {
      "id": "image2hub-ecommerce",
      "title": "电商 App 空状态插画",
      "categoryKey": "app",
      "subcategory": "空状态",
      "ratio": "9 / 16",
      "imagePath": "assets/empty-states/ecommerce.webp",
      "prompt": "一套“电商”App的空态插画设计，具有以下要求：\n6 幅插图，3D 黏土风格。\n每个插画都放置在独立的容器中，布局统一。\n纯白背景，大间距，大留白，构图干净简洁。\nDribbble 标准。\n整体输出比例 9:16。"
  },
  {
      "id": "image2hub-reading",
      "title": "阅读 App 空状态插画",
      "categoryKey": "app",
      "subcategory": "空状态",
      "ratio": "9 / 16",
      "imagePath": "assets/empty-states/reading.webp",
      "prompt": "一套“阅读”App的空态插画设计，具有以下要求：\n6 幅插图，3D 黏土风格。\n每个插画都放置在独立的容器中，布局统一。\n纯白背景，大间距，大留白，构图干净简洁。\nDribbble 标准。\n整体输出比例 9:16。"
  },
  {
      "id": "image2hub-vacation-guide",
      "title": "假期指南 3D 运营海报",
      "categoryKey": "ops",
      "subcategory": "3D海报",
      "ratio": "9 / 16",
      "imagePath": "assets/ops-c4d/vacation-guide.webp",
      "prompt": "新锐互联网运营视觉设计大师标准，Behance / Dribbble 3D 插画风格海报，C4D风格，柔光渲染，高饱和度，多巴胺调色板，抽象艺术，干净简约的背景，视觉清新，青春欢快，精致细腻。主题：摆脱办公室氛围——旅行指南。"
  },
  {
      "id": "image2hub-urban-nomad-project",
      "title": "城市游牧计划 3D 海报",
      "categoryKey": "ops",
      "subcategory": "3D海报",
      "ratio": "9 / 16",
      "imagePath": "assets/ops-c4d/urban-nomad-project.webp",
      "prompt": "新锐互联网运营视觉设计大师标准，Behance / Dribbble 3D 插画风格海报，C4D风格，柔光渲染，高饱和度，多巴胺调色板，抽象艺术，干净简约的背景，视觉清新，青春欢快，精致细腻。主题：城市游牧项目。"
  },
  {
      "id": "image2hub-join-us-recruitment",
      "title": "加入我们招聘 3D 海报",
      "categoryKey": "ops",
      "subcategory": "3D海报",
      "ratio": "9 / 16",
      "imagePath": "assets/ops-c4d/join-us-recruitment.webp",
      "prompt": "按照互联网品牌运营视觉设计师的标准，创作主题为“加入我们·团队招聘·我们需要你·寻找你的光芒·创新·协作·成长”的立式3D招聘海报。灰白色背景，居中的紫色、粉色和黄色 3D 几何形状与笑脸气球混合在一起，中间悬挂着 JOIN US ID 徽章，列出了 4 个开放角色——创意规划、视觉设计、内容运营、社区运营。整体年轻、热情、设计师玩具3D 黏土风格。"
  },
  {
      "id": "image2hub-play-wild-dopamine",
      "title": "多巴胺玩乐 3D 海报",
      "categoryKey": "ops",
      "subcategory": "3D海报",
      "ratio": "9 / 16",
      "imagePath": "assets/ops-c4d/play-wild-dopamine.webp",
      "prompt": "新锐互联网运营视觉设计大师标准，Behance / Dribbble 3D 插画风格海报，C4D风格，柔光渲染，高饱和度，多巴胺调色板，抽象艺术，干净简约的背景，视觉愉悦，精致细腻。主题：疯狂玩耍。"
  },
  {
      "id": "image2hub-play-wild-skateboard",
      "title": "滑板玩乐 3D 海报",
      "categoryKey": "ops",
      "subcategory": "3D海报",
      "ratio": "9 / 16",
      "imagePath": "assets/ops-c4d/play-wild-skateboard.webp",
      "prompt": "互联网视觉设计大师的前沿标准，Behance和Dribbble 3D 插画风格海报，C4D风格，柔光渲染，高饱和度，多巴胺，抽象艺术，干净简约的背景，视觉上清新、青春、欢快，精致细腻。主题是：疯狂玩耍"
  },
  {
      "id": "image2hub-may-day-mountain-tent",
      "title": "五一山野露营 3D 海报",
      "categoryKey": "ops",
      "subcategory": "3D海报",
      "ratio": "9 / 16",
      "imagePath": "assets/ops-c4d/may-day-mountain-tent.webp",
      "prompt": "按照假日营销视觉设计师的标准，为5月1日劳动节制作了一张竖版3D海报，主题为“5/1去露营·拥抱自然·感受美好·一起去露营”。米白色简约背景，黄粉色3D气球字母“5/1”和绿黑色3D字母“Go Camping”。下图：一座白雪皑皑的小山，一座黄白条纹的帐篷，篝火，笑脸花朵和一条小溪。整体清新小镇风格，3D 黏土美感，充足留白构图。"
  },
  {
      "id": "image2hub-may-day-girl-camping",
      "title": "五一露营人物 3D 海报",
      "categoryKey": "ops",
      "subcategory": "3D海报",
      "ratio": "9 / 16",
      "imagePath": "assets/ops-c4d/may-day-girl-camping.webp",
      "prompt": "互联网运营视觉设计大师标准，Dribbble 3D 插画风格海报，C4D风格，柔光渲染，高饱和度，抽象艺术，干净简约的背景，视觉愉悦，精致细腻。主题：5/1 去露营。"
  },
  {
      "id": "image2hub-may-day-island-tent",
      "title": "五一海岛露营 3D 海报",
      "categoryKey": "ops",
      "subcategory": "3D海报",
      "ratio": "9 / 16",
      "imagePath": "assets/ops-c4d/may-day-island-tent.webp",
      "prompt": "互联网运营视觉设计大师标准，Dribbble 3D 插画风格海报，C4D风格，柔光渲染，高饱和度，抽象艺术，干净简约的背景，视觉愉悦，精致细腻。主题：5/1 去露营。"
  },
  {
      "id": "image2hub-youth-shop-carnival",
      "title": "青春店铺狂欢 3D 海报",
      "categoryKey": "ops",
      "subcategory": "3D海报",
      "ratio": "9 / 16",
      "imagePath": "assets/ops-c4d/youth-shop-carnival.webp",
      "prompt": "风格：3D C4D渲染，泡泡玛特风格，玩具美学，充满活力的灯光。\n材质：多种纹理对比（蓬松的毛绒、优质皮革、光泽金属、电子屏幕）。\n元素：拟人化卡通手、装满可爱物品的奢华包、复古小玩意、霓虹灯发光的心。\n颜色：高对比度调色板（电蓝色、暖棕色、金丝雀黄色）、柔和的云背景。\nVibe：青春购物节，俏皮、潮流、治愈。"
  },
  {
      "id": "image2hub-street-life-festival-life",
      "title": "街头生活节 KV 主视觉",
      "categoryKey": "ops",
      "subcategory": "KV海报",
      "ratio": "16 / 9",
      "imagePath": "assets/ops-kv/street-life-festival-life.webp",
      "prompt": "新锐互联网运营视觉设计大师标准，Behance / Dribbble 3D 插画风格海报，C4D风格，柔光渲染，高饱和度，多巴胺调色板，抽象艺术，干净简约的背景，视觉清新，青春欢快，精致细腻。主题：街头生活节。比例 16:9，4K。"
  },
  {
      "id": "image2hub-street-life-festival-street",
      "title": "街头市集节 KV 主视觉",
      "categoryKey": "ops",
      "subcategory": "KV海报",
      "ratio": "16 / 9",
      "imagePath": "assets/ops-kv/street-life-festival-street.webp",
      "prompt": "新锐互联网运营视觉设计大师标准，Behance / Dribbble 3D 插画风格海报，C4D风格，柔光渲染，高饱和度，多巴胺调色板，抽象艺术，干净简约的背景，视觉清新，青春欢快，精致细腻。主题：街头生活节。比例 16:9，4K。"
  },
  {
      "id": "image2hub-morning-energy-breakfast",
      "title": "早晨能量早餐 KV 主视觉",
      "categoryKey": "ops",
      "subcategory": "KV海报",
      "ratio": "16 / 9",
      "imagePath": "assets/ops-kv/morning-energy-breakfast.webp",
      "prompt": "新锐互联网运营视觉设计大师标准，Behance / Dribbble 3D 黏土插画风格立式海报，抽象艺术，干净简约的背景，视觉清新，青春欢快，精致细腻。主题：早晨能量早餐季。比例 16:9，4K。"
  },
  {
      "id": "image2hub-weekend-food-festival",
      "title": "周末美食节 KV 主视觉",
      "categoryKey": "ops",
      "subcategory": "KV海报",
      "ratio": "16 / 9",
      "imagePath": "assets/ops-kv/weekend-food-festival.webp",
      "prompt": "新锐互联网运营视觉设计大师标准，Behance / Dribbble 3D 黏土插画风格立式海报，抽象艺术，干净简约的背景，视觉清新，青春欢快，精致细腻。主题：周末美食节。比例 16:9，4K。"
  },
  {
      "id": "image2hub-algorithm-fog",
      "title": "算法迷雾电影海报",
      "categoryKey": "poster",
      "subcategory": "电影海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/algorithm-fog.webp",
      "prompt": "模仿电影海报设计大师，具有国际电影海报品质。创建电影海报。影片名称：算法雾城。"
  },
  {
      "id": "image2hub-snowfall-like-fire",
      "title": "如火落雪电影海报",
      "categoryKey": "poster",
      "subcategory": "电影海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/snowfall-like-fire.webp",
      "prompt": "模仿电影海报设计大师，具有国际电影海报品质。创建电影海报。片名：发如雪。"
  },
  {
      "id": "image2hub-love-in-21bc",
      "title": "二十一世纪之恋电影海报",
      "categoryKey": "poster",
      "subcategory": "电影海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/love-in-21bc.webp",
      "prompt": "模仿电影海报设计大师，具有国际电影海报品质。创建电影海报。影片名称：异时代的爱情。"
  },
  {
      "id": "image2hub-sunny-day",
      "title": "晴天电影海报",
      "categoryKey": "poster",
      "subcategory": "电影海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/sunny-day.webp",
      "prompt": "模仿电影海报设计大师，具有国际电影海报品质。创建电影海报。影片名称：阳光灿烂的日子。"
  },
  {
      "id": "image2hub-wanderer-of-the-world",
      "title": "世界漂泊者电影海报",
      "categoryKey": "poster",
      "subcategory": "电影海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/wanderer-of-the-world.webp",
      "prompt": "模仿电影海报设计大师，具有国际电影海报品质。创建电影海报。影片名称：地平线的流浪者。"
  },
  {
      "id": "image2hub-love-confession-balloon",
      "title": "告白气球电影海报",
      "categoryKey": "poster",
      "subcategory": "电影海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/love-confession-balloon.webp",
      "prompt": "模仿电影海报设计大师，具有国际电影海报品质。创建电影海报。影片名称：告白气球。"
  },
  {
      "id": "image2hub-cold-war-1994",
      "title": "冷战 1994 电影海报",
      "categoryKey": "poster",
      "subcategory": "电影海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/cold-war-1994.webp",
      "prompt": "模仿电影海报设计大师，具有国际电影海报品质。创建电影海报。片名：冷战。"
  },
  {
      "id": "image2hub-tempted-three-hearts",
      "title": "三颗心诱惑电影海报",
      "categoryKey": "poster",
      "subcategory": "电影海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/tempted-three-hearts.webp",
      "prompt": "模仿电影海报设计大师，具有国际电影海报品质。创建电影海报。影片名称：诱惑的心。"
  },
  {
      "id": "image2hub-neo-creation-exhibition",
      "title": "新创造展览拼贴海报",
      "categoryKey": "poster",
      "subcategory": "拼贴海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/collage/neo-creation-exhibition.webp",
      "prompt": "国际顶级平面设计、Neo编辑杂志排版、设计展览海报。以风格化的展览标题作为主导视觉，并采用定制设计的艺术排版。结构紧凑的编辑布局。荧光色块作为边框，覆盖纸张纹理和微妙的噪点颗粒，营造出贴纸拼贴的感觉。黑白摄影背景底座。高饱和度单色 3D 物体，表面材质稍粗糙。不规则但保留设计顺序的拼贴构图。最小的空白背景。杂志级的专业布局。装饰性小元素，如印章、箭头、英文标题和 ® 符号。国际设计展基调，awwwards/Behance专业水准。海报主题：Neo Creation Exhibition 2024 — New Objects for a New Age。宽高比 9:16，4K 分辨率。"
  },
  {
      "id": "image2hub-neo-realm",
      "title": "新境界拼贴海报",
      "categoryKey": "poster",
      "subcategory": "拼贴海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/collage/neo-realm.webp",
      "prompt": "国际顶级平面设计、Neo编辑杂志排版、设计展览海报。以风格化的展览标题作为主导视觉，并采用定制设计的艺术排版。结构紧凑的编辑布局。荧光色块作为边框，覆盖纸张纹理和微妙的噪点颗粒，营造出贴纸拼贴的感觉。黑白摄影背景底座。高饱和度单色 3D 物体，表面材质稍粗糙。不规则但保留设计顺序的拼贴构图。最小的空白背景。杂志级的专业布局。装饰性小元素，如印章、箭头、英文标题和 ® 符号。国际设计展基调，awwwards/Behance专业水准。海报主题：Neo Realm国际设计暨梦幻艺术展。宽高比 9:16，4K 分辨率。"
  },
  {
      "id": "image2hub-graphic-design-exhibition",
      "title": "平面设计展拼贴海报",
      "categoryKey": "poster",
      "subcategory": "拼贴海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/collage/graphic-design-exhibition.webp",
      "prompt": "国际顶级平面设计、Neo编辑杂志排版、设计展览海报。以风格化的展览标题作为主导视觉，并采用定制设计的艺术排版。结构紧凑的编辑布局。荧光色块作为边框，覆盖纸张纹理和微妙的噪点颗粒，营造出贴纸拼贴的感觉。黑白摄影背景底座。高饱和度单色 3D 物体，表面材质稍粗糙。不规则但保留设计顺序的拼贴构图。最小的空白背景。杂志级的专业布局。装饰性小元素，如印章、箭头、英文标题和 ® 符号。国际设计展基调，awwwards/Behance专业水准。海报主题：2025国际平面设计展——创意连接未来。宽高比 9:16，4K 分辨率。"
  },
  {
      "id": "image2hub-vintage-market-yellow",
      "title": "复古市集黄色拼贴海报",
      "categoryKey": "poster",
      "subcategory": "拼贴海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/collage/vintage-market-yellow.webp",
      "prompt": "国际顶级平面设计、Neo编辑杂志排版、设计展览海报。以风格化的展览标题作为主导视觉，并采用定制设计的艺术排版。结构紧凑的编辑布局。荧光色块作为边框，覆盖纸张纹理和微妙的噪点颗粒，营造出贴纸拼贴的感觉。黑白摄影背景底座。高饱和度单色 3D 物体，表面材质稍粗糙。不规则但保留设计顺序的拼贴构图。最小的空白背景。杂志级的专业布局。装饰性小元素，如印章、箭头、英文标题和 ® 符号。国际设计展基调，awwwards/Behance专业水准。海报主题：周末复古市场——荧光黄留声机版。宽高比 9:16，4K 分辨率。"
  },
  {
      "id": "image2hub-vintage-market-pink",
      "title": "复古市集粉色拼贴海报",
      "categoryKey": "poster",
      "subcategory": "拼贴海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/collage/vintage-market-pink.webp",
      "prompt": "国际顶级平面设计、Neo编辑杂志排版、设计展览海报。以风格化的展览标题作为主导视觉，并采用定制设计的艺术排版。结构紧凑的编辑布局。荧光色块作为边框，覆盖纸张纹理和微妙的噪点颗粒，营造出贴纸拼贴的感觉。黑白摄影背景底座。高饱和度单色 3D 物体，表面材质稍粗糙。不规则但保留设计顺序的拼贴构图。最小的空白背景。杂志级的专业布局。装饰性小元素，如印章、箭头、英文标题和 ® 符号。国际设计展基调，awwwards/Behance专业水准。海报主题：周末复古市场 — 洋红色留声机版。宽高比 9:16，4K 分辨率。"
  },
  {
      "id": "image2hub-langyuan-arts-festival",
      "title": "廊园艺术节拼贴海报",
      "categoryKey": "poster",
      "subcategory": "拼贴海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/collage/langyuan-arts-festival.webp",
      "prompt": "国际顶级平面设计、Neo编辑杂志排版、设计展览海报。以风格化的展览标题作为主导视觉，并采用定制设计的艺术排版。结构紧凑的编辑布局。荧光色块作为边框，覆盖纸张纹理和微妙的噪点颗粒，营造出贴纸拼贴的感觉。黑白摄影背景底座。高饱和度单色 3D 物体，表面材质稍粗糙。不规则但保留设计顺序的拼贴构图。最小的空白背景。杂志级的专业布局。装饰性小元素，如印章、箭头、英文标题和 ® 符号。国际设计展基调，awwwards/Behance专业水准。海报主题：2024年阆园艺术节——创造力与社区的庆典。宽高比 9:16，4K 分辨率。"
  },
  {
      "id": "image2hub-pet-market",
      "title": "宠物市集拼贴海报",
      "categoryKey": "poster",
      "subcategory": "拼贴海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/collage/pet-market.webp",
      "prompt": "国际顶级平面设计、Neo编辑杂志排版、设计展览海报。以风格化的展览标题作为主导视觉，并采用定制设计的艺术排版。结构紧凑的编辑布局。荧光色块作为边框，覆盖纸张纹理和微妙的噪点颗粒，营造出贴纸拼贴的感觉。黑白摄影背景底座。高饱和度单色 3D 物体，表面材质稍粗糙。不规则但保留设计顺序的拼贴构图。最小的空白背景。杂志级的专业布局。装饰性小元素，如印章、箭头、英文标题和 ® 符号。国际设计展基调，awwwards/Behance专业水准。海报主题：宠物市场——宠物与人共同生活。宽高比 9:16，4K 分辨率。"
  },
  {
      "id": "image2hub-city-sonic-arts-festival",
      "title": "城市声波艺术节拼贴海报",
      "categoryKey": "poster",
      "subcategory": "拼贴海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/collage/city-sonic-arts-festival.webp",
      "prompt": "国际顶级平面设计、Neo编辑杂志排版、设计展览海报。以风格化的展览标题作为主导视觉，并采用定制设计的艺术排版。结构紧凑的编辑布局。荧光色块作为边框，覆盖纸张纹理和微妙的噪点颗粒，营造出贴纸拼贴的感觉。黑白摄影背景底座。高饱和度单色 3D 物体，表面材质稍粗糙。不规则但保留设计顺序的拼贴构图。最小的空白背景。杂志级的专业布局。装饰性小元素，如印章、箭头、英文标题和 ® 符号。国际设计展基调，awwwards/Behance专业水准。海报主题：城市声波艺术节2024——在城市喧嚣中寻找回声。宽高比 9:16，4K 分辨率。"
  },
  {
      "id": "image2hub-refuse-involution",
      "title": "拒绝内耗艺术海报",
      "categoryKey": "poster",
      "subcategory": "艺术海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/art/refuse-involution.webp",
      "prompt": "国际顶级平面设计海报，新编辑/当代编辑风格，D&AD/Awwwards/Behance 奖项级视觉品质。\n\n主题：拒绝内卷化。\n\n为主题构建一个强大的核心视觉隐喻——将抽象概念转化为雕塑般的、标志性的、装置般的物体。核心物体应该出现切割、分层、拉伸、堆叠、重构、包裹或解构，带有明确的概念意义而不是装饰性装饰。\n\n干净、简约的浅灰色背景，带有大量的空白。\n\n高对比度的现代编辑排版布局：顶部超大粗体黑色英文标题，副标题，注释文本，展览式信息层次结构。\n\n瑞士编辑网格系统具有有意的断裂、不对称的平衡、精确的对齐、强烈的节奏、精致的间距。\n\n居中或近居中的构图，具有强烈的垂直张力。\n\n材质和渲染：优质的产品渲染质量、哑光表面、微妙的反射、硬边切割、轻微的层间半透明、悬浮切片结构、精致的细节、清晰的轮廓。\n\n颜色：以黑色、白色和灰色为主，带有单一醒目的强调色和非常有限的次要强调色——内敛、高端、现代。\n\n灯光：柔和的工作室灯光、微妙的阴影、超干净的渲染、高度抛光但无光泽、锐利的细节。\n\n情绪：概念性、知性、展览级、当代、优质、内敛、标志性。\n\n宽高比9:16，4K，超锐利，超细致，超干净，高分辨率。"
  },
  {
      "id": "image2hub-information-overload",
      "title": "信息过载艺术海报",
      "categoryKey": "poster",
      "subcategory": "艺术海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/art/information-overload.webp",
      "prompt": "国际顶级平面设计海报，新编辑/当代编辑风格，D&AD/Awwwards/Behance 奖项级视觉品质。\n\n主题：信息过载。\n\n为主题构建一个强大的核心视觉隐喻——将抽象概念转化为雕塑般的、标志性的、装置般的物体。核心物体应该出现切割、分层、拉伸、堆叠、重构、包裹或解构，带有明确的概念意义而不是装饰性装饰。\n\n干净、简约的浅灰色背景，带有大量的空白。\n\n高对比度的现代编辑排版布局：顶部超大粗体黑色英文标题，副标题，注释文本，展览式信息层次结构。\n\n瑞士编辑网格系统具有有意的断裂、不对称的平衡、精确的对齐、强烈的节奏、精致的间距。\n\n居中或近居中的构图，具有强烈的垂直张力。\n\n材质和渲染：优质的产品渲染质量、哑光表面、微妙的反射、硬边切割、轻微的层间半透明、悬浮切片结构、精致的细节、清晰的轮廓。\n\n颜色：以黑色、白色和灰色为主，带有单一醒目的强调色和非常有限的次要强调色——内敛、高端、现代。\n\n灯光：柔和的工作室灯光、微妙的阴影、超干净的渲染、高度抛光但无光泽、锐利的细节。\n\n情绪：概念性、知性、展览级、当代、优质、内敛、标志性。\n\n宽高比9:16，4K，超锐利，超细致，超干净，高分辨率。"
  },
  {
      "id": "image2hub-recycle-rebuild-tomorrow",
      "title": "循环重建明天艺术海报",
      "categoryKey": "poster",
      "subcategory": "艺术海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/art/recycle-rebuild-tomorrow.webp",
      "prompt": "国际顶级平面设计海报，新编辑/当代编辑风格，D&AD/Awwwards/Behance 奖项级视觉品质。\n\n主题：Re:Cycle——今天重新设计，明天重建。\n\n为主题构建一个强大的核心视觉隐喻——将抽象概念转化为雕塑般的、标志性的、装置般的物体。核心物体应该出现切割、分层、拉伸、堆叠、重构、包裹或解构，带有明确的概念意义而不是装饰性装饰。\n\n干净、简约的浅灰色背景，带有大量的空白。\n\n高对比度的现代编辑排版布局：顶部超大粗体黑色英文标题，副标题，注释文本，展览式信息层次结构。\n\n瑞士编辑网格系统具有有意的断裂、不对称的平衡、精确的对齐、强烈的节奏、精致的间距。\n\n居中或近居中的构图，具有强烈的垂直张力。\n\n材质和渲染：优质的产品渲染质量、哑光表面、微妙的反射、硬边切割、轻微的层间半透明、悬浮切片结构、精致的细节、清晰的轮廓。\n\n颜色：以黑色、白色和灰色为主，带有单一醒目的强调色和非常有限的次要强调色——内敛、高端、现代。\n\n灯光：柔和的工作室灯光、微妙的阴影、超干净的渲染、高度抛光但无光泽、锐利的细节。\n\n情绪：概念性、知性、展览级、当代、优质、内敛、标志性。\n\n宽高比9:16，4K，超锐利，超细致，超干净，高分辨率。"
  },
  {
      "id": "image2hub-new-intelligence",
      "title": "新智能艺术海报",
      "categoryKey": "poster",
      "subcategory": "艺术海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/art/new-intelligence.webp",
      "prompt": "国际顶级平面设计海报，新编辑/当代编辑风格，D&AD/Awwwards/Behance 奖项级视觉品质。\n\n主题：新智能的内涵——人工智能时代。\n\n为主题构建一个强大的核心视觉隐喻——将抽象概念转化为雕塑般的、标志性的、装置般的物体。核心物体应该出现切割、分层、拉伸、堆叠、重构、包裹或解构，带有明确的概念意义而不是装饰性装饰。\n\n干净、简约的浅灰色背景，带有大量的空白。\n\n高对比度的现代编辑排版布局：顶部超大粗体黑色英文标题，副标题，注释文本，展览式信息层次结构。\n\n瑞士编辑网格系统具有有意的断裂、不对称的平衡、精确的对齐、强烈的节奏、精致的间距。\n\n居中或近居中的构图，具有强烈的垂直张力。\n\n材质和渲染：优质的产品渲染质量、哑光表面、微妙的反射、硬边切割、轻微的层间半透明、悬浮切片结构、精致的细节、清晰的轮廓。\n\n颜色：以黑色、白色和灰色为主，带有单一醒目的强调色和非常有限的次要强调色——内敛、高端、现代。\n\n灯光：柔和的工作室灯光、微妙的阴影、超干净的渲染、高度抛光但无光泽、锐利的细节。\n\n情绪：概念性、知性、展览级、当代、优质、内敛、标志性。\n\n宽高比9:16，4K，超锐利，超细致，超干净，高分辨率。"
  },
  {
      "id": "image2hub-stay-focused",
      "title": "保持专注艺术海报",
      "categoryKey": "poster",
      "subcategory": "艺术海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/art/stay-focused.webp",
      "prompt": "国际顶级平面设计海报，新编辑/当代编辑风格，D&AD/Awwwards/Behance 奖项级视觉品质。\n\n主题：保持专注。\n\n为主题构建一个强大的核心视觉隐喻——将抽象概念转化为雕塑般的、标志性的、装置般的物体。核心物体应该出现切割、分层、拉伸、堆叠、重构、包裹或解构，带有明确的概念意义而不是装饰性装饰。\n\n干净、简约的浅灰色背景，带有大量的空白。\n\n高对比度的现代编辑排版布局：顶部超大粗体黑色英文标题，副标题，注释文本，展览式信息层次结构。\n\n瑞士编辑网格系统具有有意的断裂、不对称的平衡、精确的对齐、强烈的节奏、精致的间距。\n\n居中或近居中的构图，具有强烈的垂直张力。\n\n材质和渲染：优质的产品渲染质量、哑光表面、微妙的反射、硬边切割、轻微的层间半透明、悬浮切片结构、精致的细节、清晰的轮廓。\n\n颜色：以黑色、白色和灰色为主，带有单一醒目的强调色和非常有限的次要强调色——内敛、高端、现代。\n\n灯光：柔和的工作室灯光、微妙的阴影、超干净的渲染、高度抛光但无光泽、锐利的细节。\n\n情绪：概念性、知性、展览级、当代、优质、内敛、标志性。\n\n宽高比9:16，4K，超锐利，超细致，超干净，高分辨率。"
  },
  {
      "id": "image2hub-daydream-worker",
      "title": "白日梦打工人艺术海报",
      "categoryKey": "poster",
      "subcategory": "艺术海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/art/daydream-worker.webp",
      "prompt": "国际顶级平面设计海报，新编辑/当代编辑风格，D&AD/Awwwards/Behance 奖项级视觉品质。\n\n主题：白日梦工作者——在小说的​​海洋中创造真实的自己。\n\n为主题构建一个强大的核心视觉隐喻——将抽象概念转化为雕塑般的、标志性的、装置般的物体。核心物体应该出现切割、分层、拉伸、堆叠、重构、包裹或解构，带有明确的概念意义而不是装饰性装饰。\n\n干净、简约的浅灰色背景，带有大量的空白。\n\n高对比度的现代编辑排版布局：顶部超大粗体黑色英文标题，副标题，注释文本，展览式信息层次结构。\n\n瑞士编辑网格系统具有有意的断裂、不对称的平衡、精确的对齐、强烈的节奏、精致的间距。\n\n居中或近居中的构图，具有强烈的垂直张力。\n\n材质和渲染：优质的产品渲染质量、哑光表面、微妙的反射、硬边切割、轻微的层间半透明、悬浮切片结构、精致的细节、清晰的轮廓。\n\n颜色：以黑色、白色和灰色为主，带有单一醒目的强调色和非常有限的次要强调色——内敛、高端、现代。\n\n灯光：柔和的工作室灯光、微妙的阴影、超干净的渲染、高度抛光但无光泽、锐利的细节。\n\n情绪：概念性、知性、展览级、当代、优质、内敛、标志性。\n\n宽高比9:16，4K，超锐利，超细致，超干净，高分辨率。"
  },
  {
      "id": "image2hub-infinite-love-marathon-guitar",
      "title": "无限热爱马拉松渐变艺术海报",
      "categoryKey": "poster",
      "subcategory": "渐变艺术",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/gradient-art/infinite-love-marathon-guitar.webp",
      "prompt": "瑞士国际风格，现代简约平面矢量海报，9:16 宽高比，对角切片布局。左上：衬线字体的繁体中文标题搭配优雅的连接脚本衬线英文。右下：海报的核心符号图形——抽象平面矢量图、荧光颜色渐变、微妙的颗粒噪声、装饰像素图标、当代文化节海报、现代设计展览质量。主题：无限爱马拉松音乐会。 4K。"
  },
  {
      "id": "image2hub-strawberry-music-festival",
      "title": "草莓音乐节渐变艺术海报",
      "categoryKey": "poster",
      "subcategory": "渐变艺术",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/gradient-art/strawberry-music-festival.webp",
      "prompt": "瑞士国际风格，现代简约平面矢量海报，9:16 宽高比，对角切片布局。左上：衬线字体的繁体中文标题搭配优雅的连接脚本衬线英文。右下：海报的核心符号图形——抽象平面矢量图、荧光颜色渐变、微妙的颗粒噪声、装饰像素图标、当代文化节海报、现代设计展览质量。主题：草莓音乐节。 4K。"
  },
  {
      "id": "image2hub-infinite-love-marathon-floral",
      "title": "花束马拉松渐变艺术海报",
      "categoryKey": "poster",
      "subcategory": "渐变艺术",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/gradient-art/infinite-love-marathon-floral.webp",
      "prompt": "瑞士国际风格，现代简约平面矢量海报，9:16 宽高比，对角切片布局。左上：衬线字体的繁体中文标题搭配优雅的连接脚本衬线英文。右下：海报的核心符号图形——抽象平面矢量图、荧光颜色渐变、微妙的颗粒噪声、装饰像素图标、当代文化节海报、现代设计展览质量。主题：无限爱马拉松音乐会（花卉主视觉）。 4K。"
  },
  {
      "id": "image2hub-xiami-music-festival",
      "title": "虾米音乐节渐变艺术海报",
      "categoryKey": "poster",
      "subcategory": "渐变艺术",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/gradient-art/xiami-music-festival.webp",
      "prompt": "瑞士国际风格，现代简约平面矢量海报，9:16 宽高比，对角切片布局。左上：衬线字体的繁体中文标题搭配优雅的连接脚本衬线英文。右下：海报的核心符号图形——抽象平面矢量图、荧光颜色渐变、微妙的颗粒噪声、装饰像素图标、当代文化节海报、现代设计展览质量。主题：虾米音乐节。 4K。"
  },
  {
      "id": "image2hub-weekend-daydream-plan",
      "title": "周末白日梦计划渐变艺术海报",
      "categoryKey": "poster",
      "subcategory": "渐变艺术",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/gradient-art/weekend-daydream-plan.webp",
      "prompt": "瑞士国际风格，现代简约平面矢量海报，9:16 宽高比，对角切片布局。左上：衬线字体的繁体中文标题搭配优雅的连接脚本衬线英文。右下：海报的核心符号图形——抽象平面矢量图、荧光颜色渐变、微妙的颗粒噪声、装饰像素图标、当代文化节海报、现代设计展览质量。主题：周末白日梦计划。 4K。"
  },
  {
      "id": "image2hub-summer-bubble-lab",
      "title": "夏日泡泡实验室渐变艺术海报",
      "categoryKey": "poster",
      "subcategory": "渐变艺术",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/gradient-art/summer-bubble-lab.webp",
      "prompt": "瑞士国际风格，现代简约平面矢量海报，9:16 宽高比，对角切片布局。左上：衬线字体的繁体中文标题搭配优雅的连接脚本衬线英文。右下：海报的核心符号图形——抽象平面矢量图、荧光颜色渐变、微妙的颗粒噪声、装饰像素图标、当代文化节海报、现代设计展览质量。主题：夏季泡泡实验室。 4K。"
  },
  {
      "id": "image2hub-ai-programming-competition-2024",
      "title": "2024 AI 编程竞赛科技海报",
      "categoryKey": "poster",
      "subcategory": "科技海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/tech/ai-programming-competition-2024.webp",
      "prompt": "创建图像。国际顶级科技活动海报，9:16 竖版，深黑色背景，充足留白。未来派 3D 玻璃主视觉：两侧有代码括号的发光立方体、霓虹蓝和紫色渐变照明、C4D / Octane 磨砂玻璃品质。粗体标题：带有渐变AI字标的AI编程大赛；口号：编码未来。智能解决方案。页脚行：日历 2024 年 6 月 21 日至 23 日，地球图标 Online Worldwide，奖杯总奖金超过 100,000 美元；紫色描边的“立即注册”胶囊按钮 CTA。"
  },
  {
      "id": "image2hub-beijing-ai-coding-competition",
      "title": "北京 AI 编程竞赛科技海报",
      "categoryKey": "poster",
      "subcategory": "科技海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/tech/beijing-ai-coding-competition.webp",
      "prompt": "创建图像。北京AI编码大赛海报，9:16 竖版，纯黑色背景，霓虹蓝紫色发光。主视觉：大中文标题北京AI编码大赛，副标题智能·创新·突破。中：圆形分层基座上的发光线框天坛和未来派北京天际线上方的半透明 3D 代码符号 </>。下：四个图标栏——AI极客挑战火箭奖杯，中文微文案；CTA 胶囊按钮文字“即将开启”； 页脚：2024.06，敬请期待。"
  },
  {
      "id": "image2hub-developer-code-supercharged",
      "title": "开发者代码加速科技海报",
      "categoryKey": "poster",
      "subcategory": "科技海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/tech/developer-code-supercharged.webp",
      "prompt": "创建图像。国际科技产品发布会海报，9:16 竖版，简约深黑色背景。主视觉为优质 3D 磨砂玻璃六边形，内部包含玻璃代码字形 </>；微妙的紫蓝色边缘亮点。居中排版：超级/开发者金属渐变标题；灰色标语你的代码，全面加速。；小号等宽文字 LAUNCHING 2024.06.06 具有柔和的蓝紫色光芒；底部有微小的终端字形徽章。 风格接近 Apple / Linear / Notion。"
  },
  {
      "id": "image2hub-super-developer-launch",
      "title": "超级开发者发布科技海报",
      "categoryKey": "poster",
      "subcategory": "科技海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/tech/super-developer-launch.webp",
      "prompt": "创建图像。国际顶级科技发布会视觉海报，极简未来感设计，深邃的纯黑背景，充足留白，9:16 竖版构图。科技视觉风格类似于 Apple、Toss、Notion 和 Linear。干净简约的3D 主视觉图形；渲染质量：优质 C4D / Octane 渲染外观，磨砂玻璃材质。版式和布局：居中构图。主题：超级开发者。"
  },
  {
      "id": "image2hub-hackathon-2025",
      "title": "2025 黑客松科技海报",
      "categoryKey": "poster",
      "subcategory": "科技海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/tech/hackathon-2025.webp",
      "prompt": "创建图像。国际顶级科技发布会视觉海报，极简未来感设计，深邃的纯黑背景，充足留白，9:16 竖版构图。科技视觉风格类似于 Apple、Toss、Notion 和 Linear。干净简约的3D 主视觉图形；渲染质量：优质 C4D / Octane 渲染外观，磨砂玻璃材质。版式和布局：居中构图。主题：黑客马拉松——构建、创新、影响。"
  },
  {
      "id": "image2hub-future-one-breakthrough",
      "title": "未来一号突破科技海报",
      "categoryKey": "poster",
      "subcategory": "科技海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/tech/future-one-breakthrough.webp",
      "prompt": "创建图像。国际顶级科技发布会视觉海报，极简未来感设计，深邃的纯黑背景，充足留白，9:16 竖版构图。科技视觉风格类似于 Apple、Toss、Notion 和 Linear。干净简约的3D 主视觉图形；渲染质量：优质 C4D / Octane 渲染外观，磨砂玻璃材质。版式和布局：居中构图。主题：Future One——下一个突破，新产品即将推出。"
  },
  {
      "id": "image2hub-shanghai-ai-coding-2026",
      "title": "2026 上海 AI 编程科技海报",
      "categoryKey": "poster",
      "subcategory": "科技海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/tech/shanghai-ai-coding-2026.webp",
      "prompt": "创建图像。国际顶级科技发布会视觉海报，极简未来感设计，深邃的纯黑背景，充足留白，9:16 竖版构图。科技视觉风格类似于 Apple、Toss、Notion 和 Linear。干净简约的3D 主视觉图形；渲染质量：优质 C4D / Octane 渲染外观，磨砂玻璃材质。版式和布局：居中构图。主题：2026上海人工智能编程大赛。"
  },
  {
      "id": "image2hub-the-future-is-now",
      "title": "未来已来科技海报",
      "categoryKey": "poster",
      "subcategory": "科技海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/tech/the-future-is-now.webp",
      "prompt": "创建图像。国际顶级科技发布会视觉海报，极简未来感设计，深邃的纯黑背景，充足留白，9:16 竖版构图。科技视觉风格类似于 Apple、Toss、Notion 和 Linear。干净简约的3D 主视觉图形；渲染质量：优质 C4D / Octane 渲染外观，磨砂玻璃材质。版式和布局：居中构图。主题：未来就在眼前——科技改变世界，创新驱动未来。"
  },
  {
      "id": "image2hub-infinite-loading",
      "title": "无限加载科技海报",
      "categoryKey": "poster",
      "subcategory": "科技海报",
      "ratio": "9 / 16",
      "imagePath": "assets/posters/tech/infinite-loading.webp",
      "prompt": "创建图像。国际顶级科技发布会视觉海报，极简未来感设计，深邃的纯黑背景，充足留白，9:16 竖版构图。科技视觉风格类似于 Apple、Toss、Notion 和 Linear。干净简约的3D 主视觉图形；渲染质量：优质 C4D / Octane 渲染外观，磨砂玻璃材质。版式和布局：居中构图。主题：无限加载。"
  },
  {
      "id": "image2hub-clay-muzik-radio",
      "title": "黏土风格音乐电台插画",
      "categoryKey": "illustration",
      "subcategory": "黏土风格",
      "ratio": "3 / 4",
      "imagePath": "assets/illustration/clay/clay-muzik-radio.webp",
      "prompt": "3D 插画，黏土风格，软塑材质，玩具般的人物设计，\n\n艺术抽象雕塑，多巴胺调色板，\n\n柔和的工作室照明、全局光照、柔和的阴影、\n\n柔和基调搭配鲜明点缀色，\n\n居中构图，单一主体对象，干净的背景，\n\n漂浮的装饰元素，\n\n贴纸拼贴细节、UI 标签、徽章、俏皮图标（星星、音符、形状）、\n\n小号排版、虚构的品牌文字、\n\n快乐、俏皮、异想天开但设计精良，\n\n编辑级质量，Behance / Awwwards 标准。\n\n— 主题：“Muzik”便携式音箱音乐播放器"
  },
  {
      "id": "image2hub-clay-game-on-arcade",
      "title": "黏土风格街机复古装置插画",
      "categoryKey": "illustration",
      "subcategory": "黏土风格",
      "ratio": "3 / 4",
      "imagePath": "assets/illustration/clay/clay-game-on-arcade.webp",
      "prompt": "3D 插画，黏土风格，软塑材质，玩具般的人物设计，\n\n艺术抽象雕塑，多巴胺调色板，\n\n柔和的工作室照明、全局光照、柔和的阴影、\n\n柔和基调搭配鲜明点缀色，\n\n居中构图，单一主体对象，干净的背景，\n\n漂浮的装饰元素，\n\n贴纸拼贴细节、UI 标签、徽章、俏皮图标（星星、音符、形状）、\n\n小号排版、虚构的品牌文字、\n\n快乐、俏皮、异想天开但设计精良，\n\n编辑级质量，Behance / Awwwards 标准。\n\n— 主题：“GAME ON”复古掌上游戏机"
  },
  {
      "id": "image2hub-clay-smooth-blender",
      "title": "黏土风格搅拌器插画",
      "categoryKey": "illustration",
      "subcategory": "黏土风格",
      "ratio": "3 / 4",
      "imagePath": "assets/illustration/clay/clay-smooth-blender.webp",
      "prompt": "3D 插画，黏土风格，软塑材质，玩具般的人物设计，\n\n艺术抽象雕塑，多巴胺调色板，\n\n柔和的工作室照明、全局光照、柔和的阴影、\n\n柔和基调搭配鲜明点缀色，\n\n居中构图，单一主体对象，干净的背景，\n\n漂浮的装饰元素，\n\n贴纸拼贴细节、UI 标签、徽章、俏皮图标（星星、音符、形状）、\n\n小号排版、虚构的品牌文字、\n\n快乐、俏皮、异想天开但设计精良，\n\n编辑级质量，Behance / Awwwards 标准。\n\n— 主题：“SMOOTH”水果冰沙搅拌机"
  },
  {
      "id": "image2hub-clay-hello-flower",
      "title": "黏土风格花店问候插画",
      "categoryKey": "illustration",
      "subcategory": "黏土风格",
      "ratio": "3 / 4",
      "imagePath": "assets/illustration/clay/clay-hello-flower.webp",
      "prompt": "3D 插画，黏土风格，软塑材质，玩具般的人物设计，\n\n艺术抽象雕塑，多巴胺调色板，\n\n柔和的工作室照明、全局光照、柔和的阴影、\n\n柔和基调搭配鲜明点缀色，\n\n居中构图，单一主体对象，干净的背景，\n\n漂浮的装饰元素，\n\n贴纸拼贴细节、UI 标签、徽章、俏皮图标（星星、音符、形状）、\n\n小号排版、虚构的品牌文字、\n\n快乐、俏皮、异想天开但设计精良，\n\n编辑级质量，Behance / Awwwards 标准。\n\n— 主题：“你好！”复古电视花盆"
  },
  {
      "id": "image2hub-clay-vinyl-player",
      "title": "黏土风格黑胶唱机插画",
      "categoryKey": "illustration",
      "subcategory": "黏土风格",
      "ratio": "3 / 4",
      "imagePath": "assets/illustration/clay/clay-vinyl-player.webp",
      "prompt": "3D 插画，黏土风格，软塑材质，玩具般的人物设计，\n\n艺术抽象雕塑，多巴胺调色板，\n\n柔和的工作室照明、全局光照、柔和的阴影、\n\n柔和基调搭配鲜明点缀色，\n\n居中构图，单一主体对象，干净的背景，\n\n漂浮的装饰元素，\n\n贴纸拼贴细节、UI 标签、徽章、俏皮图标（星星、音符、形状）、\n\n小号排版、虚构的品牌文字、\n\n快乐、俏皮、异想天开但设计精良，\n\n编辑级质量，Behance / Awwwards 标准。\n\n— 主题：“GOOD VIBES”便携式黑胶唱片机"
  },
  {
      "id": "image2hub-clay-vending-machine",
      "title": "黏土风格自动贩卖机插画",
      "categoryKey": "illustration",
      "subcategory": "黏土风格",
      "ratio": "3 / 4",
      "imagePath": "assets/illustration/clay/clay-vending-machine.webp",
      "prompt": "3D 插画，黏土风格，软塑材质，玩具般的人物设计，\n\n艺术抽象雕塑，多巴胺调色板，\n\n柔和的工作室照明、全局光照、柔和的阴影、\n\n柔和基调搭配鲜明点缀色，\n\n居中构图，单一主体对象，干净的背景，\n\n漂浮的装饰元素，\n\n贴纸拼贴细节、UI 标签、徽章、俏皮图标（星星、音符、形状）、\n\n小号排版、虚构的品牌文字、\n\n快乐、俏皮、异想天开但设计精良，\n\n编辑级质量，Behance / Awwwards 标准。\n\n— 主题：“祝你有美好的一天！”饮料自动售货机"
  },
  {
      "id": "image2hub-dopamine-gift-haul",
      "title": "多巴胺礼物搬运插画",
      "categoryKey": "illustration",
      "subcategory": "多巴胺",
      "ratio": "3 / 4",
      "imagePath": "assets/illustration/dopamine/dopamine-gift-haul.webp",
      "prompt": "完整的单一3D 插画，夸张的艺术编辑插画风格，不是分镜，不是拼贴版式。\n\n主体是一个夸张的卡通人物，头很小，圆胖的身子，四肢极其修长，手很大，鞋很大，重心不平衡，定格在半空中，做出戏剧性的跳跃姿势，具有很强的张力和喜剧能量。\n\n整体形状看起来像一个软雕塑玩具——圆形、厚实、有弹性、夸张——在解剖学上不正确。\n\n材质为哑光软橡胶、毛绒织物、针织纹理、橡皮泥手感、细纤维细节、轻微颗粒、手工雕刻触感——避免有光泽的塑料玩具外观、避免半透明玻璃外观、避免高反射。\n\n高饱和度的多巴胺调色板，大胆的色彩碰撞，大面积的平面色块，明亮但不过分发光。\n\n干净的白色背景，最小的空间，只有地面上柔和的椭圆形阴影，没有复杂的场景。\n\n在角色周围浮动抽象图形元素：星星、曲线、球、立方体、图标、符号 - 所有这些都呈现为软橡胶或纸质道具，以增强运动和设计感。\n\n柔和的工作室照明、全局光照、柔和的阴影、低对比度、干净的商业级渲染。\n\nC4D / Blender 3D 插画，风格化软雕塑，哑光黏土材质，毛绒织物纹理，针织表面细节，俏皮的编辑3D 插画，高品质。\n\n— 主题：一个快乐的男孩拥抱一大堆彩色礼品盒，假日购物"
  },
  {
      "id": "image2hub-dopamine-present-dash",
      "title": "多巴胺礼盒冲刺插画",
      "categoryKey": "illustration",
      "subcategory": "多巴胺",
      "ratio": "3 / 4",
      "imagePath": "assets/illustration/dopamine/dopamine-present-dash.webp",
      "prompt": "完整的单一3D 插画，夸张的艺术编辑插画风格，不是分镜，不是拼贴版式。\n\n主体是一个夸张的卡通人物，头很小，圆胖的身子，四肢极其修长，手很大，鞋很大，重心不平衡，定格在半空中，做出戏剧性的跳跃姿势，具有很强的张力和喜剧能量。\n\n整体形状看起来像一个软雕塑玩具——圆形、厚实、有弹性、夸张——在解剖学上不正确。\n\n材质为哑光软橡胶、毛绒织物、针织纹理、橡皮泥手感、细纤维细节、轻微颗粒、手工雕刻触感——避免有光泽的塑料玩具外观、避免半透明玻璃外观、避免高反射。\n\n高饱和度的多巴胺调色板，大胆的色彩碰撞，大面积的平面色块，明亮但不过分发光。\n\n干净的白色背景，最小的空间，只有地面上柔和的椭圆形阴影，没有复杂的场景。\n\n在角色周围浮动抽象图形元素：星星、曲线、球、立方体、图标、符号 - 所有这些都呈现为软橡胶或纸质道具，以增强运动和设计感。\n\n柔和的工作室照明、全局光照、柔和的阴影、低对比度、干净的商业级渲染。\n\nC4D / Blender 3D 插画，风格化软雕塑，哑光黏土材质，毛绒织物纹理，针织表面细节，俏皮的编辑3D 插画，高品质。\n\n— 主题：跳跃的送货员提着一大堆生日礼物，冲刺礼物"
  },
  {
      "id": "image2hub-dopamine-office-rush",
      "title": "多巴胺办公室冲刺插画",
      "categoryKey": "illustration",
      "subcategory": "多巴胺",
      "ratio": "3 / 4",
      "imagePath": "assets/illustration/dopamine/dopamine-office-rush.webp",
      "prompt": "完整的单一3D 插画，夸张的艺术编辑插画风格，不是分镜，不是拼贴版式。\n\n主体是一个夸张的卡通人物，头很小，圆胖的身子，四肢极其修长，手很大，鞋很大，重心不平衡，定格在半空中，做出戏剧性的跳跃姿势，具有很强的张力和喜剧能量。\n\n整体形状看起来像一个软雕塑玩具——圆形、厚实、有弹性、夸张——在解剖学上不正确。\n\n材质为哑光软橡胶、毛绒织物、针织纹理、橡皮泥手感、细纤维细节、轻微颗粒、手工雕刻触感——避免有光泽的塑料玩具外观、避免半透明玻璃外观、避免高反射。\n\n高饱和度的多巴胺调色板，大胆的色彩碰撞，大面积的平面色块，明亮但不过分发光。\n\n干净的白色背景，最小的空间，只有地面上柔和的椭圆形阴影，没有复杂的场景。\n\n在角色周围浮动抽象图形元素：星星、曲线、球、立方体、图标、符号 - 所有这些都呈现为软橡胶或纸质道具，以增强运动和设计感。\n\n柔和的工作室照明、全局光照、柔和的阴影、低对比度、干净的商业级渲染。\n\nC4D / Blender 3D 插画，风格化软雕塑，哑光黏土材质，毛绒织物纹理，针织表面细节，俏皮的编辑3D 插画，高品质。\n\n— 主题：星期一早上的高峰期，一名戴眼镜的上班族拿着一箱文件和一个溅满水的咖啡杯奔跑"
  },
  {
      "id": "image2hub-dopamine-skater-idea",
      "title": "多巴胺滑板灵感插画",
      "categoryKey": "illustration",
      "subcategory": "多巴胺",
      "ratio": "3 / 4",
      "imagePath": "assets/illustration/dopamine/dopamine-skater-idea.webp",
      "prompt": "完整的单一3D 插画，夸张的艺术编辑插画风格，不是分镜，不是拼贴版式。\n\n主体是一个夸张的卡通人物，头很小，圆胖的身子，四肢极其修长，手很大，鞋很大，重心不平衡，定格在半空中，做出戏剧性的跳跃姿势，具有很强的张力和喜剧能量。\n\n整体形状看起来像一个软雕塑玩具——圆形、厚实、有弹性、夸张——在解剖学上不正确。\n\n材质为哑光软橡胶、毛绒织物、针织纹理、橡皮泥手感、细纤维细节、轻微颗粒、手工雕刻触感——避免有光泽的塑料玩具外观、避免半透明玻璃外观、避免高反射。\n\n高饱和度的多巴胺调色板，大胆的色彩碰撞，大面积的平面色块，明亮但不过分发光。\n\n干净的白色背景，最小的空间，只有地面上柔和的椭圆形阴影，没有复杂的场景。\n\n在角色周围浮动抽象图形元素：星星、曲线、球、立方体、图标、符号 - 所有这些都呈现为软橡胶或纸质道具，以增强运动和设计感。\n\n柔和的工作室照明、全局光照、柔和的阴影、低对比度、干净的商业级渲染。\n\nC4D / Blender 3D 插画，风格化软雕塑，哑光黏土材质，毛绒织物纹理，针织表面细节，俏皮的编辑3D 插画，高品质。\n\n— 主题：穿着连帽衫的创意小孩拿着标有“IDEA”的笔记本电脑在半空中玩滑板，边走边集思广益"
  },
  {
      "id": "image2hub-dopamine-traveler-map",
      "title": "多巴胺旅行地图插画",
      "categoryKey": "illustration",
      "subcategory": "多巴胺",
      "ratio": "3 / 4",
      "imagePath": "assets/illustration/dopamine/dopamine-traveler-map.webp",
      "prompt": "完整的单一3D 插画，夸张的艺术编辑插画风格，不是分镜，不是拼贴版式。\n\n主体是一个夸张的卡通人物，头很小，圆胖的身子，四肢极其修长，手很大，鞋很大，重心不平衡，定格在半空中，做出戏剧性的跳跃姿势，具有很强的张力和喜剧能量。\n\n整体形状看起来像一个软雕塑玩具——圆形、厚实、有弹性、夸张——在解剖学上不正确。\n\n材质为哑光软橡胶、毛绒织物、针织纹理、橡皮泥手感、细纤维细节、轻微颗粒、手工雕刻触感——避免有光泽的塑料玩具外观、避免半透明玻璃外观、避免高反射。\n\n高饱和度的多巴胺调色板，大胆的色彩碰撞，大面积的平面色块，明亮但不过分发光。\n\n干净的白色背景，最小的空间，只有地面上柔和的椭圆形阴影，没有复杂的场景。\n\n在角色周围浮动抽象图形元素：星星、曲线、球、立方体、图标、符号 - 所有这些都呈现为软橡胶或纸质道具，以增强运动和设计感。\n\n柔和的工作室照明、全局光照、柔和的阴影、低对比度、干净的商业级渲染。\n\nC4D / Blender 3D 插画，风格化软雕塑，哑光黏土材质，毛绒织物纹理，针织表面细节，俏皮的编辑3D 插画，高品质。\n\n— 主题：背包探险家脖子上挂着折叠的地图和相机，指着前方，独自旅行冒险"
  },
  {
      "id": "image2hub-dopamine-saas-workspace",
      "title": "多巴胺 SaaS 工作台插画",
      "categoryKey": "illustration",
      "subcategory": "多巴胺",
      "ratio": "3 / 4",
      "imagePath": "assets/illustration/dopamine/dopamine-saas-workspace.webp",
      "prompt": "完整的单一3D 插画，夸张的艺术编辑插画风格，不是分镜，不是拼贴版式。\n\n主体是一个夸张的卡通人物，头很小，圆胖的身子，四肢极其修长，手很大，鞋很大，重心不平衡，定格在半空中，做出戏剧性的跳跃姿势，具有很强的张力和喜剧能量。\n\n整体形状看起来像一个软雕塑玩具——圆形、厚实、有弹性、夸张——在解剖学上不正确。\n\n材质为哑光软橡胶、毛绒织物、针织纹理、橡皮泥手感、细纤维细节、轻微颗粒、手工雕刻触感——避免有光泽的塑料玩具外观、避免半透明玻璃外观、避免高反射。\n\n高饱和度的多巴胺调色板，大胆的色彩碰撞，大面积的平面色块，明亮但不过分发光。\n\n干净的白色背景，最小的空间，只有地面上柔和的椭圆形阴影，没有复杂的场景。\n\n在角色周围浮动抽象图形元素：星星、曲线、球、立方体、图标、符号 - 所有这些都呈现为软橡胶或纸质道具，以增强运动和设计感。\n\n柔和的工作室照明、全局光照、柔和的阴影、低对比度、干净的商业级渲染。\n\nC4D / Blender 3D 插画，风格化软雕塑，哑光黏土材质，毛绒织物纹理，针织表面细节，俏皮的编辑3D 插画，高品质。\n\n— 主题：SaaS 连帽衫产品设计师拿着笔记本电脑漂浮，周围是仪表板 UI 卡、图表和任务小部件，SaaS 登陆页面的主视觉插画"
  },
  {
      "id": "image2hub-exaggerated-app-bounce",
      "title": "夸张风格弹跳 App 插画",
      "categoryKey": "illustration",
      "subcategory": "夸张风格",
      "ratio": "3 / 4",
      "imagePath": "assets/illustration/exaggerated/exaggerated-app-bounce.webp",
      "prompt": "完整的单一3D 插画，夸张的艺术编辑插画风格，不是分镜，不是拼贴版式。\n\n主体是一个夸张的卡通人物，头很小，圆胖的身子，四肢极其修长，手很大，鞋很大，重心不平衡，定格在半空中，做出戏剧性的跳跃姿势，具有很强的张力和喜剧能量。\n\n整体形状看起来像一个软雕塑玩具——圆形、厚实、有弹性、夸张——在解剖学上不正确。\n\n材质为哑光软橡胶、毛绒织物、针织纹理、橡皮泥手感、细纤维细节、轻微颗粒、手工雕刻触感——避免有光泽的塑料玩具外观、避免半透明玻璃外观、避免高反射。\n\n高饱和度的多巴胺调色板，大胆的色彩碰撞，大面积的平面色块，明亮但不过分发光。\n\n干净的白色背景，最小的空间，只有地面上柔和的椭圆形阴影，没有复杂的场景。\n\n在角色周围浮动抽象图形元素：星星、曲线、球、立方体、图标、符号 - 所有这些都呈现为软橡胶或纸质道具，以增强运动和设计感。\n\n柔和的工作室照明、全局光照、柔和的阴影、低对比度、干净的商业级渲染。\n\nC4D / Blender 3D 插画，风格化软雕塑，哑光黏土材质，毛绒织物纹理，针织表面细节，俏皮的编辑3D 插画，高品质。\n\n— 主题：一个小脑袋的孩子在空中弹跳，周围环绕着浮动的移动应用 UI 卡（日历、复选标记、照片图标）、有趣的入门插图"
  },
  {
      "id": "image2hub-exaggerated-pastel-leap",
      "title": "粉彩跳跃夸张风格插画",
      "categoryKey": "illustration",
      "subcategory": "夸张风格",
      "ratio": "3 / 4",
      "imagePath": "assets/illustration/exaggerated/exaggerated-pastel-leap.webp",
      "prompt": "完整的单一3D 插画，夸张的艺术编辑插画风格，不是分镜，不是拼贴版式。\n\n主体是一个夸张的卡通人物，头很小，圆胖的身子，四肢极其修长，手很大，鞋很大，重心不平衡，定格在半空中，做出戏剧性的跳跃姿势，具有很强的张力和喜剧能量。\n\n整体形状看起来像一个软雕塑玩具——圆形、厚实、有弹性、夸张——在解剖学上不正确。\n\n材质为哑光软橡胶、毛绒织物、针织纹理、橡皮泥手感、细纤维细节、轻微颗粒、手工雕刻触感——避免有光泽的塑料玩具外观、避免半透明玻璃外观、避免高反射。\n\n高饱和度的多巴胺调色板，大胆的色彩碰撞，大面积的平面色块，明亮但不过分发光。\n\n干净的白色背景，最小的空间，只有地面上柔和的椭圆形阴影，没有复杂的场景。\n\n在角色周围浮动抽象图形元素：星星、曲线、球、立方体、图标、符号 - 所有这些都呈现为软橡胶或纸质道具，以增强运动和设计感。\n\n柔和的工作室照明、全局光照、柔和的阴影、低对比度、干净的商业级渲染。\n\nC4D / Blender 3D 插画，风格化软雕塑，哑光黏土材质，毛绒织物纹理，针织表面细节，俏皮的编辑3D 插画，高品质。\n\n— 主题：一位色彩柔和的杂技演员脚踩厚实的色块运动鞋，举起双手在空中进行胜利的跳跃"
  },
  {
      "id": "image2hub-exaggerated-strawberry-rocker",
      "title": "草莓摇滚夸张风格插画",
      "categoryKey": "illustration",
      "subcategory": "夸张风格",
      "ratio": "3 / 4",
      "imagePath": "assets/illustration/exaggerated/exaggerated-strawberry-rocker.webp",
      "prompt": "完整的单一3D 插画，夸张的艺术编辑插画风格，不是分镜，不是拼贴版式。\n\n主体是一个夸张的卡通人物，头很小，圆胖的身子，四肢极其修长，手很大，鞋很大，重心不平衡，定格在半空中，做出戏剧性的跳跃姿势，具有很强的张力和喜剧能量。\n\n整体形状看起来像一个软雕塑玩具——圆形、厚实、有弹性、夸张——在解剖学上不正确。\n\n材质为哑光软橡胶、毛绒织物、针织纹理、橡皮泥手感、细纤维细节、轻微颗粒、手工雕刻触感——避免有光泽的塑料玩具外观、避免半透明玻璃外观、避免高反射。\n\n高饱和度的多巴胺调色板，大胆的色彩碰撞，大面积的平面色块，明亮但不过分发光。\n\n干净的白色背景，最小的空间，只有地面上柔和的椭圆形阴影，没有复杂的场景。\n\n在角色周围浮动抽象图形元素：星星、曲线、球、立方体、图标、符号 - 所有这些都呈现为软橡胶或纸质道具，以增强运动和设计感。\n\n柔和的工作室照明、全局光照、柔和的阴影、低对比度、干净的商业级渲染。\n\nC4D / Blender 3D 插画，风格化软雕塑，哑光黏土材质，毛绒织物纹理，针织表面细节，俏皮的编辑3D 插画，高品质。\n\n— 主题：草莓主题的音乐家小孩，拿着草莓形状的电吉他，做摇滚手势，果味音乐节氛围"
  },
  {
      "id": "image2hub-exaggerated-camping-invite",
      "title": "露营邀请夸张风格插画",
      "categoryKey": "illustration",
      "subcategory": "夸张风格",
      "ratio": "3 / 4",
      "imagePath": "assets/illustration/exaggerated/exaggerated-camping-invite.webp",
      "prompt": "完整的单一3D 插画，夸张的艺术编辑插画风格，不是分镜，不是拼贴版式。\n\n主体是一个夸张的卡通人物，头很小，圆胖的身子，四肢极其修长，手很大，鞋很大，重心不平衡，定格在半空中，做出戏剧性的跳跃姿势，具有很强的张力和喜剧能量。\n\n整体形状看起来像一个软雕塑玩具——圆形、厚实、有弹性、夸张——在解剖学上不正确。\n\n材质为哑光软橡胶、毛绒织物、针织纹理、橡皮泥手感、细纤维细节、轻微颗粒、手工雕刻触感——避免有光泽的塑料玩具外观、避免半透明玻璃外观、避免高反射。\n\n高饱和度的多巴胺调色板，大胆的色彩碰撞，大面积的平面色块，明亮但不过分发光。\n\n干净的白色背景，最小的空间，只有地面上柔和的椭圆形阴影，没有复杂的场景。\n\n在角色周围浮动抽象图形元素：星星、曲线、球、立方体、图标、符号 - 所有这些都呈现为软橡胶或纸质道具，以增强运动和设计感。\n\n柔和的工作室照明、全局光照、柔和的阴影、低对比度、干净的商业级渲染。\n\nC4D / Blender 3D 插画，风格化软雕塑，哑光黏土材质，毛绒织物纹理，针织表面细节，俏皮的编辑3D 插画，高品质。\n\n— 主题：背包客举着一块木牌，上面写着“我们去露营吧！”带帐篷和户外徽章，周末露营邀请"
  },
  {
      "id": "image2hub-exaggerated-designer-stylus",
      "title": "设计师触控笔夸张风格插画",
      "categoryKey": "illustration",
      "subcategory": "夸张风格",
      "ratio": "3 / 4",
      "imagePath": "assets/illustration/exaggerated/exaggerated-designer-stylus.webp",
      "prompt": "完整的单一3D 插画，夸张的艺术编辑插画风格，不是分镜，不是拼贴版式。\n\n主体是一个夸张的卡通人物，头很小，圆胖的身子，四肢极其修长，手很大，鞋很大，重心不平衡，定格在半空中，做出戏剧性的跳跃姿势，具有很强的张力和喜剧能量。\n\n整体形状看起来像一个软雕塑玩具——圆形、厚实、有弹性、夸张——在解剖学上不正确。\n\n材质为哑光软橡胶、毛绒织物、针织纹理、橡皮泥手感、细纤维细节、轻微颗粒、手工雕刻触感——避免有光泽的塑料玩具外观、避免半透明玻璃外观、避免高反射。\n\n高饱和度的多巴胺调色板，大胆的色彩碰撞，大面积的平面色块，明亮但不过分发光。\n\n干净的白色背景，最小的空间，只有地面上柔和的椭圆形阴影，没有复杂的场景。\n\n在角色周围浮动抽象图形元素：星星、曲线、球、立方体、图标、符号 - 所有这些都呈现为软橡胶或纸质道具，以增强运动和设计感。\n\n柔和的工作室照明、全局光照、柔和的阴影、低对比度、干净的商业级渲染。\n\nC4D / Blender 3D 插画，风格化软雕塑，哑光黏土材质，毛绒织物纹理，针织表面细节，俏皮的编辑3D 插画，高品质。\n\n— 主题：戴贝雷帽的插画师半空握着触控笔，画笔从口袋里探出，设计师的创意飞跃"
  },
  {
      "id": "image2hub-exaggerated-bike-trick",
      "title": "单车特技夸张风格插画",
      "categoryKey": "illustration",
      "subcategory": "夸张风格",
      "ratio": "3 / 4",
      "imagePath": "assets/illustration/exaggerated/exaggerated-bike-trick.webp",
      "prompt": "完整的单一3D 插画，夸张的艺术编辑插画风格，不是分镜，不是拼贴版式。\n\n主体是一个夸张的卡通人物，头很小，圆胖的身子，四肢极其修长，手很大，鞋很大，重心不平衡，定格在半空中，做出戏剧性的跳跃姿势，具有很强的张力和喜剧能量。\n\n整体形状看起来像一个软雕塑玩具——圆形、厚实、有弹性、夸张——在解剖学上不正确。\n\n材质为哑光软橡胶、毛绒织物、针织纹理、橡皮泥手感、细纤维细节、轻微颗粒、手工雕刻触感——避免有光泽的塑料玩具外观、避免半透明玻璃外观、避免高反射。\n\n高饱和度的多巴胺调色板，大胆的色彩碰撞，大面积的平面色块，明亮但不过分发光。\n\n干净的白色背景，最小的空间，只有地面上柔和的椭圆形阴影，没有复杂的场景。\n\n在角色周围浮动抽象图形元素：星星、曲线、球、立方体、图标、符号 - 所有这些都呈现为软橡胶或纸质道具，以增强运动和设计感。\n\n柔和的工作室照明、全局光照、柔和的阴影、低对比度、干净的商业级渲染。\n\nC4D / Blender 3D 插画，风格化软雕塑，哑光黏土材质，毛绒织物纹理，针织表面细节，俏皮的编辑3D 插画，高品质。\n\n— 主题：骑自行车的人在黄色自行车上弹出后轮离地，一只手拿着能量饮料，周末骑自行车的技巧"
  },
  {
      "id": "image2hub-exaggerated-dog-walk",
      "title": "周末遛狗夸张风格插画",
      "categoryKey": "illustration",
      "subcategory": "夸张风格",
      "ratio": "3 / 4",
      "imagePath": "assets/illustration/exaggerated/exaggerated-dog-walk.webp",
      "prompt": "完整的单一3D 插画，夸张的艺术编辑插画风格，不是分镜，不是拼贴版式。\n\n主体是一个夸张的卡通人物，头很小，圆胖的身子，四肢极其修长，手很大，鞋很大，重心不平衡，定格在半空中，做出戏剧性的跳跃姿势，具有很强的张力和喜剧能量。\n\n整体形状看起来像一个软雕塑玩具——圆形、厚实、有弹性、夸张——在解剖学上不正确。\n\n材质为哑光软橡胶、毛绒织物、针织纹理、橡皮泥手感、细纤维细节、轻微颗粒、手工雕刻触感——避免有光泽的塑料玩具外观、避免半透明玻璃外观、避免高反射。\n\n高饱和度的多巴胺调色板，大胆的色彩碰撞，大面积的平面色块，明亮但不过分发光。\n\n干净的白色背景，最小的空间，只有地面上柔和的椭圆形阴影，没有复杂的场景。\n\n在角色周围浮动抽象图形元素：星星、曲线、球、立方体、图标、符号 - 所有这些都呈现为软橡胶或纸质道具，以增强运动和设计感。\n\n柔和的工作室照明、全局光照、柔和的阴影、低对比度、干净的商业级渲染。\n\nC4D / Blender 3D 插画，风格化软雕塑，哑光黏土材质，毛绒织物纹理，针织表面细节，俏皮的编辑3D 插画，高品质。\n\n— 主题：一个年轻小伙子用皮带牵着他快乐的小猎犬，周末遛狗的氛围"
  },
  {
      "id": "image2hub-ip-cartoon-gonk",
      "title": "GONK 丑萌 IP 形象展示板",
      "categoryKey": "ip",
      "subcategory": "卡通IP",
      "ratio": "2 / 3",
      "imagePath": "assets/ip/cartoon-ip/ip-cartoon-gonk.webp",
      "prompt": "生成一张国际3D IP 设计大师做的IP 竖版 2:3 的图片。\n\n【角色基础设定】\n角色名称：GONK\n形象描述：酸性绿哑光梨形软胶丑萌怪；小白圆眼远距铺开、一字横线嘴两颗小长方门牙微露；紫坑条针织帽配黑底白字织唛「WHATEVER.」；米色斜挎腰包黑背带、黑底白字贴片「MEH.」；腰侧紫色 X 形创可贴。\n品牌主色：磨砂纯黑（Hero 满铺底）+ 酸性绿角色主体 + 酸绿霓虹作强调色（副标/手绘箭头）。\n\n【角色气质】\n整体不是传统可爱，不要甜美，不要萌宠感。\n角色风格是“丑萌 ugly-cute / weird cute / awkward charm”，\n有一点笨拙、有一点无厘头、有一点反差幽默，\n像独立设计师玩具、潮流艺术玩偶、怪诞但高级的收藏级IP。\n角色看起来不完美，但非常有记忆点。\n\n【造型结构】\n3D盲盒潮玩IP风格，头身比约1:1，\n头部圆润夸张，但五官比例故意轻微失衡，\n整体轮廓像一个笨拙的软胶怪物玩偶。\n\n躯干饱满呈梨形略带坠感，上窄下宽；\n四肢短粗、手臂略长自然下垂，站姿发呆松弛，不要卖萌站姿。\n非教条动物物种，形体像被指尖捏过一道的软胶水怪；可有极短小尾巴或无尾均可。\n\n面部特征极简：\n白眼珠面积极小直线嘴，两颗小长方白牙呆板外露；\n眼神放空、呆滞、无所谓，不要笑意。\n\n可以加入1-2个增强丑萌记忆点的小配件：\n紫针织帽、「WHATEVER.」帽标、米色腰包「MEH.」贴片、撞色黑背带与紫色 X 创可贴。\n配件文字可以是 “MEH.” / “WHATEVER.” / “SLOW” 等短句。\n配件要简洁，不要复杂。\n\n【材质与颜色】\n全身哑光磨砂软胶质感，轻微手工捏塑感，\n避免高光、避免强反射、避免玻璃感。\n表面可以有非常细微的橡皮泥纹理、软胶颗粒感、轻微不平整感。\n\n配色控制在2-3色为主，黑底与酸绿主角强对比点缀紫/米色辅料。\n柔和摄影棚散射光，无强投影，\n商业产品级3D渲染精度，像高端潮玩官方设定页。\n\n【整体版式】\n竖版白色外框画布，黑色+白色两块区域上下结构感干净；\n2个区块上下堆叠，整体像潮玩品牌官方角色发布页但更怪更潮。\n\n【区块一 —— Hero Banner，占总高约60%】\n背景使用磨砂纯黑高对比满铺。\n左上角巨大粗体白无衬线英文名 “GONK”。\n紧接一行酸绿色副标口号：Not fast. Not smart. Just GONK.\n其下 2-3 行更小白色冷幽默简介，例如：\n\"Usually hungry.\nOften confused.\nAlways GONK.\"\n左下角可加手绘感酸绿色随意弯箭头指向角色，增加独立 zine 气质。\n右侧酸性绿角色上半身或四分之三特写，占 Banner 右侧体积约 60% 以上，下缘裁切溢出分割线，氛围松弛怪萌。\n\n【区块二 —— 多视图，占总高约40%】\n浅灰或白色圆角卡片细描边，左上黑字 “Multiview”。\n横向四格等距：正视、侧视、后视、45°，全身、等比例等高、纯白底无投影。\n每格下缘可用淡灰小字 Front / Side / Back / 45°。\n保持同一丑萌比例、同一配件与呆萌无所谓表情。"
  },
  {
      "id": "image2hub-ip-cartoon-droop",
      "title": "DROOP 丑萌 IP 形象展示板",
      "categoryKey": "ip",
      "subcategory": "卡通IP",
      "ratio": "2 / 3",
      "imagePath": "assets/ip/cartoon-ip/ip-cartoon-droop.webp",
      "prompt": "生成一张国际3D IP 设计大师做的IP 竖版 2:3 的图片。\n\n【角色基础设定】\n角色名称：DROOP\n形象描述：梨形酸性绿软胶怪诞生物（非现实物种），宽距小白圆眼、蜜桃色扁管大嘴，长臂短腿松弛下垂；戴蓝色小号锥形派对帽与印「whatever.」黑色斜挎迷你腰包。\n品牌主色：酸性绿（高饱和、偏潮流的亮黄绿，可作整屏 Hero 主色块）。\n\n【角色气质】\n整体不是传统可爱，不要甜美，不要萌宠感。\n角色风格是“丑萌 ugly-cute / weird cute / awkward charm”，\n有一点笨拙、有一点无厘头、有一点反差幽默，\n像独立设计师玩具、潮流艺术玩偶、怪诞但高级的收藏级IP。\n角色看起来不完美，但非常有记忆点。\n\n\n【造型结构】\n3D盲盒潮玩IP风格，头身比约1:1，\n头部圆润夸张，但五官比例故意轻微失衡，\n整体轮廓像一个笨拙的软胶怪物玩偶。\n\n躯干饱满呈梨形略带坠感，上窄下宽，\n四肢比例怪诞：手臂偏长自然下垂过腰际，小腿短粗呈柱形，脚简化成圆钝块，\n站姿微微发呆或松弛站立，不要标准可爱站姿。\n\n身体不做甜美圆润「萌系」比例，更像被轻轻捏过的软胶怪诞小兽。\n\n面部特征极简：\n小圆眼或大小略不一致的眼睛，\n眼神空白、呆滞、无辜但有点怪；\n嘴巴可以是很小的一条横线，或轻微下撇；\n表情不要开心，不要卖萌，要“冷静、发呆、无所谓”。\n\n可以加入1-2个增强丑萌记忆点的小配件：\n比如小号斜挎包印白字 “whatever.”、歪戴蓝色锥形小派对帽、圆形木色帽顶小球。\n配件文字可以是 “MEH.” / “NO PLANS” / “OK.” / “SLOW” 等短句。\n配件要简洁，不要复杂。\n\n【材质与颜色】\n全身哑光磨砂软胶质感，轻微手工捏塑感，\n避免高光、避免强反射、避免玻璃感。\n表面可以有非常细微的橡皮泥纹理、软胶颗粒感、轻微不平整感。\n\n配色控制在2-3色：\n主体色使用高饱和但偏潮流的颜色，\n局部色与主体色形成清晰但不刺眼的对比，\n例如：酸性绿身体 + 奶油白角 + 深灰配件；\n番茄橙背景 + 米白角 + 黑色小包；\n电光蓝身体 + 芥末黄配件 + 米白腹部。\n\n柔和摄影棚散射光，无强投影，\n商业产品级3D渲染精度，\n像高端潮玩品牌官方角色设定图。\n\n【整体版式】\n竖版白色为基础底色，\n2个区块上下堆叠排列，\n整体风格干净专业，类似潮玩品牌官方角色设定发布页，\n但视觉气质更怪、更潮、更有独立设计师玩具感。\n\n【区块一 —— Hero Banner，占总高约60%】\n背景填充品牌主色，使用高饱和纯色块，\n左上角放置角色英文名，粗体大字，白色或深色，\n字体要厚重、现代、有潮流品牌感。\n\n名称下方配2-3行小字角色简介，字体轻盈，\n文案不要太可爱，要有冷幽默，例如：\n\"DROOP is not in a rush.\nHe likes slow days, weird snacks, and even weirder dreams.\nStay chill. Stay you.\"\n\n右侧呈现角色上半身或四分之三视角特写，\n角色体积占Banner右侧60%以上，\n底部自然溢出Banner边界，形成裁切感构图。\n角色不要摆可爱姿势，可以微微歪头、眼神放空、手臂自然下垂，\n氛围怪萌、松弛、有记忆点。\n\n【区块二 —— 多视图，占总高约40%】\n浅灰色或白色圆角矩形卡片，卡片有细描边，\n卡片顶部左对齐放置 “Multiview” 英文标题。\n\n卡片内横向等距排列四个角色视图，\n从左到右依次为正视图、侧视图、后视图、45°视图。\n四个角色等比例、等高度、纯白底，无阴影。\n每个视图都要保持同一个丑萌角色特征：\n轻微失衡的五官、松弛下垂的手臂、不完美但有趣的体态、简洁潮流配件。"
  },
  {
      "id": "image2hub-ip-cartoon-blurp",
      "title": "BLURP 丑萌 IP 形象展示板",
      "categoryKey": "ip",
      "subcategory": "卡通IP",
      "ratio": "2 / 3",
      "imagePath": "assets/ip/cartoon-ip/ip-cartoon-blurp.webp",
      "prompt": "生成一张国际3D IP 设计大师做的IP 竖版 2:3 的图片。\n\n【角色基础设定】\n角色名称：BLURP\n形象描述：青绿色蛋形丑萌玩偶，头身近似 1:1；大白圆眼小瞳孔呆滞、粉红色宽椭圆嘴露两颗小方牙；戴蓝色坑条针织帽配白底黑字贴片「NO PLANS」与明黄色斜挎腰包（黑拉链、白底贴片「MEH.」）。\n品牌主色：番茄橙（Hero Banner 高饱和主底色）与高饱和青绿色角色主角撞色。\n\n【角色气质】\n整体不是传统可爱，不要甜美，不要萌宠感。\n角色风格是“丑萌 ugly-cute / weird cute / awkward charm”，\n有一点笨拙、有一点无厘头、有一点反差幽默，\n像独立设计师玩具、潮流艺术玩偶、怪诞但高级的收藏级IP。\n角色看起来不完美，但非常有记忆点。\n\n\n【造型结构】\n3D盲盒潮玩IP风格，头身比约1:1，\n头部圆润夸张，但五官比例故意轻微失衡，\n整体轮廓像一个笨拙的软胶怪物玩偶。\n\n躯干饱满呈立姿蛋形／略扁椭球，\n四肢短促微外八，手心脚简化为圆滑小块，站姿呆滞松弛。\n\n不做动物教条物种，整体像一颗带点「喝醉」站姿的潮流软胶蛋仔；可有极短小尾巴或无尾均可。\n\n面部特征极简：\n小圆眼或大小略不一致的眼睛，\n眼神空白、呆滞、无辜但有点怪；\n嘴巴可以是很小的一条横线，或轻微下撇；\n表情不要开心，不要卖萌，要“冷静、发呆、无所谓”。\n\n可以加入1-2个增强丑萌记忆点的小配件：\n比如蓝针织帽 +「NO PLANS」织唛贴片、黄色迷你胸前腰包 +「MEH.」贴片。\n配件文字可以是 “MEH.” / “NO PLANS” / “OK.” / “SLOW” 等短句。\n配件要简洁，不要复杂。\n\n【材质与颜色】\n全身哑光磨砂软胶质感，轻微手工捏塑感，\n避免高光、避免强反射、避免玻璃感。\n表面可以有非常细微的橡皮泥纹理、软胶颗粒感、轻微不平整感。\n\n配色控制在2-3色：\n主体色使用高饱和但偏潮流的颜色，\n局部色与主体色形成清晰但不刺眼的对比，\n例如：酸性绿身体 + 奶油白角 + 深灰配件；\n番茄橙背景 + 米白角 + 黑色小包；\n电光蓝身体 + 芥末黄配件 + 米白腹部。\n\n柔和摄影棚散射光，无强投影，\n商业产品级3D渲染精度，\n像高端潮玩品牌官方角色设定图。\n\n【整体版式】\n竖版白色为基础底色，\n2个区块上下堆叠排列，\n整体风格干净专业，类似潮玩品牌官方角色设定发布页，\n但视觉气质更怪、更潮、更有独立设计师玩具感。\n\n【区块一 —— Hero Banner，占总高约60%】\n背景填充品牌主色，使用高饱和纯色块，\n左上角放置角色英文名，粗体大字，白色或深色，\n字体要厚重、现代、有潮流品牌感。\n\n名称下方配2-3行小字角色简介，字体轻盈，\n文案不要太可爱，要有冷幽默，例如：\n\"BLURP lives for questionable ideas and midnight snacks.\nProbably not a hero.\nDefinitely unique.\"\n\n右侧呈现角色上半身或四分之三视角特写，\n角色体积占Banner右侧60%以上，\n底部自然溢出Banner边界，形成裁切感构图。\n角色不要摆可爱姿势，可以微微歪头、眼神放空、手臂自然下垂，\n氛围怪萌、松弛、有记忆点。\n\n【区块二 —— 多视图，占总高约40%】\n浅灰色或白色圆角矩形卡片，卡片有细描边，\n卡片顶部左对齐放置 “Multiview” 英文标题。\n\n卡片内横向等距排列四个角色视图，\n从左到右依次为正视图、侧视图、后视图、45°视图。\n四个角色等比例、等高度、纯白底，无阴影。\n每个视图都要保持同一个丑萌角色特征：\n轻微失衡的五官、松弛下垂的手臂、不完美但有趣的体态、简洁潮流配件。"
  },
  {
      "id": "image2hub-ip-cartoon-nana-weirdcute",
      "title": "NaNa 怪诞 IP 形象展示板",
      "categoryKey": "ip",
      "subcategory": "卡通IP",
      "ratio": "2 / 3",
      "imagePath": "assets/ip/cartoon-ip/ip-cartoon-nana-weirdcute.webp",
      "prompt": "生成一张国际3D IP 设计大师做的IP 竖版 2:3 的图片。\n\n【角色基础设定】\n角色名称：NaNa\n形象描述：犀牛抽象丑萌化：哑光灰磨砂软胶身体、米色钝短独角与小圆鼻孔；挎番茄橙迷你腰包黑色贴片白字「MEH.」，腹侧米色创可贴小点缀。\n品牌主色：番茄橙（Hero Banner）+ 哑光灰犀牛主体色 + 黑/米色低对比点缀。\n\n【角色气质】\n整体不是传统可爱，不要甜美，不要萌宠感。\n角色风格是“丑萌 ugly-cute / weird cute / awkward charm”，\n有一点笨拙、有一点无厘头、有一点反差幽默，\n像独立设计师玩具、潮流艺术玩偶、怪诞但高级的收藏级IP。\n角色看起来不完美，但非常有记忆点。\n\n\n【造型结构】\n3D盲盒潮玩IP风格，头身比约1:1，\n头部圆润夸张，但五官比例故意轻微失衡，\n整体轮廓像一个笨拙的软胶怪物玩偶。\n\n躯干饱满呈蛋形或不规则水滴形，\n四肢短促但略微下垂，手臂偏长一点，动作松弛无力，\n站姿微微呆滞，不要标准可爱姿势。\n\n犀牛特征需要被抽象化处理：\n短粗的犀牛角，位置略夸张；\n小耳朵或不对称耳朵；\n圆钝鼻部，鼻孔很小；\n身体整体像一只被压扁一点的软胶犀牛。\n\n面部特征极简：\n小圆眼或大小略不一致的眼睛，\n眼神空白、呆滞、无辜但有点怪；\n嘴巴可以是很小的一条横线，或轻微下撇；\n表情不要开心，不要卖萌，要“冷静、发呆、无所谓”。\n\n可以加入1-2个增强丑萌记忆点的小配件：\n比如橙色短款斜挎包印「MEH.」哑光贴片、米色 X 形小创可贴贴纸、撞色腰包细黑背带。\n配件文字可以是 “MEH.” / “NO PLANS” / “OK.” / “SLOW” 等短句。\n配件要简洁，不要复杂。\n\n【材质与颜色】\n全身哑光磨砂软胶质感，轻微手工捏塑感，\n避免高光、避免强反射、避免玻璃感。\n表面可以有非常细微的橡皮泥纹理、软胶颗粒感、轻微不平整感。\n\n配色控制在2-3色：\n主体色使用高饱和但偏潮流的颜色，\n局部色与主体色形成清晰但不刺眼的对比，\n例如：酸性绿身体 + 奶油白角 + 深灰配件；\n番茄橙背景 + 米白角 + 黑色小包；\n电光蓝身体 + 芥末黄配件 + 米白腹部。\n\n柔和摄影棚散射光，无强投影，\n商业产品级3D渲染精度，\n像高端潮玩品牌官方角色设定图。\n\n【整体版式】\n竖版白色为基础底色，\n2个区块上下堆叠排列，\n整体风格干净专业，类似潮玩品牌官方角色设定发布页，\n但视觉气质更怪、更潮、更有独立设计师玩具感。\n\n【区块一 —— Hero Banner，占总高约60%】\n背景填充品牌主色，使用高饱和纯色块，\n左上角放置角色英文名，粗体大字，白色或深色，\n字体要厚重、现代、有潮流品牌感。\n\n名称下方配2-3行小字角色简介，字体轻盈，\n文案不要太可爱，要有冷幽默，例如：\n\"NaNa takes life slowly.\nBig body. Small brain. Zero rush.\nJust NaNa.\"\n\n右侧呈现角色上半身或四分之三视角特写，\n角色体积占Banner右侧60%以上，\n底部自然溢出Banner边界，形成裁切感构图。\n角色不要摆可爱姿势，可以微微歪头、眼神放空、手臂自然下垂，\n氛围怪萌、松弛、有记忆点。\n\n【区块二 —— 多视图，占总高约40%】\n浅灰色或白色圆角矩形卡片，卡片有细描边，\n卡片顶部左对齐放置 “Multiview” 英文标题。\n\n卡片内横向等距排列四个角色视图，\n从左到右依次为正视图、侧视图、后视图、45°视图。\n四个角色等比例、等高度、纯白底，无阴影。\n每个视图都要保持同一个丑萌角色特征：\n轻微失衡的五官、松弛下垂的手臂、不完美但有趣的体态、简洁潮流配件。"
  },
  {
      "id": "image2hub-ip-cartoon-zazi",
      "title": "ZAZI 龙形 IP 形象展示板",
      "categoryKey": "ip",
      "subcategory": "卡通IP",
      "ratio": "2 / 3",
      "imagePath": "assets/ip/cartoon-ip/ip-cartoon-zazi.webp",
      "prompt": "创建形象：专业卡通IP角色设计表，肖像布局2:3。饱和的紫色主视觉面板上左上角有粗体白色标识“ZAZI”，下方有简短的英文个性简介。上部区域：俏皮的圆形紫色卡通龙玩具主视觉 3D 渲染——黄色的小角，黑色的大眼睛，一颗牙齿的小微笑，奶油色的罗纹肚子，星星挂饰的黄色围巾，小翅膀，挥舞的姿势；柔软哑光 PVC/乙烯基玩具底纹，Behance 吉祥物品质。白色下部“多视图”带：四个转面视图（正面、侧面、背面、四分之三）比例一致，玩具般的收藏风格。统一照明、超洁净构图、展览级作品集展示页。"
  },
  {
      "id": "image2hub-ip-cartoon-moko",
      "title": "MOKO 象形 IP 形象展示板",
      "categoryKey": "ip",
      "subcategory": "卡通IP",
      "ratio": "2 / 3",
      "imagePath": "assets/ip/cartoon-ip/ip-cartoon-moko.webp",
      "prompt": "创建图像：卡通 IP 吉祥物设计表，2:3 垂直。充满活力的扁平绿色主视觉色块，带有超大白色标题“MOKO”和下方的简短英文简介文案。上3D 主视觉特写——柔和的绿色大象，圆耳朵，小眼睛，头戴带有叶子徽章的奶油色草帽，搭配配套的斜挎包；可爱的毛绒/乙烯基玩具渲染，欢快的现代品牌。底部白色部分标记为“多视图”：四个姿势（正面、左侧视图、背面、四分之三视角）显示帽子、带子、耳朵和尾巴的连续性。连贯的玩具比例、清晰的工作室渲染、吉祥物品牌手册布局。"
  },
  {
      "id": "image2hub-ip-cartoon-nana",
      "title": "NaNa 犀牛 IP 形象展示板",
      "categoryKey": "ip",
      "subcategory": "卡通IP",
      "ratio": "2 / 3",
      "imagePath": "assets/ip/cartoon-ip/ip-cartoon-nana.webp",
      "prompt": "生成一张国际3D IP 设计大师做的IP 竖版 2:3 的图片\n\n【角色基础设定】\n角色名称：NaNa\n形象描述：犀牛\n品牌主色：明黄色（高饱和度、活泼醒目，可与浅米色犄角/肚皮作低对比点缀）\n\n【造型结构】\n3D盲盒潮玩IP风格，头身比约1:1，头部圆润夸张，\nIP整体设计有夸张感，独特感，现代感，\n躯干饱满呈蛋形，四肢短促圆柱状，线条简洁流畅。\n面部特征极简，大号圆形眼睛，表情克制呆萌。\n全身哑光磨砂软胶质感，无高光无反射，\n配色控制在2-3色，局部色与主体色保持低对比度和谐关系。\n柔和摄影棚散射光，无强投影，商业产品级渲染精度。\n\n【整体版式】\n竖版白色为基础底色，\n2个区块上下堆叠排列，\n整体风格干净专业，类似潮玩品牌官方角色设定发布页。\n\n区块一——Hero Banner（占总高约60%）：\n背景填充品牌主色（与角色主体颜色一致的饱和色块），\n左上角放置角色英文名，粗体大字，白色或深色，\n名称下方配2-3行小字角色简介，字体轻盈，\n右侧呈现角色上半身或四分之三视角特写，\n角色体积占Banner右侧60%以上，底部自然溢出Banner边界，\n形成裁切感构图，氛围活泼。\n\n区块二——多视图（占总高约40%）：\n浅灰色或白色圆角矩形卡片，卡片有细描边，\n卡片顶部左对齐放置\"Multiview\"英文标题，\n卡片内横向等距排列四个角色视图，\n从左到右依次为正视图、侧视图、后视图、45°视图，\n四个角色等比例、等高度、纯白底，无阴影。"
  },
  {
    "id": "image2hub-ai-bot-glossy-halloween",
    "title": "幻彩果冻 AI Bot 团队",
    "categoryKey": "ip",
    "subcategory": "AI Bot IP 角色设计",
    "ratio": "3 / 4",
    "imagePath": "assets/ip/aibot/ai-bot-glossy-halloween.webp",
    "prompt": "生成一组 6 个原创 AI 智能体 Bot IP 角色，使用 3:4 竖版画面，上下分区，上方占 40%，下方占 60%。\n\n上方为场景主视觉：6 个角色在完整的办公室环境中共同做一件事，呈现有故事性和电影感的瞬间，不要摆拍合影。下方为纯黑背景，6 个角色分别展示，按 3 列 2 行整齐排列，上下均为同一组角色的正面视图，特征完全一致。角色之间、角色与画面边缘之间留出充足空白，让构图有呼吸感。\n\n视觉风格结合 3D 半透明果冻艺术、虹彩光泽材质、抽象几何吉祥物、充气柔软形体与设计师艺术玩具。每个角色的轮廓、颜色和性格不同，但共享相同的材质、造型语言和五官系统，明确属于同一家族。整体简洁、现代、中性。无文字、标志或水印，不模仿已有 IP。"
  },
  {
    "id": "image2hub-ai-bot-punctuation",
    "title": "短绒几何 AI Bot 创意办公室",
    "categoryKey": "ip",
    "subcategory": "AI Bot IP 角色设计",
    "ratio": "3 / 4",
    "imagePath": "assets/ip/aibot/ai-bot-punctuation.webp",
    "prompt": "生成一组 6 个原创 AI 智能体 Bot IP 角色，使用 3:4 竖版画面，上方占 40%，下方占 60%。\n\n上方为场景主视觉：6 个角色围绕电脑在现代创意办公室协作，完成一个具体任务，有清晰故事、真实空间纵深、自然互动、柔和环境光和电影感构图，不要摆拍。下方为独立角色展示：纯黑背景，按 3 列 2 行整齐排列；上下的轮廓、颜色、五官和标志性特征一一对应。下方角色均为完整、不裁切的正面视图，间距与边缘留白充足。\n\n造型：结合现代互联网品牌 IP、3D 绒毛艺术、抽象几何吉祥物、柔软毛绒雕塑、趣味设计师玩具和极简角色设计。以圆润、不规则的抽象几何形状设计 6 个易辨认角色，可使用变形三角形、星星、云朵、水滴、逗号、花朵等，但不局限于标准几何形。强调自然、自由、略不对称的有机轮廓，像柔软蓬松的异形靠垫。头身一体，不分离头、躯干、手臂或腿；体块饱满，边缘柔软，无尖锐结构，具有立体雕塑感。\n\n材质：精细短绒、天鹅绒或超细纤维植绒，表面细小纤维均匀柔软，有真实纤维层次和细腻散射光，呈现温暖、想触摸的质感。突出毛绒与抽象几何形的对比，不使用凌乱长毛、真实动物皮毛、塑料、橡胶或金属。\n\n五官：极简而夸张，以眼睛为主要识别点。眼睛是凸起的圆形或椭圆结构，可有白色眼圈、彩色眼皮或几何瞳孔，通过大小、开合、视线和倾斜变化表达情绪。嘴可为小点、短弧、简单切口或省略。表情略荒诞幽默，分别表现呆萌、困倦、好奇、冷酷、顽皮和慵懒；不要写实人类五官或复杂眉毛、鼻子、牙齿。\n\n颜色：高饱和但柔和的现代糖果色与粉彩渐变，6 个角色分别使用天蓝、奶油黄、梦幻紫、珊瑚粉、薄荷绿、蜜桃橙等主色。每个角色围绕单一主色，通过光影和自然渐变丰富层次，不使用复杂花纹或大块硬质装饰。个性主要通过几何轮廓、眼睛、细微表情和姿态表达，不依赖衣服、配饰或复杂身体。天真、古怪、幽默、慵懒、亲切，可爱但不幼稚，抽象但易懂。\n\n渲染：高质量 3D、柔和电影光、全局照明、环境遮蔽、细微轮廓光和柔软阴影。上方结合窗边自然光与温暖室内光；下方使用统一柔和棚拍光，清晰展示绒毛纤维和圆润体块，角色悬浮，无地面投影或底座。\n\n整体统一短绒材质、有机圆润形状、极简夸张五官与精细 3D 光影，呈现高端互联网品牌和独立艺术玩具的品质，年轻、有趣、中性。上下角色严格一致，不增减、重复或变形。无文字、标志、水印，不模仿已有 IP；无衣服、复杂配饰、真实动物身体或传统人形卡通结构。"
  },
  {
    "id": "image2hub-ai-bot-fuzzy-friends",
    "title": "长绒几何 AI Bot 好友团",
    "categoryKey": "ip",
    "subcategory": "AI Bot IP 角色设计",
    "ratio": "3 / 4",
    "imagePath": "assets/ip/aibot/ai-bot-fuzzy-friends.webp",
    "prompt": "按照参考图风格生成一组 6 个原创 AI 智能体 Bot IP 角色，使用 3:4 竖版画面，上方占 40%，下方占 60%。\n\n上方为场景主视觉：6 个角色在完整办公室中共同做一件事，具有故事性与电影感，不要摆拍。下方为纯黑背景，6 个角色单独正面展示，按 3 列 2 行整齐排列。上下角色完全相同，角色之间及与边缘之间保留充足留白。\n\n视觉结合现代互联网品牌 IP、3D 绒毛艺术、抽象几何吉祥物、蓬松长绒、极简活动眼球、细杆腿、奇趣设计师玩具、活泼角色设计和柔和电影光。突出抽象几何与毛绒材质的对比，简洁、现代、有国际审美，兼具艺术玩具收藏感与动画电影的情绪表现力。每个角色轮廓、颜色和性格不同，但材质、造型语言、五官系统统一，明确属于同一家族。整体中性，无文字、标志或水印，不模仿已有 IP。"
  },
  {
    "id": "image2hub-ai-bot-colorful-team-variant",
    "title": "糖果软胶 AI Bot 工作室",
    "categoryKey": "ip",
    "subcategory": "AI Bot IP 角色设计",
    "ratio": "3 / 4",
    "imagePath": "assets/ip/aibot/ai-bot-colorful-team-variant.webp",
    "prompt": "生成一组 6 个原创 AI 智能体 Bot IP 角色，使用 3:4 竖版，上方占 40%，下方占 60%。\n\n角色设计：简洁、圆润的抽象几何形，身体像柔软糖果、果冻或橡胶玩具，体积饱满、轮廓完整、没有尖角。6 个角色分别采用紫色、珊瑚红、天蓝、粉色、明黄和青柠绿。轮廓与标志特征各不相同，可为云朵、触角、水滴、圆环、方块、花朵等。五官统一为夸张凸起的大白眼球、黑瞳孔与极简小嘴，用不同视线和表情表现活泼、好奇、机灵、顽皮、呆萌等性格。\n\n材质与渲染：3D 软胶玩具质感，柔软细腻、略哑光，带极细微压纹、柔和次表面散射、饱满体积与圆润倒角，达到卡通动画电影的精细渲染品质。材质与视觉语言统一，不使用金属、机械或复杂结构。\n\n上方 40%：6 个角色在温暖明亮的创意工作室围绕笔记本电脑探索、讨论和创作，前后自然错落，有的观察屏幕，有的兴奋交流，有的专注思考，呈现团队协作的故事瞬间。环境包含木桌、台灯、窗户、绿植、书架和少量文具。午后阳光从侧窗进入，台灯提供局部暖光，形成自然光影、接触阴影、景深与电影氛围，丰富但不杂乱，焦点明确。\n\n下方 60%：纯黑背景，无渐变或纹理。6 个角色按 3 列 2 行网格整齐展示，每格一个、面向镜头、大小相近、居中、等距、留白充分。上下角色的轮廓、颜色、五官、材质和特征必须一一对应，不增减。\n\n整体现代、极简、活泼、有趣、年轻、中性，鲜艳糖果色与统一设计语言兼具玩具收藏感和动画情绪表现。上下以干净直线分隔，无边框。无文字、字母、数字、标志或水印，不模仿知名 IP。高清精细渲染。"
  },
  {
    "id": "image2hub-ai-bot-cosmic-magic",
    "title": "毛绒几何 AI Bot 奇幻团",
    "categoryKey": "ip",
    "subcategory": "AI Bot IP 角色设计",
    "ratio": "3 / 4",
    "imagePath": "assets/ip/aibot/ai-bot-cosmic-magic.webp",
    "prompt": "生成一组 6 个原创 AI 智能体 Bot IP 角色，使用 3:4 竖版，上方占 40%，下方占 60%。\n\n上方为场景主视觉：6 个角色在完整办公室环境中共同做一件事，具有故事性和电影感，不要摆拍。下方为纯黑背景，6 个角色独立正面展示，按 3 列 2 行整齐排列，上下特征完全一致。角色之间及与画面边缘之间留出充足空白。\n\n角色材质为 3D 毛绒，风格为简单几何形。每个角色的轮廓、颜色与性格不同，但共享相同材质、造型语言和五官系统，明确属于同一家族。整体简洁、现代、中性，无文字、标志或水印，不模仿已有 IP。"
  },
  {
    "id": "image2hub-ai-bot-geometric-studio",
    "title": "极简几何 AI Bot 视觉提案",
    "categoryKey": "ip",
    "subcategory": "AI Bot IP 角色设计",
    "ratio": "3 / 4",
    "imagePath": "assets/ip/aibot/ai-bot-geometric-studio.webp",
    "prompt": "以互联网视觉设计师的标准，生成一组 6 个原创 AI 智能体 Bot IP 角色。使用 3:4 竖版，上方占 40%，下方占 60%。\n\n上方为场景主视觉：6 个角色在完整办公室中共同做一件事，呈现故事性与电影感，不要摆拍。下方为纯黑背景，6 个角色独立展示，按 3 列 2 行整齐排列。上下均为同一组角色的正面视图，特征完全一致，角色之间及与边缘之间保留充足空白。\n\n使用 3D 材质，造型为简洁、古怪的抽象几何形，没有手臂和表情，只有眼睛。每个角色轮廓、颜色和性格不同，但材质、造型语言和五官系统一致，明确属于同一家族。整体简洁、现代、中性，无文字、标志或水印，不模仿已有 IP。"
  },
  {
    "id": "image2hub-ai-bot-soft-companions",
    "title": "柔软毛绒 AI Bot 陪伴团",
    "categoryKey": "ip",
    "subcategory": "AI Bot IP 角色设计",
    "ratio": "3 / 4",
    "imagePath": "assets/ip/aibot/ai-bot-soft-companions.webp",
    "prompt": "生成一组 6 个原创 AI 智能体 Bot IP 角色，使用 3:4 竖版，上方占 40%，下方占 60%。\n\n上方为场景主视觉：6 个角色在完整办公室中共同做一件事，具有故事性和电影感，不要摆拍。下方为纯黑背景，6 个角色单独正面展示，按 3 列 2 行整齐排列。上下为完全相同的角色，特征一致，角色之间及与画面边缘之间保留充足空白。\n\n角色材质为 3D 毛绒，风格为简洁几何形。每个角色轮廓、颜色和性格不同，但材质、造型语言和五官系统统一，明确属于同一家族。整体简洁、现代、中性，无文字、标志或水印，不模仿已有 IP。"
  },
  {
    "id": "image2hub-ai-bot-nature-camp",
    "title": "自然场景 AI Bot 家族",
    "categoryKey": "ip",
    "subcategory": "AI Bot IP 角色设计",
    "ratio": "3 / 4",
    "imagePath": "assets/ip/aibot/ai-bot-nature-camp.webp",
    "prompt": "生成一组 6 个原创 AI 智能体 Bot IP 角色，使用 3:4 竖版，上方占 40%，下方占 60%。\n\n上方为场景主视觉：6 个角色在完整环境中共同经历一个瞬间，具有故事性和电影感，不要摆拍。下方为纯黑背景，6 个角色独立展示，按 3 列 2 行整齐排列。上下是同一组角色，特征完全一致。\n\n自由设计角色：每个角色轮廓、颜色和性格不同，但共享相同材质、造型语言和五官系统，明确属于同一家族。整体亲切、简洁、中性。构图宽松，角色占画面的比例要小，不放大、不铺满、不贴边；每个角色只占所属区域约一半。角色之间及与画面边缘之间保留充足空白。无文字、标志或水印，不模仿已有 IP。"
  },
  {
    "id": "image2hub-ai-bot-colorful-team",
    "title": "彩色 AI Bot 场景与标准形象板",
    "categoryKey": "ip",
    "subcategory": "AI Bot IP 角色设计",
    "ratio": "3 / 4",
    "imagePath": "assets/ip/aibot/ai-bot-colorful-team.webp",
    "prompt": "生成一组 6 个原创 AI 智能体 Bot IP 角色，在一张 3:4 竖版图中上下分区，上方占画面高度 40%，下方占 60%。\n\n布局必须严格遵守。上方 40% 为完整场景主视觉，铺满区域，不留白边。自由设计适合这组角色的环境和正在发生的具体事件，让 6 个角色真实生活其中，共同做一件事，如动画电影中的瞬间，不面向镜头合影。空间、家具和道具服务于事件；前、中、后景有纵深；台灯、窗光等真实光源创造电影光影与氛围；视觉焦点清晰。角色与环境自然互动，操作、搬运、观察或合作，姿势、视线和位置服务于事件，不排队看镜头。角色大小符合空间透视，受环境光照明，脚下及周围有真实接触阴影。\n\n下方 60% 为 6 个角色的独立展示，按 3 列 2 行网格排列，每格一个，居中、正面、标准站姿、大小一致、间距均匀。使用纯白背景与中性均匀光线，与上方场景形成对比。上下角色必须一一对应，轮廓、主色、五官、材质和辨识特征完全一致；不增减、不重复、不改变颜色或形状。下方为标准外观，上方为故事场景，姿态与表情可变，识别特征不可变。上下用干净直线分隔，无边框、卡片或标题区，任何位置都不添加文字，角色之间留白充足。\n\n统一规则：相同柔软材质、无尖角的圆润形状、极简五官与 3D 渲染风格；无性别或年龄感；亲切呆萌，略有机灵感；身体比例基本一致。\n\n自由创作每个角色的轮廓、主色、表情、特征，以及上方场景主题、事件和互动，不套用固定模板。角色之间不重复轮廓、主色或性格，能一眼区分，同时明显属于同一家族。可用局部特征或极简小配饰区分，不依赖复杂道具或服装。\n\n下方背景为纯白 #FFFFFF，无渐变、纹理或场景；上方环境完整铺满，颜色与光影和下方明显对比。无文字、字母、数字、品牌标志或水印，不模仿知名 IP。角色不使用金属机器人、电路、机械结构或发光科技风；场景道具不受此限制。无写实人类、复杂五官、多余肢体、恐怖或攻击性表情。输出 3:4 竖版。"
  },
  {
    "id": "image2hub-lavender-sherpa-and-shades",
    "title": "薰衣草绒衣墨镜壮汉",
    "categoryKey": "ip",
    "subcategory": "软雕塑角色",
    "ratio": "2 / 3",
    "imagePath": "assets/ip/soft-sculpture/lavender-sherpa-and-shades.webp",
    "prompt": "生成 2:3 竖版全身 3D 设计师玩具人像：一名宽肩男性抱臂站立，剃短寸头，戴厚椭圆黑墨镜和黑色耳钉，留浓密紧卷的黑胡须与小胡子。穿宽大浅薰衣草紫羊羔绒夹克，气球袖与黑纽扣，搭配宽松截短黑裤和夸张黑色厚齿底靴。略低机位，朱红橙色无缝棚拍背景。用光突出绒衣和胡须的卷曲纹理，与光滑哑光面部、靴子形成对比。"
  },
  {
    "id": "image2hub-silver-bob-record-collector",
    "title": "银紫波波头唱片收藏家",
    "categoryKey": "ip",
    "subcategory": "软雕塑角色",
    "ratio": "2 / 3",
    "imagePath": "assets/ip/soft-sculpture/silver-bob-record-collector.webp",
    "prompt": "生成 2:3 竖版四分之三视角的 3D 设计师玩具唱片收藏家，表情放松，取景从头到大腿上部。银薰衣草紫波浪波波头配齐刘海，戴厚长春花蓝遮阳式墨镜，深色镜片，留深色胡须，微笑。穿绒面钴蓝宽袖毛衣与奶油色裤子，抱一张朝镜头倾斜的黑胶唱片，唱片中心浅蓝标签，手指可见几枚厚银戒指。冰蓝无缝背景，柔和漫射光展示毛衣细纤维与唱片同心沟槽。"
  },
  {
    "id": "image2hub-lavender-curls-skater",
    "title": "薰衣草卷发滑板手",
    "categoryKey": "ip",
    "subcategory": "软雕塑角色",
    "ratio": "2 / 3",
    "imagePath": "assets/ip/soft-sculpture/lavender-curls-skater.webp",
    "prompt": "生成 2:3 竖版全身 3D 设计师玩具人像：慵懒滑板手坐在低矮浅色混凝土块上。蓬松弹性薰衣草紫卷发，超大圆白眼镜，半闭眼，珊瑚色长鼻子、小黑胡子与歪嘴笑。穿宽大钴蓝和象牙白条纹针织毛衣、宽松钴蓝裤、厚奶油色运动鞋。黑滑板横放腿上，有层叠木边和奶油色轮子，一只手垂在板面上。四分之三视角，浅长春花蓝棚拍背景，柔光区分纱线、卷发、哑光皮肤和混凝土。"
  },
  {
    "id": "image2hub-neon-knit-mechanic",
    "title": "荧光针织机械师",
    "categoryKey": "ip",
    "subcategory": "软雕塑角色",
    "ratio": "2 / 3",
    "imagePath": "assets/ip/soft-sculpture/neon-knit-mechanic.webp",
    "prompt": "生成 2:3 竖版全身 3D 设计师玩具机械师，神态顽皮。哑光珊瑚色皮肤、钴蓝眼妆、银色耳环和鼻中隔环；浅薰衣草紫头发，齐刘海、两个尖发束、粗辫向外卷。穿宽大荧光黄绿绞花高领毛衣，带钴蓝纹样、蓝色工具背带和盘绕电缆；同色系系带靴配巨大白色齿底，一把蓝色长活动扳手垂在腿旁。长春花蓝无缝背景，漫射光突出纱线、塑形皮肤和金属配件。"
  },
  {
    "id": "image2hub-cobalt-puffer-fashion",
    "title": "钴蓝蓬松外套时装人偶",
    "categoryKey": "ip",
    "subcategory": "软雕塑角色",
    "ratio": "2 / 3",
    "imagePath": "assets/ip/soft-sculpture/cobalt-puffer-fashion.webp",
    "prompt": "生成 2:3 竖版全身 3D 时装人像：铂金金发，齐刘海与雕塑般波浪，下巴压低，蓝眼睛向上看。超大电蓝外套由交错的天鹅绒填充鼓包组成，在肩部和袖子周围膨胀。搭配鲜橙上衣、不对称黄绿百褶裙、橙袜和厚象牙白松糕运动鞋，细银斜挎链上挂闪亮紫色迷你包，一只手持黑手机。人物居中，薰衣草蓝无缝背景，柔和棚拍光勾勒每个蓬松体块。"
  },
  {
    "id": "image2hub-sparkler-devil",
    "title": "仙女棒紫色小恶魔",
    "categoryKey": "ip",
    "subcategory": "软雕塑角色",
    "ratio": "2 / 3",
    "imagePath": "assets/ip/soft-sculpture/sparkler-devil.webp",
    "prompt": "生成 2:3 竖版全身 3D 设计师玩具：瘦长紫色小恶魔在头旁举着点燃的仙女棒，两根高黑角向上弯，尖耳、靛蓝卷发、琥珀半闭眼、歪嘴笑，箭头尾巴卷向一侧。穿宽大钴蓝粗针毛衣，上布黄橙星星，黑铆钉腰带、卷边蓝牛仔裤，一侧膝盖破洞，象牙白绒拖鞋。金橙无缝棚拍背景、暖轮廓光，针织线圈、哑光皮肤和光滑角的质感清楚区分。"
  },
  {
    "id": "image2hub-blue-hoodie-stare",
    "title": "蓝色卫衣倔强人偶",
    "categoryKey": "ip",
    "subcategory": "软雕塑角色",
    "ratio": "2 / 3",
    "imagePath": "assets/ip/soft-sculpture/blue-hoodie-stare.webp",
    "prompt": "生成 2:3 竖版 3D 设计师玩具人像：剃光头的人物弓身坐在低矮白折叠凳上，双膝分开，双手在巨大白袖口中交握。穿钴蓝气球袖卫衣、同色短裤和白运动鞋，突出耳朵与锐利斜眉，眼神倔强。全身在画面下部居中，矢车菊蓝无缝棚拍背景。光滑哑光软胶表面，漫射光和轻柔地面投影。"
  },
  {
    "id": "image2hub-redhead-in-black",
    "title": "铜卷发黑西装收藏人偶",
    "categoryKey": "ip",
    "subcategory": "软雕塑角色",
    "ratio": "2 / 3",
    "imagePath": "assets/ip/soft-sculpture/redhead-in-black.webp",
    "prompt": "生成 2:3 竖版棚拍 3D 收藏人偶：粗铜色卷发、下垂眼睛、长鼻子和疲惫表情。低坐屈膝，一侧脸颊托在掌心，另一手松垂在膝盖上。穿宽松黑西装、阔腿裤和素黑鞋。四分之三视角全身构图，米白无缝背景，哑光雕塑表面，柔和阴影保留黑布料褶皱。"
  },
  {
    "id": "image2hub-spa-day-elder",
    "title": "温泉白胡子老人",
    "categoryKey": "ip",
    "subcategory": "软雕塑角色",
    "ratio": "2 / 3",
    "imagePath": "assets/ip/soft-sculpture/spa-day-elder.webp",
    "prompt": "把脾气不好的年长温泉客人渲染成圆润 3D 设计师玩具，使用 2:3 竖版棚拍人像。巨大云朵般白胡须与小胡子，高白毛巾头巾、蓬松白浴袍和超大同色拖鞋。坐姿双膝并拢，每只拳头捏一片黄瓜，浓眉下目光斜视。象牙白人物配高饱和矢车菊蓝无缝背景，柔和侧光、微弱落地投影。"
  },
  {
    "id": "image2hub-cloud-knit-dog-walker",
    "title": "云朵针织遛狗人偶",
    "categoryKey": "ip",
    "subcategory": "毛绒角色",
    "ratio": "2 / 3",
    "imagePath": "assets/ip/plush-characters/cloud-knit-dog-walker.webp",
    "prompt": "生成 2:3 竖版全身 3D 时尚玩具：古怪遛狗人，云白头发、白猫眼镜框配偏红镜片、雕塑感圆耳环。穿巨大象牙白外套，由粗大松编羊毛构成，内搭浅裤与彩色厚鞋。用细白牵引绳带着三只小白毛绒狗穿过画面底部。深钴蓝无缝背景，漫射棚拍光突出超大针织线圈。"
  },
  {
    "id": "image2hub-orange-haired-guitarist",
    "title": "橙卷发毛绒吉他手",
    "categoryKey": "ip",
    "subcategory": "毛绒角色",
    "ratio": "2 / 3",
    "imagePath": "assets/ip/plush-characters/orange-haired-guitarist.webp",
    "prompt": "渲染瘦长 3D 玩具音乐人，坐在奶油黄阶梯上，有长鼻子、光环般橙卷发、白头戴耳机和蓬松淡紫针织上衣。小钴蓝电吉他横放腿上，宽松奶油色裤盖住厚棕运动鞋，身旁放微型音箱。2:3 竖版全身构图，浅天蓝场景配斜向楼梯扶手，温和日光照出卷发、纱线圈与麂皮鞋质感。"
  },
  {
    "id": "image2hub-pink-afro-lounge",
    "title": "粉色爆炸头休闲人偶",
    "categoryKey": "ip",
    "subcategory": "毛绒角色",
    "ratio": "2 / 3",
    "imagePath": "assets/ip/plush-characters/pink-afro-lounge.webp",
    "prompt": "生成 2:3 竖版坐姿 3D 时尚娃娃，巨大的棉花糖粉爆炸头占画面上半部。窄粉椭圆眼镜、夸张银耳环、无聊的侧视眼神，宽大粉蓝绒毛衣配浅牛仔裤。人物陷在青柠绿椅子里，蓝色环境保持克制。柔和正面光、雕塑感五官和细微飞散绒毛光晕。"
  },
  {
    "id": "image2hub-green-punk-florist",
    "title": "绿发朋克毛绒花匠",
    "categoryKey": "ip",
    "subcategory": "毛绒角色",
    "ratio": "2 / 3",
    "imagePath": "assets/ip/plush-characters/green-punk-florist.webp",
    "prompt": "生成 2:3 竖版腰部以上 3D 花匠人像，神情不悦。草绿尖发、浓绿眉毛和小胡子、极长粉鼻子、小鼻环。穿有纹理的绿针织开衫、灰绿露指手套，手持一小枝植物，周围是茂密粉、黄、橙、紫花朵，背景晴朗蓝天。浅景深和柔和日光，将可触摸的纱线、头发与花丛区分。"
  },
  {
    "id": "image2hub-ringside-orange-juice",
    "title": "拳台边喝橙汁的毛绒人偶",
    "categoryKey": "ip",
    "subcategory": "毛绒角色",
    "ratio": "2 / 3",
    "imagePath": "assets/ip/plush-characters/ringside-orange-juice.webp",
    "prompt": "生成 2:3 竖版 3D 人像：矮小、闷闷不乐的人物在白拳台绳旁用吸管喝橙汁。尖锐钴蓝猫耳形发型、大白圆盘耳环、浅粉绒毛气球袖服装、超大多色跑鞋。低机位全身构图，浅蓝背景与暖象牙白拳台地面，细绒纤维、柔和棚拍阴影和冷淡侧视目光。"
  },
  {
    "id": "image2hub-blue-coat-fashion-grande-dame",
    "title": "钴蓝泰迪外套时尚老妇",
    "categoryKey": "ip",
    "subcategory": "毛绒角色",
    "ratio": "2 / 3",
    "imagePath": "assets/ip/plush-characters/blue-coat-fashion-grande-dame.webp",
    "prompt": "生成 2:3 竖版全身 3D 时装人偶：严肃的年长娃娃，巨大的云白高蓬发、棱角分明的白猫眼镜和厚金耳环。裹宽大钴蓝泰迪绒外套，宽领、白流苏系带，底下只露出小浅色尖头鞋。极简冷灰室内配细微蓝色点缀，强调浓密刷绒纹理和柔和均匀棚拍光。"
  },
  {
    "id": "image2hub-cobalt-skate-kid",
    "title": "钴蓝条纹毛绒滑板少年",
    "categoryKey": "ip",
    "subcategory": "毛绒角色",
    "ratio": "2 / 3",
    "imagePath": "assets/ip/plush-characters/cobalt-skate-kid.webp",
    "prompt": "生成 2:3 竖版 3D 收藏人偶：顽皮年轻滑板手，电蓝锅盖头、锐利斜眉、银圈耳环。低坐，穿宽大钴蓝白条纹绒毛衣和厚重白松糕运动鞋，用吸管喝小杯饮料。滑板和浅色轮子从人物后方右侧露出。长春花蓝无缝棚拍背景，冷漫射光，毛衣纤维清晰可见。"
  },
  {
    "id": "image2hub-striped-sweater-drummer",
    "title": "条纹毛衣毛绒鼓手",
    "categoryKey": "ip",
    "subcategory": "毛绒角色",
    "ratio": "2 / 3",
    "imagePath": "assets/ip/plush-characters/striped-sweater-drummer.webp",
    "prompt": "生成 2:3 竖版全身 3D 鼓手：凌乱象牙白头发、蓝头戴耳机、小橙红墨镜、宽大钴蓝白宽条纹绒毛衣，神态放松。坐在紧凑蓝架子鼓前，鼓装白支架，一根鼓棒抬起，另一根准备落在鼓面。宽松蓝裤、米白运动鞋，鼓旁放外带杯。天蓝无缝场景，轻柔侧光与柔软地面阴影。"
  },
  {
    "id": "image2hub-orange-sherpa-basketball-fan",
    "title": "橙色羊羔绒篮球迷",
    "categoryKey": "ip",
    "subcategory": "毛绒角色",
    "ratio": "2 / 3",
    "imagePath": "assets/ip/plush-characters/orange-sherpa-basketball-fan.webp",
    "prompt": "生成 2:3 竖版 3D 收藏人偶：敦实篮球迷靠在小折叠椅上，短金卷发、窄环绕墨镜、膨胀球状橘色羊羔绒服装，上有校队蓝字母和数字 37。白袜、夸张奶油色高帮鞋，一颗奶油色小球平衡在抬起的手指上。四分之三视角全身，简洁长春花蓝背景，柔和侧光照出绒毛。"
  },
  {
    "id": "image2hub-periwinkle-cloud-head",
    "title": "长春花蓝云朵头人偶",
    "categoryKey": "ip",
    "subcategory": "毛绒角色",
    "ratio": "2 / 3",
    "imagePath": "assets/ip/plush-characters/periwinkle-cloud-head.webp",
    "prompt": "生成 2:3 竖版全身 3D 艺术玩具：小小坐姿人物顶着巨大横椭圆长春花蓝绒发，头发下只露一点粉脸和疲倦眼睛。搭配梨形蓝绒毛衣与巨大罗纹袖口，再用细粉小腿和巨大白运动鞋形成对比。近对称轮廓在浅蓝无缝场景中居中，柔和冷光与细腻轮廓光照亮纤维。"
  },
  {
    "id": "image2hub-butter-yellow-ponytail",
    "title": "奶油黄马尾毛绒人偶",
    "categoryKey": "ip",
    "subcategory": "毛绒角色",
    "ratio": "2 / 3",
    "imagePath": "assets/ip/plush-characters/butter-yellow-ponytail.webp",
    "prompt": "生成 2:3 竖版 3D 时尚玩具女性，巨大奶油黄绒马尾、同色宽大针织毛衣与白松糕运动鞋。盘腿坐在低蓝跑道边长凳上，拿着红橙饮料与吸管，半闭眼向侧面看。高饱和宝蓝运动场景配清晰白跑道线，四分之三视角，柔光照出羊毛和绒面。"
  },
  {
    "id": "image2hub-cream-knit-mustache",
    "title": "奶油针织卷胡子人偶",
    "categoryKey": "ip",
    "subcategory": "毛绒角色",
    "ratio": "2 / 3",
    "imagePath": "assets/ip/plush-characters/cream-knit-mustache.webp",
    "prompt": "生成 2:3 竖版全身 3D 胖玩具人偶，近单色燕麦与奶油色调。横向宽阔卷绒发束、夸张卷翘小胡子、半闭粉眼睛。穿超大绞花高领毛衣与收脚米色裤，一只手拿微型白茶杯。站立人物配低饱和蓝灰棚拍背景，漫射光区分纱线、卷发与哑光皮肤。"
  },
  {
    "id": "image2hub-scarlet-coat-violinist",
    "title": "猩红绒衣小提琴手",
    "categoryKey": "ip",
    "subcategory": "毛绒角色",
    "ratio": "2 / 3",
    "imagePath": "assets/ip/plush-characters/scarlet-coat-violinist.webp",
    "prompt": "生成 2:3 竖版 3D 时尚玩具小提琴手：锐利眼神、光泽黑波波头与齐刘海，盘腿坐在浅色方块上。穿宽大猩红毛绒外套、黑高松糕靴。高饱和钴蓝小提琴架在肩上，蓝琴弓斜穿构图。干净浅长春花蓝背景，全身居中，柔和棚拍光区分绒外套、光滑靴子和乐器。"
  },
  {
    "id": "image2hub-plush-illustrator-and-puppy",
    "title": "毛绒插画师与小狗",
    "categoryKey": "ip",
    "subcategory": "毛绒角色",
    "ratio": "2 / 3",
    "imagePath": "assets/ip/plush-characters/plush-illustrator-and-puppy.webp",
    "prompt": "生成温馨 2:3 竖版 3D 场景：卷发插画师坐在圆奶油豆袋椅里，用触控笔在平板上画画，小白绒狗依偎身边。蓝白耳机、白墨镜架在头上、钴蓝绒毛衣袖上有白雏菊、宽松奶油裤、蓝条纹白运动鞋。矢车菊蓝房间中放叠书、雏菊杯、蓝穹顶灯与龟背竹。柔和日光，可触摸的针织与绒毛纹理。"
  },
  {
    "id": "image2hub-three-coats-at-dusk",
    "title": "黄昏橙衣三人超现实叙事",
    "categoryKey": "illustration",
    "subcategory": "超现实叙事",
    "ratio": "2 / 3",
    "imagePath": "assets/illustration/surreal-narrative/three-coats-at-dusk.webp",
    "prompt": "绘制 2:3 竖版超现实时装场景：黄昏中三个并肩人物的背影，穿宽大橙外套，上布破碎黑与海军蓝菱形纹样，重复轮廓下露出裸小腿和浅靴。人物置于深绿起伏丘陵与高黄花苞之间，鲑橙天空有浅月和厚炭灰云。使用不透明水粉般颜料、明显宽笔触、扁平透视与安静民间故事氛围。"
  },
  {
    "id": "image2hub-witch-in-leopard-coat",
    "title": "豹纹外套女巫叙事插画",
    "categoryKey": "illustration",
    "subcategory": "超现实叙事",
    "ratio": "2 / 3",
    "imagePath": "assets/illustration/surreal-narrative/witch-in-leopard-coat.webp",
    "prompt": "绘制 2:3 竖版绘本时装人像：苍白女性、蓝黑长发、红脸颊、宽大下垂黑女巫帽。宽大暖赭豹纹外套填满前景，不规则黑环纹样，衣领竖起。人物越肩回望，被高橙花围绕，背景深苔绿林地。不透明水粉层叠、明显干刷边缘，墨黑、赭色与焦橙营造沉静氛围。"
  },
  {
    "id": "image2hub-unicorn-and-orange-blossoms",
    "title": "独角兽与橙花童话肖像",
    "categoryKey": "illustration",
    "subcategory": "超现实叙事",
    "ratio": "2 / 3",
    "imagePath": "assets/illustration/surreal-narrative/unicorn-and-orange-blossoms.webp",
    "prompt": "绘制 2:3 竖版童话人像：庄重橙发人物戴小金冠、蓝奶油色褶领与巨大绿象牙白棋盘格披风。白独角兽紧靠肩后，长脸与人物并列，角指向右上。中央有小束橙花，背景平面深青绿。使用不规则水粉笔触，目光安静、直视观者。"
  },
  {
    "id": "image2hub-man-and-watching-lamp",
    "title": "男子与凝视台灯的超现实室内",
    "categoryKey": "illustration",
    "subcategory": "超现实叙事",
    "ratio": "2 / 3",
    "imagePath": "assets/illustration/surreal-narrative/man-and-watching-lamp.webp",
    "prompt": "绘制 2:3 竖版超现实室内：严肃胡子男子僵坐在森林绿扶手椅上，齐黑波波头、宽大棕豹纹外套、窄奶油细条纹裤和黑鞋。右侧橙落地灯罩上画一只大眼，下铺红蓝纹样地毯。暖铁锈墙面、正面构图、扁平透视与层叠哑光笔迹，呈现冷幽默和诡异感。"
  },
  {
    "id": "image2hub-blue-faced-striped-portrait",
    "title": "蓝脸条纹表现主义肖像",
    "categoryKey": "illustration",
    "subcategory": "表现主义肖像",
    "ratio": "2 / 3",
    "imagePath": "assets/illustration/expressionist-portraits/blue-faced-striped-portrait.webp",
    "prompt": "绘制 2:3 竖版表现主义半身肖像：疲惫人物，向后梳黑短发，薰衣草蓝狭长棱角脸，超大珊瑚耳鼻，向下垂的黄橙眼皮。肩膀转开，脸回倾看观者。下半部以黑象牙白条纹夹克和青柠绿领填满，背景纯午夜蓝。哑光水粉色、明显纸纹、粗犷坚定的笔触边缘。"
  },
  {
    "id": "image2hub-orange-bob-blue-glasses",
    "title": "橙发蓝眼镜表现主义肖像",
    "categoryKey": "illustration",
    "subcategory": "表现主义肖像",
    "ratio": "2 / 3",
    "imagePath": "assets/illustration/expressionist-portraits/orange-bob-blue-glasses.webp",
    "prompt": "绘制 2:3 竖版表现主义半身像：冷淡男子，几何橙波波头、超大方钴蓝眼镜、长玫瑰粉鼻子、深色卷翘八字胡。穿高领毛衣，宽海军蓝与灰蓝条纹沿肩弯曲。胸像略转，眼睛靠近中心。深森林绿背景，不透明颜料和柔和干刷颗粒。"
  },
  {
    "id": "image2hub-dandy-and-blue-anemone",
    "title": "绅士与蓝银莲花表现主义肖像",
    "categoryKey": "illustration",
    "subcategory": "表现主义肖像",
    "ratio": "2 / 3",
    "imagePath": "assets/illustration/expressionist-portraits/dandy-and-blue-anemone.webp",
    "prompt": "绘制 2:3 竖版表现主义人像：胡子绅士扬起珊瑚长鼻子，闻浅蓝银莲花。花朵和高绿茎沿脸左侧上升。后梳黑发、一只向上看绿眼、橙罗纹衬衫、黑领结和醒目黑奶油条纹夹克。平面群青背景、简化形状、明显水粉笔触纹理。"
  },
  {
    "id": "image2hub-copper-curls-over-the-shoulder",
    "title": "铜卷发越肩回望肖像",
    "categoryKey": "illustration",
    "subcategory": "表现主义肖像",
    "ratio": "2 / 3",
    "imagePath": "assets/illustration/expressionist-portraits/copper-curls-over-the-shoulder.webp",
    "prompt": "绘制紧凑 2:3 竖版四分之三视角人像：多疑男子越肩回看，火橙小卷发、纠缠铜胡须、沉重绿眼、夸张深红鼻子、带雀斑粉紫皮肤。海军蓝与薰衣草宽条纹夹克斜扫右下。灰蓝背景、颗粒感不透明笔触，面部结构采用表现主义变形。"
  },
  {
    "id": "image2hub-sunflower-coat-and-flames",
    "title": "向日葵外套与火焰超现实肖像",
    "categoryKey": "illustration",
    "subcategory": "超现实叙事",
    "ratio": "2 / 3",
    "imagePath": "assets/illustration/surreal-narrative/sunflower-coat-and-flames.webp",
    "prompt": "绘制 2:3 竖版超现实半身像：人物穿深绿外套，上布密集橙向日葵，头戴近乎无特征黑兜帽，卷曲橙黄火焰在周围升起，如不规则王冠。衣领上露一条窄暖色颈部。带纹理午夜青绿背景、扁平形体、不透明水粉层叠、强烈冷暖对比。"
  },
  {
    "id": "image2hub-secret-in-the-blue-flowers",
    "title": "蓝花丛中的秘密叙事插画",
    "categoryKey": "illustration",
    "subcategory": "超现实叙事",
    "ratio": "2 / 3",
    "imagePath": "assets/illustration/surreal-narrative/secret-in-the-blue-flowers.webp",
    "prompt": "绘制 2:3 竖版超现实花园：黑发黑胡子男子从密集钴蓝花和高橄榄绿茎间探头，穿橙奶油格子衣袖，一根食指竖在唇前。脸位于中心稍下，前景花瓣遮住部分人物，深色植物填满全图。不透明水粉、扁平植物纹样、带小黄花心的纹理花瓣。"
  },
  {
    "id": "image2hub-starry-periwinkle-portrait",
    "title": "星空长春花蓝表现主义肖像",
    "categoryKey": "illustration",
    "subcategory": "表现主义肖像",
    "ratio": "2 / 3",
    "imagePath": "assets/illustration/expressionist-portraits/starry-periwinkle-portrait.webp",
    "prompt": "绘制 2:3 竖版表现主义时装半身像：冷淡紫蓝人物，利落白波波头和齐刘海、珊瑚鼻耳，四分之三视角可见一只沉重半闭黄眼。肩上裹厚黑电蓝棋盘格外套，边缘有绒感笔触。深钴蓝背景散布少量金八角星。哑光不透明颜料、可见颗粒、受控配色和强色彩对比。"
  },
  {
    "id": "image2hub-ginger-crop-checkered-coat",
    "title": "姜红短发棋盘格外套肖像",
    "categoryKey": "illustration",
    "subcategory": "表现主义肖像",
    "ratio": "2 / 3",
    "imagePath": "assets/illustration/expressionist-portraits/ginger-crop-checkered-coat.webp",
    "prompt": "绘制 2:3 竖版表现主义肖像：消瘦人物越肩回望，贴头铁锈橙锅盖头、疲惫浅蓝眼睛、长红鼻子、小圈耳环与深唇。脖颈肩膀裹雕塑感黑米白棋盘格外套，袖部格子变条纹。带纹理深石油蓝背景、不透明笔触，脸部有斑驳粉色。"
  },
  {
    "id": "image2hub-flying-oranges-at-the-market",
    "title": "市场上飞散的橙子叙事插画",
    "categoryKey": "illustration",
    "subcategory": "超现实叙事",
    "ratio": "2 / 3",
    "imagePath": "assets/illustration/surreal-narrative/flying-oranges-at-the-market.webp",
    "prompt": "绘制 2:3 竖版诙谐市场场景：惊讶购物者穿鲜红橙外套，凌乱黑发、巨大白圈耳环，一只手抬起。前景敞开棕纸购物袋倾斜，橙子滚落并在空中弹跳。身后店面斜置，加入片段手绘店铺招牌。夸张眼睛、斜线构图、高饱和朱红与钴蓝、不透明且明显的笔触。"
  },
  {
    "id": "image2hub-headphones-on-the-commute",
    "title": "通勤耳机男子超现实叙事",
    "categoryKey": "illustration",
    "subcategory": "超现实叙事",
    "ratio": "2 / 3",
    "imagePath": "assets/illustration/surreal-narrative/headphones-on-the-commute.webp",
    "prompt": "绘制 2:3 竖版超现实通勤场景：蓬乱头发男子戴超大银耳机、蓝矩形眼镜，黑皮夹克布满徽章，内穿蓝条纹衬衫。嘴张大唱歌，腿上有浅口鼻小黑狗。身后座位挤满面无表情乘客，重复橙框架与绿椅背。哑光水粉色、夸张漫画式人物、紧凑正面裁切构图。"
  },
  {
    "id": "image2hub-secret-in-the-pink-bells",
    "title": "粉色风铃花间的秘密",
    "categoryKey": "illustration",
    "subcategory": "超现实叙事",
    "ratio": "2 / 3",
    "imagePath": "assets/illustration/surreal-narrative/secret-in-the-pink-bells.webp",
    "prompt": "绘制 2:3 竖版超现实林地特写：棕胡子男子藏在密集枝叶里，大眼向侧面看，食指举到唇边。周围为高蓝花穗和重复下垂粉钟形花，花心金色。叶茎横穿头发与胡须，脸位于画面下部。近黑绿背景、层叠水粉笔触、暖粉花朵与冷蓝茎对比。"
  },
  {
    "id": "image2hub-bouquet-in-the-doorway",
    "title": "门口巨型花束叙事插画",
    "categoryKey": "illustration",
    "subcategory": "超现实叙事",
    "ratio": "2 / 3",
    "imagePath": "assets/illustration/surreal-narrative/bouquet-in-the-doorway.webp",
    "prompt": "绘制 2:3 竖版绘本场景：大眼黑发男子留巨大深色小胡子，穿钴蓝外套站在珊瑚粉门口。怀抱巨大花束，蓝银莲花与珊瑚橙花遮住大部分胸口、围绕脸上升，长绿茎收在臂弯。身后房间有几张好奇脸探出。扁平透视、高饱和互补色、颗粒不透明笔触，表现笨拙而温情的气氛。"
  }
]

function normalizeRatio(ratio: string) {
  return ratio.replace(/\s*\/\s*/g, ':')
}

function resolveHoushifangImageUrl(imagePath: string) {
  return `${HOUSHIFANG_IMAGE_BASE_URL}${imagePath.replace(/^\/+/, '')}`
}

function getHoushifangDescription(seed: HoushifangPromptSeed) {
  const category = HOUSHIFANG_CATEGORY_LABELS[seed.categoryKey]
  const direction = HOUSHIFANG_SUBCATEGORY_DIRECTIONS[seed.subcategory]
  const sourceCategory = category === seed.subcategory ? category : `${category} / ${seed.subcategory}`
  return `${sourceCategory}案例，适合${direction?.useCase ?? '视觉起稿和模板复用'}。`
}

export const HOUSHIFANG_PROMPT_TEMPLATES: PromptTemplateInput[] = HOUSHIFANG_PROMPT_SEEDS.map((seed) => ({
  id: seed.id,
  title: seed.title,
  category: HOUSHIFANG_CATEGORY_LABELS[seed.categoryKey],
  subcategory: seed.subcategory,
  description: getHoushifangDescription(seed),
  tags: Array.from(new Set([HOUSHIFANG_CATEGORY_LABELS[seed.categoryKey], seed.subcategory])),
  source: HOUSHIFANG_SOURCE,
  sourceUrl: HOUSHIFANG_SOURCE_URL,
  recommendedSize: normalizeRatio(seed.ratio),
  imageUrl: resolveHoushifangImageUrl(seed.imagePath),
  imageAlt: `${seed.title}示例图`,
  prompt: seed.prompt,
  tips: HOUSHIFANG_TIPS,
}))
