import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCloudcheck = (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.629 19.056a.78.78 0 01-.054-.002h-.044A4.527 4.527 0 015.3 10.17a6.9 6.9 0 0112.678-1.758 5.419 5.419 0 013.956 4.414 6.5 6.5 0 00-10.35 6.23H6.63zM18 23a5 5 0 100-10 5 5 0 000 10zm2.604-6.7a.5.5 0 010 .707l-3.247 3.246a.5.5 0 01-.707 0l-1.303-1.303a.5.5 0 11.707-.707l.95.95 2.892-2.893a.5.5 0 01.708 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconCloudCheckSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgCloudcheck)
export default IconCloudCheckSolid
