import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgBulbshine = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path d="M12 .914a.75.75 0 01.75.75V2.71a.75.75 0 01-1.5 0V1.664a.75.75 0 01.75-.75zM3.668 4.88a.75.75 0 011.05-.147l.835.631a.75.75 0 01-.905 1.197l-.834-.631a.75.75 0 01-.146-1.05zM20.332 4.88c.25.33.184.8-.146 1.05l-.834.63a.75.75 0 11-.905-1.196l.834-.63a.75.75 0 011.05.145zM5.753 11.286a6.247 6.247 0 119.598 5.273v2.014a2.842 2.842 0 01-2.841 2.841h-1.02a2.841 2.841 0 01-2.841-2.841v-2.014a6.243 6.243 0 01-2.896-5.273zM1.606 10.992a.75.75 0 01.75-.75h1.046a.75.75 0 010 1.5H2.356a.75.75 0 01-.75-.75zM19.848 10.992a.75.75 0 01.75-.75h1.046a.75.75 0 010 1.5h-1.046a.75.75 0 01-.75-.75zM5.698 16.134c.25.33.185.8-.145 1.05l-.668.505a.75.75 0 01-.904-1.196l.667-.505a.75.75 0 011.05.146zM18.302 16.134a.75.75 0 011.05-.146l.667.505a.75.75 0 01-.904 1.196l-.668-.505a.75.75 0 01-.145-1.05z" fill="#1F1F1F"/>
  </svg>);
export const IconBulbShineSolid: ReturnType<typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>> = forwardRef(SvgBulbshine);
export default IconBulbShineSolid;
