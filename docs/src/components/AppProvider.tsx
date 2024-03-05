import { SSRProvider } from '@charcoal-ui/react'
import { FC, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyle'
import {
  TokenInjector,
  useTheme,
  useThemeSetter,
  themeSelector,
  prefersColorScheme,
  addThemeUtils,
} from '@charcoal-ui/styled'

import { light, dark } from '@charcoal-ui/theme'

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme] = useTheme()
  useThemeSetter()

  const themeWithUtils = addThemeUtils(theme === 'dark' ? dark : light)
  return (
    <SSRProvider>
      <ThemeProvider theme={themeWithUtils}>
        <GlobalStyle />
        <TokenInjector
          theme={{
            ':root': light,
            [themeSelector('light')]: light,
            [themeSelector('dark')]: dark,
            [prefersColorScheme('dark')]: dark,
          }}
          background="background1"
        />
        {children}
      </ThemeProvider>
    </SSRProvider>
  )
}
