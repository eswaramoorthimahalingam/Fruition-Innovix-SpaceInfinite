import Link from "next/link";

import { SectionBand } from "@/components/main/section-band";
import { SiteHero } from "@/components/main/site-hero";

const serviceCards = [
  "Social Media Marketing",
  "PPC",
  "SEO",
  "SEM",
  "Content Marketing",
  "Video Advertising",
  "Display Ads",
];

const caseStudies = [
  "Mapl",
  "Perilla Home",
  "Chumbak",
  "Urban Platter",
  "Deckup",
  "Kimirica",
  "Duroflex",
];

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen w-full pb-20">
      <SiteHero
        eyebrow="Services / Digital Marketing"
        title="Marketing that speaks to the audience and delivers measurable lift"
        lead="The reference site frames digital marketing as a disciplined, changing practice: brand building, better profit, and optimized marketing across social, search, content, and paid media."
        primaryCta={{ label: "Book a meeting", href: "/contact#enquiry" }}
        secondaryCta={{ label: "Explore web development", href: "/services/web-development" }}
        asideLabel="Focus"
        asideTitle="Strategy + execution"
        asideText="A digital program works best when the message, the channel, and the landing page all support one another."
        bullets={[
          {
            title: "Audience-aware",
            description: "Campaigns are shaped around where the customer already is.",
          },
          {
            title: "Performance-minded",
            description: "The work is designed to improve reach, engagement, and outcomes.",
          },
          {
            title: "Creative-supported",
            description: "Graphics, video, and content support the media plan.",
          },
        ]}
      />

      <SectionBand
        eyebrow="Services we offer"
        title="The digital stack from the source site"
        description="These are the core media and content disciplines referenced in the Evitamin pages."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-[rgba(7,4,24,0.72)] p-5"
            >
              <h3 className="text-lg font-semibold text-white">{item}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                {item} support built to help a brand get seen, understood, and acted on.
              </p>
            </div>
          ))}
        </div>
      </SectionBand>

      <SectionBand
        eyebrow="Case studies"
        title="Projects that echo the reference page"
        description="The source page lists brands and portfolio projects as proof of the team's work across commerce and creative. We keep that cue visible here."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {caseStudies.map((name) => (
            <div
              key={name}
              className="rounded-2xl border border-white/10 bg-[rgba(7,4,24,0.72)] p-5 text-white"
            >
              {name}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/contact#enquiry"
            className="button-primary inline-flex rounded-lg px-5 py-3 text-sm font-medium text-white"
          >
            Book a meeting
          </Link>
        </div>
      </SectionBand>
    </main>
  );
}
