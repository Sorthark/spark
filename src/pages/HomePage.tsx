import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { AGENT_URL, CHROME, DEMO_VIDEOS, FEATURES, loopChain, METRICS, PAGE_TOTAL, SITE, tx } from '../data/site'
import { useLocale } from '../locale'
import { fill, UI } from '../ui'
import { DemoWindow } from '../components/DemoWindow'
import { LoopRail } from '../components/LoopRail'
import {
  IconBiz,
  IconCpu,
  IconFilm,
  IconLayers,
  IconPlay,
  IconSpark,
  IconTeam,
  IconVideo,
  IconZap,
} from '../components/Icons'

const siteMap = [
  { to: '/video', label: UI.nav.video, Icon: IconVideo },
  { to: '/play', label: UI.nav.play, Icon: IconPlay },
  { to: '/features', label: UI.home.quick.features, Icon: IconCpu },
  { to: '/tech', label: UI.home.quick.tech, Icon: IconLayers },
  { to: '/innovation', label: UI.home.quick.innovation, Icon: IconSpark },
  { to: '/business', label: UI.nav.business, Icon: IconBiz },
  { to: '/team', label: UI.nav.team, Icon: IconTeam },
]

/**
 * CSS 自定义属性 `--d`：把进场延迟交给样式层，避免在组件里排队去动画。
 * 首屏每个 `rv` / `rv-line` 元素的揭幕时机只在这里声明一次。
 */
const delay = (ms: number): CSSProperties => ({ '--d': `${ms}ms` }) as CSSProperties

export function HomePage() {
  const { lang } = useLocale()
  const copy = UI.home
  const lede = copy.lede[lang]
  const demo = DEMO_VIDEOS.find((item) => item.id === lang) ?? DEMO_VIDEOS[0]
  const shots = demo.shots?.length ? demo.shots : [demo.poster]

  return (
    <>
      <section className="hero-v2" aria-labelledby="hero-title">
        {/* 仪器化结构件：细竖轨 + 四角标，浅色底上靠"精密"出科技感 */}
        <span className="hv-rail l" aria-hidden />
        <span className="hv-rail r" aria-hidden />
        <span className="hv-corner tl" aria-hidden />
        <span className="hv-corner tr" aria-hidden />
        <span className="hv-corner bl" aria-hidden />
        <span className="hv-corner br" aria-hidden />
        <span className="hv-floor" aria-hidden />

        <div className="hv-inner">
          <div className="hv-top">
            <span className="rv hv-kicker" style={delay(0)}>
              <i className="hv-dot" aria-hidden />
              {SITE.cup}
              <b className="hv-honor">{tx(lang, UI.honor)}</b>
            </span>
            <span className="rv hv-index" style={delay(80)}>
              <b>01</b> / {PAGE_TOTAL} · {tx(lang, copy.index)}
            </span>
          </div>

          <div className="hv-grid">
            <div className="hv-copy">
              <h1 className="hv-title rv-line" id="hero-title" style={delay(140)}>
                <span>{SITE.name}</span>
              </h1>

              <p className="rv hv-lede" style={delay(430)}>
                {lede.before}<em>{lede.em}</em>{lede.after}
              </p>

              <p className="rv hv-sub" style={delay(510)}>
                {CHROME[lang].heroSub(loopChain(lang))}
              </p>

              <p className="rv hv-byline" style={delay(550)}>
                {tx(lang, copy.teamLabel)} {SITE.team} · {tx(lang, copy.byline)}
              </p>

              <div className="rv hv-cta" style={delay(590)}>
                <a className="btn btn-primary" href={AGENT_URL} target="_blank" rel="noreferrer">
                  <IconZap size={16} /> {tx(lang, copy.try)}
                </a>
                <Link className="btn btn-ghost" to="/video">
                  <IconVideo size={16} /> {tx(lang, copy.demo)}
                </Link>
                <Link className="btn btn-ghost" to="/video?tab=walk">
                  <IconFilm size={16} /> {tx(lang, copy.walk)}
                </Link>
              </div>
            </div>

            <div className="rv hv-demo" style={delay(290)}>
              <DemoWindow
                shots={shots}
                label={`${SITE.name} · ${tx(lang, copy.window)}`}
                caption={tx(lang, demo.hint)}
                live={tx(lang, copy.live)}
                frameLabel={(n) => fill(tx(lang, copy.frame), { n })}
                framesLabel={tx(lang, copy.frames)}
              />
            </div>
          </div>

          <nav className="hero-quick hv-nav rv" aria-label="全站入口" style={delay(670)}>
            {siteMap.map(({ to, label, Icon }) => (
              <Link key={to} to={to}>
                <Icon size={14} />
                {tx(lang, label)}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <LoopRail />

      <section className="evidence" aria-label="作品证据">
        <div className="band-head">
          <h2>{tx(lang, copy.evidenceTitle)}</h2>
          <p>{tx(lang, copy.evidenceLead)}</p>
        </div>
        <div className="metrics">
          {METRICS.map((m) => (
            <div className="metric" key={m.l.zh}>
              <div className="n">{m.n}</div>
              <div className="l">{tx(lang, m.l)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="feature-band">
        <div className="band-head">
          <h2>{tx(lang, copy.featureTitle)}</h2>
        </div>
        <div className="grid-cards">
          {FEATURES.map((f) => (
            <Link className="card hover-lift" to="/features" key={f.title.zh}>
              <h3>{tx(lang, f.title)}</h3>
              <p>{tx(lang, f.desc)}</p>
              <div className="meta">{tx(lang, copy.featureMore)}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="closing">
        <h2>{tx(lang, copy.closeTitle)}</h2>
        <p>{tx(lang, copy.closeLead)}</p>
        <div className="cta-row">
          <a className="btn btn-primary" href={AGENT_URL} target="_blank" rel="noreferrer">
            <IconZap size={16} /> {tx(lang, copy.openAgent)}
          </a>
          <Link className="btn btn-ghost" to="/play">
            <IconPlay size={16} /> {tx(lang, copy.playFirst)}
          </Link>
          <Link className="btn btn-ghost" to="/video?tab=walk">
            <IconFilm size={16} /> {tx(lang, copy.watchWalk)}
          </Link>
        </div>
      </section>
    </>
  )
}
