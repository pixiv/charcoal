import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgImgCover = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
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
      d="M5 5.5a.5.5 0 01.5-.5H15v7.327a.497.497 0 00-.26.17l-2.602 3.261-1.745-2.045a.5.5 0 00-.771.012L7.65 16.188a.5.5 0 00.39.812H15v2H5.5a.5.5 0 01-.5-.5v-13z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 2a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V5a3 3 0 00-3-3H5zM4 5a1 1 0 011-1h10a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"
      fill="currentColor"
    />
    <path
      opacity={0.32}
      d="M19 5h2a1 1 0 011 1v12a1 1 0 01-1 1h-2V5z"
      fill="currentColor"
    />
  </svg>
)
export const IconImgCover24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgImgCover)
export default IconImgCover24
