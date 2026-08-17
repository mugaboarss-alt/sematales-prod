import tigers from "@/assets/rssb-tigers/tigers-cover.jpg";
import imiziAsset from "@/assets/imizi-space.jpg";
import imizi1 from "@/assets/imizi/ARS00317-HDR.jpg";
import imizi2 from "@/assets/imizi/ARS00320-HDR.jpg";
import imizi3 from "@/assets/imizi/ARS00329-HDR.jpg";
import imizi4 from "@/assets/imizi/ARS00336-HDR.jpg";
import imizi5 from "@/assets/imizi/ARS00354-HDR.jpg";
import imizi6 from "@/assets/imizi/ARS00357-HDR.jpg";
import imizi7 from "@/assets/imizi/ARS00375-HDR.jpg";
import imizi8 from "@/assets/imizi/ARS00377.jpg";
import imizi9 from "@/assets/imizi/ARS00441-HDR.jpg";
import imizi10 from "@/assets/imizi/ARS00447-HDR.jpg";

export type Project = {
  slug: string;
  name: string;
  client: string;
  year?: string;
  tag: string;
  scope: string[];
  tagline?: string;
  description: string;
  fullDescription: string[];
  outcome?: string;
  cover: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "rssb-tigers",
    name: "Twaje",
    client: "RSSB Tigers",
    year: "2026",
    tag: "Campaign",
    scope: [
      "Campaign Strategy",
      "Creative Direction",
      "Content Production",
      "Social Media Activation",
    ],
    tagline: "A season told through its people.",
    description:
      "A social-first campaign designed to build anticipation, spark conversation and turn supporters into active participants.",
    fullDescription: [
      "With the BAL playoffs and finals on home soil, RSSB Tigers wanted to reignite fan excitement, strengthen community engagement and build momentum beyond the court.",
      "We developed TWAJE, a social-first campaign designed to build anticipation, spark conversation and turn supporters into active participants through strategic storytelling and content.",
    ],
    outcome: "1M+ views · 100K+ accounts reached · 73K+ interactions",
    cover: tigers,
    gallery: [tigers],
  },
  {
    slug: "imizi",
    name: "Imizi",
    client: "Imizi",
    year: "2026",
    tag: "Brand Storytelling",
    scope: ["Brand Storytelling", "Visual Storytelling", "Photography"],
    tagline: "Communicating a space through photography.",
    description:
      "A visual library focused on light, texture and experience — helping people feel a place before they arrive.",
    fullDescription: [
      "Imizi felt their existing imagery wasn't capturing the atmosphere of the space. Guests kept telling them the same thing on arrival: it looks different in person.",
      "We spent time in the space at different hours, chasing the light, the textures and the small details that made it feel the way it does. The goal wasn't a catalogue of rooms — it was a visual language for a mood.",
      "The new library gives Imizi a consistent way to communicate their space across social, editorial and partnerships, without needing to over-explain.",
    ],
    cover: imiziAsset,
    gallery: [
      imizi1,
      imizi2,
      imizi3,
      imizi4,
      imizi5,
      imizi6,
      imizi7,
      imizi8,
      imizi9,
      imizi10,
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
