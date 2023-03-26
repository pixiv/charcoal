import { LoadingSpinner } from '@charcoal-ui/react'
import { PreviewSection } from '../_components/Previews'

export const sections: PreviewSection<Parameters<typeof LoadingSpinner>[0]>[] =
  [
    {
      title: 'padding',
      previewMetas: [
        {
          children: undefined,
          props: {
            padding: 64,
          },
        },
        {
          children: undefined,
          props: {
            padding: 0,
          },
        },
      ],
    },

    {
      title: 'size',
      previewMetas: [
        {
          children: undefined,
          props: {
            size: 128,
          },
        },
      ],
    },
    {
      title: 'transparent',
      previewMetas: [
        {
          children: undefined,
          props: {
            transparent: true,
          },
        },
      ],
    },
  ]
