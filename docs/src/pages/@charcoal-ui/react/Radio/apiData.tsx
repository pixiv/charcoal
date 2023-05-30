import { RadioGroupProps, RadioProps } from '@charcoal-ui/react'
import { ApiTableData } from '../_components/ApiTable'

export const apiDataRadio: ApiTableData<RadioProps, HTMLInputElement> = {
  disabled: {
    default: 'false',
    description: '無効化',
    type: 'boolean',
  },
  forceChecked: {
    default: 'false',
    description: '強制的なチェック',
    type: 'boolean',
  },
  value: {
    default: '',
    description: '選択肢の値',
    required: true,
    type: 'string',
  },
}
export const apiData: ApiTableData<RadioGroupProps, HTMLInputElement> = {
  label: {
    default: '',
    description: 'ラベル',
    required: true,
    type: 'string',
  },
  value: {
    default: '',
    description: '選択されている値',
    required: true,
    type: 'string',
  },
  disabled: {
    default: 'false',
    description: '無効化',
    type: 'boolean',
  },
  hasError: {
    default: 'false',
    description: '不正な入力化',
    type: 'boolean',
  },
  name: {
    default: '',
    description: 'inputタグに渡されるname',
    required: true,
    type: 'string',
  },
  readonly: {
    description: '読み取り専用化',
    type: 'string',
  },
}
