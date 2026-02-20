import { useDebugValue } from 'react'
import warning from 'warning'

export function usePaginationWindow(
  page: number,
  pageCount: number,
  pageRangeDisplayed = 7,
) {
  'use memo'
  // ページャーのリンク生成例:
  //
  //     < [ 1 ] [*2*] [ 3 ] [ 4 ] [ 5 ] [ 6 ] [ 7 ] >
  //
  //     < [ 1 ] [ 2 ] [ 3 ] [*4*] [ 5 ] [ 6 ] [ 7 ] >
  //
  //     < [ 1 ]  ...  [ 4 ] [*5*] [ 6 ] [ 7 ] [ 8 ] >
  //
  //     < [ 1 ]  ...  [ 99 ] [*100*] [ 101 ] [ 102 ] [ 103 ] >
  //
  //     < [ 1 ]  ...  [ 99 ] [ 100 ] [ 101 ] [ 102 ] [*103*]
  //
  //       [*1*] [ 2 ] >
  //
  // デザインの意図: 前後移動時のカーソル移動を最小限にする。

  if (process.env.NODE_ENV !== 'production') {
    warning((page | 0) === page, `\`page\` must be integer (${page})`)
    warning(
      (pageCount | 0) === pageCount,
      `\`pageCount\` must be integer (${pageCount})`,
    )
    warning(
      (pageRangeDisplayed | 0) === pageRangeDisplayed,
      `\`pageRangeDisplayed\` must be integer (${pageRangeDisplayed})`,
    )
    warning(pageRangeDisplayed > 2, `\`windowSize\` must be greater than 2`)
  }

  const visibleFirstPage = 1
  const visibleLastPage = Math.min(
    pageCount,
    Math.max(page + Math.floor(pageRangeDisplayed / 2), pageRangeDisplayed),
  )

  const window = (() => {
    if (visibleLastPage <= pageRangeDisplayed) {
      // 表示範囲が1-7ページなら省略は無い。
      return Array.from(
        { length: 1 + visibleLastPage - visibleFirstPage },
        (_, i) => visibleFirstPage + i,
      )
    } else {
      const start = visibleLastPage - (pageRangeDisplayed - 1) + 2
      // 表示範囲が1-7ページを超えるなら、
      // - 1ページ目は固定で表示する
      // - 2ページ目から現在のページの直前までは省略する
      return [
        visibleFirstPage,
        '...' as const,
        ...Array.from(
          { length: 1 + visibleLastPage - start },
          (_, i) => start + i,
        ),
      ]
    }
  })()

  useDebugValue(window)

  return window
}
