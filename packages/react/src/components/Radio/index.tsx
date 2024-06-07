import './index.css'

import { memo, forwardRef, useContext } from 'react'
import * as React from 'react'
import warning from 'warning'
import { useClassNames } from '../../_lib/useClassNames'

import { RadioGroupContext } from './RadioGroupContext'
import RadioInput from './RadioInput'

export type RadioProps = React.PropsWithChildren<{
  value: string
  disabled?: boolean
  className?: string
}>

const Radio = forwardRef<HTMLInputElement, RadioProps>(function RadioInner(
  { value, disabled = false, children, ...props },
  ref
) {
  const {
    name,
    selected,
    disabled: isParentDisabled,
    readonly,
    invalid,
    onChange,
  } = useContext(RadioGroupContext)

  const classNames = useClassNames('charcoal-radio__label', props.className)

  warning(
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    name !== undefined,
    `"name" is not Provided for <Radio>. Perhaps you forgot to wrap with <RadioGroup> ?`
  )

  const isSelected = value === selected
  const isDisabled = disabled || isParentDisabled
  const isReadonly = readonly && !isSelected

  return (
    <label aria-disabled={isDisabled || isReadonly} className={classNames}>
      <RadioInput
        name={name}
        value={value}
        checked={isSelected}
        aria-invalid={invalid}
        onChange={onChange}
        disabled={isDisabled || isReadonly}
        ref={ref}
      />
      {children != null && (
        <div className="charcoal-radio__label_div">{children}</div>
      )}
    </label>
  )
})

export default memo(Radio)
