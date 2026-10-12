import { Link } from 'react-router-dom'
import { DEMO_VIDEOS } from '../data/site'
import { IconVideo } from '../components/Icons'

export function DemoPage() {
  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">DEMO</div>
        <h1>实跑证据</h1>
        <p>
          参赛材料三语实机演示已抽帧上线：点进「视频」页可切换语种与镜头；完整 MP4 体积大，站点以截图为准。
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
            <div className="meta">查看截图 →</div>
          </Link>
        ))}
      </div>

      <ul className="list" style={{ marginTop: 16 }}>
        <li>
          <strong>同源材料</strong>
          <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>
            全国20 / 求针对提交包 / 03-演示材料：中文 · 英语 · 马来语演示视频（站点展示为抽帧截图）
          </div>
        </li>
      </ul>
    </>
  )
}
