import type { LStr } from './data/site'

export function fill(template: string, vars: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(vars[key] ?? ''))
}

/** 页面外壳文案。专名（作品名、队名、人名、星火杯、星辰 Agent、KP）保持原文。 */
export const UI = {
  honor: { zh: '全国 20 强', en: 'Top 20', ms: 'Top 20' },
  nav: {
    home: { zh: '首页', en: 'Home', ms: 'Utama' },
    loop: { zh: '闭环', en: 'Loop', ms: 'Kitar' },
    video: { zh: '演示', en: 'Demo', ms: 'Demo' },
    play: { zh: '闯关', en: 'Play', ms: 'Main' },
    business: { zh: '商业', en: 'Business', ms: 'Bisnes' },
    try: { zh: '体验', en: 'Try', ms: 'Cuba' },
    team: { zh: '团队', en: 'Team', ms: 'Pasukan' },
  },
  footer: {
    replay: { zh: '重播开场', en: 'Replay intro', ms: 'Ulang intro' },
    community: { zh: '社群（规划中）', en: 'Community', ms: 'Komuniti' },
    try: { zh: '扫码同款入口 · 立即体验 →', en: 'Same entry as the QR · try it →', ms: 'Pintu masuk yang sama · cuba →' },
  },
  home: {
    index: { zh: '作品展示站', en: 'Showcase', ms: 'Pameran' },
    lede: {
      zh: { before: '把突击做成', em: '闭环', after: '——紧扣本人资料，绝不超纲。' },
      en: { before: 'Make cramming a ', em: 'closed loop', after: ' — on your own notes only.' },
      ms: { before: 'Jadikan ulang kaji ', em: 'kitaran', after: ' — ikut nota sendiri sahaja.' },
    },
    byline: {
      zh: '三地联合团队（多伦多 · 南通 · 吉隆坡）',
      en: 'Toronto · Nantong · Kuala Lumpur',
      ms: 'Toronto · Nantong · Kuala Lumpur',
    },
    teamLabel: { zh: '队名', en: 'Team', ms: 'Pasukan' },
    try: { zh: '立即体验智能体', en: 'Try the agent', ms: 'Cuba ejen' },
    demo: { zh: '三语实机演示', en: 'Live demo', ms: 'Demo langsung' },
    walk: { zh: '讲解视频', en: 'Walkthrough', ms: 'Jelajah' },
    window: { zh: '实机运行', en: 'Live', ms: 'Langsung' },
    live: { zh: '实机', en: 'LIVE', ms: 'LIVE' },
    frame: { zh: '第 {n} 帧', en: 'Frame {n}', ms: 'Bingkai {n}' },
    frames: { zh: '演示帧', en: 'Frames', ms: 'Bingkai' },
    evidenceTitle: { zh: '跑起来的证据', en: 'Evidence it runs', ms: 'Bukti ia berjalan' },
    evidenceLead: {
      zh: '数字来自参赛作品的实际工作流配置，可在架构页逐项核对。',
      en: 'These counts come from the real workflow. Check them on the architecture page.',
      ms: 'Angka ini dari aliran kerja sebenar. Semak di halaman seni bina.',
    },
    featureTitle: { zh: '它替你做的三件事', en: 'Three jobs it does', ms: 'Tiga tugas' },
    featureMore: { zh: '功能详情 →', en: 'Details →', ms: 'Butiran →' },
    closeTitle: { zh: '想自己跑一遍？', en: 'Run it yourself?', ms: 'Mahu cuba sendiri?' },
    closeLead: {
      zh: '海报二维码指向本站；从这里可以直达星辰 Agent，也可以先玩一轮动态闯关。',
      en: 'The poster QR lands here. Open 星辰 Agent, or play one round first.',
      ms: 'Kod QR poster sampai ke sini. Buka 星辰 Agent, atau main satu pusingan dulu.',
    },
    openAgent: { zh: '进入星辰 Agent', en: 'Open 星辰 Agent', ms: 'Buka 星辰 Agent' },
    playFirst: { zh: '先玩动态闯关', en: 'Play a round', ms: 'Main dahulu' },
    watchWalk: { zh: '看讲解视频', en: 'Watch the walkthrough', ms: 'Tonton jelajah' },
    quick: {
      features: { zh: '功能', en: 'Features', ms: 'Fungsi' },
      tech: { zh: '架构', en: 'Arch', ms: 'Bina' },
      innovation: { zh: '创新', en: 'Ideas', ms: 'Idea' },
    },
  },
  video: {
    h1: { zh: '演示与讲解', en: 'Demo and walkthrough', ms: 'Demo dan jelajah' },
    lead: {
      zh: '三语实机录屏抽帧，可按语种与镜头切换查看真实输出；完整讲解则按章节大纲呈现。',
      en: 'Live frames in three languages. Switch language and shot. The walkthrough follows the chapter list.',
      ms: 'Bingkai langsung dalam tiga bahasa. Tukar bahasa dan babak. Jelajah ikut senarai bab.',
    },
    shots: { zh: '实机演示', en: 'Live shots', ms: 'Babak langsung' },
    shotsTag: { zh: '三语 · 已上线', en: '3 languages', ms: '3 bahasa' },
    walk: { zh: '讲解视频', en: 'Walkthrough', ms: 'Jelajah' },
    walkReady: { zh: '可播放', en: 'Ready', ms: 'Sedia' },
    walkSoon: { zh: '即将上线', en: 'Soon', ms: 'Nanti' },
    langs: { zh: '演示语种', en: 'Demo language', ms: 'Bahasa demo' },
    shot: { zh: '镜头 {n}', en: 'Shot {n}', ms: 'Babak {n}' },
    openShot: { zh: '新窗口打开截图', en: 'Open frame', ms: 'Buka bingkai' },
    toPlay: { zh: '动态闯关', en: 'Play', ms: 'Main' },
    toWalk: { zh: '切到讲解视频', en: 'Open walkthrough', ms: 'Ke jelajah' },
    chapters: { zh: '{n} 章 · 中文', en: '{n} chapters', ms: '{n} bab' },
    try: { zh: '直接体验智能体', en: 'Try the agent', ms: 'Cuba ejen' },
    toDemo: { zh: '看实机取证截图', en: 'See the frames', ms: 'Lihat bingkai' },
    altShot: { zh: '实机截图', en: 'live frame', ms: 'bingkai langsung' },
  },
  demo: {
    h1: { zh: '实跑证据', en: 'Live evidence', ms: 'Bukti langsung' },
    lead: {
      zh: '三语实机录屏已抽帧上线。点进演示页可切换语种与镜头。完整片子见讲解视频。',
      en: 'Three languages, as frames. Open the demo page to switch language and shot. The full film is the walkthrough.',
      ms: 'Tiga bahasa, sebagai bingkai. Buka halaman demo untuk tukar bahasa dan babak. Filem penuh ialah jelajah.',
    },
    more: { zh: '查看截图 →', en: 'View frames →', ms: 'Lihat bingkai →' },
    chapters: { zh: '共 {n} 章 · 点此进入 →', en: '{n} chapters · open →', ms: '{n} bab · buka →' },
  },
  features: {
    h1: { zh: '产品功能', en: 'Features', ms: 'Fungsi' },
    lead: {
      zh: '从多源资料到可执行补练，服务考前 1–7 天冲刺窗口。',
      en: 'From mixed notes to a drill you can do, for the 1–7 days before an exam.',
      ms: 'Dari nota bercampur ke latih yang boleh dibuat, untuk 1–7 hari sebelum peperiksaan.',
    },
  },
  innovation: {
    h1: { zh: '创新点', en: 'What is different', ms: 'Apa bezanya' },
    lead: {
      zh: '围绕复习决策：资料依据、时间预算、诊断反馈与跨轮次状态。',
      en: 'Built around the review decision: sources, time, a quiz, and state across rounds.',
      ms: 'Dibina sekitar keputusan ulang kaji: sumber, masa, kuiz, dan keadaan antara pusingan.',
    },
  },
  tech: {
    h1: { zh: '技术架构与工作流', en: 'Architecture and workflow', ms: 'Seni bina dan aliran' },
    lead: {
      zh: '星火 4.0 Ultra + 工作流编排 + OCR + 长期记忆 + 文生图；节点职责单一，变量显式传递。',
      en: 'Spark 4.0 Ultra, a workflow, OCR, long-term memory, and image generation. Each node does one job.',
      ms: 'Spark 4.0 Ultra, aliran kerja, OCR, ingatan jangka panjang, dan penjanaan imej. Setiap nod satu tugas.',
    },
    layers: [
      {
        title: { zh: '用户交互层', en: 'Interaction', ms: 'Interaksi' },
        body: {
          zh: '粘贴笔记、上传图片与 PDF、问答节点收集作答；考点地图、精讲与诊断报告流式输出。',
          en: 'Paste notes, upload images and PDFs, answer in the chat. The map, lecture, and quiz stream out.',
          ms: 'Tampal nota, muat naik imej dan PDF, jawab dalam sembang. Peta, kuliah dan kuiz keluar secara aliran.',
        },
      },
      {
        title: { zh: '工作流编排层', en: 'Workflow', ms: 'Aliran kerja' },
        body: {
          zh: '共 29 个节点、29 条连接边：6 个模型节点与 8 个代码节点。串行迭代知识卡保持 KP 顺序，资料诊断后同时驱动精讲与思维导图。',
          en: '29 nodes and 29 links: 6 model nodes and 8 code nodes. Knowledge cards stay in KP order. After the check, the lecture and the map run together.',
          ms: '29 nod dan 29 pautan: 6 nod model dan 8 nod kod. Kad pengetahuan kekal mengikut turutan KP. Selepas semakan, kuliah dan peta berjalan serentak.',
        },
      },
      {
        title: { zh: '长期记忆机制', en: 'Long-term memory', ms: 'Ingatan jangka panjang' },
        body: {
          zh: '工作流关闭多轮历史，只靠变量存储 + 长期记忆传上下文；记忆库按最多 5 条检索，下次进入同一课程自动读取档案。',
          en: 'Chat history is off. Context moves by variables and long-term memory, up to 5 records, read back on the same course.',
          ms: 'Sejarah sembang ditutup. Konteks bergerak melalui pemboleh ubah dan ingatan, paling banyak 5 rekod, dibaca semula untuk kursus yang sama.',
        },
      },
      {
        title: { zh: '确定性交给代码', en: 'Code checks the score', ms: 'Kod semak markah' },
        body: {
          zh: '模型负责理解与生成，代码负责格式清洗与分数核算。判分后由代码节点重算总分与等级，消除模型算术误差。',
          en: 'The model understands and writes. Code cleans the format and recomputes the total, so arithmetic is not left to the model.',
          ms: 'Model memahami dan menulis. Kod membersihkan format dan mengira semula jumlah, jadi kiraan bukan pada model.',
        },
      },
    ] as { title: LStr; body: LStr }[],
    walk: { zh: '看讲解视频', en: 'Walkthrough', ms: 'Jelajah' },
    shots: { zh: '实机取证截图', en: 'Live frames', ms: 'Bingkai langsung' },
  },
  business: {
    h1: { zh: '商业与营销', en: 'Business', ms: 'Perniagaan' },
    pyramidTitle: { zh: '三层价值', en: 'Three layers of value', ms: 'Tiga lapisan nilai' },
    pyramidLead: {
      zh: '学生价值、教育价值与平台价值——同一个闭环在不同层级的落点。',
      en: 'Student, teaching, and platform — the same loop, three landings.',
      ms: 'Pelajar, pengajaran, dan platform — kitaran yang sama, tiga tempat mendarat.',
    },
    wedge: { zh: '切入楔子', en: 'The wedge', ms: 'Baji' },
    channels: { zh: '获客触点', en: 'How people arrive', ms: 'Bagaimana orang sampai' },
    honest: { zh: '诚实边界', en: 'The honest line', ms: 'Garis jujur' },
    honestBody: {
      zh: '不编造营收与用户规模；答辩与海报统一强调可验证的学习闭环。',
      en: 'No invented revenue or user counts. The defense and the poster stay on the loop you can check.',
      ms: 'Tiada hasil atau bilangan pengguna yang direka. Pembentangan dan poster kekal pada kitaran yang boleh disemak.',
    },
  },
  community: {
    h1: { zh: '同课程研讨（预留）', en: 'Course room (reserved)', ms: 'Bilik kursus (ditempah)' },
    status: { zh: '尚未上线 · 仅作品站预留', en: 'Not live · reserved on this site', ms: 'Belum dibuka · ditempah di laman ini' },
    try: { zh: '先体验智能体', en: 'Try the agent', ms: 'Cuba ejen' },
    business: { zh: '看商业分层', en: 'See the layers', ms: 'Lihat lapisan' },
  },
  team: {
    lead: {
      zh: '跨三地教育体系的本科生团队',
      en: 'Undergraduates across three school systems',
      ms: 'Mahasiswa merentas tiga sistem sekolah',
    },
    strengths: { zh: '团队核心优势', en: 'Why this team', ms: 'Mengapa pasukan ini' },
    mentor: { zh: '指导老师', en: 'Advisor', ms: 'Penasihat' },
  },
  try: {
    h1: { zh: '立即体验', en: 'Try it', ms: 'Cuba' },
    lead: {
      zh: '跳转讯飞星辰 Agent 构建器分享页。建议在微信外浏览器打开以获得完整体验。',
      en: 'Opens the 星辰 Agent share page. Use a browser outside WeChat for the full run.',
      ms: 'Buka halaman kongsi 星辰 Agent. Guna pelayar di luar WeChat untuk larian penuh.',
    },
    open: { zh: '打开星辰 Agent', en: 'Open 星辰 Agent', ms: 'Buka 星辰 Agent' },
  },
  play: {
    h1: { zh: '考前急救指挥台', en: 'Exam-week console', ms: 'Konsol minggu exam' },
    lead: {
      zh: '三阶段动态关卡：系统启动 → 捕获痛点 → 点亮闭环链路。通关解锁星辰 Agent。',
      en: 'Three beats: boot, catch the pains, light the loop. Clearing it opens 星辰 Agent.',
      ms: 'Tiga peringkat: mula, tangkap masalah, nyalakan kitaran. Selesai membuka 星辰 Agent.',
    },
    boot: { zh: '正在装载课程资料通道…', en: 'Opening the materials channel…', ms: 'Membuka saluran bahan…' },
    swarm: { zh: '点掉飘动的痛点（至少 3 个）', en: 'Tap the pains (at least 3)', ms: 'Ketik masalah (sekurang-kurangnya 3)' },
    caught: { zh: '已捕获 {n}/3 · Combo ×{c}', en: 'Caught {n}/3 · Combo ×{c}', ms: 'Ditangkap {n}/3 · Combo ×{c}' },
    link: { zh: '按闭环顺序点亮节点', en: 'Light the nodes in order', ms: 'Nyalakan nod mengikut turutan' },
    next: { zh: '下一目标：{name}', en: 'Next: {name}', ms: 'Seterusnya: {name}' },
    miss: { zh: '链路错误，连击清空。按正确顺序重试。', en: 'Wrong order. Combo reset. Try the sequence again.', ms: 'Turutan salah. Combo kosong. Cuba semula.' },
    win: { zh: '闭环已点亮 · 可以上真机', en: 'Loop lit · ready for the real run', ms: 'Kitaran menyala · sedia untuk larian sebenar' },
    winLead: {
      zh: '痛点已锁定，六环节链路已连通。把本人资料丢进星辰 Agent，跑同一套闭环。',
      en: 'Pains locked, six stages connected. Drop your materials into 星辰 Agent and run the same loop.',
      ms: 'Masalah dikunci, enam peringkat bersambung. Masukkan bahan ke 星辰 Agent dan jalankan kitaran yang sama.',
    },
    again: { zh: '再玩一轮', en: 'Play again', ms: 'Main lagi' },
    about: { zh: '体验页说明', en: 'About the try page', ms: 'Tentang halaman cuba' },
    pains: [
      { id: 'scatter', label: { zh: '资料分散', en: 'Scattered', ms: 'Serak' } },
      { id: 'priority', label: { zh: '重点不明', en: 'No focus', ms: 'Tiada fokus' } },
      { id: 'nodiag', label: { zh: '缺少诊断', en: 'No quiz', ms: 'Tiada kuiz' } },
      { id: 'resume', label: { zh: '无法续接', en: 'No memory', ms: 'Tiada ingatan' } },
      { id: 'lang', label: { zh: '语言障碍', en: 'Language', ms: 'Bahasa' } },
    ],
  },
} as const
