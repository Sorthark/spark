export const AGENT_URL =
  'https://agent.xfyun.cn/agentbuilder/chat?sharekey=8e0e636f722258ebcfe638bb1bce8834&botId=5788571'

export const SITE = {
  name: '期末速通官',
  team: '求针对',
  tagline: '把突击做成闭环 · 紧扣本人资料，绝不超纲',
  cup: '2026 iFLYTEK 星火杯',
}

export const LOOP_STEPS = [
  { n: '01', title: 'OCR 识资料', desc: '笔记 / 扫描 / 截图清洗汇合，统一进入复习链路。' },
  { n: '02', title: 'KP 考点地图', desc: '编号、等级与资料依据对应，必考 / 常考 / 了解分层。' },
  { n: '03', title: '5 题诊断', desc: '绑定必考 KP，定位薄弱点。' },
  { n: '04', title: '自动判分', desc: '错因分类 + 代码核分，结果可回溯。' },
  { n: '05', title: '15 分钟补练', desc: '可执行计划回写学习画像，二次进入可续学。' },
]

export const METRICS = [
  { n: '29', l: '工作流节点' },
  { n: '6', l: '大模型 · Spark 4.0 Ultra' },
  { n: '8', l: '代码节点 · 清洗 / 核分' },
  { n: '2', l: '外部工具 · OCR / 文生图' },
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

export const INNOVATIONS = [
  '全链路闭环：资料、精讲、诊断、补练共用同一套 KP 编号',
  '分层自适应：按必考 / 常考 / 了解与历史薄弱点推送',
  '长期记忆续接：课程、目标、剩余天数与薄弱 KP 可跨轮次调用',
  '多语言适配：中英音色已配，马来语样例扩展中',
]

export const TEAM = {
  mentor: '方舟 · 南通理工学院',
  captain: '唐靖濠 · 多伦多大学',
  members:
    '刘怡静 / 陶文慧 / 聂铭 / 沈亦菲（南通理工）· 杨洋（英迪国际）',
}

/**
 * 演示材料：完整 MP4 体积过大，站点优先挂载实机截图（从 03-演示材料 抽帧）。
 * 源文件目录：全国20/.../03-演示材料/
 */
const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export type DemoLang = 'zh' | 'en' | 'ms'

export type DemoVideo = {
  id: DemoLang
  label: string
  title: string
  desc: string
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
    desc: '资料输入 → 考点地图 → 诊断补练主链路（参赛演示材料抽帧）。',
    src: '',
    poster: asset('demo/zh.jpg'),
    shots: [asset('demo/zh-1.jpg'), asset('demo/zh-2.jpg'), asset('demo/zh-3.jpg')],
    hint: '截图同步自「中文演示视频.mp4」',
  },
  {
    id: 'en',
    label: 'English',
    title: 'English live demo',
    desc: 'Same workflow, English I/O — multilingual reuse of one agent pipeline.',
    src: '',
    poster: asset('demo/en.jpg'),
    shots: [asset('demo/en-1.jpg'), asset('demo/en-2.jpg'), asset('demo/en-3.jpg')],
    hint: 'Frames from English demo MP4',
  },
  {
    id: 'ms',
    label: 'Bahasa Melayu',
    title: '马来语实机演示',
    desc: '马来语档案 / 诊断题输出样例，与中英共用工作流。',
    src: '',
    poster: asset('demo/ms.jpg'),
    shots: [asset('demo/ms-1.jpg'), asset('demo/ms-2.jpg'), asset('demo/ms-3.jpg')],
    hint: '截图同步自「马来语演示视频.mp4」',
  },
]

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
      name: '免费获客层',
      who: '国内本科生期末突击',
      offer: '核心闭环免费体验，沉淀学习画像与口碑',
    },
    {
      name: '个人会员层',
      who: '留学 / 中外合作 / 高强度冲刺',
      offer: '更长记忆续接、多语言与冲刺计划增强',
    },
    {
      name: '院校服务层',
      who: '自考 / 转专业 / 跨考 / 教务合作',
      offer: '课程包与学情汇总（规划中）',
    },
  ],
  wedge: '极简输入：本人课程资料 + 剩余天数',
  channels: ['海报扫码进作品站', '星辰 Agent 直达体验', '答辩演示与讲解页互链'],
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

/** 小游戏：正确顺序的五步 id */
export const PLAY_ORDER = ['ocr', 'map', 'quiz', 'grade', 'drill'] as const

export const PLAY_CARDS: { id: (typeof PLAY_ORDER)[number]; label: string }[] = [
  { id: 'quiz', label: '5 题诊断' },
  { id: 'ocr', label: 'OCR 识资料' },
  { id: 'drill', label: '15 分钟补练' },
  { id: 'grade', label: '自动判分' },
  { id: 'map', label: 'KP 考点地图' },
]
