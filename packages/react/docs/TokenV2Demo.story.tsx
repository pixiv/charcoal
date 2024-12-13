/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* lint runs before build so json does not exist */

import { Meta, StoryObj } from '@storybook/react'
import TokenV2DemoStyledComponents from './TokenV2DemoStyledComponents'
import TokenV2Tailwind from './TokenV2DemoTailwind'

export default {
  title: 'theme/Toke v2 Demo',
  component: TokenV2DemoStyledComponents,
} as Meta<typeof TokenV2DemoStyledComponents>

export const Styled: StoryObj<typeof TokenV2DemoStyledComponents> = {
  render: TokenV2DemoStyledComponents,
}
export const Tailwind: StoryObj<typeof TokenV2Tailwind> = {
  render: TokenV2Tailwind,
}
