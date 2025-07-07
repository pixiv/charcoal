import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDevice = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8 2.002a2.75 2.75 0 00-2.75 2.75V19.25A2.75 2.75 0 008 21.998h8a2.75 2.75 0 002.75-2.75V4.752A2.75 2.75 0 0016 2.002H8zm-1.25 2.75c0-.69.56-1.25 1.25-1.25h8c.69 0 1.25.56 1.25 1.25V19.25c0 .69-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25V4.752zm5.256 14.037a1 1 0 000-2h-.017a1 1 0 100 2h.017z"
      fill="currentColor"
    />
  </svg>
)
export const IconDevice = forwardRef(SvgDevice)
export default IconDevice
