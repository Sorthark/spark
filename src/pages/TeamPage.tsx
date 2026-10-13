import { SITE, TEAM, tx } from '../data/site'
import { useLocale } from '../locale'
import { UI } from '../ui'

export function TeamPage() {
  const { lang } = useLocale()
  const copy = UI.team

  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">TEAM</div>
        <h1>{SITE.team}</h1>
        <p>
          {SITE.cup} · {tx(lang, UI.honor)} · {tx(lang, copy.lead)}
        </p>
      </header>

      <div className="city-row">
        {TEAM.cities.map((c) => (
          <div className="city-card" key={c.city.zh}>
            <b>{tx(lang, c.city)}</b>
            <span>{tx(lang, c.org)}</span>
            <em>{tx(lang, c.note)}</em>
          </div>
        ))}
      </div>

      <div className="grid-cards" style={{ marginTop: 16 }}>
        {TEAM.members.map((m) => (
          <article className="card" key={m.name}>
            <div className="eyebrow">{tx(lang, m.org)}</div>
            <h3 style={{ marginTop: 8 }}>{m.name}</h3>
            <p>{tx(lang, m.major)}</p>
            <div className="scene-tag" style={{ marginTop: 10 }}>
              {tx(lang, m.role)}
            </div>
          </article>
        ))}
      </div>

      <div className="band-head" style={{ marginTop: 24 }}>
        <h2>{tx(lang, copy.strengths)}</h2>
      </div>
      <ul className="list">
        {TEAM.strengths.map((s) => (
          <li key={s.zh}>{tx(lang, s)}</li>
        ))}
        <li>
          <strong>{tx(lang, copy.mentor)}</strong>
          <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>
            {TEAM.mentor.name} · {tx(lang, TEAM.mentor.role)}（{tx(lang, TEAM.mentor.org)}）
          </div>
        </li>
      </ul>
    </>
  )
}
