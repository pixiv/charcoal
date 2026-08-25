import { light, dark } from '@charcoal-ui/theme'
import { createTailwindConfig } from '@charcoal-ui/tailwind-config'

/**
 * @type {import('tailwindcss').Config}
 */
export default {
  content: [
    './.storybook/**/*.tsx',
    './packages/**/*.tsx',
    '!./packages/**/node_modules/**',
    /* pluginで生成されるクラス名をチェックしたい */
    'packages/tailwind-config/src/__snapshots__/iconsV2.test.ts.snap',
  ],
  presets: [
    createTailwindConfig({
      version: 'v3',
      theme: {
        ':root': light,
        '[data-dark="true"]': dark,
      },
      cssVariablesV1: false,
      unstableTokenV2: true,
      iconsV2: true,
      iconsV1: true,
    }),
  ],
  corePlugins: {
    preflight: false,
  },
  safelist: [{ pattern: /.*/ }],
}
