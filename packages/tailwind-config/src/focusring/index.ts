import plugin from 'tailwindcss/plugin.js'
import { CSSRuleObject } from 'tailwindcss/types/config'

export const createFocusRingUtilities = (): {
  [key: string]: CSSRuleObject
} => ({
  '.charcoal-focus-ring': {
    "&:not(:disabled):not([aria-disabled]):focus-visible, &[aria-disabled='false']:focus-visible":
      {
        outline: 'none',
        boxShadow:
          '0 0 0 4px var(--charcoal-color-border-focus-legacy, rgba(0, 150, 250, 0.32))',
        transition: '0.2s box-shadow',
      },
  },
})

export const charcoalFocusRing: ReturnType<typeof plugin> = plugin(
  ({ addUtilities }) => {
    addUtilities(createFocusRingUtilities())
  },
)
