import styled from 'styled-components'
import type { DefaultTheme } from 'styled-components'
import { createTheme } from '@charcoal-ui/styled'

export const theme: ReturnType<typeof createTheme<DefaultTheme>> =
  createTheme(styled)
