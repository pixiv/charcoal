import { ReactNode, forwardRef, memo, useMemo, useRef } from 'react'
import * as React from 'react'
import { useRadioGroupState } from '@react-stately/radio'
import {
  AriaRadioGroupProps,
  AriaRadioProps,
  useRadio,
  useRadioGroup,
} from '@react-aria/radio'
import styled, { css } from 'styled-components'

import { RadioProvider, useRadioContext } from './RadioGroupContext'

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
    const ariaRadioGroupProps = useMemo<AriaRadioGroupProps>(
      () => ({
        ...props,
        isDisabled: props.disabled,
        isReadOnly: props.readonly,
        isRequired: props.required,
        'aria-label': props.name,
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
      <SegmentedControlRoot
        ref={ref}
        {...radioGroupProps}
        className={props.className}
      >
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
        <SegmentedLabelInner>{props.children}</SegmentedLabelInner>
      </RadioLabel>
    </SegmentedRoot>
  )
}

const SegmentedControlRoot = styled.div`
  display: inline-flex;
  align-items: center;

  background-color: var(--charcoal-surface3);
  border-radius: 16px;
`

const SegmentedRoot = styled.label<{ checked?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 32px;

  padding-right: 16px;
  padding-left: 16px;
  border-radius: 16px;
  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    cursor: default;
    opacity: 0.32;
  }
  color: var(--charcoal-text2);

  ${({ checked = false }) =>
    checked &&
    css`
      background-color: var(--charcoal-brand);
      color: var(--charcoal-text5);
    `}
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
  font-size: 14px;
  line-height: 22px;
  display: flow-root;

  &::before {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-top: -4px;
  }
  &::after {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-bottom: -4px;
  }
`
