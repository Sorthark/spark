import { BUSINESS, tx } from '../data/site'
import { useLocale } from '../locale'
import { UI } from '../ui'

export function BusinessPage() {
  const { lang } = useLocale()
  const copy = UI.business

  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">BUSINESS</div>
        <h1>{tx(lang, copy.h1)}</h1>
        <p>{tx(lang, BUSINESS.summary)}</p>
      </header>

      <div className="grid-cards">
        {BUSINESS.tiers.map((t) => (
          <article className="card" key={t.name.zh}>
            <div className="eyebrow">{tx(lang, t.name)}</div>
            <h3 style={{ marginTop: 8 }}>{tx(lang, t.who)}</h3>
            <p>{tx(lang, t.offer)}</p>
            <div className="scene-tag" style={{ marginTop: 10 }}>
              {tx(lang, t.tag)}
            </div>
          </article>
        ))}
      </div>

      <div className="band-head" style={{ marginTop: 24 }}>
        <h2>{tx(lang, copy.pyramidTitle)}</h2>
        <p>{tx(lang, copy.pyramidLead)}</p>
      </div>
      <ol className="pyramid">
        {BUSINESS.pyramid.map((p) => (
          <li key={p.tier.zh}>
            <strong>{tx(lang, p.tier)}</strong>
            <span>{tx(lang, p.desc)}</span>
          </li>
        ))}
      </ol>

      <ul className="list" style={{ marginTop: 8 }}>
        <li>
          <strong>{tx(lang, copy.wedge)}</strong>
          <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>{tx(lang, BUSINESS.wedge)}</div>
        </li>
        <li>
          <strong>{tx(lang, copy.channels)}</strong>
          <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>
            {BUSINESS.channels.map((item) => tx(lang, item)).join(' · ')}
          </div>
        </li>
        <li>
          <strong>{tx(lang, copy.honest)}</strong>
          <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>{tx(lang, copy.honestBody)}</div>
        </li>
      </ul>
    </>
  )
}
