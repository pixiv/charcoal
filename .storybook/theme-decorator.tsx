import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from 'storybook-dark-mode'
import createTheme from '@charcoal/styled'

const { light, dark } = createTheme

const Theme = ({ children }) => (
  <ThemeProvider theme={useDarkMode() ? dark : light}>{children}</ThemeProvider>
)

export default (Story) => (
  <Theme>
    <Story />
  </Theme>
)
