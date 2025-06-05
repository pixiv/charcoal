import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCrown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M11 5.75a1 1 0 112 0 1 1 0 01-2 0zm1-2.5a2.5 2.5 0 00-1.296 4.638 1.903 1.903 0 00-.24.281l-1.966 2.81a1.5 1.5 0 01-1.9.482l-1.19-.595a2.5 2.5 0 10-2.025.882L4.54 17.64a4.125 4.125 0 004.048 3.329h6.822a4.125 4.125 0 004.048-3.33l1.159-5.892a2.5 2.5 0 10-2.026-.881l-1.19.595a1.5 1.5 0 01-1.9-.482l-1.966-2.81a1.904 1.904 0 00-.24-.28A2.5 2.5 0 0012 3.25zm-.307 5.78a.375.375 0 01.614 0l1.965 2.809a3 3 0 003.8.963l.898-.448-.983 4.996a2.625 2.625 0 01-2.575 2.119H8.588a2.625 2.625 0 01-2.576-2.119l-.982-4.996.897.448a3 3 0 003.8-.963l1.965-2.81zM3.5 8.25a1 1 0 100 2 1 1 0 000-2zm16 1a1 1 0 112 0 1 1 0 01-2 0z" fill="currentColor"/>
  </svg>);
export const IconCrown = forwardRef(SvgCrown);
export default IconCrown;
