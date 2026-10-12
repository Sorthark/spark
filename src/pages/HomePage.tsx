import { Link } from 'react-router-dom'
import {
  AGENT_URL,
  FEATURES,
  LOOP_STEPS,
  METRICS,
  SITE,
} from '../data/site'
import {
  IconBiz,
  IconCpu,
  IconLoop,
  IconPlay,
  IconUsers,
  IconVideo,
  IconZap,
} from '../components/Icons'

const homeNav = [
  { to: '/loop', label: '五步闭环', Icon: IconLoop },
  { to: '/video', label: '视频讲解', Icon: IconVideo },
  { to: '/play', label: '闯关体验', Icon: IconPlay },
  { to: '/features', label: '产品功能', Icon: IconCpu },
  { to: '/business', label: '商业模式', Icon: IconBiz },
  { to: '/community', label: '社群预留', Icon: IconUsers },
  { to: '/try', label: '立即体验', Icon: IconZap },
]

/** GitHub-like contribution intensity strip (decorative) */
const ACTIVITY = [0, 1, 0, 2, 3, 1, 4, 2, 3, 4, 1, 2, 0, 3, 4, 2, 1, 4, 3, 2, 4, 1, 0, 2, 3, 4, 2, 1]

export function HomePage() {
  return (
    <>
      <section className="hero hero-tech">
        <div>
          <div className="eyebrow live">
            <span className="pulse-dot" /> Spark · QIMO AGENT · LIVE
          </div>
          <h1>
            {SITE.name}
            <br />
            <em>{SITE.tagline}</em>
          </h1>
          <p>
            基于本人课程资料的期末冲刺智能体。海报扫码进入本站即可了解闭环、技术证据，并一键跳转星辰
            Agent 体验。
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" to="/try">
              <IconZap size={16} /> 立即体验智能体
            </Link>
            <Link className="btn btn-ghost" to="/play">
              <IconPlay size={16} /> 动态闯关
            </Link>
            <Link className="btn btn-ghost" to="/video">
              <IconVideo size={16} /> 视频讲解
            </Link>
          </div>
        </div>
        <div className="card glass-card">
          <div className="eyebrow">SIGNAL / ACTIVITY</div>
          <div className="activity" aria-hidden>
            {ACTIVITY.map((lv, i) => (
              <i key={i} data-lv={lv} />
            ))}
          </div>
          <h3 style={{ marginTop: 14 }}>扫码后三分钟路径</h3>
          <p style={{ marginTop: 8 }}>
            动态闯关锁定痛点 → 点亮五步电路 → 通关进 Agent。商业与社群页服务答辩追问。
          </p>
          <Link className="meta" to="/play">
            进入指挥台 →
          </Link>
          <br />
          <a className="meta" href={AGENT_URL} target="_blank" rel="noreferrer">
            星辰 Agent 直达 →
          </a>
        </div>
      </section>

      <nav className="section-nav icon-nav">
        {homeNav.map(({ to, label, Icon }) => (
          <Link key={to} to={to}>
            <Icon size={15} />
            {label}
          </Link>
        ))}
      </nav>

      <div className="metrics">
        {METRICS.map((m) => (
          <div className="metric glow-card" key={m.l}>
            <div className="n">{m.n}</div>
            <div className="l">{m.l}</div>
          </div>
        ))}
      </div>

      <div className="grid-cards">
        {LOOP_STEPS.slice(0, 3).map((s) => (
          <Link className="card hover-lift" to="/loop" key={s.n}>
            <div className="eyebrow">STEP {s.n}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="meta">查看完整闭环 →</div>
          </Link>
        ))}
      </div>

      <div className="grid-cards">
        {FEATURES.map((f) => (
          <Link className="card hover-lift" to="/features" key={f.title}>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            <div className="meta">功能详情 →</div>
          </Link>
        ))}
      </div>
    </>
  )
}
