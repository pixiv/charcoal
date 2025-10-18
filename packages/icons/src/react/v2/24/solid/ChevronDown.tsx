import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgChevrondown = (
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
      d="M4.68 8.43a1.16 1.16 0 011.64 0L12 14.107l5.68-5.679a1.16 1.16 0 111.64 1.642l-6.5 6.5a1.16 1.16 0 01-1.64 0l-6.5-6.5a1.16 1.16 0 010-1.642z"
      fill="currentColor"
    />
  </svg>
)
export const IconChevronDownSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgChevrondown)
export default IconChevronDownSolid
