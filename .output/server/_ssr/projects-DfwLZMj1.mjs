import { a as ARS00354_HDR_default, c as ARS00377_default, i as ARS00336_HDR_default, l as ARS00441_HDR_default, n as ARS00320_HDR_default, o as ARS00357_HDR_default, r as ARS00329_HDR_default, s as ARS00375_HDR_default, t as ARS00317_HDR_default, u as ARS00447_HDR_default } from "./ARS00447-HDR-Cp94aDTX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-DfwLZMj1.js
var tigers_cover_default = "/assets/tigers-cover-BoZQpc10.jpg";
var imizi_space_default = "/assets/imizi-space-DqPmxFpW.jpg";
var projects = [{
	slug: "rssb-tigers",
	name: "Twaje",
	client: "RSSB Tigers",
	year: "2026",
	tag: "Campaign",
	scope: [
		"Campaign Strategy",
		"Creative Direction",
		"Content Production",
		"Social Media Activation"
	],
	tagline: "A season told through its people.",
	description: "A social-first campaign designed to build anticipation, spark conversation and turn supporters into active participants.",
	fullDescription: ["With the BAL playoffs and finals on home soil, RSSB Tigers wanted to reignite fan excitement, strengthen community engagement and build momentum beyond the court.", "We developed TWAJE, a social-first campaign designed to build anticipation, spark conversation and turn supporters into active participants through strategic storytelling and content."],
	outcome: "1M+ views · 100K+ accounts reached · 73K+ interactions",
	cover: tigers_cover_default,
	gallery: [tigers_cover_default]
}, {
	slug: "imizi",
	name: "Imizi",
	client: "Imizi",
	year: "2026",
	tag: "Brand Storytelling",
	scope: [
		"Brand Storytelling",
		"Visual Storytelling",
		"Photography"
	],
	tagline: "Communicating a space through photography.",
	description: "A visual library focused on light, texture and experience — helping people feel a place before they arrive.",
	fullDescription: [
		"Imizi felt their existing imagery wasn't capturing the atmosphere of the space. Guests kept telling them the same thing on arrival: it looks different in person.",
		"We spent time in the space at different hours, chasing the light, the textures and the small details that made it feel the way it does. The goal wasn't a catalogue of rooms — it was a visual language for a mood.",
		"The new library gives Imizi a consistent way to communicate their space across social, editorial and partnerships, without needing to over-explain."
	],
	cover: imizi_space_default,
	gallery: [
		ARS00317_HDR_default,
		ARS00320_HDR_default,
		ARS00329_HDR_default,
		ARS00336_HDR_default,
		ARS00354_HDR_default,
		ARS00357_HDR_default,
		ARS00375_HDR_default,
		ARS00377_default,
		ARS00441_HDR_default,
		ARS00447_HDR_default
	]
}];
function getProjectBySlug(slug) {
	return projects.find((p) => p.slug === slug);
}
//#endregion
export { tigers_cover_default as i, imizi_space_default as n, projects as r, getProjectBySlug as t };
