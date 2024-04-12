import './index.css'

import { forwardRef, useCallback } from 'react'
import { useClassNames } from '../../../_lib/useClassNames'

export type CharcoalSwitchProps = {
  onChange?: (checked: boolean) => void
}

type InputProps = Omit<React.HTMLProps<HTMLInputElement>, 'ref'>

export type SwitchProps = CharcoalSwitchProps &
  Omit<InputProps, keyof CharcoalSwitchProps>

const SwitchInput = forwardRef<HTMLInputElement, Omit<SwitchProps, 'children'>>(
  function SwitchInput({ onChange, className, ...props }, ref) {
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const el = e.currentTarget
        onChange?.(el.checked)
      },
      [onChange]
    )
    props.children

    const classNames = useClassNames('charcoal-switch-input', className)
    return (
      <input
        ref={ref}
        className={classNames}
        type="checkbox"
        onChange={handleChange}
        {...props}
      />
    )
  }
)
export default SwitchInput
