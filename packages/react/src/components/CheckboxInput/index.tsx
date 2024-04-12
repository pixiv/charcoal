import './index.css'

import { forwardRef, memo, useCallback } from 'react'
import Icon from '../Icon'
import { useClassNames } from '../../_lib/useClassNames'

type CharcoalCheckboxInputProps = {
  invalid?: boolean
  onChange?: (checked: boolean) => void
}

type InputProps = React.HTMLProps<HTMLInputElement>

export type CheckboxInputProps = CharcoalCheckboxInputProps &
  Omit<InputProps, keyof CharcoalCheckboxInputProps | 'ref'>

const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(
  function CheckboxInput({ onChange, checked, invalid, ...props }, ref) {
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const el = e.currentTarget
        onChange?.(el.checked)
      },
      [onChange]
    )

    const classNames = useClassNames(
      'charcoal-checkbox-input__root',
      props.className
    )

    return (
      <div className={classNames}>
        <input
          ref={ref}
          className="charcoal-checkbox-input__input"
          type="checkbox"
          onChange={handleChange}
          aria-invalid={invalid}
          checked={checked}
          {...props}
        />
        <div
          className="charcoal-checkbox-input__overlay"
          aria-hidden={true}
          data-checked={checked}
        >
          <Icon name="24/Check" unsafeNonGuidelineScale={2 / 3} />
        </div>
      </div>
    )
  }
)

export default memo(CheckboxInput)
