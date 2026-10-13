import { FEATURES, tx } from '../data/site'
import { useLocale } from '../locale'
import { UI } from '../ui'

export function FeaturesPage() {
  const { lang } = useLocale()
  const copy = UI.features

  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">FEATURES</div>
        <h1>{tx(lang, copy.h1)}</h1>
        <p>{tx(lang, copy.lead)}</p>
      </header>
      <ul className="list">
        {FEATURES.map((f) => (
          <li key={f.title.zh}>
            <strong>{tx(lang, f.title)}</strong>
            <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>{tx(lang, f.desc)}</div>
          </li>
        ))}
      </ul>
    </>
  )
}
