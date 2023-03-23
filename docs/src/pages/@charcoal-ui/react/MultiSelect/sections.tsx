import { MultiSelectGroupProps, MultiSelectProps } from '@charcoal-ui/react'
import { PreviewSection } from '../_components/Previews'

export const sections: PreviewSection<MultiSelectGroupProps>[] = [
  {
    title: 'disabled',
    previewMetas: [
      {
        props: {
          disabled: true,
          ariaLabel: '',
          name: '',
          onChange: () => {},
          selected: [],
        },
        children: undefined,
      },
    ],
  },
  {
    title: 'hasError',
    previewMetas: [
      {
        props: {
          hasError: true,
          ariaLabel: '',
          name: '',
          onChange: () => {},
          selected: [],
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
          readonly: true,
          ariaLabel: '',
          name: '',
          onChange: () => {},
          selected: [],
        },
        children: undefined,
      },
    ],
  },
  {
    title: 'variant',
    previewMetas: [
      {
        props: {
          ariaLabel: '',
          name: '',
          onChange: () => {},
          selected: [],
        },
        additionalData: {
          propsList: [
            {
              value: 'default',
              variant: 'default',
              children: 'default',
            } as MultiSelectProps,
            {
              value: 'overlay',
              variant: 'overlay',
              children: 'overlay',
            } as MultiSelectProps,
          ],
        },
        children: undefined,
      },
    ],
  },
]
