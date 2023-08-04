import React from "react";

export function useOutside (
  ref: React.RefObject<HTMLElement | null>,
  setDisplay: (display: boolean) => void
) {
  React.useEffect(() => {
    function handleClickOutside (event: MouseEvent) {
      const target = event.target as Node;

      if (ref.current !== null && !ref.current.contains(target)) {
        // outside
        setDisplay(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
