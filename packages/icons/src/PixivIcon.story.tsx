/// <reference types='@types/webpack-env' />

import styled, { createGlobalStyle } from 'styled-components'
import './PixivIcon.story.css'
import TestIconThatNeverExists from './16/TestIconThatNeverExists.svg'
import { PixivIcon, Props } from '@charcoal-ui/icons'
import { KnownIconFile, KNOWN_ICON_FILES } from './charcoalIconFiles'
import iconsV2 from '@charcoal-ui/icon-files/v2'
import type { Meta, StoryObj } from '@storybook/react-vite'

declare module '.' {
  export interface KnownIconType {
    '16/TestIconThatNeverExists': string
    '16/TestIconFileThatNeverExists': () => Promise<string>
  }
}

PixivIcon.extend({
  // かぶらなそうな名前をつける
  '16/TestIconThatNeverExists': TestIconThatNeverExists,
  '16/TestIconFileThatNeverExists': () =>
    import('./16/TestIconThatNeverExists.js').then((m) => m.default),
  ...iconsV2,
})

const meta: Meta<Props> = {
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
  parameters: {
    storyshots: {
      disable: false,
    },
  },
  render(props) {
    return (
      <>
        <IconGroup {...props} />
        <hr />
        <h2>Icons V2</h2>
        <IconGroup {...props} group={groupedIconsV2} />
      </>
    )
  },
}

function IconGroup({
  scale,
  color,
  group = groupedIcons,
}: Props & { group?: Record<string, KnownIconFile[]> }) {
  return (
    <>
      {Object.entries(group).map(([groupName, icons]) => (
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
}

export default meta

const groupIcons = (icons: KnownIconFile[]) =>
  icons.reduce<Record<string, KnownIconFile[]>>((map, icon) => {
    const [prefix] = icon.split('/')

    if (prefix in map) {
      map[prefix].push(icon)
    } else {
      map[prefix] = [icon]
    }

    return map
  }, {})
const groupedIcons = groupIcons(KNOWN_ICON_FILES)
const groupedIconsV2 = groupIcons(Object.keys(iconsV2) as KnownIconFile[])

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

const IconDef = styled.div<{ color?: string }>`
  color: ${({ color }) => color ?? '#000000'};
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

export const Default: StoryObj<Props> = {
  args: { scale: 1, color: '#000000' },
  parameters: {
    vrt: {
      viewport: {
        width: 1280,
        height: 12000,
      },
    },
  },
}

export const WithAttributes: StoryObj<Props> = {
  render: ({ color, name, scale }) => (
    <div>
      <IconDef color={color}>
        <pixiv-icon class="icon-class" name={name} scale={scale} />
        <div>アイコンと文字</div>
      </IconDef>
      <Global />
    </div>
  ),
  args: {
    name: '16/Add',
    scale: 1,
    color: '#000000',
  },
  parameters: {
    vrt: {
      viewport: {
        width: 1280,
        height: 720,
      },
    },
  },
}

export const WithFixedSize: StoryObj<Props> = {
  render: ({ color, name, scale, ...args }) => {
    return (
      <>
        <IconDef color={color}>
          <pixiv-icon
            fixed-size={args['fixed-size']}
            name={name}
            scale={scale}
          />
          アイコンと文字
        </IconDef>
        <Global />
      </>
    )
  },
  args: {
    name: '16/Add',
    'fixed-size': '60',
    color: '#000000',
  },
  parameters: {
    vrt: {
      viewport: {
        width: 1280,
        height: 720,
      },
    },
  },
}

export const WithUnsafeNonGuidelineScale: StoryObj<Props> = {
  render: ({ color, name, scale, ...args }) => {
    return (
      <>
        <IconDef color={color}>
          <pixiv-icon
            unsafe-non-guideline-scale={args['unsafe-non-guideline-scale']}
            name={name}
            scale={scale}
          />
          アイコンと文字 (deprecated)
        </IconDef>
        <Global />
      </>
    )
  },
  args: {
    name: '16/Add',
    'unsafe-non-guideline-scale': '3.75',
    color: '#000000',
  },
  parameters: {
    vrt: {
      viewport: {
        width: 1280,
        height: 720,
      },
    },
  },
}

/**
 * typed `attr()` (Chrome 133+) 専用ストーリー。
 * `<pixiv-icon fixed-size="N">` / `unsafe-non-guideline-scale` に
 * inline style (`style="--charcoal-icon-size: Npx"`) を付けない生 HTML 状態で、
 * icon.css の `@supports (width: attr(fixed-size px))` ブロックが
 * `pixiv-icon:not(:defined)` の段階から寸法を確保することを示す。
 */
export const WithTypedAttr: StoryObj<Props> = {
  name: 'typed attr() — inline style 不要 (Chrome 133+)',
  render: () => <TypedAttrStory />,
  parameters: {
    vrt: {
      viewport: {
        width: 1280,
        height: 720,
      },
    },
  },
}

function TypedAttrStory() {
  const supported =
    typeof CSS !== 'undefined' && CSS.supports('width', 'attr(fixed-size px)')
  return (
    <>
      <div className="typed-attr-description">
        <p>
          Chrome 133+ など typed <code>attr()</code> 対応ブラウザでは、生 HTML
          の <code>{'<pixiv-icon fixed-size="N">'}</code> に{' '}
          <code>{'style="--charcoal-icon-size: Npx"'}</code> を併記しなくても、{' '}
          <code>pixiv-icon:not(:defined)</code>{' '}
          の段階から正しい寸法が確保されます。 非対応ブラウザでも web component
          upgrade 後に寸法が反映されるため、見た目は同じ。
        </p>
        <p>
          このブラウザでの判定:{' '}
          <strong>
            {supported
              ? '✅ typed attr() 対応 (CSS だけで寸法確定)'
              : '❌ 未対応 (upgrade 後に寸法確定)'}
          </strong>
        </p>
      </div>
      <div className="typed-attr-row">
        <pixiv-icon name="24/Add" fixed-size="40" />
        <code>{'fixed-size="40"'}</code>
      </div>
      <div className="typed-attr-row">
        <pixiv-icon name="24/Add" fixed-size="12" />
        <code>{'fixed-size="12"'}</code>
      </div>
      <div className="typed-attr-row">
        <pixiv-icon name="24/Add" unsafe-non-guideline-scale="2" />
        <code>{'unsafe-non-guideline-scale="2"'}</code> (deprecated)
      </div>
      <div className="typed-attr-row">
        <pixiv-icon name="24/Add" unsafe-non-guideline-scale="1.5" />
        <code>{'unsafe-non-guideline-scale="1.5"'}</code> (deprecated)
      </div>
      <Global />
    </>
  )
}

export const RawIconFile: StoryObj<Props> = {
  render: ({ color, name, scale }) => {
    return (
      <>
        <IconDef color={color}>
          <pixiv-icon name={name} scale={scale} />
          アイコンと文字
        </IconDef>
        <Global />
      </>
    )
  },
  args: {
    name: '16/TestIconFileThatNeverExists',
    scale: 1,
    color: '#000000',
  },
  parameters: {
    vrt: {
      viewport: {
        width: 1280,
        height: 720,
      },
    },
  },
}
