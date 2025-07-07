import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgChevrondown = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.196 5.196a1.136 1.136 0 011.608 0L8 9.393l4.197-4.197a1.136 1.136 0 111.607 1.608l-5 5a1.136 1.136 0 01-1.608 0l-5-5a1.136 1.136 0 010-1.608z"
      fill="currentColor"
    />
  </svg>
)
export const IconChevronDownSolid16 = forwardRef(SvgChevrondown)
export default IconChevronDownSolid16
