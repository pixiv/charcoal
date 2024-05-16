import React, { useMemo, forwardRef } from 'react'
import { useClassNames } from '../../_lib/useClassNames'
import './index.css'

export type ClickableProps<T extends React.ElementType = 'button'> = {
  /**
   * The component used for root element.
   * @type T extends React.ElementType = 'button'
   */
  as?: T
  /**
   * The as property of the component specified by the Button component's as attribute.
   */
  componentAs?: React.ComponentPropsWithRef<T>['as']
} & Omit<React.ComponentPropsWithRef<T>, 'as'>

const Clickable = forwardRef(function Clickable<T extends React.ElementType>(
  { componentAs, as, ...props }: ClickableProps<T>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const className = useClassNames('charcoal-clickable', props.className)

  const Component = useMemo(() => as ?? 'button', [as])

  return (
    <Component {...props} ref={ref} className={className} as={componentAs} />
  )
}) as <T extends React.ElementType = 'button'>(
  p: ClickableProps<T>
) => JSX.Element
export default Clickable
