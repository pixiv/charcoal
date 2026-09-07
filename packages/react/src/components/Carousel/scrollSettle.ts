// scrollend 非対応環境でスクロール静止とみなすまでの待ち時間
const SCROLL_SETTLE_DELAY = 100

// 連続呼び出しの最後から delay 後に fn を 1 回だけ呼ぶ。
const debounce = (fn: () => void, delay: number) => {
  let timer: ReturnType<typeof setTimeout> | undefined
  return Object.assign(
    () => {
      clearTimeout(timer)
      timer = setTimeout(fn, delay)
    },
    { cancel: () => clearTimeout(timer) },
  )
}

// スクロール静止で fn を呼ぶ。scrollend 対応環境はブラウザに任せ、
// 非対応環境は scroll の途切れで代替する。戻り値は解除関数。
export const onScrollSettle = (el: HTMLElement, fn: () => void) => {
  if ('onscrollend' in window) {
    el.addEventListener('scrollend', fn, { passive: true })
    return () => el.removeEventListener('scrollend', fn)
  }
  const debounced = debounce(fn, SCROLL_SETTLE_DELAY)
  el.addEventListener('scroll', debounced, { passive: true })
  return () => {
    el.removeEventListener('scroll', debounced)
    debounced.cancel()
  }
}
