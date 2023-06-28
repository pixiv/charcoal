import Link from 'next/link'
import { ContentRoot } from '../../../components/ContentRoot'

import { InlineCode } from '../../../components/InlineCode'
import { SSRHighlight } from '../../../components/SSRHighlight'

export default function InstallPage() {
  return (
    <ContentRoot>
      <h1>@charcoal-ui/foundation クイックスタート</h1>
      <Link href="https://www.npmjs.com/package/@charcoal-ui/foundation">
        <img
          alt="npm-badge"
          src="https://img.shields.io/npm/v/@charcoal-uifoundation/?label=%40charcoal-ui%2Ffoundation&style=flat-square&logo=npm"
        />
      </Link>
      <h2>インストール</h2>
      <h3>npm</h3>
      <SSRHighlight code="npm install @charcoal-ui/foundation" lang="shell" />
      <h3>yarn</h3>
      <SSRHighlight code="yarn add @charcoal-ui/foundation" lang="shell" />

      <hr />

      <section>
        <h2>概要</h2>
        <p>
          <InlineCode>@charcoal-ui</InlineCode>
          で利用されるプリミティブな型定義や値を提供します。
        </p>
      </section>

      <section>{/*  */}</section>
    </ContentRoot>
  )
}
