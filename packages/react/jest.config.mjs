import { config } from '../../jest.config.mjs'

const isCI = process.env.CI === 'true'

export default {
  ...config(),
  testPathIgnorePatterns: isCI ? ['/src/.*performance\\.test\\.tsx$'] : [],
}
