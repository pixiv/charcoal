import { unreachable } from '../../../_lib'
import { Variant } from '..'

export function variantToFont(variant: Variant) {
  switch (variant) {
    case 'Overlay':
      return 'text5'
    case 'Default':
      return 'text2'
    case 'Primary':
      return 'text5'
    case 'Navigation':
      return 'text5'
    case 'Danger':
      return 'text5'
    default:
      return unreachable(variant)
  }
}
