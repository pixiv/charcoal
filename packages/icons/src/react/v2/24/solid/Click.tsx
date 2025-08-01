import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgClick = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M11.193 1.688a.75.75 0 01.75.75v2.158a.75.75 0 01-1.5 0V2.437a.75.75 0 01.75-.75zM4.53 3.47a.75.75 0 00-1.06 1.06l1.526 1.527a.75.75 0 001.06-1.06L4.53 3.47zM2.25 10.63a.75.75 0 000 1.5h2.159a.75.75 0 100-1.5H2.25zm4.49-1.668a1.917 1.917 0 012.306-2.307l10.6 2.502c1.626.384 2.018 2.518.634 3.454l-2.18 1.474 2.653 2.653a1.833 1.833 0 010 2.591l-1.34 1.34a1.833 1.833 0 01-2.591 0l-2.653-2.653-1.474 2.18c-.936 1.384-3.07.992-3.454-.633L6.74 8.963z"
      fill="currentColor"
    />
  </svg>
)
export const IconClickSolid = forwardRef(SvgClick)
export default IconClickSolid
