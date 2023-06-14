import { Icon, TextFieldProps } from '@charcoal-ui/react'
import styled from 'styled-components'
import { theme } from '../../../../utils/theme'
import { PreviewSection } from '../_components/Previews'

const StyledDiv = styled.div`
  display: flex;
  ${theme((o) => o.font.text4)}
  > pixiv-icon {
    margin: auto;
  }
`

export const sections: PreviewSection<TextFieldProps>[] = [
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
          maxLength: 16,
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
    title: 'prefix',
    previewMetas: [
      {
        children: undefined,
        props: {
          label: 'Label',
          placeholder: 'placeholder',
          prefix: (
            <StyledDiv>
              <Icon name="24/Search" />
            </StyledDiv>
          ),
        },
      },
    ],
  },
  {
    title: 'suffix',
    previewMetas: [
      {
        children: undefined,
        props: {
          label: 'Label',
          placeholder: 'placeholder',
          suffix: (
            <StyledDiv>
              <Icon name="24/Search" />
            </StyledDiv>
          ),
        },
      },
    ],
  },
]
