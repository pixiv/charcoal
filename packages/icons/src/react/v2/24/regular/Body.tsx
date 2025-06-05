import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgBody = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 3.8a1.7 1.7 0 100 3.4 1.7 1.7 0 000-3.4zM8.7 5.5a3.3 3.3 0 116.6 0 3.3 3.3 0 01-6.6 0zm-5.5 5a.8.8 0 01.8-.8h16a.8.8 0 010 1.6h-4.7V17.113l2.406 4.511a.8.8 0 11-1.412.753l-2.44-4.577h-3.707l-2.441 4.577a.8.8 0 01-1.412-.753L8.7 17.113V11.3H4a.8.8 0 01-.8-.8zm7.1 5.7v-4.9h3.4v4.9h-3.4z" fill="currentColor"/>
  </svg>);
export const IconBody = forwardRef(SvgBody);
export default IconBody;
