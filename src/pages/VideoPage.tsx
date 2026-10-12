import { Link } from 'react-router-dom'
import { VIDEO } from '../data/site'

export function VideoPage() {
  const hasEmbed = VIDEO.status === 'ready' && Boolean(VIDEO.embedUrl)

  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">VIDEO</div>
        <h1>{VIDEO.title}</h1>
        <p>{VIDEO.note}</p>
      </header>

      <div className="video-stage">
        {hasEmbed ? (
          <iframe
            title="讲解视频"
            src={VIDEO.embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="video-placeholder">
            <div className="play-glyph">▶</div>
            <h2>视频位已预留</h2>
            <p>上传成片后，在 <code>src/data/site.ts</code> 将 VIDEO.status 设为 ready 并填入 embedUrl。</p>
          </div>
        )}
      </div>

      <div className="cta-row" style={{ marginTop: 20 }}>
        <Link className="btn btn-primary" to="/loop">
          先看五步闭环
        </Link>
        <Link className="btn btn-ghost" to="/play">
          玩一关再体验
        </Link>
        <Link className="btn btn-ghost" to="/try">
          直接体验 Agent
        </Link>
      </div>
    </>
  )
}
