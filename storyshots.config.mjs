import { config } from './jest.config.mjs'

const defaultConfig = config()

export default {
  ...defaultConfig,
  setupFilesAfterEnv: ['./jest.setup.ts'],
  transform: {
    ...defaultConfig.transform,
    '^.+\\.mdx?$': '@storybook/addon-docs/jest-transform-mdx',
  },
  moduleNameMapper: {
    ...defaultConfig.moduleNameMapper,
    '^@charcoal-ui/(.*)$': '<rootDir>/packages/$1/src',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file.ts',
    '\\.(styl|css|less|scss)$': '<rootDir>/__mocks__/style.ts',
  },
  testMatch: ['<rootDir>/**/storyshots.test.(js|jsx|ts|tsx)'],
}