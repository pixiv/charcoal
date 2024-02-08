import { css } from 'styled-components'

/**
 * `&:focus:not(:focus-visible)` is backwards compatibility for legacy browsers.
 *
 * cf. https://github.com/WICG/focus-visible#backwards-compatibility
 */
export const focusVisibleFocusRingCss = css`
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
  }
  &:focus:not(:focus-visible) {
    box-shadow: none;
  }
  &:focus-visible {
    box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
  }
`
