/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* lint runs before build so json does not exist */

import { Meta, StoryObj } from '@storybook/react'
import TokenV2Styled from './TokenV2Styled'
import TokenV2Tailwind from './TokenV2Tailwind'

export default {
  title: 'react/docs/Token-v2-demo',
  component: TokenV2Styled,
} as Meta<typeof TokenV2Styled>

export const Styled: StoryObj<typeof TokenV2Styled> = {
  render: TokenV2Styled,
}
export const Tailwind: StoryObj<typeof TokenV2Styled> = {
  render: TokenV2Tailwind,
}
