import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSave = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M17.75 20.965A3.75 3.75 0 0021 17.248V8.997a3.75 3.75 0 00-1.102-2.655l-2.25-2.245a3.75 3.75 0 00-2.649-1.095h-.249V6A2.75 2.75 0 0112 8.75H9.5A2.75 2.75 0 016.75 6V3.002A3.75 3.75 0 003 6.752v10.496a3.75 3.75 0 003.75 3.75V15.75A2.75 2.75 0 019.5 13H15a2.75 2.75 0 012.75 2.75v5.215zm-9.5.033h8V15.75c0-.69-.56-1.25-1.25-1.25H9.5c-.69 0-1.25.56-1.25 1.25v5.248zm0-17.996V6c0 .69.56 1.25 1.25 1.25H12c.69 0 1.25-.56 1.25-1.25V3.002h-5z"
      fill="currentColor"
    />
  </svg>
)
export const IconSaveSolid = forwardRef(SvgSave)
export default IconSaveSolid
