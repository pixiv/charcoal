import { ButtonProps } from '@charcoal-ui/react'
import { PreviewSection } from '../_components/Previews'
import { sizies } from './sizies'
import { variants } from './variants'
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
`

export const sections: PreviewSection<ButtonProps<any>>[] = [
  {
    title: 'variant',
    previewMetas: variants.map((v) => ({
      props: {
        variant: v,
      },
      children: v,
    })),
  },
  {
    title: 'size',
    previewMetas: sizies.map((size) => ({
      props: {
        size,
      },
      children: size,
    })),
  },
  {
    title: 'disabled',
    previewMetas: variants.map((variant) => ({
      props: {
        variant,
        disabled: true,
      },
      children: variant,
    })),
  },
  {
    title: 'fullWidth',
    previewMetas: variants.map((variant) => ({
      props: {
        variant,
        fullWidth: true,
      },
      children: variant,
    })),
  },
  {
    title: 'as',
    previewMetas: [
      {
        props: {
          as: 'a',
          href: '/@charcoal-ui/react/Button',
        },
        children: 'normal link',
      },
      {
        props: {
          as: Link,
          href: '/@charcoal-ui/react/Button',
        },
        children: 'Next.js Link',
      },
      {
        props: {
          as: StyledLink,
          href: '/@charcoal-ui/react/Button',
        },
        children: 'Styled Next.js Link',
      },
    ],
  },
]
