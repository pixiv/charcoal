import { CharcoalTheme } from '@charcoal-ui/theme'
import { CharcoalThemeUtils } from './CharcoalStyledTheme'
import {
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
} from './margin'
import {
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
} from './padding'
import { gap } from './gap'
import { disabledCss } from '../styles/disabledCss'
import { typography } from './typographyCss'
import { focusVisibleFocusRingCss } from '../styles/focusVisibleFocusRingCss'
import { assertiveRingCss } from '../styles/assertiveRingCss'

/**
 * Adds some utilities to the theme object.
 * They can be used as an alternative `createTheme`(`theme(o=>)`) for styling.
 */
export function addThemeUtils(
  theme: CharcoalTheme
): CharcoalTheme & CharcoalThemeUtils {
  return {
    ...theme,
    utils: {
      margin,
      marginTop,
      marginLeft,
      marginBottom,
      marginRight,
      padding,
      paddingTop,
      paddingLeft,
      paddingBottom,
      paddingRight,
      gap,
      typography,
      focusVisibleFocusRingCss,
      assertiveRingCss,
      disabledCss,
    },
  }
}
