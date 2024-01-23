import { unreachable } from '../../../_lib'
import type { Variant } from '..'

export function variantToBackground(variant: Variant) {
  switch (variant) {
    case 'Overlay':
      return 'surface4'
    case 'Default':
      return 'surface3'
    case 'Primary':
      return 'brand'
    case 'Navigation':
      return 'surface6'
    case 'Danger':
      return 'assertive'
    default:
      return unreachable(variant)
  }
}
