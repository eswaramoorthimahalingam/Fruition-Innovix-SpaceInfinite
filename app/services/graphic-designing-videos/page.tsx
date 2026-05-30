import Link from "next/link";

import { SectionBand } from "@/components/main/section-band";
import { SiteHero } from "@/components/main/site-hero";

const creativeSections = [
  {
    id: "branding",
    title: "Branding",
    description: "Identity systems and presentation work that help a brand stay consistent.",
  },
  {
    id: "3d-modeling",
    title: "3D Modeling and Graphics",
    description: "Visual assets that can be used in campaigns, listings, and product storytelling.",
  },
  {
    id: "video-creation",
    title: "Video Creation and Editing",
    description: "Short-form and product videos built for digital channels.",
  },
  {
    id: "brand-product-videos",
    title: "Brand and Product Specific Videos",
    description: "Video work tailored to a specific product, launch, or channel.",
  },
];

export default function GraphicDesigningVideosPage() {
  return (
    <main className="min-h-screen w-full pb-20">
      <SiteHero
        eyebrow="Services / Graphic Designing & Videos"
        title="Creative production for brands that need to stand out quickly"
        lead="The reference content keeps this bucket broad and practical: branding, 3D modeling, video creation and editing, plus product-specific videos."
        primaryCta={{ label: "Talk to the team", href: "/contact#enquiry" }}
        secondaryCta={{ label: "See product photography", href: "/services/product-photography" }}
        asideLabel="Creative output"
        asideTitle="Graphics that support commerce"
        asideText="Visual work should not sit alone. It should help listings, ads, and websites do better."
        bullets={[
          {
            title: "Branding",
            description: "Visual identity systems for consistent communication.",
          },
          {
            title: "Motion",
            description: "Video edits and product content for campaigns and marketplaces.",
          },
          {
            title: "Product ready",
            description: "Designs that can travel across ads, listings, and landing pages.",
          },
        ]}
      />

      <SectionBand
        eyebrow="Creative modules"
        title="Each anchor mirrors a menu item"
        description="These cards line up with the dropdown structure so the page can be deep-linked directly from the navbar."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {creativeSections.map((item) => (
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
        eyebrow="Next step"
        title="Connect creative to a live commerce plan"
        description="Graphic and video work has more impact when it supports a store, campaign, or marketplace program."
      >
        <Link
          href="/services/e-commerce-marketing"
          className="rounded-lg border border-[rgba(245,179,45,0.38)] px-5 py-3 text-sm font-medium text-gray-200 transition hover:border-[rgba(255,216,106,0.55)] hover:text-white"
        >
          Pair with e-commerce marketing
        </Link>
      </SectionBand>
    </main>
  );
}
