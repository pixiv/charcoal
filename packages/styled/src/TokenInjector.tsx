import { createGlobalStyle, css } from 'styled-components'
import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { defineThemeVariables, withPrefixes } from './util'
import { mapObject } from '@charcoal-ui/utils'

const GlobalStyle = createGlobalStyle<{
  themeMap: ThemeMap<Theme>
  background?: keyof ThemeMap<Theme>[string]['color']
}>`
  ${({ themeMap, background }) =>
    Object.entries(themeMap).map(([key, theme]) =>
      key.startsWith('@media')
        ? css`
            ${key} {
              :root {
                ${background !== undefined &&
                css`
                  background-color: ${theme.color[background]};
                `}
                ${defineColorVariableCSS(theme)}
              }
            }
          `
        : css`
            /* stylelint-disable-next-line no-duplicate-selectors */
            ${key} {
              ${background !== undefined &&
              css`
                background-color: ${theme.color[background]};
              `}
              ${defineColorVariableCSS(theme)}
            }
          `,
    )}
`

export interface ThemeMap<T extends Theme> {
  ':root': T
  [mediaQuery: `@media (${string})`]: T
  [selector: string]: T
}

type Theme = Pick<CharcoalAbstractTheme, 'color' | 'effect' | 'border'>

export default function TokenInjector<T extends Theme>({
  theme: themeMap,
  background,
}: {
  theme: ThemeMap<T>
  background?: keyof ThemeMap<T>[string]['color']
}) {
  return <GlobalStyle themeMap={themeMap} background={background} />
}

const defineColorVariableCSS = (theme: Theme) => {
  const borders = mapObject(theme.border, (name, { color }) => [
    // REVIEW: もしtheme.colorにたまたまborder-〇〇で始まる色名がいたら被りうる
    withPrefixes('border', name),
    color,
  ])

  const colors = defineThemeVariables({ ...theme.color, ...borders })({ theme })

  return toCSSVariables(colors)
}

function toCSSVariables(css: Record<string, string | number>) {
  return Object.entries(css)
    .map(([varName, value]) => variableDefinition(varName, value.toString()))
    .join(';')
}

const variableDefinition = (prop: string, value: string) => `${prop}: ${value}`
