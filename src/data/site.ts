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
