import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAlbum = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10 4.25h6c.157 0 .312.01.465.028A2.75 2.75 0 0014 2.75h-4a2.75 2.75 0 00-2.464 1.528c.152-.018.307-.028.464-.028h2zm-2 2.5h9c.55 0 1.077.093 1.568.265A2.75 2.75 0 0016 5.25H8a2.751 2.751 0 00-2.568 1.765A4.743 4.743 0 017 6.75h1zm-1.75 1a3 3 0 00-3 3v6.547l3.627-2.887a2.75 2.75 0 013.437.01l3.134 2.522a.25.25 0 00.302.009l1.732-1.23a2.75 2.75 0 013.155-.02l2.113 1.46V10.75a3 3 0 00-3-3H6.25zm14.428 11.155a.75.75 0 01-.17-.088l-2.724-1.882a1.25 1.25 0 00-1.434.01l-1.732 1.229a1.75 1.75 0 01-2.11-.064l-3.135-2.522a1.25 1.25 0 00-1.562-.004l-4.32 3.44a.752.752 0 01-.119.076 3.001 3.001 0 002.878 2.15h11.5a3.001 3.001 0 002.928-2.345zM7.646 11.767a1 1 0 11-2 0 1 1 0 012 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconAlbumSolid = forwardRef(SvgAlbum)
export default IconAlbumSolid
