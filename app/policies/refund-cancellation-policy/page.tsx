import { SectionBand } from "@/components/main/section-band";
import { SiteHero } from "@/components/main/site-hero";

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen w-full pb-20">
      <SiteHero
        eyebrow="Policies / Refund & Cancellation"
        title="Refund and cancellation policy"
        lead="A short policy page that keeps the route live without overcomplicating the site."
        primaryCta={{ label: "Back to policies", href: "/policies" }}
        secondaryCta={{ label: "Contact us", href: "/contact#enquiry" }}
      />

      <SectionBand title="Operational summary" description="">
        <div className="grid gap-5 lg:grid-cols-2">
          {[
            "Project refunds and cancellations should be discussed as early as possible.",
            "Any already-delivered work, third-party costs, or platform charges are handled separately.",
            "The final arrangement depends on the project scope and the stage of work.",
            "Use the enquiry page if you need to talk through a specific case.",
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
