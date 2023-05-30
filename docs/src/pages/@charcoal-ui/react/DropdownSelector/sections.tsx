import {
  DropdownSelectorProps,
  DropdownMenuItem,
  MenuGroup,
} from '@charcoal-ui/react'
import { PreviewSection } from '../_components/Previews'

const baseProps = {
  label: 'label',
  options: [
    {
      id: 'option1',
      label: 'option1',
    },
  ],
  children: [],
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
    title: 'invalid,assistiveText',
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
          label: 'invalid+assistiveText',
          assistiveText: 'assistiveText',
        },
      },
    ],
  },
  {
    title: 'section',
    previewMetas: [
      {
        props: {
          ...baseProps,
          invalid: true,
          label: 'invalid',
          children: [
            <MenuGroup text="Group1" key={0}>
              <DropdownMenuItem value="1">option1</DropdownMenuItem>
              <DropdownMenuItem value="2">option2</DropdownMenuItem>
            </MenuGroup>,
            <MenuGroup text="Group2" key={1}>
              <DropdownMenuItem value="3">option1</DropdownMenuItem>
              <DropdownMenuItem value="4">option2</DropdownMenuItem>
            </MenuGroup>,
          ],
        },
      },
    ],
  },
]
