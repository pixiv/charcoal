import styled, { css } from 'styled-components'
import { theme } from '../../../../utils/theme'

const EX_TEXT =
  'あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。'

export const Preview = () => {
  return (
    <div css={css(theme((o) => o.font.text1))}>
      <p>default</p>
      <Ex>default</Ex>
      <Ex>
        これはフォントサイズと同じであり、上下の4pxがそれぞれ削除される形で表示されます。2行以上になる場合は通常通り文字の間はline-heightを考慮した値になります。
        {EX_TEXT}
      </Ex>
      <p>preserveHalfLeading</p>
      <Ex2>preserveHalfLeading</Ex2>
      <Ex2>
        preserveHalfLeadingを指定することでこのオプションはオプトアウトできます。
        {EX_TEXT}
      </Ex2>
    </div>
  )
}

/**
 * 実際に付与されるスタイル
 * ::before {
 *   display: block;
 *   width: 0;
 *   height: 0;
 *   content: '';
 *   margin-top: -4px;
 * }
 *
 * font-size: 32px;
 * line-height: 40px;
 * font-weight: bold;
 * display: flow-root;
 *
 * background-color: var(--charcoal-brand);
 *
 * ::after {
 *   display: block;
 *   width: 0;
 *   height: 0;
 *   content: '';
 *   margin-bottom: -4px;
 * }
 */
const Ex = styled.p`
  ${theme((o) => [o.typography(16), o.bg.success])}
`

const Ex2 = styled.p`
  ${theme((o) => [o.typography(16).preserveHalfLeading, o.bg.success])}
`
