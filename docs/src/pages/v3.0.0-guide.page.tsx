import { css } from 'styled-components'
import { ContentRoot } from '../components/ContentRoot'
import { InlineCode } from '../components/InlineCode'
import { theme } from '../utils/theme'
import { StyledLink } from './@charcoal-ui/react/ssr.page'

export default function V2toV3GuidePage() {
  return (
    <ContentRoot>
      <h1>v3.0.0マイグレーションガイド</h1>
      <h2>@charcoal-ui/react</h2>
      <h3>変更点の概略</h3>
      <p>
        v3.0.0 では一部コンポーネントの props を見直し、命名の統一や不要な props
        の削除を行いました。
      </p>
      <p>
        依存するReactの最低バージョンを
        <StyledLink href="https://ja.legacy.reactjs.org/blog/2020/10/20/react-v17.html">
          React v17.0
        </StyledLink>
        に更新しました。
      </p>
      <p>DropdownSelector のパフォーマンスの改善を行いました。</p>
      <h3
        css={css`
          ${theme((o) => o.font.warning)}
        `}
      >
        破壊的な変更点
      </h3>
      <h4>Button</h4>
      <p>幅を最大化するオプション fixed を fullWidth に変更しました。</p>
      <h4>Radio</h4>
      <p>forceCheckedを削除しました。</p>
      <h4>RadioGroup</h4>
      <p>hasErrorをinvalidに変更しました。</p>
      <h4>MultiSelectGroup</h4>
      <p>hasErrorをinvalidに変更しました。</p>
      <h4>MultiSelect</h4>
      <p>forceCheckedを削除しました。</p>
      <h4>DropdownSelector</h4>
      <p>
        子要素の使用方法を変更しました。子要素は DropdownSelectorOption から
        DropdownMenuItem に変更しました。
      </p>
      <p>assertiveText から assistiveText へ変更しました。</p>
      <p>onChange の引数を Key 型から string に変更しました。</p>
      <p>CollectionBase 型のユニオンを削除しました。</p>
      <ul>
        <li>autoComplete の削除</li>
        <li>id の削除</li>
        <li>name の削除</li>
        <li>defaultValue の削除</li>
        <li>open の削除</li>
        <li>onOpenChange の削除</li>
        <li>mode の削除</li>
      </ul>
    </ContentRoot>
  )
}
