import "./index.css";

import { useButton } from "@react-aria/button";
import { useFocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";
import { useVisuallyHidden } from "@react-aria/visually-hidden";
import {
  memo,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { useClassNames } from "../../_lib/useClassNames";
import { createPageCounter, type PageCounter } from "./pageCounter";

export type CarouselItem = {
  id: string;
  children: ReactNode;
};

export type CarouselProps = Readonly<{
  className?: string;
  hasGradient?: boolean;
  fullWidth?: boolean;
  navigationButtons?: boolean;
  indicator?: boolean;
  size?: "S" | "M";

  items: CarouselItem[];
}>;

type Direction = "prev" | "next";

// 1回のボタン操作でコンテナ幅に対してスクロールする倍率（doc2 のデフォルト 0.75）
const SCROLL_STEP_RATIO = 0.75;

// SSR safe な useLayoutEffect 代替
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type NavigationButtonProps = Readonly<{
  direction: Direction;
  canScroll: boolean;
  onScroll: (direction: Direction) => void;
}>;

// useButton で cross-device press (mouse/touch/keyboard) と disabled の event 抑制を、
// useFocusRing でキーボード focus 時のみ visible にする focus-ring を担当させる。
// インライン anon 関数を親から排除する目的のサブコンポーネント分離は維持。
const CarouselNavigationButton = ({
  direction,
  canScroll,
  onScroll,
}: NavigationButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const handlePress = useCallback(() => {
    onScroll(direction);
  }, [onScroll, direction]);
  const { buttonProps, isPressed } = useButton(
    {
      onPress: handlePress,
      isDisabled: !canScroll,
      "aria-label": direction === "prev" ? "Previous" : "Next",
    },
    ref,
  );
  const { focusProps, isFocusVisible } = useFocusRing();
  return (
    <button
      {...mergeProps(buttonProps, focusProps)}
      ref={ref}
      className="charcoal-carousel__navigation__item"
      data-direction={direction}
      data-hidden={!canScroll}
      data-pressed={isPressed || undefined}
      data-focus-visible={isFocusVisible || undefined}
    />
  );
};

type IndicatorDotProps = Readonly<{
  index: number;
  isActive: boolean;
  onSelect: (index: number) => void;
}>;

const CarouselIndicatorDot = memo(
  ({ index, isActive, onSelect }: IndicatorDotProps) => {
    const ref = useRef<HTMLButtonElement>(null);
    const handlePress = useCallback(() => {
      onSelect(index);
    }, [onSelect, index]);
    const { buttonProps, isPressed } = useButton(
      {
        onPress: handlePress,
        "aria-label": `Go to carousel ${index + 1}`,
      },
      ref,
    );
    const { focusProps, isFocusVisible } = useFocusRing();
    return (
      <button
        {...mergeProps(buttonProps, focusProps)}
        ref={ref}
        className="charcoal-carousel__indicator__item"
        aria-current={isActive}
        data-active={isActive}
        data-pressed={isPressed || undefined}
        data-focus-visible={isFocusVisible || undefined}
      />
    );
  },
);
CarouselIndicatorDot.displayName = "CarouselIndicatorDot";

const Carousel = ({
  size = "M",
  navigationButtons,
  indicator,
  hasGradient = false,
  fullWidth = false,
  ...props
}: CarouselProps) => {
  const className = useClassNames("charcoal-carousel", props.className);
  const labelId = useId();

  // NavigationButtons / Indicator のデフォルト表示は size に連動（doc1 仕様）。
  const showNavigationButtons = navigationButtons ?? size === "M";
  const showIndicator = indicator ?? size === "S";

  const scrollerRef = useRef<HTMLDivElement>(null);

  // React 非依存の headless store。useMemo で 1 component instance あたり 1 個に固定。
  const pageStore = useMemo<PageCounter>(() => createPageCounter(0), []);

  // useSyncExternalStore で店子側に購読させる。これにより activeIndex は常に
  // store の最新値となり、ref と state の二重管理 / 巻き戻しバグが起きない。
  const activeIndex = useSyncExternalStore(
    pageStore.subscribe,
    pageStore.getValue,
    pageStore.getValue, // SSR snapshot
  );

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const measure = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    // 1px の許容: ブラウザによっては小数点でぴったり 0 / 端にならないため
    setCanPrev(scrollLeft > 1);
    setCanNext(scrollLeft < scrollWidth - clientWidth - 1);

    // scroll-snap-align: center に合わせて「viewport 中央に最も近い item」を active と判定。
    // 検出と復元 (scrollTo) の両方が center 基準で一致しているため、
    // 以前の center 検出 + start 復元の組み合わせで起きた runaway は発生しない。
    const viewportCenter = scrollLeft + clientWidth / 2;
    const itemEls = el.children;
    let nextActive = 0;
    let minDist = Infinity;
    for (let i = 0; i < itemEls.length; i++) {
      const item = itemEls[i] as HTMLElement;
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const dist = Math.abs(itemCenter - viewportCenter);
      if (dist < minDist) {
        minDist = dist;
        nextActive = i;
      }
    }

    pageStore.set(nextActive);
  }, [pageStore]);

  // scroll 同期 & 初期スクロール位置を左端に固定（doc2 仕様）。
  useIsomorphicLayoutEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollLeft = 0;
    measure();
    el.addEventListener("scroll", measure, { passive: true });
    return () => {
      el.removeEventListener("scroll", measure);
    };
  }, [measure]);

  // リサイズ時のスクロール位置補正（doc2 仕様）。
  // 画像読み込み等の些細な reflow で発火するたびに復元すると、ユーザーの scroll を
  // 巻き戻してしまうので「clientWidth が実際に変わった (= breakpoint や向き変更)」
  // 時のみ復元する。Size S の `scroll-snap-type: mandatory` は CSS 側の re-snap も
  // 効くので、この JS は M (proximity) や強制再配置の保険として機能する。
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    let lastClientWidth = el.clientWidth;
    const observer = new ResizeObserver(() => {
      if (el.clientWidth === lastClientWidth) {
        // 画像読み込み等の縦方向 reflow のみ → 位置は触らず再計測のみ
        measure();
        return;
      }
      lastClientWidth = el.clientWidth;
      const currentActive = pageStore.getValue();
      const item = el.children[currentActive] as HTMLElement | undefined;
      if (item) {
        // 中央寄せ: item の center を viewport の center に合わせる位置へスクロール。
        const targetLeft =
          item.offsetLeft + item.offsetWidth / 2 - el.clientWidth / 2;
        el.scrollTo({ left: Math.max(0, targetLeft), behavior: "auto" });
      }
      measure();
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, [pageStore, measure]);

  const scrollByStep = useCallback((direction: Direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = el.clientWidth * SCROLL_STEP_RATIO;
    el.scrollBy({
      left: direction === "next" ? delta : -delta,
      behavior: "smooth",
    });
  }, []);

  const scrollToIndex = useCallback((i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const item = el.children[i] as HTMLElement | undefined;
    if (item) {
      // 中央寄せ: scroll-snap-align: center に揃える。
      const targetLeft =
        item.offsetLeft + item.offsetWidth / 2 - el.clientWidth / 2;
      el.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });
    }
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollByStep("prev");
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollByStep("next");
      }
    },
    [scrollByStep],
  );

  // sr-only ラベルを useVisuallyHidden で CSS 不要に置き換え（charcoal の TextField 等と同パターン）。
  const { visuallyHiddenProps } = useVisuallyHidden();
  // scroller の focus-visible 状態を JS で取得（Safari 等の :focus-visible ばらつきを正規化）。
  const { focusProps: scrollerFocusProps, isFocusVisible: scrollerFocusVisible } =
    useFocusRing();

  return (
    <div
      className={className}
      data-size={size}
      data-has-gradient={hasGradient}
      data-full-width={fullWidth}
      role="region"
      aria-roledescription="carousel"
      aria-labelledby={labelId}
    >
      <span {...visuallyHiddenProps} id={labelId}>
        Carousel
      </span>

      <div className="charcoal-carousel__viewport">
        <div
          {...mergeProps(scrollerFocusProps, { onKeyDown: handleKeyDown })}
          ref={scrollerRef}
          className="charcoal-carousel__scroller"
          tabIndex={0}
          data-focus-visible={scrollerFocusVisible || undefined}
        >
          {props.items.map((item) => (
            <div
              key={item.id}
              className="charcoal-carousel__item"
              data-size={size}
            >
              {item.children}
            </div>
          ))}
        </div>

        <div
          className="charcoal-carousel__navigation"
          data-visible={showNavigationButtons}
          aria-hidden={!showNavigationButtons}
        >
          <CarouselNavigationButton
            direction="prev"
            canScroll={canPrev}
            onScroll={scrollByStep}
          />
          <CarouselNavigationButton
            direction="next"
            canScroll={canNext}
            onScroll={scrollByStep}
          />
        </div>
      </div>

      <div
        className="charcoal-carousel__indicator"
        data-visible={showIndicator}
        aria-hidden={!showIndicator}
      >
        {props.items.map((item, key) => (
          <CarouselIndicatorDot
            key={item.id}
            index={key}
            isActive={key === activeIndex}
            onSelect={scrollToIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(Carousel);
