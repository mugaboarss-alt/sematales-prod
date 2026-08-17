import { a as __toESM } from "../_runtime.mjs";
import { a as motion, n as useReducedMotion, o as AnimatePresence } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as Reveal } from "./Footer-DgmZ7P9i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ContactForm-CJ_3bzR1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WORDS = [
	"stories",
	"ideas",
	"something",
	"future"
];
function RotatingWord() {
	const reduceMotion = useReducedMotion();
	const [index, setIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (reduceMotion) return;
		const id = window.setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 3e3);
		return () => window.clearInterval(id);
	}, [reduceMotion]);
	if (reduceMotion) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "italic font-normal",
		children: WORDS[0]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "relative inline-block align-baseline",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "invisible italic font-normal",
			children: "something"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			mode: "sync",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				className: "absolute left-0 top-0 whitespace-nowrap italic font-normal",
				initial: { opacity: 0 },
				animate: {
					opacity: 1,
					transition: {
						duration: 1.1,
						ease: "easeOut"
					}
				},
				exit: {
					opacity: 0,
					transition: {
						duration: .9,
						ease: "easeIn"
					}
				},
				children: WORDS[index]
			}, index)
		})]
	});
}
function ContactForm({ modalOnly = false } = {}) {
	if (modalOnly) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "text-[#F2F0EA] px-6 md:px-12 pt-32 md:pt-48 pb-24 md:pb-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.25em] text-[#F2F0EA]/45 mb-12 md:mb-20",
					children: "(06) — Start a conversation"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-left text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.92] tracking-[-0.04em]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: "Let's"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: "create"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotatingWord, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: "together."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 md:mt-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-[0.25em] text-[#F2F0EA]/45 mb-5 md:mb-7",
								children: "Contact us."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:hello@sematales.rw",
								className: "font-display inline-block text-2xl sm:text-4xl md:text-6xl lg:text-7xl leading-none tracking-[-0.03em] underline underline-offset-[0.18em] decoration-[0.04em] decoration-[#F2F0EA]/40 transition-colors duration-500 hover:decoration-[#F2F0EA] break-all sm:break-normal",
								children: "hello@sematales.rw"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-12 md:mt-16",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => window.dispatchEvent(new Event("open-inquiry")),
									className: "group inline-flex items-center gap-4 border border-[#F2F0EA] rounded-full pl-6 pr-2 py-2 text-[11px] uppercase tracking-[0.25em] transition-colors hover:bg-[#F2F0EA] hover:text-[#171714]",
									children: ["Write us a note", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F0EA] text-[#171714] transition-transform group-hover:translate-x-1",
										children: "→"
									})]
								})
							})
						]
					})
				})
			]
		})
	});
}
//#endregion
export { ContactForm as t };
