import { fileHeader, formattedVariables } from 'style-dictionary/utils'
import type {
  FormatFnArguments,
  Config,
  LocalOptions,
} from 'style-dictionary/types'
import StyleDictionary from 'style-dictionary'

/** style-dictionaryのtypesがany多用しててつらい */
export const charcoalVariables = ({
  dictionary,
  options = {},
  file,
}: Omit<FormatFnArguments, 'options'> & {
  options: Config &
    LocalOptions & {
      selector?: string
    }
}) => {
  const selector = options.selector ?? `:root`
  const { outputReferences } = options
  return (
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands, @typescript-eslint/no-base-to-string
    fileHeader({ file }) +
    `${selector} {\n` +
    formattedVariables({
      format: 'css',
      dictionary,
      outputReferences,
    }) +
    `\n}\n`
  )
}

export const registerCharcoalFormats = () => {
  StyleDictionary.registerFormat({
    name: 'css/charcoal-variables',
    format: charcoalVariables,
  })
}
