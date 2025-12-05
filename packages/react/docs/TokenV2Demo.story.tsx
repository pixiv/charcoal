/* lint runs before build so json does not exist */

import { Meta, StoryObj } from '@storybook/react-vite'
import TokenV2Styled from './TokenV2DemoStyled'
import TokenV2Tailwind from './TokenV2DemoTailwind'

export default {
  title: 'theme/Token v2 Demo',
  component: TokenV2Styled,
} as Meta<typeof TokenV2Styled>

export const Styled: StoryObj<typeof TokenV2Styled> = {
  render: TokenV2Styled,
}
export const Tailwind: StoryObj<typeof TokenV2Tailwind> = {
  render: TokenV2Tailwind,
}
