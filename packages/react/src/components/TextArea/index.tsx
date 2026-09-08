import './index.css'

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import FieldLabel from '../FieldLabel'
import { countCodePointsInString, mergeRefs } from '../../_lib'
import { useFocusWithClick } from '../TextField/useFocusWithClick'
import { AssistiveText } from '../TextField/AssistiveText'
import { useClassNames } from '../../_lib/useClassNames'
import { useVisuallyHidden } from 'react-aria/VisuallyHidden'
import { useId } from 'react-aria/useId'
import { useIsomorphicLayoutEffect } from '../../_lib/useIsomorphicLayoutEffect'
import { observeResize } from '../Carousel/resizeObserver'

/**
 * 値に含まれる改行だけから行数を数える。CSS にもレイアウトにも依存しないため、
 * 実測できない環境ではこれを使う。
 */
const countValueRows = (value: string) => (value.match(/\n/gu)?.length ?? 0) + 1

/**
 * mirror（textarea と同じ組版・同じ内容幅の隠し要素）の高さを 1 行分の高さで
 * 割って行数を出す。どちらも clientHeight なので getComputedStyle は要らず、
 * DOM への書き込みも起きない。測定できなかった場合は `undefined` を返す。
 */
const measureMirrorRows = (
  text: HTMLElement | null,
  line: HTMLElement | null,
): number | undefined => {
  if (text === null || line === null) {
    return undefined
  }

  // レイアウトが無い環境（jsdom, display: none, 未挿入）では 0 になる
  const lineHeight = line.clientHeight
  if (lineHeight === 0) {
    return undefined
  }

  const rows = Math.round(text.clientHeight / lineHeight)
  return rows >= 1 ? rows : undefined
}

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
  /**
   * 内容に合わせて高さを自動調整する。折り返しも含めて実測するため、
   * 幅は呼び出し側で決めること。親要素が内容依存の幅（shrink-to-fit, inline-flex,
   * fit-content, 幅未指定の絶対配置など）だと想定より狭くなり、折り返しが増えて
   * 高さが過剰に伸びる。
   */
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
    const isUncontrolled = value === undefined
    // `null` is invalid for TextAreaProps, but may arrive at runtime. Keep the
    // pre-f710d512 nullish fallback so getCount is never called with null.
    const countValue = value ?? defaultValue?.toString() ?? ''
    const [contentRows, setContentRows] = useState<number>()
    const [count, setCount] = useState(getCount(countValue))
    // 非制御でも mirror に流し込む値が要るので、DOM の値を state にも持つ
    const [uncontrolledValue, setUncontrolledValue] = useState(
      defaultValue?.toString() ?? '',
    )
    const mirrorValue = value ?? uncontrolledValue

    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const mirrorTextRef = useRef<HTMLDivElement>(null)
    const mirrorLineRef = useRef<HTMLDivElement>(null)
    useFocusWithClick(containerRef, textareaRef)
    const { visuallyHiddenProps } = useVisuallyHidden()

    // maxRows は 1 以上の時だけ上限として扱う
    const rowsLimit =
      maxRows !== undefined && maxRows >= 1 ? maxRows : undefined
    const isEnableAutoHeight = autoHeight || rowsLimit !== undefined
    // 表示行数は実測値を rows 以上 maxRows 以下に収めたもの。autoHeight が無効なら
    // contentRows は undefined のままなので rows prop がそのまま出る。
    const rows = Math.min(
      Math.max(initialRows, contentRows ?? 0),
      rowsLimit ?? Infinity,
    )
    const classNames = useClassNames('charcoal-text-area-root', className)
    const showAssistiveText =
      assistiveText != null && assistiveText.length !== 0

    const syncHeight = useCallback((value: string) => {
      // 実測できない環境では改行数にフォールバックする。折り返しは反映されないが、
      // 少なくとも改行分は伸びる（この変更以前と同じ挙動）。
      setContentRows(
        measureMirrorRows(mirrorTextRef.current, mirrorLineRef.current) ??
          countValueRows(value),
      )
    }, [])

    const syncTextAreaState = useCallback(
      (textarea: HTMLTextAreaElement) => {
        if (isUncontrolled) {
          setCount(getCount(textarea.value))
          // mirror が再描画され、その後の layout effect で高さが揃う
          setUncontrolledValue(textarea.value)
        }
      },
      [getCount, isUncontrolled],
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

    // 制御コンポーネントの時の挙動。高さと違い描画前に確定する必要はない。
    useEffect(() => {
      if (!isUncontrolled) {
        setCount(getCount(countValue))
      }
    }, [countValue, getCount, isUncontrolled])

    // mirror の内容が変わったら測り直す。制御でも非制御でも入口はここだけ。
    // ちらつきを避けるため描画前に行う。
    useIsomorphicLayoutEffect(() => {
      if (isEnableAutoHeight) {
        syncHeight(mirrorValue)
      }
    }, [mirrorValue, isEnableAutoHeight, syncHeight])

    // mirror の高さは幅・フォント・ズームが変われば変わる。行数を変えても
    // mirror 自身の高さは変わらないので、自己ループにならずガードも要らない。
    useIsomorphicLayoutEffect(() => {
      const text = mirrorTextRef.current
      if (!isEnableAutoHeight || text === null) {
        return
      }

      return observeResize(text, () =>
        syncHeight(textareaRef.current?.value ?? ''),
      )
    }, [isEnableAutoHeight, syncHeight])

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
            '--charcoal-text-area-rows': rows,
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
          {isEnableAutoHeight && (
            <div className="charcoal-text-area-mirror" aria-hidden="true">
              <div
                className="charcoal-text-area-mirror-line"
                ref={mirrorLineRef}
              >
                {'\u00a0'}
              </div>
              <div
                className="charcoal-text-area-mirror-text"
                ref={mirrorTextRef}
              >
                {/* 末尾の改行を 1 行として数えさせるための空白 */}
                {mirrorValue + ' '}
              </div>
            </div>
          )}
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
