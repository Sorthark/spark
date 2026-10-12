import { COMMUNITY } from '../data/site'
import { Link } from 'react-router-dom'

export function CommunityPage() {
  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">COMMUNITY · PLANNED</div>
        <h1>同课程研讨（预留）</h1>
        <p>{COMMUNITY.pitch}</p>
      </header>

      <div className="card" style={{ marginBottom: 16 }}>
        <div className="eyebrow">STATUS</div>
        <h3 style={{ marginTop: 8 }}>尚未上线 · 仅作品站预留</h3>
        <p style={{ marginTop: 8 }}>{COMMUNITY.disclaimer}</p>
      </div>

      <ul className="list">
        {COMMUNITY.nearTerm.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="cta-row" style={{ marginTop: 20 }}>
        <Link className="btn btn-primary" to="/try">
          先体验智能体
        </Link>
        <Link className="btn btn-ghost" to="/business">
          看商业分层
        </Link>
      </div>
    </>
  )
}
