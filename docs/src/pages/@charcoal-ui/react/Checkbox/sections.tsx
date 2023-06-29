import { CheckboxProps } from '@charcoal-ui/react'
import { PreviewSection } from '../_components/Previews'

export const sections: PreviewSection<CheckboxProps>[] = [
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
    title: 'readonly',
    previewMetas: [
      {
        children: 'readonly',
        props: {
          children: undefined,
          readonly: true,
          checked: false,
        },
      },
      {
        children: 'readonly',
        props: {
          children: undefined,
          readonly: true,
          checked: true,
        },
      },
    ],
  },
]
