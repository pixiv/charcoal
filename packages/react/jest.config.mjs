import { config } from '../../jest.config.mjs'

const isCI = process.env.CI === 'true'

const c = config()
export default {
  ...c,
  moduleNameMapper: {
    ...(c.moduleNameMapper !== undefined ? { ...c.moduleNameMapper } : {}),
    '^@storybook/react-dom-shim$': '@storybook/react-dom-shim/dist/react-16',
  },
  testPathIgnorePatterns: isCI ? ['/src/.*performance\\.test\\.tsx$'] : [],
}
