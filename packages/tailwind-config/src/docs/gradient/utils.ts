import { directions } from '.'

export const getUniqueGradientNames = (utilityClasses: string[]): string[] => {
  return Array.from(
    new Set(
      utilityClasses
        .map((className) => {
          /**
           * like `['bg', 'surface5', 'bottom', 'disabled']`
           */
          const classNameParts = className.split('-')

          /**
           * like `bottom`
           */
          const directionInClassName = directions.find((direction) =>
            classNameParts.includes(direction),
          )
          if (!directionInClassName) return null

          /**
           * like `['bg', 'surface5']`
           */
          const classNameWithoutModifiers = classNameParts.slice(
            0,
            classNameParts.indexOf(directionInClassName),
          )

          /**
           * like `bg-surface5`
           */
          return classNameWithoutModifiers.join('-')
        })
        .filter((value): value is string => typeof value === 'string'),
    ).values(),
  )
}
