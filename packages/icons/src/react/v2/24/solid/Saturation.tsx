import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSaturation = (
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
      d="M16.529 6.71a3.356 3.356 0 10-6.375-2.102 3.356 3.356 0 006.375 2.102zM5.943 18.18a1.994 1.994 0 113.788 1.249 1.994 1.994 0 01-3.788-1.25zM12 22.253a1 1 0 100-2 1 1 0 000 2zM3.48 7.12a2.922 2.922 0 115.552 1.83A2.922 2.922 0 013.48 7.12zm1.988 5.013a2.331 2.331 0 10-1.46 4.429 2.331 2.331 0 001.46-4.429zm16.317 1.974a3.913 3.913 0 11-7.432-2.45 3.913 3.913 0 017.432 2.45z"
      fill="currentColor"
    />
  </svg>
)
export const IconSaturationSolid = forwardRef(SvgSaturation)
export default IconSaturationSolid
