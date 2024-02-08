import { config } from '../jest.config.mjs'

export default {
  ...config(),
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/../__mocks__/file.ts',
    '\\.(styl|css|less|scss)$': '<rootDir>/../__mocks__/style.ts',
    '\\.(mdx)$': '<rootDir>/../__mocks__/mdx.ts',
  },
  setupFilesAfterEnv: ['../jest.setup.ts', './jest.setup.ts'],
}
