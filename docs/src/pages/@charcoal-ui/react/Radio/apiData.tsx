import { RadioGroupProps, RadioProps } from '@charcoal-ui/react'
import { ApiTableData } from '../_components/ApiTable'

export const apiDataRadio: Partial<ApiTableData<RadioProps, HTMLInputElement>> =
  {
    disabled: {
      default: 'false',
      description: '無効化するかどうか',
      required: false,
      type: 'boolean',
    },
    forceChecked: {
      default: 'false',
      description: '強制的に有効にするかどうか',
      required: false,
      type: 'boolean',
    },
    value: {
      default: '',
      description: '選択肢の値',
      required: true,
      type: 'string',
    },
  }
export const apiData: Partial<ApiTableData<RadioGroupProps, HTMLInputElement>> =
  {
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
      description: '無効化するかどうか',
      required: false,
      type: 'boolean',
    },
    hasError: {
      default: 'false',
      description: '不正な入力かどうか',
      required: false,
      type: 'boolean',
    },
    name: {
      default: '',
      description: 'inputタグに渡されるname',
      required: true,
      type: 'string',
    },
    readonly: {
      default: '',
      description: '読み取り専用かどうか',
      required: false,
      type: 'string',
    },
  }
