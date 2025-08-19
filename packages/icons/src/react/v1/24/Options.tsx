import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgOptions = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M4.645 7a3.502 3.502 0 016.71 0H20a1 1 0 110 2h-8.645a3.502 3.502 0 01-6.71 0H4a1 1 0 010-2h.645zM8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12.645 15a3.502 3.502 0 016.71 0H20a1 1 0 110 2h-.645a3.502 3.502 0 01-6.71 0H4a1 1 0 110-2h8.645zm4.855 1a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="currentColor"/>
  </svg>);
export const IconOptions24 = forwardRef(SvgOptions);
export default IconOptions24;
