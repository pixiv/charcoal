import { createGlobalStyle } from 'styled-components'
import { theme } from '../utils/theme'

export const GlobalStyle = createGlobalStyle`
html, body, #__next {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  ${theme((o) => o.font.text1)}
}

p {
  line-height: 24px;
}

* {
  box-sizing: border-box;
}

pre {
  width: 100%;
  margin-bottom: 0;
}

`
