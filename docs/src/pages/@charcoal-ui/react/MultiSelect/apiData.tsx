import { MultiSelectGroupProps, MultiSelectProps } from '@charcoal-ui/react'
import { ApiTableData } from '../_components/ApiTable'

export const multiSelectApiData: ApiTableData<MultiSelectProps, HTMLInputElement> = {
  value: {
    default: '',
    description: '選択肢の値',
    required: true,
    type: 'string',
  },
  disabled: {
    default: '',
    description: '無効化するかどうか',
    required: false,
    type: 'string',
  },
  forceChecked: {
    default: 'false',
    description: '強制的に有効にするかどうか',
    required: false,
    type: 'boolean',
  },
  variant: {
    default: '"Default"',
    description: '見た目の種類',
    required: false,
    type: '"Default" | "Overlay"',
  },
}

export const apiData: ApiTableData<MultiSelectGroupProps, HTMLInputElement> = {
  disabled: {
    default: 'false',
    description: '無効化するかどうか',
    required: false,
    type: 'boolean',
  },
  ariaLabel: {
    default: '',
    description: 'aria-label',
    required: true,
    type: 'string',
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
  selected: {
    default: '',
    description: '選択されているキーの配列',
    required: true,
    type: 'string[]',
  },
}
