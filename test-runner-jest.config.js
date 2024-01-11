import { getJestConfig } from '@storybook/test-runner'

// The default Jest configuration comes from @storybook/test-runner
const testRunnerConfig = getJestConfig()

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  ...testRunnerConfig,
  snapshotSerializers: [
    // Sets up the custom serializer to preprocess the HTML before it's passed onto the test-runner
    './styled-story-serializer/index.ts',
    ...(testRunnerConfig.snapshotSerializers ?? []),
  ],
}
