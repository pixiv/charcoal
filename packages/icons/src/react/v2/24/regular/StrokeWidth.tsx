import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgStrokeWidth = (
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
      d="M5.75 4.75A.75.75 0 016.5 4h11a.75.75 0 010 1.5h-11a.75.75 0 01-.75-.75zM3.75 10.5c0-.69.56-1.25 1.25-1.25h14a1.25 1.25 0 110 2.5H5c-.69 0-1.25-.56-1.25-1.25zM4.5 15.5a2.25 2.25 0 000 4.5h15a2.25 2.25 0 000-4.5h-15z"
      fill="currentColor"
    />
  </svg>
)
export const IconStrokeWidth: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgStrokeWidth)
export default IconStrokeWidth
