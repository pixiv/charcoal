/** @type { import('eslint').Linter.Config } */
const config = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', ignoreRestSiblings: true },
    ],
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'react/prop-types': 'off',
    'no-console': 'warn',
  },
  parserOptions: {
    project: ['./tsconfig.json', './packages/**/tsconfig.json'],
  },
  env: {
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [{ files: ['*.cjs', '*.mjs'] }],
}

module.exports = config
