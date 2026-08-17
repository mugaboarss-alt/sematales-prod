import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Soft "liquid light" trail that follows the pointer.
 * Purely decorative: pointer-events none, sits behind hero content.
 */
export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    // No persistent cursor on touch-only devices — skip entirely.
    const fine = window.matchMedia("(pointer: fine)");
    if (!fine.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = Math.max(1, Math.floor(canvas.clientWidth * dpr));
      const h = Math.max(1, Math.floor(canvas.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };
    resize();

    const target = { x: -9999, y: -9999 };
    const smooth = { x: -9999, y: -9999 };
    let active = false;

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      target.x = (e.clientX - rect.left) * dpr;
      target.y = (e.clientY - rect.top) * dpr;
      if (!active) {
        smooth.x = target.x;
        smooth.y = target.y;
        active = true;
      }
    };
    const onLeave = () => {
      active = false;
    };

    const parent = canvas.parentElement ?? window;
    parent.addEventListener("pointermove", onMove as EventListener);
    parent.addEventListener("pointerleave", onLeave as EventListener);
    window.addEventListener("resize", resize);

    let raf = 0;
    const start = performance.now();

    const render = () => {
      resize();
      const t = (performance.now() - start) / 1000;

      // fade previous frame instead of clearing → trail
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.055)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      if (active) {
        smooth.x += (target.x - smooth.x) * 0.12;
        smooth.y += (target.y - smooth.y) * 0.12;

        const r = 90 * dpr;
        const hue = (t * 26) % 360;
        const grad = ctx.createRadialGradient(
          smooth.x,
          smooth.y,
          0,
          smooth.x,
          smooth.y,
          r
        );
        grad.addColorStop(0, `hsla(${hue}, 85%, 82%, 0.30)`);
        grad.addColorStop(0.45, `hsla(${(hue + 55) % 360}, 80%, 74%, 0.16)`);
        grad.addColorStop(1, "hsla(0, 0%, 100%, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(smooth.x, smooth.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      parent.removeEventListener("pointermove", onMove as EventListener);
      parent.removeEventListener("pointerleave", onLeave as EventListener);
      window.removeEventListener("resize", resize);
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ filter: "blur(26px)", opacity: 0.9 }}
    />
  );
}
