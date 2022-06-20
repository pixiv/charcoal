import React, { useLayoutEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from 'storybook-dark-mode'
import { light, dark } from '@charcoal-ui/theme'
import { TokenProvider } from '@charcoal-ui/styled'

const Theme = ({ children }) => {
  const isDarkMode = useDarkMode()

  useLayoutEffect(() => {
    if (isDarkMode) {
      document.documentElement.dataset.theme = 'dark'
    } else {
      document.documentElement.dataset.theme = undefined
    }
  }, [isDarkMode])

  return (
    <ThemeProvider theme={isDarkMode ? dark : light}>
      <div data-dark={isDarkMode}>{children}</div>
      <TokenProvider theme={{ default: light, dark }}></TokenProvider>
    </ThemeProvider>
  )
}

export default (Story) => (
  <Theme>
    <Story />
  </Theme>
)
