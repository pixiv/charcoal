import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDevicerotate = (
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
      d="M15.252 2.82l-1.88 1.82a.5.5 0 000 .72l1.88 1.82a.5.5 0 00.848-.36V5.752a2.25 2.25 0 012.15 2.246V8h-1.07a.5.5 0 00-.36.848l1.82 1.88a.5.5 0 00.72 0l1.82-1.88A.5.5 0 0020.82 8h-1.07v-.003a3.75 3.75 0 00-3.65-3.746V3.18a.5.5 0 00-.848-.36zM4.5 5.75c0-.69.56-1.25 1.25-1.25h3.504c.69 0 1.25.56 1.25 1.25v7.5c0 .69-.56 1.25-1.25 1.25H5.75c-.69 0-1.25-.56-1.25-1.25v-7.5zM5.75 3A2.75 2.75 0 003 5.75v7.5A2.75 2.75 0 005.75 16h3.504a2.75 2.75 0 002.75-2.75v-7.5A2.75 2.75 0 009.255 3H5.75zM8 18.25v-.75h1.254c.083 0 .165-.002.246-.007v.757c0 .69.56 1.25 1.25 1.25h7.5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-4.753c.005-.083.008-.166.008-.25V12h4.745A2.75 2.75 0 0121 14.75v3.5A2.75 2.75 0 0118.25 21h-7.5A2.75 2.75 0 018 18.25zm-1.5-6a1 1 0 011-1h.001a1 1 0 110 2H7.5a1 1 0 01-1-1z"
      fill="currentColor"
    />
  </svg>
)
export const IconDeviceRotate = forwardRef(SvgDevicerotate)
export default IconDeviceRotate
