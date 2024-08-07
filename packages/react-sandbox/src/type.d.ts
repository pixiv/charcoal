import { ThemeProp } from '@charcoal-ui/styled'
import { CharcoalTheme } from '@charcoal-ui/theme'
import { DefaultTheme, Interpolation } from 'styled-components'

declare module 'react' {
  interface Attributes {
    css?: Interpolation<DefaultTheme> | ThemeProp<DefaultTheme>
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends CharcoalTheme {}
}
