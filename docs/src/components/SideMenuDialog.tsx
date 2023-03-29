import { FC, ReactNode, useRef } from 'react'
import { useDialog, AriaDialogProps } from '@react-aria/dialog'

type SideMenuBody = {
  title?: string
  children: ReactNode
} & AriaDialogProps

export const SideMenuDialog: FC<SideMenuBody> = ({
  title,
  children,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { dialogProps } = useDialog(props, ref)

  return (
    <div {...dialogProps} ref={ref}>
      {children}
    </div>
  )
}
