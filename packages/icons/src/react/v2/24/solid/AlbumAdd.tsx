import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAlbumadd = (
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
      d="M10 4.25h6c.157 0 .312.01.465.028A2.75 2.75 0 0014 2.75h-4a2.75 2.75 0 00-2.464 1.528c.152-.018.307-.028.464-.028h2zm-2 2.5h9c.55 0 1.077.093 1.568.265A2.75 2.75 0 0016 5.25H8a2.751 2.751 0 00-2.568 1.765A4.743 4.743 0 017 6.75h1zm-1.75 1a3 3 0 00-3 3v6.547l3.627-2.887a2.75 2.75 0 013.437.01l1.602 1.288a6.503 6.503 0 018.834-3.6V10.75a3 3 0 00-3-3H6.25zm3.123 7.838l2.161 1.739a6.47 6.47 0 00.835 3.923H6.25a3.001 3.001 0 01-2.878-2.15.752.752 0 00.118-.077l4.321-3.44a1.25 1.25 0 011.562.005zm-1.727-3.822a1 1 0 11-2 0 1 1 0 012 0zM18 23a5 5 0 100-10 5 5 0 000 10zm.5-2.25V18.5h2.25a.5.5 0 000-1H18.5v-2.25a.5.5 0 00-1 0v2.25h-2.25a.5.5 0 000 1h2.25v2.25a.5.5 0 001 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconAlbumAddSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgAlbumadd)
export default IconAlbumAddSolid
