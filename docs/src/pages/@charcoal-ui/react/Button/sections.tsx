import { ButtonProps } from '@charcoal-ui/react'
import { PreviewSection } from '../_components/Previews'
import { sizes } from './sizes'
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
    previewMetas: sizes.map((size) => ({
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
    title: 'active',
    previewMetas: variants.map((variant) => ({
      props: {
        variant,
        isActive: true,
      },
      children: variant,
    })),
  },
]
