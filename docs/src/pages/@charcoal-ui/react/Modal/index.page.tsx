import { useState } from 'react'
import {
  Button,
  Modal,
  ModalAlign,
  ModalBody,
  ModalHeader,
  ModalProps,
} from '@charcoal-ui/react'
import { sections } from './sections'
import { apiData } from './apiData'
import { InlineCode } from '../../../../components/InlineCode'
import { SSRHighlight } from '../../../../components/SSRHighlight'
import { PreviewDivColumn, PreviewMeta } from '../_components/Previews'
import { NextPage } from 'next'
import { ExampleModal } from './ExampleModal'
import { getSrcFile } from '../_utils/getSrcFile'
import { ContentRoot } from '../../../../components/ContentRoot'
import { ApiTable } from '../_components/ApiTable'
import { PreviewsList } from '../_components/PreviewsList'

function Preview(meta: PreviewMeta<ModalProps>, i: number, j: number) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div key={i}>
      <Button onClick={() => setIsOpen(true)}>
        {meta.additionalData?.openText ?? 'open'}
      </Button>
      <Modal
        {...meta.props}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        portalContainer={
          typeof document !== 'undefined' ? document.body : undefined
        }
      >
        {meta.children && typeof meta.children === 'function' ? (
          meta.children()
        ) : (
          <ModalBody>
            <ModalHeader />
            <ModalAlign style={{ textAlign: 'center' }}>
              <Button onClick={() => setIsOpen(false)}>close</Button>
            </ModalAlign>
          </ModalBody>
        )}
      </Modal>
    </div>
  )
}

const ModalPage: NextPage<{ src: string }> = (props) => {
  return (
    <ContentRoot>
      <h1>Modal</h1>

      <p>ユーザの選択を待つ子ウィンドウコンポーネント</p>
      <p>
        <InlineCode>OverlayProvider</InlineCode>の子孫で使用してください。
        <InlineCode>OverlayProvider</InlineCode>
        はアプリケーション内で複数必要ありません。
        <InlineCode>ModalBody</InlineCode>,<InlineCode>ModalHeader</InlineCode>,
        <InlineCode>ModalAlign</InlineCode>を必要に応じて利用できます。
      </p>

      <h2>BASIC</h2>
      <PreviewDivColumn>
        <ExampleModal />
        <SSRHighlight code={props.src} lang="typescript" />
      </PreviewDivColumn>

      <PreviewsList sections={sections} renderer={Preview} />

      <h2>Props</h2>
      <ApiTable data={apiData} />
    </ContentRoot>
  )
}

export async function getStaticProps() {
  return { props: { src: getSrcFile('Modal/ExampleModal.tsx') } }
}

export default ModalPage
