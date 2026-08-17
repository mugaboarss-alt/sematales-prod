import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { projects } from "@/lib/projects";

const bigWords = ["STORIES", "WE'VE TOLD"];

export function FeaturedWork() {
  return (
    <section
      id="work"
      className="text-[#F2F0EA] py-28 md:py-40 overflow-x-clip"
    >
      <div className="px-6 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="text-center text-xs uppercase tracking-[0.25em] text-[#F2F0EA] mb-16 md:mb-24">
              (03) — Latest Work
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-20 md:gap-y-32">
            {projects.map((p, i) => {
              const right = i % 2 === 1;
              const word = bigWords[i];
              return (
                <div
                  key={p.slug}
                  className={
                    right
                      ? "md:col-start-2 md:mt-32 lg:mt-48"
                      : "md:col-start-1"
                  }
                >
                  {word ? (
                    <Reveal>
                      <div
                        className="font-display leading-[0.85] tracking-[-0.02em] text-[10vw] md:text-[6vw] lg:text-[5vw] text-left mb-4 md:mb-6"
                      >
                        {word}
                      </div>
                    </Reveal>
                  ) : null}

                  <Reveal>
                    <Link
                      to="/work/$slug"
                      params={{ slug: p.slug }}
                      className="group block"
                    >
                      <article>
                        <figure className="overflow-hidden bg-[#F2F0EA]/[0.06]">
                          <img
                            src={p.cover}
                            alt={`${p.name} — ${p.description}`}
                            loading="lazy"
                            className="w-full aspect-[4/3] object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                          />
                        </figure>

                        <div className="pt-6 md:pt-8">
                          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl leading-none tracking-[-0.03em]">
                            {p.name}
                          </h3>
                          <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-[#F2F0EA]/45">
                            {p.client}
                            {p.year ? ` · ${p.year}` : ""}
                          </p>
                          <div className="mt-5 text-[11px] uppercase tracking-[0.25em] text-[#F2F0EA]/45">
                            [{p.tag}]
                          </div>
                          <p className="mt-3 text-sm md:text-base leading-relaxed text-[#F2F0EA]/65 max-w-prose">
                            {p.description}
                          </p>
                          <div className="mt-6 text-[11px] uppercase tracking-[0.25em] text-[#F2F0EA]/40 transition-colors duration-500 group-hover:text-[#F2F0EA]">
                            View project →
                          </div>
                        </div>
                      </article>
                    </Link>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
