import { ContentRoot } from '../../../components/ContentRoot'
import { InlineCode, TagName } from '../../../components/InlineCode'
import { SSRHighlight } from '../../../components/SSRHighlight'
import { dedent } from '../../../utils/string'

export default function SsrPage() {
  return (
    <ContentRoot>
      <h1>SSR時のレイアウトシフトを防ぐ</h1>
      <p>
        「
        <strong>
          <TagName>pixiv-icon</TagName>はCustom
          Elementですが、サーバーサイドレンダリングをサポートしますか？
        </strong>
        」
      </p>
      <p>
        という疑問を受けることがあります。
        <br />
        これはSSRの際、結果となるHTMLに
        <TagName>pixiv-icon</TagName>
        要素を含んでも特に問題が起きないという点では
        <strong>YES</strong>
        です。
        <br />
        <InlineCode>@charcoal-ui/icons</InlineCode>
        は、Node.jsの環境下でimportされたり、APIを呼び出されても問題が起きないように設計されています。
      </p>
      <p>
        一方、Custom Elementであるということは、
        <strong>SVGアイコンの読み込みはクライアントサイドで行われます。</strong>
        <br />
        したがって、大きさが確定せずにレイアウトシフトが起こりうるのは、SSRにおける注意点の一つと言えます。
      </p>
      <hr />
      <p>
        以下のようなコードをリセットCSSに含めることで、
        <TagName>pixiv-icon</TagName>
        によるレイアウトシフトの発生を防ぐことができます。
        <br />
        （簡単のため、ネスト記法が利用できるケースを念頭に説明をしています）
      </p>
      <SSRHighlight
        code={dedent`
          pixiv-icon {
            display: inline-flex;
            width: calc(var(--icon-size, 1em) * var(--scale, 1));
            height: calc(var(--icon-size, 1em) * var(--scale, 1));

            &[name^='16/'] {
              --icon-size: 16px;
            }

            &[name^='24/'] {
              --icon-size: 24px;
            }

            &[name^='32/'] {
              --icon-size: 32px;
            }

            &[scale='2'] {
              --scale: 2;
            }

            &[scale='3'] {
              --scale: 3;
            }

            /** NOTICE: 現状だと attr(... number) はほとんどのブラウザで動かない */
            &[unsafe-non-guideline-scale] {
              --scale: attr(unsafe-non-guideline-scale number);
            }
          }
        `}
        lang="css"
      />
      <p>
        ただしコメントにもある通り、
        <strong>
          現状
          <InlineCode>unsafe-non-guideline-scale</InlineCode>
          をつけた要素は、リセットCSSだけではレイアウトシフトが防げません。
        </strong>
        <br />
        CSSの<InlineCode>attr()</InlineCode>
        が数値の解釈をサポートするまでは、個別にインラインスタイルを用いて大きさを確定させるなどのワークアラウンドが必要です。
      </p>
      <SSRHighlight
        code={dedent`
          <pixiv-icon name="24/Add" unsafe-non-guideline-scale="0.5" style="--scale: 0.5;">

          <pixiv-icon name="24/Add" unsafe-non-guideline-scale="0.5" style="width: 12px; height: 12px;">
        `}
        lang="html"
      />
    </ContentRoot>
  )
}
