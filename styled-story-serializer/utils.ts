import { JSDOM } from 'jsdom'
import css, { CssRuleAST, CssStylesheetAST } from '@adobe/css-tools'

export const getCSSSelectors = (ast: CssStylesheetAST): string[] => {
  return ast.stylesheet.rules
    .filter(
      (rule): rule is CssRuleAST =>
        rule.type === 'rule' && rule.declarations.length > 0
    )
    .flatMap((rule) => rule.selectors)
}

export const getClassNames = (node: Element): string[] => {
  const classNames = node.getAttribute('class')
  const children = Array.from(node.children).flatMap((child) => {
    return getClassNames(child)
  })

  if (classNames === null) return children

  return [...classNames.split(' '), ...children]
}

export class StyledStory {
  #dom: JSDOM
  #rootSelector: string
  #styleSelector: string

  constructor(
    html: string,
    rootSelector = '#storybook-root',
    styleSelector = 'style[data-styled]'
  ) {
    this.#dom = new JSDOM(html)
    this.#rootSelector = rootSelector
    this.#styleSelector = styleSelector
  }

  getRootElement(): Element {
    const el = this.#dom.window.document.querySelector(this.#rootSelector)
    if (el === null) throw new Error('element not found')

    return el
  }

  getHashes(): string[] {
    const root = this.getRootElement()
    const ast = this.getCSS()
    const selectors = getCSSSelectors(ast)

    return selectors
      .flatMap((selector) => this.#getHash(root, selector))
      .filter((s): s is Exclude<typeof s, undefined> => s !== undefined)
  }

  #getHash(target: Element, selector: string) {
    try {
      const el = target.querySelector(selector)
      return el?.className.split(' ')
    } catch {
      return undefined
    }
  }

  getCSS() {
    return css.parse(this.#getStyle(this.#styleSelector))
  }

  #getStyle(selector: string): string {
    const styles = this.#dom.window.document.querySelectorAll(selector)

    return Array.from(styles)
      .map((style) => style.textContent?.trim())
      .join('\n')
  }
}
