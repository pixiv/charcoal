import { CSSObject } from 'styled-components'

export interface Context {
  cancelHalfLeadingPx?: number
  hasVerticalPadding?: boolean
  boxShadowTransition?: boolean
  colorTransition?: boolean
  backgroundColorTransition?: boolean
}

/**
 * 絶対にこれを export してはいけない
 *
 * さもないと `o.bg[internalSym]` みたいな叩き方が可能になってしまう（補完にも意図せず出てしまう）
 */
const internalSym: unique symbol = Symbol('internal')

/**
 * CSSObject に変換可能なオブジェクトを作成する
 *
 * 実際に CSSObject に変換するには外部から `__DO_NOT_USE_GET_INTERNAL__` を使わなければならない
 *
 * これ以降メソッドチェーンが続いてもいいし、続かなくても良い
 */
export function createInternal({
  toCSS,
  context = {},
}: {
  toCSS: (context: Context) => CSSObject
  context?: Context
}): Internal {
  return {
    [internalSym]: {
      toCSS,
      context,
    },
  }
}

function __DO_NOT_USE_ACCESS_PRIVATE_PROPERTY__(internal: Internal) {
  return internal[internalSym]
}

export interface Internal {
  [internalSym]: {
    toCSS: (context: Context) => CSSObject
    context: Context
  }
}

// half-leadingをキャンセルするとき && 垂直方向のpaddingが無い時
// -> before/afterを入れる
export const shouldCancelHalfLeading = ({
  cancelHalfLeadingPx,
  hasVerticalPadding = false,
}: Context) => cancelHalfLeadingPx !== undefined && !hasVerticalPadding

/**
 * 個別の Internal（ o.〇〇 の返り値 ）が提出した context の中身を1つの context にまとめる
 */
export function getContext(internals: Internal[]) {
  return internals.reduce<Context>(
    (context, internal) => ({
      ...context,
      ...__DO_NOT_USE_ACCESS_PRIVATE_PROPERTY__(internal).context,
    }),
    {}
  )
}

/**
 * 全ユーザー定義からコンテキスト生成し、styled-components 向けに CSSObject を構築
 */
export function toCSSObjects(internals: Internal[]): CSSObject[] {
  // 1パス目
  // 全ユーザー定義を舐めて相互に影響し合う定義をチェックし、その結果(コンテキスト)を取得
  const context = getContext(internals)

  // 2パス目
  // コンテキストを見ながら最適化されたCSSを構築
  return internals.map((v) =>
    __DO_NOT_USE_ACCESS_PRIVATE_PROPERTY__(v).toCSS(context)
  )
}
