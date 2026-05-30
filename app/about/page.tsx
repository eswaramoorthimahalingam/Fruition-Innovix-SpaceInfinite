import { SectionBand } from "@/components/main/section-band";
import { SiteHero } from "@/components/main/site-hero";

const pillars = [
  {
    title: "Vision",
    description:
      "Leverage deep business understanding to create solutions that match client needs and strengthen brand presence.",
  },
  {
    title: "Values",
    description:
      "Deliver excellent service with transparency, commitment, and a clear focus on getting the job done well.",
  },
  {
    title: "Mission",
    description:
      "Keep upgrading technology and relationships while helping clients reach new markets with strong support.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full pb-20">
      <SiteHero
        eyebrow="About"
        title="Fruition Innovix, shaped around the same service story"
        lead="The reference site describes a business that blends e-commerce, digital marketing, and web development with a long-term, support-minded way of working. This page carries that story forward."
        primaryCta={{ label: "View services", href: "/services" }}
        secondaryCta={{ label: "Contact us", href: "/contact#enquiry" }}
        asideLabel="Since 2015"
        asideTitle="Built with time, experience, and practical delivery"
        asideText="The origin story focuses on startups, SMEs, and larger brands that need help with online growth, campaigns, and presentation."
      />

      <SectionBand
        eyebrow="Who we are"
        title="An e-commerce, digital marketing, and web development team"
        description="The source site centers on one straightforward idea: master the service line, understand the business, and build strategies that deliver."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[rgba(7,4,24,0.72)] p-5 text-sm leading-7 text-gray-300">
            We spend time understanding the business, the audience, and the
            key messages before shaping the plan. That helps the work feel
            more practical and easier to act on.
          </div>
          <div className="rounded-2xl border border-white/10 bg-[rgba(7,4,24,0.72)] p-5 text-sm leading-7 text-gray-300">
            The service mix covers website design and development, e-commerce
            marketing, social media marketing, SEO, PPC, SEM, content
            marketing, video advertising, and branding support.
          </div>
        </div>
      </SectionBand>

      <SectionBand
        eyebrow="Core principles"
        title="Vision, values, and mission"
        description="These three pillars mirror the structure of the source page and keep the about story focused."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-white/10 bg-[rgba(7,4,24,0.72)] p-5"
            >
              <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </SectionBand>

      <SectionBand
        eyebrow="Prompt support"
        title="A support team that tries to stay responsive"
        description="The source site makes a point of prompt support, so we keep that promise visible here too."
      >
        <div className="rounded-2xl border border-white/10 bg-[rgba(7,4,24,0.72)] p-5 text-sm leading-7 text-gray-300">
          Our team of professionals is set up to handle concerns quickly and
          keep the work moving. If you need a business conversation, start with
          the contact page and route it from there.
        </div>
      </SectionBand>
    </main>
  );
}
