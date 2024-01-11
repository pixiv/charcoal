import { getClassNames, StyledStory } from './utils'
import css, {
  CssAtRuleAST,
  CssRuleAST,
  CssStylesheetAST,
} from '@adobe/css-tools'

const isStyledClass = (className: string) =>
  /^\.?(\w+(-|_))?sc-/.test(className)

const filterClassNames = (classNames: string[], hashes: string[]): string[] => {
  return classNames.filter((className) => hashes.includes(className))
}

const filterUnreferencedClassNames = (
  classNames: string[],
  hashes: string[]
): string[] => {
  return classNames.filter(
    (className) => isStyledClass(className) && !hashes.includes(className)
  )
}

const includesClassNames = (
  classNames: string[],
  selectors: string[]
): boolean => {
  return classNames.some((className) =>
    selectors.some((selector) => selector.includes(className))
  )
}

const includesUnknownClassNames = (
  classNames: string[],
  selectors: string[]
): boolean => {
  return !selectors
    .flatMap((selector) => selector.split(' '))
    .filter((chunk) => isStyledClass(chunk))
    .every((chunk) => classNames.some((className) => chunk.includes(className)))
}

const filterRules =
  (classNames: string[]) =>
  (rule: CssAtRuleAST): rule is CssRuleAST =>
    rule.type === 'rule' &&
    !includesUnknownClassNames(classNames, rule.selectors) &&
    includesClassNames(classNames, rule.selectors) &&
    rule.declarations.length > 0

const getAtRules = (
  ast: CssStylesheetAST,
  filter: ReturnType<typeof filterRules>
) => {
  const result: CssAtRuleAST[] = []

  for (const rules of ast.stylesheet.rules) {
    if (rules.type === 'media' || rules.type === 'supports') {
      const copied = structuredClone(rules)
      copied.rules = rules.rules.filter(filter)
      result.push(copied)
    }
  }

  return result
}

const getStyle = (
  ast: CssStylesheetAST,
  classNames: string[],
  config: { indent?: string } = {}
) => {
  const copied = structuredClone(ast)
  const filter = filterRules(classNames)
  const rules = ast.stylesheet.rules.filter(filter)
  const atRules = getAtRules(ast, filter)

  copied.stylesheet.rules = [...rules, ...atRules]

  return css.stringify(copied, { indent: config.indent })
}

const getClassNamesFromSelectorsByHashes = (
  ast: CssStylesheetAST,
  classNames: string[],
  hashes: string[]
) => {
  const filter = filterRules(classNames)
  const rules = ast.stylesheet.rules.filter(filter)

  const selectors = rules.map((rule) => rule.selectors)
  const classNamesIncludingFromSelectors = new Set(classNames)

  const addHashFromSelectorListToClassNames = (hash: string) => {
    for (const selector of selectors) {
      const first = selector.at(0)
      if (first === undefined || first.includes(hash)) continue

      classNamesIncludingFromSelectors.add(hash)
    }
  }

  for (const hash of hashes) {
    addHashFromSelectorListToClassNames(hash)
  }

  return Array.from(classNamesIncludingFromSelectors)
}

const replaceClassNames = (
  result: string,
  classNames: string[],
  style: string,
  classNameFormatter: (idx: number) => string
) => {
  return classNames
    .filter((className) => style.includes(className))
    .reduce(
      (acc, className, index) =>
        acc.replace(new RegExp(className, 'g'), classNameFormatter(index++)),
      result
    )
}

const stripUnreferencedClassNames = (result: string, classNames: string[]) => {
  return classNames.reduce(
    (acc, className) => acc.replace(new RegExp(`${className}\\s?`, 'g'), ''),
    result
  )
}

const replaceHashes = (result: string, hashes: string[]) => {
  return hashes.reduce(
    (acc, className) =>
      acc.replace(
        new RegExp(`((class|className)="[^"]*?)${className}\\s?([^"]*")`, 'g'),
        '$1$3'
      ),
    result
  )
}

const DYNAMIC_ID_PATTERN = /react-aria\d+-\d+/g

module.exports = {
  serialize(
    val: StyledStory,
    config: object,
    indentation: unknown,
    depth: unknown,
    refs: unknown,
    printer: (...args: unknown[]) => string
  ) {
    const ast = val.getCSS()
    const root = val.getRootElement()
    const hashes = val.getHashes()

    const _classNames = getClassNames(root)
    const classNames = filterClassNames(_classNames, hashes)
    const unreferencedClassNames = filterUnreferencedClassNames(
      _classNames,
      hashes
    )

    const style = getStyle(ast, classNames, config)
    const classNamesToReplace = getClassNamesFromSelectorsByHashes(
      ast,
      _classNames,
      hashes
    )
    const code = printer(root.innerHTML, config, indentation, depth, refs)
    let result = `${style}${style ? '\n\n' : ''}${code}`
    result = stripUnreferencedClassNames(result, unreferencedClassNames)
    result = replaceClassNames(
      result,
      classNamesToReplace,
      style,
      (index) => `c${index}`
    )
    result = replaceHashes(result, hashes)

    return result.replace(DYNAMIC_ID_PATTERN, 'test-id')
  },
  test(val: unknown) {
    return val instanceof StyledStory
  },
}
