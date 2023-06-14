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
  required: {
    default: 'false',
    description: '入力必須か',
    type: 'boolean',
  },
  autoFocus: {
    default: 'false',
    description: 'オートフォーカスをするか',
    type: 'boolean',
  },
  requiredText: {
    default: '',
    description: '必須を示すのテキスト',
    type: 'string',
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
