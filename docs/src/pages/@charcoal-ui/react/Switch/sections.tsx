import { SwitchProps } from '@charcoal-ui/react'
import { PreviewSection } from '../_components/Previews'

export const sections: PreviewSection<SwitchProps>[] = [
  {
    title: 'disabled',
    previewMetas: [
      {
        children: undefined,
        props: {
          label: 'switch',
          name: 'switch',
          onChange: () => {},
          children: undefined,
          disabled: true,
        },
      },
    ],
  },
]
