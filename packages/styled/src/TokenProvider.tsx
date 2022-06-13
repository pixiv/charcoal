import { applyEffect } from '@charcoal-ui/utils'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { customVariableToken } from './lib'

const GlobalStyle = createGlobalStyle`
  :root {
    ${({ theme }) =>
      Object.entries(theme.color)
        .flatMap(([colorKey, color]) => [
          variableDefinition(customVariableToken(colorKey), color),
          ...Object.entries(theme.effect).map(([effectKey, effect]) =>
            variableDefinition(
              customVariableToken(colorKey, [effectKey]),
              applyEffect(color, [effect])
            )
          ),
        ])
        .join(';')}
  }
`

const variableDefinition = (prop: string, value: string) => `${prop}: ${value}`

export default function TokenProvider() {
  return <GlobalStyle></GlobalStyle>
}
