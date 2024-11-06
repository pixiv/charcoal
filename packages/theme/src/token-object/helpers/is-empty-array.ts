export const isNonEmptyArray = <T>(arr: T[]): arr is [T, ...T[]] =>
  arr.length > 0
