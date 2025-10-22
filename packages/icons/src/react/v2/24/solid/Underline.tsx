import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgUnderline = (
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
      d="M8.25 3.75a1.25 1.25 0 10-2.5 0v7.75a6.25 6.25 0 1012.5 0V3.75a1.25 1.25 0 00-2.5 0v7.75a3.75 3.75 0 01-7.5 0V3.75zM3.754 21.5h16.492a1.25 1.25 0 000-2.5H3.754a1.25 1.25 0 100 2.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconUnderlineSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgUnderline)
export default IconUnderlineSolid
