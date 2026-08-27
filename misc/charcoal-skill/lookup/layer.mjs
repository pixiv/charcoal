const SEMANTIC_COLOR_GROUPS = new Set([
  'background',
  'container',
  'text',
  'icon',
  'border',
])

const SEMANTIC_CATEGORIES = new Set([
  'space',
  'radius',
  'border-width',
  'paragraph-width',
  'text',
])

/**
 * @typedef {'semantic' | 'primitive' | 'unknown'} TokenLayer
 */

/**
 * @param {string} tokenPath Figma `/` 区切りでも token path `.` 区切りでもよい
 * @returns {TokenLayer}
 */
export function detectLayer(tokenPath) {
  const parts = tokenPath.trim().replaceAll('/', '.').split('.').filter(Boolean)

  const [category, group] = parts
  if (category === undefined) {return 'unknown'}

  if (category === 'color') {
    const semanticGroup = group?.toLowerCase()
    if (semanticGroup === 'light' || semanticGroup === 'dark') {
      return 'primitive'
    }
    if (
      semanticGroup !== undefined &&
      SEMANTIC_COLOR_GROUPS.has(semanticGroup)
    ) {
      return 'semantic'
    }
    return 'unknown'
  }

  if (SEMANTIC_CATEGORIES.has(category)) {return 'semantic'}

  return 'unknown'
}

/**
 * @param {string} tokenPath
 * @returns {string | undefined}
 */
export function getGroup(tokenPath) {
  const parts = tokenPath.trim().replaceAll('/', '.').split('.').filter(Boolean)

  if (parts[0] === 'color') {return parts[1]}
  return parts[0]
}

/**
 * @param {string} tokenPath
 * @returns {string | undefined}
 */
export function getCategory(tokenPath) {
  const parts = tokenPath.trim().replaceAll('/', '.').split('.').filter(Boolean)

  return parts[0]
}
