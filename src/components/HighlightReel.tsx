import { useEffect, useRef } from "react";
import reelVideo from "@/assets/sema-intro-reel.mp4";
import { Reveal } from "./Reveal";

export function HighlightReel() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="reel"
      className="relative w-full aspect-video md:aspect-auto md:h-[100svh] overflow-hidden bg-black"
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-contain md:object-cover"
      >
        {/* Replace with your reel. Kept minimal so poster serves as graceful fallback. */}
        <source src={reelVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-x-0 bottom-0 h-24 md:h-40 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-6 md:pb-10 text-white">
        <Reveal>
          <div className="flex items-end justify-between text-xs uppercase tracking-[0.25em]">
            <span>Highlight Reel — 2025</span>
            <span className="hidden md:inline">Selected moments from our work</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
