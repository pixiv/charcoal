import { createGlobalStyle, css } from 'styled-components'
import { theme } from '../utils/theme'

const resetPixivIcon = css`
  pixiv-icon {
    display: inline-flex;
    width: calc(var(--icon-size, 1em) * var(--scale, 1));
    height: calc(var(--icon-size, 1em) * var(--scale, 1));

    &[name^='Inline/'] {
      --icon-size: 1em;

      &[scale='2'] {
        --icon-size: 2em;
      }
    }

    &[name^='16/'] {
      --icon-size: 16px;
    }

    &[name^='24/'] {
      --icon-size: 24px;

      &[scale='2'] {
        --icon-size: 48px;
      }

      &[scale='3'] {
        --icon-size: 72px;
      }
    }

    &[name^='32/'] {
      --icon-size: 32px;
    }

    /** NOTICE: 現状だと attr(... number) はほとんどのブラウザで動かない */
    &[scale] {
      --scale: attr(scale number);
    }

    &[unsafe-non-guideline-scale] {
      --scale: attr(unsafe-non-guideline-scale number);
    }
  }
`

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

${resetPixivIcon}
`
