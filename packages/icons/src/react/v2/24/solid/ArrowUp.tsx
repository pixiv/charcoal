import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArrowup = (
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
      d="M17.68 11.57a1.16 1.16 0 001.64-1.64l-6.5-6.5a1.16 1.16 0 00-1.64 0l-6.5 6.5a1.16 1.16 0 001.64 1.64l4.43-4.428V19.75a1.25 1.25 0 002.5 0V7.141l4.43 4.43z"
      fill="currentColor"
    />
  </svg>
)
export const IconArrowUpSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgArrowup)
export default IconArrowUpSolid
