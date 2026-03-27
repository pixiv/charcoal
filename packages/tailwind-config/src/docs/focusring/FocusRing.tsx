import type { CSSProperties } from 'react'

const itemStyle = {
  backgroundColor: 'var(--charcoal-color-background3, #f5f5f5)',
  borderRadius: 8,
  color: 'var(--charcoal-color-text2, #4f4f4f)',
  padding: '16px 24px',
} satisfies CSSProperties

export const FocusRing: React.FC = () => {
  return (
    <div className="flex flex-col gap-24 p-24 bg-background1">
      <div>
        <p className="typography-14 text-text2 mb-8">通常のフォーカス要素</p>
        <div className="charcoal-focus-ring" style={itemStyle} tabIndex={0}>
          Focus me
        </div>
      </div>

      <div>
        <p className="typography-14 text-text2 mb-8">{`aria-disabled="false"`}</p>
        <div
          aria-disabled="false"
          className="charcoal-focus-ring"
          style={itemStyle}
          tabIndex={0}
        >
          Focus me
        </div>
      </div>

      <div>
        <p className="typography-14 text-text2 mb-8">{`aria-disabled="true"`}</p>
        <div
          aria-disabled="true"
          className="charcoal-focus-ring"
          style={itemStyle}
          tabIndex={0}
        >
          No ring
        </div>
      </div>
    </div>
  )
}
