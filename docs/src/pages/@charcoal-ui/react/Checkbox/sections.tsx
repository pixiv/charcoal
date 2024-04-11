import { CheckboxProps } from '@charcoal-ui/react'
import { PreviewSection } from '../_components/Previews'

export const sections: PreviewSection<Omit<CheckboxProps, 'ref'>>[] = [
  {
    title: 'disabled',
    previewMetas: [
      {
        children: 'disabled',
        props: {
          children: undefined,
          disabled: true,
        },
      },
      {
        children: 'disabled',
        props: {
          children: undefined,
          disabled: true,
          checked: true,
        },
      },
    ],
  },
  {
    title: 'invalid',
    previewMetas: [
      {
        children: 'invalid',
        props: {
          children: undefined,
          invalid: true,
          checked: false,
        },
      },
      {
        children: 'invalid',
        props: {
          children: undefined,
          invalid: true,
          checked: true,
        },
      },
    ],
  },
]
