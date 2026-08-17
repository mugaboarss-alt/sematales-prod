import { a as __toESM } from "../_runtime.mjs";
import { a as motion, o as AnimatePresence, t as useInView } from "../_libs/framer-motion.mjs";
import { a as ARS00354_HDR_default, c as ARS00377_default, i as ARS00336_HDR_default, l as ARS00441_HDR_default, n as ARS00320_HDR_default, o as ARS00357_HDR_default, r as ARS00329_HDR_default, s as ARS00375_HDR_default, t as ARS00317_HDR_default, u as ARS00447_HDR_default } from "./ARS00447-HDR-Cp94aDTX.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SmoothScroll } from "./SmoothScroll-C3_qiIse.mjs";
import { n as Nav, r as Reveal, t as Footer } from "./Footer-DgmZ7P9i.mjs";
import { t as ContactForm } from "./ContactForm-CJ_3bzR1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work.imizi-CPFTVJH0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tiles = [
	{
		src: ARS00317_HDR_default,
		alt: "Imizi — lounge under woven pendants",
		ratio: 3 / 4
	},
	{
		src: ARS00320_HDR_default,
		alt: "Imizi — daybed and geometric wall piece",
		ratio: 3 / 4
	},
	{
		src: ARS00329_HDR_default,
		alt: "Imizi — shelf detail with vinyl and books",
		ratio: 3 / 4
	},
	{
		src: ARS00336_HDR_default,
		alt: "Imizi — booth by the green window",
		ratio: 3 / 4
	},
	{
		src: ARS00354_HDR_default,
		alt: "Imizi — signage and library wall",
		ratio: 4 / 5
	},
	{
		src: ARS00357_HDR_default,
		alt: "Imizi — banquette and dining table",
		ratio: 3 / 4
	},
	{
		src: ARS00375_HDR_default,
		alt: "Imizi — Forest Rum on the back bar",
		ratio: 3 / 4
	},
	{
		src: ARS00377_default,
		alt: "Imizi — bar and stools",
		ratio: 3 / 4
	},
	{
		src: ARS00441_HDR_default,
		alt: "Imizi — lounge with patterned rug",
		ratio: 3 / 4
	},
	{
		src: ARS00447_HDR_default,
		alt: "Imizi — reading corner detail",
		ratio: 4 / 5
	}
];
function ImiziCaseStudy() {
	(0, import_react.useEffect)(() => {
		const lenis = window.lenis;
		if (lenis?.scrollTo) lenis.scrollTo(0, { immediate: true });
		else window.scrollTo(0, 0);
	}, []);
	const [lightboxIndex, setLightboxIndex] = (0, import_react.useState)(null);
	const openLightbox = (0, import_react.useCallback)((i) => setLightboxIndex(i), []);
	const closeLightbox = (0, import_react.useCallback)(() => setLightboxIndex(null), []);
	const nextTile = (0, import_react.useCallback)(() => setLightboxIndex((i) => i === null ? null : (i + 1) % tiles.length), []);
	const prevTile = (0, import_react.useCallback)(() => setLightboxIndex((i) => i === null ? null : (i - 1 + tiles.length) % tiles.length), []);
	(0, import_react.useEffect)(() => {
		if (lightboxIndex === null) return;
		const onKey = (e) => {
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
	}, [
		lightboxIndex,
		closeLightbox,
		nextTile,
		prevTile
	]);
	const galleryA = tiles.slice(0, 5);
	const galleryB = tiles.slice(5);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-[#F4F1EB] text-black min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "px-6 md:px-12 pt-32 md:pt-40 pb-12 md:pb-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1600px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								hash: "work",
								className: "text-xs uppercase tracking-[0.25em] text-black/60 hover:text-black transition-colors",
								children: "← Back to work"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-10 md:mt-16 font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-[-0.04em]",
								children: "Imizi"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 border-t border-black/10 pt-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-xs uppercase tracking-[0.25em] text-black/40 mb-3",
										children: "Client"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-base md:text-lg",
										children: "Imizi"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-xs uppercase tracking-[0.25em] text-black/40 mb-3",
										children: "Year"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-base md:text-lg",
										children: "2026"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-xs uppercase tracking-[0.25em] text-black/40 mb-3",
										children: "Scope"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-base md:text-lg",
										children: "Photography, Brand Storytelling"
									})] })
								]
							}) })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "px-6 md:px-12 pb-20 md:pb-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-[1600px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative w-full overflow-hidden bg-black/[0.04] aspect-[16/9]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: ARS00375_HDR_default,
								alt: "Imizi — Forest Rum on the back bar",
								className: "absolute inset-0 h-full w-full object-cover"
							})
						}) })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "px-6 md:px-12 pb-20 md:pb-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 border-t border-black/10 pt-12 md:pt-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							className: "md:col-span-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-[0.25em] text-black/40 mb-4",
								children: "The outcome"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.03em]",
								children: "Imizi"
							})] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							className: "md:col-span-7 md:col-start-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg md:text-2xl leading-relaxed md:leading-snug tracking-[-0.01em]",
								children: "A visual library that helps guests connect with Imizi before they ever step through the door."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 md:mt-12 border-t border-black/10 pt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-[0.25em] text-black/40 mb-4",
									children: "Services"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base md:text-lg text-black/75",
									children: "Photography, Brand Storytelling"
								})]
							})] })
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MasonryGallery, {
					label: "Gallery",
					tiles: galleryA,
					offset: 0,
					onOpen: openLightbox
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "px-6 md:px-12 py-20 md:py-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 border-t border-black/10 pt-12 md:pt-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							className: "md:col-span-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-[0.25em] text-black/40 mb-4",
								children: "Brief"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl md:text-5xl leading-[0.95] tracking-[-0.03em]",
								children: "Imizi"
							})] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							className: "md:col-span-7 md:col-start-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg md:text-2xl leading-relaxed md:leading-snug tracking-[-0.01em] whitespace-pre-line",
								children: "A place that feels like an extension of the spirit itself. Through light, texture, detail and atmosphere, these photographs capture the quiet character of the IMIZI Residency, inviting you to feel the space before you ever step into it."
							}) })
						})]
					})
				}),
				galleryB.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MasonryGallery, {
					label: "More from the project",
					tiles: galleryB,
					offset: galleryA.length,
					onOpen: openLightbox
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-t border-black/10 px-6 md:px-12 py-32 md:py-48",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-4xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.04em]",
								children: [
									"Have something",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"worth ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic font-normal",
										children: "saying?"
									})
								]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-8 md:mt-10 text-lg md:text-xl text-black/70",
									children: "Let's bring your message to life."
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-12 md:mt-16 flex justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => window.dispatchEvent(new Event("open-inquiry")),
										className: "group inline-flex items-center gap-4 border border-black rounded-full pl-6 pr-2 py-2 text-sm uppercase tracking-[0.25em] transition-colors hover:bg-black hover:text-white",
										children: ["Start the conversation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:translate-x-1 group-hover:bg-white group-hover:text-black",
											children: "→"
										})]
									})
								})
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "px-6 md:px-12 pb-24 md:pb-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1600px] flex items-center justify-between text-xs uppercase tracking-[0.25em] text-black/50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: "work",
							className: "hover:text-black transition-colors",
							children: "← Back to selected work"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "hover:text-black transition-colors",
							children: "Home"
						})]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, { modalOnly: true }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { tone: "dark" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: lightboxIndex !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
				tile: tiles[lightboxIndex],
				onClose: closeLightbox,
				onNext: nextTile,
				onPrev: prevTile
			}) })
		]
	});
}
var SPANS = [
	"md:col-span-7",
	"md:col-span-5",
	"md:col-span-4",
	"md:col-span-8",
	"md:col-span-6",
	"md:col-span-6"
];
function MasonryGallery({ label, tiles: items, offset, onOpen }) {
	const [isTouch, setIsTouch] = (0, import_react.useState)(true);
	const [cursor, setCursor] = (0, import_react.useState)({
		x: 0,
		y: 0,
		visible: false,
		onTile: false
	});
	(0, import_react.useEffect)(() => {
		setIsTouch(window.matchMedia("(hover: none)").matches);
	}, []);
	const handleMove = (e) => {
		if (isTouch) return;
		setCursor((c) => ({
			...c,
			x: e.clientX,
			y: e.clientY,
			visible: true
		}));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "px-6 md:px-12 pb-20 md:pb-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1600px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs uppercase tracking-[0.25em] text-black/40 mb-8 md:mb-12",
				children: label
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				onMouseMove: handleMove,
				onMouseLeave: () => setCursor((c) => ({
					...c,
					visible: false,
					onTile: false
				})),
				className: `grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start ${!isTouch ? "md:cursor-none" : ""}`,
				children: items.map((tile, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `min-w-0 ${SPANS[i % SPANS.length]}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MasonryTile, {
						tile,
						index: i,
						onOpen: () => onOpen(offset + i),
						onTileEnter: () => setCursor((c) => ({
							...c,
							onTile: true
						})),
						onTileLeave: () => setCursor((c) => ({
							...c,
							onTile: false
						}))
					})
				}, i))
			})]
		}), !isTouch && cursor.visible && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none fixed z-40 hidden md:flex items-center justify-center rounded-full bg-black text-[#F4F1EB] text-[10px] uppercase tracking-[0.2em] transition-[width,height,opacity] duration-200 ease-out",
			style: {
				left: cursor.x,
				top: cursor.y,
				transform: "translate(-50%, -50%)",
				width: cursor.onTile ? 72 : 12,
				height: cursor.onTile ? 72 : 12
			},
			children: cursor.onTile ? "View" : ""
		})]
	});
}
function MasonryTile({ tile, index, onOpen, onTileEnter, onTileLeave }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "0px 0px -15% 0px"
	});
	const delay = index % 6 * .05;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		initial: {
			opacity: 0,
			y: 24
		},
		animate: inView ? {
			opacity: 1,
			y: 0
		} : {},
		transition: {
			duration: .7,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "mb-4 md:mb-6 break-inside-avoid",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "button",
			tabIndex: 0,
			onClick: onOpen,
			onMouseEnter: onTileEnter,
			onMouseLeave: onTileLeave,
			onKeyDown: (e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					onOpen();
				}
			},
			"aria-label": tile.alt,
			className: "group block w-full cursor-pointer overflow-hidden bg-black/[0.04] text-left",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: tile.src,
				alt: tile.alt,
				loading: "lazy",
				style: { aspectRatio: Math.max(tile.ratio, .8) },
				className: "w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
			})
		})
	});
}
function Lightbox({ tile, onClose, onNext, onPrev }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .25 },
		className: "fixed inset-0 z-50 bg-black/95 backdrop-blur-sm",
		onClick: onClose,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onClose,
				"aria-label": "Close",
				className: "absolute top-6 right-6 z-10 text-xs uppercase tracking-[0.25em] text-white/70 hover:text-white transition-colors",
				children: "Close ✕"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation();
					onPrev();
				},
				"aria-label": "Previous",
				className: "absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 h-12 w-12 grid place-items-center rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors",
				children: "←"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation();
					onNext();
				},
				"aria-label": "Next",
				className: "absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 h-12 w-12 grid place-items-center rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors",
				children: "→"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex items-center justify-center p-8 md:p-16",
				onClick: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: tile.src,
					alt: tile.alt,
					className: "max-h-full max-w-full object-contain"
				})
			})
		]
	});
}
//#endregion
export { ImiziCaseStudy as component };
