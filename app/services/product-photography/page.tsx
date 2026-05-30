import Link from "next/link";

import { SectionBand } from "@/components/main/section-band";
import { SiteHero } from "@/components/main/site-hero";

const photographyPoints = [
  {
    title: "360-degree photography",
    description:
      "A product view that helps shoppers understand the item from more than one angle.",
  },
  {
    title: "Lifestyle photography",
    description:
      "Contextual images that show the product in use and help with aspiration.",
  },
  {
    title: "Still photography",
    description:
      "Clean catalog imagery for stores, marketplaces, and product detail pages.",
  },
  {
    title: "A+ and standalone store visuals",
    description:
      "Sharper graphics for richer product presentation on commerce channels.",
  },
];

export default function ProductPhotographyPage() {
  return (
    <main className="min-h-screen w-full pb-20">
      <SiteHero
        eyebrow="Products / Product Photography"
        title="Professional product imagery that helps products sell faster"
        lead="The source page is direct about the point of the service: strong pictures reduce doubt, improve visibility, and make products easier to buy."
        primaryCta={{ label: "Request visuals", href: "/contact#enquiry" }}
        secondaryCta={{ label: "Explore creative services", href: "/services/graphic-designing-videos" }}
        asideLabel="Why it matters"
        asideTitle="Better imagery, easier buying"
        asideText="When product visuals are clear and useful, customers understand the offer faster and the store feels more trustworthy."
      />

      <SectionBand
        eyebrow="Photography services"
        title="What the page highlights"
        description="This mirrors the structure of the Evitamin photography page with concrete product-shoot deliverables."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {photographyPoints.map((item) => (
            <article
              key={item.title}
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
        eyebrow="Outcome"
        title="A cleaner product presentation across channels"
        description="Use the shoot output for E-commerce, A+ content, and standalone stores with visuals that feel more trustworthy."
      >
        <Link
          href="/services/e-commerce-marketing"
          className="button-primary inline-flex rounded-lg px-5 py-3 text-sm font-medium text-white"
        >
          Add marketplace support
        </Link>
      </SectionBand>
    </main>
  );
}
