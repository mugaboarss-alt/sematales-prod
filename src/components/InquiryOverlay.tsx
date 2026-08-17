import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { z } from "zod";

const SERVICES = [
  "Strategy",
  "Film",
  "Photography",
  "Design",
  "Social Media Content",
  "Campaign Development",
  "Not sure yet — let's figure it out",
] as const;

type Service = (typeof SERVICES)[number];

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "A name helps us reply properly." })
    .max(120, { message: "That's a little long." }),
  email: z
    .string()
    .trim()
    .email({ message: "That address doesn't look reachable." })
    .max(255, { message: "That's a little long." }),
  subject: z
    .string()
    .trim()
    .min(1, { message: "Even a few words will do." })
    .max(180, { message: "That's a little long." }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Even a few words will do." })
    .max(4000, { message: "Let's keep it under 4000 characters." }),
});

type FieldName = "name" | "email" | "subject" | "message";

const FIELDS: {
  name: Exclude<FieldName, "message">;
  label: string;
  helper: string;
  type: string;
  autoComplete: string;
}[] = [
  {
    name: "name",
    label: "From",
    helper: "Introduce yourself.",
    type: "text",
    autoComplete: "name",
  },
  {
    name: "email",
    label: "Email",
    helper: "Where can we find you?",
    type: "email",
    autoComplete: "email",
  },
  {
    name: "subject",
    label: "Subject",
    helper: "Give your idea a title.",
    type: "text",
    autoComplete: "off",
  },
];

export function InquiryOverlay() {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [services, setServices] = useState<Service[]>([]);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const panelRef = useRef<HTMLDivElement | null>(null);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onOpen = () => {
      setSent(false);
      setFormError(null);
      setOpen(true);
    };
    window.addEventListener("open-inquiry", onOpen);
    return () => window.removeEventListener("open-inquiry", onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
    lenis?.stop();
    const t = window.setTimeout(() => firstFieldRef.current?.focus(), 120);


    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0]!;
      const last = focusables[focusables.length - 1]!;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lenis?.start();
    };

  }, [open, close]);

  const validateField = useCallback(
    (field: FieldName, value: string) => {
      const result = schema.shape[field].safeParse(value);
      setErrors((prev) => ({
        ...prev,
        [field]: result.success ? undefined : result.error.issues[0]?.message,
      }));
    },
    []
  );

  const setValue = (field: FieldName, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) validateField(field, value);
  };

  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue("message", e.target.value);
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = `${Math.min(el.scrollHeight, 420)}px`;
    }
  };

  const toggleService = (service: Service) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const submit = async () => {
    const result = schema.safeParse(values);
    if (!result.success) {
      const next: Partial<Record<FieldName, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as FieldName | undefined;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setSending(true);
    setFormError(null);
    try {
      const res = await fetch("/api/public/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...result.data, services }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        setFormError(body?.error ?? "Something went wrong. Please try again.");
        return;
      }
      setSent(true);
      setValues({ name: "", email: "", subject: "", message: "" });
      setServices([]);
      setErrors({});
    } catch {
      setFormError("We couldn't reach us just now. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const transition = useMemo(
    () =>
      reduceMotion
        ? { duration: 0.2 }
        : { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    [reduceMotion]
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.35 }}
          className="fixed inset-0 z-[60] overflow-y-auto overscroll-contain bg-[#F4F1EB] text-black"
          data-lenis-prevent

          role="dialog"
          aria-modal="true"
          aria-label="Start a conversation with Sema Tales"
        >
          <div
            ref={panelRef}
            className="mx-auto flex min-h-full w-full max-w-3xl flex-col px-5 py-6 sm:px-8 md:px-10 md:py-10"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="text-[11px] uppercase tracking-[0.25em] text-black/45">
                (07) — Your story starts here
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="relative h-8 w-8 shrink-0"
              >
                <span className="absolute left-1/2 top-1/2 block h-px w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
                <span className="absolute left-1/2 top-1/2 block h-px w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-black" />
              </button>
            </div>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={transition}
                className="flex flex-1 flex-col justify-center py-24"
              >
                <h2 className="font-display text-4xl leading-[0.95] tracking-[-0.03em] md:text-6xl">
                  Your note is
                  <br />
                  <span className="italic font-normal">on its way.</span>
                </h2>
                <p className="mt-8 max-w-md text-black/60">
                  We read every note ourselves. Expect a reply within 2–3 hours.
                </p>
                <div className="mt-12">
                  <button
                    type="button"
                    onClick={close}
                    className="border border-black rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.25em] transition-colors hover:bg-black hover:text-white"
                  >
                    Back to the site
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={transition}
                onSubmit={(e) => {
                  e.preventDefault();
                  void submit();
                }}
                className="mt-10 md:mt-14"
              >
                <h2 className="font-display text-3xl leading-[0.95] tracking-[-0.03em] md:text-5xl">
                  A note to
                  <br />
                  <span className="italic font-normal">Sema Tales.</span>
                </h2>

                <div className="mt-12 space-y-8 md:mt-16">
                  <div className="grid grid-cols-[5.5rem_1fr] items-baseline gap-4 border-b border-black/15 pb-3 sm:grid-cols-[7rem_1fr]">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-black/45">
                      To
                    </span>
                    <span className="text-base md:text-lg">
                      Sema Tales — hello@sematales.rw
                    </span>
                  </div>

                  {FIELDS.map((field, i) => (
                    <div key={field.name}>
                      <div className="grid grid-cols-[5.5rem_1fr] items-baseline gap-4 border-b border-black/15 pb-3 focus-within:border-black sm:grid-cols-[7rem_1fr]">
                        <label
                          htmlFor={`inquiry-${field.name}`}
                          className="text-[10px] uppercase tracking-[0.25em] text-black/45"
                        >
                          {field.label}
                        </label>
                        <input
                          id={`inquiry-${field.name}`}
                          ref={i === 0 ? firstFieldRef : undefined}
                          type={field.type}
                          autoComplete={field.autoComplete}
                          value={values[field.name]}
                          onChange={(e) => setValue(field.name, e.target.value)}
                          onBlur={(e) => validateField(field.name, e.target.value)}
                          placeholder={field.helper}
                          className="w-full bg-transparent text-base outline-none placeholder:text-black/35 md:text-lg"
                        />
                      </div>
                      {errors[field.name] && (
                        <p className="mt-2 pl-0 text-xs text-black/50 sm:pl-[7.5rem]">
                          {errors[field.name]}
                        </p>
                      )}
                    </div>
                  ))}

                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-black/45">
                      What are you looking for?
                    </div>
                    <p className="mt-2 text-sm text-black/45">
                      Pick as many as fit. Or none, if you&apos;d rather just
                      talk.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {SERVICES.map((service) => {
                        const active = services.includes(service);
                        return (
                          <button
                            key={service}
                            type="button"
                            aria-pressed={active}
                            onClick={() => toggleService(service)}
                            className={`rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                              active
                                ? "border-black bg-black text-[#F4F1EB]"
                                : "border-black/25 text-black/60 hover:border-black hover:text-black"
                            }`}
                          >
                            [{service}]
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-message"
                      className="text-[10px] uppercase tracking-[0.25em] text-black/45"
                    >
                      Message
                    </label>
                    <textarea
                      id="inquiry-message"
                      ref={textareaRef}
                      rows={4}
                      value={values.message}
                      onChange={onMessageChange}
                      onBlur={(e) => validateField("message", e.target.value)}
                      placeholder="What's on your mind? Tell us what you're building, where you're headed, and how we can help."
                      className="mt-4 w-full resize-none border-b border-black/15 bg-transparent pb-4 text-base outline-none placeholder:text-black/35 focus:border-black md:text-lg"
                    />
                    {errors.message && (
                      <p className="mt-2 text-xs text-black/50">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                {formError && (
                  <p className="mt-10 text-sm text-black/60">{formError}</p>
                )}

                <div className="mt-12 flex flex-wrap items-center gap-6 pb-6 md:mt-16">
                  <button
                    type="submit"
                    disabled={sending}
                    className="group inline-flex items-center gap-4 rounded-full border border-black pl-6 pr-2 py-2 text-[11px] uppercase tracking-[0.25em] transition-colors hover:bg-black hover:text-[#F4F1EB] disabled:opacity-50"
                  >
                    {sending ? "Sending…" : "Start the conversation"}
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-[#F4F1EB] transition-transform group-hover:translate-x-1 group-hover:bg-[#F4F1EB] group-hover:text-black">
                      →
                    </span>
                  </button>
                  <p className="text-xs text-black/45">
                    We read every note ourselves. Expect a reply within two
                    working days.
                  </p>
                </div>
              </motion.form>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
