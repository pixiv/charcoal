import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSelections = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M3 6.75A3.75 3.75 0 016.75 3h7.5A3.75 3.75 0 0118 6.75v7.5A3.75 3.75 0 0114.25 18h-7.5A3.75 3.75 0 013 14.25v-7.5zM6.75 4.5A2.25 2.25 0 004.5 6.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-7.5zm-.001 15a3.744 3.744 0 003 1.5h7.5a3.75 3.75 0 003.75-3.75v-7.5a3.744 3.744 0 00-1.499-3v7.5l-.001.102v2.898a2.25 2.25 0 01-2.25 2.25h-10.5zm6.25-11.622a.75.75 0 011.062 1.061l-4.008 4.008a.75.75 0 01-1.06 0l-1.755-1.754a.75.75 0 111.06-1.061l1.225 1.224L13 7.878z" fill="currentColor"/>
  </svg>);
export const IconSelections = forwardRef(SvgSelections);
export default IconSelections;
