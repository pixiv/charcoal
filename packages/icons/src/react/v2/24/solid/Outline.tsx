import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M9.196 3.881a3.03 3.03 0 015.607 0l-.694.285.694-.285 5.71 13.94a3.03 3.03 0 01-5.608 2.297l-.306-.748H9.401l-.306.748a3.03 3.03 0 01-5.608-2.296l5.71-13.94zM12 9.25a.25.25 0 01.232.157l2 5a.25.25 0 01-.232.343h-4a.25.25 0 01-.232-.343l2-5A.25.25 0 0112 9.25z" fill="currentColor"/>
  </svg>);
export const IconOutlineSolid = forwardRef(SvgOutline);
export default IconOutlineSolid;
