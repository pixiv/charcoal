import type { Result, Rule } from 'postcss'
import postcssSelectorParser from 'postcss-selector-parser'

type ClassToStyles = Map<string, Rule[]>

const selectorParser = postcssSelectorParser()

export function collectClassNamesAndStyles(result: Result): ClassToStyles {
  const classToStyles = new Map<string, Rule[]>()

  result.root.walkRules((rule) => {
    selectorParser.astSync(rule.selector).walkClasses((node) => {
      const className = node.value.trim()

      const styles = classToStyles.get(className)
      if (styles != null) {
        styles.push(rule)
      } else {
        classToStyles.set(className, [rule])
      }
    })
  })

  return classToStyles
}

export interface TailwindDiffItem {
  className: string
  css: Rule[]
  status: 'added' | 'removed'
}

// :の後ろが同じものが並んでほしいのでそれを前にしてソートする
const tailwindClassNameSortMapper = (className: string) => {
  if (className.includes(':')) {
    const items = className.split(':')
    let result = ''
    result += items.pop()
    result += `:${items.join(':')}`
    return result
  } else {
    return className
  }
}
const tailwindDiffItemSortMapper = (item: TailwindDiffItem) =>
  tailwindClassNameSortMapper(item.className)
const mappedSorter =
  <A, B>(mapper: (value: A) => B) =>
  (lhs: A, rhs: A) => {
    const mappedLhs = mapper(lhs)
    const mappedRhs = mapper(rhs)
    if (mappedLhs < mappedRhs) {
      return -1
    }
    if (mappedLhs > mappedRhs) {
      return 1
    }
    return 0
  }
export function diffsBetweenStyles(
  before: ClassToStyles,
  after: ClassToStyles
) {
  const diffs: TailwindDiffItem[] = []

  for (const afterClassName of after.keys()) {
    if (!before.has(afterClassName)) {
      diffs.push({
        className: afterClassName,
        status: 'added',
        css: after.get(afterClassName)!,
      })
    }
  }
  for (const beforeClassName of before.keys()) {
    if (!after.has(beforeClassName)) {
      diffs.push({
        className: beforeClassName,
        status: 'removed',
        css: before.get(beforeClassName)!,
      })
    }
  }

  diffs.sort(mappedSorter(tailwindDiffItemSortMapper))

  return diffs
}
