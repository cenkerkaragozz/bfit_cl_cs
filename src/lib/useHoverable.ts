import { useEffect, useState } from "react";

/**
 * True only on pointer devices that can hover (mouse / trackpad).
 * Used to gate hover-depth motion so touch users never see a sticky
 * "hover" state after tapping.
 */
export function useHoverable() {
  const [hoverable, setHoverable] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setHoverable(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return hoverable;
}
