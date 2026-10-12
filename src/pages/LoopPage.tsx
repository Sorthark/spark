import { LOOP_STEPS } from '../data/site'

export function LoopPage() {
  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">LOOP</div>
        <h1>五步闭环 · 可讲解的主链路</h1>
        <p>资料识别 → 考点地图 → 诊断 → 判分 → 15 分钟补练；记忆续接写回下一轮。</p>
      </header>
      <div className="steps">
        {LOOP_STEPS.map((s) => (
          <article className="step" key={s.n}>
            <div className="n">{s.n}</div>
            <div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
