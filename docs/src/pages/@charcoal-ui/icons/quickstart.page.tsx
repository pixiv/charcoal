import Link from 'next/link'
import { ContentRoot } from '../../../components/ContentRoot'

import { InlineCode } from '../../../components/InlineCode'
import { SSRHighlight } from '../../../components/SSRHighlight'

export default function InstallPage() {
  return (
    <ContentRoot>
      <h1>@charcoal-ui/icons クイックスタート</h1>
      <Link href="https://www.npmjs.com/package/@charcoal-ui/icons">
        <img
          alt="npm-badge"
          src="https://img.shields.io/npm/v/@charcoal-ui/icons?label=%40charcoal-ui%2Ficons&style=flat-square&logo=npm"
        />
      </Link>
      <h2>インストール</h2>
      <h3>npm</h3>
      <SSRHighlight code="npm install @charcoal-ui/icons" lang="shell" />
      <h3>yarn</h3>
      <SSRHighlight code="yarn add @charcoal-ui/icons" lang="shell" />
      <h2>使い方</h2>
      <p>
        <InlineCode>WIP</InlineCode>
      </p>
      <SSRHighlight
        code={`import 'pixiv-icon'`.trimStart()}
        lang="typescript"
      />
    </ContentRoot>
  )
}
