import { IconProps } from '@charcoal-ui/react'
import { PreviewSection } from '../_components/Previews'

export const sections: PreviewSection<IconProps>[] = [
  {
    title: 'scale',
    previewMetas: [
      {
        children: undefined,
        props: {
          name: '24/LikeOn',
          scale: 1,
        },
      },
      {
        children: undefined,
        props: {
          name: '24/LikeOn',
          scale: 2,
        },
      },
      {
        children: undefined,
        props: {
          name: '24/LikeOn',
          scale: 3,
        },
      },
    ],
  },
  {
    title: 'unsafeNonGuidelineScale',
    previewMetas: [
      {
        children: undefined,
        props: {
          name: '24/LikeOn',
          unsafeNonGuidelineScale: 0.5,
        },
      },
      {
        children: undefined,
        props: {
          name: '24/LikeOn',
          unsafeNonGuidelineScale: 1.5,
        },
      },
      {
        children: undefined,
        props: {
          name: '24/LikeOn',
          unsafeNonGuidelineScale: 4,
        },
      },
    ],
  },
]
