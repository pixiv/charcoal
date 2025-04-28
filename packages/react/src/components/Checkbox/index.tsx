import './index.css'

import { forwardRef, ForwardRefExoticComponent, HTMLProps, memo, MemoExoticComponent, RefAttributes } from 'react'
import { useId } from '@react-aria/utils'
import CheckboxInput, { CheckboxInputProps } from './CheckboxInput'
import { CheckboxWithLabel } from './CheckboxWithLabel'

export type CheckboxProps = CheckboxInputProps

const Checkbox = forwardRef<HTMLInputElement, CheckboxInputProps>(
  function Checkbox({ disabled, className, id, children, ...props }, ref) {
    const htmlId = useId(id)
    const noChildren = children === undefined
    const input = (
      <CheckboxInput
        {...props}
        className={noChildren ? className : undefined}
        disabled={disabled}
        id={htmlId}
        ref={ref}
      />
    )
    if (noChildren) {
      return input
    }
    return (
      <CheckboxWithLabel
        className={className}
        disabled={disabled}
        id={htmlId}
        input={input}
      >
        {children}
      </CheckboxWithLabel>
    )
  }
)

export default memo(Checkbox) as MemoExoticComponent<ForwardRefExoticComponent<{
  invalid?: boolean
  onChange?: (checked: boolean) => void
  rounded?: boolean
} & Omit<HTMLProps<HTMLInputElement>, keyof {
  invalid?: boolean
  onChange?: (checked: boolean) => void
  rounded?: boolean
} | "ref"> & RefAttributes<HTMLInputElement>>>
