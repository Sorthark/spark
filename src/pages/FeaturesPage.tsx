import { FEATURES } from '../data/site'

export function FeaturesPage() {
  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">FEATURES</div>
        <h1>产品功能</h1>
        <p>从多源资料到可执行补练，服务考前 1–7 天冲刺窗口。</p>
      </header>
      <ul className="list">
        {FEATURES.map((f) => (
          <li key={f.title}>
            <strong>{f.title}</strong>
            <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>{f.desc}</div>
          </li>
        ))}
      </ul>
    </>
  )
}
