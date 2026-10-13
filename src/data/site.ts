export const AGENT_URL =
  'https://agent.xfyun.cn/agentbuilder/chat?sharekey=8e0e636f722258ebcfe638bb1bce8834&botId=5788571'

export const SITE = {
  name: '期末速通官',
  /** 对外署名口径：与最新海报 / 提交包外层文件夹保持一致 */
  team: '求针队',
  tagline: '把突击做成闭环 · 紧扣本人资料，绝不超纲',
  cup: '2026 iFLYTEK 星火杯',
  /** 晋级资质（海报与答辩稿口径） */
  honor: '全国 20 强',
}

/**
 * 站点页面总数。首页 HUD 的「01 / 12」引用此值。
 * 新增 / 删除路由时同步改这里（路由表见 src/App.tsx）。
 */
export const PAGE_TOTAL = 12

/** 备考场景常数 · 与答辩稿 V6 第 04 页一致 */
export const SCOPE = [
  { k: '备考窗口', v: '考前 1–7 天' },
  { k: '考点规模', v: '分级 KP 3–10 个' },
  { k: '单轮预算', v: '资源 ≤30 分钟' },
]

/**
 * 对外主讲口径：六环节闭环。
 * 依据：答辩稿 V6 第 04 页（主链路定义页）——「基于本人课程资料的六环节考前冲刺闭环」。
 * 海报同步为六环节（用户 2026-10-12 拍板：PPT / 海报 / 站点统一六环）。
 * 站点各页的环节数、链路文案一律引用下方派生常量，勿手写。
 */
export const LOOP_STEPS = [
  {
    id: 'intake',
    n: '01',
    title: '资料识别',
    en: 'Intake',
    ms: 'Imbas Bahan',
    desc: '文本 / 图片 / PDF 统一 OCR 与清洗去重，先判断资料是否够用。',
    descEn: 'Text, images, and PDFs go through one OCR and dedupe pass, then the system checks whether the material is enough.',
    descMs: 'Teks, imej dan PDF melalui OCR dan nyahduplikasi, kemudian sistem semak sama ada bahan mencukupi.',
  },
  {
    id: 'map',
    n: '02',
    title: '考点地图',
    en: 'KP Map',
    ms: 'Peta KP',
    desc: '3–10 个考点按必考 / 常考 / 了解分级，逐条标注资料依据。',
    descEn: 'Three to ten key points, graded must-know, common, or overview, each tied to a source in the notes.',
    descMs: 'Tiga hingga sepuluh topik, digred wajib, biasa atau gambaran, setiap satu merujuk nota asal.',
  },
  {
    id: 'lecture',
    n: '03',
    title: '限时精讲',
    en: 'Lecture',
    ms: 'Kuliah Ringkas',
    desc: '按剩余天数定范围：≤1 天只讲必考，2–3 天兼顾常考，≥4 天保留完整框架。',
    descEn: 'Scope follows the days left: one day or less covers must-know only, two to three days add common topics, four or more keep the full frame.',
    descMs: 'Skop ikut baki hari: sehari atau kurang hanya topik wajib, dua hingga tiga hari tambah topik biasa, empat hari ke atas kekalkan rangka penuh.',
  },
  {
    id: 'quiz',
    n: '04',
    title: '诊断测验',
    en: 'Quiz',
    ms: 'Kuiz Diagnostik',
    desc: '5 题（3 单选 + 2 简答或计算），逐题作答并采集错因。',
    descEn: 'Five questions — three multiple choice and two short-answer or calculation — with a reason captured for each miss.',
    descMs: 'Lima soalan — tiga aneka pilihan dan dua jawapan pendek atau kiraan — setiap kesilapan ada sebab.',
  },
  {
    id: 'grade',
    n: '05',
    title: '判分补练',
    en: 'Grade',
    ms: 'Nilai & Latih',
    desc: '模型逐题判分、代码二次核算总分，据此生成 15 分钟三阶段补练。',
    descEn: 'The model scores each item, code checks the total, then a 15-minute three-part drill is built from that.',
    descMs: 'Model menanda setiap soalan, kod semak jumlah markah, kemudian bina latih tubi 15 minit dalam tiga peringkat.',
  },
  {
    id: 'memory',
    n: '06',
    title: '记忆续接',
    en: 'Memory',
    ms: 'Sambung Ingatan',
    desc: '薄弱 KP 写入长期记忆，下轮进入同一课程优先调用，不重复已掌握内容。',
    descEn: 'Weak key points go into long-term memory and come back first the next time you open the same course.',
    descMs: 'Topik lemah ditulis ke ingatan jangka panjang dan dipanggil dahulu pada pusingan seterusnya untuk kursus yang sama.',
  },
]

/* —— 由 LOOP_STEPS 派生的统一口径 ——
 * 所有文案一律引用下面这几个常量，不要再手写「五步」或链路字符串，
 * 否则改环节数时会全站漂移。 */

const CN_NUM = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']

/** 闭环环节数的中文写法（如「五」） */
export const LOOP_CN = CN_NUM[LOOP_STEPS.length] ?? String(LOOP_STEPS.length)

/** 主链路全文，如「资料识别 → 考点地图 → 限时精讲 → 诊断测验 → 判分补练 → 记忆续接」 */
export const LOOP_CHAIN = LOOP_STEPS.map((s) => s.title).join(' → ')

/** 主链路英文标签，供加载态 / HUD 使用，与 LOOP_STEPS 同序同源 */
export const LOOP_CHAIN_EN = LOOP_STEPS.map((s) => s.en).join(' · ')

export type SiteLang = 'zh' | 'en' | 'ms'

type LoopStep = (typeof LOOP_STEPS)[number]

/** 环节标题。中文仍是 title，英文沿用 en，马来语为 ms。 */
export function stepTitle(step: LoopStep, lang: SiteLang) {
  if (lang === 'en') return step.en
  if (lang === 'ms') return step.ms
  return step.title
}

export function stepDesc(step: LoopStep, lang: SiteLang) {
  if (lang === 'en') return step.descEn
  if (lang === 'ms') return step.descMs
  return step.desc
}

/** 当前语种下的主链路全文 */
export function loopChain(lang: SiteLang) {
  return LOOP_STEPS.map((step) => stepTitle(step, lang)).join(' → ')
}

/** 语言栏会改写的短句。作品名、队名、资质不在这里。 */
export const CHROME = {
  zh: {
    railKicker: '主链路 · 六环节',
    railTitle: '六个环节，一次跑完一轮复习',
    railReplay: '重播电路',
    heroSub: (chain: string) => `上传本人笔记、课件与真题，六环节走完一轮：${chain}。`,
    loopH1: '六环节闭环 · 可讲解的主链路',
    loopLead: (chain: string) =>
      `${chain}；同一套 KP 编号贯穿始终，薄弱点写回档案，下一轮优先续接。`,
  },
  en: {
    railKicker: 'Main path · 6 stages',
    railTitle: 'Six stages, one full review pass',
    railReplay: 'Replay',
    heroSub: (chain: string) =>
      `Upload your own notes, slides, and past papers, then run one pass: ${chain}.`,
    loopH1: 'Six-stage loop · the path you can walk through',
    loopLead: (chain: string) =>
      `${chain}. One set of KP numbers runs through the whole pass; weak points go back into the record and come first next time.`,
  },
  ms: {
    railKicker: 'Laluan utama · 6 peringkat',
    railTitle: 'Enam peringkat, satu pusingan ulang kaji',
    railReplay: 'Main semula',
    heroSub: (chain: string) =>
      `Muat naik nota, slaid dan kertas lepas sendiri, kemudian satu pusingan: ${chain}.`,
    loopH1: 'Gelung enam peringkat · laluan yang boleh diterangkan',
    loopLead: (chain: string) =>
      `${chain}. Satu set nombor KP sepanjang laluan; topik lemah kembali ke rekod dan diutamakan pada pusingan seterusnya.`,
  },
} as const

/** 工作流实测数字 · 答辩稿 V6 第 07 页 */
export const METRICS = [
  { n: '29', l: '工作流节点' },
  { n: '29', l: '连接边' },
  { n: '6', l: '大模型节点 · Spark 4.0 Ultra' },
  { n: '8', l: '代码节点 · 清洗 / 核算' },
  { n: '5', l: '长期记忆检索条数' },
  { n: '1024²', l: '文生图考点导图' },
]

export const FEATURES = [
  {
    title: '多源资料 → 分级考点地图',
    desc: '文本、图片、PDF 统一处理；先确认资料是否足够，再确定考点优先级。',
  },
  {
    title: '诊断结果 → 补练任务',
    desc: '逐题得分、错因与薄弱 KP 共同决定下一步 15 分钟学习。',
  },
  {
    title: '反超纲硬约束',
    desc: '提示词与校验贯穿全链路，输出紧扣本人课程资料。',
  },
]

export const INNOVATIONS: { title: string; desc: string }[] = [
  {
    title: '全链路闭环',
    desc: `${LOOP_CHAIN}，共用同一套 KP 编号，薄弱点可逐题追溯回资料原文。`,
  },
  {
    title: '分层自适应',
    desc: '按剩余天数分配精力：≤1 天只讲必考，2–3 天兼顾常考，≥4 天保留完整框架；必考 / 常考 / 了解三级分级。',
  },
  {
    title: '长期记忆续接',
    desc: '每轮把课程、目标分数与薄弱 KP 写进档案，下次进入同一课程自动读取，不重复已掌握内容。',
  },
  {
    title: '多语言路由',
    desc: '中 / 英 / 马来语共用同一套工作流、节点结构与判分逻辑，只调整提示词表述即可迁移。',
  },
  {
    title: '非结构化输入链路',
    desc: '图片、PDF、笔记截图统一进链路；资料不足时主动告知缺口，锁定「必考 + 常考」核心，不编造知识点。',
  },
  {
    title: '思维导图标准交付',
    desc: '按 KP 树生成可视化导图，与限时精讲双分支并行产出，结果可直接用于复习与讲解。',
  },
]

export const TEAM = {
  /** 三地联动 · 多元视野 */
  cities: [
    { city: '多伦多', org: '多伦多大学', note: '加拿大' },
    { city: '南通', org: '南通理工学院', note: '中国' },
    { city: '吉隆坡', org: '英迪国际大学', note: '马来西亚' },
  ],
  mentor: { name: '方舟', role: '指导老师', org: '南通理工学院 · 讲师' },
  members: [
    {
      name: '唐靖濠',
      org: '多伦多大学',
      major: '经济统计',
      role: '队长 / 项目统筹 / 中英文场景测试',
    },
    {
      name: '刘怡静',
      org: '南通理工学院',
      major: '数据科学与大数据技术',
      role: '工作流制作 / 进度统筹 / 演示配音',
    },
    {
      name: '陶文慧',
      org: '南通理工学院',
      major: '数字媒体技术',
      role: '方案策划 / 作品信息完善 / 海报制作',
    },
    {
      name: '聂铭',
      org: '南通理工学院',
      major: '标准化工程',
      role: '子流程制作 / 演示材料制作',
    },
    {
      name: '沈亦菲',
      org: '南通理工学院',
      major: '人工智能',
      role: '插件编写 / 应用方案统筹',
    },
    {
      name: '杨洋',
      org: '英迪国际大学',
      major: '信息技术',
      role: '子流程制作 / 马来语场景测试',
    },
  ],
  strengths: [
    '三地教育体系一手经验：中文、英文与马来语教材同时踩过',
    '团队即目标用户：6 名在校本科生，需求判断不偏离',
    '能力结构覆盖完整链条：工作流搭建 + 方案策划 + 演示设计',
    '跨时区异步协作常态化：最大时差 12 小时以上',
  ],
}

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

/**
 * 赛事官方标识。素材提取自组委会下发的
 * 《2026届星火杯Poster参考模板.pptx》内嵌矢量图（官网原始组合标）。
 * 深色底用 -light（反白），浅色底用 -dark。
 */
export const CUP = {
  /** 赛事官网 · 星火杯赛道 */
  url: 'https://challenge.xfyun.cn/xinghuo',
  /** 官网名口径 */
  full: '2026 iFLYTEK AI 开发者大赛 · 星火杯',
  /** 星火品牌火焰标（导航徽标用） */
  flame: asset('brand/spark-flame.png'),
  /** 官方组合标：科大讯飞 ｜ 讯飞开放平台 ｜ AI 开发者大赛（反白） */
  lockup: asset('brand/cup-lockup-light.png'),
}

export type DemoLang = 'zh' | 'en' | 'ms'

export type DemoVideo = {
  id: DemoLang
  label: string
  title: string
  desc: string
  /** 实跑场景（答辩稿 V6 第 12 / 13 页） */
  scene: string
  /** 可选完整视频；空 = 仅截图 */
  src: string
  /** 主海报截图 */
  poster: string
  /** 同语种多帧实机截图 */
  shots: string[]
  hint: string
}

export const DEMO_VIDEOS: DemoVideo[] = [
  {
    id: 'zh',
    label: '中文',
    title: '中文实机演示',
    desc: `上传资料起跑，${LOOP_CHAIN}，完整跑通一轮。`,
    scene: '大数据基础与架构（资料充足）｜ 媒体伦理 · 目标 80 分 · 距考 3 天（资料不足）',
    src: '',
    poster: asset('demo/zh.jpg'),
    shots: [asset('demo/zh-1.jpg'), asset('demo/zh-2.jpg'), asset('demo/zh-3.jpg')],
    hint: '实机录屏抽帧 · 中文场景',
  },
  {
    id: 'en',
    label: 'English',
    title: 'English live demo',
    desc: 'Same workflow, English I/O — multilingual reuse of one agent pipeline.',
    scene: '创业学导论 Chapter 1 · 中英双语总结',
    src: '',
    poster: asset('demo/en.jpg'),
    shots: [asset('demo/en-1.jpg'), asset('demo/en-2.jpg'), asset('demo/en-3.jpg')],
    hint: '实机录屏抽帧 · 英文场景',
  },
  {
    id: 'ms',
    label: 'Bahasa Melayu',
    title: '马来语实机演示',
    desc: '马来语档案 / 诊断题输出样例，与中英共用工作流。',
    scene: 'Sejarah Alam Melayu · 马来语完整闭环（档案 / 导图 / 诊断 / 复习策略）',
    src: '',
    poster: asset('demo/ms.jpg'),
    shots: [asset('demo/ms-1.jpg'), asset('demo/ms-2.jpg'), asset('demo/ms-3.jpg')],
    hint: '实机录屏抽帧 · 马来语场景',
  },
]

/**
 * 讲解视频：位置已预留。
 * 把 mp4 放进 public/media/ 并把路径填到 src，页面自动从「预留位」切换为就地播放。
 */
export const WALKTHROUGH = {
  title: '讲解视频 · 一镜到底走一遍闭环',
  desc: `从痛点定位到实机取证，一段片子讲完${LOOP_CN}环节闭环、技术架构与差异化。`,
  /** 留空 = 显示预留位；填入相对路径（如 'media/walkthrough-zh.mp4'）即自动就地播放 */
  src: '',
  /** 封面底图（接入后作为视频 poster） */
  poster: asset('demo/zh.jpg'),
  duration: '约 3 分钟',
  chapters: [
    { n: '01', t: '痛点与定位', desc: '考前一周缺的不是资料，而是复习决策与反馈。' },
    { n: '02', t: `${LOOP_CN}环节闭环`, desc: `${LOOP_CHAIN}。` },
    { n: '03', t: '实机取证', desc: '资料充足 / 资料不足两种场景现场跑一遍，记录真实输出。' },
    { n: '04', t: '技术架构', desc: '29 节点、29 条连接边：6 个模型节点 + 8 个代码节点 + 长期记忆。' },
    { n: '05', t: '差异化创新', desc: '闭环 / 自适应 / 多语言 / 长期记忆四项设计如何对应真实痛点。' },
    { n: '06', t: '团队与规划', desc: '三地联合团队，以及后续迭代与服务分层计划。' },
  ],
}

/** @deprecated 保留兼容；页面已改用 DEMO_VIDEOS */
export const VIDEO = {
  title: '真实演示截图',
  status: 'ready' as 'coming' | 'ready',
  embedUrl: '',
  note: '中文 / 英语 / 马来语实机截图已从参赛演示视频抽帧同步。',
}

export const BUSINESS = {
  summary:
    '当前验证重点在「本人资料驱动的学习闭环」；服务分层为下一步推进，不做空头营收承诺。',
  tiers: [
    {
      name: '免费层 · 获客',
      who: '期末突击的在校本科生',
      offer: '每日 1 次完整流程：考点地图 + 5 题诊断 + 15 分钟补练',
      tag: '免费',
    },
    {
      name: '个人会员 · 增值',
      who: '留学 / 中外合作 / 高强度冲刺',
      offer: '不限次数、历史画像与掌握度曲线',
      tag: '按月 / 按学期 · 考试月推出',
    },
    {
      name: '院校层 · 服务',
      who: '院校 / 教务合作',
      offer: '数据看板 + 教师赋能（规划中）',
      tag: '按校年费',
    },
  ],
  /** 三层价值金字塔（答辩稿 V6 第 15 页） */
  pyramid: [
    {
      tier: '塔尖 · 学生价值',
      desc: '45 分钟换「我知道该练什么」：考点地图带证据、5 题诊断定位薄弱 KP、15 分钟补练。',
    },
    {
      tier: '中层 · 教育价值',
      desc: '让教师知道期末答疑讲什么：集体薄弱点、现成复习框架、历届数据反哺教学。',
    },
    {
      tier: '塔基 · 平台价值',
      desc: '形成可迁移的教育智能体模板：工作流编排 + 多模型 + OCR + 长期记忆。',
    },
  ],
  wedge: '极简输入：本人课程资料 + 剩余天数',
  channels: ['海报扫码进作品站', '星辰 Agent 直达体验', '答辩演示与讲解视频互链'],
}

export const COMMUNITY = {
  status: 'planned' as const,
  pitch: '同课程研讨：按课程建轻量讨论区，分享考点地图与薄弱点（不替代教师答疑）。',
  nearTerm: [
    '收集同课程用户意愿（问卷 / 展场登记）',
    '试点「考点地图分享」只读卡片',
    '合规与内容审核方案后再开放发言',
  ],
  disclaimer: '本站为作品展示，社群功能尚未上线，敬请期待。',
}

/** 小游戏：正确顺序的环节 id（与 LOOP_STEPS 同源，避免两处口径漂移） */
export const PLAY_ORDER = LOOP_STEPS.map((s) => s.id)

export const PLAY_CARDS = LOOP_STEPS.map((s) => ({ id: s.id, label: s.title }))
