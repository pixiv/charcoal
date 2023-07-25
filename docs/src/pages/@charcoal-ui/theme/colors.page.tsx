import { css, DefaultTheme, useTheme } from 'styled-components'
import { ContentRoot } from '../../../components/ContentRoot'

import { theme } from '../../../utils/theme'

export default function InstallPage() {
  const t = useTheme()
  return (
    <ContentRoot>
      <h1>Colors</h1>
      <p>
        このドキュメントサイトのテーマに従ってカラーコードが表示されています。
      </p>

      <div
        css={css`
          font-family: 'SF Mono', SFMono-Regular, ui-monospace,
            'DejaVu Sans Mono', Menlo, Consolas, monospace;
        `}
      >
        {bgList.map((bg) => {
          return (
            <div
              key={bg}
              css={css`
                ${theme((o) => o.bg[bg as ColorProps])}
              `}
            >
              {bg} {t.color[bg]}
              {textList.map((text) => {
                return (
                  <div
                    key={text}
                    css={css`
                      ${theme((o) => o.font[text as ColorProps])}
                    `}
                  >
                    {text} {t.color[text]}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </ContentRoot>
  )
}

type ColorProps = keyof DefaultTheme['color']

const bgList: ColorProps[] = [
  'background1',
  'background2',
  'surface1',
  'surface2',
  'surface3',
  'surface4',
  'surface6',
  'surface7',
  'surface8',
  'surface9',
  'surface10',
]

const textList: ColorProps[] = [
  'text1',
  'text2',
  'text3',
  'text4',
  'text5',
  'icon6',
  'link1',
  'link2',
]
