export const __SERVER__ = typeof window === 'undefined'

const CAN_USE_DOM = typeof HTMLElement !== 'undefined'

/**
 * NOTICE: SSR 環境では `extends HTMLElement` できない
 *
 * @see https://github.com/vuejs/core/blob/9c304bfe7942a20264235865b4bb5f6e53fdee0d/packages/runtime-dom/src/apiCustomElement.ts#L143-L145
 */
export const BaseElement = (
  !__SERVER__ && CAN_USE_DOM ? HTMLElement : class {}
) as typeof HTMLElement
