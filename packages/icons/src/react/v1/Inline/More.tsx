import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgMore = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width={8}
    height={10}
    viewBox="0 0 8 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M2.043 1.957A1 1 0 013.457.543L7.914 5 3.457 9.457a1 1 0 01-1.414-1.414L5.086 5 2.043 1.957z"
      fill="currentColor"
    />
  </svg>
)
export const IconMoreInline: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgMore)
export default IconMoreInline
