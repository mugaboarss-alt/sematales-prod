import { a as __toESM } from "../_runtime.mjs";
import { a as motion, i as useScroll, n as useReducedMotion, o as AnimatePresence, r as useTransform, s as performance_default } from "../_libs/framer-motion.mjs";
import { r as projects } from "./projects-DfwLZMj1.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SmoothScroll } from "./SmoothScroll-C3_qiIse.mjs";
import { n as Nav, r as Reveal, t as Footer } from "./Footer-DgmZ7P9i.mjs";
import { t as ContactForm } from "./ContactForm-CJ_3bzR1.mjs";
import { n as Volume2, t as VolumeX } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B0QRc5ny.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COLORS = [
	"#000000",
	"#000000",
	"#121212",
	"#121212",
	"#FFFFFF",
	"#F8F8F5",
	"#F8F8F5",
	"#101010",
	"#121212",
	"#151513",
	"#171714",
	"#171714"
];
var FALLBACK = [
	0,
	.06,
	.16,
	.26,
	.36,
	.46,
	.54,
	.58,
	.7,
	.84,
	.93,
	1
];
/**
* Full-page fixed backdrop whose color interpolates with scroll position,
* so sections melt into one another instead of cutting between blocks.
*/
function ScrollAtmosphere() {
	const { scrollYProgress } = useScroll();
	const reduceMotion = useReducedMotion();
	const [stops, setStops] = (0, import_react.useState)(FALLBACK);
	(0, import_react.useEffect)(() => {
		const measure = () => {
			const total = document.documentElement.scrollHeight - window.innerHeight;
			if (total <= 0) return;
			const at = (id, bias) => {
				const el = document.getElementById(id);
				if (!el) return null;
				const top = el.getBoundingClientRect().top + window.scrollY;
				return Math.min(1, Math.max(0, (top - window.innerHeight * bias) / total));
			};
			const phil = at("philosophy", .6);
			const wwd = at("what-we-do", .45);
			const proc = at("process", .35);
			const work = at("work", .4);
			const faq = at("faq", .4);
			const contact = at("contact", -.45);
			if (phil == null || wwd == null || proc == null || work == null || faq == null || contact == null) return;
			const philHold = Math.max(phil, wwd - (wwd - phil) * .1);
			const procHold = Math.max(proc, work - (work - proc) * .18);
			const warm = faq + (contact - faq) * .8;
			const next = [
				0,
				Math.max(.02, phil * .5),
				phil,
				philHold,
				wwd,
				proc,
				procHold,
				work,
				faq,
				warm,
				contact,
				1
			];
			for (let i = 1; i < next.length; i++) if (next[i] <= next[i - 1]) next[i] = next[i - 1] + 1e-4;
			setStops(next);
		};
		measure();
		const t = window.setTimeout(measure, 600);
		window.addEventListener("resize", measure);
		const ro = new ResizeObserver(measure);
		ro.observe(document.body);
		return () => {
			window.clearTimeout(t);
			window.removeEventListener("resize", measure);
			ro.disconnect();
			clearTimeout(t);
		};
	}, []);
	const safeStops = stops.length === COLORS.length ? stops : FALLBACK;
	const background = useTransform(scrollYProgress, safeStops, COLORS);
	const haloOpacity = useTransform(scrollYProgress, [
		safeStops[3],
		safeStops[4],
		safeStops[5]
	], reduceMotion ? [
		0,
		.12,
		0
	] : [
		0,
		.35,
		0
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 -z-10 pointer-events-none",
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "absolute inset-0",
			style: { background }
		}), !reduceMotion && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "absolute inset-0 blur-3xl",
			style: {
				opacity: haloOpacity,
				background: "radial-gradient(120% 70% at 50% 100%, rgba(255,255,255,0.22), rgba(255,255,255,0) 70%)"
			}
		})]
	});
}
function NavIntroGate() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (window.__introDone) {
			setVisible(true);
			return;
		}
		const onDone = () => setVisible(true);
		window.addEventListener("intro-done", onDone);
		return () => window.removeEventListener("intro-done", onDone);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: visible ? 1 : 0 },
		transition: {
			duration: .9,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		style: { pointerEvents: visible ? "auto" : "none" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {})
	});
}
var sema_intro_reel_default = "/assets/sema-intro-reel-BhAZB3Ev.mp4";
/**
* Soft "liquid light" trail that follows the pointer.
* Purely decorative: pointer-events none, sits behind hero content.
*/
function CursorTrail() {
	const canvasRef = (0, import_react.useRef)(null);
	const reduceMotion = useReducedMotion();
	(0, import_react.useEffect)(() => {
		if (reduceMotion) return;
		if (!window.matchMedia("(pointer: fine)").matches) return;
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d", { alpha: true });
		if (!ctx) return;
		let dpr = Math.min(window.devicePixelRatio || 1, 1.5);
		const resize = () => {
			dpr = Math.min(window.devicePixelRatio || 1, 1.5);
			const w = Math.max(1, Math.floor(canvas.clientWidth * dpr));
			const h = Math.max(1, Math.floor(canvas.clientHeight * dpr));
			if (canvas.width !== w || canvas.height !== h) {
				canvas.width = w;
				canvas.height = h;
			}
		};
		resize();
		const target = {
			x: -9999,
			y: -9999
		};
		const smooth = {
			x: -9999,
			y: -9999
		};
		let active = false;
		const onMove = (e) => {
			const rect = canvas.getBoundingClientRect();
			target.x = (e.clientX - rect.left) * dpr;
			target.y = (e.clientY - rect.top) * dpr;
			if (!active) {
				smooth.x = target.x;
				smooth.y = target.y;
				active = true;
			}
		};
		const onLeave = () => {
			active = false;
		};
		const parent = canvas.parentElement ?? window;
		parent.addEventListener("pointermove", onMove);
		parent.addEventListener("pointerleave", onLeave);
		window.addEventListener("resize", resize);
		let raf = 0;
		const start = performance_default.now();
		const render = () => {
			resize();
			const t = (performance_default.now() - start) / 1e3;
			ctx.globalCompositeOperation = "destination-out";
			ctx.fillStyle = "rgba(0,0,0,0.055)";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.globalCompositeOperation = "lighter";
			if (active) {
				smooth.x += (target.x - smooth.x) * .12;
				smooth.y += (target.y - smooth.y) * .12;
				const r = 90 * dpr;
				const hue = t * 26 % 360;
				const grad = ctx.createRadialGradient(smooth.x, smooth.y, 0, smooth.x, smooth.y, r);
				grad.addColorStop(0, `hsla(${hue}, 85%, 82%, 0.30)`);
				grad.addColorStop(.45, `hsla(${(hue + 55) % 360}, 80%, 74%, 0.16)`);
				grad.addColorStop(1, "hsla(0, 0%, 100%, 0)");
				ctx.fillStyle = grad;
				ctx.beginPath();
				ctx.arc(smooth.x, smooth.y, r, 0, Math.PI * 2);
				ctx.fill();
			}
			raf = requestAnimationFrame(render);
		};
		render();
		return () => {
			cancelAnimationFrame(raf);
			parent.removeEventListener("pointermove", onMove);
			parent.removeEventListener("pointerleave", onLeave);
			window.removeEventListener("resize", resize);
		};
	}, [reduceMotion]);
	if (reduceMotion) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0 h-full w-full",
		style: {
			filter: "blur(26px)",
			opacity: .9
		}
	});
}
var WORDS = [
	"STUDIO",
	"AGENCY",
	"COLLECTIVE"
];
var EASE = [
	.22,
	1,
	.36,
	1
];
var EXPAND_EASE = [
	.83,
	0,
	.17,
	1
];
function CyclingWord({ frozen }) {
	const [index, setIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (frozen) return;
		const id = window.setInterval(() => {
			setIndex((i) => (i + 1) % WORDS.length);
		}, 1800);
		return () => window.clearInterval(id);
	}, [frozen]);
	if (frozen) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: WORDS[0] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "relative inline-block align-baseline text-right",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "invisible",
			children: "COLLECTIVE"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			mode: "sync",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				className: "absolute right-0 top-0 whitespace-nowrap",
				initial: {
					opacity: 0,
					filter: "blur(14px)"
				},
				animate: {
					opacity: 1,
					filter: "blur(0px)",
					transition: {
						duration: .9,
						ease: "easeOut"
					}
				},
				exit: {
					opacity: 0,
					filter: "blur(14px)",
					transition: {
						duration: .7,
						ease: "easeIn"
					}
				},
				children: WORDS[index]
			}, index)
		})]
	});
}
function Lines({ lines, delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: lines.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "block overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			className: "block whitespace-nowrap",
			initial: {
				y: "110%",
				opacity: 0
			},
			animate: {
				y: "0%",
				opacity: 1
			},
			transition: {
				duration: 1,
				ease: EASE,
				delay: delay + i * .14
			},
			children: line
		})
	}, line)) });
}
function Hero() {
	const reduceMotion = useReducedMotion();
	const [phase, setPhase] = (0, import_react.useState)(reduceMotion ? "done" : "load");
	const [progress, setProgress] = (0, import_react.useState)(reduceMotion ? 100 : 0);
	const [muted, setMuted] = (0, import_react.useState)(true);
	const [vp, setVp] = (0, import_react.useState)({
		w: 1280,
		h: 800
	});
	const videoRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const measure = () => setVp({
			w: window.innerWidth,
			h: window.innerHeight
		});
		measure();
		window.addEventListener("resize", measure);
		return () => window.removeEventListener("resize", measure);
	}, []);
	(0, import_react.useEffect)(() => {
		if (phase !== "load") return;
		const start = performance_default.now();
		const duration = 5400;
		let raf = 0;
		const tick = (t) => {
			const p = Math.min(1, (t - start) / duration);
			setProgress(Math.round(p * 100));
			if (p < 1) raf = requestAnimationFrame(tick);
			else setPhase("expand");
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [phase]);
	(0, import_react.useEffect)(() => {
		if (phase === "done") return;
		const lenis = window.lenis;
		document.body.style.overflow = "hidden";
		lenis?.stop();
		window.scrollTo(0, 0);
		return () => {
			document.body.style.overflow = "";
			lenis?.start();
		};
	}, [phase]);
	(0, import_react.useEffect)(() => {
		if (phase !== "expand") return;
		const id = window.setTimeout(() => setPhase("done"), 1250);
		return () => window.clearTimeout(id);
	}, [phase]);
	(0, import_react.useEffect)(() => {
		if (phase !== "done") return;
		window.__introDone = true;
		window.dispatchEvent(new Event("intro-done"));
	}, [phase]);
	(0, import_react.useEffect)(() => {
		const v = videoRef.current;
		if (!v) return;
		if (phase === "done") v.play().catch(() => {});
		else {
			v.pause();
			try {
				v.currentTime = 0;
			} catch {}
		}
	}, [phase]);
	const loading = phase === "load";
	const boxW = Math.min(320, vp.w * .42);
	const boxH = boxW * 9 / 16;
	const restBottom = vp.h * .07 + 56;
	const boxLeft = (.06 + progress / 100 * .62) * (vp.w - boxW);
	const boxTop = vp.h - restBottom - boxH;
	const target = loading ? {
		left: boxLeft,
		top: boxTop,
		width: boxW,
		height: boxH
	} : {
		left: 0,
		top: 0,
		width: vp.w,
		height: vp.h
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative min-h-[100svh] overflow-hidden bg-[#000000]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CursorTrail, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: phase !== "done" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "fixed left-0 top-0 z-[70] w-full bg-black",
				initial: { height: "100svh" },
				animate: { height: loading ? "100svh" : "0svh" },
				transition: {
					duration: 1.2,
					ease: EXPAND_EASE
				},
				"aria-hidden": true
			}, "curtain") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: phase === "done" ? "absolute inset-0 z-0 overflow-hidden bg-black" : "fixed z-[75] overflow-hidden bg-black",
				animate: phase === "done" ? {
					left: 0,
					top: 0,
					width: "100%",
					height: "100%"
				} : target,
				transition: loading ? { duration: 0 } : {
					duration: 1.2,
					ease: EXPAND_EASE
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					ref: videoRef,
					muted,
					loop: true,
					playsInline: true,
					preload: "auto",
					className: "h-full w-full object-cover",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						src: sema_intro_reel_default,
						type: "video/mp4"
					})
				})
			}),
			phase === "done" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
				type: "button",
				onClick: () => setMuted((m) => !m),
				"aria-label": muted ? "Unmute video" : "Mute video",
				className: "absolute bottom-6 right-6 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-foreground/25 bg-background/20 text-foreground/80 backdrop-blur-sm transition-colors hover:border-foreground/60 hover:text-foreground md:bottom-8 md:right-8",
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					duration: .6,
					delay: .4
				},
				children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-4 w-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: phase !== "done" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "fixed inset-0 z-[80] text-foreground",
				initial: { opacity: 1 },
				animate: { opacity: loading ? 1 : 0 },
				transition: {
					duration: .55,
					ease: "easeOut"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-4 top-5 right-4 sm:left-6 md:left-12 md:top-8 max-w-full font-display font-bold uppercase leading-[0.98] tracking-[-0.04em] text-[clamp(1.1rem,4.5vw,4.2rem)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lines, {
							lines: ["WE ARE A STORY-LED CREATIVE"],
							delay: .15
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute right-4 top-[28%] sm:right-6 md:right-12 max-w-[calc(100%-2rem)] text-right font-display font-bold uppercase tracking-[-0.04em] text-[clamp(1.5rem,6.5vw,5rem)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CyclingWord, { frozen: !!reduceMotion })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute right-4 bottom-5 sm:right-6 md:right-12 md:bottom-8 font-display font-bold tabular-nums leading-none tracking-[-0.04em] text-[clamp(1.5rem,5.5vw,4rem)]",
						children: [progress, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[0.4em] align-super",
							children: "%"
						})]
					})
				]
			}, "chrome") })
		]
	});
}
var CYCLE_WORDS = [
	"to speak.",
	"to say.",
	"to tell."
];
var SUBHEADING = "Seems fitting? That’s what we’re here to do...";
var BODY = "But first, we uncover the message already at the heart of your work. Then we explore the best way to express it, across strategy, design, film and whatever medium the work demands, so it doesn’t just communicate, it connects.";
function ScrollWord({ word, index, total, progress }) {
	const start = .15 + index / total * .45;
	const opacity = useTransform(progress, [start, start + .08], [.22, 1]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
		style: { opacity },
		className: "inline-block",
		children: [word, "\xA0"]
	});
}
function Philosophy() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const words = BODY.split(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		id: "philosophy",
		className: "min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 py-32 md:py-48",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs uppercase tracking-[0.25em] mb-10 md:mb-16",
				children: "(01) — Our philosophy"
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display font-bold text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.02em] max-w-[16em] mx-auto",
					children: [
						"In Swahili, Sema means",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative inline-block align-baseline whitespace-nowrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "invisible",
								children: "“to speak.”"
							}), CYCLE_WORDS.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "word-cycle absolute inset-0 flex items-center justify-center",
								style: { animationDelay: `${i * 7.35 / 3}s` },
								children: [
									"“",
									w,
									"”"
								]
							}, w))]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .2,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-12 md:mt-16 mb-4 md:mb-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-center font-bold",
					children: SUBHEADING
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-center",
				children: words.map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollWord, {
					word,
					index: i,
					total: words.length,
					progress: scrollYProgress
				}, `${word}-${i}`))
			})
		]
	});
}
var CATEGORIES = [
	{
		label: "01 Strategy",
		items: [
			"Communication Strategy",
			"Campaign Strategy",
			"Brand Messaging",
			"Content Strategy",
			"Audience Understanding"
		]
	},
	{
		label: "02 Creative Direction",
		items: [
			"Creative Direction",
			"Art Direction",
			"Brand Identity",
			"Communication Design",
			"Campaign Concepts"
		]
	},
	{
		label: "03 Production",
		items: [
			"Film",
			"Photography",
			"Animation",
			"Content Production",
			"Motion Design"
		]
	},
	{
		label: "04 Distribution",
		items: [
			"Campaign Execution",
			"Content Rollout",
			"Social Media Management",
			"Performance Tracking",
			"Optimization"
		]
	}
];
function WhatWeDo() {
	const sectionRef = (0, import_react.useRef)(null);
	const itemRefs = (0, import_react.useRef)([]);
	const [active, setActive] = (0, import_react.useState)(0);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end start"]
	});
	const fadeOpacity = useTransform(scrollYProgress, [.82, 1], [1, 0]);
	const fadeY = useTransform(scrollYProgress, [.82, 1], [0, -60]);
	(0, import_react.useEffect)(() => {
		let raf = 0;
		const update = () => {
			raf = 0;
			const center = window.innerHeight / 2;
			let best = 0;
			let bestDist = Infinity;
			itemRefs.current.forEach((el, i) => {
				if (!el) return;
				const r = el.getBoundingClientRect();
				const d = Math.abs(r.top + r.height / 2 - center);
				if (d < bestDist) {
					bestDist = d;
					best = i;
				}
			});
			setActive(best);
		};
		const onScroll = () => {
			if (!raf) raf = requestAnimationFrame(update);
		};
		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			if (raf) cancelAnimationFrame(raf);
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);
	let counter = 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "what-we-do",
		ref: sectionRef,
		className: "relative px-6 md:px-12 pt-32 md:pt-48",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			style: {
				opacity: fadeOpacity,
				y: fadeY
			},
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center text-xs uppercase tracking-[0.25em] text-black/70 mb-16 md:mb-24",
				children: "(02) — What we do"
			}), CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:grid md:grid-cols-[minmax(0,14rem)_1fr] md:gap-12 pb-24 md:pb-36",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:sticky md:top-32 md:self-start h-fit mb-6 md:mb-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[12px] md:text-[13px] uppercase tracking-[0.25em] text-black/35",
						children: cat.label
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: cat.items.map((item) => {
					const idx = counter++;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						ref: (el) => {
							itemRefs.current[idx] = el;
						},
						style: {
							transition: "opacity 1.3s cubic-bezier(0.22,1,0.36,1), font-variation-settings 1.3s ease",
							opacity: idx === active ? 1 : .3
						},
						className: "font-display text-black text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.25rem] leading-none tracking-[-0.04em] font-semibold py-3 md:py-4",
						children: item
					}, item);
				}) })]
			}, cat.label))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-[18vh]",
			"aria-hidden": true
		})]
	});
}
var steps = [
	{
		key: "listen",
		title: "Listen",
		tagline: "Before we speak, we listen.",
		body: "We ask more questions than we offer answers. Before a single idea takes shape, we sit with the client's world, their message, their audience, their goals, until we actually understand what needs to be said, and why it matters."
	},
	{
		key: "shape",
		title: "Shape",
		tagline: "Turn understanding into direction.",
		body: "We define the strategy, creative approach and communication path that will guide the work."
	},
	{
		key: "make",
		title: "Make",
		tagline: "Bring ideas into reality.",
		body: "Through film, photography, animation, design and content production, we create work that carries the message."
	},
	{
		key: "move",
		title: "Move",
		tagline: "Help the work reach people.",
		body: "We support launches, distribution and campaigns that help creative work connect with the right audience."
	}
];
function ProcessSequence() {
	const [active, setActive] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "process",
		className: "text-black",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-6 md:px-12 pt-12 md:pt-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center text-xs uppercase tracking-[0.25em] opacity-70",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "(02) — Our process" })
			}) })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-6 md:px-12 py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-black/15 border-y border-black/15",
				children: steps.map((step, i) => {
					const isActive = active === step.key;
					const dimmed = active !== null && !isActive;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						onMouseEnter: () => setActive(step.key),
						onMouseLeave: () => setActive(null),
						onClick: () => setActive((prev) => prev === step.key ? null : step.key),
						className: "cursor-pointer select-none",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							animate: { opacity: dimmed ? .25 : 1 },
							transition: {
								duration: .35,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "grid grid-cols-12 gap-x-6 gap-y-6 items-start lg:items-center py-8 md:py-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-span-2 lg:col-span-1 font-display text-sm md:text-base opacity-60 pt-2 lg:pt-0",
									children: ["0", i + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-10 lg:col-span-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display font-medium uppercase leading-none tracking-[-0.02em] text-6xl md:text-7xl lg:text-8xl xl:text-9xl",
										children: step.title
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-start-3 col-span-10 lg:col-start-auto lg:col-span-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
										mode: "wait",
										children: isActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
											initial: {
												opacity: 0,
												y: 12
											},
											animate: {
												opacity: 1,
												y: 0
											},
											exit: {
												opacity: 0,
												y: 8
											},
											transition: {
												duration: .4,
												ease: [
													.22,
													1,
													.36,
													1
												]
											},
											className: "max-w-xl",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-display text-xl md:text-2xl leading-snug mb-3",
												children: step.tagline
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm md:text-base text-black/70 leading-relaxed",
												children: step.body
											})]
										}, "open") : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
											initial: { opacity: 0 },
											animate: { opacity: 1 },
											exit: { opacity: 0 },
											transition: { duration: .3 },
											className: "text-sm md:text-base text-black/50 max-w-md",
											children: step.tagline
										}, "closed")
									})
								})
							]
						})
					}, step.key);
				})
			}) })
		})]
	});
}
var bigWords = ["STORIES", "WE'VE TOLD"];
function FeaturedWork() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "text-[#F2F0EA] py-28 md:py-40 overflow-x-clip",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-6 md:px-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1400px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center text-xs uppercase tracking-[0.25em] text-[#F2F0EA] mb-16 md:mb-24",
					children: "(03) — Latest Work"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-20 md:gap-y-32",
					children: projects.map((p, i) => {
						const right = i % 2 === 1;
						const word = bigWords[i];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: right ? "md:col-start-2 md:mt-32 lg:mt-48" : "md:col-start-1",
							children: [word ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display leading-[0.85] tracking-[-0.02em] text-[10vw] md:text-[6vw] lg:text-[5vw] text-left mb-4 md:mb-6",
								children: word
							}) }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/work/$slug",
								params: { slug: p.slug },
								className: "group block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
									className: "overflow-hidden bg-[#F2F0EA]/[0.06]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.cover,
										alt: `${p.name} — ${p.description}`,
										loading: "lazy",
										className: "w-full aspect-[4/3] object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-6 md:pt-8",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-3xl md:text-4xl lg:text-5xl leading-none tracking-[-0.03em]",
											children: p.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-3 text-[11px] uppercase tracking-[0.25em] text-[#F2F0EA]/45",
											children: [p.client, p.year ? ` · ${p.year}` : ""]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-5 text-[11px] uppercase tracking-[0.25em] text-[#F2F0EA]/45",
											children: [
												"[",
												p.tag,
												"]"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm md:text-base leading-relaxed text-[#F2F0EA]/65 max-w-prose",
											children: p.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-6 text-[11px] uppercase tracking-[0.25em] text-[#F2F0EA]/40 transition-colors duration-500 group-hover:text-[#F2F0EA]",
											children: "View project →"
										})
									]
								})] })
							}) })]
						}, p.slug);
					})
				})]
			})
		})
	});
}
var items = [
	{
		q: "What does a story-led creative agency actually do?",
		a: "We help organizations communicate what matters through strategy, creative direction and production. Whether you're launching a product, building a campaign or telling your brand's story, we start with the message before choosing the medium."
	},
	{
		q: "We already know what we want. Can you just produce it?",
		a: "Absolutely. But if we believe a stronger approach exists, we'll tell you. Sometimes a better question leads to a better outcome."
	},
	{
		q: "Do you only work on videos?",
		a: "No. We work across strategy, photography, film, design, animation, campaigns and communication planning. The medium always depends on the message."
	},
	{
		q: "Can you help us before production begins?",
		a: "Yes. In fact, that's where many projects start. We can help define the message, audience, communication strategy and creative direction before any production takes place."
	},
	{
		q: "How do you measure success?",
		a: "We believe creative should do more than look good. It should move people.\n\nDepending on the project, we track how the work performs, from reach and engagement to audience behaviour and campaign performance. We use those insights to understand what resonated, what didn't, and where the work can be strengthened.\n\nBecause delivering the work isn't always the finish line. Sometimes it's where the learning begins."
	},
	{
		q: "How much does a project cost?",
		a: "Every project is different. After understanding your goals, scope and timeline, we'll recommend an approach and provide a tailored proposal."
	}
];
function FAQ() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "text-[#F2F0EA] px-6 md:px-12 py-32 md:py-48",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.25em] mb-10 md:mb-16",
					children: "(05) — Frequently asked"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.03em] mb-16 md:mb-24",
						children: [
							"Questions,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic font-normal",
								children: "answered."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "border-t border-[#F2F0EA]/15",
						children: items.map((item, i) => {
							const isOpen = open === i;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "border-b border-[#F2F0EA]/15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setOpen(isOpen ? null : i),
									className: "w-full flex items-start justify-between gap-6 py-6 md:py-8 text-left group",
									"aria-expanded": isOpen,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-start gap-4 md:gap-8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-display text-xs md:text-sm opacity-50 mt-1 md:mt-2",
											children: ["0", i + 1]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-xl md:text-3xl lg:text-4xl leading-tight tracking-[-0.02em]",
											children: item.q
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
										animate: { rotate: isOpen ? 45 : 0 },
										transition: {
											duration: .35,
											ease: [
												.22,
												1,
												.36,
												1
											]
										},
										className: "text-2xl md:text-3xl leading-none mt-1 md:mt-2 shrink-0",
										"aria-hidden": true,
										children: "+"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
									initial: false,
									children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										initial: {
											height: 0,
											opacity: 0
										},
										animate: {
											height: "auto",
											opacity: 1
										},
										exit: {
											height: 0,
											opacity: 0
										},
										transition: {
											duration: .4,
											ease: [
												.22,
												1,
												.36,
												1
											]
										},
										className: "overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "pb-8 md:pb-10 pl-8 md:pl-16 pr-10 max-w-3xl text-sm md:text-base text-[#F2F0EA]/70 leading-relaxed space-y-4",
											children: item.a.split("\n\n").map((p, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, idx))
										})
									}, "content")
								})]
							}, i);
						})
					})
				})
			]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAtmosphere, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavIntroGate, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Philosophy, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatWeDo, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSequence, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedWork, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Index as component };
