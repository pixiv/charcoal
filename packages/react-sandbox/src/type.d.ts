import { ThemeProp } from '@charcoal-ui/styled'
import { CharcoalTheme } from '@charcoal-ui/theme'
import { CSSProp, DefaultTheme } from 'styled-components'

declare module 'react' {
  interface Attributes {
    css?: CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends CharcoalTheme {}
}
