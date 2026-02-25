import React, { useLayoutEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@charcoal-ui/theme'
import { useDarkMode } from './use-dark-mode'
import { TokenInjector, themeSelector, themeSetter } from '@charcoal-ui/styled'

import '../packages/theme/src/unstable-css/_variables_dark.css'
import '../packages/theme/src/unstable-css/_variables_light.css'
import '../packages/react/dist/index.css'

const setter = themeSetter()

const Theme = ({
  children,
  globals,
}: {
  children: React.ReactNode
  globals?: Record<string, unknown>
}) => {
  const isDarkMode = useDarkMode(globals)

  useLayoutEffect(() => {
    if (isDarkMode) {
      setter('dark')
    } else {
      setter('light')
    }
  }, [isDarkMode])

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
  context: { globals: Record<string, unknown> },
) => (
  <Theme globals={context.globals}>
    <Story />
  </Theme>
)
