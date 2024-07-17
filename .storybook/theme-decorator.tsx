import React, { useLayoutEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from 'storybook-dark-mode'
import { light, dark } from '@charcoal-ui/theme'
import { themeSetter } from '@charcoal-ui/styled'

import '../packages/theme/src/css/_variables_dark.css'
import '../packages/theme/src/css/_variables_light.css'

const setter = themeSetter()

const Theme = ({ children }) => {
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
    </ThemeProvider>
  )
}

export default (Story) => (
  <Theme>
    <Story />
  </Theme>
)
