import './index.css'

import { forwardRef, memo } from 'react'
import CheckboxInput, { CheckboxInputProps } from './CheckboxInput'
import { CheckboxWithLabel } from './CheckboxWithLabel'
import { useId } from '../../utils/useId'

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

export default memo(Checkbox)
