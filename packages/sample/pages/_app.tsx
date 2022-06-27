import React from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@charcoal-ui/theme'
import {
  TokenProvider,
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
      <TokenProvider
        theme={{
          ':root': light,
          [themeSelector('light')]: light,
          [themeSelector('dark')]: dark,
          [prefersColorScheme('dark')]: dark,
        }}
      />
    </ThemeProvider>
  )
}

export default MyApp
