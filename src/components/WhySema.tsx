import { Reveal } from "./Reveal";

export function WhySema() {
  return (
    <section id="philosophy" className="border-t border-white px-6 md:px-12 py-32 md:py-48">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.25em] mb-10 md:mb-16">
            (04) — Why Sema
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.03em]">
            <span className="italic font-normal">Sema</span> means to speak.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 md:mt-14 max-w-2xl text-base md:text-lg leading-relaxed">
            Every organization, brand and idea has something worth saying.
            Our role is to help you find the right words, shape the right
            message and create work that allows your voice to be heard.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
