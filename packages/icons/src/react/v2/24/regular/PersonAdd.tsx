import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPersonadd = (
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
      d="M10.058 5.898a2.212 2.212 0 10-3.129 3.129 2.212 2.212 0 003.129-3.129zm-4.19-1.06a3.712 3.712 0 115.25 5.25 3.712 3.712 0 01-5.25-5.25zM2.089 18.14a5.682 5.682 0 015.683-5.682h1.458a5.682 5.682 0 015.683 5.682 2.87 2.87 0 01-2.871 2.87H4.959a2.87 2.87 0 01-2.87-2.87zm5.683-4.182a4.182 4.182 0 00-4.183 4.182c0 .757.614 1.37 1.371 1.37h7.082a1.37 1.37 0 001.37-1.37 4.182 4.182 0 00-4.182-4.182H7.771zM18 5.75a.75.75 0 01.75.75v2.75h2.75a.75.75 0 010 1.5h-2.75v2.75a.75.75 0 01-1.5 0v-2.75H14.5a.75.75 0 010-1.5h2.75V6.5a.75.75 0 01.75-.75z"
      fill="currentColor"
    />
  </svg>
)
export const IconPersonAdd = forwardRef(SvgPersonadd)
export default IconPersonAdd
