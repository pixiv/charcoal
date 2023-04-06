import { DropdownSelectorProps } from '@charcoal-ui/react'
import { PreviewSection } from '../_components/Previews'

const baseProps = {
  label: 'label',
  options: [
    {
      id: 'option1',
      label: 'option1',
    },
  ],
  value: 'option1',
  onChange: () => {},
}

export const sections: PreviewSection<DropdownSelectorProps>[] = [
  {
    title: 'disabled',
    previewMetas: [
      {
        props: {
          ...baseProps,
          label: 'disabled',
          disabled: true,
        },
      },
    ],
  },
  {
    title: 'subLabel',
    previewMetas: [
      {
        props: {
          ...baseProps,
          label: 'subLabel',
          showLabel: true,
          subLabel: 'subLabel',
        },
      },
    ],
  },
  {
    title: 'required',
    previewMetas: [
      {
        props: {
          ...baseProps,
          label: 'required',
          showLabel: true,
          required: true,
        },
      },
      {
        props: {
          ...baseProps,
          label: 'requiredText',
          showLabel: true,
          required: true,
          requiredText: '*REQUIRED',
        },
      },
    ],
  },
  {
    title: 'invalid,assertiveText',
    previewMetas: [
      {
        props: {
          ...baseProps,
          invalid: true,
          label: 'invalid',
        },
      },
      {
        props: {
          ...baseProps,
          invalid: true,
          label: 'invalid+assertiveText',
          assertiveText: 'assertiveText',
        },
      },
    ],
  },
]
