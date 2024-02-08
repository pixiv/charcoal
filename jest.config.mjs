/** @type { import('@jest/types').Config.InitialOptions } */
const rootConfig = {
  projects: ['packages/*', '.storybook'],
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
    '^.+\\.(t|j)sx?$': 'babel-jest',
  },
  // tsconfigのpathsに対応 (依存パッケージをビルドせずにテストが可能)
  moduleNameMapper: {
    '^@charcoal-ui/(.*)$': '<rootDir>/../$1/src',
  },
  setupFilesAfterEnv: ['../../jest.setup.ts'],
})

/** @type { () => import('@jest/types').Config.InitialOptions } */
const strictConfig = () => ({
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  moduleNameMapper: {
    // TODO: 一貫性のために外したい
    // es5になった`PixivIcon.ts`がjsdomの提供するHTMLElementと互換がないため、したかなくマッピング
    '^@charcoal-ui/icons$': '<rootDir>/../icons/src',
  },
  setupFilesAfterEnv: ['../../jest.setup.ts'],
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
