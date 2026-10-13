import { CHROME, LOOP_STEPS, loopChain, stepDesc, stepTitle } from '../data/site'
import { useLocale } from '../locale'

export function LoopPage() {
  const { lang } = useLocale()
  const copy = CHROME[lang]
  const chain = loopChain(lang)

  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">LOOP</div>
        <h1>{copy.loopH1}</h1>
        <p>{copy.loopLead(chain)}</p>
      </header>
      <div className="steps">
        {LOOP_STEPS.map((s) => (
          <article className="step" key={s.n}>
            <div className="n">{s.n}</div>
            <div>
              <h3>{stepTitle(s, lang)}</h3>
              <p>{stepDesc(s, lang)}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
