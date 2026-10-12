import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AGENT_URL, LOOP_CHAIN_EN, LOOP_CN, PLAY_CARDS, PLAY_ORDER } from '../data/site'
import { IconCpu, IconPlay, IconZap } from '../components/Icons'

type Phase = 'boot' | 'swarm' | 'link' | 'win'

/** 五大痛点 · 口径对齐答辩稿 V6 第 03 页（资料分散 / 重点不明 / 缺少诊断 / 无法续接 / 语言障碍） */
const PAINS = [
  { id: 'scatter', label: '资料分散' },
  { id: 'priority', label: '重点不明' },
  { id: 'nodiag', label: '缺少诊断' },
  { id: 'resume', label: '无法续接' },
  { id: 'lang', label: '语言障碍' },
]

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
  const [phase, setPhase] = useState<Phase>('boot')
  const [bootPct, setBootPct] = useState(0)
  const [caught, setCaught] = useState<string[]>([])
  const [swarmLeft, setSwarmLeft] = useState(12)
  const [nodes, setNodes] = useState(() => shuffle(PLAY_CARDS))
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
    setNodes(shuffle(PLAY_CARDS))
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
        <h1>考前急救指挥台</h1>
        <p>三阶段动态关卡：系统启动 → 捕获痛点 → 点亮闭环链路。通关解锁星辰 Agent。</p>
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
            <h2>正在装载课程资料通道…</h2>
            <p className="muted">{LOOP_CHAIN_EN}</p>
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
              <h2>点掉飘动的痛点（至少 3 个）</h2>
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
                {p.label}
              </button>
            ))}
            <div className="scanline" aria-hidden />
          </div>
          <p className="muted">已捕获 {caught.length}/3 · Combo ×{combo}</p>
        </section>
      )}

      {phase === 'link' && (
        <section className="ops-panel link">
          <div className="eyebrow">CIRCUIT LINK</div>
          <h2>按闭环顺序点亮节点</h2>
          <p className="muted">下一目标：{PLAY_CARDS.find((c) => c.id === PLAY_ORDER[nextIdx])?.label}</p>
          <div className="circuit">
            <div className="circuit-line" aria-hidden />
            {nodes.map((n, i) => {
              const done = PLAY_ORDER.indexOf(n.id) < nextIdx
              const active = PLAY_ORDER[nextIdx] === n.id
              return (
                <button
                  key={n.id}
                  type="button"
                  className={`circuit-node pos-${i} ${done ? 'done' : ''} ${active ? 'active' : ''} ${
                    pulseId === n.id ? (miss ? 'shake' : 'pulse') : ''
                  }`}
                  onClick={() => hitNode(n.id)}
                >
                  <span className="dot" />
                  <span className="lab">{n.label}</span>
                </button>
              )
            })}
          </div>
          {miss && <p className="play-msg bad">链路错误，连击清空。按正确顺序重试。</p>}
        </section>
      )}

      {phase === 'win' && (
        <section className="ops-panel win">
          <Confetti />
          <div className="eyebrow">MISSION COMPLETE</div>
          <h2>闭环已点亮 · 可以上真机</h2>
          <p>痛点已锁定，{LOOP_CN}环节链路已连通。把本人资料丢进星辰 Agent，跑同一套闭环。</p>
          <div className="cta-row">
            <a className="btn btn-primary" href={AGENT_URL} target="_blank" rel="noreferrer">
              <IconZap size={16} /> 打开星辰 Agent
            </a>
            <Link className="btn btn-ghost" to="/try">
              体验页说明
            </Link>
            <button type="button" className="btn btn-ghost" onClick={restart}>
              再玩一轮
            </button>
          </div>
        </section>
      )}
    </>
  )
}
