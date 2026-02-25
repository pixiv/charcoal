import './index.css'

import { ForwardedRef, forwardRef, ReactNode, useMemo } from 'react'
import { useClassNames } from '../../../_lib/useClassNames'

export type CustomJSXElement =
  | keyof JSX.IntrinsicElements
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | React.JSXElementConstructor<any>

export type ListItemProps<T extends React.ElementType = 'li'> = {
  children?: ReactNode
  as?: T
} & Omit<React.ComponentPropsWithRef<T>, 'children' | 'as'>

const ListItem = forwardRef(function ListItem<T extends React.ElementType>(
  { as, className, ...props }: ListItemProps<T>,
  ref: ForwardedRef<HTMLLIElement>
) {
  const Component = useMemo(() => as ?? 'li', [as])
  const classNames = useClassNames('charcoal-list-item', className)
  return <Component className={classNames} ref={ref} {...props}></Component>
}) as <T extends React.ElementType = 'li'>(p: ListItemProps<T>) => JSX.Element

export default ListItem
