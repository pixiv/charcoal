import './index.css'

import { useVisuallyHidden } from '@react-aria/visually-hidden'
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import FieldLabel from '../FieldLabel'
import { countCodePointsInString, mergeRefs } from '../../_lib'
import { useFocusWithClick } from '../TextField/useFocusWithClick'
import { useId } from '@react-aria/utils'
import { AssistiveText } from '../TextField/AssistiveText'
import { useClassNames } from '../../_lib/useClassNames'

/**
 * `TextArea` を `imperativeRef` から操作するためのハンドル
 */
export type TextAreaImperativeHandle = {
  /**
   * textarea の値を更新し、文字数や高さなどの内部状態を同期する
   */
  setValue: (value: string) => void
  /**
   * textarea の現在の値をもとに、文字数や高さなどの内部状態を同期する
   */
  sync: () => void
}

export type TextAreaProps = {
  value?: string
  onChange?: (value: string) => void
  imperativeRef?: React.Ref<TextAreaImperativeHandle>

  showCount?: boolean
  showLabel?: boolean
  assistiveText?: string
  invalid?: boolean

  label?: string
  requiredText?: string
  disabled?: boolean
  subLabel?: React.ReactNode
  autoHeight?: boolean

  maxRows?: number

  getCount?: (value: string) => number
} & Omit<React.ComponentPropsWithoutRef<'textarea'>, 'onChange'>

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextAreaInner(
    {
      onChange,
      className,
      value,
      showCount = false,
      showLabel = false,
      label = '',
      requiredText,
      subLabel,
      disabled = false,
      required,
      assistiveText,
      maxLength,
      autoHeight = false,
      rows: initialRows = 4,
      maxRows,
      invalid,
      getCount = countCodePointsInString,
      defaultValue,
      imperativeRef,
      ...props
    },
    forwardRef,
  ) {
    const [rows, setRows] = useState(initialRows)
    const [count, setCount] = useState(
      getCount(value ?? defaultValue?.toString() ?? ''),
    )

    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const containerRef = useRef(null)
    useFocusWithClick(containerRef, textareaRef)
    const { visuallyHiddenProps } = useVisuallyHidden()

    const isUncontrolled = value === undefined
    const isEnableAutoHeight = useMemo(
      () => autoHeight || (maxRows && maxRows >= 0),
      [autoHeight, maxRows],
    )
    const classNames = useClassNames('charcoal-text-area-root', className)
    const showAssistiveText =
      assistiveText != null && assistiveText.length !== 0

    const syncHeight = useCallback(
      (textarea: HTMLTextAreaElement) => {
        const currentRows =
          (`${textarea.value}\n`.match(/\n/gu)?.length ?? 0) || 1
        const hasValidMaxRows = maxRows !== undefined && maxRows >= 1
        const nextRows = initialRows <= currentRows ? currentRows : initialRows

        if (!hasValidMaxRows) {
          setRows(nextRows)
          return
        }

        setRows(Math.min(nextRows, maxRows))
      },
      [initialRows, maxRows],
    )

    const syncTextAreaState = useCallback(
      (textarea: HTMLTextAreaElement) => {
        const count = getCount(textarea.value)

        if (isUncontrolled) {
          setCount(count)
        }

        if (isEnableAutoHeight) {
          syncHeight(textarea)
        }

        return count
      },
      [getCount, isEnableAutoHeight, isUncontrolled, syncHeight],
    )

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.currentTarget.value
        const count = getCount(value)
        if (maxLength !== undefined && count > maxLength) {
          return
        }

        syncTextAreaState(e.currentTarget)
        onChange?.(value)
      },
      [getCount, maxLength, onChange, syncTextAreaState],
    )

    useImperativeHandle(
      imperativeRef,
      () => ({
        setValue: (value: string) => {
          if (textareaRef.current === null) {
            return
          }

          textareaRef.current.value = value
          syncTextAreaState(textareaRef.current)
        },
        sync: () => {
          if (textareaRef.current !== null) {
            syncTextAreaState(textareaRef.current)
          }
        },
      }),
      [syncTextAreaState],
    )

    const textAreaId = useId(props.id)
    const describedbyId = useId()
    const labelledbyId = useId()

    useEffect(() => {
      // 制御コンポーネントの時の挙動
      if (!isUncontrolled) {
        setCount(getCount(value))
      }

      //　autoHeight同期(valueが変更された時にsyncHeightしたい)
      if (isEnableAutoHeight && textareaRef.current !== null) {
        syncHeight(textareaRef.current)
      }
    }, [
      isUncontrolled,
      value,
      getCount,
      isEnableAutoHeight,
      textareaRef,
      syncHeight,
    ])

    return (
      <div className={classNames} aria-disabled={disabled}>
        <FieldLabel
          htmlFor={textAreaId}
          id={labelledbyId}
          label={label}
          required={required}
          requiredText={requiredText}
          subLabel={subLabel}
          {...(!showLabel ? visuallyHiddenProps : {})}
        />
        <div
          className="charcoal-text-area-container"
          aria-disabled={disabled === true ? 'true' : undefined}
          aria-invalid={invalid === true}
          ref={containerRef}
          style={{
            '--charcoal-text-area-rows': `${showCount ? rows + 1 : rows}`,
          }}
        >
          <textarea
            className="charcoal-text-area-textarea"
            aria-describedby={showAssistiveText ? describedbyId : undefined}
            aria-invalid={invalid}
            aria-labelledby={labelledbyId}
            id={textAreaId}
            maxLength={maxLength}
            data-no-bottom-padding={showCount}
            onChange={handleChange}
            ref={mergeRefs(forwardRef, textareaRef)}
            rows={rows}
            value={value}
            disabled={disabled}
            defaultValue={defaultValue}
            {...props}
          />
          {showCount && (
            <span className="charcoal-text-area-counter">
              {maxLength !== undefined ? `${count}/${maxLength}` : count}
            </span>
          )}
        </div>
        {showAssistiveText && (
          <AssistiveText data-invalid={invalid === true} id={describedbyId}>
            {assistiveText}
          </AssistiveText>
        )}
      </div>
    )
  },
)

export default TextArea
