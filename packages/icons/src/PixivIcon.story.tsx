/// <reference types='@types/webpack-env' />

import React from 'react'
import { createGlobalStyle } from 'styled-components'
import TestIconThatNeverExists from './16/TestIconThatNeverExists.svg'
import { Props } from './PixivIcon'
import { PixivIcon } from '.'

interface Story<P> {
  (args: P): React.ReactNode
  args?: P
}

// TODO: 自動生成
const knownIconFiles = [
  '32/ShareIos',
  '32/Dot',
  '24/Expand',
  '24/Collapse',
  '24/Close',
  '24/Pencil',
  '24/PencilDraw',
  '16/More',
  '16/Back',
  '16/Search',
  '16/Add',
  '16/Check',
]

PixivIcon.extend({
  // かぶらなそうな名前をつける
  '16/TestIconThatNeverExists': TestIconThatNeverExists,
})

export default {
  title: 'Icons/PixivIcon (<pixiv-icon>)',
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
    name: {
      control: {
        type: 'select',
        options: [...knownIconFiles, '16/TestIconThatNeverExists'],
      },
    },
    scale: {
      control: {
        type: 'select',
        options: [1, 2, 3],
      },
    },
  },
}

const DefaultStory: Story<Props & { color: string }> = ({
  name,
  scale,
  color,
}) => (
  <>
    <div style={{ color, display: 'inline-flex', alignItems: 'center' }}>
      <pixiv-icon name={name} scale={scale} />
      アイコンと文字
    </div>
    <Global />
  </>
)

export const Default = DefaultStory.bind({})

Default.args = { name: '16/Add', scale: 1, color: '#000000' }

const Global = createGlobalStyle`
  .icon-class {
    transform: rotate(45deg);
  }
`

export const WithAttributes: Story<Props & { color: string }> = ({
  name,
  scale,
  color,
}) => (
  <>
    <div style={{ color, display: 'inline-flex', alignItems: 'center' }}>
      <pixiv-icon class="icon-class" name={name} scale={scale} />
      アイコンと文字
    </div>
    <Global />
  </>
)

WithAttributes.args = { name: '16/Add', scale: 1, color: '#000000' }

export const WithUnsafe: Story<Props & { color: string }> = ({
  name,
  scale,
  color,
}) => (
  <>
    <div style={{ color, display: 'inline-flex', alignItems: 'center' }}>
      <pixiv-icon unsafe-non-guideline-scale="3.75" name={name} scale={scale} />
      アイコンと文字
    </div>
    <Global />
  </>
)

WithUnsafe.args = { name: '16/Add', scale: 1, color: '#000000' }
