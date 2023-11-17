import { Config } from 'tailwindcss'

const colors = {
  surface: [1, 2, 3, 4, 6, 7, 8, 9, 10] as const,
  text: [1, 2, 3, 4, 5] as const,
  background: [1, 2] as const,
  link: [1, 2] as const,
  brand: true,
  assertive: true,
  warning: true,
  success: true,
  border: true,
} satisfies {
  [key in string]: true | readonly number[] | `#${string}`
}

function toCharcoalCssVar(name: string) {
  return `var(--charcoal-${name})`
}

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/@charcoal-ui/tailwind-react/dist/**/*.js',
  ],
  theme: {
    /**
     * text1: var(--charcoal-text1),
     * text2: var(--charcoal-text2),
     * ...
     */
    colors: {
      ...(Object.keys(colors) as (keyof typeof colors)[]).reduce(
        (acc, current) => {
          const value = colors[current]
          if (value === true) {
            acc[current] = toCharcoalCssVar(current)
            const nameWithHover = `${current}-hover` as const
            const nameWithPress = `${current}-press` as const
            acc[nameWithHover] = toCharcoalCssVar(nameWithHover)
            acc[nameWithPress] = toCharcoalCssVar(nameWithPress)
          } else if (typeof value === 'string') {
            acc[current] = toCharcoalCssVar(current)
          } else {
            value.map((n) => {
              const name = `${current}${n}` as const
              acc[name] = toCharcoalCssVar(name)
              if (
                current === 'text' ||
                current === 'link' ||
                current === 'surface'
              ) {
                const nameWithHover = `${current}${n}-hover` as const
                const nameWithPress = `${current}${n}-press` as const
                acc[nameWithHover] = toCharcoalCssVar(nameWithHover)
                acc[nameWithPress] = toCharcoalCssVar(nameWithPress)
              }
            })
          }
          return acc
        },
        {} as {
          [key in keyof typeof colors as `${key}${number | ''}${
            | '-hover'
            | '-press'
            | ''}`]: string
        }
      ),
    },
    borderRadius: {
      full: '9999px',
    },
    boxShadow: {
      focus: '0 0 0 4px rgba(0,150,250,0.32)',
      invalid: '0 0 0 4px rgba(255,43,0,0.32)',
    },
  },
  corePlugins: {
    // https://tailwindcss.com/docs/preflight#disabling-preflight
    preflight: false,
    // https://tailwindcss.com/docs/animation
    animation: false,
    // https://tailwindcss.com/docs/container
    container: false,
    // https://tailwindcss.com/docs/box-shadow
    boxShadow: false,
    // https://tailwindcss.com/docs/ring-width
    // https://tailwindcss.com/docs/ring-color
    // https://tailwindcss.com/docs/ring-offset-width
    // https://tailwindcss.com/docs/ring-offset-color
    ringColor: false,
    ringWidth: false,
    ringOffsetWidth: false,
    ringOffsetColor: false,
  },
  plugins: [],
} satisfies Config
