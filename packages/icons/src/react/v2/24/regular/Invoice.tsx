import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgInvoice = (
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
      d="M5.5 4.75c0-.69.56-1.25 1.25-1.25h10.5c.69 0 1.25.56 1.25 1.25v14.976c0 .034-.009.048-.014.055a.104.104 0 01-.047.033.105.105 0 01-.058.006c-.009-.002-.024-.007-.047-.033a2.439 2.439 0 00-3.434-.26l-.404.346a.25.25 0 01-.325 0l-.335-.288a2.75 2.75 0 00-3.65.063l-.195.178a.25.25 0 01-.338 0l-.148-.136a2.633 2.633 0 00-3.676.111.191.191 0 01-.329-.133V4.75zM6.75 2A2.75 2.75 0 004 4.75v14.918c0 1.522 1.852 2.27 2.909 1.175a1.133 1.133 0 011.581-.048l.149.136a1.75 1.75 0 002.367 0l.194-.178a1.25 1.25 0 011.66-.029l.334.288a1.75 1.75 0 002.278 0l.404-.346a.938.938 0 011.322.1c.964 1.12 2.802.438 2.802-1.04V4.75A2.75 2.75 0 0017.25 2H6.75zM8 11.25a.75.75 0 000 1.5h8a.75.75 0 000-1.5H8zM7.25 15a.75.75 0 01.75-.75h6a.75.75 0 010 1.5H8a.75.75 0 01-.75-.75zM8.5 5.25c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h5c.69 0 1.25-.56 1.25-1.25v-2c0-.69-.56-1.25-1.25-1.25h-5zm.25 3v-1.5h4.5v1.5h-4.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconInvoice = forwardRef(SvgInvoice)
export default IconInvoice
