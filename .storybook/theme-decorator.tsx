import React, { useLayoutEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from 'storybook-dark-mode'
import { light, dark, CharcoalTheme } from '@charcoal-ui/theme'
import { TokenInjector, themeSelector, themeSetter } from '@charcoal-ui/styled'

declare module 'styled-components' {
  export interface DefaultTheme extends CharcoalTheme {}
}

const setter = themeSetter()

const Theme: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const isDarkMode = useDarkMode()

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
      />
    </ThemeProvider>
  )
}

export default (Story: React.ComponentType) => (
  <Theme>
    <Story />
  </Theme>
)
