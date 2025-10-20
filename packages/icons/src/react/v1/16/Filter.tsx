import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFilter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3.099 3.567A1 1 0 014 3h8a1 1 0 01.78 1.625L9 9.35V12a2 2 0 01-2 2V9.35L3.22 4.626a1 1 0 01-.121-1.058z"
      fill="currentColor"
    />
  </svg>
)
export const IconFilter16: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgFilter)
export default IconFilter16
