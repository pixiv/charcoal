import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgAr = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path d="M4.04 6.458A2.417 2.417 0 016.458 4.04h1.319a.75.75 0 100-1.5H6.458A3.917 3.917 0 002.54 6.458v1.319a.75.75 0 001.5 0v-1.32zM16.224 2.54a.75.75 0 000 1.5h1.315a2.417 2.417 0 012.417 2.418v1.319a.75.75 0 001.5 0V6.458a3.917 3.917 0 00-3.917-3.917h-1.316zM4.04 16.223a.75.75 0 00-1.5 0v1.324a3.917 3.917 0 003.917 3.917h1.32a.75.75 0 000-1.5h-1.32a2.417 2.417 0 01-2.417-2.417v-1.324zM21.456 16.223a.75.75 0 00-1.5 0v1.316a2.417 2.417 0 01-2.417 2.417h-1.316a.75.75 0 000 1.5h1.316a3.917 3.917 0 003.917-3.917v-1.316z" fill="#1F1F1F"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.336 5.522a.75.75 0 00-.671 0l-5.27 2.635a.747.747 0 00-.424.688v6.322c0 .284.16.544.415.671l5.265 2.633a.746.746 0 00.698 0l5.266-2.633a.75.75 0 00.414-.67V8.844a.747.747 0 00-.424-.688l-5.27-2.635zm.414 11.071l3.78-1.89v-4.546l-3.78 2.268v4.168zm-1.5 0v-4.168l-3.779-2.268v4.547l3.78 1.89zm.75-5.468l3.722-2.233L12 7.032 8.28 8.891 12 11.125z" fill="#1F1F1F"/>
  </svg>);
export const IconAr: ReturnType<typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>> = forwardRef(SvgAr);
export default IconAr;
