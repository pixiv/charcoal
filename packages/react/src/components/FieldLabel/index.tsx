import * as React from 'react'
import styled from 'styled-components'
import { theme } from '../../styled'

export interface FieldLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  readonly className?: string
  readonly label: string
  readonly subLabel?: React.ReactNode
  readonly required?: boolean
  // TODO: 翻訳用のContextで注入する
  readonly requiredText?: string
}

const FieldLabel = React.forwardRef<HTMLLabelElement, FieldLabelProps>(
  function FieldLabel(
    {
      style,
      className,
      label,
      required = false,
      requiredText,
      subLabel,
      ...labelProps
    },
    ref
  ) {
    return (
      <FieldLabelWrapper style={style} className={className}>
        <Label ref={ref} {...labelProps}>
          {label}
        </Label>
        {required && <RequiredText>{requiredText}</RequiredText>}
        <SubLabelClickable>
          <span>{subLabel}</span>
        </SubLabelClickable>
      </FieldLabelWrapper>
    )
  }
)

export default FieldLabel

const Label = styled.label`
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;
  display: flow-root;
  color: var(--charcoal-text1);

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

const RequiredText = styled.span`
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;
  display: flow-root;
  color: var(--charcoal-text2);

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

const SubLabelClickable = styled.div`
  font-size: 14px;
  line-height: 22px;
  display: flow-root;
  color: var(--charcoal-text3);
  transition: 0.2s color, 0.2s box-shadow;

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

  &:not(:disabled):not([aria-disabled]),
  &[aria-disabled='false'] {
    &:hover {
      color: var(--charcoal-text3-hover);
    }
    &:active {
      color: var(--charcoal-text3-press);
    }
    &:active,
    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
    }
  }
`

const FieldLabelWrapper = styled.div`
  display: inline-flex;
  align-items: center;

  > ${RequiredText} {
    ${theme((o) => o.margin.left(4))}
  }

  > ${SubLabelClickable} {
    ${theme((o) => o.margin.left('auto'))}
  }
`
