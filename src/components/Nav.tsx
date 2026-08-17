import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";

const LINKS: { hash: string; label: string }[] = [
  { hash: "philosophy", label: "Philosophy" },
  { hash: "what-we-do", label: "What We Do" },
  { hash: "process", label: "Process" },
  { hash: "work", label: "Work" },
  { hash: "faq", label: "FAQ" },
  { hash: "contact", label: "Contact" },
];

export function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToHash = (hash: string) => {
    const el = document.getElementById(hash);
    if (!el) return;
    const lenis = (window as unknown as { lenis?: { scrollTo: (t: Element | number, o?: unknown) => void } }).lenis;
    if (lenis?.scrollTo) lenis.scrollTo(el, { offset: 0 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    const lenis = (window as unknown as { lenis?: { scrollTo: (t: number, o?: unknown) => void } }).lenis;
    if (lenis?.scrollTo) lenis.scrollTo(0, { offset: 0 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.location.hash) history.replaceState(null, "", "/");
  };

  const openInquiry = () => {
    setMenuOpen(false);
    window.dispatchEvent(new Event("open-inquiry"));
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 mix-blend-difference">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 sm:px-6 md:px-12 py-5 md:py-6 text-white">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="group flex flex-col justify-center gap-[5px] w-8 h-8 shrink-0"
          >
            <span className="block h-px w-7 bg-white transition-all duration-300 group-hover:w-5" />
            <span className="block h-px w-5 bg-white transition-all duration-300 group-hover:w-7" />
            <span className="block h-px w-7 bg-white transition-all duration-300 group-hover:w-4" />
          </button>

          <div className="min-w-0 text-center">
            <Link
              to="/"
              onClick={(e) => {
                if (onHome) {
                  e.preventDefault();
                  scrollToTop();
                }
              }}
              className="font-display text-base sm:text-lg font-medium tracking-tight truncate inline-block max-w-full"
            >
              Sema Tales
            </Link>
          </div>

          <button
            type="button"
            onClick={openInquiry}
            className="shrink-0 border border-white rounded-full px-3.5 sm:px-5 py-2 text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] whitespace-nowrap transition-colors hover:bg-white hover:text-black"
          >
            Let's chat
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black text-white overflow-y-auto"
          >
            <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 py-5 md:py-6">
              <Link
                to="/"
                onClick={(e) => {
                  setMenuOpen(false);
                  if (onHome) {
                    e.preventDefault();
                    setTimeout(() => scrollToTop(), 0);
                  }
                }}
                className="font-display text-base sm:text-lg font-medium tracking-tight"
              >
                Sema Tales
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="relative h-8 w-8 shrink-0"
              >
                <span className="absolute left-1/2 top-1/2 block h-px w-7 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                <span className="absolute left-1/2 top-1/2 block h-px w-7 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white" />
              </button>
            </div>

            <nav className="px-4 sm:px-6 md:px-12 pt-8 pb-16">
              <ul>
                {LINKS.map((item, i) => (
                  <motion.li
                    key={item.hash}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.08 + i * 0.06,
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="border-b border-white/15"
                  >
                    {onHome ? (
                      <a
                        href={`#${item.hash}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setMenuOpen(false);
                          history.replaceState(null, "", `#${item.hash}`);
                          setTimeout(() => scrollToHash(item.hash), 60);
                        }}
                        className="block font-display uppercase text-4xl sm:text-6xl md:text-7xl leading-none tracking-[-0.03em] py-5 md:py-7 transition-opacity hover:opacity-50"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to="/"
                        hash={item.hash}
                        onClick={() => setMenuOpen(false)}
                        className="block font-display uppercase text-4xl sm:text-6xl md:text-7xl leading-none tracking-[-0.03em] py-5 md:py-7 transition-opacity hover:opacity-50"
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.25em] text-white/60"
              >
                <button onClick={openInquiry} className="hover:text-white transition-colors">
                  Let's chat →
                </button>
                <a href="mailto:hello@sematales.com" className="hover:text-white transition-colors">
                  hello@sematales.com
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
