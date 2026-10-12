import { Link } from 'react-router-dom'
import {
  AGENT_URL,
  FEATURES,
  LOOP_STEPS,
  METRICS,
  SITE,
} from '../data/site'

const homeNav = [
  { to: '/loop', label: '五步闭环' },
  { to: '/features', label: '产品功能' },
  { to: '/tech', label: '技术架构' },
  { to: '/demo', label: '实跑证据' },
  { to: '/innovation', label: '创新点' },
  { to: '/try', label: '立即体验' },
  { to: '/team', label: '团队' },
]

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div>
          <div className="eyebrow">Spark · QIMO AGENT</div>
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
              立即体验智能体
            </Link>
            <Link className="btn btn-ghost" to="/loop">
              先看五步闭环
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="eyebrow">AT A GLANCE</div>
          <h3 style={{ marginTop: 8 }}>为什么是作品站，不是单页？</h3>
          <p style={{ marginTop: 8 }}>
            对齐茶叶国际赛站结构：首页总览 + 子路径专题，方便展场扫码后按兴趣深入，也方便答辩材料互链。
          </p>
          <a className="meta" href={AGENT_URL} target="_blank" rel="noreferrer">
            星辰 Agent 直达 →
          </a>
        </div>
      </section>

      <nav className="section-nav">
        {homeNav.map((item) => (
          <Link key={item.to} to={item.to}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="metrics">
        {METRICS.map((m) => (
          <div className="metric" key={m.l}>
            <div className="n">{m.n}</div>
            <div className="l">{m.l}</div>
          </div>
        ))}
      </div>

      <div className="grid-cards">
        {LOOP_STEPS.slice(0, 3).map((s) => (
          <Link className="card" to="/loop" key={s.n}>
            <div className="eyebrow">STEP {s.n}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="meta">查看完整闭环 →</div>
          </Link>
        ))}
      </div>

      <div className="grid-cards">
        {FEATURES.map((f) => (
          <Link className="card" to="/features" key={f.title}>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            <div className="meta">功能详情 →</div>
          </Link>
        ))}
      </div>
    </>
  )
}
