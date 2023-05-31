import styled from 'styled-components'
import { ContentRoot } from '../../../components/ContentRoot'
import { TagName } from '../../../components/InlineCode'
import { Table } from '../../../components/Table'

export default function ElementPage() {
  return (
    <ContentRoot>
      <h1>
        <TagNameInHead>pixiv-icon</TagNameInHead>
      </h1>
      <p>アイコン用のCustom Element</p>

      <h2>属性</h2>
      <Table data={apiData} />
    </ContentRoot>
  )
}

const TagNameInHead = styled(TagName)`
  font-size: inherit !important;
`

const apiData = {
  name: {
    description:
      'アイコンの名前です。{size}/{filename}という形式をしています。利用できる名前の一覧はリポジトリのpackages/icons/svg以下を見てください。',
    type: 'string',
  },
  scale: {
    description:
      'アイコンの拡大率を倍率で指定します。拡大は「24/〇〇」系のアイコンでのみサポートされます。',
    type: '1 | 2 | 3',
  },
  'unsafe-non-guideline-scale': {
    description: 'ガイドラインに従わない倍率を無理やり指定する場合に使います。',
    type: 'number',
  },
}
