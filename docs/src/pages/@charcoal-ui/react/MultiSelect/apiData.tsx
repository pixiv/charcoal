import { MultiSelectGroupProps, MultiSelectProps } from '@charcoal-ui/react'
import { ApiTableData } from '../_components/ApiTable'

export const multiSelectApiData: ApiTableData<
  MultiSelectProps,
  HTMLInputElement
> = {
  value: {
    default: '',
    description: '選択肢の値',
    required: true,
    type: 'string',
  },
  disabled: {
    default: '',
    description: '無効化',
    type: 'string',
  },
  forceChecked: {
    default: 'false',
    description: '強制的なチェック',
    type: 'boolean',
  },
  variant: {
    default: '"Default"',
    description: 'スタイル',
    type: '"Default" | "Overlay"',
  },
}

export const apiData: ApiTableData<MultiSelectGroupProps, HTMLInputElement> = {
  disabled: {
    default: 'false',
    description: '無効化',
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
    description: '入力の不正化',
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
    description: '読み取り専用化',
    type: 'string',
  },
  selected: {
    default: '',
    description: '選択されているキーの配列',
    required: true,
    type: 'string[]',
  },
}
