import styled, {DefaultTheme} from 'styled-components'
import { createTheme, createTheme_experimental } from '@charcoal-ui/styled'
import { CharcoalAbstractTheme } from '../../theme/src/abstract-theme'

export let theme = createTheme(styled) 

export function enableExperimental(injectTheme: CharcoalAbstractTheme) {
    theme = createTheme_experimental(injectTheme) as unknown as ReturnType<typeof createTheme<DefaultTheme>>
}


