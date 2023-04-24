import { ReactNode } from 'react'
import styled from 'styled-components'
import { theme } from '../../../../utils/theme'

/**
 * コンポーネントプレビュー用のデータ型
 * @params T コンポーネントのProps型
 */
export type PreviewMeta<T> = {
  /**
   * プレビュー用に渡すprops
   */
  props: T
  /**
   * プレビューの子要素
   */
  children?: ReactNode | (() => ReactNode)
  /**
   * カスタムするための付属データ
   */
  additionalData?: any
}

export type PreviewSection<T> = {
  /**
   * プレビューセクションで表示するタイトル
   */
  title: string
  /**
   * プレビューに表示するためのメタ情報配列
   */
  previewMetas: PreviewMeta<T>[]
}

export function Previews<T>(props: {
  section: PreviewSection<T>
  renderer: (meta: PreviewMeta<T>, i: number, j: number) => ReactNode
  j: number
}) {
  return (
    <>
      <h2>{props.section.title}</h2>
      <PreviewDiv>
        {props.section.previewMetas.map((meta, i) => {
          return props.renderer(meta, i, props.j)
        })}
      </PreviewDiv>
    </>
  )
}

export const PreviewDiv = styled.div`
  display: flex;
  ${theme((o) => [o.border.default, o.borderRadius(8)])}
  padding: 16px;
  flex-wrap: wrap;
  width: 100%;
  gap: 16px;
`

export const PreviewDivColumn = styled(PreviewDiv)`
  flex-direction: column;
`
