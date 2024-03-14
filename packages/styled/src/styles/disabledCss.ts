import { css } from 'styled-components'

export const disabledCss = css`
  :disabled,
  [aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
    cursor: default;
  }
`
