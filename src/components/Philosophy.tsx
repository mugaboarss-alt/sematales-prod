import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./Reveal";

const CYCLE_WORDS = ["to speak.", "to say.", "to tell."];

const SUBHEADING = "Seems fitting? That’s what we’re here to do...";

const BODY =
  "But first, we uncover the message already at the heart of your work. Then we explore the best way to express it, across strategy, design, film and whatever medium the work demands, so it doesn’t just communicate, it connects.";

function ScrollWord({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = 0.15 + (index / total) * 0.45;
  const end = start + 0.08;
  const opacity = useTransform(progress, [start, end], [0.22, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {word}&nbsp;
    </motion.span>
  );
}

export function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const words = BODY.split(" ");

  return (
    <section
      ref={ref}
      id="philosophy"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 py-32 md:py-48"
    >
      <Reveal>
        <div className="text-xs uppercase tracking-[0.25em] mb-10 md:mb-16">
          (01) — Our philosophy
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.02em] max-w-[16em] mx-auto">
          In Swahili, Sema means{" "}
          <span className="relative inline-block align-baseline whitespace-nowrap">
            {/* sizing ghost keeps the line height stable */}
            <span className="invisible">“to speak.”</span>
            {CYCLE_WORDS.map((w, i) => (
              <span
                key={w}
                className="word-cycle absolute inset-0 flex items-center justify-center"
                style={{ animationDelay: `${(i * 7.35) / 3}s` }}
              >
                “{w}”
              </span>
            ))}
          </span>
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mt-12 md:mt-16 mb-4 md:mb-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-center font-bold">
          {SUBHEADING}
        </p>
      </Reveal>

      <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-center">
        {words.map((word, i) => (
          <ScrollWord
            key={`${word}-${i}`}
            word={word}
            index={i}
            total={words.length}
            progress={scrollYProgress}
          />
        ))}
      </p>
    </section>
  );
}
