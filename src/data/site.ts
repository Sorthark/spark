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
export const SCOPE: { k: LStr; v: LStr }[] = [
  { k: { zh: '备考窗口', en: 'Window', ms: 'Tetingkap' }, v: { zh: '考前 1–7 天', en: '1–7 days before', ms: '1–7 hari sebelum' } },
  { k: { zh: '考点规模', en: 'KP scale', ms: 'Skala KP' }, v: { zh: '分级 KP 3–10 个', en: '3–10 graded KPs', ms: '3–10 KP bergred' } },
  { k: { zh: '单轮预算', en: 'Budget', ms: 'Bajet' }, v: { zh: '资源 ≤30 分钟', en: '≤30 minutes', ms: '≤30 minit' } },
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

export type LStr = { zh: string; en: string; ms: string }

export function tx(lang: SiteLang, text: LStr) {
  return text[lang]
}

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
export const METRICS: { n: string; l: LStr }[] = [
  { n: '29', l: { zh: '工作流节点', en: 'Workflow nodes', ms: 'Nod aliran' } },
  { n: '29', l: { zh: '连接边', en: 'Connections', ms: 'Sambungan' } },
  { n: '6', l: { zh: '大模型节点 · Spark 4.0 Ultra', en: 'Model nodes · Spark 4.0 Ultra', ms: 'Nod model · Spark 4.0 Ultra' } },
  { n: '8', l: { zh: '代码节点 · 清洗 / 核算', en: 'Code nodes · clean / score', ms: 'Nod kod · bersih / skor' } },
  { n: '5', l: { zh: '长期记忆检索条数', en: 'Memory lookups', ms: 'Carian ingatan' } },
  { n: '1024²', l: { zh: '文生图考点导图', en: 'KP map image', ms: 'Imej peta KP' } },
]

export const FEATURES: { title: LStr; desc: LStr }[] = [
  {
    title: { zh: '多源资料 → 分级考点地图', en: 'Notes in → graded KP map', ms: 'Nota masuk → peta KP' },
    desc: {
      zh: '文本、图片、PDF 统一处理；先确认资料是否足够，再确定考点优先级。',
      en: 'Text, images, and PDFs are handled together. Check coverage, then rank the key points.',
      ms: 'Teks, imej dan PDF diproses sekali gus. Semak liputan, kemudian susun keutamaan topik.',
    },
  },
  {
    title: { zh: '诊断结果 → 补练任务', en: 'Quiz result → drill', ms: 'Keputusan kuiz → latih' },
    desc: {
      zh: '逐题得分、错因与薄弱 KP 共同决定下一步 15 分钟学习。',
      en: 'Scores, miss reasons, and weak KPs decide the next 15 minutes.',
      ms: 'Markah, sebab silap dan KP lemah tentukan 15 minit seterusnya.',
    },
  },
  {
    title: { zh: '反超纲硬约束', en: 'No off-syllabus output', ms: 'Tiada luar sukatan' },
    desc: {
      zh: '提示词与校验贯穿全链路，输出紧扣本人课程资料。',
      en: 'Prompts and checks run the whole way, so output stays on your own materials.',
      ms: 'Arahan dan semakan sepanjang laluan, output kekal pada bahan sendiri.',
    },
  },
]

export const INNOVATIONS: { title: LStr; desc: LStr }[] = [
  {
    title: { zh: '全链路闭环', en: 'One closed loop', ms: 'Satu kitaran' },
    desc: {
      zh: `${loopChain('zh')}，共用同一套 KP 编号，薄弱点可逐题追溯回资料原文。`,
      en: `${loopChain('en')}. One KP numbering, so each miss traces back to the source.`,
      ms: `${loopChain('ms')}. Satu nombor KP, setiap kesilapan boleh dijejak ke sumber.`,
    },
  },
  {
    title: { zh: '分层自适应', en: 'Time-based scope', ms: 'Skop ikut masa' },
    desc: {
      zh: '按剩余天数分配精力：≤1 天只讲必考，2–3 天兼顾常考，≥4 天保留完整框架；必考 / 常考 / 了解三级分级。',
      en: 'Days left set the scope: ≤1 day must-know only, 2–3 days add common topics, ≥4 days keep the full frame.',
      ms: 'Baki hari tentukan skop: ≤1 hari hanya wajib, 2–3 hari tambah biasa, ≥4 hari kekalkan rangka penuh.',
    },
  },
  {
    title: { zh: '长期记忆续接', en: 'Memory that resumes', ms: 'Ingatan bersambung' },
    desc: {
      zh: '每轮把课程、目标分数与薄弱 KP 写进档案，下次进入同一课程自动读取，不重复已掌握内容。',
      en: 'Each round stores the course, target score, and weak KPs. The next visit to the same course reads that file.',
      ms: 'Setiap pusingan simpan kursus, sasaran markah dan KP lemah. Lawatan seterusnya baca fail yang sama.',
    },
  },
  {
    title: { zh: '多语言路由', en: 'Three-language route', ms: 'Laluan tiga bahasa' },
    desc: {
      zh: '中 / 英 / 马来语共用同一套工作流、节点结构与判分逻辑，只调整提示词表述即可迁移。',
      en: 'Chinese, English, and Malay share one workflow and scoring logic. Only the prompt wording changes.',
      ms: 'Cina, Inggeris dan Melayu kongsi satu aliran dan logik pemarkahan. Hanya ayat arahan berubah.',
    },
  },
  {
    title: { zh: '非结构化输入链路', en: 'Messy input, still in bounds', ms: 'Input longgar, tetap dalam skop' },
    desc: {
      zh: '图片、PDF、笔记截图统一进链路；资料不足时主动告知缺口，锁定「必考 + 常考」核心，不编造知识点。',
      en: 'Photos, PDFs, and note screenshots enter one path. If material is thin, it says so and stays on must-know plus common topics.',
      ms: 'Foto, PDF dan tangkap layar nota masuk satu laluan. Jika bahan kurang, ia beritahu dan kekal pada topik wajib serta biasa.',
    },
  },
  {
    title: { zh: '思维导图标准交付', en: 'A KP map you can revise from', ms: 'Peta KP untuk ulang kaji' },
    desc: {
      zh: '按 KP 树生成可视化导图，与限时精讲双分支并行产出，结果可直接用于复习与讲解。',
      en: 'A visual KP map is produced beside the timed lecture, ready for review.',
      ms: 'Peta KP visual dihasilkan selari dengan kuliah, sedia untuk ulang kaji.',
    },
  },
]

export const TEAM = {
  cities: [
    {
      city: { zh: '多伦多', en: 'Toronto', ms: 'Toronto' },
      org: { zh: '多伦多大学', en: 'University of Toronto', ms: 'Universiti Toronto' },
      note: { zh: '加拿大', en: 'Canada', ms: 'Kanada' },
    },
    {
      city: { zh: '南通', en: 'Nantong', ms: 'Nantong' },
      org: { zh: '南通理工学院', en: 'Nantong Institute of Technology', ms: 'Institut Teknologi Nantong' },
      note: { zh: '中国', en: 'China', ms: 'China' },
    },
    {
      city: { zh: '吉隆坡', en: 'Kuala Lumpur', ms: 'Kuala Lumpur' },
      org: { zh: '英迪国际大学', en: 'INTI International University', ms: 'INTI International University' },
      note: { zh: '马来西亚', en: 'Malaysia', ms: 'Malaysia' },
    },
  ],
  mentor: {
    name: '方舟',
    role: { zh: '指导老师', en: 'Advisor', ms: 'Penasihat' },
    org: { zh: '南通理工学院 · 讲师', en: 'Nantong Institute of Technology', ms: 'Institut Teknologi Nantong' },
  },
  members: [
    {
      name: '唐靖濠',
      org: { zh: '多伦多大学', en: 'University of Toronto', ms: 'Universiti Toronto' },
      major: { zh: '经济统计', en: 'Economics & Statistics', ms: 'Ekonomi & Statistik' },
      role: { zh: '队长 / 项目统筹 / 中英文场景测试', en: 'Lead / coordination / ZH–EN testing', ms: 'Ketua / penyelaras / ujian ZH–EN' },
    },
    {
      name: '刘怡静',
      org: { zh: '南通理工学院', en: 'Nantong Institute of Technology', ms: 'Institut Teknologi Nantong' },
      major: { zh: '数据科学与大数据技术', en: 'Data Science', ms: 'Sains Data' },
      role: { zh: '工作流制作 / 进度统筹 / 演示配音', en: 'Workflow / schedule / demo voice', ms: 'Aliran kerja / jadual / suara demo' },
    },
    {
      name: '陶文慧',
      org: { zh: '南通理工学院', en: 'Nantong Institute of Technology', ms: 'Institut Teknologi Nantong' },
      major: { zh: '数字媒体技术', en: 'Digital Media', ms: 'Media Digital' },
      role: { zh: '方案策划 / 作品信息完善 / 海报制作', en: 'Planning / copy / poster', ms: 'Perancangan / teks / poster' },
    },
    {
      name: '聂铭',
      org: { zh: '南通理工学院', en: 'Nantong Institute of Technology', ms: 'Institut Teknologi Nantong' },
      major: { zh: '标准化工程', en: 'Standardization', ms: 'Kejuruteraan Standard' },
      role: { zh: '子流程制作 / 演示材料制作', en: 'Subflows / demo materials', ms: 'Subaliran / bahan demo' },
    },
    {
      name: '沈亦菲',
      org: { zh: '南通理工学院', en: 'Nantong Institute of Technology', ms: 'Institut Teknologi Nantong' },
      major: { zh: '人工智能', en: 'Artificial Intelligence', ms: 'Kecerdasan Buatan' },
      role: { zh: '插件编写 / 应用方案统筹', en: 'Plugins / solution plan', ms: 'Pemalam / pelan aplikasi' },
    },
    {
      name: '杨洋',
      org: { zh: '英迪国际大学', en: 'INTI International University', ms: 'INTI International University' },
      major: { zh: '信息技术', en: 'Information Technology', ms: 'Teknologi Maklumat' },
      role: { zh: '子流程制作 / 马来语场景测试', en: 'Subflows / Malay testing', ms: 'Subaliran / ujian Melayu' },
    },
  ],
  strengths: [
    {
      zh: '三地教育体系一手经验：中文、英文与马来语教材同时踩过',
      en: 'First-hand curricula in Chinese, English, and Malay.',
      ms: 'Pengalaman terus kurikulum Cina, Inggeris dan Melayu.',
    },
    {
      zh: '团队即目标用户：6 名在校本科生，需求判断不偏离',
      en: 'The team is the user: six undergraduates, so the need stays real.',
      ms: 'Pasukan ialah pengguna: enam mahasiswa, keperluan kekal nyata.',
    },
    {
      zh: '能力结构覆盖完整链条：工作流搭建 + 方案策划 + 演示设计',
      en: 'The roster covers the chain: workflow, planning, and demo design.',
      ms: 'Pasukan meliputi rantaian: aliran kerja, perancangan dan reka demo.',
    },
    {
      zh: '跨时区异步协作常态化：最大时差 12 小时以上',
      en: 'Async across time zones, with a gap of more than 12 hours.',
      ms: 'Kerja rentas zon waktu, jurang lebih 12 jam.',
    },
  ] as LStr[],
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
  /** 语种本名，标签宽度保持稳定 */
  label: string
  title: LStr
  desc: LStr
  /** 实跑场景（答辩稿 V6 第 12 / 13 页） */
  scene: LStr
  /** 可选完整视频；空 = 仅截图 */
  src: string
  /** 主海报截图 */
  poster: string
  /** 同语种多帧实机截图 */
  shots: string[]
  hint: LStr
}

export const DEMO_VIDEOS: DemoVideo[] = [
  {
    id: 'zh',
    label: '中文',
    title: { zh: '中文实机演示', en: 'Chinese live demo', ms: 'Demo langsung Cina' },
    desc: {
      zh: `上传资料起跑，${LOOP_CHAIN}，完整跑通一轮。`,
      en: 'Upload materials and run one full Chinese pass.',
      ms: 'Muat naik bahan dan jalankan satu pusingan Cina.',
    },
    scene: {
      zh: '大数据基础与架构（资料充足）｜ 媒体伦理 · 目标 80 分 · 距考 3 天（资料不足）',
      en: 'Big Data (enough notes) · Media Ethics, target 80, 3 days left (thin notes)',
      ms: 'Big Data (bahan cukup) · Etika Media, sasaran 80, 3 hari lagi (bahan kurang)',
    },
    src: asset('media/demo-zh.mp4'),
    poster: asset('demo/zh.jpg'),
    shots: [asset('demo/zh-1.jpg'), asset('demo/zh-2.jpg'), asset('demo/zh-3.jpg')],
    hint: { zh: '完整实机录屏 · 中文场景，下方仍可对照抽帧', en: 'Full live recording · Chinese. Frames below.', ms: 'Rakaman penuh · Cina. Bingkai di bawah.' },
  },
  {
    id: 'en',
    label: 'English',
    title: { zh: '英文实机演示', en: 'English live demo', ms: 'Demo langsung Inggeris' },
    desc: {
      zh: '同一套工作流，输入输出换成英文。',
      en: 'Same workflow, English in and out.',
      ms: 'Aliran yang sama, input dan output Inggeris.',
    },
    scene: {
      zh: '创业学导论 Chapter 1 · 中英双语总结',
      en: 'Intro to Entrepreneurship, Chapter 1 · bilingual summary',
      ms: 'Pengenalan Keusahawanan, Bab 1 · ringkasan dwibahasa',
    },
    src: asset('media/demo-en.mp4'),
    poster: asset('demo/en.jpg'),
    shots: [asset('demo/en-1.jpg'), asset('demo/en-2.jpg'), asset('demo/en-3.jpg')],
    hint: { zh: '完整实机录屏 · 英文场景，下方仍可对照抽帧', en: 'Full live recording · English. Frames below.', ms: 'Rakaman penuh · Inggeris. Bingkai di bawah.' },
  },
  {
    id: 'ms',
    label: 'Bahasa Melayu',
    title: { zh: '马来语实机演示', en: 'Malay live demo', ms: 'Demo langsung Melayu' },
    desc: {
      zh: '马来语档案与诊断题样例，和中英共用工作流。',
      en: 'Malay profile and quiz samples, on the same workflow.',
      ms: 'Sampel profil dan kuiz Melayu, aliran yang sama.',
    },
    scene: {
      zh: 'Sejarah Alam Melayu · 马来语完整闭环（档案 / 导图 / 诊断 / 复习策略）',
      en: 'Sejarah Alam Melayu · full Malay loop (profile / map / quiz / plan)',
      ms: 'Sejarah Alam Melayu · kitaran Melayu penuh (profil / peta / kuiz / pelan)',
    },
    src: '',
    poster: asset('demo/ms.jpg'),
    shots: [asset('demo/ms-1.jpg'), asset('demo/ms-2.jpg'), asset('demo/ms-3.jpg')],
    hint: { zh: '实机录屏抽帧 · 马来语场景', en: 'Live frames · Malay', ms: 'Bingkai langsung · Melayu' },
  },
]

/**
 * 讲解视频：位置已预留。
 * 把 mp4 放进 public/media/ 并把路径填到 src，页面自动从「预留位」切换为就地播放。
 */
export const WALKTHROUGH = {
  title: {
    zh: '讲解视频 · 一镜到底走一遍闭环',
    en: 'Walkthrough · one pass through the loop',
    ms: 'Video jelajah · satu pusingan kitaran',
  },
  desc: {
    zh: `从痛点定位到实机取证，一段片子讲完${LOOP_CN}环节闭环、技术架构与差异化。`,
    en: 'From the pain to the live evidence: the loop, the architecture, and what is different.',
    ms: 'Dari masalah ke bukti langsung: kitaran, seni bina, dan perbezaannya.',
  },
  /** 留空 = 显示预留位；填入相对路径（如 'media/walkthrough-zh.mp4'）即自动就地播放 */
  src: '',
  /** 封面底图（接入后作为视频 poster） */
  poster: asset('demo/zh.jpg'),
  duration: { zh: '约 3 分钟', en: 'About 3 min', ms: 'Kira-kira 3 min' },
  hold: {
    zh: '讲解片制作中，接入后此处直接播放',
    en: 'The film is in production. It will play here once it is in.',
    ms: 'Video masih dibuat. Ia akan dimainkan di sini selepas siap.',
  },
  holdNote: {
    zh: '下方章节大纲已按最终结构排好，可先按大纲对照实机截图查看。',
    en: 'The chapter list below is final. Match it against the live frames for now.',
    ms: 'Senarai bab di bawah sudah muktamad. Buat masa ini, padankan dengan bingkai langsung.',
  },
  chapters: [
    {
      n: '01',
      t: { zh: '痛点与定位', en: 'The gap', ms: 'Jurang' },
      desc: {
        zh: '考前一周缺的不是资料，而是复习决策与反馈。',
        en: 'The week before an exam, the missing piece is a decision and feedback, not more notes.',
        ms: 'Seminggu sebelum peperiksaan, yang kurang ialah keputusan dan maklum balas, bukan lagi nota.',
      },
    },
    {
      n: '02',
      t: { zh: `${LOOP_CN}环节闭环`, en: 'Six-stage loop', ms: 'Kitaran enam peringkat' },
      desc: { zh: `${LOOP_CHAIN}。`, en: `${loopChain('en')}.`, ms: `${loopChain('ms')}.` },
    },
    {
      n: '03',
      t: { zh: '实机取证', en: 'Live evidence', ms: 'Bukti langsung' },
      desc: {
        zh: '资料充足 / 资料不足两种场景现场跑一遍，记录真实输出。',
        en: 'Two live runs: enough material, and not enough. The output is the real one.',
        ms: 'Dua larian langsung: bahan cukup, dan bahan kurang. Output ialah yang sebenar.',
      },
    },
    {
      n: '04',
      t: { zh: '技术架构', en: 'Architecture', ms: 'Seni bina' },
      desc: {
        zh: '29 节点、29 条连接边：6 个模型节点 + 8 个代码节点 + 长期记忆。',
        en: '29 nodes and 29 links: 6 model nodes, 8 code nodes, and long-term memory.',
        ms: '29 nod dan 29 pautan: 6 nod model, 8 nod kod, dan ingatan jangka panjang.',
      },
    },
    {
      n: '05',
      t: { zh: '差异化创新', en: 'What is different', ms: 'Apa bezanya' },
      desc: {
        zh: '闭环 / 自适应 / 多语言 / 长期记忆四项设计如何对应真实痛点。',
        en: 'How the loop, the time scope, three languages, and memory map onto the real gap.',
        ms: 'Bagaimana kitaran, skop masa, tiga bahasa dan ingatan memetakan jurang sebenar.',
      },
    },
    {
      n: '06',
      t: { zh: '团队与规划', en: 'Team and what is next', ms: 'Pasukan dan seterusnya' },
      desc: {
        zh: '三地联合团队，以及后续迭代与服务分层计划。',
        en: 'A three-city team, and the next iteration of the service layers.',
        ms: 'Pasukan tiga bandar, dan lapisan perkhidmatan seterusnya.',
      },
    },
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
  summary: {
    zh: '当前验证重点在「本人资料驱动的学习闭环」；服务分层为下一步推进，不做空头营收承诺。',
    en: 'What is proven now is a study loop driven by your own materials. Paid layers come later. No revenue claims.',
    ms: 'Yang terbukti kini ialah kitaran belajar pada bahan sendiri. Lapisan berbayar kemudian. Tiada janji hasil.',
  },
  tiers: [
    {
      name: { zh: '免费层 · 获客', en: 'Free · reach', ms: 'Percuma · jangkauan' },
      who: { zh: '期末突击的在校本科生', en: 'Undergraduates in exam week', ms: 'Mahasiswa minggu peperiksaan' },
      offer: { zh: '每日 1 次完整流程：考点地图 + 5 题诊断 + 15 分钟补练', en: 'One full run a day: KP map, 5-question quiz, 15-minute drill', ms: 'Satu larian sehari: peta KP, kuiz 5 soalan, latih 15 minit' },
      tag: { zh: '免费', en: 'Free', ms: 'Percuma' },
    },
    {
      name: { zh: '个人会员 · 增值', en: 'Member · extra', ms: 'Ahli · tambahan' },
      who: { zh: '留学 / 中外合作 / 高强度冲刺', en: 'Study-abroad and heavy sprint terms', ms: 'Pengajian luar negara dan musim padat' },
      offer: { zh: '不限次数、历史画像与掌握度曲线', en: 'Unlimited runs, history, and a mastery curve', ms: 'Tanpa had, sejarah, dan lengkung penguasaan' },
      tag: { zh: '按月 / 按学期 · 考试月推出', en: 'Monthly or term · exam month', ms: 'Bulanan atau semester · bulan exam' },
    },
    {
      name: { zh: '院校层 · 服务', en: 'Campus · service', ms: 'Kampus · khidmat' },
      who: { zh: '院校 / 教务合作', en: 'Schools and academic offices', ms: 'Institusi dan pejabat akademik' },
      offer: { zh: '数据看板 + 教师赋能（规划中）', en: 'A dashboard and teacher tools (planned)', ms: 'Papan data dan alat guru (dirancang)' },
      tag: { zh: '按校年费', en: 'Annual, per school', ms: 'Tahunan, setiap sekolah' },
    },
  ],
  pyramid: [
    {
      tier: { zh: '塔尖 · 学生价值', en: 'Top · student', ms: 'Puncak · pelajar' },
      desc: {
        zh: '45 分钟换「我知道该练什么」：考点地图带证据、5 题诊断定位薄弱 KP、15 分钟补练。',
        en: '45 minutes to know what to practice: a sourced KP map, a 5-question quiz, a 15-minute drill.',
        ms: '45 minit untuk tahu apa perlu dilatih: peta KP bersumber, kuiz 5 soalan, latih 15 minit.',
      },
    },
    {
      tier: { zh: '中层 · 教育价值', en: 'Middle · teaching', ms: 'Tengah · pengajaran' },
      desc: {
        zh: '让教师知道期末答疑讲什么：集体薄弱点、现成复习框架、历届数据反哺教学。',
        en: 'Teachers see what to review: shared weak spots, a ready frame, and data for the next term.',
        ms: 'Guru nampak apa perlu diulang: titik lemah bersama, rangka sedia, data untuk semester depan.',
      },
    },
    {
      tier: { zh: '塔基 · 平台价值', en: 'Base · platform', ms: 'Asas · platform' },
      desc: {
        zh: '形成可迁移的教育智能体模板：工作流编排 + 多模型 + OCR + 长期记忆。',
        en: 'A reusable education-agent template: workflow, models, OCR, and long-term memory.',
        ms: 'Templat ejen pendidikan yang boleh dialih: aliran, model, OCR, dan ingatan jangka panjang.',
      },
    },
  ],
  wedge: {
    zh: '极简输入：本人课程资料 + 剩余天数',
    en: 'The only input: your course materials, and the days left.',
    ms: 'Input sahaja: bahan kursus sendiri, dan baki hari.',
  },
  channels: [
    { zh: '海报扫码进作品站', en: 'Poster QR to this site', ms: 'Kod QR poster ke laman ini' },
    { zh: '星辰 Agent 直达体验', en: '星辰 Agent, direct', ms: '星辰 Agent, terus' },
    { zh: '答辩演示与讲解视频互链', en: 'Defense demo and walkthrough', ms: 'Demo pembentangan dan video' },
  ] as LStr[],
}

export const COMMUNITY = {
  status: 'planned' as const,
  pitch: {
    zh: '同课程研讨：按课程建轻量讨论区，分享考点地图与薄弱点（不替代教师答疑）。',
    en: 'A light room per course, for KP maps and weak spots. It does not replace a teacher.',
    ms: 'Bilik ringkas setiap kursus, untuk peta KP dan titik lemah. Ia tidak ganti guru.',
  },
  nearTerm: [
    { zh: '收集同课程用户意愿（问卷 / 展场登记）', en: 'Ask who wants a room for the same course.', ms: 'Tanya siapa mahu bilik untuk kursus yang sama.' },
    { zh: '试点「考点地图分享」只读卡片', en: 'Pilot read-only KP-map cards.', ms: 'Uji kad peta KP baca sahaja.' },
    { zh: '合规与内容审核方案后再开放发言', en: 'Open replies only after a review plan exists.', ms: 'Buka balasan selepas pelan semakan ada.' },
  ] as LStr[],
  disclaimer: {
    zh: '本站为作品展示，社群功能尚未上线，敬请期待。',
    en: 'This site is the showcase. The community is not live yet.',
    ms: 'Laman ini pameran. Komuniti belum dibuka.',
  },
}

/** 小游戏：正确顺序的环节 id（与 LOOP_STEPS 同源，避免两处口径漂移） */
export const PLAY_ORDER = LOOP_STEPS.map((s) => s.id)

export const PLAY_CARDS = LOOP_STEPS.map((s) => ({ id: s.id, label: s.title }))
