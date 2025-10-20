import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBodyadd = (
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
      d="M18.227 2.382a.75.75 0 01.75.75v2.91h2.91a.75.75 0 010 1.5h-2.91v2.91a.75.75 0 01-1.5 0v-2.91h-2.91a.75.75 0 010-1.5h2.91v-2.91a.75.75 0 01.75-.75zM7.059 6.51a1.405 1.405 0 112.81 0 1.405 1.405 0 01-2.81 0zm1.405-2.905a2.905 2.905 0 100 5.81 2.905 2.905 0 000-5.81zM2.455 10.07a.75.75 0 100 1.5h3.103v4.936L3.491 20.38a.75.75 0 101.324.706l2.087-3.913h3.123l2.087 3.913a.75.75 0 001.324-.706l-2.067-3.875v-4.936h3.103a.75.75 0 000-1.5H2.455zm4.603 5.603V11.57h2.81v4.103h-2.81z"
      fill="currentColor"
    />
  </svg>
)
export const IconBodyAdd: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgBodyadd)
export default IconBodyAdd
