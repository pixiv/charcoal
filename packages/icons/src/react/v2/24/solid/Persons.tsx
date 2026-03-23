import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPersons = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path d="M15.75 2.741a2.958 2.958 0 114.183 4.184 2.958 2.958 0 01-4.184-4.184z" fill="#1F1F1F"/>
  </svg>);
export const IconPersonsSolid: ReturnType<typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>> = forwardRef(SvgPersons);
export default IconPersonsSolid;
