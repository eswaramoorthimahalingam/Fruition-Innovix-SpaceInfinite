import Link from "next/link";

import { SectionBand } from "@/components/main/section-band";
import { SiteHero } from "@/components/main/site-hero";

const marketplaces = [
  {
    id: "amazon",
    title: "Amazon",
    description:
      "Marketplace support for India and the USA with account, listing, and content readiness.",
  },
  {
    id: "flipkart",
    title: "Flipkart",
    description:
      "A core retail channel in the reference site with account and ad support.",
  },
  {
    id: "blinkit",
    title: "Blinkit",
    description:
      "Quick commerce support for fast-moving assortments and clear catalogue data.",
  },
  {
    id: "zepto",
    title: "Zepto",
    description:
      "Rapid commerce workflows that need speed, accuracy, and easy updates.",
  },
  {
    id: "instamart",
    title: "Insta Mart",
    description:
      "Platform support for grocery-led and convenience-driven product ranges.",
  },
  {
    id: "nykaa",
    title: "Nykaa",
    description:
      "Beauty and lifestyle marketplace coverage surfaced across the service menu.",
  },
  {
    id: "jiomart",
    title: "Jio Mart",
    description:
      "Retail and catalogue support for one of the referenced marketplace destinations.",
  },
  {
    id: "etsy",
    title: "Etsy",
    description:
      "Specialty marketplace support for product presentation and seller readiness.",
  },
  {
    id: "walmart",
    title: "Walmart",
    description:
      "Global marketplace support for catalogue, listing, and operational clarity.",
  },
];

export default function ECommercePage() {
  return (
    <main className="min-h-screen w-full pb-20">
      <SiteHero
        eyebrow="E-commerce"
        title="Marketplace coverage across Amazon, Flipkart, quick commerce, and specialty channels"
        lead="The navbar on the reference site makes e-commerce a major branch, so this page keeps the platform list visible and easy to jump through."
        primaryCta={{ label: "Open services", href: "/services" }}
        secondaryCta={{ label: "Contact the team", href: "/contact#enquiry" }}
        asideLabel="Platform map"
        asideTitle="A single place for the marketplace stack"
        asideText="Amazon, Flipkart, Blinkit, Zepto, Instamart, Nykaa, Jio Mart, Etsy, and Walmart all live here as part of the broader route map."
      />

      <SectionBand
        eyebrow="Marketplaces"
        title="The platforms surfaced in the menu"
        description="Each card is anchor-linked so the dropdown can jump straight to the right place."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {marketplaces.map((marketplace) => (
            <article
              key={marketplace.id}
              id={marketplace.id}
              className="rounded-2xl border border-white/10 bg-[rgba(7,4,24,0.72)] p-5"
            >
              <h3 className="text-lg font-semibold text-white">
                {marketplace.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                {marketplace.description}
              </p>

              {marketplace.id === "amazon" && (
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-200">
                  <Link
                    href="#amazon-india"
                    className="rounded-full border border-white/10 px-3 py-1"
                  >
                    Amazon India
                  </Link>
                  <Link
                    href="#amazon-usa"
                    className="rounded-full border border-white/10 px-3 py-1"
                  >
                    Amazon USA
                  </Link>
                </div>
              )}
            </article>
          ))}
        </div>
      </SectionBand>

      <SectionBand
        eyebrow="Amazon detail"
        title="Region anchors for Amazon"
        description="These small anchors let the nav drill into the Amazon split used in the original menu."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <article
            id="amazon-india"
            className="rounded-2xl border border-white/10 bg-[rgba(7,4,24,0.72)] p-5"
          >
            <h3 className="text-lg font-semibold text-white">Amazon India</h3>
            <p className="mt-3 text-sm leading-6 text-gray-300">
              Account and catalogue support for the domestic marketplace path.
            </p>
          </article>
          <article
            id="amazon-usa"
            className="rounded-2xl border border-white/10 bg-[rgba(7,4,24,0.72)] p-5"
          >
            <h3 className="text-lg font-semibold text-white">Amazon USA</h3>
            <p className="mt-3 text-sm leading-6 text-gray-300">
              Listing and operational support for the international marketplace path.
            </p>
          </article>
        </div>
      </SectionBand>

      <SectionBand
        eyebrow="Next step"
        title="Move from platform map to active support"
        description="If you need the whole marketplace stack managed rather than just mapped out, the contact page is the next stop."
      >
        <Link
          href="/contact#enquiry"
          className="button-primary inline-flex rounded-lg px-5 py-3 text-sm font-medium text-white"
        >
          Open business enquiry
        </Link>
      </SectionBand>
    </main>
  );
}
