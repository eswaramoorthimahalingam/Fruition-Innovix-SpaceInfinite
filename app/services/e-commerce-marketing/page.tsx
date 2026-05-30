import Link from "next/link";

import { SectionBand } from "@/components/main/section-band";
import { SiteHero } from "@/components/main/site-hero";

const amazonServices = [
  {
    id: "amazon-account-management",
    title: "Account management",
    description: "Daily marketplace operations, catalogue hygiene, and seller support.",
  },
  {
    id: "amazon-advertising",
    title: "Advertising",
    description: "Sponsored ad planning, optimization, and performance tracking.",
  },
  {
    id: "amazon-account-reinstatement",
    title: "Account reinstatement",
    description: "Support for suspended accounts and issue resolution workflows.",
  },
  {
    id: "amazon-launch-registration",
    title: "Launch and registration",
    description: "New seller onboarding, brand setup, and marketplace registration.",
  },
  {
    id: "amazon-a-plus",
    title: "A Plus content",
    description: "Enhanced brand content that gives listings a stronger presentation.",
  },
  {
    id: "amazon-storefront",
    title: "Storefront creation",
    description: "Branded storefronts designed to organize products and tell the story.",
  },
  {
    id: "amazon-cataloging",
    title: "Cataloging and multi-portal listing",
    description: "Structured listings that keep inventory consistent across portals.",
  },
  {
    id: "amazon-brand-videos",
    title: "Brand and product videos",
    description: "Marketplace-ready video assets for product detail and discovery.",
  },
  {
    id: "amazon-product-listing",
    title: "Product listing",
    description: "Clear titles, attributes, and copy that help products surface well.",
  },
];

const flipkartServices = [
  {
    id: "flipkart-account-management",
    title: "Flipkart account management",
    description: "Seller operations, content upkeep, and support for the catalog.",
  },
  {
    id: "flipkart-advertising",
    title: "Flipkart advertising",
    description: "Campaign planning and ad optimization for marketplace performance.",
  },
  {
    id: "flipkart-rpd",
    title: "Flipkart RPD",
    description: "Operational support around retail-ready product data and listings.",
  },
  {
    id: "flipkart-launch-registration",
    title: "Launch and registration",
    description: "Helping new sellers get through the onboarding and registration path.",
  },
];

export default function ECommerceMarketingPage() {
  return (
    <main className="min-h-screen w-full pb-20">
      <SiteHero
        eyebrow="Services / E-commerce Marketing"
        title="Marketplace operations for Amazon, Flipkart, and beyond"
        lead="The Evitamin reference centers on the practical work that keeps online stores moving: account management, launch support, cataloging, storefronts, A+ content, ads, and product listings."
        primaryCta={{ label: "Talk to us", href: "/contact#enquiry" }}
        secondaryCta={{ label: "View all services", href: "/services" }}
        asideLabel="Focus areas"
        asideTitle="Built to run day-to-day marketplace work"
        asideText="This page mirrors the structure of the source site by splitting the marketplace stack into Amazon and Flipkart support."
        bullets={[
          {
            title: "Seller onboarding",
            description: "Launch and registration paths for new accounts.",
          },
          {
            title: "Catalog quality",
            description: "Product data, listing hygiene, and organized storefronts.",
          },
          {
            title: "Growth support",
            description: "Ad management, A Plus content, and product-specific videos.",
          },
        ]}
      />

      <SectionBand
        id="amazon"
        eyebrow="Amazon"
        title="Amazon account and catalog support"
        description="A single Amazon section pulls together the exact pieces mentioned across the reference site: account handling, ads, reinstatement, launch, enhanced content, storefronts, cataloging, and product listings."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {amazonServices.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="rounded-2xl border border-white/10 bg-[rgba(7,4,24,0.72)] p-5"
            >
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </SectionBand>

      <SectionBand
        id="flipkart"
        eyebrow="Flipkart"
        title="Flipkart seller support"
        description="The Flipkart branch stays focused on the same practical pieces the source site highlights: account management, advertising, RPD, and launch support."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {flipkartServices.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="rounded-2xl border border-white/10 bg-[rgba(7,4,24,0.72)] p-5"
            >
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </SectionBand>

      <SectionBand
        eyebrow="Need a hand"
        title="A direct path to the contact team"
        description="If you want the marketplace work handled end to end, jump straight to the enquiry section."
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
