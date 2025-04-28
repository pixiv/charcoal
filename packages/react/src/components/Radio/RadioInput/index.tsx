import './index.css'

import { forwardRef, ForwardRefExoticComponent, memo, MemoExoticComponent, RefAttributes, useCallback } from 'react'
import { useClassNames } from '../../../_lib/useClassNames'

type CharcoalRadioInputProps = {
  invalid?: boolean
  onChange?: (value: string) => void
}

type InputProps = React.HTMLProps<HTMLInputElement>

export type RadioInputProps = CharcoalRadioInputProps &
  Omit<InputProps, keyof CharcoalRadioInputProps | 'ref'>

const RadioInput = forwardRef<HTMLInputElement, RadioInputProps>(
  function RadioInput({ onChange, invalid, className, ...props }, ref) {
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const el = e.currentTarget
        onChange?.(el.value)
      },
      [onChange]
    )

    const classNames = useClassNames('charcoal-radio-input', className)

    return (
      <input
        className={classNames}
        ref={ref}
        type="radio"
        onChange={handleChange}
        aria-invalid={invalid}
        {...props}
      />
    )
  }
)

const _default_1: MemoExoticComponent<ForwardRefExoticComponent<CharcoalRadioInputProps & Omit<InputProps, "ref" | keyof CharcoalRadioInputProps> & RefAttributes<HTMLInputElement>>> = memo(RadioInput)
export default _default_1
