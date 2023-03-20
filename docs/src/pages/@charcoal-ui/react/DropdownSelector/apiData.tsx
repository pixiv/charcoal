import { DropdownSelectorProps } from '@charcoal-ui/react/dist/components/DropdownSelector'
import { ApiTableData, TableItem } from '../_components/ApiTable'

export const apiData: Omit<
  ApiTableData<DropdownSelectorProps, HTMLInputElement>,
  'type' | 'checked' | 'name' | 'readonly'
> = {
  assertiveText: {
    default: '',
    description: '下に表示するテキスト',
    required: false,
    type: 'string',
  },
  autoComplete: {
    default: '',
    description: 'selectタグに付けるautoComplete属性',
    required: false,
    type: 'string',
  },
  disabled: {
    default: 'false',
    description: '入力を無効にする',
    required: false,
    type: 'boolean',
  },
  disabledKeys: {
    default: '',
    description: '無効にするアイテムのキー',
    required: false,
    type: 'Iterable<Key>',
  },
  invalid: {
    default: 'false',
    description: '不正な入力',
    required: false,
    type: 'boolean',
  },
  label: {
    default: '',
    description: 'ラベル',
    required: true,
    type: 'string',
  },
  items: {
    default: '',
    description: 'TODO',
    required: false,
    type: 'TODO',
  },
  mode: {
    default: '"default"',
    description: 'TODO',
    required: false,
    type: '"default" | "separator"',
  },
  onOpenChange: {
    default: '',
    description: 'TODO',
    required: false,
    type: '() => void',
  },
  open: {
    default: '',
    description: 'TODO',
    required: false,
    type: 'boolean',
  },
  required: {
    default: '',
    description: '必須かどうか',
    required: false,
    type: 'boolean',
  },
  requiredText: {
    default: '',
    description: '必須を示すテキスト、showLabelのとき表示される',
    required: false,
    type: 'string',
  },
  showLabel: {
    default: '',
    description: 'ラベルを表示するかどうか',
    required: false,
    type: 'boolean',
  },
  subLabel: {
    default: '',
    description: 'サブラベル、showLabelの時、右上に表示される',
    required: false,
    type: 'string',
  },
  value: {
    default: '',
    description: '',
    required: false,
    type: 'string',
  },
}
