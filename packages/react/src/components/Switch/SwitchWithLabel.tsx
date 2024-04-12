import * as React from 'react'
import { useClassNames } from '../../_lib/useClassNames'

export const SwitchWithLabel = React.memo(function SwitchWithLabel({
  className,
  children,
  input,
  id,
  disabled,
}: {
  children: React.ReactNode
  input: React.ReactNode
  disabled?: boolean
  className?: string
  id?: string
}) {
  const classNames = useClassNames('charcoal-switch__label', className)
  return (
    <label htmlFor={id} className={classNames} aria-disabled={disabled}>
      {input}
      <div className="charcoal-switch__label_div">{children}</div>
    </label>
  )
})
