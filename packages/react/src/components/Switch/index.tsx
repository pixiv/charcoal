import './index.css'

import { memo, forwardRef } from 'react'
import SwitchInput, { type SwitchInputProps } from './SwitchInput'
import { SwitchWithLabel } from './SwitchWithLabel'
import { useId } from '../../utils/useId'

export type SwitchProps = SwitchInputProps

const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { children, onChange, disabled, className, id, ...props },
  ref
) {
  const htmlId = useId(id)
  const noChildren = children === undefined
  const input = (
    <SwitchInput
      {...props}
      disabled={disabled}
      className={noChildren ? className : undefined}
      id={htmlId}
      onChange={onChange}
      ref={ref}
      role="switch"
      type="checkbox"
    />
  )

  if (noChildren) {
    return input
  }

  return (
    <SwitchWithLabel
      className={className}
      disabled={disabled}
      id={htmlId}
      input={input}
    >
      {children}
    </SwitchWithLabel>
  )
})

export default memo(Switch)
