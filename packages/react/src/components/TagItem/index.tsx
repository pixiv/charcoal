import React, { forwardRef, memo, useMemo, ForwardedRef, type JSX } from 'react'
import { useObjectRef } from '@react-aria/utils'
import Icon from '../Icon'
import { useClassNames } from '../../_lib/useClassNames'

import './index.css'

const sizeMap = {
  S: 32,
  M: 40,
}

export type TagItemProps<T extends React.ElementType = 'button'> = {
  label: string
  translatedLabel?: string
  bgColor?: string
  bgImage?: string
  status?: 'default' | 'active' | 'inactive'
  size?: keyof typeof sizeMap
  /**
   * The component used for root element.
   * @type T extends React.ElementType = 'button'
   */
  component?: T
} & Omit<React.ComponentPropsWithRef<T>, 'children'>

const TagItem = forwardRef<HTMLButtonElement, TagItemProps>(
  function TagItemInner<T extends React.ElementType>(
    {
      component,
      label,
      translatedLabel,
      bgColor = '#7ACCB1',
      bgImage,
      size = 'M',
      status = 'default',
      ...props
    }: TagItemProps<T>,
    _ref: ForwardedRef<HTMLButtonElement>
  ) {
    const ref = useObjectRef(_ref)

    const hasTranslatedLabel =
      translatedLabel !== undefined && translatedLabel.length > 0
    const className = useClassNames(
      'charcoal-tag-item',
      'charcoal-tag-item__bg',
      props.className
    )

    const bgVariant =
      bgImage !== undefined && bgImage.length > 0 ? 'image' : 'color'
    const bg = bgVariant === 'color' ? bgColor : `url(${bgImage ?? ''})`

    const Component = useMemo(() => component ?? 'button', [component])

    return (
      <Component
        {...props}
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
  }
) as <T extends React.ElementType = 'button'>(p: TagItemProps<T>) => JSX.Element

export default memo(TagItem) as React.ForwardRefExoticComponent<React.PropsWithoutRef<TagItemProps> & React.RefAttributes<HTMLButtonElement>>
