import { AGENT_URL, SITE, tx } from '../data/site'
import { useLocale } from '../locale'
import { UI } from '../ui'

export function TryPage() {
  const { lang } = useLocale()
  const copy = UI.try

  return (
    <section className="try-box">
      <div className="eyebrow" style={{ color: '#9fd3ff' }}>
        TRY · SPARK AGENT
      </div>
      <h1>
        {tx(lang, copy.h1)} {SITE.name}
      </h1>
      <p>{tx(lang, copy.lead)}</p>
      <a className="btn btn-primary" href={AGENT_URL} target="_blank" rel="noreferrer">
        {tx(lang, copy.open)}
      </a>
    </section>
  )
}
