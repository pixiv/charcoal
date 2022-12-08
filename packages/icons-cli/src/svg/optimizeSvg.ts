import { JSDOM } from 'jsdom'
import { parseToRgb } from 'polished'
import type { RgbColor, RgbaColor } from 'polished/lib/types/color'
import Svgo from 'svgo'

export const DEFAULT_CURRENT_COLOR_TARGET = '#858585'

const svgo = new Svgo({
  plugins: [
    // NOTICE: SVGO は「svg 内のすべての fill を currentColor に変える」機能しかない
    // icons-cli に必要なのは「特定の黒っぽい色だけ currentColor に変える」機能
    // なので、convertColors plugin は使わない
    // { convertColors: { currentColor: true } },
    { removeViewBox: false },
    { removeAttrs: { attrs: ['stroke-opacity', 'fill-opacity'] } },
  ],
})

/**
 * SVGを最適化するオプション
 */
interface Options {
  /**
   * currentColorに置換する色 #ffffff
   */
  convertedColor: string
  /**
   * svgoによる最適化を行わない
   */
  withoutOptimizeBySVGO?: boolean
}

export async function optimizeSvg(input: string, options: Options) {
  const { document } = new JSDOM(input).window
  const svg = document.querySelector('svg')
  if (!svg) {
    throw new Error('optimizeSvg: input string seems not to have <svg>')
  }

  addViewboxToRootSvg(svg)
  convertToCurrentColor(svg, options.convertedColor)

  if (options.withoutOptimizeBySVGO === true) {
    return svg.outerHTML
  } else {
    return (await svgo.optimize(svg.outerHTML)).data
  }
}

const TARGET_ATTRS = ['fill', 'stroke']

function convertToCurrentColor(svg: SVGSVGElement, convertedColor: string) {
  const targetColor = parseColor(convertedColor)
  if (!targetColor) {
    throw new Error(`${convertedColor} is not a valid color`)
  }

  for (const attr of TARGET_ATTRS) {
    const targets = Array.from(svg.querySelectorAll<SVGElement>(`[${attr}]`))

    for (const el of targets) {
      const value = parseColor(el.getAttribute(attr))
      if (!value) {
        continue
      }

      if (!colorEquals(value, targetColor)) {
        continue
      }

      el.setAttribute(attr, 'currentColor')
    }
  }
}

function parseColor(value: string | null) {
  if (value == null) {
    return null
  }

  try {
    return parseToRgb(value)
  } catch {
    return null
  }
}

function colorEquals(self: RgbColor | RgbaColor, other: RgbColor | RgbaColor) {
  if (self.red !== other.red) {
    return false
  }

  if (self.blue !== other.blue) {
    return false
  }

  if (self.green !== other.green) {
    return false
  }

  if ('alpha' in self) {
    if ('alpha' in other) {
      if (self.alpha !== other.alpha) {
        return false
      }
    }
  }

  return true
}

function addViewboxToRootSvg(svg: SVGSVGElement) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const width = svg.getAttribute('width')!
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const height = svg.getAttribute('height')!

  svg.setAttribute('viewBox', `0 0 ${width} ${height}`)
}
