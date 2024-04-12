import './index.css'

import { memo, forwardRef } from 'react'
import { useId } from '@react-aria/utils'
import SwitchInput, { type SwitchProps } from './SwitchInput'
import { SwitchWithLabel } from './SwitchWithLabel'

export type { SwitchProps } from './SwitchInput'

const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { children, onChange, disabled, className, id, ...props },
  ref
) {
  const htmlId = useId(id)
  const noChildren = children === undefined
  const input = (
    <SwitchInput
      className={noChildren ? className : undefined}
      id={htmlId}
      type="checkbox"
      ref={noChildren ? ref : undefined}
      role="switch"
      onChange={onChange}
      {...props}
    />
  )

  if (noChildren) {
    return input
  }

  return (
    <SwitchWithLabel
      input={input}
      className={className}
      disabled={disabled}
      id={htmlId}
    >
      {children}
    </SwitchWithLabel>
  )
})

export default memo(Switch)
