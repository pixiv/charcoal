import { SegmentedControlProps } from '@charcoal-ui/react'
import { PreviewSection } from '../_components/Previews'

export const sections: PreviewSection<SegmentedControlProps>[] = [
  {
    title: 'disabled',
    previewMetas: [
      {
        children: undefined,
        props: {
          data: [''],
          disabled: true,
        },
      },
    ],
  },
  {
    title: 'readonly',
    previewMetas: [
      {
        children: undefined,
        props: {
          data: [''],
          readonly: true,
        },
      },
    ],
  },
]
