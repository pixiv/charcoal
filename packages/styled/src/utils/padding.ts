import { css, FlattenSimpleInterpolation } from 'styled-components'
import { SpacingType } from './helpers/SpacingType'
import { pxIfNum } from './helpers/pxIfNum'

export function padding(arg1: SpacingType): FlattenSimpleInterpolation

export function padding(
  arg1: SpacingType,
  arg2: SpacingType
): FlattenSimpleInterpolation

export function padding(
  arg1: SpacingType,
  arg2: SpacingType,
  arg3: SpacingType
): FlattenSimpleInterpolation

export function padding(
  arg1: SpacingType,
  arg2: SpacingType,
  arg3: SpacingType,
  arg4: SpacingType
): FlattenSimpleInterpolation

export function padding(
  arg1: SpacingType,
  arg2?: SpacingType,
  arg3?: SpacingType,
  arg4?: SpacingType
) {
  return css`
    padding: ${pxIfNum(arg1)} ${pxIfNum(arg2)} ${pxIfNum(arg3)} ${pxIfNum(arg4)};
  `
}

export function paddingTop(v: SpacingType) {
  return css`
    padding-top: ${pxIfNum(v)};
  `
}

export function paddingBottom(v: SpacingType) {
  return css`
    padding-bottom: ${pxIfNum(v)};
  `
}

export function paddingLeft(v: SpacingType) {
  return css`
    padding-left: ${pxIfNum(v)};
  `
}

export function paddingRight(v: SpacingType) {
  return css`
    padding-right: ${pxIfNum(v)};
  `
}
