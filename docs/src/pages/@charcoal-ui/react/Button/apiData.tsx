import { ButtonProps } from '@charcoal-ui/react'
import { ApiTableData } from '../_components/ApiTable'
import { toEnum } from '../_utils/toEnum'
import { sizes } from './sizes'
import { variants } from './variants'

export const apiData: Omit<
  ApiTableData<ButtonProps, HTMLButtonElement>,
  'type'
> = {
  variant: {
    description: '色の種類',
    type: toEnum(variants),
    default: '"Default"',
  },
  disabled: {
    description: 'ボタンの無効化',
    type: 'boolean',
    default: 'false',
  },
  fullWidth: {
    description: '幅の最大化',
    type: 'boolean',
    default: 'false',
  },
  size: {
    description: 'ボタンの大きさ',
    type: toEnum(sizes),
    default: '"M"',
  },
  isActive: {
    description: 'ボタンの押下状態',
    type: 'boolean',
    default: 'false',
  },
}
