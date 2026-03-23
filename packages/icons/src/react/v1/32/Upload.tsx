import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgUpload = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25 15c0 .085-.001.17-.004.255A4.502 4.502 0 0123.5 24h-14a5.5 5.5 0 01-.25-10.994A8 8 0 0125 15zm-9-.414l4.707 4.707a1 1 0 01-1.414 1.414L17 18.414V26a1 1 0 11-2 0v-7.586l-2.293 2.293a1 1 0 01-1.414-1.414L16 14.586z"
      fill="currentColor"
    />
  </svg>
)
export const IconUpload32: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgUpload)
export default IconUpload32
