import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgLock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={10} height={12} viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M1 12a1 1 0 01-1-1V6.5a1 1 0 011-1v-1a4 4 0 118 0v1a1 1 0 011 1V11a1 1 0 01-1 1H1zm6-7.5v1H3v-1a2 2 0 114 0z" fill="currentColor"/>
  </svg>);
export const IconLockInline = forwardRef(SvgLock);
export default IconLockInline;
