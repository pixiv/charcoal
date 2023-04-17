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
    description: '拡大率',
    type: '1 | 2 | 3',
  },
  unsafeNonGuidelineScale: {
    description: 'ガイドライン外の拡大率',
    type: 'number',
  },
}
