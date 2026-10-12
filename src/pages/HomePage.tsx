import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { AGENT_URL, DEMO_VIDEOS, FEATURES, LOOP_CN, LOOP_CHAIN, METRICS, PAGE_TOTAL, SITE } from '../data/site'
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
  { to: '/video', label: '演示', Icon: IconVideo },
  { to: '/play', label: '闯关', Icon: IconPlay },
  { to: '/features', label: '功能', Icon: IconCpu },
  { to: '/tech', label: '架构', Icon: IconLayers },
  { to: '/innovation', label: '创新', Icon: IconSpark },
  { to: '/business', label: '商业', Icon: IconBiz },
  { to: '/team', label: '团队', Icon: IconTeam },
]

/**
 * CSS 自定义属性 `--d`：把进场延迟交给样式层，避免在组件里排队去动画。
 * 首屏每个 `rv` / `rv-line` 元素的揭幕时机只在这里声明一次。
 */
const delay = (ms: number): CSSProperties => ({ '--d': `${ms}ms` }) as CSSProperties

export function HomePage() {
  const demo = DEMO_VIDEOS[0]
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
              <b className="hv-honor">{SITE.honor}</b>
            </span>
            <span className="rv hv-index" style={delay(80)}>
              <b>01</b> / {PAGE_TOTAL} · 作品展示站
            </span>
          </div>

          <div className="hv-grid">
            <div className="hv-copy">
              <h1 className="hv-title rv-line" id="hero-title" style={delay(140)}>
                <span>{SITE.name}</span>
              </h1>

              <p className="rv hv-lede" style={delay(430)}>
                把突击做成<em>闭环</em>——紧扣本人资料，绝不超纲。
              </p>

              <p className="rv hv-sub" style={delay(510)}>
                上传本人笔记、课件与真题，{LOOP_CN}环节走完一轮：{LOOP_CHAIN}。
              </p>

              <p className="rv hv-byline" style={delay(550)}>
                队名 {SITE.team} · 三地联合团队（多伦多 · 南通 · 吉隆坡）
              </p>

              <div className="rv hv-cta" style={delay(590)}>
                <a className="btn btn-primary" href={AGENT_URL} target="_blank" rel="noreferrer">
                  <IconZap size={16} /> 立即体验智能体
                </a>
                <Link className="btn btn-ghost" to="/video">
                  <IconVideo size={16} /> 三语实机演示
                </Link>
                <Link className="btn btn-ghost" to="/video?tab=walk">
                  <IconFilm size={16} /> 讲解视频
                </Link>
              </div>
            </div>

            <div className="rv hv-demo" style={delay(290)}>
              <DemoWindow
                shots={shots}
                label="期末速通官 · 实机运行"
                caption={demo.hint}
              />
            </div>
          </div>

          <nav className="hero-quick hv-nav rv" aria-label="全站入口" style={delay(670)}>
            {siteMap.map(({ to, label, Icon }) => (
              <Link key={to} to={to}>
                <Icon size={14} />
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <LoopRail />

      <section className="evidence" aria-label="作品证据">
        <div className="band-head">
          <h2>跑起来的证据</h2>
          <p>数字来自参赛作品的实际工作流配置，可在架构页逐项核对。</p>
        </div>
        <div className="metrics">
          {METRICS.map((m) => (
            <div className="metric" key={m.l}>
              <div className="n">{m.n}</div>
              <div className="l">{m.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="feature-band">
        <div className="band-head">
          <h2>它替你做的三件事</h2>
        </div>
        <div className="grid-cards">
          {FEATURES.map((f) => (
            <Link className="card hover-lift" to="/features" key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <div className="meta">功能详情 →</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="closing">
        <h2>想自己跑一遍？</h2>
        <p>海报二维码指向本站；从这里可以直达星辰 Agent，也可以先玩一轮动态闯关。</p>
        <div className="cta-row">
          <a className="btn btn-primary" href={AGENT_URL} target="_blank" rel="noreferrer">
            <IconZap size={16} /> 进入星辰 Agent
          </a>
          <Link className="btn btn-ghost" to="/play">
            <IconPlay size={16} /> 先玩动态闯关
          </Link>
          <Link className="btn btn-ghost" to="/video?tab=walk">
            <IconFilm size={16} /> 看讲解视频
          </Link>
        </div>
      </section>
    </>
  )
}
