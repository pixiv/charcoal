import { Material } from '@charcoal-ui/foundation'
import { CharcoalTheme } from '@charcoal-ui/theme'
import { CharcoalThemeUtils } from './utils/CharcoalStyledTheme'
import { addThemeUtils } from './utils/addThemeUtils'

export type MyTheme = CharcoalTheme &
  CharcoalThemeUtils & {
    color: {
      mycolor: Material
    }
  }

export function myTheme(theme: CharcoalTheme): MyTheme {
  return {
    ...addThemeUtils(theme),
    color: {
      ...theme.color,
      mycolor: '#ff9e8c',
    },
  }
}
