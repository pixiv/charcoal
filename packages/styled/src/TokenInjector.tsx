import React from 'react'
import { createGlobalStyle, css } from 'styled-components'
import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { defineThemeVariables } from './util'

const GlobalStyle = createGlobalStyle`
  ${<T extends Theme>({
    themeMap,
    background,
  }: {
    themeMap: ThemeMap<T>
    background?: keyof ThemeMap<T>[string]['color']
  }) =>
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
          `
    )}
`

export interface ThemeMap<T extends Theme> {
  ':root': T
  [mediaQuery: `@media (${string})`]: T
  [selector: string]: T
}

type Theme = Pick<CharcoalAbstractTheme, 'color' | 'effect' | 'elementEffect'>

export default function TokenInjector<T extends Theme>({
  theme: themeMap,
  background,
}: {
  theme: ThemeMap<T>
  background?: keyof ThemeMap<T>[string]['color']
}) {
  return <GlobalStyle themeMap={themeMap} background={background} />
}

const defineColorVariableCSS = (theme: Theme) =>
  Object.entries(defineThemeVariables(theme.color)({ theme }))
    .map(([varName, value]) => variableDefinition(varName, value.toString()))
    .join(';')

const variableDefinition = (prop: string, value: string) => `${prop}: ${value}`
