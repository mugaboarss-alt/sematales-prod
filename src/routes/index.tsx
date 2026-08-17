import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";

import { ScrollAtmosphere } from "@/components/ScrollAtmosphere";
import { NavIntroGate } from "@/components/NavIntroGate";
import { Hero } from "@/components/Hero";


import { Philosophy } from "@/components/Philosophy";
import { WhatWeDo } from "@/components/WhatWeDo";
import { ProcessSequence } from "@/components/ProcessSequence";
import { FeaturedWork } from "@/components/FeaturedWork";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sema Tales — Story-led creative agency" },
      {
        name: "description",
        content:
          "Sema Tales is a story-led creative agency helping brands, organizations and ideas communicate with clarity through strategy, creative direction and production.",
      },
      { property: "og:title", content: "Sema Tales — Story-led creative agency" },
      {
        property: "og:description",
        content:
          "Helping your message find its voice. Strategy, creative direction and production for brands with something worth saying.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sema Tales — Story-led creative agency" },
      {
        name: "twitter:description",
        content: "Helping your message find its voice.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      
      <ScrollAtmosphere />
      <SmoothScroll />
      <NavIntroGate />
      <main>
        <Hero />
        <Philosophy />
        <WhatWeDo />
        <ProcessSequence />
        <FeaturedWork />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
