import { SegmentedControlProps } from '@charcoal-ui/react'
import { ApiTableData, TableItem } from '../_components/ApiTable'

export const apiData: ApiTableData<SegmentedControlProps, HTMLInputElement> & {
  defaultValue: TableItem
  onChange: TableItem
} = {
  data: {
    default: '',
    description: '表示する選択肢の配列',
    required: true,
    type: 'string[]',
  },
  disabled: {
    default: 'false',
    description: '無効化',
    type: 'boolean',
  },
  readonly: {
    default: 'false',
    description: '読み取り専用化',
    type: 'boolean',
  },
  name: {
    default: '',
    description: '（廃止）',
    type: 'string',
  },
  required: {
    default: '',
    description: 'aria-requiredの付与',
    type: 'boolean',
  },
  value: {
    default: '',
    description: '現在の値',
    type: 'string',
  },
  defaultValue: {
    default: '',
    description: '初期値',
    type: 'string',
  },
  onChange: {
    default: '',
    description: '値が変更された際に呼ばれる関数',
    type: '(value: string) => void',
  },
}
