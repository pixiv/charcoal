import { useEffect, useState, type RefObject } from 'react'

// ポインタが要素に乗っている間 true。タッチは hover を持たないので無視する。
// pointerenter は遷移でしか発火しないため、マウント時（SPA 遷移・遅延マウント）や
// enabled の切り替え時に既に乗っている場合は :hover で種付けする。
export function useHoverPause(
  ref: RefObject<HTMLElement | null>,
  enabled: boolean,
): boolean {
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!enabled || !el) {
      setHovered(false)
      return
    }
    setHovered(el.matches(':hover'))
    const enter = (e: PointerEvent) => {
      if (e.pointerType !== 'touch') setHovered(true)
    }
    const leave = () => setHovered(false)
    el.addEventListener('pointerenter', enter)
    el.addEventListener('pointerleave', leave)
    return () => {
      el.removeEventListener('pointerenter', enter)
      el.removeEventListener('pointerleave', leave)
    }
  }, [ref, enabled])

  return hovered
}
