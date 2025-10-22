import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArrowright = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
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
      d="M12.366 17.616a1.25 1.25 0 001.768 1.768l6.5-6.5a1.25 1.25 0 000-1.768l-6.5-6.5a1.25 1.25 0 00-1.768 1.768l4.366 4.366H4.5a1.25 1.25 0 100 2.5h12.232l-4.366 4.366z"
      fill="currentColor"
    />
  </svg>
)
export const IconArrowRightSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgArrowright)
export default IconArrowRightSolid
