import { INNOVATIONS, tx } from '../data/site'
import { useLocale } from '../locale'
import { UI } from '../ui'

export function InnovationPage() {
  const { lang } = useLocale()
  const copy = UI.innovation

  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">INNOVATION</div>
        <h1>{tx(lang, copy.h1)}</h1>
        <p>{tx(lang, copy.lead)}</p>
      </header>
      <div className="grid-cards">
        {INNOVATIONS.map((it, i) => (
          <article className="card" key={it.title.zh}>
            <div className="eyebrow">0{i + 1}</div>
            <h3 style={{ marginTop: 8 }}>{tx(lang, it.title)}</h3>
            <p>{tx(lang, it.desc)}</p>
          </article>
        ))}
      </div>
    </>
  )
}
