import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const COLORS = [
  "#000000",
  "#000000",
  "#121212",
  "#121212",
  "#FFFFFF",
  "#F8F8F5",
  "#F8F8F5",
  "#101010",
  "#121212",
  "#151513",
  "#171714",
  "#171714",
];
const FALLBACK = [
  0, 0.06, 0.16, 0.26, 0.36, 0.46, 0.54, 0.58, 0.7, 0.84, 0.93, 1,
];



/**
 * Full-page fixed backdrop whose color interpolates with scroll position,
 * so sections melt into one another instead of cutting between blocks.
 */
export function ScrollAtmosphere() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const [stops, setStops] = useState<number[]>(FALLBACK);

  useEffect(() => {
    const measure = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;

      const at = (id: string, bias: number) => {
        const el = document.getElementById(id);
        if (!el) return null;
        const top = el.getBoundingClientRect().top + window.scrollY;
        return Math.min(
          1,
          Math.max(0, (top - window.innerHeight * bias) / total)
        );
      };

      const phil = at("philosophy", 0.6);
      const wwd = at("what-we-do", 0.45);
      const proc = at("process", 0.35);
      const work = at("work", 0.4);
      const faq = at("faq", 0.4);
      const contact = at("contact", -0.45);
      if (
        phil == null ||
        wwd == null ||
        proc == null ||
        work == null ||
        faq == null ||
        contact == null
      )
        return;

      // Hold #121212 until just before What We Do, then crossfade quickly.
      const philHold = Math.max(phil, wwd - (wwd - phil) * 0.1);
      // Hold the light cream through the Process content, then crossfade to
      // dark in a short window just before Latest Work begins.
      const procHold = Math.max(proc, work - (work - proc) * 0.18);
      const warm = faq + (contact - faq) * 0.8;
      const next = [
        0,
        Math.max(0.02, phil * 0.5),
        phil,
        philHold,
        wwd,
        proc,
        procHold,
        work,
        faq,
        warm,
        contact,
        1,
      ];

      for (let i = 1; i < next.length; i++) {
        if (next[i] <= next[i - 1]) next[i] = next[i - 1] + 0.0001;
      }
      setStops(next);

    };

    measure();
    const t = window.setTimeout(measure, 600);
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", measure);
      ro.disconnect();
      clearTimeout(t);
    };
  }, []);

  const safeStops = stops.length === COLORS.length ? stops : FALLBACK;
  const background = useTransform(scrollYProgress, safeStops, COLORS);
  const haloOpacity = useTransform(
    scrollYProgress,
    [safeStops[3], safeStops[4], safeStops[5]],
    reduceMotion ? [0, 0.12, 0] : [0, 0.35, 0]
  );

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden>
      <motion.div className="absolute inset-0" style={{ background }} />
      {!reduceMotion && (
        <motion.div
          className="absolute inset-0 blur-3xl"
          style={{
            opacity: haloOpacity,
            background:
              "radial-gradient(120% 70% at 50% 100%, rgba(255,255,255,0.22), rgba(255,255,255,0) 70%)",
          }}
        />
      )}
    </div>
  );
}
