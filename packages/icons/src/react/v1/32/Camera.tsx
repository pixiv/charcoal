import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCamera = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.828 5a2 2 0 00-1.414.586L10 8H7a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2V10a2 2 0 00-2-2h-3l-2.414-2.414A2 2 0 0018.172 5h-4.344zM16 11a6 6 0 100 12 6 6 0 000-12zm0 2a4 4 0 100 8 4 4 0 000-8z"
      fill="currentColor"
    />
  </svg>
)
export const IconCamera32: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgCamera)
export default IconCamera32
