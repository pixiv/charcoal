import { IconButton } from '@charcoal-ui/react'
import { FC, useEffect } from 'react'
import styled from 'styled-components'
import { useOverlayTriggerState } from 'react-stately'
import { SideMenuModal } from './SideMenuModal'
import { SideMenuDialog } from './SideMenuDialog'
import { StyledNavList } from './NavList'
import { ThemeToggleButton } from './ThemeToggleButton'
import { LogoAndNameWithMargin } from './LogoAndName'
import { FlexDiv } from './FlexDiv'
import { rightTopIconMargin } from './css/rightTopIconMargin'
import { theme } from '../utils/theme'
import { useRouter } from 'next/router'

export const AppHeader: FC = () => {
  const state = useOverlayTriggerState({})
  const router = useRouter()
  useEffect(() => {
    state.close()
  }, [router.pathname, state])
  return (
    <HeaderRoot>
      <HeaderMenuIcon onClick={state.open} icon="24/Menu"></HeaderMenuIcon>
      <SideMenuModal state={state}>
        <SideMenuDialog>
          <FlexDiv>
            <LogoAndNameWithMargin />
            <IconButton
              css={rightTopIconMargin}
              onClick={state.close}
              icon="24/Close"
            />
          </FlexDiv>
          <StyledNavList />
        </SideMenuDialog>
      </SideMenuModal>
      <ThemeToggleButton css={rightTopIconMargin} />
    </HeaderRoot>
  )
}

const HeaderRoot = styled.div`
  height: 64px;
  display: flex;
  ${theme((o) => [o.bg.background1, o.border.default.bottom])};
`

const HeaderMenuIcon = styled(IconButton)`
  margin: auto auto auto 16px;
`
