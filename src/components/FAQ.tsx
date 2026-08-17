import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";

type Item = { q: string; a: string };

const items: Item[] = [
  {
    q: "What does a story-led creative agency actually do?",
    a: "We help organizations communicate what matters through strategy, creative direction and production. Whether you're launching a product, building a campaign or telling your brand's story, we start with the message before choosing the medium.",
  },
  {
    q: "We already know what we want. Can you just produce it?",
    a: "Absolutely. But if we believe a stronger approach exists, we'll tell you. Sometimes a better question leads to a better outcome.",
  },
  {
    q: "Do you only work on videos?",
    a: "No. We work across strategy, photography, film, design, animation, campaigns and communication planning. The medium always depends on the message.",
  },
  {
    q: "Can you help us before production begins?",
    a: "Yes. In fact, that's where many projects start. We can help define the message, audience, communication strategy and creative direction before any production takes place.",
  },
  {
    q: "How do you measure success?",
    a: "We believe creative should do more than look good. It should move people.\n\nDepending on the project, we track how the work performs, from reach and engagement to audience behaviour and campaign performance. We use those insights to understand what resonated, what didn't, and where the work can be strengthened.\n\nBecause delivering the work isn't always the finish line. Sometimes it's where the learning begins.",
  },
  {
    q: "How much does a project cost?",
    a: "Every project is different. After understanding your goals, scope and timeline, we'll recommend an approach and provide a tailored proposal.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="text-[#F2F0EA] px-6 md:px-12 py-32 md:py-48">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.25em] mb-10 md:mb-16">
            (05) — Frequently asked
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.03em] mb-16 md:mb-24">
            Questions,
            <br />
            <span className="italic font-normal">answered.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="border-t border-[#F2F0EA]/15">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={i} className="border-b border-[#F2F0EA]/15">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-6 py-6 md:py-8 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-start gap-4 md:gap-8">
                      <span className="font-display text-xs md:text-sm opacity-50 mt-1 md:mt-2">
                        0{i + 1}
                      </span>
                      <span className="font-display text-xl md:text-3xl lg:text-4xl leading-tight tracking-[-0.02em]">
                        {item.q}
                      </span>
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="text-2xl md:text-3xl leading-none mt-1 md:mt-2 shrink-0"
                      aria-hidden
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 md:pb-10 pl-8 md:pl-16 pr-10 max-w-3xl text-sm md:text-base text-[#F2F0EA]/70 leading-relaxed space-y-4">
                          {item.a.split("\n\n").map((p, idx) => (
                            <p key={idx}>{p}</p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
