globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-08-17T11:54:55.549Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/ARS00377-CvxLWVwQ.jpg": {
		"type": "image/jpeg",
		"etag": "\"7dd46-OsgK8J+AuOHjyTS9eD58ol/Y+jQ\"",
		"mtime": "2026-08-17T11:54:55.093Z",
		"size": 515398,
		"path": "../public/assets/ARS00377-CvxLWVwQ.jpg"
	},
	"/assets/ContactForm-B98Emp6F.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b05-bUg0YMRQYIzQZcwwMqDBid7yKfc\"",
		"mtime": "2026-08-17T11:54:55.090Z",
		"size": 2821,
		"path": "../public/assets/ContactForm-B98Emp6F.js"
	},
	"/assets/Footer-CBCHXvfk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17ed-ZtndI4RjI1iwimRjweF3m38Tr+Y\"",
		"mtime": "2026-08-17T11:54:55.090Z",
		"size": 6125,
		"path": "../public/assets/Footer-CBCHXvfk.js"
	},
	"/assets/SmoothScroll-CL78FdSl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"48d9-rxy07txsyVYD0an/qhfM91d2M54\"",
		"mtime": "2026-08-17T11:54:55.091Z",
		"size": 18649,
		"path": "../public/assets/SmoothScroll-CL78FdSl.js"
	},
	"/assets/back-to-work-poster-xY8r033R.jpg": {
		"type": "image/jpeg",
		"etag": "\"24d26-jZlWqtmfaelVvWrsRSryVqQLTiU\"",
		"mtime": "2026-08-17T11:54:55.099Z",
		"size": 150822,
		"path": "../public/assets/back-to-work-poster-xY8r033R.jpg"
	},
	"/assets/bal-champions-ck5JWuYE.jpg": {
		"type": "image/jpeg",
		"etag": "\"4a80d-k5CdOpJLwZlNJTq4u5zMr4PJT/Q\"",
		"mtime": "2026-08-17T11:54:55.099Z",
		"size": 305165,
		"path": "../public/assets/bal-champions-ck5JWuYE.jpg"
	},
	"/assets/bench-duo-0YpyrX8n.jpg": {
		"type": "image/jpeg",
		"etag": "\"71a22-Rxnz4q5KGR97SZzxnkrhmVxAvk8\"",
		"mtime": "2026-08-17T11:54:55.100Z",
		"size": 465442,
		"path": "../public/assets/bench-duo-0YpyrX8n.jpg"
	},
	"/assets/court-pair-motion-jNjldQKI.jpg": {
		"type": "image/jpeg",
		"etag": "\"6bd62-xG0iSCz9WjsMpL4g52vO1bfbwgk\"",
		"mtime": "2026-08-17T11:54:55.100Z",
		"size": 441698,
		"path": "../public/assets/court-pair-motion-jNjldQKI.jpg"
	},
	"/assets/court-pair-standing-Cx2Sd01c.jpg": {
		"type": "image/jpeg",
		"etag": "\"6bec7-lq3cc6nMPHD0FNiecW0XUhZtEHY\"",
		"mtime": "2026-08-17T11:54:55.100Z",
		"size": 442055,
		"path": "../public/assets/court-pair-standing-Cx2Sd01c.jpg"
	},
	"/assets/court-pair-portrait-CxjnTf33.jpg": {
		"type": "image/jpeg",
		"etag": "\"6f54a-LR1nUSbXb6WTyeHwiksSNTi/+LY\"",
		"mtime": "2026-08-17T11:54:55.100Z",
		"size": 456010,
		"path": "../public/assets/court-pair-portrait-CxjnTf33.jpg"
	},
	"/assets/embrace-backs-23-CHNdVeEi.jpg": {
		"type": "image/jpeg",
		"etag": "\"73441-O0l3/5oEq1H+wWiWkNQ9U0IDb6A\"",
		"mtime": "2026-08-17T11:54:55.101Z",
		"size": 472129,
		"path": "../public/assets/embrace-backs-23-CHNdVeEi.jpg"
	},
	"/assets/fest-crowd-hands-D4amopp9.jpg": {
		"type": "image/jpeg",
		"etag": "\"42eeb-S8IoWfXXZlqDtF6Vfz4jIeyblO0\"",
		"mtime": "2026-08-17T11:54:55.101Z",
		"size": 274155,
		"path": "../public/assets/fest-crowd-hands-D4amopp9.jpg"
	},
	"/assets/fest-girl-with-ball-BX7mTipl.jpg": {
		"type": "image/jpeg",
		"etag": "\"49c8d-MVDn4Y8uJOKr2OX2FeFS4YsGNf8\"",
		"mtime": "2026-08-17T11:54:55.101Z",
		"size": 302221,
		"path": "../public/assets/fest-girl-with-ball-BX7mTipl.jpg"
	},
	"/assets/ARS00336-HDR-D_-K3UyA.jpg": {
		"type": "image/jpeg",
		"etag": "\"9429f-5/1YJ0FEQbyD+YD878esTGBfrFg\"",
		"mtime": "2026-08-17T11:54:55.092Z",
		"size": 606879,
		"path": "../public/assets/ARS00336-HDR-D_-K3UyA.jpg"
	},
	"/assets/ARS00320-HDR-C-f2SGxY.jpg": {
		"type": "image/jpeg",
		"etag": "\"831e1-qR0MHjN7LZpjW/Twueq1lelyXos\"",
		"mtime": "2026-08-17T11:54:55.091Z",
		"size": 537057,
		"path": "../public/assets/ARS00320-HDR-C-f2SGxY.jpg"
	},
	"/assets/ARS00329-HDR-lH5oajVl.jpg": {
		"type": "image/jpeg",
		"etag": "\"be0c6-KZZ9DPoNj6DBGcyQ9n+f/vbR2nM\"",
		"mtime": "2026-08-17T11:54:55.091Z",
		"size": 778438,
		"path": "../public/assets/ARS00329-HDR-lH5oajVl.jpg"
	},
	"/assets/ARS00354-HDR-ZWmTtYSz.jpg": {
		"type": "image/jpeg",
		"etag": "\"bbac9-UnwLtLhUaSxG121ynAQf+Lkrn1k\"",
		"mtime": "2026-08-17T11:54:55.092Z",
		"size": 768713,
		"path": "../public/assets/ARS00354-HDR-ZWmTtYSz.jpg"
	},
	"/assets/ARS00357-HDR-DcIoIcn-.jpg": {
		"type": "image/jpeg",
		"etag": "\"956eb-iIjw6EtGQFXqTLQv2A9dhdpFWFQ\"",
		"mtime": "2026-08-17T11:54:55.092Z",
		"size": 612075,
		"path": "../public/assets/ARS00357-HDR-DcIoIcn-.jpg"
	},
	"/assets/ARS00375-HDR-EvsqnCnP.jpg": {
		"type": "image/jpeg",
		"etag": "\"9453f-8nKTvRPf4gAKgUy/KA0lZocS2OI\"",
		"mtime": "2026-08-17T11:54:55.092Z",
		"size": 607551,
		"path": "../public/assets/ARS00375-HDR-EvsqnCnP.jpg"
	},
	"/assets/ARS00441-HDR-BWQvKcL6.jpg": {
		"type": "image/jpeg",
		"etag": "\"b5190-gA4VITQngMOPhtr3u72565LVMUs\"",
		"mtime": "2026-08-17T11:54:55.094Z",
		"size": 741776,
		"path": "../public/assets/ARS00441-HDR-BWQvKcL6.jpg"
	},
	"/assets/ARS00447-HDR-CVb-i2Ke.jpg": {
		"type": "image/jpeg",
		"etag": "\"d9b14-VXbcJXhq5/qLXmHSUcL1aACOmg8\"",
		"mtime": "2026-08-17T11:54:55.095Z",
		"size": 891668,
		"path": "../public/assets/ARS00447-HDR-CVb-i2Ke.jpg"
	},
	"/assets/fest-court-wide-COonmVOf.jpg": {
		"type": "image/jpeg",
		"etag": "\"aa053-bhpAdhm9E1cog7QebaAvRON1pMg\"",
		"mtime": "2026-08-17T11:54:55.101Z",
		"size": 696403,
		"path": "../public/assets/fest-court-wide-COonmVOf.jpg"
	},
	"/assets/imizi-space-DqPmxFpW.jpg": {
		"type": "image/jpeg",
		"etag": "\"ac594-UGT8JluGflPUrm0z0xAAJyxjS8Q\"",
		"mtime": "2026-08-17T11:54:55.101Z",
		"size": 705940,
		"path": "../public/assets/imizi-space-DqPmxFpW.jpg"
	},
	"/assets/imyenda-teaser-poster-hatykXPZ.jpg": {
		"type": "image/jpeg",
		"etag": "\"10c0b-T5ghLu2GBmiMiOX0zU93ymx85q8\"",
		"mtime": "2026-08-17T11:54:55.106Z",
		"size": 68619,
		"path": "../public/assets/imyenda-teaser-poster-hatykXPZ.jpg"
	},
	"/assets/kit-jersey-in-light-CrZnbgih.jpg": {
		"type": "image/jpeg",
		"etag": "\"4c4e4-JaY/jNVa65fyz4yCxkvNk6GXS0A\"",
		"mtime": "2026-08-17T11:54:55.107Z",
		"size": 312548,
		"path": "../public/assets/kit-jersey-in-light-CrZnbgih.jpg"
	},
	"/assets/kit-flatlay-wide-Ci6Y9-4U.jpg": {
		"type": "image/jpeg",
		"etag": "\"38239-9eTb3ulnRVTJOd3HRKGGIMVAgsY\"",
		"mtime": "2026-08-17T11:54:55.106Z",
		"size": 229945,
		"path": "../public/assets/kit-flatlay-wide-Ci6Y9-4U.jpg"
	},
	"/assets/mural-rafiki-duo-BuYoQvWx.jpg": {
		"type": "image/jpeg",
		"etag": "\"790d4-/+02a08hipvNdTjtxutNtb5hDrs\"",
		"mtime": "2026-08-17T11:54:55.107Z",
		"size": 495828,
		"path": "../public/assets/mural-rafiki-duo-BuYoQvWx.jpg"
	},
	"/assets/mural-rafiki-laughing-RpoixpN5.jpg": {
		"type": "image/jpeg",
		"etag": "\"78193-8qA7LBZMAsC7kptbPI47PgkRI5I\"",
		"mtime": "2026-08-17T11:54:55.107Z",
		"size": 491923,
		"path": "../public/assets/mural-rafiki-laughing-RpoixpN5.jpg"
	},
	"/assets/routes-D_g5fB7q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7b7f-s+gAdNZJv1+Yn8G1O+oM1tuJeos\"",
		"mtime": "2026-08-17T11:54:55.091Z",
		"size": 31615,
		"path": "../public/assets/routes-D_g5fB7q.js"
	},
	"/assets/run-it-back-poster-BVFo16f_.jpg": {
		"type": "image/jpeg",
		"etag": "\"7a62-Hz/t+58UdftaIreTQh4jLL5Q/jI\"",
		"mtime": "2026-08-17T11:54:55.121Z",
		"size": 31330,
		"path": "../public/assets/run-it-back-poster-BVFo16f_.jpg"
	},
	"/assets/players-meet-kids-C9X9uUMH.jpg": {
		"type": "image/jpeg",
		"etag": "\"773a4-RqZgBbBFyouYNWEVUkeqlVUKmvU\"",
		"mtime": "2026-08-17T11:54:55.107Z",
		"size": 488356,
		"path": "../public/assets/players-meet-kids-C9X9uUMH.jpg"
	},
	"/assets/seated-courtside-talk-Cg9bg_hk.jpg": {
		"type": "image/jpeg",
		"etag": "\"53a0e-84yo3VbEmxM+hVsUrbBG0B0oykU\"",
		"mtime": "2026-08-17T11:54:55.121Z",
		"size": 342542,
		"path": "../public/assets/seated-courtside-talk-Cg9bg_hk.jpg"
	},
	"/assets/sideline-players-talking-DImfOI6Z.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c4f1-w3nec8q1ZDmbO/VG9FpGNnj7610\"",
		"mtime": "2026-08-17T11:54:55.128Z",
		"size": 378097,
		"path": "../public/assets/sideline-players-talking-DImfOI6Z.jpg"
	},
	"/assets/street-portrait-13-DAkw93Ky.jpg": {
		"type": "image/jpeg",
		"etag": "\"4ccd2-eTlen+p1PjsBg64VRTEmcGLk+Uw\"",
		"mtime": "2026-08-17T11:54:55.128Z",
		"size": 314578,
		"path": "../public/assets/street-portrait-13-DAkw93Ky.jpg"
	},
	"/assets/styles-CynDkWaZ.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15ab9-Gzv+sqxYjgckHLAWRYj9uk2cT7w\"",
		"mtime": "2026-08-17T11:54:55.128Z",
		"size": 88761,
		"path": "../public/assets/styles-CynDkWaZ.css"
	},
	"/assets/use-in-view-CeaV0Noh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"32f-R0Yi8efXZ2k/4anjRlmBC2VqBX8\"",
		"mtime": "2026-08-17T11:54:55.091Z",
		"size": 815,
		"path": "../public/assets/use-in-view-CeaV0Noh.js"
	},
	"/assets/team-campaign-poster-DSrVcvf7.jpg": {
		"type": "image/jpeg",
		"etag": "\"579bb-374yEowFeQsbgURHDnT8g/77bhw\"",
		"mtime": "2026-08-17T11:54:55.148Z",
		"size": 358843,
		"path": "../public/assets/team-campaign-poster-DSrVcvf7.jpg"
	},
	"/assets/work._slug-BmhblLXG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2fb-+wNHa+reIYQ/HM/L9FxpWb6KDv8\"",
		"mtime": "2026-08-17T11:54:55.091Z",
		"size": 763,
		"path": "../public/assets/work._slug-BmhblLXG.js"
	},
	"/assets/index-hdFCMG9Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"84173-eD3mEobHS9aRgqGU5CWGE0rh784\"",
		"mtime": "2026-08-17T11:54:55.090Z",
		"size": 541043,
		"path": "../public/assets/index-hdFCMG9Y.js"
	},
	"/assets/work._slug-Bd-PEtJy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"193e-E3LT49NZZKxnC2dnmJhN+JQRNX0\"",
		"mtime": "2026-08-17T11:54:55.091Z",
		"size": 6462,
		"path": "../public/assets/work._slug-Bd-PEtJy.js"
	},
	"/assets/work.imizi-DeOmySLw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b5b-ai2cfrqgco0aSvh4bzWpxE5jGFE\"",
		"mtime": "2026-08-17T11:54:55.091Z",
		"size": 11099,
		"path": "../public/assets/work.imizi-DeOmySLw.js"
	},
	"/assets/work.rssb-tigers-BgRSsEHR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4efa-ZcfZ9vTPiavLxHQfhzsaZDxzqB4\"",
		"mtime": "2026-08-17T11:54:55.091Z",
		"size": 20218,
		"path": "../public/assets/work.rssb-tigers-BgRSsEHR.js"
	},
	"/assets/tigers-cover-BoZQpc10.jpg": {
		"type": "image/jpeg",
		"etag": "\"8eb88-nDyb56T7H5/Aya2WpoEfTqgD0Sk\"",
		"mtime": "2026-08-17T11:54:55.148Z",
		"size": 584584,
		"path": "../public/assets/tigers-cover-BoZQpc10.jpg"
	},
	"/assets/imyenda-teaser-Ch24TVah.mp4": {
		"type": "video/mp4",
		"etag": "\"386dc1-AR6RuOMVCZe37pclKPsZtmbrAsM\"",
		"mtime": "2026-08-17T11:54:55.103Z",
		"size": 3698113,
		"path": "../public/assets/imyenda-teaser-Ch24TVah.mp4"
	},
	"/assets/back-to-work-BZ3BvspT.mp4": {
		"type": "video/mp4",
		"etag": "\"a18282-HrmOHfWIc0LAuTgKEBxeQTbRedU\"",
		"mtime": "2026-08-17T11:54:55.099Z",
		"size": 10584706,
		"path": "../public/assets/back-to-work-BZ3BvspT.mp4"
	},
	"/assets/sema-intro-reel-BhAZB3Ev.mp4": {
		"type": "video/mp4",
		"etag": "\"a8ec30-YpRYSrp4MFRXe/LhsQCGDYDOR+Y\"",
		"mtime": "2026-08-17T11:54:55.128Z",
		"size": 11070512,
		"path": "../public/assets/sema-intro-reel-BhAZB3Ev.mp4"
	},
	"/assets/run-it-back-DS7nkDme.mp4": {
		"type": "video/mp4",
		"etag": "\"fa591f-O1nbMmUgjCgg0XiECyID004pf4Q\"",
		"mtime": "2026-08-17T11:54:55.116Z",
		"size": 16406815,
		"path": "../public/assets/run-it-back-DS7nkDme.mp4"
	},
	"/assets/team-campaign-C9X_oQVi.mp4": {
		"type": "video/mp4",
		"etag": "\"15b8e07-1LLQbGEgbruyFmtPEU4J8rx+/u8\"",
		"mtime": "2026-08-17T11:54:55.145Z",
		"size": 22777351,
		"path": "../public/assets/team-campaign-C9X_oQVi.mp4"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_32PI8o = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_32PI8o
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
