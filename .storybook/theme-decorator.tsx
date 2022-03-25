import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from 'storybook-dark-mode'
import { light, dark } from '@charcoal-ui/theme'

const Theme = ({ children }) => (
  <ThemeProvider theme={useDarkMode() ? dark : light}>{children}</ThemeProvider>
)

export default (Story) => (
  <Theme>
    <Story />
  </Theme>
)
