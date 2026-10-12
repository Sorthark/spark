import { INNOVATIONS } from '../data/site'

export function InnovationPage() {
  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">INNOVATION</div>
        <h1>创新点</h1>
        <p>围绕复习决策：资料依据、时间预算、诊断反馈与跨轮次状态。</p>
      </header>
      <div className="grid-cards">
        {INNOVATIONS.map((it, i) => (
          <article className="card" key={it.title}>
            <div className="eyebrow">0{i + 1}</div>
            <h3 style={{ marginTop: 8 }}>{it.title}</h3>
            <p>{it.desc}</p>
          </article>
        ))}
      </div>
    </>
  )
}
