import * as React from 'react'
import {
  LinkProps,
  useComponentAbstraction,
} from '../../core/ComponentAbstraction'
import { useClassNames } from '../../_lib/useClassNames'

interface BaseProps {
  /**
   * クリックの無効化
   */
  disabled?: boolean
}

interface LinkBaseProps {
  /**
   * リンクのURL。指定するとbuttonタグではなくaタグとして描画される
   */
  to: string
}

export type ClickableProps =
  | (BaseProps & Omit<React.ComponentPropsWithoutRef<'button'>, 'disabled'>)
  | (BaseProps & LinkBaseProps & Omit<LinkProps, 'to'>)
export type ClickableElement = HTMLButtonElement & HTMLAnchorElement

const Clickable = React.forwardRef<ClickableElement, ClickableProps>(
  function Clickable(props, ref) {
    const className = useClassNames('charcoal-clickable', props.className)

    const { Link } = useComponentAbstraction()
    const isLink = 'to' in props

    if (isLink) {
      const { disabled, ..._rest } = props

      return (
        <Link
          {..._rest}
          ref={ref}
          aria-disabled={disabled === true ? true : undefined}
          className={className}
        />
      )
    }

    return <button {...props} ref={ref} className={className} />
  }
)
export default Clickable
