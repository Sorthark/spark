import { useEffect, useState } from 'react'

type Props = {
  /** 实机截图帧，按顺序轮播 */
  shots: string[]
  /** 窗口标题栏文字，例如「期末速通官 · 实机运行」 */
  label: string
  /** 底部说明，通常是来源口径 */
  caption?: string
  /** 轮播间隔（毫秒） */
  interval?: number
  className?: string
}

/**
 * 实机演示窗口：把真实录屏抽帧做成自动轮播的「运行中」画面。
 * 纯 React state + CSS 过渡，无外部依赖；尊重 prefers-reduced-motion。
 */
export function DemoWindow({
  shots,
  label,
  caption,
  interval = 3200,
  className = '',
}: Props) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  // 语种/素材切换时回到首帧
  useEffect(() => {
    setIndex(0)
  }, [shots[0]])

  useEffect(() => {
    if (paused || shots.length < 2) return
    if (typeof window !== 'undefined' && window.matchMedia) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    }
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % shots.length)
    }, interval)
    return () => window.clearInterval(timer)
  }, [paused, shots, interval])

  if (!shots.length) return null

  return (
    <figure
      className={`demo-window ${className}`.trim()}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="demo-bar">
        <span className="demo-dots" aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <span className="demo-label">{label}</span>
        <span className="demo-live">
          <span className="pulse-dot" />
          实机
        </span>
      </div>

      <div className="demo-frame">
        {shots.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${label} 第 ${i + 1} 帧`}
            className={i === index ? 'is-on' : ''}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        ))}
      </div>

      <figcaption className="demo-cap">
        <span className="demo-caption-text">{caption}</span>
        {shots.length > 1 && (
          <span className="demo-pager" role="tablist" aria-label="演示帧">
            {shots.map((src, i) => (
              <button
                key={src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`第 ${i + 1} 帧`}
                className={i === index ? 'on' : ''}
                onClick={() => setIndex(i)}
              />
            ))}
          </span>
        )}
      </figcaption>
    </figure>
  )
}
