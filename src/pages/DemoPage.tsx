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
          参赛材料已提供中 / 英 / 马来三语实机演示视频。优先看视频回放；截图仍可继续补强论文式展板。
        </p>
      </header>

      <div className="grid-cards">
        {DEMO_VIDEOS.map((v) => (
          <Link className="card hover-lift" to="/video" key={v.id}>
            <div className="eyebrow">
              <IconVideo size={14} /> {v.label}
            </div>
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
            <div className="meta">{v.src ? '打开播放器 →' : '待同步 →'}</div>
          </Link>
        ))}
      </div>

      <ul className="list" style={{ marginTop: 16 }}>
        <li>
          <strong>同源材料</strong>
          <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>
            全国20 / 求针对提交包 / 03-演示材料：中文演示视频 · 英语演示视频 · 马来语演示视频
          </div>
        </li>
        <li>
          <strong>仍建议补充的静态截图</strong>
          <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>
            5 题判分、15 分钟补练、记忆续接、资料不足拒答——便于海报与 PPT 定格引用。
          </div>
        </li>
      </ul>
    </>
  )
}
