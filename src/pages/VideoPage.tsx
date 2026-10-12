import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { DEMO_VIDEOS, type DemoLang } from '../data/site'
import { IconVideo, IconZap } from '../components/Icons'

export function VideoPage() {
  const available = useMemo(() => DEMO_VIDEOS.filter((v) => Boolean(v.poster)), [])
  const [lang, setLang] = useState<DemoLang>(available[0]?.id ?? 'zh')
  const [shot, setShot] = useState(0)
  const current = DEMO_VIDEOS.find((v) => v.id === lang) ?? DEMO_VIDEOS[0]
  const gallery = current.shots?.length ? current.shots : [current.poster]
  const activeShot = gallery[Math.min(shot, gallery.length - 1)]

  const switchLang = (id: DemoLang) => {
    setLang(id)
    setShot(0)
  }

  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">
          <IconVideo size={14} /> DEMO · REAL SHOTS
        </div>
        <h1>真实演示截图</h1>
        <p>
          来自参赛材料「03-演示材料」三语实机录屏抽帧：中文 / 英语 / 马来语。可切换语种与镜头，并跳转星辰
          Agent 亲手跑一遍。
        </p>
      </header>

      <div className="lang-tabs" role="tablist">
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
          <video key={current.src} controls playsInline preload="metadata" poster={current.poster}>
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
        <div className="eyebrow">SOURCE</div>
        <h3 style={{ marginTop: 8 }}>{current.title}</h3>
        <p style={{ marginTop: 8 }}>{current.desc}</p>
        <p style={{ marginTop: 8, color: 'var(--muted)', fontSize: 13 }}>{current.hint}</p>
      </div>

      <div className="cta-row" style={{ marginTop: 20 }}>
        <a className="btn btn-primary" href={activeShot} target="_blank" rel="noreferrer">
          新窗口打开截图
        </a>
        <Link className="btn btn-ghost" to="/play">
          动态闯关
        </Link>
        <Link className="btn btn-ghost" to="/try">
          <IconZap size={16} /> 体验 Agent
        </Link>
      </div>
    </>
  )
}
