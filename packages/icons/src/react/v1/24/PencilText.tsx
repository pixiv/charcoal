import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPencilText = (
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
      d="M3 4a1 1 0 011-1h11a1 1 0 110 2H4a1 1 0 01-1-1zM3 8a1 1 0 011-1h7a1 1 0 110 2H4a1 1 0 01-1-1zM4 11a1 1 0 100 2h3a1 1 0 100-2H4zM5.916 21.162l.816-3.872 7.635-7.247 4.47 4.242-7.636 7.248-4.078.774c-.718.137-1.35-.464-1.207-1.145zM20.327 12.871l1.529-1.452a1.878 1.878 0 000-2.753l-1.569-1.49a2.13 2.13 0 00-2.9 0l-1.53 1.452 4.47 4.243z"
      fill="currentColor"
    />
  </svg>
)
export const IconPencilText24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgPencilText)
export default IconPencilText24
