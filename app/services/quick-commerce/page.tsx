import Link from "next/link";

import { SectionBand } from "@/components/main/section-band";
import { SiteHero } from "@/components/main/site-hero";

const quickCommerce = [
  "Blinkit",
  "Zepto",
  "Instamart",
  "Jio Mart",
];

export default function QuickCommercePage() {
  return (
    <main className="min-h-screen w-full pb-20">
      <SiteHero
        eyebrow="Services / Quick Commerce"
        title="Marketplace support for fast-moving retail channels"
        lead="Quick commerce sits naturally beside the marketplace work in the reference site, so this page gathers the fast delivery channels together in one place."
        primaryCta={{ label: "Contact us", href: "/contact#enquiry" }}
        secondaryCta={{ label: "Go to e-commerce", href: "/e-commerce" }}
        asideLabel="Fast channels"
        asideTitle="Built for speed and accuracy"
        asideText="The operational basics are the same: good data, clear imagery, and listings that stay easy to manage."
      />

      <SectionBand
        eyebrow="Platforms"
        title="Channels referenced on the site"
        description="These cards map to the quick commerce and grocery style platforms the nav already includes."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {quickCommerce.map((item) => (
            <article
              key={item}
              className="rounded-2xl border border-white/10 bg-[rgba(7,4,24,0.72)] p-5 text-white"
            >
              {item}
            </article>
          ))}
        </div>
      </SectionBand>

      <SectionBand
        eyebrow="Support model"
        title="Operational help that fits the pace of the channel"
        description="The job here is to keep the product stack ready, the content clean, and the support responsive."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {[
            "Fast catalogue updates and accurate product data.",
            "Visual and copy support for quick-moving assortments.",
            "Channel-specific readiness for launch and ongoing management.",
            "A responsive team that can hand off to marketplace or creative work.",
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
            Start a quick commerce brief
          </Link>
        </div>
      </SectionBand>
    </main>
  );
}
