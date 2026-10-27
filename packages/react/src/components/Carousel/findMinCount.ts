// 先頭から順に走査し、satisfies を満たす最初の要素までの個数を返す。
// 末尾まで満たさなければ全個数（末尾の要素は評価しない）。空配列は 0。
// arrow でジェネリックを書くとビルドの babel（JSX 有効の .ts 解析）が
// <T> を JSX タグと誤解釈するため function 宣言にしている。
export function findMinCount<T>(
  [head, ...tail]: readonly T[],
  satisfies: (item: T) => boolean,
): number {
  return head === undefined
    ? 0
    : tail.length === 0 || satisfies(head)
      ? 1
      : 1 + findMinCount(tail, satisfies)
}
