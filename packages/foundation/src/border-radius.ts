// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type BorderRadius = {
  /**
   * 用途: 打ち消し用クラス（モバイルのときに角丸じゃなくなる、などを表現する）
   */
  none: number

  /**
   * 用途: バッジ, 高さ40px以下の要素
   */
  [4]: number
  /**
   * 用途: サムネイル
   */
  [8]: number
  /**
   * 用途: チュートリアルツールチップ
   */
  [16]: number
  /**
   * 用途: モーダル
   */
  [24]: number
  /**
   * 真円 or 左右が丸まっている矩形 を作る時に用いる
   *
   * 用途: ボタン
   */
  oval: number
}

export const borderRadius: BorderRadius = {
  none: 0,
  4: 4,
  8: 8,
  16: 16,
  24: 24,
  oval: 999999,
}
