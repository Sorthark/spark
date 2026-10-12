import { LOOP_CN, LOOP_CHAIN, LOOP_STEPS } from '../data/site'

export function LoopPage() {
  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">LOOP</div>
        <h1>{LOOP_CN}环节闭环 · 可讲解的主链路</h1>
        <p>
          {LOOP_CHAIN}；同一套 KP 编号贯穿始终，薄弱点写回档案，下一轮优先续接。
        </p>
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
