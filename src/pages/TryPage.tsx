import { AGENT_URL, SITE } from '../data/site'

export function TryPage() {
  return (
    <section className="try-box">
      <div className="eyebrow" style={{ color: '#9fd3ff' }}>
        TRY · SPARK AGENT
      </div>
      <h1>立即体验 {SITE.name}</h1>
      <p>跳转讯飞星辰 Agent 构建器分享页。建议在微信外浏览器打开以获得完整体验。</p>
      <a className="btn btn-primary" href={AGENT_URL} target="_blank" rel="noreferrer">
        打开星辰 Agent
      </a>
    </section>
  )
}
