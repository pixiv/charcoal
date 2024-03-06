import './index.css'

import * as React from 'react'
import { forwardRef, memo } from 'react'
import { useId } from '@react-aria/utils'

import CheckboxInput, { CheckboxInputProps } from '../CheckboxInput'
import { useClassNames } from '../../_lib/useClassNames'

export type CheckboxProps = CheckboxInputProps & {
  label?: string | React.ReactNode
}
const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function CheckboxInner({ disabled, className, id, label, ...props }, ref) {
    const classNames = useClassNames('charcoal-checkbox__label', className)
    const htmlId = useId(id)
    const input = (
      <CheckboxInput {...props} id={htmlId} disabled={disabled} ref={ref} />
    )
    if (label === undefined) {
      return input
    }
    return (
      <label htmlFor={htmlId} aria-disabled={disabled} className={classNames}>
        {input}
        <div className="charcoal-checkbox__text">{label}</div>
      </label>
    )
  }
)

export default memo(Checkbox)
