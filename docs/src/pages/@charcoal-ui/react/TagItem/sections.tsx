import { TagItemProps } from '@charcoal-ui/react'
import { PreviewSection } from '../_components/Previews'

export const sections: PreviewSection<TagItemProps>[] = [
  {
    title: 'size',
    previewMetas: [
      {
        children: undefined,
        props: {
          label: 'tag',
          size: 'M',
        },
      },
      {
        children: undefined,
        props: {
          label: 'tag',
          size: 'S',
        },
      },
    ],
  },
  {
    title: 'bgColor',
    previewMetas: [
      {
        children: undefined,
        props: {
          label: 'tag',
          bgColor: 'lightgreen',
        },
      },
      {
        children: undefined,
        props: {
          label: 'tag',
          bgColor: 'orange',
        },
      },
      {
        children: undefined,
        props: {
          label: 'tag',
          bgColor: 'magenta',
        },
      },
    ],
  },
  {
    title: 'bgImage',
    previewMetas: [
      {
        children: undefined,
        props: {
          label: 'ogp',
          bgImage: '/charcoal-ogp.jpg',
        },
      },
      {
        children: undefined,
        props: {
          label: 'icon',
          bgImage: '/charcoal-icon.png',
        },
      },
    ],
  },
  {
    title: 'status',
    previewMetas: [
      {
        children: undefined,
        props: {
          label: 'default',
          status: 'default',
        },
      },
      {
        children: undefined,
        props: {
          label: 'active',
          status: 'active',
        },
      },
      {
        children: undefined,
        props: {
          label: 'inactive',
          status: 'inactive',
        },
      },
    ],
  },
  {
    title: 'translatedLabel',
    previewMetas: [
      {
        children: undefined,
        props: {
          label: 'label',
          translatedLabel: 'translatedLabel',
        },
      },
    ],
  },
  {
    title: 'disabled',
    previewMetas: [
      {
        children: undefined,
        props: {
          label: 'disabled',
          disabled: true,
        },
      },
    ],
  },
]
