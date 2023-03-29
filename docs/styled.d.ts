// styled-components.com/docs/api#create-a-declarations-file
import {} from 'styled-components/cssprop'

import { Theme } from '@charcoal-ui/theme'

import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
