import type { AppProps } from 'next/app'
import styled, { css } from 'styled-components'
import { AppHeader } from '../components/AppHeader'
import { rightTopIconMargin } from '../components/css/rightTopIconMargin'
import { FlexDiv } from '../components/FlexDiv'
import { StyledNavList } from '../components/NavList'
import { ShowScreen1 } from '../components/utils/ShowScreen1'
import { HideScreen1 } from '../components/utils/HideScreen1'
import { ThemeToggleButton } from '../components/ThemeToggleButton'
import { LogoAndNameWithMargin } from '../components/LogoAndName'
import { theme } from '../utils/theme'
import { AppProvider } from '../components/AppProvider'
import { SideMenuDiv } from '../components/SideMenuDiv'
import Head from 'next/head'

import '../tailwind.css'

import '@charcoal-ui/react/dist/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Charcoal ドキュメント</title>
        <meta
          property="description"
          content="ピクシブ株式会社のデザインシステム charcoal のドキュメントサイト"
        />
        <meta property="og:url" content={''} />
        <meta property="og:title" content={'charcoal'} />
        <meta property="og:site_name" content={'Charcoal ドキュメント'} />
        <meta
          property="og:description"
          content={
            'ピクシブ株式会社のデザインシステム charcoal のドキュメントサイト'
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={'/charcoal-ogp.jpg'} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <AppProvider>
        <BackgroundDiv>
          <HideScreen1
            css={css`
              position: sticky;
              top: 0;
            `}
          >
            <AppHeader></AppHeader>
          </HideScreen1>

          <ContentLayoutDiv>
            <ShowScreen1
              css={css`
                position: sticky;
                top: 0;
                height: 100vh;
                ${theme((o) => o.border.default.right)}
              `}
            >
              <SideMenuDiv>
                <FlexDiv>
                  <LogoAndNameWithMargin />
                  <ThemeToggleButton css={rightTopIconMargin} />
                </FlexDiv>
                <StyledNavList />
              </SideMenuDiv>
            </ShowScreen1>
            <Component {...pageProps} />
          </ContentLayoutDiv>
        </BackgroundDiv>
      </AppProvider>
    </>
  )
}

const ContentLayoutDiv = styled.div`
  display: flex;
`

const BackgroundDiv = styled.div`
  ${theme((o) => o.bg.background1)};
`

export default MyApp
