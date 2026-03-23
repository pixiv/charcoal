import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgExpand = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M14.121 12l2.44-2.44 1.585 1.586a.5.5 0 00.854-.353V5h-5.793a.5.5 0 00-.353.854l1.585 1.585L12 9.88 14.121 12zM9.879 12l-2.44 2.44-1.585-1.586a.5.5 0 00-.854.353V19h5.793a.5.5 0 00.353-.854l-1.585-1.585L12 14.12 9.879 12z"
      fill="currentColor"
    />
  </svg>
)
export const IconExpand24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgExpand)
export default IconExpand24
