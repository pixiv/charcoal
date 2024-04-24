import { memo, forwardRef, useMemo } from 'react'
import * as React from 'react'
import { useClassNames } from '../../_lib/useClassNames'

import { useRadioGroupState } from 'react-stately'
import { RadioGroupProvider, useRadioGroupContext } from './context'
import {
  type AriaRadioGroupProps,
  type AriaRadioProps,
  useRadio,
  useRadioGroup,
} from '@react-aria/radio'
import { useObjectRef } from '@react-aria/utils'
import type { AriaLabelingProps } from '@react-types/shared'

import './index.css'

export type RadioProps = React.PropsWithChildren<{
  value: string
  disabled?: boolean
  className?: string
}>

const Radio = forwardRef<HTMLInputElement, RadioProps>(function RadioInner(
  { value, disabled = false, children, ...props },
  external
) {
  const ref = useObjectRef(external)
  const ariaRadioProps = useMemo<AriaRadioProps>(
    () => ({
      value,
      isDisabled: disabled,
      children,
    }),
    [children, disabled, value]
  )
  const state = useRadioGroupContext()
  const { inputProps } = useRadio(ariaRadioProps, state, ref)

  const className = useClassNames('charcoal-radio', props.className)

  return (
    <label className={className}>
      <input
        className="charcoal-radio__input"
        {...inputProps}
        data-invalid={state.isInvalid}
        ref={ref}
      />
      {children != null && (
        <div className="charcoal-radio__label">{children}</div>
      )}
    </label>
  )
})

export default memo(Radio)

export type RadioGroupProps = React.PropsWithChildren<
  AriaLabelingProps & {
    className?: string
    name: string
    value?: string

    disabled?: boolean
    readonly?: boolean
    invalid?: boolean
    required?: boolean

    onChange?(next: string): void
    onBlur?(): void
    onFocus?(): void
  }
>

export function RadioGroup({
  disabled,
  readonly,
  invalid,
  required,
  children,
  ...props
}: RadioGroupProps) {
  const className = useClassNames('charcoal-radio-group', props.className)
  const ariaRadioGroupProps = useMemo<AriaRadioGroupProps>(
    () => ({
      ...props,
      isDisabled: disabled,
      isInvalid: invalid,
      isReadOnly: readonly,
      isRequired: required,
      orientation: 'vertical',
    }),
    [props, disabled, invalid, readonly, required]
  )

  const state = useRadioGroupState(ariaRadioGroupProps)
  const { radioGroupProps } = useRadioGroup(ariaRadioGroupProps, state)

  return (
    <RadioGroupProvider value={state}>
      <div className={className} {...radioGroupProps}>
        {children}
      </div>
    </RadioGroupProvider>
  )
}
