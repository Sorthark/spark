import { BUSINESS } from '../data/site'

export function BusinessPage() {
  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">BUSINESS</div>
        <h1>商业与营销</h1>
        <p>{BUSINESS.summary}</p>
      </header>

      <div className="grid-cards">
        {BUSINESS.tiers.map((t) => (
          <article className="card" key={t.name}>
            <div className="eyebrow">{t.name}</div>
            <h3 style={{ marginTop: 8 }}>{t.who}</h3>
            <p>{t.offer}</p>
            <div className="scene-tag" style={{ marginTop: 10 }}>
              {t.tag}
            </div>
          </article>
        ))}
      </div>

      <div className="band-head" style={{ marginTop: 24 }}>
        <h2>三层价值</h2>
        <p>学生价值、教育价值与平台价值——同一个闭环在不同层级的落点。</p>
      </div>
      <ol className="pyramid">
        {BUSINESS.pyramid.map((p) => (
          <li key={p.tier}>
            <strong>{p.tier}</strong>
            <span>{p.desc}</span>
          </li>
        ))}
      </ol>

      <ul className="list" style={{ marginTop: 8 }}>
        <li>
          <strong>切入楔子</strong>
          <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>{BUSINESS.wedge}</div>
        </li>
        <li>
          <strong>获客触点</strong>
          <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>
            {BUSINESS.channels.join(' · ')}
          </div>
        </li>
        <li>
          <strong>诚实边界</strong>
          <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>
            不编造营收与用户规模；答辩与海报统一强调可验证的学习闭环。
          </div>
        </li>
      </ul>
    </>
  )
}
