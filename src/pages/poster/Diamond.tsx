import type { CSSProperties } from 'react'

// The recurring motif from mockup 8a — a rotated square standing in for a bullet,
// a divider, or loose "confetti" scattered around the hero type.
export function Diamond({
  size = 12,
  color = '#f5b429',
  style,
}: {
  size?: number
  color?: string
  style?: CSSProperties
}) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        background: color,
        transform: 'rotate(45deg)',
        flexShrink: 0,
        ...style,
      }}
    />
  )
}
