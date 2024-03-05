import { Spacing } from '@charcoal-ui/theme'
import { css } from 'styled-components'
import { pxIfNum } from './helpers/pxIfNum'

export function gap(v1: keyof Spacing, v2?: keyof Spacing) {
  return css`
    gap: ${pxIfNum(v1)} ${pxIfNum(v2)};
  `
}

export function rowGap(v: keyof Spacing) {
  return css`
    row-gap: ${pxIfNum(v)};
  `
}

export function columnGap(v: keyof Spacing) {
  return css`
    column-gap: ${pxIfNum(v)};
  `
}
