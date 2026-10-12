import { SITE, TEAM } from '../data/site'

export function TeamPage() {
  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">TEAM</div>
        <h1>{SITE.team}</h1>
        <p>
          {SITE.cup} · {SITE.honor} · 跨三地教育体系的本科生团队
        </p>
      </header>

      <div className="city-row">
        {TEAM.cities.map((c) => (
          <div className="city-card" key={c.city}>
            <b>{c.city}</b>
            <span>{c.org}</span>
            <em>{c.note}</em>
          </div>
        ))}
      </div>

      <div className="grid-cards" style={{ marginTop: 16 }}>
        {TEAM.members.map((m) => (
          <article className="card" key={m.name}>
            <div className="eyebrow">{m.org}</div>
            <h3 style={{ marginTop: 8 }}>{m.name}</h3>
            <p>{m.major}</p>
            <div className="scene-tag" style={{ marginTop: 10 }}>
              {m.role}
            </div>
          </article>
        ))}
      </div>

      <div className="band-head" style={{ marginTop: 24 }}>
        <h2>团队核心优势</h2>
      </div>
      <ul className="list">
        {TEAM.strengths.map((s) => (
          <li key={s}>{s}</li>
        ))}
        <li>
          <strong>指导老师</strong>
          <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>
            {TEAM.mentor.name} · {TEAM.mentor.role}（{TEAM.mentor.org}）
          </div>
        </li>
      </ul>
    </>
  )
}
