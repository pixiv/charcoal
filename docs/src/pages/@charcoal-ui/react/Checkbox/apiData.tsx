import { CheckboxProps } from '@charcoal-ui/react/dist/components/Checkbox'
import { ApiTableData, TableItem } from '../_components/ApiTable'

export const apiData: Omit<
  ApiTableData<CheckboxProps, HTMLInputElement>,
  'type' | 'name'
> & { label: TableItem } = {
  disabled: {
    description: '入力の無効化',
    type: 'boolean',
    default: 'false',
    required: false,
  },
  label: {
    description: 'childrenがいない場合のaria-label',
    type: 'string',
    default: '',
    required: true,
  },
  readonly: {
    description: '読み取り専用',
    default: 'false',
    required: false,
    type: 'boolean',
  },
  checked: {
    description: 'チェックされてるか否か',
    default: 'false',
    required: false,
    type: 'boolean',
  },
}
