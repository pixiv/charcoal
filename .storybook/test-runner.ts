import { waitForPageReady, type TestRunnerConfig } from '@storybook/test-runner'
import { toMatchImageSnapshot } from 'jest-image-snapshot'

const config: TestRunnerConfig = {
  setup() {
    expect.extend({ toMatchImageSnapshot })
  },
  async postVisit(page, context) {
    // use the test-runner utility to wait for fonts to load, etc.
    await waitForPageReady(page)

    // If you want to take screenshot of multiple browsers, use
    // page.context().browser().browserType().name() to get the browser name to prefix the file name
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      customSnapshotIdentifier: context.id,
      failureThreshold: 0.001,
    })
  },
}

export default config
