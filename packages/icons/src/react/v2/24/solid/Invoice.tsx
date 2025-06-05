import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgInvoice = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M6.75 2A2.75 2.75 0 004 4.75v14.918c0 1.522 1.852 2.27 2.909 1.175a1.133 1.133 0 011.581-.048l.149.136a1.75 1.75 0 002.367 0l.194-.178a1.25 1.25 0 011.66-.029l.334.288a1.75 1.75 0 002.278 0l.404-.346a.938.938 0 011.322.1c.964 1.12 2.802.438 2.802-1.04V4.75A2.75 2.75 0 0017.25 2H6.75zm.5 5a1 1 0 011-1h5a1 1 0 011 1v1a1 1 0 01-1 1h-5a1 1 0 01-1-1V7zM8 11a.75.75 0 000 1.5h8a.75.75 0 000-1.5H8zm0 3.25a.75.75 0 000 1.5h6a.75.75 0 000-1.5H8z" fill="currentColor"/>
  </svg>);
export const IconInvoiceSolid = forwardRef(SvgInvoice);
export default IconInvoiceSolid;
