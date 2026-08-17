import { a as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SmoothScroll-C3_qiIse.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function SmoothScroll() {
	(0, import_react.useEffect)(() => {
		const lenis = new Lenis({
			duration: 1.15,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
		});
		window.lenis = lenis;
		let raf = 0;
		const loop = (time) => {
			lenis.raf(time);
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		return () => {
			cancelAnimationFrame(raf);
			delete window.lenis;
			lenis.destroy();
		};
	}, []);
	return null;
}
//#endregion
export { SmoothScroll as t };
