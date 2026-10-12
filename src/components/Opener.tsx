import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { SITE } from '../data/site'

/**
 * 开场序列主题：
 *  'dark'  = 近黑深蓝底 + 冷光（开场冲击最强，揭幕瞬间与明亮首屏形成明暗逆转）
 *  'light' = 浅色底（与全站浅色完全一致，走"精密"而非"压迫"）
 * 改这一处即可整体切换，两套样式都已就位。
 */
const THEME: 'dark' | 'light' = 'dark'

/** 每个会话只播一次。改版开场动画时请升版本号。 */
const SEEN_KEY = 'spark.opener.v1'

/** 开发环境每次刷新都播（方便反复看效果）；生产构建里每会话只播一次。 */
const ALWAYS_PLAY = import.meta.env.DEV

/** 强制重播：URL 带 `?opener=1` 或 `#opener` 时忽略「已看过」记录。 */
const FORCE_PARAM = 'opener'

/** 页脚「重播开场」等外部入口派发此事件即可重播。 */
export const REPLAY_EVENT = 'spark:replay-opener'

export function replayOpener() {
  window.dispatchEvent(new Event(REPLAY_EVENT))
}

/** 移动端整体提速倍率：扫码进来的评委不该等。 */
const COMPACT_RATE = 0.62
const COMPACT_MAX_WIDTH = 700

/** 时间轴节点（毫秒，未乘倍率） */
const T_START = 860
const T_PROGRESS_MS = 1250
const T_LEAVE = 2250
const LEAVE_MS = 880

type Phase = 'boot' | 'play' | 'leave' | 'gone'

const CHARS = Array.from(SITE.name)

function prefersReduce() {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

function forced() {
  try {
    const { search, hash } = window.location
    return (
      new URLSearchParams(search).get(FORCE_PARAM) === '1' ||
      hash === `#${FORCE_PARAM}`
    )
  } catch {
    return false
  }
}

function alreadySeen() {
  if (ALWAYS_PLAY || forced()) return false
  try {
    return window.sessionStorage.getItem(SEEN_KEY) === '1'
  } catch {
    // 隐私模式 / 禁用存储：当作未看过，但也不会崩
    return false
  }
}

/**
 * 开场序列：光束掠过 → 品牌字标逐字从遮罩升起 → 程序化进度条 → 整屏上滑揭幕。
 * 通过 `html[data-stage]` 把节奏交给 CSS，首屏各元素的进场由 `.rv` / `.rv-line` 承担，
 * 因此首页组件不需要感知开场状态。
 */
export function Opener() {
  const [phase, setPhase] = useState<Phase>('boot')
  const [pct, setPct] = useState(0)
  const [compact] = useState(
    () => typeof window !== 'undefined' && window.innerWidth <= COMPACT_MAX_WIDTH,
  )
  const timers = useRef<number[]>([])
  const raf = useRef(0)
  const started = useRef(false)

  const rate = compact ? COMPACT_RATE : 1

  /** 交给样式层的时间轴倍率，稳定引用避免进度刷新时重设自定义属性 */
  const rootStyle = useMemo(() => ({ '--rate': String(rate) }) as CSSProperties, [rate])

  const clearAll = useCallback(() => {
    timers.current.forEach((id) => window.clearTimeout(id))
    timers.current = []
    if (raf.current) window.cancelAnimationFrame(raf.current)
    raf.current = 0
  }, [])

  /* 挂载：决定是播开场还是直接揭幕（不闪烁，layout effect 在首次绘制前执行） */
  useLayoutEffect(() => {
    if (started.current) return
    started.current = true
    if (prefersReduce() || alreadySeen()) {
      document.documentElement.dataset.stage = 'reveal'
      setPhase('gone')
      return
    }
    document.documentElement.dataset.stage = 'boot'
    setPhase('play')
  }, [])

  /* 播放阶段：进度条 + 离场 */
  useEffect(() => {
    if (phase !== 'play') return
    clearAll()
    const at = (ms: number, fn: () => void) => {
      timers.current.push(window.setTimeout(fn, Math.round(ms * rate)))
    }

    at(T_START, () => {
      const dur = T_PROGRESS_MS * rate
      const t0 = performance.now()
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / dur)
        setPct(Math.round(p * 100))
        if (p < 1) raf.current = window.requestAnimationFrame(tick)
      }
      raf.current = window.requestAnimationFrame(tick)
    })

    at(T_LEAVE, () => setPhase('leave'))
    return clearAll
  }, [phase, rate, clearAll])

  /* 播放 / 离场期间锁滚动；补偿滚动条宽度，避免锁定与解锁瞬间页面横向跳动 */
  useEffect(() => {
    if (phase !== 'play' && phase !== 'leave') return
    const body = document.body
    const prevOverflow = body.style.overflow
    const prevPadding = body.style.paddingRight
    const gap = window.innerWidth - document.documentElement.clientWidth
    body.style.overflow = 'hidden'
    if (gap > 0) body.style.paddingRight = `${gap}px`
    return () => {
      body.style.overflow = prevOverflow
      body.style.paddingRight = prevPadding
    }
  }, [phase])

  useEffect(() => {
    if (phase !== 'leave') return
    document.documentElement.dataset.stage = 'reveal'
    try {
      window.sessionStorage.setItem(SEEN_KEY, '1')
    } catch {
      /* 忽略 */
    }
    const id = window.setTimeout(() => setPhase('gone'), LEAVE_MS)
    return () => window.clearTimeout(id)
  }, [phase])

  /* 重播入口：页脚按钮 / 快捷键派发事件即可从头再播一次（已播完也有效） */
  useEffect(() => {
    const replay = () => {
      clearAll()
      setPct(0)
      document.documentElement.dataset.stage = 'boot'
      setPhase('play')
    }
    window.addEventListener(REPLAY_EVENT, replay)
    return () => window.removeEventListener(REPLAY_EVENT, replay)
  }, [clearAll])

  const skip = useCallback(() => {
    clearAll()
    setPct(100)
    setPhase((p) => (p === 'play' ? 'leave' : p))
  }, [clearAll])

  if (phase === 'gone') return null

  return (
    <div
      className={`opener o-${THEME} is-${phase}`}
      role="presentation"
      style={rootStyle}
    >
      <span className="opener-beam" aria-hidden />
      <span className="opener-gridline" aria-hidden />

      <div className="opener-inner">
        <div className="opener-brand" role="img" aria-label={SITE.name}>
          {CHARS.map((ch, i) => (
            <span className="ob-mask" key={`${ch}-${i}`} aria-hidden>
              <i
                className="ob-ch"
                style={{
                  animationDelay: `${Math.round((320 + i * 55) * rate)}ms`,
                }}
              >
                {ch}
              </i>
            </span>
          ))}
        </div>

        <p className="opener-meta">
          <span>{SITE.cup}</span>
          <u aria-hidden>·</u>
          <span>队名 {SITE.team}</span>
          <u aria-hidden>·</u>
          <span>作品展示站</span>
        </p>

        <div
          className="opener-bar-wrap"
          style={{ animationDelay: `${Math.round(T_START * rate)}ms` }}
        >
          <span className="opener-bar">
            <i style={{ transform: `scaleX(${pct / 100})` }} />
          </span>
          <span className="opener-pct">{String(pct).padStart(3, '0')}</span>
        </div>
      </div>

      <button className="opener-skip" type="button" onClick={skip}>
        跳过开场
      </button>
    </div>
  )
}
