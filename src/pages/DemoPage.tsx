export function DemoPage() {
  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">DEMO</div>
        <h1>实跑证据</h1>
        <p>中文闭环与多语言样例；展场优先展示可放大的真实截图，而非概念插画。</p>
      </header>
      <ul className="list">
        <li>
          <strong>已有 / 待贴图：学生档案与考点输出</strong>
          <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>
            对齐答辩 PPT 中文实跑页，将关键区域裁切放大后放入本页。
          </div>
        </li>
        <li>
          <strong>建议补充：5 题判分 · 15 分钟补练 · 记忆续接</strong>
          <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>
            完整链路截图是评委最关心的证据，建议与 PPT V4 同步更新。
          </div>
        </li>
        <li>
          <strong>多语言：中英 / 马来样例</strong>
          <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>
            强调「同一工作流、同一状态字段」；对照截图并排展示即可。
          </div>
        </li>
      </ul>
    </>
  )
}
