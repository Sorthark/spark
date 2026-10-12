import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AGENT_URL, PLAY_CARDS, PLAY_ORDER } from '../data/site'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function PlayPage() {
  const initial = useMemo(() => shuffle(PLAY_CARDS), [])
  const [pool, setPool] = useState(initial)
  const [picked, setPick] = useState<typeof PLAY_CARDS>([])
  const [result, setResult] = useState<'idle' | 'ok' | 'bad'>('idle')

  function pick(id: (typeof PLAY_ORDER)[number]) {
    if (result === 'ok') return
    const card = pool.find((c) => c.id === id)
    if (!card) return
    setPool((p) => p.filter((c) => c.id !== id))
    setPick((p) => [...p, card])
    setResult('idle')
  }

  function undo() {
    if (!picked.length || result === 'ok') return
    const last = picked[picked.length - 1]
    setPick((p) => p.slice(0, -1))
    setPool((p) => [...p, last])
    setResult('idle')
  }

  function reset() {
    setPool(shuffle(PLAY_CARDS))
    setPick([])
    setResult('idle')
  }

  function check() {
    if (picked.length !== PLAY_ORDER.length) {
      setResult('bad')
      return
    }
    const ok = picked.every((c, i) => c.id === PLAY_ORDER[i])
    setResult(ok ? 'ok' : 'bad')
  }

  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">PLAY · 60s</div>
        <h1>考前急救：排出正确闭环</h1>
        <p>按真实产品顺序点选五步。通关后一键进入星辰 Agent——用玩法促进体验，而不是替代体验。</p>
      </header>

      <div className="play-board">
        <div>
          <div className="eyebrow" style={{ marginBottom: 10 }}>
            待选步骤（点击加入顺序）
          </div>
          <div className="play-pool">
            {pool.map((c) => (
              <button key={c.id} type="button" className="play-chip" onClick={() => pick(c.id)}>
                {c.label}
              </button>
            ))}
            {!pool.length && <span className="muted">已选完，点下方「检查顺序」</span>}
          </div>
        </div>

        <div>
          <div className="eyebrow" style={{ marginBottom: 10 }}>
            你的顺序
          </div>
          <ol className="play-picked">
            {picked.map((c, i) => (
              <li key={`${c.id}-${i}`}>
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                {c.label}
              </li>
            ))}
            {!picked.length && <li className="muted">从上方点选…</li>}
          </ol>
        </div>
      </div>

      <div className="cta-row" style={{ marginTop: 16 }}>
        <button type="button" className="btn btn-primary" onClick={check}>
          检查顺序
        </button>
        <button type="button" className="btn btn-ghost" onClick={undo}>
          撤销一步
        </button>
        <button type="button" className="btn btn-ghost" onClick={reset}>
          重来
        </button>
      </div>

      {result === 'bad' && (
        <p className="play-msg bad">还不对。提示：先识资料 → 地图 → 诊断 → 判分 → 补练。</p>
      )}
      {result === 'ok' && (
        <div className="play-win">
          <h2>通关！闭环顺序正确</h2>
          <p>下一步：把本人课程资料丢进智能体，让它按同一闭环帮你冲刺。</p>
          <div className="cta-row">
            <a className="btn btn-primary" href={AGENT_URL} target="_blank" rel="noreferrer">
              打开星辰 Agent
            </a>
            <Link className="btn btn-ghost" to="/try">
              体验页说明
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
