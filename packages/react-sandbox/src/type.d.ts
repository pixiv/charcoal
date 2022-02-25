import { ElementsTheme, ThemeProp } from '@charcoal/styled'
import { CSSProp, DefaultTheme } from 'styled-components'

declare module 'react' {
  interface Attributes {
    css?: CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends ElementsTheme {}
}
