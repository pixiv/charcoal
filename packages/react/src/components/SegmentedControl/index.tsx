import { ReactNode, forwardRef, memo, useMemo, useRef } from 'react'
import * as React from 'react'
import { useRadioGroupState } from '@react-stately/radio'
import {
  AriaRadioGroupProps,
  AriaRadioProps,
  useRadio,
  useRadioGroup,
} from '@react-aria/radio'
import { RadioProvider, useRadioContext } from './RadioGroupContext'
import { useClassNames } from '../../_lib/useClassNames'

import './index.css'

type SegmentedControlItem = {
  label: React.ReactNode
  value: string
  disabled?: boolean
}

export type SegmentedControlProps = {
  readonly id?: string
  readonly name?: string
  readonly disabled?: boolean
  readonly readonly?: boolean
  readonly required?: boolean
  readonly className?: string

  readonly value?: string
  readonly defaultValue?: string

  readonly data: string[] | SegmentedControlItem[]

  readonly onChange?: (value: string) => void
}

const SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>(
  function SegmentedControlInner(props, ref) {
    const className = useClassNames(
      'charcoal-segmented-control',
      props.className,
    )

    const ariaRadioGroupProps = useMemo<AriaRadioGroupProps>(
      () => ({
        ...props,
        isDisabled: props.disabled,
        isReadOnly: props.readonly,
        isRequired: props.required,
        'aria-label': props.name,
      }),
      [props],
    )
    const state = useRadioGroupState(ariaRadioGroupProps)
    const { radioGroupProps } = useRadioGroup(ariaRadioGroupProps, state)
    const segmentedControlItems = useMemo<SegmentedControlItem[]>(() => {
      return props.data.map((d) =>
        typeof d === 'string' ? { value: d, label: d } : d,
      )
    }, [props.data])

    return (
      <div ref={ref} {...radioGroupProps} className={className}>
        <RadioProvider value={state}>
          {segmentedControlItems.map((item) => (
            <Segmented
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {item.label}
            </Segmented>
          ))}
        </RadioProvider>
      </div>
    )
  },
)

export default memo(SegmentedControl)

type RadioProps = {
  value: string
  disabled?: boolean
  children?: ReactNode
}

const Segmented = (props: RadioProps) => {
  const state = useRadioContext()
  const ref = useRef<HTMLInputElement>(null)
  const ariaRadioProps = useMemo<AriaRadioProps>(
    () => ({
      value: props.value,
      isDisabled: props.disabled,
      children: props.children,
    }),
    [props],
  )

  const { inputProps, isDisabled, isSelected } = useRadio(
    ariaRadioProps,
    state,
    ref,
  )

  return (
    <label
      className="charcoal-segmented-control-radio__label"
      aria-disabled={isDisabled || state.isReadOnly}
      data-checked={isSelected}
    >
      <input
        className="charcoal-segmented-control-radio__input"
        {...inputProps}
        ref={ref}
      />
      {props.children}
    </label>
  )
}
