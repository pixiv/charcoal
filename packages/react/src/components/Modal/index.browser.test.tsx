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
import { fireEvent, render } from '@testing-library/react'
import { OverlayProvider } from 'react-aria'
import { vi } from 'vitest'
import { page, userEvent } from 'vitest/browser'
import Modal from '.'
import { ModalBody, ModalButtons, ModalHeader } from './ModalPlumbing'

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

  // 自前判定を導入した #472 の原因だった「スクロールバー操作で閉じる」の再発防止。
  // Chrome のスクロールバー操作は pointerdown / mousedown / mouseup を背景要素に
  // 発火させるが click は合成しない (実 Chrome + イベント計測で確認済みの列)。
  // headless Chromium は overlay scrollbar 固定で実スクロールバーを出せないため、
  // このイベント列を再現して click ベースの外側判定でだけ通ることを担保する
  it('スクロールバー操作相当のイベント列 (click なし) では閉じない', () => {
    const onClose = vi.fn()
    const { background } = renderModal(onClose)

    fireEvent.pointerDown(background, { button: 0 })
    fireEvent.mouseDown(background, { button: 0 })
    fireEvent.mouseUp(background, { button: 0 })

    expect(onClose).not.toHaveBeenCalled()

    // 対照: 同じ列に click が続けば閉じる。上の未発火が
    // 「イベントが判定に届いていないだけ」ではないことの保証
    fireEvent.click(background, { button: 0 })
    expect(onClose).toHaveBeenCalledOnce()
  })
})

describe('Modal (desktop width)', () => {
  beforeEach(async () => {
    await page.viewport(1280, 720)
  })

  it.each([
    ['S', 336],
    ['M', 440],
    ['L', 648],
  ] as const)('size=%s は幅 %ipx になる', (size, width) => {
    render(
      <OverlayProvider>
        <Modal title="test modal" isOpen onClose={vi.fn()} size={size}>
          <ModalHeader />
        </Modal>
      </OverlayProvider>,
    )
    const dialog = document.querySelector('.charcoal-modal-dialog')
    if (!(dialog instanceof HTMLElement)) throw new Error('dialog not found')

    expect(dialog.getBoundingClientRect().width).toBe(width)
  })
})

describe('Modal (mobile width)', () => {
  const VIEWPORT_WIDTH = 375

  beforeEach(async () => {
    await page.viewport(VIEWPORT_WIDTH, 667)
  })

  afterEach(async () => {
    await page.viewport(1280, 720)
  })

  it.each(['S', 'M', 'L'] as const)(
    'size=%s でも左右に 24px の余白を取る',
    (size) => {
      render(
        <OverlayProvider>
          <Modal title="test modal" isOpen onClose={vi.fn()} size={size}>
            <ModalHeader />
          </Modal>
        </OverlayProvider>,
      )
      const dialog = document.querySelector('.charcoal-modal-dialog')
      if (!(dialog instanceof HTMLElement)) throw new Error('dialog not found')

      expect(dialog.getBoundingClientRect().width).toBe(VIEWPORT_WIDTH - 48)
    },
  )

  it('data-size が付かない場合も左右に 24px の余白を取る', () => {
    render(
      <OverlayProvider>
        {/* デフォルト引数は null に効かないため data-size 属性が付かない */}
        {/* @ts-expect-error 型の外から null が渡るケース */}
        <Modal title="test modal" isOpen onClose={vi.fn()} size={null}>
          <ModalHeader />
        </Modal>
      </OverlayProvider>,
    )
    const dialog = document.querySelector('.charcoal-modal-dialog')
    if (!(dialog instanceof HTMLElement)) throw new Error('dialog not found')

    expect(dialog.hasAttribute('data-size')).toBe(false)
    expect(dialog.getBoundingClientRect().width).toBe(VIEWPORT_WIDTH - 48)
  })

  it('bottomSheet は余白なしの全幅になる', () => {
    render(
      <OverlayProvider>
        <Modal title="test modal" isOpen onClose={vi.fn()} size="L" bottomSheet>
          <ModalHeader />
        </Modal>
      </OverlayProvider>,
    )
    const dialog = document.querySelector('.charcoal-modal-dialog')
    if (!(dialog instanceof HTMLElement)) throw new Error('dialog not found')

    expect(dialog.getBoundingClientRect().width).toBe(VIEWPORT_WIDTH)
  })
})

describe('Modal (scroll)', () => {
  const VIEWPORT_HEIGHT = 720

  beforeEach(async () => {
    await page.viewport(1280, VIEWPORT_HEIGHT)
  })

  const renderLongModal = (scroll: 'outside' | 'inside') => {
    render(
      <OverlayProvider>
        <Modal title="test modal" isOpen onClose={vi.fn()} scroll={scroll}>
          <ModalHeader />
          <ModalBody>
            <div style={{ height: 2000 }} />
          </ModalBody>
          <ModalButtons>
            <button type="button">OK</button>
          </ModalButtons>
        </Modal>
      </OverlayProvider>,
    )
    const query = (selector: string) => {
      const el = document.querySelector(selector)
      if (!(el instanceof HTMLElement)) throw new Error(`${selector} not found`)
      return el
    }
    return {
      background: query('.charcoal-modal-background'),
      dialog: query('.charcoal-modal-dialog'),
      header: query('.charcoal-modal-header-root'),
      body: query('.charcoal-modal-body'),
      buttons: query('.charcoal-modal-buttons'),
    }
  }

  it('既定 (outside) ではダイアログが伸びて背景がスクロールする', () => {
    const { background, dialog, body } = renderLongModal('outside')

    expect(dialog.getBoundingClientRect().height).toBeGreaterThan(
      VIEWPORT_HEIGHT,
    )
    expect(background.scrollHeight).toBeGreaterThan(background.clientHeight)
    expect(body.scrollHeight).toBe(body.clientHeight)
  })

  it('inside では上下 40px の余白内に収まり ModalBody だけがスクロールする', () => {
    const { background, dialog, header, body } = renderLongModal('inside')

    const rect = dialog.getBoundingClientRect()
    expect(rect.top).toBe(40)
    expect(rect.bottom).toBe(VIEWPORT_HEIGHT - 40)
    expect(header.getBoundingClientRect().height).toBe(64)
    expect(background.scrollHeight).toBe(background.clientHeight)
    expect(body.scrollHeight).toBeGreaterThan(body.clientHeight)
  })

  it('inside で ModalBody の外に置いた ModalButtons はスクロールしても動かない', () => {
    const { dialog, body, buttons } = renderLongModal('inside')

    const before = buttons.getBoundingClientRect()
    body.scrollTop = 1000
    const after = buttons.getBoundingClientRect()

    expect(body.scrollTop).toBe(1000)
    expect(after.top).toBe(before.top)
    expect(after.bottom).toBe(dialog.getBoundingClientRect().bottom - 40)
  })
})

describe('Modal (scroll, mobile bottomSheet full)', () => {
  beforeEach(async () => {
    await page.viewport(375, 667)
  })

  afterEach(async () => {
    await page.viewport(1280, 720)
  })

  it('画面全体を占めて ModalBody だけがスクロールする', () => {
    render(
      <OverlayProvider>
        <Modal
          title="test modal"
          isOpen
          onClose={vi.fn()}
          scroll="inside"
          bottomSheet="full"
        >
          <ModalHeader />
          <ModalBody>
            <div style={{ height: 2000 }} />
          </ModalBody>
        </Modal>
      </OverlayProvider>,
    )
    const dialog = document.querySelector('.charcoal-modal-dialog')
    const header = document.querySelector('.charcoal-modal-header-root')
    const body = document.querySelector('.charcoal-modal-body')
    if (
      !(dialog instanceof HTMLElement) ||
      !(header instanceof HTMLElement) ||
      !(body instanceof HTMLElement)
    )
      throw new Error('dialog not found')

    // 開きアニメーション中は transform がかかるので、transform の影響を受けない offset で測る
    expect(dialog.offsetTop).toBe(0)
    expect(dialog.offsetHeight).toBe(667)
    expect(header.offsetHeight).toBe(48)
    expect(body.scrollHeight).toBeGreaterThan(body.clientHeight)
  })
})
