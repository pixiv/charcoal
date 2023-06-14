import { TextFieldProps } from '@charcoal-ui/react'
import { TableItem } from '../_components/ApiTable'

export const apiData: Omit<
  Record<
    Exclude<
      keyof TextFieldProps,
      keyof React.InputHTMLAttributes<HTMLInputElement>
    >,
    TableItem
  >,
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
  excludeFromTabOrder: {
    default: 'false',
    description: 'Tabキーを押したときにフォーカスの対象から除く',
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
