import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgLock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M9.25 6.25a2.75 2.75 0 115.5 0v2h-5.5v-2zm-1.5 2v-2a4.25 4.25 0 018.5 0v2A3.75 3.75 0 0120 12v6.25A3.75 3.75 0 0116.25 22h-8.5A3.75 3.75 0 014 18.25V12a3.75 3.75 0 013.75-3.75zm0 1.5A2.25 2.25 0 005.5 12v6.25a2.25 2.25 0 002.25 2.25h8.5a2.25 2.25 0 002.25-2.25V12a2.25 2.25 0 00-2.25-2.25h-8.5zM13 15a1 1 0 11-2 0 1 1 0 012 0z" fill="currentColor"/>
  </svg>);
export const IconLock = forwardRef(SvgLock);
export default IconLock;
