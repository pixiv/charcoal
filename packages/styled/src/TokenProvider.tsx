import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { applyEffect, customPropertyToken } from '@charcoal-ui/utils'
import React from 'react'
import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle<{ def: ThemeDefinition }>`
  ${({ def }) =>
    Object.entries(def).map(
      ([key, theme]) => css`
        :root${key === 'default' ? '' : `[data-theme=${key}]`} {
          ${Object.entries(theme.color)
            .flatMap(([colorKey, color]) => [
              variableDefinition(customPropertyToken(colorKey), color),
              ...Object.entries(theme.effect).map(([effectKey, effect]) =>
                variableDefinition(
                  customPropertyToken(colorKey, [effectKey]),
                  applyEffect(color, [effect])
                )
              ),
            ])
            .join(';')}
        }
      `
    )}
`

const variableDefinition = (prop: string, value: string) => `${prop}: ${value}`

type ThemeDefinition = {
  [key: string]: Pick<CharcoalAbstractTheme, 'color' | 'effect'>
}

export default function TokenProvider({ theme }: { theme: ThemeDefinition }) {
  return <GlobalStyle def={theme}></GlobalStyle>
}
