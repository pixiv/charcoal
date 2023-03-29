import { IconButtonProps } from '@charcoal-ui/react'
import { ApiTableData } from '../_components/ApiTable'

export const apiData: Omit<
  ApiTableData<IconButtonProps, HTMLInputElement>,
  'type'
> = {
  disabled: {
    default: 'false',
    description: '無効かどうか',
    required: false,
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
    description:
      '大きさ、XSの場合は16px、Mの場合は24pxのアイコンのみ受け付けます',
    required: false,
    type: '"XS" | "S" | "M"',
  },
  variant: {
    default: '"Default"',
    description: '色',
    required: false,
    type: '"Default" | "Overlay"',
  },
}
