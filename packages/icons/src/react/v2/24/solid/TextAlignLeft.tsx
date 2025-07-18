import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgTextAlignleft = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.504 4.753c0-.69.56-1.25 1.25-1.25h16.492a1.25 1.25 0 110 2.5H3.754c-.69 0-1.25-.56-1.25-1.25zm0 4.832c0-.69.56-1.25 1.25-1.25H12a1.25 1.25 0 010 2.5H3.754c-.69 0-1.25-.56-1.25-1.25zm0 4.83c0-.69.56-1.25 1.25-1.25h16.492a1.25 1.25 0 010 2.5H3.754c-.69 0-1.25-.56-1.25-1.25zm0 4.832c0-.69.56-1.25 1.25-1.25h7.714a1.25 1.25 0 110 2.5H3.754c-.69 0-1.25-.56-1.25-1.25z"
      fill="currentColor"
    />
  </svg>
)
export const IconTextAlignLeftSolid = forwardRef(SvgTextAlignleft)
export default IconTextAlignLeftSolid
