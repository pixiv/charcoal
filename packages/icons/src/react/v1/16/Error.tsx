import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgError = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9 3.5a1 1 0 00-2 0v5a1 1 0 002 0v-5zM8 13.5A1.25 1.25 0 108 11a1.25 1.25 0 000 2.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconError16: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgError)
export default IconError16
