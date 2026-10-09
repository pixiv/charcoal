export type NormalizedQueryName = Readonly<{
  name: string
  segments: readonly string[]
}>

export function normalizeQueryName(name: string): NormalizedQueryName {
  const normalizedName = name.trim().replace(/^\/+|\/+$/g, '')
  const segments = normalizedName.split('/')

  if (
    normalizedName.length === 0 ||
    segments.some((segment) => segment.length === 0)
  ) {
    throw new Error('Token name must not contain empty path segments.')
  }

  return { name: normalizedName, segments }
}
