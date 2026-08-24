/** @type { import('stylelint').Config } */
const config = {
  extends: ['stylelint-config-recommended'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: ['box'],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.{jsx,tsx}'],
      customSyntax: 'postcss-styled-syntax',
      rules: {
        // styled-components permits JavaScript interpolation in media queries.
        'media-query-no-invalid': null,
      },
    },
    {
      // These files contain styled-components type tests, not style definitions.
      files: ['**/*.d.tsx'],
      rules: {
        'no-empty-source': null,
      },
    },
  ],
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
}

module.exports = config
