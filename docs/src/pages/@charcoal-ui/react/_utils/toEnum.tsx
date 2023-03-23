export function toEnum(arr: any[]) {
  return arr.map((v) => `"${v}"`).join(' | ')
}
