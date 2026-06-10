import React, { useLayoutEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@charcoal-ui/theme'
import { useDarkMode } from './use-dark-mode'
import { TokenInjector, themeSelector, themeSetter } from '@charcoal-ui/styled'

import '../packages/theme/src/css/_token_v1.css'
import '../packages/theme/src/css/_variables_dark.css'
import '../packages/theme/src/css/_variables_light.css'
import '../packages/react/dist/index.css'

const setter = themeSetter()

const Theme = ({
  children,
  globals,
  parameters,
}: {
  children: React.ReactNode
  globals?: Record<string, unknown>
  parameters?: Record<string, unknown>
}) => {
  const isDarkMode = useDarkMode(globals)
  const isTokenV2 = parameters?.tokenVersion === 'v2'

  useLayoutEffect(() => {
    if (isDarkMode) {
      setter('dark')
    } else {
      setter('light')
    }
  }, [isDarkMode])

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('ch-token-v2', isTokenV2)

    return () => {
      document.documentElement.classList.remove('ch-token-v2')
    }
  }, [isTokenV2])

  return (
    <ThemeProvider theme={isDarkMode ? dark : light}>
      <div data-dark={isDarkMode}>{children}</div>
      <TokenInjector
        theme={{
          ':root': light,
          [themeSelector('dark')]: dark,
          [themeSelector('light')]: light,
        }}
        background="background1"
      ></TokenInjector>
    </ThemeProvider>
  )
}

export default (
  Story: React.ComponentType,
  context: {
    globals: Record<string, unknown>
    parameters: Record<string, unknown>
  },
) => (
  <Theme globals={context.globals} parameters={context.parameters}>
    <Story />
  </Theme>
)
