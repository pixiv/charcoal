import { css } from 'styled-components'
import { pxIfNum } from './helpers/pxIfNum'
import { SpacingType } from './helpers/SpacingType'

export function gap(v1: SpacingType, v2?: SpacingType) {
  return css`
    gap: ${pxIfNum(v1)} ${pxIfNum(v2)};
  `
}

export function rowGap(v: SpacingType) {
  return css`
    row-gap: ${pxIfNum(v)};
  `
}

export function columnGap(v: SpacingType) {
  return css`
    row-gap: ${pxIfNum(v)};
  `
}
