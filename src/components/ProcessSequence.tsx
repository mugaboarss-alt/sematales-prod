import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";

type Step = {
  key: string;
  title: string;
  tagline: string;
  body: string;
};

const steps: Step[] = [
  {
    key: "listen",
    title: "Listen",
    tagline: "Before we speak, we listen.",
    body: "We ask more questions than we offer answers. Before a single idea takes shape, we sit with the client's world, their message, their audience, their goals, until we actually understand what needs to be said, and why it matters.",
  },
  {
    key: "shape",
    title: "Shape",
    tagline: "Turn understanding into direction.",
    body: "We define the strategy, creative approach and communication path that will guide the work.",
  },
  {
    key: "make",
    title: "Make",
    tagline: "Bring ideas into reality.",
    body: "Through film, photography, animation, design and content production, we create work that carries the message.",
  },
  {
    key: "move",
    title: "Move",
    tagline: "Help the work reach people.",
    body: "We support launches, distribution and campaigns that help creative work connect with the right audience.",
  },
];

export function ProcessSequence() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="process" className="text-black">
      <div className="px-6 md:px-12 pt-12 md:pt-16">
        <Reveal>
          <div className="text-center text-xs uppercase tracking-[0.25em] opacity-70">
            <span>(02) — Our process</span>
          </div>
        </Reveal>
      </div>

      <div className="px-6 md:px-12 py-16 md:py-24">
        <Reveal>
        <ul className="divide-y divide-black/15 border-y border-black/15">
          {steps.map((step, i) => {
            const isActive = active === step.key;
            const dimmed = active !== null && !isActive;
            return (
              <li
                key={step.key}
                onMouseEnter={() => setActive(step.key)}
                onMouseLeave={() => setActive(null)}
                onClick={() =>
                  setActive((prev) => (prev === step.key ? null : step.key))
                }
                className="cursor-pointer select-none"
              >
                <motion.div
                  animate={{ opacity: dimmed ? 0.25 : 1 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-12 gap-x-6 gap-y-6 items-start lg:items-center py-8 md:py-10"
                >
                  <div className="col-span-2 lg:col-span-1 font-display text-sm md:text-base opacity-60 pt-2 lg:pt-0">
                    0{i + 1}
                  </div>
                  <div className="col-span-10 lg:col-span-5">
                    <h3 className="font-display font-medium uppercase leading-none tracking-[-0.02em] text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                      {step.title}
                    </h3>
                  </div>
                  <div className="col-start-3 col-span-10 lg:col-start-auto lg:col-span-6">
                    <AnimatePresence mode="wait">
                      {isActive ? (
                        <motion.div
                          key="open"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="max-w-xl"
                        >
                          <p className="font-display text-xl md:text-2xl leading-snug mb-3">
                            {step.tagline}
                          </p>
                          <p className="text-sm md:text-base text-black/70 leading-relaxed">
                            {step.body}
                          </p>
                        </motion.div>
                      ) : (
                        <motion.p
                          key="closed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-sm md:text-base text-black/50 max-w-md"
                        >
                          {step.tagline}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </li>
            );
          })}
        </ul>
        </Reveal>

      </div>
    </section>
  );
}
