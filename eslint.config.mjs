import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import jest from 'eslint-plugin-jest'
import _import from 'eslint-plugin-import'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
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
    ],
  },
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:storybook/recommended',
      'plugin:import/recommended',
      'prettier'
    )
  ),
  {
    plugins: {
      jest,
      import: fixupPluginRules(_import),
    },

    languageOptions: {
      globals: {
        ...globals.node,
        ...jest.environments.globals.globals,
      },

      ecmaVersion: 5,
      sourceType: 'commonjs',

      parserOptions: {
        project: ['./tsconfig.json', './packages/**/tsconfig.json'],
      },
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

    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'error',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      'react/prop-types': 'off',

      'react/no-unknown-property': [
        'error',
        {
          ignore: ['css'],
        },
      ],

      'no-console': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',

      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '*.config.js',
            '*.config.mjs',
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
    files: ['**/*.cjs', '**/*.mjs'],
  },
  {
    files: ['**/docs/**'],

    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  },
]
