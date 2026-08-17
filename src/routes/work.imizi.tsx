import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Reveal } from "@/components/Reveal";
import imiziAsset from "@/assets/imizi-space.jpg";
import img1 from "@/assets/imizi/ARS00317-HDR.jpg";
import img2 from "@/assets/imizi/ARS00320-HDR.jpg";
import img3 from "@/assets/imizi/ARS00329-HDR.jpg";
import img4 from "@/assets/imizi/ARS00336-HDR.jpg";
import img5 from "@/assets/imizi/ARS00354-HDR.jpg";
import img6 from "@/assets/imizi/ARS00357-HDR.jpg";
import img7 from "@/assets/imizi/ARS00375-HDR.jpg";
import img8 from "@/assets/imizi/ARS00377.jpg";
import img9 from "@/assets/imizi/ARS00441-HDR.jpg";
import img10 from "@/assets/imizi/ARS00447-HDR.jpg";
import heroImg from "@/assets/imizi/ARS00375-HDR.jpg";

// ---------- Gallery tiles ----------
type Tile = { src: string; alt: string; ratio: number };

const tiles: Tile[] = [
  { src: img1, alt: "Imizi — lounge under woven pendants", ratio: 3 / 4 },
  { src: img2, alt: "Imizi — daybed and geometric wall piece", ratio: 3 / 4 },
  { src: img3, alt: "Imizi — shelf detail with vinyl and books", ratio: 3 / 4 },
  { src: img4, alt: "Imizi — booth by the green window", ratio: 3 / 4 },
  { src: img5, alt: "Imizi — signage and library wall", ratio: 4 / 5 },
  { src: img6, alt: "Imizi — banquette and dining table", ratio: 3 / 4 },
  { src: img7, alt: "Imizi — Forest Rum on the back bar", ratio: 3 / 4 },
  { src: img8, alt: "Imizi — bar and stools", ratio: 3 / 4 },
  { src: img9, alt: "Imizi — lounge with patterned rug", ratio: 3 / 4 },
  { src: img10, alt: "Imizi — reading corner detail", ratio: 4 / 5 },
];

export const Route = createFileRoute("/work/imizi")({
  head: () => ({
    meta: [
      { title: "Imizi — Sema Tales" },
      { name: "description", content: "Communicating a space through photography — a visual library for Imizi." },
      { property: "og:title", content: "Imizi — Sema Tales" },
      {
        property: "og:description",
        content: "Communicating a space through photography — a visual library for Imizi.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: imiziAsset },
      { name: "twitter:image", content: imiziAsset },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ImiziCaseStudy,
});

function ImiziCaseStudy() {
  useEffect(() => {
    const lenis = (window as unknown as { lenis?: { scrollTo: (t: number, o?: unknown) => void } }).lenis;
    if (lenis?.scrollTo) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, []);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextTile = useCallback(() => setLightboxIndex((i) => (i === null ? null : (i + 1) % tiles.length)), []);
  const prevTile = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + tiles.length) % tiles.length)),
    [],
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextTile();
      if (e.key === "ArrowLeft") prevTile();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, nextTile, prevTile]);

  const galleryA = tiles.slice(0, 5);
  const galleryB = tiles.slice(5);

  return (
    <div className="bg-[#F4F1EB] text-black min-h-screen">
      <SmoothScroll />
      <Nav />
      <main>
        {/* 1. Header */}
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
              <h1 className="mt-10 md:mt-16 font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-[-0.04em]">
                Imizi
              </h1>
            </Reveal>

            <Reveal>
              <dl className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 border-t border-black/10 pt-8">
                <div>
                  <dt className="text-xs uppercase tracking-[0.25em] text-black/40 mb-3">Client</dt>
                  <dd className="text-base md:text-lg">Imizi</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.25em] text-black/40 mb-3">Year</dt>
                  <dd className="text-base md:text-lg">2026</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.25em] text-black/40 mb-3">Scope</dt>
                  <dd className="text-base md:text-lg">Photography, Brand Storytelling</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </section>

        {/* 2. Hero image */}
        <section className="px-6 md:px-12 pb-20 md:pb-28">
          <div className="mx-auto max-w-[1600px]">
            <Reveal>
              <div className="relative w-full overflow-hidden bg-black/[0.04] aspect-[16/9]">
                <img
                  src={heroImg}
                  alt="Imizi — Forest Rum on the back bar"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3. Text block A — the project + services */}
        <section className="px-6 md:px-12 pb-20 md:pb-28">
          <div className="mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 border-t border-black/10 pt-12 md:pt-16">
            <Reveal className="md:col-span-4">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-black/40 mb-4">The outcome</div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.03em]">
                  Imizi
                </h2>
              </div>
            </Reveal>
            <Reveal className="md:col-span-7 md:col-start-6">
              <div>
                <p className="text-lg md:text-2xl leading-relaxed md:leading-snug tracking-[-0.01em]">
                  A visual library that helps guests connect with Imizi before they ever step through the door.
                </p>
                <div className="mt-10 md:mt-12 border-t border-black/10 pt-6">
                  <div className="text-xs uppercase tracking-[0.25em] text-black/40 mb-4">Services</div>
                  <p className="text-base md:text-lg text-black/75">Photography, Brand Storytelling</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 4. Gallery A */}
        <MasonryGallery label="Gallery" tiles={galleryA} offset={0} onOpen={openLightbox} />

        {/* 5. Text block B — the brief */}
        <section className="px-6 md:px-12 py-20 md:py-28">
          <div className="mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 border-t border-black/10 pt-12 md:pt-16">
            <Reveal className="md:col-span-4">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-black/40 mb-4">Brief</div>
                <h2 className="font-display text-4xl md:text-5xl leading-[0.95] tracking-[-0.03em]">Imizi</h2>
              </div>
            </Reveal>
            <Reveal className="md:col-span-7 md:col-start-6">
              <div>
                <p className="text-lg md:text-2xl leading-relaxed md:leading-snug tracking-[-0.01em] whitespace-pre-line">
                  A place that feels like an extension of the spirit itself.
                  Through light, texture, detail and atmosphere, these photographs capture the quiet character of the IMIZI Residency, inviting you to feel the space before you ever step into it.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 6. Gallery B */}
        {galleryB.length > 0 && (
          <MasonryGallery
            label="More from the project"
            tiles={galleryB}
            offset={galleryA.length}
            onOpen={openLightbox}
          />
        )}

        {/* 7. CTA */}
        <section className="border-t border-black/10 px-6 md:px-12 py-32 md:py-48">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.04em]">
                Have something
                <br />
                worth <span className="italic font-normal">saying?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 md:mt-10 text-lg md:text-xl text-black/70">Let&apos;s bring your message to life.</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-12 md:mt-16 flex justify-center">
                <button
                  onClick={() => window.dispatchEvent(new Event("open-inquiry"))}
                  className="group inline-flex items-center gap-4 border border-black rounded-full pl-6 pr-2 py-2 text-sm uppercase tracking-[0.25em] transition-colors hover:bg-black hover:text-white"
                >
                  Start the conversation
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:translate-x-1 group-hover:bg-white group-hover:text-black">
                    →
                  </span>
                </button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 8. Close */}
        <section className="px-6 md:px-12 pb-24 md:pb-32">
          <div className="mx-auto max-w-[1600px] flex items-center justify-between text-xs uppercase tracking-[0.25em] text-black/50">
            <Link to="/" hash="work" className="hover:text-black transition-colors">
              ← Back to selected work
            </Link>
            <Link to="/" className="hover:text-black transition-colors">
              Home
            </Link>
          </div>
        </section>
      </main>
      <ContactForm modalOnly />
      <Footer tone="dark" />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox tile={tiles[lightboxIndex]} onClose={closeLightbox} onNext={nextTile} onPrev={prevTile} />
        )}
      </AnimatePresence>
    </div>
  );
}

// ---------- Asymmetric masonry gallery ----------
const SPANS = ["md:col-span-7", "md:col-span-5", "md:col-span-4", "md:col-span-8", "md:col-span-6", "md:col-span-6"];

function MasonryGallery({
  label,
  tiles: items,
  offset,
  onOpen,
}: {
  label: string;
  tiles: Tile[];
  offset: number;
  onOpen: (i: number) => void;
}) {
  const [isTouch, setIsTouch] = useState(true);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false, onTile: false });

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  const handleMove = (e: React.MouseEvent) => {
    if (isTouch) return;
    setCursor((c) => ({ ...c, x: e.clientX, y: e.clientY, visible: true }));
  };

  return (
    <section className="px-6 md:px-12 pb-20 md:pb-28">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.25em] text-black/40 mb-8 md:mb-12">{label}</div>
        </Reveal>
        <div
          onMouseMove={handleMove}
          onMouseLeave={() => setCursor((c) => ({ ...c, visible: false, onTile: false }))}
          className={`grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start ${!isTouch ? "md:cursor-none" : ""}`}
        >
          {items.map((tile, i) => (
            <div key={i} className={`min-w-0 ${SPANS[i % SPANS.length]}`}>
              <MasonryTile
                tile={tile}
                index={i}
                onOpen={() => onOpen(offset + i)}
                onTileEnter={() => setCursor((c) => ({ ...c, onTile: true }))}
                onTileLeave={() => setCursor((c) => ({ ...c, onTile: false }))}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom circular follower cursor */}
      {!isTouch && cursor.visible && (
        <div
          aria-hidden
          className="pointer-events-none fixed z-40 hidden md:flex items-center justify-center rounded-full bg-black text-[#F4F1EB] text-[10px] uppercase tracking-[0.2em] transition-[width,height,opacity] duration-200 ease-out"
          style={{
            left: cursor.x,
            top: cursor.y,
            transform: "translate(-50%, -50%)",
            width: cursor.onTile ? 72 : 12,
            height: cursor.onTile ? 72 : 12,
          }}
        >
          {cursor.onTile ? "View" : ""}
        </div>
      )}
    </section>
  );
}

// ---------- Masonry tile ----------
function MasonryTile({
  tile,
  index,
  onOpen,
  onTileEnter,
  onTileLeave,
}: {
  tile: Tile;
  index: number;
  onOpen: () => void;
  onTileEnter: () => void;
  onTileLeave: () => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const delay = (index % 6) * 0.05;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="mb-4 md:mb-6 break-inside-avoid"
    >
      <div
        role="button"
        tabIndex={0}
        onClick={onOpen}
        onMouseEnter={onTileEnter}
        onMouseLeave={onTileLeave}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpen();
          }
        }}
        aria-label={tile.alt}
        className="group block w-full cursor-pointer overflow-hidden bg-black/[0.04] text-left"
      >
        <img
          src={tile.src}
          alt={tile.alt}
          loading="lazy"
          style={{ aspectRatio: Math.max(tile.ratio, 0.8) }}
          className="w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        />
      </div>
    </motion.div>
  );
}

// ---------- Lightbox ----------
function Lightbox({
  tile,
  onClose,
  onNext,
  onPrev,
}: {
  tile: Tile;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-6 right-6 z-10 text-xs uppercase tracking-[0.25em] text-white/70 hover:text-white transition-colors"
      >
        Close ✕
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 h-12 w-12 grid place-items-center rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
      >
        ←
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 h-12 w-12 grid place-items-center rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
      >
        →
      </button>
      <div
        className="absolute inset-0 flex items-center justify-center p-8 md:p-16"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={tile.src} alt={tile.alt} className="max-h-full max-w-full object-contain" />
      </div>
    </motion.div>
  );
}
