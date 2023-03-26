import { Material } from '@charcoal-ui/foundation'
import { CharcoalTheme } from '@charcoal-ui/theme'

export type MyTheme = CharcoalTheme & {
  color: {
    mycolor: Material
  }
}

export function myTheme(theme: CharcoalTheme): MyTheme {
  return {
    ...theme,
    color: {
      ...theme.color,
      mycolor: '#ff9e8c',
    },
  }
}
