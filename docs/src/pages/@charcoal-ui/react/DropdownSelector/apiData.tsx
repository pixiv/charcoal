import { DropdownSelectorProps, DropdownMenuItemProps} from '@charcoal-ui/react'
import { ApiTableData, TableItem } from '../_components/ApiTable'

export const apiData: ApiTableData<DropdownSelectorProps, {}> & {
  onChange: TableItem
} = {
  assistiveText: {
    description: '下に表示するヒントテキスト',
    type: 'string',
  },
  disabled: {
    default: 'false',
    description: '無効化',
    type: 'boolean',
  },
  invalid: {
    default: 'false',
    description: '入力の不正化',
    type: 'boolean',
  },
  label: {
    description: 'ラベル',
    required: true,
    type: 'string',
  },
  required: {
    default: 'false',
    description: '入力の必須化',
    type: 'boolean',
  },
  requiredText: {
    default: '"*必須"',
    description: '必須であることを示すテキスト',
    type: 'string',
  },
  showLabel: {
    description:
      'trueであればlabel,subLabelを表示する requiredがtrueであればrequiredTextも表示する',
    type: 'string',
  },
  subLabel: {
    description: '補助的な内容を示すラベル',
    type: 'string',
  },
  value: {
    default: '',
    description: '選択中の選択肢の値',
    required: true,
    type: 'string',
  },
  onChange: {
    default: '',
    description: '選択肢が選択された時に呼び出されるイベント',
    required: true,
    type: '(value: string) => void',
  },
}

export const optionValueApiData: ApiTableData<DropdownMenuItemProps, {}> = {
  value: {
    description: '選択肢の値',
    type: 'string',
    required: false,
  },
  disabled: {
    description: '選択の無効化',
    type: 'boolean',
    required: false,
  },
}
