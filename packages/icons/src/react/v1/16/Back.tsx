import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBack = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9.961 11.043a1 1 0 01-1.414 1.414L4.09 8l4.457-4.457a1 1 0 011.414 1.414L6.918 8l3.043 3.043z"
      fill="currentColor"
    />
  </svg>
)
export const IconBack16: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgBack)
export default IconBack16
