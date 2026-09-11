const sizeKeyMap = {
  s: 'sm',
  m: 'md',
  l: 'lg',
} as const

type SizeKey = keyof typeof sizeKeyMap

function isSizeKey(key: string): key is SizeKey {
  return Object.hasOwn(sizeKeyMap, key)
}

function normalizeSizeKeySegments(key: string): string {
  return key
    .split('-')
    .map((segment) => (isSizeKey(segment) ? sizeKeyMap[segment] : segment))
    .join('-')
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function normalizeValue(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(normalizeValue)
  }

  if (!isRecord(value)) {
    return value
  }

  const normalized: Record<string, unknown> = {}

  for (const [key, childValue] of Object.entries(value)) {
    const normalizedKey = normalizeSizeKeySegments(key)

    if (Object.hasOwn(normalized, normalizedKey)) {
      throw new Error(
        `Token V2 size key normalization collision: "${key}" conflicts as "${normalizedKey}"`,
      )
    }

    normalized[normalizedKey] = normalizeValue(childValue)
  }

  return normalized
}

export function normalizeTokenV2SizeKeys<T>(value: T): T {
  return normalizeValue(value) as T
}
