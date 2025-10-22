import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArrowdown = (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.25 4.25a1.25 1.25 0 10-2.5 0v12.608L6.32 12.43a1.16 1.16 0 00-1.64 1.642l6.5 6.5a1.16 1.16 0 001.64 0l6.5-6.5a1.16 1.16 0 10-1.64-1.642l-4.43 4.43V4.25z"
      fill="currentColor"
    />
  </svg>
)
export const IconArrowDownSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgArrowdown)
export default IconArrowDownSolid
