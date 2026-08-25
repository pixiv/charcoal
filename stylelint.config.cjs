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
        // styled-components の動的なメディアクエリ補間は静的に検証できない
        'media-query-no-invalid': null,
      },
    },
    {
      // これらのファイルにはスタイル定義ではなく styled-components の型テストが含まれる
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
