import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

import { SmoothScroll } from "@/components/SmoothScroll";
import { Reveal } from "@/components/Reveal";
// Films
import runItBack from "@/assets/rssb-tigers/run-it-back.mp4";
import runItBackPoster from "@/assets/rssb-tigers/run-it-back-poster.jpg";
import backToWork from "@/assets/rssb-tigers/back-to-work.mp4";
import backToWorkPoster from "@/assets/rssb-tigers/back-to-work-poster.jpg";
import teamCampaign from "@/assets/rssb-tigers/team-campaign.mp4";
import teamCampaignPoster from "@/assets/rssb-tigers/team-campaign-poster.jpg";
import imyendaTeaser from "@/assets/rssb-tigers/imyenda-teaser.mp4";
import imyendaPoster from "@/assets/rssb-tigers/imyenda-teaser-poster.jpg";

// Kit and styled shoot
import kitFlatlayWide from "@/assets/rssb-tigers/kit-flatlay-wide.jpg";
import kitJerseyInLight from "@/assets/rssb-tigers/kit-jersey-in-light.jpg";
import streetPortrait13 from "@/assets/rssb-tigers/street-portrait-13.jpg";
import benchDuo from "@/assets/rssb-tigers/bench-duo.jpg";
import muralRafikiDuo from "@/assets/rssb-tigers/mural-rafiki-duo.jpg";
import muralRafikiLaughing from "@/assets/rssb-tigers/mural-rafiki-laughing.jpg";
import courtPairStanding from "@/assets/rssb-tigers/court-pair-standing.jpg";
import courtPairPortrait from "@/assets/rssb-tigers/court-pair-portrait.jpg";
import courtPairMotion from "@/assets/rssb-tigers/court-pair-motion.jpg";
import embraceBacks23 from "@/assets/rssb-tigers/embrace-backs-23.jpg";
import seatedCourtsideTalk from "@/assets/rssb-tigers/seated-courtside-talk.jpg";

// Community Fest
import festCourtWide from "@/assets/rssb-tigers/fest-court-wide.jpg";
import festGirlWithBall from "@/assets/rssb-tigers/fest-girl-with-ball.jpg";
import playersMeetKids from "@/assets/rssb-tigers/players-meet-kids.jpg";
import festCrowdHands from "@/assets/rssb-tigers/fest-crowd-hands.jpg";
import sidelinePlayersTalking from "@/assets/rssb-tigers/sideline-players-talking.jpg";

// Championship graphic
import balChampions from "@/assets/rssb-tigers/bal-champions.jpg";

import tigers from "@/assets/rssb-tigers/tigers-cover.jpg";

export const Route = createFileRoute("/work/rssb-tigers")({
  head: () => ({
    meta: [
      { title: "Twaje — RSSB Tigers — Sema Tales" },
      {
        name: "description",
        content:
          "A social-first campaign designed to build anticipation, spark conversation and turn supporters into active participants — the TWAJE campaign for RSSB Tigers.",
      },
      { property: "og:title", content: "Twaje — RSSB Tigers — Sema Tales" },
      {
        property: "og:description",
        content:
          "A social-first campaign designed to build anticipation, spark conversation and turn supporters into active participants — the TWAJE campaign for RSSB Tigers.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: tigers },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: tigers },
    ],
  }),
  component: TigersCaseStudy,
});

// ---------- Placeholder tiles ----------
type Tile =
  | { kind: "image"; src: string; alt: string; ratio: number }
  | { kind: "video"; src: string; poster?: string; ratio: number };

const tiles: Tile[] = [
  // ===== Gallery (0-11): the kit and the styled shoot =====
  {
    kind: "image",
    src: kitFlatlayWide,
    alt: "RSSB Tigers kit laid out under dappled afternoon light",
    ratio: 3 / 2,
  },
  {
    kind: "image",
    src: streetPortrait13,
    alt: "Supporter in the number 13 home jersey on a Kigali street court",
    ratio: 2 / 3,
  },
  {
    kind: "image",
    src: benchDuo,
    alt: "Two supporters resting courtside in Tigers pinstripes and a branded hoodie",
    ratio: 4 / 5,
  },
  {
    kind: "image",
    src: muralRafikiDuo,
    alt: "Two supporters in Tigers jerseys against the Rafiki mural wall",
    ratio: 5 / 4,
  },
  {
    kind: "video",
    src: imyendaTeaser,
    poster: imyendaPoster,
    ratio: 16 / 9,
  },
  {
    kind: "image",
    src: courtPairStanding,
    alt: "Supporters in home and away jerseys on a public court at golden hour",
    ratio: 5 / 4,
  },
  {
    kind: "image",
    src: muralRafikiLaughing,
    alt: "Supporters laughing together in front of the Rafiki mural",
    ratio: 5 / 4,
  },
  {
    kind: "image",
    src: courtPairPortrait,
    alt: "Two supporters facing camera on a public court in Kigali",
    ratio: 5 / 4,
  },
  {
    kind: "image",
    src: embraceBacks23,
    alt: "Two supporters seen from behind, arms around each other, number 23 on the jersey",
    ratio: 4 / 5,
  },
  {
    kind: "image",
    src: courtPairMotion,
    alt: "Supporters on court, foreground movement blurring across the frame",
    ratio: 5 / 4,
  },
  {
    kind: "image",
    src: seatedCourtsideTalk,
    alt: "Two supporters in conversation courtside after a game",
    ratio: 5 / 4,
  },
  {
    kind: "image",
    src: kitJerseyInLight,
    alt: "Tigers home jersey caught in a shaft of afternoon light",
    ratio: 5 / 4,
  },

  // ===== More from the campaign (12-16): Community Fest =====
  {
    kind: "image",
    src: festCourtWide,
    alt: "The squad lined up beneath the Community Fest banner",
    ratio: 5 / 4,
  },
  {
    kind: "image",
    src: festGirlWithBall,
    alt: "A young supporter holding a basketball at the Community Fest barrier",
    ratio: 3 / 2,
  },
  {
    kind: "image",
    src: playersMeetKids,
    alt: "Players greeting young players courtside at the Community Fest",
    ratio: 5 / 4,
  },
  {
    kind: "image",
    src: festCrowdHands,
    alt: "Crowd reaching over the courtside barrier during the Community Fest",
    ratio: 5 / 4,
  },
  {
    kind: "image",
    src: sidelinePlayersTalking,
    alt: "Two players talking on the sideline during the Community Fest",
    ratio: 5 / 4,
  },
];

type Stat = {
  label: string;
  target: number;
  format: (v: number) => string;
  headline: string;
  description?: string;
};

const stats: Stat[] = [
  {
    label: "Views",
    target: 1_000_000,
    format: (v) => {
      if (v >= 1_000_000) return "1M+";
      if (v >= 1_000) return `${Math.round(v / 1_000)}K+`;
      return `${Math.round(v)}+`;
    },
    headline: "People saw the story.",
  },

  {
    label: "Accounts reached",
    target: 100,
    format: (v) => `${Math.round(v)}K+`,
    headline: "Introduced the brand to over 100,000 people.",
  },
  {
    label: "Non-followers",
    target: 69.6,
    format: (v) => `${v.toFixed(1)}%`,
    headline: "Reached people beyond the existing audience.",
  },
  {
    label: "Interactions",
    target: 73,
    format: (v) => `${Math.round(v)}K+`,
    headline: "Turned attention into engagement.",
    description:
      "More than 73,000 likes, comments, shares and other interactions showed that people didn't just see the content, they actively responded to it.",
  },
  {
    label: "Profile visits",
    target: 10,
    format: (v) => `${Math.round(v)}K+`,
    headline:
      "Thousands of people were interested enough to visit the team's profile, showing the campaign encouraged audiences to learn more.",
  },
  {
    label: "New followers",
    target: 2.5,
    format: (v) => `${v.toFixed(1)}K+`,
    headline: "The campaign converted attention into long-term community growth.",
  },
];

function TigersCaseStudy() {
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

  const galleryA = tiles.slice(0, 12);
  const galleryB = tiles.slice(12);

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
                Twaje
              </h1>
            </Reveal>

            <Reveal>
              <dl className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 border-t border-black/10 pt-8">
                <div>
                  <dt className="text-xs uppercase tracking-[0.25em] text-black/40 mb-3">Client</dt>
                  <dd className="text-base md:text-lg">RSSB Tigers</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.25em] text-black/40 mb-3">Year</dt>
                  <dd className="text-base md:text-lg">2026</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.25em] text-black/40 mb-3">Campaign</dt>
                  <dd className="text-base md:text-lg">Twaje</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </section>

        {/* 2. Hero reel */}
        <section className="px-6 md:px-12 pb-20 md:pb-28">
          <div className="mx-auto max-w-[1600px]">
            <Reveal>
              <HeroReel src={runItBack} poster={runItBackPoster} />
            </Reveal>
          </div>
        </section>

        {/* 3. Text block A — name / description + services */}
        <section className="px-6 md:px-12 pb-20 md:pb-28">
          <div className="mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 border-t border-black/10 pt-12 md:pt-16">
            <Reveal className="md:col-span-4">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-black/40 mb-4">The campaign</div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.03em]">
                  Twaje
                </h2>
              </div>
            </Reveal>
            <Reveal className="md:col-span-7 md:col-start-6">
              <div>
                <p className="text-lg md:text-2xl leading-relaxed md:leading-snug tracking-[-0.01em]">
                  We created a social-first campaign for RSSB Tigers’ 2026 BAL campaign, designed to turn anticipation
                  into action. Through strategic storytelling, timely content and community-led moments, the campaign
                  built momentum around the BAL playoffs and finals, sparking conversation and turning supporters into
                  active participants, as the Tigers went on to be crowned 2026 BAL Champions.
                </p>
                <div className="mt-10 md:mt-12 border-t border-black/10 pt-6">
                  <div className="text-xs uppercase tracking-[0.25em] text-black/40 mb-4">Services</div>
                  <p className="text-base md:text-lg text-black/75">
                    Campaign Strategy, Creative Direction, Content Production &amp; Social Media Activation
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3b. Campaign film — Back to Work */}
        <section className="px-6 md:px-12 pb-20 md:pb-28">
          <div className="mx-auto max-w-[1600px]">
            <Reveal>
              <HeroReel src={backToWork} poster={backToWorkPoster} />
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
                <div className="text-xs uppercase tracking-[0.25em] text-black/40 mb-4">The Approach</div>
                <h2 className="font-display text-4xl md:text-5xl leading-[0.95] tracking-[-0.03em]">RSSB Tigers</h2>
              </div>
            </Reveal>
            <Reveal className="md:col-span-7 md:col-start-6">
              <div>
                <p className="text-lg md:text-2xl leading-relaxed md:leading-snug tracking-[-0.01em]">
                  We brought RSSB Tigers back into the conversation, bringing fans closer to the team through
                  behind-the-scenes access, community engagement events and the introduction of team merchandise. The
                  goal was simple, to make fans feel like part of the journey, not just spectators.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 6. Gallery B */}
        {galleryB.length > 0 && (
          <MasonryGallery label="More from the campaign" tiles={galleryB} offset={12} onOpen={openLightbox} />
        )}

        {/* 6b. Community Fest */}
        {/* <section className="px-6 md:px-12 py-20 md:py-28">
          <div className="mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 border-t border-black/10 pt-12 md:pt-16">
            <Reveal className="md:col-span-4">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-black/40 mb-4">On the ground</div>
                <h2 className="font-display text-4xl md:text-5xl leading-[0.95] tracking-[-0.03em]">Community Fest</h2>
              </div>
            </Reveal>
            <Reveal className="md:col-span-7 md:col-start-6">
              <p className="text-lg md:text-2xl leading-relaxed md:leading-snug tracking-[-0.01em]">
                The campaign left the feed and took over a court. Open runs, young players meeting the squad, and a
                crowd that showed up for a team rather than a fixture.
              </p>
            </Reveal>
          </div>
        </section> */}

        <section className="px-6 md:px-12 pb-20 md:pb-28">
          <div className="mx-auto max-w-[1600px]">
            <Reveal>
              <HeroReel src={teamCampaign} poster={teamCampaignPoster} />
            </Reveal>
          </div>
        </section>

        {/* 6c. Champions */}
        <section className="px-6 md:px-12 pb-20 md:pb-28">
          <div className="mx-auto max-w-[1600px]">
            <Reveal>
              <img
                src={balChampions}
                alt="RSSB Tigers lift the BAL trophy under confetti"
                className="w-full h-auto"
                loading="lazy"
              />
            </Reveal>
          </div>
        </section>

        {/* 7. Results */}
        <ResultsSection />

        {/* 8. CTA */}
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

        {/* 9. Close */}
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
  return (
    <section className="px-6 md:px-12 pb-20 md:pb-28">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.25em] text-black/40 mb-8 md:mb-12">{label}</div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start">
          {items.map((tile, i) => (
            <div key={i} className={`min-w-0 ${SPANS[i % SPANS.length]}`}>
              <MasonryTile tile={tile} index={i} onOpen={() => onOpen(offset + i)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Hero reel ----------
function HeroReel({ src, poster }: { src: string; poster?: string }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) el.play().catch(() => {});
          else el.pause();
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black aspect-video">
      <video
        ref={ref}
        poster={poster}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      <VideoControls
        playing={playing}
        muted={muted}
        onTogglePlay={() => {
          const el = ref.current;
          if (!el) return;
          if (el.paused) el.play().catch(() => {});
          else el.pause();
        }}
        onToggleMute={() => setMuted((m) => !m)}
      />
    </div>
  );
}

// ---------- Masonry tile ----------
function MasonryTile({ tile, index, onOpen }: { tile: Tile; index: number; onOpen: () => void }) {
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
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpen();
          }
        }}
        className="group block w-full cursor-pointer overflow-hidden bg-black/[0.04] text-left"
      >
        {tile.kind === "image" ? (
          <img
            src={tile.src}
            alt={tile.alt}
            loading="lazy"
            style={{ aspectRatio: tile.ratio }}
            className="w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          />
        ) : (
          <TileVideo src={tile.src} ratio={tile.ratio} poster={tile.poster} />
        )}
      </div>
    </motion.div>
  );
}

function TileVideo({ src, ratio, poster }: { src: string; ratio: number; poster?: string }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) el.play().catch(() => {});
          else el.pause();
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative w-full" style={{ aspectRatio: ratio }}>
      <video
        ref={ref}
        poster={poster}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div onClick={(e) => e.stopPropagation()}>
        <VideoControls
          compact
          playing={playing}
          muted={muted}
          onTogglePlay={() => {
            const el = ref.current;
            if (!el) return;
            if (el.paused) el.play().catch(() => {});
            else el.pause();
          }}
          onToggleMute={() => {
            // Only one video audible at a time
            if (muted) {
              document.querySelectorAll("video").forEach((v) => {
                if (v !== ref.current) v.muted = true;
              });
            }
            setMuted((m) => !m);
          }}
        />
      </div>
    </div>
  );
}

// ---------- Video controls ----------
function VideoControls({
  playing,
  muted,
  onTogglePlay,
  onToggleMute,
  compact = false,
}: {
  playing: boolean;
  muted: boolean;
  onTogglePlay: () => void;
  onToggleMute: () => void;
  compact?: boolean;
}) {
  const size = compact ? "h-8 w-8" : "h-11 w-11";
  return (
    <div className={`absolute ${compact ? "bottom-2 right-2 gap-1" : "bottom-4 right-4 gap-2"} flex z-10`}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onTogglePlay();
        }}
        aria-label={playing ? "Pause" : "Play"}
        className={`${size} grid place-items-center rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white hover:bg-black/80 transition-colors`}
      >
        {playing ? (
          <svg viewBox="0 0 24 24" className={compact ? "h-3 w-3" : "h-4 w-4"} fill="currentColor">
            <rect x="6" y="5" width="4" height="14" />
            <rect x="14" y="5" width="4" height="14" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className={compact ? "h-3 w-3" : "h-4 w-4"} fill="currentColor">
            <path d="M7 5l12 7-12 7V5z" />
          </svg>
        )}
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggleMute();
        }}
        aria-label={muted ? "Unmute" : "Mute"}
        className={`${size} grid place-items-center rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white hover:bg-black/80 transition-colors`}
      >
        {muted ? (
          <svg viewBox="0 0 24 24" className={compact ? "h-3 w-3" : "h-4 w-4"} fill="currentColor">
            <path d="M3 9v6h4l5 4V5L7 9H3zm13.5 3a4.5 4.5 0 00-1.32-3.18l-1.06 1.06a3 3 0 010 4.24l1.06 1.06A4.5 4.5 0 0016.5 12z" />
            <path d="M4 3l17 17-1.4 1.4L2.6 4.4 4 3z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className={compact ? "h-3 w-3" : "h-4 w-4"} fill="currentColor">
            <path d="M3 9v6h4l5 4V5L7 9H3zm13.5 3a4.5 4.5 0 00-2.5-4.03v8.06A4.5 4.5 0 0016.5 12zM14 3.23v2.06a7 7 0 010 13.42v2.06a9 9 0 000-17.54z" />
          </svg>
        )}
      </button>
    </div>
  );
}

// ---------- Results section ----------
function ResultsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [sectionTriggered, setSectionTriggered] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setSectionTriggered(false);
      return;
    }
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setSectionTriggered(entry.isIntersecting);
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [isMobile]);

  return (
    <section ref={sectionRef} className="px-6 md:px-12 py-24 md:py-32 border-t border-black/10">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.25em] mb-10 md:mb-14">Results</div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {stats.map((s) => (
            <StatCard key={s.label} stat={s} isMobile={isMobile} sectionTriggered={sectionTriggered} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Stat card with count-up ----------
function StatCard({ stat, isMobile, sectionTriggered }: { stat: Stat; isMobile: boolean; sectionTriggered: boolean }) {
  const { label, target, format, headline, description } = stat;
  const ref = useRef<HTMLDivElement | null>(null);
  const [ownTriggered, setOwnTriggered] = useState(false);
  const [displayText, setDisplayText] = useState(() => {
    // Safe default: final formatted value if target is a real number, otherwise "0"
    return typeof target === "number" && !Number.isNaN(target) ? format(0) : "0";
  });
  const [showText, setShowText] = useState(false);

  // Own IntersectionObserver for mobile
  useEffect(() => {
    if (!isMobile) {
      setOwnTriggered(false);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setOwnTriggered(entry.isIntersecting);
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [isMobile]);

  const trigger = isMobile ? ownTriggered : sectionTriggered;

  useEffect(() => {
    if (!trigger) {
      // Reset immediately when out of view — no animation on reset
      const zero = typeof target === "number" && !Number.isNaN(target) ? format(0) : "0";
      setDisplayText(zero);
      setShowText(false);
      return;
    }

    let cancelled = false;
    let raf = 0;
    let textTimer = 0;

    // Guard: if target isn't a valid number, just show the fallback and bail
    if (typeof target !== "number" || Number.isNaN(target)) {
      setDisplayText(format(target || 0));
      setShowText(true);
      return () => {
        cancelled = true;
      };
    }

    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      if (cancelled) return;
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = target * eased;
      const safe = Number.isFinite(current) ? current : target;
      setDisplayText(format(safe));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDisplayText(format(target));
      }
    };
    raf = requestAnimationFrame(tick);
    textTimer = window.setTimeout(() => {
      if (!cancelled) setShowText(true);
    }, 250);

    return () => {
      cancelled = true;
      if (raf) cancelAnimationFrame(raf);
      if (textTimer) window.clearTimeout(textTimer);
    };
  }, [trigger, target, format]);

  return (
    <div ref={ref} className="rounded-2xl border border-black/10 bg-black/[0.03] p-6 md:p-8">
      <div className="font-display text-4xl md:text-5xl lg:text-6xl leading-none tracking-[-0.03em] tabular-nums">
        {displayText}
      </div>
      <div className="mt-4 text-xs uppercase tracking-[0.25em] text-black/50">{label}</div>
      <div
        className={`mt-5 text-base md:text-lg leading-snug text-black transition-opacity duration-700 ${
          showText ? "opacity-100" : "opacity-0"
        }`}
      >
        {headline}
      </div>
      {description && (
        <div
          className={`mt-3 text-sm md:text-base leading-relaxed text-black/60 transition-opacity duration-700 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          {description}
        </div>
      )}
    </div>
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
        className="absolute top-6 right-6 z-10 text-xs uppercase tracking-[0.25em] text-black/70 hover:text-black transition-colors"
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
        {tile.kind === "image" ? (
          <img src={tile.src} alt={tile.alt} className="max-h-full max-w-full object-contain" />
        ) : (
          <video src={tile.src} controls autoPlay playsInline className="max-h-full max-w-full" />
        )}
      </div>
    </motion.div>
  );
}
