import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { applyEffect, customPropertyToken } from '@charcoal-ui/utils'
import React from 'react'
import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle<{
  def: ThemeDefinition
  prefersColorScheme: boolean
}>`
  ${({ def, prefersColorScheme }) =>
    Object.entries(def).map(
      ([key, theme]) => css`
        ${key === 'light'
          ? `:root, :root[data-theme=${key}]`
          : `:root[data-theme=${key}]`} {
          ${customProperties(theme)}
        }
        ${prefersColorScheme &&
        isCompatibleWithPrefersColorScheme(key) &&
        css`
          @media (prefers-color-scheme: ${key}) {
            :root {
              ${customProperties(theme)}
            }
          }
        `}
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

const isCompatibleWithPrefersColorScheme = (key: string) =>
  ['light', 'dark'].includes(key)

const variableDefinition = (prop: string, value: string) => `${prop}: ${value}`

type ThemeDefinition = {
  [key: string]: Pick<CharcoalAbstractTheme, 'color' | 'effect'>
}

export default function TokenProvider({
  theme,
  prefersColorScheme = false,
}: {
  theme: ThemeDefinition
  prefersColorScheme?: boolean
}) {
  return (
    <GlobalStyle
      def={theme}
      prefersColorScheme={prefersColorScheme}
    ></GlobalStyle>
  )
}
