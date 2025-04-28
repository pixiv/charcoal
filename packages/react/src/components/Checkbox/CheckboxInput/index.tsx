import './index.css'

import { forwardRef, ForwardRefExoticComponent, memo, MemoExoticComponent, RefAttributes, useCallback } from 'react'
import { useClassNames } from '../../../_lib/useClassNames'

type CharcoalCheckboxInputProps = {
  invalid?: boolean
  onChange?: (checked: boolean) => void
  rounded?: boolean
}

type InputProps = React.HTMLProps<HTMLInputElement>

export type CheckboxInputProps = CharcoalCheckboxInputProps &
  Omit<InputProps, keyof CharcoalCheckboxInputProps | 'ref'>

const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(
  function CheckboxInput(
    { onChange, checked, invalid, className, rounded, ...props },
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
        data-rounded={rounded}
        {...props}
      />
    )
  }
)

const _default_1: MemoExoticComponent<ForwardRefExoticComponent<CharcoalCheckboxInputProps & Omit<InputProps, "ref" | keyof CharcoalCheckboxInputProps> & RefAttributes<HTMLInputElement>>> = memo(CheckboxInput)
export default _default_1
