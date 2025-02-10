import plugin from 'tailwindcss/plugin'
import { TypographyDescriptor, TYPOGRAPHY_SIZE } from '@charcoal-ui/foundation'
import { halfLeading, mapObject, px } from '@charcoal-ui/utils'

const leadingCancel = {
  display: 'block',
  width: 0,
  height: 0,
  content: '""',
}

const typographyStyle = (style: TypographyDescriptor) => {
  const margin = -halfLeading(style)

  return {
    'font-size': px(style.fontSize),
    'line-height': px(style.lineHeight),

    /**
     * cancel leading
     *
     * @see https://yuyakinoshita.com/blog/2020/01/20/line-height-crop/
     */
    '&::before': {
      ...leadingCancel,
      marginTop: px(margin),
    },
    '&::after': {
      ...leadingCancel,
      marginBottom: px(margin),
    },
  }
}

const typographyPlugin = plugin(({ addUtilities }) => {
  const typographyClasses = mapObject(TYPOGRAPHY_SIZE, (fontSize, style) => [
    `.typography-${fontSize}`,
    typographyStyle(style),
  ])

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  addUtilities(
    {
      ...typographyClasses,
      '.preserve-half-leading': {
        '&::before': {
          content: 'none',
        },
        '&::after': {
          content: 'none',
        },
      },
    },
    {
      // @ts-expect-error FIXME
      variants: ['responsive'],
    }
  )
})

export default typographyPlugin
