import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgNotification = (
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
      d="M18 9.25V12l1.561 4.684A1 1 0 0118.613 18H5.387a1 1 0 01-.948-1.316L6 12V9.25C6 5.798 8.686 3 12 3s6 2.798 6 6.25zM12 21a3.001 3.001 0 01-2.83-2h5.66A3.001 3.001 0 0112 21z"
      fill="currentColor"
    />
  </svg>
)
export const IconNotification24 = forwardRef(SvgNotification)
export default IconNotification24
