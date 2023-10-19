import { ModalProps, PopoverProps } from '@charcoal-ui/react'
import { ApiTableData, TableItem } from '../_components/ApiTable'

export const apiData: Omit<
  ApiTableData<PopoverProps, HTMLDivElement>,
  'type' | 'value' | 'isKeyboardDismissDisabled'
> = {
  isOpen: {
    description: '開いているかどうか',
    type: 'boolean',
    required: true,
  },
  onClose: {
    description: '閉じる際のイベント',
    type: '() => void',
    required: true,
  },
  triggerRef: {
    description: 'トリガーとなるref',
    type: 'RefObject<Element>',
    required: true,
  },
  placement: {
    description: '配置方向',
    type: `'bottom' | 'bottom left' | 'bottom right' | 'top' | 'top left' | 'top right'`,
    required: true,
  },
}
