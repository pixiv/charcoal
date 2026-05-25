export type IconSizing =
  | {
      scale?: 1 | 2 | 3 | '1' | '2' | '3'
      /** @deprecated `fixedSize` を利用してください。 */
      unsafeNonGuidelineScale?: never
      fixedSize?: never
    }
  | {
      scale?: never
      /** @deprecated `fixedSize` を利用してください。 */
      unsafeNonGuidelineScale: number
      fixedSize?: never
    }
  | {
      scale?: never
      /** @deprecated `fixedSize` を利用してください。 */
      unsafeNonGuidelineScale?: never
      fixedSize: number
    }

const isPositiveFinite = (value: unknown): value is number =>
  typeof value === 'number' && Number.isFinite(value) && value > 0

const parseIconName = (name: string): { size: string; baseSize: number } => {
  if (!name.includes('/')) {
    throw new TypeError(
      `"${name}" is not a valid icon name. "name" must be named like [size]/[Name].`,
    )
  }

  const [size] = name.split('/')

  if (size === 'Inline') {
    return { size, baseSize: 16 }
  }

  const baseSize = parseInt(size, 10)
  if (Number.isNaN(baseSize) || baseSize <= 0) {
    throw new TypeError(
      `"${name}" has invalid size prefix "${size}". Must be "Inline" or a positive number.`,
    )
  }

  return { size, baseSize }
}

function inlineSize(scale: number): number {
  switch (scale) {
    case 2:
      return 32
    default:
      return 16
  }
}

function guidelineSize24(scale: number): number {
  return 24 * scale
}

// fixedSize > unsafeNonGuidelineScale > scale の優先順位で生のサイズを算出する。
// 戻り値の最終 validation は呼び出し元 (calcActualSize) で行う。
const resolveSize = ({
  name,
  scale,
  unsafeNonGuidelineScale,
  fixedSize,
}: { name: string } & IconSizing): number => {
  // fixedSize (px 直接指定) が最優先
  if (isPositiveFinite(fixedSize)) {
    return fixedSize
  }
  if (fixedSize !== undefined) {
    throw new TypeError(
      `fixedSize must be a positive finite number, got ${fixedSize}`,
    )
  }

  const { size, baseSize } = parseIconName(name)

  // unsafeNonGuidelineScale (deprecated) が次に優先
  if (isPositiveFinite(unsafeNonGuidelineScale)) {
    return baseSize * unsafeNonGuidelineScale
  }
  if (unsafeNonGuidelineScale !== undefined) {
    throw new TypeError(
      `unsafeNonGuidelineScale must be a positive finite number, got ${unsafeNonGuidelineScale}`,
    )
  }

  // ガイドライン scale
  const numericScale = parseInt(`${scale ?? '1'}`, 10)
  switch (size) {
    case 'Inline':
      return inlineSize(numericScale)
    case '24':
      return guidelineSize24(numericScale)
    default:
      return baseSize
  }
}

export const calcActualSize = (
  params: { name: string } & IconSizing,
): number => {
  const actualSize = resolveSize(params)

  // 全 return パスの結果が正の有限数であることを Single Source of Truth として保証する
  if (!isPositiveFinite(actualSize)) {
    throw new TypeError(
      `icon size must be a positive finite number, got ${actualSize}`,
    )
  }

  return actualSize
}
