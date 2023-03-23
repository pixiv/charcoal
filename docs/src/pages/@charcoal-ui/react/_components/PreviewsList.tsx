import { ReactNode } from 'react'
import { PreviewMeta, Previews, PreviewSection } from './Previews'

type Props<T> = {
  /**
   * コンポーネントのプレビューをレンダリングするための関数
   * @param meta プレビューのためのmeta情報
   * @param i previewMetasのインデックス
   * @param j sectionsのインデックス
   * @returns
   */
  renderer: (meta: PreviewMeta<T>, i: number, j: number) => ReactNode
  /**
   * コンポーネントのプレビューの配列
   */
  sections: PreviewSection<T>[]
}

export function PreviewsList<T>(props: Props<T>) {
  return (
    <>
      {props.sections.map((sec, i) => {
        return (
          <Previews<T>
            key={i}
            section={sec}
            renderer={props.renderer}
            j={i}
          ></Previews>
        )
      })}
    </>
  )
}
