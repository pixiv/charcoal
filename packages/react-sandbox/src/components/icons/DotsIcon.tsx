import styled from 'styled-components'

interface Props {
  size?: number | string
  subLink?: boolean
}

export { DotsIcon as default }

function DotsIcon({ size }: Props) {
  return (
    <StyledSVG viewBox="0 0 20 6" width={size} height={size}>
      <path
        fillRule="evenodd"
        d={`M5,14.5 C3.61928813,14.5 2.5,13.3807119 2.5,12 C2.5,10.6192881 3.61928813,9.5 5,9.5
          C6.38071187,9.5 7.5,10.6192881 7.5,12 C7.5,13.3807119 6.38071187,14.5 5,14.5 Z M12,14.5
          C10.6192881,14.5 9.5,13.3807119 9.5,12 C9.5,10.6192881 10.6192881,9.5 12,9.5
          C13.3807119,9.5 14.5,10.6192881 14.5,12 C14.5,13.3807119 13.3807119,14.5 12,14.5 Z M19,14.5
          C17.6192881,14.5 16.5,13.3807119 16.5,12 C16.5,10.6192881 17.6192881,9.5 19,9.5
          C20.3807119,9.5 21.5,10.6192881 21.5,12 C21.5,13.3807119 20.3807119,14.5 19,14.5 Z`}
        transform="translate(-2 -9)"
      />
    </StyledSVG>
  )
}
DotsIcon.defaultProps = {
  size: 16,
}

const StyledSVG = styled.svg`
  fill: currentColor;
`
