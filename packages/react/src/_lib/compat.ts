import * as React from 'react'

/**
 * import { Story } from '@storybook/react/types-6-0'
 *
 * をするとstyled-componentsが壊れるので代替品を作った
 *
 * エラー:
 * node_modules/@types/styled-components/ts3.7/index.d.ts
 * `Type alias 'Interpolation' circularly references itself. ts(2456)`
 */
export type Story<P> = React.ComponentType<P> & { args?: P }

/**
 * react-ariaの`useTextField()`は、<textarea>をサポートするにも関わらず、
 * `React.KeyboardEvent<HTMLInputElement>`しか想定していないイベントハンドラがいくつかある
 * ↓ が直るまで、以下のイベントハンドラの型は信用しない（本当は`Element`ではなく`HTMLTextAreaElement`とかにしたい）
 *
 * @see https://github.com/adobe/react-spectrum/issues/4662
 */
export interface ReactAreaUseTextFieldCompat<E = Element> {
  readonly onCopy?: React.ClipboardEventHandler<E>
  readonly onPaste?: React.ClipboardEventHandler<E>
  readonly onCut?: React.ClipboardEventHandler<E>
  readonly onCompositionStart?: React.CompositionEventHandler<E>
  readonly onCompositionEnd?: React.CompositionEventHandler<E>
  readonly onCompositionUpdate?: React.CompositionEventHandler<E>
  readonly onSelect?: React.ReactEventHandler<E>
  readonly onBeforeInput?: React.FormEventHandler<E>
  readonly onInput?: React.FormEventHandler<E>
}
