import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgReloadLoop = (
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
      d="M12 6a6 6 0 106 6 1 1 0 012 0 8 8 0 11-8-8h1.42l-1.7-2.125a1 1 0 111.56-1.25l3 3.75a1 1 0 010 1.25l-3 3.75a1 1 0 01-1.56-1.25L13.42 6H12z"
      fill="currentColor"
    />
  </svg>
)
export const IconReloadLoop24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgReloadLoop)
export default IconReloadLoop24
