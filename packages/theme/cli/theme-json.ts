/* eslint-disable @typescript-eslint/no-var-requires */

import { light, dark } from '../src/index'
import { writeFileSync } from 'fs'
import { parseToRgb } from 'polished'
import type { Material } from '@charcoal-ui/foundation'

/**
 * transform color string to [0, 1] clamped value of color object
 *
 */
function parseMaterial(material: Material) {
  const { red, green, blue, ...rest } = parseToRgb(material)
  const alpha = 'alpha' in rest ? rest.alpha : 1
  return { red: red / 255, green: green / 255, blue: blue / 255, alpha }
}

const deprecatedColor = ['callToAction']

const monolith = Object.fromEntries(
  Object.entries({ dark, light }).map(([id, original]) => {
    const transformed = {
      ...original,
      color: Object.fromEntries(
        Object.entries(original.color)
          .filter(([key]) => !deprecatedColor.includes(key))
          .map(([key, material]) => [key, parseMaterial(material)]),
      ),
      gradientColor: Object.fromEntries(
        Object.entries(original.gradientColor).map(([key, def]) => [
          key,
          def.map((v) => ({ ...v, color: parseMaterial(v.color) })),
        ]),
      ),
      effect: Object.fromEntries(
        Object.entries(original.effect).map(([key, def]) => [
          key,
          def.type !== 'opacity'
            ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              { ...def, color: parseMaterial(def.color!) }
            : def,
        ]),
      ),
      border: Object.fromEntries(
        Object.entries(original.border).map(([key, def]) => [
          key,
          { ...def, color: parseMaterial(def.color) },
        ]),
      ),
      outline: Object.fromEntries(
        Object.entries(original.border).map(([key, def]) => [
          key,
          { ...def, color: parseMaterial(def.color) },
        ]),
      ),
    }
    return [id, transformed]
  }),
)

export function writeThemeJson() {
  writeFileSync('theme.json', JSON.stringify(monolith, null, 2))
  // eslint-disable-next-line no-console
  console.log(`Generated theme.json`)
}
