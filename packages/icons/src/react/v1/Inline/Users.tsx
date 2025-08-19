import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgUsers = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={8} height={12} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path d="M4 6A2.75 2.75 0 104 .5 2.75 2.75 0 004 6zM4 6a4 4 0 014 4 1 1 0 01-1 1H1a1 1 0 01-1-1 4 4 0 014-4z" fill="currentColor"/>
  </svg>);
export const IconUsersInline = forwardRef(SvgUsers);
export default IconUsersInline;
