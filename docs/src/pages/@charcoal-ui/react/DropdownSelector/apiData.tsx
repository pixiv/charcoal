import { DropdownSelectorProps } from '@charcoal-ui/react'
import { ApiTableData, TableItem } from '../_components/ApiTable'

export const apiData: ApiTableData<DropdownSelectorProps, {}> & {
  onChange: TableItem
} = {
  assertiveText: {
    description: '下側に表示するテキスト。',
    type: 'string',
  },
  disabled: {
    default: 'false',
    description: 'tureであれば入力を無効にする。',
    type: 'boolean',
  },
  invalid: {
    default: 'false',
    description:
      'trueであれば不正な入力であることを示すアウトラインを表示する。',
    type: 'boolean',
  },
  label: {
    description: 'ラベル。',
    required: true,
    type: 'string',
  },
  required: {
    default: 'false',
    description: 'trueかつshowLabelがtrueならrequiredTextを表示する。',
    type: 'boolean',
  },
  requiredText: {
    default: '"*必須"',
    description: '必須であることを示す文字列。',
    type: 'string',
  },
  showLabel: {
    description:
      'trueであればlabel,subLabelを表示する。requiredがtrueであればrequiredTextも表示する。',
    type: 'string',
  },
  subLabel: {
    description: '補助的な内容を示すラベル。',
    type: 'string',
  },
  options: {
    default: '',
    description: '選択肢の配列。',
    required: true,
    type: '{ label: string id: string }',
  },
  value: {
    default: '',
    description: '選択中の選択肢のID。',
    required: true,
    type: 'string',
  },
  onChange: {
    default: '',
    description: '選択肢が選択された時に呼び出されるイベント。',
    required: true,
    type: '(option: DropdownSelectorOption) => void',
  },
}
