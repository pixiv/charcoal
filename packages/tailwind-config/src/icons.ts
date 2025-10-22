import plugin from 'tailwindcss/plugin.js'
import iconsV2 from '@charcoal-ui/icon-files/v2/datauri'
import iconsV1 from '@charcoal-ui/icon-files/v1/datauri'
import { CSSRuleObject } from 'tailwindcss/types/config'

const transformClassNameV2 = (fileName: string) => {
  const [size, variant, name] = fileName.split('/')
  return [
    '.icon-v2',
    name.replaceAll('.', '-'),
    ...(variant === 'regular' ? [] : [variant]),
    ...(size === '24' ? [] : [size]),
  ]
    .join('-')
    .toLowerCase()
}

const transformClassNameV1 = (fileName: string) => {
  const [size, name] = fileName.split('/')
  return [
    '.icon-v1',
    name.replaceAll('.', '-'),
    ...(size === '24' ? [] : [size]),
  ]
    .join('-')
    .toLowerCase()
}

export const createIconUtilities = ({
  v2 = false,
}: {
  v2?: boolean
}): {
  [key: string]: CSSRuleObject
} => {
  const newUtilities: { [key: string]: CSSRuleObject } = {}
  const icons = v2 ? iconsV2 : iconsV1
  for (const [fileName, { uri, isSetCurrentcolor }] of Object.entries(icons)) {
    const className = v2
      ? transformClassNameV2(fileName)
      : transformClassNameV1(fileName)

    newUtilities[className] = {
      display: 'inline-block',
      width: '1em',
      height: '1em',
      maskImage: `url(${uri})`,
      maskSize: '100% 100%',
      background: isSetCurrentcolor ? 'currentColor' : null,
      aspectRatio: '1/1',
    }
  }
  return newUtilities
}

export const charcoalIconsV2: ReturnType<typeof plugin> = plugin(
  ({ addUtilities }) => {
    addUtilities(createIconUtilities({ v2: true }))
  },
)

export const charcoalIconsV1: ReturnType<typeof plugin> = plugin(
  ({ addUtilities }) => {
    addUtilities(createIconUtilities({ v2: false }))
  },
)
