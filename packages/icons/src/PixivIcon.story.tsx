/// <reference types='@types/webpack-env' />

import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import TestIconThatNeverExists from './16/TestIconThatNeverExists.svg'
import { Props } from './PixivIcon'
import { PixivIcon } from '.'
import { KnownIconFile, KNOWN_ICON_FILES } from './charcoalIconFiles'

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

const Global = createGlobalStyle`
  :root {
    font-family: Helvetica, Arial, sans-serif;
    color: rgba(#000, 0.88);
  }

  .icon-class {
    transform: rotate(45deg);
  }
`

const Grid = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr 1fr 1fr;
`

const Group = styled.div`
  & + & {
    margin-top: 64px;
  }
`

const IconDef = styled.div<{ color: string }>`
  color: ${({ color }) => color};
  display: inline-flex;
  align-items: center;
  min-height: 32px;

  pixiv-icon {
    display: block;
    flex-shrink: 0;

    & + div {
      flex: 1 0;
      margin-left: 8px;
      font-size: 14px;
      line-height: 22px;
    }
  }
`

const Heading = styled.h2`
  font-size: 20px;
  line-height: 28px;
  font-weight: bold;
  margin: 16px 0;
`

const DefaultStory: Story<{
  scale: NonNullable<Props['scale']>
  color: string
}> = ({ scale, color }) => (
  <>
    {Object.entries(groupedIcons).map(([groupName, icons]) => (
      <Group key={groupName}>
        <Heading>
          {groupName} (scale: {scale})
        </Heading>
        <Grid>
          {icons.map((name) => (
            <IconDef color={color} key={name}>
              <pixiv-icon key={scale} name={name} scale={scale} />
              <div>{name}</div>
            </IconDef>
          ))}
        </Grid>
      </Group>
    ))}
    <Global />
  </>
)

export const Default = DefaultStory.bind({})

Default.args = { scale: 1, color: '#000000' }

export const WithAttributes: Story<Props & { color: string }> = ({
  name,
  scale,
  color,
}) => (
  <>
    <IconDef color={color}>
      <pixiv-icon class="icon-class" name={name} scale={scale} />
      <div>アイコンと文字</div>
    </IconDef>
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
    <IconDef color={color}>
      <pixiv-icon unsafe-non-guideline-scale="3.75" name={name} scale={scale} />
      アイコンと文字
    </IconDef>
    <Global />
  </>
)

WithUnsafe.args = { name: '16/Add', scale: 1, color: '#000000' }
