/**
 * 背景クリックでの dismiss 判定テスト
 *
 * jsdom では検証できないため実ブラウザで実行する:
 *
 * 1. mousedown と mouseup のターゲットが異なるとき、ブラウザは両者の
 *    最も近い共通祖先で click を合成する。テキスト選択のドラッグが
 *    ダイアログ内から背景上へはみ出すと click のターゲットは背景になる。
 *    jsdom はこの合成を行わないため実ブラウザでしか再現できない。
 * 2. jsdom は PointerEvent を実装しておらず、react-aria の
 *    useInteractOutside が本番と同じ pointerdown + click の経路を通らない。
 */
import { render } from '@testing-library/react'
import { OverlayProvider } from 'react-aria'
import { vi } from 'vitest'
import { userEvent } from 'vitest/browser'
import Modal from '.'
import { ModalHeader } from './ModalPlumbing'

const getBackground = () => {
  const bg = document.querySelector('.charcoal-modal-background')
  if (!(bg instanceof HTMLElement)) throw new Error('background not found')
  return bg
}

const renderModal = (onClose: () => void) => {
  const result = render(
    <OverlayProvider>
      <Modal title="test modal" isOpen onClose={onClose}>
        <ModalHeader />
        <input data-testid="text" defaultValue="selectable text" />
      </Modal>
    </OverlayProvider>,
  )
  return {
    input: result.getByTestId('text'),
    background: getBackground(),
  }
}

/** trusted イベントは React の act() 管理外で発火するため区間を区切る */
async function withoutActEnvironment(run: () => Promise<void>) {
  const g = globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }
  g.IS_REACT_ACT_ENVIRONMENT = false
  try {
    await run()
  } finally {
    g.IS_REACT_ACT_ENVIRONMENT = true
  }
}

describe('Modal (outside interaction)', () => {
  it('背景の実クリックで閉じる', async () => {
    const onClose = vi.fn()
    const { background } = renderModal(onClose)

    await withoutActEnvironment(async () => {
      // ダイアログは背景の中央にあるので、左上の余白を実クリックする
      await userEvent.click(background, { position: { x: 8, y: 8 } })
    })

    expect(onClose).toHaveBeenCalledOnce()
  })

  it('テキスト選択がダイアログ内から背景上へはみ出しても閉じない', async () => {
    const onClose = vi.fn()
    const { input, background } = renderModal(onClose)

    await withoutActEnvironment(async () => {
      // input のテキスト上で press → 背景の余白で release
      await userEvent.dragAndDrop(input, background, {
        targetPosition: { x: 8, y: 8 },
      })
    })

    expect(onClose).not.toHaveBeenCalled()
  })
})
