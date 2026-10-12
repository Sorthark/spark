import { Link } from 'react-router-dom'
import { DEMO_VIDEOS, WALKTHROUGH } from '../data/site'
import { IconPlay, IconVideo } from '../components/Icons'

export function DemoPage() {
  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">DEMO</div>
        <h1>实跑证据</h1>
        <p>
          三语实机录屏已抽帧上线：点进「演示」页可切换语种与镜头。完整录屏体积大，站点以截图呈现真实输出，
          逐段讲解见讲解视频。
        </p>
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
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
            <div className="scene-tag">{v.scene}</div>
            <div className="meta">查看截图 →</div>
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
          <strong>{WALKTHROUGH.title}</strong>
          <span className="walk-banner-desc">{WALKTHROUGH.desc}</span>
          <span className="walk-banner-meta">
            {WALKTHROUGH.duration} · 共 {WALKTHROUGH.chapters.length} 章 · 点此进入 →
          </span>
        </span>
      </Link>
    </>
  )
}
