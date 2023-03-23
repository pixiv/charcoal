import hljs from 'highlight.js'
import { FC } from 'react'

import 'highlight.js/styles/github-dark.css'
import styled from 'styled-components'
import typescript from 'highlight.js/lib/languages/typescript'
import { theme } from '../utils/theme'

hljs.registerLanguage('typescript', typescript)

export const Code = styled.code`
  overflow-x: auto;
  font-size: 12px;
  ${theme((o) => o.borderRadius(8))}
  font-family: 'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono',
    Menlo, Consolas, monospace;
`

export const SSRHighlight: FC<{ code: string; lang?: string }> = (props) => {
  const codeHtml = hljs.highlight(props.code, {
    language: props.lang ?? 'typescript',
  }).value
  return (
    <pre>
      <Code
        className="hljs"
        dangerouslySetInnerHTML={{ __html: codeHtml }}
      ></Code>
    </pre>
  )
}
