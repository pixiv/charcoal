// @ts-nocheck
import eslint from '@eslint/js'
import _import from 'eslint-plugin-import-x'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tseslint from 'typescript-eslint'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHook from 'eslint-plugin-react-hooks'
import eslintPluginPrettierRecommended from 'eslint-config-prettier'
import { fixupPluginRules } from '@eslint/compat'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const tseslintConfig = tseslint.config(
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: ['./tsconfig.json', 'packages/**/tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
    },
  }
)

const typescriptConfig = [
  ...tseslintConfig,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      import: _import,
    },
    rules: {
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', ignoreRestSiblings: true },
      ],
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
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
  },
  {
    files: ['**/*.tsx', '**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      react: eslintPluginReact,
      'react-hooks': fixupPluginRules(eslintPluginReactHook),
    },
    rules: {
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginReactHook.configs.recommended.rules,
      'react/prop-types': 'off',
      'react/no-unknown-property': ['error', { ignore: ['css'] }],
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]

const config = [
  eslint.configs.recommended,
  eslintPluginPrettierRecommended,
  ...typescriptConfig,
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
      'eslint.config.mjs',
      'vitest.*',
      '.storybook',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      'no-console': 'warn',
      'no-undef': 'off',
      'no-constant-condition': 'error',
    },
  },
  {
    files: [
      '**/*.test.{ts,tsx}',
      '**/__tests__/**',
      '**/*.config.*',
      '*.config.*',
      '**/*.story.*',
      '.storybook/**',
      '**/*.bench.{ts,tsx}',
    ],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      import: _import,
    },
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  },
  {
    files: ['**/docs/**'],
    plugins: {
      import: _import,
    },
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  },
]

export default config
