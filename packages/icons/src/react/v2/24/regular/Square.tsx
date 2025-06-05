import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSquare = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M3 6.75A3.75 3.75 0 016.75 3h10.5A3.75 3.75 0 0121 6.75v10.5A3.75 3.75 0 0117.25 21H6.75A3.75 3.75 0 013 17.25V6.75zM6.75 4.5A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75z" fill="currentColor"/>
  </svg>);
export const IconSquare = forwardRef(SvgSquare);
export default IconSquare;
