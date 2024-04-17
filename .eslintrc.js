/** @type { import('eslint').Linter.Config } */
const config = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:import/recommended',
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
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'no-console': 'warn',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '*.config.ts',
          '**/*.config.ts',
          '**/*.test.ts',
          '**/*.test.tsx',
          '**/*.story.tsx',
          '**/_lib/**',
        ],
      },
    ],
  },
  parserOptions: {
    project: ['./tsconfig.json', './packages/**/tsconfig.json'],
  },
  env: {
    node: true,
    'jest/globals': true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        project: ['./tsconfig.json', './packages/**/tsconfig.json'],
      },
    },
  },
  plugins: ['jest', 'import'],
  overrides: [{ files: ['*.cjs', '*.mjs'] }],
}

module.exports = config
