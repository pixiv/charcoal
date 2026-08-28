import light from '@charcoal-ui/theme/tokens/css-variables.json' with { type: 'json' }
import { unstable_createTailwindConfigTokenV2 } from '../tokenV2'
import { createTokenV2TailwindBindings } from './definition'
import { createTokenV2TailwindTheme } from './create-theme'
import type { TokenV2CssVariables } from './types'

describe('createTokenV2TailwindTheme', () => {
  test('reconstructs the current token v2 theme from bindings', () => {
    const bindings = createTokenV2TailwindBindings(light as TokenV2CssVariables)

    expect(createTokenV2TailwindTheme(bindings)).toEqual(
      unstable_createTailwindConfigTokenV2().theme,
    )
  })

  test('reconstructs nested colors and DEFAULT keys from canonical paths', () => {
    expect(
      createTokenV2TailwindTheme([
        {
          canonicalPath: 'color/container/primary/default',
          themeKey: 'colors',
          modifier: 'container-primary',
          value: 'primary',
        },
        {
          canonicalPath: 'color/container/primary/hover',
          themeKey: 'colors',
          modifier: 'container-primary-hover',
          value: 'hover',
        },
        {
          canonicalPath: 'space/layout/20',
          themeKey: 'spacing',
          modifier: 'layout-20',
          value: '20px',
        },
      ]),
    ).toMatchObject({
      colors: { container: { primary: { DEFAULT: 'primary', hover: 'hover' } } },
      spacing: { 'layout-20': '20px' },
    })
  })
})
