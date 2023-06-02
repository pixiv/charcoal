import { ButtonProps } from '@charcoal-ui/react'
import { ApiTableData } from '../_components/ApiTable'
import { toEnum } from '../_utils/toEnum'
import { sizies } from './sizies'
import { variants } from './variants'

// TODO: remove Partial
export const apiData: Partial<ApiTableData<ButtonProps, HTMLButtonElement>> = {
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
    type: toEnum(sizies),
    default: '"M"',
  },
  as: {
    description: 'buttonとして使うコンポーネント',
    type: `keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>`,
    default: 'button',
  },
}
