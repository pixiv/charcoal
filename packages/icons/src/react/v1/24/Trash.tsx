import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgTrash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9 4h6v1h2.5a1 1 0 110 2h-11a1 1 0 010-2H9V4zM7.01 8a1 1 0 00-1 1.01l.105 10a1 1 0 001 .99H17a1 1 0 001-1V9a1 1 0 00-1-1H7.01z"
      fill="currentColor"
    />
  </svg>
)
export const IconTrash24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgTrash)
export default IconTrash24
