import { METRICS } from '../data/site'

export function TechPage() {
  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">TECH</div>
        <h1>技术架构与工作流</h1>
        <p>星火 4.0 Ultra + 工作流编排 + OCR + 长期记忆 + 文生图；节点职责单一，变量显式传递。</p>
      </header>
      <div className="metrics">
        {METRICS.map((m) => (
          <div className="metric" key={m.l}>
            <div className="n">{m.n}</div>
            <div className="l">{m.l}</div>
          </div>
        ))}
      </div>
      <ul className="list">
        <li>
          <strong>用户交互层</strong>
          <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>
            粘贴笔记、上传图片与 PDF、收集作答；对话输出考点、精讲与诊断报告。
          </div>
        </li>
        <li>
          <strong>工作流编排层</strong>
          <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>
            6 个模型节点与 8 个代码节点协作；串行知识卡保持 KP 顺序，精讲与导图可并行。
          </div>
        </li>
        <li>
          <strong>工程证据位</strong>
          <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>
            请在本页替换为星火编辑器 29 节点全景截图（与答辩 PPT 工作流页同源）。
          </div>
        </li>
      </ul>
    </>
  )
}
