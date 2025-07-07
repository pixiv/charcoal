import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgList = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3 6.543a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5-2.75a1.25 1.25 0 100 2.5h13.5a1.25 1.25 0 100-2.5H8zm0 6.957a1.25 1.25 0 100 2.5h13.5a1.25 1.25 0 100-2.5H8zm-1.25 8.206c0-.69.56-1.25 1.25-1.25h13.5a1.25 1.25 0 010 2.5H8c-.69 0-1.25-.56-1.25-1.25zM4.5 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3 20.456a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
      fill="currentColor"
    />
  </svg>
)
export const IconListSolid = forwardRef(SvgList)
export default IconListSolid
