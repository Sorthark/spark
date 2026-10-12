import { SITE, TEAM } from '../data/site'

export function TeamPage() {
  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">TEAM</div>
        <h1>{SITE.team}</h1>
        <p>{SITE.cup} · 跨校联合团队</p>
      </header>
      <ul className="list">
        <li>
          <strong>指导老师</strong>
          <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>{TEAM.mentor}</div>
        </li>
        <li>
          <strong>队长</strong>
          <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>{TEAM.captain}</div>
        </li>
        <li>
          <strong>成员</strong>
          <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>{TEAM.members}</div>
        </li>
      </ul>
    </>
  )
}
