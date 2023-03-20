import { ModalProps } from '@charcoal-ui/react'
import { ApiTableData, TableItem } from '../_components/ApiTable'

export const apiData: Omit<
  ApiTableData<ModalProps, HTMLDivElement>,
  'type' | 'value' | 'isKeyboardDismissDisabled'
> & { title: TableItem } = {
  title: {
    default: '',
    description: 'タイトル',
    required: true,
    type: 'string',
  },
  bottomSheet: {
    default: 'false',
    description: 'モバイル向けに下からシート形式で表示するかどうか、"full"だと画面の高さいっぱいに表示される',
    required: false,
    type: 'boolean | "full"',
  },
  isDismissable: {
    default: 'false',
    description:
      'バツボタンを表示しモーダルを閉じれるようにする、モーダルの背景をクリックすることで閉じれるようにする',
    required: false,
    type: 'boolean',
  },
  isOpen: {
    default: '',
    description: 'モーダルの開閉状態',
    required: true,
    type: 'boolean',
  },
  onClose: {
    default: '',
    description:
      'バツボタンやオーバーレイをクリックした際や、ESCキーを押した際に呼ばれる関数',
    required: true,
    type: '() => void',
  },
  portalContainer: {
    default: '',
    description: 'Next.jsで使用する際はdocument.bodyを渡す',
    required: false,
    type: 'HTMLElement',
  },
  size: {
    default: '"M"',
    description: 'モーダルのサイズ',
    required: false,
    type: `"S" | "M" | "L"`,
  },
  zIndex: {
    default: '',
    description: 'z-index',
    required: false,
    type: 'number',
  },
}
