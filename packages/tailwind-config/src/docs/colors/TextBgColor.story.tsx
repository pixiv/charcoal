import React from 'react'
import type { Story } from '../../_lib/compat'

import { colors } from '.'

export default {
  title: 'tailwind-config/Colors/Text bg color',
  argTypes: {
    textColorClass: {
      control: {
        type: 'select',
        options: Object.keys(colors).map((color) => `text-${color}`),
      },
      defaultValue: 'text-text1',
    },
    bgColorClass: {
      control: {
        type: 'select',
        options: Object.keys(colors).map((color) => `bg-${color}`),
      },
      defaultValue: 'bg-background1',
    },
  },
}

type Props = Readonly<{
  textColorClass: string
  bgColorClass: string
}>

export const Playground: Story<Props> = ({ textColorClass, bgColorClass }) => (
  <div className={`${bgColorClass} p-64 max-w-2xl`}>
    <p className={`typography-20 ${textColorClass}`}>
      charcoal はピクシブ株式会社のデザインシステムです。ここでは特に、Web
      フロントエンドの実装に用いる npm パッケージ集のことを言います。Lorem ipsum
      dolor sit amet, consectetur adipiscing elit. Aliquam at odio bibendum nisl
      mollis eleifend et quis turpis. Quisque dignissim porta justo ut
      convallis.dipiscing elit.
    </p>
  </div>
)
