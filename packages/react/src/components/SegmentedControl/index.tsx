import React, { forwardRef, memo, useMemo, useRef } from 'react'
import { useRadioGroupState } from 'react-stately'
import {
  AriaRadioGroupProps,
  AriaRadioProps,
  useRadio,
  useRadioGroup,
} from '@react-aria/radio'
import styled from 'styled-components'
import { disabledSelector } from '@charcoal-ui/utils'

import { RadioProvider, useRadioContext } from './RadioGroupContext'
import { theme } from '../../styled'

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

  readonly value?: string
  readonly defaultValue?: string

  readonly data: string[] | SegmentedControlItem[]

  readonly onChange?: (value: string) => void
}

const SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>(
  function SegmentedControlInner(props, ref) {
    const ariaRadioGroupProps = useMemo<AriaRadioGroupProps>(
      () => ({
        ...props,
        isDisabled: props.disabled,
        isReadOnly: props.readonly,
        isRequired: props.required,
      }),
      [props]
    )
    const state = useRadioGroupState(ariaRadioGroupProps)
    const { radioGroupProps } = useRadioGroup(ariaRadioGroupProps, state)
    const segmentedControlItems = useMemo<SegmentedControlItem[]>(() => {
      return props.data.map((d) =>
        typeof d === 'string' ? { value: d, label: d } : d
      )
    }, [props.data])

    return (
      <SegmentedControlRoot ref={ref} {...radioGroupProps}>
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
      </SegmentedControlRoot>
    )
  }
)

export default memo(SegmentedControl)

type RadioProps = React.PropsWithChildren<{
  value: string
  disabled?: boolean
}>

const Segmented: React.FC<RadioProps> = ({ children, ...props }) => {
  const state = useRadioContext()
  const ref = useRef<HTMLInputElement>(null)
  const ariaRadioProps = useMemo<AriaRadioProps>(
    () => ({ ...props, isDisabled: props.disabled }),
    [props]
  )

  const { inputProps, isDisabled, isSelected } = useRadio(
    ariaRadioProps,
    state,
    ref
  )

  return (
    <SegmentedRoot
      aria-disabled={isDisabled || state.isReadOnly}
      checked={isSelected}
    >
      <SegmentedInput {...inputProps} ref={ref} />
      <RadioLabel>
        <SegmentedLabelInner>{children}</SegmentedLabelInner>
      </RadioLabel>
    </SegmentedRoot>
  )
}

const SegmentedControlRoot = styled.div`
  display: inline-flex;
  align-items: center;

  ${theme((o) => [o.bg.surface3, o.borderRadius(16)])}
`

const SegmentedRoot = styled.label<{ checked?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 32px;

  ${disabledSelector} {
    cursor: default;
  }

  ${({ checked }) =>
    theme((o) => [
      o.padding.horizontal(16),
      o.borderRadius(16),
      o.disabled,
      checked === true && o.bg.brand,
      checked === true ? o.font.text5 : o.font.text2,
    ])}
`
const SegmentedInput = styled.input`
  position: absolute;

  height: 0px;
  width: 0px;
  padding: 0;
  margin: 0;

  appearance: none;
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  opacity: 0;
`

const RadioLabel = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
  height: 22px;
`
const SegmentedLabelInner = styled.div`
  ${theme((o) => [o.typography(14)])}
`
