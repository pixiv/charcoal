import { ButtonProps } from '@charcoal-ui/react'
import { PreviewSection } from '../_components/Previews'
import { sizies } from './sizies'
import { variants } from './variants'

export const sections: PreviewSection<ButtonProps>[] = [
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
    title: 'fixed',
    previewMetas: variants.map((variant) => ({
      props: {
        variant,
        fixed: true,
      },
      children: variant,
    })),
  },
]
