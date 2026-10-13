import { Link } from 'react-router-dom'
import { DEMO_VIDEOS, tx, WALKTHROUGH } from '../data/site'
import { IconPlay, IconVideo } from '../components/Icons'
import { useLocale } from '../locale'
import { fill, UI } from '../ui'

export function DemoPage() {
  const { lang } = useLocale()
  const copy = UI.demo

  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">DEMO</div>
        <h1>{tx(lang, copy.h1)}</h1>
        <p>{tx(lang, copy.lead)}</p>
      </header>

      <div className="grid-cards demo-shot-grid">
        {DEMO_VIDEOS.map((v) => (
          <Link className="card hover-lift demo-shot-card" to="/video" key={v.id}>
            <div className="demo-shot-cover">
              <img src={v.poster} alt="" loading="lazy" />
            </div>
            <div className="eyebrow">
              <IconVideo size={14} /> {v.label}
            </div>
            <h3>{tx(lang, v.title)}</h3>
            <p>{tx(lang, v.desc)}</p>
            <div className="scene-tag">{tx(lang, v.scene)}</div>
            <div className="meta">{tx(lang, copy.more)}</div>
          </Link>
        ))}
      </div>

      <Link className="walk-banner" to="/video?tab=walk">
        <span className="walk-banner-cover" aria-hidden>
          <img src={WALKTHROUGH.poster} alt="" loading="lazy" />
          <span className="walk-banner-play">
            <IconPlay size={20} />
          </span>
        </span>
        <span className="walk-banner-body">
          <span className="eyebrow">
            <IconVideo size={14} /> WALKTHROUGH
          </span>
          <strong>{tx(lang, WALKTHROUGH.title)}</strong>
          <span className="walk-banner-desc">{tx(lang, WALKTHROUGH.desc)}</span>
          <span className="walk-banner-meta">
            {tx(lang, WALKTHROUGH.duration)} · {fill(tx(lang, copy.chapters), { n: WALKTHROUGH.chapters.length })}
          </span>
        </span>
      </Link>
    </>
  )
}
