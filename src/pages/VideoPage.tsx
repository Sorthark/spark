import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { AGENT_URL, DEMO_VIDEOS, tx, WALKTHROUGH, type DemoLang } from '../data/site'
import { useLocale } from '../locale'
import { fill, UI } from '../ui'
import { IconFilm, IconPlay, IconVideo, IconZap } from '../components/Icons'

type Mode = 'shots' | 'walk'

/** 讲解片按当前语种取。site.ts 里 srcByLang 留空则该语种仍是预留位。 */
function walkFile(lang: DemoLang) {
  const rel = WALKTHROUGH.srcByLang[lang]
  if (!rel) return ''
  return `${import.meta.env.BASE_URL}${rel.replace(/^\//, '')}`
}

/**
 * 演示页双标签：
 *  · 实机演示 —— 三语实机录屏抽帧
 *  · 讲解视频 —— 中英文八页口播片；马来语仍是预留位
 */
export function VideoPage() {
  const [params, setParams] = useSearchParams()
  const mode: Mode = params.get('tab') === 'walk' ? 'walk' : 'shots'

  const { lang, setLang } = useLocale()
  const copy = UI.video
  const [shot, setShot] = useState(0)
  const walkSrc = walkFile(lang)

  const current = DEMO_VIDEOS.find((v) => v.id === lang) ?? DEMO_VIDEOS[0]
  const gallery = current.shots?.length ? current.shots : [current.poster]
  const activeShot = gallery[Math.min(shot, gallery.length - 1)]

  useEffect(() => {
    setShot(0)
  }, [lang])

  const switchLang = (id: DemoLang) => {
    setLang(id)
  }

  const setMode = (next: Mode) => {
    const q = new URLSearchParams(params)
    if (next === 'walk') q.set('tab', 'walk')
    else q.delete('tab')
    setParams(q, { replace: true })
  }

  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">
          <IconVideo size={14} /> DEMO · REAL SHOTS
        </div>
        <h1>{tx(lang, copy.h1)}</h1>
        <p>{tx(lang, copy.lead)}</p>
      </header>

      <div className="vtabs" role="tablist" aria-label={tx(lang, copy.h1)}>
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'shots'}
          className={`vtab ${mode === 'shots' ? 'active' : ''}`}
          onClick={() => setMode('shots')}
        >
          <IconVideo size={15} />
          {tx(lang, copy.shots)}
          <span className="tag">{tx(lang, copy.shotsTag)}</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'walk'}
          className={`vtab ${mode === 'walk' ? 'active' : ''}`}
          onClick={() => setMode('walk')}
        >
          <IconFilm size={15} />
          {tx(lang, copy.walk)}
          <span className="tag">{walkSrc ? tx(lang, copy.walkReady) : tx(lang, copy.walkSoon)}</span>
        </button>
      </div>

      {mode === 'shots' ? (
        <>
          <div className="lang-tabs" role="tablist" aria-label={tx(lang, copy.langs)}>
            {DEMO_VIDEOS.map((v) => (
              <button
                key={v.id}
                type="button"
                role="tab"
                className={`lang-tab ${lang === v.id ? 'active' : ''}`}
                onClick={() => switchLang(v.id)}
              >
                {v.label}
              </button>
            ))}
          </div>

          <div className="video-stage shot">
            {current.src ? (
              <video
                key={current.src}
                controls
                playsInline
                preload="metadata"
                poster={current.poster}
              >
                <source src={current.src} type="video/mp4" />
              </video>
            ) : (
              <img src={activeShot} alt={`${tx(lang, current.title)} ${tx(lang, copy.altShot)}`} />
            )}
          </div>

          {gallery.length > 1 && (
            <div className="shot-rail" role="list">
              {gallery.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className={`shot-thumb ${i === shot ? 'active' : ''}`}
                  onClick={() => setShot(i)}
                  aria-label={fill(tx(lang, copy.shot), { n: i + 1 })}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          )}

          <div className="card" style={{ marginTop: 16 }}>
            <div className="eyebrow">SCENE</div>
            <h3 style={{ marginTop: 8 }}>{tx(lang, current.title)}</h3>
            <p style={{ marginTop: 8 }}>{tx(lang, current.desc)}</p>
            <div className="scene-tag" style={{ marginTop: 10 }}>
              {tx(lang, current.scene)}
            </div>
            <p style={{ marginTop: 10, color: 'var(--muted)', fontSize: 13 }}>{tx(lang, current.hint)}</p>
          </div>

          <div className="cta-row" style={{ marginTop: 20 }}>
            <a className="btn btn-ghost" href={activeShot} target="_blank" rel="noreferrer">
              {tx(lang, copy.openShot)}
            </a>
            <Link className="btn btn-ghost" to="/play">
              {tx(lang, copy.toPlay)}
            </Link>
            <button type="button" className="btn btn-primary" onClick={() => setMode('walk')}>
              <IconFilm size={16} /> {tx(lang, copy.toWalk)}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="video-stage walk" data-ready={Boolean(walkSrc)}>
            {walkSrc ? (
              <video
                controls
                playsInline
                preload="metadata"
                poster={WALKTHROUGH.poster}
                key={walkSrc}
              >
                <source src={walkSrc} type="video/mp4" />
              </video>
            ) : (
              <div className="walk-hold">
                <img className="walk-hold-bg" src={WALKTHROUGH.poster} alt="" aria-hidden />
                <div className="walk-hold-inner">
                  <span className="walk-play">
                    <IconPlay size={26} />
                  </span>
                  <strong>{tx(lang, WALKTHROUGH.title)}</strong>
                  <span className="walk-hold-sub">
                    {tx(lang, WALKTHROUGH.duration)} · {tx(lang, WALKTHROUGH.hold)}
                  </span>
                  <span className="walk-hold-note">{tx(lang, WALKTHROUGH.holdNote)}</span>
                </div>
              </div>
            )}
          </div>

          <div className="walk-meta">
            <div>
              <div className="eyebrow">WALKTHROUGH</div>
              <h3 style={{ marginTop: 8 }}>{tx(lang, WALKTHROUGH.title)}</h3>
              <p style={{ marginTop: 8, color: 'var(--muted)' }}>{tx(lang, WALKTHROUGH.desc)}</p>
            </div>
            <div className="walk-badge">
              <b>{tx(lang, WALKTHROUGH.duration)}</b>
              <span>{fill(tx(lang, copy.chapters), { n: WALKTHROUGH.chapters.length })}</span>
            </div>
          </div>

          <ol className="walk-chapters">
            {WALKTHROUGH.chapters.map((c) => (
              <li key={c.n}>
                <span className="wc-n">{c.n}</span>
                <span className="wc-body">
                  <strong>{tx(lang, c.t)}</strong>
                  <span>{tx(lang, c.desc)}</span>
                </span>
              </li>
            ))}
          </ol>

          <div className="cta-row" style={{ marginTop: 20 }}>
            <a className="btn btn-primary" href={AGENT_URL} target="_blank" rel="noreferrer">
              <IconZap size={16} /> {tx(lang, copy.try)}
            </a>
            <Link className="btn btn-ghost" to="/demo">
              {tx(lang, copy.toDemo)}
            </Link>
          </div>
        </>
      )}
    </>
  )
}
