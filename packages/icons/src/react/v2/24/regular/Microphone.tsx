import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgMicrophone = (
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
      d="M7 6.538a5 5 0 0110 0v4.5a5 5 0 01-10 0v-4.5zm5-3.5a3.5 3.5 0 00-3.5 3.5v4.5a3.5 3.5 0 007 0v-4.5a3.5 3.5 0 00-3.5-3.5zm-.75 15.965a8.006 8.006 0 01-6.954-5.8.75.75 0 111.445-.406 6.503 6.503 0 0012.518 0 .75.75 0 011.445.405 8.006 8.006 0 01-6.954 5.801v2.247H15a.75.75 0 110 1.5H9a.75.75 0 010-1.5h2.25v-2.247z"
      fill="currentColor"
    />
  </svg>
)
export const IconMicrophone: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgMicrophone)
export default IconMicrophone
