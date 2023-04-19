import { DropdownSelectorProps } from '@charcoal-ui/react/dist/components/DropdownSelector'
import { ApiTableData, TableItem } from '../_components/ApiTable'

export const apiData: Omit<
  ApiTableData<DropdownSelectorProps, HTMLInputElement>,
  'type' | 'checked' | 'name' | 'readonly'
> = {
  assertiveText: {
    description: '下に表示するヒントテキスト',
    type: 'string',
  },
  autoComplete: {
    description: 'selectタグに付けるautoComplete属性',
    type: 'string',
  },
  disabled: {
    default: 'false',
    description: '入力の無効化',
    type: 'boolean',
  },
  disabledKeys: {
    description: '無効にするアイテムのキー',
    type: 'Iterable<Key>',
  },
  invalid: {
    default: 'false',
    description: '不正な入力化',
    type: 'boolean',
  },
  label: {
    description: '上に表示されるラベル',
    required: true,
    type: 'string',
  },
  items: {
    description: '（非推奨）',
    type: '',
  },
  mode: {
    default: '',
    description: '（非推奨）',
    type: '"default" | "separator"',
  },
  onOpenChange: {
    default: '',
    description: '（非推奨）',
    type: '() => void',
  },
  open: {
    default: '',
    description: '（非推奨）',
    type: 'boolean',
  },
  required: {
    default: '',
    description: '入力の必須化',
    type: 'boolean',
  },
  requiredText: {
    default: '',
    description: '必須を示すテキスト、showLabelがtrueなら表示される',
    type: 'string',
  },
  showLabel: {
    default: '',
    description: 'ラベルを表示',
    type: 'boolean',
  },
  subLabel: {
    default: '',
    description: 'サブラベル、showLabel==trueなら表示される',
    type: 'string',
  },
  value: {
    default: '',
    description: '選択されている値',
    type: 'Key',
  },
}
