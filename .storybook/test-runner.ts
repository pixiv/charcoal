import { waitForPageReady, type TestRunnerConfig } from '@storybook/test-runner'
import { toMatchImageSnapshot } from 'jest-image-snapshot'

const config: TestRunnerConfig = {
  setup() {
    expect.extend({ toMatchImageSnapshot })
  },
  async postVisit(page, context) {
    // await waitForPageReady(page);
    const image = await page.screenshot({ fullPage: true });
    expect(image).toMatchImageSnapshot({
      customSnapshotIdentifier: context.id,
      failureThreshold: 0.001,
      failureThresholdType: 'percent',
    })
  },
  tags: {
    skip: ['skip-test'],
  },
}

export default config
