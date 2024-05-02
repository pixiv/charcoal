import './index.css'

import { forwardRef, memo, useCallback } from 'react'
import { useClassNames } from '../../../_lib/useClassNames'

type CharcoalCheckboxInputProps = {
  invalid?: boolean
  onChange?: (checked: boolean) => void
}

type InputProps = React.HTMLProps<HTMLInputElement>

export type CheckboxInputProps = CharcoalCheckboxInputProps &
  Omit<InputProps, keyof CharcoalCheckboxInputProps | 'ref'>

const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(
  function CheckboxInput(
    { onChange, checked, invalid, className, ...props },
    ref
  ) {
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const el = e.currentTarget
        onChange?.(el.checked)
      },
      [onChange]
    )

    const classNames = useClassNames('charcoal-checkbox-input', className)

    return (
      <input
        className={classNames}
        ref={ref}
        type="checkbox"
        onChange={handleChange}
        aria-invalid={invalid}
        checked={checked}
        {...props}
      />
    )
  }
)

export default memo(CheckboxInput)
