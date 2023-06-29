import { RadioGroupProps, RadioProps } from '@charcoal-ui/react'
import { ApiTableData } from '../_components/ApiTable'

export const apiDataRadio: Partial<ApiTableData<RadioProps, HTMLInputElement>> =
  {
    disabled: {
      default: 'false',
      description: '無効化',
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
      required: false,
      type: 'string',
    },
    disabled: {
      default: 'false',
      description: '無効化',
      type: 'boolean',
      required: false,
    },
    invalid: {
      default: 'false',
      description: '不正な入力化',
      type: 'boolean',
      required: false,
    },
    name: {
      default: '',
      description: 'inputタグに渡されるname',
      required: true,
      type: 'string',
    },
    readonly: {
      description: '読み取り専用化',
      default: 'false',
      required: false,
      type: 'boolean',
    },
  }
