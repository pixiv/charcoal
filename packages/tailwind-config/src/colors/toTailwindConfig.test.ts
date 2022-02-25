import { colorsToTailwindConfig } from './toTailwindConfig'
import { light } from '@charcoal/pixiv-theme'
import { mergeEffect } from '../foundation'

describe('colors/colorsToTailwindConfig', () => {
  const effects = mergeEffect(light)

  const config = colorsToTailwindConfig(
    'v3',
    {
      red: '#ff0000',
      gradient: [
        { color: '#ff0000', ratio: 33 },
        { color: '#0000ff', ratio: 67 },
      ],
    },
    effects
  )

  it('generates colors for tailwind.config.js', () => {
    expect(config).toEqual({
      red: {
        DEFAULT: 'var(--tailwind-color-red, #ff0000)',
        disabled: 'var(--tailwind-color-red--disabled, rgba(255,0,0,0.32))',
        hover: 'var(--tailwind-color-red--hover, #eb0000)',
        outline: 'var(--tailwind-color-red--outline, rgba(255,0,0,0.32))',
        press: 'var(--tailwind-color-red--press, #d60000)',
      },
    })
  })

  it('does not generate colors for gradient', () => {
    expect(config).not.toHaveProperty('gradient')
  })
})
