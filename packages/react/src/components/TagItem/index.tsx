import React, { forwardRef, memo, useMemo, ForwardedRef, type JSX } from 'react'
import Icon from '../Icon'
import { useClassNames } from '../../_lib/useClassNames'
import './index.css'

import { useObjectRef } from 'react-aria/useObjectRef'
import { useLink } from 'react-aria'

type SizeMap = {
  S: 32
  M: 40
}

export type TagItemProps<T extends React.ElementType = 'a'> = {
  label: string
  translatedLabel?: string
  bgColor?: string
  bgImage?: string
  status?: 'default' | 'active' | 'inactive'
  size?: keyof SizeMap
  disabled?: boolean
  /**
   * The component used for root element.
   * @type T extends React.ElementType = 'a'
   */
  component?: T
} & Omit<React.ComponentPropsWithRef<T>, 'children' | 'disabled'>

const TagItem = forwardRef<HTMLAnchorElement, TagItemProps>(
  function TagItemInner<T extends React.ElementType>(
    {
      component,
      label,
      translatedLabel,
      bgColor = '#7ACCB1',
      bgImage,
      size = 'M',
      status = 'default',
      disabled,
      'aria-disabled': ariaDisabled,
      ...props
    }: TagItemProps<T>,
    _ref: ForwardedRef<HTMLAnchorElement>,
  ) {
    const ref = useObjectRef(_ref)

    const hasTranslatedLabel =
      translatedLabel !== undefined && translatedLabel.length > 0
    const className = useClassNames(
      'charcoal-tag-item',
      'charcoal-tag-item__bg',
      props.className,
    )

    const bgVariant =
      bgImage !== undefined && bgImage.length > 0 ? 'image' : 'color'
    const bg = bgVariant === 'color' ? bgColor : `url(${bgImage ?? ''})`

    const Component = useMemo(() => component ?? 'a', [component])
    const isButton = Component === 'button'

    const { linkProps } = useLink(
      {
        isDisabled: disabled,
        elementType: typeof Component === 'string' ? Component : 'a',
      },
      ref,
    )

    const disabledProps = isButton
      ? { disabled, 'aria-disabled': ariaDisabled }
      : linkProps

    return (
      <Component
        {...props}
        {...disabledProps}
        ref={ref}
        className={className}
        data-state={status}
        data-bg-variant={bgVariant}
        data-size={hasTranslatedLabel ? 'M' : size}
        style={{ '--charcoal-tag-item-bg': bg }}
      >
        <div
          className="charcoal-tag-item__label"
          data-has-translate={hasTranslatedLabel}
        >
          {hasTranslatedLabel && (
            <span className="charcoal-tag-item__label__translated">
              {translatedLabel}
            </span>
          )}
          <span
            className="charcoal-tag-item__label__text"
            data-has-translate={hasTranslatedLabel}
          >
            {label}
          </span>
        </div>
        {status === 'active' && <Icon name="16/Remove" />}
      </Component>
    )
  },
) as <T extends React.ElementType = 'a'>(p: TagItemProps<T>) => JSX.Element

export default memo(TagItem)
