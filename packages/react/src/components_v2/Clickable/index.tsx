import React, { useMemo, forwardRef, ReactNode } from 'react'
import { useClassNames } from '../../_lib/useClassNames'
import './index.css'

export type ClickableProps<T extends React.ElementType = 'button'> = {
  children?: ReactNode
  /**
   * The component used for root element.
   * @type T extends React.ElementType = 'button'
   */
  component?: T
} & Omit<React.ComponentPropsWithRef<T>, 'children'>

const Clickable = forwardRef(function Clickable<T extends React.ElementType>(
  { component, ...props }: ClickableProps<T>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const className = useClassNames('charcoal-clickable', props.className)

  const Component = useMemo(() => component ?? 'button', [component])

  return <Component {...props} ref={ref} className={className} />
}) as <T extends React.ElementType = 'button'>(
  p: ClickableProps<T>
) => JSX.Element
export default Clickable
