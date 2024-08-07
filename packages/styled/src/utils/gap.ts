import { Spacing } from '@charcoal-ui/theme'
import { css, RuleSet } from 'styled-components'
import { pxIfNum } from './helpers/pxIfNum'

export function gap(v1: keyof Spacing): RuleSet

export function gap(
  v1: keyof Spacing,
  v2: keyof Spacing
): RuleSet

export function gap(v1: keyof Spacing, v2?: keyof Spacing) {
  return css`
    gap: ${v1}px ${pxIfNum(v2)};
  `
}

export function rowGap(v: keyof Spacing) {
  return css`
    row-gap: ${v}px;
  `
}

export function columnGap(v: keyof Spacing) {
  return css`
    column-gap: ${v}px;
  `
}
