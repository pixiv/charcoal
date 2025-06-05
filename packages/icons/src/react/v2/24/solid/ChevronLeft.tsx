import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgChevronleft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M15.884 4.116a1.25 1.25 0 010 1.768L9.768 12l6.116 6.116a1.25 1.25 0 01-1.768 1.768l-7-7a1.25 1.25 0 010-1.768l7-7a1.25 1.25 0 011.768 0z" fill="currentColor"/>
  </svg>);
export const IconChevronLeftSolid = forwardRef(SvgChevronleft);
export default IconChevronLeftSolid;
