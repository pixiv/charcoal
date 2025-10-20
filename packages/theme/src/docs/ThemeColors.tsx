import type { JSX } from 'react'
import { light, dark, ThemeColor } from '..'
import { useDarkMode } from '../../../../.storybook/use-dark-mode'

type ColorProps = keyof ThemeColor

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

export const ThemeColors = (): JSX.Element => {
  const isDark = useDarkMode()
  const theme = isDark ? dark : light
  theme.color.background1
  return (
    <div
      style={{
        fontFamily:
          "'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono', Menlo, Consolas, monospace",
      }}
    >
      {bgList.map((bg) => (
        <div
          key={bg}
          style={{
            color: theme.color.text1,
            backgroundColor: theme.color[bg],
          }}
        >
          {bg} {theme.color[bg]}
          {textList.map((text) => (
            <div
              key={text}
              style={{
                color: theme.color[text],
              }}
            >
              {text} {theme.color[text]}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
