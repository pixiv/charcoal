import type { NextPage } from 'next'
import { css } from 'styled-components'
import { ContentRoot } from '../components/ContentRoot'
import { StyledLink } from './@charcoal-ui/react/ssr.page'

const Home: NextPage = () => {
  return (
    <ContentRoot>
      <h1>Charcoal</h1>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <img
          css={css`
            width: 100%;
            max-width: 640px;
          `}
          src="/charcoal-ogp.jpg"
        ></img>
      </div>
      <h2>charcoalについて</h2>
      <p>
        charcoal は
        <StyledLink href="https://www.pixiv.co.jp/">
          ピクシブ株式会社
        </StyledLink>
        のデザインシステムです。ここでは特に、Web フロントエンドの実装に用いる
        npm パッケージ集のことを言います。
        オープンソースであり、ソースコードは全て
        <StyledLink href="https://www.apache.org/licenses/LICENSE-2.0">
          Apache License 2.0
        </StyledLink>
        のもと
        <StyledLink href="https://github.com/pixiv/charcoal">
          GitHubリポジトリ
        </StyledLink>
        として公開されています。
      </p>
      <h2>charcoal という名前</h2>
      <p>
        「charcoal（木炭）」とはデッサンの道具であり、線を引く、表現の基礎となる素材の一つです。また創作物を主役とするサービスの基盤として、それ自体は色を持たないモノクロの素材である、というニュアンスも含みます。
      </p>
      <h2>設計思想</h2>
      <p>
        charcoal はいわゆるコンポーネント実装も含みますが、それ以外にも UI
        の実装に必要なパッケージを多数収録しています。charcoal
        の設計思想は「定数」「ユーティリティ」「コンポーネント」の三層構造として説明されます。
      </p>
    </ContentRoot>
  )
}

export default Home
