import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M15.293 4.293l-2.586-2.586a1 1 0 00-1.414 0L8.707 4.293C8.077 4.923 8.523 6 9.414 6h1.836v3.25a.75.75 0 001.5 0V6h1.836c.89 0 1.337-1.077.707-1.707zm-11 4.414l-2.586 2.586a1 1 0 000 1.414l2.586 2.586c.63.63 1.707.184 1.707-.707V12.75h3.25a.75.75 0 100-1.5H6V9.414c0-.89-1.077-1.337-1.707-.707zm18 4l-2.586 2.586c-.63.63-1.707.184-1.707-.707V12.75h-3.25a.75.75 0 110-1.5H18V9.414c0-.89 1.077-1.337 1.707-.707l2.586 2.586a1 1 0 010 1.414zm-13.586 7l2.586 2.586a1 1 0 001.414 0l2.586-2.586c.63-.63.184-1.707-.707-1.707H12.75v-3.25a.75.75 0 00-1.5 0V18H9.414c-.89 0-1.337 1.077-.707 1.707z" fill="currentColor"/>
  </svg>);
export const IconMove = forwardRef(SvgMove);
export default IconMove;
