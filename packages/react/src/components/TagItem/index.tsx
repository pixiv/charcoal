import { forwardRef, memo, useMemo, ComponentPropsWithoutRef } from 'react'
import { useObjectRef } from '@react-aria/utils'
import styled, { css } from 'styled-components'
import { px } from '@charcoal-ui/utils'
import { AriaButtonProps, useButton } from '@react-aria/button'
import Icon from '../Icon'
import { focusVisibleFocusRingCss } from '@charcoal-ui/styled'

const sizeMap = {
  S: 32,
  M: 40,
}

export type TagItemProps = {
  label: string
  translatedLabel?: string
  bgColor?: string
  bgImage?: string
  status?: 'default' | 'active' | 'inactive'
  size?: keyof typeof sizeMap
  disabled?: boolean
  className?: string
} & Pick<ComponentPropsWithoutRef<'a'>, 'href' | 'target' | 'rel' | 'onClick'>

const TagItem = forwardRef<HTMLAnchorElement, TagItemProps>(
  function TagItemInner(
    {
      label,
      translatedLabel,
      bgColor = '#7ACCB1',
      bgImage,
      size = 'M',
      disabled,
      status = 'default',
      className,
      ...props
    },
    _ref
  ) {
    const ref = useObjectRef(_ref)
    const ariaButtonProps = useMemo<AriaButtonProps<'a'>>(
      () => ({
        elementType: 'a',
        isDisabled: disabled,
        ...props,
      }),
      [disabled, props]
    )

    const { buttonProps } = useButton(ariaButtonProps, ref)
    const hasTranslatedLabel =
      translatedLabel !== undefined && translatedLabel.length > 0

    return (
      <TagItemRoot
        ref={ref}
        size={hasTranslatedLabel ? 'M' : size}
        status={status}
        {...buttonProps}
        className={className}
      >
        <Background bgColor={bgColor} bgImage={bgImage} status={status} />

        <Inner>
          <LabelWrapper isTranslate={hasTranslatedLabel}>
            {hasTranslatedLabel && (
              <TranslatedLabel>
                <Label>{translatedLabel}</Label>
              </TranslatedLabel>
            )}
            <Label>{label}</Label>
          </LabelWrapper>
          {status === 'active' && <Icon name="16/Remove" />}
        </Inner>
      </TagItemRoot>
    )
  }
)

export default memo(TagItem)

type TagItemRootProps = Pick<TagItemProps, 'status'> &
  Required<Pick<TagItemProps, 'size'>>

type Horizontal = {
  left: number
  right: number
}
const horizontalPadding = ({ left, right }: Horizontal) => css`
  padding-right: ${px(right)};
  padding-left: ${px(left)};
`
const tagItemRootSize = (size: TagItemProps['size']) => {
  switch (size) {
    case 'M':
      return horizontalPadding({ left: 24, right: 24 })
    case 'S':
      return horizontalPadding({ left: 16, right: 16 })
  }
}
const activeTagItemRoot = horizontalPadding({ left: 16, right: 8 })

const TagItemRoot = styled.a<TagItemRootProps>`
  isolation: isolate;
  position: relative;
  height: ${({ size }) => sizeMap[size]}px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  border-radius: 4px;
  ${({ size, status }) => status !== 'active' && tagItemRootSize(size)}
  ${({ status }) => status === 'active' && activeTagItemRoot}
  color: ${({ status }) =>
    status === 'inactive' ? 'var(--charcoal-text2)' : 'var(--charcoal-text5)'};

  transition: 0.2s box-shadow;

  &:not(:disabled):not([aria-disabled]),
  &[aria-disabled='false'] {
    ${focusVisibleFocusRingCss}
  }

  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
    cursor: default;
  }
`

const Background = styled.div<
  Pick<TagItemProps, 'bgColor' | 'bgImage' | 'status'>
>`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${({ bgColor }) => bgColor};
  ${({ status }) =>
    status === 'inactive' &&
    css`
      background-color: var(--charcoal-surface3);
    `}

  ${({ bgImage }) =>
    bgImage !== undefined &&
    css`
      background-color: var(--charcoal-surface4);

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        background-image: url(${bgImage});
        mix-blend-mode: overlay;
      }
    `}
`

const Inner = styled.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  z-index: 2;
`

const labelCSS = css`
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;
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
const translateLabelCSS = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 10px;
`
const LabelWrapper = styled.div<{ isTranslate?: boolean }>`
  ${({ isTranslate }) => (isTranslate ?? false ? translateLabelCSS : labelCSS)}
`

const Label = styled.span`
  max-width: 152px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: inherit;
  color: inherit;
  line-height: inherit;
`

const TranslatedLabel = styled.div`
  font-size: 12px;
  line-height: 20px;
  font-weight: bold;
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
