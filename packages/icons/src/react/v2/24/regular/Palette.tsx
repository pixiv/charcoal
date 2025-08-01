import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPalette = (
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
      d="M12.214 3.502a8.502 8.502 0 00-.437 16.998.895.895 0 00.791-.504.893.893 0 00-.1-.936 2.414 2.414 0 01.818-3.703c.7-.338 1.468-.307 2.047-.276l.161.009H15.503c.563.031.977.055 1.348-.047a4.954 4.954 0 003.188-2.69c.304-.653.461-1.365.461-2.086 0-.481-.081-.976-.238-1.47-.35-1.106-1.078-2.204-2.114-3.121a8.702 8.702 0 00-5.903-2.173h-.031zm.022-1.5a10 10 0 00-10.233 9.75A10.001 10.001 0 0011.751 22H11.773a2.39 2.39 0 001.87-3.874l-.005-.007-.005-.005a.915.915 0 01.307-1.407c.307-.148.704-.161 1.313-.128l.178.01c.52.032 1.19.072 1.815-.098A6.449 6.449 0 0022 10.267c0-2.085-1.119-4.175-2.858-5.714a10.207 10.207 0 00-6.906-2.55zm5.231 8.305a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM14.581 6.36a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM8.577 8.787a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM7.53 11.926a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconPalette = forwardRef(SvgPalette)
export default IconPalette
