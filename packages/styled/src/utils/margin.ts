import { css, RuleSet } from 'styled-components'
import { SpacingType } from './helpers/SpacingType'
import { pxIfNum } from './helpers/pxIfNum'

export function margin(arg1: SpacingType): RuleSet

export function margin(arg1: SpacingType, arg2: SpacingType): RuleSet

export function margin(
  arg1: SpacingType,
  arg2: SpacingType,
  arg3: SpacingType
): RuleSet

export function margin(
  arg1: SpacingType,
  arg2: SpacingType,
  arg3: SpacingType,
  arg4: SpacingType
): RuleSet

export function margin(
  arg1: SpacingType,
  arg2?: SpacingType,
  arg3?: SpacingType,
  arg4?: SpacingType
) {
  return css`
    margin: ${pxIfNum(arg1)} ${pxIfNum(arg2)} ${pxIfNum(arg3)} ${pxIfNum(arg4)};
  `
}

export function marginTop(v: SpacingType) {
  return css`
    margin-top: ${pxIfNum(v)};
  `
}

export function marginBottom(v: SpacingType) {
  return css`
    margin-bottom: ${pxIfNum(v)};
  `
}

export function marginLeft(v: SpacingType) {
  return css`
    margin-left: ${pxIfNum(v)};
  `
}

export function marginRight(v: SpacingType) {
  return css`
    margin-right: ${pxIfNum(v)};
  `
}
