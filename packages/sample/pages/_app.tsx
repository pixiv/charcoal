import React from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@charcoal-ui/theme'
import {
  TokenInjector,
  initialThemeSetter,
  useTheme,
  useThemeSetter,
  themeSelector,
  prefersColorScheme,
} from '@charcoal-ui/styled'

initialThemeSetter()

function MyApp({ Component, pageProps }: AppProps) {
  const [theme] = useTheme()
  useThemeSetter()

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <Component {...pageProps} />
      <TokenInjector
        theme={{
          ':root': light,
          [themeSelector('light')]: light,
          [themeSelector('dark')]: dark,
          [prefersColorScheme('dark')]: dark,
        }}
        background="background1"
      />
    </ThemeProvider>
  )
}

export default MyApp
