import { waitForPageReady, type TestRunnerConfig } from '@storybook/test-runner'
import { toMatchImageSnapshot } from 'jest-image-snapshot'

const config: TestRunnerConfig = {
  setup() {
    expect.extend({ toMatchImageSnapshot })
  },
  async postVisit(page, context) {
    await waitForPageReady(page)
    const image = await page.screenshot()
    expect(image).toMatchImageSnapshot({
      customSnapshotIdentifier: context.id,
      customDiffDir: `${process.cwd()}/__diff_output__`,
      customSnapshotsDir: `${process.cwd()}/__image_snapshots__`,
      failureThresholdType: 'percent',
      failureThreshold: 0.001,
    })
  },
  tags: {
    skip: ['skip-test'],
  },
}

export default config
