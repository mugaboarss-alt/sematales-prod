import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CATEGORIES: { label: string; items: string[] }[] = [
  {
    label: "01 Strategy",
    items: [
      "Communication Strategy",
      "Campaign Strategy",
      "Brand Messaging",
      "Content Strategy",
      "Audience Understanding",
    ],
  },
  {
    label: "02 Creative Direction",
    items: [
      "Creative Direction",
      "Art Direction",
      "Brand Identity",
      "Communication Design",
      "Campaign Concepts",
    ],
  },
  {
    label: "03 Production",
    items: ["Film", "Photography", "Animation", "Content Production", "Motion Design"],
  },
  {
    label: "04 Distribution",
    items: [
      "Campaign Execution",
      "Content Rollout",
      "Social Media Management",
      "Performance Tracking",
      "Optimization",
    ],
  },
];

export function WhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const fadeOpacity = useTransform(scrollYProgress, [0.82, 1], [1, 0]);
  const fadeY = useTransform(scrollYProgress, [0.82, 1], [0, -60]);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const center = window.innerHeight / 2;
      let best = 0;
      let bestDist = Infinity;
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - center);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setActive(best);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  let counter = 0;

  return (
    <section
      id="what-we-do"
      ref={sectionRef}
      className="relative px-6 md:px-12 pt-32 md:pt-48"
    >
      <motion.div
        style={{ opacity: fadeOpacity, y: fadeY }}
        className="mx-auto max-w-6xl"
      >
        <div className="text-center text-xs uppercase tracking-[0.25em] text-black/70 mb-16 md:mb-24">
          (02) — What we do
        </div>

        {CATEGORIES.map((cat) => (
          <div
            key={cat.label}
            className="md:grid md:grid-cols-[minmax(0,14rem)_1fr] md:gap-12 pb-24 md:pb-36"
          >
            <div className="md:sticky md:top-32 md:self-start h-fit mb-6 md:mb-0">
              <span className="text-[12px] md:text-[13px] uppercase tracking-[0.25em] text-black/35">
                {cat.label}
              </span>
            </div>

            <ul>
              {cat.items.map((item) => {
                const idx = counter++;
                const isActive = idx === active;
                return (
                  <li
                    key={item}
                    ref={(el) => {
                      itemRefs.current[idx] = el;
                    }}
                    style={{
                      transition:
                        "opacity 1.3s cubic-bezier(0.22,1,0.36,1), font-variation-settings 1.3s ease",
                      opacity: isActive ? 1 : 0.3,
                    }}
                    className="font-display text-black text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.25rem] leading-none tracking-[-0.04em] font-semibold py-3 md:py-4"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </motion.div>

      <div className="h-[18vh]" aria-hidden />
    </section>
  );
}
