import 'react'

// Also augment React's CSSProperties for direct usage
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined
  }
}
