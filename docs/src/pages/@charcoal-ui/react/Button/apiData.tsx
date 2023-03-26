import { ButtonProps } from '@charcoal-ui/react'
import { ApiTableData } from '../_components/ApiTable'
import { toEnum } from '../_utils/toEnum'
import { sizies } from './sizies'
import { variants } from './variants'

export const apiData: Omit<
  ApiTableData<ButtonProps, HTMLButtonElement>,
  'type'
> = {
  variant: {
    description: '色の種類',
    type: toEnum(variants),
    default: 'Default',
    required: false,
  },
  disabled: {
    description: 'ボタンの無効化',
    type: 'boolean',
    default: 'false',
    required: false,
  },
  fixed: {
    description: '幅を最大まで広げる',
    type: 'boolean',
    default: 'false',
    required: false,
  },
  size: {
    description: 'ボタンの大きさ',
    type: toEnum(sizies),
    default: '"M"',
    required: false,
  },
}
