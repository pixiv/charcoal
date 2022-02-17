/** @type { import('stylelint').Config } */
const config = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
    'stylelint-config-prettier',
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.{jsx,tsx}'],
      customSyntax: '@stylelint/postcss-css-in-js',
    },
  ],
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
}

module.exports = config
