import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFrame = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M6.45 4A4.45 4.45 0 002 8.45v7.1A4.45 4.45 0 006.45 20h11.1A4.45 4.45 0 0022 15.55v-7.1A4.45 4.45 0 0017.55 4H6.45zM5.5 8.75A1.5 1.5 0 017 7.25h10a1.5 1.5 0 011.5 1.5v6.5a1.5 1.5 0 01-1.5 1.5H7a1.5 1.5 0 01-1.5-1.5v-6.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconFrameSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgFrame)
export default IconFrameSolid
