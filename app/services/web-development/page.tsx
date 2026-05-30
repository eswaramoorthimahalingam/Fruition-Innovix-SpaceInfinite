import Link from "next/link";

import { SectionBand } from "@/components/main/section-band";
import { SiteHero } from "@/components/main/site-hero";

const platforms = [
  {
    id: "wordpress",
    title: "WordPress",
    description:
      "Flexible CMS builds for content-led brands and service businesses.",
  },
  {
    id: "shopify",
    title: "Shopify",
    description:
      "Storefronts that balance presentation, speed, and easy management.",
  },
  {
    id: "uiux",
    title: "UI/UX",
    description:
      "Thoughtful interfaces and flows that make buying and browsing simple.",
  },
  {
    id: "wix",
    title: "WIX",
    description:
      "Practical site builds for teams that want quick publishing and control.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen w-full pb-20">
      <SiteHero
        eyebrow="Services / Web Development"
        title="Clean, responsive web builds that make a strong first impression"
        lead="The Evitamin pages talk about in-house design, publishing, custom web design, mobile-first thinking, SEO-ready layouts, and CMS choices. We mirror that structure here."
        primaryCta={{ label: "Contact the team", href: "/contact#enquiry" }}
        secondaryCta={{ label: "Explore services", href: "/services" }}
        asideLabel="Build approach"
        asideTitle="Design, code, content, and launch"
        asideText="The focus is on usable websites that look polished and support real business goals."
        bullets={[
          {
            title: "Responsive by default",
            description: "Layouts tuned for phone, tablet, and desktop screens.",
          },
          {
            title: "SEO aware",
            description: "Site structure and content that are easier to index and scan.",
          },
          {
            title: "Made in-house",
            description: "Planning, layout, and publishing handled as one workflow.",
          },
        ]}
      />

      <SectionBand
        eyebrow="Platform choices"
        title="Systems the page calls out"
        description="These anchors mirror the platform list from the source site and make each stack easy to jump to."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {platforms.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className="rounded-2xl border border-white/10 bg-[rgba(7,4,24,0.72)] p-5"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </SectionBand>

      <SectionBand
        eyebrow="What gets delivered"
        title="The practical deliverables"
        description="These are the parts the source content repeats: layout, publishing, custom design, mobile-first development, and conversion-friendly structure."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {[
            "Custom web design that fits the brand and the product mix.",
            "Responsive layouts and mobile-first structure for easier browsing.",
            "SEO-optimized information architecture and content placement.",
            "A web stack that can span CMS, frameworks, and custom builds.",
          ].map((point) => (
            <div
              key={point}
              className="rounded-2xl border border-white/10 bg-[rgba(7,4,24,0.72)] p-5 text-sm leading-7 text-gray-300"
            >
              {point}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/contact#enquiry"
            className="button-primary inline-flex rounded-lg px-5 py-3 text-sm font-medium text-white"
          >
            Start a project
          </Link>
        </div>
      </SectionBand>
    </main>
  );
}
