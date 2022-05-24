import styled, { css } from 'styled-components'
import { onlyText } from './helper'

export interface Props {
  lineHeight: number
  lineLimit?: number
}

/**
 * 複数行のテキストに表示行数制限を設けて`...`で省略する
 */
export const TextEllipsis = styled.div.attrs(
  ({ children, title = onlyText(children) }) => ({
    title: title !== '' ? title : undefined,
  })
)<Props>`
  overflow: hidden;
  line-height: ${(props) => props.lineHeight}px;
  /* For english */
  overflow-wrap: break-word;

  ${({ lineLimit = 1, lineHeight }) =>
    lineLimit === 1
      ? css`
          text-overflow: ellipsis;
          white-space: nowrap;
        `
      : css`
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: ${lineLimit};
          /* Fallback for -webkit-line-clamp */
          max-height: ${lineHeight * lineLimit}px;
        `}
`
