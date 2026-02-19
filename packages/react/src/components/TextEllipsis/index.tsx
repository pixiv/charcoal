import './index.css'

import { getFinalTitle } from './helper'
import { useClassNames } from '../../_lib/useClassNames'
import { CSSProperties } from 'react'

export type TextEllipsisProps = {
  lineHeight?: number
  lineLimit?: number
  /**
   * @default 'auto'
   */
  hyphens?: CSSProperties['hyphens']
  /**
   * html title属性を付与。false のときは付与せず、空文字のときは表示しない
   * @default true
   */
  showTooltip?: boolean
  /**
   *
   * @default false
   * true: use white-space: nowrap if lineLimit is 1
   * false: use -webkit-line-clamp if lineLimit is 1
   */
  useNowrap?: boolean
} & React.ComponentPropsWithoutRef<'div'>

/**
 * 複数行のテキストに表示行数制限を設けて`...`で省略する
 */
export default function TextEllipsis({
  lineHeight,
  lineLimit = 1,
  children,
  title,
  hyphens = 'auto',
  showTooltip = true,
  useNowrap = false,
  ...props
}: TextEllipsisProps) {
  'use memo'
  const finalTitle = getFinalTitle(showTooltip, title, children)

  const classNames = useClassNames('charcoal-text-ellipsis', props.className)
  const hasLineHeight = lineHeight !== undefined

  return (
    <div
      {...props}
      className={classNames}
      data-line-limit={lineLimit}
      data-has-line-height={hasLineHeight}
      {...(useNowrap ? { 'data-use-nowrap': useNowrap } : {})}
      style={
        {
          ...(hasLineHeight && {
            '--charcoal-text-ellipsis-line-height': `${lineHeight}px`,
          }),
          '--charcoal-text-ellipsis-line-limit': lineLimit,
          hyphens,
          ...props.style,
        } satisfies React.CSSProperties
      }
      title={finalTitle}
    >
      {children}
    </div>
  )
}
