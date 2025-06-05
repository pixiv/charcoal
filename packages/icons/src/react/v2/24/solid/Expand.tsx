import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgExpand = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M3.575 4.775a1.2 1.2 0 011.2-1.2h4.379a1.2 1.2 0 010 2.4H7.672L12 10.303l4.328-4.328h-1.482a1.2 1.2 0 010-2.4h4.379a1.2 1.2 0 011.2 1.2v4.379a1.2 1.2 0 01-2.4 0V7.672L13.697 12l4.328 4.328v-1.482a1.2 1.2 0 112.4 0v4.379a1.2 1.2 0 01-1.2 1.2h-4.379a1.2 1.2 0 010-2.4h1.482L12 13.697l-4.328 4.328h1.482a1.2 1.2 0 010 2.4H4.775a1.2 1.2 0 01-1.2-1.2v-4.379a1.2 1.2 0 012.4 0v1.482L10.303 12 5.975 7.672v1.482a1.2 1.2 0 01-2.4 0V4.775z" fill="currentColor"/>
  </svg>);
export const IconExpandSolid = forwardRef(SvgExpand);
export default IconExpandSolid;
