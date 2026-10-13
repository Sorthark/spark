import { Link } from 'react-router-dom'
import { COMMUNITY, tx } from '../data/site'
import { useLocale } from '../locale'
import { UI } from '../ui'

export function CommunityPage() {
  const { lang } = useLocale()
  const copy = UI.community

  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">COMMUNITY · PLANNED</div>
        <h1>{tx(lang, copy.h1)}</h1>
        <p>{tx(lang, COMMUNITY.pitch)}</p>
      </header>

      <div className="card" style={{ marginBottom: 16 }}>
        <div className="eyebrow">STATUS</div>
        <h3 style={{ marginTop: 8 }}>{tx(lang, copy.status)}</h3>
        <p style={{ marginTop: 8 }}>{tx(lang, COMMUNITY.disclaimer)}</p>
      </div>

      <ul className="list">
        {COMMUNITY.nearTerm.map((item) => (
          <li key={item.zh}>{tx(lang, item)}</li>
        ))}
      </ul>

      <div className="cta-row" style={{ marginTop: 20 }}>
        <Link className="btn btn-primary" to="/try">
          {tx(lang, copy.try)}
        </Link>
        <Link className="btn btn-ghost" to="/business">
          {tx(lang, copy.business)}
        </Link>
      </div>
    </>
  )
}
