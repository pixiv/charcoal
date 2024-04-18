import { CSSProp, DefaultTheme } from 'styled-components'
import { CharcoalTheme as Theme } from '@charcoal-ui/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | undefined
  }
  interface Attributes {
    css?: CSSProp<DefaultTheme>
  }
}
