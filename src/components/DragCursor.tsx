import { useEffect, useRef, useState, type RefObject } from "react";

/**
 * Circular follower that replaces the native cursor inside a container,
 * signalling that the content can be dragged. Fine-pointer devices only,
 * disabled under prefers-reduced-motion.
 */
export function DragCursor({
  containerRef,
  dragging,
}: {
  containerRef: RefObject<HTMLDivElement | null>;
  dragging: boolean;
}) {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef(0);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(fine && !calm);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = containerRef.current;
    if (!el) return;

    el.classList.add("cursor-none");

    const onMove = (e: PointerEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    const onEnter = (e: PointerEvent) => {
      pos.current.x = target.current.x = e.clientX;
      pos.current.y = target.current.y = e.clientY;
      setVisible(true);
    };
    const onLeave = () => setVisible(false);

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      const ring = ringRef.current;
      if (ring) {
        ring.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      el.classList.remove("cursor-none");
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, [enabled, containerRef]);

  if (!enabled) return null;

  return (
    <div
      ref={ringRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-50"
      style={{ willChange: "transform" }}
    >
      <div
        className="grid place-items-center rounded-full border border-[#F2F0EA]/40 bg-[#F2F0EA]/[0.05] backdrop-blur-[1px] transition-all duration-300 ease-out"
        style={{
          height: dragging ? 62 : 84,
          width: dragging ? 62 : 84,
          opacity: visible ? 1 : 0,
          transform: `scale(${visible ? 1 : 0.6})`,
        }}
      >
        <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.2em] text-[#F2F0EA]/70">
          <span>←</span>
          <span>{dragging ? "" : "drag"}</span>
          <span>→</span>
        </span>
      </div>
    </div>
  );
}
