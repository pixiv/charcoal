// 先頭から順に走査し、satisfies を満たす最初の要素までの個数を返す。
// 末尾まで満たさなければ全個数（末尾の要素は評価しない）。空配列は 0。
export const findMinCount = <T>(
  [head, ...tail]: readonly T[],
  satisfies: (item: T) => boolean,
): number =>
  head === undefined
    ? 0
    : tail.length === 0 || satisfies(head)
      ? 1
      : 1 + findMinCount(tail, satisfies)
