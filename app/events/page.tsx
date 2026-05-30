import { SectionBand } from "@/components/main/section-band";
import { SiteHero } from "@/components/main/site-hero";

export default function EventsPage() {
  return (
    <main className="min-h-screen w-full pb-20">
      <SiteHero
        eyebrow="Event"
        title="A simple hub for launches, collaborations, and announcements"
        lead="The source navigation includes an events entry, so this page keeps that path open and tied back to the service story."
        primaryCta={{ label: "Contact us", href: "/contact#enquiry" }}
        secondaryCta={{ label: "View partners", href: "/partners" }}
        asideLabel="Event work"
        asideTitle="For launches, sessions, and client moments"
        asideText="Use this page as a landing point for any event-related work or campaign announcements."
      />

      <SectionBand
        eyebrow="What fits here"
        title="Event-related work can stay close to the core services"
        description="When a brand has a launch or an activation, the same content, design, and marketing stack still applies."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {[
            "Launch announcements and promotional design.",
            "Event creatives, video, and social support.",
            "Campaign landing pages and enquiry routes.",
            "Coordination that links back to the main service pages.",
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
