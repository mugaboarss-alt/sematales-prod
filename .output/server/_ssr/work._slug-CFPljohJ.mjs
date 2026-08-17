import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Nav, t as Footer } from "./Footer-DgmZ7P9i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-CFPljohJ.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-[#F4F1EB] text-black min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "min-h-screen flex items-center justify-center px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-[0.25em] text-black/40 mb-6",
							children: "404"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-5xl md:text-7xl mb-8",
							children: "Project not found"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: "work",
							className: "text-xs uppercase tracking-[0.25em] underline underline-offset-4",
							children: "Back to selected work"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { tone: "dark" })
		]
	});
}
//#endregion
export { ProjectNotFound as notFoundComponent };
