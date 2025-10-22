import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgImageadd = (
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
      d="M6.75 3A3.75 3.75 0 003 6.75v8.44l.213-.213 3.261-3.433a2.75 2.75 0 014.029.044l2.29 2.52A6.49 6.49 0 0118 11.5c1.082 0 2.102.264 3 .732V6.75A3.75 3.75 0 0017.25 3H6.75zm2.643 9.597l2.616 2.878A6.48 6.48 0 0011.5 18c0 1.082.264 2.102.732 3H6.75A3.75 3.75 0 013 17.31l1.28-1.28.007-.007.007-.006 3.268-3.44a1.25 1.25 0 011.83.02zm3.045-3.568a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0zM18 23a5 5 0 100-10 5 5 0 000 10zm.5-2.25V18.5h2.25a.5.5 0 000-1H18.5v-2.25a.5.5 0 00-1 0v2.25h-2.25a.5.5 0 000 1h2.25v2.25a.5.5 0 001 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconImageAddSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgImageadd)
export default IconImageAddSolid
