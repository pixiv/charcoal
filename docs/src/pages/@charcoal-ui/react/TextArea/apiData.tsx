import { TextAreaProps } from '@charcoal-ui/react'
import { ApiTableData } from '../_components/ApiTable'

export const apiData: Omit<
  ApiTableData<TextAreaProps, HTMLInputElement>,
  keyof React.HTMLProps<HTMLInputElement> | 'dirName'
> = {
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
  getCount: {
    description: 'textの長さを計算する関数',
    type: '(value: string) => number',
  },
}
