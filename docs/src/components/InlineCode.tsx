import styled from 'styled-components'
import { theme } from '../utils/theme'
import { Code } from './SSRHighlight'

export const InlineCode = styled(Code)`
  font-size: 14px;
  padding: 4px;
  border-radius: 4px;
  margin: 0 2px;
  ${theme((o) => o.bg.surface3)}
`
