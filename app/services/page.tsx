import Link from "next/link";

import { SectionBand } from "@/components/main/section-band";
import { SiteHero } from "@/components/main/site-hero";

const serviceCards = [
  {
    title: "E-commerce Marketing",
    href: "/services/e-commerce-marketing",
    description:
      "Amazon, Flipkart, and marketplace support for launches, ads, cataloging, storefronts, and listings.",
  },
  {
    title: "Web Development",
    href: "/services/web-development",
    description:
      "Custom websites, UI/UX, CMS builds, and responsive storefronts that are easy to manage.",
  },
  {
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    description:
      "SEO, PPC, content, social media, and campaigns shaped around measurable growth.",
  },
  {
    title: "Graphic Designing & Videos",
    href: "/services/graphic-designing-videos",
    description:
      "Branding, 3D graphics, video editing, and product-specific content for online channels.",
  },
  {
    title: "Product Photography",
    href: "/services/product-photography",
    description:
      "Lifestyle, still, and 360-degree product visuals tuned for conversion and marketplace listings.",
  },
];

const marketplaceCards = [
  { title: "Nykaa", href: "/e-commerce#nykaa" },
  { title: "Jio Mart", href: "/e-commerce#jiomart" },
  { title: "Etsy", href: "/e-commerce#etsy" },
  { title: "Walmart", href: "/e-commerce#walmart" },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen w-full pb-20">
      <SiteHero
        eyebrow="Services"
        title="Everything a modern brand needs to grow online"
        lead="We build around Evitamin's service structure: marketplace operations, website development, digital marketing, creative production, and product imagery under one roof."
        primaryCta={{ label: "Explore e-commerce", href: "/e-commerce" }}
        secondaryCta={{ label: "Contact us", href: "/contact" }}
        asideLabel="Service stack"
        asideTitle="Built for selling, not just showing up"
        asideText="A single team can carry a brand from account setup and listing to campaigns, websites, visuals, and ongoing support."
        bullets={[
          {
            title: "Marketplace growth",
            description: "Amazon, Flipkart, quick commerce, and specialty platforms.",
          },
          {
            title: "Digital reach",
            description: "SEO, PPC, social, content, and campaign planning.",
          },
          {
            title: "Creative production",
            description: "Graphics, brand assets, and product-focused visual content.",
          },
        ]}
      />

      <SectionBand
        eyebrow="Core offerings"
        title="Choose the service line you need"
        description="Each area below expands into a deeper page with the most relevant details from the Evitamin reference site."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="rounded-2xl border border-white/10 bg-[rgba(7,4,24,0.72)] p-5 transition hover:border-[rgba(255,216,106,0.4)] hover:bg-[rgba(12,7,34,0.78)]"
            >
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </SectionBand>

      <SectionBand
        eyebrow="Marketplace channels"
        title="Quick commerce and specialty marketplace coverage"
        description="The reference site also surfaces a wider marketplace footprint, so we keep those destinations visible here too."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {marketplaceCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="rounded-2xl border border-white/10 bg-[rgba(7,4,24,0.72)] p-5 text-center transition hover:border-[rgba(255,216,106,0.4)] hover:bg-[rgba(12,7,34,0.78)]"
            >
              <h3 className="text-base font-semibold text-white">{card.title}</h3>
            </Link>
          ))}
        </div>
      </SectionBand>
    </main>
  );
}
