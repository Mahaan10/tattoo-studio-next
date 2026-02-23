import { RefObject, useEffect, useRef } from "react";

type OutsideClickHandler = () => void;

export default function useOutsideClick<
  T extends HTMLDivElement = HTMLDivElement,
>(
  handler: OutsideClickHandler,
  listenCapturing: boolean = true,
): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (typeof document === "undefined") return;

    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Node | null;

      if (!ref.current || !target) return;

      if (!ref.current.contains(target)) {
        handler();
      }
    }

    document.addEventListener(
      "pointerdown",
      handlePointerDown,
      listenCapturing,
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handlePointerDown,
        listenCapturing,
      );
    };
  }, [handler, listenCapturing]);

  return ref;
}
