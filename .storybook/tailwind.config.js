const { light, dark } = require('@charcoal-ui/theme')
const { createTailwindConfig } = require('@charcoal-ui/tailwind-config')

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  darkMode: false,
  content: [
    '**/*.tsx',
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
    }),
  ],
  corePlugins: {
    preflight: false,
  },
  safelist: [{ pattern: /.*/ }],
}
