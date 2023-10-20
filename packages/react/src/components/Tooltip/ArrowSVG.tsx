import { memo } from 'react'

const size = 12

export const ArrowSVG = memo(function ArrowSVG(props: {
  left: string | number | undefined
  isBottom: boolean
}) {
  return (
    <svg
      style={{
        left: props.left,
        position: 'absolute',
        width: size,
        height: size,
        bottom: !props.isBottom ? -size : undefined,
        top: props.isBottom ? -size : undefined,
        transform: props.isBottom
          ? 'rotate(180deg) translateX(6px)'
          : 'translateX(-6px)',
      }}
      viewBox="0 0 12 12"
      fill="currentColor"
    >
      <path d="M0 0 L6 4 L12 0" />
    </svg>
  )
})
