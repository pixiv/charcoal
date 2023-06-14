import { TextAreaProps } from '@charcoal-ui/react'
import { PreviewSection } from '../_components/Previews'

export const sections: PreviewSection<TextAreaProps>[] = [
  {
    // autoFocus は先頭の1個だけで有効にする
    title: 'autoFocus, showLabel, subLabel, requiredText, assistiveText',
    previewMetas: [
      {
        children: undefined,
        props: {
          label: 'label',
          placeholder: 'placeholder',
          showLabel: true,
          subLabel: 'subLabel',
          required: true,
          requiredText: 'requiredText',
          assistiveText: 'assistiveText',
          autoFocus: true,
        },
      },
    ],
  },
  {
    title: 'showCount, maxLength',
    previewMetas: [
      {
        children: undefined,
        props: {
          label: 'Label',
          placeholder: 'placeholder',
          showCount: true,
        },
      },
      {
        children: undefined,
        props: {
          label: 'Label',
          placeholder: 'placeholder',
          showCount: true,
          maxLength: 140,
        },
      },
    ],
  },
  {
    title: 'invalid, assitiveText',
    previewMetas: [
      {
        children: undefined,
        props: {
          label: 'label',
          placeholder: 'placeholder',
          invalid: true,
          assistiveText: 'assistiveText',
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
          placeholder: 'placeholder',
          showLabel: true,
          disabled: true,
        },
      },
    ],
  },
  {
    title: 'autoHeight',
    previewMetas: [
      {
        children: undefined,
        props: {
          label: 'autoHeight',
          placeholder: 'placeholder',
          showLabel: true,
          autoHeight: true,
        },
      },
    ],
  },
]
