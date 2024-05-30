import { TextFieldProps } from '@charcoal-ui/react'
import { ApiTableData } from '../_components/ApiTable'

export const apiData: Omit<
  ApiTableData<TextFieldProps, HTMLInputElement>,
  keyof React.HTMLProps<HTMLInputElement> | 'enterKeyHint'
> = {
  assistiveText: {
    description: 'エラーのテキスト',
    type: 'string',
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
  getCount: {
    description: 'textの長さを計算する関数',
    type: '(value: string) => number',
  },
  rdfaPredix: {
    description: 'input要素のprefix',
    type: 'string',
  },
}
