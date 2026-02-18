import './index.css'

import { onlyText } from './helper'
import { useClassNames } from '../../_lib/useClassNames'

export type TextEllipsisProps = {
  lineHeight: number
  lineLimit?: number
} & React.ComponentPropsWithoutRef<'div'>

/**
 * 複数行のテキストに表示行数制限を設けて`...`で省略する
 */
export default function TextEllipsis({
  lineHeight,
  lineLimit = 1,
  children,
  title,
  ...props
}: TextEllipsisProps) {
  const resolvedTitle = title === undefined ? onlyText(children) : title
  const finalTitle = resolvedTitle !== '' ? resolvedTitle : undefined

  const classNames = useClassNames('charcoal-text-ellipsis', props.className)

  return (
    <div
      {...props}
      className={classNames}
      data-line-limit={lineLimit}
      style={
        {
          '--charcoal-text-ellipsis-line-height': `${lineHeight}px`,
          '--charcoal-text-ellipsis-line-limit': lineLimit,
          ...props.style,
        } satisfies React.CSSProperties
      }
      title={finalTitle}
    >
      {children}
    </div>
  )
}
