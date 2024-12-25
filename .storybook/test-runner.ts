import { waitForPageReady, type TestRunnerConfig } from '@storybook/test-runner'
import { toMatchImageSnapshot } from 'jest-image-snapshot'
import { injectAxe, checkA11y } from 'axe-playwright'

const a11yTestConfig: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page)
  },
  async postVisit(page) {
    await waitForPageReady(page)
    await page.waitForTimeout(200)

    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    })
  },
  tags: {
    skip: ['skip-test'],
  },
}

const vrtTestConfig: TestRunnerConfig = {
  setup() {
    expect.extend({ toMatchImageSnapshot })
  },
  async postVisit(page, context) {
    await waitForPageReady(page)
    await page.waitForTimeout(200)

    const image = await page.screenshot({
      animations: 'disabled',
      mask: [page.locator('img')],
    })
    expect(image).toMatchImageSnapshot({
      customSnapshotIdentifier: context.id,
      customDiffDir: `${process.cwd()}/__diff_output__`,
      customSnapshotsDir: `${process.cwd()}/__image_snapshots__`,
    })
  },
  tags: {
    skip: ['skip-test'],
  },
}

let config: TestRunnerConfig = {}
if (process.env.TEST_RUNNER === 'a11y') {
  config = a11yTestConfig
}
if (process.env.TEST_RUNNER === 'vrt') {
  config = vrtTestConfig
}

export default config
