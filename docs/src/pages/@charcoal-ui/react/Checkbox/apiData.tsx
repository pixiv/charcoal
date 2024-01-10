import { CheckboxProps } from '@charcoal-ui/react'
import { ApiTableData, TableItem } from '../_components/ApiTable'

export const apiData: Omit<
  ApiTableData<CheckboxProps, HTMLInputElement>,
  'type' | 'name'
> & { label: TableItem } = {
  disabled: {
    description: '入力の無効化',
    type: 'boolean',
    default: 'false',
  },
  label: {
    description: 'childrenがない場合のaria-label',
    type: 'string',
    required: true,
  },
  readonly: {
    description: '読み取り専用化',
    default: 'false',
    type: 'boolean',
  },
  checked: {
    description: 'チェック状態',
    default: 'false',
    type: 'boolean',
  },
  invalid: {
    description: '入力の不正化',
    default: 'false',
    type: 'boolean',
  },
}
