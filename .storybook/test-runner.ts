import type { TestRunnerConfig } from '@storybook/test-runner'
import { StyledStory } from '../styled-story-serializer/utils'

const config: TestRunnerConfig = {
  async postVisit(page) {
    const elementHandler = await page.$('html')
    if (elementHandler === null) throw new Error('element not found')

    const innerHTML = await elementHandler.innerHTML()
    const story = new StyledStory(innerHTML)

    expect(story).toMatchSnapshot()
  },
}

export default config
