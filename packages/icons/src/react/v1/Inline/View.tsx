import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgView = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width={14}
    height={12}
    viewBox="0 0 14 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path d="M7 7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 1C3 1 0 6 0 6s3 5 7 5 7-5 7-5-3-5-7-5zm0 7.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
      fill="currentColor"
    />
  </svg>
)
export const IconViewInline: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgView)
export default IconViewInline
