export function pxIfNum(v?: number | string) {
  if (v === undefined) return ''
  if (typeof v === 'number') return `${v}px`
  return v
}
