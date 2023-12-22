const { light, dark } = require('@charcoal-ui/theme')
const { createTailwindConfig } = require('@charcoal-ui/tailwind-config')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  presets: [
    createTailwindConfig({
      version: 'v3',
      theme: {
        ':root': light,
        '[data-theme="dark"]': dark,
      },
    }),
  ],
  safelist: [{ pattern: /.*/ }],
}
