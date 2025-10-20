import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgImageHidden = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      d="M21.106 28.447l-12-24 1.788-.894 12 24-1.788.894z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.758 25.75h4.229A3.01 3.01 0 0027 22.743V9.257a3.01 3.01 0 00-3.014-3.007H10.008l5.428 10.855 4.252 2.52L25 16.719v6.024a1.01 1.01 0 01-1.014 1.007h-5.228l1 2zm2.992-13a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
      fill="currentColor"
    />
    <path
      d="M12.556 15.817L7 18.617v4.126c0 .553.45 1.007 1.013 1.007h8.509l1 2H8.013A3.01 3.01 0 015 22.743V9.257A3.01 3.01 0 017.777 6.26l4.779 9.558z"
      fill="currentColor"
    />
  </svg>
)
export const IconImageHidden32: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgImageHidden)
export default IconImageHidden32
