import { RadioGroupProps } from '@charcoal-ui/react'
import { PreviewSection } from '../_components/Previews'

export const sections: PreviewSection<RadioGroupProps>[] = [
  {
    title: 'disabled',
    previewMetas: [
      {
        props: {
          label: 'radio',
          name: 'radio',
          onChange: () => {},
          disabled: true,
        },
        children: undefined,
      },
    ],
  },
  {
    title: 'invalid',
    previewMetas: [
      {
        props: {
          label: 'radio',
          name: 'radio',
          onChange: () => {},
          invalid: true,
        },
        children: undefined,
      },
    ],
  },
  {
    title: 'readonly',
    previewMetas: [
      {
        props: {
          label: 'radio',
          name: 'radio',
          onChange: () => {},
          readonly: true,
        },
        children: undefined,
      },
    ],
  },
]
