/** @type { import('@jest/types').Config.InitialOptions } */
const rootConfig = {
  projects: ['packages/*'],
  passWithNoTests: true,
}

// strictの場合は事前に`yarn build`が必要
export const config = () =>
  process.env.USE_STRICT === '1' ? strictConfig() : defaultConfig()

/** @type { () => import('@jest/types').Config.InitialOptions } */
const defaultConfig = () => ({
  testEnvironment: 'jsdom',
  // node_modules内のためにjsxも含める
  transform: {
    '^.+\\.(t|j)sx?$': ['esbuild-jest', { target: 'esnext', format: 'cjs' }],
  },
  // commonjsが提供されていないパッケージをコンパイル
  transformIgnorePatterns: ['../../node_modules/(?!(lit-html))'],
  // tsconfigのpathsに対応 (依存パッケージをビルドせずにテストが可能)
  moduleNameMapper: {
    '^@charcoal/(.*)$': '<rootDir>/../$1/src',
  },
})

/** @type { () => import('@jest/types').Config.InitialOptions } */
const strictConfig = () => ({
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['../../node_modules/(?!(lit-html))'],
  moduleNameMapper: {
    // TODO: 一貫性のために外したい
    // es5になった`PixivIcon.ts`がjsdomの提供するHTMLElementと互換がないため、したかなくマッピング
    '^@charcoal/icons$': '<rootDir>/../icons/src',
  },
  globals: {
    'ts-jest': {
      tsconfig: {
        // transformIgnorePatternsによるnode_modules内のコンパイル用
        allowJs: true,
      },
      // 型チェックしない
      isolatedModules: true,
    },
  },
})

export default rootConfig
