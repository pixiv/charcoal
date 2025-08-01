import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFolderopen = (
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
      d="M4.765 20a2.75 2.75 0 01-2.75-2.75V6.756a2.75 2.75 0 012.75-2.75h3.958c.523 0 1.02.234 1.351.638l1.244 1.513a.25.25 0 00.193.09h5.769a2.75 2.75 0 012.75 2.75v.385a2.25 2.25 0 012.086 2.883l-1.695 5.761A2.75 2.75 0 0117.783 20H4.765zM18.53 9.38v-.382c0-.69-.56-1.25-1.25-1.25H11.51a1.75 1.75 0 01-1.352-.639L8.916 5.597a.25.25 0 00-.193-.091H4.765c-.69 0-1.25.56-1.25 1.25v7.286l.896-3.046A2.25 2.25 0 016.57 9.38h11.96zM5.438 18.5H17.783a1.25 1.25 0 001.2-.897l1.694-5.761a.75.75 0 00-.72-.962H6.57a.75.75 0 00-.72.539L4.24 16.897A1.25 1.25 0 005.438 18.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconFolderOpen = forwardRef(SvgFolderopen)
export default IconFolderOpen
