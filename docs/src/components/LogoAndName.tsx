import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../utils/theme'

export const LogoAndName: FC<{ className?: string }> = (props) => {
  return (
    <>
      <Link
        href="/"
        className={props.className}
        css={css`
          display: flex;
          text-decoration: none;
          padding: 0;
        `}
      >
        <Image
          css={css`
            margin-right: 8px;
            background: white;
            padding: 4px;
            border-radius: 8px;
          `}
          alt="logo"
          width={40}
          height={40}
          src="/charcoal-icon.png"
        />
        <CharcoalTitle>Charcoal</CharcoalTitle>
      </Link>
    </>
  )
}

export const LogoAndNameWithMargin = styled(LogoAndName)`
  margin: 12px 16px;
`

const CharcoalTitle = styled.div`
  ${theme((o) => o.font.text1)}
  display: flex;
  align-items: center;
  font-weight: bold;
  line-height: 20px;
  font-size: 20px;
`
