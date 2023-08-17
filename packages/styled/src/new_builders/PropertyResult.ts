import { CSS } from './type'

/**
 * 各プロパティの処理結果
 */
export class PropertyResult {
  /**
   * styled-componentsのcssの結果の配列
   */
  _result: CSS[] = []
  /**
   * styled-componentsのcssの配列を受け取る
   * 内部で持つ配列は空にする
   */
  getResult() {
    return this._result.splice(0, this._result.length)
  }
}
