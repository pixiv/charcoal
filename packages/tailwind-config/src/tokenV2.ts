import type { Config } from 'tailwindcss'
import {
  buildTokenV2ThemeEntries,
  createTokenV2ThemeFromEntries,
} from './tokenV2Theme'

export function unstable_createTailwindConfigTokenV2(): Omit<
  Config,
  'content'
> {
  const config: Omit<Config, 'content'> = {
    darkMode: 'media',
    theme: createTokenV2ThemeFromEntries(buildTokenV2ThemeEntries()),
  }

  return config
}
