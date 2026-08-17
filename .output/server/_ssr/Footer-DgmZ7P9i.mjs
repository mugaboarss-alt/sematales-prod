import { a as __toESM } from "../_runtime.mjs";
import { a as motion, o as AnimatePresence } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-DgmZ7P9i.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LINKS = [
	{
		hash: "philosophy",
		label: "Philosophy"
	},
	{
		hash: "what-we-do",
		label: "What We Do"
	},
	{
		hash: "process",
		label: "Process"
	},
	{
		hash: "work",
		label: "Work"
	},
	{
		hash: "faq",
		label: "FAQ"
	},
	{
		hash: "contact",
		label: "Contact"
	}
];
function Nav() {
	const onHome = useRouterState({ select: (s) => s.location.pathname }) === "/";
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!menuOpen) return;
		const onKey = (e) => {
			if (e.key === "Escape") setMenuOpen(false);
		};
		window.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [menuOpen]);
	const scrollToHash = (hash) => {
		const el = document.getElementById(hash);
		if (!el) return;
		const lenis = window.lenis;
		if (lenis?.scrollTo) lenis.scrollTo(el, { offset: 0 });
		else el.scrollIntoView({ behavior: "smooth" });
	};
	const scrollToTop = () => {
		const lenis = window.lenis;
		if (lenis?.scrollTo) lenis.scrollTo(0, { offset: 0 });
		else window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
		if (window.location.hash) history.replaceState(null, "", "/");
	};
	const openInquiry = () => {
		setMenuOpen(false);
		window.dispatchEvent(new Event("open-inquiry"));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed top-0 left-0 right-0 z-40 mix-blend-difference",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 sm:px-6 md:px-12 py-5 md:py-6 text-white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setMenuOpen(true),
					"aria-label": "Open menu",
					"aria-expanded": menuOpen,
					className: "group flex flex-col justify-center gap-[5px] w-8 h-8 shrink-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-px w-7 bg-white transition-all duration-300 group-hover:w-5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-px w-5 bg-white transition-all duration-300 group-hover:w-7" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-px w-7 bg-white transition-all duration-300 group-hover:w-4" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-w-0 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						onClick: (e) => {
							if (onHome) {
								e.preventDefault();
								scrollToTop();
							}
						},
						className: "font-display text-base sm:text-lg font-medium tracking-tight truncate inline-block max-w-full",
						children: "Sema Tales"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: openInquiry,
					className: "shrink-0 border border-white rounded-full px-3.5 sm:px-5 py-2 text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] whitespace-nowrap transition-colors hover:bg-white hover:text-black",
					children: "Let's chat"
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .3 },
		className: "fixed inset-0 z-50 bg-black text-white overflow-y-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between px-4 sm:px-6 md:px-12 py-5 md:py-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				onClick: (e) => {
					setMenuOpen(false);
					if (onHome) {
						e.preventDefault();
						setTimeout(() => scrollToTop(), 0);
					}
				},
				className: "font-display text-base sm:text-lg font-medium tracking-tight",
				children: "Sema Tales"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setMenuOpen(false),
				"aria-label": "Close menu",
				className: "relative h-8 w-8 shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-1/2 top-1/2 block h-px w-7 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-1/2 top-1/2 block h-px w-7 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white" })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "px-4 sm:px-6 md:px-12 pt-8 pb-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: LINKS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.li, {
				initial: {
					opacity: 0,
					y: 24
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: .08 + i * .06,
					duration: .55,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "border-b border-white/15",
				children: onHome ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#${item.hash}`,
					onClick: (e) => {
						e.preventDefault();
						setMenuOpen(false);
						history.replaceState(null, "", `#${item.hash}`);
						setTimeout(() => scrollToHash(item.hash), 60);
					},
					className: "block font-display uppercase text-4xl sm:text-6xl md:text-7xl leading-none tracking-[-0.03em] py-5 md:py-7 transition-opacity hover:opacity-50",
					children: item.label
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					hash: item.hash,
					onClick: () => setMenuOpen(false),
					className: "block font-display uppercase text-4xl sm:text-6xl md:text-7xl leading-none tracking-[-0.03em] py-5 md:py-7 transition-opacity hover:opacity-50",
					children: item.label
				})
			}, item.hash)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: .45,
					duration: .5
				},
				className: "mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.25em] text-white/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: openInquiry,
					className: "hover:text-white transition-colors",
					children: "Let's chat →"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "mailto:hello@sematales.com",
					className: "hover:text-white transition-colors",
					children: "hello@sematales.com"
				})]
			})]
		})]
	}) })] });
}
var variants = {
	hidden: {
		opacity: 0,
		y: 24
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .7,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	}
};
function Reveal({ children, delay = 0, as = "div", className }) {
	const Component = motion[as];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		className,
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "0px 0px -18% 0px"
		},
		variants,
		transition: { delay },
		children
	});
}
function Footer({ tone = "light" } = {}) {
	const dark = tone === "dark";
	const base = dark ? "text-black border-black/15" : "text-[#F2F0EA] border-[#F2F0EA]/15";
	const muted = dark ? "text-black/50" : "text-[#F2F0EA]/50";
	const faint = dark ? "text-black/40" : "text-[#F2F0EA]/40";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: `${base} border-t px-6 md:px-12 py-10`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col md:flex-row md:items-end md:justify-between gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-4xl md:text-6xl leading-none tracking-[-0.03em]",
				children: "Sema Tales."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-3 text-xs uppercase tracking-[0.25em] ${muted}`,
				children: "A story-led creative agency"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:items-end gap-2 text-xs uppercase tracking-[0.25em]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:hello@sematales.rw",
						className: "hover:opacity-60",
						children: "hello@sematales.rw"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.instagram.com/sematales/",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hover:opacity-60",
						children: "Instagram"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:opacity-60",
						children: "LinkedIn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: faint,
						children: ["© ", (/* @__PURE__ */ new Date()).getFullYear()]
					})
				]
			})]
		}) })
	});
}
//#endregion
export { Nav as n, Reveal as r, Footer as t };
