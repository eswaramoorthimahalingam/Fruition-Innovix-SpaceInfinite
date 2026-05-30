import { SectionBand } from "@/components/main/section-band";
import { SiteHero } from "@/components/main/site-hero";

export default function CareerPage() {
  return (
    <main className="min-h-screen w-full pb-20">
      <SiteHero
        eyebrow="Career"
        title="A place to grow with the work"
        lead="The source site includes a careers link, so this page keeps it honest: it is a practical invitation to collaborate on commerce, marketing, web, and creative work."
        primaryCta={{ label: "Contact us", href: "/contact#enquiry" }}
        secondaryCta={{ label: "About the team", href: "/about" }}
        asideLabel="Open roles"
        asideTitle="Bring portfolio, curiosity, and follow-through"
        asideText="If you want to work on real-world brand growth, start a conversation through the contact page."
      />

      <SectionBand
        eyebrow="What we value"
        title="The way we like to work"
        description="This is a simple, honest careers page, not a long hiring funnel."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {[
            "Clear communication and reliable handoff.",
            "A bias toward useful work that supports clients.",
            "Comfort with web, commerce, and content workflows.",
            "A willingness to learn the platform details.",
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
