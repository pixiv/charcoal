/// <reference types='@types/webpack-env' />

import React from 'react'
import { createGlobalStyle } from 'styled-components'
import TestIconThatNeverExists from './16/TestIconThatNeverExists.svg'
import { Props } from './PixivIcon'
import { PixivIcon } from '.'
import { KnownIconFile, KNOWN_ICON_FILES } from './filenames'

interface Story<P> {
  (args: P): React.ReactNode
  args?: P
}

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
        options: [...KNOWN_ICON_FILES, '16/TestIconThatNeverExists'],
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

const groupedIcons = KNOWN_ICON_FILES.reduce<Record<string, KnownIconFile[]>>(
  (map, icon) => {
    const [prefix] = icon.split('/')

    if (prefix in map) {
      map[prefix].push(icon)
    } else {
      map[prefix] = [icon]
    }

    return map
  },
  {}
)

const DefaultStory: Story<{
  scale: NonNullable<Props['scale']>
  color: string
}> = ({ scale, color }) => (
  <>
    {Object.entries(groupedIcons).map(([groupName, icons]) => (
      <div key={groupName}>
        <h2>
          {groupName} (scale: {scale})
        </h2>
        <div
          style={{
            color,
            display: 'grid',
            gap: 8,
            gridTemplateColumns: '1fr 1fr 1fr',
          }}
        >
          {icons.map((name) => (
            <div
              key={name}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                minHeight: 32,
              }}
            >
              <div style={{ flexShrink: 0 }}>
                <pixiv-icon key={scale} name={name} scale={scale} />
              </div>
              <div style={{ flex: '1 0' }}>{name}</div>
            </div>
          ))}
        </div>
      </div>
    ))}
    <Global />
  </>
)

export const Default = DefaultStory.bind({})

Default.args = { scale: 1, color: '#000000' }

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
