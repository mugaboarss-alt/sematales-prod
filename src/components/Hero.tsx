import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import reelVideo from "@/assets/sema-intro-reel.mp4";
import { CursorTrail } from "@/components/CursorTrail";

const WORDS = ["STUDIO", "AGENCY", "COLLECTIVE"];
const EASE = [0.22, 1, 0.36, 1] as const;
const EXPAND_EASE = [0.83, 0, 0.17, 1] as const;

function CyclingWord({ frozen }: { frozen: boolean }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (frozen) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, 1800);
    return () => window.clearInterval(id);
  }, [frozen]);

  if (frozen) return <span>{WORDS[0]}</span>;

  return (
    <span className="relative inline-block align-baseline text-right">
      <span className="invisible">COLLECTIVE</span>
      <AnimatePresence mode="sync">
        <motion.span
          key={index}
          className="absolute right-0 top-0 whitespace-nowrap"
          initial={{ opacity: 0, filter: "blur(14px)" }}
          animate={{ opacity: 1, filter: "blur(0px)", transition: { duration: 0.9, ease: "easeOut" } }}
          exit={{ opacity: 0, filter: "blur(14px)", transition: { duration: 0.7, ease: "easeIn" } }}
        >
          {WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Lines({ lines, delay = 0 }: { lines: string[]; delay?: number }) {
  return (
    <>
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden">
          <motion.span
            className="block whitespace-nowrap"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1, ease: EASE, delay: delay + i * 0.14 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </>
  );
}

type Phase = "load" | "expand" | "done";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>(reduceMotion ? "done" : "load");
  const [progress, setProgress] = useState(reduceMotion ? 100 : 0);
  const [muted, setMuted] = useState(true);
  const [vp, setVp] = useState(() => ({
  w: typeof window !== "undefined" ? window.innerWidth : 1280,
  h: typeof window !== "undefined" ? window.innerHeight : 800,}));
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const measure = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // counter
  useEffect(() => {
    if (phase !== "load") return;
    const start = performance.now();
    const duration = 5400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setProgress(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setPhase("expand");
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [phase]);

  // scroll lock while intro plays
  useEffect(() => {
    if (phase === "done") return;
    const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
    document.body.style.overflow = "hidden";
    lenis?.stop();
    window.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [phase]);

  // settle
  useEffect(() => {
    if (phase !== "expand") return;
    const id = window.setTimeout(() => setPhase("done"), 1250);
    return () => window.clearTimeout(id);
  }, [phase]);

  useEffect(() => {
    if (phase !== "done") return;
    (window as unknown as { __introDone?: boolean }).__introDone = true;
    window.dispatchEvent(new Event("intro-done"));
  }, [phase]);

  // video stays paused on its first frame through the ∑preloader,
  // starts exactly when it becomes fullscreen
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (phase === "done") {
      void v.play().catch(() => {});
    }
  }, [phase]);

  const loading = phase === "load";

  // small box geometry in px so the slide tracks progress frame-by-frame
  const boxW = Math.min(320, vp.w * 0.42);
  const boxH = (boxW * 9) / 16;
  const restBottom = vp.h * 0.07 + 56;
  const boxLeft = (0.06 + (progress / 100) * 0.62) * (vp.w - boxW);
  const boxTop = vp.h - restBottom - boxH;

  const target = loading
    ? { left: boxLeft, top: boxTop, width: boxW, height: boxH }
    : { left: 0, top: 0, width: vp.w, height: vp.h };

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[#000000]">
      <CursorTrail />

      {/* peeling black curtain */}
      <AnimatePresence>
        {phase !== "done" && (
          <motion.div
            key="curtain"
            className="fixed left-0 top-0 z-[70] w-full bg-black"
            initial={{ height: "100svh" }}
            animate={{ height: loading ? "100svh" : "0svh" }}
            transition={{ duration: 1.2, ease: EXPAND_EASE }}
            aria-hidden
          />
        )}
      </AnimatePresence>

      {/* the one and only video element — small box → fullscreen */}
      <motion.div
        className={
          phase === "done"
            ? "absolute inset-0 z-0 overflow-hidden bg-black"
            : "fixed z-[75] overflow-hidden bg-black"
        }
        animate={phase === "done" ? { left: 0, top: 0, width: "100%", height: "100%" } : target}
        transition={loading ? { duration: 0 } : { duration: 1.2, ease: EXPAND_EASE }}
      >
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          className="h-full w-full object-cover"
        >
          <source src={reelVideo} type="video/mp4" />
        </video>
      </motion.div>

      {/* sound toggle, once settled */}
      {phase === "done" && (
        <motion.button
          type="button"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="absolute bottom-6 right-6 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-foreground/25 bg-background/20 text-foreground/80 backdrop-blur-sm transition-colors hover:border-foreground/60 hover:text-foreground md:bottom-8 md:right-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </motion.button>
      )}

      {/* preloader chrome */}
      <AnimatePresence>
        {phase !== "done" && (
          <motion.div
            key="chrome"
            className="fixed inset-0 z-[80] text-foreground"
            initial={{ opacity: 1 }}
            animate={{ opacity: loading ? 1 : 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="absolute left-4 top-5 right-4 sm:left-6 md:left-12 md:top-8 max-w-full font-display font-bold uppercase leading-[0.98] tracking-[-0.04em] text-[clamp(1.1rem,4.5vw,4.2rem)]">
              <Lines lines={["WE ARE A STORY-LED CREATIVE"]} delay={0.15} />
            </div>

            <div className="absolute right-4 top-[28%] sm:right-6 md:right-12 max-w-[calc(100%-2rem)] text-right font-display font-bold uppercase tracking-[-0.04em] text-[clamp(1.5rem,6.5vw,5rem)]">
              <CyclingWord frozen={!!reduceMotion} />
            </div>

            <div className="absolute right-4 bottom-5 sm:right-6 md:right-12 md:bottom-8 font-display font-bold tabular-nums leading-none tracking-[-0.04em] text-[clamp(1.5rem,5.5vw,4rem)]">
              {progress}
              <span className="text-[0.4em] align-super">%</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
