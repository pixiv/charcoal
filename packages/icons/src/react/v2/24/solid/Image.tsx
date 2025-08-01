import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgImage = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M6.75 3A3.75 3.75 0 003 6.75v8.44l.213-.213 3.261-3.433a2.75 2.75 0 014.029.044l2.901 3.192c.091.1.245.11.347.022l1.882-1.6a2.75 2.75 0 013.692.119L21 14.941V6.75A3.75 3.75 0 0017.25 3H6.75zM21 17l-.03.03-.996-.995-1.692-1.636a1.25 1.25 0 00-1.678-.053l-1.881 1.599a1.75 1.75 0 01-2.429-.156l-2.901-3.192a1.25 1.25 0 00-1.831-.02l-3.268 3.44-.007.006-.007.007L3 17.31A3.75 3.75 0 006.75 21h10.5A3.75 3.75 0 0021 17.25V17zm-8.562-7.97a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconImageSolid = forwardRef(SvgImage)
export default IconImageSolid
