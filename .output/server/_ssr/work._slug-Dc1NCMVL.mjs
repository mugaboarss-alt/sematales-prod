import { a as __toESM } from "../_runtime.mjs";
import { r as projects } from "./projects-DfwLZMj1.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./work._slug-OqE53K8C.mjs";
import { t as SmoothScroll } from "./SmoothScroll-C3_qiIse.mjs";
import { n as Nav, r as Reveal, t as Footer } from "./Footer-DgmZ7P9i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-Dc1NCMVL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var RATIOS = [
	"aspect-[4/3]",
	"aspect-[3/4]",
	"aspect-[3/4]",
	"aspect-[16/9]",
	"aspect-[4/3]",
	"aspect-[4/3]"
];
var SPANS = [
	"md:col-span-7",
	"md:col-span-5",
	"md:col-span-4",
	"md:col-span-8",
	"md:col-span-6",
	"md:col-span-6"
];
function Gallery({ label, images, name, offset }) {
	if (images.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-6 md:px-12 pb-20 md:pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1600px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs uppercase tracking-[0.25em] text-black/40 mb-8 md:mb-12",
				children: label
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start",
				children: images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `min-w-0 ${SPANS[i % SPANS.length]}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						className: "overflow-hidden bg-black/[0.04]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src,
							alt: `${name} — image ${offset + i + 1}`,
							loading: "lazy",
							className: `w-full object-cover ${RATIOS[i % RATIOS.length]}`
						})
					}) })
				}, src + i))
			})]
		})
	});
}
function ProjectPage() {
	const { project } = Route.useLoaderData();
	(0, import_react.useEffect)(() => {
		const lenis = window.lenis;
		if (lenis?.scrollTo) lenis.scrollTo(0, { immediate: true });
		else window.scrollTo(0, 0);
	}, [project.slug]);
	const next = projects[(projects.findIndex((p) => p.slug === project.slug) + 1) % projects.length];
	const [firstPara, ...restParas] = project.fullDescription;
	const half = Math.ceil(project.gallery.length / 2);
	const galleryA = project.gallery.slice(0, half);
	const galleryB = project.gallery.slice(half);
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 md:mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#ff5a3c]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"[",
									project.tag,
									"]"
								] }), project.year && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-black/40",
									children: ["· ", project.year]
								})]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-6 font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-[-0.04em]",
								children: project.name
							}) }),
							project.tagline && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 font-display text-2xl md:text-4xl italic text-black/80 max-w-3xl leading-tight tracking-[-0.02em]",
								children: project.tagline
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 border-t border-black/10 pt-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-xs uppercase tracking-[0.25em] text-black/40 mb-3",
										children: "Client"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-base md:text-lg",
										children: project.client
									})] }),
									project.year && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-xs uppercase tracking-[0.25em] text-black/40 mb-3",
										children: "Year"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-base md:text-lg",
										children: project.year
									})] }),
									project.outcome && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-xs uppercase tracking-[0.25em] text-black/40 mb-3",
										children: "Impact"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-sm md:text-base leading-relaxed",
										children: project.outcome
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
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
							className: "overflow-hidden bg-black/[0.04]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: project.cover,
								alt: `${project.name} — cover`,
								className: "w-full h-auto aspect-[16/9] object-cover"
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
								children: "The project"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.03em]",
								children: project.name
							})] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							className: "md:col-span-7 md:col-start-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg md:text-2xl leading-relaxed md:leading-snug tracking-[-0.01em]",
								children: firstPara ?? project.description
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 md:mt-12 border-t border-black/10 pt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-[0.25em] text-black/40 mb-4",
									children: "Services"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-1 text-base md:text-lg text-black/75",
									children: project.scope.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, s))
								})]
							})] })
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {
					label: "Gallery",
					images: galleryA,
					name: project.name,
					offset: 0
				}),
				restParas.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "px-6 md:px-12 py-20 md:py-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 border-t border-black/10 pt-12 md:pt-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							className: "md:col-span-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-[0.25em] text-black/40 mb-4",
								children: "The work"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl md:text-5xl leading-[0.95] tracking-[-0.03em]",
								children: project.client
							})] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							className: "md:col-span-7 md:col-start-6 space-y-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: restParas.map((para, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base md:text-lg leading-relaxed text-black/75",
								children: para
							}, i)) })
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {
					label: "More imagery",
					images: galleryB,
					name: project.name,
					offset: galleryA.length
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "px-6 md:px-12 pb-24 md:pb-32 border-t border-black/10 pt-16 md:pt-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-[1600px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-[0.25em] text-black/40 mb-6",
							children: "Next project"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/work/$slug",
							params: { slug: next.slug },
							className: "group inline-flex items-baseline gap-6 hover:opacity-70 transition-opacity",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-5xl md:text-7xl lg:text-8xl leading-none tracking-[-0.03em]",
								children: next.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-[0.25em] text-black/60 group-hover:text-black transition-colors",
								children: "→"
							})]
						})] })
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { tone: "dark" })
		]
	});
}
//#endregion
export { ProjectPage as component };
