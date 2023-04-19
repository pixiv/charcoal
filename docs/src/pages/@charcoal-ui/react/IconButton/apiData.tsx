import { IconButtonProps } from '@charcoal-ui/react'
import { ApiTableData } from '../_components/ApiTable'

export const apiData: Omit<
  ApiTableData<IconButtonProps, HTMLInputElement>,
  'type'
> = {
  disabled: {
    default: 'false',
    description: '無効化',
    type: 'boolean',
  },
  icon: {
    default: '',
    description: 'アイコン',
    required: true,
    type: 'IconName',
  },
  size: {
    default: '"M"',
    description: '大きさ、XSの場合は16px、Mの場合は24pxのアイコンのみ使用可能',
    type: '"XS" | "S" | "M"',
  },
  variant: {
    default: '"Default"',
    description: 'スタイルの種類',
    type: '"Default" | "Overlay"',
  },
}
