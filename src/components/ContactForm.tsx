import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

const WORDS = ["stories", "ideas", "something", "future"];

function RotatingWord() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % WORDS.length),
      3000
    );
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  if (reduceMotion) return <span className="italic font-normal">{WORDS[0]}</span>;

  return (
    <span className="relative inline-block align-baseline">
      <span className="invisible italic font-normal">something</span>
      <AnimatePresence mode="sync">
        <motion.span
          key={index}
          className="absolute left-0 top-0 whitespace-nowrap italic font-normal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.1, ease: "easeOut" } }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: "easeIn" } }}
        >
          {WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function ContactForm({ modalOnly = false }: { modalOnly?: boolean } = {}) {
  if (modalOnly) return null;

  return (
    <section
      id="contact"
      className="text-[#F2F0EA] px-6 md:px-12 pt-32 md:pt-48 pb-24 md:pb-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.25em] text-[#F2F0EA]/45 mb-12 md:mb-20">
            (06) — Start a conversation
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-display text-left text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.92] tracking-[-0.04em]">
            <span className="block">Let's</span>
            <span className="block">create</span>
            <span className="block">
              <RotatingWord />
            </span>
            <span className="block">together.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 md:mt-24">
            <div className="text-xs uppercase tracking-[0.25em] text-[#F2F0EA]/45 mb-5 md:mb-7">
              Contact us.
            </div>
            <a
              href="mailto:hello@sematales.rw"
              className="font-display inline-block text-2xl sm:text-4xl md:text-6xl lg:text-7xl leading-none tracking-[-0.03em] underline underline-offset-[0.18em] decoration-[0.04em] decoration-[#F2F0EA]/40 transition-colors duration-500 hover:decoration-[#F2F0EA] break-all sm:break-normal"
            >
              hello@sematales.rw
            </a>

            <div className="mt-12 md:mt-16">
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event("open-inquiry"))}
                className="group inline-flex items-center gap-4 border border-[#F2F0EA] rounded-full pl-6 pr-2 py-2 text-[11px] uppercase tracking-[0.25em] transition-colors hover:bg-[#F2F0EA] hover:text-[#171714]"
              >
                Write us a note
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F0EA] text-[#171714] transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
