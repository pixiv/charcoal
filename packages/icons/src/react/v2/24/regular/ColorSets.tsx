import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgColorSets = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path d="M10.447 11.124l1.65-1.65.37-4.233a1.25 1.25 0 011.354-1.136l1.992.174c.47.041.857.338 1.036.742a4.24 4.24 0 011.443-.43 2.75 2.75 0 00-2.348-1.806l-1.992-.174a2.75 2.75 0 00-2.98 2.5l-.525 6.013zM8.76 12.811l-1.216 1.216-.01.01L5.61 6.853a2.75 2.75 0 011.945-3.368l1.931-.517c.258-.07.517-.1.77-.094a4.223 4.223 0 00-.71 1.63l-1.603.43a1.25 1.25 0 00-.884 1.531l1.7 6.345zM6.126 14.573l.34 1.274a4.262 4.262 0 00-.164 1.024l-4.497-4.497a2.75 2.75 0 010-3.889L3.22 7.071c.242-.242.518-.429.813-.562.021.244.064.49.13.734l.214.802a1.262 1.262 0 00-.096.087L2.866 9.546a1.25 1.25 0 000 1.768l3.26 3.26zM12.627 17.771a1 1 0 01-1.414 0l-.007-.007a1 1 0 011.414-1.414l.007.007a1 1 0 010 1.414z" fill="#1F1F1F"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M10.14 20.513a2.75 2.75 0 003.89 0l8.217-8.218a2.75 2.75 0 000-3.89L20.712 6.87a2.75 2.75 0 00-3.89 0l-8.218 8.218a2.75 2.75 0 000 3.89l1.536 1.535zm2.829-1.06a1.25 1.25 0 01-1.768 0l-1.536-1.537a1.25 1.25 0 010-1.767l2.616-2.616 3.303 3.304-2.615 2.615zm3.676-3.677l2.119-2.12-3.303-3.303-2.12 2.12 3.304 3.303zm-.124-6.483l3.304 3.303 1.361-1.362a1.25 1.25 0 000-1.768l-1.535-1.535a1.25 1.25 0 00-1.768 0l-1.362 1.362z" fill="#1F1F1F"/>
  </svg>);
export const IconColorSets: ReturnType<typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>> = forwardRef(SvgColorSets);
export default IconColorSets;
