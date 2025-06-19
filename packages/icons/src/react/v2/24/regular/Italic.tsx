import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgItalic = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M9.25 3.752a.75.75 0 01.75-.75h7a.75.75 0 010 1.5h-2.874l-2.727 14.996H14a.75.75 0 010 1.5H7a.75.75 0 110-1.5h2.874l2.727-14.996H10a.75.75 0 01-.75-.75z" fill="currentColor"/>
  </svg>);
export const IconItalic = forwardRef(SvgItalic);
export default IconItalic;
