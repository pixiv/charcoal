import * as React from 'react'
import styled from 'styled-components'

export type IconSizes = 16 | 24 | 32

interface Props {
  path: string | React.ReactNode
  viewBoxSize: number
  size?: IconSizes | 40 | 48 | 64 | 72
  transform?: string
  currentColor?: boolean
  fillRule?: 'nonzero' | 'evenodd'
  clipRule?: 'nonzero' | 'evenodd' | 'inherit'
}

export default function IconBase({
  size = 24,
  viewBoxSize,
  currentColor,
  path,
  transform,
  fillRule,
  clipRule,
}: Props) {
  return (
    <Icon
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      size={size}
      currentColor={currentColor}
    >
      <IconBasePath
        path={path}
        transform={transform}
        fillRule={fillRule}
        clipRule={clipRule}
      />
    </Icon>
  )
}

const Icon = styled.svg<{ size: number; currentColor?: boolean }>`
  stroke: none;
  fill: ${({ currentColor = false, theme }) =>
    currentColor ? 'currentColor' : theme.color.text2};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  line-height: 0;
  font-size: 0;
  vertical-align: middle;
`

type IconBasePathProps = Pick<
  Props,
  'path' | 'transform' | 'fillRule' | 'clipRule'
>
export const IconBasePath = ({
  path,
  transform,
  fillRule,
  clipRule,
}: IconBasePathProps) => {
  if (typeof path === 'string') {
    return (
      <path
        d={path}
        transform={transform}
        fillRule={fillRule}
        clipRule={clipRule}
      />
    )
  } else {
    return <>{path}</>
  }
}
