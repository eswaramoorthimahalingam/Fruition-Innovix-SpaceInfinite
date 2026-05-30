import { SectionBand } from "@/components/main/section-band";
import { SiteHero } from "@/components/main/site-hero";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen w-full pb-20">
      <SiteHero
        eyebrow="Policies / Privacy Policy"
        title="Privacy policy"
        lead="A practical summary of how we would handle client information, enquiries, and site interactions."
        primaryCta={{ label: "Back to policies", href: "/policies" }}
        secondaryCta={{ label: "Contact us", href: "/contact#enquiry" }}
      />

      <SectionBand title="What this page covers" description="">
        <div className="grid gap-5 lg:grid-cols-2">
          {[
            "We only keep information needed to respond to an enquiry or deliver the service.",
            "Information is used for project communication, support, and operational follow-through.",
            "We do not present the content as a data-heavy platform; it stays focused on the service relationship.",
            "If you need something specific, start with the contact page and ask directly.",
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
