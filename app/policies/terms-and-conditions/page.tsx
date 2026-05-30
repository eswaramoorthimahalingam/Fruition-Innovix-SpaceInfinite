import { SectionBand } from "@/components/main/section-band";
import { SiteHero } from "@/components/main/site-hero";

export default function TermsPage() {
  return (
    <main className="min-h-screen w-full pb-20">
      <SiteHero
        eyebrow="Policies / Terms"
        title="Terms and conditions"
        lead="A compact version of the terms page so the navbar branch has a real destination."
        primaryCta={{ label: "Back to policies", href: "/policies" }}
        secondaryCta={{ label: "Contact us", href: "/contact#enquiry" }}
      />

      <SectionBand title="The basics" description="">
        <div className="grid gap-5 lg:grid-cols-2">
          {[
            "Service scope, timelines, and deliverables are agreed before work begins.",
            "Any platform rules or account requirements need to be followed as part of the engagement.",
            "Requests, revisions, and approvals should be coordinated through the contact path.",
            "The page is intentionally brief so the site remains easy to scan.",
          ].map((point) => (
            <div
              key={point}
              className="rounded-2xl border border-white/10 bg-[rgba(7,4,24,0.72)] p-5 text-sm leading-7 text-gray-300"
            >
              {point}
            </div>
          ))}
        </div>
      </SectionBand>
    </main>
  );
}
