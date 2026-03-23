import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgGradient = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path d="M13 13.5v3h-3v-3h3z" fill="#1F1F1F"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M13 10.5h-3v-3h3v3zm0 0v3h3v-3h-3z" fill="#1F1F1F"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M3 6.75A3.75 3.75 0 016.75 3h10.5A3.75 3.75 0 0121 6.75v10.5A3.75 3.75 0 0117.25 21H6.75A3.75 3.75 0 013 17.25V6.75zm4 9.75h3v3h3v-3h3v3h1.25a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H16v3h-3v-3h-3v3H7v3h3v3H7v3z" fill="#1F1F1F"/>
  </svg>);
export const IconGradient: ReturnType<typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>> = forwardRef(SvgGradient);
export default IconGradient;
