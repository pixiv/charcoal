import './index.css'

import { getFinalTitle } from './helper'
import { useClassNames } from '../../_lib/useClassNames'
import { CSSProperties } from 'react'

export type TextEllipsisProps = {
  lineHeight?: number
  lineLimit?: number
  hyphens?: CSSProperties['hyphens']
  /** html title属性を付与。false のときは付与せず、空文字のときは表示しない */
  showTooltip?: boolean
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
  ...props
}: TextEllipsisProps) {
  const finalTitle = getFinalTitle(showTooltip, title, children)

  const classNames = useClassNames('charcoal-text-ellipsis', props.className)
  const hasLineHeight = lineHeight !== undefined

  return (
    <div
      {...props}
      className={classNames}
      data-line-limit={lineLimit}
      data-has-line-height={hasLineHeight}
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
