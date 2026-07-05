import {
  useCallback,
  useEffect,
  useState,
  RefObject,
  TransitionEvent,
} from 'react'
import { useIsomorphicLayoutEffect } from '../../_lib/useIsomorphicLayoutEffect'

// index.css の transition-duration と一致させること
export const MODAL_TRANSITION_DURATION_MS = 400

type AnimationState = 'exited' | 'entering' | 'entered' | 'exiting'

/**
 * アニメーション終了時の状態遷移。
 * 途中で open/close が切り替わって state が既に進んでいた場合は何もしない
 */
function settle(state: AnimationState): AnimationState {
  if (state === 'entering') return 'entered'
  if (state === 'exiting') return 'exited'
  return state
}

/**
 * CSS transition によるモーダルの開閉アニメーションを管理する。
 * exit アニメーションが終わるまで DOM をマウントしたままにする
 *
 * @param isOpen モーダルを開くべきか
 * @param enabled アニメーションを行うか（false なら即座にマウント・アンマウント）
 * @param backgroundRef 背景要素。マウント直後の layout flush に使う
 * @param dialogRef transform をアニメーションさせる要素（ダイアログ）
 */
export function useTransitionPresence(
  isOpen: boolean,
  enabled: boolean,
  backgroundRef: RefObject<HTMLElement>,
  dialogRef: RefObject<HTMLElement>,
) {
  // 開いた状態で初回マウントされた場合もアニメーションさせるため常に 'exited' から始める。
  // enabled でない場合は下の layout effect が描画前に 'entered' へ進める
  const [state, setState] = useState<AnimationState>('exited')

  useIsomorphicLayoutEffect(() => {
    if (!enabled) {
      setState(isOpen ? 'entered' : 'exited')
    } else if (isOpen) {
      // 閉じた状態のスタイルを確定させ、enter の transition が発火するようにする。
      // dialogRef は子コンポーネントの passive effect で張られるためこの時点では
      // まだ古い/null のことがあり、同じ commit で同期的に張られる背景要素を読む
      if (backgroundRef.current) void backgroundRef.current.offsetHeight
      setState((s) => (s === 'exited' || s === 'exiting' ? 'entering' : s))
    } else {
      setState((s) => (s === 'exited' ? s : 'exiting'))
    }
  }, [isOpen, enabled, backgroundRef])

  // safety net: transitionend が来なくても（トランジションのキャンセル、
  // reduced-motion、バックグラウンドタブ等）モーダルが永遠に残らないようにする
  const isAnimating = state === 'entering' || state === 'exiting'
  useEffect(() => {
    if (!isAnimating) return
    const timer = setTimeout(
      () => setState(settle),
      MODAL_TRANSITION_DURATION_MS + 100,
    )
    return () => clearTimeout(timer)
  }, [isAnimating, state])

  // 背景 div に付ける。ダイアログの transform の transitionend だけが
  // 開閉アニメーションの終了を意味する（他のトランジションもバブルしてくるため絞り込む）。
  // propertyName は index.css がアニメーションさせるプロパティと一致させること。
  // なお enter 完了直後の close では、完了済み enter の transitionend が
  // 'exiting' へ遷移した後に届いて exit アニメーションが省略される可能性が
  // 理論上あるが、サブフレーム幅のレースで実害は見た目のみのため許容している
  const handleTransitionEnd = useCallback(
    (e: TransitionEvent<HTMLElement>) => {
      const isDialogSlide =
        e.target === dialogRef.current && e.propertyName === 'transform'
      if (isDialogSlide) {
        setState(settle)
      }
    },
    [dialogRef],
  )

  return {
    // enabled でないときは isOpen だけで即座にマウント・アンマウントする
    // （state 経由にすると close 時に開いたツリーを丸ごと 1 回余計に描画する）
    isPresent: enabled ? isOpen || state !== 'exited' : isOpen,
    animationState: state,
    handleTransitionEnd,
  }
}
