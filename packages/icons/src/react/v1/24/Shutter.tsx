import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgShutter = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
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
      d="M15.277 9.145l-2.69-1.954-4.53-3.283A8.963 8.963 0 0112.034 3a8.957 8.957 0 014.779 1.394l-1.537 4.75zM18.477 5.75l-2.749 8.484 4.994-.006a9.001 9.001 0 00.26-2.793 8.969 8.969 0 00-2.505-5.684zM19.947 16.229l-8.92.007 1.549 4.746a8.95 8.95 0 003.802-1.117 9.041 9.041 0 003.569-3.636zM10.434 20.864l-2.763-8.48-4.037 2.94a9.032 9.032 0 003.644 4.34c.95.585 2.016 1 3.156 1.2zM3.086 13.25L10.297 8 6.255 5.072A8.981 8.981 0 003 12c0 .424.03.841.086 1.25z"
      fill="currentColor"
    />
  </svg>
)
export const IconShutter24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgShutter)
export default IconShutter24
