import * as React from 'react'
import { useClassNames } from '../../_lib/useClassNames'

export const SwitchWithLabel: React.NamedExoticComponent<{
  children: React.ReactNode
  className?: string
  disabled?: boolean
  id?: string
  input: React.ReactNode
}> = React.memo(function SwitchWithLabel({
  children,
  className,
  disabled,
  id,
  input,
}: {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  id?: string
  input: React.ReactNode
}) {
  const classNames = useClassNames('charcoal-switch__label', className)
  return (
    <label htmlFor={id} className={classNames} aria-disabled={disabled}>
      {input}
      <div className="charcoal-switch__label_div">{children}</div>
    </label>
  )
})
