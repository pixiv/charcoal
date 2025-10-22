import pixiv from '@pixiv/eslint-config'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    ignores: [
      '**/dist/',
      '**/node_modules/',
      '**/__snapshots__/',
      '**/.yarn/',
      'public/',
      'storybook-static/',
      'coverage/',
      '**/.next/',
      'misc/',
      'packages/tailwind-diff/bin/tailwind-diff.js',
      'packages/icon-files/src/',
      'packages/icon-files/v2',
      'packages/icon-files/v2-datauri',
      'packages/icon-files/v1-datauri',
      'packages/icons/react',
      'eslint.config.mjs',
      'vitest.*',
      '.storybook',
      'pnpm-lock.yaml',
    ],
  },
  ...pixiv.configs.react,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      'no-console': 'warn',
      'no-undef': 'off',
      'no-constant-condition': 'error',

      // @pixiv/eslint-config migration
      '@typescript-eslint/consistent-type-imports': 'off',
      '@typescript-eslint/no-deprecated': 'off',
      '@typescript-eslint/no-empty-function': ['error', { allow: [] }],
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['styled-components'],
              importNames: ['default'],
              message: `import styled via styledExportFix.ts instead`,
            },
          ],
        },
      ],
      curly: 'off',
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'off',
    },
  },
  {
    files: [
      '**/*.story.ts',
      '**/*.story.tsx',
      '**/*.d.ts',
      '**/*.d.tsx',
      '**/*.test.ts',
      '**/*.test.tsx',
    ],
    rules: { 'no-restricted-imports': 'off' },
  },
])
