const { light, dark } = require('@charcoal-ui/theme')
const { createTailwindConfig } = require('@charcoal-ui/tailwind-config')

/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  darkMode: false,
  content: ['**/*.tsx'],
  presets: [
    createTailwindConfig({
      version: 'v3',
      theme: {
        ':root': light,
        '[data-dark="true"]': dark,
      },
    }),
  ],
  theme: {
    extend: {
      // @charcoal-ui/tailwind-configでは無効にされているが@charcoal-ui/tailwind-reactでは利用したい
      borderRadius: {
        full: '9999px',
      },
      // @charcoal-ui/tailwind-reactのため実験的に追加
      boxShadow: {
        focus: '0 0 0 4px rgba(0,150,250,0.32)',
        invalid: '0 0 0 4px rgba(255,43,0,0.32)',
      },
    },
  },
  corePlugins: {
    preflight: false,
    // @charcoal-ui/tailwind-configでは無効にされているが@charcoal-ui/tailwind-reactでは利用したい
    lineHeight: true,
  },
  safelist: [{ pattern: /.*/ }],
}
