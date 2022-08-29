import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { applyEffect, customPropertyToken } from '@charcoal-ui/utils'
import React from 'react'
import { createGlobalStyle, css } from 'styled-components'

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
                ${customProperties(theme)}
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

export interface ThemeMap<T extends Theme> {
  ':root': T
  [mediaQuery: `@media (${string})`]: T
  [selector: string]: T
}

type Theme = Pick<CharcoalAbstractTheme, 'color' | 'effect'>

export default function TokenInjector<T extends Theme>({
  theme: themeMap,
  background,
}: {
  theme: ThemeMap<T>
  background?: keyof ThemeMap<T>[string]['color']
}) {
  return <GlobalStyle themeMap={themeMap} background={background}></GlobalStyle>
}

export function defineColorTheme<T extends CharcoalAbstractTheme>(
  theme: T
): React.CSSProperties {
  return Object.fromEntries(
    Object.entries(theme.color).flatMap(([colorKey, color]) => [
      [customPropertyToken(colorKey), color] as const,
      ...Object.entries(theme.effect).map(
        ([effectKey, effect]) =>
          [
            customPropertyToken(colorKey, [effectKey]),
            applyEffect(color, [effect]),
          ] as const
      ),
    ])
  )
}
