import React from 'react'
import { useClassNames } from '../../_lib/useClassNames'

export const CheckboxWithLabel: React.NamedExoticComponent<{
  children: React.ReactNode
  input: React.ReactNode
  disabled?: boolean
  className?: string
  id?: string
}> = React.memo(function CheckboxWithLabel({
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
  const classNames = useClassNames('charcoal-checkbox__label', className)
  return (
    <label htmlFor={id} aria-disabled={disabled} className={classNames}>
      {input}
      <div className="charcoal-checkbox__label_div">{children}</div>
    </label>
  )
})
