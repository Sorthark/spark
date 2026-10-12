import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { DEMO_VIDEOS, type DemoLang } from '../data/site'
import { IconPlay, IconVideo, IconZap } from '../components/Icons'

export function VideoPage() {
  const available = useMemo(() => DEMO_VIDEOS.filter((v) => Boolean(v.src)), [])
  const [lang, setLang] = useState<DemoLang>(available[0]?.id ?? 'zh')
  const current = DEMO_VIDEOS.find((v) => v.id === lang) ?? DEMO_VIDEOS[0]

  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">
          <IconVideo size={14} /> VIDEO · REAL DEMO
        </div>
        <h1>真实演示视频</h1>
        <p>
          来自参赛材料「03-演示材料」：中文 / 英语 / 马来语实机演示。可切换语种回放，并跳转星辰
          Agent 亲手跑一遍。
        </p>
      </header>

      <div className="lang-tabs" role="tablist">
        {DEMO_VIDEOS.map((v) => (
          <button
            key={v.id}
            type="button"
            role="tab"
            className={`lang-tab ${lang === v.id ? 'active' : ''} ${v.src ? '' : 'disabled'}`}
            disabled={!v.src}
            onClick={() => v.src && setLang(v.id)}
          >
            {v.label}
            {!v.src && <span className="tag">待同步</span>}
          </button>
        ))}
      </div>

      <div className="video-stage real">
        {current.src ? (
          <video
            key={current.src}
            controls
            playsInline
            preload="metadata"
            poster={current.poster}
          >
            <source src={current.src} type="video/mp4" />
            您的浏览器不支持 video 标签。
          </video>
        ) : (
          <div className="video-placeholder">
            <div className="play-glyph">
              <IconPlay size={28} />
            </div>
            <h2>{current.label} 尚未挂载到站点</h2>
            <p>{current.hint}</p>
          </div>
        )}
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <div className="eyebrow">SOURCE</div>
        <h3 style={{ marginTop: 8 }}>{current.title}</h3>
        <p style={{ marginTop: 8 }}>{current.desc}</p>
      </div>

      <div className="cta-row" style={{ marginTop: 20 }}>
        {current.src ? (
          <a className="btn btn-primary" href={current.src} target="_blank" rel="noreferrer">
            新窗口打开 / 下载
          </a>
        ) : (
          <span className="btn btn-ghost">视频待上线</span>
        )}
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
