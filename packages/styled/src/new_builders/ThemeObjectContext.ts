/**
 * 1つのcssクラスを生成するコンテキスト
 */
export interface SingleCssClassContext {
  /**
   * transitionを適用するプロパティの配列
   */
  transitions: Set<string>
  /**
   * herfLeadingを考慮してpaddingと擬似要素を変えるための後処理の配列
   */
  paddingOptimize: (() => void)[]
  /**
   * harlLeadingを削る処理を行うか
   */
  hasHalfLeadingOptimize?: boolean
  /**
   * 上下にpaddingを持っているか
   */
  hasPadding?: boolean
}
