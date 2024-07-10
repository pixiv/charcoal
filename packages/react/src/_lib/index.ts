/**
 * 今後ポートされる予定の汎用的な関数群
 */

/**
 * Function used to assert a given code path is unreachable
 */
export function unreachable(): never
/**
 * Function used to assert a given code path is unreachable.
 * Very useful for ensuring switches are exhaustive:
 *
 * ```ts
 * switch (a.type) {
 *   case Types.A:
 *   case Types.B:
 *     break
 *   default:
 *     unreachable(a) // will cause a build error if there was
 *                    // a Types.C that was not checked
 * }
 * ```
 *
 * @param value Value to be asserted as unreachable
 */
// NOTE: Uses separate overloads, _not_ `value?: never`, to not allow `undefined` to be passed

export function unreachable(value: never): never
export function unreachable(value?: never): never {
  throw new Error(
    arguments.length === 0
      ? 'unreachable'
      : `unreachable (${JSON.stringify(value)})`
  )
}

/**
 * 複数のrefをマージする。
 *
 * forwardRefで受け取ったrefと、コンポーネント内で定義したrefを同じ要素につけたいケースなどで使う
 */
export function mergeRefs<T>(...refs: React.Ref<T>[]): React.RefCallback<T> {
  return (value) => {
    for (const ref of refs) {
      if (typeof ref === 'function') {
        ref(value)
      } else if (ref !== null) {
        ;(ref as React.MutableRefObject<T | null>).current = value
      }
    }
  }
}

export function countCodePointsInString(string: string) {
  // [...string] とするとproduction buildで動かなくなる
  // cf. https://twitter.com/f_subal/status/1497214727511891972
  return Array.from(string).length
}
