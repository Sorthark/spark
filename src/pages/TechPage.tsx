import { Link } from 'react-router-dom'
import { METRICS, SCOPE, tx } from '../data/site'
import { IconVideo } from '../components/Icons'
import { useLocale } from '../locale'
import { UI } from '../ui'

export function TechPage() {
  const { lang } = useLocale()
  const copy = UI.tech

  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">TECH</div>
        <h1>{tx(lang, copy.h1)}</h1>
        <p>{tx(lang, copy.lead)}</p>
      </header>

      <div className="metrics">
        {METRICS.map((m) => (
          <div className="metric" key={m.l.zh}>
            <div className="n">{m.n}</div>
            <div className="l">{tx(lang, m.l)}</div>
          </div>
        ))}
      </div>

      <ul className="list">
        {copy.layers.map((layer) => (
          <li key={layer.title.zh}>
            <strong>{tx(lang, layer.title)}</strong>
            <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>{tx(lang, layer.body)}</div>
          </li>
        ))}
      </ul>

      <div className="scope-row">
        {SCOPE.map((s) => (
          <div className="scope-chip" key={s.k.zh}>
            <span>{tx(lang, s.k)}</span>
            <b>{tx(lang, s.v)}</b>
          </div>
        ))}
      </div>

      <div className="cta-row" style={{ marginTop: 20 }}>
        <Link className="btn btn-primary" to="/video?tab=walk">
          <IconVideo size={16} /> {tx(lang, copy.walk)}
        </Link>
        <Link className="btn btn-ghost" to="/demo">
          {tx(lang, copy.shots)}
        </Link>
      </div>
    </>
  )
}
