import { Spacing } from '@charcoal-ui/theme'
import { css, FlattenSimpleInterpolation } from 'styled-components'
import { pxIfNum } from './helpers/pxIfNum'

export function padding(arg1: keyof Spacing): FlattenSimpleInterpolation

export function padding(
  arg1: keyof Spacing,
  arg2: keyof Spacing
): FlattenSimpleInterpolation

export function padding(
  arg1: keyof Spacing,
  arg2: keyof Spacing,
  arg3: keyof Spacing
): FlattenSimpleInterpolation

export function padding(
  arg1: keyof Spacing,
  arg2: keyof Spacing,
  arg3: keyof Spacing,
  arg4: keyof Spacing
): FlattenSimpleInterpolation

export function padding(
  arg1: keyof Spacing,
  arg2?: keyof Spacing,
  arg3?: keyof Spacing,
  arg4?: keyof Spacing
) {
  return css`
    padding: ${pxIfNum(arg1)} ${pxIfNum(arg2)} ${pxIfNum(arg3)} ${pxIfNum(arg4)};
  `
}

export function paddingTop(v: keyof Spacing) {
  return css`
    padding-top: ${pxIfNum(v)};
  `
}

export function paddingBottom(v: keyof Spacing) {
  return css`
    padding-bottom: ${pxIfNum(v)};
  `
}

export function paddingLeft(v: keyof Spacing) {
  return css`
    padding-left: ${pxIfNum(v)};
  `
}

export function paddingRight(v: keyof Spacing) {
  return css`
    padding-right: ${pxIfNum(v)};
  `
}
