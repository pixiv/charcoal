import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { applyEffect, customPropertyToken } from '@charcoal-ui/utils'
import React from 'react'
import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle<{
  themeMap: ThemeMap
}>`
  ${({ themeMap }) =>
    Object.entries(themeMap).map(([key, theme]) =>
      key.startsWith('@media')
        ? css`
            ${key} {
              :root {
                ${customProperties(theme)}
              }
            }
          `
        : css`
            ${key} {
              ${customProperties(theme)}
            }
          `
    )}
`

const customProperties = (
  theme: Pick<CharcoalAbstractTheme, 'color' | 'effect'>
) =>
  Object.entries(theme.color)
    .flatMap(([colorKey, color]) => [
      variableDefinition(customPropertyToken(colorKey), color),
      ...Object.entries(theme.effect).map(([effectKey, effect]) =>
        variableDefinition(
          customPropertyToken(colorKey, [effectKey]),
          applyEffect(color, [effect])
        )
      ),
    ])
    .join(';')

const variableDefinition = (prop: string, value: string) => `${prop}: ${value}`

export interface ThemeMap {
  ':root': Theme
  [mediaQuery: `@media (${string})`]: Theme
  [selector: string]: Theme
}

type Theme = Pick<CharcoalAbstractTheme, 'color' | 'effect'>

export default function TokenInjector({
  theme: themeMap,
}: {
  theme: ThemeMap
}) {
  return <GlobalStyle themeMap={themeMap}></GlobalStyle>
}
