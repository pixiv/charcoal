import { SwitchProps } from '@charcoal-ui/react'
import { ApiTableData, TableItem } from '../_components/ApiTable'

export const apiData: ApiTableData<SwitchProps, HTMLInputElement> & {
  label: TableItem
  onChange: TableItem
} = {
  checked: {
    default: 'false',
    description: 'チェック状態',
    type: 'boolean',
  },
  disabled: {
    default: 'false',
    description: '無効化',
    type: 'boolean',
  },
  onChange: {
    default: '',
    description: 'チェックの状態が変わった際に呼ばれる関数',
    required: true,
    type: '(checked: boolean) => void',
  },
  name: {
    default: '',
    description: 'input要素のname',
    required: true,
    type: 'string',
  },
  label: {
    default: '',
    description: 'childrenがない場合はaria-labelとして必須',
    required: true,
    type: 'string',
  },
  value: {
    default: '',
    description: 'input要素のvalue',
    type: 'string',
  },
}
