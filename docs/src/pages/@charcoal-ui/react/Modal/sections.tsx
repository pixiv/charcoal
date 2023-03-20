import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import {
  ModalAlign,
  ModalBody,
  ModalHeader,
  ModalProps,
} from '@charcoal-ui/react'
import { PreviewSection } from '../_components/Previews'

export const sections: PreviewSection<ModalProps>[] = [
  {
    title: 'size',
    previewMetas: ['S', 'M', 'L'].map((size) => ({
      additionalData: {
        openText: size,
      },
      children: undefined,
      props: {
        isOpen: false,
        size: size as 'S' | 'M' | 'L',
        children: undefined,
        onClose: () => {},
        title: size,
      },
    })),
  },

  {
    title: 'isDismissable',
    previewMetas: [
      {
        children: () => {
          return (
            <ModalBody>
              <ModalHeader />
              <ModalAlign></ModalAlign>
            </ModalBody>
          )
        },
        props: {
          isDismissable: true,
          isOpen: false,
          children: undefined,
          onClose: () => {},
          title: 'isDismissable',
        },
      },
    ],
  },
  {
    title: 'bottomSheet',
    previewMetas: [
      {
        children: () => {
          const text = useScreen1Text(
            'ウィンドウの幅を狭くしてください',
            'モバイルデバイス向けのUIです'
          )
          return (
            <ModalBody>
              <ModalHeader />
              <ModalAlign style={{ textAlign: 'center' }}>{text}</ModalAlign>
            </ModalBody>
          )
        },
        additionalData: {
          openText: 'bottomSheet = ture',
        },
        props: {
          isOpen: false,
          isDismissable: true,
          bottomSheet: true,
          children: undefined,
          onClose: () => {},
          title: 'bottomSheet',
        },
      },
      {
        children: () => {
          const text = useScreen1Text(
            'ウィンドウの幅を狭くしてください',
            '画面の高さいっぱいのシートになります'
          )

          return (
            <ModalBody>
              <ModalHeader />
              <ModalAlign style={{ textAlign: 'center' }}>{text}</ModalAlign>
            </ModalBody>
          )
        },
        additionalData: {
          openText: 'bottomSheet = "full"',
        },
        props: {
          isOpen: false,
          isDismissable: true,
          bottomSheet: 'full',
          children: undefined,
          onClose: () => {},
          title: 'bottomSheet',
        },
      },
    ],
  },
]

function useScreen1Text(screen1Text: string, elseText: string) {
  const theme = useTheme()
  const [text, setText] = useState('')
  useWindowResize(() => {
    const text =
      window.innerWidth > theme.breakpoint.screen1 ? screen1Text : elseText
    setText(text)
  })
  return text
}

function useWindowResize(callback: () => void) {
  useEffect(() => {
    if (typeof window === 'undefined') return
    callback()
    window.addEventListener('resize', callback)
    return () => {
      window.removeEventListener('resize', callback)
    }
  }, [])
}
