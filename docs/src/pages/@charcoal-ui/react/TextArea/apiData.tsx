import { TextAreaProps } from '@charcoal-ui/react'
import { TableItem } from '../_components/ApiTable'

export const apiData: Omit<
  Record<
    Exclude<
      keyof TextAreaProps,
      keyof React.InputHTMLAttributes<HTMLTextAreaElement>
    >,
    TableItem
  >,
  'type' | 'value' | 'cols' | 'dirName' | 'wrap'
> = {
  label: {
    default: '',
    description: 'ラベル',
    required: true,
    type: 'string',
  },
  assistiveText: {
    description: 'エラーのテキスト',
    type: 'string',
  },
  autoHeight: {
    default: 'false',
    description: '高さを自動で変える',
    type: 'boolean',
  },
  invalid: {
    default: 'false',
    description: '入力が不正か',
    type: 'boolean',
  },
  requiredText: {
    default: '',
    description: '必須を示すのテキスト',
    type: 'string',
  },
  rows: {
    default: '',
    description: '表示する行数、multilineのみ有効',
    type: 'number',
  },
  showCount: {
    default: 'false',
    description: '入力文字数の表示',
    type: 'boolean',
  },
  showLabel: {
    default: 'false',
    description: 'ラベルの表示',
    type: 'boolean',
  },
  subLabel: {
    description: '右側に表示されるラベル',
    type: 'string',
  },
}
