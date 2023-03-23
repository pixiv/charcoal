import { DropdownSelectorProps } from '@charcoal-ui/react/dist/components/DropdownSelector'
import { PreviewSection } from '../_components/Previews'

export const sections: PreviewSection<DropdownSelectorProps>[] = [
  {
    title: 'disabled',
    previewMetas: [
      {
        children: undefined,
        props: {
          disabled: true,
          label: 'disabled',
          children: [],
        },
      },
    ],
  },
  {
    title: 'showLabel,subLabel,requiredText',
    previewMetas: [
      {
        children: undefined,
        props: {
          showLabel: true,
          subLabel: 'subLabel',
          assertiveText: 'assertiveText',
          required: true,
          requiredText: 'requiredText',
          label: 'label',
          children: [],
        },
      },
    ],
  },
  {
    title: 'disabledKeys',
    previewMetas: [
      {
        children: undefined,
        props: {
          disabledKeys: ['option1'],
          label: 'disabledKeys',
          children: [],
        },
      },
    ],
  },
  {
    title: 'invalid',
    previewMetas: [
      {
        children: undefined,
        props: {
          invalid: true,
          label: 'invalid1',
          children: [],
        },
      },
      {
        children: undefined,
        props: {
          invalid: true,
          assertiveText: 'assertiveText',
          label: 'invalid2',
          children: [],
        },
      },
    ],
  },
]
