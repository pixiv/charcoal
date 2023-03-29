import { IconProps } from '@charcoal-ui/react'
import { ApiTableData } from '../_components/ApiTable'

export const apiData: Partial<ApiTableData<IconProps, HTMLInputElement>> = {
  name: {
    default: '',
    description: '表示するアイコン [Inline|16|24|32]/[name] 形式の文字列',
    required: true,
    type: 'IconName',
  },
  scale: {
    default: '',
    description: '拡大率',
    required: false,
    type: '1 | 2 | 3',
  },
  unsafeNonGuidelineScale: {
    default: '',
    description: 'ガイドライン外の拡大率',
    required: false,
    type: 'number',
  },
}
