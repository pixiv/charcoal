import { DetailedHTMLProps, DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES, forwardRef, ForwardRefExoticComponent, HTMLAttributes, RefAttributes, RefObject } from 'react'
import { useClassNames } from './useClassNames'

export function createDivComponent(mainClassName: string): ForwardRefExoticComponent<Omit<Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
  ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined
}, "ref"> & RefAttributes<HTMLDivElement>> {
  return forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
    function DivComponent({ className, ...props }, ref) {
      const classNames = useClassNames(mainClassName, className)
      return <div className={classNames} ref={ref} {...props} />
    }
  )
}
