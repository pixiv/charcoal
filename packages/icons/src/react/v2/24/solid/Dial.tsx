import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDial = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5.504 12.994a6.5 6.5 0 112.457 5.09l4.162-4.162a.75.75 0 10-1.06-1.06l-4.161 4.16a6.472 6.472 0 01-1.398-4.028zM12.006 4.479a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm-7 2.897a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm15.25-1.246a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM6.251 20.125a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-4.147-5.75a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm21.05-1.244a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-2.903 6.998a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconDialSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgDial)
export default IconDialSolid
