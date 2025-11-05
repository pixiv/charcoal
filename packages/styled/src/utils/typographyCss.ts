import { css } from 'styled-components'

const boldCss = css`
  font-weight: bold;
`

export const removeHalfLeadingCss = css`
  &::before {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-top: -4px;
  }

  &::after {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-bottom: -4px;
  }
`

export function typography(
  size: 12 | 14 | 16 | 20,
  bold = false,
  preserveHalfLeading = false,
) {
  const cssObj = css`
    font-size: ${size}px;
    line-height: ${size + 8}px;
    display: flow-root;
    ${bold === true && boldCss}
    ${preserveHalfLeading !== true && removeHalfLeadingCss}
  `

  return cssObj
}
