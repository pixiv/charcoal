import { Formatter, formatHelpers } from 'style-dictionary/types'

export const variables: Formatter = ({ dictionary, options = {}, file }) => {
  const selector =
    typeof options.selector == 'string' && options.selector
      ? options.selector
      : `:root`
  const { outputReferences } = options
  return (
    formatHelpers.fileHeader({ file }) +
    `${selector} {\n` +
    formatHelpers.formattedVariables({
      format: 'css',
      dictionary,
      outputReferences,
    }) +
    `\n}\n`
  )
}
