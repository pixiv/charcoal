import { css } from 'styled-components'
import { ContentRoot } from '../components/ContentRoot'
import { InlineCode } from '../components/InlineCode'
import { theme } from '../utils/theme'

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
      <p>
        toとComponentAbstractionを用いてaタグを利用する方法から、asによる指定に変更しました。これにより、Next.jsのLinkやstyeld-componentsでスタイルが適用されたリンクを柔軟に使用できるようになりました。
      </p>
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
