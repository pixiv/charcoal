import { forwardRef } from 'react'
import { useClassNames } from './useClassNames'

export function createDivComponent(mainClassName: string) {
  return forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
    function DivComponent({ className, ...props }, ref) {
      const classNames = useClassNames(mainClassName, className)
      return <div className={classNames} ref={ref} {...props} />
    },
  )
}
