import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from 'storybook-dark-mode'
import { light, dark } from '@charcoal-ui/theme'
import { TokenProvider } from '@charcoal-ui/styled'

const Theme = ({ children }) => {
  const isDarkMode = useDarkMode()
  return (
    <ThemeProvider theme={isDarkMode ? dark : light}>
      <div data-dark={isDarkMode}>{children}</div>
      <TokenProvider></TokenProvider>
    </ThemeProvider>
  )
}

export default (Story) => (
  <Theme>
    <Story />
  </Theme>
)
