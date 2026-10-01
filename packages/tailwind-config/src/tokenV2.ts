import light from '@charcoal-ui/theme/tokens/css-variables.json' with { type: 'json' }
import type { Config } from 'tailwindcss'
import { createTokenV2TailwindTheme } from './token-v2/create-theme'
import { createTokenV2TailwindBindings } from './token-v2/definition'
import type { TokenV2CssVariables } from './token-v2/types'

export function unstable_createTailwindConfigTokenV2(): Omit<
  Config,
  'content'
> {
  return {
    darkMode: 'media',
    theme: createTokenV2TailwindTheme(
      createTokenV2TailwindBindings(light as TokenV2CssVariables),
    ),
  }
}
