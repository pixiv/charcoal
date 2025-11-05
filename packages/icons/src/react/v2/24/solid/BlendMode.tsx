import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBlendMode = (
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
      d="M8.274 8.323a6.604 6.604 0 100 13.208 6.604 6.604 0 000-13.208zm7.451 0a6.604 6.604 0 100 13.208 6.604 6.604 0 000-13.208zM12 2.468a6.604 6.604 0 100 13.209 6.604 6.604 0 000-13.209z"
      fill="currentColor"
    />
  </svg>
)
export const IconBlendModeSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgBlendMode)
export default IconBlendModeSolid
