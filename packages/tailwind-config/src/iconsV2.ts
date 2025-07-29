import plugin from 'tailwindcss/plugin'
import icons from '@charcoal-ui/icon-files/v2-datauri'
import { CSSRuleObject } from 'tailwindcss/types/config'

export const createIconUtilities = () => {
  const newUtilities: { [key: string]: CSSRuleObject } = {}
  for (const [fileName, { uri, isSetCurrentcolor }] of Object.entries(icons)) {
    const [size, variant, name] = fileName.split('/')
    const className = [
      'icon',
      name.replaceAll('.', '-'),
      ...(variant === 'regular' ? [] : [variant]),
      ...(size === '24' ? [] : [size]),
    ].join('-')
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

export const charcoalIconsV2 = plugin(({ addUtilities }) => {
  addUtilities(createIconUtilities())
})
