import { TextFieldProps } from '@charcoal-ui/react'
import { ApiTableData } from '../_components/ApiTable'

export const apiData: Omit<
  ApiTableData<TextFieldProps, HTMLInputElement>,
  'type' | 'value'
> = {
  label: {
    default: '',
    description: 'label',
    required: true,
    type: 'string',
  },
  assistiveText: {
    default: '',
    description: 'エラーのテキスト',
    required: false,
    type: 'string',
  },
  autoHeight: {
    default: 'false',
    description: '高さを自動で変える、multilineのみ有効',
    required: false,
    type: 'boolean',
  },
  disabled: {
    default: 'false',
    description: '無効にする',
    required: false,
    type: 'boolean',
  },
  excludeFromTabOrder: {
    default: 'false',
    description: 'deprecated',
    required: false,
    type: 'boolean',
  },
  invalid: {
    default: 'false',
    description: '不正な入力とする',
    required: false,
    type: 'boolean',
  },
  maxLength: {
    default: '',
    description: '入力できる最大値',
    required: false,
    type: 'number',
  },
  multiline: {
    default: 'false',
    description: '複数行の入力を可能にする textareaになる',
    required: false,
    type: 'boolean',
  },
  required: {
    default: 'false',
    description: '入力必須にする',
    required: false,
    type: 'boolean',
  },
  requiredText: {
    default: '',
    description: '必須のテキスト',
    required: false,
    type: 'string',
  },
  rows: {
    default: '',
    description: '表示する行数、multilineのみ有効',
    required: false,
    type: 'number',
  },
  showCount: {
    default: 'false',
    description: '入力文字数を表示する',
    required: false,
    type: 'boolean',
  },
  showLabel: {
    default: 'false',
    description: 'ラベルを表示する',
    required: false,
    type: 'boolean',
  },
  subLabel: {
    default: '',
    description: '右側に表示されるラベル',
    required: false,
    type: 'string',
  },
  suffix: {
    default: '',
    description: 'フィールドの末尾の要素、multilineでは無効',
    required: false,
    type: 'ReactNode',
  },
}
