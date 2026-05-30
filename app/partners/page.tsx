import Link from "next/link";

import { SectionBand } from "@/components/main/section-band";
import { SiteHero } from "@/components/main/site-hero";

const partners = [
  {
    id: "amazon",
    title: "Partner for Amazon",
    description:
      "Account and marketplace collaboration for sellers that need a stronger Amazon presence.",
  },
  {
    id: "flipkart",
    title: "Flipkart Partner",
    description:
      "Partner support for the other major marketplace highlighted in the menu.",
  },
  {
    id: "shopify",
    title: "Shopify Partner",
    description:
      "Website and storefront support for brands that want direct commerce control.",
  },
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen w-full pb-20">
      <SiteHero
        eyebrow="Partners"
        title="Partner programs that sit beside the service lines"
        lead="The reference site calls out Amazon, Flipkart, and Shopify partner support, so we keep those relationships visible as their own page."
        primaryCta={{ label: "View services", href: "/services" }}
        secondaryCta={{ label: "Contact us", href: "/contact#enquiry" }}
        asideLabel="Partnerships"
        asideTitle="Programs that support the main channels"
        asideText="Partnership pages work best when they are easy to scan and easy to route into a real conversation."
      />

      <SectionBand
        eyebrow="Partner paths"
        title="Three programs worth highlighting"
        description="These cards mirror the partner menu items from the Evitamin-style navigation."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {partners.map((partner) => (
            <article
              key={partner.id}
              id={partner.id}
              className="rounded-2xl border border-white/10 bg-[rgba(7,4,24,0.72)] p-5"
            >
              <h3 className="text-lg font-semibold text-white">{partner.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                {partner.description}
              </p>
            </article>
          ))}
        </div>
      </SectionBand>

      <SectionBand
        eyebrow="Why it matters"
        title="Partnerships only help when they lead somewhere"
        description="Tie the partner programs back to actual support, listings, campaigns, and store builds."
      >
        <Link
          href="/contact#enquiry"
          className="button-primary inline-flex rounded-lg px-5 py-3 text-sm font-medium text-white"
        >
          Talk to the team
        </Link>
      </SectionBand>
    </main>
  );
}
