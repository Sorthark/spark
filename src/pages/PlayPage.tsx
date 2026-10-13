import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AGENT_URL, LOOP_STEPS, PLAY_ORDER, loopChain, stepTitle, tx } from '../data/site'
import { useLocale } from '../locale'
import { fill, UI } from '../ui'
import { IconCpu, IconPlay, IconZap } from '../components/Icons'

type Phase = 'boot' | 'swarm' | 'link' | 'win'

/** 五大痛点 · 口径对齐答辩稿 V6 第 03 页 */
const PAINS = UI.play.pains

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function Confetti() {
  const bits = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: `${(i * 17) % 100}%`,
        delay: `${(i % 8) * 0.08}s`,
        color: ['#2eb7ff', '#1f6feb', '#7cffc4', '#9fd3ff', '#fff'][i % 5],
      })),
    [],
  )
  return (
    <div className="confetti" aria-hidden>
      {bits.map((b) => (
        <i key={b.id} style={{ left: b.left, animationDelay: b.delay, background: b.color }} />
      ))}
    </div>
  )
}

export function PlayPage() {
  const { lang } = useLocale()
  const copy = UI.play
  const [phase, setPhase] = useState<Phase>('boot')
  const [bootPct, setBootPct] = useState(0)
  const [caught, setCaught] = useState<string[]>([])
  const [swarmLeft, setSwarmLeft] = useState(12)
  const [nodes, setNodes] = useState(() => shuffle(LOOP_STEPS.map((s) => s.id)))
  const [nextIdx, setNextIdx] = useState(0)
  const [pulseId, setPulseId] = useState<string | null>(null)
  const [combo, setCombo] = useState(0)
  const [miss, setMiss] = useState(false)

  useEffect(() => {
    if (phase !== 'boot') return
    setBootPct(0)
    const t = window.setInterval(() => {
      setBootPct((p) => {
        if (p >= 100) {
          window.clearInterval(t)
          return 100
        }
        return p + 4
      })
    }, 50)
    return () => window.clearInterval(t)
  }, [phase])

  useEffect(() => {
    if (phase === 'boot' && bootPct >= 100) {
      const t = window.setTimeout(() => setPhase('swarm'), 350)
      return () => window.clearTimeout(t)
    }
  }, [bootPct, phase])

  useEffect(() => {
    if (phase !== 'swarm') return
    setSwarmLeft(12)
    const t = window.setInterval(() => {
      setSwarmLeft((s) => {
        if (s <= 1) {
          window.clearInterval(t)
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => window.clearInterval(t)
  }, [phase])

  useEffect(() => {
    if (phase === 'swarm' && swarmLeft === 0) {
      // need at least 3 pain points
      if (caught.length >= 3) setPhase('link')
      else {
        // soft fail: refill timer once
        setSwarmLeft(8)
      }
    }
  }, [swarmLeft, phase, caught.length])

  function catchPain(id: string) {
    if (caught.includes(id) || phase !== 'swarm') return
    setCaught((c) => [...c, id])
    setCombo((x) => x + 1)
    if (caught.length + 1 >= 3 && swarmLeft > 0) {
      // early clear
      window.setTimeout(() => setPhase('link'), 400)
    }
  }

  function hitNode(id: (typeof PLAY_ORDER)[number]) {
    if (phase !== 'link') return
    const expect = PLAY_ORDER[nextIdx]
    if (id !== expect) {
      setMiss(true)
      setCombo(0)
      setPulseId(id)
      window.setTimeout(() => {
        setMiss(false)
        setPulseId(null)
      }, 420)
      return
    }
    setCombo((x) => x + 1)
    setPulseId(id)
    const ni = nextIdx + 1
    setNextIdx(ni)
    if (ni >= PLAY_ORDER.length) {
      window.setTimeout(() => setPhase('win'), 450)
    }
  }

  function restart() {
    setPhase('boot')
    setBootPct(0)
    setCaught([])
    setNodes(shuffle(LOOP_STEPS.map((s) => s.id)))
    setNextIdx(0)
    setPulseId(null)
    setCombo(0)
    setMiss(false)
  }

  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">
          <IconPlay size={14} /> PLAY · DYNAMIC OPS
        </div>
        <h1>{tx(lang, copy.h1)}</h1>
        <p>{tx(lang, copy.lead)}</p>
      </header>

      <div className="hud">
        <div className="hud-item">
          <IconCpu size={14} />
          <span>PHASE</span>
          <strong>
            {phase === 'boot' && '01 BOOT'}
            {phase === 'swarm' && '02 SWARM'}
            {phase === 'link' && '03 LINK'}
            {phase === 'win' && 'CLEAR'}
          </strong>
        </div>
        <div className="hud-item">
          <IconZap size={14} />
          <span>COMBO</span>
          <strong className={combo > 2 ? 'hot' : ''}>×{combo}</strong>
        </div>
        <div className="hud-meter">
          <i style={{ width: `${(nextIdx / PLAY_ORDER.length) * 100}%` }} />
        </div>
      </div>

      {phase === 'boot' && (
        <section className="ops-panel boot">
          <div className="radar" aria-hidden>
            <span />
            <span />
            <span />
          </div>
          <div>
            <div className="eyebrow">SYSTEM INIT</div>
            <h2>{tx(lang, copy.boot)}</h2>
            <p className="muted">{loopChain(lang)}</p>
            <div className="boot-bar">
              <i style={{ width: `${bootPct}%` }} />
            </div>
            <div className="boot-pct">{bootPct}%</div>
          </div>
        </section>
      )}

      {phase === 'swarm' && (
        <section className="ops-panel swarm">
          <div className="swarm-head">
            <div>
              <div className="eyebrow">TARGET LOCK</div>
              <h2>{tx(lang, copy.swarm)}</h2>
            </div>
            <div className="timer-ring" data-low={swarmLeft <= 4}>
              {swarmLeft}s
            </div>
          </div>
          <div className="swarm-field">
            {PAINS.map((p, i) => (
              <button
                key={p.id}
                type="button"
                className={`float-chip c${i} ${caught.includes(p.id) ? 'caught' : ''}`}
                onClick={() => catchPain(p.id)}
                disabled={caught.includes(p.id)}
              >
                {tx(lang, p.label)}
              </button>
            ))}
            <div className="scanline" aria-hidden />
          </div>
          <p className="muted">{fill(tx(lang, copy.caught), { n: caught.length, c: combo })}</p>
        </section>
      )}

      {phase === 'link' && (
        <section className="ops-panel link">
          <div className="eyebrow">CIRCUIT LINK</div>
          <h2>{tx(lang, copy.link)}</h2>
          <p className="muted">
            {fill(tx(lang, copy.next), {
              name: stepTitle(LOOP_STEPS.find((s) => s.id === PLAY_ORDER[nextIdx]) ?? LOOP_STEPS[0], lang),
            })}
          </p>
          <div className="circuit">
            <div className="circuit-line" aria-hidden />
            {nodes.map((id, i) => {
              const done = PLAY_ORDER.indexOf(id) < nextIdx
              const active = PLAY_ORDER[nextIdx] === id
              const step = LOOP_STEPS.find((s) => s.id === id) ?? LOOP_STEPS[0]
              return (
                <button
                  key={id}
                  type="button"
                  className={`circuit-node pos-${i} ${done ? 'done' : ''} ${active ? 'active' : ''} ${
                    pulseId === id ? (miss ? 'shake' : 'pulse') : ''
                  }`}
                  onClick={() => hitNode(id)}
                >
                  <span className="dot" />
                  <span className="lab">{stepTitle(step, lang)}</span>
                </button>
              )
            })}
          </div>
          {miss && <p className="play-msg bad">{tx(lang, copy.miss)}</p>}
        </section>
      )}

      {phase === 'win' && (
        <section className="ops-panel win">
          <Confetti />
          <div className="eyebrow">MISSION COMPLETE</div>
          <h2>{tx(lang, copy.win)}</h2>
          <p>{tx(lang, copy.winLead)}</p>
          <div className="cta-row">
            <a className="btn btn-primary" href={AGENT_URL} target="_blank" rel="noreferrer">
              <IconZap size={16} /> {tx(lang, UI.try.open)}
            </a>
            <Link className="btn btn-ghost" to="/try">
              {tx(lang, copy.about)}
            </Link>
            <button type="button" className="btn btn-ghost" onClick={restart}>
              {tx(lang, copy.again)}
            </button>
          </div>
        </section>
      )}
    </>
  )
}
