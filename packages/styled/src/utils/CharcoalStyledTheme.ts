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
import { columnGap, gap, rowGap } from './gap'
import { disabledCss } from '../styles/disabledCss'
import { typography } from './typographyCss'
import { focusVisibleFocusRingCss } from '../styles/focusVisibleFocusRingCss'
import { assertiveRingCss } from '../styles/assertiveRingCss'

export type CharcoalThemeUtils = {
  utils: {
    margin: typeof margin
    marginTop: typeof marginTop
    marginLeft: typeof marginLeft
    marginBottom: typeof marginBottom
    marginRight: typeof marginRight
    padding: typeof padding
    paddingTop: typeof paddingTop
    paddingLeft: typeof paddingLeft
    paddingBottom: typeof paddingBottom
    paddingRight: typeof paddingRight
    gap: typeof gap
    rowGap: typeof rowGap
    columnGap: typeof columnGap
    typography: typeof typography
    /**
     * Generally use with `transition: 0.2s box-shadow`.
     */
    focusVisibleFocusRingCss: typeof focusVisibleFocusRingCss
    /**
     * Generally use with `transition: 0.2s box-shadow`.
     */
    assertiveRingCss: typeof assertiveRingCss
    disabledCss: typeof disabledCss
  }
}
