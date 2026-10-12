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

export function IconGithub({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.9c.85 0 1.71.12 2.51.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.59.69.48A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"
      />
    </svg>
  )
}
