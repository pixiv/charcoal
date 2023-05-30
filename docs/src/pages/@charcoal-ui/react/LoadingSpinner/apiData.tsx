import { LoadingSpinner } from '@charcoal-ui/react'
import { ApiTableData } from '../_components/ApiTable'

export const apiData: Partial<
  ApiTableData<Parameters<typeof LoadingSpinner>[0], HTMLInputElement>
> = {
  padding: {
    default: '16',
    description: '円の周りの余白の大きさ',
    type: 'number',
  },
  size: {
    default: '48',
    description: '円の大きさ',
    type: 'number',
  },
  transparent: {
    default: 'false',
    description: '背景の透過',
    type: 'boolean',
  },
}
