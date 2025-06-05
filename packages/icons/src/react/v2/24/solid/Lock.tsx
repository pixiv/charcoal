import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgLock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 3.5a2.75 2.75 0 00-2.75 2.75v2h5.5v-2A2.75 2.75 0 0012 3.5zm4.25 4.75A3.75 3.75 0 0120 12v6.25A3.75 3.75 0 0116.25 22h-8.5A3.75 3.75 0 014 18.25V12a3.75 3.75 0 013.75-3.75v-2a4.25 4.25 0 018.5 0v2zM13 15a1 1 0 11-2 0 1 1 0 012 0z" fill="currentColor"/>
  </svg>);
export const IconLockSolid = forwardRef(SvgLock);
export default IconLockSolid;
