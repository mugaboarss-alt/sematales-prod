import { Reveal } from "./Reveal";

export function Footer({ tone = "light" }: { tone?: "light" | "dark" } = {}) {
  const dark = tone === "dark";
  const base = dark ? "text-black border-black/15" : "text-[#F2F0EA] border-[#F2F0EA]/15";
  const muted = dark ? "text-black/50" : "text-[#F2F0EA]/50";
  const faint = dark ? "text-black/40" : "text-[#F2F0EA]/40";

  return (
    <footer className={`${base} border-t px-6 md:px-12 py-10`}>
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="font-display text-4xl md:text-6xl leading-none tracking-[-0.03em]">
              Sema Tales.
            </p>
            <p className={`mt-3 text-xs uppercase tracking-[0.25em] ${muted}`}>
              A story-led creative agency
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-2 text-xs uppercase tracking-[0.25em]">
            <a href="mailto:hello@sematales.rw" className="hover:opacity-60">
              hello@sematales.rw
            </a>
            <a
              href="https://www.instagram.com/sematales/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60"
            >
              Instagram
            </a>
            <a href="#" className="hover:opacity-60">LinkedIn</a>
            <span className={faint}>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
