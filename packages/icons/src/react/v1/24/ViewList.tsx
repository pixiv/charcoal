import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgViewList = (
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
      d="M6 5a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V6a1 1 0 00-1-1H6zM6 10a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1H6zM5 16a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1v-2zM11 5a1 1 0 00-1 1v2a1 1 0 001 1h7a1 1 0 001-1V6a1 1 0 00-1-1h-7zM10 11a1 1 0 011-1h7a1 1 0 011 1v2a1 1 0 01-1 1h-7a1 1 0 01-1-1v-2zM11 15a1 1 0 00-1 1v2a1 1 0 001 1h7a1 1 0 001-1v-2a1 1 0 00-1-1h-7z"
      fill="currentColor"
    />
  </svg>
)
export const IconViewList24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgViewList)
export default IconViewList24
