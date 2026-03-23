import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgProjects = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path d="M8.908 6.004a.75.75 0 100 1.5h4.994a.75.75 0 100-1.5H8.908zM8.908 8.992a.75.75 0 100 1.5h3.075a.75.75 0 100-1.5H8.909z" fill="#1F1F1F"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M5.001 12.5V4.75A2.75 2.75 0 017.751 2h8.478a2.75 2.75 0 012.75 2.75v7.75h.271c.966 0 1.75.784 1.75 1.75v5A2.75 2.75 0 0118.25 22H5.75A2.75 2.75 0 013 19.25v-5c0-.966.784-1.75 1.75-1.75h.251zm1.5-7.75c0-.69.56-1.25 1.25-1.25h8.478c.69 0 1.25.56 1.25 1.25v7.75H15.5a1.75 1.75 0 00-1.75 1.75v.5a.25.25 0 01-.25.25h-3a.25.25 0 01-.25-.25v-.5A1.75 1.75 0 008.5 12.5H6.501V4.75zM4.5 14.25a.25.25 0 01.25-.25H8.5a.25.25 0 01.25.25v.5c0 .966.784 1.75 1.75 1.75h3a1.75 1.75 0 001.75-1.75v-.5a.25.25 0 01.25-.25h3.75a.25.25 0 01.25.25v5c0 .69-.56 1.25-1.25 1.25H5.75c-.69 0-1.25-.56-1.25-1.25v-5z" fill="#1F1F1F"/>
  </svg>);
export const IconProjects: ReturnType<typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>> = forwardRef(SvgProjects);
export default IconProjects;
