import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFilerestore = (
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
      d="M11.25 2v5.25A3.75 3.75 0 0015 11h5v1.994a5.586 5.586 0 00-1.994-.365c-.592 0-1.162.092-1.698.262a2 2 0 00-3.533 1.285v2.344c0 .431.137.83.368 1.157a2 2 0 00-.559 1.949c.231.898.68 1.71 1.286 2.374H7.75A3.75 3.75 0 014 18.25V5.75A3.75 3.75 0 017.75 2h3.5zm1.5.169V7.25A2.25 2.25 0 0015 9.5h4.883a3.75 3.75 0 00-.962-1.702l-4.612-4.68a3.75 3.75 0 00-1.559-.95zM14.776 13.5c.372 0 .675.302.675.675v.626a4.274 4.274 0 11-1.583 4.493.675.675 0 011.306-.336 2.925 2.925 0 005.756-.731 2.924 2.924 0 00-4.62-2.382h.797a.675.675 0 010 1.35h-2.331a.675.675 0 01-.675-.675v-2.345c0-.373.302-.675.675-.675z"
      fill="currentColor"
    />
  </svg>
)
export const IconFileRestoreSolid = forwardRef(SvgFilerestore)
export default IconFileRestoreSolid
