const { fileHeader, formattedVariables } = require('style-dictionary')

/**
 * Remove prefix because the prefix option for createPropertyFormatter
 * is not the same as the prefix inside header comment
 * @param {FormattingOverrides} [formatting]
 */
function getFormattingCloneWithoutPrefix(formatting) {
  const formattingWithoutPrefix = structuredClone(formatting) ?? {}
  // @ts-expect-error users are not supposed to pass "prefix" but they might because it used to be supported
  delete formattingWithoutPrefix.prefix
  return formattingWithoutPrefix
}

/**
 * Creates a CSS file with variable definitions based on the style dictionary
 *
 * @memberof Formats
 * @kind member
 *
 * @example
 * ```css
 * :root {
 *   --color-background-base: #f0f0f0;
 *   --color-background-alt: #eeeeee;
 * }
 * ```
 */
const variables = async ({ dictionary, options = {}, file }) => {
  const selector = options.selector ? options.selector : `:root`
  const { outputReferences, outputReferenceFallbacks, usesDtcg, formatting } =
    options
  const header = await fileHeader({
    file,
    formatting: getFormattingCloneWithoutPrefix(formatting),
    options,
  })
  return (
    header +
    `${selector} {\n` +
    formattedVariables({
      format: 'css',
      dictionary,
      outputReferences,
      outputReferenceFallbacks,
      formatting,
      usesDtcg,
    }) +
    `\n}\n`
  )
}
