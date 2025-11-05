import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M11.25 2v5.25A3.75 3.75 0 0015 11h5v7.25A3.75 3.75 0 0116.25 22h-8.5A3.75 3.75 0 014 18.25V5.75A3.75 3.75 0 017.75 2h3.5zm1.5.169V7.25A2.25 2.25 0 0015 9.5h4.883a3.75 3.75 0 00-.962-1.702l-4.612-4.68a3.75 3.75 0 00-1.559-.95z"
      fill="currentColor"
    />
  </svg>
)
export const IconFileSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgFile)
export default IconFileSolid
