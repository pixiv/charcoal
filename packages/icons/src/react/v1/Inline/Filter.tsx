import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFilter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width={10}
    height={12}
    viewBox="0 0 10 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M.099 1.567A1 1 0 011 1h8a1 1 0 01.78 1.625L6 7.35V10a2 2 0 01-2 2V7.35L.22 2.626a1 1 0 01-.121-1.058z"
      fill="currentColor"
    />
  </svg>
)
export const IconFilterInline: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgFilter)
export default IconFilterInline
