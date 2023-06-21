import { useLayoutEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from 'storybook-dark-mode'
import { light, dark } from '@charcoal-ui/theme'
import { TokenInjector, themeSelector, themeSetter } from '@charcoal-ui/styled'

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
      <TokenInjector
        theme={{
          ':root': light,
          [themeSelector('dark')]: dark,
          [themeSelector('light')]: light,
        }}
      ></TokenInjector>
    </ThemeProvider>
  )
}

export default (Story) => (
  <Theme>
    <Story />
  </Theme>
)
