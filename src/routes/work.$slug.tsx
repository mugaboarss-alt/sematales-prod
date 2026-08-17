import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { getProjectBySlug, projects, type Project } from "@/lib/projects";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Sema Tales" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.name} — Sema Tales`;
    const description = project.description;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:image", content: project.cover },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: project.cover },
      ],
    };
  },
  component: ProjectPage,
  notFoundComponent: ProjectNotFound,
});

const RATIOS = [
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[3/4]",
  "aspect-[16/9]",
  "aspect-[4/3]",
  "aspect-[4/3]",
];

const SPANS = [

  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-8",
  "md:col-span-6",
  "md:col-span-6",
];

function Gallery({
  label,
  images,
  name,
  offset,
}: {
  label: string;
  images: string[];
  name: string;
  offset: number;
}) {
  if (images.length === 0) return null;
  return (
    <section className="px-6 md:px-12 pb-20 md:pb-28">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.25em] text-black/40 mb-8 md:mb-12">
            {label}
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start">
          {images.map((src, i) => (
            <div key={src + i} className={`min-w-0 ${SPANS[i % SPANS.length]}`}>
              <Reveal>
                <figure className="overflow-hidden bg-black/[0.04]">
                  <img
                    src={src}
                    alt={`${name} — image ${offset + i + 1}`}
                    loading="lazy"
                    className={`w-full object-cover ${RATIOS[i % RATIOS.length]}`}
                  />
                </figure>
              </Reveal>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };

  useEffect(() => {
    const lenis = (window as any).lenis;
    if (lenis?.scrollTo) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [project.slug]);

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  const [firstPara, ...restParas] = project.fullDescription;
  const half = Math.ceil(project.gallery.length / 2);
  const galleryA = project.gallery.slice(0, half);
  const galleryB = project.gallery.slice(half);

  return (
    <div className="bg-[#F4F1EB] text-black min-h-screen">
      <SmoothScroll />
      <Nav />
      <main>
        {/* Header */}
        <section className="px-6 md:px-12 pt-32 md:pt-40 pb-12 md:pb-16">
          <div className="mx-auto max-w-[1600px]">
            <Reveal>
              <Link
                to="/"
                hash="work"
                className="text-xs uppercase tracking-[0.25em] text-black/60 hover:text-black transition-colors"
              >
                ← Back to work
              </Link>
            </Reveal>
            <Reveal>
              <div className="mt-10 md:mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#ff5a3c]">
                <span>[{project.tag}]</span>
                {project.year && <span className="text-black/40">· {project.year}</span>}
              </div>
            </Reveal>
            <Reveal>
              <h1 className="mt-6 font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-[-0.04em]">
                {project.name}
              </h1>
            </Reveal>
            {project.tagline && (
              <Reveal>
                <p className="mt-8 font-display text-2xl md:text-4xl italic text-black/80 max-w-3xl leading-tight tracking-[-0.02em]">
                  {project.tagline}
                </p>
              </Reveal>
            )}
            <Reveal>
              <dl className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 border-t border-black/10 pt-8">
                <div>
                  <dt className="text-xs uppercase tracking-[0.25em] text-black/40 mb-3">Client</dt>
                  <dd className="text-base md:text-lg">{project.client}</dd>
                </div>
                {project.year && (
                  <div>
                    <dt className="text-xs uppercase tracking-[0.25em] text-black/40 mb-3">Year</dt>
                    <dd className="text-base md:text-lg">{project.year}</dd>
                  </div>
                )}
                {project.outcome && (
                  <div>
                    <dt className="text-xs uppercase tracking-[0.25em] text-black/40 mb-3">Impact</dt>
                    <dd className="text-sm md:text-base leading-relaxed">{project.outcome}</dd>
                  </div>
                )}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 md:px-12 pb-20 md:pb-28">
          <div className="mx-auto max-w-[1600px]">
            <Reveal>
              <figure className="overflow-hidden bg-black/[0.04]">
                <img
                  src={project.cover}
                  alt={`${project.name} — cover`}
                  className="w-full h-auto aspect-[16/9] object-cover"
                />
              </figure>
            </Reveal>
          </div>
        </section>

        {/* Text block A — name / description + services */}
        <section className="px-6 md:px-12 pb-20 md:pb-28">
          <div className="mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 border-t border-black/10 pt-12 md:pt-16">
            <Reveal className="md:col-span-4">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-black/40 mb-4">
                  The project
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.03em]">
                  {project.name}
                </h2>
              </div>
            </Reveal>
            <Reveal className="md:col-span-7 md:col-start-6">
              <div>
                <p className="text-lg md:text-2xl leading-relaxed md:leading-snug tracking-[-0.01em]">
                  {firstPara ?? project.description}
                </p>
                <div className="mt-10 md:mt-12 border-t border-black/10 pt-6">
                  <div className="text-xs uppercase tracking-[0.25em] text-black/40 mb-4">
                    Services
                  </div>
                  <ul className="space-y-1 text-base md:text-lg text-black/75">
                    {project.scope.map((s: string) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Gallery A */}
        <Gallery
          label="Gallery"
          images={galleryA}
          name={project.name}
          offset={0}
        />

        {/* Text block B — remaining copy */}
        {restParas.length > 0 && (
          <section className="px-6 md:px-12 py-20 md:py-28">
            <div className="mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 border-t border-black/10 pt-12 md:pt-16">
              <Reveal className="md:col-span-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-black/40 mb-4">
                    The work
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl leading-[0.95] tracking-[-0.03em]">
                    {project.client}
                  </h2>
                </div>
              </Reveal>
              <Reveal className="md:col-span-7 md:col-start-6 space-y-6">
                <div>
                  {restParas.map((para: string, i: number) => (
                    <p
                      key={i}
                      className="text-base md:text-lg leading-relaxed text-black/75"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {/* Gallery B */}
        <Gallery
          label="More imagery"
          images={galleryB}
          name={project.name}
          offset={galleryA.length}
        />

        {/* Next project */}
        <section className="px-6 md:px-12 pb-24 md:pb-32 border-t border-black/10 pt-16 md:pt-24">
          <div className="mx-auto max-w-[1600px]">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-black/40 mb-6">
                Next project
              </div>
              <Link
                to="/work/$slug"
                params={{ slug: next.slug }}
                className="group inline-flex items-baseline gap-6 hover:opacity-70 transition-opacity"
              >
                <span className="font-display text-5xl md:text-7xl lg:text-8xl leading-none tracking-[-0.03em]">
                  {next.name}
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-black/60 group-hover:text-black transition-colors">
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer tone="dark" />
    </div>
  );
}

function ProjectNotFound() {
  return (
    <div className="bg-[#F4F1EB] text-black min-h-screen">
      <Nav />
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-black/40 mb-6">404</div>
          <h1 className="font-display text-5xl md:text-7xl mb-8">Project not found</h1>
          <Link
            to="/"
            hash="work"
            className="text-xs uppercase tracking-[0.25em] underline underline-offset-4"
          >
            Back to selected work
          </Link>
        </div>
      </main>
      <Footer tone="dark" />
    </div>
  );
}
