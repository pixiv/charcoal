import { createInternal } from "../internals"

const css = (css: string) => createInternal({
  toCSS() { return css as any }
})

export const bg = {
  brand: {
    toString() {
        return css('background-color: var(--charcoal-brand);')
    },
    hover: {
        toString() {
            return css(`
                background-color: var(--charcoal-brand);
                &:hover:not(:disabled):not([aria-disabled]),
                &:hover:not(:disabled):not([aria-disabled]) {
                    background-color: var(--charcoal-brand-hover);
                }`)
        },
        press: css(`
            background-color: var(--charcoal-brand);
            &:hover:not(:disabled):not([aria-disabled]),
            &:hover:not(:disabled):not([aria-disabled]) {
                background-color: var(--charcoal-brand-hover);
            }
            &:active:not(:disabled):not([aria-disabled]),
            &:active[aria-disabled=false] {
                background-color: var(--charcoal-brand-press);
            }`)
    },
    press: {
        toString() {
            return css(`
                background-color: var(--charcoal-brand);
                &:active:not(:disabled):not([aria-disabled]),
                &:active[aria-disabled=false] {
                    background-color: var(--charcoal-brand-press);
                }`)
        },
        hover: css(`
            background-color: var(--charcoal-brand);
            &:hover:not(:disabled):not([aria-disabled]),
            &:hover:not(:disabled):not([aria-disabled]) {
                background-color: var(--charcoal-brand-hover);
            }
            &:active:not(:disabled):not([aria-disabled]),
            &:active[aria-disabled=false] {
                background-color: var(--charcoal-brand-press);
            }`)
    }
},
  background1: {
      toString() {
          return 'background-color: var(--charcoal-background1);'
      },
      hover: {
          toString() {
              return `
                  background-color: var(--charcoal-background1);
                  &:hover:not(:disabled):not([aria-disabled]),
                  &:hover:not(:disabled):not([aria-disabled]) {
                      background-color: var(--charcoal-background1-hover);
                  }`
          },
          press: `
              background-color: var(--charcoal-background1);
              &:hover:not(:disabled):not([aria-disabled]),
              &:hover:not(:disabled):not([aria-disabled]) {
                  background-color: var(--charcoal-background1-hover);
              }
              &:active:not(:disabled):not([aria-disabled]),
              &:active[aria-disabled=false] {
                  background-color: var(--charcoal-background1-press);
              }`
      },
      press: {
          toString() {
              return `
                  background-color: var(--charcoal-background1);
                  &:active:not(:disabled):not([aria-disabled]),
                  &:active[aria-disabled=false] {
                      background-color: var(--charcoal-background1-press);
                  }`
          },
          hover: `
              background-color: var(--charcoal-background1);
              &:hover:not(:disabled):not([aria-disabled]),
              &:hover:not(:disabled):not([aria-disabled]) {
                  background-color: var(--charcoal-background1-hover);
              }
              &:active:not(:disabled):not([aria-disabled]),
              &:active[aria-disabled=false] {
                  background-color: var(--charcoal-background1-press);
              }`
      }
  },

  background2: {
    toString() {
        return 'background-color: var(--charcoal-background2);'
    },
    hover: {
        toString() {
            return `
                background-color: var(--charcoal-background2);
                &:hover:not(:disabled):not([aria-disabled]),
                &:hover:not(:disabled):not([aria-disabled]) {
                    background-color: var(--charcoal-background2-hover);
                }`
        },
        press: `
            background-color: var(--charcoal-background2);
            &:hover:not(:disabled):not([aria-disabled]),
            &:hover:not(:disabled):not([aria-disabled]) {
                background-color: var(--charcoal-background2-hover);
            }
            &:active:not(:disabled):not([aria-disabled]),
            &:active[aria-disabled=false] {
                background-color: var(--charcoal-background2-press);
            }`
    },
    press: {
        toString() {
            return `
                background-color: var(--charcoal-background2);
                &:active:not(:disabled):not([aria-disabled]),
                &:active[aria-disabled=false] {
                    background-color: var(--charcoal-background2-press);
                }`
        },
        hover: `
            background-color: var(--charcoal-background2);
            &:hover:not(:disabled):not([aria-disabled]),
            &:hover:not(:disabled):not([aria-disabled]) {
                background-color: var(--charcoal-background2-hover);
            }
            &:active:not(:disabled):not([aria-disabled]),
            &:active[aria-disabled=false] {
                background-color: var(--charcoal-background2-press);
            }`
    }
}
}

