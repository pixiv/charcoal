import { useRef } from 'react'
import * as React from 'react'
import styled, { css } from 'styled-components'
import { useElementSize } from '../../foundation/hooks'

export interface Props {
  children?: React.ReactNode
  icon: React.ReactNode
  /**
   * アイコンを表示。デフォルトがtrueなので、非表示にするときに使います。 (アイコン自体の幅を維持します)
   */
  show?: boolean | 'collapse'
  /**
   * アイコンを前にする
   */
  prefix?: boolean
  /**
   * アイコンの高さが文字の高さよりも大きいケースで有効。アイコンの高さをゼロにしてインラインの高さに関与させないようにします。
   */
  fit?: boolean
  /**
   * `fit`と併用した時にのみ有効な最適化オプション。アイコンの幅の自動計算を行わず指定した数値を利用します。
   */
  width?: number
  /**
   * 親要素のサイズに合わせるのではなく、コンテンツのサイズを優先する
   */
  fixed?: boolean
}

export default React.memo(function WithIcon({
  children,
  icon,
  show = true,
  prefix: pre = false,
  width,
  fit = false,
  fixed = false,
}: Props) {
  const node = fit ? (
    width === undefined ? (
      <AutoWidthIconAnchor show={show} pre={pre}>
        {icon}
      </AutoWidthIconAnchor>
    ) : (
      <IconAnchor width={width} show={show} pre={pre}>
        <Icon>{icon}</Icon>
      </IconAnchor>
    )
  ) : (
    <IconAnchorNaive show={show} pre={pre}>
      <IconNaive>{icon}</IconNaive>
    </IconAnchorNaive>
  )

  return (
    <Root>
      {pre && node}
      <Text fixed={fixed}>{children}</Text>
      {!pre && node}
    </Root>
  )
})

const Root = styled.div`
  display: flex;
  align-items: center;
`

const Text = styled.div<{ fixed: boolean }>`
  ${(p) =>
    !p.fixed &&
    css`
      min-width: 0;
      overflow: hidden;
    `}
  white-space: nowrap;
  text-overflow: ellipsis;
`

function AutoWidthIconAnchor({
  children,
  show,
  pre,
}: {
  children: React.ReactNode
  show: boolean | 'collapse'
  pre: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  // depsを空配列にしないことで初回だけ同期で幅を計算させるテクニック
  const width = useElementSize(ref, [null])?.width ?? 0
  return (
    <IconAnchor width={width} show={show} pre={pre}>
      <Icon ref={ref}>{children}</Icon>
    </IconAnchor>
  )
}

const forceCenteringCss = css`
  > svg {
    display: block;
  }
`

const iconAnchorCss = css`
  ${(p: { show: boolean | 'collapse'; pre: boolean }) =>
    p.show === 'collapse'
      ? css`
          display: none;
        `
      : css`
          visibility: ${p.show ? 'visible' : 'hidden'};
        `};
  ${(p) =>
    p.pre
      ? css`
          margin-right: 4px;
        `
      : css`
          margin-left: 4px;
        `}
`

const IconAnchorNaive = styled.div`
  display: flex;
  align-items: center;

  ${iconAnchorCss}
`

const IconNaive = styled.div`
  display: inline-flex;

  ${forceCenteringCss}
`

const IconAnchor = styled.div<{
  width: number
  show: boolean | 'collapse'
  pre: boolean
}>`
  display: flex;
  position: relative;
  /* Iconをline-heightに関与させない */
  height: 0;
  /* 横方向の領域は確保する */
  width: ${(p) => p.width}px;

  ${iconAnchorCss}
`

const Icon = styled.div`
  display: inline-flex;
  position: absolute;
  transform: translateY(-50%);

  ${forceCenteringCss}
`
