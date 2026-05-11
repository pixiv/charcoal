export type IconSizing =
  | {
      scale?: 1 | 2 | 3 | '1' | '2' | '3'
      unsafeNonGuidelineScale?: never
      unsafeNonGuidelineSize?: never
    }
  | {
      scale?: never
      unsafeNonGuidelineScale: number
      unsafeNonGuidelineSize?: never
    }
  | {
      scale?: never
      unsafeNonGuidelineScale?: never
      unsafeNonGuidelineSize: number
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

export const calcActualSize = ({
  name,
  scale,
  unsafeNonGuidelineScale,
  unsafeNonGuidelineSize: overrideSize,
}: { name: string } & IconSizing): number => {
  // size (事前計算済みサイズ) が最優先
  if (isPositiveFinite(overrideSize)) {
    return overrideSize
  }
  if (overrideSize !== undefined) {
    throw new TypeError(
      `size must be a positive finite number, got ${overrideSize}`,
    )
  }

  const { size, baseSize } = parseIconName(name)

  // unsafeNonGuidelineScale が次に優先
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
