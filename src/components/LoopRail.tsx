import { useEffect, useState } from 'react'
import { CHROME, LOOP_STEPS, stepDesc, stepTitle } from '../data/site'
import { useLocale } from '../locale'

/**
 * 闭环电路条：页面载入后依次点亮每个节点，形成一次编排好的开场。
 * 可点击任一节点跳转查看，也可重播。尊重 prefers-reduced-motion。
 * 节点数、标题、环节数文案全部取自 LOOP_STEPS，不硬编码。
 */
export function LoopRail() {
  const { lang } = useLocale()
  const copy = CHROME[lang]
  const total = LOOP_STEPS.length
  const [lit, setLit] = useState(0)
  const [auto, setAuto] = useState(true)

  useEffect(() => {
    if (!auto) return
    if (lit >= total) return
    if (typeof window !== 'undefined' && window.matchMedia) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setLit(total)
        return
      }
    }
    const timer = window.setTimeout(() => setLit((n) => n + 1), 820)
    return () => window.clearTimeout(timer)
  }, [auto, lit, total])

  const focusIndex = lit === 0 ? 0 : Math.min(lit, total) - 1
  const focus = LOOP_STEPS[focusIndex]

  const pick = (i: number) => {
    setAuto(false)
    setLit(i + 1)
  }

  return (
    <section className="loop-rail-sec" aria-label={copy.railKicker}>
      <div className="rail-head">
        <div>
          <span className="rail-kicker">{copy.railKicker}</span>
          <h2>{copy.railTitle}</h2>
        </div>
        <button
          type="button"
          className="rail-replay"
          onClick={() => {
            setLit(0)
            setAuto(true)
          }}
        >
          {copy.railReplay}
        </button>
      </div>

      <ol className="loop-rail" data-lit={lit}>
        {LOOP_STEPS.map((s, i) => {
          const state = i < lit ? (i === focusIndex ? 'is-active' : 'is-done') : 'is-idle'
          return (
            <li key={s.n} className={state}>
              <button type="button" onClick={() => pick(i)} aria-current={i === focusIndex}>
                <span className="rail-n">{s.n}</span>
                <span className="rail-t">{stepTitle(s, lang)}</span>
              </button>
              {i < total - 1 && <span className="rail-link" aria-hidden />}
            </li>
          )
        })}
      </ol>

      <p className="rail-desc">
        <strong>{stepTitle(focus, lang)}</strong>
        <span>{stepDesc(focus, lang)}</span>
      </p>
    </section>
  )
}
