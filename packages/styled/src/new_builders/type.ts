import { css } from 'styled-components'

const _: unique symbol = Symbol('internal')

/**
 * 型を合わせるためだけに使うtheme(o=>)記法のcallbackの戻り値
 */
export type InternalResult = Omit<
  typeof _,
  'description' | 'toString' | 'valueOf'
>

export type CSS = ReturnType<typeof css>
