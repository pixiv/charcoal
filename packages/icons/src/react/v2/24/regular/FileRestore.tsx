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
      d="M5.5 5.75A2.25 2.25 0 017.75 3.5h3.5v3.75A3.75 3.75 0 0015 11h3.5v1.65a5.57 5.57 0 011.5.344V10.43a3.75 3.75 0 00-1.079-2.632l-4.612-4.68A3.75 3.75 0 0011.64 2H7.75A3.75 3.75 0 004 5.75v12.5A3.75 3.75 0 007.75 22h6.12a5.612 5.612 0 01-.981-1.5H7.75a2.25 2.25 0 01-2.25-2.25V5.75zM18.299 9.5a2.25 2.25 0 00-.446-.65L13.24 4.17a2.25 2.25 0 00-.49-.376V7.25A2.25 2.25 0 0015 9.5h3.298zm-3.523 4.001c.372 0 .675.302.675.675v.626a4.274 4.274 0 11-1.583 4.493.675.675 0 011.306-.336 2.925 2.925 0 005.756-.731 2.924 2.924 0 00-4.62-2.382h.797a.675.675 0 010 1.35h-2.331a.675.675 0 01-.675-.675v-2.345c0-.373.302-.675.675-.675z"
      fill="currentColor"
    />
  </svg>
)
export const IconFileRestore = forwardRef(SvgFilerestore)
export default IconFileRestore
