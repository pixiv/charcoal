import { TextFieldProps } from '@charcoal-ui/react'
import { ApiTableData } from '../_components/ApiTable'

export const apiData: Omit<
  ApiTableData<TextFieldProps, HTMLInputElement>,
  'type' | 'value'
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
    description: '高さを自動で変える、multilineのみ有効',
    type: 'boolean',
  },
  disabled: {
    default: 'false',
    description: '無効にする',
    type: 'boolean',
  },
  excludeFromTabOrder: {
    default: 'false',
    description: '(非推奨）',
    type: 'boolean',
  },
  invalid: {
    default: 'false',
    description: '入力の不正化',
    type: 'boolean',
  },
  maxLength: {
    default: '',
    description: '入力できる最大値',
    type: 'number',
  },
  multiline: {
    default: 'false',
    description: '複数行の入力の有効化、textareaになる',
    type: 'boolean',
  },
  required: {
    default: 'false',
    description: '入力必須化',
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
  suffix: {
    description: 'フィールドの末尾の要素、multilineでは無効',
    type: 'ReactNode',
  },
}
