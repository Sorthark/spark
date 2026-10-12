import { INNOVATIONS } from '../data/site'

export function InnovationPage() {
  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">INNOVATION</div>
        <h1>创新点</h1>
        <p>围绕复习决策：资料依据、时间预算、诊断反馈与跨轮次状态。</p>
      </header>
      <ul className="list">
        {INNOVATIONS.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </>
  )
}
