import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { AGENT_URL, DEMO_VIDEOS, WALKTHROUGH, type DemoLang } from '../data/site'
import { useLocale } from '../locale'
import { IconFilm, IconPlay, IconVideo, IconZap } from '../components/Icons'

type Mode = 'shots' | 'walk'

/** 讲解视频地址：site.ts 里填相对路径（如 media/walkthrough-zh.mp4），这里补上部署 base */
const walkSrc = WALKTHROUGH.src
  ? `${import.meta.env.BASE_URL}${WALKTHROUGH.src.replace(/^\//, '')}`
  : ''

/**
 * 演示页双标签：
 *  · 实机演示 —— 三语实机录屏抽帧，可按语种 / 镜头切换
 *  · 讲解视频 —— 位置已预留：把 mp4 放进 public/media/ 并填 site.ts 的 WALKTHROUGH.src
 *                页面会自动从「预留位」切换成就地播放（无需改本文件）
 */
export function VideoPage() {
  const [params, setParams] = useSearchParams()
  const mode: Mode = params.get('tab') === 'walk' ? 'walk' : 'shots'

  const { lang, setLang } = useLocale()
  const [shot, setShot] = useState(0)

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
        <h1>演示与讲解</h1>
        <p>
          三语实机录屏抽帧，可按语种与镜头切换查看真实输出；完整讲解则按章节大纲呈现，一次讲完整条闭环。
        </p>
      </header>

      <div className="vtabs" role="tablist" aria-label="演示类型">
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'shots'}
          className={`vtab ${mode === 'shots' ? 'active' : ''}`}
          onClick={() => setMode('shots')}
        >
          <IconVideo size={15} />
          实机演示
          <span className="tag">三语 · 已上线</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'walk'}
          className={`vtab ${mode === 'walk' ? 'active' : ''}`}
          onClick={() => setMode('walk')}
        >
          <IconFilm size={15} />
          讲解视频
          <span className="tag">{WALKTHROUGH.src ? '可播放' : '即将上线'}</span>
        </button>
      </div>

      {mode === 'shots' ? (
        <>
          <div className="lang-tabs" role="tablist" aria-label="演示语种">
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
              <img src={activeShot} alt={`${current.title} 实机截图`} />
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
                  aria-label={`镜头 ${i + 1}`}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          )}

          <div className="card" style={{ marginTop: 16 }}>
            <div className="eyebrow">SCENE</div>
            <h3 style={{ marginTop: 8 }}>{current.title}</h3>
            <p style={{ marginTop: 8 }}>{current.desc}</p>
            <div className="scene-tag" style={{ marginTop: 10 }}>
              {current.scene}
            </div>
            <p style={{ marginTop: 10, color: 'var(--muted)', fontSize: 13 }}>{current.hint}</p>
          </div>

          <div className="cta-row" style={{ marginTop: 20 }}>
            <a className="btn btn-ghost" href={activeShot} target="_blank" rel="noreferrer">
              新窗口打开截图
            </a>
            <Link className="btn btn-ghost" to="/play">
              动态闯关
            </Link>
            <button type="button" className="btn btn-primary" onClick={() => setMode('walk')}>
              <IconFilm size={16} /> 切到讲解视频
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="video-stage walk" data-ready={Boolean(WALKTHROUGH.src)}>
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
                  <strong>{WALKTHROUGH.title}</strong>
                  <span className="walk-hold-sub">
                    {WALKTHROUGH.duration} · 讲解片制作中，接入后此处直接播放
                  </span>
                  <span className="walk-hold-note">
                    下方章节大纲已按最终结构排好，可先按大纲对照实机截图查看。
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="walk-meta">
            <div>
              <div className="eyebrow">WALKTHROUGH</div>
              <h3 style={{ marginTop: 8 }}>{WALKTHROUGH.title}</h3>
              <p style={{ marginTop: 8, color: 'var(--muted)' }}>{WALKTHROUGH.desc}</p>
            </div>
            <div className="walk-badge">
              <b>{WALKTHROUGH.duration}</b>
              <span>{WALKTHROUGH.chapters.length} 章 · 中文</span>
            </div>
          </div>

          <ol className="walk-chapters">
            {WALKTHROUGH.chapters.map((c) => (
              <li key={c.n}>
                <span className="wc-n">{c.n}</span>
                <span className="wc-body">
                  <strong>{c.t}</strong>
                  <span>{c.desc}</span>
                </span>
              </li>
            ))}
          </ol>

          <div className="cta-row" style={{ marginTop: 20 }}>
            <a className="btn btn-primary" href={AGENT_URL} target="_blank" rel="noreferrer">
              <IconZap size={16} /> 直接体验智能体
            </a>
            <Link className="btn btn-ghost" to="/demo">
              看实机取证截图
            </Link>
          </div>
        </>
      )}
    </>
  )
}
