import { Spacing } from '@charcoal-ui/theme'
import { css, FlattenSimpleInterpolation } from 'styled-components'
import { pxIfNum } from './helpers/pxIfNum'

export function padding(arg1: keyof Spacing): FlattenSimpleInterpolation

export function padding(
  arg1: keyof Spacing,
  arg2: keyof Spacing,
): FlattenSimpleInterpolation

export function padding(
  arg1: keyof Spacing,
  arg2: keyof Spacing,
  arg3: keyof Spacing,
): FlattenSimpleInterpolation

export function padding(
  arg1: keyof Spacing,
  arg2: keyof Spacing,
  arg3: keyof Spacing,
  arg4: keyof Spacing,
): FlattenSimpleInterpolation

export function padding(
  arg1: keyof Spacing,
  arg2?: keyof Spacing,
  arg3?: keyof Spacing,
  arg4?: keyof Spacing,
) {
  return css`
    padding: ${arg1}px ${pxIfNum(arg2)} ${pxIfNum(arg3)} ${pxIfNum(arg4)};
  `
}

export function paddingTop(v: keyof Spacing) {
  return css`
    padding-top: ${v}px;
  `
}

export function paddingBottom(v: keyof Spacing) {
  return css`
    padding-bottom: ${v}px;
  `
}

export function paddingLeft(v: keyof Spacing) {
  return css`
    padding-left: ${v}px;
  `
}

export function paddingRight(v: keyof Spacing) {
  return css`
    padding-right: ${v}px;
  `
}
