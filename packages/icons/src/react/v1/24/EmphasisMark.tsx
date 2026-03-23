import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgEmphasisMark = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 6a1 1 0 01.934.64l5 13a1 1 0 01-1.867.72L14.775 17H9.226l-1.292 3.36a1 1 0 01-1.867-.72l5-13 .066-.137A1 1 0 0112.001 6zm-2.004 9h4.01L12 9.786 9.995 15z" fill="currentColor"/>
    <path d="M12 1a2 2 0 110 4 2 2 0 010-4z" fill="currentColor"/>
  </svg>);
export const IconEmphasisMark24: ReturnType<typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>> = forwardRef(SvgEmphasisMark);
export default IconEmphasisMark24;
