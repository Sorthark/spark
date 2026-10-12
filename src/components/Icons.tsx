type IconProps = { size?: number; className?: string }

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function IconLoop({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <path {...stroke} d="M3 12a9 9 0 1 0 3-6.7" />
      <path {...stroke} d="M3 4v5h5" />
    </svg>
  )
}

export function IconVideo({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <rect {...stroke} x="3" y="6" width="13" height="12" rx="2" />
      <path {...stroke} d="M16 10l5-3v10l-5-3z" />
    </svg>
  )
}

export function IconFilm({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <rect {...stroke} x="2.5" y="5" width="19" height="14" rx="2" />
      <path {...stroke} d="M7.5 5v14M16.5 5v14M2.5 9.5h5M2.5 14.5h5M16.5 9.5h5M16.5 14.5h5" />
    </svg>
  )
}

export function IconPlay({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <circle {...stroke} cx="12" cy="12" r="9" />
      <path {...stroke} d="M10 8l6 4-6 4z" />
    </svg>
  )
}

export function IconBiz({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <path {...stroke} d="M4 19V9l8-4 8 4v10" />
      <path {...stroke} d="M9 19v-6h6v6" />
    </svg>
  )
}

export function IconUsers({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <circle {...stroke} cx="9" cy="8" r="3" />
      <circle {...stroke} cx="17" cy="9" r="2.5" />
      <path {...stroke} d="M3 19c1.5-3 4-4.5 6-4.5S13.5 16 15 19" />
      <path {...stroke} d="M14 14.5c1.5 0 3.2.8 4.5 2.5" />
    </svg>
  )
}

export function IconZap({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <path {...stroke} d="M13 2L4 14h7l-1 8 10-14h-7l1-6z" />
    </svg>
  )
}

export function IconCpu({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <rect {...stroke} x="7" y="7" width="10" height="10" rx="1.5" />
      <path {...stroke} d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />
    </svg>
  )
}

export function IconHome({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <path {...stroke} d="M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z" />
    </svg>
  )
}

export function IconTeam({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <circle {...stroke} cx="12" cy="8" r="3.5" />
      <path {...stroke} d="M5 20c1.8-3.5 4.2-5 7-5s5.2 1.5 7 5" />
    </svg>
  )
}

export function IconLayers({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <path {...stroke} d="M12 3l9 5-9 5-9-5 9-5z" />
      <path {...stroke} d="M3 13l9 5 9-5" />
    </svg>
  )
}

export function IconSpark({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <path {...stroke} d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path {...stroke} d="M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />
      <circle {...stroke} cx="12" cy="12" r="2.4" />
    </svg>
  )
}
